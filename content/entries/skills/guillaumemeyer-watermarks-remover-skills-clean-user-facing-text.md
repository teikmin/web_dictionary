---
slug: guillaumemeyer-watermarks-remover-skills-clean-user-facing-text
name: watermarks-remover
tagline: A privacy-first app that strips AI watermarks from content you own.
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 90
selection_reason: quality_percentile
first_seen: 2026-08-11T16:32:38Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: guillaumemeyer/watermarks-remover
  subpath: skills/clean-user-facing-text
  license: MIT
signals:
  stars: 23518
  last_commit: 2026-10-05T20:25:57Z
type: agent_skill
skill:
  skill_name: clean-user-facing-text
  description: Clean and finalize authorized natural-language text intended for
    readers by auditing suspicious invisible Unicode and rewriting prose while
    preserving facts, meaning, and the writer's voice. Use when the user asks to
    clean, humanize, polish, or finalize articles, manuscripts, reports,
    documentation, emails, product copy, UI text, Markdown, or HTML prose, or
    when a project rule or instruction file explicitly requires this workflow.
    Don't use for code-only tasks or undisclosed authorship evasion; leave code,
    commands, identifiers, paths, APIs, formulas, citations, required
    disclosures, and verbatim quotations unchanged.
  folder_path: skills/clean-user-facing-text
  extra_files:
    - references/detectors.md
    - references/responsible-use.md
    - references/watermark-notes.md
    - references/writing-in-your-voice.md
    - scripts/clean_text.py
    - scripts/common.py
    - scripts/inspect_text.py
    - scripts/score_stylometry.py
    - scripts/text_unicode.py
---

Clean and finalize authorized natural-language text intended for readers by auditing suspicious invisible Unicode and rewriting prose while preserving facts, meaning, and the writer's voice. Use when the user asks to clean, humanize, polish, or finalize articles, manuscripts, reports, documentation, emails, product copy, UI text, Markdown, or HTML prose, or when a project rule or instruction file explicitly requires this workflow. Don't use for code-only tasks or undisclosed authorship evasion; leave code, commands, identifiers, paths, APIs, formulas, citations, required disclosures, and verbatim quotations unchanged.
