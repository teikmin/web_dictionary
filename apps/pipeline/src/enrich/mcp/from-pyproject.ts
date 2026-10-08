import type { LaunchSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export async function extractFromPyproject(
  owner: string,
  repo: string,
  paths: string[]
): Promise<LaunchSpec | null> {
  const pyprojectPath = paths.find((p) => p === 'pyproject.toml');
  if (!pyprojectPath) return null;

  const content = await fetchFileContent(owner, repo, pyprojectPath);
  if (!content) return null;

  // Extract name = "..." from [project] or [tool.poetry]
  const nameMatch = content.match(/name\s*=\s*["']([^"']+)["']/);
  if (!nameMatch || !nameMatch[1]) return null;

  const packageName = nameMatch[1];
  return {
    transport: 'stdio',
    command: 'uvx',
    args: [packageName],
    env_vars: [],
    confidence: 'manifest',
  };
}
