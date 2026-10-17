import fs from 'node:fs';
import path from 'node:path';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { generateSlug } from '../lib/slug.js';
import { fetchRepoTree, fetchFileContent } from '../sources/github-contents.js';
import { extractFromRegistry } from '../enrich/mcp/from-registry.js';
import { extractFromServerJson } from '../enrich/mcp/from-server-json.js';
import { extractFromPackageJson } from '../enrich/mcp/from-package-json.js';
import { extractFromPyproject } from '../enrich/mcp/from-pyproject.js';
import { extractFromReadme } from '../enrich/mcp/from-readme.js';
import { hasPlaceholder } from '../enrich/mcp/placeholder.js';
import { extractSkillSpec } from '../enrich/skills/from-skill-md.js';
import { extractToolSpec } from '../enrich/tools/from-repo.js';
import { cleanReadme, derivePrerequisitesAndKeys } from '../enrich/readme-cleaner.js';
import {
  renderMcpForAllClients,
  renderSkillForAllClients,
  type ClientConfigOutput,
  type ClientId,
} from '@web-db/renderers';
import type {
  CandidateDecision,
  LaunchSpec,
  SkillSpec,
  ToolSpec,
  ReadmeSource,
  LatestSignals,
} from '@web-db/schema';

export const CLIENT_PREFIX_REGEX =
  /^(?:codex|cursor|claude-code|claude|plugins|dsh|gemini|antigravity|windsurf|zed|skills|skill)-/i;

export function normalizeBaseSkillName(name: string, repoName: string): string {
  let base = name.trim();
  let prev = '';
  const escapedRepo = repoName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const repoRegex = new RegExp(`^${escapedRepo}-`, 'i');
  while (prev !== base) {
    prev = base;
    base = base.replace(CLIENT_PREFIX_REGEX, '');
    base = base.replace(repoRegex, '');
  }
  return base.trim() || name;
}

export function detectClientsFromSubpath(subpath: string): string[] {
  const clients: string[] = [];
  const lower = subpath.toLowerCase();
  if (lower.includes('claude')) clients.push('claude-code');
  if (lower.includes('codex')) clients.push('codex');
  if (lower.includes('cursor')) clients.push('cursor');
  if (lower.includes('antigravity') || lower.includes('gemini')) clients.push('antigravity');
  if (lower.includes('windsurf')) clients.push('windsurf');
  if (clients.length === 0) {
    return ['claude-code', 'codex', 'antigravity'];
  }
  return clients;
}

export interface EnrichedEntry {
  decision: CandidateDecision;
  launchSpec?: LaunchSpec;
  skillSpec?: SkillSpec;
  toolSpec?: ToolSpec;
  renderedConfigs: Record<ClientId, ClientConfigOutput>;
  readmeBody?: string;
  readmeSource?: ReadmeSource;
  summary?: string;
  language?: string;
  needsKeys?: boolean;
  prerequisites?: string[];
  readmeFetchFailed?: boolean;
  trendMetrics?: Partial<LatestSignals>;
}

export interface EnrichmentStats {
  totalMcp: number;
  totalSkills: number;
  totalTools: number;
  confidenceCounts: {
    registry: number;
    manifest: number;
    readme: number;
    none: number;
  };
  highConfidencePct: number; // (registry + manifest) / totalMcp
  readmeStats: {
    withBody: number;
    truncated: number;
    nonEnglish: number;
    failed: number;
  };
}

