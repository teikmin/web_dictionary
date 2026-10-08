---
slug: pipeshub-ai-pipeshub-ai-claude-skills-release-changelog
name: pipeshub-ai
tagline: The open-source context layer for AI agents. PipesHub turns your
  company's knowledge (Slack, Drive, Jira, GitHub, Microsoft 365 and 40+
  connectors) in
categories:
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2025-03-06T18:51:10Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: pipeshub-ai/pipeshub-ai
  subpath: .claude/skills/release-changelog
  license: Apache-2.0
signals:
  stars: 3814
  last_commit: 2026-10-07T15:02:21Z
type: agent_skill
skill:
  skill_name: release-changelog
  description: Generate an enterprise-style changelog for a PipesHub GitHub
    release. Takes a release URL or tag (e.g.
    https://github.com/pipeshub-ai/pipeshub-ai/releases/tag/v0.5.0 or v0.5.0),
    writes the detailed per-release changelog to changelog/<version>.md, and
    registers it in the repo-root CHANGELOG.md (condensed entry + link) and the
    changelog/README.md index.
  folder_path: .claude/skills/release-changelog
  extra_files: []
---

Generate an enterprise-style changelog for a PipesHub GitHub release. Takes a release URL or tag (e.g. https://github.com/pipeshub-ai/pipeshub-ai/releases/tag/v0.5.0 or v0.5.0), writes the detailed per-release changelog to changelog/<version>.md, and registers it in the repo-root CHANGELOG.md (condensed entry + link) and the changelog/README.md index.
