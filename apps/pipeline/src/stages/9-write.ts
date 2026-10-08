import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { generateSlug } from '../lib/slug.js';
import type { EnrichedEntry } from './7-enrich.js';
import type { McpEntry, SkillEntry } from '@web-db/schema';

function assignCategory(name: string, desc: string, topics: string[]): string[] {
  const text = `${name} ${desc} ${topics.join(' ')}`.toLowerCase();
  const categories: string[] = [];

  if (/database|postgres|mysql|sqlite|redis|sql|supabase|qdrant|chroma|milvus|vector/i.test(text)) {
    categories.push('databases');
  }
  if (/browser|crawl|scrape|web|playwright|puppeteer|selenium|http/i.test(text)) {
    categories.push('browser-automation');
  }
  if (/security|pentest|cve|vulnerability|auth|crypto|audit/i.test(text)) {
    categories.push('security');
  }
  if (/agent|crew|autogen|orchestrat|swarm|langchain|llama/i.test(text)) {
    categories.push('ai-frameworks');
  }
  if (/tool|git|cli|dev|terminal|docker|kubernetes|debug|monitor/i.test(text)) {
    categories.push('dev-tools');
  }
  if (/notion|slack|calendar|email|office|workflow|job|search/i.test(text)) {
    categories.push('productivity');
  }

  if (categories.length === 0) {
    categories.push('other');
  }

  return categories;
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

  for (const item of enrichedEntries) {
    const { repo, layer2, layer3, selectionReason } = item.decision;
    const isOfficialVendor = selectionReason === 'official_vendor';
    const isMcp = layer2?.detectedType === 'mcp_server';
    const subpath = layer2?.subpaths?.[0] || '';
    const slug = generateSlug(repo.owner, repo.name, isMcp ? undefined : subpath);
    const categories = assignCategory(repo.name, repo.description || '', repo.topics);

    const baseData = {
      slug,
      name: repo.name,
      tagline: (repo.description || '').slice(0, 150),
      categories,
      status: 'active' as const,
      quality_percentile: layer3?.percentileRank || 0,
      selection_reason: selectionReason || 'quality_percentile',
      first_seen: repo.createdAt,
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

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${repo.description || ''}\n`;
      fs.writeFileSync(path.join(mcpDir, `${slug}.md`), mdContent, 'utf8');
      writtenMcp++;
    } else if (!isMcp && item.skillSpec) {
      const entry: SkillEntry = {
        ...baseData,
        type: 'agent_skill',
        skill: item.skillSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${item.skillSpec.description}\n`;
      fs.writeFileSync(path.join(skillsDir, `${slug}.md`), mdContent, 'utf8');
      writtenSkills++;
    }
  }

  // Write weekly signals snapshot
  const signalFile = path.join(signalsDir, `${weekStr}.json`);
  fs.writeFileSync(signalFile, JSON.stringify(signalSnapshots, null, 2), 'utf8');

  logger.info(
    `Stage 9 Complete: Written ${writtenMcp} MCP entries and ${writtenSkills} Skill entries to content/entries/.`
  );
  logger.info(`Saved signal snapshots to ${signalFile}`);

  return { writtenMcp, writtenSkills };
}
