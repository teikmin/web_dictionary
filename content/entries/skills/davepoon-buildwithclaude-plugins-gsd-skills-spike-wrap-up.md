---
slug: davepoon-buildwithclaude-plugins-gsd-skills-spike-wrap-up
name: gsd:spike-wrap-up
tagline: Package spike findings into a persistent project skill for future build
  conversations
summary: Curate spike experiment findings and package them into a persistent
  project skill that Claude auto-loads in future build conversations. Also
  writes a summary to .planning/spikes/ for project history. Output skill
  goes...
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
  subpath: plugins/gsd/skills/spike-wrap-up
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
  path: plugins/gsd/skills/spike-wrap-up/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.908Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:spike-wrap-up
  description: Package spike findings into a persistent project skill for future
    build conversations
  folder_path: plugins/gsd/skills/spike-wrap-up
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
Curate spike experiment findings and package them into a persistent project skill that Claude
auto-loads in future build conversations. Also writes a summary to `.planning/spikes/` for
project history. Output skill goes to `./.claude/skills/spike-findings-[project]/` (project-local).
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/spike-wrap-up.md
@${CLAUDE_PLUGIN_ROOT}/references/ui-brand.md
</execution_context>

<runtime_note>
**Copilot (VS Code):** Use `vscode_askquestions` wherever this workflow calls `AskUserQuestion`.
</runtime_note>

<process>
Execute the spike-wrap-up workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/spike-wrap-up.md end-to-end.
Preserve all curation gates (per-spike review, grouping approval, CLAUDE.md routing line).
</process>
