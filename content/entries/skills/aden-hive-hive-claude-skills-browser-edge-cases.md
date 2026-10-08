---
slug: aden-hive-hive-claude-skills-browser-edge-cases
name: hive
tagline: Multi-Agent Harness for Production AI
categories:
  - ai-frameworks
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-01-12T00:04:22Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: .claude/skills/browser-edge-cases
  license: Apache-2.0
signals:
  stars: 11088
  last_commit: 2026-10-07T15:24:22Z
type: agent_skill
skill:
  skill_name: browser-edge-cases
  description: SOP for debugging browser automation failures on complex websites.
    Use when browser tools fail on specific sites like LinkedIn, Twitter/X,
    SPAs, or sites with Shadow DOM.
  folder_path: .claude/skills/browser-edge-cases
  extra_files:
    - registry.md
    - scripts/test_02_twitter_scroll.py
    - scripts/test_03_modal_scroll.py
    - scripts/test_04_element_covered.py
    - scripts/test_06_shadow_dom.py
    - scripts/test_07_contenteditable.py
    - scripts/test_08_autocomplete.py
    - scripts/test_10_huge_dom.py
    - scripts/test_13_spa_navigation.py
    - scripts/test_15_screenshot.py
---

SOP for debugging browser automation failures on complex websites. Use when browser tools fail on specific sites like LinkedIn, Twitter/X, SPAs, or sites with Shadow DOM.
