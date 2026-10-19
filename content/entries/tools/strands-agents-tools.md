---
slug: strands-agents-tools
name: tools
tagline: A set of tools that gives agents powerful capabilities.
summary: A set of tools that gives agents powerful capabilities.
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agents
  - anthropic
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: strands-agents/tools
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1327
  last_commit: 2026-10-13T14:29:28Z
  stars_delta_7d: 17
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 1327
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: strands-agents/tools
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:27.285Z
  truncated: false
type: agent_tool
tool:
  subcategory: agent_framework
  install_command: pip install strands-agents-tools
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - strands-agents-tools
    env_vars: []
    confidence: manifest
---

A set of tools that gives agents powerful capabilities.
