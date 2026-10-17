import yaml from 'yaml';
import type { SkillSpec } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export interface SkillExtractionResult {
  spec: SkillSpec;
  rawBody: string;
}

export async function extractSkillSpec(
  owner: string,
  repo: string,
  subpath: string,
  paths: string[]
): Promise<SkillExtractionResult> {
  const skillMdPath = subpath ? `${subpath}/SKILL.md` : 'SKILL.md';
  const content = await fetchFileContent(owner, repo, skillMdPath);

  let skillName = subpath ? subpath.split('/').pop() || repo : repo;
  let description = `Agent skill from ${owner}/${repo}`;
  let rawBody = content || '';

  if (content) {
    // Parse YAML frontmatter and extract body
    const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---\r?\n?([\s\S]*)$/);
    if (frontmatterMatch) {
      try {
        const parsed = yaml.parse(frontmatterMatch[1]);
        if (parsed.name) skillName = String(parsed.name);
        if (parsed.description) description = String(parsed.description);
        rawBody = (frontmatterMatch[2] || '').trim();
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
    spec: {
      skill_name: skillName,
      description,
      folder_path: subpath || '.',
      extra_files: extraFiles,
      pack_total_skills: 1,
      is_pack_primary: true,
      clients: [],
    },
    rawBody,
  };
}
