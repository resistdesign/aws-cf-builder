import { CloudFormationParameter, CloudFormationTemplate } from '@aws-cf-builder/types';

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
