---
slug: sylphxai-anymd
name: anymd
tagline: "Any file → clean Markdown for AI agents: PDF, Word, PowerPoint, Excel,
  EPUB, HTML and web pages, images (OCR), audio and video (metadata, subtitles,
  t"
categories:
  - productivity
status: active
quality_percentile: 43
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: SylphxAI/anymd
  official_vendor: false
  license: MIT
signals:
  stars: 1038
  last_commit: 2026-10-11T23:42:38Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@sylphx/anymd"
  env_vars: []
  confidence: readme
---

Any file → clean Markdown for AI agents: PDF, Word, PowerPoint, Excel, EPUB, HTML and web pages, images (OCR), audio and video (metadata, subtitles, transcripts). A fast Rust MCP server and CLI that runs on your machine. No API key.
