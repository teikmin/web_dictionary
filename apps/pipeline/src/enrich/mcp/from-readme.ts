import type { LaunchSpec, EnvVar } from '@web-db/schema';
import { fetchFileContent } from '../../sources/github-contents.js';

export async function extractFromReadme(
  owner: string,
  repo: string,
  paths: string[]
): Promise<LaunchSpec | null> {
  const readmePath = paths.find((p) => /^readme\.md$/i.test(p));
  if (!readmePath) return null;

  const content = await fetchFileContent(owner, repo, readmePath);
  if (!content) return null;

  // 1. Check for JSON code blocks containing mcpServers
  const jsonBlocks = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/g);
  if (jsonBlocks) {
    for (const block of jsonBlocks) {
      const raw = block.replace(/```(?:json)?/g, '').replace(/```/g, '').trim();
      try {
        const parsed = JSON.parse(raw);
        if (parsed.mcpServers) {
          const keys = Object.keys(parsed.mcpServers);
          if (keys.length > 0) {
            const s = parsed.mcpServers[keys[0]];
            if (s && (s.command || s.url)) {
              return {
                transport: s.url ? 'http' : s.transport || 'stdio',
                command: s.command,
                args: Array.isArray(s.args) ? s.args : [],
                remote_url: s.url,
                env_vars: s.env
                  ? Object.keys(s.env).map((k) => ({
                      name: k,
                      required: true,
                      secret: true,
                      description: `Environment variable for ${k}`,
                    }))
                  : [],
                confidence: 'readme',
              };
            }
          }
        }

        if (parsed.command && Array.isArray(parsed.args)) {
          return {
            transport: 'stdio',
            command: parsed.command,
            args: parsed.args,
            env_vars: parsed.env
              ? Object.keys(parsed.env).map((k) => ({
                  name: k,
                  required: true,
                  secret: true,
                }))
              : [],
            confidence: 'readme',
          };
        }
      } catch {
        // ignore parse error in this block
      }
    }
  }

  // 2. Check for `claude mcp add` in README
  const claudeAddMatch = content.match(
    /claude mcp add\s+(?:--[^\s]+\s+)*([^\s]+)\s+--\s+([^\n\r]+)/
  );
  if (claudeAddMatch) {
    const fullCmd = claudeAddMatch[2].trim();
    const parts = fullCmd.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    return {
      transport: 'stdio',
      command,
      args,
      env_vars: extractEnvVarsFromText(content),
      confidence: 'readme',
    };
  }

  // 3. Check for `docker run ... <image>`
  const dockerMatch = content.match(/docker run (?:-[^\s]+ )*([a-zA-Z0-9._/-]+mcp[a-zA-Z0-9._/-]*)/);
  if (dockerMatch) {
    const image = dockerMatch[1];
    return {
      transport: 'stdio',
      command: 'docker',
      args: ['run', '-i', '--rm', image],
      env_vars: extractEnvVarsFromText(content),
      confidence: 'readme',
    };
  }

  // 4. Check for `npx -y <pkg>` or `uvx <pkg>` in code blocks
  const npxMatch = content.match(/(?:npx\s+(?:-y\s+)?([@a-zA-Z0-9_/-]+))/);
  if (npxMatch && (content.includes('mcp') || content.includes('Model Context Protocol'))) {
    const pkg = npxMatch[1];
    return {
      transport: 'stdio',
      command: 'npx',
      args: ['-y', pkg],
      env_vars: extractEnvVarsFromText(content),
      confidence: 'readme',
    };
  }

  const uvxMatch = content.match(/(?:uvx\s+([a-zA-Z0-9_/-]+))/);
  if (uvxMatch && (content.includes('mcp') || content.includes('Model Context Protocol'))) {
    const pkg = uvxMatch[1];
    return {
      transport: 'stdio',
      command: 'uvx',
      args: [pkg],
      env_vars: extractEnvVarsFromText(content),
      confidence: 'readme',
    };
  }

  return null;
}

function extractEnvVarsFromText(text: string): EnvVar[] {
  const envVars: EnvVar[] = [];
  const foundNames = new Set<string>();

  const matches = text.match(/[A-Z0-9_]{3,}_(KEY|TOKEN|SECRET|API_KEY|CREDENTIALS|ID)\b/g);
  if (matches) {
    for (const name of matches) {
      if (!foundNames.has(name) && !['GITHUB_TOKEN'].includes(name)) {
        foundNames.add(name);
        envVars.push({
          name,
          required: true,
          secret: true,
          description: `Required credentials for ${name}`,
        });
      }
    }
  }

  return envVars;
}
