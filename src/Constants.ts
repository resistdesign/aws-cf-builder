export const NAMESPACE_DELIMITERS = {
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

export const STANDARD_ALIASES = ['export type Json = string;', 'export type Timestamp = string;'];
