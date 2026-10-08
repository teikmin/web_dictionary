---
slug: thedotmack-claude-mem-claude-mem-cursor-skills-agent-cost-report
name: claude-mem
tagline: Persistent Context Across Sessions for Every Agent –  Captures
  everything your agent does during sessions, compresses it with AI, and injects
  relevant
categories:
  - databases
  - ai-frameworks
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2025-08-31T20:50:03Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: claude-mem-cursor/skills/agent-cost-report
  license: Apache-2.0
signals:
  stars: 97519
  last_commit: 2026-10-07T00:57:45Z
type: agent_skill
skill:
  skill_name: Agent Cost Report
  description: Believable agent cost report for any period, default the last 7
    full days PT, not counting today. Measured tokens from Claude Code
    transcripts priced at OpenRouter list prices (ESTIMATED), measured provider
    spend when a sanctioned source exists, note-taker cost separate,
    Timing-style HTML/PDF plus report.json, line-items.csv, evidence.json.
  folder_path: claude-mem-cursor/skills/agent-cost-report
  extra_files:
    - .gitignore
    - CHECKSUMS.txt
    - scripts/acr.py
    - scripts/acr/__init__.py
    - scripts/acr/behavior.py
    - scripts/acr/classify.py
    - scripts/acr/costs.py
    - scripts/acr/devices.py
    - scripts/acr/evidence.py
    - scripts/acr/labels.py
---

Believable agent cost report for any period, default the last 7 full days PT, not counting today. Measured tokens from Claude Code transcripts priced at OpenRouter list prices (ESTIMATED), measured provider spend when a sanctioned source exists, note-taker cost separate, Timing-style HTML/PDF plus report.json, line-items.csv, evidence.json.
