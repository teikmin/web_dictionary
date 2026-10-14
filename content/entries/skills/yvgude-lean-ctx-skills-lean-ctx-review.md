---
slug: yvgude-lean-ctx-skills-lean-ctx-review
name: lean-ctx-review
tagline: Review how the lean-ctx ctx_* MCP tools performed in the current
  session and file upstream issues for confirmed problems. Use when the user
  asks to re
categories:
  - security
status: active
quality_percentile: 73
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: yvgude/lean-ctx
  subpath: skills/lean-ctx-review
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3875
  last_commit: 2026-10-13T16:19:21Z
type: agent_skill
skill:
  skill_name: lean-ctx-review
  description: Review how the lean-ctx ctx_* MCP tools performed in the current
    session and file upstream issues for confirmed problems. Use when the user
    asks to review/audit lean-ctx tool performance, says "lean-ctx review", asks
    why ctx_* tools failed or fell back to native tools, or wants to report a
    lean-ctx bug.
  folder_path: skills/lean-ctx-review
  extra_files:
    - scripts/scan_session.py
---

Review how the lean-ctx ctx_* MCP tools performed in the current session and file upstream issues for confirmed problems. Use when the user asks to review/audit lean-ctx tool performance, says "lean-ctx review", asks why ctx_* tools failed or fell back to native tools, or wants to report a lean-ctx bug.
