---
slug: microsoft-skillopt-plugins-dsh-skills-skillopt-sleep
name: dsh-skillopt-sleep
tagline: Use when the user wants the dsh agent to self-improve from past usage,
  asks about a nightly/offline 'sleep' or 'dream' cycle, skill/memory
  consolidati
categories:
  - ai-frameworks
status: active
quality_percentile: 98
selection_reason: official_vendor
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: microsoft/SkillOpt
  subpath: plugins/dsh/skills/skillopt-sleep
  official_vendor: true
  license: MIT
signals:
  stars: 18302
  last_commit: 2026-10-06T17:42:32Z
type: agent_skill
skill:
  skill_name: dsh-skillopt-sleep
  description: "Use when the user wants the dsh agent to self-improve from past
    usage, asks about a nightly/offline 'sleep' or 'dream' cycle, skill/memory
    consolidation, or says things like 'make my agent better the more I use it',
    'review my past sessions', 'learn my preferences', 'consolidate what you
    learned', 'run the sleep cycle', or wants to schedule background
    self-optimization. Drives the skillopt_sleep engine through the skillopt_*
    tools: harvest past sessions -> mine recurring tasks -> replay via a
    selected backend -> consolidate validated skills behind a held-out gate."
  folder_path: plugins/dsh/skills/skillopt-sleep
  extra_files: []
---

Use when the user wants the dsh agent to self-improve from past usage, asks about a nightly/offline 'sleep' or 'dream' cycle, skill/memory consolidation, or says things like 'make my agent better the more I use it', 'review my past sessions', 'learn my preferences', 'consolidate what you learned', 'run the sleep cycle', or wants to schedule background self-optimization. Drives the skillopt_sleep engine through the skillopt_* tools: harvest past sessions -> mine recurring tasks -> replay via a selected backend -> consolidate validated skills behind a held-out gate.
