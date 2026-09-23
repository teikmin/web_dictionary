# Future Roadmap & Deferred Features

## 1. Deferred: Micro-API for Agent Discovery
- **Description**: A machine-readable API allowing agents to query the tool registry at runtime to discover capabilities.
- **Why deferred**: Need to build the web portal first, validate that the data is valuable, and establish traction before providing API access.
- **Prerequisites before building**: 
  - 500+ verified resources
  - Measurable web traffic
  - Evidence of developer demand for programmatic access
- **Future Design Reference**:
  - `GET /v1/tools/search`
  - `GET /v1/tools/{slug}/schema`

## 2. Deferred: Comparison Pages
- **Description**: Pages comparing different tools side-by-side (`/compare/[tool-a]-vs-[tool-b]`).
- **Why deferred**: High effort to build, risk of creating thin content pages, and requires manual quality benchmarks first.
- **Prerequisites before building**: 20+ manually benchmarked popular tools.

## 3. Deferred: News Feed / Release Tracking
- **Description**: LLM-summarized release notes and updates for tools.
- **Why deferred**: Scope creep, not part of the core value proposition currently, and adds recurring LLM inference costs.

## 4. Deferred: Monetization
- **Description**: Featured placements, expedited verification, sponsor banners, and paid API tiers.
- **Why deferred**: Primary goal right now is building a personal knowledge hub and community utility. Monetization only makes sense after achieving significant organic traction.
- **Revisit criteria**:
  - 10,000+ monthly visitors
  - 500+ resources
  - Inbound sponsor interest

## 5. Potential Future Features (Ideas Parking Lot)
- User accounts & personal tool collections/bookmarks.
- Community-submitted resources with an approval workflow.
- Integration with Claude Desktop / Cursor as an MCP server itself (meta!).
- Browser extension for one-click save from GitHub to the hub.
