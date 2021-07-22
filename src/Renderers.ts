import { AttributeType, IDocumentable, PropertyDescriptor, PropertyType, ResourceType } from './Types';
import { CONTAINER_TYPES, NAMESPACE_DELIMITERS, TAG_TYPE } from './Constants';

export const renderPropertyType = (path: string[], { PrimitiveType, Type, PrimitiveItemType, ItemType }: AttributeType) => {
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

export const renderCommentBlock = ({ UpdateType, DuplicatesAllowed = false, Documentation }: IDocumentable) =>
  UpdateType || DuplicatesAllowed || Documentation
    ? `/**
 * ${UpdateType ? 'Update Type: ' : ''}${UpdateType}
 * ${DuplicatesAllowed ? 'Duplicates Allowed: Yes' : ''}
 * ${Documentation ? '@see ' : ''}${Documentation}
 * */
`
    : '';

export const renderProperty = (path: string[], propertyName: string, propertyDescriptor: PropertyDescriptor) =>
  `${renderCommentBlock(propertyDescriptor)}${renderPropertyName(propertyName, propertyDescriptor)}: ${renderPropertyType(
    path,
    propertyDescriptor
  )};`;

export const renderTypeWithProperties = (
  path: string[],
  typeName: string,
  properties: Record<string, PropertyDescriptor>,
  commentBlock: string = ''
) => {
  const propertyKeys = Object.keys(properties);

  return `${commentBlock}export type ${typeName} = {
  ${propertyKeys.map((pK) => renderProperty(path, pK, properties[pK])).join('\n')}
  };`;
};

export const renderTypeFromPropertyType = (path: string[], typeName: string, propertyType: PropertyType) => {
  const { Properties } = propertyType;
  const commentBlock = renderCommentBlock(propertyType);

  if (Properties) {
    return renderTypeWithProperties(path, typeName, Properties, commentBlock);
  } else {
    return `${commentBlock}export type ${typeName} = ${renderPropertyType(path, propertyType)}`;
  }
};

export const renderTypeFromResourceType = (path: string[], typeName: string, resourceType: ResourceType) => {
  const { Properties } = resourceType;
  const commentBlock = renderCommentBlock(resourceType);

  return Properties ? renderTypeWithProperties(path, typeName, Properties, commentBlock) : '';
};
