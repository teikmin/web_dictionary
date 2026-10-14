---
slug: tw93-waza-plugins-waza-skills-read
name: read
tagline: Fetches URLs and PDFs, then summarizes or returns clean Markdown. Use
  when asked to read, fetch, quote, cite, convert, or save a URL or PDF. Not for
  l
categories:
  - other
status: active
quality_percentile: 50
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: tw93/Waza
  subpath: plugins/waza/skills/read
  official_vendor: false
  license: MIT
signals:
  stars: 7286
  last_commit: 2026-10-12T08:47:41Z
type: agent_skill
skill:
  skill_name: read
  description: Fetches URLs and PDFs, then summarizes or returns clean Markdown.
    Use when asked to read, fetch, quote, cite, convert, or save a URL or PDF.
    Not for local text files already in the repo.
  folder_path: plugins/waza/skills/read
  extra_files:
    - references/read-methods.md
    - scripts/fetch.sh
    - scripts/fetch_feishu.py
    - scripts/fetch_local.py
    - scripts/fetch_weixin.py
---

Fetches URLs and PDFs, then summarizes or returns clean Markdown. Use when asked to read, fetch, quote, cite, convert, or save a URL or PDF. Not for local text files already in the repo.
