---
slug: the-open-agent-openagent-skills-blogwatcher
name: blogwatcher
tagline: Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI.
summary: "- Go: go install github.com/Hyaxia/blogwatcher/cmd/blogwatcher@latest"
categories:
  - coding-agents
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/blogwatcher
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5688
  last_commit: 2026-10-13T12:41:03Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/blogwatcher/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:05.713Z
  truncated: false
type: agent_skill
skill:
  skill_name: blogwatcher
  description: Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI.
  folder_path: skills/blogwatcher
  extra_files: []
tags:
  - github
---

# blogwatcher
Track blog and RSS/Atom feed updates with the `blogwatcher` CLI.

Install

- Go: `go install github.com/Hyaxia/blogwatcher/cmd/blogwatcher@latest`

Quick start

- `blogwatcher --help`

Common commands

- Add a blog: `blogwatcher add "My Blog" https://example.com`
- List blogs: `blogwatcher blogs`
- Scan for updates: `blogwatcher scan`
- List articles: `blogwatcher articles`
- Mark an article read: `blogwatcher read 1`
- Mark all articles read: `blogwatcher read-all`
- Remove a blog: `blogwatcher remove "My Blog"`

Example output

```
$ blogwatcher blogs
Tracked blogs (1):

  xkcd
    URL: https://xkcd.com
```

```
$ blogwatcher scan
Scanning 1 blog(s)...

  xkcd
    Source: RSS | Found: 4 | New: 4

Found 4 new article(s) total!
```

Notes

- Use `blogwatcher <command> --help` to discover flags and options.
