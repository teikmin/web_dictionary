---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-gemini
name: code-mate-gemini
tagline: "Runs Gemini CLI headlessly for repository analysis and coding tasks.
  Use when the user asks to delegate work to Gemini CLI or compare its result
  with "
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v gemini. If it is missing, stop and ask the user to install Gem...
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
  subpath: resources/code-cli-skills/code-mate-gemini
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
  path: resources/code-cli-skills/code-mate-gemini/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.766Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-gemini
  description: Runs Gemini CLI headlessly for repository analysis and coding
    tasks. Use when the user asks to delegate work to Gemini CLI or compare its
    result with another coding agent.
  folder_path: resources/code-cli-skills/code-mate-gemini
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Gemini CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v gemini`. If it is missing, stop and ask the user to install Gemini CLI in Code Mate.
3. Run one task and exit:

```bash
gemini -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Parse the JSON result and treat a JSON error or nonzero exit as failure. Never start interactive Gemini or an authentication flow.

## Authentication And Permissions

If Gemini reports missing authentication, project, or provider configuration, stop and ask the user to finish Gemini setup in Code Mate. Never request, read, print, or copy credentials.

Keep headless approval policy at its read-only default. Only when the user explicitly requests workspace changes may the command use the narrowest policy and tool permissions needed; do not enable unrestricted approval.

Example: ask Gemini to review a module without editing, run the command above from the repository, and summarize the parsed response and any reported error.
