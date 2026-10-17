import type {
  ToolSpec,
  ToolSubcategory,
  ToolRuntime,
  ToolExecutionMode,
  LaunchSpec,
  CandidateRepo,
} from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';
import { extractFromPackageJson } from '../mcp/from-package-json.js';
import { extractFromPyproject } from '../mcp/from-pyproject.js';
import { extractFromServerJson } from '../mcp/from-server-json.js';
import { extractFromReadme } from '../mcp/from-readme.js';
import { hasPlaceholder } from '../mcp/placeholder.js';

export function detectToolRuntime(paths: string[], repoMeta?: CandidateRepo): ToolRuntime {
  const hasPkg = paths.includes('package.json');
  const hasPy =
    paths.includes('pyproject.toml') ||
    paths.includes('requirements.txt') ||
    paths.includes('setup.py');
  const hasRust = paths.includes('Cargo.toml');
  const hasGo = paths.includes('go.mod');
  const hasDocker = paths.includes('Dockerfile') || paths.includes('docker-compose.yml');

  const detected: ToolRuntime[] = [];
  if (hasPkg) detected.push('node');
  if (hasPy) detected.push('python');
  if (hasRust) detected.push('rust');
  if (hasGo) detected.push('go');

  if (detected.length > 1) return 'multi';
  if (detected.length === 1) return detected[0];
  if (hasDocker) return 'docker';

  if (repoMeta?.language) {
    const lang = repoMeta.language.toLowerCase();
    if (lang === 'typescript' || lang === 'javascript') return 'node';
    if (lang === 'python') return 'python';
    if (lang === 'rust') return 'rust';
    if (lang === 'go') return 'go';
  }

  return 'unknown';
}

export function detectToolSubcategory(
  repoName: string,
  desc: string = '',
  topics: string[] = []
): ToolSubcategory {
  const text = `${repoName} ${desc} ${topics.join(' ')}`.toLowerCase();

  if (/\b(?:desktop|electron|tauri|gui|ui-tars)\b/i.test(text)) {
    return 'desktop_ui';
  }
  if (
    repoName.toLowerCase().endsWith('-sdk') ||
    repoName.toLowerCase().includes('mcp-sdk') ||
    repoName.toLowerCase() === 'fastmcp' ||
    /\bsdk\b/i.test(text)
  ) {
    return 'sdk_harness';
  }
  if (
    /\b(?:coding-agent|code-review|ast|code-graph|debugger|compiler|terminal|shell|cli|coder|git)\b/i.test(
      text
    )
  ) {
    return 'coding_agent';
  }
  if (
    /\b(?:browser|playwright|puppeteer|cdp|scrape|scraper|crawl|firecrawl|scrapling|crawler)\b/i.test(
      text
    )
  ) {
    return 'browser_agent';
  }
  if (
    /\b(?:postgres|mysql|sqlite|supabase|redis|mongodb|qdrant|milvus|chroma|mem0|zep|knowledge-graph|vector-db|memory|rag|vector|embedding)\b/i.test(
      text
    )
  ) {
    return 'memory_rag';
  }
  if (
    /\b(?:eval|evals|benchmark|observability|telemetry|sentry|datadog|tracing|monitor|audit|metrics)\b/i.test(
      text
    )
  ) {
    return 'eval_observability';
  }
  if (
    /\b(?:langgraph|langchain|autogen|crewai|llamaindex|fastmcp|swarm|multi-agent|orchestrator|dify|framework|workflow|orchestration)\b/i.test(
      text
    )
  ) {
    return 'agent_framework';
  }

  return 'other';
}

export function detectToolExecutionMode(
  desc: string = '',
  topics: string[] = []
): ToolExecutionMode {
  const text = `${desc} ${topics.join(' ')}`.toLowerCase();
  const hasCloud = /\b(?:cloud|saas|hosted|managed|serverless|api endpoint)\b/i.test(text);
  const hasLocal = /\b(?:local|cli|desktop|offline|self-hosted|docker|terminal)\b/i.test(text);

  if (hasCloud && hasLocal) return 'hybrid';
  if (hasCloud) return 'cloud';
  return 'local';
}

