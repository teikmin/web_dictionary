---
slug: ccfos-nightingale-aiagent-skill-embedded-builtin-alert-subscribe-copilot
name: alert-subscribe-copilot
tagline: "One-stop assistant for creating, editing, and troubleshooting
  Nightingale (n9e) alert subscription rules (alert_subscribe). Use when the
  user asks to "
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
  subpath: aiagent/skill/embedded/builtin/alert-subscribe-copilot
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13337
  last_commit: 2026-10-13T09:44:24Z
type: agent_skill
skill:
  skill_name: alert-subscribe-copilot
  description: One-stop assistant for creating, editing, and troubleshooting
    Nightingale (n9e) alert subscription rules (alert_subscribe). Use when the
    user asks to "create a subscription rule / subscribe to alerts / forward
    alert events / CC another team / escalate alerts (notify someone else after
    N minutes unhandled) / receive alerts across business groups / troubleshoot
    a subscription not taking effect". A subscription is a "copy + secondary
    routing" of events at the notification stage; to configure "who an event
    directly notifies" use notification rules (→ notify-rule-copilot), and to
    stop receiving alerts use muting (→ alert-mute-copilot).
  folder_path: aiagent/skill/embedded/builtin/alert-subscribe-copilot
  extra_files:
    - http-api.md
    - reference.md
    - troubleshooting.md
---

One-stop assistant for creating, editing, and troubleshooting Nightingale (n9e) alert subscription rules (alert_subscribe). Use when the user asks to "create a subscription rule / subscribe to alerts / forward alert events / CC another team / escalate alerts (notify someone else after N minutes unhandled) / receive alerts across business groups / troubleshoot a subscription not taking effect". A subscription is a "copy + secondary routing" of events at the notification stage; to configure "who an event directly notifies" use notification rules (→ notify-rule-copilot), and to stop receiving alerts use muting (→ alert-mute-copilot).
