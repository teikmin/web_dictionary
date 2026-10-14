---
slug: 0x0funky-agent-sprite-forge-skills-generate2dsprite
name: generate2dsprite
tagline: Make game-ready 2D characters, creatures, props, icons and FX as master
  stills, sprite sheets or animation clips. Plan size, motion and finish; genera
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
  subpath: skills/generate2dsprite
  official_vendor: false
  license: MIT
signals:
  stars: 4436
  last_commit: 2026-10-06T14:09:38Z
type: agent_skill
skill:
  skill_name: generate2dsprite
  description: Make game-ready 2D characters, creatures, props, icons and FX as
    master stills, sprite sheets or animation clips. Plan size, motion and
    finish; generate the art (image generation is the default, through
    generate2dmedia route_media.py - the API when a key is configured, else the
    local Codex or Grok CLI); approve one master still per character; then key,
    slice, register, scale, palette, QA and export frames for a game engine
    (Aseprite JSON, Godot SpriteFrames or Sprite3D). HD finish by default, pixel
    finish on request. Character animation is one image-to-video clip per action
    from the master (video2dsprite); sheets are for FX, icons and props. Use for
    sprites, masters, sheets, frame-by-frame animation and packaging frames from
    any source. Not for maps, tiles or backgrounds (generate2dmap), video clips
    (video2dsprite), code-drawn art (codeart2d, only on request) or calling an
    image or video API by itself (generate2dmedia).
  folder_path: skills/generate2dsprite
  extra_files:
    - agents/openai.yaml
    - references/action-recipes.md
    - references/animation-planning.md
    - references/character-animation.md
    - references/engine-export.md
    - references/frames-and-clips.md
    - references/master-still.md
    - references/modes.md
    - references/palette-and-pixels.md
    - references/processing.md
---

Make game-ready 2D characters, creatures, props, icons and FX as master stills, sprite sheets or animation clips. Plan size, motion and finish; generate the art (image generation is the default, through generate2dmedia route_media.py - the API when a key is configured, else the local Codex or Grok CLI); approve one master still per character; then key, slice, register, scale, palette, QA and export frames for a game engine (Aseprite JSON, Godot SpriteFrames or Sprite3D). HD finish by default, pixel finish on request. Character animation is one image-to-video clip per action from the master (video2dsprite); sheets are for FX, icons and props. Use for sprites, masters, sheets, frame-by-frame animation and packaging frames from any source. Not for maps, tiles or backgrounds (generate2dmap), video clips (video2dsprite), code-drawn art (codeart2d, only on request) or calling an image or video API by itself (generate2dmedia).
