import { addBuildPipeline } from './build';

describe('Build', () => {
  describe('addBuildPipeline', () => {
    test('should add a build pipeline', () => {
      const cft = addBuildPipeline(
        {
          id: 'APIBuild',
          label: 'API Build',
          buildSpec: 'echo "build spec"',
        },
        { AWSTemplateFormatVersion: '2010-09-09' }
      );

      expect(cft).toMatchSnapshot();
    });
  });
});
