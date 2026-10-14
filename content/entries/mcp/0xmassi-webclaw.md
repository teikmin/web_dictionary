---
slug: 0xmassi-webclaw
name: webclaw
tagline: Fast, local-first web content extraction for LLMs. Scrape, crawl,
  extract structured data — all from Rust. CLI, REST API, and MCP server.
categories:
  - browser-automation
status: active
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-03-10T17:50:15
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: 0xMassi/webclaw
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 2375
  last_commit: 2026-10-13T15:19:51Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@webclaw/mcp"
  env_vars: []
  confidence: readme
---

Fast, local-first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API, and MCP server.
