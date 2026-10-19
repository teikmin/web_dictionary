---
slug: davepoon-buildwithclaude-plugins-gsd-skills-cleanup
name: gsd:cleanup
tagline: Archive accumulated phase directories from completed milestones
summary: Archive phase directories from completed milestones into
  .planning/milestones/v{X.Y}-phases/.
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
  subpath: plugins/gsd/skills/cleanup
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
  path: plugins/gsd/skills/cleanup/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.905Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:cleanup
  description: Archive accumulated phase directories from completed milestones
  folder_path: plugins/gsd/skills/cleanup
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
Archive phase directories from completed milestones into `.planning/milestones/v{X.Y}-phases/`.

Use when `.planning/phases/` has accumulated directories from past milestones.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/cleanup.md
</execution_context>

<process>
Follow the cleanup workflow at @${CLAUDE_PLUGIN_ROOT}/workflows/cleanup.md.
Identify completed milestones, show a dry-run summary, and archive on confirmation.
</process>
