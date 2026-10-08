---
slug: 0xmassi-webclaw
name: webclaw
tagline: Fast, local-first web content extraction for LLMs. Scrape, crawl,
  extract structured data — all from Rust. CLI, REST API, and MCP server.
categories:
  - browser-automation
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 46
selection_reason: quality_percentile
first_seen: 2026-03-10T17:50:15Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: 0xMassi/webclaw
  license: AGPL-3.0
signals:
  stars: 2371
  last_commit: 2026-09-23T08:10:19Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@webclaw/mcp"
  env_vars: []
  confidence: manifest
---

Fast, local-first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API, and MCP server.
