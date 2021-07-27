export type Json = string;

export type Timestamp = string;

export type CloudFormationResource<TypeString extends string, AttributesType extends Record<any, any>, PropertiesType extends Record<any, any>> = {
  Type: TypeString;
  Attributes?: AttributesType & never;
  Properties: PropertiesType;
};