export async function extractInstallCommand(
  owner: string,
  repo: string,
  paths: string[],
  _runtime: ToolRuntime
): Promise<string> {
  // 1. Try package.json if node manifest exists
  if (paths.includes('package.json')) {
    const content = await fetchFileContent(owner, repo, 'package.json');
    if (content) {
      try {
        const pkg = JSON.parse(content);
        if (pkg.name && !hasPlaceholder(pkg.name) && !pkg.private) {
          if (pkg.bin) {
            return `npx ${pkg.name}`;
          }
          return `npm install ${pkg.name}`;
        }
      } catch {
        // ignore parse error
      }
    }
  }

  // 2. Try pyproject.toml if python manifest exists
  if (paths.includes('pyproject.toml')) {
    const content = await fetchFileContent(owner, repo, 'pyproject.toml');
    if (content) {
      const match = content.match(/name\s*=\s*["']([^"']+)["']/);
      if (match && match[1] && !hasPlaceholder(match[1])) {
        return `pip install ${match[1]}`;
      }
    }
  }

  // 3. Try setup.py if python manifest exists
  if (paths.includes('setup.py')) {
    const content = await fetchFileContent(owner, repo, 'setup.py');
    if (content) {
      const match = content.match(/name\s*=\s*["']([^"']+)["']/);
      if (match && match[1] && !hasPlaceholder(match[1])) {
        return `pip install ${match[1]}`;
      }
    }
  }

  // 4. Try requirements.txt
  if (paths.includes('requirements.txt')) {
    return `git clone https://github.com/${owner}/${repo}.git && cd ${repo} && pip install -r requirements.txt`;
  }

  // 5. Try Cargo.toml
  if (paths.includes('Cargo.toml')) {
    return `cargo install --git https://github.com/${owner}/${repo}.git`;
  }

  // 6. Try go.mod
  if (paths.includes('go.mod')) {
    return `go install github.com/${owner}/${repo}@latest`;
  }

  // 7. Default to git clone
  return `git clone https://github.com/${owner}/${repo}.git`;
}

export async function extractToolSpec(
  owner: string,
  repo: string,
  paths: string[],
  repoMeta?: CandidateRepo
): Promise<ToolSpec> {
  const runtime = detectToolRuntime(paths, repoMeta);
  const subcategory = detectToolSubcategory(
    repo,
    repoMeta?.description || undefined,
    repoMeta?.topics
  );
  const execution_mode = detectToolExecutionMode(
    repoMeta?.description || undefined,
    repoMeta?.topics
  );
  const install_command = await extractInstallCommand(owner, repo, paths, runtime);

  let hasMcpSupport = false;
  let mcpLaunch: LaunchSpec | undefined;

  const serverJsonPath = paths.find((p) => p === 'server.json' || p.endsWith('/server.json'));
  if (serverJsonPath) {
    hasMcpSupport = true;
    const launch = await extractFromServerJson(owner, repo, paths);
    if (launch && launch.confidence !== 'none') {
      mcpLaunch = launch;
    }
  }

  if (paths.includes('package.json')) {
    const pkgLaunch = await extractFromPackageJson(owner, repo, paths);
    if (pkgLaunch && pkgLaunch.confidence !== 'none') {
      hasMcpSupport = true;
      if (!mcpLaunch) mcpLaunch = pkgLaunch;
    }
  }

  if (paths.includes('pyproject.toml')) {
    const pyLaunch = await extractFromPyproject(owner, repo, paths);
    if (pyLaunch && pyLaunch.confidence !== 'none') {
      hasMcpSupport = true;
      if (!mcpLaunch) mcpLaunch = pyLaunch;
    }
  }

  if (!hasMcpSupport) {
    const readmeLaunch = await extractFromReadme(owner, repo, paths);
    if (readmeLaunch && readmeLaunch.confidence !== 'none') {
      hasMcpSupport = true;
      mcpLaunch = readmeLaunch;
    }
  }

  return {
    subcategory,
    install_command,
    runtime,
    execution_mode,
    has_mcp_support: hasMcpSupport,
    mcp_launch: mcpLaunch,
  };
}
