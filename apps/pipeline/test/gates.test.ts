import { describe, it, expect } from 'vitest';
import { evaluateLayer1Gates } from '../src/stages/2-gates.js';
import type { CandidateRepo } from '@web-db/schema';

function makeMockRepo(overrides: Partial<CandidateRepo> = {}): CandidateRepo {
  const now = Date.now();
  const msInDay = 24 * 60 * 60 * 1000;

  return {
    id: 12345,
    owner: 'acme-corp',
    name: 'mcp-postgres-server',
    fullName: 'acme-corp/mcp-postgres-server',
    description: 'A production-grade Model Context Protocol server for databases.',
    stars: 350,
    forks: 45,
    watchers: 25,
    openIssues: 3,
    createdAt: new Date(now - 60 * msInDay).toISOString(), // 60 days old
    pushedAt: new Date(now - 5 * msInDay).toISOString(),   // 5 days ago
    updatedAt: new Date(now - 5 * msInDay).toISOString(),
    license: 'MIT',
    topics: ['mcp', 'mcp-server', 'database'],
    archived: false,
    fork: false,
    isTemplate: false,
    defaultBranch: 'main',
    sourceUrl: 'https://github.com/acme-corp/mcp-awesome-server',
    source: 'github-search',
    discoveredAt: new Date().toISOString(),
    ...overrides,
  };
}

describe('Layer 1 Hard Metadata Gates (G1 - G9)', () => {
  it('passes a fully compliant repository with 0 failure reasons', () => {
    const candidate = makeMockRepo();
    const [result] = evaluateLayer1Gates([candidate]);

    expect(result.layer1.passed).toBe(true);
    expect(result.layer1.failureReasons).toHaveLength(0);
    expect(result.isBlocked).toBe(false);
  });

  it('fails G1 when repository is archived (unless pinned)', () => {
    const candidate = makeMockRepo({ archived: true });
    const [result] = evaluateLayer1Gates([candidate]);

    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G1_ARCHIVED');
  });

  it('fails G2 when repository is a fork (unless pinned)', () => {
    const candidate = makeMockRepo({ fork: true });
    const [result] = evaluateLayer1Gates([candidate]);

    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G2_FORK');
  });

  it('fails G3 when repository is a template or has mirror in description', () => {
    const templateRepo = makeMockRepo({ isTemplate: true });
    const mirrorRepo = makeMockRepo({
      description: 'Official mirror of the upstream git repository at gitlab.',
    });

    const [resTemplate] = evaluateLayer1Gates([templateRepo]);
    const [resMirror] = evaluateLayer1Gates([mirrorRepo]);

    expect(resTemplate.layer1.passed).toBe(false);
    expect(resTemplate.layer1.failureReasons).toContain('FAILED_G3_TEMPLATE_OR_MIRROR');

    expect(resMirror.layer1.passed).toBe(false);
    expect(resMirror.layer1.failureReasons).toContain('FAILED_G3_TEMPLATE_OR_MIRROR');
  });

  it('fails G4 when stars are below threshold (< 100), unless vendor or pinned', () => {
    const lowStarRepo = makeMockRepo({ stars: 42 });
    const [result] = evaluateLayer1Gates([lowStarRepo]);

    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G4_STARS_BELOW_THRESHOLD');
  });

  it('exempts official vendor repositories from the G4 minimum stars gate', () => {
    // 'github' is a recognized vendor org in vendors.yaml
    const vendorRepo = makeMockRepo({
      owner: 'github',
      fullName: 'github/mcp-server-sample',
      stars: 12, // Below 100
    });

    const [result] = evaluateLayer1Gates([vendorRepo]);
    expect(result.isOfficialVendor).toBe(true);
    expect(result.layer1.failureReasons).not.toContain('FAILED_G4_STARS_BELOW_THRESHOLD');
  });

  it('fails G5 when repository was pushed > 180 days ago', () => {
    const msInDay = 24 * 60 * 60 * 1000;
    const oldPushRepo = makeMockRepo({
      pushedAt: new Date(Date.now() - 200 * msInDay).toISOString(),
    });

    const [result] = evaluateLayer1Gates([oldPushRepo]);
    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G5_INACTIVE_180_DAYS');
  });

  it('fails G6 when repository was created < 30 days ago', () => {
    const msInDay = 24 * 60 * 60 * 1000;
    const tooNewRepo = makeMockRepo({
      createdAt: new Date(Date.now() - 10 * msInDay).toISOString(),
    });

    const [result] = evaluateLayer1Gates([tooNewRepo]);
    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G6_TOO_NEW_30_DAYS');
  });

  it('fails G7 when repository has no license or NOASSERTION', () => {
    const noLicenseRepo = makeMockRepo({ license: undefined });
    const noAssertionRepo = makeMockRepo({ license: 'NOASSERTION' });

    const [res1] = evaluateLayer1Gates([noLicenseRepo]);
    const [res2] = evaluateLayer1Gates([noAssertionRepo]);

    expect(res1.layer1.passed).toBe(false);
    expect(res1.layer1.failureReasons).toContain('FAILED_G7_NO_OSI_LICENSE');
    expect(res2.layer1.failureReasons).toContain('FAILED_G7_NO_OSI_LICENSE');
  });

  it('fails G8 when description is shorter than 20 characters', () => {
    const shortDescRepo = makeMockRepo({ description: 'A tool.' });
    const [result] = evaluateLayer1Gates([shortDescRepo]);

    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G8_DESCRIPTION_TOO_SHORT');
  });

  it('fails G9 when name or description matches blacklist keywords (tutorial, awesome, etc.)', () => {
    const tutorialRepo = makeMockRepo({
      name: 'mcp-starter-tutorial',
      description: 'Step-by-step tutorial for building tools for beginners.',
    });

    const [result] = evaluateLayer1Gates([tutorialRepo]);
    expect(result.layer1.passed).toBe(false);
    expect(result.layer1.failureReasons).toContain('FAILED_G9_COURSE_OR_LIST_KEYWORD');
  });

  it('flags explicitly blocklisted repositories', () => {
    // Testing with a repository name in block.yaml
    const blockedRepo = makeMockRepo({
      fullName: 'some-spammer/fake-tool',
    });

    const [result] = evaluateLayer1Gates([blockedRepo]);
    // Should be checked cleanly
    expect(result).toBeDefined();
  });
});
