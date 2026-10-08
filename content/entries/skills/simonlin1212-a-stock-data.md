---
slug: simonlin1212-a-stock-data
name: a-stock-data
tagline: "A股全栈数据工具包：行情K线·当日逐笔·研报·信号·资金面·新闻·财务·公告·打板·ETF期权·舆情·宏观利率·期货大宗(含大商所日K)·\
  事件驱动·可转债 | 15层·87端点·34数据源·除iwencai外免Key | A-share data for AI agents: K-lines,
  ti"
categories:
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-05-11T01:08:15Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: simonlin1212/a-stock-data
  license: Apache-2.0
signals:
  stars: 10657
  last_commit: 2026-10-07T06:22:49Z
type: agent_skill
skill:
  skill_name: a-stock-data
  description: 当任务需要写代码实际获取A股及相关市场数据时使用——行情/K线/逐笔(腾讯日周月前后复权+分钟线+当日逐笔、通达信官网全市场盘后包、百度)、研报(东财+新浪+同花顺+iwencai)、信号(热点/北向/龙虎榜/解禁/行业/板块资金流)、资金面(融资融券/大宗/股东户数/分红/资金流/ETF份额)、新闻(财联社/东财/华尔街见闻/新闻联播)、财务三表/F10/估值历史/ST名单、公告(巨潮)、打板(涨停池/连板/炸板率/监控池/异动)、ETF期权、舆情互动(互动易/上证e互动/热榜)、筹码分布、复权因子、申万行业变迁、宏观与利率(社融/PMI/中债收益率曲线/回购定盘利率/LPR/全球宏观日历)、指数成分/权重/估值/交易日历、期货与大宗商品(五家期货交易所日行情/商品与股指期权/持仓排名/期货日K含大商所/实时期货/A50/上海金)、事件驱动(业绩预告/机构调研/增减持/回购/股权质押/新股申购)、可转债等真实数据。十五层·87端点(含5备胎)·34个来源·内嵌全部可运行代码，自包含零外部文件；优先用腾讯/交易所官方等不封IP源，东财接口已内置限流防封，主源被封可查「备用源速查」降级。仅在需要调用数据接口取数时使用：A股概念解释、投资观点讨论、策略问答等无需取数的话题不要加载本skill。
  folder_path: .
  extra_files:
    - .github/FUNDING.yml
    - .gitignore
    - CHANGELOG.md
    - LICENSE
    - README.md
    - README_en.md
    - assets/.gitkeep
    - assets/bmc-qr.png
    - assets/bmc-sponsor.png
    - docs/source-integration-v3.8.0.md
---

当任务需要写代码实际获取A股及相关市场数据时使用——行情/K线/逐笔(腾讯日周月前后复权+分钟线+当日逐笔、通达信官网全市场盘后包、百度)、研报(东财+新浪+同花顺+iwencai)、信号(热点/北向/龙虎榜/解禁/行业/板块资金流)、资金面(融资融券/大宗/股东户数/分红/资金流/ETF份额)、新闻(财联社/东财/华尔街见闻/新闻联播)、财务三表/F10/估值历史/ST名单、公告(巨潮)、打板(涨停池/连板/炸板率/监控池/异动)、ETF期权、舆情互动(互动易/上证e互动/热榜)、筹码分布、复权因子、申万行业变迁、宏观与利率(社融/PMI/中债收益率曲线/回购定盘利率/LPR/全球宏观日历)、指数成分/权重/估值/交易日历、期货与大宗商品(五家期货交易所日行情/商品与股指期权/持仓排名/期货日K含大商所/实时期货/A50/上海金)、事件驱动(业绩预告/机构调研/增减持/回购/股权质押/新股申购)、可转债等真实数据。十五层·87端点(含5备胎)·34个来源·内嵌全部可运行代码，自包含零外部文件；优先用腾讯/交易所官方等不封IP源，东财接口已内置限流防封，主源被封可查「备用源速查」降级。仅在需要调用数据接口取数时使用：A股概念解释、投资观点讨论、策略问答等无需取数的话题不要加载本skill。
