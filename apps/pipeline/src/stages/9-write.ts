import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { generateSlug } from '../lib/slug.js';
import type { EnrichedEntry } from './7-enrich.js';
import type { McpEntry, SkillEntry } from '@web-db/schema';

function assignCategory(name: string, desc: string, topics: string[], skillName?: string): string[] {
  const text = `${name} ${desc} ${topics.join(' ')} ${skillName || ''}`.toLowerCase();

  // 1. Databases & Storage
  if (/\b(database|postgres|postgresql|mysql|sqlite|redis|sql|supabase|qdrant|chroma|milvus|mongodb|neo4j|dynamodb|elasticsearch|vector|orm|prisma|convex|faiss|lance|knowledge-graph|graph-rag|s3|minio|storage)\b/i.test(text)) {
    return ['databases'];
  }

  // 2. Browser & Web Scraping (strict: no bare 'web' or 'http')
  if (/\b(browser|playwright|puppeteer|selenium|headless|scrape|scraper|scraping|crawl|crawler|crawling|spider|web-search|web-extract)\b/i.test(text)) {
    return ['browser-automation'];
  }

  // 3. Security, Auth, Identity
  if (/\b(security|pentest|cve|vulnerability|vulnerabilities|auth|authentication|oauth|crypto|cryptography|audit|sandbox|credential|credentials|secret|secrets|token|firewall|ssl|tls|cert)\b/i.test(text)) {
    return ['security'];
  }

  // 4. Productivity, Communication & Workflows
  if (/\b(slack|discord|telegram|imessage|email|gmail|notion|calendar|jira|linear|trello|todoist|airtable|sheets|office365|google-workspace|workspace|productivity|reminder|task|meeting|notes|todo|project-management|workflow|n8n|zapier|crm|marketing|sales|finance|social|post|resume|pdf|document)\b/i.test(text)) {
    return ['productivity'];
  }

  // 5. Developer Tools & Code Utilities (strict: no bare 'tool' or 'dev')
  if (/\b(git|github|gitlab|terminal|shell|cli|docker|kubernetes|k8s|profiler|debugger|linter|ci-cd|compiler|cargo|npm|pnpm|pip|editor|ide|filesystem|linux|macos|bash|zsh|powershell|ast|ast-grep|code-analysis|documentation|code-search|codebase|sdk|devtools|coding|programming)\b/i.test(text)) {
    return ['dev-tools'];
  }

  // 6. AI Frameworks, Autonomous Research & Orchestration (strict: no bare 'agent')
  if (/\b(langchain|langgraph|autogen|crewai|llamaindex|semantic-kernel|dify|open-webui|swarm|multi-player|multi-agent|orchestrat|rag|inference|model-serving|ollama|vllm|evals|benchmark|copilot|research|experiment|prompt|agent|llm)\b/i.test(text)) {
    return ['ai-frameworks'];
  }

  return ['other'];
}

