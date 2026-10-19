---
slug: davepoon-buildwithclaude-plugins-gsd-skills-review
name: gsd:review
tagline: Request cross-AI peer review of phase plans from external AI CLIs
summary: Invoke external AI CLIs (Gemini, Claude, Codex, OpenCode, Qwen Code,
  Cursor) to independently review phase plans. Produces a structured REVIEWS.md
  with per-reviewer feedback that can be fed back into planning via /gsd...
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
  subpath: plugins/gsd/skills/review
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
  path: plugins/gsd/skills/review/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.908Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:review
  description: Request cross-AI peer review of phase plans from external AI CLIs
  folder_path: plugins/gsd/skills/review
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
Invoke external AI CLIs (Gemini, Claude, Codex, OpenCode, Qwen Code, Cursor) to independently review phase plans.
Produces a structured REVIEWS.md with per-reviewer feedback that can be fed back into
planning via /gsd:plan-phase --reviews.

**Flow:** Detect CLIs → Build review prompt → Invoke each CLI → Collect responses → Write REVIEWS.md
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/review.md
</execution_context>

<context>
Phase number: extracted from $ARGUMENTS (required)

**Flags:**
- `--gemini` — Include Gemini CLI review
- `--claude` — Include Claude CLI review (uses separate session)
- `--codex` — Include Codex CLI review
- `--opencode` — Include OpenCode review (uses model from user's OpenCode config)
- `--qwen` — Include Qwen Code review (Alibaba Qwen models)
- `--cursor` — Include Cursor agent review
- `--all` — Include all available CLIs
</context>

<process>
Execute the review workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/review.md end-to-end.
</process>
