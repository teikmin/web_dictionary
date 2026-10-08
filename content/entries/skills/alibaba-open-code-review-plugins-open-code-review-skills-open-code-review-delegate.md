---
slug: alibaba-open-code-review-plugins-open-code-review-skills-open-code-review-delegate
name: open-code-review
tagline: "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid
  architecture code review tool: deterministic pipelines + LLM Agent, precise
  line-lev"
categories:
  - databases
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-05-18T02:16:36Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: alibaba/open-code-review
  subpath: plugins/open-code-review/skills/open-code-review-delegate
  license: Apache-2.0
signals:
  stars: 44194
  last_commit: 2026-10-05T06:43:52Z
type: agent_skill
skill:
  skill_name: open-code-review-delegate
  description: >
    Delegation mode for open-code-review (OCR). Instead of OCR calling an LLM
    endpoint, this skill instructs the host agent to perform the code review
    itself, using OCR only for deterministic engineering: file selection and
    rule resolution. Use when the host agent should drive the review with its
    own LLM capabilities.
  folder_path: plugins/open-code-review/skills/open-code-review-delegate
  extra_files: []
---

Delegation mode for open-code-review (OCR). Instead of OCR calling an LLM endpoint, this skill instructs the host agent to perform the code review itself, using OCR only for deterministic engineering: file selection and rule resolution. Use when the host agent should drive the review with its own LLM capabilities.

