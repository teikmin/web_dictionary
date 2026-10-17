---
slug: agricidaniel-claude-blog-brain
name: claude-blog-brain
tagline: Scaffold and operate Claude Blog Brain, a source-cited Obsidian brain
  for blog content creation, optimization, and management dual-optimized for
  Googl
summary: "Source checkout equivalent:"
categories:
  - productivity-ops
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-blog
  subpath: brain
  official_vendor: false
  license: MIT
signals:
  stars: 2376
  last_commit: 2026-10-09T04:25:17Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-blog
  path: brain/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.670Z
  truncated: false
type: agent_skill
skill:
  skill_name: claude-blog-brain
  description: >
    Scaffold and operate Claude Blog Brain, a source-cited Obsidian brain for
    blog content creation, optimization, and management dual-optimized for
    Google rankings (E-E-A-T, the 2026 core updates) and AI citations (GEO/AEO),
    spanning writing, rewriting and freshness, SERP-informed briefs and
    outlines, editorial calendars and strategy, semantic topic clusters, schema
    and internal linking, multilingual publishing, the FLOW framework,
    factchecking, personas, distribution, and the blog delivery contract,
    grounded in the claude-blog skill. Use when the user says
    "claude-blog-brain", "Claude Blog Brain", "create a blog content creation,
    optimization, and management dual-optimized for Google rankings (E-E-A-T,
    the 2026 core updates) and AI citations (GEO/AEO), spanning writing,
    rewriting and freshness, SERP-informed briefs and outlines, editorial
    calendars and strategy, semantic topic clusters, schema and internal
    linking, multilingual publishing, the FLOW framework, factchecking,
    personas, distribution, and the blog delivery contract, grounded in the
    claude-blog skill brain", "import sources", "synthesize plan", "render
    report", or wants a persistent vault-backed operating system for blog
    content creation, optimization, and management dual-optimized for Google
    rankings (E-E-A-T, the 2026 core updates) and AI citations (GEO/AEO),
    spanning writing, rewriting and freshness, SERP-informed briefs and
    outlines, editorial calendars and strategy, semantic topic clusters, schema
    and internal linking, multilingual publishing, the FLOW framework,
    factchecking, personas, distribution, and the blog delivery contract,
    grounded in the claude-blog skill.
  folder_path: brain
  extra_files:
    - .claude-plugin/marketplace.json
    - .claude-plugin/plugin.json
    - .github/CODEOWNERS
    - .github/ISSUE_TEMPLATE/bug_report.yml
    - .github/ISSUE_TEMPLATE/config.yml
    - .github/PULL_REQUEST_TEMPLATE.md
    - .github/dependabot.yml
    - .github/workflows/ci.yml
    - .gitignore
    - .obsidian/graph.json
tags: []
---

# Claude Blog Brain
Operate the vault first. Read `CODEX.md`, `wiki/hot.md`, and `wiki/index.md`
before changing notes.

## Commands

```bash
/claude-blog-brain new <client-slug> --owner <name>
/claude-blog-brain demo
/claude-blog-brain ingest --vault <path> --file <source>
/claude-blog-brain synthesize --vault <path>
/claude-blog-brain report --vault <path>
/claude-blog-brain visuals --vault <path>
/claude-blog-brain lint --vault <path>
/claude-blog-brain next --vault <path>
```

Source checkout equivalent:

```bash
claude-blog-brain new <client-slug> --owner <name>
claude-blog-brain demo
claude-blog-brain ingest --vault <path> --file <source>
claude-blog-brain synthesize --vault <path>
claude-blog-brain report --vault <path> --html-only
```

## Required Operating Rules

1. Read `<vault>/CODEX.md`.
2. Read `<vault>/wiki/hot.md`.
3. Read `<vault>/wiki/index.md`.
4. Preserve `.raw/` as immutable source material.
5. Never store credentials in the vault.
6. Never make domain-specific claims without dated trustworthy sources.
7. Keep `hot`, `index`, `overview`, and `log` current.
8. Record research evidence in `references/source-ledger.json`.
9. Record domain adapter completion in `references/adapter-manifest.json`.

## Script Mapping

- `new` -> `python scripts/scaffold_vault.py`
- `demo` -> `python scripts/build_demo_vault.py`
- `ingest` -> `python scripts/ingest_source.py`
- `synthesize` -> `python scripts/synthesize_brain.py`
- `report` -> `python scripts/render_brain_report.py`
- `visuals` -> `python scripts/generate_vault_visuals.py`
- `lint` -> `python scripts/lint_vault.py`
- `next` -> `python scripts/guide_next_action.py`

## Quality Gates

- No ranking or traffic guarantee; content outcomes are probabilistic and never certain
- No credentials, tokens, API keys, or private client content in repo artifacts
- No mutation of a CMS, GSC, GA4, or publishing platform; the brain is advisory and read-only
- No recommendation without a dated source, confidence level, and rollback note
- No deprecated advice (HowTo schema, retired FAQ rich results, FID) presented as current
- No fabricated or unsourced statistics and no generic, unsupported, or low-quality generated filler presented as fact

Do not call this brain market-ready unless `scripts/audit_brain.py --require
market-ready` passes. A scaffold is not a finished brain.

## Research Refresh

monthly for Google algorithm updates and Search Central policy; before every release for E-E-A-T framing, schema deprecations, and GEO/AEO citation claims; on-changelog for the claude-blog skill

## Community

Use public project Discussions for questions and support:
https://github.com/AgriciDaniel/claude-blog/discussions.
Report reproducible defects through public Issues:
https://github.com/AgriciDaniel/claude-blog/issues.
