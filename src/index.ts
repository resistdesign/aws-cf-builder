import FS from 'fs';
import * as TS from 'typescript';
import { format } from 'prettier';
import { CloudFormationResourceSpecification, PropertyType, ResourceType } from './Types';
import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';

type PropertyTypeMap = {
  [PropertyName: string]: string;
};
type ResourceTypeMap = {
  [ResourceType: string]: PropertyTypeMap | string;
};

const TOP_LEVEL_TYPES = ['List', 'Map', 'Tag'];
const PRIMITIVE_TYPE_MAP: Record<string, string> = {
  String: 'string',
  Integer: 'number',
  Boolean: 'boolean',
  Double: 'number',
  Json: 'Json',
  Timestamp: 'Timestamp',
  Long: 'number',
};
const getPrimitiveType = (inputPrimType: string | undefined): string | undefined => {
  if (typeof inputPrimType === 'undefined') {
    return undefined;
  }

  const primType = PRIMITIVE_TYPE_MAP[inputPrimType];

  if (!primType) {
    throw new Error(`Unsupported primitive type "${inputPrimType}".`);
  }

  return primType;
};
const getTypeWithItemType = (type: string, itemType: string): string =>
  type === 'Map' ? `Record<string, ${itemType}>` : type === 'List' ? `${itemType}[]` : `${type}<${itemType}>`;

type NamespaceStructure = {
  path: string[];
  aliases?: string[];
  propertyTypes?: Record<string, PropertyType>;
  resourceTypes?: Record<string, ResourceType>;
  namespaces?: Record<string, NamespaceStructure>;
};
const BASE_NAMESPACE_STRUCTURE: NamespaceStructure = {
  path: [],
  aliases: ['export type Json = string;', 'export type Timestamp = string;'],
  propertyTypes: {},
  resourceTypes: {},
  namespaces: {},
};

const getNamespaceStructure = (specification: CloudFormationResourceSpecification, baseStructure: NamespaceStructure): NamespaceStructure => {
  const newStructure: NamespaceStructure = {
    ...baseStructure,
  };
  const { PropertyTypes, ResourceTypes } = specification;
  const propertyTypesKeys = Object.keys(PropertyTypes);
  const resourceTypesKeys = Object.keys(ResourceTypes);

  for (const pTK of propertyTypesKeys) {
    const fullPropertyTypeNameParts = pTK.replace(/::/gim, () => '.').split('.');
    const propType: PropertyType = PropertyTypes[pTK];
    const currentPath: string[] = [];

    let targetNamespace: NamespaceStructure = newStructure;

    for (let i = 0; i < fullPropertyTypeNameParts.length; i++) {
      const part = fullPropertyTypeNameParts[i];

      currentPath.push(part);

      if (i === fullPropertyTypeNameParts.length - 1) {
        targetNamespace.propertyTypes = targetNamespace.propertyTypes || {};
        targetNamespace.propertyTypes[part] = propType;
      } else {
        targetNamespace.namespaces = targetNamespace.namespaces || {};
        targetNamespace.namespaces[part] = targetNamespace.namespaces[part] || { path: [...currentPath] };
        targetNamespace = targetNamespace.namespaces[part];
      }
    }
  }

  for (const rTK of resourceTypesKeys) {
    const fullResourceTypeNameParts = rTK.split('::');
    const resType: ResourceType = ResourceTypes[rTK];
    const currentPath: string[] = [];

    let targetNamespace: NamespaceStructure = newStructure;

    for (let i = 0; i < fullResourceTypeNameParts.length; i++) {
      const part = fullResourceTypeNameParts[i];

      currentPath.push(part);

      if (i === fullResourceTypeNameParts.length - 1) {
        targetNamespace.resourceTypes = targetNamespace.resourceTypes || {};
        targetNamespace.resourceTypes[part] = resType;
      } else {
        targetNamespace.namespaces = targetNamespace.namespaces || {};
        targetNamespace.namespaces[part] = targetNamespace.namespaces[part] || { path: [...currentPath] };
        targetNamespace = targetNamespace.namespaces[part];
      }
    }
  }

  return newStructure;
};

const NamespaceStructure: NamespaceStructure = getNamespaceStructure(CloudFormationResourceSpecificationData, BASE_NAMESPACE_STRUCTURE);

const getDiagnosticsForText = (text: string) => {
  const dummyFilePath = '/file.ts';
  const textAst = TS.createSourceFile(dummyFilePath, text, TS.ScriptTarget.Latest);
  const options: TS.CompilerOptions = {};
  const host: TS.CompilerHost = {
    fileExists: (filePath) => filePath === dummyFilePath,
    directoryExists: (dirPath) => dirPath === '/',
    getCurrentDirectory: () => '/',
    getDirectories: () => [],
    getCanonicalFileName: (fileName) => fileName,
    getNewLine: () => '\n',
    getDefaultLibFileName: () => '',
    getSourceFile: (filePath) => (filePath === dummyFilePath ? textAst : undefined),
    readFile: (filePath) => (filePath === dummyFilePath ? text : undefined),
    useCaseSensitiveFileNames: () => true,
    writeFile: () => {},
  };
  const program = TS.createProgram({
    options,
    rootNames: [dummyFilePath],
    host,
  });

  return TS.getPreEmitDiagnostics(program);
};
const TypesContentString = format('', {
  parser: 'typescript',
});

console.log(getDiagnosticsForText(TypesContentString).map((d) => d.messageText));

FS.writeFileSync('./AWSResourceTypes.d.ts', TypesContentString, {
  encoding: 'utf8',
});
