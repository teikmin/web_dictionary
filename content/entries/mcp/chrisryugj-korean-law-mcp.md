---
slug: chrisryugj-korean-law-mcp
name: korean-law-mcp
tagline: 법제처 국가법령정보를 LLM에서 바로 조회하는 MCP 서버. 법령·판례·조례 검색과 인용 검증 | MCP server for
  Korean law — search statutes, precedents, and ordinances, and verify citations
categories:
  - productivity
status: active
quality_percentile: 91
selection_reason: quality_percentile
first_seen: 2025-12-19T11:03:22Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: chrisryugj/korean-law-mcp
  license: MIT
signals:
  stars: 2647
  last_commit: 2026-10-05T04:29:41Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/chrisryugj/korean-law-mcp
  env_vars: []
  confidence: manifest
---

법제처 국가법령정보를 LLM에서 바로 조회하는 MCP 서버. 법령·판례·조례 검색과 인용 검증 | MCP server for Korean law — search statutes, precedents, and ordinances, and verify citations
