---
slug: ruvnet-ruflo-plugins-ruflo-testgen-skills-test-gaps
name: test-gaps
tagline: Detect missing test coverage and generate test suggestions. Use when
  the user asks about coverage gaps, untested code, or what tests to write next;
  al
summary: "Find test coverage gaps via CLI:"
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
  subpath: plugins/ruflo-testgen/skills/test-gaps
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
  path: plugins/ruflo-testgen/skills/test-gaps/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.781Z
  truncated: false
type: agent_skill
skill:
  skill_name: test-gaps
  description: Detect missing test coverage and generate test suggestions. Use
    when the user asks about coverage gaps, untested code, or what tests to
    write next; also after adding a feature to find what still needs tests.
  folder_path: plugins/ruflo-testgen/skills/test-gaps
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Find test coverage gaps via CLI:
```bash
npx @claude-flow/cli@latest hooks coverage-gaps --format table --threshold 80   # add --critical-only for the worst gaps (there is no --limit)
npx @claude-flow/cli@latest hooks coverage-route --task 'add auth tests'
npx @claude-flow/cli@latest hooks coverage-suggest --path src/
```

Or dispatch the testgaps worker via MCP:
`mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "testgaps" })`

For continuous detection, use `/loop` with the `loop-worker` skill targeting the `testgaps` worker.
