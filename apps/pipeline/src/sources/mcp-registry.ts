import { cachedFetch } from '../lib/http.js';
import { logger } from '../lib/logger.js';

export interface McpRegistryServer {
  name: string;
  description?: string;
  repositoryUrl?: string;
  remoteUrl?: string;
}

export async function fetchMcpRegistry(): Promise<McpRegistryServer[]> {
  logger.info('Fetching official MCP Registry servers...');
  try {
    return await cachedFetch<McpRegistryServer[]>('mcp_registry_servers', async () => {
      const res = await fetch('https://registry.modelcontextprotocol.io/v0/servers', {
        headers: { 'Accept': 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`Registry returned HTTP ${res.status}`);
      }
      const data = (await res.json()) as any;
      const list = Array.isArray(data) ? data : data.servers || [];

      return list.map((item: any) => {
        const s = item.server || item;
        return {
          name: s.name,
          description: s.description,
          repositoryUrl: s.repository?.url || '',
          remoteUrl: s.remotes?.[0]?.url || '',
        };
      });
    }, 48);
  } catch (err) {
    logger.warn('Failed to fetch from official MCP Registry API, using empty fallback:', (err as Error).message);
    return [];
  }
}
