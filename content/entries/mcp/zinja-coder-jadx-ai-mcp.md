---
slug: zinja-coder-jadx-ai-mcp
name: jadx-ai-mcp
tagline: Plugin for JADX to integrate MCP server
categories:
  - security
status: active
quality_percentile: 25
selection_reason: quality_percentile
first_seen: 2025-04-07T17:28:54Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: zinja-coder/jadx-ai-mcp
  license: Apache-2.0
signals:
  stars: 2861
  last_commit: 2026-09-23T07:51:12Z
type: mcp_server
launch:
  transport: stdio
  command: /<path>/<to>/uv
  args:
    - --directory
    - </PATH/TO/>jadx-mcp-server/
    - run
    - jadx_mcp_server.py
  env_vars: []
  confidence: readme
---

Plugin for JADX to integrate MCP server
