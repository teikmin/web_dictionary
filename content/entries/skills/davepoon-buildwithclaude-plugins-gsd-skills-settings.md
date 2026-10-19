---
slug: davepoon-buildwithclaude-plugins-gsd-skills-settings
name: gsd:settings
tagline: Configure GSD workflow toggles and model profile
summary: Interactive configuration of GSD workflow agents and model profile via
  multi-question prompt.
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
  subpath: plugins/gsd/skills/settings
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
  path: plugins/gsd/skills/settings/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.908Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:settings
  description: Configure GSD workflow toggles and model profile
  folder_path: plugins/gsd/skills/settings
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
Interactive configuration of GSD workflow agents and model profile via multi-question prompt.

Routes to the settings workflow which handles:
- Config existence ensuring
- Current settings reading and parsing
- Interactive 5-question prompt (model, research, plan_check, verifier, branching)
- Config merging and writing
- Confirmation display with quick command references
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/settings.md
</execution_context>

<process>
**Follow the settings workflow** from `@${CLAUDE_PLUGIN_ROOT}/workflows/settings.md`.

The workflow handles all logic including:
1. Config file creation with defaults if missing
2. Current config reading
3. Interactive settings presentation with pre-selection
4. Answer parsing and config merging
5. File writing
6. Confirmation display
</process>
