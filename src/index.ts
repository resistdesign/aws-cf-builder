import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap, CFResourceTypePropertyMap } from './Types';
import FS from 'fs';

type PropertyTypeMap = {
  [PropertyName: string]: string;
};
type ResourceTypeMap = {
  [ResourceType: string]: PropertyTypeMap | string;
};

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
      ItemType && ItemType.indexOf('.') === -1 ? `${typeDomain}.` : '';
    const mainTypePrefix =
      Type && Type.indexOf('.') === -1 && Type !== 'List' && Type !== 'Map'
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
  depth = 0,
  inType = false
): string => {
  const values = [];

  // TODO: Output types AND namespaces, when there is contents for either.

  for (const k in pack) {
    const v = pack[k];

    if (v instanceof Object) {
      if (depth > 2) {
        if (inType) {
          values.push(`${k}: { ${renderPackage(v, depth + 1, true)} };`);
        } else {
          values.push(
            `export type ${k} = { ${renderPackage(v, depth + 1, true)} };`
          );
        }
      } else {
        values.push(`export namespace ${k} {`);
        values.push(renderPackage(v, depth + 1));
        values.push('}');
      }
    } else {
      if (depth > 3 || inType) {
        values.push(`${k}${v.replace(/::/gim, () => '.')};`);
      } else {
        values.push(
          `export type ${k} = ${v
            .replace(/::/gim, () => '.')
            .replace(/(:)|(\?:)/gim, () => '')};`
        );
      }
    }
  }

  return values.join('\n\n');
};

FS.writeFileSync('./AWSResourceTypes.d.ts', renderPackage(PackageStructure), {
  encoding: 'utf8',
});
