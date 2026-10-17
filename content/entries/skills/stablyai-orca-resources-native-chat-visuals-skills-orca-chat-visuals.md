---
slug: stablyai-orca-resources-native-chat-visuals-skills-orca-chat-visuals
name: orca-chat-visuals
tagline: Show a chart, diagram, table, report or mockup inline in this Orca chat
  as an HTML page. Use when a visual would help the user understand your answer.
summary: "- Save it in the folder named by ORCACHATVISUALSDIR (printenv
  ORCACHATVISUALSDIR; in PowerShell $env:ORCACHATVISUALSDIR). If it's unset or
  you can't write there, skip the visual. - One complete HTML file per visual,
  d..."
categories:
  - media-creative
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: resources/native-chat-visuals/skills/orca-chat-visuals
  official_vendor: false
  license: MIT
signals:
  stars: 91386
  last_commit: 2026-10-13T16:24:00Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: stablyai/orca
  path: resources/native-chat-visuals/skills/orca-chat-visuals/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:11.924Z
  truncated: false
type: agent_skill
skill:
  skill_name: orca-chat-visuals
  description: Show a chart, diagram, table, report or mockup inline in this Orca
    chat as an HTML page. Use when a visual would help the user understand your
    answer. Only available when the ORCA_CHAT_VISUALS_DIR environment variable
    is set.
  folder_path: resources/native-chat-visuals/skills/orca-chat-visuals
  extra_files: []
tags: []
---

# Inline visuals in an Orca chat
Orca can show an HTML page inside your reply. Use one whenever a visual would make the answer
clearer.

## Writing the page

- Save it in the folder named by `ORCA_CHAT_VISUALS_DIR` (`printenv ORCA_CHAT_VISUALS_DIR`; in
  PowerShell `$env:ORCA_CHAT_VISUALS_DIR`). If it's unset or you can't write there, skip the visual.
- One complete HTML file per visual, directly in that folder, under 512 KB, with a new file name
  each time (e.g. `latency-by-region-7c1e.html`): letters, digits, `.`, `_`, `-`, ending in `.html`.
- Inline your styles, scripts and data. Libraries and fonts may load only from cdn.jsdelivr.net,
  unpkg.com, cdnjs.cloudflare.com, esm.sh, fonts.googleapis.com and fonts.gstatic.com. The page
  can't make network requests; use inline SVG or `data:` URLs for images.
- Don't size anything to the viewport height (`100vh`); Orca fits the frame to your content.
- Optional: Orca's theme colors are available as CSS variables (`--background`, `--foreground`,
  `--muted-foreground`, `--border`, `--primary`, `--chart-1` to `--chart-5`).

## Showing it

After the file exists, put this on its own line in your reply, outside any code block:

::orca-visual{file="latency-by-region-7c1e.html" title="Latency by region"}

`file` is the bare file name, never a path; `title` is optional. At most 8 per reply.
