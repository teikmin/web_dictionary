import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../../');

// Load .env from root
dotenv.config({ path: path.join(rootDir, '.env') });

function loadYaml<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    const content = fs.readFileSync(filePath, 'utf8');
    return (yaml.parse(content) as T) || fallback;
  } catch (err) {
    console.warn(`Could not load YAML at ${filePath}:`, err);
    return fallback;
  }
}

export interface ThresholdsConfig {
  min_stars: number;
  max_pushed_days: number;
  min_repo_age_days: number;
  min_description_chars: number;
  catalog_cap: number;
  mcp_split_target: number;
  skills_split_target: number;
  tools_split_target: number;
  category_minimum_guarantee: number;
  min_category_size_for_guarantee: number;
}

export interface WeightsConfig {
  weights: {
    adoption: number;
    maintenance: number;
    trust: number;
    community: number;
    docs: number;
  };
}

export interface QueriesConfig {
  mcp_queries: string[];
  skill_queries: string[];
  code_queries: string[];
  tool_queries: string[];
  blacklist_keywords: string[];
}

export interface AntiFakeConfig {
  heuristics: {
    min_fork_to_star_ratio: number;
    min_stars_for_ratio_check: number;
    min_lifetime_commits: number;
    min_stars_for_commit_check: number;
  };
}

export interface VendorsConfig {
  vendors: Array<{ org: string; name: string }>;
}

export interface OverridesConfig {
  blocked?: Array<{ repo: string; reason?: string }>;
  pinned?: Array<{ repo: string; type?: string; reason?: string }>;
}

export const config = {
  rootDir,
  githubToken: process.env.GITHUB_TOKEN || '',
  thresholds: loadYaml<ThresholdsConfig>(
    path.join(rootDir, 'apps/pipeline/config/thresholds.yaml'),
    {
      min_stars: 100,
      max_pushed_days: 180,
      min_repo_age_days: 30,
      min_description_chars: 20,
      catalog_cap: 500,
      mcp_split_target: 200,
      skills_split_target: 150,
      tools_split_target: 150,
      category_minimum_guarantee: 5,
      min_category_size_for_guarantee: 5,
    }
  ),
  weights: loadYaml<WeightsConfig>(
    path.join(rootDir, 'apps/pipeline/config/weights.yaml'),
    {
      weights: {
        adoption: 0.30,
        maintenance: 0.25,
        trust: 0.20,
        community: 0.15,
        docs: 0.10,
      },
    }
  ),
  queries: loadYaml<QueriesConfig>(
    path.join(rootDir, 'apps/pipeline/config/queries.yaml'),
    {
      mcp_queries: ['topic:mcp-server archived:false fork:false stars:>=100'],
      skill_queries: ['topic:agent-skill archived:false fork:false stars:>=100'],
      code_queries: ['filename:SKILL.md'],
      tool_queries: [
        'topic:ai-agents archived:false fork:false stars:>=250',
        'topic:coding-agent archived:false fork:false stars:>=150',
        'topic:autonomous-agents archived:false fork:false stars:>=250',
        'topic:agent-framework archived:false fork:false stars:>=250',
        'topic:browser-agent archived:false fork:false stars:>=150',
      ],
      blacklist_keywords: ['awesome-', 'tutorial', 'course', 'boilerplate'],
    }
  ),
  antiFake: loadYaml<AntiFakeConfig>(
    path.join(rootDir, 'apps/pipeline/config/anti-fake.yaml'),
    {
      heuristics: {
        min_fork_to_star_ratio: 0.01,
        min_stars_for_ratio_check: 500,
        min_lifetime_commits: 5,
        min_stars_for_commit_check: 200,
      },
    }
  ),
  vendors: loadYaml<VendorsConfig>(
    path.join(rootDir, 'data/reference/vendors.yaml'),
    { vendors: [] }
  ),
  block: loadYaml<OverridesConfig>(
    path.join(rootDir, 'data/overrides/block.yaml'),
    { blocked: [] }
  ),
  pin: loadYaml<OverridesConfig>(
    path.join(rootDir, 'data/overrides/pin.yaml'),
    { pinned: [] }
  ),
};
