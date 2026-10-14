---
slug: opensensenova-sensenova-skills-skills-sn-da-excel-workflow
name: sn-da-excel-workflow
tagline: Excel 数据分析多步编排器。覆盖：(1) 读取多 Sheet Excel 文件并统计行数，(2) 大文件检测（≥10k 行自动
  Parquet 优化），(3) 数据清洗（缺失值、文本标准化、无效字符），(4) 条件筛选与分类提取，(5) 跨 Sheet 统计聚合，(6) 导出
  Excel/CSV
categories:
  - productivity
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: OpenSenseNova/SenseNova-Skills
  subpath: skills/sn-da-excel-workflow
  official_vendor: false
  license: MIT
signals:
  stars: 5754
  last_commit: 2026-10-09T02:09:42Z
type: agent_skill
skill:
  skill_name: sn-da-excel-workflow
  description: Excel 数据分析多步编排器。覆盖：(1) 读取多 Sheet Excel 文件并统计行数，(2) 大文件检测（≥10k 行自动
    Parquet 优化），(3) 数据清洗（缺失值、文本标准化、无效字符），(4) 条件筛选与分类提取，(5) 跨 Sheet 统计聚合，(6) 导出
    Excel/CSV 并提供下载链接。覆盖从数据读取到报告生成全流程，按步骤编排 capability 子 skill。**遇到以下任一情况就主动使用本
    skill，不要自行写几行 pandas 就回答**：①用户出现触发词：Excel 分析 / 表格分析 / 数据分析 / 数据清洗 / 数据统计 /
    数据筛选 / 数据可视化 / 数据导出 / 汇总统计 / 透视表 / 分组统计 / 交叉分析 / 趋势分析 / 对比分析 / 异常值检测 / 去重 /
    缺失值处理 / Excel 报告 / 生成报表 / analyze Excel / data analysis / data cleaning /
    pivot table；②用户上传或指定了 .xlsx / .xls / .csv 文件并要求分析、清洗、统计或可视化；③任务涉及多 Sheet
    读取、条件筛选、分类汇总、图表生成中的任意一项；④用户要求导出带格式的 Excel 报告或下载链接。仅不用于：不涉及表格数据的纯文本处理、图片分析（使用
    sn-da-image-caption）、单个公式计算的简单问答。
  folder_path: skills/sn-da-excel-workflow
  extra_files:
    - capability/excel-cell-coloring/category-coloring/SKILL.md
    - capability/excel-cell-coloring/duplicate-value-coloring/SKILL.md
    - capability/excel-cell-coloring/outlier-coloring/SKILL.md
    - capability/excel-cell-coloring/threshold-cell-coloring/SKILL.md
    - capability/excel-cell-coloring/top-value-coloring/SKILL.md
    - capability/excel-conditional-formatting/data-bar-formatting/SKILL.md
    - capability/excel-data-analysis/comparison-analysis/SKILL.md
    - capability/excel-data-analysis/group-by-analysis/SKILL.md
    - capability/excel-data-analysis/kpi-metric-analysis/SKILL.md
    - capability/excel-data-analysis/pivot-table-analysis/SKILL.md
---

Excel 数据分析多步编排器。覆盖：(1) 读取多 Sheet Excel 文件并统计行数，(2) 大文件检测（≥10k 行自动 Parquet 优化），(3) 数据清洗（缺失值、文本标准化、无效字符），(4) 条件筛选与分类提取，(5) 跨 Sheet 统计聚合，(6) 导出 Excel/CSV 并提供下载链接。覆盖从数据读取到报告生成全流程，按步骤编排 capability 子 skill。**遇到以下任一情况就主动使用本 skill，不要自行写几行 pandas 就回答**：①用户出现触发词：Excel 分析 / 表格分析 / 数据分析 / 数据清洗 / 数据统计 / 数据筛选 / 数据可视化 / 数据导出 / 汇总统计 / 透视表 / 分组统计 / 交叉分析 / 趋势分析 / 对比分析 / 异常值检测 / 去重 / 缺失值处理 / Excel 报告 / 生成报表 / analyze Excel / data analysis / data cleaning / pivot table；②用户上传或指定了 .xlsx / .xls / .csv 文件并要求分析、清洗、统计或可视化；③任务涉及多 Sheet 读取、条件筛选、分类汇总、图表生成中的任意一项；④用户要求导出带格式的 Excel 报告或下载链接。仅不用于：不涉及表格数据的纯文本处理、图片分析（使用 sn-da-image-caption）、单个公式计算的简单问答。
