---
slug: k-dense-ai-scientific-agent-skills-skills-alphagenome
name: alphagenome
tagline: Looks up precomputed AlphaGenome Atlas effects for any GRCh38
  single-nucleotide variant (AVI score with Phred and 18 SHAP feature
  attributions, plus r
categories:
  - ai-frameworks
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: K-Dense-AI/scientific-agent-skills
  subpath: skills/alphagenome
  official_vendor: false
  license: MIT
signals:
  stars: 48703
  last_commit: 2026-10-12T09:43:31Z
type: agent_skill
skill:
  skill_name: alphagenome
  description: Looks up precomputed AlphaGenome Atlas effects for any GRCh38
    single-nucleotide variant (AVI score with Phred and 18 SHAP feature
    attributions, plus raw and quantile scores for RNA-seq, DNase, ATAC,
    ChIP-TF, ChIP-histone, CAGE, PRO-cap, splicing, polyadenylation and
    contact-map tracks), scores variants or scans windows on demand with the
    AlphaGenome model for human and mouse (variant scoring, in silico
    mutagenesis, REF-versus-ALT track prediction), and builds Atlas website deep
    links. Use when the user mentions AlphaGenome, AlphaGenome Atlas, AVI or
    AlphaGenome Variant Impact, DeepMind variant effect prediction, or wants to
    prioritise or mechanistically interpret non-coding, regulatory, splicing,
    enhancer, promoter, or chromatin-accessibility effects of SNVs from a VCF,
    credible set, or region. Research use only; not a clinical tool.
  folder_path: skills/alphagenome
  extra_files:
    - references/atlas.md
    - references/interpretation.md
    - references/model-api.md
    - scripts/_common.py
    - scripts/atlas_link.py
    - scripts/atlas_query.py
    - scripts/score_variants.py
---

Looks up precomputed AlphaGenome Atlas effects for any GRCh38 single-nucleotide variant (AVI score with Phred and 18 SHAP feature attributions, plus raw and quantile scores for RNA-seq, DNase, ATAC, ChIP-TF, ChIP-histone, CAGE, PRO-cap, splicing, polyadenylation and contact-map tracks), scores variants or scans windows on demand with the AlphaGenome model for human and mouse (variant scoring, in silico mutagenesis, REF-versus-ALT track prediction), and builds Atlas website deep links. Use when the user mentions AlphaGenome, AlphaGenome Atlas, AVI or AlphaGenome Variant Impact, DeepMind variant effect prediction, or wants to prioritise or mechanistically interpret non-coding, regulatory, splicing, enhancer, promoter, or chromatin-accessibility effects of SNVs from a VCF, credible set, or region. Research use only; not a clinical tool.
