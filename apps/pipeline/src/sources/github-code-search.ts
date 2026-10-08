import { octokit, cachedFetch, sleep } from '../lib/http.js';
import { logger } from '../lib/logger.js';
import type { CandidateRepo } from '@web-db/schema';

export async function searchSkillCodeFiles(query = 'filename:SKILL.md', maxPages = 2): Promise<CandidateRepo[]> {
  logger.info(`Searching GitHub Code: "${query}" (max ${maxPages} pages)`);
  const reposMap = new Map<string, CandidateRepo>();

  for (let page = 1; page <= maxPages; page++) {
    const cacheKey = `codesearch_${query}_p${page}`;
    try {
      const data = await cachedFetch(cacheKey, async () => {
        const res = await octokit.rest.search.code({
          q: query,
          per_page: 30,
          page,
        });
        return res.data;
      });

      for (const item of data.items) {
        const fullName = item.repository.full_name;
        if (!reposMap.has(fullName)) {
          // Fetch full repo details to evaluate gates
          const repoDetails = await cachedFetch(`repo_${fullName}`, async () => {
            const r = await octokit.rest.repos.get({
              owner: item.repository.owner.login,
              repo: item.repository.name,
            });
            return r.data;
          });

          reposMap.set(fullName, {
            owner: repoDetails.owner.login,
            name: repoDetails.name,
            fullName: repoDetails.full_name,
            description: repoDetails.description,
            stars: repoDetails.stargazers_count,
            forks: repoDetails.forks_count,
            watchers: repoDetails.watchers_count || repoDetails.stargazers_count,
            archived: repoDetails.archived,
            fork: repoDetails.fork,
            isTemplate: repoDetails.is_template || false,
            createdAt: repoDetails.created_at,
            pushedAt: repoDetails.pushed_at || repoDetails.created_at,
            license: repoDetails.license?.spdx_id || null,
            topics: repoDetails.topics || [],
            defaultBranch: repoDetails.default_branch || 'main',
          });
        }
      }

      if (data.items.length < 30) break;
      await sleep(2000); // respect 10 req/min code search limit
    } catch (err: unknown) {
      logger.warn(`Code search failed for "${query}":`, (err as Error).message || err);
      break;
    }
  }

  return Array.from(reposMap.values());
}
