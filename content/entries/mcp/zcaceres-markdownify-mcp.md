---
slug: zcaceres-markdownify-mcp
name: markdownify-mcp
tagline: A Model Context Protocol server for converting almost anything to Markdown
categories:
  - dev-tools
status: active
quality_percentile: 52
selection_reason: quality_percentile
first_seen: 2024-12-18T21:14:52Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: zcaceres/markdownify-mcp
  license: MIT
signals:
  stars: 3001
  last_commit: 2026-09-25T05:23:14Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/zcaceres/markdownify-mcp
  env_vars: []
  confidence: manifest
---

A Model Context Protocol server for converting almost anything to Markdown
