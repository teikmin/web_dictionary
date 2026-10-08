---
slug: blader-humanizer
name: humanizer
tagline: Agent skill that removes signs of AI-generated writing from text
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 74
selection_reason: quality_percentile
first_seen: 2026-01-18T05:30:15Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: blader/humanizer
  license: MIT
signals:
  stars: 54590
  last_commit: 2026-09-28T05:55:12Z
type: agent_skill
skill:
  skill_name: humanizer
  description: >
    Rewrite AI-sounding text so it reads like the writer without changing what
    it says.

    Use when editing or reviewing prose for AI tells: not-X-but-Y contrasts,
    one-line

    closers, staged openers, forced triads, dashes everywhere, inflated claims,
    sales

    language, stock AI words, bold labels, or filler. Based on Wikipedia's
    "Signs of AI writing."
  folder_path: .
  extra_files:
    - .claude-plugin/marketplace.json
    - .claude-plugin/plugin.json
    - .cursor-plugin/plugin.json
    - .github/ISSUE_TEMPLATE/config.yml
    - .github/ISSUE_TEMPLATE/new-pattern.yml
    - .github/ISSUE_TEMPLATE/rewrite-problem.yml
    - .github/workflows/validate.yml
    - AGENTS.md
    - CHANGELOG.md
    - LICENSE
---

Rewrite AI-sounding text so it reads like the writer without changing what it says.
Use when editing or reviewing prose for AI tells: not-X-but-Y contrasts, one-line
closers, staged openers, forced triads, dashes everywhere, inflated claims, sales
language, stock AI words, bold labels, or filler. Based on Wikipedia's "Signs of AI writing."

