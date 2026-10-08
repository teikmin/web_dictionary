import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import type { ScoredCandidate } from './4-score.js';
import type { CandidateDecision } from '@web-db/schema';

export function runStage6Selection(scoredCandidates: ScoredCandidate[]): CandidateDecision[] {
  logger.stage(4, 'Selection & Sizing (Cap ~500, Type Allocation & Priority)');
  const decisions: CandidateDecision[] = [];

  const eligible = scoredCandidates.filter(
    (c) => c.layer1.passed && c.layer2.detectedType && !c.layer3.antiFakeExcluded
  );

  // Group by type
  const mcpCandidates = eligible.filter((c) => c.layer2.detectedType === 'mcp_server');
  const skillCandidates = eligible.filter((c) => c.layer2.detectedType === 'agent_skill');

  // Sort each group by composite score descending
  mcpCandidates.sort((a, b) => b.layer3.compositeScore - a.layer3.compositeScore);
  skillCandidates.sort((a, b) => b.layer3.compositeScore - a.layer3.compositeScore);

  const selectedSet = new Set<string>();

  // 1. Select Official Vendors & Pinned Repos first
  for (const c of eligible) {
    if (c.isOfficialVendor || c.isPinned) {
      selectedSet.add(c.repo.fullName.toLowerCase());
    }
  }

  // 2. Select MCP up to mcp_split_target (350)
  let mcpSelected = 0;
  for (const c of mcpCandidates) {
    if (mcpSelected >= config.thresholds.mcp_split_target) break;
    selectedSet.add(c.repo.fullName.toLowerCase());
    mcpSelected++;
  }

  // 3. Select Skills up to skills_split_target (150)
  let skillsSelected = 0;
  for (const c of skillCandidates) {
    if (skillsSelected >= config.thresholds.skills_split_target) break;
    selectedSet.add(c.repo.fullName.toLowerCase());
    skillsSelected++;
  }

  // 4. Build CandidateDecision for every discovered candidate
  for (const c of scoredCandidates) {
    const fullNameLower = c.repo.fullName.toLowerCase();
    const isSelected = selectedSet.has(fullNameLower);

    let reason: string | undefined;
    if (c.isOfficialVendor) reason = 'official_vendor';
    else if (c.isPinned) reason = 'pinned';
    else if (isSelected) reason = 'quality_percentile';
    else if (!c.layer1.passed) reason = c.layer1.failureReasons.join(', ');
    else if (!c.layer2.detectedType) reason = 'missing_file_evidence';
    else if (c.layer3.antiFakeExcluded) reason = 'anti_fake_exclusion';
    else reason = 'exceeded_catalog_cap';

    decisions.push({
      repo: c.repo,
      layer1: c.layer1,
      layer2: c.layer2,
      layer3: c.layer3,
      selected: isSelected,
      selectionReason: reason,
    });
  }

  const totalSelected = Array.from(selectedSet).length;
  logger.info(
    `Stage 4 Complete: Selected ${totalSelected} repositories (${mcpSelected} MCP, ${skillsSelected} Skills).`
  );

  return decisions;
}
