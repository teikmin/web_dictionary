---
slug: memtensor-memos
name: MemOS
tagline: "Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory,
  hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and
  Deep"
summary: "Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory,
  hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and
  DeepSeek Harness support."
categories:
  - databases-memory
tags:
  - agentic-ai
  - ai-agents
  - chatgpt
  - claude
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: MemTensor/MemOS
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11926
  last_commit: 2026-10-17T12:47:04Z
  stars_delta_7d: 174
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 11926
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: MemTensor/MemOS
  path: README.md
  branch: main
  fetched_at: 2026-10-19T07:41:16.925Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install MemoryOS
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - MemoryOS
    env_vars: []
    confidence: manifest
---

Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings and DeepSeek Harness support.
