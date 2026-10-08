---
slug: zinja-coder-jadx-mcp-server
name: jadx-mcp-server
tagline: MCP server for JADX-AI Plugin
categories:
  - security
status: active
quality_percentile: 24
selection_reason: quality_percentile
first_seen: 2025-04-08T11:30:57Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: zinja-coder/jadx-mcp-server
  license: Apache-2.0
signals:
  stars: 791
  last_commit: 2026-09-23T07:51:37Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - jadx-mcp-server
  env_vars: []
  confidence: manifest
---

MCP server for JADX-AI Plugin
