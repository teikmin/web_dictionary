---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-minimax-code
name: code-mate-minimax-code
tagline: Runs MiniMax Code headlessly for repository analysis and coding tasks.
  Use when the user asks to delegate work to MiniMax Code or obtain a
  MiniMax-bas
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v mcode. If it is missing, stop and ask the user to install Mini...
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
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-minimax-code
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 52736
  last_commit: 2026-10-19T07:10:52Z
  stars_delta_7d: 139
  stars_growth_pct: 0.3
  trending_score: 139.37
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
  path: resources/code-cli-skills/code-mate-minimax-code/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.766Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-minimax-code
  description: Runs MiniMax Code headlessly for repository analysis and coding
    tasks. Use when the user asks to delegate work to MiniMax Code or obtain a
    MiniMax-based coding-agent result.
  folder_path: resources/code-cli-skills/code-mate-minimax-code
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# MiniMax Code
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v mcode`. If it is missing, stop and ask the user to install MiniMax Code in Code Mate.
3. Run one task and exit:

```bash
mcode exec "<prompt>"
```

Pass the prompt as one quoted argument. For analysis-only tasks pass `--permission smart` explicitly; never pass `--permission full`. Treat a nonzero exit as failure, and treat the final answer text as the result. Never start the interactive TUI or login flow from the agent task.

## Authentication And Permissions

If MiniMax Code reports missing login, API key, model, or provider configuration, stop and ask the user to configure MiniMax Code in Code Mate. Never request, read, print, or copy credentials.

Only allow modification tools when the user explicitly requests workspace changes, and prefer read-only instructions in the prompt otherwise. Never pass a flag or setting that relaxes the permission mode.

Example: ask MiniMax Code to explain the cause of a failing test without editing, run the command above, then summarize the result within the chosen timeout.
