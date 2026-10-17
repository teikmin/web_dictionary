import type { LaunchSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';
import { hasPlaceholder } from './placeholder.js';

export async function extractFromPackageJson(
  owner: string,
  repo: string,
  paths: string[]
): Promise<LaunchSpec | null> {
  const pkgPath = paths.find((p) => p === 'package.json');
  if (!pkgPath) return null;

  const content = await fetchFileContent(owner, repo, pkgPath);
  if (!content) return null;

  try {
    const pkg = JSON.parse(content);
    if (!pkg.name) return null;

    // Check if published package name is valid
    const pkgName = pkg.name;
    const isMcp =
      pkg.dependencies?.['@modelcontextprotocol/sdk'] ||
      pkg.devDependencies?.['@modelcontextprotocol/sdk'] ||
      pkg.keywords?.includes('mcp') ||
      pkg.keywords?.includes('mcp-server');

    if (!isMcp) return null;

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
      confidence: 'manifest',
    };
  } catch {
    return null;
  }
}
