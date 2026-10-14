---
slug: redhat-et-ripwire-skills-ripwire-find-bug
name: ripwire-find-bug
tagline: "You have a SYMPTOM — crash, exception, wrong output, failing test,
  error string — and don't know which code is responsible. Ranks candidates; a
  stack "
categories:
  - dev-tools
status: active
quality_percentile: 53
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: redhat-et/ripwire
  subpath: skills/ripwire-find-bug
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 2443
  last_commit: 2026-10-13T16:17:41Z
type: agent_skill
skill:
  skill_name: ripwire-find-bug
  description: >
    You have a SYMPTOM — crash, exception, wrong output, failing test, error
    string — and don't know which code is responsible. Ranks candidates; a stack
    trace or sanitizer output maps onto frames innermost-first; 'it worked
    yesterday' / 'my last edit broke it' → --situ. One clear hit plus one
    focused read is enough.
  folder_path: skills/ripwire-find-bug
  extra_files: []
---

You have a SYMPTOM — crash, exception, wrong output, failing test, error string — and don't know which code is responsible. Ranks candidates; a stack trace or sanitizer output maps onto frames innermost-first; 'it worked yesterday' / 'my last edit broke it' → --situ. One clear hit plus one focused read is enough.

