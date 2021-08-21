import { createResourcePack, SimpleCFT } from '@aws-cf-builder/utils';
import { addCDN, addSecureFileStorage } from '@aws-cf-builder/packs';

const addBasicOutput = createResourcePack(({ info = '' }: { info: string }) => ({
  Outputs: {
    Info: {
      Description: 'Basic information.',
      Export: {
        Name: 'Info',
      },
      Value: info,
    },
  },
}));

export default addBasicOutput(
  { info: 'This stack was created with AWS CF Builder.' },
  new SimpleCFT()
    .patch({
      Description: 'And example CloudFormation template.',
    })
    .addParameterGroup({
      Label: 'UI Parameters',
      Parameters: {
        UIDomainName: {
          Label: 'UI Domain Name',
          Type: 'String',
          Description: 'The domain name for the user interface.',
          Default: 'app.example.com',
        },
      },
    })
    .applyPack(
      {
        id: 'UIStaticFiles',
        cors: true,
      },
      addSecureFileStorage
    )
    .applyPack(
      {
        id: 'UICDN',
        certificateArn: 'arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012',
        domainName: {
          Ref: 'UIDomainName',
        },
        fileStorageId: 'UIStaticFiles',
        hostedZoneId: '<example.com-hosted-zone-id>',
      },
      addCDN
    ).template
);
