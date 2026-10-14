---
slug: harnessmd-munder-difflin-resources-skills-lastmonth
name: lastMonth
tagline: |-
  Resolve "lastMonth" to a concrete ISO date range relative to your run time —
  the previous full calendar month. Returns inclusive civil dates plus exac
summary: "Get the concrete date range for the previous full calendar month by
  running the bundled resolver:"
categories:
  - dev-tools
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: HarnessMD/munder-difflin
  subpath: resources/skills/lastMonth
  official_vendor: false
  license: MIT
signals:
  stars: 8726
  last_commit: 2026-10-13T10:46:28Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: HarnessMD/munder-difflin
  path: resources/skills/lastMonth/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:16.408Z
  truncated: false
type: agent_skill
skill:
  skill_name: lastMonth
  description: >
    Resolve "lastMonth" to a concrete ISO date range relative to your run time —

    the previous full calendar month. Returns inclusive civil dates plus exact
    UTC instants so you have

    temporal context without computing dates by hand. Read-only: no writes, no

    network. Use before a task over last month (monthly reports, month-end
    summaries).
  folder_path: resources/skills/lastMonth
  extra_files: []
---

## /lastMonth

Get the concrete date range for **the previous full calendar month** by running the bundled resolver:

```bash
node "$AGENT_DIR/.claude/skills/temporal/when.mjs" lastMonth
```

It prints a human-readable line plus a JSON record:

- `start` / `end` — inclusive civil dates (`YYYY-MM-DD`) in your local timezone
- `startUtc` / `endExclusiveUtc` — the same window as a half-open `[start, end)`
  range of exact UTC instants, for timestamp-based queries
- `days`, `timezone`, `asOf` — the span, your timezone, and when this resolved

Use the returned dates as the time bounds for the task at hand. **Do not derive
dates by hand** — this resolver is the source of truth. For the full window list
or an arbitrary range (e.g. `last45days`, `last6months`), see the `/temporal` skill.
