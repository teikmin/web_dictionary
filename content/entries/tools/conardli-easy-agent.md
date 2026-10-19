---
slug: conardli-easy-agent
name: easy-agent
tagline: "Production-ready open source terminal coding agent with readable,
  layered code: permission rules, OS sandboxing, MCP, skills, sub-agents, and
  Anthropi"
summary: "Production-ready open source terminal coding agent with readable,
  layered code: permission rules, OS sandboxing, MCP, skills, sub-agents, and
  Anthropic, OpenAI-compatible, Gemini, or local models."
categories:
  - coding-agents
tags:
  - ai-agent
  - anthropic
  - cli
  - coding-agent
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ConardLi/easy-agent
  official_vendor: false
  license: MIT
signals:
  stars: 1016
  last_commit: 2026-10-17T15:39:34Z
  stars_delta_7d: 36
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 1016
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: ConardLi/easy-agent
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:25.506Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: npx eagent
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - eagent
    env_vars: []
    confidence: manifest
---

Production-ready open source terminal coding agent with readable, layered code: permission rules, OS sandboxing, MCP, skills, sub-agents, and Anthropic, OpenAI-compatible, Gemini, or local models.
