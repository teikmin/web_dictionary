---
slug: 0x0funky-agent-sprite-forge-skills-codeart2d
name: agent-sprite-forge
tagline: Agent Skill for generating 2D sprite sheets and map, transparent PNG
  frames, and animated GIFs from prompts.
categories:
  - ai-frameworks
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-04-23T20:52:52Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: 0x0funky/agent-sprite-forge
  subpath: skills/codeart2d
  license: MIT
signals:
  stars: 4334
  last_commit: 2026-10-06T14:09:38Z
type: agent_skill
skill:
  skill_name: codeart2d
  description: Explicit-only last resort. Draws game art from code, with no image
    model - pixel sprites from a PixelSpec, flat vector props, UI and icons from
    portable SVG, rigged characters with planted feet, FX with a JS runtime,
    seam-proven autotiles, playable top-down layouts with collision, stylized
    parallax and ambient plate motion - palette-exact, with QA and review
    sheets. Use only when the user explicitly asks for code-drawn art, or when
    generate2dmedia route_media.py finds no image or video route (no-route, exit
    3). Never the default - image generation (generate2dsprite, generate2dmap,
    video2dsprite) comes first for characters, props, maps and FX. Not for
    painterly, detailed or likeness art, HD-2D plates or realistic fire, smoke
    or water. Always disclose the result as code-drawn.
  folder_path: skills/codeart2d
  extra_files:
    - agents/openai.yaml
    - examples/dirt-path.material.json
    - examples/hero.anim.json
    - examples/hero.rig.svg
    - examples/meadow-layout.json
    - examples/palette.json
    - examples/parallax-gen.json
    - examples/plate-effects.json
    - examples/potion-icons.svg
    - examples/slash.fx.json
---

Explicit-only last resort. Draws game art from code, with no image model - pixel sprites from a PixelSpec, flat vector props, UI and icons from portable SVG, rigged characters with planted feet, FX with a JS runtime, seam-proven autotiles, playable top-down layouts with collision, stylized parallax and ambient plate motion - palette-exact, with QA and review sheets. Use only when the user explicitly asks for code-drawn art, or when generate2dmedia route_media.py finds no image or video route (no-route, exit 3). Never the default - image generation (generate2dsprite, generate2dmap, video2dsprite) comes first for characters, props, maps and FX. Not for painterly, detailed or likeness art, HD-2D plates or realistic fire, smoke or water. Always disclose the result as code-drawn.
