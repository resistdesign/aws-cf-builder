import { CloudFormationTemplate } from '../AWSResourceTypes';

export const Template: CloudFormationTemplate = {
  Resources: {
    APIFunction: {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Role: '',
        Code: {
          ZipFile: '',
        },
      },
    },
  },
};
