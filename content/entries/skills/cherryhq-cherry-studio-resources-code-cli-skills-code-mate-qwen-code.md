---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-qwen-code
name: code-mate-qwen-code
tagline: Runs Qwen Code headlessly for repository analysis and coding tasks. Use
  when the user asks to delegate work to Qwen Code or obtain a Qwen-based coding
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v qwen. If it is missing, stop and ask the user to install Qwen...
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
  subpath: resources/code-cli-skills/code-mate-qwen-code
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
  path: resources/code-cli-skills/code-mate-qwen-code/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.766Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-qwen-code
  description: Runs Qwen Code headlessly for repository analysis and coding tasks.
    Use when the user asks to delegate work to Qwen Code or obtain a Qwen-based
    coding-agent result.
  folder_path: resources/code-cli-skills/code-mate-qwen-code
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Qwen Code
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v qwen`. If it is missing, stop and ask the user to install Qwen Code in Code Mate.
3. Run one task and exit:

```bash
qwen -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Parse the JSON result and treat a structured error or nonzero exit as failure. Never start the interactive UI or OAuth flow from the agent task.

## Authentication And Permissions

If Qwen reports missing login, API key, model, or provider configuration, stop and ask the user to configure Qwen Code in Code Mate. Never request, read, print, or copy credentials.

Use the default restricted approval behavior for analysis. Add bounded turn or tool-call limits for large tasks. Only allow modification tools when the user explicitly requests workspace changes, and never use `--yolo`: it grants approval without providing a sandbox.

Example: ask Qwen to identify the cause of a failing test without editing, run the command above, then summarize the parsed result within the chosen timeout.
