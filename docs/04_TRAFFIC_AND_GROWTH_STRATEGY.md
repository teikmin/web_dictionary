# Discovery & SEO Strategy

**Primary Goal:** This site is primarily a personal knowledge-building project—a reference hub to organize the rapidly evolving AI tools ecosystem for my own use (Teik Min). I am sharing it publicly because other developers and builders will likely find it just as useful.

The core narrative is simple and authentic: *"I built this for myself to organize the AI tools ecosystem. I'm sharing it because others might find it useful too."*

The focus is on making the site discoverable and highly useful, not on monetization or aggressive growth hacking.

## 1. Technical SEO & Programmatic Pages (pSEO)

Using Astro, we can generate a robust matrix of static pages directly from our database. This programmatic SEO (pSEO) approach ensures that every resource and category is highly discoverable by search engines.

### URL Structure & Page Matrix

*   **`/category/[slug]`**: Category pages aggregating tools by their function (e.g., `/category/code-analysis`, `/category/database-tools`).
*   **`/type/[type]`**: Aggregation by resource type. The catalog includes various resource formats:
    *   `/type/mcp-servers`
    *   `/type/agent-skills`
    *   `/type/prompts`
    *   `/type/github-repos`
    *   `/type/tool-configs`
*   **`/resource/[slug]`**: The individual resource detail page (e.g., `/resource/postgres-mcp-server`).
*   **`/client/[slug]`**: Client-specific compatibility pages detailing how to use resources with specific tools (e.g., `/client/cursor`, `/client/claude-desktop`).

*(Note: Comparison pages have been deferred to focus on core functionality and higher certainty features.)*

### SEO Best Practices
*   **Astro SSG:** All programmatic pages will be statically generated at build time using Astro for maximum performance and indexability.
*   **Meta Tags:** Dynamically generated titles and descriptions based on resource data.
*   **Structured Data:** Implementation of JSON-LD schema (SoftwareApplication, WebSite) for rich search results.

## 2. Core UX as a Discovery Engine

*   **1-Click Copy Config:** The killer feature of the site. Allowing users to instantly copy complex tool configurations (like Claude Desktop JSON configs) reduces friction to zero. Developers are more likely to share and bookmark a tool that saves them 10 minutes of configuration troubleshooting.
*   **Fast & Clean:** A fast, bloat-free Astro site that respects the user's time.

## 3. Virality Loops & Community Seeding

### The GitHub README Badge
For open-source resources listed on the site (like MCP servers or agent skills), we will create a markdown badge that maintainers can easily add to their GitHub READMEs (e.g., "Available on [Site Name]" or "Get the Config"). This creates a natural, value-add backlink strategy.

### Community Seeding
*   **Reddit Engagement:** Participating genuinely in subreddits like `r/ClaudeAI`, `r/cursor`, and `r/LocalLLaMA`. Sharing specific resource pages or config templates when answering questions.
*   **GitHub Outreach:** Politely opening issues or PRs on relevant repositories to share the directory listing and offer the README badge.

## 4. Launch Timeline

The launch strategy emphasizes a steady build-up rather than a rushed launch. 

*   **Week 1-3 (Quiet Build):** Focus on building the core Astro site and populating the database with the first 100+ high-quality resources. No public promotion.
*   **Week 4-5 (Soft Launch):** Begin sharing the site organically in targeted communities like Reddit (r/ClaudeAI, r/cursor, r/LocalLLaMA) and relevant Discord servers. Gather feedback and refine the UX.
*   **Week 6-8 (Show HN):** Once the site is highly polished, battle-tested by the soft launch, and features a robust catalog of 200+ resources, post it to Hacker News. The framing will remain the authentic builder narrative: *"Show HN: I built a directory to track MCP servers and AI skills for myself, and thought others might find it useful."*
