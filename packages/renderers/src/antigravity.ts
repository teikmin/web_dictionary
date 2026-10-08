import type { LaunchSpec, SkillSpec } from '@web-db/schema';
import type { ClientAdapter, ClientConfigOutput } from './types.js';

export const antigravityAdapter: ClientAdapter = {
  id: 'antigravity',
  name: 'Antigravity',

  renderMcp(serverName: string, spec: LaunchSpec): ClientConfigOutput {
    const envObj: Record<string, string> = {};
    for (const v of spec.env_vars) {
      envObj[v.name] = v.secret ? `YOUR_${v.name}_HERE` : '';
    }

    let mcpSnippet = '';

    if (spec.transport === 'http' && spec.remote_url) {
      mcpSnippet = JSON.stringify(
        {
          mcpServers: {
            [serverName]: {
              url: spec.remote_url,
              transport: 'http',
            },
          },
        },
        null,
        2
      );
    } else {
      const serverConfig: Record<string, unknown> = {
        command: spec.command || 'npx',
        args: spec.args,
      };

      if (Object.keys(envObj).length > 0) {
        serverConfig.env = envObj;
      }

      mcpSnippet = JSON.stringify(
        {
          mcpServers: {
            [serverName]: serverConfig,
          },
        },
        null,
        2
      );
    }

    return {
      clientId: 'antigravity',
      clientName: 'Antigravity',
      mcpSnippet,
    };
  },

  renderSkill(skillName: string, spec: SkillSpec): ClientConfigOutput {
    const installPath = `.gemini/skills/${skillName}/`;
    return {
      clientId: 'antigravity',
      clientName: 'Antigravity',
      skillInstallPath: installPath,
      skillInstructions: `Copy the skill folder "${spec.folder_path}" into "${installPath}" or your global Antigravity skills directory.`,
    };
  },
};
