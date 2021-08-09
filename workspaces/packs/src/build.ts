import { createResourcePack } from '@aws-cf-builder/utils';

export const addBuildPipeline = createResourcePack(({ id }: { id: string }) => {
  return {
    Resources: {
      "CodeBuildRole": {
        "Type": "AWS::IAM::Role",
        "Properties": {
          "AssumeRolePolicyDocument": {
            "Statement": [
              {
                "Effect": "Allow",
                "Principal": {
                  "Service": [
                    "codebuild.amazonaws.com"
                  ]
                },
                "Action": [
                  "sts:AssumeRole"
                ]
              }
            ]
          },
          "Path": "/",
          "Policies": [
            {
              "PolicyName": "codebuild-service",
              "PolicyDocument": {
                "Statement": [
                  {
                    "Effect": "Allow",
                    "Action": "*",
                    "Resource": "*"
                  }
                ],
                "Version": "2012-10-17"
              }
            }
          ]
        }
      },
      "CodePipelineRole": {
        "Type": "AWS::IAM::Role",
        "Properties": {
          "AssumeRolePolicyDocument": {
            "Statement": [
              {
                "Effect": "Allow",
                "Principal": {
                  "Service": [
                    "codepipeline.amazonaws.com"
                  ]
                },
                "Action": [
                  "sts:AssumeRole"
                ]
              }
            ]
          },
          "Path": "/",
          "Policies": [
            {
              "PolicyName": "codepipeline-service",
              "PolicyDocument": {
                "Statement": [
                  {
                    "Action": [
                      "codebuild:*"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                  },
                  {
                    "Action": [
                      "s3:GetObject",
                      "s3:GetObjectVersion",
                      "s3:GetBucketVersioning"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                  },
                  {
                    "Action": [
                      "s3:PutObject"
                    ],
                    "Resource": [
                      "arn:aws:s3:::codepipeline*"
                    ],
                    "Effect": "Allow"
                  },
                  {
                    "Action": [
                      "s3:*",
                      "cloudformation:*",
                      "iam:PassRole"
                    ],
                    "Resource": "*",
                    "Effect": "Allow"
                  }
                ],
                "Version": "2012-10-17"
              }
            }
          ]
        }
      },
      "PipelineBucket": {
        "Type": "AWS::S3::Bucket",
        "DeletionPolicy": "Delete",
        "Properties": {
          "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
              {
                "ServerSideEncryptionByDefault": {
                  "SSEAlgorithm": "AES256"
                }
              }
            ]
          },
          "PublicAccessBlockConfiguration": {
            "BlockPublicAcls": true,
            "BlockPublicPolicy": true,
            "IgnorePublicAcls": true,
            "RestrictPublicBuckets": true
          }
        }
      },
      "CodeBuildDeploySite": {
        "Type": "AWS::CodeBuild::Project",
        "DependsOn": [
          "CodeBuildRole",
          "S3",
          "CloudFront"
        ],
        "Properties": {
          "Name": {
            "Fn::Sub": "${AWS::StackName}-BuildAndDeploySite"
          },
          "Description": "Deploy site to S3",
          "ServiceRole": {
            "Fn::GetAtt": [
              "CodeBuildRole",
              "Arn"
            ]
          },
          "Artifacts": {
            "Type": "CODEPIPELINE"
          },
          "Environment": {
            "Type": {
              "Ref": "BuildType"
            },
            "ComputeType": {
              "Ref": "BuildComputeType"
            },
            "Image": {
              "Fn::Sub": "${BuildImage}"
            },
            "EnvironmentVariables": [
              {
                "Name": "APP_DOMAIN",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "FullDomainName"
                }
              },
              {
                "Name": "API_DOMAIN",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "FullAPIDomainName"
                }
              },
              {
                "Name": "USER_POOL_CLIENT_ID",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "CognitoUserPoolClientId"
                }
              },
              {
                "Name": "USER_POOL_CLIENT_COOKIE_DOMAIN",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "CognitoUserPoolClientCookieDomain"
                }
              },
              {
                "Name": "USER_POOL_CLIENT_DOMAIN",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "CognitoUserPoolClientDomain"
                }
              },
              {
                "Name": "REGION",
                "Type": "PLAINTEXT",
                "Value": {
                  "Ref": "AWS::Region"
                }
              },
              {
                "Name": "OAUTH_CONFIG_DOMAIN",
                "Type": "PLAINTEXT",
                "Value": {
                  "Fn::Sub": [
                    "https://cognito-idp.${UserPoolRegion}.amazonaws.com/${UserPoolID}",
                    {
                      "UserPoolRegion": {
                        "Ref": "AWS::Region"
                      },
                      "UserPoolID": {
                        "Ref": "CognitoUserPoolId"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "Source": {
            "Type": "CODEPIPELINE",
            "BuildSpec": {
              "Fn::Sub": [
                "version: 0.2\nphases:\n  build:\n    commands:\n      - ${ConfigCommand}\n      - \"npm i yarn && npx yarn && API_BASE_URL='https://${FullAPIDomainName}' NODE_ENV=${EnvironmentType} npx yarn workspace @er-candidates/app build\"\n  post_build:\n    commands:\n      - aws s3 cp --recursive --acl public-read ${OutputDirectory} s3://${FullDomainName}/\n      - aws cloudfront create-invalidation --distribution-id \"${DistributionId}\" --paths \"/*\"\n",
                {
                  "DistributionId": {
                    "Ref": "CloudFront"
                  },
                  "FullDomainName": {
                    "Ref": "FullDomainName"
                  },
                  "FullAPIDomainName": {
                    "Ref": "FullAPIDomainName"
                  },
                  "OutputDirectory": {
                    "Ref": "OutputDirectory"
                  }
                }
              ]
            }
          },
          "TimeoutInMinutes": 10
        }
      },
      "Pipeline": {
        "Type": "AWS::CodePipeline::Pipeline",
        "DependsOn": "CodeBuildDeploySite",
        "Properties": {
          "RoleArn": {
            "Fn::GetAtt": [
              "CodePipelineRole",
              "Arn"
            ]
          },
          "Stages": [
            {
              "Name": "Acquire-Source",
              "Actions": [
                {
                  "InputArtifacts": [],
                  "Name": "Source",
                  "ActionTypeId": {
                    "Category": "Source",
                    "Owner": "ThirdParty",
                    "Version": "1",
                    "Provider": "GitHub"
                  },
                  "OutputArtifacts": [
                    {
                      "Name": "SourceOutput"
                    }
                  ],
                  "Configuration": {
                    "Owner": {
                      "Ref": "GitHubUser"
                    },
                    "Repo": {
                      "Ref": "GitHubRepo"
                    },
                    "Branch": {
                      "Ref": "GitHubBranch"
                    },
                    "OAuthToken": {
                      "Ref": "GitHubToken"
                    }
                  },
                  "RunOrder": 1
                }
              ]
            },
            {
              "Name": "Build-And-Deploy",
              "Actions": [
                {
                  "Name": "Artifact",
                  "ActionTypeId": {
                    "Category": "Build",
                    "Owner": "AWS",
                    "Version": "1",
                    "Provider": "CodeBuild"
                  },
                  "InputArtifacts": [
                    {
                      "Name": "SourceOutput"
                    }
                  ],
                  "OutputArtifacts": [
                    {
                      "Name": "DeployOutput"
                    }
                  ],
                  "Configuration": {
                    "ProjectName": {
                      "Ref": "CodeBuildDeploySite"
                    }
                  },
                  "RunOrder": 1
                }
              ]
            }
          ],
          "ArtifactStore": {
            "Type": "S3",
            "Location": {
              "Ref": "PipelineBucket"
            }
          }
        }
      },
    },
  };
});
