import { AWS } from '@aws-cf-builder/types';

export const PLACEHOLDER_FUNCTION_CODE: AWS.Lambda.Function.Code = {
  ZipFile:
    "module.exports = {handler: async () => ({\n            statusCode: 200,\n            headers: {'Content-Type': 'application/json'},\n            body: '\"You did it!\"'\n          })};\n",
};

export type AddCloudFunctionConfig = {
  id: string;
  code?: AWS.Lambda.Function.Code;
};

export const addCloudFunction = ({ id, code = PLACEHOLDER_FUNCTION_CODE }) => {
  return {
    Resources: {
      APICloudFunctionRole: {
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
          Policies: [
            {
              PolicyName: 'lambda-parameter-store',
              PolicyDocument: {
                Statement: [
                  {
                    Effect: 'Allow',
                    Action: ['ssm:GetParameter*'],
                    // TODO: Fix this!
                    Resource: null,
                  },
                ],
                Version: '2012-10-17T00:00:00.000Z',
              },
            },
          ],
        },
      },
      APICloudFunction: {
        Type: 'AWS::Lambda::Function',
        Properties: {
          Timeout: 30,
          Code: code,
          Environment: {
            Variables: {
              // TODO: Fix this!
              NODE_ENV: null,
              // TODO: Fix this!
              CLIENT_ORIGIN: null,
              // TODO: Fix this!
              API_CONFIG_PARAMETER_PATH: null,
            },
          },
          Handler: 'index.handler',
          Role: {
            'Fn::GetAtt': ['APICloudFunctionRole', 'Arn'],
          },
          Runtime: 'nodejs12.x',
        },
      },
    },
  };
};
