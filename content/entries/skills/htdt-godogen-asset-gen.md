---
slug: htdt-godogen-asset-gen
name: asset-gen
tagline: "Generate visual assets from text prompts: PNG images (Gemini / xAI
  Grok, or local Qwen-Image when installed), GLB 3D models (Tripo CLI), rigged
  charac"
categories:
  - dev-tools
status: active
quality_percentile: 50
selection_reason: quality_percentile
first_seen: 2026-02-06T18:46:52
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: htdt/godogen
  subpath: asset-gen
  official_vendor: false
  license: MIT
signals:
  stars: 7106
  last_commit: 2026-10-01T18:40:42Z
type: agent_skill
skill:
  skill_name: asset-gen
  description: >
    Generate visual assets from text prompts: PNG images (Gemini / xAI Grok, or
    local Qwen-Image when installed), GLB 3D models (Tripo CLI), rigged
    characters, retargeted animations, and frame-by-frame animated sprites, plus
    background removal. Use whenever a game needs generated art.
  folder_path: asset-gen
  extra_files:
    - motion.md
    - rembg.md
    - tools/asset_gen.py
    - tools/find_loop_frame.py
    - tools/grid_slice.py
    - tools/rembg_matting.py
    - tools/requirements.txt
---

Generate visual assets from text prompts: PNG images (Gemini / xAI Grok, or local Qwen-Image when installed), GLB 3D models (Tripo CLI), rigged characters, retargeted animations, and frame-by-frame animated sprites, plus background removal. Use whenever a game needs generated art.

