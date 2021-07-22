import { PropertyDescriptor, PropertyType } from './Types';
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
  } else if (Type) {
    return [...path, Type].join(NAMESPACE_DELIMITERS.OUTPUT);
  } else {
    return 'never';
  }
};

export const renderPropertyName = (propertyName: string, { Required = false }: PropertyDescriptor) => `${propertyName}${Required ? '' : '?'}`;

export const renderCommentBlock = ({ UpdateType, DuplicatesAllowed = false, Documentation }: PropertyDescriptor) => `/**
 * ${UpdateType ? 'Update Type: ' : ''}${UpdateType}
 * ${DuplicatesAllowed ? 'Duplicates Allowed: Yes' : ''}
 * ${Documentation ? '@see ' : ''}${Documentation}
 * */
`;

export const renderProperty = (path: string[], propertyName: string, propertyDescriptor: PropertyDescriptor) =>
  `${renderCommentBlock(propertyDescriptor)}${renderPropertyName(propertyName, propertyDescriptor)}: ${renderPropertyType(
    path,
    propertyDescriptor
  )};`;

export const renderTypeFromPropertyType = (path: string[], typeName: string, propertyType: PropertyType) => {
  const { Properties } = propertyType;
  const commentBlock = renderCommentBlock(propertyType);

  if (Properties) {
    const propertyKeys = Object.keys(Properties);
    return `${commentBlock}export type ${typeName} = {
  ${propertyKeys.map((pK) => renderProperty(path, pK, Properties[pK])).join('\n')}
  };`;
  } else {
    return `${commentBlock}export type ${typeName} = ${renderPropertyType(path, propertyType)}`;
  }
};
