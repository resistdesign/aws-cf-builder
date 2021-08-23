import { Configuration, PluginConfiguration, Project } from '@yarnpkg/core';
import { PortablePath } from '@yarnpkg/fslib';

export const Deploy = async () => {
  const cwd: PortablePath = `${process.cwd()}` as PortablePath;
  const config = Configuration.create(cwd, cwd);
  const project = await Project.find(config, cwd);

  console.log(
    JSON.stringify(
      project.project.workspaces.map(({ relativeCwd, locator }) => ({
        name: locator?.name,
        relativeCwd,
      })),
      null,
      2
    )
  );
};
