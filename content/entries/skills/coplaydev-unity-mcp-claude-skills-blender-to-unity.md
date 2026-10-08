---
slug: coplaydev-unity-mcp-claude-skills-blender-to-unity
name: unity-mcp
tagline: Unity MCP acts as a bridge between AI assistants and your Unity Editor.
  Give your LLM tools to manage assets, control scenes, edit scripts, and automa
categories:
  - dev-tools
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2025-03-18T11:01:58Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: CoplayDev/unity-mcp
  subpath: .claude/skills/blender-to-unity
  license: MIT
signals:
  stars: 14742
  last_commit: 2026-10-07T04:28:13Z
type: agent_skill
skill:
  skill_name: blender-to-unity
  description: Hand off a model from Blender (via BlenderMCP) into Unity (via MCP
    for Unity) — export the current Blender model, import it through
    import_model_file, and place it in the open scene. Use when the user has
    BlenderMCP and MCP for Unity both connected and wants to bring a Blender
    model into Unity. Does NOT drive Blender's own generators; BlenderMCP owns
    how the model got into Blender.
  folder_path: .claude/skills/blender-to-unity
  extra_files:
    - manual-verify.md
    - references/bridge-fidelity.md
---

Hand off a model from Blender (via BlenderMCP) into Unity (via MCP for Unity) — export the current Blender model, import it through import_model_file, and place it in the open scene. Use when the user has BlenderMCP and MCP for Unity both connected and wants to bring a Blender model into Unity. Does NOT drive Blender's own generators; BlenderMCP owns how the model got into Blender.
