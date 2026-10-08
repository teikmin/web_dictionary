import { describe, it, expect } from 'vitest';
import {
  renderMcpForAllClients,
  renderSkillForAllClients,
} from '../src/index.js';
import type { LaunchSpec, SkillSpec } from '@web-db/schema';

describe('Client Config Renderers', () => {
  it('renders standard stdio npm MCP server across all 3 clients', () => {
    const spec: LaunchSpec = {
      transport: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-postgres', 'postgresql://localhost/mydb'],
      env_vars: [],
      confidence: 'manifest',
    };

    const rendered = renderMcpForAllClients('postgres', spec);

    // 1. Claude Code
    expect(rendered['claude-code'].mcpCommand).toBe(
      'claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb'
    );
    expect(rendered['claude-code'].mcpSnippet).toContain('"postgres"');

    // 2. Codex
    expect(rendered['codex'].mcpSnippet).toContain('[mcp_servers.postgres]');
    expect(rendered['codex'].mcpSnippet).toContain('command = "npx"');

    // 3. Antigravity
    expect(rendered['antigravity'].mcpSnippet).toContain('"postgres"');
    expect(rendered['antigravity'].mcpSnippet).toContain('"command": "npx"');
  });

  it('renders stdio Python MCP server with secret environment variable', () => {
    const spec: LaunchSpec = {
      transport: 'stdio',
      command: 'uvx',
      args: ['mcp-server-github'],
      env_vars: [
        {
          name: 'GITHUB_PERSONAL_ACCESS_TOKEN',
          required: true,
          secret: true,
          description: 'GitHub Personal Access Token',
        },
      ],
      confidence: 'manifest',
    };

    const rendered = renderMcpForAllClients('github', spec);

    // Claude Code with env flag
    expect(rendered['claude-code'].mcpCommand).toContain(
      '-e GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE'
    );
    expect(rendered['claude-code'].mcpSnippet).toContain('YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE');

    // Codex with env block
    expect(rendered['codex'].mcpSnippet).toContain('[mcp_servers.github.env]');
    expect(rendered['codex'].mcpSnippet).toContain(
      'GITHUB_PERSONAL_ACCESS_TOKEN = "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE"'
    );

    // Antigravity with env object
    expect(rendered['antigravity'].mcpSnippet).toContain('GITHUB_PERSONAL_ACCESS_TOKEN');
  });

  it('renders remote HTTP MCP server', () => {
    const spec: LaunchSpec = {
      transport: 'http',
      remote_url: 'https://mcp.stripe.com/sse',
      args: [],
      env_vars: [],
      confidence: 'registry',
    };

    const rendered = renderMcpForAllClients('stripe', spec);

    expect(rendered['claude-code'].mcpCommand).toBe(
      'claude mcp add --transport http stripe https://mcp.stripe.com/sse'
    );
    expect(rendered['codex'].mcpSnippet).toContain('url = "https://mcp.stripe.com/sse"');
    expect(rendered['antigravity'].mcpSnippet).toContain('https://mcp.stripe.com/sse');
  });

  it('renders Agent Skill across all 3 clients', () => {
    const spec: SkillSpec = {
      skill_name: 'pdf-extractor',
      description: 'Extract and analyze text from PDF files',
      folder_path: 'skills/pdf-extractor',
      extra_files: ['scripts/parse.py'],
    };

    const rendered = renderSkillForAllClients('pdf-extractor', spec);

    expect(rendered['claude-code'].skillInstallPath).toBe('.claude/skills/pdf-extractor/');
    expect(rendered['codex'].skillInstallPath).toBe('.codex/skills/pdf-extractor/');
    expect(rendered['antigravity'].skillInstallPath).toBe('.gemini/skills/pdf-extractor/');
  });
});
