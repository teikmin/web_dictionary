---
slug: stablyai-orca-skills-computer-use
name: orca
tagline: "Orca is the ADE for working with a fleet of parallel agents. Run any
  coding agent with your own subscription. Available on desktop, mobile and
  remote "
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-03-17T03:28:57Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: skills/computer-use
  license: MIT
signals:
  stars: 86961
  last_commit: 2026-10-07T15:59:23Z
type: agent_skill
skill:
  skill_name: computer-use
  description: "Drives the GUI of a visible local app window through `orca
    computer`: accessibility tree, clicks, typing, menus, dialogs, and
    screenshots in native apps and external browser windows (Chrome, Edge,
    Safari) or webviews. Prefer a programmatic path (shell, filesystem, git,
    HTTP, existing CLIs) whenever it can complete the task. Use only when a
    visible window needs GUI control those cannot reach. Do not use for Orca's
    embedded browser (`orca-cli`)."
  folder_path: skills/computer-use
  extra_files: []
---

Drives the GUI of a visible local app window through `orca computer`: accessibility tree, clicks, typing, menus, dialogs, and screenshots in native apps and external browser windows (Chrome, Edge, Safari) or webviews. Prefer a programmatic path (shell, filesystem, git, HTTP, existing CLIs) whenever it can complete the task. Use only when a visible window needs GUI control those cannot reach. Do not use for Orca's embedded browser (`orca-cli`).
