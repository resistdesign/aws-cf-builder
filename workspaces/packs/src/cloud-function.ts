import { AWS } from '@aws-cf-builder/types';
import { createResourcePack } from '@aws-cf-builder/utils';

export const PLACEHOLDER_FUNCTION_CODE: AWS.Lambda.Function.Code = {
  ZipFile:
    "module.exports = {handler: async () => ({\n            statusCode: 200,\n            headers: {'Content-Type': 'application/json'},\n            body: '\"You did it!\"'\n          })};\n",
};

export type AddCloudFunctionConfig = {
  id: string;
  code?: AWS.Lambda.Function.Code;
  environment?: AWS.Lambda.Function.Environment;
  handler?: any;
  runtime?: any;
  timeout?: any;
  policies?: AWS.IAM.Role.Policy[];
};

export const addCloudFunction = createResourcePack(
  ({
    id,
    code = PLACEHOLDER_FUNCTION_CODE,
    environment = {
      Variables: {
        NODE_ENV: 'production',
      },
    },
    handler = 'index.handler',
    runtime = 'nodejs12.x',
    timeout = 30,
    policies = [
      {
        PolicyName: 'lambda-parameter-store',
        PolicyDocument: {
          Statement: [
            // By default, the lambda can do anything.
            {
              Effect: 'Allow',
              Action: ['*'],
              Resource: '*',
            },
          ],
          Version: '2012-10-17T00:00:00.000Z',
        },
      },
    ],
  }: AddCloudFunctionConfig) => {
    return {
      Resources: {
        [`${id}CloudFunctionRole`]: {
          Type: 'AWS::IAM::Role',
          Properties: {
            ManagedPolicyArns: ['arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'],
            AssumeRolePolicyDocument: {
              Version: '2012-10-17',
              Statement: [
                {
                  Action: ['sts:AssumeRole'],
                  Effect: 'Allow',
                  Principal: {
                    Service: ['lambda.amazonaws.com'],
                  },
                },
              ],
            },
            Policies: policies,
          },
        },
        [`${id}CloudFunction`]: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Timeout: timeout,
            Code: code,
            Environment: environment,
            Handler: handler,
            Role: {
              'Fn::GetAtt': [`${id}CloudFunctionRole`, 'Arn'],
            },
            Runtime: runtime,
          },
        },
      },
    };
  }
);
