import fs from 'node:fs';
import path from 'node:path';
import { runStage8Trends } from '../apps/pipeline/src/stages/8-trends.js';

import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const runs = ['2026-W41', '2026-W42'];

  const w41Path = path.join(rootDir, 'data/signals/2026/2026-W41.json');
  if (fs.existsSync(w41Path)) {
    const w41 = JSON.parse(fs.readFileSync(w41Path, 'utf8'));
    console.log('--- W41 keys matching tools ---');
    for (const k of Object.keys(w41)) {
      if (/tars|researcher|scrapling|fastmcp|trigger|python-sdk/i.test(k)) {
        console.log(k, '=>', w41[k].stars);
      }
    }
  }

  for (const week of runs) {
    const enrichedPath = path.join(rootDir, 'data/runs', week, 'enriched.json');
    if (fs.existsSync(enrichedPath)) {
      console.log(`Processing Stage 8 for ${week}...`);
      const enriched = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));

      // Align historical enriched with Phase 2 agent_tool classifications
      const toolsDir = path.join(rootDir, 'content/entries/tools');
      const toolSlugs = new Set(
        fs.existsSync(toolsDir)
          ? fs.readdirSync(toolsDir).filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', '').toLowerCase())
          : []
      );

      for (const item of enriched) {
        const repo = item.decision?.repo;
        if (!repo) continue;
        const owner = (repo.owner || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const name = (repo.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const candidateSlug = `${owner}-${name}`;

        if (toolSlugs.has(candidateSlug)) {
          if (!item.decision.layer2) {
            item.decision.layer2 = { detectedType: 'agent_tool', evidenceKind: 'package_manifest', subpaths: [] };
          } else {
            item.decision.layer2.detectedType = 'agent_tool';
          }
        }
      }

      const result = await runStage8Trends(enriched, week, { rootDir });
      console.log(`Successfully generated trending artifacts for ${week}:`);
      console.log(` - Top 25 overall: ${result.trendingData.top25_overall.length}`);
      console.log(` - Breakout new: ${result.trendingData.breakout_new.length}`);
      console.log(` - Top 10 MCP: ${result.trendingData.top10_mcp.length}`);
      console.log(` - Top 10 Skills: ${result.trendingData.top10_skills.length}`);
      console.log(` - Top 10 Tools: ${result.trendingData.top10_tools.length}`);
    }
  }
}

main().catch(console.error);
