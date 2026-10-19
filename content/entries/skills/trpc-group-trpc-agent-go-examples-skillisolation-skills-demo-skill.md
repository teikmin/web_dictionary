---
slug: trpc-group-trpc-agent-go-examples-skillisolation-skills-demo-skill
name: demo-skill
tagline: A tiny skill used by the skill isolation example.
summary: If this body shows up in the coordinator's system prompt, it indicates
  a skill state leak across agents.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skillisolation/skills/demo-skill
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1870
  last_commit: 2026-10-19T07:09:58Z
  stars_delta_7d: 10
  stars_growth_pct: 0.5
  trending_score: 10.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skillisolation/skills/demo-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:53.715Z
  truncated: false
type: agent_skill
skill:
  skill_name: demo-skill
  description: A tiny skill used by the skill isolation example.
  folder_path: examples/skillisolation/skills/demo-skill
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

This is a minimal skill.

If this body shows up in the coordinator's system prompt, it indicates a
skill state leak across agents.
