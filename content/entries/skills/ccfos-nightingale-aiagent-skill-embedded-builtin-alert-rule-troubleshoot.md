---
slug: ccfos-nightingale-aiagent-skill-embedded-builtin-alert-rule-troubleshoot
name: alert-rule-troubleshoot
tagline: This skill should be used when the user reports that an alert rule is
  "not firing", "no alert was sent", "the rule didn't trigger", "the rule isn't
  wo
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
  subpath: aiagent/skill/embedded/builtin/alert-rule-troubleshoot
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13337
  last_commit: 2026-10-13T09:44:24Z
type: agent_skill
skill:
  skill_name: alert-rule-troubleshoot
  description: This skill should be used when the user reports that an alert rule
    is "not firing", "no alert was sent", "the rule didn't trigger", "the rule
    isn't working", "it should have alerted but didn't", "why didn't I get an
    alert", "alert rule not firing", or wants to diagnose why a specific alert
    rule failed to produce an event/notification. Use this skill to troubleshoot
    "why an alert rule did not fire as expected", as opposed to taking an
    existing alert and finding its root cause (for the latter, use
    ops-troubleshooting). Only supported on Release 22 and above.
  folder_path: aiagent/skill/embedded/builtin/alert-rule-troubleshoot
  extra_files: []
---

This skill should be used when the user reports that an alert rule is "not firing", "no alert was sent", "the rule didn't trigger", "the rule isn't working", "it should have alerted but didn't", "why didn't I get an alert", "alert rule not firing", or wants to diagnose why a specific alert rule failed to produce an event/notification. Use this skill to troubleshoot "why an alert rule did not fire as expected", as opposed to taking an existing alert and finding its root cause (for the latter, use ops-troubleshooting). Only supported on Release 22 and above.
