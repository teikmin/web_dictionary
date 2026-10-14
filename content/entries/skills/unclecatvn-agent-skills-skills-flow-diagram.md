---
slug: unclecatvn-agent-skills-skills-flow-diagram
name: flow-diagram
tagline: "Draws an activity flow / system architecture diagram as ONE
  self-contained, INTERACTIVE HTML+SVG page (2-pane app layout — left: diagram,
  default fit-"
categories:
  - dev-tools
status: active
quality_percentile: 32
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: unclecatvn/agent-skills
  subpath: skills/flow-diagram
  official_vendor: false
  license: MIT
signals:
  stars: 145
  last_commit: 2026-09-24T09:06:23Z
type: agent_skill
skill:
  skill_name: flow-diagram
  description: >
    Draws an activity flow / system architecture diagram as ONE self-contained,
    INTERACTIVE HTML+SVG page (2-pane app layout — left: diagram, default
    fit-to-view with zoom/pan; right: sidebar with explainer cards), styled like
    a real hand-drawn enterprise doc (Stripe/AWS-docs style — real brand logos
    for MongoDB/Odoo/n8n/etc. from a bundled Simple Icons library, neutral white
    boxes, sans-serif, no "AI neon" look), scroll-to-zoom, auto light/dark with
    a toggle button — clicking a flow (a legend chip, a line, or a step badge)
    highlights that flow with traveling dots along the arrows in their
    direction, a ping at the destination box, and a sidebar panel that slides
    out, while everything else dims; two-way arrows (OUT = solid blue / RETURN =
    dashed green) carry numbered step badges, colored by semantic meaning (red =
    auth checkpoint, purple = scheduled flow, amber = data pipeline), a small
    "hop" arc where two lines are forced to cross, dashed group regions, one
    explainer card per flow in the right sidebar. Use this skill ANY TIME the
    user wants to "draw a diagram", "draw a flow", "draw a system diagram",
    "redraw this so it's easier to follow", "interactive diagram", "two-way
    diagram", "request/response flow", "make a free-form HTML diagram" — even if
    they never say the word HTML. Especially good when both the request
    direction AND the response direction need to be shown, or when a templated
    tool (archify, mermaid) is too rigid. Do NOT use for data charts
    (bar/line/pie), and do not use when the user asks specifically for archify
    or mermaid.
  folder_path: skills/flow-diagram
  extra_files:
    - assets/add-drag-to-rearrange.js
    - assets/add-flow-dots.js
    - assets/add-flow-ping.js
    - assets/check-collisions.js
    - assets/check-svg.js
    - assets/fix-arrow-gaps.js
    - assets/icons-library.html
    - assets/template.html
    - references/flow-diagram-example.html
    - references/layout-patterns-guide.html
---

Draws an activity flow / system architecture diagram as ONE self-contained, INTERACTIVE HTML+SVG page (2-pane app layout — left: diagram, default fit-to-view with zoom/pan; right: sidebar with explainer cards), styled like a real hand-drawn enterprise doc (Stripe/AWS-docs style — real brand logos for MongoDB/Odoo/n8n/etc. from a bundled Simple Icons library, neutral white boxes, sans-serif, no "AI neon" look), scroll-to-zoom, auto light/dark with a toggle button — clicking a flow (a legend chip, a line, or a step badge) highlights that flow with traveling dots along the arrows in their direction, a ping at the destination box, and a sidebar panel that slides out, while everything else dims; two-way arrows (OUT = solid blue / RETURN = dashed green) carry numbered step badges, colored by semantic meaning (red = auth checkpoint, purple = scheduled flow, amber = data pipeline), a small "hop" arc where two lines are forced to cross, dashed group regions, one explainer card per flow in the right sidebar. Use this skill ANY TIME the user wants to "draw a diagram", "draw a flow", "draw a system diagram", "redraw this so it's easier to follow", "interactive diagram", "two-way diagram", "request/response flow", "make a free-form HTML diagram" — even if they never say the word HTML. Especially good when both the request direction AND the response direction need to be shown, or when a templated tool (archify, mermaid) is too rigid. Do NOT use for data charts (bar/line/pie), and do not use when the user asks specifically for archify or mermaid.

