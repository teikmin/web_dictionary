---
slug: headroomlabs-ai-headroom
name: headroom
tagline: Compress tool outputs, logs, files, and RAG chunks before they reach
  the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON,
  same a
categories:
  - security
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-01-07T19:58:51
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: headroomlabs-ai/headroom
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 75189
  last_commit: 2026-10-13T02:36:25Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - headroom-ai
  env_vars: []
  confidence: manifest
---

Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server.
