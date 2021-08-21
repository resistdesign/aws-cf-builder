import { createResourcePack } from '@aws-cf-builder/utils';
import { AWS } from '@aws-cf-builder/types';

export type AddSecureFileStorageConfig = {
  id: string;
  bucketName?: any;
  shouldDelete?: boolean;
  blockPublicAccess?: boolean;
  cors?: AWS.S3.Bucket['Properties']['CorsConfiguration'] | boolean;
};

/**
 * Add a secure S3 Bucket with an optional parameter to set the bucket name.
 * */
export const addSecureFileStorage = createResourcePack(
  ({ id, bucketName, shouldDelete = true, blockPublicAccess = true, cors = false }: AddSecureFileStorageConfig) => {
    return {
      Resources: {
        [id]: {
          Type: 'AWS::S3::Bucket',
          DeletionPolicy: shouldDelete ? 'Delete' : 'Retain',
          Properties: {
            BucketName: bucketName,
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
      },
    };
  }
);
