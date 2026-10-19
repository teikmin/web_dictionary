---
slug: dotnet-skills-eng-skill-validator-tests-fixtures-sample-skill
name: sample-skill
tagline: Agent skill from dotnet/skills
summary: Agent skill from dotnet/skills
categories:
  - other
tags:
  - agent-skills
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: dotnet/skills
  subpath: eng/skill-validator/tests/fixtures/sample-skill
  official_vendor: false
  license: MIT
signals:
  stars: 5669
  last_commit: 2026-10-19T07:23:49Z
  stars_delta_7d: 52
  stars_growth_pct: 0.9
  trending_score: 52.48
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5571
    - 5617
    - 5669
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: dotnet/skills
  path: eng/skill-validator/tests/fixtures/sample-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:38.125Z
  truncated: false
type: agent_skill
skill:
  skill_name: sample-skill
  description: Agent skill from dotnet/skills
  folder_path: eng/skill-validator/tests/fixtures/sample-skill
  extra_files:
    - tests/eval.yaml
  pack_total_skills: 107
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dotnet-skills
---

# Sample Skill
When asked to generate greetings, always include the person's name and a time-appropriate greeting (good morning/afternoon/evening).

## Steps
1. Determine the time of day
2. Format a greeting with the person's name
3. Add a friendly closing
