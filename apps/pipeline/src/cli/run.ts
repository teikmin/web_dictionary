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
import { runStage8Trends } from '../stages/8-trends.js';
import { runStage9Write } from '../stages/9-write.js';

function getWeekString(date = new Date()): string {
  const year = date.getFullYear();
  const firstDayOfYear = new Date(year, 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  const weekNum = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  return `${year}-W${String(weekNum).padStart(2, '0')}`;
}

async function main() {
  const startTime = new Date();
  const weekStr = getWeekString(startTime);

  logger.info('========================================================');
  logger.info('RUNNING FULL PIPELINE: DISCOVER -> SELECT -> ENRICH -> WRITE');
  logger.info('========================================================');

  const rateLimit = await checkRateLimit();
  logger.info(
    `GitHub API Limits: Core ${rateLimit.coreRemaining}/${rateLimit.coreLimit}, Search ${rateLimit.searchRemaining}/${rateLimit.searchLimit}`
  );

  // 1. Discover
  const candidates = await runStage1Discover();

  // 2. Gates
  const gateChecked = evaluateLayer1Gates(candidates);

  // 3. Type Check
  const typeChecked = await evaluateLayer2TypeCheck(gateChecked);

  // 4. Scoring
  const scored = evaluateLayer3Scoring(typeChecked);

  // 5. Select
  const decisions = runStage6Selection(scored);

  // 6. Enrich
  const { enrichedEntries } = await runStage7Enrich(decisions);

  // 7. Trends & Velocity Engine (Stage 8)
  const { trendingData, diffData } = await runStage8Trends(enrichedEntries, weekStr);

  // 8. Write to Git content collections (Stage 9)
  const { writtenMcp, writtenSkills, writtenTools } = await runStage9Write(enrichedEntries, weekStr, {
    trendingData,
    diffData,
  });

  const endTime = new Date();
  logger.info('========================================================');
  logger.info(`PRODUCTION RUN COMPLETE in ${((endTime.getTime() - startTime.getTime()) / 1000).toFixed(1)}s!`);
  logger.info(
    `Catalog updated: ${writtenMcp} MCP servers, ${writtenSkills} Agent Skills, ${writtenTools} Agent Tools written to content/entries/.`
  );
  logger.info(
    `Trending Leaderboard: Top 25 overall compiled, ${trendingData.breakout_new.length} breakout tools identified.`
  );
  logger.info('========================================================');
}

main().catch((err) => {
  logger.error('Pipeline failed:', err);
  process.exit(1);
});
