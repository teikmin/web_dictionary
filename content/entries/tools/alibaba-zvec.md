---
slug: alibaba-zvec
name: zvec
tagline: A lightweight, lightning-fast, in-process vector database
summary: A lightweight, lightning-fast, in-process vector database
categories:
  - databases-memory
tags:
  - agent-skills
  - db
  - embedded
  - faiss
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: alibaba/zvec
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 16126
  last_commit: 2026-10-19T07:28:03Z
  stars_delta_7d: 355
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 16126
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: alibaba/zvec
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:40:23.215Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install zvec
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - zvec
    env_vars: []
    confidence: manifest
---

A lightweight, lightning-fast, in-process vector database
