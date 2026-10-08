import fs from 'node:fs';
import path from 'node:path';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { checkRateLimit } from '../lib/http.js';
import { runStage1Discover } from '../stages/1-discover.js';
import { evaluateLayer1Gates } from '../stages/2-gates.js';
import { evaluateLayer2TypeCheck } from '../stages/3-type-check.js';
import { evaluateLayer3Scoring } from '../stages/4-score.js';
import { runStage6Selection } from '../stages/6-select.js';
import { runStage7Enrich } from '../stages/7-enrich.js';

function getWeekString(date = new Date()): string {
  const year = date.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  const weekNum = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  return `${year}-W${String(weekNum).padStart(2, '0')}`;
}

async function main() {
  const startTime = new Date();
  logger.info('========================================================');
  logger.info('PHASE 2: RUNNING SELECTION & ENRICHMENT PIPELINE');
  logger.info('========================================================');

  const rateLimit = await checkRateLimit();
  logger.info(
    `GitHub API Limits: Core ${rateLimit.coreRemaining}/${rateLimit.coreLimit}, Search ${rateLimit.searchRemaining}/${rateLimit.searchLimit}`
  );

  // 1. Discover
  const candidates = await runStage1Discover();

  // 2. Gates
  const gateChecked = evaluateLayer1Gates(candidates);

  // 3. Type Check (File evidence via Git tree)
  const typeChecked = await evaluateLayer2TypeCheck(gateChecked);

  // 4. Scoring
  const scored = evaluateLayer3Scoring(typeChecked);

  // 5. Selection
  const decisions = runStage6Selection(scored);

  // 6. Enrich (Phase 2)
  const { enrichedEntries, stats: enrichStats } = await runStage7Enrich(decisions);

  const endTime = new Date();
  const weekStr = getWeekString(startTime);
  const runDir = path.join(config.rootDir, 'data/runs', weekStr);
  if (!fs.existsSync(runDir)) {
    fs.mkdirSync(runDir, { recursive: true });
  }

  // Write decisions.json
  const decisionsPath = path.join(runDir, 'decisions.json');
  fs.writeFileSync(decisionsPath, JSON.stringify(decisions, null, 2), 'utf8');
  logger.info(`Saved decision records to ${decisionsPath}`);

  // Write enriched.json
  const enrichedPath = path.join(runDir, 'enriched.json');
  fs.writeFileSync(enrichedPath, JSON.stringify(enrichedEntries, null, 2), 'utf8');
  logger.info(`Saved enriched entries to ${enrichedPath}`);

  // Compile statistics
  const totalDiscovered = candidates.length;
  const passedLayer1 = gateChecked.filter((c) => c.layer1.passed).length;
  const passedLayer2 = typeChecked.filter((c) => c.layer2.detectedType).length;
  const selectedEntries = decisions.filter((d) => d.selected);
  const selectedMcp = selectedEntries.filter((d) => d.layer2?.detectedType === 'mcp_server');
  const selectedSkills = selectedEntries.filter((d) => d.layer2?.detectedType === 'agent_skill');

  // Top 30 MCP from enriched
  const topMcpEnriched = enrichedEntries
    .filter((e) => e.decision.layer2?.detectedType === 'mcp_server')
    .sort(
      (a, b) =>
        (b.decision.layer3?.compositeScore || 0) -
        (a.decision.layer3?.compositeScore || 0)
    )
    .slice(0, 30);

  // Top 30 Skills from enriched
  const topSkillsEnriched = enrichedEntries
    .filter((e) => e.decision.layer2?.detectedType === 'agent_skill')
    .sort(
      (a, b) =>
        (b.decision.layer3?.compositeScore || 0) -
        (a.decision.layer3?.compositeScore || 0)
    )
    .slice(0, 30);

  // Build report.md
  let reportMd = `# Run Audit Report: ${weekStr}\n\n`;
  reportMd += `> **Run Date:** ${startTime.toISOString()}  \n`;
  reportMd += `> **Duration:** ${((endTime.getTime() - startTime.getTime()) / 1000).toFixed(1)} seconds  \n`;
  reportMd += `> **Phase 2 Status:** Enriched ${enrichedEntries.length} entries with client adapters (Claude Code, Codex, Antigravity).\n\n`;
  reportMd += `--- \n\n`;

  reportMd += `## 1. Funnel Summary\n\n`;
  reportMd += `| Stage | Candidates | Conversion | Notes |\n`;
  reportMd += `|---|:---:|:---:|---|\n`;
  reportMd += `| **Discovered** | ${totalDiscovered} | 100% | GitHub Search + MCP Registry |\n`;
  reportMd += `| **Layer 1: Hard Gates** | ${passedLayer1} | ${((passedLayer1 / Math.max(totalDiscovered, 1)) * 100).toFixed(1)}% | $\\ge 100$ stars, active <180d, license, no tutorials |\n`;
  reportMd += `| **Layer 2: Type Evidence** | ${passedLayer2} | ${((passedLayer2 / Math.max(passedLayer1, 1)) * 100).toFixed(1)}% | SDK dependency, server.json, SKILL.md |\n`;
  reportMd += `| **Selected Catalog** | ${selectedEntries.length} | ${((selectedEntries.length / Math.max(totalDiscovered, 1)) * 100).toFixed(1)}% | Cap $\\sim 500$ entries (${selectedMcp.length} MCP, ${selectedSkills.length} Skills) |\n\n`;

  reportMd += `--- \n\n`;
  reportMd += `## 2. Launch Spec Extraction & Confidence (Phase 2)\n\n`;
  reportMd += `| Confidence Level | Count | Share | Target Exit Criteria |\n`;
  reportMd += `|---|:---:|:---:|:---:|\n`;
  reportMd += `| **Registry** (✅ Official) | ${enrichStats.confidenceCounts.registry} | ${((enrichStats.confidenceCounts.registry / Math.max(enrichStats.totalMcp, 1)) * 100).toFixed(1)}% | — |\n`;
  reportMd += `| **Manifest** (🟢 package.json / pyproject) | ${enrichStats.confidenceCounts.manifest} | ${((enrichStats.confidenceCounts.manifest / Math.max(enrichStats.totalMcp, 1)) * 100).toFixed(1)}% | — |\n`;
  reportMd += `| **README** (🟡 Code fence parsed) | ${enrichStats.confidenceCounts.readme} | ${((enrichStats.confidenceCounts.readme / Math.max(enrichStats.totalMcp, 1)) * 100).toFixed(1)}% | — |\n`;
  reportMd += `| **None** (Manual link only) | ${enrichStats.confidenceCounts.none} | ${((enrichStats.confidenceCounts.none / Math.max(enrichStats.totalMcp, 1)) * 100).toFixed(1)}% | — |\n`;
  reportMd += `| **High-Confidence Total (Registry + Manifest)** | **${enrichStats.confidenceCounts.registry + enrichStats.confidenceCounts.manifest}** | **${enrichStats.highConfidencePct.toFixed(1)}%** | **$\\ge 70\\%$** |\n\n`;

  reportMd += `--- \n\n`;
  reportMd += `## 3. Top 30 MCP Servers with Generated Launch Commands\n\n`;
  reportMd += `| # | Repository | Stars | Confidence | Score | Claude Code Command |\n`;
  reportMd += `|:---:|---|:---:|:---:|:---:|---|\n`;
  topMcpEnriched.forEach((e, idx) => {
    const cmd = e.renderedConfigs['claude-code']?.mcpCommand || '*(manual repo link)*';
    reportMd += `| ${idx + 1} | [${e.decision.repo.fullName}](https://github.com/${e.decision.repo.fullName}) | ${e.decision.repo.stars} | \`${e.launchSpec?.confidence}\` | ${e.decision.layer3?.compositeScore} | \`${cmd}\` |\n`;
  });

  reportMd += `\n--- \n\n`;
  reportMd += `## 4. Top 30 Agent Skills with Install Paths\n\n`;
  reportMd += `| # | Repository | Stars | Skill Name | Score | Claude Code Path | Antigravity Path |\n`;
  reportMd += `|:---:|---|:---:|---|:---:|---|---|\n`;
  topSkillsEnriched.forEach((e, idx) => {
    const sName = e.skillSpec?.skill_name || e.decision.repo.name;
    const claudePath = e.renderedConfigs['claude-code']?.skillInstallPath || '';
    const agyPath = e.renderedConfigs['antigravity']?.skillInstallPath || '';
    reportMd += `| ${idx + 1} | [${e.decision.repo.fullName}](https://github.com/${e.decision.repo.fullName}) | ${e.decision.repo.stars} | \`${sName}\` | ${e.decision.layer3?.compositeScore} | \`${claudePath}\` | \`${agyPath}\` |\n`;
  });

  reportMd += `\n--- \n\n`;
  reportMd += `## 5. Rejection Analysis\n\n`;
  const rejections = decisions.filter((d) => !d.selected);
  const reasonCounts = new Map<string, number>();
  for (const r of rejections) {
    const reason = r.selectionReason || 'unknown';
    reasonCounts.set(reason, (reasonCounts.get(reason) || 0) + 1);
  }

  reportMd += `| Rejection Reason | Count |\n`;
  reportMd += `|---|:---:|\n`;
  for (const [reason, count] of reasonCounts.entries()) {
    reportMd += `| \`${reason}\` | ${count} |\n`;
  }

  const reportPath = path.join(runDir, 'report.md');
  fs.writeFileSync(reportPath, reportMd, 'utf8');
  logger.info(`Saved Markdown audit report to ${reportPath}`);
  logger.info('PHASE 2 VALIDATION RUN COMPLETE!');
}

main().catch((err) => {
  logger.error('Pipeline failed:', err);
  process.exit(1);
});
