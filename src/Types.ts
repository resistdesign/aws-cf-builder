export type PropertyDescriptor = {
  Documentation?: string;
  Type?: string;
  UpdateType?: string;
  Required?: boolean;
  PrimitiveType?: string;
  PrimitiveItemType?: string;
  ItemType?: string;
  DuplicatesAllowed?: boolean;
};

export type PropertyType = PropertyDescriptor & {
  Properties?: Record<string, PropertyDescriptor>;
};

export type AttributeType = {
  PrimitiveType?: string;
  Type?: string;
  ItemType?: string;
  PrimitiveItemType?: string;
  DuplicatesAllowed?: boolean;
};

export type ResourceType = {
  Documentation?: string;
  AdditionalProperties?: boolean;
  Properties?: Record<string, PropertyDescriptor>;
  Attributes?: Record<string, AttributeType>;
};

export type CloudFormationResourceSpecification = {
  PropertyTypes: Record<string, PropertyType>;
  ResourceTypes: Record<string, ResourceType>;
  ResourceSpecificationVersion: `${number}.${number}.${number}`;
};

export type NamespaceStructure = {
  path: string[];
  aliases?: string[];
  propertyTypes?: Record<string, PropertyType>;
  resourceTypes?: Record<string, ResourceType>;
  namespaces?: Record<string, NamespaceStructure>;
};
