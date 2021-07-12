import FS from 'fs';
import * as TS from 'typescript';
import { format } from 'prettier';
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
  Json: 'JSONString',
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

const { PropertyTypes, ResourceTypes } = CloudFormationResourceSpecificationData;

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
