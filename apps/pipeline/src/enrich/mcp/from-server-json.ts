import type { LaunchSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export async function extractFromServerJson(
  owner: string,
  repo: string,
  paths: string[]
): Promise<LaunchSpec | null> {
  const serverJsonPath = paths.find(
    (p) => p.endsWith('server.json') || p.endsWith('mcp.json')
  );

  if (serverJsonPath) {
    const content = await fetchFileContent(owner, repo, serverJsonPath);
    if (content) {
      try {
        const data = JSON.parse(content);

        // Standard mcp.json format { mcpServers: { [name]: { command, args, env } } }
        if (data.mcpServers) {
          const keys = Object.keys(data.mcpServers);
          if (keys.length > 0) {
            const s = data.mcpServers[keys[0]];
            return {
              transport: s.url ? 'http' : s.transport || 'stdio',
              command: s.command,
              args: Array.isArray(s.args) ? s.args : [],
              remote_url: s.url,
              env_vars: s.env
                ? Object.keys(s.env).map((k) => ({
                    name: k,
                    required: true,
                    secret: true,
                  }))
                : [],
              confidence: 'manifest',
            };
          }
        }

        const server = data.server || data;

        if (server.remotes && server.remotes.length > 0 && server.remotes[0].url) {
          return {
            transport: 'http',
            remote_url: server.remotes[0].url,
            args: [],
            env_vars: [],
            confidence: 'manifest',
          };
        }

        if (server.command) {
          return {
            transport: server.transport || 'stdio',
            command: server.command,
            args: Array.isArray(server.args) ? server.args : [],
            env_vars: server.env
              ? Object.keys(server.env).map((k) => ({
                  name: k,
                  required: true,
                  secret: true,
                }))
              : [],
            confidence: 'manifest',
          };
        }

        if (server.name) {
          return {
            transport: 'stdio',
            command: 'npx',
            args: ['-y', server.name],
            env_vars: [],
            confidence: 'manifest',
          };
        }
      } catch {
        // ignore parse error
      }
    }
  }

  // Check for Dockerfile in an official or standalone MCP server
  if (paths.includes('Dockerfile') && repo.toLowerCase().includes('mcp')) {
    return {
      transport: 'stdio',
      command: 'docker',
      args: ['run', '-i', '--rm', `ghcr.io/${owner.toLowerCase()}/${repo.toLowerCase()}`],
      env_vars: [],
      confidence: 'manifest',
    };
  }

  return null;
}
