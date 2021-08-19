import { addParameter, createResourcePack } from '@aws-cf-builder/utils';
import { AWS, CloudFormationTemplate } from '@aws-cf-builder/types';

export type AddSecureFileStorageConfig = {
  id: string;
  bucketName?: AWS.S3.Bucket['Properties']['BucketName'] | boolean;
  label?: string;
  group?: string;
  delete?: boolean;
  blockPublicAccess?: boolean;
  cors?: AWS.S3.Bucket['Properties']['CorsConfiguration'] | boolean;
};

/**
 * Add a secure S3 Bucket with an optional parameter to set the bucket name.
 * */
export const addSecureFileStorage = createResourcePack(
  ({ id, bucketName = false, label, group, delete: shouldDelete = true, blockPublicAccess = true, cors = false }: AddSecureFileStorageConfig) => {
    const cleanLabel = !!label ? label : id;
    const ParameterId = `${id}Name`;
    const stackPatch = {
      Resources: {
        [id]: {
          Type: 'AWS::S3::Bucket',
          DeletionPolicy: shouldDelete ? 'Delete' : 'Retain',
          Properties: {
            BucketName:
              bucketName === true
                ? {
                    Ref: ParameterId,
                  }
                : bucketName === false
                ? undefined
                : bucketName,
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
    };

    return bucketName === true
      ? addParameter(
          {
            ParameterId,
            Group: !!group ? group : `${cleanLabel} Parameters`,
            Label: `${cleanLabel} Name`,
            Parameter: {
              Type: 'String',
              Description: 'The name of the file storage resource.',
            },
          },
          stackPatch as any
        )
      : stackPatch;
  }
);
