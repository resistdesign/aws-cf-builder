import { PropertyDescriptor } from './Types';
import { CONTAINER_TYPES, NAMESPACE_DELIMITERS, TAG_TYPE } from './Constants';

export const renderPropertyType = (path: string[], { PrimitiveType, Type, PrimitiveItemType, ItemType }: PropertyDescriptor) => {
  if (PrimitiveType) {
    return PrimitiveType;
  } else if (Type && CONTAINER_TYPES.indexOf(Type) !== -1) {
    const resolvedItemType = PrimitiveItemType
      ? PrimitiveItemType
      : ItemType === TAG_TYPE
      ? TAG_TYPE
      : [...path, ItemType].join(NAMESPACE_DELIMITERS.OUTPUT);

    return Type === 'List' ? `${resolvedItemType}[]` : `Record<string, ${resolvedItemType}>`;
  } else if (Type === TAG_TYPE) {
    return TAG_TYPE;
  } else {
    return [...path, Type].join(NAMESPACE_DELIMITERS.OUTPUT);
  }
};

export const renderPropertyName = (propertyName: string, { Required = false }: PropertyDescriptor) => `${propertyName}${Required ? '' : '?'}`;

export const renderProperty = (path: string[], propertyName: string, propertyDescriptor: PropertyDescriptor) =>
  `${renderPropertyName(propertyName, propertyDescriptor)}: ${renderPropertyType(path, propertyDescriptor)};`;
