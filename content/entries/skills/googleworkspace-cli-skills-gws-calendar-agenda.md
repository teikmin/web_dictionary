---
slug: googleworkspace-cli-skills-gws-calendar-agenda
name: gws-calendar-agenda
tagline: "Google Calendar: Show upcoming events across all calendars."
summary: Show upcoming events across all calendars
categories:
  - productivity-ops
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-calendar-agenda
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 31448
  last_commit: 2026-10-06T20:23:04Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-calendar-agenda/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.070Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-calendar-agenda
  description: "Google Calendar: Show upcoming events across all calendars."
  folder_path: skills/gws-calendar-agenda
  extra_files: []
tags: []
---

# calendar +agenda
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Show upcoming events across all calendars

## Usage

```bash
gws calendar +agenda
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--today` | — | — | Show today's events |
| `--tomorrow` | — | — | Show tomorrow's events |
| `--week` | — | — | Show this week's events |
| `--days` | — | — | Number of days ahead to show |
| `--calendar` | — | — | Filter to specific calendar name or ID |
| `--timezone` | — | — | IANA timezone override (e.g. America/Denver). Defaults to Google account timezone. |

## Examples

```bash
gws calendar +agenda
gws calendar +agenda --today
gws calendar +agenda --week --format table
gws calendar +agenda --days 3 --calendar 'Work'
gws calendar +agenda --today --timezone America/New_York
```

## Tips

- Read-only — never modifies events.
- Queries all calendars by default; use --calendar to filter.
- Uses your Google account timezone by default; override with --timezone.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-agenda/../gws-shared/SKILL.md) — Global flags and auth
- [gws-calendar](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-agenda/../gws-calendar/SKILL.md) — All manage calendars and events commands
