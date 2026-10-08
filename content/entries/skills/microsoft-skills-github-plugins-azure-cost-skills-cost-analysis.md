---
slug: microsoft-skills-github-plugins-azure-cost-skills-cost-analysis
name: skills
tagline: Skills, MCP servers, Custom Agents, Agents.md for SDKs to ground Coding Agents
categories:
  - ai-frameworks
status: active
quality_percentile: 94
selection_reason: official_vendor
first_seen: 2026-01-16T18:34:20Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: microsoft/skills
  subpath: .github/plugins/azure-cost/skills/cost-analysis
  license: MIT
signals:
  stars: 3089
  last_commit: 2026-10-06T16:44:34Z
type: agent_skill
skill:
  skill_name: cost-analysis
  description: 'Analyze actual Azure spend, bill changes, and AKS or AI costs.
    WHEN: "Azure cost breakdown", "most expensive resources", "why did my bill
    increase", "cost spike", "unexpected charge", "Cosmos DB charges", "Foundry
    model costs", "AKS cluster cost", "namespace cost", "enable AKS cost
    analysis", "idle AKS capacity". DO NOT USE FOR: forecasts, pricing
    estimates, rightsizing, commitments, or budgets.'
  folder_path: .github/plugins/azure-cost/skills/cost-analysis
  extra_files:
    - references/ai-cost-analysis.md
    - references/aks-anomaly.md
    - references/aks-cost-analysis.md
    - references/aks-enablement.md
    - references/cost-investigation.md
    - references/cost-query/dimensions-by-scope.md
    - references/cost-query/error-handling.md
    - references/cost-query/examples.md
    - references/cost-query/guardrails.md
    - references/cost-query/request-body-schema.md
---

Analyze actual Azure spend, bill changes, and AKS or AI costs. WHEN: "Azure cost breakdown", "most expensive resources", "why did my bill increase", "cost spike", "unexpected charge", "Cosmos DB charges", "Foundry model costs", "AKS cluster cost", "namespace cost", "enable AKS cost analysis", "idle AKS capacity". DO NOT USE FOR: forecasts, pricing estimates, rightsizing, commitments, or budgets.