export async function runStage7Enrich(
  decisions: CandidateDecision[]
): Promise<{ enrichedEntries: EnrichedEntry[]; stats: EnrichmentStats }> {
  logger.stage(5, 'Stage 7: Enrich Launch Specs, READMEs & Client Config Renderers');
  const selected = decisions.filter((d) => d.selected);
  logger.info(`Enriching ${selected.length} selected catalog entries...`);

  const enrichedEntries: EnrichedEntry[] = [];
  const slugAliases: Record<string, string> = {};
  const confidenceCounts = {
    registry: 0,
    manifest: 0,
    readme: 0,
    none: 0,
  };

  let totalMcp = 0;
  let totalSkills = 0;
  let totalTools = 0;
  let withBody = 0;
  let truncatedCount = 0;
  let nonEnglishCount = 0;
  let failedCount = 0;

  const chunkSize = 10;
  let processedCount = 0;

  for (let i = 0; i < selected.length; i += chunkSize) {
    const chunk = selected.slice(i, i + chunkSize);

    await Promise.all(
      chunk.map(async (d) => {
        const { owner, name, defaultBranch } = d.repo;
        const { paths } = await fetchRepoTree(owner, name, defaultBranch);

        if (d.layer2?.detectedType === 'mcp_server') {
          totalMcp++;
          let spec: LaunchSpec | null = null;

          // 1. Try Registry
          spec = await extractFromRegistry(owner, name);

          // 2. Try server.json manifest
          if (!spec) {
            spec = await extractFromServerJson(owner, name, paths);
          }

          // 3. Try package.json manifest
          if (!spec) {
            spec = await extractFromPackageJson(owner, name, paths);
          }

          // 4. Try pyproject.toml manifest
          if (!spec) {
            spec = await extractFromPyproject(owner, name, paths);
          }

          // 5. Try README extraction
          if (!spec) {
            spec = await extractFromReadme(owner, name, paths);
          }

          // Fallback
          if (!spec) {
            spec = {
              transport: 'stdio',
              args: [],
              env_vars: [],
              confidence: 'none',
            };
          }

          if (
            hasPlaceholder(spec.remote_url) ||
            hasPlaceholder(spec.command) ||
            spec.args?.some((a) => hasPlaceholder(a))
          ) {
            spec.confidence = 'none';
            spec.remote_url = undefined;
            spec.command = undefined;
            spec.args = [];
          }

          confidenceCounts[spec.confidence]++;

          const renderedConfigs = renderMcpForAllClients(name, spec);

          // Fetch and clean README for MCP
          const subpath = d.layer2?.subpaths?.[0] || '';
          let readmePath = '';
          if (subpath) {
            const subPrefix = subpath.endsWith('/') ? subpath.toLowerCase() : `${subpath.toLowerCase()}/`;
            const subMatch = paths.find((p) => p.toLowerCase() === `${subPrefix}readme.md`);
            if (subMatch) readmePath = subMatch;
          }
          if (!readmePath) {
            const rootMatch = paths.find((p) => p.toLowerCase() === 'readme.md');
            if (rootMatch) readmePath = rootMatch;
          }

          let readmeBody = '';
          let summary = '';
          let language = 'en';
          let truncated = false;
          let readmeFetchFailed = false;

          if (readmePath) {
            const rawReadme = await fetchFileContent(owner, name, readmePath);
            if (rawReadme) {
              const cleanRes = cleanReadme(rawReadme, {
                owner,
                repo: name,
                branch: defaultBranch || 'main',
                subpath,
              });
              readmeBody = cleanRes.cleaned;
              summary = cleanRes.summary;
              language = cleanRes.language;
              truncated = cleanRes.truncated;
              withBody++;
              if (truncated) truncatedCount++;
              if (language !== 'en') nonEnglishCount++;
            } else {
              readmeFetchFailed = true;
              failedCount++;
            }
          } else {
            readmeFetchFailed = true;
            failedCount++;
          }

          const { needsKeys, prerequisites } = derivePrerequisitesAndKeys(spec);

          const readmeSource: ReadmeSource | undefined = readmePath
            ? {
                repo: d.repo.fullName,
                path: readmePath,
                branch: defaultBranch || 'main',
                fetched_at: new Date().toISOString(),
                truncated,
              }
            : undefined;

          enrichedEntries.push({
            decision: d,
            launchSpec: spec,
            renderedConfigs,
            readmeBody,
            readmeSource,
            summary: summary || d.repo.description || '',
            language,
            needsKeys,
            prerequisites,
            readmeFetchFailed,
          });
        } else if (d.layer2?.detectedType === 'agent_skill') {
          const subpaths = d.layer2?.subpaths?.length ? d.layer2.subpaths : [''];
          const packSlug = `${owner}-${name}`.toLowerCase().replace(/[^a-z0-9_-]/g, '-');

          interface ExtractedCandidate {
            subpath: string;
            skillSpec: SkillSpec;
            rawBody: string;
            baseName: string;
            clients: Set<string>;
            variantSlugs: string[];
          }

          const candidateSkills: ExtractedCandidate[] = [];
          const seenBaseSkills = new Map<string, ExtractedCandidate>();

          for (const subpath of subpaths) {
            const { spec: skillSpec, rawBody } = await extractSkillSpec(owner, name, subpath, paths);
            const variantSlug = generateSlug(owner, name, subpath);
            const baseName = normalizeBaseSkillName(skillSpec.skill_name, name);
            const detectedClients = detectClientsFromSubpath(subpath);

            if (seenBaseSkills.has(baseName)) {
              // Deduplicate across client folders (FIX-1, SG-4)
              const existing = seenBaseSkills.get(baseName)!;
              detectedClients.forEach((c) => existing.clients.add(c));
              existing.variantSlugs.push(variantSlug);
              continue;
            }

            const candidate: ExtractedCandidate = {
              subpath,
              skillSpec,
              rawBody,
              baseName,
              clients: new Set(detectedClients),
              variantSlugs: [variantSlug],
            };
            seenBaseSkills.set(baseName, candidate);
            candidateSkills.push(candidate);
          }

          const totalInPack = candidateSkills.length;
          for (let idx = 0; idx < candidateSkills.length; idx++) {
            const item = candidateSkills[idx];
            const canonicalSlug = generateSlug(owner, name, item.subpath);

            // Register alias mappings for all deduplicated client variants (SG-4)
            for (const vSlug of item.variantSlugs) {
              if (vSlug !== canonicalSlug) {
                slugAliases[vSlug] = canonicalSlug;
              }
            }

            totalSkills++;

            item.skillSpec.skill_name = item.baseName;
            item.skillSpec.pack_slug = packSlug;
            item.skillSpec.pack_total_skills = totalInPack;
            item.skillSpec.is_pack_primary = idx === 0;
            item.skillSpec.clients = Array.from(item.clients);

            const renderedConfigs = renderSkillForAllClients(item.baseName, item.skillSpec);

            // Clean SKILL.md body
            const skillMdPath = item.subpath ? `${item.subpath}/SKILL.md` : 'SKILL.md';
            let readmeBody = '';
            let summary = '';
            let language = 'en';
            let truncated = false;
            let readmeFetchFailed = false;

            if (item.rawBody) {
              const cleanRes = cleanReadme(item.rawBody, {
                owner,
                repo: name,
                branch: defaultBranch || 'main',
                subpath: item.subpath,
              });
              readmeBody = cleanRes.cleaned;
              summary = cleanRes.summary || item.skillSpec.description;
              language = cleanRes.language;
              truncated = cleanRes.truncated;
              withBody++;
              if (truncated) truncatedCount++;
              if (language !== 'en') nonEnglishCount++;
            } else {
              readmeFetchFailed = true;
              failedCount++;
            }

            const readmeSource: ReadmeSource = {
              repo: d.repo.fullName,
              path: skillMdPath,
              branch: defaultBranch || 'main',
              fetched_at: new Date().toISOString(),
              truncated,
            };

            enrichedEntries.push({
              decision: d,
              skillSpec: item.skillSpec,
              renderedConfigs,
              readmeBody,
              readmeSource,
              summary: summary || item.skillSpec.description,
              language,
              needsKeys: false,
              prerequisites: [],
              readmeFetchFailed,
            });
          }
        } else if (d.layer2?.detectedType === 'agent_tool') {
          totalTools++;
          const toolSpec = await extractToolSpec(owner, name, paths, d.repo);

          // Fetch and clean README for Agent Tool
          let readmePath = '';
          const rootMatch = paths.find((p) => p.toLowerCase() === 'readme.md');
          if (rootMatch) readmePath = rootMatch;

          let readmeBody = '';
          let summary = '';
          let language = 'en';
          let truncated = false;
          let readmeFetchFailed = false;

          if (readmePath) {
            const rawReadme = await fetchFileContent(owner, name, readmePath);
            if (rawReadme) {
              const cleanRes = cleanReadme(rawReadme, {
                owner,
                repo: name,
                branch: defaultBranch || 'main',
                subpath: '',
              });
              readmeBody = cleanRes.cleaned;
              summary = cleanRes.summary || d.repo.description || '';
              language = cleanRes.language;
              truncated = cleanRes.truncated;
              withBody++;
              if (truncated) truncatedCount++;
              if (language !== 'en') nonEnglishCount++;
            } else {
              readmeFetchFailed = true;
              failedCount++;
            }
          } else {
            readmeFetchFailed = true;
            failedCount++;
          }

          const readmeSource: ReadmeSource | undefined = readmePath
            ? {
                repo: d.repo.fullName,
                path: readmePath,
                branch: defaultBranch || 'main',
                fetched_at: new Date().toISOString(),
                truncated,
              }
            : undefined;

          let renderedConfigs: Record<ClientId, ClientConfigOutput>;
          if (toolSpec.has_mcp_support && toolSpec.mcp_launch) {
            renderedConfigs = renderMcpForAllClients(name, toolSpec.mcp_launch);
          } else {
            const installCmd = toolSpec.install_command || `git clone https://github.com/${owner}/${name}.git`;
            renderedConfigs = {
              'claude-code': {
                clientId: 'claude-code',
                clientName: 'Claude Code',
                mcpCommand: installCmd,
              },
              codex: {
                clientId: 'codex',
                clientName: 'OpenAI Codex',
                mcpCommand: installCmd,
              },
              antigravity: {
                clientId: 'antigravity',
                clientName: 'Google Antigravity',
                mcpCommand: installCmd,
              },
            };
          }

          enrichedEntries.push({
            decision: d,
            toolSpec,
            renderedConfigs,
            readmeBody,
            readmeSource,
            summary: summary || d.repo.description || '',
            language,
            needsKeys: false,
            prerequisites: toolSpec.runtime !== 'unknown' ? [toolSpec.runtime] : [],
            readmeFetchFailed,
          });
        }
      })
    );

    processedCount += chunk.length;
    if (processedCount % 30 === 0 || processedCount >= selected.length) {
      logger.info(`[Enrichment Progress: ${processedCount}/${selected.length}] Enriched catalog entries...`);
    }
  }

  // SG-4: Persist slug alias registry to data/state/slug-aliases.json
  if (Object.keys(slugAliases).length > 0) {
    const aliasFilePath = path.join(config.rootDir, 'data/state/slug-aliases.json');
    let existingAliases: Record<string, string> = {};
    if (fs.existsSync(aliasFilePath)) {
      try {
        existingAliases = JSON.parse(fs.readFileSync(aliasFilePath, 'utf8'));
      } catch {
        // ignore parse error
      }
    }
    const mergedAliases = { ...existingAliases, ...slugAliases };
    fs.mkdirSync(path.dirname(aliasFilePath), { recursive: true });
    fs.writeFileSync(aliasFilePath, JSON.stringify(mergedAliases, null, 2), 'utf8');
    logger.info(`[SG-4] Persisted ${Object.keys(mergedAliases).length} slug aliases to data/state/slug-aliases.json.`);
  }

  const highConfidenceCount = confidenceCounts.registry + confidenceCounts.manifest;
  const highConfidencePct = totalMcp > 0 ? (highConfidenceCount / totalMcp) * 100 : 0;

  logger.info(
    `Stage 7 Complete: Enriched ${totalMcp} MCP servers (High Confidence: ${highConfidencePct.toFixed(1)}%), ${totalSkills} Skills & ${totalTools} Tools.`
  );
  logger.info(
    `Confidence Breakdown: Registry ${confidenceCounts.registry}, Manifest ${confidenceCounts.manifest}, README ${confidenceCounts.readme}, None ${confidenceCounts.none}`
  );
  logger.info(
    `README Collection: ${withBody} with body, ${truncatedCount} truncated (>60KB), ${nonEnglishCount} non-English, ${failedCount} fetch issues`
  );

  return {
    enrichedEntries,
    stats: {
      totalMcp,
      totalSkills,
      totalTools,
      confidenceCounts,
      highConfidencePct,
      readmeStats: {
        withBody,
        truncated: truncatedCount,
        nonEnglish: nonEnglishCount,
        failed: failedCount,
      },
    },
  };
}
