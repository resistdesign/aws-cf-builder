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

export type CFResourceType = CFResourceTypeProperty & {
  Documentation?: string;
  Properties?: CFResourceTypePropertyMap;
  Attributes?: CFResourceTypePropertyMap;
  AdditionalProperties?: boolean;
};

export type CFResourceTypeMap = {
  [ResourceType: string]: CFResourceType;
};

export type CloudFormationResourceSpecification = {
  PropertyTypes: CFResourceTypeMap;
  ResourceTypes: CFResourceTypeMap;
  ResourceSpecificationVersion: `${number}.${number}.${number}`;
};
