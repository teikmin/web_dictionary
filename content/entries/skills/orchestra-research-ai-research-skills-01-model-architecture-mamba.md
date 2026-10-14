---
slug: orchestra-research-ai-research-skills-01-model-architecture-mamba
name: mamba-architecture
tagline: State-space model with O(n) complexity vs Transformers' O(n²). 5×
  faster inference, million-token sequences, no KV cache. Selective SSM with
  hardware-
categories:
  - ai-frameworks
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: Orchestra-Research/AI-Research-SKILLs
  subpath: 01-model-architecture/mamba
  official_vendor: false
  license: MIT
signals:
  stars: 13529
  last_commit: 2026-10-11T02:56:34Z
type: agent_skill
skill:
  skill_name: mamba-architecture
  description: State-space model with O(n) complexity vs Transformers' O(n²). 5×
    faster inference, million-token sequences, no KV cache. Selective SSM with
    hardware-aware design. Mamba-1 (d_state=16) and Mamba-2 (d_state=128,
    multi-head). Models 130M-2.8B on HuggingFace.
  folder_path: 01-model-architecture/mamba
  extra_files:
    - references/architecture-details.md
    - references/benchmarks.md
    - references/training-guide.md
---

State-space model with O(n) complexity vs Transformers' O(n²). 5× faster inference, million-token sequences, no KV cache. Selective SSM with hardware-aware design. Mamba-1 (d_state=16) and Mamba-2 (d_state=128, multi-head). Models 130M-2.8B on HuggingFace.
