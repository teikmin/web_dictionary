---
slug: cloakhq-cloakbrowser
name: CloakBrowser
tagline: Stealth Chromium that passes every bot detection test. Drop-in
  Playwright replacement with source-level fingerprint patches. 50+ tests
  passed.
summary: Stealth Chromium that passes every bot detection test. Drop-in
  Playwright replacement with source-level fingerprint patches. 50+ tests
  passed.
categories:
  - browser-web
tags:
  - ai-agents
  - anti-detect
  - antidetect-browser
  - bot-detection
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: CloakHQ/CloakBrowser
  official_vendor: false
  license: MIT
signals:
  stars: 32300
  last_commit: 2026-10-18T20:13:05Z
  stars_delta_7d: 941
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 32300
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: CloakHQ/CloakBrowser
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:15.736Z
  truncated: false
type: agent_tool
tool:
  subcategory: browser_agent
  install_command: pip install cloakbrowser
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - cloakbrowser
    env_vars: []
    confidence: manifest
---

Stealth Chromium that passes every bot detection test. Drop-in Playwright replacement with source-level fingerprint patches. 50+ tests passed.
