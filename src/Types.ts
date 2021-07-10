export type CFPropertyTypeDescriptorProperty = {
  Documentation?: string;
  UpdateType?: string;
  Required?: boolean;
  Type?: string;
  PrimitiveItemType?: string;
  DuplicatesAllowed?: boolean;
  PrimitiveType?: string;
  ItemType?: string;
};

export type CFPropertyTypeDescriptorPropertyMap = {
  [PropertyName: string]: CFPropertyTypeDescriptorProperty;
};

export type CFPropertyTypeDescriptor = CFPropertyTypeDescriptorProperty & {
  Properties?: CFPropertyTypeDescriptorPropertyMap;
};

export type CFPropertyTypeMap = {
  [PropTypeDescriptor: string]: CFPropertyTypeDescriptor;
};

export type CFResourceTypeProperty = {
  Documentation?: string;
  UpdateType?: string;
  Required?: boolean;
  PrimitiveType?: string;
  Type?: string;
  PrimitiveItemType?: string;
  ItemType?: string;
  DuplicatesAllowed?: boolean;
};

export type CFResourceTypePropertyMap = {
  [Property: string]: CFResourceTypeProperty;
};

export type CFResourceType = {
  Documentation?: string;
  Properties: CFResourceTypePropertyMap;
  Attributes?: CFResourceTypePropertyMap;
  AdditionalProperties?: boolean;
};

export type CFResourceTypeMap = {
  [ResourceType: string]: CFResourceType;
};

export type CloudFormationResourceSpecification = {
  PropertyTypes: CFPropertyTypeMap;
  ResourceTypes: CFResourceTypeMap;
  ResourceSpecificationVersion: `${number}.${number}.${number}`;
};
