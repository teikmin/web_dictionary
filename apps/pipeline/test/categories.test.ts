import { describe, it, expect } from 'vitest';
import {
  classifyCategoryAndTags,
  CATEGORY_DEFINITIONS,
} from '../src/classify/categories.js';

describe('FIX-2, ADD-4 & SG-6: Score-Weighted Dynamic Category Classifier', () => {
  it('defines 10 distinct categories (9 pillars + other)', () => {
    expect(CATEGORY_DEFINITIONS.length).toBe(10);
    const ids = CATEGORY_DEFINITIONS.map((c) => c.id);
    expect(ids).toContain('coding-agents');
    expect(ids).toContain('browser-web');
    expect(ids).toContain('databases-memory');
    expect(ids).toContain('agent-frameworks');
    expect(ids).toContain('productivity-ops');
    expect(ids).toContain('cloud-infra');
    expect(ids).toContain('media-creative');
    expect(ids).toContain('security-auth');
    expect(ids).toContain('domain-research');
    expect(ids).toContain('other');
  });

  it('classifies database and vector memory tools accurately without bare agent bias', () => {
    const res = classifyCategoryAndTags({
      name: 'postgres-mcp',
      desc: 'An AI agent MCP server to query PostgreSQL databases and run migrations',
      topics: ['mcp-server', 'postgres', 'database', 'sql'],
    });

    expect(res.categories[0]).toBe('databases-memory');
    expect(res.tags).toContain('postgres');
  });

  it('classifies browser automation tools accurately without bare agent bias', () => {
    const res = classifyCategoryAndTags({
      name: 'playwright-mcp',
      desc: 'Browser automation MCP server for agents using Playwright',
      topics: ['playwright', 'browser-automation'],
    });

    expect(res.categories[0]).toBe('browser-web');
    expect(res.tags).toContain('playwright');
  });

  it('does NOT dump tools mentioning agent into agent-frameworks when specific domain exists', () => {
    const res = classifyCategoryAndTags({
      name: 'sentry-agent-tracker',
      desc: 'Track errors in production LLM applications with Sentry telemetry',
      topics: ['sentry', 'telemetry', 'observability'],
    });

    expect(res.categories[0]).toBe('cloud-infra');
  });

  it('classifies coding and developer agents accurately with compound tokens', () => {
    const res = classifyCategoryAndTags({
      name: 'ast-grep-agent',
      desc: 'Fast structural search and replace for AI code review and refactoring',
      topics: ['ast-grep', 'code-review', 'refactoring'],
    });

    expect(res.categories[0]).toBe('coding-agents');
  });

  it('classifies security and vulnerability scanners accurately', () => {
    const res = classifyCategoryAndTags({
      name: 'cve-audit-mcp',
      desc: 'Scan dependencies for known vulnerabilities and CVE security issues',
      topics: ['cve', 'security', 'audit', 'vulnerability'],
    });

    expect(res.categories[0]).toBe('security-auth');
    expect(res.tags).toContain('security');
  });

  it('extracts up to 4 clean tags without generic clutter', () => {
    const res = classifyCategoryAndTags({
      name: 'docker-postgres-runner',
      desc: 'Run PostgreSQL inside Docker containers for testing Playwright scripts',
      topics: ['docker', 'postgres', 'playwright', 'testing', 'mcp'],
    });

    expect(res.tags.length).toBeLessThanOrEqual(4);
    expect(res.tags).toContain('docker');
    expect(res.tags).toContain('postgres');
    expect(res.tags).not.toContain('mcp'); // generic tag excluded
  });
});
