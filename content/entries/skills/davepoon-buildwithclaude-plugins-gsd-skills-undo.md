---
slug: davepoon-buildwithclaude-plugins-gsd-skills-undo
name: gsd:undo
tagline: Safe git revert. Roll back phase or plan commits using the phase
  manifest with dependency checks.
summary: Safe git revert — roll back GSD phase or plan commits using the phase
  manifest, with dependency checks and a confirmation gate before execution.
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
  subpath: plugins/gsd/skills/undo
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
  path: plugins/gsd/skills/undo/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.908Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:undo
  description: Safe git revert. Roll back phase or plan commits using the phase
    manifest with dependency checks.
  folder_path: plugins/gsd/skills/undo
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
Safe git revert — roll back GSD phase or plan commits using the phase manifest, with dependency checks and a confirmation gate before execution.

Three modes:
- **--last N**: Show recent GSD commits for interactive selection
- **--phase NN**: Revert all commits for a phase (manifest + git log fallback)
- **--plan NN-MM**: Revert all commits for a specific plan
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/undo.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
@${CLAUDE_PLUGIN_ROOT}/references/gate-prompts.md
</execution_context>

<context>
$ARGUMENTS
</context>

<process>
Execute the undo workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/undo.md end-to-end.
</process>
