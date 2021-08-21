import { SimpleCFT } from '@aws-cf-builder/utils';
import { addCDN, addSecureFileStorage } from '@aws-cf-builder/packs';

export default new SimpleCFT()
  .patch({
    Description: 'And example CloudFormation template.',
  })
  .addParameter({
    ParameterId: 'UIDomainName',
    Label: 'UI Domain Name',
    Group: 'UI Parameters',
    Parameter: {
      Type: 'String',
      Description: 'The domain name for the user interface.',
      Default: 'app.example.com',
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
      certificateArn: 'arn:my-demo-cert',
      domainName: {
        Ref: 'UIDomainName',
      },
      fileStorageId: 'UIStaticFiles',
      hostedZoneId: '<example.com-hosted-zone-id>',
    },
    addCDN
  ).template;
