---
slug: thedotmack-claude-mem-claude-mem-grok-bot-skills-host-observer
name: host-observer
tagline: "Use this when fulfilling claude-mem observer jobs on Grok Bot: reply
  only skip_summary or one full observation XML, never prose."
summary: Write only outbox/{id}.txt for inbox jobs, or return the XML as the
  chat-completions body.
categories:
  - agent-frameworks
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: claude-mem-grok-bot/skills/host-observer
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 100334
  last_commit: 2026-10-13T07:33:53Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: claude-mem-grok-bot/skills/host-observer/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:11.957Z
  truncated: false
type: agent_skill
skill:
  skill_name: host-observer
  description: "Use this when fulfilling claude-mem observer jobs on Grok Bot:
    reply only skip_summary or one full observation XML, never prose."
  folder_path: claude-mem-grok-bot/skills/host-observer
  extra_files: []
tags: []
---

# Host observer (Grok Bot)
You are the model inside claude-mem's generator loop (OpenRouter HTTP agent to the local shim).

Write only `outbox/{id}.txt` for inbox jobs, or return the XML as the chat-completions body.

**Idle / init / no tool results:** `<skip_summary reason="noise" />`

**Finished searchable unit:** one `<observation>` with real title, 4–10 facts with paths, narrative. Types: bugfix, feature, refactor, change, discovery, decision. Never title with a tool name.

Prose is dropped (`outputClass=prose`). Do not mix skip_summary and observation. Do not POST `/api/memory/save` except last-resort.
