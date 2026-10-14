---
slug: zinja-coder-jadx-mcp-server
name: jadx-mcp-server
tagline: MCP server for JADX-AI Plugin
categories:
  - security
status: active
quality_percentile: 42
selection_reason: quality_percentile
first_seen: 2025-04-08T11:30:57
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: zinja-coder/jadx-mcp-server
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 800
  last_commit: 2026-10-09T08:03:18Z
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
