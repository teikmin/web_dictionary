import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  detectToolRuntime,
  detectToolSubcategory,
  detectToolExecutionMode,
  extractInstallCommand,
} from '../src/enrich/tools/from-repo.js';
import { ToolSpecSchema, ToolEntrySchema } from '@web-db/schema';
import { runStage6Selection } from '../src/stages/6-select.js';
import { checkSingleCandidate } from '../src/stages/3-type-check.js';
import type { ScoredCandidate } from '../src/stages/4-score.js';
import type { GateCheckedCandidate } from '../src/stages/2-gates.js';

const mockFileContents: Record<string, string> = {};
const mockRepoTrees: Record<string, string[]> = {};

vi.mock('../src/sources/github-contents.js', () => ({
  fetchRepoTree: vi.fn(async (owner: string, repo: string) => ({
    paths: mockRepoTrees[`${owner}/${repo}`] || [],
    truncated: false,
  })),
  fetchFileContent: vi.fn(async (owner: string, repo: string, path: string) => {
    return mockFileContents[`${owner}/${repo}/${path}`] ?? null;
  }),
}));

describe('Phase 2: 3rd Pillar (Agent Tools & Repos)', () => {
  beforeEach(() => {
    for (const key of Object.keys(mockFileContents)) {
      delete mockFileContents[key];
    }
    for (const key of Object.keys(mockRepoTrees)) {
      delete mockRepoTrees[key];
    }
  });

  describe('Tool Spec & Heuristics Extraction', () => {
    it('detects runtime correctly based on repository manifests and language fallback', () => {
      expect(detectToolRuntime(['package.json'])).toBe('node');
      expect(detectToolRuntime(['pyproject.toml'])).toBe('python');
      expect(detectToolRuntime(['Cargo.toml'])).toBe('rust');
      expect(detectToolRuntime(['go.mod'])).toBe('go');
      expect(detectToolRuntime(['Dockerfile'])).toBe('docker');
      expect(detectToolRuntime(['package.json', 'pyproject.toml'])).toBe('multi');
      expect(detectToolRuntime([])).toBe('unknown');

      // Fallback with repoMeta
      expect(
        detectToolRuntime([], {
          id: 1,
          owner: 'test',
          name: 'repo',
          fullName: 'test/repo',
          stars: 100,
          forks: 10,
          watchers: 10,
          openIssues: 0,
          createdAt: '',
          pushedAt: '',
          updatedAt: '',
          archived: false,
          fork: false,
          isTemplate: false,
          defaultBranch: 'main',
          sourceUrl: '',
          source: 'github-search',
          discoveredAt: '',
          language: 'TypeScript',
        })
      ).toBe('node');
    });

    it('detects subcategories accurately from keywords and topics', () => {
      expect(
        detectToolSubcategory('UI-TARS-desktop', 'Multimodal desktop agent', ['desktop', 'gui'])
      ).toBe('desktop_ui');
      expect(
        detectToolSubcategory('python-sdk', 'Official Python SDK for MCP', ['sdk'])
      ).toBe('sdk_harness');
      expect(
        detectToolSubcategory('fastmcp', 'Fast MCP framework', ['framework'])
      ).toBe('sdk_harness');
      expect(
        detectToolSubcategory('aider', 'AI pair programming in your terminal', ['coding-agent'])
      ).toBe('coding_agent');
      expect(
        detectToolSubcategory('scrapling', 'Undetectable web scraper', ['crawler', 'scrape'])
      ).toBe('browser_agent');
      expect(
        detectToolSubcategory('mem0', 'The memory layer for AI agents', ['memory', 'rag'])
      ).toBe('memory_rag');
      expect(
        detectToolSubcategory('gpt-researcher', 'Autonomous research agent', ['agent-framework'])
      ).toBe('agent_framework');
    });

    it('detects execution mode (local, cloud, hybrid)', () => {
      expect(detectToolExecutionMode('Local CLI tool', ['cli'])).toBe('local');
      expect(detectToolExecutionMode('Cloud-hosted SaaS agent platform', ['cloud'])).toBe('cloud');
      expect(detectToolExecutionMode('Local CLI with optional cloud sync', ['cli', 'cloud'])).toBe('hybrid');
    });

    it('extracts install command accurately across various package managers', async () => {
      // 1. package.json with bin -> npx
      mockFileContents['owner/node-cli/package.json'] = JSON.stringify({
        name: 'my-agent-cli',
        bin: { 'my-agent': './bin.js' },
      });
      const cmd1 = await extractInstallCommand('owner', 'node-cli', ['package.json'], 'node');
      expect(cmd1).toBe('npx my-agent-cli');

      // 2. package.json library -> npm install
      mockFileContents['owner/node-lib/package.json'] = JSON.stringify({
        name: 'my-agent-sdk',
      });
      const cmd2 = await extractInstallCommand('owner', 'node-lib', ['package.json'], 'node');
      expect(cmd2).toBe('npm install my-agent-sdk');

      // 3. package.json private -> git clone fallback
      mockFileContents['owner/private-tool/package.json'] = JSON.stringify({
        name: 'private-agent',
        private: true,
      });
      const cmd3 = await extractInstallCommand('owner', 'private-tool', ['package.json'], 'node');
      expect(cmd3).toBe('git clone https://github.com/owner/private-tool.git');

      // 4. pyproject.toml -> pip install
      mockFileContents['owner/py-agent/pyproject.toml'] = `
[project]
name = "python-agent-framework"
version = "0.1.0"
`;
      const cmd4 = await extractInstallCommand('owner', 'py-agent', ['pyproject.toml'], 'python');
      expect(cmd4).toBe('pip install python-agent-framework');

      // 5. setup.py -> pip install
      mockFileContents['owner/setup-agent/setup.py'] = `
setup(name='legacy-agent', version='1.0')
`;
      const cmd5 = await extractInstallCommand('owner', 'setup-agent', ['setup.py'], 'python');
      expect(cmd5).toBe('pip install legacy-agent');

      // 6. requirements.txt -> clone and install
      const cmd6 = await extractInstallCommand('owner', 'req-agent', ['requirements.txt'], 'python');
      expect(cmd6).toBe('git clone https://github.com/owner/req-agent.git && cd req-agent && pip install -r requirements.txt');

      // 7. Cargo.toml -> cargo install
      const cmd7 = await extractInstallCommand('owner', 'rust-agent', ['Cargo.toml'], 'rust');
      expect(cmd7).toBe('cargo install --git https://github.com/owner/rust-agent.git');

      // 8. go.mod -> go install
      const cmd8 = await extractInstallCommand('owner', 'go-agent', ['go.mod'], 'go');
      expect(cmd8).toBe('go install github.com/owner/go-agent@latest');

      // 9. Unknown -> git clone
      const cmd9 = await extractInstallCommand('owner', 'other-agent', [], 'unknown');
      expect(cmd9).toBe('git clone https://github.com/owner/other-agent.git');
    });

    it('validates ToolEntrySchema successfully with realistic metadata', () => {
      const validToolEntry = {
        slug: 'assafelovic-gpt-researcher',
        type: 'agent_tool',
        name: 'gpt-researcher',
        tagline: 'Autonomous deep research agent',
        categories: ['agent-frameworks'],
        tags: ['research'],
        status: 'active',
        quality_percentile: 95,
        selection_reason: 'quality_percentile',
        first_seen: '2026-10-14',
        last_updated: '2026-10-14T14:55:21.336Z',
        source: {
          kind: 'github_repo',
          repo: 'assafelovic/gpt-researcher',
          official_vendor: false,
          license: 'Apache-2.0',
        },
        signals: {
          stars: 30074,
          last_commit: '2026-10-10T22:03:53Z',
        },
        language: 'en',
        needs_keys: false,
        prerequisites: ['Python >= 3.10'],
        tool: {
          subcategory: 'agent_framework',
          install_command: 'pip install gpt-researcher',
          runtime: 'python',
          execution_mode: 'local',
          has_mcp_support: true,
          mcp_launch: {
            transport: 'stdio',
            command: 'uvx',
            args: ['gpt-researcher'],
            env_vars: [],
            confidence: 'manifest',
          },
        },
      };

      const result = ToolEntrySchema.safeParse(validToolEntry);
      expect(result.success).toBe(true);
    });

    it('validates ToolSpecSchema with backward-compatible defaults', () => {
      const parsed = ToolSpecSchema.parse({});
      expect(parsed.subcategory).toBe('other');
      expect(parsed.runtime).toBe('unknown');
      expect(parsed.execution_mode).toBe('local');
      expect(parsed.has_mcp_support).toBe(false);
      expect(parsed.install_command).toBeUndefined();
      expect(parsed.mcp_launch).toBeUndefined();
    });
  });

  describe('Stage 3 Type Checking & Classification for Tools', () => {
    function makeCandidate(fullName: string, topics: string[] = [], desc: string = ''): GateCheckedCandidate {
      const [owner, name] = fullName.split('/');
      return {
        repo: {
          id: 100,
          owner,
          name,
          fullName,
          defaultBranch: 'main',
          stars: 1000,
          forks: 50,
          watchers: 50,
          openIssues: 2,
          createdAt: '2025-01-01T00:00:00Z',
          pushedAt: '2026-10-10T00:00:00Z',
          updatedAt: '2026-10-10T00:00:00Z',
          license: 'MIT',
          topics,
          description: desc,
          archived: false,
          fork: false,
          isTemplate: false,
          sourceUrl: `https://github.com/${fullName}`,
          source: 'github-search',
          discoveredAt: new Date().toISOString(),
        },
        layer1: { passed: true, failureReasons: [], missingHardRequirements: [] },
        isBlocked: false,
        isPinned: false,
        isOfficialVendor: false,
      };
    }

    it('classifies gpt-researcher, UI-TARS-desktop, Scrapling, and trigger.dev as agent_tool', async () => {
      // 1. gpt-researcher
      mockRepoTrees['assafelovic/gpt-researcher'] = ['pyproject.toml', 'README.md'];
      mockFileContents['assafelovic/gpt-researcher/pyproject.toml'] = 'name = "gpt-researcher"\ndependencies = ["mcp"]';
      const res1 = await checkSingleCandidate(
        makeCandidate('assafelovic/gpt-researcher', ['agent-framework'], 'Autonomous deep research agent')
      );
      expect(res1.layer2.detectedType).toBe('agent_tool');
      expect(res1.layer2.evidenceKind).toBe('tool_manifest');

      // 2. UI-TARS-desktop
      mockRepoTrees['bytedance/UI-TARS-desktop'] = ['package.json', 'README.md'];
      mockFileContents['bytedance/UI-TARS-desktop/package.json'] = JSON.stringify({ name: 'ui-tars-desktop' });
      const res2 = await checkSingleCandidate(
        makeCandidate('bytedance/UI-TARS-desktop', ['desktop', 'gui', 'ai-agent'], 'Multimodal AI Agent stack')
      );
      expect(res2.layer2.detectedType).toBe('agent_tool');
      expect(res2.layer2.evidenceKind).toBe('tool_manifest');

      // 3. Scrapling
      mockRepoTrees['d4vinci/Scrapling'] = ['pyproject.toml', 'README.md'];
      mockFileContents['d4vinci/Scrapling/pyproject.toml'] = 'name = "scrapling"';
      const res3 = await checkSingleCandidate(
        makeCandidate('d4vinci/Scrapling', ['browser-agent', 'scraper'], 'Web scraping framework')
      );
      expect(res3.layer2.detectedType).toBe('agent_tool');

      // 4. trigger.dev
      mockRepoTrees['triggerdotdev/trigger.dev'] = ['package.json', 'README.md'];
      mockFileContents['triggerdotdev/trigger.dev/package.json'] = JSON.stringify({ name: 'trigger.dev' });
      const res4 = await checkSingleCandidate(
        makeCandidate('triggerdotdev/trigger.dev', ['agent-framework', 'workflow'], 'Durable AI agents and workflows')
      );
      expect(res4.layer2.detectedType).toBe('agent_tool');
    });

    it('classifies SDKs (python-sdk, fastmcp) as agent_tool even if MCP dependencies exist', async () => {
      // python-sdk
      mockRepoTrees['modelcontextprotocol/python-sdk'] = ['pyproject.toml', 'README.md'];
      mockFileContents['modelcontextprotocol/python-sdk/pyproject.toml'] = 'name = "mcp"';
      const res1 = await checkSingleCandidate(
        makeCandidate('modelcontextprotocol/python-sdk', ['mcp', 'sdk'], 'Official Python SDK for MCP')
      );
      expect(res1.layer2.detectedType).toBe('agent_tool');

      // fastmcp
      mockRepoTrees['prefecthq/fastmcp'] = ['pyproject.toml', 'README.md'];
      mockFileContents['prefecthq/fastmcp/pyproject.toml'] = 'name = "fastmcp"\ndependencies = ["mcp"]';
      const res2 = await checkSingleCandidate(
        makeCandidate('prefecthq/fastmcp', ['framework', 'mcp'], 'Fast MCP framework')
      );
      expect(res2.layer2.detectedType).toBe('agent_tool');
    });

    it('classifies pure MCP servers with server.json as mcp_server', async () => {
      mockRepoTrees['modelcontextprotocol/servers'] = ['src/sqlite/server.json', 'README.md'];
      mockFileContents['modelcontextprotocol/servers/src/sqlite/server.json'] = JSON.stringify({
        $schema: 'https://modelcontextprotocol.io/schema/server.json',
        name: 'sqlite',
        command: 'uvx',
      });
      const res = await checkSingleCandidate(
        makeCandidate('modelcontextprotocol/servers', ['mcp-server'], 'Collection of reference MCP servers')
      );
      expect(res.layer2.detectedType).toBe('mcp_server');
      expect(res.layer2.evidenceKind).toBe('mcp_server_manifest');
    });
  });

  describe('Stage 6 Selection Allocation for Tools', () => {
    it('allocates candidates across MCP, Skills, and Tools up to configured targets', () => {
      const dummyBase = {
        repo: {
          owner: 'test',
          name: 'tool',
          fullName: 'test/tool',
          defaultBranch: 'main',
          stars: 1000,
          forks: 50,
          watchers: 50,
          pushedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          license: 'MIT',
          topics: ['ai-agents'],
        },
        layer1: { passed: true, failureReasons: [], missingHardRequirements: [] },
        layer3: {
          adoption: 80,
          maintenance: 80,
          trust: 80,
          community: 80,
          docs: 80,
          compositeScore: 80,
          percentileRank: 90,
          antiFakeFlags: [],
          antiFakeExcluded: false,
        },
      };

      const candidates: ScoredCandidate[] = [
        {
          ...dummyBase,
          repo: { ...dummyBase.repo, name: 'mcp-1', fullName: 'test/mcp-1' },
          layer2: { detectedType: 'mcp_server', evidenceKind: 'mcp_server_manifest', subpaths: [] },
        },
        {
          ...dummyBase,
          repo: { ...dummyBase.repo, name: 'skill-1', fullName: 'test/skill-1' },
          layer2: { detectedType: 'agent_skill', evidenceKind: 'skill_md_file', subpaths: [] },
        },
        {
          ...dummyBase,
          repo: { ...dummyBase.repo, name: 'tool-1', fullName: 'test/tool-1' },
          layer2: { detectedType: 'agent_tool', evidenceKind: 'tool_manifest', subpaths: [] },
        },
      ];

      const decisions = runStage6Selection(candidates);
      expect(decisions.length).toBe(3);
      expect(decisions.every((d) => d.selected)).toBe(true);

      const toolDecision = decisions.find((d) => d.repo.fullName === 'test/tool-1');
      expect(toolDecision?.selected).toBe(true);
      expect(toolDecision?.layer2.detectedType).toBe('agent_tool');
    });
  });
});
