import type { LaunchSpec, SkillSpec } from '@web-db/schema';
import type { ClientAdapter, ClientConfigOutput } from './types.js';

export const claudeCodeAdapter: ClientAdapter = {
  id: 'claude-code',
  name: 'Claude Code',

  renderMcp(serverName: string, spec: LaunchSpec): ClientConfigOutput {
    const envObj: Record<string, string> = {};
    const envFlags: string[] = [];

    for (const v of spec.env_vars) {
      const placeholder = v.secret ? `YOUR_${v.name}_HERE` : '';
      envObj[v.name] = placeholder;
      envFlags.push(`-e ${v.name}=${placeholder || '""'}`);
    }

    let mcpCommand = '';
    let mcpSnippet = '';

    if (spec.confidence === 'none' || (!spec.command && !spec.remote_url)) {
      return {
        clientId: 'claude-code',
        clientName: 'Claude Code',
        mcpCommand: '',
        mcpSnippet: '',
      };
    }

    if (spec.transport === 'http' && spec.remote_url) {
      mcpCommand = `claude mcp add --transport http ${serverName} ${spec.remote_url}`;
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
      const cmd = spec.command || 'npx';
      const argsStr = spec.args.length > 0 ? ` ${spec.args.join(' ')}` : '';
      const envPart = envFlags.length > 0 ? ` ${envFlags.join(' ')}` : '';

      mcpCommand = `claude mcp add${envPart} ${serverName} -- ${cmd}${argsStr}`.trim();

      const serverConfig: Record<string, unknown> = {
        command: cmd,
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
      clientId: 'claude-code',
      clientName: 'Claude Code',
      mcpCommand,
      mcpSnippet,
    };
  },

  renderSkill(skillName: string, spec: SkillSpec): ClientConfigOutput {
    const installPath = `.claude/skills/${skillName}/`;
    return {
      clientId: 'claude-code',
      clientName: 'Claude Code',
      skillInstallPath: installPath,
      skillInstructions: `Copy the skill folder "${spec.folder_path}" into "${installPath}" in your workspace.`,
    };
  },
};
