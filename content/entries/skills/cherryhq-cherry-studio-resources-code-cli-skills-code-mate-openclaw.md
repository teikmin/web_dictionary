---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-openclaw
name: code-mate-openclaw
tagline: Runs a local OpenClaw agent non-interactively and returns its
  structured response. Use when the user asks to delegate a bounded task to the
  OpenClaw m
summary: 1. Set the Bash working directory to the exact directory the user
  authorized and set a finite outer timeout, normally 11 minutes. 2. Check
  availability with command -v openclaw. If it is missing, stop and ask the
  user...
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
  subpath: resources/code-cli-skills/code-mate-openclaw
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
  path: resources/code-cli-skills/code-mate-openclaw/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:17.766Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-openclaw
  description: Runs a local OpenClaw agent non-interactively and returns its
    structured response. Use when the user asks to delegate a bounded task to
    the OpenClaw main agent.
  folder_path: resources/code-cli-skills/code-mate-openclaw
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# OpenClaw
## Run

1. Set the Bash working directory to the exact directory the user authorized and set a finite outer timeout, normally 11 minutes.
2. Check availability with `command -v openclaw`. If it is missing, stop and ask the user to install OpenClaw in Code Mate.
3. Run the local main agent once:

```bash
openclaw agent --local --agent main --message "<prompt>" --json --timeout 600
```

Pass the prompt as one quoted argument. Parse the JSON payload even when the process exits zero: OpenClaw can encode failure in a successful process exit. Report payload errors and timeouts as failures. Never start onboarding, the interactive TUI, or a login flow.

## Authentication And Permissions

If OpenClaw reports missing onboarding, provider, model, or credentials, stop and ask the user to configure OpenClaw in Code Mate. Never request, read, print, or copy credentials.

The local agent can invoke configured tools. Keep the prompt read-only by default and do not ask it to mutate files or external systems unless the user explicitly requested workspace changes or that external effect. Limit it to the selected working directory.

Example: ask the main agent to explain a module without changing it, then accept the response only when the JSON payload reports success.
