---
slug: ruvnet-metaharness
name: metaharness
tagline: 🛠️ The meta-harness for AI agents — scaffold your own focused, branded
  agent harness with its own npx CLI, MCP server, memory, learning loop, and wit
summary: 🛠️ The meta-harness for AI agents — scaffold your own focused, branded
  agent harness with its own npx CLI, MCP server, memory, learning loop, and
  witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes,
  OpenClaw, and RVM (hardware-isolated sandbox).
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-harness-generator
  - agent-scaffolding
  - agentic-ai
status: active
quality_percentile: 47
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/metaharness
  official_vendor: false
  license: MIT
signals:
  stars: 707
  last_commit: 2026-10-18T12:40:01Z
  stars_delta_7d: 38
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 707
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: ruvnet/metaharness
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:27.249Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: cargo install --git https://github.com/ruvnet/metaharness.git
  runtime: multi
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - agent-harness-generator
    env_vars: []
    confidence: manifest
---

🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, memory, learning loop, and witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes, OpenClaw, and RVM (hardware-isolated sandbox).
