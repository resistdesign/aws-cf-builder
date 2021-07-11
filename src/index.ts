import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap, CFResourceTypePropertyMap } from './Types';
import FS from 'fs';

type PropertyTypeMap = {
  [PropertyName: string]: string;
};
type ResourceTypeMap = {
  [ResourceType: string]: PropertyTypeMap | string;
};

const { PropertyTypes, ResourceTypes } =
  CloudFormationResourceSpecificationData;
const Combo: CFResourceTypeMap = {
  ...PropertyTypes,
  ...ResourceTypes,
};
const GET_PROP_REDUCER =
  (t: string, propsObj: CFResourceTypePropertyMap) =>
  (acc: PropertyTypeMap, p: string) => {
    const { Type, PrimitiveType, ItemType, PrimitiveItemType } = propsObj[p];
    const typeDomain = t.split('.')[0] || '';
    const itemTypePrefix =
      ItemType && ItemType.indexOf('.') === -1 ? `${typeDomain}.` : '';
    const mainTypePrefix =
      Type && Type.indexOf('.') === -1 && Type !== 'List' && Type !== 'Map'
        ? `${typeDomain}.`
        : '';
    const itemType = ItemType
      ? `${itemTypePrefix}${ItemType}`
      : PrimitiveItemType;
    const mainType = Type ? `${mainTypePrefix}${Type}` : PrimitiveType;
    const fullType =
      itemType && mainType ? `${mainType}<${itemType}>` : itemType || mainType;

    acc[p] = fullType ? fullType : 'any';

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
).reduce((acc, k) => {
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
}, {} as Record<any, any>);

const renderPackage = (pack: Record<any, any> = {}, depth = 0): string => {
  const values = [];

  for (const k in pack) {
    const v = pack[k];

    if (v instanceof Object) {
      if (depth > 2) {
        values.push(`export type ${k} = { ${renderPackage(v, depth + 1)} };`);
      } else {
        values.push(`export namespace ${k} {`);
        values.push(renderPackage(v, depth + 1));
        values.push('}');
      }
    } else {
      if (depth > 3) {
        values.push(`${k}: ${v.replace(/::/gim, () => '.')};`);
      } else {
        values.push(`export type ${k} = ${v.replace(/::/gim, () => '.')};`);
      }
    }
  }

  return values.join('\n\n');
};

FS.writeFileSync('./AWSResourceTypes.d.ts', renderPackage(PackageStructure), {
  encoding: 'utf8',
});
