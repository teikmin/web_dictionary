---
slug: inkeep-open-knowledge-packages-server-assets-skills-discovery
name: open-knowledge-discovery
tagline: Read when the user asks what OpenKnowledge is, wants to install it on a
  repository, wants to open or preview a single markdown file that is not part o
categories:
  - productivity
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: inkeep/open-knowledge
  subpath: packages/server/assets/skills/discovery
  official_vendor: false
  license: GPL-3.0
signals:
  stars: 4559
  last_commit: 2026-10-13T13:58:36Z
type: agent_skill
skill:
  skill_name: open-knowledge-discovery
  description: Read when the user asks what OpenKnowledge is, wants to install it
    on a repository, wants to open or preview a single markdown file that is not
    part of an OpenKnowledge project, wants to share an OpenKnowledge project
    with collaborators, asks whether OpenKnowledge supports a particular
    capability, or asks how `ok init` / `ok cowork` / OK Desktop set up a
    project. Do NOT load to perform OpenKnowledge reads/writes — the runtime
    guidance for editing markdown inside an initialized OK project ships as a
    separate project-local skill installed into each detected agent's skills dir
    (for example `.claude/skills/open-knowledge/`) whenever `ok init` runs.
  folder_path: packages/server/assets/skills/discovery
  extra_files: []
---

Read when the user asks what OpenKnowledge is, wants to install it on a repository, wants to open or preview a single markdown file that is not part of an OpenKnowledge project, wants to share an OpenKnowledge project with collaborators, asks whether OpenKnowledge supports a particular capability, or asks how `ok init` / `ok cowork` / OK Desktop set up a project. Do NOT load to perform OpenKnowledge reads/writes — the runtime guidance for editing markdown inside an initialized OK project ships as a separate project-local skill installed into each detected agent's skills dir (for example `.claude/skills/open-knowledge/`) whenever `ok init` runs.
