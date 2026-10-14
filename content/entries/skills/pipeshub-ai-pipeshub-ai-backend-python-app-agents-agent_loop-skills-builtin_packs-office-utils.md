---
slug: pipeshub-ai-pipeshub-ai-backend-python-app-agents-agent_loop-skills-builtin_packs-office-utils
name: office-utils
tagline: Low-level support skill for hand-editing the raw XML inside a .docx or
  .pptx file (both formats are just ZIP archives of XML parts). Use this
  directly
categories:
  - databases
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: pipeshub-ai/pipeshub-ai
  subpath: backend/python/app/agents/agent_loop/skills/builtin_packs/office-utils
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3830
  last_commit: 2026-10-13T16:25:21Z
type: agent_skill
skill:
  skill_name: office-utils
  description: Low-level support skill for hand-editing the raw XML inside a .docx
    or .pptx file (both formats are just ZIP archives of XML parts). Use this
    directly only when you need to unpack, inspect, or repack Open XML yourself
    — for example fixing a validation error in generated markup, or making one
    small targeted edit without regenerating a whole document from scratch. The
    docx and pptx skills already use this internally for their 'edit an existing
    file' workflow, so you rarely need to load this on its own.
  folder_path: backend/python/app/agents/agent_loop/skills/builtin_packs/office-utils
  extra_files:
    - scripts/pack.py
    - scripts/unpack.py
---

Low-level support skill for hand-editing the raw XML inside a .docx or .pptx file (both formats are just ZIP archives of XML parts). Use this directly only when you need to unpack, inspect, or repack Open XML yourself — for example fixing a validation error in generated markup, or making one small targeted edit without regenerating a whole document from scratch. The docx and pptx skills already use this internally for their 'edit an existing file' workflow, so you rarely need to load this on its own.
