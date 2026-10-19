---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-codex
name: code-mate-codex
tagline: Runs Codex CLI non-interactively for code analysis and implementation
  tasks. Use when the user asks to delegate repository work to Codex or obtain a
  s
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v codex. If it is missing, stop and ask the user to install Code...
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
  subpath: resources/code-cli-skills/code-mate-codex
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
  path: resources/code-cli-skills/code-mate-codex/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.765Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-codex
  description: Runs Codex CLI non-interactively for code analysis and
    implementation tasks. Use when the user asks to delegate repository work to
    Codex or obtain a second coding-agent result.
  folder_path: resources/code-cli-skills/code-mate-codex
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - codex
  pack_slug: cherryhq-cherry-studio
---

# Codex CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v codex`. If it is missing, stop and ask the user to install Codex CLI in Code Mate.
3. Run one task and exit:

```bash
codex exec "<prompt>" --json
```

Pass the prompt as one quoted argument. Parse stdout as JSONL, preserve event order, and use the final agent message as the result. Treat an error event or nonzero exit as failure. Never start interactive `codex` or `codex login`.

## Authentication And Permissions

If Codex reports missing login or API configuration, stop and ask the user to finish Codex setup in Code Mate. Never request, read, print, or copy credentials.

Use `--sandbox read-only` unless the user explicitly requested workspace changes. For an approved edit, use only the narrowest suitable sandbox and working directory; never add `--dangerously-bypass-approvals-and-sandbox`. Add `--skip-git-repo-check` only when the user intentionally selected a non-Git directory.

Example: for a review request, append `--sandbox read-only`, ask Codex not to modify files, and summarize the final JSONL message plus any reported errors.
