---
slug: kevinpbuckley-vibeue-content-skills-asset-management
name: asset-management
tagline: Import files from disk (images, meshes, any format the editor imports),
  export textures, query the Content Browser selection, and check if an asset is
categories:
  - dev-tools
status: active
quality_percentile: 51
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: kevinpbuckley/VibeUE
  subpath: Content/Skills/asset-management
  official_vendor: false
  license: MIT
signals:
  stars: 745
  last_commit: 2026-10-07T14:45:41Z
type: agent_skill
skill:
  skill_name: asset-management
  description: Import files from disk (images, meshes, any format the editor
    imports), export textures, query the Content Browser selection, and check if
    an asset is open (AssetDiscoveryService). Search, load, save, move, rename,
    duplicate, and delete assets are handled by Unreal's native AssetTools
    toolset or EditorAssetLibrary. Use when the user asks to import an image,
    mesh or other file from disk, export a texture, query the Content Browser
    selection, or check whether an asset is open in an editor. Also use for
    static-mesh LOD reimport, section material mapping, or gray/default surfaces
    after reimport.
  folder_path: Content/Skills/asset-management
  extra_files:
    - references/mesh-reimport-materials.md
    - scripts/find_and_save.txt
    - scripts/mesh_material_slots.py
---

Import files from disk (images, meshes, any format the editor imports), export textures, query the Content Browser selection, and check if an asset is open (AssetDiscoveryService). Search, load, save, move, rename, duplicate, and delete assets are handled by Unreal's native AssetTools toolset or EditorAssetLibrary. Use when the user asks to import an image, mesh or other file from disk, export a texture, query the Content Browser selection, or check whether an asset is open in an editor. Also use for static-mesh LOD reimport, section material mapping, or gray/default surfaces after reimport.
