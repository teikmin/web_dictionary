---
slug: nanmicoder-cc-haha-agents-skills-release-announcement
name: cc-haha
tagline: "Local-first cross-platform desktop workspace for Claude Code / agents:
  multi-agent, Git worktrees, code diffs, skill marketplace, multi-model,
  Compute"
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 99
selection_reason: quality_percentile
first_seen: 2026-03-31T17:30:14Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: NanmiCoder/cc-haha
  subpath: .agents/skills/release-announcement
  license: MIT
signals:
  stars: 14893
  last_commit: 2026-10-05T21:21:08Z
type: agent_skill
skill:
  skill_name: release-announcement
  description: 从本项目最新的 release-notes Markdown 制作微信群发布短文案与竖版长图，核验贡献者 GitHub ID
    并嵌入真实头像。用于版本发布宣传，不负责创建或发布 GitHub Release。
  folder_path: .agents/skills/release-announcement
  extra_files:
    - agents/openai.yaml
    - references/editorial-brief.md
    - references/poster-spec.md
    - scripts/.gitignore
    - scripts/release_poster.py
    - scripts/test_release_poster.py
---

从本项目最新的 release-notes Markdown 制作微信群发布短文案与竖版长图，核验贡献者 GitHub ID 并嵌入真实头像。用于版本发布宣传，不负责创建或发布 GitHub Release。
