---
slug: 0x0funky-agent-sprite-forge-skills-generate2dmedia
name: generate2dmedia
tagline: The art-route layer of the Forge skills. route_media.py is the one
  command that generates an image or an image-to-video clip - through the paid
  API of
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
  subpath: skills/generate2dmedia
  official_vendor: false
  license: MIT
signals:
  stars: 4436
  last_commit: 2026-10-06T14:09:38Z
type: agent_skill
skill:
  skill_name: generate2dmedia
  description: The art-route layer of the Forge skills. route_media.py is the one
    command that generates an image or an image-to-video clip - through the paid
    API of any provider whose key is configured (OpenAI, Google Gemini, xAI,
    BytePlus ModelArk, fal.ai; the configured key is the owner's consent), else
    through the user's own signed-in Codex or Grok CLI - and prints one JSON
    line with the route, artifact, sha256 and cost estimate; with no route it
    answers no-route (codeart2d is then the last resort). Also the capability
    check (forge_doctor), API key configuration, the spend ledger, resume and
    Codex image adoption. Use when a Forge skill sends a generation here, for
    the capability check, or when the user asks about keys, routes or spend. Not
    for planning, processing or QA of sprites, video frames or maps
    (generate2dsprite, video2dsprite, generate2dmap) or for code-drawn art
    (codeart2d).
  folder_path: skills/generate2dmedia
  extra_files:
    - agents/openai.yaml
    - references/agent-profiles/README.md
    - references/agent-profiles/video-agent.md
    - references/api-usage.md
    - references/capabilities.json
    - references/cli-routes.md
    - references/prices.json
    - references/provider-survey.md
    - references/route-media.md
    - references/schemas/common.schema.json
---

The art-route layer of the Forge skills. route_media.py is the one command that generates an image or an image-to-video clip - through the paid API of any provider whose key is configured (OpenAI, Google Gemini, xAI, BytePlus ModelArk, fal.ai; the configured key is the owner's consent), else through the user's own signed-in Codex or Grok CLI - and prints one JSON line with the route, artifact, sha256 and cost estimate; with no route it answers no-route (codeart2d is then the last resort). Also the capability check (forge_doctor), API key configuration, the spend ledger, resume and Codex image adoption. Use when a Forge skill sends a generation here, for the capability check, or when the user asks about keys, routes or spend. Not for planning, processing or QA of sprites, video frames or maps (generate2dsprite, video2dsprite, generate2dmap) or for code-drawn art (codeart2d).
