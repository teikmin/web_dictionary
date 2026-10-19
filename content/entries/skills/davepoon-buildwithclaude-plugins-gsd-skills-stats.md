---
slug: davepoon-buildwithclaude-plugins-gsd-skills-stats
name: gsd:stats
tagline: Display project statistics — phases, plans, requirements, git metrics,
  and timeline
summary: Display comprehensive project statistics including phase progress, plan
  execution metrics, requirements completion, git history stats, and project
  timeline.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/stats
  official_vendor: false
  license: MIT
signals:
  stars: 3650
  last_commit: 2026-10-18T23:51:10Z
  stars_delta_7d: 19
  stars_growth_pct: 0.5
  trending_score: 19.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/stats/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.908Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:stats
  description: Display project statistics — phases, plans, requirements, git
    metrics, and timeline
  folder_path: plugins/gsd/skills/stats
  extra_files: []
  pack_total_skills: 400
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Display comprehensive project statistics including phase progress, plan execution metrics, requirements completion, git history stats, and project timeline.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/stats.md
</execution_context>

<process>
Execute the stats workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/stats.md end-to-end.
</process>
