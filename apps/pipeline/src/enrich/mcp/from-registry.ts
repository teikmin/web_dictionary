import type { LaunchSpec } from '@web-db/schema';
import { fetchMcpRegistry, type McpRegistryServer } from '../../sources/mcp-registry.js';

let cachedRegistryList: McpRegistryServer[] | null = null;

export async function extractFromRegistry(
  owner: string,
  repo: string
): Promise<LaunchSpec | null> {
  if (!cachedRegistryList) {
    cachedRegistryList = await fetchMcpRegistry();
  }

  const repoSlug = `${owner}/${repo}`.toLowerCase();
  const repoName = repo.toLowerCase();

  const matched = cachedRegistryList.find((item: any) => {
    const s = item.server || item;
    const url = (s.repositoryUrl || s.repository?.url || '').toLowerCase();
    const name = (s.name || '').toLowerCase();
    return url.includes(repoSlug) || name.includes(repoName) || name.endsWith(`/${repoName}`);
  });

  if (!matched) return null;

  const s = (matched as any).server || matched;
  const remoteUrl = s.remoteUrl || s.remotes?.[0]?.url;

  if (remoteUrl) {
    return {
      transport: 'http',
      remote_url: remoteUrl,
      args: [],
      env_vars: [],
      confidence: 'registry',
    };
  }

  return {
    transport: 'stdio',
    command: 'npx',
    args: ['-y', s.name],
    env_vars: [],
    confidence: 'registry',
  };
}
