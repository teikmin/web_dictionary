# 04. Future Roadmap & Deferred Features

> **Status:** Active (Parking Lot & Deferred Scope).  
> **Reference Architecture:** [01_ARCHITECTURE.md](file:///c:/teikmin/exploring/web_database/docs/01_ARCHITECTURE.md).

---

## 1. Scope Discipline: The v1 Non-Goals

To maintain a lean, zero-maintenance system, the following features are intentionally **deferred or excluded from v1**:

| Deferred Feature | Reason for Deferral | Revisit Trigger |
|---|---|---|
| **Programmatic Agent API** | Build and validate the web directory and dataset first before maintaining public endpoints | $\ge 500$ verified tools and proven developer demand |
| **Tool Comparison Matrix** (`/compare/a-vs-b`) | High initial effort with risk of generating thin/shallow content | $\ge 20$ high-density tool pairs with verified benchmarks |
| **LLM-Summarized Changelogs** | Avoids recurring LLM API inference costs and maintenance complexity | Real demand for news digest; can start with raw Git diffs first |
| **Monetization & Ads** | Project prioritizes personal utility, developer trust, and clean UI | $\ge 10,000$ monthly visits and organic inbound sponsor requests |
| **User Accounts / Cloud Bookmarks** | Eliminates database authentication and user privacy compliance (GDPR/CCPA) | Strong user demand (browser `localStorage` covers bookmarks initially) |

---

## 2. Potential Future Horizons (Ideas Parking Lot)

1. **Meta-MCP Server:** An official MCP server exposing the directory directly to AI agents (allowing Claude, Codex, or Antigravity to discover and install new tools on the fly).
2. **Local Bookmarking via Browser Extension:** A lightweight Chrome/Edge extension that detects when a user is browsing a GitHub MCP repository and checks if a verified launch config is available on the hub.
3. **Automated Health Monitoring / Dynamic Ping:** Running periodic health probes or headless Docker tests to verify that MCP servers actually launch and respond via standard JSON-RPC.
