---
slug: cortex-docs-cortex
name: cortex
tagline: Cortex - Generates interactive API documentation, typed SDKs, and MCP
  servers from OpenAPI, AsyncAPI, GraphQL, gRPC, OpenRPC, and Markdown.
categories:
  - dev-tools
status: active
quality_percentile: 33
selection_reason: quality_percentile
first_seen: 2015-02-09T18:34:28Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: cortex-docs/cortex
  license: MIT
signals:
  stars: 3232
  last_commit: 2026-10-06T05:58:39Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@cortex-docs/cli"
  env_vars: []
  confidence: readme
---

Cortex - Generates interactive API documentation, typed SDKs, and MCP servers from OpenAPI, AsyncAPI, GraphQL, gRPC, OpenRPC, and Markdown.
