# 01. Project Overview

## Executive Summary
**Project Name (Working Title):** AI Tools Hub / MCP & Agent Registry

The AI Tools Hub is conceived primarily as a personal-first knowledge repository and utility—the founder's go-to place to discover, search, and reference AI tools across the rapidly evolving ecosystem. While it serves as a central hub for personal productivity and learning, it is designed with a secondary goal: to act as a public resource where other developers can easily discover high-quality tools. 

This project prioritizes utility and knowledge-building over monetization or profitability. It focuses on cataloging a wide spectrum of the AI development workflow, ensuring developers have rapid access to the tools, prompts, and configurations they need to build effectively.

## The Opportunity
The AI tooling ecosystem is expanding exponentially. Developers are constantly adopting new Model Context Protocol (MCP) servers, agent skills, framework configurations, and prompt strategies. Tracking these across various platforms, repositories, and documentation sites is fragmented and time-consuming.

This platform solves that fragmentation by providing a unified, searchable registry for the following critical resources:
1. **MCP Servers:** Model Context Protocol servers for Claude Desktop, Cursor, Windsurf.
2. **AI Agent Skills & Plugins:** Capabilities and plugins for frameworks like Antigravity, Claude Code, etc.
3. **Useful GitHub Repos:** AI/ML tools, developer utilities, and agent frameworks.
4. **Prompts & Prompt Templates:** System prompts, agent prompts, and coding prompts.
5. **AI Coding Tool Configs:** IDE settings, Cursor rules, and Claude Code configurations.

By providing features like 1-click config snippet copying and automated repository health scoring (0-100), the hub dramatically reduces friction for tool adoption.

## High-Level System Architecture

The architecture is designed to be low-maintenance (1-3 hours/week after initial build), fast, and entirely serverless. It relies on a static site generation approach to deliver a highly performant and clean user experience.

```text
+-------------------------------------------------------------------+
|                     Data Ingestion Layer (Python)                 |
| - Scheduled via GitHub Actions Cron                               |
| - Queries GitHub API across multiple topics (MCP, Agents, etc.)   |
| - Calculates repo health scores & formats configuration snippets  |
+--------------------------------+----------------------------------+
                                 |
                                 v
+-------------------------------------------------------------------+
|                        Database Layer                             |
| - PostgreSQL hosted on Supabase                                   |
| - Stores: Tools, Resources, Categories, Tags, Health Scores       |
+--------------------------------+----------------------------------+
                                 |
                                 v
+-------------------------------------------------------------------+
|                     Frontend Application                          |
| - Framework: Astro (Static Site Generation + Interactive Islands) |
| - Hosting: Vercel or Cloudflare Pages                             |
| - Features: Programmatic pages, Search, 1-Click Config Copy       |
+-------------------------------------------------------------------+
```

## Technology Stack

* **Frontend:** **Astro** — Leveraging static site generation (SSG) for maximum performance with "islands of interactivity" for dynamic features like search and filtering.
* **Database:** **PostgreSQL on Supabase** — Relational storage for all ingested resources, metadata, and taxonomy.
* **Styling:** **Tailwind CSS** — Utility-first CSS, utilizing raw Tailwind for Astro components (maintaining clean, shadcn-like design aesthetics).
* **Ingestion:** **Python 3.11+** — Automated via GitHub Actions cron jobs to fetch, parse, and score incoming repositories and resources.
* **Analytics:** **Plausible or Umami** — Privacy-respecting, lightweight analytics.

*(Note: Features such as a Micro-API and an LLM-summarized news feed have been explicitly deferred or removed to prevent scope creep and align with the low-maintenance, personal-first philosophy.)*
