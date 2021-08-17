import { createResourcePack, SimpleCFT } from '@aws-cf-builder/utils';

export const DEFAULT_AUTH_TYPE = 'COGNITO_USER_POOLS';

export type AddGatewayConfig = {
  id: string;
  cloudFunction: { id: string; region?: string } | { uri: any };
  authorizer?: {
    providerARNs?: string[];
    scopes?: string[];
    type?: 'TOKEN' | 'COGNITO_USER_POOLS' | 'REQUEST';
    identitySource?: string;
  };
};

export const addGateway = createResourcePack(
  ({
    id,
    cloudFunction,
    authorizer,
    authorizer: {
      scopes: authScopes = ['phone', 'email', 'openid', 'profile'],
      type: authType = 'COGNITO_USER_POOLS',
      providerARNs,
      identitySource = 'method.request.header.authorization',
    } = {},
  }: AddGatewayConfig) => {
    const { id: cloudFunctionId, region: cloudFunctionRegion = '${AWS::Region}', uri: cloudFunctionFullUri } = cloudFunction as any;
    const cloudFunctionUri = cloudFunctionFullUri
      ? cloudFunctionFullUri
      : {
          'Fn::Sub': `arn:aws:apigateway:${cloudFunctionRegion}:lambda:path/2015-03-31/functions/\${${cloudFunctionId}.Arn}/invocations`,
        };
    const authorizerId = `${id}CustomAuthorizer`;
    const authProps = !!authorizer
      ? {
          AuthorizationScopes: authScopes,
          AuthorizationType: authType === DEFAULT_AUTH_TYPE ? DEFAULT_AUTH_TYPE : 'CUSTOM',
          AuthorizerId: {
            Ref: authorizerId,
          },
        }
      : undefined;

    return new SimpleCFT()
      .patch({
        Resources: {
          // REST API
          [`${id}GatewayRESTAPI`]: {
            Type: 'AWS::ApiGateway::RestApi',

            Properties: {
              Name: {
                'Fn::Sub': `\${AWS::StackName}-${id}GatewayRESTAPI`,
              },
              EndpointConfiguration: {
                Types: ['EDGE'],
              },
            },
          },
          [`${id}GatewayRESTAPIResource`]: {
            Type: 'AWS::ApiGateway::Resource',
            DependsOn: `${id}GatewayRESTAPI`,
            Properties: {
              ParentId: {
                'Fn::GetAtt': [`${id}GatewayRESTAPI`, 'RootResourceId'],
              },
              PathPart: '{proxy+}',
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
            },
          },
          [`${id}GatewayRESTAPIMethod`]: {
            Type: 'AWS::ApiGateway::Method',
            DependsOn: `${id}GatewayRESTAPIResource`,
            Properties: {
              ...authProps,
              HttpMethod: 'ANY',
              ResourceId: {
                Ref: `${id}GatewayRESTAPIResource`,
              },
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
              Integration: {
                Type: 'AWS_PROXY',
                IntegrationHttpMethod: 'POST',
                Uri: cloudFunctionUri,
              },
            },
          },
          [`${id}GatewayRESTAPIRootMethod`]: {
            Type: 'AWS::ApiGateway::Method',
            DependsOn: `${id}GatewayRESTAPIResource`,
            Properties: {
              ...authProps,
              HttpMethod: 'ANY',
              ResourceId: {
                'Fn::GetAtt': [`${id}GatewayRESTAPI`, 'RootResourceId'],
              },
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
              Integration: {
                Type: 'AWS_PROXY',
                IntegrationHttpMethod: 'POST',
                Uri: cloudFunctionUri,
              },
            },
          },
        },
      })
      .patch({
        Resources: {
          // CORS
          [`${id}GatewayRESTAPIOPTIONSMethod`]: {
            Type: 'AWS::ApiGateway::Method',
            DependsOn: `${id}GatewayRESTAPIResource`,
            Properties: {
              AuthorizationType: 'NONE',
              HttpMethod: 'OPTIONS',
              ResourceId: {
                Ref: `${id}GatewayRESTAPIResource`,
              },
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
              Integration: {
                Type: 'AWS_PROXY',
                IntegrationHttpMethod: 'POST',
                Uri: cloudFunctionUri,
              },
            },
          },
          [`${id}GatewayRESTAPIRootOPTIONSMethod`]: {
            Type: 'AWS::ApiGateway::Method',
            DependsOn: `${id}GatewayRESTAPIResource`,
            Properties: {
              AuthorizationType: 'NONE',
              HttpMethod: 'OPTIONS',
              ResourceId: {
                'Fn::GetAtt': [`${id}GatewayRESTAPI`, 'RootResourceId'],
              },
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
              Integration: {
                Type: 'AWS_PROXY',
                IntegrationHttpMethod: 'POST',
                Uri: cloudFunctionUri,
              },
            },
          },
          [`${id}GatewayResponseDefault4XX`]: {
            Type: 'AWS::ApiGateway::GatewayResponse',
            Properties: {
              ResponseParameters: {
                // Not authorized, so just allow the current origin by mapping it into the header.
                'gatewayresponse.header.Access-Control-Allow-Origin': 'method.request.header.origin',
                'gatewayresponse.header.Access-Control-Allow-Credentials': "'true'",
                'gatewayresponse.header.Access-Control-Allow-Headers': "'*'",
              },
              ResponseType: 'DEFAULT_4XX',
              RestApiId: {
                Ref: `${id}GatewayRESTAPI`,
              },
            },
          },
        },
      })
      .patch({
        Resources: {
          // SUPPORTING RESOURCES
          [`${id}GatewayRESTAPIDeployment`]: {
            Type: 'AWS::ApiGateway::Deployment',
            DependsOn: [
              'APIGatewayRESTAPIResource',
              'APIGatewayRESTAPIMethod',
              'APIGatewayRESTAPIRootMethod',
              'APIGatewayRESTAPI',
              'APICloudFunction',
            ],
            Properties: {
              RestApiId: {
                Ref: 'APIGatewayRESTAPI',
              },
            },
          },
          [`${id}CloudWatch`]: {
            Type: 'AWS::Logs::LogGroup',
            Properties: {
              // TODO: Fix!
              LogGroupName: '',
            },
          },
          [`${id}CloudWatchRole`]: {
            Type: 'AWS::IAM::Role',
            Properties: {
              AssumeRolePolicyDocument: {
                Version: '2012-10-17T00:00:00.000Z',
                Statement: [
                  {
                    Effect: 'Allow',
                    Principal: {
                      Service: ['apigateway.amazonaws.com'],
                    },
                    Action: 'sts:AssumeRole',
                  },
                ],
              },
              Path: '/',
              ManagedPolicyArns: ['arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs'],
            },
          },
          [`${id}CloudWatchAccount`]: {
            Type: 'AWS::ApiGateway::Account',
            Properties: {
              // TODO: Fix!
              CloudWatchRoleArn: '',
            },
          },
          [`${id}GatewayRESTAPIEnvironment`]: {
            Type: 'AWS::ApiGateway::Stage',
            DependsOn: ['APICloudWatchAccount', 'APIGatewayRESTAPIDeployment'],
            Properties: {
              AccessLogSetting: {
                DestinationArn: {
                  'Fn::GetAtt': ['APICloudWatch', 'Arn'],
                },
                Format:
                  '{"requestId":"$context.requestId","ip":"$context.identity.sourceIp","caller":"$context.identity.caller","user":"$context.identity.user","requestTime":"$context.requestTime","httpMethod":"$context.httpMethod","resourcePath":"$context.resourcePath","status":"$context.status","protocol":"$context.protocol","responseLength":"$context.responseLength","apiGatewayErrorMessage":"$context.error.message"}',
              },
              DeploymentId: {
                Ref: 'APIGatewayRESTAPIDeployment',
              },
              RestApiId: {
                Ref: 'APIGatewayRESTAPI',
              },
              // TODO: Fix!
              StageName: '',
            },
          },
        },
      })
      .patch({
        Resources: {
          // DNS
          [`${id}DomainName`]: {
            Type: 'AWS::ApiGateway::DomainName',
            Properties: {
              // TODO: Fix!
              CertificateArn: '',
              DomainName: {
                'Fn::Sub': [
                  '${DomainName}',
                  {
                    // TODO: Fix!
                    DomainName: '',
                  },
                ],
              },
              EndpointConfiguration: {
                Types: ['EDGE'],
              },
            },
          },
          [`${id}DomainNameBasePathMapping`]: {
            Type: 'AWS::ApiGateway::BasePathMapping',
            DependsOn: ['APIGatewayRESTAPI', 'APIGatewayRESTAPIEnvironment', 'APIDomainName'],
            Properties: {
              DomainName: {
                'Fn::Sub': [
                  '${DomainName}',
                  {
                    // TODO: Fix!
                    DomainName: '',
                  },
                ],
              },
              RestApiId: {
                Ref: 'APIGatewayRESTAPI',
              },
              // TODO: Fix!
              Stage: '',
            },
          },
          [`${id}Route53Record`]: {
            Type: 'AWS::Route53::RecordSet',
            DependsOn: 'APIDomainName',
            Properties: {
              // TODO: Fix!
              HostedZoneId: '',
              Type: 'A',
              Name: {
                'Fn::Sub': [
                  '${DomainName}.',
                  {
                    // TODO: Fix!
                    DomainName: '',
                  },
                ],
              },
              AliasTarget: {
                HostedZoneId: 'Z2FDTNDATAQYW2',
                DNSName: {
                  'Fn::Sub': [
                    '${DomainName}.',
                    {
                      // TODO: Fix!
                      DomainName: '',
                    },
                  ],
                },
              },
            },
          },
        },
      })
      .patch({
        Resources: {
          // PERMISSIONS
          [`${id}CloudFunctionANYResourcePermission`]: {
            Type: 'AWS::Lambda::Permission',
            Properties: {
              Action: 'lambda:InvokeFunction',
              Principal: 'apigateway.amazonaws.com',
              FunctionName: {
                Ref: 'APICloudFunction',
              },
              SourceArn: {
                'Fn::Sub': [
                  'arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:${__ApiId__}/${__Stage__}/*/*',
                  {
                    // TODO: Fix!
                    __Stage__: '',
                    __ApiId__: {
                      Ref: 'APIGatewayRESTAPI',
                    },
                  },
                ],
              },
            },
          },
        },
      })
      .patch(
        !!authorizer
          ? {
              Resources: {
                // AUTHORIZER
                [`${id}CustomAuthorizer`]: {
                  Type: 'AWS::ApiGateway::Authorizer',
                  Properties: {
                    IdentitySource: identitySource,
                    Name: `${id}CustomAuthorizer`,
                    ProviderARNs: providerARNs,
                    RestApiId: {
                      Ref: `${id}GatewayRESTAPI`,
                    },
                    Type: 'COGNITO_USER_POOLS',
                  },
                },
              },
            }
          : {}
      ).template;
  }
);
