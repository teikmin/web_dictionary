---
slug: tirth8205-code-review-graph
name: code-review-graph
tagline: Local-first code intelligence graph for MCP and CLI. Builds a
  persistent map of your codebase so AI coding tools read only what matters,
  with benchmar
categories:
  - databases
status: active
quality_percentile: 84
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: tirth8205/code-review-graph
  official_vendor: false
  license: MIT
signals:
  stars: 32111
  last_commit: 2026-10-06T19:33:08Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - code-review-graph
  env_vars: []
  confidence: manifest
---

Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows.
