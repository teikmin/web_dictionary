import yaml from 'yaml';
import type { SkillSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export async function extractSkillSpec(
  owner: string,
  repo: string,
  subpath: string,
  paths: string[]
): Promise<SkillSpec> {
  const skillMdPath = subpath ? `${subpath}/SKILL.md` : 'SKILL.md';
  const content = await fetchFileContent(owner, repo, skillMdPath);

  let skillName = subpath ? subpath.split('/').pop() || repo : repo;
  let description = `Agent skill from ${owner}/${repo}`;

  if (content) {
    // Parse YAML frontmatter
    const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);
    if (frontmatterMatch) {
      try {
        const parsed = yaml.parse(frontmatterMatch[1]);
        if (parsed.name) skillName = String(parsed.name);
        if (parsed.description) description = String(parsed.description);
      } catch {
        // ignore frontmatter parse errors
      }
    }
  }

  // Find extra files in the same folder
  const prefix = subpath ? `${subpath}/` : '';
  const extraFiles = paths
    .filter((p) => p.startsWith(prefix) && p !== skillMdPath)
    .map((p) => p.slice(prefix.length))
    .slice(0, 10);

  return {
    skill_name: skillName,
    description,
    folder_path: subpath || '.',
    extra_files: extraFiles,
  };
}
