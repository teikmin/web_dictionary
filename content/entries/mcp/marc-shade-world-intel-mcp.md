---
slug: marc-shade-world-intel-mcp
name: world-intel-mcp
tagline: "120-tool MCP server for real-time global intelligence: markets, SEC
  filings, conflict, military, cyber, climate, news, and 30+ domains. AI
  situation b"
categories:
  - security
  - dev-tools
status: active
quality_percentile: 23
selection_reason: quality_percentile
first_seen: 2025-11-29T16:49:53Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: marc-shade/world-intel-mcp
  license: MIT
signals:
  stars: 657
  last_commit: 2026-09-02T20:53:26Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - world-intel-mcp
  env_vars: []
  confidence: manifest
---

120-tool MCP server for real-time global intelligence: markets, SEC filings, conflict, military, cyber, climate, news, and 30+ domains. AI situation briefs that cite their sources, user-defined geofences with escalation scoring, cited daily digests, live SSE dashboard. MIT, no paid API keys.
