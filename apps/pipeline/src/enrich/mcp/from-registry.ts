import type { LaunchSpec } from '@web-db/schema';
import { fetchMcpRegistry, type McpRegistryServer } from '../../sources/mcp-registry.js';
import { hasPlaceholder } from './placeholder.js';

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
    return (
      (url && (url.includes(repoSlug) || url.endsWith(`/${repoName}`))) ||
      name === repoName ||
      name.endsWith(`/${repoName}`) ||
      name === repoSlug
    );
  });

  if (!matched) return null;

  const s = (matched as any).server || matched;
  const remoteUrl = s.remoteUrl || s.remotes?.[0]?.url;

  if (remoteUrl) {
    if (hasPlaceholder(remoteUrl)) {
      return {
        transport: 'http',
        remote_url: undefined,
        command: undefined,
        args: [],
        env_vars: [],
        confidence: 'none',
      };
    }
    return {
      transport: 'http',
      remote_url: remoteUrl,
      args: [],
      env_vars: [],
      confidence: 'registry',
    };
  }

  const pkgName = String(s.name || '');
  if (hasPlaceholder(pkgName)) {
    return {
      transport: 'stdio',
      args: [],
      env_vars: [],
      confidence: 'none',
    };
  }

  return {
    transport: 'stdio',
    command: 'npx',
    args: ['-y', pkgName],
    env_vars: [],
    confidence: 'registry',
  };
}
