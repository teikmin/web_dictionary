# AI Tools Hub (MCP & Agent Skills Registry)

A high-signal, zero-database catalog of Model Context Protocol (MCP) servers and Agent Skills with 1-click launch configurations for **Claude Code**, **Codex**, and **Antigravity**.

---

## 📖 Architecture & Documentation

All architectural decisions, criteria, and roadmap details live in [`docs/`](docs/):

1. **[01. Project Architecture (v2)](docs/01_ARCHITECTURE.md)**: Target architecture, Git source of truth, pipeline workflow, data model, and phased roadmap.
2. **[02. Repo Quality Criteria](docs/02_REPO_QUALITY_CRITERIA.md)**: 3-layer automated selection engine, hard gates ($\ge 100$ stars), file evidence verification, scoring formula, and fake-star heuristics.
3. **[03. Growth, SEO & Positioning](docs/03_GROWTH_AND_SEO.md)**: Programmatic SEO matrix, 1-click config copy hook, README badges, and launch timeline.
4. **[04. Future Roadmap & Non-Goals](docs/04_FUTURE_ROADMAP.md)**: Scope discipline, deferred features (API, comparison matrix, monetization), and ideas parking lot.
5. **[05. Folder Structure & Workspace Layout](docs/05_FOLDER_STRUCTURE.md)**: Detailed file-level repository structure, folder ownership (pipeline vs. human), shared schema/renderers, and data flow.
6. **[00. Independent Project Evaluation](docs/00_PROJECT_EVALUATION.md)**: Historical review and analysis.

---

## 🚀 Tech Stack

- **Pipeline:** TypeScript (scheduled weekly via GitHub Actions)
- **Source of Truth:** Git (`content/entries/*`, `data/signals/*`)
- **Site:** Astro (Static Site Generation) + Tailwind CSS
- **Search:** Pagefind (fast, client-side static indexing)
- **Hosting:** Cloudflare Pages / Vercel