import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { searchRepositories } from '../sources/github-search.js';
import { searchSkillCodeFiles } from '../sources/github-code-search.js';
import { fetchMcpRegistry } from '../sources/mcp-registry.js';
import type { CandidateRepo } from '@web-db/schema';

export async function runStage1Discover(): Promise<CandidateRepo[]> {
  logger.stage(1, 'Discover Candidates across GitHub & Registries');
  const candidatesMap = new Map<string, CandidateRepo>();

  // 1. MCP Topic Searches
  for (const q of config.queries.mcp_queries) {
    const repos = await searchRepositories(q, 3);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 2. Skill Topic Searches
  for (const q of config.queries.skill_queries) {
    const repos = await searchRepositories(q, 3);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 3. SKILL.md Code Searches
  for (const q of config.queries.code_queries) {
    const repos = await searchSkillCodeFiles(q, 2);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 4. Official MCP Registry
  const registryServers = await fetchMcpRegistry();
  logger.info(`Discovered ${registryServers.length} servers from official MCP Registry`);
  // Registry servers that have GitHub repo URLs are already tracked or can be linked

  const total = Array.from(candidatesMap.values());
  logger.info(`Stage 1 Complete: Discovered ${total.length} unique candidate repositories.`);
  return total;
}
