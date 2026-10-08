---
slug: herdrdev-herdr-agents-skills-herdr-pre-release-audit
name: herdr
tagline: the runtime your coding agents live on
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-03-27T17:54:33Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: herdrdev/herdr
  subpath: .agents/skills/herdr-pre-release-audit
  license: Apache-2.0
signals:
  stars: 42777
  last_commit: 2026-10-07T14:48:46Z
type: agent_skill
skill:
  skill_name: herdr-pre-release-audit
  description: Audit herdr release readiness by comparing commits since the base
    release against next-release changelog and docs. Use when asked to run or
    apply the repo's pre-release audit, validate docs/next before release,
    inspect issue refs that release CI will close, or finalize release docs for
    herdr.
  folder_path: .agents/skills/herdr-pre-release-audit
  extra_files:
    - references/pre-release-audit.md
---

Audit herdr release readiness by comparing commits since the base release against next-release changelog and docs. Use when asked to run or apply the repo's pre-release audit, validate docs/next before release, inspect issue refs that release CI will close, or finalize release docs for herdr.
