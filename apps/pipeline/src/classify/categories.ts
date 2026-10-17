export interface CategoryDefinition {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  keywords: string[];
  secondaryKeywords?: string[];
}

export const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  {
    id: 'coding-agents',
    name: 'Coding & Dev Agents',
    tagline: 'CLI coding agents, IDE harnesses, PR review agents, and code graph tools',
    description: 'Autonomous coding agents, code review bots, terminal harnesses, AST code intelligence, and IDE developer tools.',
    icon: 'terminal',
    keywords: [
      'coding-agent',
      'code-review',
      'code-generation',
      'terminal-agent',
      'ast-grep',
      'code-graph',
      'ast',
      'debugger',
      'compiler',
      'linter',
      'ide',
      'codebase',
      'refactoring',
      'program-synthesis',
      'code-intelligence',
      'syntax-tree',
      'documentation',
      'docstring',
      'code-search',
      'standards',
      'convention',
      'style',
    ],
    secondaryKeywords: [
      'git',
      'github',
      'terminal',
      'shell',
      'cli',
      'devtools',
      'editor',
      'developer',
    ],
  },
  {
    id: 'browser-web',
    name: 'Browser & Web Search',
    tagline: 'Headless browser automation, scrapers, and web search MCPs',
    description: 'Browser automation engines, Playwright/Puppeteer wrappers, web scrapers, and real-time search APIs.',
    icon: 'globe',
    keywords: [
      'browser',
      'playwright',
      'puppeteer',
      'cdp',
      'scrape',
      'scraper',
      'scraping',
      'crawl',
      'crawler',
      'crawling',
      'firecrawl',
      'tavily',
      'brave-search',
      'serp',
      'spider',
      'web-extract',
      'search',
      'metasearch',
      'seo',
      'duckduckgo',
      'google-search',
      'web-search',
      'downloader',
      'download',
      'extractor',
      'feed',
      'rss',
    ],
  },
  {
    id: 'databases-memory',
    name: 'Databases & Agent Memory',
    tagline: 'SQL/NoSQL engines, vector retrieval layers, and long-term agent memory',
    description: 'Database connectors, vector search databases, knowledge graphs, and long-term memory architectures.',
    icon: 'database',
    keywords: [
      'postgres',
      'postgresql',
      'mysql',
      'sqlite',
      'supabase',
      'redis',
      'mongodb',
      'neo4j',
      'qdrant',
      'milvus',
      'chroma',
      'mem0',
      'zep',
      'memory',
      'knowledge-graph',
      'vector-db',
      'vector',
      'graph-rag',
      'faiss',
      'lance',
      'prisma',
      'convex',
      'dynamodb',
      'elasticsearch',
      'rag',
      'embeddings',
      'embedding',
      'storage',
      'metadata',
      'data-catalog',
      'data-platform',
      'warehouse',
      'lakehouse',
    ],
  },
  {
    id: 'agent-frameworks',
    name: 'Orchestration & Frameworks',
    tagline: 'Multi-agent coordination runtimes, workflow graphs, and MCP gateways',
    description: 'Multi-agent orchestration engines, directed workflow graphs, gateway proxies, and agent runtimes.',
    icon: 'cpu',
    keywords: [
      'langgraph',
      'langchain',
      'autogen',
      'crewai',
      'llamaindex',
      'fastmcp',
      'mcp-gateway',
      'gateway',
      'sdk',
      'swarm',
      'multi-agent',
      'multi-player',
      'orchestrat',
      'orchestrator',
      'orchestration',
      'dify',
      'semantic-kernel',
      'open-webui',
      'vllm',
      'ollama',
      'model-serving',
      'framework',
      'agent-framework',
      'mcpc',
      'proxy',
      'bridge',
      'openapi',
      'desktop-agent',
      'multimodal',
      'harness',
      'runtime',
      'autonomous-agents',
      'autonomous',
      'council',
      'persona',
      'deliberation',
      'learning',
      'desktop',
      'host',
      'hook',
      'client',
    ],
  },
  {
    id: 'productivity-ops',
    name: 'Productivity & Workspace',
    tagline: 'Slack, Notion, Google Workspace, Jira, email, and task management',
    description: 'Connectors for workspace tools, messaging platforms, project trackers, calendar sync, and business operations.',
    icon: 'briefcase',
    keywords: [
      'slack',
      'discord',
      'telegram',
      'notion',
      'gmail',
      'calendar',
      'google-workspace',
      'jira',
      'linear',
      'airtable',
      'n8n',
      'zapier',
      'sheets',
      'email',
      'crm',
      'office365',
      'trello',
      'todoist',
      'workspace',
      'meeting',
      'notes',
      'obsidian',
      'cowork',
      'workflow',
      'productivity',
      'task',
      'todo',
      'automation',
      'home-assistant',
      'smart-home',
      'iot',
      'personal-assistant',
      'assistant',
      'ad',
      'ads',
      'marketing',
      'campaign',
      'advertising',
      'brand',
    ],
  },
  {
    id: 'cloud-infra',
    name: 'Cloud, DevOps & Infra',
    tagline: 'AWS, Cloudflare, Kubernetes, Docker, and observability platforms',
    description: 'Cloud provider integrations, container management, Kubernetes operators, infrastructure-as-code, and observability.',
    icon: 'cloud',
    keywords: [
      'aws',
      'cloudflare',
      'kubernetes',
      'k8s',
      'docker',
      'terraform',
      'vercel',
      'prometheus',
      'grafana',
      'sentry',
      'datadog',
      'telemetry',
      'ci-cd',
      'serverless',
      'minio',
      's3',
      'cloud',
      'devops',
      'infrastructure',
      'deploy',
      'mobilebuildmcp',
      'nixos',
      'linux',
      'system',
      'os',
    ],
  },
  {
    id: 'media-creative',
    name: 'Media, Docs & Creative',
    tagline: 'Document parsing, image/audio/video generation, and diagramming',
    description: 'PDF/office document parsers, generative media tools, Mermaid/SVG diagramming, speech synthesis, and OCR.',
    icon: 'image',
    keywords: [
      'pdf',
      'docx',
      'xlsx',
      'pptx',
      'excel',
      'spreadsheet',
      'resume',
      'mermaid',
      'diagram',
      'image-generation',
      'video',
      'audio',
      'tts',
      'ocr',
      'markdown',
      'slides',
      'document',
      'blender',
      'figma',
      '3d',
      'music',
      'canvas',
      'creative',
      'speech',
      'voice',
      'design',
      'ableton',
      'game',
      'tile',
      'scene',
      'sprite',
      'animation',
    ],
  },
  {
    id: 'security-auth',
    name: 'Security & Identity',
    tagline: 'Vulnerability scanners, secret vaults, sandboxes, and authentication',
    description: 'Vulnerability detection, penetration testing, authentication providers, sandbox execution, and credential vaults.',
    icon: 'shield',
    keywords: [
      'security',
      'pentest',
      'cve',
      'vulnerability',
      'vulnerabilities',
      'oauth',
      'auth0',
      'clerk',
      'vault',
      'sandbox',
      'audit',
      'cryptography',
      'credential',
      'secrets',
      'firewall',
      'token',
      'malware',
      'ghidra',
      'reverse-engineering',
      'reverse',
      'threat',
      'fofa',
      'recon',
      'ida',
      'ida-pro',
      'disassembler',
      'binary',
    ],
  },
  {
    id: 'domain-research',
    name: 'Research, Finance & Domain',
    tagline: 'Academic research, financial market data, legal, and specialized data',
    description: 'ArXiv and paper search, quantitative financial data, legal case analysis, medical knowledge, and specialized domains.',
    icon: 'book-open',
    keywords: [
      'arxiv',
      'paper',
      'research-agent',
      'research',
      'science',
      'scientific',
      'finance',
      'financial',
      'stock',
      'trading',
      'sec-edgar',
      'legal',
      'law',
      'biomedical',
      'medical',
      'weather',
      'flights',
      'flight',
      'academic',
      'tradingview',
      'market-data',
      'economics',
      'trip',
      'travel',
      'government',
      'public-data',
      'geo',
      'map',
      'maps',
    ],
  },
  {
    id: 'other',
    name: 'Other Utilities',
    tagline: 'General agent utilities and miscellaneous toolkits',
    description: 'General-purpose toolkits and utilities not classified under specific domain pillars.',
    icon: 'box',
    keywords: [],
  },
];

