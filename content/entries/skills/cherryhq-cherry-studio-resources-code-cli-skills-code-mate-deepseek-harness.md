---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-deepseek-harness
name: code-mate-deepseek-harness
tagline: Runs DeepSeek Harness headlessly for bounded repository tasks. Use when
  the user asks to delegate analysis or implementation to DeepSeek Harness.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v dsh. If it is missing, stop and ask the user to install DeepSe...
categories:
  - agent-frameworks
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-deepseek-harness
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 52597
  last_commit: 2026-10-13T16:25:21Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: CherryHQ/cherry-studio
  path: resources/code-cli-skills/code-mate-deepseek-harness/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:12.518Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-deepseek-harness
  description: Runs DeepSeek Harness headlessly for bounded repository tasks. Use
    when the user asks to delegate analysis or implementation to DeepSeek
    Harness.
  folder_path: resources/code-cli-skills/code-mate-deepseek-harness
  extra_files: []
tags: []
---

# DeepSeek Harness
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v dsh`. If it is missing, stop and ask the user to install DeepSeek Harness in Code Mate.
3. Run one headless task:

```bash
dsh --profile headless "<prompt>"
```

Pass the prompt as one quoted argument. Treat stdout as final text, not JSON. Exit zero means success; exit one means the task failed or did not complete. Never start the interactive UI or a login flow.

## Authentication And Permissions

If DSH reports a missing provider, model, or API configuration, stop and ask the user to configure DeepSeek Harness in Code Mate. Never request, read, print, or copy credentials.

Headless DSH can write to the workspace and creates a persistent session. For read-only work, explicitly tell it not to modify files and inspect the repository diff afterward. Allow modifications only when the user explicitly requested workspace changes, and restrict the working directory to the intended project.

Example: ask DSH to diagnose a test failure without editing, run it in the repository, confirm exit zero and a clean diff, then summarize its final text.
