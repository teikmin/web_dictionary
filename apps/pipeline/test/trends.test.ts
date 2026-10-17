import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {
  computeTrendingMetrics,
  assembleTrendingLeaderboards,
  deterministicTrendingCompare,
  resolveSnapshotEntry,
  computeWeeklyDiff,
  loadHistoricalSnapshots,
  runStage8Trends,
  type TrendingItem,
  type SnapshotMap,
} from '../src/stages/8-trends.js';
import type { EnrichedEntry } from '../src/stages/7-enrich.js';

describe('Phase 3: Stage 8 Weekly Trend, Velocity & Ranking Engine', () => {
  describe('1. 7-Day Star Delta & Patched Velocity Scoring', () => {
    it('calculates exact delta and scores for an incumbent giant (Case C1)', () => {
      // 100k giant gaining 1,000 stars: R = 1,000 / 100,000 = 0.01
      // Multiplier = 1.0 + 0.01 = 1.01. Score = 1,000 * 1.01 = 1,010.00
      const res = computeTrendingMetrics({
        currentStars: 101000,
        prevStars: 100000,
        createdDaysAgo: 500,
        pushedDaysAgo: 2,
      });

      expect(res.stars_delta_7d).toBe(1000);
      expect(res.stars_growth_pct).toBe(1.0);
      expect(res.trending_score).toBe(1010.0);
      expect(res.velocity_source).toBe('snapshot_delta');
    });

    it('calculates breakout tool scoring with 100% growth (Case C2)', () => {
      // 500-star tool gaining 500 stars: R = 500 / 500 = 1.0
      // Multiplier = 1.0 + 1.0 = 2.0. Score = 500 * 2.0 = 1,000.00
      const res = computeTrendingMetrics({
        currentStars: 1000,
        prevStars: 500,
        createdDaysAgo: 100,
        pushedDaysAgo: 1,
      });

      expect(res.stars_delta_7d).toBe(500);
      expect(res.stars_growth_pct).toBe(100.0);
      expect(res.trending_score).toBe(1000.0);
      expect(res.velocity_source).toBe('snapshot_delta');
    });

    it('decisively elevates breakout tool over giant at +100.8% growth (Case C2+)', () => {
      // Baseline 500, delta 504: R = 504 / 500 = 1.008
      // Multiplier = 1.0 + 1.008 = 2.008. Score = 504 * 2.008 = 1,012.03
      // Giant C1 scores 1,010.00 -> Breakout C2+ defeats Giant C1!
      const res = computeTrendingMetrics({
        currentStars: 1004,
        prevStars: 500,
        createdDaysAgo: 80,
        pushedDaysAgo: 1,
      });

      expect(res.stars_delta_7d).toBe(504);
      expect(res.trending_score).toBe(1012.03);
      expect(res.trending_score).toBeGreaterThan(1010.0); // Defeats Giant C1!
    });

    it('suppresses micro-spikes on small repositories via the 250 baseline floor (Cases C3 & C4)', () => {
      // Repo with 10 stars gaining 50 stars:
      // Effective baseline = max(10, 250) = 250
      // R = 50 / 250 = 0.20. Multiplier = 1.0 + 0.20 = 1.20
      // Score = 50 * 1.20 = 60.00 (NOT 50 * (1 + 5.0) = 300)
      const res = computeTrendingMetrics({
        currentStars: 60,
        prevStars: 10,
        createdDaysAgo: 30,
        pushedDaysAgo: 1,
      });

      expect(res.stars_delta_7d).toBe(50);
      expect(res.trending_score).toBe(60.0);
    });

    it('clamps growth multiplier at 3.0x max (bonus capped at 2.0) against hyper-spikes (Case C5 & C12)', () => {
      // Baseline 250 gaining 2,500 stars: R = 2,500 / 250 = 10.0
      // Multiplier bonus is capped at 2.0 -> Multiplier = 1.0 + 2.0 = 3.0
      // Score = 2,500 * 3.0 = 7,500.00
      const res = computeTrendingMetrics({
        currentStars: 2750,
        prevStars: 250,
        createdDaysAgo: 45,
        pushedDaysAgo: 1,
      });

      expect(res.stars_delta_7d).toBe(2500);
      expect(res.trending_score).toBe(7500.0);
    });

    it('enforces non-negative clamping on negative delta (unstarring / bot purges, Case C10)', () => {
      // 2,000 star repo losing 1,000 stars (GitHub bot purge)
      // Raw delta = -1000. Clamped delta = 0. trending_score = 0
      // Prevents negative sign-flip exploit where (-1000) * (-3.0) = +3,000
      const res = computeTrendingMetrics({
        currentStars: 1000,
        prevStars: 2000,
        createdDaysAgo: 100,
        pushedDaysAgo: 5,
      });

      expect(res.stars_delta_7d).toBe(0);
      expect(res.stars_growth_pct).toBe(0.0);
      expect(res.trending_score).toBe(0.0);
      expect(res.velocity_source).toBe('snapshot_delta');
    });

    it('eliminates the stagnant repository S_t == S_{t-1} cold-start bug', () => {
      // A dormant 20,000 star repository that gained 0 stars:
      // Must NOT trigger age-amortized fallback (+500 stars/wk)!
      // Must score delta=0, trending_score=0.
      const res = computeTrendingMetrics({
        currentStars: 20000,
        prevStars: 20000,
        createdDaysAgo: 280, // 40 weeks
        pushedDaysAgo: 120,
      });

      expect(res.stars_delta_7d).toBe(0);
      expect(res.stars_growth_pct).toBe(0.0);
      expect(res.trending_score).toBe(0.0);
      expect(res.velocity_source).toBe('snapshot_delta');
    });
  });

  describe('2. Cold-Start Fallback & Quarantine', () => {
    it('applies age-amortized fallback for brand-new repositories missing from prior snapshot', () => {
      // Brand new 500-star repo created 28 days ago (4 weeks), pushed 2 days ago
      // repoAgeWeeks = 4. recencyBoost = 1 - 2/90 = 0.978
      // estimatedDelta = Math.round((500 / 4) * 0.978) = 122
      const res = computeTrendingMetrics({
        currentStars: 500,
        prevStars: undefined,
        createdDaysAgo: 28,
        pushedDaysAgo: 2,
      });

      expect(res.velocity_source).toBe('age_velocity');
      expect(res.stars_delta_7d).toBeGreaterThan(100);
      expect(res.trending_score).toBe(0); // Quarantined from competitive leaderboards!
    });

    it('quarantines age_velocity entries so trending_score is 0 and excluded from top25_overall', () => {
      const items: TrendingItem[] = [
        {
          slug: 'new-giant',
          name: 'New Giant Repo',
          type: 'agent_tool',
          categories: ['agent-frameworks'],
          stars: 50000,
          stars_delta_7d: 1500,
          stars_growth_pct: 0,
          trending_score: 0, // age_velocity quarantined
          velocity_source: 'age_velocity',
          sparkline_4w: [50000],
          tagline: 'Brand new giant import',
          repo: 'org/new-giant',
          is_pack_primary: true,
          created_at: new Date(Date.now() - 30 * 86400000).toISOString(),
          pushed_at: new Date().toISOString(),
        },
        {
          slug: 'organic-breakout',
          name: 'Organic Breakout Tool',
          type: 'agent_tool',
          categories: ['coding-agents'],
          stars: 600,
          stars_delta_7d: 300,
          stars_growth_pct: 100,
          trending_score: 600,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [300, 600],
          tagline: 'Fast growing coding agent',
          repo: 'org/organic-breakout',
          is_pack_primary: true,
          created_at: new Date(Date.now() - 40 * 86400000).toISOString(),
          pushed_at: new Date().toISOString(),
        },
      ];

      const leaderboard = assembleTrendingLeaderboards(items, '2026-W42');

      // Top 25 overall must strictly contain snapshot_delta entries, NOT synthetic age_velocity!
      expect(leaderboard.top25_overall.length).toBe(1);
      expect(leaderboard.top25_overall[0].slug).toBe('organic-breakout');

      // But breakout_new can highlight newly added tools created <= 60 days ago
      expect(leaderboard.breakout_new.some((b) => b.slug === 'new-giant')).toBe(true);
    });
  });

  describe('3. Monorepo Sub-skill Deduplication & Leaderboards', () => {
    it('deduplicates monorepo sub-skills: only is_pack_primary === true entries qualify for leaderboards', () => {
      const items: TrendingItem[] = [
        {
          slug: 'monorepo-primary-skill',
          name: 'Monorepo Primary Skill',
          type: 'agent_skill',
          categories: ['coding-agents'],
          stars: 10000,
          stars_delta_7d: 1000,
          stars_growth_pct: 11.1,
          trending_score: 1100,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [9000, 10000],
          tagline: 'Primary skill',
          repo: 'monorepo/skills',
          is_pack_primary: true,
          pack_slug: 'monorepo-skills',
          created_at: '2026-01-01T00:00:00Z',
          pushed_at: '2026-10-10T00:00:00Z',
        },
        {
          slug: 'monorepo-sub-skill-1',
          name: 'Monorepo Sub Skill 1',
          type: 'agent_skill',
          categories: ['coding-agents'],
          stars: 10000,
          stars_delta_7d: 1000,
          stars_growth_pct: 11.1,
          trending_score: 1100,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [9000, 10000],
          tagline: 'Sibling sub-skill 1',
          repo: 'monorepo/skills',
          is_pack_primary: false, // Sibling
          pack_slug: 'monorepo-skills',
          created_at: '2026-01-01T00:00:00Z',
          pushed_at: '2026-10-10T00:00:00Z',
        },
        {
          slug: 'monorepo-sub-skill-2',
          name: 'Monorepo Sub Skill 2',
          type: 'agent_skill',
          categories: ['coding-agents'],
          stars: 10000,
          stars_delta_7d: 1000,
          stars_growth_pct: 11.1,
          trending_score: 1100,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [9000, 10000],
          tagline: 'Sibling sub-skill 2',
          repo: 'monorepo/skills',
          is_pack_primary: false, // Sibling
          pack_slug: 'monorepo-skills',
          created_at: '2026-01-01T00:00:00Z',
          pushed_at: '2026-10-10T00:00:00Z',
        },
        {
          slug: 'independent-skill',
          name: 'Independent Skill',
          type: 'agent_skill',
          categories: ['browser-web'],
          stars: 800,
          stars_delta_7d: 200,
          stars_growth_pct: 33.3,
          trending_score: 250,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [600, 800],
          tagline: 'Independent single skill',
          repo: 'indie/skill',
          is_pack_primary: true,
          created_at: '2026-05-01T00:00:00Z',
          pushed_at: '2026-10-12T00:00:00Z',
        },
      ];

      const leaderboard = assembleTrendingLeaderboards(items, '2026-W42');

      // Top 10 skills should only contain the 2 primary skills, not the 2 sibling clones!
      expect(leaderboard.top10_skills.length).toBe(2);
      expect(leaderboard.top10_skills.map((s) => s.slug)).toEqual([
        'monorepo-primary-skill',
        'independent-skill',
      ]);
    });

    it('ensures 5-tier deterministic sorting produces zero build jitter', () => {
      const a: TrendingItem = {
        slug: 'tool-a',
        name: 'Tool A',
        type: 'agent_tool',
        categories: [],
        stars: 1000,
        stars_delta_7d: 100,
        stars_growth_pct: 10,
        trending_score: 150,
        velocity_source: 'snapshot_delta',
        sparkline_4w: [900, 1000],
        tagline: '',
        repo: 'a/a',
        created_at: '',
        pushed_at: '',
      };

      const b: TrendingItem = {
        ...a,
        slug: 'tool-b',
        name: 'Tool B',
      };

      // When scores, deltas, and stars are identical, sort deterministically by slug (a before b)
      expect(deterministicTrendingCompare(a, b)).toBeLessThan(0);
      expect(deterministicTrendingCompare(b, a)).toBeGreaterThan(0);
    });
  });

  describe('4. Historical Snapshots, Sparklines & Alias Resolution', () => {
    it('resolves snapshots across aliases in both directions', () => {
      const snapshot: SnapshotMap = {
        'old-slug-before-rename': {
          stars: 1250,
          forks: 150,
          pushedAt: '2026-10-01T00:00:00Z',
        },
      };

      const aliases = {
        'old-slug-before-rename': 'canonical-new-slug',
      };

      // Looking up canonical-new-slug should find old-slug-before-rename
      const resolved = resolveSnapshotEntry(snapshot, 'canonical-new-slug', aliases);
      expect(resolved).toBeDefined();
      expect(resolved?.stars).toBe(1250);

      // Looking up old-slug directly should also work
      const resolvedDirect = resolveSnapshotEntry(snapshot, 'old-slug-before-rename', aliases);
      expect(resolvedDirect).toBeDefined();
      expect(resolvedDirect?.stars).toBe(1250);
    });

    it('builds 4-week historical sparkline numbers from available snapshots without zero-padding', () => {
      // 2 historical points [100, 150] followed by current 200
      const res = computeTrendingMetrics({
        currentStars: 200,
        prevStars: 150,
        createdDaysAgo: 60,
        pushedDaysAgo: 1,
        sparklineHistory: [100, 150],
      });

      expect(res.sparkline_4w).toEqual([100, 150, 200]);
      expect(res.sparkline_4w.length).toBe(3);
    });
  });

  describe('5. Weekly Diff Calculation', () => {
    it('accurately identifies added, removed, and surging entries', () => {
      const prevSnapshot: SnapshotMap = {
        'stale-tool': { stars: 50 },
        'existing-tool': { stars: 200 },
      };

      const currentItems: TrendingItem[] = [
        {
          slug: 'existing-tool',
          name: 'Existing Tool',
          type: 'mcp_server',
          categories: [],
          stars: 250,
          stars_delta_7d: 50,
          stars_growth_pct: 25,
          trending_score: 60,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [200, 250],
          tagline: '',
          repo: 'org/existing',
          created_at: '',
          pushed_at: '',
        },
        {
          slug: 'new-tool',
          name: 'New Tool',
          type: 'agent_tool',
          categories: [],
          stars: 120,
          stars_delta_7d: 120,
          stars_growth_pct: 0,
          trending_score: 0,
          velocity_source: 'age_velocity',
          sparkline_4w: [120],
          tagline: '',
          repo: 'org/new',
          created_at: '',
          pushed_at: '',
        },
      ];

      const diff = computeWeeklyDiff({
        currentItems,
        prevSnapshot,
        weekStr: '2026-W42',
        aliases: {},
      });

      expect(diff.added.length).toBe(1);
      expect(diff.added[0].slug).toBe('new-tool');
      expect(diff.removed).toContain('stale-tool');
      expect(diff.surging.length).toBe(1);
      expect(diff.surging[0].slug).toBe('existing-tool');
      expect(diff.summary.total_stars_gained).toBe(170);
    });
  });

  describe('6. Full Stage 8 End-to-End Execution', () => {
    let testRoot: string;

    beforeEach(() => {
      testRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pipeline-trends-test-'));
      fs.mkdirSync(path.join(testRoot, 'data/signals/2026'), { recursive: true });
      fs.mkdirSync(path.join(testRoot, 'data/state'), { recursive: true });

      // Write previous weekly snapshot W41
      const w41Snapshot: SnapshotMap = {
        'test-mcp': { stars: 500, rank: 2 },
        'test-tool': { stars: 1000, rank: 1 },
      };
      fs.writeFileSync(
        path.join(testRoot, 'data/signals/2026/2026-W41.json'),
        JSON.stringify(w41Snapshot, null, 2)
      );
    });

    afterEach(() => {
      if (testRoot && fs.existsSync(testRoot)) {
        fs.rmSync(testRoot, { recursive: true, force: true });
      }
    });

    it('executes runStage8Trends, computes rank deltas, and writes trending.json & diff.json', async () => {
      const mockEntries: EnrichedEntry[] = [
        {
          decision: {
            repo: {
              owner: 'test',
              name: 'mcp',
              fullName: 'test/mcp',
              stars: 700, // +200 stars!
              forks: 50,
              watchers: 700,
              archived: false,
              fork: false,
              isTemplate: false,
              createdAt: '2026-01-01T00:00:00Z',
              pushedAt: '2026-10-15T00:00:00Z',
              topics: ['mcp'],
              defaultBranch: 'main',
            },
            layer1: { passed: true, failureReasons: [] },
            layer2: {
              detectedType: 'mcp_server',
              evidenceKind: 'mcp_server_manifest',
              subpaths: [],
            },
            layer3: {
              adoption: 80,
              maintenance: 80,
              trust: 80,
              community: 80,
              docs: 80,
              compositeScore: 80,
              percentileRank: 85,
              antiFakeFlags: [],
              antiFakeExcluded: false,
            },
            selected: true,
          },
          renderedConfigs: {} as any,
          readmeBody: 'Sample MCP README',
        },
        {
          decision: {
            repo: {
              owner: 'test',
              name: 'tool',
              fullName: 'test/tool',
              stars: 1050, // +50 stars
              forks: 100,
              watchers: 1050,
              archived: false,
              fork: false,
              isTemplate: false,
              createdAt: '2026-01-01T00:00:00Z',
              pushedAt: '2026-10-15T00:00:00Z',
              topics: ['agent-tool'],
              defaultBranch: 'main',
            },
            layer1: { passed: true, failureReasons: [] },
            layer2: {
              detectedType: 'agent_tool',
              evidenceKind: 'tool_manifest',
              subpaths: [],
            },
            layer3: {
              adoption: 90,
              maintenance: 90,
              trust: 90,
              community: 90,
              docs: 90,
              compositeScore: 90,
              percentileRank: 95,
              antiFakeFlags: [],
              antiFakeExcluded: false,
            },
            selected: true,
          },
          renderedConfigs: {} as any,
          readmeBody: 'Sample Tool README',
        },
      ];

      const result = await runStage8Trends(mockEntries, '2026-W42', { rootDir: testRoot });

      // Verify trend metrics attached to entries
      const mcpEntry = result.enrichedEntries.find((e) => e.decision.repo.name === 'mcp');
      expect(mcpEntry?.trendMetrics?.stars_delta_7d).toBe(200);
      expect(mcpEntry?.trendMetrics?.velocity_source).toBe('snapshot_delta');
      expect(mcpEntry?.trendMetrics?.rank_current).toBe(1);
      // Moved from rank 2 in W41 to rank 1 in W42 -> rank_delta = 2 - 1 = +1
      expect(mcpEntry?.trendMetrics?.rank_delta).toBe(1);

      // Verify files generated
      const trendingPath = path.join(testRoot, 'data/runs/2026-W42/trending.json');
      const diffPath = path.join(testRoot, 'data/runs/2026-W42/diff.json');

      expect(fs.existsSync(trendingPath)).toBe(true);
      expect(fs.existsSync(diffPath)).toBe(true);

      const parsedTrending = JSON.parse(fs.readFileSync(trendingPath, 'utf8'));
      expect(parsedTrending.top25_overall.length).toBe(2);
      expect(parsedTrending.summary.total_stars_gained).toBe(250);

      // Verify categories are populated via classifyCategoryAndTags
      expect(parsedTrending.top25_overall[0].categories.length).toBeGreaterThan(0);

      const parsedDiff = JSON.parse(fs.readFileSync(diffPath, 'utf8'));
      expect(parsedDiff.summary.surging_count).toBe(2);
    });

    it('isolates monorepo sub-skills during Stage 8 so sibling skills do not displace primary rankings', async () => {
      const mockEntries: EnrichedEntry[] = [
        {
          decision: {
            repo: {
              owner: 'packorg',
              name: 'bigpack',
              fullName: 'packorg/bigpack',
              stars: 10000,
              forks: 500,
              watchers: 10000,
              archived: false,
              fork: false,
              isTemplate: false,
              createdAt: '2026-01-01T00:00:00Z',
              pushedAt: '2026-10-15T00:00:00Z',
              topics: ['skills'],
              defaultBranch: 'main',
            },
            layer1: { passed: true, failureReasons: [] },
            layer2: {
              detectedType: 'agent_skill',
              evidenceKind: 'skill_md_file',
              subpaths: ['skills/primary'],
            },
            layer3: {
              adoption: 90,
              maintenance: 90,
              trust: 90,
              community: 90,
              docs: 90,
              compositeScore: 90,
              percentileRank: 95,
              antiFakeFlags: [],
              antiFakeExcluded: false,
            },
            selected: true,
          },
          skillSpec: {
            skill_name: 'bigpack-primary',
            description: 'Primary skill',
            folder_path: 'skills/primary',
            entrypoint: 'skills/primary/SKILL.md',
            pack_slug: 'packorg-bigpack',
            pack_total_skills: 2,
            is_pack_primary: true,
            clients: ['claude-code'],
          },
          renderedConfigs: {} as any,
          readmeBody: 'Primary',
        },
        {
          decision: {
            repo: {
              owner: 'packorg',
              name: 'bigpack',
              fullName: 'packorg/bigpack',
              stars: 10000,
              forks: 500,
              watchers: 10000,
              archived: false,
              fork: false,
              isTemplate: false,
              createdAt: '2026-01-01T00:00:00Z',
              pushedAt: '2026-10-15T00:00:00Z',
              topics: ['skills'],
              defaultBranch: 'main',
            },
            layer1: { passed: true, failureReasons: [] },
            layer2: {
              detectedType: 'agent_skill',
              evidenceKind: 'skill_md_file',
              subpaths: ['skills/sibling'],
            },
            layer3: {
              adoption: 90,
              maintenance: 90,
              trust: 90,
              community: 90,
              docs: 90,
              compositeScore: 90,
              percentileRank: 95,
              antiFakeFlags: [],
              antiFakeExcluded: false,
            },
            selected: true,
          },
          skillSpec: {
            skill_name: 'bigpack-sibling',
            description: 'Sibling non-primary skill',
            folder_path: 'skills/sibling',
            entrypoint: 'skills/sibling/SKILL.md',
            pack_slug: 'packorg-bigpack',
            pack_total_skills: 2,
            is_pack_primary: false, // SIBLING SUB-SKILL
            clients: ['claude-code'],
          },
          renderedConfigs: {} as any,
          readmeBody: 'Sibling',
        },
        {
          decision: {
            repo: {
              owner: 'indie',
              name: 'singleskill',
              fullName: 'indie/singleskill',
              stars: 2000,
              forks: 100,
              watchers: 2000,
              archived: false,
              fork: false,
              isTemplate: false,
              createdAt: '2026-03-01T00:00:00Z',
              pushedAt: '2026-10-15T00:00:00Z',
              topics: ['skills'],
              defaultBranch: 'main',
            },
            layer1: { passed: true, failureReasons: [] },
            layer2: {
              detectedType: 'agent_skill',
              evidenceKind: 'skill_md_file',
              subpaths: ['skills/singleskill'],
            },
            layer3: {
              adoption: 80,
              maintenance: 80,
              trust: 80,
              community: 80,
              docs: 80,
              compositeScore: 80,
              percentileRank: 80,
              antiFakeFlags: [],
              antiFakeExcluded: false,
            },
            selected: true,
          },
          skillSpec: {
            skill_name: 'singleskill',
            description: 'Independent skill',
            folder_path: 'skills/singleskill',
            entrypoint: 'skills/singleskill/SKILL.md',
            pack_slug: 'indie-singleskill',
            pack_total_skills: 1,
            is_pack_primary: true,
            clients: ['claude-code'],
          },
          renderedConfigs: {} as any,
          readmeBody: 'Single',
        },
      ];

      // Previous snapshot had all repos with previous stars
      const w41Snapshot: SnapshotMap = {
        'packorg-bigpack-skills-primary': { stars: 9000, rank: 1 },
        'packorg-bigpack-skills-sibling': { stars: 9000 },
        'indie-singleskill-skills-singleskill': { stars: 1500, rank: 2 },
      };
      fs.writeFileSync(
        path.join(testRoot, 'data/signals/2026/2026-W41.json'),
        JSON.stringify(w41Snapshot, null, 2)
      );

      const result = await runStage8Trends(mockEntries, '2026-W42', { rootDir: testRoot });

      const primary = result.enrichedEntries.find((e) => e.skillSpec?.skill_name === 'bigpack-primary');
      const sibling = result.enrichedEntries.find((e) => e.skillSpec?.skill_name === 'bigpack-sibling');
      const indie = result.enrichedEntries.find((e) => e.skillSpec?.skill_name === 'singleskill');

      // Primary gets rank 1
      expect(primary?.trendMetrics?.rank_current).toBe(1);
      // Sibling does NOT qualify for ranking -> undefined rank
      expect(sibling?.trendMetrics?.rank_current).toBeUndefined();
      // Indie gets rank 2 (NOT displaced to 3 by sibling!)
      expect(indie?.trendMetrics?.rank_current).toBe(2);
      expect(indie?.trendMetrics?.rank_delta).toBe(0); // 2 in W41 - 2 in W42 = 0
    });
  });

  describe('7. Adversarial & Edge Case Safeguards', () => {
    it('detects and suppresses sybil / bot bursts via delta-fork coherence check', () => {
      // 100 baseline stars repo gaining 500 bot stars with 0 fork delta and 1 total fork
      // Under unpatched formula: R = 500 / 250 = 2.0 -> Multiplier = 3.0 -> Score = 1,500
      // With anti-sybil coherence check: forkDelta/starDelta = 0/500 = 0 < 0.01 && forkRatio = 1/600 < 0.02
      // Multiplier bonus is clamped to 0 -> Multiplier = 1.0 -> Score = 500.0
      const res = computeTrendingMetrics({
        currentStars: 600,
        prevStars: 100,
        createdDaysAgo: 45,
        pushedDaysAgo: 1,
        currentForks: 1,
        prevForks: 1,
      });

      expect(res.stars_delta_7d).toBe(500);
      expect(res.is_suspicious_burst).toBe(true);
      expect(res.trending_score).toBe(500.0); // Clamped from 1500 to 500!
    });

    it('handles NaN, negative, and invalid date numbers gracefully without producing NaN or Infinity', () => {
      const res = computeTrendingMetrics({
        currentStars: -50,
        prevStars: undefined,
        createdDaysAgo: NaN,
        pushedDaysAgo: -10,
        sparklineHistory: [100, NaN as any, -20],
      });

      expect(Number.isFinite(res.stars_delta_7d)).toBe(true);
      expect(Number.isFinite(res.stars_growth_pct)).toBe(true);
      expect(Number.isFinite(res.trending_score)).toBe(true);
      expect(res.velocity_source).toBe('age_velocity');
      expect(res.sparkline_4w.every((p) => Number.isFinite(p))).toBe(true);
    });

    it('safely parses directory with corrupt JSON and non-week files in loadHistoricalSnapshots', () => {
      const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pipeline-snapshots-test-'));
      try {
        const yearDir = path.join(tempDir, '2026');
        fs.mkdirSync(yearDir, { recursive: true });

        // Valid snapshot
        fs.writeFileSync(path.join(yearDir, '2026-W41.json'), JSON.stringify({ repo: { stars: 100 } }));
        // Corrupted JSON
        fs.writeFileSync(path.join(yearDir, '2026-W40.json'), '{ invalid json ...');
        // Non-week JSON file
        fs.writeFileSync(path.join(yearDir, 'metadata.json'), JSON.stringify({ info: true }));
        // Array JSON file
        fs.writeFileSync(path.join(yearDir, '2026-W39.json'), JSON.stringify([1, 2, 3]));

        const loaded = loadHistoricalSnapshots(tempDir);
        expect(Object.keys(loaded)).toEqual(['2026-W41']);
        expect(loaded['2026-W41'].repo.stars).toBe(100);
      } finally {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    });

    it('deduplicates breakout newcomer candidates so maximum 1 entry per parent repo is emitted', () => {
      const items: TrendingItem[] = [
        {
          slug: 'repo-tool-1',
          name: 'Tool 1',
          type: 'agent_tool',
          categories: ['coding-agents'],
          stars: 500,
          stars_delta_7d: 200,
          stars_growth_pct: 66.7,
          trending_score: 300,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [300, 500],
          tagline: '',
          repo: 'org/same-repo',
          is_pack_primary: true,
          created_at: new Date(Date.now() - 20 * 86400000).toISOString(),
          pushed_at: new Date().toISOString(),
        },
        {
          slug: 'repo-tool-2',
          name: 'Tool 2',
          type: 'agent_tool',
          categories: ['coding-agents'],
          stars: 450,
          stars_delta_7d: 150,
          stars_growth_pct: 50,
          trending_score: 220,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [300, 450],
          tagline: '',
          repo: 'org/same-repo', // Same parent repo!
          is_pack_primary: true,
          created_at: new Date(Date.now() - 20 * 86400000).toISOString(),
          pushed_at: new Date().toISOString(),
        },
        {
          slug: 'indie-tool',
          name: 'Indie Tool',
          type: 'agent_tool',
          categories: ['browser-web'],
          stars: 300,
          stars_delta_7d: 100,
          stars_growth_pct: 50,
          trending_score: 140,
          velocity_source: 'snapshot_delta',
          sparkline_4w: [200, 300],
          tagline: '',
          repo: 'indie/indie-repo',
          is_pack_primary: true,
          created_at: new Date(Date.now() - 25 * 86400000).toISOString(),
          pushed_at: new Date().toISOString(),
        },
      ];

      const leaderboard = assembleTrendingLeaderboards(items, '2026-W42');
      // Must contain 2 entries (1 from org/same-repo, 1 from indie/indie-repo), not 3!
      expect(leaderboard.breakout_new.length).toBe(2);
      expect(leaderboard.breakout_new.map((b) => b.slug)).toEqual(['repo-tool-1', 'indie-tool']);
    });
  });
});

