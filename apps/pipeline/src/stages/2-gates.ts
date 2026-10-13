import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import type {
  CandidateRepo,
  Layer1Evaluation,
  GateFailureReason,
} from '@web-db/schema';

export interface GateCheckedCandidate {
  repo: CandidateRepo;
  layer1: Layer1Evaluation;
  isOfficialVendor: boolean;
  isPinned: boolean;
  isBlocked: boolean;
}

export function evaluateLayer1Gates(candidates: CandidateRepo[]): GateCheckedCandidate[] {
  logger.stage(2, 'Evaluate Layer 1 Hard Metadata Gates (G1 - G9)');
  const results: GateCheckedCandidate[] = [];
  const now = Date.now();
  const msInDay = 24 * 60 * 60 * 1000;

  const vendorOrgs = new Set(config.vendors.vendors.map((v) => v.org.toLowerCase()));
  const blockedRepos = new Set((config.block.blocked || []).map((b) => b.repo.toLowerCase()));
  const pinnedRepos = new Set((config.pin.pinned || []).map((p) => p.repo.toLowerCase()));

  let passedCount = 0;

  for (const repo of candidates) {
    const fullNameLower = repo.fullName.toLowerCase();
    const isOfficialVendor = vendorOrgs.has(repo.owner.toLowerCase());
    const isPinned = pinnedRepos.has(fullNameLower);
    const isBlocked = blockedRepos.has(fullNameLower);

    const failureReasons: GateFailureReason[] = [];

    if (isBlocked) {
      failureReasons.push('FAILED_BLOCKLIST');
    }

    // G1: Not archived
    if (repo.archived && !isPinned) {
      failureReasons.push('FAILED_G1_ARCHIVED');
    }

    // G2: Not a fork
    if (repo.fork && !isPinned) {
      failureReasons.push('FAILED_G2_FORK');
    }

    // G3: Not template or mirror
    if (repo.isTemplate || (repo.description && /mirror\b/i.test(repo.description))) {
      if (!isPinned) failureReasons.push('FAILED_G3_TEMPLATE_OR_MIRROR');
    }

    // G4: Minimum stars (vendor & pinned exempt)
    if (repo.stars < config.thresholds.min_stars && !isOfficialVendor && !isPinned) {
      failureReasons.push('FAILED_G4_STARS_BELOW_THRESHOLD');
    }

    // G5: Recent activity (pushed within 180 days)
    const pushedDaysAgo = (now - new Date(repo.pushedAt).getTime()) / msInDay;
    if (pushedDaysAgo > config.thresholds.max_pushed_days && !isPinned) {
      failureReasons.push('FAILED_G5_INACTIVE_180_DAYS');
    }

    // G6: Minimum age (created >= 30 days ago)
    const createdDaysAgo = (now - new Date(repo.createdAt).getTime()) / msInDay;
    if (createdDaysAgo < config.thresholds.min_repo_age_days && !isPinned) {
      failureReasons.push('FAILED_G6_TOO_NEW_30_DAYS');
    }

    // G7: Valid License
    if ((!repo.license || repo.license === 'NOASSERTION') && !isPinned) {
      failureReasons.push('FAILED_G7_NO_OSI_LICENSE');
    }

    // G8: Description >= 20 chars
    const descLen = (repo.description || '').trim().length;
    if (descLen < config.thresholds.min_description_chars && !isPinned) {
      failureReasons.push('FAILED_G8_DESCRIPTION_TOO_SHORT');
    }

    // G9: Not a course, tutorial, or demo list
    const combinedText = `${repo.name} ${repo.description || ''} ${repo.topics.join(' ')}`.toLowerCase();
    const matchesBlacklist = config.queries.blacklist_keywords.some((kw) =>
      combinedText.includes(kw.toLowerCase())
    );
    if (matchesBlacklist && !isPinned) {
      failureReasons.push('FAILED_G9_COURSE_OR_LIST_KEYWORD');
    }

    const passed = failureReasons.length === 0;
    if (passed) passedCount++;

    results.push({
      repo,
      layer1: {
        passed,
        failureReasons,
      },
      isOfficialVendor,
      isPinned,
      isBlocked,
    });
  }

  logger.info(
    `Stage 2 Complete: ${passedCount} / ${candidates.length} candidates passed Layer 1 hard gates.`
  );
  return results;
}
