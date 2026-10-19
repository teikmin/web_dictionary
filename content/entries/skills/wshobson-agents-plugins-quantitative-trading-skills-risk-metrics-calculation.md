---
slug: wshobson-agents-plugins-quantitative-trading-skills-risk-metrics-calculation
name: risk-metrics-calculation
tagline: Calculate portfolio risk metrics including VaR, CVaR, Sharpe, Sortino,
  and drawdown analysis. Use when measuring portfolio risk, implementing risk
  lim
summary: "- Measuring portfolio risk - Implementing risk limits - Building risk
  dashboards - Calculating risk-adjusted returns - Setting position sizes -
  Regulatory reporting"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/quantitative-trading/skills/risk-metrics-calculation
  official_vendor: false
  license: MIT
signals:
  stars: 41052
  last_commit: 2026-10-19T01:07:28Z
  stars_delta_7d: 462
  stars_growth_pct: 1.1
  trending_score: 467.26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/quantitative-trading/skills/risk-metrics-calculation/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:40.658Z
  truncated: false
type: agent_skill
skill:
  skill_name: risk-metrics-calculation
  description: Calculate portfolio risk metrics including VaR, CVaR, Sharpe,
    Sortino, and drawdown analysis. Use when measuring portfolio risk,
    implementing risk limits, or building risk monitoring systems.
  folder_path: plugins/quantitative-trading/skills/risk-metrics-calculation
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Risk Metrics Calculation
Comprehensive risk measurement toolkit for portfolio management, including Value at Risk, Expected Shortfall, and drawdown analysis.

## When to Use This Skill

- Measuring portfolio risk
- Implementing risk limits
- Building risk dashboards
- Calculating risk-adjusted returns
- Setting position sizes
- Regulatory reporting

## Core Concepts

### 1. Risk Metric Categories

| Category          | Metrics         | Use Case             |
| ----------------- | --------------- | -------------------- |
| **Volatility**    | Std Dev, Beta   | General risk         |
| **Tail Risk**     | VaR, CVaR       | Extreme losses       |
| **Drawdown**      | Max DD, Calmar  | Capital preservation |
| **Risk-Adjusted** | Sharpe, Sortino | Performance          |

### 2. Time Horizons

```
Intraday:   Minute/hourly VaR for day traders
Daily:      Standard risk reporting
Weekly:     Rebalancing decisions
Monthly:    Performance attribution
Annual:     Strategic allocation
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

### Do's

- **Use multiple metrics** - No single metric captures all risk
- **Consider tail risk** - VaR isn't enough, use CVaR
- **Rolling analysis** - Risk changes over time
- **Stress test** - Historical and hypothetical
- **Document assumptions** - Distribution, lookback, etc.

### Don'ts

- **Don't rely on VaR alone** - Underestimates tail risk
- **Don't assume normality** - Returns are fat-tailed
- **Don't ignore correlation** - Increases in stress
- **Don't use short lookbacks** - Miss regime changes
- **Don't forget transaction costs** - Affects realized risk
