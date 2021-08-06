import { addParameter, createResourcePack } from '@aws-cf-builder/utils';
import { AWS, CloudFormationTemplate } from '@aws-cf-builder/types';

export const secureFileStorage = createResourcePack(
  ({
    id,
    label,
    delete: shouldDelete = true,
    blockPublicAccess = true,
    cors = false,
  }: {
    id: string;
    label: string;
    delete?: boolean;
    blockPublicAccess?: boolean;
    cors?: AWS.S3.Bucket['Properties']['CorsConfiguration'] | boolean;
  }) => {
    const ParameterId = `${id}Name`;

    return addParameter(
      {
        ParameterId,
        Group: `${label} Parameters`,
        Label: `${label} Name`,
        Parameter: {
          Type: 'String',
          Description: 'The name of the file storage resource.',
        },
      },
      {
        Resources: {
          [id]: {
            Type: 'AWS::S3::Bucket',
            DeletionPolicy: shouldDelete ? 'Delete' : 'Retain',
            Properties: {
              BucketName: {
                Ref: ParameterId,
              },
              CorsConfiguration:
                typeof cors === 'object'
                  ? cors
                  : cors === true
                  ? {
                      CorsRules: [
                        {
                          AllowedHeaders: ['*'],
                          AllowedMethods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
                          AllowedOrigins: ['*'],
                        },
                      ],
                    }
                  : undefined,
              BucketEncryption: {
                ServerSideEncryptionConfiguration: [
                  {
                    ServerSideEncryptionByDefault: {
                      SSEAlgorithm: 'AES256',
                    },
                  },
                ],
              },
              PublicAccessBlockConfiguration: blockPublicAccess
                ? {
                    BlockPublicAcls: true,
                    BlockPublicPolicy: true,
                    IgnorePublicAcls: true,
                    RestrictPublicBuckets: true,
                  }
                : undefined,
            },
          },
        } as CloudFormationTemplate['Resources'],
      } as any
    );
  }
);
