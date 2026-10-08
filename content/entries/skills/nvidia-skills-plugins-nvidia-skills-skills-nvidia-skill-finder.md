---
slug: nvidia-skills-plugins-nvidia-skills-skills-nvidia-skill-finder
name: skills
tagline: Agent Skills for NVIDIA products — install into Claude Code, Codex, and
  other coding agents to run Physical AI, robotics, simulation, CUDA, and RAG wo
categories:
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-02-25T21:54:05Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: NVIDIA/skills
  subpath: plugins/nvidia-skills/skills/nvidia-skill-finder
  license: Apache-2.0
signals:
  stars: 3536
  last_commit: 2026-10-07T15:54:02Z
type: agent_skill
skill:
  skill_name: nvidia-skill-finder
  description: Use for NVIDIA-related requests where an NVIDIA skill might help,
    even if the user did not ask for a skill. Trigger on NVIDIA products,
    hardware, software, SDKs, GPUs, Jetson/JetPack/L4T/BSP/SDK
    Manager/driver/flashing/setup, CUDA, NIM, NeMo, Omniverse/OpenUSD/SimReady,
    Isaac, RAPIDS/cuDF, cuPyNumeric, cuOpt, Dynamo, Holoscan, TensorRT,
    DeepStream, VSS, TAO, NGC/NVCF. Do not use for generic non-NVIDIA route,
    optimize, deploy, AI, video, data, or infrastructure tasks.
  folder_path: plugins/nvidia-skills/skills/nvidia-skill-finder
  extra_files:
    - BENCHMARK.md
    - agents/openai.yaml
    - evals/evals.json
    - references/taxonomy-routing.md
    - skill-card.md
    - skill.oms.sig
---

Use for NVIDIA-related requests where an NVIDIA skill might help, even if the user did not ask for a skill. Trigger on NVIDIA products, hardware, software, SDKs, GPUs, Jetson/JetPack/L4T/BSP/SDK Manager/driver/flashing/setup, CUDA, NIM, NeMo, Omniverse/OpenUSD/SimReady, Isaac, RAPIDS/cuDF, cuPyNumeric, cuOpt, Dynamo, Holoscan, TensorRT, DeepStream, VSS, TAO, NGC/NVCF. Do not use for generic non-NVIDIA route, optimize, deploy, AI, video, data, or infrastructure tasks.
