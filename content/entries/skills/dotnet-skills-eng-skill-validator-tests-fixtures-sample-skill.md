---
slug: dotnet-skills-eng-skill-validator-tests-fixtures-sample-skill
name: sample-skill
tagline: A sample skill for testing the validator. Helps with greeting generation.
summary: A sample skill for testing the validator. Helps with greeting generation.
categories:
  - other
status: active
quality_percentile: 49
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: dotnet/skills
  subpath: eng/skill-validator/tests/fixtures/sample-skill
  official_vendor: false
  license: MIT
signals:
  stars: 5617
  last_commit: 2026-10-13T16:25:34Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: dotnet/skills
  path: eng/skill-validator/tests/fixtures/sample-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.135Z
  truncated: false
type: agent_skill
skill:
  skill_name: sample-skill
  description: A sample skill for testing the validator. Helps with greeting generation.
  folder_path: eng/skill-validator/tests/fixtures/sample-skill
  extra_files:
    - tests/eval.yaml
tags: []
---

# Sample Skill
When asked to generate greetings, always include the person's name and a time-appropriate greeting (good morning/afternoon/evening).

## Steps
1. Determine the time of day
2. Format a greeting with the person's name
3. Add a friendly closing
