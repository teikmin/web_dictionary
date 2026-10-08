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
  logger.info('PHASE 1: RUNNING SELECTION ENGINE & AUDIT REPORT');
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

  // Compile statistics
  const totalDiscovered = candidates.length;
  const passedLayer1 = gateChecked.filter((c) => c.layer1.passed).length;
  const passedLayer2 = typeChecked.filter((c) => c.layer2.detectedType).length;
  const selectedEntries = decisions.filter((d) => d.selected);
  const selectedMcp = selectedEntries.filter((d) => d.layer2?.detectedType === 'mcp_server');
  const selectedSkills = selectedEntries.filter((d) => d.layer2?.detectedType === 'agent_skill');

  // Top 30 MCP
  const top30Mcp = [...selectedMcp]
    .sort((a, b) => (b.layer3?.compositeScore || 0) - (a.layer3?.compositeScore || 0))
    .slice(0, 30);

  // Top 30 Skills
  const top30Skills = [...selectedSkills]
    .sort((a, b) => (b.layer3?.compositeScore || 0) - (a.layer3?.compositeScore || 0))
    .slice(0, 30);

  // Build report.md
  let reportMd = `# Run Audit Report: ${weekStr}\n\n`;
  reportMd += `> **Run Date:** ${startTime.toISOString()}  \n`;
  reportMd += `> **Duration:** ${((endTime.getTime() - startTime.getTime()) / 1000).toFixed(1)} seconds  \n`;
  reportMd += `> **Exit Criteria:** Review the top 30 MCP servers and Skills below to verify automatic selection quality.\n\n`;
  reportMd += `--- \n\n`;

  reportMd += `## 1. Funnel Summary\n\n`;
  reportMd += `| Stage | Candidates | Conversion | Notes |\n`;
  reportMd += `|---|:---:|:---:|---|\n`;
  reportMd += `| **Discovered** | ${totalDiscovered} | 100% | GitHub Search + MCP Registry |\n`;
  reportMd += `| **Layer 1: Hard Gates** | ${passedLayer1} | ${((passedLayer1 / Math.max(totalDiscovered, 1)) * 100).toFixed(1)}% | $\\ge 100$ stars, active <180d, license, no tutorials |\n`;
  reportMd += `| **Layer 2: Type Evidence** | ${passedLayer2} | ${((passedLayer2 / Math.max(passedLayer1, 1)) * 100).toFixed(1)}% | SDK dependency, server.json, SKILL.md |\n`;
  reportMd += `| **Selected Catalog** | ${selectedEntries.length} | ${((selectedEntries.length / Math.max(totalDiscovered, 1)) * 100).toFixed(1)}% | Cap $\\sim 500$ entries (${selectedMcp.length} MCP, ${selectedSkills.length} Skills) |\n\n`;

  reportMd += `--- \n\n`;
  reportMd += `## 2. Top 30 MCP Servers (Spot Check)\n\n`;
  reportMd += `| # | Repository | Stars | Score | Percentile | Evidence | Reason |\n`;
  reportMd += `|:---:|---|:---:|:---:|:---:|---|---|\n`;
  top30Mcp.forEach((d, idx) => {
    reportMd += `| ${idx + 1} | [${d.repo.fullName}](https://github.com/${d.repo.fullName}) | ${d.repo.stars} | ${d.layer3?.compositeScore} | ${d.layer3?.percentileRank}% | \`${d.layer2?.evidenceKind}\` | ${d.selectionReason} |\n`;
  });

  reportMd += `\n--- \n\n`;
  reportMd += `## 3. Top 30 Agent Skills (Spot Check)\n\n`;
  reportMd += `| # | Repository | Stars | Score | Percentile | Subpaths | Reason |\n`;
  reportMd += `|:---:|---|:---:|:---:|:---:|---|---|\n`;
  top30Skills.forEach((d, idx) => {
    const subpathInfo = d.layer2?.subpaths?.length ? `${d.layer2.subpaths.length} folder(s)` : 'root';
    reportMd += `| ${idx + 1} | [${d.repo.fullName}](https://github.com/${d.repo.fullName}) | ${d.repo.stars} | ${d.layer3?.compositeScore} | ${d.layer3?.percentileRank}% | ${subpathInfo} | ${d.selectionReason} |\n`;
  });

  reportMd += `\n--- \n\n`;
  reportMd += `## 4. Rejection Analysis (Sample)\n\n`;
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
  logger.info('PHASE 1 VALIDATION RUN COMPLETE!');
}

main().catch((err) => {
  logger.error('Pipeline failed:', err);
  process.exit(1);
});
