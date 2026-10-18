import type { LaunchSpec, SkillSpec } from '@web-db/schema';
import type { ClientAdapter, ClientConfigOutput } from './types.js';

export const codexAdapter: ClientAdapter = {
  id: 'codex',
  name: 'Codex',

  renderMcp(serverName: string, spec: LaunchSpec): ClientConfigOutput {
    let mcpSnippet = '';

    if (spec.confidence === 'none' || (!spec.command && !spec.remote_url)) {
      return {
        clientId: 'codex',
        clientName: 'Codex',
        mcpSnippet: '',
      };
    }

    if (spec.transport === 'http' && spec.remote_url) {
      mcpSnippet = `[mcp_servers.${serverName}]\nurl = "${spec.remote_url}"\ntransport = "http"\n`;
    } else {
      const cmd = spec.command || 'npx';
      const argsFormatted = spec.args.map((a: string) => JSON.stringify(a)).join(', ');

      mcpSnippet = `[mcp_servers.${serverName}]\ncommand = "${cmd}"\nargs = [${argsFormatted}]\n`;

      if (spec.env_vars.length > 0) {
        mcpSnippet += `\n[mcp_servers.${serverName}.env]\n`;
        for (const v of spec.env_vars) {
          const placeholder = v.secret ? `YOUR_${v.name}_HERE` : '';
          mcpSnippet += `${v.name} = "${placeholder}"\n`;
        }
      }
    }

    return {
      clientId: 'codex',
      clientName: 'Codex',
      mcpSnippet: mcpSnippet.trim(),
    };
  },

  renderSkill(skillName: string, spec: SkillSpec): ClientConfigOutput {
    const installPath = `.codex/skills/${skillName}/`;
    return {
      clientId: 'codex',
      clientName: 'Codex',
      skillInstallPath: installPath,
      skillInstructions: `Copy the skill folder "${spec.folder_path}" into "${installPath}" in your workspace.`,
    };
  },
};
