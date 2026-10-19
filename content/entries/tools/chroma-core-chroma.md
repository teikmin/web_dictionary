---
slug: chroma-core-chroma
name: chroma
tagline: Search infrastructure for AI
summary: Search infrastructure for AI
categories:
  - databases-memory
tags:
  - agents
  - ai-agents
  - database
  - rust
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: chroma-core/chroma
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 29530
  last_commit: 2026-10-17T22:33:48Z
  stars_delta_7d: 138
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 29530
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: chroma-core/chroma
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:15.717Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install chromadb
  runtime: multi
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - chromadb
    env_vars: []
    confidence: manifest
---

Search infrastructure for AI
