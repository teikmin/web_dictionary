---
slug: wshobson-agents-plugins-game-development-skills-unity-ecs-patterns
name: unity-ecs-patterns
tagline: Master Unity ECS (Entity Component System) with DOTS, Jobs, and Burst
  for high-performance game development. Use when building data-oriented games,
  op
summary: "- Building high-performance Unity games - Managing thousands of
  entities efficiently - Implementing data-oriented game systems - Optimizing
  CPU-bound game logic - Converting OOP game code to ECS - Using Jobs and
  Burst..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/game-development/skills/unity-ecs-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41052
  last_commit: 2026-10-19T01:07:28Z
  stars_delta_7d: 462
  stars_growth_pct: 1.1
  trending_score: 467.26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/game-development/skills/unity-ecs-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:40.651Z
  truncated: false
type: agent_skill
skill:
  skill_name: unity-ecs-patterns
  description: Master Unity ECS (Entity Component System) with DOTS, Jobs, and
    Burst for high-performance game development. Use when building data-oriented
    games, optimizing performance, or working with large entity counts.
  folder_path: plugins/game-development/skills/unity-ecs-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Unity ECS Patterns
Production patterns for Unity's Data-Oriented Technology Stack (DOTS) including Entity Component System, Job System, and Burst Compiler.

## When to Use This Skill

- Building high-performance Unity games
- Managing thousands of entities efficiently
- Implementing data-oriented game systems
- Optimizing CPU-bound game logic
- Converting OOP game code to ECS
- Using Jobs and Burst for parallelization

## Core Concepts

### 1. ECS vs OOP

| Aspect      | Traditional OOP   | ECS/DOTS        |
| ----------- | ----------------- | --------------- |
| Data layout | Object-oriented   | Data-oriented   |
| Memory      | Scattered         | Contiguous      |
| Processing  | Per-object        | Batched         |
| Scaling     | Poor with count   | Linear scaling  |
| Best for    | Complex behaviors | Mass simulation |

### 2. DOTS Components

```
Entity: Lightweight ID (no data)
Component: Pure data (no behavior)
System: Logic that processes components
World: Container for entities
Archetype: Unique combination of components
Chunk: Memory block for same-archetype entities
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

### Do's

- **Use ISystem over SystemBase** - Better performance
- **Burst compile everything** - Massive speedup
- **Batch structural changes** - Use ECB
- **Profile with Profiler** - Identify bottlenecks
- **Use Aspects** - Clean component grouping

### Don'ts

- **Don't use managed types** - Breaks Burst
- **Don't structural change in jobs** - Use ECB
- **Don't over-architect** - Start simple
- **Don't ignore chunk utilization** - Group similar entities
- **Don't forget disposal** - Native collections leak
