---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-local
name: cost-local
tagline: Cost per million tokens on hardware you own (Ollama, llama.cpp, vLLM,
  LM Studio) from watts, electricity price, hardware price and measured
  tokens/sec
summary: "Inputs (all the user's): --watts-idle, --watts-active, --kwh,
  --hw-price, --life-years, --resale. --tok-per-s is required and must be a
  measured generation speed."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-cost-tracker/skills/cost-local
  official_vendor: false
  license: MIT
signals:
  stars: 76729
  last_commit: 2026-10-19T06:30:38Z
  stars_delta_7d: 2217
  stars_growth_pct: 3
  trending_score: 2282.96
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-cost-tracker/skills/cost-local/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.774Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-local
  description: Cost per million tokens on hardware you own (Ollama, llama.cpp,
    vLLM, LM Studio) from watts, electricity price, hardware price and measured
    tokens/second, and the utilisation at which local beats a hosted model. Use
    for local-vs-API break-even questions.
  folder_path: plugins/ruflo-cost-tracker/skills/cost-local
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cost Local
```bash
node ${CLAUDE_PLUGIN_ROOT}/scripts/local-cost.mjs --tok-per-s 80 --busy 0.25 --compare claude-haiku-4-5
```

Inputs (all the user's): `--watts-idle`, `--watts-active`, `--kwh`, `--hw-price`, `--life-years`, `--resale`. `--tok-per-s` is required and must be a **measured** generation speed.

## Rules

- Cost = **fixed** (amortisation + idle power, paid busy or not) + **marginal** (extra watts while generating). Utilisation decides the answer: always show the table at 5/25/50/100% busy.
- It is an estimate from the inputs; say so. Nothing is measured.
- Compare against a same-capability hosted model, not a frontier one; price alone is a poor reason to buy a GPU for sporadic use.
- Read real counts from the server (Ollama `eval_count`/`prompt_eval_count` on the native API, llama.cpp `timings`, vLLM `/metrics`), not the lossy OpenAI-compatible `usage`, and count model reloads (`load_duration`) as overhead.
