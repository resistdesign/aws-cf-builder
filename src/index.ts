import FS from 'fs';
import { format } from 'prettier';
import { CloudFormationResourceSpecification, NamespaceStructure, PropertyType, ResourceType } from './Types';
import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { STANDARD_ALIASES } from './Constants';

const BASE_NAMESPACE_STRUCTURE: NamespaceStructure = {
  path: [],
  aliases: STANDARD_ALIASES,
  propertyTypes: {},
  resourceTypes: {},
  namespaces: {},
};

const NamespaceStructure: NamespaceStructure = getNamespaceStructure(CloudFormationResourceSpecificationData, BASE_NAMESPACE_STRUCTURE);

const TypesContentString = format('', {
  parser: 'typescript',
});

FS.writeFileSync('./AWSResourceTypes.d.ts', TypesContentString, {
  encoding: 'utf8',
});
