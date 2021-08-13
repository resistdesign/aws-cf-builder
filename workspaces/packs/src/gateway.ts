import { createResourcePack } from '@aws-cf-builder/utils';

export const addGateway = createResourcePack(({ id }: { id: string }) => {
  return {
    Resources: {
      // REST API
      [`${id}GatewayRESTAPI`]: {
        Type: 'AWS::ApiGateway::RestApi',
        Properties: {
          Name: null,
          EndpointConfiguration: {
            Types: ['EDGE'],
          },
        },
      },
      [`${id}GatewayRESTAPIResource`]: {
        Type: 'AWS::ApiGateway::Resource',
        DependsOn: 'APIGatewayRESTAPI',
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
        DependsOn: 'APIGatewayRESTAPIResource',
        Properties: {
          AuthorizationScopes: ['phone', 'email', 'openid', 'profile'],
          AuthorizationType: 'COGNITO_USER_POOLS',
          AuthorizerId: {
            // TODO: What?! :P
            Ref: 'APICustomAuthorizer',
          },
          HttpMethod: 'ANY',
          ResourceId: {
            Ref: 'APIGatewayRESTAPIResource',
          },
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
          Integration: {
            Type: 'AWS_PROXY',
            IntegrationHttpMethod: 'POST',
            Uri: {
              // TODO: Cloud function arn.
              'Fn::Sub': 'arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${APICloudFunction.Arn}/invocations',
            },
          },
        },
      },
      [`${id}GatewayRESTAPIRootMethod`]: {
        Type: 'AWS::ApiGateway::Method',
        DependsOn: 'APIGatewayRESTAPIResource',
        Properties: {
          AuthorizationScopes: ['phone', 'email', 'openid', 'profile'],
          AuthorizationType: 'COGNITO_USER_POOLS',
          AuthorizerId: null,
          HttpMethod: 'ANY',
          ResourceId: {
            'Fn::GetAtt': ['APIGatewayRESTAPI', 'RootResourceId'],
          },
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
          Integration: {
            Type: 'AWS_PROXY',
            IntegrationHttpMethod: 'POST',
            Uri: {
              'Fn::Sub': 'arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${APICloudFunction.Arn}/invocations',
            },
          },
        },
      },
      // CORS
      [`${id}GatewayRESTAPIOPTIONSMethod`]: {
        Type: 'AWS::ApiGateway::Method',
        DependsOn: 'APIGatewayRESTAPIResource',
        Properties: {
          AuthorizationType: 'NONE',
          HttpMethod: 'OPTIONS',
          ResourceId: {
            Ref: 'APIGatewayRESTAPIResource',
          },
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
          Integration: {
            Type: 'AWS_PROXY',
            IntegrationHttpMethod: 'POST',
            Uri: {
              'Fn::Sub': 'arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${APICloudFunction.Arn}/invocations',
            },
          },
        },
      },
      [`${id}GatewayRESTAPIRootOPTIONSMethod`]: {
        Type: 'AWS::ApiGateway::Method',
        DependsOn: 'APIGatewayRESTAPIResource',
        Properties: {
          AuthorizationType: 'NONE',
          HttpMethod: 'OPTIONS',
          ResourceId: {
            'Fn::GetAtt': ['APIGatewayRESTAPI', 'RootResourceId'],
          },
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
          Integration: {
            Type: 'AWS_PROXY',
            IntegrationHttpMethod: 'POST',
            Uri: {
              'Fn::Sub': 'arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${APICloudFunction.Arn}/invocations',
            },
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
          RestApiId: null,
        },
      },
      // SUPPORTING RESOURCES
      [`${id}GatewayRESTAPIDeployment`]: {
        Type: 'AWS::ApiGateway::Deployment',
        DependsOn: ['APIGatewayRESTAPIResource', 'APIGatewayRESTAPIMethod', 'APIGatewayRESTAPIRootMethod', 'APIGatewayRESTAPI', 'APICloudFunction'],
        Properties: {
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
        },
      },
      [`${id}CloudWatch`]: {
        Type: 'AWS::Logs::LogGroup',
        Properties: {
          LogGroupName: null,
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
          CloudWatchRoleArn: null,
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
          StageName: null,
        },
      },
      // DNS
      [`${id}DomainName`]: {
        Type: 'AWS::ApiGateway::DomainName',
        Properties: {
          CertificateArn: null,
          DomainName: {
            'Fn::Sub': [
              '${DomainName}',
              {
                DomainName: null,
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
                DomainName: null,
              },
            ],
          },
          RestApiId: {
            Ref: 'APIGatewayRESTAPI',
          },
          Stage: null,
        },
      },
      [`${id}Route53Record`]: {
        Type: 'AWS::Route53::RecordSet',
        DependsOn: 'APIDomainName',
        Properties: {
          HostedZoneId: null,
          Type: 'A',
          Name: {
            'Fn::Sub': [
              '${DomainName}.',
              {
                DomainName: null,
              },
            ],
          },
          AliasTarget: {
            HostedZoneId: 'Z2FDTNDATAQYW2',
            DNSName: {
              'Fn::Sub': [
                '${DomainName}.',
                {
                  DomainName: null,
                },
              ],
            },
          },
        },
      },
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
                __Stage__: null,
                __ApiId__: {
                  Ref: 'APIGatewayRESTAPI',
                },
              },
            ],
          },
        },
      },
      // AUTHORIZER
      [`${id}CustomAuthorizer`]: {
        // TODO: Should this be pulled out on its own?
        Type: 'AWS::ApiGateway::Authorizer',
        Properties: {
          IdentitySource: 'method.request.header.authorization',
          Name: `${id}CustomAuthorizer`,
          ProviderARNs: [null],
          RestApiId: null,
          Type: 'COGNITO_USER_POOLS',
        },
      },
    },
  };
});
