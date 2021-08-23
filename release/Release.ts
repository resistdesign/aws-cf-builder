import Path from 'path';
import { Configuration, Project } from '@yarnpkg/core';
import { PortablePath } from '@yarnpkg/fslib';
import { execute } from '@yarnpkg/shell';

export const Release = async () => {
  const cwd: PortablePath = Path.dirname(__dirname) as PortablePath;
  const config = Configuration.create(cwd, cwd);
  const project = await Project.find(config, cwd);

  for (const w of project.project.workspaces) {
    await execute('yarn version minor', [], {
      cwd: Path.join(cwd, w.relativeCwd) as PortablePath,
    });
  }
};
