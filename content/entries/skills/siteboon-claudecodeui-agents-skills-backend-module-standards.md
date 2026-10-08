---
slug: siteboon-claudecodeui-agents-skills-backend-module-standards
name: claudecodeui
tagline: Use Claude Code, OpenCode, Cursor CLI, and Codex on mobile and web with
  CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that h
categories:
  - browser-automation
  - dev-tools
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2025-06-25T12:51:12Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: siteboon/claudecodeui
  subpath: .agents/skills/backend-module-standards
  license: AGPL-3.0
signals:
  stars: 13966
  last_commit: 2026-10-05T03:35:26Z
type: agent_skill
skill:
  skill_name: backend-module-standards
  description: Enforce this repository's TypeScript backend module architecture
    standards. Use whenever creating, modifying, refactoring, or reviewing
    backend code under `server/`, including routes, services, modules,
    repositories, shared backend code, and backend tests. Do not apply these
    rules to frontend code or non-backend scaffolding.
  folder_path: .agents/skills/backend-module-standards
  extra_files:
    - agents/openai.yaml
---

Enforce this repository's TypeScript backend module architecture standards. Use whenever creating, modifying, refactoring, or reviewing backend code under `server/`, including routes, services, modules, repositories, shared backend code, and backend tests. Do not apply these rules to frontend code or non-backend scaffolding.
