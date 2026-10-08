---
slug: backnotprop-plannotator-agents-skills-release
name: plannotator
tagline: Annotate and review coding agent plans and code diffs visually, share
  with your team, send feedback to agents with one click.
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2025-12-28T02:09:40Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: backnotprop/plannotator
  subpath: .agents/skills/release
  license: Apache-2.0
signals:
  stars: 9194
  last_commit: 2026-10-07T16:03:11Z
type: agent_skill
skill:
  skill_name: release-plannotator
  description: Prepare and execute a Plannotator release — draft release notes
    with full contributor credit, bump versions across all package files, build
    in dependency order, and kick off the tag-driven release pipeline. Use this
    skill whenever the user mentions preparing a release, bumping versions,
    writing release notes, tagging a release, or publishing. Also trigger when
    the user says things like "let's ship", "prep a release", "what's changed
    since last release", or "time to cut a new version".
  folder_path: .agents/skills/release
  extra_files:
    - references/release-notes-v0.12.0.md
    - references/release-notes-v0.13.0.md
    - references/release-notes-v0.13.1.md
---

Prepare and execute a Plannotator release — draft release notes with full contributor credit, bump versions across all package files, build in dependency order, and kick off the tag-driven release pipeline. Use this skill whenever the user mentions preparing a release, bumping versions, writing release notes, tagging a release, or publishing. Also trigger when the user says things like "let's ship", "prep a release", "what's changed since last release", or "time to cut a new version".
