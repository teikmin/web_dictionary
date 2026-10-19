---
slug: google-artemis
name: artemis
tagline: ARTEMIS turns natural-language instructions into reliable Android
  automation. It automates end-to-end workflows, captures logs, and integrates
  seamles
summary: ARTEMIS turns natural-language instructions into reliable Android
  automation. It automates end-to-end workflows, captures logs, and integrates
  seamlessly with AI coding assistants such as Antigravity, Codex, and Claude
  Code.  It also achieves 99%+ success rate on AndroidWorld Benchmark.
categories:
  - productivity-ops
tags:
  - ai-agents
  - android
  - google
  - test-automation
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: google/artemis
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 12663
  last_commit: 2026-10-01T21:37:15Z
  stars_delta_7d: 1074
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 12663
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: google/artemis
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:16.893Z
  truncated: false
type: agent_tool
tool:
  subcategory: eval_observability
  install_command: pip install artemis
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - artemis
    env_vars: []
    confidence: manifest
---

ARTEMIS turns natural-language instructions into reliable Android automation. It automates end-to-end workflows, captures logs, and integrates seamlessly with AI coding assistants such as Antigravity, Codex, and Claude Code.  It also achieves 99%+ success rate on AndroidWorld Benchmark.
