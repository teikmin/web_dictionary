---
slug: datopian-portaljs-skills-arcgis-to-portaljs
name: arcgis-to-portaljs
tagline: Migrate a whole ArcGIS Hub site into a PortalJS Arc portal end-to-end.
  Harvests the Hub /data.json (DCAT-US) inventory, exports every FeatureService
  l
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
  subpath: skills/arcgis-to-portaljs
  official_vendor: false
  license: MIT
signals:
  stars: 2362
  last_commit: 2026-10-08T06:39:35Z
type: agent_skill
skill:
  skill_name: arcgis-to-portaljs
  description: Migrate a whole ArcGIS Hub site into a PortalJS Arc portal
    end-to-end. Harvests the Hub /data.json (DCAT-US) inventory, exports every
    FeatureService layer through the ArcGIS REST query API with resultOffset
    paging, converts each to the serverless dual tier (PMTiles render +
    GeoParquet query) with tabular items to Parquet, pushes everything to
    Cloudflare R2 via Git LFS, appends dual-tier datasets.json entries, and
    writes a source-vs-derived parity report. Use to move a City or sector
    ArcGIS Hub open-data portal onto PortalJS with no server-side compute.
  folder_path: skills/arcgis-to-portaljs
  extra_files:
    - references/reference.md
    - references/sync-and-cutover.md
---

Migrate a whole ArcGIS Hub site into a PortalJS Arc portal end-to-end. Harvests the Hub /data.json (DCAT-US) inventory, exports every FeatureService layer through the ArcGIS REST query API with resultOffset paging, converts each to the serverless dual tier (PMTiles render + GeoParquet query) with tabular items to Parquet, pushes everything to Cloudflare R2 via Git LFS, appends dual-tier datasets.json entries, and writes a source-vs-derived parity report. Use to move a City or sector ArcGIS Hub open-data portal onto PortalJS with no server-side compute.
