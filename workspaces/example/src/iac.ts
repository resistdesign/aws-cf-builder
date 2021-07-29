import { AWS, CloudFormationTemplate } from '@aws-cf-builder/types';
import { addParameter, createResourcePack } from '@aws-cf-builder/utils';

export const Template: CloudFormationTemplate = {
  AWSTemplateFormatVersion: '2010-09-09',
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

const s3BucketPack = createResourcePack(({ bucketId, bucketName }: { bucketId: string; bucketName: string }) => ({
  Resources: {
    [bucketId]: {
      Type: 'AWS::S3::Bucket',
      Properties: {
        BucketName: bucketName,
      },
    } as AWS.S3.Bucket,
  },
}));

export default s3BucketPack(
  { bucketId: 'MainBucket', bucketName: 'files.example.com' },
  addParameter(
    {
      ParameterId: 'CoolParam',
      Label: 'Cool Parameter',
      Group: 'Only The Cool Params',
      Parameter: {
        Type: 'String',
        Description: 'Something Cool...',
      },
    },
    Template
  )
);
