# Run Audit Report: 2026-W41

> **Run Date:** 2026-10-07T16:39:26.643Z  
> **Duration:** 38.2 seconds  
> **Exit Criteria:** Review the top 30 MCP servers and Skills below to verify automatic selection quality.

--- 

## 1. Funnel Summary

| Stage | Candidates | Conversion | Notes |
|---|:---:|:---:|---|
| **Discovered** | 713 | 100% | GitHub Search + MCP Registry |
| **Layer 1: Hard Gates** | 501 | 70.3% | $\ge 100$ stars, active <180d, license, no tutorials |
| **Layer 2: Type Evidence** | 459 | 91.6% | SDK dependency, server.json, SKILL.md |
| **Selected Catalog** | 232 | 32.5% | Cap $\sim 500$ entries (82 MCP, 150 Skills) |

--- 

## 2. Top 30 MCP Servers (Spot Check)

| # | Repository | Stars | Score | Percentile | Evidence | Reason |
|:---:|---|:---:|:---:|:---:|---|---|
| 1 | [modelcontextprotocol/java-sdk](https://github.com/modelcontextprotocol/java-sdk) | 3722 | 96 | 100% | `mcp_sdk_dependency` | official_vendor |
| 2 | [xinnan-tech/xiaozhi-esp32-server](https://github.com/xinnan-tech/xiaozhi-esp32-server) | 10747 | 90 | 98% | `mcp_sdk_dependency` | quality_percentile |
| 3 | [github/github-mcp-server](https://github.com/github/github-mcp-server) | 33427 | 89 | 98% | `mcp_server_manifest` | official_vendor |
| 4 | [devlikeapro/waha](https://github.com/devlikeapro/waha) | 7562 | 89 | 98% | `mcp_sdk_dependency` | quality_percentile |
| 5 | [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12519 | 88 | 97% | `mcp_sdk_dependency` | quality_percentile |
| 6 | [silexlabs/Silex](https://github.com/silexlabs/Silex) | 2997 | 86 | 95% | `mcp_sdk_dependency` | quality_percentile |
| 7 | [IBM/mcp-context-forge](https://github.com/IBM/mcp-context-forge) | 4582 | 86 | 95% | `mcp_sdk_dependency` | quality_percentile |
| 8 | [Evil0ctal/Douyin_TikTok_Download_API](https://github.com/Evil0ctal/Douyin_TikTok_Download_API) | 20496 | 85 | 93% | `mcp_sdk_dependency` | quality_percentile |
| 9 | [chrisryugj/korean-law-mcp](https://github.com/chrisryugj/korean-law-mcp) | 2647 | 84 | 90% | `mcp_sdk_dependency` | quality_percentile |
| 10 | [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 45967 | 83 | 88% | `mcp_server_manifest` | quality_percentile |
| 11 | [bytedance/UI-TARS-desktop](https://github.com/bytedance/UI-TARS-desktop) | 39208 | 83 | 88% | `mcp_server_manifest` | quality_percentile |
| 12 | [modelscope/FunASR](https://github.com/modelscope/FunASR) | 20602 | 83 | 88% | `mcp_server_manifest` | quality_percentile |
| 13 | [firerpa/lamda](https://github.com/firerpa/lamda) | 8544 | 83 | 86% | `mcp_sdk_dependency` | quality_percentile |
| 14 | [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) | 30173 | 83 | 86% | `mcp_sdk_dependency` | quality_percentile |
| 15 | [JoeanAmier/XHS-Downloader](https://github.com/JoeanAmier/XHS-Downloader) | 12930 | 82 | 81% | `mcp_sdk_dependency` | quality_percentile |
| 16 | [huangjunsen0406/py-xiaozhi](https://github.com/huangjunsen0406/py-xiaozhi) | 3492 | 82 | 80% | `mcp_sdk_dependency` | quality_percentile |
| 17 | [777genius/agent-teams-ai](https://github.com/777genius/agent-teams-ai) | 2235 | 82 | 80% | `mcp_sdk_dependency` | quality_percentile |
| 18 | [0xSteph/pentest-ai](https://github.com/0xSteph/pentest-ai) | 1718 | 82 | 80% | `mcp_sdk_dependency` | quality_percentile |
| 19 | [LING71671/open-reverselab](https://github.com/LING71671/open-reverselab) | 1228 | 82 | 79% | `mcp_sdk_dependency` | quality_percentile |
| 20 | [YishenTu/claudian](https://github.com/YishenTu/claudian) | 15598 | 82 | 78% | `mcp_sdk_dependency` | quality_percentile |
| 21 | [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | 11350 | 82 | 78% | `mcp_sdk_dependency` | quality_percentile |
| 22 | [1Panel-dev/MaxKB](https://github.com/1Panel-dev/MaxKB) | 22912 | 81 | 75% | `mcp_sdk_dependency` | quality_percentile |
| 23 | [IBM/AssetOpsBench](https://github.com/IBM/AssetOpsBench) | 2330 | 81 | 74% | `mcp_sdk_dependency` | quality_percentile |
| 24 | [wshobson/maverick-mcp](https://github.com/wshobson/maverick-mcp) | 701 | 81 | 73% | `mcp_server_manifest` | quality_percentile |
| 25 | [brightdata/brightdata-mcp](https://github.com/brightdata/brightdata-mcp) | 2659 | 80 | 69% | `mcp_server_manifest` | quality_percentile |
| 26 | [OpenOSINT/OpenOSINT](https://github.com/OpenOSINT/OpenOSINT) | 1707 | 80 | 69% | `mcp_server_manifest` | quality_percentile |
| 27 | [mukul975/cve-mcp-server](https://github.com/mukul975/cve-mcp-server) | 1619 | 80 | 68% | `mcp_sdk_dependency` | quality_percentile |
| 28 | [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) | 12494 | 79 | 64% | `mcp_sdk_dependency` | quality_percentile |
| 29 | [JerBouma/FinanceToolkit](https://github.com/JerBouma/FinanceToolkit) | 5404 | 79 | 64% | `mcp_server_manifest` | quality_percentile |
| 30 | [ahujasid/ableton-mcp](https://github.com/ahujasid/ableton-mcp) | 3148 | 79 | 62% | `mcp_sdk_dependency` | quality_percentile |

--- 

## 3. Top 30 Agent Skills (Spot Check)

| # | Repository | Stars | Score | Percentile | Subpaths | Reason |
|:---:|---|:---:|:---:|:---:|---|---|
| 1 | [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | 45190 | 94 | 100% | 9 folder(s) | quality_percentile |
| 2 | [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | 30890 | 94 | 100% | 63 folder(s) | quality_percentile |
| 3 | [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | 14893 | 94 | 99% | 4 folder(s) | quality_percentile |
| 4 | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 24504 | 92 | 99% | 1 folder(s) | official_vendor |
| 5 | [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) | 3298 | 91 | 99% | 1 folder(s) | quality_percentile |
| 6 | [nitrocloudofficial/nitrostack](https://github.com/nitrocloudofficial/nitrostack) | 2465 | 91 | 99% | 1227 folder(s) | quality_percentile |
| 7 | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 37497 | 90 | 98% | 33 folder(s) | official_vendor |
| 8 | [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47264 | 89 | 98% | 3 folder(s) | quality_percentile |
| 9 | [microsoft/SkillOpt](https://github.com/microsoft/SkillOpt) | 18098 | 89 | 97% | 5 folder(s) | official_vendor |
| 10 | [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48838 | 87 | 97% | 11 folder(s) | quality_percentile |
| 11 | [decolua/9router](https://github.com/decolua/9router) | 30411 | 87 | 97% | 9 folder(s) | quality_percentile |
| 12 | [simonlin1212/a-stock-data](https://github.com/simonlin1212/a-stock-data) | 10657 | 87 | 97% | 1 folder(s) | quality_percentile |
| 13 | [aden-hive/hive](https://github.com/aden-hive/hive) | 11088 | 87 | 96% | 24 folder(s) | quality_percentile |
| 14 | [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 87972 | 86 | 96% | 56 folder(s) | quality_percentile |
| 15 | [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 23049 | 86 | 96% | 15 folder(s) | quality_percentile |
| 16 | [maximhq/bifrost](https://github.com/maximhq/bifrost) | 8605 | 86 | 96% | 15 folder(s) | quality_percentile |
| 17 | [atilaahmettaner/tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) | 4952 | 86 | 95% | 1 folder(s) | quality_percentile |
| 18 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 251859 | 86 | 95% | 211 folder(s) | quality_percentile |
| 19 | [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | 69069 | 86 | 95% | 211 folder(s) | quality_percentile |
| 20 | [xbtlin/ai-berkshire](https://github.com/xbtlin/ai-berkshire) | 16646 | 86 | 94% | 22 folder(s) | quality_percentile |
| 21 | [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) | 9774 | 86 | 94% | 34 folder(s) | quality_percentile |
| 22 | [microsoft/skills](https://github.com/microsoft/skills) | 3089 | 86 | 94% | 205 folder(s) | official_vendor |
| 23 | [pascalorg/editor](https://github.com/pascalorg/editor) | 24713 | 85 | 94% | 4 folder(s) | quality_percentile |
| 24 | [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | 73849 | 85 | 93% | 52 folder(s) | quality_percentile |
| 25 | [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | 43398 | 85 | 93% | 1 folder(s) | quality_percentile |
| 26 | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 18470 | 85 | 93% | 35 folder(s) | quality_percentile |
| 27 | [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui) | 13966 | 85 | 93% | 2 folder(s) | quality_percentile |
| 28 | [OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator) | 12863 | 85 | 92% | 7 folder(s) | quality_percentile |
| 29 | [HarnessMD/munder-difflin](https://github.com/HarnessMD/munder-difflin) | 8550 | 85 | 92% | 18 folder(s) | quality_percentile |
| 30 | [kyegomez/swarms](https://github.com/kyegomez/swarms) | 7233 | 85 | 92% | 6 folder(s) | quality_percentile |

--- 

## 4. Rejection Analysis (Sample)

| Rejection Reason | Count |
|---|:---:|
| `FAILED_G7_NO_OSI_LICENSE` | 84 |
| `FAILED_G3_TEMPLATE_OR_MIRROR` | 3 |
| `official_vendor` | 7 |
| `FAILED_G5_INACTIVE_180_DAYS` | 22 |
| `exceeded_catalog_cap` | 227 |
| `FAILED_G9_COURSE_OR_LIST_KEYWORD` | 30 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE` | 4 |
| `FAILED_G6_TOO_NEW_30_DAYS` | 11 |
| `missing_file_evidence` | 41 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 3 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 8 |
| `FAILED_G8_DESCRIPTION_TOO_SHORT` | 3 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G3_TEMPLATE_OR_MIRROR, FAILED_G7_NO_OSI_LICENSE` | 2 |
| `FAILED_G6_TOO_NEW_30_DAYS, FAILED_G7_NO_OSI_LICENSE` | 3 |
| `FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 4 |
| `FAILED_G4_STARS_BELOW_THRESHOLD` | 18 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G8_DESCRIPTION_TOO_SHORT` | 1 |
| `FAILED_G5_INACTIVE_180_DAYS, FAILED_G7_NO_OSI_LICENSE, FAILED_G9_COURSE_OR_LIST_KEYWORD` | 1 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G5_INACTIVE_180_DAYS` | 3 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G8_DESCRIPTION_TOO_SHORT` | 3 |
| `FAILED_G4_STARS_BELOW_THRESHOLD, FAILED_G7_NO_OSI_LICENSE` | 2 |
