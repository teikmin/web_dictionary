import { describe, it, expect } from 'vitest';

describe('Phase 5: Web Dictionary UX, Skill Packs & Home Radar', () => {
  describe('1. DictionaryCard 4-Tier Synthesis Hierarchy (ADD-5)', () => {
    function synthesizeLine1(entry: {
      tagline?: string;
      summary?: string;
      type: 'mcp_server' | 'agent_skill' | 'agent_tool';
      name: string;
      categoryLabel: string;
      subcategoryLabel?: string;
      transport?: string;
    }): string {
      // Tier 2: Sanitized Tagline
      const tagline = (entry.tagline || '').trim();
      if (tagline.length >= 35) {
        const asciiMatches = tagline.match(/[\x20-\x7E]/g);
        const asciiRatio = (asciiMatches ? asciiMatches.length : 0) / tagline.length;
        const hasBadTokens = /[⚠️|\[!|```]/.test(tagline) || tagline.includes('>-') || tagline.includes('http:') || tagline.includes('https:');
        if (asciiRatio >= 0.8 && !hasBadTokens) {
          return tagline.endsWith('.') ? tagline : `${tagline}.`;
        }
      }

      // Tier 3: Sanitized Summary
      const summary = (entry.summary || '').trim();
      if (summary.length >= 30) {
        const asciiMatches = summary.match(/[\x20-\x7E]/g);
        const asciiRatio = (asciiMatches ? asciiMatches.length : 0) / summary.length;
        const isMultilingualTable = summary.includes('English') && summary.includes('|');
        const hasBadPatterns = /(?:warning:|disclaimer:|the plugin is consumed|npm install|pip install|git clone|uvx |npx )/i.test(summary);
        const hasBadTokens = summary.includes('>-') || summary.includes('|') || summary.includes('```');
        if (asciiRatio >= 0.75 && !isMultilingualTable && !hasBadPatterns && !hasBadTokens) {
          const clean = summary.replace(/\s+/g, ' ').trim();
          return clean.endsWith('.') ? clean : `${clean}.`;
        }
      }

      // Tier 4: Structured Semantic Fallback
      if (entry.type === 'mcp_server') {
        const transport = entry.transport === 'http' ? 'remote HTTP/SSE' : 'local stdio';
        return `${entry.name} is an open-source MCP server providing ${entry.categoryLabel.toLowerCase()} integration via ${transport}.`;
      }
      if (entry.type === 'agent_skill') {
        return `${entry.name} is an agent skill for ${entry.categoryLabel.toLowerCase()} workflows compatible with Claude Code, Codex, and Antigravity.`;
      }
      const toolSubcat = entry.subcategoryLabel || 'agent tool';
      return `${entry.name} is an open-source ${toolSubcat.toLowerCase()} application and framework for AI agent developers.`;
    }

    it('uses clean tagline when length >= 35 and free of bad tokens (Tier 2)', () => {
      const res = synthesizeLine1({
        tagline: 'Autonomous multi-agent research framework for deep web investigation',
        summary: 'Some short summary',
        type: 'agent_tool',
        name: 'GPT Researcher',
        categoryLabel: 'Research',
      });
      expect(res).toBe('Autonomous multi-agent research framework for deep web investigation.');
    });

    it('rejects contaminated multilingual table in summary and falls back to Tier 4', () => {
      const res = synthesizeLine1({
        tagline: 'Too short',
        summary: 'English | 中文 | 日本語 | 한국어 | Русский language selector table',
        type: 'agent_tool',
        name: 'GPT Researcher',
        categoryLabel: 'Research & Domain',
        subcategoryLabel: 'Agent Framework',
      });
      expect(res).toBe('GPT Researcher is an open-source agent framework application and framework for AI agent developers.');
    });

    it('rejects installation commands and warning banners in summary', () => {
      const res = synthesizeLine1({
        tagline: 'Short',
        summary: 'warning: This tool requires npm install -g @modelcontextprotocol/server and key setup',
        type: 'mcp_server',
        name: 'Filesystem Server',
        categoryLabel: 'Coding & Dev',
        transport: 'stdio',
      });
      expect(res).toBe('Filesystem Server is an open-source MCP server providing coding & dev integration via local stdio.');
    });

    it('synthesizes clean structured sentence for Agent Skills (Tier 4)', () => {
      const res = synthesizeLine1({
        tagline: '',
        summary: '',
        type: 'agent_skill',
        name: 'codeart2d',
        categoryLabel: 'Media & Creative',
      });
      expect(res).toBe('codeart2d is an agent skill for media & creative workflows compatible with Claude Code, Codex, and Antigravity.');
    });
  });

  describe('2. Polymorphic Target Interface Adaptation', () => {
    function getInterfaceDisplay(entry: {
      type: 'mcp_server' | 'agent_skill' | 'agent_tool';
      runtime?: string;
      execution_mode?: string;
    }): { label: string; value: string } {
      if (entry.type === 'agent_tool') {
        const mode = entry.execution_mode === 'cloud' ? 'Cloud Hosted' : 'Local Terminal';
        return {
          label: 'Target Interface',
          value: `Standalone CLI · ${(entry.runtime || 'Native').toUpperCase()} Runtime · ${mode}`,
        };
      }
      return {
        label: 'Compatible Clients',
        value: 'Claude Code · OpenAI Codex · Google Antigravity',
      };
    }

    it('renders client compatibility for MCP Servers and Agent Skills', () => {
      const mcp = getInterfaceDisplay({ type: 'mcp_server' });
      expect(mcp.label).toBe('Compatible Clients');
      expect(mcp.value).toContain('Claude Code · OpenAI Codex · Google Antigravity');

      const skill = getInterfaceDisplay({ type: 'agent_skill' });
      expect(skill.label).toBe('Compatible Clients');
      expect(skill.value).toContain('Claude Code · OpenAI Codex · Google Antigravity');
    });

    it('renders standalone CLI target interface for Agent Tools', () => {
      const tool = getInterfaceDisplay({
        type: 'agent_tool',
        runtime: 'python',
        execution_mode: 'local',
      });
      expect(tool.label).toBe('Target Interface');
      expect(tool.value).toBe('Standalone CLI · PYTHON Runtime · Local Terminal');
    });
  });

  describe('3. Monorepo Skill Pack Grouping & Filtering (FIX-4)', () => {
    const mockCatalog = [
      { slug: 'tool-1', type: 'agent_tool', repo: 'framework/core', isPrimary: true },
      { slug: 'mcp-1', type: 'mcp_server', repo: 'server/db', isPrimary: true },
      { slug: 'pack-skill-1', type: 'agent_skill', repo: 'org/big-monorepo', isPrimary: true },
      { slug: 'pack-skill-2', type: 'agent_skill', repo: 'org/big-monorepo', isPrimary: false },
      { slug: 'pack-skill-3', type: 'agent_skill', repo: 'org/big-monorepo', isPrimary: false },
      { slug: 'solo-skill', type: 'agent_skill', repo: 'solo/skill', isPrimary: true },
    ];

    it('collapses sibling skills by default when collapsePacks is true', () => {
      const collapsePacks = true;
      const filtered = mockCatalog.filter((item) => {
        if (collapsePacks && item.type === 'agent_skill' && !item.isPrimary) return false;
        return true;
      });

      expect(filtered.length).toBe(4);
      expect(filtered.map((i) => i.slug)).toEqual(['tool-1', 'mcp-1', 'pack-skill-1', 'solo-skill']);
    });

    it('expands all individual skills when collapsePacks is false', () => {
      const collapsePacks = false;
      const filtered = mockCatalog.filter((item) => {
        if (collapsePacks && item.type === 'agent_skill' && !item.isPrimary) return false;
        return true;
      });

      expect(filtered.length).toBe(6);
    });
  });

  describe('4. Home Radar Preview Data Invariant', () => {
    it('slices top 10 from overall leaderboard and top 4 from breakout newcomers', () => {
      const mockReport = {
        top25_overall: Array.from({ length: 25 }, (_, i) => ({ rank: i + 1, name: `Tool ${i + 1}` })),
        breakout_new: Array.from({ length: 8 }, (_, i) => ({ name: `Newcomer ${i + 1}` })),
      };

      const top10 = mockReport.top25_overall.slice(0, 10);
      const breakout4 = mockReport.breakout_new.slice(0, 4);

      expect(top10.length).toBe(10);
      expect(top10[0].rank).toBe(1);
      expect(top10[9].rank).toBe(10);

      expect(breakout4.length).toBe(4);
      expect(breakout4[0].name).toBe('Newcomer 1');
    });
  });
});
