import { CloudFormationResourceSpecificationData } from './CloudFormationResourceSpecification';
import { CFResourceTypeMap } from './Types';

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
const ResourceTypeMapData: ResourceTypeMap = Object.keys(Combo).reduce(
  (acc1, t) => {
    const propsObj = Combo[t]?.Properties || {};

    acc1[t] = Object.keys(propsObj).reduce((acc2, p) => {
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
        itemType && mainType
          ? `${mainType}<${itemType}>`
          : itemType || mainType;
      const typeIsReferenced = itemType
        ? itemType in Combo
        : mainType && mainType in Combo;

      if (Type && !(mainType && mainType in Combo)) {
        TypeKindsMap[Type] = true;
      }

      acc2[p] = `${fullType}: ${typeIsReferenced}`;

      return acc2;
    }, {} as PropertyTypeMap);

    return acc1;
  },
  {} as ResourceTypeMap
);

// TODO: Parse Resources w/o Properties, but w/ direct properties.

console.log(ResourceTypeMapData, TypeKindsMap);
