---
slug: ibm-mcp-context-forge
name: mcp-context-forge
tagline: An AI Gateway, registry, and proxy that sits in front of any MCP, A2A,
  or REST/gRPC APIs, exposing a unified endpoint with centralized discovery,
  guar
categories:
  - security
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2025-05-08T08:16:59Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: IBM/mcp-context-forge
  license: Apache-2.0
signals:
  stars: 4582
  last_commit: 2026-10-07T15:58:59Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - mcp-contextforge-gateway
  env_vars: []
  confidence: manifest
---

An AI Gateway, registry, and proxy that sits in front of any MCP, A2A, or REST/gRPC APIs, exposing a unified endpoint with centralized discovery, guardrails and management. Optimizes Agent & Tool calling, and supports plugins.
