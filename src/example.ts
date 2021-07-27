import { AWS } from '../AWSResourceTypes';

export const Func: AWS.Lambda.Function = {
  Type: 'AWS::Lambda::Function',
  Properties: {
    Code: {
      ZipFile: ''
    },
    Role: '',
  },
};
