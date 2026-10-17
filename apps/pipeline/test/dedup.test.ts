import { describe, it, expect } from 'vitest';
import {
  normalizeBaseSkillName,
  detectClientsFromSubpath,
  CLIENT_PREFIX_REGEX,
} from '../src/stages/7-enrich.js';
import { generateSlug } from '../src/lib/slug.js';

describe('SG-4 & FIX-1: Skill Deduplication & Client Prefix Stripping', () => {
  it('strips client prefixes cleanly from skill names', () => {
    expect(normalizeBaseSkillName('codex-skillopt-sleep', 'unrelated-repo')).toBe('skillopt-sleep');
    expect(normalizeBaseSkillName('cursor-skillopt-sleep', 'unrelated-repo')).toBe('skillopt-sleep');
    expect(normalizeBaseSkillName('claude-skillopt-sleep', 'unrelated-repo')).toBe('skillopt-sleep');
    expect(normalizeBaseSkillName('plugins-claude-code-skills-skillopt-sleep', 'unrelated-repo')).toBe(
      'skillopt-sleep'
    );
    expect(normalizeBaseSkillName('dsh-skillopt-sleep', 'unrelated-repo')).toBe('skillopt-sleep');
  });

  it('strips repository name prefix if present', () => {
    expect(normalizeBaseSkillName('paperclip-delegate-work', 'paperclip')).toBe('delegate-work');
    expect(normalizeBaseSkillName('skillopt-sleep', 'SkillOpt')).toBe('sleep');
    expect(normalizeBaseSkillName('codex-skillopt-sleep', 'SkillOpt')).toBe('sleep');
  });

  it('detects client platforms from subpath strings', () => {
    expect(detectClientsFromSubpath('plugins/claude-code/skills/sleep')).toEqual(['claude-code']);
    expect(detectClientsFromSubpath('plugins/codex/skills/sleep')).toEqual(['codex']);
    expect(detectClientsFromSubpath('plugins/cursor/skills/sleep')).toEqual(['cursor']);
    expect(detectClientsFromSubpath('skills/gemini-pro/setup')).toEqual(['antigravity']);
    expect(detectClientsFromSubpath('skills/common/setup')).toEqual([
      'claude-code',
      'codex',
      'antigravity',
    ]);
  });

  it('preserves distinct slug aliases for client clones while pointing to canonical slug', () => {
    const owner = 'microsoft';
    const repo = 'SkillOpt';
    const subpathClaude = 'plugins/claude-code/skills/skillopt-sleep';
    const subpathCodex = 'plugins/codex/skills/skillopt-sleep';
    const subpathCursor = 'plugins/cursor/skills/skillopt-sleep';

    const slugClaude = generateSlug(owner, repo, subpathClaude);
    const slugCodex = generateSlug(owner, repo, subpathCodex);
    const slugCursor = generateSlug(owner, repo, subpathCursor);

    // Slug generation produces distinct historical slugs
    expect(slugClaude).toBe('microsoft-skillopt-plugins-claude-code-skills-skillopt-sleep');
    expect(slugCodex).toBe('microsoft-skillopt-plugins-codex-skills-skillopt-sleep');
    expect(slugCursor).toBe('microsoft-skillopt-plugins-cursor-skills-skillopt-sleep');

    // Canonical slug chosen is the first encountered (e.g. claude)
    const canonicalSlug = slugClaude;
    const aliasRegistry: Record<string, string> = {};
    for (const s of [slugClaude, slugCodex, slugCursor]) {
      if (s !== canonicalSlug) {
        aliasRegistry[s] = canonicalSlug;
      }
    }

    expect(aliasRegistry[slugCodex]).toBe(canonicalSlug);
    expect(aliasRegistry[slugCursor]).toBe(canonicalSlug);
    expect(aliasRegistry[slugClaude]).toBeUndefined();
  });
});
