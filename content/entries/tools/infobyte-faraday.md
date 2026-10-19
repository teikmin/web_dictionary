---
slug: infobyte-faraday
name: faraday
tagline: "Open-source and AI-powered cybersecurity tools for offensive security,
  vulnerability management, and autonomous pentesting. Built by hackers in Latin
  "
summary: Open-source and AI-powered cybersecurity tools for offensive security,
  vulnerability management, and autonomous pentesting. Built by hackers in Latin
  America, used worldwide.
categories:
  - security-auth
tags:
  - appsec
  - autonomous-agents
  - autonomous-pentest
  - collaboration
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: infobyte/faraday
  official_vendor: false
  license: GPL-3.0
signals:
  stars: 6803
  last_commit: 2026-10-06T19:33:14Z
  stars_delta_7d: 9
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 6803
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: infobyte/faraday
  path: README.md
  branch: master
  fetched_at: 2026-10-19T07:41:25.786Z
  truncated: false
type: agent_tool
tool:
  subcategory: eval_observability
  install_command: pip install faradaysec
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - faradaysec
    env_vars: []
    confidence: manifest
---

Open-source and AI-powered cybersecurity tools for offensive security, vulnerability management, and autonomous pentesting. Built by hackers in Latin America, used worldwide.
