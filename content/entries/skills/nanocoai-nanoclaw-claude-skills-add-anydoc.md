---
slug: nanocoai-nanoclaw-claude-skills-add-anydoc
name: nanoclaw
tagline: "A lightweight alternative to OpenClaw that runs in containers for
  security. Connects to WhatsApp, Telegram, Slack, Discord, Gmail and other
  messaging "
categories:
  - security
  - ai-frameworks
  - productivity
status: active
quality_percentile: 100
selection_reason: quality_percentile
first_seen: 2026-01-31T15:47:22Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: nanocoai/nanoclaw
  subpath: .claude/skills/add-anydoc
  license: MIT
signals:
  stars: 30890
  last_commit: 2026-10-06T14:42:11Z
type: agent_skill
skill:
  skill_name: add-anydoc
  description: Add local office-document-to-Markdown conversion to NanoClaw agent
    containers with the pinned Firecrawl AnyDoc CLI. Use when agents need to
    read attached Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, or
    text-based PDF files without uploading them to a hosted parser.
  folder_path: .claude/skills/add-anydoc
  extra_files:
    - REMOVE.md
    - anydoc-manifest.test.ts
    - container-skills/convert-documents-to-markdown/SKILL.md
---

Add local office-document-to-Markdown conversion to NanoClaw agent containers with the pinned Firecrawl AnyDoc CLI. Use when agents need to read attached Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, or text-based PDF files without uploading them to a hosted parser.
