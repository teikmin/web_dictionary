import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { runStage9Write } from '../src/stages/9-write.js';
import { generateSlug } from '../src/lib/slug.js';
import type { EnrichedEntry } from '../src/stages/7-enrich.js';

describe('SG-1: Automated Pruning Safeguard & Circuit Breaker', () => {
  let testRoot: string;
  const originalArgv = process.argv;

  beforeAll(() => {
    testRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pipeline-prune-test-'));
  });

  afterAll(() => {
    if (testRoot && fs.existsSync(testRoot)) {
      fs.rmSync(testRoot, { recursive: true, force: true });
    }
  });

  beforeEach(() => {
    process.argv = [...originalArgv.filter((a) => a !== '--force-prune')];

    // Initialize fresh sandbox fixture directories
    const mcpDir = path.join(testRoot, 'content/entries/mcp');
    const skillsDir = path.join(testRoot, 'content/entries/skills');
    fs.rmSync(path.join(testRoot, 'content'), { recursive: true, force: true });
    fs.rmSync(path.join(testRoot, 'data'), { recursive: true, force: true });
    fs.mkdirSync(mcpDir, { recursive: true });
    fs.mkdirSync(skillsDir, { recursive: true });

    // Seed fixture with 20 dummy files (10 MCP + 10 Skills)
    for (let i = 1; i <= 10; i++) {
      const mcpSlug = generateSlug('fixture', `mcp-fixture-${i}`);
      const skillSlug = generateSlug('fixture', `skill-fixture-${i}`);
      fs.writeFileSync(path.join(mcpDir, `${mcpSlug}.md`), `---\nslug: ${mcpSlug}\n---\nBody`);
      fs.writeFileSync(path.join(skillsDir, `${skillSlug}.md`), `---\nslug: ${skillSlug}\n---\nBody`);
    }
  });

  afterEach(() => {
    process.argv = originalArgv;
  });

  it('skips unlinking stale entries when forcePrune option is omitted (default safe mode)', async () => {
    // 20 entries exist, 0 written, forcePrune: false -> 0 pruned
    const res = await runStage9Write([], '2026-W42', { rootDir: testRoot, forcePrune: false });
    expect(res.prunedCount).toBe(0);

    const mcpFiles = fs.readdirSync(path.join(testRoot, 'content/entries/mcp'));
    const skillFiles = fs.readdirSync(path.join(testRoot, 'content/entries/skills'));
    expect(mcpFiles.length).toBe(10);
    expect(skillFiles.length).toBe(10);
  });

  it('triggers circuit breaker when candidate prune count exceeds 5% threshold', async () => {
    // 20 entries exist, attempting to prune all 20 (> 5% of 20 = 1 allowed) must trigger circuit breaker
    await expect(
      runStage9Write([], '2026-W42', { rootDir: testRoot, forcePrune: true })
    ).rejects.toThrow(/\[CIRCUIT BREAKER ACTIVATED\]/);

    // Verify no files were unlinked
    const mcpFiles = fs.readdirSync(path.join(testRoot, 'content/entries/mcp'));
    expect(mcpFiles.length).toBe(10);
  });

  it('prunes and archives stale entries when within 5% limit and forcePrune is enabled', async () => {
    // Mock 19 enriched entries (10 skills + 9 MCP), leaving exactly 1 stale MCP file (1 / 20 = 5% <= 5%)
    const mockEntries: EnrichedEntry[] = [];

    for (let i = 1; i <= 9; i++) {
      mockEntries.push({
        decision: {
          repo: {
            fullName: `fixture/mcp-fixture-${i}`,
            owner: 'fixture',
            name: `mcp-fixture-${i}`,
            stars: 500,
            forks: 50,
            watchers: 500,
            pushedAt: '2026-10-15T00:00:00Z',
            topics: ['mcp-server'],
          },
          layer2: { detectedType: 'mcp_server', evidencePaths: ['server.json'] },
          selected: true,
        } as any,
        launchSpec: {
          transport: 'stdio',
          command: 'npx',
          args: ['-y', `mcp-fixture-${i}`],
          confidence: 'manifest',
        },
        renderedConfigs: {} as any,
      });
    }

    for (let i = 1; i <= 10; i++) {
      mockEntries.push({
        decision: {
          repo: {
            fullName: `fixture/skill-fixture-${i}`,
            owner: 'fixture',
            name: `skill-fixture-${i}`,
            stars: 500,
            forks: 50,
            watchers: 500,
            pushedAt: '2026-10-15T00:00:00Z',
            topics: ['agent-skill'],
          },
          layer2: { detectedType: 'agent_skill', evidencePaths: ['SKILL.md'] },
          selected: true,
        } as any,
        skillSpec: {
          skill_name: `skill-fixture-${i}`,
          description: 'Fixture skill',
          folder_path: '.',
          pack_total_skills: 1,
          is_pack_primary: true,
          clients: ['claude-code'],
        },
        renderedConfigs: {} as any,
      });
    }

    // Run with forcePrune: true inside hermetic testRoot
    const res = await runStage9Write(mockEntries, '2026-W42', { rootDir: testRoot, forcePrune: true });
    expect(res.prunedCount).toBe(1);

    // Verify mcp-fixture-10 was moved to archive
    const staleSlug = generateSlug('fixture', 'mcp-fixture-10');
    const archiveDir = path.join(testRoot, 'data/archive/pruned/2026-W42');
    expect(fs.existsSync(path.join(archiveDir, `${staleSlug}.md`))).toBe(true);

    // Verify remaining catalog files
    const remainingMcp = fs.readdirSync(path.join(testRoot, 'content/entries/mcp'));
    expect(remainingMcp.length).toBe(9);
    expect(remainingMcp).not.toContain(`${staleSlug}.md`);
  });
});
