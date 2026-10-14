---
slug: eigent-ai-eigent-resources-example-skills-docx
name: docx
tagline: 'Use this skill whenever the user wants to create, read, edit, or
  manipulate Word documents (.docx files). Triggers include: any mention of
  "Word doc",'
categories:
  - productivity
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2025-07-29T15:56:02
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: eigent-ai/eigent
  subpath: resources/example-skills/docx
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 15514
  last_commit: 2026-10-13T12:26:39Z
type: agent_skill
skill:
  skill_name: docx
  description: 'Use this skill whenever the user wants to create, read, edit, or
    manipulate Word documents (.docx files). Triggers include: any mention of
    "Word doc", "word document", ".docx", or requests to produce professional
    documents with formatting like tables of contents, headings, page numbers,
    or letterheads. Also use when extracting or reorganizing content from .docx
    files, inserting or replacing images in documents, performing
    find-and-replace in Word files, working with tracked changes or comments, or
    converting content into a polished Word document. If the user asks for a
    "report", "memo", "letter", "template", or similar deliverable as a Word or
    .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs,
    or general coding tasks unrelated to document generation.'
  folder_path: resources/example-skills/docx
  extra_files:
    - LICENSE.txt
    - scripts/__init__.py
    - scripts/accept_changes.py
    - scripts/comment.py
    - scripts/office/helpers/__init__.py
    - scripts/office/helpers/merge_runs.py
    - scripts/office/helpers/simplify_redlines.py
    - scripts/office/pack.py
    - scripts/office/schemas/ISO-IEC29500-4_2016/dml-chart.xsd
    - scripts/office/schemas/ISO-IEC29500-4_2016/dml-chartDrawing.xsd
---

Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of "Word doc", "word document", ".docx", or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a "report", "memo", "letter", "template", or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.
