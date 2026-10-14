---
slug: alirezarezvani-claude-skills-agent-launcher-skills-interview
name: interview
tagline: Phase 1 of building a Claude Managed Agent — interview the founder
  about the one job the agent should do, then produce a build sheet (CMA
  primitives t
categories:
  - productivity
status: active
quality_percentile: 46
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/interview
  official_vendor: false
  license: MIT
signals:
  stars: 28112
  last_commit: 2026-08-30T09:46:16Z
type: agent_skill
skill:
  skill_name: interview
  description: Phase 1 of building a Claude Managed Agent — interview the founder
    about the one job the agent should do, then produce a build sheet (CMA
    primitives table + v1/v2 deferrals + eval plan) WITHOUT needing their API
    key yet. Use when the user says "help me scope an agent", "I have an idea
    for an agent", "what should this agent be", or when the orchestrator routes
    phase=interview. Drives the six intake slots (job, trigger, inputs, actions,
    definition-of-done, recurrence) via AskUserQuestion, maps them to primitives
    with interview_planner.py, assembles build-sheet.json with
    build_sheet_builder.py, and validates limits with primitives_validator.py.
    Connectors are mockable in v0 (schema-true custom tools); real MCP servers
    become v1 deferrals. Distinct from stage-launch (which turns the sheet into
    payloads).
  folder_path: agent-launcher/skills/interview
  extra_files:
    - README.md
    - scripts/build_sheet_builder.py
    - scripts/interview_planner.py
    - scripts/primitives_validator.py
---

Phase 1 of building a Claude Managed Agent — interview the founder about the one job the agent should do, then produce a build sheet (CMA primitives table + v1/v2 deferrals + eval plan) WITHOUT needing their API key yet. Use when the user says "help me scope an agent", "I have an idea for an agent", "what should this agent be", or when the orchestrator routes phase=interview. Drives the six intake slots (job, trigger, inputs, actions, definition-of-done, recurrence) via AskUserQuestion, maps them to primitives with interview_planner.py, assembles build-sheet.json with build_sheet_builder.py, and validates limits with primitives_validator.py. Connectors are mockable in v0 (schema-true custom tools); real MCP servers become v1 deferrals. Distinct from stage-launch (which turns the sheet into payloads).
