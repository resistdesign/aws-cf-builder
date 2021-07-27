export const NEVER_TYPE = 'never';

export const NAMESPACE_DELIMITERS = {
  INPUT_REGEX: /::/gim,
  INPUT: '::',
  OUTPUT: '.',
};

export const TAG_TYPE = 'Tag';

export const CONTAINER_TYPES = ['List', 'Map'];

export const PRIMITIVE_TYPE_MAP: Record<string, string> = {
  String: 'string',
  Integer: 'number',
  Boolean: 'boolean',
  Double: 'number',
  Json: 'Json',
  Timestamp: 'Timestamp',
  Long: 'number',
};

export const RESOURCE_TYPE_NAME = 'CloudFormationResource';

export const RESOURCE_TYPE = `export type ${RESOURCE_TYPE_NAME}<TypeString extends string, AttributesType extends Record<any, any>, PropertiesType extends Record<any, any>> = {
  Type: TypeString;
  Attributes: AttributesType;
  Properties: PropertiesType;
};`;

export const STANDARD_ALIASES = ['export type Json = string;', 'export type Timestamp = string;', RESOURCE_TYPE];
