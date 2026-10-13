import type { LaunchSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export async function extractFromServerJson(
  owner: string,
  repo: string,
  paths: string[]
): Promise<LaunchSpec | null> {
  // Target genuine server.json manifests conforming to MCP spec
  const serverJsonPath = paths.find(
    (p) => p === 'server.json' || p.endsWith('/server.json')
  );

  if (serverJsonPath) {
    const content = await fetchFileContent(owner, repo, serverJsonPath);
    if (content) {
      try {
        const data = JSON.parse(content);
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
          const rawCommand = String(server.command).trim();
          const rawArgs = Array.isArray(server.args) ? server.args.map(String) : [];

          // Reject template placeholders
          const hasPlaceholder =
            rawCommand.includes('{{') ||
            rawCommand.includes('/path/') ||
            rawArgs.some((a: string) => a.includes('{{') || a.includes('/path/') || a.includes('IPADDRESS'));

          if (!hasPlaceholder) {
            return {
              transport: server.transport || 'stdio',
              command: rawCommand,
              args: rawArgs,
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
        }

        // npm package name declared in manifest
        if (server.name && !server.name.includes('{{')) {
          // Verify it's a valid package name, not a registry ID or template
          if (!server.name.startsWith('io.github.') && !server.name.includes('/mcp-server-{{')) {
            return {
              transport: 'stdio',
              command: 'npx',
              args: ['-y', server.name],
              env_vars: [],
              confidence: 'manifest',
            };
          }
        }
      } catch {
        // ignore parse error
      }
    }
  }

  return null;
}
