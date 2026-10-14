---
slug: iofficeai-officecli-skills-officecli-data-dashboard
name: officecli-data-dashboard
tagline: Use this skill to build a multi-element Excel dashboard — Dashboard
  sheet on open, multiple formula-driven KPI cards, multiple charts, sparklines,
  and
categories:
  - dev-tools
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: iOfficeAI/OfficeCLI
  subpath: skills/officecli-data-dashboard
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 31942
  last_commit: 2026-10-13T02:29:44Z
type: agent_skill
skill:
  skill_name: officecli-data-dashboard
  description: "Use this skill to build a multi-element Excel dashboard —
    Dashboard sheet on open, multiple formula-driven KPI cards, multiple charts,
    sparklines, and conditional formatting — from CSV or tabular input. Trigger
    on: 'dashboard', 'KPI dashboard', 'analytics dashboard', 'executive
    dashboard', 'metrics dashboard', 'CSV to dashboard', 'data visualization'.
    Output is a single .xlsx. Scene-layer on officecli-xlsx: inherits every xlsx
    hard rule. DO NOT invoke for: a single budget tracker / one-sheet
    CSV-with-formatting (use xlsx), a 3-statement / DCF / LBO financial model
    (use financial-model), a weekly report with at most 1 chart and fewer than
    10 rows (use xlsx)."
  folder_path: skills/officecli-data-dashboard
  extra_files: []
---

Use this skill to build a multi-element Excel dashboard — Dashboard sheet on open, multiple formula-driven KPI cards, multiple charts, sparklines, and conditional formatting — from CSV or tabular input. Trigger on: 'dashboard', 'KPI dashboard', 'analytics dashboard', 'executive dashboard', 'metrics dashboard', 'CSV to dashboard', 'data visualization'. Output is a single .xlsx. Scene-layer on officecli-xlsx: inherits every xlsx hard rule. DO NOT invoke for: a single budget tracker / one-sheet CSV-with-formatting (use xlsx), a 3-statement / DCF / LBO financial model (use financial-model), a weekly report with at most 1 chart and fewer than 10 rows (use xlsx).
