---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-annotate
name: annotate
tagline: Agent skill from backnotprop/plannotator
summary: Agent skill from backnotprop/plannotator
categories:
  - coding-agents
tags:
  - agents
  - claude-code
  - code-review
  - codex
status: active
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-annotate
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9506
  last_commit: 2026-10-19T07:27:52Z
  stars_delta_7d: 113
  stars_growth_pct: 1.2
  trending_score: 114.36
  rank_current: 64
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9194
    - 9393
    - 9506
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: backnotprop/plannotator
  path: apps/kiro-cli/skills/plannotator-annotate/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:31.631Z
  truncated: false
type: agent_skill
skill:
  skill_name: annotate
  description: Agent skill from backnotprop/plannotator
  folder_path: apps/kiro-cli/skills/plannotator-annotate
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: backnotprop-plannotator
---

# Plannotator Annotate (Kiro)
Run:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator annotate $ARGUMENTS
```

`$ARGUMENTS` should be a markdown or plain-text config file path (.md, .txt, .yaml, .json, .toml, .ini, .csv, .log, …), folder path, html file path, or URL.

If the command reports that the arguments could not be resolved to a file, URL, or folder, work out which target the user means and re-run the command yourself with that concrete path or URL.
