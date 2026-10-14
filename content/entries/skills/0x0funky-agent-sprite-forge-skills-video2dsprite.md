---
slug: 0x0funky-agent-sprite-forge-skills-video2dsprite
name: video2dsprite
tagline: Turn one approved master still into a character's whole animated sprite
  set - one image-to-video clip per action (idle, walk, run, attack, jump, hurt,
categories:
  - productivity
status: active
quality_percentile: 49
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: 0x0funky/agent-sprite-forge
  subpath: skills/video2dsprite
  official_vendor: false
  license: MIT
signals:
  stars: 4436
  last_commit: 2026-10-06T14:09:38Z
type: agent_skill
skill:
  skill_name: video2dsprite
  description: Turn one approved master still into a character's whole animated
    sprite set - one image-to-video clip per action (idle, walk, run, attack,
    jump, hurt, cast and so on), all from that still, generated through
    generate2dmedia route_media.py (the xAI API when a key is configured, else
    the local Grok CLI) - then gate each take, key it with a soft matte,
    register it to the master, pick loops or retime actions, finish (HD by
    default, pixel on request) and package fixed-canvas frames, alpha WebM,
    packed MP4 for iPhone and a PNG fallback with engine metadata and a JS
    runtime. Also processes a supplied clip. Use for character and creature
    animation, fluid motion and any video-to-sprite work. Not for FX, icon or
    prop sheets (generate2dsprite), maps or plate loops (generate2dmap),
    code-drawn animation (codeart2d, only on request) or calling a video API by
    itself (generate2dmedia).
  folder_path: skills/video2dsprite
  extra_files:
    - agents/openai.yaml
    - references/animation-review.md
    - references/finishing.md
    - references/matte.md
    - references/motion-prompts.md
    - references/packed-alpha-runtime.js
    - references/pipeline.md
    - references/prompt-rules.md
    - references/runtime/forge-runtime.mjs
    - references/runtime/packed-alpha-webgl.mjs
---

Turn one approved master still into a character's whole animated sprite set - one image-to-video clip per action (idle, walk, run, attack, jump, hurt, cast and so on), all from that still, generated through generate2dmedia route_media.py (the xAI API when a key is configured, else the local Grok CLI) - then gate each take, key it with a soft matte, register it to the master, pick loops or retime actions, finish (HD by default, pixel on request) and package fixed-canvas frames, alpha WebM, packed MP4 for iPhone and a PNG fallback with engine metadata and a JS runtime. Also processes a supplied clip. Use for character and creature animation, fluid motion and any video-to-sprite work. Not for FX, icon or prop sheets (generate2dsprite), maps or plate loops (generate2dmap), code-drawn animation (codeart2d, only on request) or calling a video API by itself (generate2dmedia).
