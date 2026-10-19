---
slug: browser-use-browser-harness
name: browser-harness
tagline: Let Claude Code, Codex or Cursor use your real Chrome, logged in as
  you. One prompt to set up. Open source, MIT.
summary: Let Claude Code, Codex or Cursor use your real Chrome, logged in as
  you. One prompt to set up. Open source, MIT.
categories:
  - browser-web
tags:
  - ai-agent
  - browser-agent
  - browser-automation
  - browser-use
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: browser-use/browser-harness
  official_vendor: false
  license: MIT
signals:
  stars: 18491
  last_commit: 2026-10-17T17:59:01Z
  stars_delta_7d: 687
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 18491
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: browser-use/browser-harness
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:39:21.077Z
  truncated: false
type: agent_tool
tool:
  subcategory: browser_agent
  install_command: pip install browser-harness
  runtime: python
  execution_mode: cloud
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - browser-harness
    env_vars: []
    confidence: manifest
---

Let Claude Code, Codex or Cursor use your real Chrome, logged in as you. One prompt to set up. Open source, MIT.
