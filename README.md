# AI Tools Hub — MCP & Agent Skills Registry

[![CI](https://github.com/teikmin/web_dictionary/actions/workflows/ci.yml/badge.svg)](https://github.com/teikmin/web_dictionary/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Data: CC BY 4.0](https://img.shields.io/badge/Data-CC%20BY%204.0-lightgrey.svg)](LICENSE-DATA)

A high-signal, zero-database catalog of Model Context Protocol (MCP) servers and Agent Skills with **1-click launch configurations** tailored for **Claude Code**, **OpenAI Codex**, and **Google Antigravity**.

---

## 🌟 Key Highlights

- **Git-Backed Source of Truth:** No runtime database (Supabase is retired). The catalog lives in clean Markdown with YAML frontmatter under `content/entries/` and weekly signal snapshots in `data/signals/`.
- **Automated 3-Layer Selection Engine:**
  - **Layer 1 (Hard Gates G1–G9):** $\ge 100$ stars, non-fork, non-archived, recently pushed ($< 180$d), OSI license, spam protection.
  - **Layer 2 (Type Check):** Physical verification via recursive Git trees (`@modelcontextprotocol/sdk`, Python `mcp`, or `SKILL.md`).
  - **Layer 3 (Quality Scoring):** Composite score weighting stars, velocity, commit recency, contributor breadth, with anti-fake-star defense.
- **1-Click Launch Configs:** Pre-formatted configs for Claude Code (`claude mcp add` / `.mcp.json`), OpenAI Codex (`.codex/config.json`), and Google Antigravity (`.gemini/mcp_servers.json`).
- **Blazing Fast Static Site:** Built with **Astro 5** and **Tailwind CSS**. Prerenders hundreds of static pages in seconds.
- **Static Search via Pagefind:** Zero external search APIs or indexing bills. Instant client-side search across all tools, descriptions, and commands.

---

## 📁 Repository Structure

```text
.
├── apps/
│   ├── pipeline/            # Discovery, scoring, enrichment & catalog writer
│   └── site/                # Astro 5 static site + Pagefind search UI
├── packages/
│   ├── schema/              # Shared Zod schemas (Entry, LaunchSpec, SkillSpec, Client, Category)
│   └── renderers/           # Multi-client config adapters (Claude Code, Codex, Antigravity)
├── content/
│   ├── clients/             # Supported AI agent client definitions (*.yaml)
│   ├── categories/          # Catalog vertical taxonomy (*.yaml)
│   └── entries/
│       ├── mcp/             # MCP servers (*.md)
│       └── skills/          # Agent skills (*.md)
├── data/
│   ├── runs/                # Weekly audit reports & decision logs
│   ├── signals/             # Weekly signal snapshot time series (*.json)
│   └── overrides/           # Manual curation overrides (blocklist, pins, vendors)
├── docs/                    # Architecture documents & quality criteria
└── .github/workflows/       # CI verification, weekly cron pipeline & deployment
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** `v22` or `v24` (see [`.nvmrc`](.nvmrc))
- **pnpm** `v12.9.1` or newer

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/teikmin/web_dictionary.git
cd web_dictionary

# 2. Install workspace dependencies
pnpm install

# 3. (Optional) Set up GitHub Token for pipeline runs
cp .env.example .env
# Edit .env and insert your GITHUB_TOKEN (read:public_repo)
```

### Development & Build Commands

| Command | Description |
|---|---|
| `pnpm run site:dev` | Start local Astro development server with hot reload |
| `pnpm run site:build` | Build production static site into `dist/` and generate Pagefind search index |
| `pnpm run pipeline:report` | Run pipeline dry-run and generate audit report in `data/runs/<week>/report.md` |
| `pnpm run pipeline:run` | Run production pipeline and update `content/entries/` and `data/signals/` |
| `pnpm test` | Run Vitest snapshot and unit tests in `packages/renderers` |
| `pnpm run typecheck` | Typecheck all workspace packages (`schema`, `renderers`, `pipeline`, `site`) |

---

## 🤖 Supported Agent Clients
 
| Client | Launch Command / Snippet | Default Config Path | Skills Path |
|---|---|---|---|
| **Claude Code** | `claude mcp add <name> -- <cmd>` or `.mcp.json` | `.mcp.json` (workspace) / `~/.claude.json` (global) | `.claude/skills/<name>/SKILL.md` |
| **OpenAI Codex** | `.codex/config.json` | `.codex/config.json` (workspace) / `~/.codex/config.json` (global) | `.codex/skills/<name>/SKILL.md` |
| **Google Antigravity** | `.gemini/mcp_servers.json` | `.gemini/mcp_servers.json` (workspace) / `~/.gemini/antigravity/mcp_servers.json` (global) | `~/.gemini/config/skills/<name>/SKILL.md` |

---

## 🔄 CI / CD Automation

- **`ci.yml`:** Runs on every pull request and push to `main`: verifies typechecking, executes Vitest tests, and confirms static site generation.
- **`pipeline.yml`:** Runs weekly at 02:00 UTC every Monday: automatically discovers new tools, applies gates and scoring, enriches launch configs, and commits updates to `content/` and `data/`.
- **`deploy.yml`:** Builds the static site and deploys `apps/site/dist/` to GitHub Pages / Cloudflare Pages.

---

## 📚 Documentation Index

All architectural guidelines and reference specs are available in [`docs/`](docs/):

- [`01_ARCHITECTURE.md`](docs/01_ARCHITECTURE.md): Architecture overview, client adapters, and system topology.
- [`02_REPO_QUALITY_CRITERIA.md`](docs/02_REPO_QUALITY_CRITERIA.md): Hard gates (G1–G9), type check, scoring formulas, and anti-fake star heuristics.
- [`03_GROWTH_AND_SEO.md`](docs/03_GROWTH_AND_SEO.md): Programmatic SEO, 1-click config hooks, and growth timeline.
- [`04_FUTURE_ROADMAP.md`](docs/04_FUTURE_ROADMAP.md): Deferred scope, non-goals, and future ideas parking lot.
- [`05_FOLDER_STRUCTURE.md`](docs/05_FOLDER_STRUCTURE.md): Detailed workspace structure, content schemas, and folder ownership rules.
- [`06_CATALOG_RELIABILITY_FIX_PLAN.md`](docs/06_CATALOG_RELIABILITY_FIX_PLAN.md): Completed root-cause fix plan for type detection, genuine skills extraction, and honest confidence labels.
- [`06_FRONTEND_UX_REVIEW.md`](docs/06_FRONTEND_UX_REVIEW.md): Completed frontend redesign direction and execution plan (Phases A–E).
- [`07_CHECKPOINT_STATUS.md`](docs/07_CHECKPOINT_STATUS.md): Current system state, monorepo metrics, verified client paths, and production catalog health report.

---

## 📜 Licenses

- **Code:** [MIT License](LICENSE)
- **Catalog Metadata & Signals:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-DATA)