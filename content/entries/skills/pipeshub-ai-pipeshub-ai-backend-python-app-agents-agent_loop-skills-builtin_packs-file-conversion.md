---
slug: pipeshub-ai-pipeshub-ai-backend-python-app-agents-agent_loop-skills-builtin_packs-file-conversion
name: file-conversion
tagline: Use this skill when the user asks to convert a file from one format to
  another (e.g. csv to xlsx, xlsx to json, pdf text to csv) and you're not sure
  w
categories:
  - databases
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: pipeshub-ai/pipeshub-ai
  subpath: backend/python/app/agents/agent_loop/skills/builtin_packs/file-conversion
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3830
  last_commit: 2026-10-13T16:25:21Z
type: agent_skill
skill:
  skill_name: file-conversion
  description: Use this skill when the user asks to convert a file from one format
    to another (e.g. csv to xlsx, xlsx to json, pdf text to csv) and you're not
    sure which library handles that specific pair, or whether it's supported in
    this environment at all. Dispatches to the right library per format pair and
    explicitly lists conversions that are NOT supported here so you don't
    attempt one that will silently fail or produce a wrong result.
  folder_path: backend/python/app/agents/agent_loop/skills/builtin_packs/file-conversion
  extra_files: []
---

Use this skill when the user asks to convert a file from one format to another (e.g. csv to xlsx, xlsx to json, pdf text to csv) and you're not sure which library handles that specific pair, or whether it's supported in this environment at all. Dispatches to the right library per format pair and explicitly lists conversions that are NOT supported here so you don't attempt one that will silently fail or produce a wrong result.
