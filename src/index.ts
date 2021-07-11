import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap, CFResourceTypePropertyMap } from './Types';

type PropertyTypeMap = {
  [PropertyName: string]: string;
};
type ResourceTypeMap = {
  [ResourceType: string]: PropertyTypeMap | string;
};

const TypeKindsMap: { [TypeKind: string]: boolean } = {};
const { PropertyTypes, ResourceTypes } =
  CloudFormationResourceSpecificationData;
const Combo: CFResourceTypeMap = {
  ...PropertyTypes,
  ...ResourceTypes,
};
const GET_PROP_REDUCER =
  (t: string, propsObj: CFResourceTypePropertyMap, combo: CFResourceTypeMap) =>
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
      ? itemType in combo
      : !!mainType && mainType in combo;

    if (Type && !(mainType && mainType in combo)) {
      TypeKindsMap[Type] = true;
    }

    acc[p] = fullType ? `${fullType}: ${typeIsReferenced}` : 'any';

    return acc;
  };
const GET_RESOURCE_REDUCER =
  (combo: CFResourceTypeMap) => (acc: ResourceTypeMap, t: string) => {
    const propsObj = combo[t].Properties;

    if (propsObj) {
      acc[t] = Object.keys(propsObj).reduce(
        GET_PROP_REDUCER(t, propsObj, combo),
        {} as PropertyTypeMap
      );
    } else {
      // Parse Resources w/o Properties, but w/ direct properties.
      acc[t] = GET_PROP_REDUCER(t, combo, combo)({}, t)[t];
    }

    return acc;
  };
const ResourceTypeMapData: ResourceTypeMap = Object.keys(Combo).reduce(
  GET_RESOURCE_REDUCER(Combo),
  {} as ResourceTypeMap
);

console.log(ResourceTypeMapData, TypeKindsMap);