export async function runStage9Write(
  enrichedEntries: EnrichedEntry[],
  weekStr: string
): Promise<{ writtenMcp: number; writtenSkills: number }> {
  logger.stage(6, 'Stage 9: Write Content Entries & Signal Snapshots to Git');

  const contentDir = path.join(config.rootDir, 'content/entries');
  const mcpDir = path.join(contentDir, 'mcp');
  const skillsDir = path.join(contentDir, 'skills');
  const signalsDir = path.join(config.rootDir, 'data/signals', weekStr.slice(0, 4));

  fs.mkdirSync(mcpDir, { recursive: true });
  fs.mkdirSync(skillsDir, { recursive: true });
  fs.mkdirSync(signalsDir, { recursive: true });

  let writtenMcp = 0;
  let writtenSkills = 0;
  const signalSnapshots: Record<string, unknown> = {};

  const nowIso = new Date().toISOString();

  const writtenMcpSlugs = new Set<string>();
  const writtenSkillSlugs = new Set<string>();

  for (const item of enrichedEntries) {
    const { repo, layer2, layer3, selectionReason } = item.decision;
    const isOfficialVendor = selectionReason === 'official_vendor';
    const isMcp = layer2?.detectedType === 'mcp_server';
    const subpath = isMcp ? '' : item.skillSpec?.folder_path || layer2?.subpaths?.[0] || '';
    const slug = generateSlug(repo.owner, repo.name, isMcp ? undefined : subpath);
    const categories = assignCategory(
      repo.name,
      repo.description || '',
      repo.topics,
      item.skillSpec?.skill_name
    );

    const targetDir = isMcp ? mcpDir : skillsDir;
    const filePath = path.join(targetDir, `${slug}.md`);

    // Cross-run memory: preserve original first_seen date if already exists on disk
    let firstSeen = nowIso.slice(0, 10);
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const match = raw.match(/first_seen:\s*['"]?([0-9T:.-]+)['"]?/);
        if (match && match[1]) {
          firstSeen = match[1];
        }
      } catch {
        // ignore read error
      }
    }

    const title = isMcp ? repo.name : item.skillSpec?.skill_name || repo.name;
    const tagline = isMcp
      ? (repo.description || '').slice(0, 150)
      : (item.skillSpec?.description || repo.description || '').slice(0, 150);

    // B7: Handle body and failure fallback retention
    let body = item.readmeBody || '';
    let effectiveReadmeSource = item.readmeSource;

    if (!body && fs.existsSync(filePath)) {
      try {
        const existingRaw = fs.readFileSync(filePath, 'utf8');
        const parts = existingRaw.split(/^---\r?\n/m);
        if (parts.length >= 3) {
          const existingBody = parts.slice(2).join('---').trim();
          if (existingBody && existingBody !== (repo.description || '') && existingBody !== (item.skillSpec?.description || '')) {
            body = existingBody;
            const parsed = yaml.parse(parts[1]);
            if (parsed?.readme_source && !effectiveReadmeSource) {
              effectiveReadmeSource = parsed.readme_source;
            }
            logger.warn(`Retained existing README for ${slug} due to missing fresh fetch.`);
          }
        }
      } catch {
        // ignore read error
      }
    }

    if (!body) {
      body = isMcp ? (repo.description || '') : (item.skillSpec?.description || repo.description || '');
    }

    const baseData = {
      slug,
      name: title,
      tagline,
      summary: item.summary || tagline,
      categories,
      status: 'active' as const,
      quality_percentile: layer3?.percentileRank || 0,
      selection_reason: selectionReason || 'quality_percentile',
      first_seen: firstSeen,
      last_updated: nowIso,
      source: {
        kind: 'github_repo' as const,
        repo: repo.fullName,
        subpath: subpath || undefined,
        homepage: undefined,
        official_vendor: isOfficialVendor,
        license: repo.license || undefined,
      },
      signals: {
        stars: repo.stars,
        last_commit: repo.pushedAt,
        weekly_downloads: undefined,
        contributors: undefined,
      },
      language: item.language || 'en',
      needs_keys: item.needsKeys || false,
      prerequisites: item.prerequisites || [],
      readme_source: effectiveReadmeSource,
    };

    signalSnapshots[slug] = {
      stars: repo.stars,
      forks: repo.forks,
      watchers: repo.watchers,
      pushedAt: repo.pushedAt,
      compositeScore: layer3?.compositeScore,
      percentile: layer3?.percentileRank,
    };

    if (isMcp && item.launchSpec) {
      const entry: McpEntry = {
        ...baseData,
        type: 'mcp_server',
        launch: item.launchSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${body}\n`;
      fs.writeFileSync(filePath, mdContent, 'utf8');
      writtenMcp++;
      writtenMcpSlugs.add(`${slug}.md`);
    } else if (!isMcp && item.skillSpec) {
      const entry: SkillEntry = {
        ...baseData,
        type: 'agent_skill',
        skill: item.skillSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${body}\n`;
      fs.writeFileSync(filePath, mdContent, 'utf8');
      writtenSkills++;
      writtenSkillSlugs.add(`${slug}.md`);
    }
  }

  // Pruning: remove stale entries that no longer qualify
  let prunedCount = 0;
  for (const file of fs.readdirSync(mcpDir)) {
    if (file.endsWith('.md') && !writtenMcpSlugs.has(file)) {
      fs.unlinkSync(path.join(mcpDir, file));
      prunedCount++;
    }
  }
  for (const file of fs.readdirSync(skillsDir)) {
    if (file.endsWith('.md') && !writtenSkillSlugs.has(file)) {
      fs.unlinkSync(path.join(skillsDir, file));
      prunedCount++;
    }
  }
  if (prunedCount > 0) {
    logger.info(`Pruned ${prunedCount} stale catalog files that no longer qualify.`);
  }

  // Write weekly signals snapshot
  const signalFile = path.join(signalsDir, `${weekStr}.json`);
  fs.writeFileSync(signalFile, JSON.stringify(signalSnapshots, null, 2), 'utf8');

  // Persist cross-run state (Task A5, D8)
  const stateDir = path.join(config.rootDir, 'data/state');
  fs.mkdirSync(stateDir, { recursive: true });
  const stateFile = path.join(stateDir, 'catalog-state.json');
  fs.writeFileSync(
    stateFile,
    JSON.stringify(
      {
        refreshed_at: nowIso,
        week: weekStr,
        total_mcp: writtenMcp,
        total_skills: writtenSkills,
        total_entries: writtenMcp + writtenSkills,
      },
      null,
      2
    ),
    'utf8'
  );

  logger.info(
    `Stage 9 Complete: Written ${writtenMcp} MCP entries and ${writtenSkills} Skill entries to content/entries/.`
  );
  logger.info(`Saved signal snapshots to ${signalFile}`);
  logger.info(`Saved catalog state to ${stateFile}`);

  return { writtenMcp, writtenSkills };
}
