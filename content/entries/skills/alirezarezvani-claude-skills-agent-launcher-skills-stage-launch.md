---
slug: alirezarezvani-claude-skills-agent-launcher-skills-stage-launch
name: stage-launch
tagline: Phase 2 of building a Claude Managed Agent — turn a validated build
  sheet into exact API payloads and a resumable BYOK curl launch script, then
  launch
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
  subpath: agent-launcher/skills/stage-launch
  official_vendor: false
  license: MIT
signals:
  stars: 28112
  last_commit: 2026-08-30T09:46:16Z
type: agent_skill
skill:
  skill_name: stage-launch
  description: Phase 2 of building a Claude Managed Agent — turn a validated build
    sheet into exact API payloads and a resumable BYOK curl launch script, then
    launch (environment → agent → session → kickoff) using the founder's OWN
    Anthropic key. Use when the user says "launch it", "deploy the agent",
    "create the agent now", or when the orchestrator routes phase=stage-launch.
    payload_generator.py emits the four ordered payloads;
    launch_script_writer.py writes launch.sh that reads $ANTHROPIC_API_KEY at
    runtime and never embeds it; payload_validator.py runs a pre-launch check
    including an API-key-leak scan. No tool in this skill makes network calls —
    the user runs launch.sh themselves. Distinct from interview (planning) and
    grade-iterate (the outcome loop).
  folder_path: agent-launcher/skills/stage-launch
  extra_files:
    - README.md
    - scripts/launch_script_writer.py
    - scripts/payload_generator.py
    - scripts/payload_validator.py
---

Phase 2 of building a Claude Managed Agent — turn a validated build sheet into exact API payloads and a resumable BYOK curl launch script, then launch (environment → agent → session → kickoff) using the founder's OWN Anthropic key. Use when the user says "launch it", "deploy the agent", "create the agent now", or when the orchestrator routes phase=stage-launch. payload_generator.py emits the four ordered payloads; launch_script_writer.py writes launch.sh that reads $ANTHROPIC_API_KEY at runtime and never embeds it; payload_validator.py runs a pre-launch check including an API-key-leak scan. No tool in this skill makes network calls — the user runs launch.sh themselves. Distinct from interview (planning) and grade-iterate (the outcome loop).
