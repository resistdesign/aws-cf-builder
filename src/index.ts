import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap, CFResourceTypePropertyMap } from './Types';

type PropertyTypeMap = {
  [PropertyName: string]: string | undefined;
};
type ResourceTypeMap = {
  [ResourceType: string]: PropertyTypeMap;
};

const TypeKindsMap: { [TypeKind: string]: boolean } = {};
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
    const typeIsReferenced = itemType
      ? itemType in Combo
      : mainType && mainType in Combo;

    if (Type && !(mainType && mainType in Combo)) {
      TypeKindsMap[Type] = true;
    }

    acc[p] = `${fullType || ''}: ${typeIsReferenced}`;

    return acc;
  };
const GET_RESOURCE_REDUCER =
  (combo: CFResourceTypeMap) => (acc: ResourceTypeMap, t: string) => {
    const propsObj = combo[t]?.Properties || {};

    acc[t] = Object.keys(propsObj).reduce(
      GET_PROP_REDUCER(t, propsObj),
      {} as PropertyTypeMap
    );

    return acc;
  };
const ResourceTypeMapData: ResourceTypeMap = Object.keys(Combo).reduce(
  GET_RESOURCE_REDUCER(Combo),
  {} as ResourceTypeMap
);

// TODO: Parse Resources w/o Properties, but w/ direct properties.

console.log(ResourceTypeMapData, TypeKindsMap);
