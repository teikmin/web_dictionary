---
slug: koala73-worldmonitor-agents-skills-sentry-triage
name: worldmonitor
tagline: Real-time global intelligence dashboard. AI-powered news aggregation,
  geopolitical monitoring, and infrastructure tracking in a unified situational
  aw
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-01-08T17:26:06Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: koala73/worldmonitor
  subpath: .agents/skills/sentry-triage
  license: AGPL-3.0
signals:
  stars: 87972
  last_commit: 2026-10-07T15:54:03Z
type: agent_skill
skill:
  skill_name: sentry-triage
  description: Triage WorldMonitor Sentry issues — classify unresolved events as
    noise, already-fixed, product bugs, or needs-human; optionally ship a tested
    fix. Use when the user says triage Sentry, pastes a WORLDMONITOR-* ID or
    sentry.io URL, or asks to investigate production errors.
  folder_path: .agents/skills/sentry-triage
  extra_files: []
---

Triage WorldMonitor Sentry issues — classify unresolved events as noise, already-fixed, product bugs, or needs-human; optionally ship a tested fix. Use when the user says triage Sentry, pastes a WORLDMONITOR-* ID or sentry.io URL, or asks to investigate production errors.
