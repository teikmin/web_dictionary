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
      const allServers: McpRegistryServer[] = [];
      let cursor: string | undefined = undefined;
      let page = 0;
      const maxPages = 10;

      while (page < maxPages) {
        const url = cursor
          ? `https://registry.modelcontextprotocol.io/v0/servers?cursor=${encodeURIComponent(cursor)}`
          : 'https://registry.modelcontextprotocol.io/v0/servers';

        const res = await fetch(url, {
          headers: { 'Accept': 'application/json' },
        });
        if (!res.ok) {
          if (page === 0) throw new Error(`Registry returned HTTP ${res.status}`);
          break;
        }

        const data = (await res.json()) as any;
        const list = Array.isArray(data) ? data : data.servers || [];

        for (const item of list) {
          const s = item.server || item;
          const isLatest = item._meta?.['io.modelcontextprotocol.registry/official']?.isLatest;
          if (isLatest === false) continue;

          allServers.push({
            name: s.name,
            description: s.description,
            repositoryUrl: s.repository?.url || '',
            remoteUrl: s.remotes?.[0]?.url || '',
          });
        }

        cursor = data.metadata?.nextCursor;
        if (!cursor) break;
        page++;
      }

      logger.info(`Fetched ${allServers.length} official MCP Registry servers across ${page + 1} page(s).`);
      return allServers;
    }, 48);
  } catch (err) {
    logger.warn('Failed to fetch from official MCP Registry API, using empty fallback:', (err as Error).message);
    return [];
  }
}
