---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-antigravity
name: code-mate-antigravity
tagline: Runs Antigravity CLI headlessly for repository analysis and coding
  tasks. Use when the user asks to delegate work to Antigravity CLI or compare
  its re
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v agy. If it is missing, stop and ask the user to install Antigr...
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agent
  - claude-code
  - codex
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-antigravity
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 52736
  last_commit: 2026-10-19T07:10:52Z
  stars_delta_7d: 139
  stars_growth_pct: 0.3
  trending_score: 139.37
  rank_current: 57
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 52419
    - 52597
    - 52736
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: CherryHQ/cherry-studio
  path: resources/code-cli-skills/code-mate-antigravity/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.765Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-antigravity
  description: Runs Antigravity CLI headlessly for repository analysis and coding
    tasks. Use when the user asks to delegate work to Antigravity CLI or compare
    its result with another coding agent.
  folder_path: resources/code-cli-skills/code-mate-antigravity
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: true
  clients:
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Antigravity CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v agy`. If it is missing, stop and ask the user to install Antigravity CLI in Code Mate.
3. Run one task and exit:

```bash
agy -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Print mode waits up to `--print-timeout` (5m by default); pass a shorter value when the caller's own timeout is tighter.

Parse the JSON result and read its `status` field: anything other than a success status is a failure, and `error` carries the reason. Treat unparseable output as failure too. Never start interactive Antigravity or an authentication flow.

## Authentication And Permissions

Antigravity refuses to run headlessly until it is signed in — it returns `status: "ERROR"` with `authentication failed or timed out` and tells you to run `agy` to log in. Do not do that: stop and ask the user to finish Antigravity setup in Code Mate. Never request, read, print, or copy credentials.

Headless mode inherits the permission mode persisted in user settings, and reading and writing files inside the active workspace are auto-approved by default — the default is not a read-only boundary, and a prompt cannot make it one. Do not run it against a writable project for a read-only task. Use a disposable or read-only copy instead. Run against the real project only when the user explicitly requests workspace changes, constrain the directory, and inspect the diff afterward. Never pass `--dangerously-skip-permissions`, which auto-approves every tool request including outside the workspace.

Example: for an approved edit, ask Antigravity to touch only named files, run it in that project, parse the `response` and any reported `error`, and inspect the resulting diff before reporting success.
