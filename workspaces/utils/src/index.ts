import { CloudFormationParameter, CloudFormationTemplate } from '@aws-cf-builder/types';
import { flatten, unflatten } from 'flat';

export type ParameterInfo = {
  ParameterId: string;
  Parameter: CloudFormationParameter;
  Label: string;
  Group?: string;
};

export const addParameter = (parameterInfo: ParameterInfo, template: CloudFormationTemplate): CloudFormationTemplate => {
  const { ParameterId, Parameter, Label, Group } = parameterInfo;
  const { Parameters, Metadata: { 'AWS::CloudFormation::Interface': { ParameterGroups = [], ParameterLabels = {} } = {} } = {} } = template;

  let NewParameterGroups = ParameterGroups;

  if (Group) {
    const GroupObject = ParameterGroups.filter((g) => g.Label === Group)[0];

    NewParameterGroups = GroupObject
      ? ParameterGroups.map((g) =>
          g.Label === Group
            ? {
                ...g,
                Parameters: [...(g.Parameters || []), ParameterId],
              }
            : g
        )
      : [
          {
            Label: {
              default: Group,
            },
            Parameters: [ParameterId],
          },
        ];
  }

  return {
    ...template,
    Parameters: {
      ...Parameters,
      [ParameterId]: Parameter,
    },
    Metadata: {
      ...template.Metadata,
      'AWS::CloudFormation::Interface': {
        ...template?.Metadata?.['AWS::CloudFormation::Interface'],
        ParameterGroups: NewParameterGroups,
        ParameterLabels: {
          ...ParameterLabels,
          [ParameterId]: {
            default: Label,
          },
        },
      },
    },
  };
};

export type ResourcePackApplier<ParamsType> = (params: ParamsType, template: CloudFormationTemplate) => CloudFormationTemplate;

const FLATTEN_OPTIONS = {
  delimiter: '/',
  maxDepth: Infinity,
  safe: false,
  overwrite: true,
  transformKey: (key: string) => encodeURIComponent(key),
};
const UNFLATTEN_OPTIONS = {
  ...FLATTEN_OPTIONS,
  transformKey: (key: string) => decodeURIComponent(key),
};

export const createResourcePack =
  <ParamsType>(creator: (params: ParamsType) => Partial<CloudFormationTemplate>): ResourcePackApplier<ParamsType> =>
  (params: ParamsType, template: CloudFormationTemplate) => {
    const flatTemplate = flatten(template, FLATTEN_OPTIONS) as any;
    const patchTemplate = creator(params);
    const flatPatchTemplate = flatten(patchTemplate, FLATTEN_OPTIONS) as any;

    return unflatten(
      {
        ...flatTemplate,
        ...flatPatchTemplate,
      },
      UNFLATTEN_OPTIONS
    ) as any;
  };
