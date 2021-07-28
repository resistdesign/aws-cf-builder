import { CloudFormationTemplate } from '@aws-cf-builder/types';

export const Template: CloudFormationTemplate = {
  AWSTemplateFormatVersion: '2010-09-09',
  Description: 'An example template.',
  Parameters: {
    MyParam: {
      Type: 'String',
    },
  },
  Conditions: {
    Other: {},
  },
  Resources: {
    APIFunction: {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Role: '',
        Code: {
          ZipFile: {
            'Fn::Sub': [
              'Data: ${data}',
              {
                data: 'Interpolated data.',
              },
            ],
          },
        },
      },
    },
  },
};

export default Template;
