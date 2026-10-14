---
slug: stablyai-orca-skills-computer-use
name: computer-use
tagline: "Drives the GUI of a visible local app window through `orca computer`:
  accessibility tree, clicks, typing, menus, dialogs, and screenshots in native
  ap"
categories:
  - dev-tools
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-03-17T03:28:57
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: skills/computer-use
  official_vendor: false
  license: MIT
signals:
  stars: 91386
  last_commit: 2026-10-13T16:24:00Z
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
