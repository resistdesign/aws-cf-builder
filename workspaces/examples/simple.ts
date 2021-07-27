import { CloudFormationTemplate } from '../dist';

export const Template: CloudFormationTemplate = {
  AWSTemplateFormatVersion: '39.5.0',
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