const KNOWN_TAG_CANDIDATES = [
  'playwright',
  'puppeteer',
  'postgres',
  'sqlite',
  'redis',
  'mongodb',
  'supabase',
  'qdrant',
  'chroma',
  'milvus',
  'docker',
  'kubernetes',
  'slack',
  'discord',
  'notion',
  'linear',
  'jira',
  'github',
  'git',
  'pdf',
  'aws',
  'cloudflare',
  'langchain',
  'langgraph',
  'autogen',
  'crewai',
  'llamaindex',
  'fastmcp',
  'python',
  'typescript',
  'terminal',
  'research',
  'security',
  'memory',
  'audio',
  'video',
  'ocr',
  'finance',
];

/**
 * Score-weighted multi-keyword category classifier.
 * Evaluates candidates against strict category definitions without bare "agent" or "llm" keywords.
 */
export function classifyCategoryAndTags(params: {
  name: string;
  desc?: string;
  topics?: string[];
  skillName?: string;
  subpath?: string;
}): { categories: string[]; tags: string[] } {
  const nameStr = (params.name || '').toLowerCase();
  const descStr = (params.desc || '').toLowerCase();
  const topicsStr = (params.topics || []).join(' ').toLowerCase();
  const skillStr = (params.skillName || '').toLowerCase();
  const subpathStr = (params.subpath || '').toLowerCase();

  let bestCat = 'other';
  let bestScore = 0;

  for (const cat of CATEGORY_DEFINITIONS) {
    if (cat.id === 'other') continue;

    let score = 0;

    // Primary keywords
    for (const kw of cat.keywords) {
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');

      if (regex.test(nameStr)) score += 3;
      if (regex.test(topicsStr)) score += 3;
      if (regex.test(skillStr)) score += 2;
      if (regex.test(subpathStr)) score += 2;
      if (regex.test(descStr)) score += 1;
    }

    // Secondary keywords (for coding-agents: lower weight so specific domains take priority)
    if (cat.secondaryKeywords) {
      for (const kw of cat.secondaryKeywords) {
        const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b${escaped}\\b`, 'i');

        if (regex.test(nameStr)) score += 1.5;
        if (regex.test(topicsStr)) score += 1.5;
        if (regex.test(skillStr)) score += 1;
        if (regex.test(subpathStr)) score += 1;
        if (regex.test(descStr)) score += 0.5;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestCat = cat.id;
    }
  }

  // Extract up to 4 normalized tags
  const combinedText = `${nameStr} ${descStr} ${topicsStr} ${skillStr} ${subpathStr}`;
  const extractedTags: string[] = [];

  // 1. Check topics first
  for (const t of params.topics || []) {
    const cleanT = t.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (cleanT && !['mcp', 'mcp-server', 'agent', 'agent-skill', 'ai'].includes(cleanT)) {
      if (!extractedTags.includes(cleanT)) {
        extractedTags.push(cleanT);
        if (extractedTags.length >= 4) break;
      }
    }
  }

  // 2. Check known keywords if under 4 tags
  if (extractedTags.length < 4) {
    for (const cand of KNOWN_TAG_CANDIDATES) {
      const regex = new RegExp(`\\b${cand}\\b`, 'i');
      if (regex.test(combinedText) && !extractedTags.includes(cand)) {
        extractedTags.push(cand);
        if (extractedTags.length >= 4) break;
      }
    }
  }

  return {
    categories: [bestCat],
    tags: extractedTags.slice(0, 4),
  };
}
