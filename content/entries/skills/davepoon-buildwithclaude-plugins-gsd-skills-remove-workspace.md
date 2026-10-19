---
slug: davepoon-buildwithclaude-plugins-gsd-skills-remove-workspace
name: gsd:remove-workspace
tagline: Remove a GSD workspace and clean up worktrees
summary: "Arguments: - (required) — Name of the workspace to remove"
categories:
  - productivity-ops
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
  subpath: plugins/gsd/skills/remove-workspace
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
  path: plugins/gsd/skills/remove-workspace/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.907Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:remove-workspace
  description: Remove a GSD workspace and clean up worktrees
  folder_path: plugins/gsd/skills/remove-workspace
  extra_files: []
  pack_total_skills: 400
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<context>
**Arguments:**
- `<workspace-name>` (required) — Name of the workspace to remove
</context>

<objective>
Remove a workspace directory after confirmation. For worktree strategy, runs `git worktree remove` for each member repo first. Refuses if any repo has uncommitted changes.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/remove-workspace.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<process>
Execute the remove-workspace workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/remove-workspace.md end-to-end.
</process>
