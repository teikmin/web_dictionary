---
slug: headroomlabs-ai-headroom
name: headroom
tagline: Compress tool outputs, logs, files, and RAG chunks before they reach
  the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON,
  same a
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-01-07T19:58:51Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: headroomlabs-ai/headroom
  license: Apache-2.0
signals:
  stars: 74574
  last_commit: 2026-10-07T16:00:32Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - io.github.headroomlabs-ai/headroom
  env_vars: []
  confidence: manifest
---

Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 20% fewer tokens for coding agents, 60-95% fewer tokens for JSON, same answers. Library, proxy, MCP server.
