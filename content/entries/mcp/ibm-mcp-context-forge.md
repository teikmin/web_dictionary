---
slug: ibm-mcp-context-forge
name: mcp-context-forge
tagline: An AI Gateway, registry, and proxy that sits in front of any MCP, A2A,
  or REST/gRPC APIs, exposing a unified endpoint with centralized discovery,
  guar
categories:
  - security
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2025-05-08T08:16:59
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: IBM/mcp-context-forge
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 4616
  last_commit: 2026-10-13T15:58:00Z
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
