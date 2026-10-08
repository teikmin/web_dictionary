---
slug: zipstack-unstract-claude-skills-adapter-ops
name: unstract
tagline: LLM-Driven Extraction of Unstructured Data — Built for API Deployments
  & ETL Pipeline Workflows
categories:
  - ai-frameworks
  - productivity
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2024-02-21T10:34:33Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: Zipstack/unstract
  subpath: .claude/skills/adapter-ops
  license: AGPL-3.0
signals:
  stars: 7275
  last_commit: 2026-10-07T15:48:19Z
type: agent_skill
skill:
  skill_name: adapter-ops
  description: Extend LLM and embedding adapters in unstract/sdk1. Use when adding
    new adapters (LLM or embedding), removing adapters, adding/removing models
    to existing adapters, or editing adapter configurations. Supports
    OpenAI-compatible providers, cloud providers (AWS Bedrock, VertexAI, Azure),
    and self-hosted models (Ollama).
  folder_path: .claude/skills/adapter-ops
  extra_files:
    - assets/templates/embedding_adapter.py.template
    - assets/templates/embedding_parameters.py.template
    - assets/templates/embedding_schema.json.template
    - assets/templates/llm_adapter.py.template
    - assets/templates/llm_parameters.py.template
    - assets/templates/llm_schema.json.template
    - references/adapter_patterns.md
    - references/json_schema_guide.md
    - references/provider_capabilities.md
    - scripts/check_adapter_updates.py
---

Extend LLM and embedding adapters in unstract/sdk1. Use when adding new adapters (LLM or embedding), removing adapters, adding/removing models to existing adapters, or editing adapter configurations. Supports OpenAI-compatible providers, cloud providers (AWS Bedrock, VertexAI, Azure), and self-hosted models (Ollama).
