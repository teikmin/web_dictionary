---
slug: wei-shaw-sub2api-skills-sub2api-admin
name: sub2api
tagline: Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。
categories:
  - other
status: active
quality_percentile: 90
selection_reason: quality_percentile
first_seen: 2025-12-18T02:26:18Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: Wei-Shaw/sub2api
  subpath: skills/sub2api-admin
  license: LGPL-3.0
signals:
  stars: 43398
  last_commit: 2026-10-07T02:03:02Z
type: agent_skill
skill:
  skill_name: sub2api-admin
  description: Manage Sub2API admin APIs for accounts, redeem codes, groups,
    proxies, error passthrough rules, TLS fingerprint profiles, imports,
    exports, batch updates, and raw administrator API calls. Use when the user
    mentions Sub2API, admin API keys, account management, redeem code
    management, recharge codes, invitation codes, bulk account import/export,
    keeping or deleting accounts, refreshing accounts, clearing errors, CRS
    sync, or managing Sub2API backend settings through the admin API.
  folder_path: skills/sub2api-admin
  extra_files:
    - agents/openai.yaml
    - references/admin-cli.md
    - scripts/sub2api-admin.js
---

Manage Sub2API admin APIs for accounts, redeem codes, groups, proxies, error passthrough rules, TLS fingerprint profiles, imports, exports, batch updates, and raw administrator API calls. Use when the user mentions Sub2API, admin API keys, account management, redeem code management, recharge codes, invitation codes, bulk account import/export, keeping or deleting accounts, refreshing accounts, clearing errors, CRS sync, or managing Sub2API backend settings through the admin API.
