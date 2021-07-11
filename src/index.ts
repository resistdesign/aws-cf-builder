import FS from 'fs';
import * as TS from 'typescript';
import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap, CFResourceTypePropertyMap } from './Types';

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
const getPrimitiveType = (
  inputPrimType: string | undefined
): string | undefined => {
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
  type === 'Map'
    ? `Record<string, ${itemType}>`
    : type === 'List'
    ? `${itemType}[]`
    : `${type}<${itemType}>`;

const { PropertyTypes, ResourceTypes } =
  CloudFormationResourceSpecificationData;
const Combo: CFResourceTypeMap = {
  ...PropertyTypes,
  ...ResourceTypes,
};
const GET_PROP_REDUCER =
  (t: string, propsObj: CFResourceTypePropertyMap) =>
  (acc: PropertyTypeMap, p: string) => {
    const {
      Type,
      PrimitiveType,
      ItemType,
      PrimitiveItemType,
      Required = false,
    } = propsObj[p];
    const typeDomain = t.split('.')[0] || '';
    const itemTypePrefix =
      ItemType &&
      ItemType.indexOf('.') === -1 &&
      TOP_LEVEL_TYPES.indexOf(ItemType) === -1
        ? `${typeDomain}.`
        : '';
    const mainTypePrefix =
      Type && Type.indexOf('.') === -1 && TOP_LEVEL_TYPES.indexOf(Type) === -1
        ? `${typeDomain}.`
        : '';
    const itemType = ItemType
      ? `${itemTypePrefix}${ItemType}`
      : getPrimitiveType(PrimitiveItemType);
    const mainType = Type
      ? `${mainTypePrefix}${Type}`
      : getPrimitiveType(PrimitiveType);
    const fullType =
      itemType && mainType
        ? getTypeWithItemType(mainType, itemType)
        : itemType || mainType;

    acc[p] = `${Required ? '' : '?'}: ${fullType ? fullType : 'any'}`;

    return acc;
  };
const GET_RESOURCE_REDUCER =
  (combo: CFResourceTypeMap) => (acc: ResourceTypeMap, t: string) => {
    const propsObj = combo[t].Properties;

    if (propsObj) {
      acc[t] = Object.keys(propsObj).reduce(
        GET_PROP_REDUCER(t, propsObj),
        {} as PropertyTypeMap
      );
    } else {
      // Parse Resources w/o Properties, but w/ direct properties.
      acc[t] = GET_PROP_REDUCER(t, combo)({}, t)[t];
    }

    return acc;
  };
const ResourceTypeMapData: ResourceTypeMap = Object.keys(Combo).reduce(
  GET_RESOURCE_REDUCER(Combo),
  {} as ResourceTypeMap
);
const PackageStructure: Record<any, any> = Object.keys(
  ResourceTypeMapData
).reduce(
  (acc, k) => {
    const [packageName, serviceName, resourceName = ''] = k.split('::');
    const [baseResourceName, propTypeName] = resourceName.split('.');

    let pO: any, sO: any, rO: any;

    acc[packageName] = acc[packageName] || {};

    pO = acc[packageName];

    if (serviceName) {
      acc[packageName][serviceName] = acc[packageName][serviceName] || {};

      sO = acc[packageName][serviceName];

      if (baseResourceName) {
        acc[packageName][serviceName][baseResourceName] =
          acc[packageName][serviceName][baseResourceName] || {};

        rO = acc[packageName][serviceName][baseResourceName];
      }
    }

    const targetList: Record<any, any>[] = [acc, pO, sO, rO].filter((t) => !!t);
    const targetObj: Record<any, any> = targetList.pop() as any;

    if (propTypeName) {
      targetObj[propTypeName] = ResourceTypeMapData[k];
    } else {
      const parentTargetObj: Record<any, any> = targetList.pop() as any;
      const targetKeyName: string = [packageName, serviceName, baseResourceName]
        .filter((k) => !!k)
        .pop() as any;

      if (typeof ResourceTypeMapData[k] === 'object') {
        parentTargetObj[targetKeyName] = {
          ...parentTargetObj[targetKeyName],
          ...(ResourceTypeMapData[k] as any),
        };
      }
    }

    return acc;
  },
  { JSONString: 'string', Timestamp: 'string' } as Record<any, any>
);

const renderPackage = (
  pack: Record<any, any> = {},
  scopeName?: string
): string => {
  const typeValues: string[] = [];
  const namespaceValues: string[] = [];

  let values: string[] = [];

  // Output types AND namespaces, when there is contents for either.
  for (const k in pack) {
    const v = pack[k];

    if (v instanceof Object) {
      namespaceValues.push(renderPackage(v));
    } else {
      typeValues.push(`${k}${v.replace(/::/gim, () => '.')};`);
    }
  }

  if (typeValues.length > 0) {
    // Push type syntax into values.
    const insertValues: string[] = scopeName
      ? [`export type ${scopeName} = {\n`, ...typeValues, `\n};`]
      : typeValues;

    values = [...values, ...insertValues];
  }

  if (namespaceValues.length > 0) {
    // Push namespace syntax into values.
    const insertValues: string[] = scopeName
      ? [`export namespace ${scopeName} {\n`, ...namespaceValues, `\n}`]
      : namespaceValues;

    values = [...values, ...insertValues];
  }

  return values.join('\n\n');
};

const getDiagnosticsForText = (text: string) => {
  const dummyFilePath = '/file.ts';
  const textAst = TS.createSourceFile(
    dummyFilePath,
    text,
    TS.ScriptTarget.Latest
  );
  const options: TS.CompilerOptions = {};
  const host: TS.CompilerHost = {
    fileExists: (filePath) => filePath === dummyFilePath,
    directoryExists: (dirPath) => dirPath === '/',
    getCurrentDirectory: () => '/',
    getDirectories: () => [],
    getCanonicalFileName: (fileName) => fileName,
    getNewLine: () => '\n',
    getDefaultLibFileName: () => '',
    getSourceFile: (filePath) =>
      filePath === dummyFilePath ? textAst : undefined,
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
const TypesContentString = renderPackage(PackageStructure);

console.log(
  getDiagnosticsForText(TypesContentString).map((d) => d.messageText)
);

FS.writeFileSync('./AWSResourceTypes.d.ts', TypesContentString, {
  encoding: 'utf8',
});
