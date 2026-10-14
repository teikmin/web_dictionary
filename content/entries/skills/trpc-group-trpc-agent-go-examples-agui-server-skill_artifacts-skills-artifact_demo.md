---
slug: trpc-group-trpc-agent-go-examples-agui-server-skill_artifacts-skills-artifact_demo
name: artifact_demo
tagline: Demo skill that writes an output file and persists it as an artifact.
summary: This skill is used by the examples/agui/server/skillartifacts demo.
categories:
  - ai-frameworks
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/agui/server/skill_artifacts/skills/artifact_demo
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1860
  last_commit: 2026-10-13T15:44:15Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/agui/server/skill_artifacts/skills/artifact_demo/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:07.442Z
  truncated: false
type: agent_skill
skill:
  skill_name: artifact_demo
  description: Demo skill that writes an output file and persists it as an artifact.
  folder_path: examples/agui/server/skill_artifacts/skills/artifact_demo
  extra_files: []
---

This skill is used by the `examples/agui/server/skill_artifacts` demo.

It writes `out/hello.txt` and asks `skill_run` to persist outputs via the Artifact service.
