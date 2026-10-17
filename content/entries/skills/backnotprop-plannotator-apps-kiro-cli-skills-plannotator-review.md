---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-review
name: plannotator-review
tagline: Open Plannotator's browser-based code review UI and address the
  returned feedback.
summary: "You may append one directory or PR URL:"
categories:
  - coding-agents
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9393
  last_commit: 2026-10-13T16:08:41Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/kiro-cli/skills/plannotator-review/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.389Z
  truncated: false
type: agent_skill
skill:
  skill_name: plannotator-review
  description: Open Plannotator's browser-based code review UI and address the
    returned feedback.
  folder_path: apps/kiro-cli/skills/plannotator-review
  extra_files: []
tags: []
---

# Plannotator Review (Kiro)
Run:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review
```

You may append one directory or PR URL:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review <pr-url>
PLANNOTATOR_ORIGIN=kiro-cli plannotator review ../feature-worktree
```

Directory paths are relative to the current session or absolute. Quote paths containing spaces. Feedback names the directory where changes belong.

Or open the session against a specific base / diff mode (session-only, git-only; for a stacked branch, `--base <the branch below yours>` reviews just that layer):

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator review --base <ref> [--diff-type <type>]
```
