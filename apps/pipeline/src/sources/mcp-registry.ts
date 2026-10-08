import { cachedFetch } from '../lib/http.js';
import { logger } from '../lib/logger.js';

export interface McpRegistryServer {
  name: string;
  description?: string;
  repository?: {
    url?: string;
    source?: string;
  };
  version?: string;
}

export async function fetchMcpRegistry(): Promise<McpRegistryServer[]> {
  logger.info('Fetching official MCP Registry servers...');
  try {
    return await cachedFetch<McpRegistryServer[]>('mcp_registry_servers', async () => {
      // Official MCP Registry API endpoint
      const res = await fetch('https://registry.modelcontextprotocol.io/v0/servers', {
        headers: { 'Accept': 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`Registry returned HTTP ${res.status}`);
      }
      const data = (await res.json()) as { servers?: McpRegistryServer[] } | McpRegistryServer[];
      return Array.isArray(data) ? data : data.servers || [];
    }, 48);
  } catch (err) {
    logger.warn('Failed to fetch from official MCP Registry API, using empty fallback:', (err as Error).message);
    return [];
  }
}
