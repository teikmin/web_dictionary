---
slug: tencentcloud-octop
name: Octop
tagline: A smarter, self-hosted AI assistant — multi-user, multi-agent.
summary: A smarter, self-hosted AI assistant — multi-user, multi-agent.
categories:
  - databases-memory
tags:
  - agentic-ai
  - ai-agent
  - ai-agents
  - local-first
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: TencentCloud/Octop
  official_vendor: false
  license: MIT
signals:
  stars: 9981
  last_commit: 2026-10-19T06:24:49Z
  stars_delta_7d: 679
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 9981
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: TencentCloud/Octop
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:17.197Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install octop
  runtime: python
  execution_mode: hybrid
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - octop
    env_vars: []
    confidence: manifest
---

A smarter, self-hosted AI assistant — multi-user, multi-agent.
