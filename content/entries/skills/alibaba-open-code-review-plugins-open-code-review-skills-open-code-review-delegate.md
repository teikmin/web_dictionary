---
slug: alibaba-open-code-review-plugins-open-code-review-skills-open-code-review-delegate
name: open-code-review-delegate
tagline: Delegation mode for open-code-review (OCR). Instead of OCR calling an
  LLM endpoint, this skill instructs the host agent to perform the code review
  its
categories:
  - databases
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-05-18T02:16:36
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: alibaba/open-code-review
  subpath: plugins/open-code-review/skills/open-code-review-delegate
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 46827
  last_commit: 2026-10-13T13:47:09Z
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

