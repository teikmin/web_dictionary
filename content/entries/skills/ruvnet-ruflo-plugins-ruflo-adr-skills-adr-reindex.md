---
slug: ruvnet-ruflo-plugins-ruflo-adr-skills-adr-reindex
name: adr-reindex
tagline: Reconcile the ADR index against a DELETED ADR file or relation line by
  dropping and rebuilding adr-patterns + adr-edges from scratch
  (scripts/reindex.
categories:
  - databases
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-adr/skills/adr-reindex
  official_vendor: false
  license: MIT
signals:
  stars: 74512
  last_commit: 2026-10-13T06:51:12Z
type: agent_skill
skill:
  skill_name: adr-reindex
  description: Reconcile the ADR index against a DELETED ADR file or relation line
    by dropping and rebuilding adr-patterns + adr-edges from scratch
    (scripts/reindex.mjs). Use when adr-index alone leaves stale rows behind.
  folder_path: plugins/ruflo-adr/skills/adr-reindex
  extra_files: []
---

Reconcile the ADR index against a DELETED ADR file or relation line by dropping and rebuilding adr-patterns + adr-edges from scratch (scripts/reindex.mjs). Use when adr-index alone leaves stale rows behind.
