---
slug: googleworkspace-cli-skills-gws-chat-send
name: gws-chat-send
tagline: "Google Chat: Send a message to a space."
summary: Send a message to a space
categories:
  - other
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-chat-send
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
  path: skills/gws-chat-send/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.094Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-chat-send
  description: "Google Chat: Send a message to a space."
  folder_path: skills/gws-chat-send
  extra_files: []
tags: []
---

# chat +send
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Send a message to a space

## Usage

```bash
gws chat +send --space <NAME> --text <TEXT>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--space` | ✓ | — | Space name (e.g. spaces/AAAA...) |
| `--text` | ✓ | — | Message text (plain text) |

## Examples

```bash
gws chat +send --space spaces/AAAAxxxx --text 'Hello team!'
```

## Tips

- Use 'gws chat spaces list' to find space names.
- For cards or threaded replies, use the raw API instead.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-chat-send/../gws-shared/SKILL.md) — Global flags and auth
- [gws-chat](https://github.com/googleworkspace/cli/blob/main/skills/gws-chat-send/../gws-chat/SKILL.md) — All manage chat spaces and messages commands
