---
slug: ruvnet-ruflo-plugins-ruflo-daa-skills-daa-agent
name: daa-agent
tagline: Create and adapt Dynamic Agentic Architecture agents that learn and evolve
summary: When you need agents that go beyond static configurations — agents that
  adapt their behavior based on performance metrics, learn from interactions,
  and share knowledge with other agents.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-daa/skills/daa-agent
  official_vendor: false
  license: MIT
signals:
  stars: 76729
  last_commit: 2026-10-19T06:30:38Z
  stars_delta_7d: 2217
  stars_growth_pct: 3
  trending_score: 2282.96
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-daa/skills/daa-agent/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.775Z
  truncated: false
type: agent_skill
skill:
  skill_name: daa-agent
  description: Create and adapt Dynamic Agentic Architecture agents that learn and evolve
  folder_path: plugins/ruflo-daa/skills/daa-agent
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# DAA Agent
Create agents with Dynamic Agentic Architecture that adapt and learn over time.

## When to use

When you need agents that go beyond static configurations — agents that adapt their behavior based on performance metrics, learn from interactions, and share knowledge with other agents.

## Steps

1. **Create agent** — call `mcp__plugin_ruflo-core_ruflo__daa_agent_create` with initial configuration and learning parameters
2. **Monitor learning** — call `mcp__plugin_ruflo-core_ruflo__daa_learning_status` to see adaptation progress
3. **Check performance** — call `mcp__plugin_ruflo-core_ruflo__daa_performance_metrics` for efficiency and accuracy metrics
4. **Adapt** — call `mcp__plugin_ruflo-core_ruflo__daa_agent_adapt` to trigger manual adaptation based on feedback
5. **Share knowledge** — call `mcp__plugin_ruflo-core_ruflo__daa_knowledge_share` to propagate learnings to other agents

## DAA vs static agents

| Aspect | Static Agent | DAA Agent |
|--------|-------------|-----------|
| Behavior | Fixed configuration | Adapts over time |
| Learning | None | Continuous from interactions |
| Knowledge | Isolated | Shared across agents |
| Performance | Constant | Improves with use |
