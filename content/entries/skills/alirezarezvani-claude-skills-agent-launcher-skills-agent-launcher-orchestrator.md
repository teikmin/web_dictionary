---
slug: alirezarezvani-claude-skills-agent-launcher-skills-agent-launcher-orchestrator
name: agent-launcher-orchestrator
tagline: 'Use when a user wants to build, launch, grade, or schedule a Claude
  Managed Agent (CMA) in their own Anthropic account — "build me an agent",
  "launch '
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
  subpath: agent-launcher/skills/agent-launcher-orchestrator
  official_vendor: false
  license: MIT
signals:
  stars: 28112
  last_commit: 2026-08-30T09:46:16Z
type: agent_skill
skill:
  skill_name: agent-launcher-orchestrator
  description: Use when a user wants to build, launch, grade, or schedule a Claude
    Managed Agent (CMA) in their own Anthropic account — "build me an agent",
    "launch this as a managed agent", "run this on a schedule", "grade my agent
    against a rubric", "set up a nightly worker". Reads the per-session goal
    (./my-agent/goal.json), routes deterministically to one of five phase
    sub-skills (interview → stage-launch → grade-iterate → run-without-you →
    wrap-up) via goal_router.py, and compiles the goal+phase into an execution
    shape (single-pass workflow / bounded grade→iterate loop / recurring cron
    deployment loop) via loop_compiler.py. Forks context so heavy intake (build
    sheets, payloads, eval cases) stays out of the parent thread. All launches
    are emitted as BYOK curl the user runs with their own key; no tool makes API
    calls. Inspired by anthropics/launch-your-agent (Apache-2.0). Distinct from
    engineering/agent-harness (generic domain loop) and
    engineering/write-a-skill (authors Claude Code skills, not CMAs).
  folder_path: agent-launcher/skills/agent-launcher-orchestrator
  extra_files:
    - README.md
    - scripts/goal_router.py
    - scripts/goal_state.py
    - scripts/loop_compiler.py
---

Use when a user wants to build, launch, grade, or schedule a Claude Managed Agent (CMA) in their own Anthropic account — "build me an agent", "launch this as a managed agent", "run this on a schedule", "grade my agent against a rubric", "set up a nightly worker". Reads the per-session goal (./my-agent/goal.json), routes deterministically to one of five phase sub-skills (interview → stage-launch → grade-iterate → run-without-you → wrap-up) via goal_router.py, and compiles the goal+phase into an execution shape (single-pass workflow / bounded grade→iterate loop / recurring cron deployment loop) via loop_compiler.py. Forks context so heavy intake (build sheets, payloads, eval cases) stays out of the parent thread. All launches are emitted as BYOK curl the user runs with their own key; no tool makes API calls. Inspired by anthropics/launch-your-agent (Apache-2.0). Distinct from engineering/agent-harness (generic domain loop) and engineering/write-a-skill (authors Claude Code skills, not CMAs).
