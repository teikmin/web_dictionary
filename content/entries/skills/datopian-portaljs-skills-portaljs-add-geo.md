---
slug: datopian-portaljs-skills-portaljs-add-geo
name: portaljs-add-geo
tagline: Auto-ingest a geospatial file (GeoJSON, Shapefile, GeoPackage, KML/KMZ,
  FlatGeobuf, CSV-with-geometry) into a PortalJS portal on the user's own machin
categories:
  - dev-tools
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: datopian/portaljs
  subpath: skills/portaljs-add-geo
  official_vendor: false
  license: MIT
signals:
  stars: 2362
  last_commit: 2026-10-08T06:39:35Z
type: agent_skill
skill:
  skill_name: portaljs-add-geo
  description: Auto-ingest a geospatial file (GeoJSON, Shapefile, GeoPackage,
    KML/KMZ, FlatGeobuf, CSV-with-geometry) into a PortalJS portal on the user's
    own machine, with no server. Normalizes CRS to EPSG:4326, derives a PMTiles
    render tier and a GeoParquet query tier, pushes all three artifacts to
    Cloudflare R2 via Git LFS, and appends one dual-tier datasets.json entry the
    showcase auto-renders. Use when the source is a vector geo format that needs
    a map or spatial-query view.
  folder_path: skills/portaljs-add-geo
  extra_files:
    - references/reference.md
---

Auto-ingest a geospatial file (GeoJSON, Shapefile, GeoPackage, KML/KMZ, FlatGeobuf, CSV-with-geometry) into a PortalJS portal on the user's own machine, with no server. Normalizes CRS to EPSG:4326, derives a PMTiles render tier and a GeoParquet query tier, pushes all three artifacts to Cloudflare R2 via Git LFS, and appends one dual-tier datasets.json entry the showcase auto-renders. Use when the source is a vector geo format that needs a map or spatial-query view.
