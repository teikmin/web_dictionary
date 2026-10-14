---
slug: asgeirtj-system_prompts_leaks-anthropic-artifact-types-docs
name: pages
tagline: "The shared Claude Docs viewer — an artifact TYPE. An artifact made
  from it is a doc: a live document that people and Claude read and edit
  together (pe"
categories:
  - ai-frameworks
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Anthropic/artifact-types/docs
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 69549
  last_commit: 2026-10-12T02:20:04Z
type: agent_skill
skill:
  skill_name: pages
  description: "The shared Claude Docs viewer — an artifact TYPE. An artifact made
    from it is a doc: a live document that people and Claude read and edit
    together (people may also call it a page). The doc's content does not live
    in this artifact's files at all — it lives in the Claude Docs service and is
    read and written ONLY through the Claude Docs connector (its create, batch,
    read and update tools). Read this before touching such an artifact: it says
    what the files are, that an instance owns none of its own, how to change
    what the doc says (the connector, never a publish), and where a comment on
    the doc — including one sent to you from it — is read and answered (the
    connector's comment verbs; never these files, never the artifact's comment
    relay)."
  folder_path: Anthropic/artifact-types/docs
  extra_files: []
---

The shared Claude Docs viewer — an artifact TYPE. An artifact made from it is a doc: a live document that people and Claude read and edit together (people may also call it a page). The doc's content does not live in this artifact's files at all — it lives in the Claude Docs service and is read and written ONLY through the Claude Docs connector (its create, batch, read and update tools). Read this before touching such an artifact: it says what the files are, that an instance owns none of its own, how to change what the doc says (the connector, never a publish), and where a comment on the doc — including one sent to you from it — is read and answered (the connector's comment verbs; never these files, never the artifact's comment relay).
