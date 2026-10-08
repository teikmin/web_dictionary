import { octokit, cachedFetch } from '../lib/http.js';
import { logger } from '../lib/logger.js';

export interface RepoTreeResult {
  paths: string[];
  truncated: boolean;
}

export async function fetchRepoTree(owner: string, repo: string, defaultBranch = 'main'): Promise<RepoTreeResult> {
  const cacheKey = `tree_${owner}_${repo}_${defaultBranch}`;
  try {
    return await cachedFetch<RepoTreeResult>(cacheKey, async () => {
      const res = await octokit.rest.git.getTree({
        owner,
        repo,
        tree_sha: defaultBranch,
        recursive: '1',
      });

      const paths = (res.data.tree || [])
        .filter((t) => t.type === 'blob' && t.path)
        .map((t) => t.path as string);

      return {
        paths,
        truncated: res.data.truncated || false,
      };
    }, 48);
  } catch (err) {
    logger.warn(`Failed to fetch git tree for ${owner}/${repo}:`, (err as Error).message);
    return { paths: [], truncated: false };
  }
}

export async function fetchFileContent(owner: string, repo: string, path: string): Promise<string | null> {
  const cacheKey = `content_${owner}_${repo}_${path}`;
  try {
    return await cachedFetch<string | null>(cacheKey, async () => {
      const res = await octokit.rest.repos.getContent({
        owner,
        repo,
        path,
      });

      if ('content' in res.data && typeof res.data.content === 'string') {
        const buff = Buffer.from(res.data.content, 'base64');
        return buff.toString('utf8');
      }
      return null;
    }, 48);
  } catch {
    return null;
  }
}
