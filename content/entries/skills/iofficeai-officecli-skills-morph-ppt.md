---
slug: iofficeai-officecli-skills-morph-ppt
name: morph-ppt
tagline: Use this skill when the user wants a .pptx with smooth cross-slide
  animation — PowerPoint Morph transitions, Keynote-style continuous motion,
  shapes t
categories:
  - dev-tools
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: iOfficeAI/OfficeCLI
  subpath: skills/morph-ppt
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 31942
  last_commit: 2026-10-13T02:29:44Z
type: agent_skill
skill:
  skill_name: morph-ppt
  description: "Use this skill when the user wants a .pptx with smooth cross-slide
    animation — PowerPoint Morph transitions, Keynote-style continuous motion,
    shapes that grow / move / rotate as the slide advances. Trigger on: 'morph',
    'morph transition', 'smooth transition', 'continuous animation across
    slides', 'Keynote-style transition', 'animated slide sequence', 'shape
    continuity across slides'. Output is a single .pptx. This skill is a scene
    layer on top of officecli-pptx — inherits every pptx v2 rule (visual floor,
    grid, palettes, connector canon, Delivery Gate 1–5a). DO NOT invoke for a
    generic deck, pitch deck, or board review without cross-slide motion — route
    those to officecli-pptx base or officecli-pitch-deck."
  folder_path: skills/morph-ppt
  extra_files:
    - reference/decision-rules.md
    - reference/morph-helpers.py
    - reference/morph-helpers.sh
    - reference/pptx-design.md
    - reference/styles/INDEX.md
    - reference/styles/bw--brutalist-raw/build.sh
    - reference/styles/bw--brutalist-raw/bw__brutalist_raw.pptx
    - reference/styles/bw--brutalist-raw/style.md
    - reference/styles/bw--mono-line/build.sh
    - reference/styles/bw--mono-line/bw__mono_line.pptx
---

Use this skill when the user wants a .pptx with smooth cross-slide animation — PowerPoint Morph transitions, Keynote-style continuous motion, shapes that grow / move / rotate as the slide advances. Trigger on: 'morph', 'morph transition', 'smooth transition', 'continuous animation across slides', 'Keynote-style transition', 'animated slide sequence', 'shape continuity across slides'. Output is a single .pptx. This skill is a scene layer on top of officecli-pptx — inherits every pptx v2 rule (visual floor, grid, palettes, connector canon, Delivery Gate 1–5a). DO NOT invoke for a generic deck, pitch deck, or board review without cross-slide motion — route those to officecli-pptx base or officecli-pitch-deck.
