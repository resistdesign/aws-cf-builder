import { program } from 'commander';

export const CLI = (packageInfo: { version: string } = { version: '0.0.0' }) => {
  const { version = '0.0.0' } = packageInfo;

  program.version(version);
};
