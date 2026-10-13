import { describe, it, expect } from 'vitest';
import { evaluateLayer3Scoring } from '../src/stages/4-score.js';
import type { TypeCheckedCandidate } from '../src/stages/3-type-check.js';
import type { CandidateRepo } from '@web-db/schema';

function makeMockTypeCheckedCandidate(
  repoOverrides: Partial<CandidateRepo> = {},
  passed = true
): TypeCheckedCandidate {
  const now = Date.now();
  const msInDay = 24 * 60 * 60 * 1000;

  const repo: CandidateRepo = {
    id: 9999,
    owner: 'modelcontextprotocol',
    name: 'servers',
    fullName: 'modelcontextprotocol/servers',
    description: 'Reference implementations of Model Context Protocol servers and connectors.',
    stars: 12000,
    forks: 1800,
    watchers: 450,
    openIssues: 12,
    createdAt: new Date(now - 120 * msInDay).toISOString(),
    pushedAt: new Date(now - 2 * msInDay).toISOString(),
    updatedAt: new Date(now - 2 * msInDay).toISOString(),
    license: 'MIT',
    topics: ['mcp', 'tools'],
    archived: false,
    fork: false,
    isTemplate: false,
    defaultBranch: 'main',
    sourceUrl: 'https://github.com/modelcontextprotocol/servers',
    source: 'github-search',
    discoveredAt: new Date().toISOString(),
    ...repoOverrides,
  };

  return {
    repo,
    layer1: {
      passed,
      failureReasons: passed ? [] : ['FAILED_G4_STARS_BELOW_THRESHOLD'],
    },
    layer2: {
      detectedType: passed ? 'mcp_server' : null,
      evidenceKind: passed ? 'manifest' : 'none',
      subpaths: ['src/postgres'],
    },
    isOfficialVendor: false,
    isPinned: false,
    isBlocked: false,
  };
}

describe('Layer 3 Quality Scoring & Anti-Fake Star Defense', () => {
  it('calculates score dimensions for a high-quality candidate', () => {
    const candidate = makeMockTypeCheckedCandidate();
    const [scored] = evaluateLayer3Scoring([candidate]);

    expect(scored.layer3.compositeScore).toBeGreaterThan(60);
    expect(scored.layer3.adoption).toBeGreaterThan(50);
    expect(scored.layer3.maintenance).toBeGreaterThan(80);
    expect(scored.layer3.trust).toBeGreaterThan(40);
    expect(scored.layer3.docs).toBeGreaterThan(50);
    expect(scored.layer3.antiFakeExcluded).toBe(false);
    expect(scored.layer3.percentileRank).toBe(100);
  });

  it('assigns zero scores to candidates that failed Layer 1 or Layer 2', () => {
    const failedCandidate = makeMockTypeCheckedCandidate({}, false);
    const [scored] = evaluateLayer3Scoring([failedCandidate]);

    expect(scored.layer3.compositeScore).toBe(0);
    expect(scored.layer3.adoption).toBe(0);
    expect(scored.layer3.percentileRank).toBe(0);
  });

  it('triggers anti-fake star exclusion when fork-to-star ratio is suspicious and watchers are 0', () => {
    const suspiciousCandidate = makeMockTypeCheckedCandidate({
      stars: 5000,
      forks: 1, // ratio = 0.0002 (< 0.02)
      watchers: 0, // >= 200 stars and 0 watchers
    });

    const [scored] = evaluateLayer3Scoring([suspiciousCandidate]);

    expect(scored.layer3.antiFakeFlags.length).toBeGreaterThanOrEqual(2);
    expect(scored.layer3.antiFakeExcluded).toBe(true);
    // Should be excluded from percentile ranking
    expect(scored.layer3.percentileRank).toBe(0);
  });

  it('ranks multiple candidates accurately with percentile rank', () => {
    const c1 = makeMockTypeCheckedCandidate({
      name: 'top-tool',
      stars: 20000,
      forks: 3000,
      watchers: 500,
    });
    const c2 = makeMockTypeCheckedCandidate({
      name: 'mid-tool',
      stars: 1200,
      forks: 150,
      watchers: 50,
    });
    const c3 = makeMockTypeCheckedCandidate({
      name: 'low-tool',
      stars: 120,
      forks: 15,
      watchers: 5,
    });

    const scored = evaluateLayer3Scoring([c1, c2, c3]);

    const top = scored.find((s) => s.repo.name === 'top-tool')!;
    const mid = scored.find((s) => s.repo.name === 'mid-tool')!;
    const low = scored.find((s) => s.repo.name === 'low-tool')!;

    expect(top.layer3.compositeScore).toBeGreaterThan(mid.layer3.compositeScore);
    expect(mid.layer3.compositeScore).toBeGreaterThan(low.layer3.compositeScore);
    expect(top.layer3.percentileRank).toBe(100);
    expect(low.layer3.percentileRank).toBeLessThan(top.layer3.percentileRank);
  });
});
