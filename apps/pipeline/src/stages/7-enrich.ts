import { logger } from '../lib/logger.js';
import { fetchRepoTree } from '../sources/github-contents.js';
import { extractFromRegistry } from '../enrich/mcp/from-registry.js';
import { extractFromServerJson } from '../enrich/mcp/from-server-json.js';
import { extractFromPackageJson } from '../enrich/mcp/from-package-json.js';
import { extractFromPyproject } from '../enrich/mcp/from-pyproject.js';
import { extractFromReadme } from '../enrich/mcp/from-readme.js';
import { extractSkillSpec } from '../enrich/skills/from-skill-md.js';
import {
  renderMcpForAllClients,
  renderSkillForAllClients,
  type ClientConfigOutput,
  type ClientId,
} from '@web-db/renderers';
import type { CandidateDecision, LaunchSpec, SkillSpec } from '@web-db/schema';

export interface EnrichedEntry {
  decision: CandidateDecision;
  launchSpec?: LaunchSpec;
  skillSpec?: SkillSpec;
  renderedConfigs: Record<ClientId, ClientConfigOutput>;
}

export interface EnrichmentStats {
  totalMcp: number;
  totalSkills: number;
  confidenceCounts: {
    registry: number;
    manifest: number;
    readme: number;
    none: number;
  };
  highConfidencePct: number; // (registry + manifest) / totalMcp
}

export async function runStage7Enrich(
  decisions: CandidateDecision[]
): Promise<{ enrichedEntries: EnrichedEntry[]; stats: EnrichmentStats }> {
  logger.stage(5, 'Stage 7: Enrich Launch Specs & Client Config Renderers');
  const selected = decisions.filter((d) => d.selected);
  logger.info(`Enriching ${selected.length} selected catalog entries...`);

  const enrichedEntries: EnrichedEntry[] = [];
  const confidenceCounts = {
    registry: 0,
    manifest: 0,
    readme: 0,
    none: 0,
  };

  let totalMcp = 0;
  let totalSkills = 0;

  for (const d of selected) {
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

      // 3. Try pyproject.toml manifest
      if (!spec) {
        spec = await extractFromPyproject(owner, name, paths);
      }

      // 4. Try README extraction
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

      confidenceCounts[spec.confidence]++;

      const renderedConfigs = renderMcpForAllClients(name, spec);
      enrichedEntries.push({
        decision: d,
        launchSpec: spec,
        renderedConfigs,
      });
    } else if (d.layer2?.detectedType === 'agent_skill') {
      const subpaths = d.layer2?.subpaths?.length ? d.layer2.subpaths : [''];
      for (const subpath of subpaths) {
        totalSkills++;
        const skillSpec = await extractSkillSpec(owner, name, subpath, paths);
        const renderedConfigs = renderSkillForAllClients(skillSpec.skill_name, skillSpec);

        enrichedEntries.push({
          decision: d,
          skillSpec,
          renderedConfigs,
        });
      }
    }
  }

  const highConfidenceCount = confidenceCounts.registry + confidenceCounts.manifest;
  const highConfidencePct = totalMcp > 0 ? (highConfidenceCount / totalMcp) * 100 : 0;

  logger.info(
    `Stage 7 Complete: Enriched ${totalMcp} MCP servers (High Confidence: ${highConfidencePct.toFixed(1)}%) & ${totalSkills} Skills.`
  );
  logger.info(
    `Confidence Breakdown: Registry ${confidenceCounts.registry}, Manifest ${confidenceCounts.manifest}, README ${confidenceCounts.readme}, None ${confidenceCounts.none}`
  );

  return {
    enrichedEntries,
    stats: {
      totalMcp,
      totalSkills,
      confidenceCounts,
      highConfidencePct,
    },
  };
}
