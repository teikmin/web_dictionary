---
slug: backnotprop-plannotator-apps-kiro-cli-skills-plannotator-annotate
name: plannotator-annotate
tagline: Open Plannotator's annotation UI for a file, folder, or URL, then
  address the returned annotations.
summary: $ARGUMENTS should be a markdown or plain-text config file path (.md,
  .txt, .yaml, .json, .toml, .ini, .csv, .log, …), folder path, html file path,
  or URL.
categories:
  - dev-tools
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: apps/kiro-cli/skills/plannotator-annotate
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
  path: apps/kiro-cli/skills/plannotator-annotate/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.380Z
  truncated: false
type: agent_skill
skill:
  skill_name: plannotator-annotate
  description: Open Plannotator's annotation UI for a file, folder, or URL, then
    address the returned annotations.
  folder_path: apps/kiro-cli/skills/plannotator-annotate
  extra_files: []
---

# Plannotator Annotate (Kiro)
Run:

```bash
PLANNOTATOR_ORIGIN=kiro-cli plannotator annotate $ARGUMENTS
```

`$ARGUMENTS` should be a markdown or plain-text config file path (.md, .txt, .yaml, .json, .toml, .ini, .csv, .log, …), folder path, html file path, or URL.

If the command reports that the arguments could not be resolved to a file, URL, or folder, work out which target the user means and re-run the command yourself with that concrete path or URL.
