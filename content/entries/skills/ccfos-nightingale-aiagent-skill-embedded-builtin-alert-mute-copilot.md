---
slug: ccfos-nightingale-aiagent-skill-embedded-builtin-alert-mute-copilot
name: alert-mute-copilot
tagline: 'One-stop assistant for creating, editing, and troubleshooting
  Nightingale (n9e) alert mute rules (alert_mute). Use it when the user asks to
  "create a '
categories:
  - ai-frameworks
status: active
quality_percentile: 83
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: ccfos/nightingale
  subpath: aiagent/skill/embedded/builtin/alert-mute-copilot
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13337
  last_commit: 2026-10-13T09:44:24Z
type: agent_skill
skill:
  skill_name: alert-mute-copilot
  description: One-stop assistant for creating, editing, and troubleshooting
    Nightingale (n9e) alert mute rules (alert_mute). Use it when the user asks
    to "create a mute rule / mute an alert / silence an alert / do-not-disturb
    during a maintenance window / set up periodic muting / mute every early
    morning / adjust or extend a mute / troubleshoot why a mute isn't working".
    Muting takes effect during the event evaluation stage (muted events are
    neither persisted nor notified); to configure "which events get notified to
    whom", use notification rules (→ notify-rule-copilot); to investigate "why
    didn't I get a notification", go to alert troubleshooting (→
    alert-rule-troubleshoot).
  folder_path: aiagent/skill/embedded/builtin/alert-mute-copilot
  extra_files:
    - http-api.md
    - reference.md
    - troubleshooting.md
---

One-stop assistant for creating, editing, and troubleshooting Nightingale (n9e) alert mute rules (alert_mute). Use it when the user asks to "create a mute rule / mute an alert / silence an alert / do-not-disturb during a maintenance window / set up periodic muting / mute every early morning / adjust or extend a mute / troubleshoot why a mute isn't working". Muting takes effect during the event evaluation stage (muted events are neither persisted nor notified); to configure "which events get notified to whom", use notification rules (→ notify-rule-copilot); to investigate "why didn't I get a notification", go to alert troubleshooting (→ alert-rule-troubleshoot).
