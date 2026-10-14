---
slug: blazickjp-arxiv-mcp-server
name: arxiv-mcp-server
tagline: A local MCP server for agent literature work. Original-LaTeX section
  reads, BibTeX from arXiv metadata, and topic watches. Papers stay on disk.
  Search
categories:
  - ai-frameworks
status: active
quality_percentile: 40
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: blazickjp/arxiv-mcp-server
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3214
  last_commit: 2026-10-08T13:08:10Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - arxiv-mcp-server
  env_vars: []
  confidence: manifest
---

A local MCP server for agent literature work. Original-LaTeX section reads, BibTeX from arXiv metadata, and topic watches. Papers stay on disk. Search is optional.
