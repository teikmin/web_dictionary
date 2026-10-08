---
slug: metatool-ai-metamcp
name: metamcp
tagline: MCP Aggregator, Orchestrator, Middleware, Gateway in one docker
categories:
  - browser-automation
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 13
selection_reason: quality_percentile
first_seen: 2025-01-22T11:58:52Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: metatool-ai/metamcp
  license: MIT
signals:
  stars: 2697
  last_commit: 2026-06-22T16:50:50Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/metatool-ai/metamcp
  env_vars: []
  confidence: manifest
---

MCP Aggregator, Orchestrator, Middleware, Gateway in one docker
