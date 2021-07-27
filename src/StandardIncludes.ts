export type AllResourceTypes = any;

export type Json = string;

export type Timestamp = string;

export type CloudFormationParameter = {
  AllowedPattern?: string;
  AllowedValues?: string[];
  ConstraintDescription?: string;
  Default?: string;
  Description?: string;
  MaxLength?: number;
  MaxValue?: number;
  MinLength?: number;
  MinValue?: number;
  NoEcho?: boolean;
  Type:
    | 'String'
    | 'Number'
    | 'List<Number>'
    | 'List<String>'
    | 'CommaDelimitedList'
    | 'AWS::EC2::AvailabilityZone::Name'
    | 'AWS::EC2::Image::Id'
    | 'AWS::EC2::Instance::Id'
    | 'AWS::EC2::KeyPair::KeyName'
    | 'AWS::EC2::SecurityGroup::GroupName'
    | 'AWS::EC2::SecurityGroup::Id'
    | 'AWS::EC2::Subnet::Id'
    | 'AWS::EC2::Volume::Id'
    | 'AWS::EC2::VPC::Id'
    | 'AWS::Route53::HostedZone::Id'
    | 'List<AWS::EC2::AvailabilityZone::Name>'
    | 'List<AWS::EC2::Image::Id>'
    | 'List<AWS::EC2::Instance::Id>'
    | 'List<AWS::EC2::SecurityGroup::GroupName>'
    | 'List<AWS::EC2::SecurityGroup::Id>'
    | 'List<AWS::EC2::Subnet::Id>'
    | 'List<AWS::EC2::Volume::Id>'
    | 'List<AWS::EC2::VPC::Id>'
    | 'List<AWS::Route53::HostedZone::Id>'
    | string;
};

export type CloudFormationResource<TypeString extends string, AttributesType extends Record<any, any>, PropertiesType extends Record<any, any>> = {
  Type: TypeString;
  Attributes?: AttributesType & never;
  CreationPolicy?: {
    AutoScalingCreationPolicy?: {
      MinSuccessfulInstancesPercent?: number;
    };
    ResourceSignal?: {
      Count?: number;
      Timeout?: string;
    };
  };
  DeletionPolicy?: 'Delete' | 'Retain' | 'Snapshot';
  DependsOn?: string | string[];
  Metadata?: Record<any, any>;
  UpdatePolicy?: {
    AutoScalingReplacingUpdate?: {
      WillReplace?: boolean;
    };
    AutoScalingRollingUpdate?: {
      MaxBatchSize?: number;
      MinInstancesInService?: number;
      MinSuccessfulInstancesPercent?: number;
      PauseTime?: string;
      SuspendProcesses?: {
        AutoScalingGroupName: string;
        ScalingProcesses?: (
          | 'Launch'
          | 'Terminate'
          | 'AddToLoadBalancer'
          | 'AlarmNotification'
          | 'AZRebalance'
          | 'HealthCheck'
          | 'InstanceRefresh'
          | 'ReplaceUnhealthy'
          | 'ScheduledActions'
        )[];
      }[];
      WaitOnResourceSignals?: boolean;
    };
    AutoScalingScheduledAction?: {
      IgnoreUnmodifiedGroupSizeProperties?: boolean;
    };
    UseOnlineResharding?: boolean;
    EnableVersionUpgrade?: boolean;
    CodeDeployLambdaAliasUpdate?: {
      AfterAllowTrafficHook?: string;
      ApplicationName: string;
      BeforeAllowTrafficHook?: string;
      DeploymentGroupName: string;
    };
  };
  UpdateReplacePolicy?: 'Delete' | 'Retain' | 'Snapshot';
  Properties: PropertiesType;
};

export type CloudFormationTemplate = {
  Parameters: Record<string, CloudFormationParameter>;
  Resources: Record<string, AllResourceTypes>;
};
