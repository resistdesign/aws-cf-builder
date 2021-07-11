export namespace AWS {

export namespace WAFRegional {

export namespace ByteMatchSet {

export type ByteMatchTuple = { TargetString: String;

TargetStringBase64: String;

PositionalConstraint: String;

TextTransformation: String;

FieldToMatch: AWS.WAFRegional.ByteMatchSet.FieldToMatch; };

export type FieldToMatch = { Type: String;

Data: String; };

export type ByteMatchTuples = List<AWS.WAFRegional.ByteMatchSet.ByteMatchTuple>;

export type Name = String;

}

export namespace Rule {

export type Predicate = { Type: String;

DataId: String;

Negated: Boolean; };

export type MetricName = String;

export type Predicates = List<AWS.WAFRegional.Rule.Predicate>;

export type Name = String;

}

export namespace SizeConstraintSet {

export type SizeConstraint = { ComparisonOperator: String;

Size: Integer;

TextTransformation: String;

FieldToMatch: AWS.WAFRegional.SizeConstraintSet.FieldToMatch; };

export type FieldToMatch = { Type: String;

Data: String; };

export type SizeConstraints = List<AWS.WAFRegional.SizeConstraintSet.SizeConstraint>;

export type Name = String;

}

export namespace XssMatchSet {

export type XssMatchTuple = { TextTransformation: String;

FieldToMatch: AWS.WAFRegional.XssMatchSet.FieldToMatch; };

export type FieldToMatch = { Type: String;

Data: String; };

export type XssMatchTuples = List<AWS.WAFRegional.XssMatchSet.XssMatchTuple>;

export type Name = String;

}

export namespace GeoMatchSet {

export type GeoMatchConstraint = { Type: String;

Value: String; };

export type GeoMatchConstraints = List<AWS.WAFRegional.GeoMatchSet.GeoMatchConstraint>;

export type Name = String;

}

export namespace SqlInjectionMatchSet {

export type FieldToMatch = { Type: String;

Data: String; };

export type SqlInjectionMatchTuple = { TextTransformation: String;

FieldToMatch: AWS.WAFRegional.SqlInjectionMatchSet.FieldToMatch; };

export type SqlInjectionMatchTuples = List<AWS.WAFRegional.SqlInjectionMatchSet.SqlInjectionMatchTuple>;

export type Name = String;

}

export namespace WebACL {

export type Action = { Type: String; };

export type Rule = { Action: AWS.WAFRegional.WebACL.Action;

Priority: Integer;

RuleId: String; };

export type MetricName = String;

export type DefaultAction = AWS.WAFRegional.WebACL.Action;

export type Rules = List<AWS.WAFRegional.WebACL.Rule>;

export type Name = String;

}

export namespace IPSet {

export type IPSetDescriptor = { Type: String;

Value: String; };

export type IPSetDescriptors = List<AWS.WAFRegional.IPSet.IPSetDescriptor>;

export type Name = String;

}

export namespace RateBasedRule {

export type Predicate = { Type: String;

DataId: String;

Negated: Boolean; };

export type MetricName = String;

export type RateLimit = Integer;

export type MatchPredicates = List<AWS.WAFRegional.RateBasedRule.Predicate>;

export type RateKey = String;

export type Name = String;

}

export namespace RegexPatternSet {

export type RegexPatternStrings = List<String>;

export type Name = String;

}

export namespace WebACLAssociation {

export type ResourceArn = String;

export type WebACLId = String;

}

}

export namespace AppMesh {

export namespace VirtualRouter {

export type PortMapping = { Port: Integer;

Protocol: String; };

export type VirtualRouterSpec = { Listeners: List<AWS.AppMesh.VirtualRouter.VirtualRouterListener>; };

export type VirtualRouterListener = { PortMapping: AWS.AppMesh.VirtualRouter.PortMapping; };

export type MeshName = String;

export type VirtualRouterName = String;

export type MeshOwner = String;

export type Spec = AWS.AppMesh.VirtualRouter.VirtualRouterSpec;

export type Tags = List<AWS.AppMesh.VirtualRouter.Tag>;

}

export namespace VirtualNode {

export type TlsValidationContextSdsTrust = { SecretName: String; };

export type ClientPolicyTls = { Validation: AWS.AppMesh.VirtualNode.TlsValidationContext;

Enforce: Boolean;

Ports: List<Integer>;

Certificate: AWS.AppMesh.VirtualNode.ClientTlsCertificate; };

export type FileAccessLog = { Path: String; };

export type AwsCloudMapInstanceAttribute = { Value: String;

Key: String; };

export type ListenerTlsValidationContext = { SubjectAlternativeNames: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

Trust: AWS.AppMesh.VirtualNode.ListenerTlsValidationContextTrust; };

export type TcpTimeout = { Idle: AWS.AppMesh.VirtualNode.Duration; };

export type Backend = { VirtualService: AWS.AppMesh.VirtualNode.VirtualServiceBackend; };

export type ListenerTimeout = { TCP: AWS.AppMesh.VirtualNode.TcpTimeout;

HTTP2: AWS.AppMesh.VirtualNode.HttpTimeout;

HTTP: AWS.AppMesh.VirtualNode.HttpTimeout;

GRPC: AWS.AppMesh.VirtualNode.GrpcTimeout; };

export type PortMapping = { Port: Integer;

Protocol: String; };

export type ListenerTls = { Validation: AWS.AppMesh.VirtualNode.ListenerTlsValidationContext;

Mode: String;

Certificate: AWS.AppMesh.VirtualNode.ListenerTlsCertificate; };

export type ListenerTlsSdsCertificate = { SecretName: String; };

export type BackendDefaults = { ClientPolicy: AWS.AppMesh.VirtualNode.ClientPolicy; };

export type VirtualNodeTcpConnectionPool = { MaxConnections: Integer; };

export type HttpTimeout = { PerRequest: AWS.AppMesh.VirtualNode.Duration;

Idle: AWS.AppMesh.VirtualNode.Duration; };

export type HealthCheck = { Path: String;

UnhealthyThreshold: Integer;

Port: Integer;

HealthyThreshold: Integer;

TimeoutMillis: Integer;

Protocol: String;

IntervalMillis: Integer; };

export type AwsCloudMapServiceDiscovery = { NamespaceName: String;

ServiceName: String;

Attributes: List<AWS.AppMesh.VirtualNode.AwsCloudMapInstanceAttribute>; };

export type VirtualNodeHttpConnectionPool = { MaxConnections: Integer;

MaxPendingRequests: Integer; };

export type ListenerTlsFileCertificate = { PrivateKey: String;

CertificateChain: String; };

export type TlsValidationContext = { SubjectAlternativeNames: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

Trust: AWS.AppMesh.VirtualNode.TlsValidationContextTrust; };

export type VirtualNodeSpec = { Logging: AWS.AppMesh.VirtualNode.Logging;

Backends: List<AWS.AppMesh.VirtualNode.Backend>;

Listeners: List<AWS.AppMesh.VirtualNode.Listener>;

BackendDefaults: AWS.AppMesh.VirtualNode.BackendDefaults;

ServiceDiscovery: AWS.AppMesh.VirtualNode.ServiceDiscovery; };

export type Listener = { ConnectionPool: AWS.AppMesh.VirtualNode.VirtualNodeConnectionPool;

Timeout: AWS.AppMesh.VirtualNode.ListenerTimeout;

HealthCheck: AWS.AppMesh.VirtualNode.HealthCheck;

TLS: AWS.AppMesh.VirtualNode.ListenerTls;

PortMapping: AWS.AppMesh.VirtualNode.PortMapping;

OutlierDetection: AWS.AppMesh.VirtualNode.OutlierDetection; };

export type DnsServiceDiscovery = { Hostname: String;

ResponseType: String; };

export type TlsValidationContextFileTrust = { CertificateChain: String; };

export type GrpcTimeout = { PerRequest: AWS.AppMesh.VirtualNode.Duration;

Idle: AWS.AppMesh.VirtualNode.Duration; };

export type VirtualNodeConnectionPool = { TCP: AWS.AppMesh.VirtualNode.VirtualNodeTcpConnectionPool;

HTTP2: AWS.AppMesh.VirtualNode.VirtualNodeHttp2ConnectionPool;

HTTP: AWS.AppMesh.VirtualNode.VirtualNodeHttpConnectionPool;

GRPC: AWS.AppMesh.VirtualNode.VirtualNodeGrpcConnectionPool; };

export type Logging = { AccessLog: AWS.AppMesh.VirtualNode.AccessLog; };

export type ServiceDiscovery = { DNS: AWS.AppMesh.VirtualNode.DnsServiceDiscovery;

AWSCloudMap: AWS.AppMesh.VirtualNode.AwsCloudMapServiceDiscovery; };

export type Duration = { Value: Integer;

Unit: String; };

export type TlsValidationContextTrust = { SDS: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

ACM: AWS.AppMesh.VirtualNode.TlsValidationContextAcmTrust;

File: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust; };

export type ListenerTlsAcmCertificate = { CertificateArn: String; };

export type VirtualNodeHttp2ConnectionPool = { MaxRequests: Integer; };

export type ListenerTlsCertificate = { SDS: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

ACM: AWS.AppMesh.VirtualNode.ListenerTlsAcmCertificate;

File: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate; };

export type VirtualServiceBackend = { ClientPolicy: AWS.AppMesh.VirtualNode.ClientPolicy;

VirtualServiceName: String; };

export type OutlierDetection = { MaxEjectionPercent: Integer;

BaseEjectionDuration: AWS.AppMesh.VirtualNode.Duration;

MaxServerErrors: Integer;

Interval: AWS.AppMesh.VirtualNode.Duration; };

export type TlsValidationContextAcmTrust = { CertificateAuthorityArns: List<String>; };

export type ClientPolicy = { TLS: AWS.AppMesh.VirtualNode.ClientPolicyTls; };

export type ClientTlsCertificate = { SDS: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

File: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate; };

export type ListenerTlsValidationContextTrust = { SDS: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

File: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust; };

export type AccessLog = { File: AWS.AppMesh.VirtualNode.FileAccessLog; };

export type SubjectAlternativeNameMatchers = { Exact: List<String>; };

export type SubjectAlternativeNames = { Match: AWS.AppMesh.VirtualNode.SubjectAlternativeNameMatchers; };

export type VirtualNodeGrpcConnectionPool = { MaxRequests: Integer; };

export type MeshName = String;

export type MeshOwner = String;

export type Spec = AWS.AppMesh.VirtualNode.VirtualNodeSpec;

export type VirtualNodeName = String;

export type Tags = List<AWS.AppMesh.VirtualNode.Tag>;

}

export namespace GatewayRoute {

export type HttpQueryParameterMatch = { Exact: String; };

export type HttpGatewayRoutePrefixRewrite = { Value: String;

DefaultPrefix: String; };

export type HttpGatewayRouteHeaderMatch = { Suffix: String;

Regex: String;

Exact: String;

Prefix: String;

Range: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch; };

export type GatewayRouteSpec = { HttpRoute: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

Http2Route: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

GrpcRoute: AWS.AppMesh.GatewayRoute.GrpcGatewayRoute; };

export type HttpGatewayRouteHeader = { Invert: Boolean;

Name: String;

Match: AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeaderMatch; };

export type GatewayRouteHostnameRewrite = { DefaultTargetHostname: String; };

export type QueryParameter = { Name: String;

Match: AWS.AppMesh.GatewayRoute.HttpQueryParameterMatch; };

export type GatewayRouteMetadataMatch = { Suffix: String;

Regex: String;

Exact: String;

Prefix: String;

Range: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch; };

export type GrpcGatewayRouteAction = { Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

Rewrite: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteRewrite; };

export type GrpcGatewayRouteRewrite = { Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite; };

export type GatewayRouteTarget = { VirtualService: AWS.AppMesh.GatewayRoute.GatewayRouteVirtualService; };

export type GrpcGatewayRouteMatch = { ServiceName: String;

Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

Metadata: List<AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMetadata>; };

export type HttpGatewayRoutePathRewrite = { Exact: String; };

export type GrpcGatewayRoute = { Action: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteAction;

Match: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMatch; };

export type GatewayRouteRangeMatch = { Start: Integer;

End: Integer; };

export type HttpGatewayRouteRewrite = { Path: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePathRewrite;

Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite;

Prefix: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePrefixRewrite; };

export type GrpcGatewayRouteMetadata = { Invert: Boolean;

Name: String;

Match: AWS.AppMesh.GatewayRoute.GatewayRouteMetadataMatch; };

export type HttpGatewayRouteAction = { Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

Rewrite: AWS.AppMesh.GatewayRoute.HttpGatewayRouteRewrite; };

export type GatewayRouteHostnameMatch = { Suffix: String;

Exact: String; };

export type GatewayRouteVirtualService = { VirtualServiceName: String; };

export type HttpGatewayRouteMatch = { Path: AWS.AppMesh.GatewayRoute.HttpPathMatch;

Headers: List<AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeader>;

Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

Prefix: String;

Method: String;

QueryParameters: List<AWS.AppMesh.GatewayRoute.QueryParameter>; };

export type HttpPathMatch = { Regex: String;

Exact: String; };

export type HttpGatewayRoute = { Action: AWS.AppMesh.GatewayRoute.HttpGatewayRouteAction;

Match: AWS.AppMesh.GatewayRoute.HttpGatewayRouteMatch; };

export type MeshName = String;

export type VirtualGatewayName = String;

export type MeshOwner = String;

export type GatewayRouteName = String;

export type Spec = AWS.AppMesh.GatewayRoute.GatewayRouteSpec;

export type Tags = List<AWS.AppMesh.GatewayRoute.Tag>;

}

export namespace Route {

export type Duration = { Value: Integer;

Unit: String; };

export type WeightedTarget = { VirtualNode: String;

Weight: Integer; };

export type GrpcRouteMetadataMatchMethod = { Suffix: String;

Regex: String;

Exact: String;

Prefix: String;

Range: AWS.AppMesh.Route.MatchRange; };

export type HeaderMatchMethod = { Suffix: String;

Regex: String;

Exact: String;

Prefix: String;

Range: AWS.AppMesh.Route.MatchRange; };

export type RouteSpec = { HttpRoute: AWS.AppMesh.Route.HttpRoute;

Priority: Integer;

Http2Route: AWS.AppMesh.Route.HttpRoute;

GrpcRoute: AWS.AppMesh.Route.GrpcRoute;

TcpRoute: AWS.AppMesh.Route.TcpRoute; };

export type HttpPathMatch = { Regex: String;

Exact: String; };

export type GrpcRouteMetadata = { Invert: Boolean;

Name: String;

Match: AWS.AppMesh.Route.GrpcRouteMetadataMatchMethod; };

export type QueryParameter = { Name: String;

Match: AWS.AppMesh.Route.HttpQueryParameterMatch; };

export type HttpRouteMatch = { Path: AWS.AppMesh.Route.HttpPathMatch;

Scheme: String;

Headers: List<AWS.AppMesh.Route.HttpRouteHeader>;

Prefix: String;

Method: String;

QueryParameters: List<AWS.AppMesh.Route.QueryParameter>; };

export type HttpQueryParameterMatch = { Exact: String; };

export type GrpcRouteAction = { WeightedTargets: List<AWS.AppMesh.Route.WeightedTarget>; };

export type GrpcRouteMatch = { ServiceName: String;

Metadata: List<AWS.AppMesh.Route.GrpcRouteMetadata>;

MethodName: String; };

export type HttpRoute = { Action: AWS.AppMesh.Route.HttpRouteAction;

Timeout: AWS.AppMesh.Route.HttpTimeout;

RetryPolicy: AWS.AppMesh.Route.HttpRetryPolicy;

Match: AWS.AppMesh.Route.HttpRouteMatch; };

export type TcpRouteAction = { WeightedTargets: List<AWS.AppMesh.Route.WeightedTarget>; };

export type GrpcRetryPolicy = { MaxRetries: Integer;

PerRetryTimeout: AWS.AppMesh.Route.Duration;

GrpcRetryEvents: List<String>;

HttpRetryEvents: List<String>;

TcpRetryEvents: List<String>; };

export type TcpRoute = { Action: AWS.AppMesh.Route.TcpRouteAction;

Timeout: AWS.AppMesh.Route.TcpTimeout; };

export type HttpRetryPolicy = { MaxRetries: Integer;

PerRetryTimeout: AWS.AppMesh.Route.Duration;

HttpRetryEvents: List<String>;

TcpRetryEvents: List<String>; };

export type GrpcTimeout = { PerRequest: AWS.AppMesh.Route.Duration;

Idle: AWS.AppMesh.Route.Duration; };

export type GrpcRoute = { Action: AWS.AppMesh.Route.GrpcRouteAction;

Timeout: AWS.AppMesh.Route.GrpcTimeout;

RetryPolicy: AWS.AppMesh.Route.GrpcRetryPolicy;

Match: AWS.AppMesh.Route.GrpcRouteMatch; };

export type TcpTimeout = { Idle: AWS.AppMesh.Route.Duration; };

export type HttpTimeout = { PerRequest: AWS.AppMesh.Route.Duration;

Idle: AWS.AppMesh.Route.Duration; };

export type HttpRouteHeader = { Invert: Boolean;

Name: String;

Match: AWS.AppMesh.Route.HeaderMatchMethod; };

export type HttpRouteAction = { WeightedTargets: List<AWS.AppMesh.Route.WeightedTarget>; };

export type MatchRange = { Start: Integer;

End: Integer; };

export type MeshName = String;

export type VirtualRouterName = String;

export type MeshOwner = String;

export type RouteName = String;

export type Spec = AWS.AppMesh.Route.RouteSpec;

export type Tags = List<AWS.AppMesh.Route.Tag>;

}

export namespace VirtualGateway {

export type VirtualGatewayTlsValidationContextTrust = { SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

ACM: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust;

File: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust; };

export type VirtualGatewayListenerTlsAcmCertificate = { CertificateArn: String; };

export type VirtualGatewayTlsValidationContextFileTrust = { CertificateChain: String; };

export type VirtualGatewayHttp2ConnectionPool = { MaxRequests: Integer; };

export type VirtualGatewaySpec = { Logging: AWS.AppMesh.VirtualGateway.VirtualGatewayLogging;

Listeners: List<AWS.AppMesh.VirtualGateway.VirtualGatewayListener>;

BackendDefaults: AWS.AppMesh.VirtualGateway.VirtualGatewayBackendDefaults; };

export type VirtualGatewayTlsValidationContext = { SubjectAlternativeNames: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextTrust; };

export type VirtualGatewayListenerTlsCertificate = { SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

ACM: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsAcmCertificate;

File: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate; };

export type VirtualGatewayGrpcConnectionPool = { MaxRequests: Integer; };

export type VirtualGatewayConnectionPool = { HTTP2: AWS.AppMesh.VirtualGateway.VirtualGatewayHttp2ConnectionPool;

HTTP: AWS.AppMesh.VirtualGateway.VirtualGatewayHttpConnectionPool;

GRPC: AWS.AppMesh.VirtualGateway.VirtualGatewayGrpcConnectionPool; };

export type SubjectAlternativeNames = { Match: AWS.AppMesh.VirtualGateway.SubjectAlternativeNameMatchers; };

export type VirtualGatewayClientTlsCertificate = { SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

File: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate; };

export type VirtualGatewayListenerTlsValidationContext = { SubjectAlternativeNames: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust; };

export type VirtualGatewayListenerTlsFileCertificate = { PrivateKey: String;

CertificateChain: String; };

export type VirtualGatewayLogging = { AccessLog: AWS.AppMesh.VirtualGateway.VirtualGatewayAccessLog; };

export type VirtualGatewayListenerTls = { Validation: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContext;

Mode: String;

Certificate: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsCertificate; };

export type SubjectAlternativeNameMatchers = { Exact: List<String>; };

export type VirtualGatewayClientPolicy = { TLS: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicyTls; };

export type VirtualGatewayTlsValidationContextSdsTrust = { SecretName: String; };

export type VirtualGatewayListener = { ConnectionPool: AWS.AppMesh.VirtualGateway.VirtualGatewayConnectionPool;

HealthCheck: AWS.AppMesh.VirtualGateway.VirtualGatewayHealthCheckPolicy;

TLS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTls;

PortMapping: AWS.AppMesh.VirtualGateway.VirtualGatewayPortMapping; };

export type VirtualGatewayPortMapping = { Port: Integer;

Protocol: String; };

export type VirtualGatewayBackendDefaults = { ClientPolicy: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicy; };

export type VirtualGatewayClientPolicyTls = { Validation: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContext;

Enforce: Boolean;

Ports: List<Integer>;

Certificate: AWS.AppMesh.VirtualGateway.VirtualGatewayClientTlsCertificate; };

export type VirtualGatewayAccessLog = { File: AWS.AppMesh.VirtualGateway.VirtualGatewayFileAccessLog; };

export type VirtualGatewayFileAccessLog = { Path: String; };

export type VirtualGatewayHttpConnectionPool = { MaxConnections: Integer;

MaxPendingRequests: Integer; };

export type VirtualGatewayHealthCheckPolicy = { Path: String;

UnhealthyThreshold: Integer;

Port: Integer;

HealthyThreshold: Integer;

TimeoutMillis: Integer;

Protocol: String;

IntervalMillis: Integer; };

export type VirtualGatewayTlsValidationContextAcmTrust = { CertificateAuthorityArns: List<String>; };

export type VirtualGatewayListenerTlsValidationContextTrust = { SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

File: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust; };

export type VirtualGatewayListenerTlsSdsCertificate = { SecretName: String; };

export type VirtualGatewayName = String;

export type MeshName = String;

export type MeshOwner = String;

export type Spec = AWS.AppMesh.VirtualGateway.VirtualGatewaySpec;

export type Tags = List<AWS.AppMesh.VirtualGateway.Tag>;

}

export namespace VirtualService {

export type VirtualRouterServiceProvider = { VirtualRouterName: String; };

export type VirtualNodeServiceProvider = { VirtualNodeName: String; };

export type VirtualServiceProvider = { VirtualNode: AWS.AppMesh.VirtualService.VirtualNodeServiceProvider;

VirtualRouter: AWS.AppMesh.VirtualService.VirtualRouterServiceProvider; };

export type VirtualServiceSpec = { Provider: AWS.AppMesh.VirtualService.VirtualServiceProvider; };

export type MeshName = String;

export type MeshOwner = String;

export type VirtualServiceName = String;

export type Spec = AWS.AppMesh.VirtualService.VirtualServiceSpec;

export type Tags = List<AWS.AppMesh.VirtualService.Tag>;

}

export namespace Mesh {

export type MeshSpec = { EgressFilter: AWS.AppMesh.Mesh.EgressFilter; };

export type EgressFilter = { Type: String; };

export type MeshName = String;

export type Spec = AWS.AppMesh.Mesh.MeshSpec;

export type Tags = List<AWS.AppMesh.Mesh.Tag>;

}

}

export namespace QuickSight {

export namespace DataSet {

export type JoinKeyProperties = { UniqueKey: Boolean; };

export type UploadSettings = { ContainsHeader: Boolean;

TextQualifier: String;

Format: String;

StartFromRow: Double;

Delimiter: String; };

export type ProjectOperation = { ProjectedColumns: List<String>; };

export type ColumnLevelPermissionRule = { ColumnNames: List<String>;

Principals: List<String>; };

export type CreateColumnsOperation = { Columns: List<AWS.QuickSight.DataSet.CalculatedColumn>; };

export type PhysicalTable = { RelationalTable: AWS.QuickSight.DataSet.RelationalTable;

CustomSql: AWS.QuickSight.DataSet.CustomSql;

S3Source: AWS.QuickSight.DataSet.S3Source; };

export type ColumnDescription = { Text: String; };

export type RenameColumnOperation = { NewColumnName: String;

ColumnName: String; };

export type ColumnGroup = { GeoSpatialColumnGroup: AWS.QuickSight.DataSet.GeoSpatialColumnGroup; };

export type GeoSpatialColumnGroup = { Columns: List<String>;

CountryCode: String;

Name: String; };

export type RelationalTable = { DataSourceArn: String;

InputColumns: List<AWS.QuickSight.DataSet.InputColumn>;

Schema: String;

Catalog: String;

Name: String; };

export type InputColumn = { Type: String;

Name: String; };

export type RowLevelPermissionDataSet = AWS.QuickSight.DataSet.RowLevelPermissionDataSet;

export type FilterOperation = { ConditionExpression: String; };

export type CustomSql = { DataSourceArn: String;

SqlQuery: String;

Columns: List<AWS.QuickSight.DataSet.InputColumn>;

Name: String; };

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type FieldFolder = { Description: String;

Columns: List<String>; };

export type S3Source = { DataSourceArn: String;

InputColumns: List<AWS.QuickSight.DataSet.InputColumn>;

UploadSettings: AWS.QuickSight.DataSet.UploadSettings; };

export type LogicalTable = { Alias: String;

DataTransforms: List<AWS.QuickSight.DataSet.TransformOperation>;

Source: AWS.QuickSight.DataSet.LogicalTableSource; };

export type TransformOperation = { TagColumnOperation: AWS.QuickSight.DataSet.TagColumnOperation;

FilterOperation: AWS.QuickSight.DataSet.FilterOperation;

CastColumnTypeOperation: AWS.QuickSight.DataSet.CastColumnTypeOperation;

CreateColumnsOperation: AWS.QuickSight.DataSet.CreateColumnsOperation;

RenameColumnOperation: AWS.QuickSight.DataSet.RenameColumnOperation;

ProjectOperation: AWS.QuickSight.DataSet.ProjectOperation; };

export type JoinInstruction = { OnClause: String;

Type: String;

LeftJoinKeyProperties: AWS.QuickSight.DataSet.JoinKeyProperties;

LeftOperand: String;

RightOperand: String;

RightJoinKeyProperties: AWS.QuickSight.DataSet.JoinKeyProperties; };

export type OutputColumn = { Type: String;

Description: String;

Name: String; };

export type ColumnTag = { ColumnGeographicRole: String;

ColumnDescription: AWS.QuickSight.DataSet.ColumnDescription; };

export type TagColumnOperation = { ColumnName: String;

Tags: List<AWS.QuickSight.DataSet.ColumnTag>; };

export type IngestionWaitPolicy = AWS.QuickSight.DataSet.IngestionWaitPolicy;

export type CalculatedColumn = { ColumnId: String;

ColumnName: String;

Expression: String; };

export type CastColumnTypeOperation = { ColumnName: String;

Format: String;

NewColumnType: String; };

export type LogicalTableSource = { PhysicalTableId: String;

JoinInstruction: AWS.QuickSight.DataSet.JoinInstruction; };

export type AwsAccountId = String;

export type ColumnGroups = List<AWS.QuickSight.DataSet.ColumnGroup>;

export type ColumnLevelPermissionRules = List<AWS.QuickSight.DataSet.ColumnLevelPermissionRule>;

export type DataSetId = String;

export type FieldFolders = Map<AWS.QuickSight.DataSet.FieldFolder>;

export type ImportMode = String;

export type LogicalTableMap = Map<AWS.QuickSight.DataSet.LogicalTable>;

export type Name = String;

export type Permissions = List<AWS.QuickSight.DataSet.ResourcePermission>;

export type PhysicalTableMap = Map<AWS.QuickSight.DataSet.PhysicalTable>;

export type Tags = List<AWS.QuickSight.DataSet.Tag>;

}

export namespace DataSource {

export type DataSourceParameters = AWS.QuickSight.DataSource.DataSourceParameters;

export type AuroraPostgreSqlParameters = { Port: Double;

Database: String;

Host: String; };

export type DataSourceCredentials = { CopySourceArn: String;

CredentialPair: AWS.QuickSight.DataSource.CredentialPair; };

export type CredentialPair = { AlternateDataSourceParameters: List<AWS.QuickSight.DataSource.DataSourceParameters>;

Username: String;

Password: String; };

export type SnowflakeParameters = { Warehouse: String;

Database: String;

Host: String; };

export type SslProperties = AWS.QuickSight.DataSource.SslProperties;

export type S3Parameters = { ManifestFileLocation: AWS.QuickSight.DataSource.ManifestFileLocation; };

export type PrestoParameters = { Port: Double;

Host: String;

Catalog: String; };

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type SparkParameters = { Port: Double;

Host: String; };

export type AuroraParameters = { Port: Double;

Database: String;

Host: String; };

export type MariaDbParameters = { Port: Double;

Database: String;

Host: String; };

export type TeradataParameters = { Port: Double;

Database: String;

Host: String; };

export type AthenaParameters = { WorkGroup: String; };

export type ManifestFileLocation = { Bucket: String;

Key: String; };

export type MySqlParameters = { Port: Double;

Database: String;

Host: String; };

export type OracleParameters = { Port: Double;

Database: String;

Host: String; };

export type AmazonElasticsearchParameters = { Domain: String; };

export type DataSourceErrorInfo = { Type: String;

Message: String; };

export type VpcConnectionProperties = AWS.QuickSight.DataSource.VpcConnectionProperties;

export type RedshiftParameters = { ClusterId: String;

Port: Double;

Database: String;

Host: String; };

export type PostgreSqlParameters = { Port: Double;

Database: String;

Host: String; };

export type RdsParameters = { InstanceId: String;

Database: String; };

export type SqlServerParameters = { Port: Double;

Database: String;

Host: String; };

export type AlternateDataSourceParameters = List<AWS.QuickSight.DataSource.DataSourceParameters>;

export type AwsAccountId = String;

export type Credentials = AWS.QuickSight.DataSource.DataSourceCredentials;

export type DataSourceId = String;

export type ErrorInfo = AWS.QuickSight.DataSource.DataSourceErrorInfo;

export type Name = String;

export type Permissions = List<AWS.QuickSight.DataSource.ResourcePermission>;

export type Tags = List<AWS.QuickSight.DataSource.Tag>;

export type Type = String;

}

export namespace Dashboard {

export type SheetControlsOption = { VisibilityState: String; };

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type DashboardSourceEntity = { SourceTemplate: AWS.QuickSight.Dashboard.DashboardSourceTemplate; };

export type Parameters = AWS.QuickSight.Dashboard.Parameters;

export type DashboardSourceTemplate = { DataSetReferences: List<AWS.QuickSight.Dashboard.DataSetReference>;

Arn: String; };

export type DataSetReference = { DataSetArn: String;

DataSetPlaceholder: String; };

export type StringParameter = { Values: List<String>;

Name: String; };

export type IntegerParameter = { Values: List<Double>;

Name: String; };

export type ExportToCSVOption = { AvailabilityStatus: String; };

export type DashboardPublishOptions = AWS.QuickSight.Dashboard.DashboardPublishOptions;

export type DecimalParameter = { Values: List<Double>;

Name: String; };

export type DateTimeParameter = { Values: List<String>;

Name: String; };

export type AdHocFilteringOption = { AvailabilityStatus: String; };

export type AwsAccountId = String;

export type DashboardId = String;

export type Name = String;

export type Permissions = List<AWS.QuickSight.Dashboard.ResourcePermission>;

export type SourceEntity = AWS.QuickSight.Dashboard.DashboardSourceEntity;

export type Tags = List<AWS.QuickSight.Dashboard.Tag>;

export type ThemeArn = String;

export type VersionDescription = String;

}

export namespace Analysis {

export type DecimalParameter = { Values: List<Double>;

Name: String; };

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type AnalysisSourceTemplate = { DataSetReferences: List<AWS.QuickSight.Analysis.DataSetReference>;

Arn: String; };

export type Sheet = { SheetId: String;

Name: String; };

export type AnalysisSourceEntity = { SourceTemplate: AWS.QuickSight.Analysis.AnalysisSourceTemplate; };

export type DataSetReference = { DataSetArn: String;

DataSetPlaceholder: String; };

export type DateTimeParameter = { Values: List<String>;

Name: String; };

export type IntegerParameter = { Values: List<Double>;

Name: String; };

export type Parameters = AWS.QuickSight.Analysis.Parameters;

export type StringParameter = { Values: List<String>;

Name: String; };

export type AnalysisError = { Type: String;

Message: String; };

export type AnalysisId = String;

export type AwsAccountId = String;

export type Errors = List<AWS.QuickSight.Analysis.AnalysisError>;

export type Name = String;

export type Permissions = List<AWS.QuickSight.Analysis.ResourcePermission>;

export type SourceEntity = AWS.QuickSight.Analysis.AnalysisSourceEntity;

export type Tags = List<AWS.QuickSight.Analysis.Tag>;

export type ThemeArn = String;

}

export namespace Theme {

export type Font = { FontFamily: String; };

export type BorderStyle = { Show: Boolean; };

export type TileStyle = { Border: AWS.QuickSight.Theme.BorderStyle; };

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type MarginStyle = { Show: Boolean; };

export type GutterStyle = { Show: Boolean; };

export type DataColorPalette = { EmptyFillColor: String;

Colors: List<String>;

MinMaxGradient: List<String>; };

export type ThemeConfiguration = { DataColorPalette: AWS.QuickSight.Theme.DataColorPalette;

UIColorPalette: AWS.QuickSight.Theme.UIColorPalette;

Sheet: AWS.QuickSight.Theme.SheetStyle;

Typography: AWS.QuickSight.Theme.Typography; };

export type UIColorPalette = { Warning: String;

Accent: String;

AccentForeground: String;

SecondaryBackground: String;

DangerForeground: String;

PrimaryBackground: String;

Dimension: String;

SecondaryForeground: String;

WarningForeground: String;

DimensionForeground: String;

PrimaryForeground: String;

Success: String;

Danger: String;

SuccessForeground: String;

Measure: String;

MeasureForeground: String; };

export type SheetStyle = { TileLayout: AWS.QuickSight.Theme.TileLayoutStyle;

Tile: AWS.QuickSight.Theme.TileStyle; };

export type TileLayoutStyle = { Gutter: AWS.QuickSight.Theme.GutterStyle;

Margin: AWS.QuickSight.Theme.MarginStyle; };

export type Typography = { FontFamilies: List<AWS.QuickSight.Theme.Font>; };

export type AwsAccountId = String;

export type BaseThemeId = String;

export type Configuration = AWS.QuickSight.Theme.ThemeConfiguration;

export type Name = String;

export type Permissions = List<AWS.QuickSight.Theme.ResourcePermission>;

export type Tags = List<AWS.QuickSight.Theme.Tag>;

export type ThemeId = String;

export type VersionDescription = String;

}

export namespace Template {

export type ResourcePermission = { Actions: List<String>;

Principal: String; };

export type TemplateSourceTemplate = { Arn: String; };

export type DataSetReference = { DataSetArn: String;

DataSetPlaceholder: String; };

export type TemplateSourceEntity = { SourceAnalysis: AWS.QuickSight.Template.TemplateSourceAnalysis;

SourceTemplate: AWS.QuickSight.Template.TemplateSourceTemplate; };

export type TemplateSourceAnalysis = { DataSetReferences: List<AWS.QuickSight.Template.DataSetReference>;

Arn: String; };

export type AwsAccountId = String;

export type Name = String;

export type Permissions = List<AWS.QuickSight.Template.ResourcePermission>;

export type SourceEntity = AWS.QuickSight.Template.TemplateSourceEntity;

export type Tags = List<AWS.QuickSight.Template.Tag>;

export type TemplateId = String;

export type VersionDescription = String;

}

}

export namespace ElastiCache {

export namespace ReplicationGroup {

export type LogDeliveryConfigurationRequest = { DestinationDetails: AWS.ElastiCache.ReplicationGroup.DestinationDetails;

DestinationType: String;

LogFormat: String;

LogType: String; };

export type CloudWatchLogsDestinationDetails = { LogGroup: String; };

export type NodeGroupConfiguration = List<AWS.ElastiCache.ReplicationGroup.NodeGroupConfiguration>;

export type DestinationDetails = { CloudWatchLogsDetails: AWS.ElastiCache.ReplicationGroup.CloudWatchLogsDestinationDetails;

KinesisFirehoseDetails: AWS.ElastiCache.ReplicationGroup.KinesisFirehoseDestinationDetails; };

export type KinesisFirehoseDestinationDetails = { DeliveryStream: String; };

export type AtRestEncryptionEnabled = Boolean;

export type AuthToken = String;

export type AutoMinorVersionUpgrade = Boolean;

export type AutomaticFailoverEnabled = Boolean;

export type CacheNodeType = String;

export type CacheParameterGroupName = String;

export type CacheSecurityGroupNames = List<String>;

export type CacheSubnetGroupName = String;

export type Engine = String;

export type EngineVersion = String;

export type GlobalReplicationGroupId = String;

export type KmsKeyId = String;

export type LogDeliveryConfigurations = List<AWS.ElastiCache.ReplicationGroup.LogDeliveryConfigurationRequest>;

export type MultiAZEnabled = Boolean;

export type NotificationTopicArn = String;

export type NumCacheClusters = Integer;

export type NumNodeGroups = Integer;

export type Port = Integer;

export type PreferredCacheClusterAZs = List<String>;

export type PreferredMaintenanceWindow = String;

export type PrimaryClusterId = String;

export type ReplicasPerNodeGroup = Integer;

export type ReplicationGroupDescription = String;

export type ReplicationGroupId = String;

export type SecurityGroupIds = List<String>;

export type SnapshotArns = List<String>;

export type SnapshotName = String;

export type SnapshotRetentionLimit = Integer;

export type SnapshotWindow = String;

export type SnapshottingClusterId = String;

export type Tags = List<AWS.ElastiCache.ReplicationGroup.Tag>;

export type TransitEncryptionEnabled = Boolean;

export type UserGroupIds = List<String>;

}

export namespace CacheCluster {

export type KinesisFirehoseDestinationDetails = { DeliveryStream: String; };

export type LogDeliveryConfigurationRequest = { DestinationDetails: AWS.ElastiCache.CacheCluster.DestinationDetails;

DestinationType: String;

LogFormat: String;

LogType: String; };

export type DestinationDetails = { CloudWatchLogsDetails: AWS.ElastiCache.CacheCluster.CloudWatchLogsDestinationDetails;

KinesisFirehoseDetails: AWS.ElastiCache.CacheCluster.KinesisFirehoseDestinationDetails; };

export type CloudWatchLogsDestinationDetails = { LogGroup: String; };

export type AZMode = String;

export type AutoMinorVersionUpgrade = Boolean;

export type CacheNodeType = String;

export type CacheParameterGroupName = String;

export type CacheSecurityGroupNames = List<String>;

export type CacheSubnetGroupName = String;

export type ClusterName = String;

export type Engine = String;

export type EngineVersion = String;

export type LogDeliveryConfigurations = List<AWS.ElastiCache.CacheCluster.LogDeliveryConfigurationRequest>;

export type NotificationTopicArn = String;

export type NumCacheNodes = Integer;

export type Port = Integer;

export type PreferredAvailabilityZone = String;

export type PreferredAvailabilityZones = List<String>;

export type PreferredMaintenanceWindow = String;

export type SnapshotArns = List<String>;

export type SnapshotName = String;

export type SnapshotRetentionLimit = Integer;

export type SnapshotWindow = String;

export type Tags = List<AWS.ElastiCache.CacheCluster.Tag>;

export type VpcSecurityGroupIds = List<String>;

}

export namespace GlobalReplicationGroup {

export type RegionalConfiguration = { ReplicationGroupId: String;

ReplicationGroupRegion: String;

ReshardingConfigurations: List<AWS.ElastiCache.GlobalReplicationGroup.ReshardingConfiguration>; };

export type ReshardingConfiguration = { NodeGroupId: String;

PreferredAvailabilityZones: List<String>; };

export type GlobalReplicationGroupMember = { ReplicationGroupId: String;

ReplicationGroupRegion: String;

Role: String; };

export type GlobalReplicationGroupIdSuffix = String;

export type AutomaticFailoverEnabled = Boolean;

export type CacheNodeType = String;

export type EngineVersion = String;

export type CacheParameterGroupName = String;

export type GlobalNodeGroupCount = Integer;

export type GlobalReplicationGroupDescription = String;

export type Members = List<AWS.ElastiCache.GlobalReplicationGroup.GlobalReplicationGroupMember>;

export type RegionalConfigurations = List<AWS.ElastiCache.GlobalReplicationGroup.RegionalConfiguration>;

}

export namespace UserGroup {

export type UserGroupId = String;

export type Engine = String;

export type UserIds = List<String>;

}

export namespace SubnetGroup {

export type CacheSubnetGroupName = String;

export type Description = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.ElastiCache.SubnetGroup.Tag>;

}

export namespace ParameterGroup {

export type CacheParameterGroupFamily = String;

export type Description = String;

export type Properties = Map<String>;

export type Tags = List<AWS.ElastiCache.ParameterGroup.Tag>;

}

export namespace User {

export type UserId = String;

export type UserName = String;

export type Engine = String;

export type AccessString = String;

export type NoPasswordRequired = Boolean;

export type Passwords = List<String>;

}

export namespace SecurityGroup {

export type Description = String;

export type Tags = List<AWS.ElastiCache.SecurityGroup.Tag>;

}

export namespace SecurityGroupIngress {

export type CacheSecurityGroupName = String;

export type EC2SecurityGroupName = String;

export type EC2SecurityGroupOwnerId = String;

}

}

export namespace AppFlow {

export namespace Flow {

export type IncrementalPullConfig = { DatetimeTypeFieldName: String; };

export type PrefixConfig = { PrefixType: String;

PrefixFormat: String; };

export type S3OutputFormatConfig = { FileType: String;

PrefixConfig: AWS.AppFlow.Flow.PrefixConfig;

AggregationConfig: AWS.AppFlow.Flow.AggregationConfig; };

export type DestinationFlowConfig = { ConnectorType: String;

ConnectorProfileName: String;

DestinationConnectorProperties: AWS.AppFlow.Flow.DestinationConnectorProperties; };

export type DatadogSourceProperties = { Object: String; };

export type AggregationConfig = { AggregationType: String; };

export type ScheduledTriggerProperties = { ScheduleExpression: String;

DataPullMode: String;

ScheduleStartTime: Double;

ScheduleEndTime: Double;

TimeZone: String; };

export type DestinationConnectorProperties = { Redshift: AWS.AppFlow.Flow.RedshiftDestinationProperties;

S3: AWS.AppFlow.Flow.S3DestinationProperties;

Salesforce: AWS.AppFlow.Flow.SalesforceDestinationProperties;

Snowflake: AWS.AppFlow.Flow.SnowflakeDestinationProperties;

EventBridge: AWS.AppFlow.Flow.EventBridgeDestinationProperties;

Upsolver: AWS.AppFlow.Flow.UpsolverDestinationProperties;

LookoutMetrics: AWS.AppFlow.Flow.LookoutMetricsDestinationProperties;

Zendesk: AWS.AppFlow.Flow.ZendeskDestinationProperties; };

export type ConnectorOperator = { Amplitude: String;

Datadog: String;

Dynatrace: String;

GoogleAnalytics: String;

InforNexus: String;

Marketo: String;

S3: String;

Salesforce: String;

ServiceNow: String;

Singular: String;

Slack: String;

Trendmicro: String;

Veeva: String;

Zendesk: String; };

export type ZendeskSourceProperties = { Object: String; };

export type SalesforceDestinationProperties = { Object: String;

ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;

IdFieldNames: List<String>;

WriteOperationType: String; };

export type ErrorHandlingConfig = { FailOnFirstError: Boolean;

BucketPrefix: String;

BucketName: String; };

export type S3SourceProperties = { BucketName: String;

BucketPrefix: String; };

export type SalesforceSourceProperties = { Object: String;

EnableDynamicFieldUpdate: Boolean;

IncludeDeletedRecords: Boolean; };

export type SingularSourceProperties = { Object: String; };

export type EventBridgeDestinationProperties = { Object: String;

ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig; };

export type MarketoSourceProperties = { Object: String; };

export type SlackSourceProperties = { Object: String; };

export type RedshiftDestinationProperties = { Object: String;

IntermediateBucketName: String;

BucketPrefix: String;

ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig; };

export type LookoutMetricsDestinationProperties = { Object: String; };

export type SourceFlowConfig = AWS.AppFlow.Flow.SourceFlowConfig;

export type UpsolverS3OutputFormatConfig = { FileType: String;

PrefixConfig: AWS.AppFlow.Flow.PrefixConfig;

AggregationConfig: AWS.AppFlow.Flow.AggregationConfig; };

export type UpsolverDestinationProperties = { BucketName: String;

BucketPrefix: String;

S3OutputFormatConfig: AWS.AppFlow.Flow.UpsolverS3OutputFormatConfig; };

export type ServiceNowSourceProperties = { Object: String; };

export type ZendeskDestinationProperties = { Object: String;

ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;

IdFieldNames: List<String>;

WriteOperationType: String; };

export type InforNexusSourceProperties = { Object: String; };

export type S3DestinationProperties = { BucketName: String;

BucketPrefix: String;

S3OutputFormatConfig: AWS.AppFlow.Flow.S3OutputFormatConfig; };

export type SourceConnectorProperties = { Amplitude: AWS.AppFlow.Flow.AmplitudeSourceProperties;

Datadog: AWS.AppFlow.Flow.DatadogSourceProperties;

Dynatrace: AWS.AppFlow.Flow.DynatraceSourceProperties;

GoogleAnalytics: AWS.AppFlow.Flow.GoogleAnalyticsSourceProperties;

InforNexus: AWS.AppFlow.Flow.InforNexusSourceProperties;

Marketo: AWS.AppFlow.Flow.MarketoSourceProperties;

S3: AWS.AppFlow.Flow.S3SourceProperties;

Salesforce: AWS.AppFlow.Flow.SalesforceSourceProperties;

ServiceNow: AWS.AppFlow.Flow.ServiceNowSourceProperties;

Singular: AWS.AppFlow.Flow.SingularSourceProperties;

Slack: AWS.AppFlow.Flow.SlackSourceProperties;

Trendmicro: AWS.AppFlow.Flow.TrendmicroSourceProperties;

Veeva: AWS.AppFlow.Flow.VeevaSourceProperties;

Zendesk: AWS.AppFlow.Flow.ZendeskSourceProperties; };

export type TrendmicroSourceProperties = { Object: String; };

export type SnowflakeDestinationProperties = { Object: String;

IntermediateBucketName: String;

BucketPrefix: String;

ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig; };

export type GoogleAnalyticsSourceProperties = { Object: String; };

export type VeevaSourceProperties = { Object: String; };

export type DynatraceSourceProperties = { Object: String; };

export type Task = { SourceFields: List<String>;

ConnectorOperator: AWS.AppFlow.Flow.ConnectorOperator;

DestinationField: String;

TaskType: String;

TaskProperties: List<AWS.AppFlow.Flow.TaskPropertiesObject>; };

export type TaskPropertiesObject = { Key: String;

Value: String; };

export type TriggerConfig = AWS.AppFlow.Flow.TriggerConfig;

export type AmplitudeSourceProperties = { Object: String; };

export type FlowName = String;

export type Description = String;

export type KMSArn = String;

export type DestinationFlowConfigList = List<AWS.AppFlow.Flow.DestinationFlowConfig>;

export type Tasks = List<AWS.AppFlow.Flow.Task>;

export type Tags = List<AWS.AppFlow.Flow.Tag>;

}

export namespace ConnectorProfile {

export type InforNexusConnectorProfileProperties = { InstanceUrl: String; };

export type DynatraceConnectorProfileCredentials = { ApiToken: String; };

export type MarketoConnectorProfileCredentials = { ClientId: String;

ClientSecret: String;

AccessToken: String;

ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest; };

export type RedshiftConnectorProfileCredentials = { Username: String;

Password: String; };

export type ZendeskConnectorProfileProperties = { InstanceUrl: String; };

export type GoogleAnalyticsConnectorProfileCredentials = { ClientId: String;

ClientSecret: String;

AccessToken: String;

RefreshToken: String;

ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest; };

export type DynatraceConnectorProfileProperties = { InstanceUrl: String; };

export type SalesforceConnectorProfileCredentials = { AccessToken: String;

RefreshToken: String;

ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;

ClientCredentialsArn: String; };

export type RedshiftConnectorProfileProperties = { DatabaseUrl: String;

BucketName: String;

BucketPrefix: String;

RoleArn: String; };

export type ConnectorProfileCredentials = { Amplitude: AWS.AppFlow.ConnectorProfile.AmplitudeConnectorProfileCredentials;

Datadog: AWS.AppFlow.ConnectorProfile.DatadogConnectorProfileCredentials;

Dynatrace: AWS.AppFlow.ConnectorProfile.DynatraceConnectorProfileCredentials;

GoogleAnalytics: AWS.AppFlow.ConnectorProfile.GoogleAnalyticsConnectorProfileCredentials;

InforNexus: AWS.AppFlow.ConnectorProfile.InforNexusConnectorProfileCredentials;

Marketo: AWS.AppFlow.ConnectorProfile.MarketoConnectorProfileCredentials;

Redshift: AWS.AppFlow.ConnectorProfile.RedshiftConnectorProfileCredentials;

Salesforce: AWS.AppFlow.ConnectorProfile.SalesforceConnectorProfileCredentials;

ServiceNow: AWS.AppFlow.ConnectorProfile.ServiceNowConnectorProfileCredentials;

Singular: AWS.AppFlow.ConnectorProfile.SingularConnectorProfileCredentials;

Slack: AWS.AppFlow.ConnectorProfile.SlackConnectorProfileCredentials;

Snowflake: AWS.AppFlow.ConnectorProfile.SnowflakeConnectorProfileCredentials;

Trendmicro: AWS.AppFlow.ConnectorProfile.TrendmicroConnectorProfileCredentials;

Veeva: AWS.AppFlow.ConnectorProfile.VeevaConnectorProfileCredentials;

Zendesk: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileCredentials; };

export type SingularConnectorProfileCredentials = { ApiKey: String; };

export type ServiceNowConnectorProfileCredentials = { Username: String;

Password: String; };

export type SnowflakeConnectorProfileCredentials = { Username: String;

Password: String; };

export type ZendeskConnectorProfileCredentials = { ClientId: String;

ClientSecret: String;

AccessToken: String;

ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest; };

export type SnowflakeConnectorProfileProperties = { Warehouse: String;

Stage: String;

BucketName: String;

BucketPrefix: String;

PrivateLinkServiceName: String;

AccountName: String;

Region: String; };

export type SalesforceConnectorProfileProperties = { InstanceUrl: String;

isSandboxEnvironment: Boolean; };

export type ConnectorProfileConfig = AWS.AppFlow.ConnectorProfile.ConnectorProfileConfig;

export type AmplitudeConnectorProfileCredentials = { ApiKey: String;

SecretKey: String; };

export type ConnectorOAuthRequest = { AuthCode: String;

RedirectUri: String; };

export type DatadogConnectorProfileCredentials = { ApiKey: String;

ApplicationKey: String; };

export type SlackConnectorProfileCredentials = { ClientId: String;

ClientSecret: String;

AccessToken: String;

ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest; };

export type TrendmicroConnectorProfileCredentials = { ApiSecretKey: String; };

export type VeevaConnectorProfileCredentials = { Username: String;

Password: String; };

export type VeevaConnectorProfileProperties = { InstanceUrl: String; };

export type SlackConnectorProfileProperties = { InstanceUrl: String; };

export type MarketoConnectorProfileProperties = { InstanceUrl: String; };

export type InforNexusConnectorProfileCredentials = { AccessKeyId: String;

UserId: String;

SecretAccessKey: String;

Datakey: String; };

export type DatadogConnectorProfileProperties = { InstanceUrl: String; };

export type ServiceNowConnectorProfileProperties = { InstanceUrl: String; };

export type ConnectorProfileProperties = { Datadog: AWS.AppFlow.ConnectorProfile.DatadogConnectorProfileProperties;

Dynatrace: AWS.AppFlow.ConnectorProfile.DynatraceConnectorProfileProperties;

InforNexus: AWS.AppFlow.ConnectorProfile.InforNexusConnectorProfileProperties;

Marketo: AWS.AppFlow.ConnectorProfile.MarketoConnectorProfileProperties;

Redshift: AWS.AppFlow.ConnectorProfile.RedshiftConnectorProfileProperties;

Salesforce: AWS.AppFlow.ConnectorProfile.SalesforceConnectorProfileProperties;

ServiceNow: AWS.AppFlow.ConnectorProfile.ServiceNowConnectorProfileProperties;

Slack: AWS.AppFlow.ConnectorProfile.SlackConnectorProfileProperties;

Snowflake: AWS.AppFlow.ConnectorProfile.SnowflakeConnectorProfileProperties;

Veeva: AWS.AppFlow.ConnectorProfile.VeevaConnectorProfileProperties;

Zendesk: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileProperties; };

export type ConnectorProfileName = String;

export type KMSArn = String;

export type ConnectorType = String;

export type ConnectionMode = String;

}

}

export namespace LookoutMetrics {

export namespace AnomalyDetector {

export type FileFormatDescriptor = { CsvFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.CsvFormatDescriptor;

JsonFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.JsonFormatDescriptor; };

export type CsvFormatDescriptor = { FileCompression: String;

Charset: String;

Delimiter: String;

HeaderList: List<String>;

QuoteSymbol: String;

ContainsHeader: Boolean; };

export type VpcConfiguration = { SubnetIdList: List<String>;

SecurityGroupIdList: List<String>; };

export type RDSSourceConfig = { DBInstanceIdentifier: String;

DatabaseHost: String;

DatabasePort: Integer;

SecretManagerArn: String;

DatabaseName: String;

TableName: String;

RoleArn: String;

VpcConfiguration: AWS.LookoutMetrics.AnomalyDetector.VpcConfiguration; };

export type TimestampColumn = { ColumnName: String;

ColumnFormat: String; };

export type JsonFormatDescriptor = { FileCompression: String;

Charset: String; };

export type AppFlowConfig = { RoleArn: String;

FlowName: String; };

export type MetricSource = { S3SourceConfig: AWS.LookoutMetrics.AnomalyDetector.S3SourceConfig;

RDSSourceConfig: AWS.LookoutMetrics.AnomalyDetector.RDSSourceConfig;

RedshiftSourceConfig: AWS.LookoutMetrics.AnomalyDetector.RedshiftSourceConfig;

CloudwatchConfig: AWS.LookoutMetrics.AnomalyDetector.CloudwatchConfig;

AppFlowConfig: AWS.LookoutMetrics.AnomalyDetector.AppFlowConfig; };

export type RedshiftSourceConfig = { ClusterIdentifier: String;

DatabaseHost: String;

DatabasePort: Integer;

SecretManagerArn: String;

DatabaseName: String;

TableName: String;

RoleArn: String;

VpcConfiguration: AWS.LookoutMetrics.AnomalyDetector.VpcConfiguration; };

export type Metric = { MetricName: String;

AggregationFunction: String;

Namespace: String; };

export type MetricSet = { MetricSetName: String;

MetricSetDescription: String;

MetricSource: AWS.LookoutMetrics.AnomalyDetector.MetricSource;

MetricList: List<AWS.LookoutMetrics.AnomalyDetector.Metric>;

Offset: Integer;

TimestampColumn: AWS.LookoutMetrics.AnomalyDetector.TimestampColumn;

DimensionList: List<String>;

MetricSetFrequency: String;

Timezone: String; };

export type CloudwatchConfig = { RoleArn: String; };

export type S3SourceConfig = { RoleArn: String;

TemplatedPathList: List<String>;

HistoricalDataPathList: List<String>;

FileFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.FileFormatDescriptor; };

export type AnomalyDetectorName = String;

export type AnomalyDetectorDescription = String;

export type AnomalyDetectorConfig = Json;

export type MetricSetList = List<AWS.LookoutMetrics.AnomalyDetector.MetricSet>;

export type KmsKeyArn = String;

}

export namespace Alert {

export type AlertName = String;

export type AlertDescription = String;

export type AnomalyDetectorArn = String;

export type AlertSensitivityThreshold = Integer;

export type Action = Json;

}

}

export namespace Greengrass {

export namespace CoreDefinition {

export type Core = { SyncShadow: Boolean;

ThingArn: String;

Id: String;

CertificateArn: String; };

export type CoreDefinitionVersion = { Cores: List<AWS.Greengrass.CoreDefinition.Core>; };

export type InitialVersion = AWS.Greengrass.CoreDefinition.CoreDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace FunctionDefinitionVersion {

export type FunctionConfiguration = { MemorySize: Integer;

Pinned: Boolean;

ExecArgs: String;

Timeout: Integer;

EncodingType: String;

Environment: AWS.Greengrass.FunctionDefinitionVersion.Environment;

Executable: String; };

export type Execution = { IsolationMode: String;

RunAs: AWS.Greengrass.FunctionDefinitionVersion.RunAs; };

export type DefaultConfig = AWS.Greengrass.FunctionDefinitionVersion.DefaultConfig;

export type Function = { FunctionArn: String;

FunctionConfiguration: AWS.Greengrass.FunctionDefinitionVersion.FunctionConfiguration;

Id: String; };

export type RunAs = { Uid: Integer;

Gid: Integer; };

export type Environment = { Variables: Json;

Execution: AWS.Greengrass.FunctionDefinitionVersion.Execution;

ResourceAccessPolicies: List<AWS.Greengrass.FunctionDefinitionVersion.ResourceAccessPolicy>;

AccessSysfs: Boolean; };

export type ResourceAccessPolicy = { ResourceId: String;

Permission: String; };

export type Functions = List<AWS.Greengrass.FunctionDefinitionVersion.Function>;

export type FunctionDefinitionId = String;

}

export namespace ResourceDefinitionVersion {

export type ResourceInstance = { ResourceDataContainer: AWS.Greengrass.ResourceDefinitionVersion.ResourceDataContainer;

Id: String;

Name: String; };

export type LocalDeviceResourceData = { SourcePath: String;

GroupOwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting; };

export type LocalVolumeResourceData = { SourcePath: String;

DestinationPath: String;

GroupOwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting; };

export type SecretsManagerSecretResourceData = { ARN: String;

AdditionalStagingLabelsToDownload: List<String>; };

export type SageMakerMachineLearningModelResourceData = { OwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

DestinationPath: String;

SageMakerJobArn: String; };

export type ResourceDownloadOwnerSetting = { GroupOwner: String;

GroupPermission: String; };

export type S3MachineLearningModelResourceData = { OwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

DestinationPath: String;

S3Uri: String; };

export type ResourceDataContainer = { SecretsManagerSecretResourceData: AWS.Greengrass.ResourceDefinitionVersion.SecretsManagerSecretResourceData;

SageMakerMachineLearningModelResourceData: AWS.Greengrass.ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData;

LocalVolumeResourceData: AWS.Greengrass.ResourceDefinitionVersion.LocalVolumeResourceData;

LocalDeviceResourceData: AWS.Greengrass.ResourceDefinitionVersion.LocalDeviceResourceData;

S3MachineLearningModelResourceData: AWS.Greengrass.ResourceDefinitionVersion.S3MachineLearningModelResourceData; };

export type GroupOwnerSetting = { AutoAddGroupOwner: Boolean;

GroupOwner: String; };

export type Resources = List<AWS.Greengrass.ResourceDefinitionVersion.ResourceInstance>;

export type ResourceDefinitionId = String;

}

export namespace FunctionDefinition {

export type FunctionConfiguration = { MemorySize: Integer;

Pinned: Boolean;

ExecArgs: String;

Timeout: Integer;

EncodingType: String;

Environment: AWS.Greengrass.FunctionDefinition.Environment;

Executable: String; };

export type DefaultConfig = { Execution: AWS.Greengrass.FunctionDefinition.Execution; };

export type Execution = { IsolationMode: String;

RunAs: AWS.Greengrass.FunctionDefinition.RunAs; };

export type Environment = { Variables: Json;

Execution: AWS.Greengrass.FunctionDefinition.Execution;

ResourceAccessPolicies: List<AWS.Greengrass.FunctionDefinition.ResourceAccessPolicy>;

AccessSysfs: Boolean; };

export type FunctionDefinitionVersion = { DefaultConfig: AWS.Greengrass.FunctionDefinition.DefaultConfig;

Functions: List<AWS.Greengrass.FunctionDefinition.Function>; };

export type RunAs = { Uid: Integer;

Gid: Integer; };

export type Function = { FunctionArn: String;

FunctionConfiguration: AWS.Greengrass.FunctionDefinition.FunctionConfiguration;

Id: String; };

export type ResourceAccessPolicy = { ResourceId: String;

Permission: String; };

export type InitialVersion = AWS.Greengrass.FunctionDefinition.FunctionDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace LoggerDefinitionVersion {

export type Logger = { Space: Integer;

Type: String;

Level: String;

Id: String;

Component: String; };

export type LoggerDefinitionId = String;

export type Loggers = List<AWS.Greengrass.LoggerDefinitionVersion.Logger>;

}

export namespace ResourceDefinition {

export type S3MachineLearningModelResourceData = { OwnerSetting: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

DestinationPath: String;

S3Uri: String; };

export type SecretsManagerSecretResourceData = { ARN: String;

AdditionalStagingLabelsToDownload: List<String>; };

export type ResourceDownloadOwnerSetting = { GroupOwner: String;

GroupPermission: String; };

export type SageMakerMachineLearningModelResourceData = { OwnerSetting: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

DestinationPath: String;

SageMakerJobArn: String; };

export type GroupOwnerSetting = { AutoAddGroupOwner: Boolean;

GroupOwner: String; };

export type LocalDeviceResourceData = { SourcePath: String;

GroupOwnerSetting: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting; };

export type ResourceDefinitionVersion = { Resources: List<AWS.Greengrass.ResourceDefinition.ResourceInstance>; };

export type LocalVolumeResourceData = { SourcePath: String;

DestinationPath: String;

GroupOwnerSetting: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting; };

export type ResourceInstance = { ResourceDataContainer: AWS.Greengrass.ResourceDefinition.ResourceDataContainer;

Id: String;

Name: String; };

export type ResourceDataContainer = { SecretsManagerSecretResourceData: AWS.Greengrass.ResourceDefinition.SecretsManagerSecretResourceData;

SageMakerMachineLearningModelResourceData: AWS.Greengrass.ResourceDefinition.SageMakerMachineLearningModelResourceData;

LocalVolumeResourceData: AWS.Greengrass.ResourceDefinition.LocalVolumeResourceData;

LocalDeviceResourceData: AWS.Greengrass.ResourceDefinition.LocalDeviceResourceData;

S3MachineLearningModelResourceData: AWS.Greengrass.ResourceDefinition.S3MachineLearningModelResourceData; };

export type InitialVersion = AWS.Greengrass.ResourceDefinition.ResourceDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace SubscriptionDefinition {

export type SubscriptionDefinitionVersion = { Subscriptions: List<AWS.Greengrass.SubscriptionDefinition.Subscription>; };

export type Subscription = { Target: String;

Id: String;

Source: String;

Subject: String; };

export type InitialVersion = AWS.Greengrass.SubscriptionDefinition.SubscriptionDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace ConnectorDefinition {

export type ConnectorDefinitionVersion = { Connectors: List<AWS.Greengrass.ConnectorDefinition.Connector>; };

export type Connector = { ConnectorArn: String;

Parameters: Json;

Id: String; };

export type InitialVersion = AWS.Greengrass.ConnectorDefinition.ConnectorDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace LoggerDefinition {

export type Logger = { Space: Integer;

Type: String;

Level: String;

Id: String;

Component: String; };

export type LoggerDefinitionVersion = { Loggers: List<AWS.Greengrass.LoggerDefinition.Logger>; };

export type InitialVersion = AWS.Greengrass.LoggerDefinition.LoggerDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace SubscriptionDefinitionVersion {

export type Subscription = { Target: String;

Id: String;

Source: String;

Subject: String; };

export type SubscriptionDefinitionId = String;

export type Subscriptions = List<AWS.Greengrass.SubscriptionDefinitionVersion.Subscription>;

}

export namespace CoreDefinitionVersion {

export type Core = { SyncShadow: Boolean;

ThingArn: String;

Id: String;

CertificateArn: String; };

export type Cores = List<AWS.Greengrass.CoreDefinitionVersion.Core>;

export type CoreDefinitionId = String;

}

export namespace DeviceDefinitionVersion {

export type Device = { SyncShadow: Boolean;

ThingArn: String;

Id: String;

CertificateArn: String; };

export type DeviceDefinitionId = String;

export type Devices = List<AWS.Greengrass.DeviceDefinitionVersion.Device>;

}

export namespace Group {

export type GroupVersion = { LoggerDefinitionVersionArn: String;

DeviceDefinitionVersionArn: String;

FunctionDefinitionVersionArn: String;

CoreDefinitionVersionArn: String;

ResourceDefinitionVersionArn: String;

ConnectorDefinitionVersionArn: String;

SubscriptionDefinitionVersionArn: String; };

export type InitialVersion = AWS.Greengrass.Group.GroupVersion;

export type RoleArn = String;

export type Tags = Json;

export type Name = String;

}

export namespace DeviceDefinition {

export type Device = { SyncShadow: Boolean;

ThingArn: String;

Id: String;

CertificateArn: String; };

export type DeviceDefinitionVersion = { Devices: List<AWS.Greengrass.DeviceDefinition.Device>; };

export type InitialVersion = AWS.Greengrass.DeviceDefinition.DeviceDefinitionVersion;

export type Tags = Json;

export type Name = String;

}

export namespace ConnectorDefinitionVersion {

export type Connector = { ConnectorArn: String;

Parameters: Json;

Id: String; };

export type Connectors = List<AWS.Greengrass.ConnectorDefinitionVersion.Connector>;

export type ConnectorDefinitionId = String;

}

export namespace GroupVersion {

export type LoggerDefinitionVersionArn = String;

export type DeviceDefinitionVersionArn = String;

export type FunctionDefinitionVersionArn = String;

export type CoreDefinitionVersionArn = String;

export type ResourceDefinitionVersionArn = String;

export type ConnectorDefinitionVersionArn = String;

export type SubscriptionDefinitionVersionArn = String;

export type GroupId = String;

}

}

export namespace Glue {

export namespace MLTransform {

export type FindMatchesParameters = { PrecisionRecallTradeoff: Double;

EnforceProvidedLabels: Boolean;

PrimaryKeyColumnName: String;

AccuracyCostTradeoff: Double; };

export type MLUserDataEncryption = { MLUserDataEncryptionMode: String;

KmsKeyId: String; };

export type InputRecordTables = AWS.Glue.MLTransform.InputRecordTables;

export type GlueTables = { ConnectionName: String;

TableName: String;

DatabaseName: String;

CatalogId: String; };

export type TransformEncryption = AWS.Glue.MLTransform.TransformEncryption;

export type TransformParameters = AWS.Glue.MLTransform.TransformParameters;

export type MaxRetries = Integer;

export type Description = String;

export type Timeout = Integer;

export type Name = String;

export type Role = String;

export type WorkerType = String;

export type GlueVersion = String;

export type NumberOfWorkers = Integer;

export type Tags = Json;

export type MaxCapacity = Double;

}

export namespace Database {

export type DatabaseInput = AWS.Glue.Database.DatabaseInput;

export type DatabaseIdentifier = { DatabaseName: String;

CatalogId: String; };

export type CatalogId = String;

}

export namespace Job {

export type JobCommand = { PythonVersion: String;

ScriptLocation: String;

Name: String; };

export type ConnectionsList = { Connections: List<String>; };

export type NotificationProperty = AWS.Glue.Job.NotificationProperty;

export type ExecutionProperty = AWS.Glue.Job.ExecutionProperty;

export type Connections = AWS.Glue.Job.ConnectionsList;

export type MaxRetries = Double;

export type Description = String;

export type Timeout = Integer;

export type AllocatedCapacity = Double;

export type Name = String;

export type Role = String;

export type DefaultArguments = Json;

export type WorkerType = String;

export type LogUri = String;

export type Command = AWS.Glue.Job.JobCommand;

export type GlueVersion = String;

export type SecurityConfiguration = String;

export type NumberOfWorkers = Integer;

export type Tags = Json;

export type MaxCapacity = Double;

}

export namespace Crawler {

export type CatalogTarget = { DatabaseName: String;

Tables: List<String>; };

export type Schedule = AWS.Glue.Crawler.Schedule;

export type SchemaChangePolicy = AWS.Glue.Crawler.SchemaChangePolicy;

export type Targets = AWS.Glue.Crawler.Targets;

export type JdbcTarget = { ConnectionName: String;

Path: String;

Exclusions: List<String>; };

export type DynamoDBTarget = { Path: String; };

export type S3Target = { ConnectionName: String;

Path: String;

Exclusions: List<String>; };

export type Role = String;

export type Classifiers = List<String>;

export type Description = String;

export type Configuration = String;

export type DatabaseName = String;

export type CrawlerSecurityConfiguration = String;

export type TablePrefix = String;

export type Tags = Json;

export type Name = String;

}

export namespace Connection {

export type ConnectionInput = AWS.Glue.Connection.ConnectionInput;

export type PhysicalConnectionRequirements = { AvailabilityZone: String;

SecurityGroupIdList: List<String>;

SubnetId: String; };

export type CatalogId = String;

}

export namespace SchemaVersion {

export type Schema = AWS.Glue.SchemaVersion.Schema;

export type SchemaDefinition = String;

}

export namespace Schema {

export type SchemaVersion = { IsLatest: Boolean;

VersionNumber: Integer; };

export type Registry = AWS.Glue.Schema.Registry;

export type Name = String;

export type Description = String;

export type DataFormat = String;

export type Compatibility = String;

export type SchemaDefinition = String;

export type CheckpointVersion = AWS.Glue.Schema.SchemaVersion;

export type Tags = List<AWS.Glue.Schema.Tag>;

}

export namespace DataCatalogEncryptionSettings {

export type DataCatalogEncryptionSettings = AWS.Glue.DataCatalogEncryptionSettings.DataCatalogEncryptionSettings;

export type EncryptionAtRest = { CatalogEncryptionMode: String;

SseAwsKmsKeyId: String; };

export type ConnectionPasswordEncryption = { ReturnConnectionPasswordEncrypted: Boolean;

KmsKeyId: String; };

export type CatalogId = String;

}

export namespace Trigger {

export type Condition = { CrawlerName: String;

State: String;

CrawlState: String;

LogicalOperator: String;

JobName: String; };

export type Predicate = AWS.Glue.Trigger.Predicate;

export type Action = { NotificationProperty: AWS.Glue.Trigger.NotificationProperty;

CrawlerName: String;

Timeout: Integer;

JobName: String;

Arguments: Json;

SecurityConfiguration: String; };

export type NotificationProperty = { NotifyDelayAfter: Integer; };

export type Type = String;

export type StartOnCreation = Boolean;

export type Description = String;

export type Actions = List<AWS.Glue.Trigger.Action>;

export type WorkflowName = String;

export type Schedule = String;

export type Tags = Json;

export type Name = String;

}

export namespace Partition {

export type PartitionInput = AWS.Glue.Partition.PartitionInput;

export type Order = { Column: String;

SortOrder: Integer; };

export type SchemaReference = { SchemaId: AWS.Glue.Partition.SchemaId;

SchemaVersionNumber: Integer;

SchameVersionId: String; };

export type SerdeInfo = { Parameters: Json;

SerializationLibrary: String;

Name: String; };

export type Column = { Comment: String;

Type: String;

Name: String; };

export type StorageDescriptor = { StoredAsSubDirectories: Boolean;

Parameters: Json;

BucketColumns: List<String>;

NumberOfBuckets: Integer;

OutputFormat: String;

Columns: List<AWS.Glue.Partition.Column>;

SerdeInfo: AWS.Glue.Partition.SerdeInfo;

SortColumns: List<AWS.Glue.Partition.Order>;

Compressed: Boolean;

SchemaReference: AWS.Glue.Partition.SchemaReference;

SkewedInfo: AWS.Glue.Partition.SkewedInfo;

InputFormat: String;

Location: String; };

export type SkewedInfo = { SkewedColumnNames: List<String>;

SkewedColumnValues: List<String>;

SkewedColumnValueLocationMaps: Json; };

export type SchemaId = { RegistryName: String;

SchemaName: String;

SchemaArn: String; };

export type TableName = String;

export type DatabaseName = String;

export type CatalogId = String;

}

export namespace Table {

export type Column = { Comment: String;

Type: String;

Name: String; };

export type TableInput = AWS.Glue.Table.TableInput;

export type SerdeInfo = { Parameters: Json;

SerializationLibrary: String;

Name: String; };

export type SchemaId = { RegistryName: String;

SchemaName: String;

SchemaArn: String; };

export type Order = { Column: String;

SortOrder: Integer; };

export type SkewedInfo = { SkewedColumnNames: List<String>;

SkewedColumnValues: List<String>;

SkewedColumnValueLocationMaps: Json; };

export type StorageDescriptor = { StoredAsSubDirectories: Boolean;

Parameters: Json;

BucketColumns: List<String>;

NumberOfBuckets: Integer;

OutputFormat: String;

Columns: List<AWS.Glue.Table.Column>;

SerdeInfo: AWS.Glue.Table.SerdeInfo;

SortColumns: List<AWS.Glue.Table.Order>;

Compressed: Boolean;

SchemaReference: AWS.Glue.Table.SchemaReference;

SkewedInfo: AWS.Glue.Table.SkewedInfo;

InputFormat: String;

Location: String; };

export type SchemaReference = { SchemaId: AWS.Glue.Table.SchemaId;

SchemaVersionNumber: Integer;

SchameVersionId: String; };

export type TableIdentifier = { DatabaseName: String;

CatalogId: String;

Name: String; };

export type DatabaseName = String;

export type CatalogId = String;

}

export namespace Classifier {

export type CsvClassifier = AWS.Glue.Classifier.CsvClassifier;

export type GrokClassifier = AWS.Glue.Classifier.GrokClassifier;

export type JsonClassifier = AWS.Glue.Classifier.JsonClassifier;

export type XMLClassifier = AWS.Glue.Classifier.XMLClassifier;

}

export namespace SecurityConfiguration {

export type EncryptionConfiguration = AWS.Glue.SecurityConfiguration.EncryptionConfiguration;

export type JobBookmarksEncryption = { KmsKeyArn: String;

JobBookmarksEncryptionMode: String; };

export type S3Encryptions = List<AWS.Glue.SecurityConfiguration.S3Encryption>;

export type S3Encryption = { KmsKeyArn: String;

S3EncryptionMode: String; };

export type CloudWatchEncryption = { KmsKeyArn: String;

CloudWatchEncryptionMode: String; };

export type Name = String;

}

export namespace DevEndpoint {

export type ExtraJarsS3Path = String;

export type PublicKey = String;

export type NumberOfNodes = Integer;

export type Arguments = Json;

export type SubnetId = String;

export type PublicKeys = List<String>;

export type SecurityGroupIds = List<String>;

export type RoleArn = String;

export type WorkerType = String;

export type EndpointName = String;

export type GlueVersion = String;

export type ExtraPythonLibsS3Path = String;

export type SecurityConfiguration = String;

export type NumberOfWorkers = Integer;

export type Tags = Json;

}

export namespace SchemaVersionMetadata {

export type SchemaVersionId = String;

export type Key = String;

export type Value = String;

}

export namespace Workflow {

export type Description = String;

export type DefaultRunProperties = Json;

export type Tags = Json;

export type Name = String;

}

export namespace Registry {

export type Name = String;

export type Description = String;

export type Tags = List<AWS.Glue.Registry.Tag>;

}

}

export namespace Athena {

export namespace WorkGroup {

export type WorkGroupConfigurationUpdates = AWS.Athena.WorkGroup.WorkGroupConfigurationUpdates;

export type ResultConfiguration = { EncryptionConfiguration: AWS.Athena.WorkGroup.EncryptionConfiguration;

OutputLocation: String; };

export type ResultConfigurationUpdates = { EncryptionConfiguration: AWS.Athena.WorkGroup.EncryptionConfiguration;

OutputLocation: String;

RemoveEncryptionConfiguration: Boolean;

RemoveOutputLocation: Boolean; };

export type WorkGroupConfiguration = AWS.Athena.WorkGroup.WorkGroupConfiguration;

export type EncryptionConfiguration = { EncryptionOption: String;

KmsKey: String; };

export type EngineVersion = { SelectedEngineVersion: String;

EffectiveEngineVersion: String; };

export type Name = String;

export type Description = String;

export type Tags = List<AWS.Athena.WorkGroup.Tag>;

export type State = String;

export type RecursiveDeleteOption = Boolean;

}

export namespace DataCatalog {

export type Name = String;

export type Description = String;

export type Parameters = Map<String>;

export type Tags = List<AWS.Athena.DataCatalog.Tag>;

export type Type = String;

}

export namespace NamedQuery {

export type Name = String;

export type Database = String;

export type Description = String;

export type QueryString = String;

export type WorkGroup = String;

}

}

export namespace SageMaker {

export namespace MonitoringSchedule {

export type Environment = any;

export type ConstraintsResource = { S3Uri: String; };

export type MonitoringExecutionSummary = { CreationTime: String;

EndpointName: String;

FailureReason: String;

LastModifiedTime: String;

MonitoringExecutionStatus: String;

MonitoringScheduleName: String;

ProcessingJobArn: String;

ScheduledTime: String; };

export type MonitoringOutputConfig = { KmsKeyId: String;

MonitoringOutputs: List<AWS.SageMaker.MonitoringSchedule.MonitoringOutput>; };

export type StatisticsResource = { S3Uri: String; };

export type VpcConfig = { SecurityGroupIds: List<String>;

Subnets: List<String>; };

export type ClusterConfig = { InstanceCount: Integer;

InstanceType: String;

VolumeKmsKeyId: String;

VolumeSizeInGB: Integer; };

export type MonitoringAppSpecification = { ContainerArguments: List<String>;

ContainerEntrypoint: List<String>;

ImageUri: String;

PostAnalyticsProcessorSourceUri: String;

RecordPreprocessorSourceUri: String; };

export type MonitoringJobDefinition = { BaselineConfig: AWS.SageMaker.MonitoringSchedule.BaselineConfig;

Environment: AWS.SageMaker.MonitoringSchedule.Environment;

MonitoringAppSpecification: AWS.SageMaker.MonitoringSchedule.MonitoringAppSpecification;

MonitoringInputs: List<AWS.SageMaker.MonitoringSchedule.MonitoringInput>;

MonitoringOutputConfig: AWS.SageMaker.MonitoringSchedule.MonitoringOutputConfig;

MonitoringResources: AWS.SageMaker.MonitoringSchedule.MonitoringResources;

NetworkConfig: AWS.SageMaker.MonitoringSchedule.NetworkConfig;

RoleArn: String;

StoppingCondition: AWS.SageMaker.MonitoringSchedule.StoppingCondition; };

export type BaselineConfig = { ConstraintsResource: AWS.SageMaker.MonitoringSchedule.ConstraintsResource;

StatisticsResource: AWS.SageMaker.MonitoringSchedule.StatisticsResource; };

export type MonitoringOutput = { S3Output: AWS.SageMaker.MonitoringSchedule.S3Output; };

export type ScheduleConfig = { ScheduleExpression: String; };

export type MonitoringScheduleConfig = AWS.SageMaker.MonitoringSchedule.MonitoringScheduleConfig;

export type EndpointInput = { EndpointName: String;

LocalPath: String;

S3DataDistributionType: String;

S3InputMode: String; };

export type NetworkConfig = { EnableInterContainerTrafficEncryption: Boolean;

EnableNetworkIsolation: Boolean;

VpcConfig: AWS.SageMaker.MonitoringSchedule.VpcConfig; };

export type S3Output = { LocalPath: String;

S3UploadMode: String;

S3Uri: String; };

export type MonitoringResources = { ClusterConfig: AWS.SageMaker.MonitoringSchedule.ClusterConfig; };

export type StoppingCondition = { MaxRuntimeInSeconds: Integer; };

export type MonitoringInput = { EndpointInput: AWS.SageMaker.MonitoringSchedule.EndpointInput; };

export type MonitoringScheduleName = String;

export type Tags = List<AWS.SageMaker.MonitoringSchedule.Tag>;

export type EndpointName = String;

export type FailureReason = String;

export type LastMonitoringExecutionSummary = AWS.SageMaker.MonitoringSchedule.MonitoringExecutionSummary;

export type MonitoringScheduleStatus = String;

}

export namespace ModelBiasJobDefinition {

export type ClusterConfig = { InstanceCount: Integer;

InstanceType: String;

VolumeKmsKeyId: String;

VolumeSizeInGB: Integer; };

export type S3Output = { LocalPath: String;

S3UploadMode: String;

S3Uri: String; };

export type ModelBiasBaselineConfig = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasBaselineConfig;

export type ModelBiasJobInput = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasJobInput;

export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelBiasJobDefinition.ClusterConfig; };

export type ModelBiasAppSpecification = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasAppSpecification;

export type MonitoringGroundTruthS3Input = { S3Uri: String; };

export type ConstraintsResource = { S3Uri: String; };

export type StoppingCondition = AWS.SageMaker.ModelBiasJobDefinition.StoppingCondition;

export type Environment = any;

export type MonitoringOutputConfig = { KmsKeyId: String;

MonitoringOutputs: List<AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutput>; };

export type VpcConfig = { SecurityGroupIds: List<String>;

Subnets: List<String>; };

export type NetworkConfig = AWS.SageMaker.ModelBiasJobDefinition.NetworkConfig;

export type EndpointInput = { EndpointName: String;

LocalPath: String;

S3DataDistributionType: String;

S3InputMode: String;

StartTimeOffset: String;

EndTimeOffset: String;

FeaturesAttribute: String;

InferenceAttribute: String;

ProbabilityAttribute: String;

ProbabilityThresholdAttribute: Double; };

export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelBiasJobDefinition.S3Output; };

export type JobDefinitionName = String;

export type ModelBiasJobOutputConfig = AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutputConfig;

export type JobResources = AWS.SageMaker.ModelBiasJobDefinition.MonitoringResources;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.ModelBiasJobDefinition.Tag>;

}

export namespace DataQualityJobDefinition {

export type DataQualityBaselineConfig = AWS.SageMaker.DataQualityJobDefinition.DataQualityBaselineConfig;

export type StatisticsResource = { S3Uri: String; };

export type ConstraintsResource = { S3Uri: String; };

export type Environment = any;

export type DataQualityJobInput = AWS.SageMaker.DataQualityJobDefinition.DataQualityJobInput;

export type MonitoringResources = { ClusterConfig: AWS.SageMaker.DataQualityJobDefinition.ClusterConfig; };

export type MonitoringOutput = { S3Output: AWS.SageMaker.DataQualityJobDefinition.S3Output; };

export type MonitoringOutputConfig = { KmsKeyId: String;

MonitoringOutputs: List<AWS.SageMaker.DataQualityJobDefinition.MonitoringOutput>; };

export type DataQualityAppSpecification = AWS.SageMaker.DataQualityJobDefinition.DataQualityAppSpecification;

export type ClusterConfig = { InstanceCount: Integer;

InstanceType: String;

VolumeKmsKeyId: String;

VolumeSizeInGB: Integer; };

export type VpcConfig = { SecurityGroupIds: List<String>;

Subnets: List<String>; };

export type S3Output = { LocalPath: String;

S3UploadMode: String;

S3Uri: String; };

export type StoppingCondition = AWS.SageMaker.DataQualityJobDefinition.StoppingCondition;

export type NetworkConfig = AWS.SageMaker.DataQualityJobDefinition.NetworkConfig;

export type EndpointInput = { EndpointName: String;

LocalPath: String;

S3DataDistributionType: String;

S3InputMode: String; };

export type JobDefinitionName = String;

export type DataQualityJobOutputConfig = AWS.SageMaker.DataQualityJobDefinition.MonitoringOutputConfig;

export type JobResources = AWS.SageMaker.DataQualityJobDefinition.MonitoringResources;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.DataQualityJobDefinition.Tag>;

}

export namespace AppImageConfig {

export type KernelGatewayImageConfig = AWS.SageMaker.AppImageConfig.KernelGatewayImageConfig;

export type FileSystemConfig = { DefaultGid: Integer;

DefaultUid: Integer;

MountPath: String; };

export type KernelSpec = { DisplayName: String;

Name: String; };

export type AppImageConfigName = String;

export type Tags = List<AWS.SageMaker.AppImageConfig.Tag>;

}

export namespace Endpoint {

export type Alarm = { AlarmName: String; };

export type AutoRollbackConfig = { Alarms: List<AWS.SageMaker.Endpoint.Alarm>; };

export type TrafficRoutingConfig = { Type: String;

CanarySize: AWS.SageMaker.Endpoint.CapacitySize;

WaitIntervalInSeconds: Integer; };

export type DeploymentConfig = AWS.SageMaker.Endpoint.DeploymentConfig;

export type CapacitySize = { Type: String;

Value: Integer; };

export type VariantProperty = { VariantPropertyType: String; };

export type BlueGreenUpdatePolicy = { MaximumExecutionTimeoutInSeconds: Integer;

TerminationWaitInSeconds: Integer;

TrafficRoutingConfiguration: AWS.SageMaker.Endpoint.TrafficRoutingConfig; };

export type RetainAllVariantProperties = Boolean;

export type EndpointName = String;

export type ExcludeRetainedVariantProperties = List<AWS.SageMaker.Endpoint.VariantProperty>;

export type EndpointConfigName = String;

export type Tags = List<AWS.SageMaker.Endpoint.Tag>;

}

export namespace Model {

export type MultiModelConfig = { ModelCacheSetting: String; };

export type VpcConfig = AWS.SageMaker.Model.VpcConfig;

export type ContainerDefinition = { ImageConfig: AWS.SageMaker.Model.ImageConfig;

ContainerHostname: String;

ModelPackageName: String;

Mode: String;

Environment: Json;

ModelDataUrl: String;

Image: String;

MultiModelConfig: AWS.SageMaker.Model.MultiModelConfig; };

export type ImageConfig = { RepositoryAccessMode: String; };

export type InferenceExecutionConfig = AWS.SageMaker.Model.InferenceExecutionConfig;

export type ExecutionRoleArn = String;

export type EnableNetworkIsolation = Boolean;

export type PrimaryContainer = AWS.SageMaker.Model.ContainerDefinition;

export type ModelName = String;

export type Containers = List<AWS.SageMaker.Model.ContainerDefinition>;

export type Tags = List<AWS.SageMaker.Model.Tag>;

}

export namespace Domain {

export type JupyterServerAppSettings = { DefaultResourceSpec: AWS.SageMaker.Domain.ResourceSpec; };

export type UserSettings = { ExecutionRole: String;

JupyterServerAppSettings: AWS.SageMaker.Domain.JupyterServerAppSettings;

KernelGatewayAppSettings: AWS.SageMaker.Domain.KernelGatewayAppSettings;

SecurityGroups: List<String>;

SharingSettings: AWS.SageMaker.Domain.SharingSettings; };

export type CustomImage = { AppImageConfigName: String;

ImageName: String;

ImageVersionNumber: Integer; };

export type ResourceSpec = { InstanceType: String;

SageMakerImageArn: String;

SageMakerImageVersionArn: String; };

export type KernelGatewayAppSettings = { CustomImages: List<AWS.SageMaker.Domain.CustomImage>;

DefaultResourceSpec: AWS.SageMaker.Domain.ResourceSpec; };

export type SharingSettings = { NotebookOutputOption: String;

S3KmsKeyId: String;

S3OutputPath: String; };

export type AppNetworkAccessType = String;

export type AuthMode = String;

export type DefaultUserSettings = AWS.SageMaker.Domain.UserSettings;

export type DomainName = String;

export type KmsKeyId = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.SageMaker.Domain.Tag>;

export type VpcId = String;

}

export namespace DeviceFleet {

export type EdgeOutputConfig = { S3OutputLocation: String;

KmsKeyId: String; };

export type Description = String;

export type DeviceFleetName = String;

export type OutputConfig = AWS.SageMaker.DeviceFleet.EdgeOutputConfig;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.DeviceFleet.Tag>;

}

export namespace ModelExplainabilityJobDefinition {

export type ModelExplainabilityAppSpecification = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification;

export type ModelExplainabilityJobInput = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityJobInput;

export type ClusterConfig = { InstanceCount: Integer;

InstanceType: String;

VolumeKmsKeyId: String;

VolumeSizeInGB: Integer; };

export type ConstraintsResource = { S3Uri: String; };

export type StoppingCondition = AWS.SageMaker.ModelExplainabilityJobDefinition.StoppingCondition;

export type Environment = any;

export type S3Output = { LocalPath: String;

S3UploadMode: String;

S3Uri: String; };

export type NetworkConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.NetworkConfig;

export type ModelExplainabilityBaselineConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig;

export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelExplainabilityJobDefinition.S3Output; };

export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelExplainabilityJobDefinition.ClusterConfig; };

export type MonitoringOutputConfig = { KmsKeyId: String;

MonitoringOutputs: List<AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutput>; };

export type VpcConfig = { SecurityGroupIds: List<String>;

Subnets: List<String>; };

export type EndpointInput = { EndpointName: String;

LocalPath: String;

S3DataDistributionType: String;

S3InputMode: String;

FeaturesAttribute: String;

InferenceAttribute: String;

ProbabilityAttribute: String; };

export type JobDefinitionName = String;

export type ModelExplainabilityJobOutputConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutputConfig;

export type JobResources = AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringResources;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.ModelExplainabilityJobDefinition.Tag>;

}

export namespace UserProfile {

export type JupyterServerAppSettings = { DefaultResourceSpec: AWS.SageMaker.UserProfile.ResourceSpec; };

export type ResourceSpec = { InstanceType: String;

SageMakerImageArn: String;

SageMakerImageVersionArn: String; };

export type KernelGatewayAppSettings = { CustomImages: List<AWS.SageMaker.UserProfile.CustomImage>;

DefaultResourceSpec: AWS.SageMaker.UserProfile.ResourceSpec; };

export type CustomImage = { AppImageConfigName: String;

ImageName: String;

ImageVersionNumber: Integer; };

export type SharingSettings = { NotebookOutputOption: String;

S3KmsKeyId: String;

S3OutputPath: String; };

export type UserSettings = AWS.SageMaker.UserProfile.UserSettings;

export type DomainId = String;

export type SingleSignOnUserIdentifier = String;

export type SingleSignOnUserValue = String;

export type UserProfileName = String;

export type Tags = List<AWS.SageMaker.UserProfile.Tag>;

}

export namespace EndpointConfig {

export type CaptureOption = { CaptureMode: String; };

export type ProductionVariant = { ModelName: String;

VariantName: String;

InitialInstanceCount: Integer;

InstanceType: String;

AcceleratorType: String;

InitialVariantWeight: Double; };

export type CaptureContentTypeHeader = { JsonContentTypes: List<String>;

CsvContentTypes: List<String>; };

export type DataCaptureConfig = AWS.SageMaker.EndpointConfig.DataCaptureConfig;

export type ProductionVariants = List<AWS.SageMaker.EndpointConfig.ProductionVariant>;

export type KmsKeyId = String;

export type EndpointConfigName = String;

export type Tags = List<AWS.SageMaker.EndpointConfig.Tag>;

}

export namespace ModelQualityJobDefinition {

export type ModelQualityJobInput = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityJobInput;

export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelQualityJobDefinition.ClusterConfig; };

export type EndpointInput = { EndpointName: String;

LocalPath: String;

S3DataDistributionType: String;

S3InputMode: String;

StartTimeOffset: String;

EndTimeOffset: String;

InferenceAttribute: String;

ProbabilityAttribute: String;

ProbabilityThresholdAttribute: Double; };

export type NetworkConfig = AWS.SageMaker.ModelQualityJobDefinition.NetworkConfig;

export type VpcConfig = { SecurityGroupIds: List<String>;

Subnets: List<String>; };

export type Environment = any;

export type ModelQualityAppSpecification = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityAppSpecification;

export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelQualityJobDefinition.S3Output; };

export type ClusterConfig = { InstanceCount: Integer;

InstanceType: String;

VolumeKmsKeyId: String;

VolumeSizeInGB: Integer; };

export type ConstraintsResource = { S3Uri: String; };

export type S3Output = { LocalPath: String;

S3UploadMode: String;

S3Uri: String; };

export type MonitoringGroundTruthS3Input = { S3Uri: String; };

export type ModelQualityBaselineConfig = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityBaselineConfig;

export type StoppingCondition = AWS.SageMaker.ModelQualityJobDefinition.StoppingCondition;

export type MonitoringOutputConfig = { KmsKeyId: String;

MonitoringOutputs: List<AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutput>; };

export type JobDefinitionName = String;

export type ModelQualityJobOutputConfig = AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutputConfig;

export type JobResources = AWS.SageMaker.ModelQualityJobDefinition.MonitoringResources;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.ModelQualityJobDefinition.Tag>;

}

export namespace Device {

export type Device = AWS.SageMaker.Device.Device;

export type DeviceFleetName = String;

export type Tags = List<AWS.SageMaker.Device.Tag>;

}

export namespace Workteam {

export type NotificationConfiguration = AWS.SageMaker.Workteam.NotificationConfiguration;

export type CognitoMemberDefinition = { CognitoUserPool: String;

CognitoClientId: String;

CognitoUserGroup: String; };

export type MemberDefinition = { CognitoMemberDefinition: AWS.SageMaker.Workteam.CognitoMemberDefinition; };

export type Description = String;

export type WorkteamName = String;

export type MemberDefinitions = List<AWS.SageMaker.Workteam.MemberDefinition>;

export type Tags = List<AWS.SageMaker.Workteam.Tag>;

}

export namespace NotebookInstanceLifecycleConfig {

export type NotebookInstanceLifecycleHook = { Content: String; };

export type OnStart = List<AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook>;

export type NotebookInstanceLifecycleConfigName = String;

export type OnCreate = List<AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook>;

}

export namespace CodeRepository {

export type GitConfig = AWS.SageMaker.CodeRepository.GitConfig;

export type CodeRepositoryName = String;

export type Tags = List<AWS.SageMaker.CodeRepository.Tag>;

}

export namespace App {

export type ResourceSpec = AWS.SageMaker.App.ResourceSpec;

export type AppName = String;

export type AppType = String;

export type DomainId = String;

export type Tags = List<AWS.SageMaker.App.Tag>;

export type UserProfileName = String;

}

export namespace FeatureGroup {

export type FeatureDefinition = { FeatureName: String;

FeatureType: String; };

export type FeatureGroupName = String;

export type RecordIdentifierFeatureName = String;

export type EventTimeFeatureName = String;

export type FeatureDefinitions = List<AWS.SageMaker.FeatureGroup.FeatureDefinition>;

export type OnlineStoreConfig = Json;

export type OfflineStoreConfig = Json;

export type RoleArn = String;

export type Description = String;

export type Tags = List<AWS.SageMaker.FeatureGroup.Tag>;

}

export namespace ImageVersion {

export type ImageName = String;

export type BaseImage = String;

}

export namespace ModelPackageGroup {

export type Tags = List<AWS.SageMaker.ModelPackageGroup.Tag>;

export type ModelPackageGroupName = String;

export type ModelPackageGroupDescription = String;

export type ModelPackageGroupPolicy = Json;

}

export namespace NotebookInstance {

export type KmsKeyId = String;

export type VolumeSizeInGB = Integer;

export type AdditionalCodeRepositories = List<String>;

export type DefaultCodeRepository = String;

export type DirectInternetAccess = String;

export type AcceleratorTypes = List<String>;

export type SubnetId = String;

export type SecurityGroupIds = List<String>;

export type RoleArn = String;

export type RootAccess = String;

export type NotebookInstanceName = String;

export type InstanceType = String;

export type LifecycleConfigName = String;

export type Tags = List<AWS.SageMaker.NotebookInstance.Tag>;

}

export namespace Pipeline {

export type PipelineName = String;

export type PipelineDisplayName = String;

export type PipelineDescription = String;

export type PipelineDefinition = Json;

export type RoleArn = String;

export type Tags = List<AWS.SageMaker.Pipeline.Tag>;

}

export namespace Project {

export type Tags = List<AWS.SageMaker.Project.Tag>;

export type ProjectName = String;

export type ProjectDescription = String;

export type ServiceCatalogProvisioningDetails = Json;

}

export namespace Image {

export type ImageName = String;

export type ImageRoleArn = String;

export type ImageDisplayName = String;

export type ImageDescription = String;

export type Tags = List<AWS.SageMaker.Image.Tag>;

}

}

export namespace S3 {

export namespace AccessPoint {

export type PublicAccessBlockConfiguration = AWS.S3.AccessPoint.PublicAccessBlockConfiguration;

export type VpcConfiguration = AWS.S3.AccessPoint.VpcConfiguration;

export type Name = String;

export type Bucket = String;

export type Policy = Json;

}

export namespace StorageLens {

export type PrefixLevelStorageMetrics = { IsEnabled: Boolean;

SelectionCriteria: AWS.S3.StorageLens.SelectionCriteria; };

export type SelectionCriteria = { MaxDepth: Integer;

Delimiter: String;

MinStorageBytesPercentage: Double; };

export type ActivityMetrics = { IsEnabled: Boolean; };

export type BucketLevel = { ActivityMetrics: AWS.S3.StorageLens.ActivityMetrics;

PrefixLevel: AWS.S3.StorageLens.PrefixLevel; };

export type BucketsAndRegions = { Buckets: List<String>;

Regions: List<String>; };

export type DataExport = { S3BucketDestination: AWS.S3.StorageLens.S3BucketDestination; };

export type AwsOrg = { Arn: String; };

export type PrefixLevel = { StorageMetrics: AWS.S3.StorageLens.PrefixLevelStorageMetrics; };

export type Encryption = any;

export type S3BucketDestination = { OutputSchemaVersion: String;

Format: String;

AccountId: String;

Arn: String;

Prefix: String;

Encryption: AWS.S3.StorageLens.Encryption; };

export type StorageLensConfiguration = AWS.S3.StorageLens.StorageLensConfiguration;

export type AccountLevel = { ActivityMetrics: AWS.S3.StorageLens.ActivityMetrics;

BucketLevel: AWS.S3.StorageLens.BucketLevel; };

export type Tags = List<AWS.S3.StorageLens.Tag>;

}

export namespace Bucket {

export type OwnershipControls = AWS.S3.Bucket.OwnershipControls;

export type ReplicaModifications = { Status: String; };

export type CorsRule = { AllowedHeaders: List<String>;

AllowedMethods: List<String>;

AllowedOrigins: List<String>;

ExposedHeaders: List<String>;

Id: String;

MaxAge: Integer; };

export type Destination = { BucketAccountId: String;

BucketArn: String;

Format: String;

Prefix: String; };

export type OwnershipControlsRule = { ObjectOwnership: String; };

export type AccessControlTranslation = { Owner: String; };

export type VersioningConfiguration = AWS.S3.Bucket.VersioningConfiguration;

export type ReplicationTime = { Status: String;

Time: AWS.S3.Bucket.ReplicationTimeValue; };

export type ServerSideEncryptionByDefault = { KMSMasterKeyID: String;

SSEAlgorithm: String; };

export type Tiering = { AccessTier: String;

Days: Integer; };

export type SseKmsEncryptedObjects = { Status: String; };

export type QueueConfiguration = { Event: String;

Filter: AWS.S3.Bucket.NotificationFilter;

Queue: String; };

export type ObjectLockConfiguration = AWS.S3.Bucket.ObjectLockConfiguration;

export type AccelerateConfiguration = AWS.S3.Bucket.AccelerateConfiguration;

export type IntelligentTieringConfiguration = { Id: String;

Prefix: String;

Status: String;

TagFilters: List<AWS.S3.Bucket.TagFilter>;

Tierings: List<AWS.S3.Bucket.Tiering>; };

export type AbortIncompleteMultipartUpload = { DaysAfterInitiation: Integer; };

export type DeleteMarkerReplication = { Status: String; };

export type PublicAccessBlockConfiguration = AWS.S3.Bucket.PublicAccessBlockConfiguration;

export type ReplicationRule = { DeleteMarkerReplication: AWS.S3.Bucket.DeleteMarkerReplication;

Destination: AWS.S3.Bucket.ReplicationDestination;

Filter: AWS.S3.Bucket.ReplicationRuleFilter;

Id: String;

Prefix: String;

Priority: Integer;

SourceSelectionCriteria: AWS.S3.Bucket.SourceSelectionCriteria;

Status: String; };

export type SourceSelectionCriteria = { ReplicaModifications: AWS.S3.Bucket.ReplicaModifications;

SseKmsEncryptedObjects: AWS.S3.Bucket.SseKmsEncryptedObjects; };

export type StorageClassAnalysis = { DataExport: AWS.S3.Bucket.DataExport; };

export type RedirectRule = { HostName: String;

HttpRedirectCode: String;

Protocol: String;

ReplaceKeyPrefixWith: String;

ReplaceKeyWith: String; };

export type ObjectLockRule = { DefaultRetention: AWS.S3.Bucket.DefaultRetention; };

export type Rule = { AbortIncompleteMultipartUpload: AWS.S3.Bucket.AbortIncompleteMultipartUpload;

ExpirationDate: Timestamp;

ExpirationInDays: Integer;

ExpiredObjectDeleteMarker: Boolean;

Id: String;

NoncurrentVersionExpirationInDays: Integer;

NoncurrentVersionTransition: AWS.S3.Bucket.NoncurrentVersionTransition;

NoncurrentVersionTransitions: List<AWS.S3.Bucket.NoncurrentVersionTransition>;

Prefix: String;

Status: String;

TagFilters: List<AWS.S3.Bucket.TagFilter>;

Transition: AWS.S3.Bucket.Transition;

Transitions: List<AWS.S3.Bucket.Transition>; };

export type MetricsConfiguration = { Id: String;

Prefix: String;

TagFilters: List<AWS.S3.Bucket.TagFilter>; };

export type DataExport = { Destination: AWS.S3.Bucket.Destination;

OutputSchemaVersion: String; };

export type ReplicationTimeValue = { Minutes: Integer; };

export type FilterRule = { Name: String;

Value: String; };

export type ReplicationRuleAndOperator = { Prefix: String;

TagFilters: List<AWS.S3.Bucket.TagFilter>; };

export type BucketEncryption = AWS.S3.Bucket.BucketEncryption;

export type Metrics = { EventThreshold: AWS.S3.Bucket.ReplicationTimeValue;

Status: String; };

export type RoutingRuleCondition = { HttpErrorCodeReturnedEquals: String;

KeyPrefixEquals: String; };

export type LifecycleConfiguration = AWS.S3.Bucket.LifecycleConfiguration;

export type NotificationConfiguration = AWS.S3.Bucket.NotificationConfiguration;

export type RedirectAllRequestsTo = { HostName: String;

Protocol: String; };

export type S3KeyFilter = { Rules: List<AWS.S3.Bucket.FilterRule>; };

export type InventoryConfiguration = { Destination: AWS.S3.Bucket.Destination;

Enabled: Boolean;

Id: String;

IncludedObjectVersions: String;

OptionalFields: List<String>;

Prefix: String;

ScheduleFrequency: String; };

export type ReplicationConfiguration = AWS.S3.Bucket.ReplicationConfiguration;

export type CorsConfiguration = AWS.S3.Bucket.CorsConfiguration;

export type ReplicationDestination = { AccessControlTranslation: AWS.S3.Bucket.AccessControlTranslation;

Account: String;

Bucket: String;

EncryptionConfiguration: AWS.S3.Bucket.EncryptionConfiguration;

Metrics: AWS.S3.Bucket.Metrics;

ReplicationTime: AWS.S3.Bucket.ReplicationTime;

StorageClass: String; };

export type NoncurrentVersionTransition = { StorageClass: String;

TransitionInDays: Integer; };

export type DefaultRetention = { Days: Integer;

Mode: String;

Years: Integer; };

export type NotificationFilter = { S3Key: AWS.S3.Bucket.S3KeyFilter; };

export type LambdaConfiguration = { Event: String;

Filter: AWS.S3.Bucket.NotificationFilter;

Function: String; };

export type ServerSideEncryptionRule = { BucketKeyEnabled: Boolean;

ServerSideEncryptionByDefault: AWS.S3.Bucket.ServerSideEncryptionByDefault; };

export type AnalyticsConfiguration = { Id: String;

Prefix: String;

StorageClassAnalysis: AWS.S3.Bucket.StorageClassAnalysis;

TagFilters: List<AWS.S3.Bucket.TagFilter>; };

export type LoggingConfiguration = AWS.S3.Bucket.LoggingConfiguration;

export type RoutingRule = { RedirectRule: AWS.S3.Bucket.RedirectRule;

RoutingRuleCondition: AWS.S3.Bucket.RoutingRuleCondition; };

export type EncryptionConfiguration = { ReplicaKmsKeyID: String; };

export type WebsiteConfiguration = AWS.S3.Bucket.WebsiteConfiguration;

export type TopicConfiguration = { Event: String;

Filter: AWS.S3.Bucket.NotificationFilter;

Topic: String; };

export type TagFilter = { Key: String;

Value: String; };

export type Transition = { StorageClass: String;

TransitionDate: Timestamp;

TransitionInDays: Integer; };

export type ReplicationRuleFilter = { And: AWS.S3.Bucket.ReplicationRuleAndOperator;

Prefix: String;

TagFilter: AWS.S3.Bucket.TagFilter; };

export type AccessControl = String;

export type AnalyticsConfigurations = List<AWS.S3.Bucket.AnalyticsConfiguration>;

export type BucketName = String;

export type IntelligentTieringConfigurations = List<AWS.S3.Bucket.IntelligentTieringConfiguration>;

export type InventoryConfigurations = List<AWS.S3.Bucket.InventoryConfiguration>;

export type MetricsConfigurations = List<AWS.S3.Bucket.MetricsConfiguration>;

export type ObjectLockEnabled = Boolean;

export type Tags = List<AWS.S3.Bucket.Tag>;

}

export namespace BucketPolicy {

export type Bucket = String;

export type PolicyDocument = Json;

}

}

export namespace ElasticBeanstalk {

export namespace Environment {

export type OptionSetting = { Namespace: String;

OptionName: String;

ResourceName: String;

Value: String; };

export type Tier = AWS.ElasticBeanstalk.Environment.Tier;

export type ApplicationName = String;

export type CNAMEPrefix = String;

export type Description = String;

export type EnvironmentName = String;

export type OperationsRole = String;

export type OptionSettings = List<AWS.ElasticBeanstalk.Environment.OptionSetting>;

export type PlatformArn = String;

export type SolutionStackName = String;

export type Tags = List<AWS.ElasticBeanstalk.Environment.Tag>;

export type TemplateName = String;

export type VersionLabel = String;

}

export namespace ApplicationVersion {

export type SourceBundle = AWS.ElasticBeanstalk.ApplicationVersion.SourceBundle;

export type ApplicationName = String;

export type Description = String;

}

export namespace Application {

export type MaxAgeRule = { DeleteSourceFromS3: Boolean;

Enabled: Boolean;

MaxAgeInDays: Integer; };

export type ApplicationResourceLifecycleConfig = { ServiceRole: String;

VersionLifecycleConfig: AWS.ElasticBeanstalk.Application.ApplicationVersionLifecycleConfig; };

export type ApplicationVersionLifecycleConfig = { MaxAgeRule: AWS.ElasticBeanstalk.Application.MaxAgeRule;

MaxCountRule: AWS.ElasticBeanstalk.Application.MaxCountRule; };

export type MaxCountRule = { DeleteSourceFromS3: Boolean;

Enabled: Boolean;

MaxCount: Integer; };

export type ApplicationName = String;

export type Description = String;

export type ResourceLifecycleConfig = AWS.ElasticBeanstalk.Application.ApplicationResourceLifecycleConfig;

}

export namespace ConfigurationTemplate {

export type SourceConfiguration = AWS.ElasticBeanstalk.ConfigurationTemplate.SourceConfiguration;

export type ConfigurationOptionSetting = { Namespace: String;

OptionName: String;

ResourceName: String;

Value: String; };

export type ApplicationName = String;

export type Description = String;

export type EnvironmentId = String;

export type OptionSettings = List<AWS.ElasticBeanstalk.ConfigurationTemplate.ConfigurationOptionSetting>;

export type PlatformArn = String;

export type SolutionStackName = String;

}

}

export namespace Pinpoint {

export namespace Campaign {

export type MetricDimension = { ComparisonOperator: String;

Value: Double; };

export type Schedule = AWS.Pinpoint.Campaign.Schedule;

export type QuietTime = { Start: String;

End: String; };

export type Message = { JsonBody: String;

Action: String;

MediaUrl: String;

TimeToLive: Integer;

ImageSmallIconUrl: String;

ImageUrl: String;

Title: String;

ImageIconUrl: String;

SilentPush: Boolean;

Body: String;

RawContent: String;

Url: String; };

export type CampaignEventFilter = { FilterType: String;

Dimensions: AWS.Pinpoint.Campaign.EventDimensions; };

export type CampaignSmsMessage = { EntityId: String;

OriginationNumber: String;

SenderId: String;

Body: String;

MessageType: String;

TemplateId: String; };

export type WriteTreatmentResource = { TreatmentDescription: String;

MessageConfiguration: AWS.Pinpoint.Campaign.MessageConfiguration;

Schedule: AWS.Pinpoint.Campaign.Schedule;

SizePercent: Integer;

TreatmentName: String; };

export type SetDimension = { DimensionType: String;

Values: List<String>; };

export type EventDimensions = { Metrics: Json;

EventType: AWS.Pinpoint.Campaign.SetDimension;

Attributes: Json; };

export type Limits = AWS.Pinpoint.Campaign.Limits;

export type AttributeDimension = { AttributeType: String;

Values: List<String>; };

export type MessageConfiguration = AWS.Pinpoint.Campaign.MessageConfiguration;

export type CampaignHook = AWS.Pinpoint.Campaign.CampaignHook;

export type CampaignEmailMessage = { FromAddress: String;

HtmlBody: String;

Title: String;

Body: String; };

export type Description = String;

export type SegmentId = String;

export type IsPaused = Boolean;

export type AdditionalTreatments = List<AWS.Pinpoint.Campaign.WriteTreatmentResource>;

export type Name = String;

export type SegmentVersion = Integer;

export type TreatmentDescription = String;

export type HoldoutPercent = Integer;

export type ApplicationId = String;

export type Tags = Json;

export type TreatmentName = String;

}

export namespace Segment {

export type AttributeDimension = { AttributeType: String;

Values: List<String>; };

export type Recency = { Duration: String;

RecencyType: String; };

export type Groups = { Type: String;

SourceType: String;

Dimensions: List<AWS.Pinpoint.Segment.SegmentDimensions>;

SourceSegments: List<AWS.Pinpoint.Segment.SourceSegments>; };

export type Location = { GPSPoint: AWS.Pinpoint.Segment.GPSPoint;

Country: AWS.Pinpoint.Segment.SetDimension; };

export type SegmentGroups = AWS.Pinpoint.Segment.SegmentGroups;

export type Coordinates = { Latitude: Double;

Longitude: Double; };

export type SegmentDimensions = { Demographic: AWS.Pinpoint.Segment.Demographic;

Metrics: Json;

Attributes: Json;

Behavior: AWS.Pinpoint.Segment.Behavior;

UserAttributes: Json;

Location: AWS.Pinpoint.Segment.Location; };

export type SourceSegments = { Version: Integer;

Id: String; };

export type GPSPoint = { RangeInKilometers: Double;

Coordinates: AWS.Pinpoint.Segment.Coordinates; };

export type Demographic = { AppVersion: AWS.Pinpoint.Segment.SetDimension;

DeviceType: AWS.Pinpoint.Segment.SetDimension;

Platform: AWS.Pinpoint.Segment.SetDimension;

Channel: AWS.Pinpoint.Segment.SetDimension;

Model: AWS.Pinpoint.Segment.SetDimension;

Make: AWS.Pinpoint.Segment.SetDimension; };

export type SetDimension = { DimensionType: String;

Values: List<String>; };

export type Behavior = { Recency: AWS.Pinpoint.Segment.Recency; };

export type Dimensions = AWS.Pinpoint.Segment.SegmentDimensions;

export type ApplicationId = String;

export type Tags = Json;

export type Name = String;

}

export namespace ApplicationSettings {

export type CampaignHook = AWS.Pinpoint.ApplicationSettings.CampaignHook;

export type Limits = AWS.Pinpoint.ApplicationSettings.Limits;

export type QuietTime = AWS.Pinpoint.ApplicationSettings.QuietTime;

export type ApplicationId = String;

export type CloudWatchMetricsEnabled = Boolean;

}

export namespace PushTemplate {

export type DefaultPushNotificationTemplate = { Action: String;

Title: String;

Sound: String;

Body: String;

Url: String; };

export type AndroidPushNotificationTemplate = { Action: String;

ImageUrl: String;

SmallImageIconUrl: String;

Title: String;

ImageIconUrl: String;

Sound: String;

Body: String;

Url: String; };

export type APNSPushNotificationTemplate = { Action: String;

MediaUrl: String;

Title: String;

Sound: String;

Body: String;

Url: String; };

export type GCM = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

export type Baidu = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

export type TemplateName = String;

export type ADM = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

export type APNS = AWS.Pinpoint.PushTemplate.APNSPushNotificationTemplate;

export type TemplateDescription = String;

export type DefaultSubstitutions = String;

export type Default = AWS.Pinpoint.PushTemplate.DefaultPushNotificationTemplate;

export type Tags = Json;

}

export namespace VoiceChannel {

export type Enabled = Boolean;

export type ApplicationId = String;

}

export namespace EventStream {

export type ApplicationId = String;

export type DestinationStreamArn = String;

export type RoleArn = String;

}

export namespace EmailTemplate {

export type HtmlPart = String;

export type TextPart = String;

export type TemplateName = String;

export type TemplateDescription = String;

export type DefaultSubstitutions = String;

export type Subject = String;

export type Tags = Json;

}

export namespace BaiduChannel {

export type SecretKey = String;

export type ApiKey = String;

export type Enabled = Boolean;

export type ApplicationId = String;

}

export namespace GCMChannel {

export type ApiKey = String;

export type Enabled = Boolean;

export type ApplicationId = String;

}

export namespace APNSChannel {

export type BundleId = String;

export type PrivateKey = String;

export type Enabled = Boolean;

export type DefaultAuthenticationMethod = String;

export type TokenKey = String;

export type ApplicationId = String;

export type TeamId = String;

export type Certificate = String;

export type TokenKeyId = String;

}

export namespace APNSVoipSandboxChannel {

export type BundleId = String;

export type PrivateKey = String;

export type Enabled = Boolean;

export type DefaultAuthenticationMethod = String;

export type TokenKey = String;

export type ApplicationId = String;

export type TeamId = String;

export type Certificate = String;

export type TokenKeyId = String;

}

export namespace APNSVoipChannel {

export type BundleId = String;

export type PrivateKey = String;

export type Enabled = Boolean;

export type DefaultAuthenticationMethod = String;

export type TokenKey = String;

export type ApplicationId = String;

export type TeamId = String;

export type Certificate = String;

export type TokenKeyId = String;

}

export namespace EmailChannel {

export type ConfigurationSet = String;

export type FromAddress = String;

export type Enabled = Boolean;

export type ApplicationId = String;

export type Identity = String;

export type RoleArn = String;

}

export namespace SMSChannel {

export type ShortCode = String;

export type Enabled = Boolean;

export type ApplicationId = String;

export type SenderId = String;

}

export namespace SmsTemplate {

export type TemplateName = String;

export type TemplateDescription = String;

export type DefaultSubstitutions = String;

export type Body = String;

export type Tags = Json;

}

export namespace APNSSandboxChannel {

export type BundleId = String;

export type PrivateKey = String;

export type Enabled = Boolean;

export type DefaultAuthenticationMethod = String;

export type TokenKey = String;

export type ApplicationId = String;

export type TeamId = String;

export type Certificate = String;

export type TokenKeyId = String;

}

export namespace ADMChannel {

export type ClientSecret = String;

export type Enabled = Boolean;

export type ClientId = String;

export type ApplicationId = String;

}

export namespace App {

export type Tags = Json;

export type Name = String;

}

}

export namespace EventSchemas {

export namespace Schema {

export type TagsEntry = { Value: String;

Key: String; };

export type Type = String;

export type Description = String;

export type Content = String;

export type RegistryName = String;

export type SchemaName = String;

export type Tags = List<AWS.EventSchemas.Schema.TagsEntry>;

}

export namespace Discoverer {

export type TagsEntry = { Value: String;

Key: String; };

export type Description = String;

export type SourceArn = String;

export type Tags = List<AWS.EventSchemas.Discoverer.TagsEntry>;

}

export namespace Registry {

export type TagsEntry = { Value: String;

Key: String; };

export type Description = String;

export type RegistryName = String;

export type Tags = List<AWS.EventSchemas.Registry.TagsEntry>;

}

export namespace RegistryPolicy {

export type Policy = Json;

export type RegistryName = String;

export type RevisionId = String;

}

}

export namespace CustomerProfiles {

export namespace Integration {

export type Task = { ConnectorOperator: AWS.CustomerProfiles.Integration.ConnectorOperator;

SourceFields: List<String>;

DestinationField: String;

TaskType: String;

TaskProperties: List<AWS.CustomerProfiles.Integration.TaskPropertiesMap>; };

export type TriggerProperties = { Scheduled: AWS.CustomerProfiles.Integration.ScheduledTriggerProperties; };

export type ScheduledTriggerProperties = { ScheduleExpression: String;

DataPullMode: String;

ScheduleStartTime: Double;

ScheduleEndTime: Double;

Timezone: String;

ScheduleOffset: Integer;

FirstExecutionFrom: Double; };

export type S3SourceProperties = { BucketName: String;

BucketPrefix: String; };

export type FlowDefinition = AWS.CustomerProfiles.Integration.FlowDefinition;

export type IncrementalPullConfig = { DatetimeTypeFieldName: String; };

export type MarketoSourceProperties = { Object: String; };

export type TaskPropertiesMap = { OperatorPropertyKey: String;

Property: String; };

export type ConnectorOperator = { Marketo: String;

S3: String;

Salesforce: String;

ServiceNow: String;

Zendesk: String; };

export type ZendeskSourceProperties = { Object: String; };

export type SourceConnectorProperties = { Marketo: AWS.CustomerProfiles.Integration.MarketoSourceProperties;

S3: AWS.CustomerProfiles.Integration.S3SourceProperties;

Salesforce: AWS.CustomerProfiles.Integration.SalesforceSourceProperties;

ServiceNow: AWS.CustomerProfiles.Integration.ServiceNowSourceProperties;

Zendesk: AWS.CustomerProfiles.Integration.ZendeskSourceProperties; };

export type ServiceNowSourceProperties = { Object: String; };

export type SalesforceSourceProperties = { Object: String;

EnableDynamicFieldUpdate: Boolean;

IncludeDeletedRecords: Boolean; };

export type TriggerConfig = { TriggerType: String;

TriggerProperties: AWS.CustomerProfiles.Integration.TriggerProperties; };

export type SourceFlowConfig = { ConnectorType: String;

ConnectorProfileName: String;

IncrementalPullConfig: AWS.CustomerProfiles.Integration.IncrementalPullConfig;

SourceConnectorProperties: AWS.CustomerProfiles.Integration.SourceConnectorProperties; };

export type DomainName = String;

export type Uri = String;

export type ObjectTypeName = String;

export type Tags = List<AWS.CustomerProfiles.Integration.Tag>;

}

export namespace ObjectType {

export type KeyMap = { Name: String;

ObjectTypeKeyList: List<AWS.CustomerProfiles.ObjectType.ObjectTypeKey>; };

export type FieldMap = { Name: String;

ObjectTypeField: AWS.CustomerProfiles.ObjectType.ObjectTypeField; };

export type ObjectTypeField = { Source: String;

Target: String;

ContentType: String; };

export type ObjectTypeKey = { FieldNames: List<String>;

StandardIdentifiers: List<String>; };

export type DomainName = String;

export type ObjectTypeName = String;

export type AllowProfileCreation = Boolean;

export type Description = String;

export type EncryptionKey = String;

export type ExpirationDays = Integer;

export type Fields = List<AWS.CustomerProfiles.ObjectType.FieldMap>;

export type Keys = List<AWS.CustomerProfiles.ObjectType.KeyMap>;

export type Tags = List<AWS.CustomerProfiles.ObjectType.Tag>;

export type TemplateId = String;

}

export namespace Domain {

export type DomainName = String;

export type DeadLetterQueueUrl = String;

export type DefaultEncryptionKey = String;

export type DefaultExpirationDays = Integer;

export type Tags = List<AWS.CustomerProfiles.Domain.Tag>;

}

}

export namespace AppRunner {

export namespace Service {

export type ImageConfiguration = { StartCommand: String;

Port: String;

RuntimeEnvironmentVariables: List<AWS.AppRunner.Service.KeyValuePair>; };

export type InstanceConfiguration = AWS.AppRunner.Service.InstanceConfiguration;

export type AuthenticationConfiguration = { ConnectionArn: String;

AccessRoleArn: String; };

export type KeyValuePair = { Name: String;

Value: String; };

export type EncryptionConfiguration = AWS.AppRunner.Service.EncryptionConfiguration;

export type HealthCheckConfiguration = AWS.AppRunner.Service.HealthCheckConfiguration;

export type CodeConfigurationValues = { Runtime: String;

BuildCommand: String;

StartCommand: String;

Port: String;

RuntimeEnvironmentVariables: List<AWS.AppRunner.Service.KeyValuePair>; };

export type SourceCodeVersion = { Type: String;

Value: String; };

export type ImageRepository = { ImageIdentifier: String;

ImageConfiguration: AWS.AppRunner.Service.ImageConfiguration;

ImageRepositoryType: String; };

export type SourceConfiguration = AWS.AppRunner.Service.SourceConfiguration;

export type CodeRepository = { RepositoryUrl: String;

SourceCodeVersion: AWS.AppRunner.Service.SourceCodeVersion;

CodeConfiguration: AWS.AppRunner.Service.CodeConfiguration; };

export type CodeConfiguration = { ConfigurationSource: String;

CodeConfigurationValues: AWS.AppRunner.Service.CodeConfigurationValues; };

export type ServiceName = String;

export type Tags = List<AWS.AppRunner.Service.Tag>;

export type AutoScalingConfigurationArn = String;

}

}

export namespace DMS {

export namespace Endpoint {

export type KinesisSettings = AWS.DMS.Endpoint.KinesisSettings;

export type S3Settings = AWS.DMS.Endpoint.S3Settings;

export type PostgreSqlSettings = AWS.DMS.Endpoint.PostgreSqlSettings;

export type MicrosoftSqlServerSettings = AWS.DMS.Endpoint.MicrosoftSqlServerSettings;

export type MongoDbSettings = AWS.DMS.Endpoint.MongoDbSettings;

export type KafkaSettings = AWS.DMS.Endpoint.KafkaSettings;

export type MySqlSettings = AWS.DMS.Endpoint.MySqlSettings;

export type NeptuneSettings = AWS.DMS.Endpoint.NeptuneSettings;

export type IbmDb2Settings = AWS.DMS.Endpoint.IbmDb2Settings;

export type ElasticsearchSettings = AWS.DMS.Endpoint.ElasticsearchSettings;

export type OracleSettings = AWS.DMS.Endpoint.OracleSettings;

export type DynamoDbSettings = AWS.DMS.Endpoint.DynamoDbSettings;

export type DocDbSettings = AWS.DMS.Endpoint.DocDbSettings;

export type SybaseSettings = AWS.DMS.Endpoint.SybaseSettings;

export type RedshiftSettings = AWS.DMS.Endpoint.RedshiftSettings;

export type Port = Integer;

export type ResourceIdentifier = String;

export type SslMode = String;

export type EndpointType = String;

export type Tags = List<AWS.DMS.Endpoint.Tag>;

export type Password = String;

export type KmsKeyId = String;

export type DatabaseName = String;

export type EngineName = String;

export type Username = String;

export type ServerName = String;

export type ExtraConnectionAttributes = String;

export type EndpointIdentifier = String;

export type CertificateArn = String;

}

export namespace ReplicationSubnetGroup {

export type ReplicationSubnetGroupDescription = String;

export type ReplicationSubnetGroupIdentifier = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.DMS.ReplicationSubnetGroup.Tag>;

}

export namespace EventSubscription {

export type SourceType = String;

export type EventCategories = List<String>;

export type Enabled = Boolean;

export type SubscriptionName = String;

export type SnsTopicArn = String;

export type SourceIds = List<String>;

export type Tags = List<AWS.DMS.EventSubscription.Tag>;

}

export namespace Certificate {

export type CertificateIdentifier = String;

export type CertificatePem = String;

export type CertificateWallet = String;

}

export namespace ReplicationTask {

export type ReplicationTaskSettings = String;

export type CdcStartPosition = String;

export type CdcStopPosition = String;

export type MigrationType = String;

export type TargetEndpointArn = String;

export type ReplicationInstanceArn = String;

export type TaskData = String;

export type CdcStartTime = Double;

export type ResourceIdentifier = String;

export type TableMappings = String;

export type ReplicationTaskIdentifier = String;

export type SourceEndpointArn = String;

export type Tags = List<AWS.DMS.ReplicationTask.Tag>;

}

export namespace ReplicationInstance {

export type ReplicationInstanceIdentifier = String;

export type EngineVersion = String;

export type KmsKeyId = String;

export type AvailabilityZone = String;

export type PreferredMaintenanceWindow = String;

export type AutoMinorVersionUpgrade = Boolean;

export type ReplicationSubnetGroupIdentifier = String;

export type AllocatedStorage = Integer;

export type ResourceIdentifier = String;

export type VpcSecurityGroupIds = List<String>;

export type AllowMajorVersionUpgrade = Boolean;

export type ReplicationInstanceClass = String;

export type PubliclyAccessible = Boolean;

export type MultiAZ = Boolean;

export type Tags = List<AWS.DMS.ReplicationInstance.Tag>;

}

}

export namespace IoTAnalytics {

export namespace Dataset {

export type DatasetContentVersionValue = { DatasetName: String; };

export type GlueConfiguration = { TableName: String;

DatabaseName: String; };

export type DeltaTimeSessionWindowConfiguration = { TimeoutInMinutes: Integer; };

export type OutputFileUriValue = { FileName: String; };

export type Filter = { DeltaTime: AWS.IoTAnalytics.Dataset.DeltaTime; };

export type DatasetContentDeliveryRule = { Destination: AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRuleDestination;

EntryName: String; };

export type Action = { ActionName: String;

ContainerAction: AWS.IoTAnalytics.Dataset.ContainerAction;

QueryAction: AWS.IoTAnalytics.Dataset.QueryAction; };

export type LateDataRuleConfiguration = { DeltaTimeSessionWindowConfiguration: AWS.IoTAnalytics.Dataset.DeltaTimeSessionWindowConfiguration; };

export type ContainerAction = { Variables: List<AWS.IoTAnalytics.Dataset.Variable>;

ExecutionRoleArn: String;

Image: String;

ResourceConfiguration: AWS.IoTAnalytics.Dataset.ResourceConfiguration; };

export type LateDataRule = { RuleConfiguration: AWS.IoTAnalytics.Dataset.LateDataRuleConfiguration;

RuleName: String; };

export type QueryAction = { Filters: List<AWS.IoTAnalytics.Dataset.Filter>;

SqlQuery: String; };

export type DatasetContentDeliveryRuleDestination = { IotEventsDestinationConfiguration: AWS.IoTAnalytics.Dataset.IotEventsDestinationConfiguration;

S3DestinationConfiguration: AWS.IoTAnalytics.Dataset.S3DestinationConfiguration; };

export type VersioningConfiguration = AWS.IoTAnalytics.Dataset.VersioningConfiguration;

export type Schedule = { ScheduleExpression: String; };

export type RetentionPeriod = AWS.IoTAnalytics.Dataset.RetentionPeriod;

export type S3DestinationConfiguration = { GlueConfiguration: AWS.IoTAnalytics.Dataset.GlueConfiguration;

Bucket: String;

Key: String;

RoleArn: String; };

export type Variable = { DatasetContentVersionValue: AWS.IoTAnalytics.Dataset.DatasetContentVersionValue;

DoubleValue: Double;

OutputFileUriValue: AWS.IoTAnalytics.Dataset.OutputFileUriValue;

VariableName: String;

StringValue: String; };

export type DeltaTime = { TimeExpression: String;

OffsetSeconds: Integer; };

export type Trigger = { Schedule: AWS.IoTAnalytics.Dataset.Schedule;

TriggeringDataset: AWS.IoTAnalytics.Dataset.TriggeringDataset; };

export type IotEventsDestinationConfiguration = { InputName: String;

RoleArn: String; };

export type ResourceConfiguration = { VolumeSizeInGB: Integer;

ComputeType: String; };

export type TriggeringDataset = { DatasetName: String; };

export type Actions = List<AWS.IoTAnalytics.Dataset.Action>;

export type LateDataRules = List<AWS.IoTAnalytics.Dataset.LateDataRule>;

export type DatasetName = String;

export type ContentDeliveryRules = List<AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRule>;

export type Triggers = List<AWS.IoTAnalytics.Dataset.Trigger>;

export type Tags = List<AWS.IoTAnalytics.Dataset.Tag>;

}

export namespace Pipeline {

export type DeviceShadowEnrich = { Attribute: String;

Next: String;

ThingName: String;

RoleArn: String;

Name: String; };

export type SelectAttributes = { Next: String;

Attributes: List<String>;

Name: String; };

export type RemoveAttributes = { Next: String;

Attributes: List<String>;

Name: String; };

export type Datastore = { DatastoreName: String;

Name: String; };

export type DeviceRegistryEnrich = { Attribute: String;

Next: String;

ThingName: String;

RoleArn: String;

Name: String; };

export type Lambda = { BatchSize: Integer;

Next: String;

LambdaName: String;

Name: String; };

export type Channel = { ChannelName: String;

Next: String;

Name: String; };

export type Filter = { Filter: String;

Next: String;

Name: String; };

export type Activity = { SelectAttributes: AWS.IoTAnalytics.Pipeline.SelectAttributes;

Datastore: AWS.IoTAnalytics.Pipeline.Datastore;

Filter: AWS.IoTAnalytics.Pipeline.Filter;

AddAttributes: AWS.IoTAnalytics.Pipeline.AddAttributes;

Channel: AWS.IoTAnalytics.Pipeline.Channel;

DeviceShadowEnrich: AWS.IoTAnalytics.Pipeline.DeviceShadowEnrich;

Math: AWS.IoTAnalytics.Pipeline.Math;

Lambda: AWS.IoTAnalytics.Pipeline.Lambda;

DeviceRegistryEnrich: AWS.IoTAnalytics.Pipeline.DeviceRegistryEnrich;

RemoveAttributes: AWS.IoTAnalytics.Pipeline.RemoveAttributes; };

export type Math = { Attribute: String;

Next: String;

Math: String;

Name: String; };

export type AddAttributes = { Next: String;

Attributes: Json;

Name: String; };

export type PipelineName = String;

export type Tags = List<AWS.IoTAnalytics.Pipeline.Tag>;

export type PipelineActivities = List<AWS.IoTAnalytics.Pipeline.Activity>;

}

export namespace Datastore {

export type FileFormatConfiguration = AWS.IoTAnalytics.Datastore.FileFormatConfiguration;

export type ServiceManagedS3 = {  };

export type RetentionPeriod = AWS.IoTAnalytics.Datastore.RetentionPeriod;

export type CustomerManagedS3 = { Bucket: String;

RoleArn: String;

KeyPrefix: String; };

export type DatastorePartitions = AWS.IoTAnalytics.Datastore.DatastorePartitions;

export type SchemaDefinition = { Columns: List<AWS.IoTAnalytics.Datastore.Column>; };

export type Column = { Type: String;

Name: String; };

export type ParquetConfiguration = { SchemaDefinition: AWS.IoTAnalytics.Datastore.SchemaDefinition; };

export type DatastoreStorage = AWS.IoTAnalytics.Datastore.DatastoreStorage;

export type Partition = { AttributeName: String; };

export type DatastorePartition = { Partition: AWS.IoTAnalytics.Datastore.Partition;

TimestampPartition: AWS.IoTAnalytics.Datastore.TimestampPartition; };

export type TimestampPartition = { AttributeName: String;

TimestampFormat: String; };

export type JsonConfiguration = {  };

export type DatastoreName = String;

export type Tags = List<AWS.IoTAnalytics.Datastore.Tag>;

}

export namespace Channel {

export type CustomerManagedS3 = { Bucket: String;

RoleArn: String;

KeyPrefix: String; };

export type RetentionPeriod = AWS.IoTAnalytics.Channel.RetentionPeriod;

export type ServiceManagedS3 = {  };

export type ChannelStorage = AWS.IoTAnalytics.Channel.ChannelStorage;

export type ChannelName = String;

export type Tags = List<AWS.IoTAnalytics.Channel.Tag>;

}

}

export namespace CloudTrail {

export namespace Trail {

export type EventSelector = { DataResources: List<AWS.CloudTrail.Trail.DataResource>;

IncludeManagementEvents: Boolean;

ReadWriteType: String; };

export type DataResource = { Type: String;

Values: List<String>; };

export type CloudWatchLogsLogGroupArn = String;

export type CloudWatchLogsRoleArn = String;

export type EnableLogFileValidation = Boolean;

export type EventSelectors = List<AWS.CloudTrail.Trail.EventSelector>;

export type IncludeGlobalServiceEvents = Boolean;

export type IsLogging = Boolean;

export type IsMultiRegionTrail = Boolean;

export type KMSKeyId = String;

export type S3BucketName = String;

export type S3KeyPrefix = String;

export type SnsTopicName = String;

export type Tags = List<AWS.CloudTrail.Trail.Tag>;

export type TrailName = String;

}

}

export namespace SES {

export namespace ReceiptRule {

export type BounceAction = { Sender: String;

SmtpReplyCode: String;

Message: String;

TopicArn: String;

StatusCode: String; };

export type Action = { BounceAction: AWS.SES.ReceiptRule.BounceAction;

S3Action: AWS.SES.ReceiptRule.S3Action;

StopAction: AWS.SES.ReceiptRule.StopAction;

SNSAction: AWS.SES.ReceiptRule.SNSAction;

WorkmailAction: AWS.SES.ReceiptRule.WorkmailAction;

AddHeaderAction: AWS.SES.ReceiptRule.AddHeaderAction;

LambdaAction: AWS.SES.ReceiptRule.LambdaAction; };

export type StopAction = { Scope: String;

TopicArn: String; };

export type SNSAction = { TopicArn: String;

Encoding: String; };

export type S3Action = { BucketName: String;

KmsKeyArn: String;

TopicArn: String;

ObjectKeyPrefix: String; };

export type WorkmailAction = { TopicArn: String;

OrganizationArn: String; };

export type Rule = AWS.SES.ReceiptRule.Rule;

export type LambdaAction = { FunctionArn: String;

TopicArn: String;

InvocationType: String; };

export type AddHeaderAction = { HeaderValue: String;

HeaderName: String; };

export type After = String;

export type RuleSetName = String;

}

export namespace ReceiptFilter {

export type Filter = AWS.SES.ReceiptFilter.Filter;

export type IpFilter = { Policy: String;

Cidr: String; };

}

export namespace ConfigurationSetEventDestination {

export type EventDestination = AWS.SES.ConfigurationSetEventDestination.EventDestination;

export type DimensionConfiguration = { DimensionValueSource: String;

DefaultDimensionValue: String;

DimensionName: String; };

export type KinesisFirehoseDestination = { IAMRoleARN: String;

DeliveryStreamARN: String; };

export type CloudWatchDestination = { DimensionConfigurations: List<AWS.SES.ConfigurationSetEventDestination.DimensionConfiguration>; };

export type ConfigurationSetName = String;

}

export namespace Template {

export type Template = AWS.SES.Template.Template;

}

export namespace ContactList {

export type Topic = { TopicName: String;

DisplayName: String;

Description: String;

DefaultSubscriptionStatus: String; };

export type ContactListName = String;

export type Description = String;

export type Topics = List<AWS.SES.ContactList.Topic>;

export type Tags = List<AWS.SES.ContactList.Tag>;

}

export namespace ConfigurationSet {

export type Name = String;

}

export namespace ReceiptRuleSet {

export type RuleSetName = String;

}

}

export namespace XRay {

export namespace Group {

export type InsightsConfiguration = AWS.XRay.Group.InsightsConfiguration;

export type FilterExpression = String;

export type GroupName = String;

export type Tags = List<Json>;

}

export namespace SamplingRule {

export type SamplingRuleUpdate = AWS.XRay.SamplingRule.SamplingRuleUpdate;

export type SamplingRuleRecord = AWS.XRay.SamplingRule.SamplingRuleRecord;

export type SamplingRule = AWS.XRay.SamplingRule.SamplingRule;

export type RuleName = String;

export type Tags = List<Json>;

}

}

export namespace PinpointEmail {

export namespace ConfigurationSetEventDestination {

export type DimensionConfiguration = { DimensionValueSource: String;

DefaultDimensionValue: String;

DimensionName: String; };

export type CloudWatchDestination = { DimensionConfigurations: List<AWS.PinpointEmail.ConfigurationSetEventDestination.DimensionConfiguration>; };

export type SnsDestination = { TopicArn: String; };

export type PinpointDestination = { ApplicationArn: String; };

export type KinesisFirehoseDestination = { DeliveryStreamArn: String;

IamRoleArn: String; };

export type EventDestination = AWS.PinpointEmail.ConfigurationSetEventDestination.EventDestination;

export type EventDestinationName = String;

export type ConfigurationSetName = String;

}

export namespace ConfigurationSet {

export type SendingOptions = AWS.PinpointEmail.ConfigurationSet.SendingOptions;

export type ReputationOptions = AWS.PinpointEmail.ConfigurationSet.ReputationOptions;

export type TrackingOptions = AWS.PinpointEmail.ConfigurationSet.TrackingOptions;

export type Tags = List<AWS.PinpointEmail.ConfigurationSet.Tags>;

export type DeliveryOptions = AWS.PinpointEmail.ConfigurationSet.DeliveryOptions;

export type Name = String;

}

export namespace DedicatedIpPool {

export type Tags = List<AWS.PinpointEmail.DedicatedIpPool.Tags>;

export type PoolName = String;

}

export namespace Identity {

export type Tags = List<AWS.PinpointEmail.Identity.Tags>;

export type MailFromAttributes = AWS.PinpointEmail.Identity.MailFromAttributes;

export type FeedbackForwardingEnabled = Boolean;

export type DkimSigningEnabled = Boolean;

export type Name = String;

}

}

export namespace IoT {

export namespace TopicRule {

export type AssetPropertyVariant = { StringValue: String;

DoubleValue: String;

BooleanValue: String;

IntegerValue: String; };

export type SigV4Authorization = { ServiceName: String;

SigningRegion: String;

RoleArn: String; };

export type SqsAction = { RoleArn: String;

UseBase64: Boolean;

QueueUrl: String; };

export type PutItemInput = { TableName: String; };

export type SnsAction = { TargetArn: String;

MessageFormat: String;

RoleArn: String; };

export type HttpAction = { ConfirmationUrl: String;

Headers: List<AWS.IoT.TopicRule.HttpActionHeader>;

Url: String;

Auth: AWS.IoT.TopicRule.HttpAuthorization; };

export type PutAssetPropertyValueEntry = { PropertyAlias: String;

PropertyValues: List<AWS.IoT.TopicRule.AssetPropertyValue>;

AssetId: String;

EntryId: String;

PropertyId: String; };

export type LambdaAction = { FunctionArn: String; };

export type DynamoDBAction = { TableName: String;

PayloadField: String;

RangeKeyField: String;

HashKeyField: String;

RangeKeyValue: String;

RangeKeyType: String;

HashKeyType: String;

HashKeyValue: String;

RoleArn: String; };

export type IotAnalyticsAction = { RoleArn: String;

ChannelName: String;

BatchMode: Boolean; };

export type IotEventsAction = { InputName: String;

RoleArn: String;

MessageId: String;

BatchMode: Boolean; };

export type KafkaAction = { DestinationArn: String;

Topic: String;

Key: String;

Partition: String;

ClientProperties: Map<String>; };

export type TimestreamAction = { RoleArn: String;

DatabaseName: String;

TableName: String;

Dimensions: List<AWS.IoT.TopicRule.TimestreamDimension>;

Timestamp: AWS.IoT.TopicRule.TimestreamTimestamp;

BatchMode: Boolean; };

export type IotSiteWiseAction = { RoleArn: String;

PutAssetPropertyValueEntries: List<AWS.IoT.TopicRule.PutAssetPropertyValueEntry>; };

export type DynamoDBv2Action = { PutItem: AWS.IoT.TopicRule.PutItemInput;

RoleArn: String; };

export type CloudwatchMetricAction = { MetricName: String;

MetricValue: String;

MetricNamespace: String;

MetricUnit: String;

RoleArn: String;

MetricTimestamp: String; };

export type S3Action = { BucketName: String;

Key: String;

RoleArn: String;

CannedAcl: String; };

export type FirehoseAction = { DeliveryStreamName: String;

RoleArn: String;

Separator: String;

BatchMode: Boolean; };

export type AssetPropertyTimestamp = { TimeInSeconds: String;

OffsetInNanos: String; };

export type AssetPropertyValue = { Value: AWS.IoT.TopicRule.AssetPropertyVariant;

Timestamp: AWS.IoT.TopicRule.AssetPropertyTimestamp;

Quality: String; };

export type ElasticsearchAction = { Type: String;

Index: String;

Id: String;

Endpoint: String;

RoleArn: String; };

export type KinesisAction = { PartitionKey: String;

StreamName: String;

RoleArn: String; };

export type Action = { S3: AWS.IoT.TopicRule.S3Action;

CloudwatchAlarm: AWS.IoT.TopicRule.CloudwatchAlarmAction;

CloudwatchLogs: AWS.IoT.TopicRule.CloudwatchLogsAction;

IotEvents: AWS.IoT.TopicRule.IotEventsAction;

Firehose: AWS.IoT.TopicRule.FirehoseAction;

Republish: AWS.IoT.TopicRule.RepublishAction;

StepFunctions: AWS.IoT.TopicRule.StepFunctionsAction;

DynamoDB: AWS.IoT.TopicRule.DynamoDBAction;

Http: AWS.IoT.TopicRule.HttpAction;

DynamoDBv2: AWS.IoT.TopicRule.DynamoDBv2Action;

CloudwatchMetric: AWS.IoT.TopicRule.CloudwatchMetricAction;

IotSiteWise: AWS.IoT.TopicRule.IotSiteWiseAction;

Elasticsearch: AWS.IoT.TopicRule.ElasticsearchAction;

Sqs: AWS.IoT.TopicRule.SqsAction;

Kinesis: AWS.IoT.TopicRule.KinesisAction;

IotAnalytics: AWS.IoT.TopicRule.IotAnalyticsAction;

Sns: AWS.IoT.TopicRule.SnsAction;

Lambda: AWS.IoT.TopicRule.LambdaAction;

Timestream: AWS.IoT.TopicRule.TimestreamAction;

Kafka: AWS.IoT.TopicRule.KafkaAction; };

export type HttpAuthorization = { Sigv4: AWS.IoT.TopicRule.SigV4Authorization; };

export type HttpActionHeader = { Value: String;

Key: String; };

export type RepublishAction = { Qos: Integer;

Topic: String;

RoleArn: String; };

export type StepFunctionsAction = { ExecutionNamePrefix: String;

StateMachineName: String;

RoleArn: String; };

export type TopicRulePayload = AWS.IoT.TopicRule.TopicRulePayload;

export type CloudwatchAlarmAction = { StateValue: String;

AlarmName: String;

StateReason: String;

RoleArn: String; };

export type CloudwatchLogsAction = { LogGroupName: String;

RoleArn: String; };

export type TimestreamDimension = { Name: String;

Value: String; };

export type TimestreamTimestamp = { Value: String;

Unit: String; };

export type RuleName = String;

export type Tags = List<AWS.IoT.TopicRule.Tag>;

}

export namespace MitigationAction {

export type AddThingsToThingGroupParams = { OverrideDynamicGroups: Boolean;

ThingGroupNames: List<String>; };

export type UpdateCACertificateParams = { Action: String; };

export type UpdateDeviceCertificateParams = { Action: String; };

export type ReplaceDefaultPolicyVersionParams = { TemplateName: String; };

export type EnableIoTLoggingParams = { LogLevel: String;

RoleArnForLogging: String; };

export type ActionParams = AWS.IoT.MitigationAction.ActionParams;

export type PublishFindingToSnsParams = { TopicArn: String; };

export type ActionName = String;

export type RoleArn = String;

export type Tags = List<AWS.IoT.MitigationAction.Tag>;

}

export namespace TopicRuleDestination {

export type VpcDestinationProperties = { SubnetIds: List<String>;

SecurityGroups: List<String>;

VpcId: String;

RoleArn: String; };

export type HttpUrlDestinationSummary = { ConfirmationUrl: String; };

export type Status = String;

export type HttpUrlProperties = AWS.IoT.TopicRuleDestination.HttpUrlDestinationSummary;

export type VpcProperties = AWS.IoT.TopicRuleDestination.VpcDestinationProperties;

}

export namespace SecurityProfile {

export type MetricToRetain = { Metric: String;

MetricDimension: AWS.IoT.SecurityProfile.MetricDimension; };

export type MachineLearningDetectionConfig = { ConfidenceLevel: String; };

export type MetricDimension = { DimensionName: String;

Operator: String; };

export type MetricValue = { Count: String;

Cidrs: List<String>;

Ports: List<Integer>;

Number: Double;

Numbers: List<Double>;

Strings: List<String>; };

export type AlertTarget = { AlertTargetArn: String;

RoleArn: String; };

export type Behavior = { Name: String;

Metric: String;

MetricDimension: AWS.IoT.SecurityProfile.MetricDimension;

Criteria: AWS.IoT.SecurityProfile.BehaviorCriteria;

SuppressAlerts: Boolean; };

export type BehaviorCriteria = { ComparisonOperator: String;

Value: AWS.IoT.SecurityProfile.MetricValue;

DurationSeconds: Integer;

ConsecutiveDatapointsToAlarm: Integer;

ConsecutiveDatapointsToClear: Integer;

StatisticalThreshold: AWS.IoT.SecurityProfile.StatisticalThreshold;

MlDetectionConfig: AWS.IoT.SecurityProfile.MachineLearningDetectionConfig; };

export type StatisticalThreshold = { Statistic: String; };

export type SecurityProfileName = String;

export type SecurityProfileDescription = String;

export type Behaviors = List<AWS.IoT.SecurityProfile.Behavior>;

export type AlertTargets = Map<AWS.IoT.SecurityProfile.AlertTarget>;

export type AdditionalMetricsToRetainV2 = List<AWS.IoT.SecurityProfile.MetricToRetain>;

export type Tags = List<AWS.IoT.SecurityProfile.Tag>;

export type TargetArns = List<String>;

}

export namespace AccountAuditConfiguration {

export type AuditCheckConfiguration = { Enabled: Boolean; };

export type AuditNotificationTargetConfigurations = AWS.IoT.AccountAuditConfiguration.AuditNotificationTargetConfigurations;

export type AuditNotificationTarget = { TargetArn: String;

RoleArn: String;

Enabled: Boolean; };

export type AuditCheckConfigurations = AWS.IoT.AccountAuditConfiguration.AuditCheckConfigurations;

export type AccountId = String;

export type RoleArn = String;

}

export namespace ProvisioningTemplate {

export type ProvisioningHook = { TargetArn: String;

PayloadVersion: String; };

export type TemplateName = String;

export type Description = String;

export type Enabled = Boolean;

export type ProvisioningRoleArn = String;

export type TemplateBody = String;

export type PreProvisioningHook = AWS.IoT.ProvisioningTemplate.ProvisioningHook;

export type Tags = List<AWS.IoT.ProvisioningTemplate.Tag>;

}

export namespace Thing {

export type AttributePayload = AWS.IoT.Thing.AttributePayload;

export type ThingName = String;

}

export namespace DomainConfiguration {

export type AuthorizerConfig = AWS.IoT.DomainConfiguration.AuthorizerConfig;

export type ServerCertificateSummary = { ServerCertificateArn: String;

ServerCertificateStatus: String;

ServerCertificateStatusDetail: String; };

export type DomainConfigurationName = String;

export type DomainName = String;

export type ServerCertificateArns = List<String>;

export type ServiceType = String;

export type ValidationCertificateArn = String;

export type DomainConfigurationStatus = String;

export type Tags = List<AWS.IoT.DomainConfiguration.Tag>;

}

export namespace CustomMetric {

export type MetricName = String;

export type DisplayName = String;

export type MetricType = String;

export type Tags = List<AWS.IoT.CustomMetric.Tag>;

}

export namespace Authorizer {

export type AuthorizerFunctionArn = String;

export type AuthorizerName = String;

export type SigningDisabled = Boolean;

export type Status = String;

export type TokenKeyName = String;

export type TokenSigningPublicKeys = Map<String>;

export type Tags = List<AWS.IoT.Authorizer.Tag>;

}

export namespace Dimension {

export type Name = String;

export type Type = String;

export type StringValues = List<String>;

export type Tags = List<AWS.IoT.Dimension.Tag>;

}

export namespace ThingPrincipalAttachment {

export type Principal = String;

export type ThingName = String;

}

export namespace Policy {

export type PolicyDocument = Json;

export type PolicyName = String;

}

export namespace ScheduledAudit {

export type ScheduledAuditName = String;

export type Frequency = String;

export type DayOfMonth = String;

export type DayOfWeek = String;

export type TargetCheckNames = List<String>;

export type Tags = List<AWS.IoT.ScheduledAudit.Tag>;

}

export namespace PolicyPrincipalAttachment {

export type PolicyName = String;

export type Principal = String;

}

export namespace Certificate {

export type CACertificatePem = String;

export type CertificatePem = String;

export type CertificateSigningRequest = String;

export type CertificateMode = String;

export type Status = String;

}

}

export namespace AutoScaling {

export namespace LaunchConfiguration {

export type BlockDeviceMapping = { DeviceName: String;

Ebs: AWS.AutoScaling.LaunchConfiguration.BlockDevice;

NoDevice: Boolean;

VirtualName: String; };

export type MetadataOptions = AWS.AutoScaling.LaunchConfiguration.MetadataOptions;

export type BlockDevice = { DeleteOnTermination: Boolean;

Encrypted: Boolean;

Iops: Integer;

SnapshotId: String;

Throughput: Integer;

VolumeSize: Integer;

VolumeType: String; };

export type AssociatePublicIpAddress = Boolean;

export type BlockDeviceMappings = List<AWS.AutoScaling.LaunchConfiguration.BlockDeviceMapping>;

export type ClassicLinkVPCId = String;

export type ClassicLinkVPCSecurityGroups = List<String>;

export type EbsOptimized = Boolean;

export type IamInstanceProfile = String;

export type ImageId = String;

export type InstanceId = String;

export type InstanceMonitoring = Boolean;

export type InstanceType = String;

export type KernelId = String;

export type KeyName = String;

export type LaunchConfigurationName = String;

export type PlacementTenancy = String;

export type RamDiskId = String;

export type SecurityGroups = List<String>;

export type SpotPrice = String;

export type UserData = String;

}

export namespace AutoScalingGroup {

export type LaunchTemplateOverrides = { InstanceType: String;

LaunchTemplateSpecification: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

WeightedCapacity: String; };

export type MetricsCollection = List<AWS.AutoScaling.AutoScalingGroup.MetricsCollection>;

export type InstancesDistribution = { OnDemandAllocationStrategy: String;

OnDemandBaseCapacity: Integer;

OnDemandPercentageAboveBaseCapacity: Integer;

SpotAllocationStrategy: String;

SpotInstancePools: Integer;

SpotMaxPrice: String; };

export type LifecycleHookSpecification = { DefaultResult: String;

HeartbeatTimeout: Integer;

LifecycleHookName: String;

LifecycleTransition: String;

NotificationMetadata: String;

NotificationTargetARN: String;

RoleARN: String; };

export type LaunchTemplateSpecification = { LaunchTemplateId: String;

LaunchTemplateName: String;

Version: String; };

export type MixedInstancesPolicy = AWS.AutoScaling.AutoScalingGroup.MixedInstancesPolicy;

export type NotificationConfiguration = { NotificationTypes: List<String>;

TopicARN: String; };

export type LaunchTemplate = AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

export type TagProperty = { Key: String;

PropagateAtLaunch: Boolean;

Value: String; };

export type AutoScalingGroupName = String;

export type AvailabilityZones = List<String>;

export type CapacityRebalance = Boolean;

export type Context = String;

export type Cooldown = String;

export type DesiredCapacity = String;

export type HealthCheckGracePeriod = Integer;

export type HealthCheckType = String;

export type InstanceId = String;

export type LaunchConfigurationName = String;

export type LifecycleHookSpecificationList = List<AWS.AutoScaling.AutoScalingGroup.LifecycleHookSpecification>;

export type LoadBalancerNames = List<String>;

export type MaxInstanceLifetime = Integer;

export type MaxSize = String;

export type MinSize = String;

export type NewInstancesProtectedFromScaleIn = Boolean;

export type NotificationConfigurations = List<AWS.AutoScaling.AutoScalingGroup.NotificationConfiguration>;

export type PlacementGroup = String;

export type ServiceLinkedRoleARN = String;

export type Tags = List<AWS.AutoScaling.AutoScalingGroup.TagProperty>;

export type TargetGroupARNs = List<String>;

export type TerminationPolicies = List<String>;

export type VPCZoneIdentifier = List<String>;

}

export namespace ScalingPolicy {

export type CustomizedMetricSpecification = { Dimensions: List<AWS.AutoScaling.ScalingPolicy.MetricDimension>;

MetricName: String;

Namespace: String;

Statistic: String;

Unit: String; };

export type MetricDimension = { Name: String;

Value: String; };

export type TargetTrackingConfiguration = AWS.AutoScaling.ScalingPolicy.TargetTrackingConfiguration;

export type StepAdjustment = { MetricIntervalLowerBound: Double;

MetricIntervalUpperBound: Double;

ScalingAdjustment: Integer; };

export type PredefinedMetricSpecification = { PredefinedMetricType: String;

ResourceLabel: String; };

export type AdjustmentType = String;

export type AutoScalingGroupName = String;

export type Cooldown = String;

export type EstimatedInstanceWarmup = Integer;

export type MetricAggregationType = String;

export type MinAdjustmentMagnitude = Integer;

export type PolicyType = String;

export type ScalingAdjustment = Integer;

export type StepAdjustments = List<AWS.AutoScaling.ScalingPolicy.StepAdjustment>;

}

export namespace ScheduledAction {

export type AutoScalingGroupName = String;

export type DesiredCapacity = Integer;

export type EndTime = String;

export type MaxSize = Integer;

export type MinSize = Integer;

export type Recurrence = String;

export type StartTime = String;

export type TimeZone = String;

}

export namespace LifecycleHook {

export type AutoScalingGroupName = String;

export type DefaultResult = String;

export type HeartbeatTimeout = Integer;

export type LifecycleHookName = String;

export type LifecycleTransition = String;

export type NotificationMetadata = String;

export type NotificationTargetARN = String;

export type RoleARN = String;

}

export namespace WarmPool {

export type AutoScalingGroupName = String;

export type MaxGroupPreparedCapacity = Integer;

export type MinSize = Integer;

export type PoolState = String;

}

}

export namespace CloudFront {

export namespace Distribution {

export type Cookies = { Forward: String;

WhitelistedNames: List<String>; };

export type DistributionConfig = AWS.CloudFront.Distribution.DistributionConfig;

export type LegacyS3Origin = { DNSName: String;

OriginAccessIdentity: String; };

export type OriginCustomHeader = { HeaderName: String;

HeaderValue: String; };

export type OriginGroup = { FailoverCriteria: AWS.CloudFront.Distribution.OriginGroupFailoverCriteria;

Id: String;

Members: AWS.CloudFront.Distribution.OriginGroupMembers; };

export type CustomOriginConfig = { HTTPPort: Integer;

HTTPSPort: Integer;

OriginKeepaliveTimeout: Integer;

OriginProtocolPolicy: String;

OriginReadTimeout: Integer;

OriginSSLProtocols: List<String>; };

export type OriginGroups = { Items: List<AWS.CloudFront.Distribution.OriginGroup>;

Quantity: Integer; };

export type OriginGroupMembers = { Items: List<AWS.CloudFront.Distribution.OriginGroupMember>;

Quantity: Integer; };

export type GeoRestriction = { Locations: List<String>;

RestrictionType: String; };

export type ViewerCertificate = { AcmCertificateArn: String;

CloudFrontDefaultCertificate: Boolean;

IamCertificateId: String;

MinimumProtocolVersion: String;

SslSupportMethod: String; };

export type CustomErrorResponse = { ErrorCachingMinTTL: Double;

ErrorCode: Integer;

ResponseCode: Integer;

ResponsePagePath: String; };

export type LambdaFunctionAssociation = { EventType: String;

IncludeBody: Boolean;

LambdaFunctionARN: String; };

export type OriginGroupMember = { OriginId: String; };

export type CacheBehavior = { AllowedMethods: List<String>;

CachePolicyId: String;

CachedMethods: List<String>;

Compress: Boolean;

DefaultTTL: Double;

FieldLevelEncryptionId: String;

ForwardedValues: AWS.CloudFront.Distribution.ForwardedValues;

FunctionAssociations: List<AWS.CloudFront.Distribution.FunctionAssociation>;

LambdaFunctionAssociations: List<AWS.CloudFront.Distribution.LambdaFunctionAssociation>;

MaxTTL: Double;

MinTTL: Double;

OriginRequestPolicyId: String;

PathPattern: String;

RealtimeLogConfigArn: String;

SmoothStreaming: Boolean;

TargetOriginId: String;

TrustedKeyGroups: List<String>;

TrustedSigners: List<String>;

ViewerProtocolPolicy: String; };

export type LegacyCustomOrigin = { DNSName: String;

HTTPPort: Integer;

HTTPSPort: Integer;

OriginProtocolPolicy: String;

OriginSSLProtocols: List<String>; };

export type DefaultCacheBehavior = { AllowedMethods: List<String>;

CachePolicyId: String;

CachedMethods: List<String>;

Compress: Boolean;

DefaultTTL: Double;

FieldLevelEncryptionId: String;

ForwardedValues: AWS.CloudFront.Distribution.ForwardedValues;

FunctionAssociations: List<AWS.CloudFront.Distribution.FunctionAssociation>;

LambdaFunctionAssociations: List<AWS.CloudFront.Distribution.LambdaFunctionAssociation>;

MaxTTL: Double;

MinTTL: Double;

OriginRequestPolicyId: String;

RealtimeLogConfigArn: String;

SmoothStreaming: Boolean;

TargetOriginId: String;

TrustedKeyGroups: List<String>;

TrustedSigners: List<String>;

ViewerProtocolPolicy: String; };

export type Restrictions = { GeoRestriction: AWS.CloudFront.Distribution.GeoRestriction; };

export type Origin = { ConnectionAttempts: Integer;

ConnectionTimeout: Integer;

CustomOriginConfig: AWS.CloudFront.Distribution.CustomOriginConfig;

DomainName: String;

Id: String;

OriginCustomHeaders: List<AWS.CloudFront.Distribution.OriginCustomHeader>;

OriginPath: String;

OriginShield: AWS.CloudFront.Distribution.OriginShield;

S3OriginConfig: AWS.CloudFront.Distribution.S3OriginConfig; };

export type StatusCodes = { Items: List<Integer>;

Quantity: Integer; };

export type OriginGroupFailoverCriteria = { StatusCodes: AWS.CloudFront.Distribution.StatusCodes; };

export type ForwardedValues = { Cookies: AWS.CloudFront.Distribution.Cookies;

Headers: List<String>;

QueryString: Boolean;

QueryStringCacheKeys: List<String>; };

export type OriginShield = { Enabled: Boolean;

OriginShieldRegion: String; };

export type S3OriginConfig = { OriginAccessIdentity: String; };

export type Logging = { Bucket: String;

IncludeCookies: Boolean;

Prefix: String; };

export type FunctionAssociation = { EventType: String;

FunctionARN: String; };

export type Tags = List<AWS.CloudFront.Distribution.Tag>;

}

export namespace CachePolicy {

export type HeadersConfig = { HeaderBehavior: String;

Headers: List<String>; };

export type CachePolicyConfig = AWS.CloudFront.CachePolicy.CachePolicyConfig;

export type ParametersInCacheKeyAndForwardedToOrigin = { CookiesConfig: AWS.CloudFront.CachePolicy.CookiesConfig;

EnableAcceptEncodingBrotli: Boolean;

EnableAcceptEncodingGzip: Boolean;

HeadersConfig: AWS.CloudFront.CachePolicy.HeadersConfig;

QueryStringsConfig: AWS.CloudFront.CachePolicy.QueryStringsConfig; };

export type QueryStringsConfig = { QueryStringBehavior: String;

QueryStrings: List<String>; };

export type CookiesConfig = { CookieBehavior: String;

Cookies: List<String>; };

}

export namespace KeyGroup {

export type KeyGroupConfig = AWS.CloudFront.KeyGroup.KeyGroupConfig;

}

export namespace OriginRequestPolicy {

export type OriginRequestPolicyConfig = AWS.CloudFront.OriginRequestPolicy.OriginRequestPolicyConfig;

export type CookiesConfig = { CookieBehavior: String;

Cookies: List<String>; };

export type QueryStringsConfig = { QueryStringBehavior: String;

QueryStrings: List<String>; };

export type HeadersConfig = { HeaderBehavior: String;

Headers: List<String>; };

}

export namespace StreamingDistribution {

export type S3Origin = { DomainName: String;

OriginAccessIdentity: String; };

export type Logging = { Bucket: String;

Enabled: Boolean;

Prefix: String; };

export type StreamingDistributionConfig = AWS.CloudFront.StreamingDistribution.StreamingDistributionConfig;

export type TrustedSigners = { Enabled: Boolean;

AwsAccountNumbers: List<String>; };

export type Tags = List<AWS.CloudFront.StreamingDistribution.Tag>;

}

export namespace CloudFrontOriginAccessIdentity {

export type CloudFrontOriginAccessIdentityConfig = AWS.CloudFront.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig;

}

export namespace RealtimeLogConfig {

export type EndPoint = { KinesisStreamConfig: AWS.CloudFront.RealtimeLogConfig.KinesisStreamConfig;

StreamType: String; };

export type KinesisStreamConfig = { RoleArn: String;

StreamArn: String; };

export type EndPoints = List<AWS.CloudFront.RealtimeLogConfig.EndPoint>;

export type Fields = List<String>;

export type Name = String;

export type SamplingRate = Double;

}

export namespace PublicKey {

export type PublicKeyConfig = AWS.CloudFront.PublicKey.PublicKeyConfig;

}

export namespace Function {

export type FunctionConfig = AWS.CloudFront.Function.FunctionConfig;

export type FunctionMetadata = AWS.CloudFront.Function.FunctionMetadata;

export type AutoPublish = Boolean;

export type FunctionCode = String;

export type Name = String;

}

}

export namespace EMR {

export namespace Step {

export type HadoopJarStepConfig = { Args: List<String>;

Jar: String;

MainClass: String;

StepProperties: List<AWS.EMR.Step.KeyValue>; };

export type KeyValue = { Key: String;

Value: String; };

export type ActionOnFailure = String;

export type HadoopJarStep = AWS.EMR.Step.HadoopJarStepConfig;

export type JobFlowId = String;

export type Name = String;

}

export namespace Cluster {

export type ComputeLimits = { MaximumCapacityUnits: Integer;

MaximumCoreCapacityUnits: Integer;

MaximumOnDemandCapacityUnits: Integer;

MinimumCapacityUnits: Integer;

UnitType: String; };

export type SpotProvisioningSpecification = { AllocationStrategy: String;

BlockDurationMinutes: Integer;

TimeoutAction: String;

TimeoutDurationMinutes: Integer; };

export type BootstrapActionConfig = { Name: String;

ScriptBootstrapAction: AWS.EMR.Cluster.ScriptBootstrapActionConfig; };

export type StepConfig = { ActionOnFailure: String;

HadoopJarStep: AWS.EMR.Cluster.HadoopJarStepConfig;

Name: String; };

export type EbsBlockDeviceConfig = { VolumeSpecification: AWS.EMR.Cluster.VolumeSpecification;

VolumesPerInstance: Integer; };

export type ManagedScalingPolicy = AWS.EMR.Cluster.ManagedScalingPolicy;

export type CloudWatchAlarmDefinition = { ComparisonOperator: String;

Dimensions: List<AWS.EMR.Cluster.MetricDimension>;

EvaluationPeriods: Integer;

MetricName: String;

Namespace: String;

Period: Integer;

Statistic: String;

Threshold: Double;

Unit: String; };

export type KeyValue = { Key: String;

Value: String; };

export type VolumeSpecification = { Iops: Integer;

SizeInGB: Integer;

VolumeType: String; };

export type InstanceFleetProvisioningSpecifications = { OnDemandSpecification: AWS.EMR.Cluster.OnDemandProvisioningSpecification;

SpotSpecification: AWS.EMR.Cluster.SpotProvisioningSpecification; };

export type InstanceGroupConfig = { AutoScalingPolicy: AWS.EMR.Cluster.AutoScalingPolicy;

BidPrice: String;

Configurations: List<AWS.EMR.Cluster.Configuration>;

EbsConfiguration: AWS.EMR.Cluster.EbsConfiguration;

InstanceCount: Integer;

InstanceType: String;

Market: String;

Name: String; };

export type KerberosAttributes = AWS.EMR.Cluster.KerberosAttributes;

export type Application = { AdditionalInfo: Map<String>;

Args: List<String>;

Name: String;

Version: String; };

export type Configuration = { Classification: String;

ConfigurationProperties: Map<String>;

Configurations: List<AWS.EMR.Cluster.Configuration>; };

export type ScriptBootstrapActionConfig = { Args: List<String>;

Path: String; };

export type EbsConfiguration = { EbsBlockDeviceConfigs: List<AWS.EMR.Cluster.EbsBlockDeviceConfig>;

EbsOptimized: Boolean; };

export type InstanceTypeConfig = { BidPrice: String;

BidPriceAsPercentageOfOnDemandPrice: Double;

Configurations: List<AWS.EMR.Cluster.Configuration>;

EbsConfiguration: AWS.EMR.Cluster.EbsConfiguration;

InstanceType: String;

WeightedCapacity: Integer; };

export type MetricDimension = { Key: String;

Value: String; };

export type OnDemandProvisioningSpecification = { AllocationStrategy: String; };

export type ScalingTrigger = { CloudWatchAlarmDefinition: AWS.EMR.Cluster.CloudWatchAlarmDefinition; };

export type InstanceFleetConfig = { InstanceTypeConfigs: List<AWS.EMR.Cluster.InstanceTypeConfig>;

LaunchSpecifications: AWS.EMR.Cluster.InstanceFleetProvisioningSpecifications;

Name: String;

TargetOnDemandCapacity: Integer;

TargetSpotCapacity: Integer; };

export type JobFlowInstancesConfig = { AdditionalMasterSecurityGroups: List<String>;

AdditionalSlaveSecurityGroups: List<String>;

CoreInstanceFleet: AWS.EMR.Cluster.InstanceFleetConfig;

CoreInstanceGroup: AWS.EMR.Cluster.InstanceGroupConfig;

Ec2KeyName: String;

Ec2SubnetId: String;

Ec2SubnetIds: List<String>;

EmrManagedMasterSecurityGroup: String;

EmrManagedSlaveSecurityGroup: String;

HadoopVersion: String;

KeepJobFlowAliveWhenNoSteps: Boolean;

MasterInstanceFleet: AWS.EMR.Cluster.InstanceFleetConfig;

MasterInstanceGroup: AWS.EMR.Cluster.InstanceGroupConfig;

Placement: AWS.EMR.Cluster.PlacementType;

ServiceAccessSecurityGroup: String;

TerminationProtected: Boolean; };

export type ScalingConstraints = { MaxCapacity: Integer;

MinCapacity: Integer; };

export type ScalingAction = { Market: String;

SimpleScalingPolicyConfiguration: AWS.EMR.Cluster.SimpleScalingPolicyConfiguration; };

export type SimpleScalingPolicyConfiguration = { AdjustmentType: String;

CoolDown: Integer;

ScalingAdjustment: Integer; };

export type PlacementType = { AvailabilityZone: String; };

export type ScalingRule = { Action: AWS.EMR.Cluster.ScalingAction;

Description: String;

Name: String;

Trigger: AWS.EMR.Cluster.ScalingTrigger; };

export type AutoScalingPolicy = { Constraints: AWS.EMR.Cluster.ScalingConstraints;

Rules: List<AWS.EMR.Cluster.ScalingRule>; };

export type HadoopJarStepConfig = { Args: List<String>;

Jar: String;

MainClass: String;

StepProperties: List<AWS.EMR.Cluster.KeyValue>; };

export type AdditionalInfo = Json;

export type Applications = List<AWS.EMR.Cluster.Application>;

export type AutoScalingRole = String;

export type BootstrapActions = List<AWS.EMR.Cluster.BootstrapActionConfig>;

export type Configurations = List<AWS.EMR.Cluster.Configuration>;

export type CustomAmiId = String;

export type EbsRootVolumeSize = Integer;

export type Instances = AWS.EMR.Cluster.JobFlowInstancesConfig;

export type JobFlowRole = String;

export type LogEncryptionKmsKeyId = String;

export type LogUri = String;

export type Name = String;

export type ReleaseLabel = String;

export type ScaleDownBehavior = String;

export type SecurityConfiguration = String;

export type ServiceRole = String;

export type StepConcurrencyLevel = Integer;

export type Steps = List<AWS.EMR.Cluster.StepConfig>;

export type Tags = List<AWS.EMR.Cluster.Tag>;

export type VisibleToAllUsers = Boolean;

}

export namespace InstanceGroupConfig {

export type AutoScalingPolicy = AWS.EMR.InstanceGroupConfig.AutoScalingPolicy;

export type Configuration = { Classification: String;

ConfigurationProperties: Map<String>;

Configurations: List<AWS.EMR.InstanceGroupConfig.Configuration>; };

export type MetricDimension = { Key: String;

Value: String; };

export type SimpleScalingPolicyConfiguration = { AdjustmentType: String;

CoolDown: Integer;

ScalingAdjustment: Integer; };

export type ScalingRule = { Action: AWS.EMR.InstanceGroupConfig.ScalingAction;

Description: String;

Name: String;

Trigger: AWS.EMR.InstanceGroupConfig.ScalingTrigger; };

export type CloudWatchAlarmDefinition = { ComparisonOperator: String;

Dimensions: List<AWS.EMR.InstanceGroupConfig.MetricDimension>;

EvaluationPeriods: Integer;

MetricName: String;

Namespace: String;

Period: Integer;

Statistic: String;

Threshold: Double;

Unit: String; };

export type EbsBlockDeviceConfig = { VolumeSpecification: AWS.EMR.InstanceGroupConfig.VolumeSpecification;

VolumesPerInstance: Integer; };

export type ScalingAction = { Market: String;

SimpleScalingPolicyConfiguration: AWS.EMR.InstanceGroupConfig.SimpleScalingPolicyConfiguration; };

export type ScalingTrigger = { CloudWatchAlarmDefinition: AWS.EMR.InstanceGroupConfig.CloudWatchAlarmDefinition; };

export type VolumeSpecification = { Iops: Integer;

SizeInGB: Integer;

VolumeType: String; };

export type EbsConfiguration = AWS.EMR.InstanceGroupConfig.EbsConfiguration;

export type ScalingConstraints = { MaxCapacity: Integer;

MinCapacity: Integer; };

export type BidPrice = String;

export type Configurations = List<AWS.EMR.InstanceGroupConfig.Configuration>;

export type InstanceCount = Integer;

export type InstanceRole = String;

export type InstanceType = String;

export type JobFlowId = String;

export type Market = String;

export type Name = String;

}

export namespace InstanceFleetConfig {

export type Configuration = { Classification: String;

ConfigurationProperties: Map<String>;

Configurations: List<AWS.EMR.InstanceFleetConfig.Configuration>; };

export type InstanceTypeConfig = { BidPrice: String;

BidPriceAsPercentageOfOnDemandPrice: Double;

Configurations: List<AWS.EMR.InstanceFleetConfig.Configuration>;

EbsConfiguration: AWS.EMR.InstanceFleetConfig.EbsConfiguration;

InstanceType: String;

WeightedCapacity: Integer; };

export type SpotProvisioningSpecification = { AllocationStrategy: String;

BlockDurationMinutes: Integer;

TimeoutAction: String;

TimeoutDurationMinutes: Integer; };

export type EbsConfiguration = { EbsBlockDeviceConfigs: List<AWS.EMR.InstanceFleetConfig.EbsBlockDeviceConfig>;

EbsOptimized: Boolean; };

export type OnDemandProvisioningSpecification = { AllocationStrategy: String; };

export type VolumeSpecification = { Iops: Integer;

SizeInGB: Integer;

VolumeType: String; };

export type InstanceFleetProvisioningSpecifications = { OnDemandSpecification: AWS.EMR.InstanceFleetConfig.OnDemandProvisioningSpecification;

SpotSpecification: AWS.EMR.InstanceFleetConfig.SpotProvisioningSpecification; };

export type EbsBlockDeviceConfig = { VolumeSpecification: AWS.EMR.InstanceFleetConfig.VolumeSpecification;

VolumesPerInstance: Integer; };

export type ClusterId = String;

export type InstanceFleetType = String;

export type InstanceTypeConfigs = List<AWS.EMR.InstanceFleetConfig.InstanceTypeConfig>;

export type LaunchSpecifications = AWS.EMR.InstanceFleetConfig.InstanceFleetProvisioningSpecifications;

export type Name = String;

export type TargetOnDemandCapacity = Integer;

export type TargetSpotCapacity = Integer;

}

export namespace SecurityConfiguration {

export type Name = String;

export type SecurityConfiguration = Json;

}

export namespace StudioSessionMapping {

export type IdentityName = String;

export type IdentityType = String;

export type SessionPolicyArn = String;

export type StudioId = String;

}

export namespace Studio {

export type AuthMode = String;

export type DefaultS3Location = String;

export type Description = String;

export type EngineSecurityGroupId = String;

export type Name = String;

export type ServiceRole = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.EMR.Studio.Tag>;

export type UserRole = String;

export type VpcId = String;

export type WorkspaceSecurityGroupId = String;

}

}

export namespace Cassandra {

export namespace Table {

export type BillingMode = AWS.Cassandra.Table.BillingMode;

export type Column = { ColumnName: String;

ColumnType: String; };

export type ClusteringKeyColumn = { Column: AWS.Cassandra.Table.Column;

OrderBy: String; };

export type ProvisionedThroughput = { ReadCapacityUnits: Integer;

WriteCapacityUnits: Integer; };

export type KeyspaceName = String;

export type TableName = String;

export type RegularColumns = List<AWS.Cassandra.Table.Column>;

export type PartitionKeyColumns = List<AWS.Cassandra.Table.Column>;

export type ClusteringKeyColumns = List<AWS.Cassandra.Table.ClusteringKeyColumn>;

export type PointInTimeRecoveryEnabled = Boolean;

export type Tags = List<AWS.Cassandra.Table.Tag>;

}

export namespace Keyspace {

export type KeyspaceName = String;

export type Tags = List<AWS.Cassandra.Keyspace.Tag>;

}

}

export namespace WAFv2 {

export namespace RuleGroup {

export type JsonMatchPattern = { All: Json;

IncludedPaths: List<String>; };

export type XssMatchStatement = { FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

TextTransformations: List<AWS.WAFv2.RuleGroup.TextTransformation>; };

export type LabelMatchStatement = { Scope: String;

Key: String; };

export type RuleAction = { Allow: Json;

Block: Json;

Count: Json; };

export type Statement = { ByteMatchStatement: AWS.WAFv2.RuleGroup.ByteMatchStatement;

SqliMatchStatement: AWS.WAFv2.RuleGroup.SqliMatchStatement;

XssMatchStatement: AWS.WAFv2.RuleGroup.XssMatchStatement;

SizeConstraintStatement: AWS.WAFv2.RuleGroup.SizeConstraintStatement;

GeoMatchStatement: AWS.WAFv2.RuleGroup.GeoMatchStatement;

IPSetReferenceStatement: AWS.WAFv2.RuleGroup.IPSetReferenceStatement;

RegexPatternSetReferenceStatement: AWS.WAFv2.RuleGroup.RegexPatternSetReferenceStatement;

RateBasedStatement: AWS.WAFv2.RuleGroup.RateBasedStatement;

AndStatement: AWS.WAFv2.RuleGroup.AndStatement;

OrStatement: AWS.WAFv2.RuleGroup.OrStatement;

NotStatement: AWS.WAFv2.RuleGroup.NotStatement;

LabelMatchStatement: AWS.WAFv2.RuleGroup.LabelMatchStatement; };

export type LabelSummary = { Name: String; };

export type FieldToMatch = { SingleHeader: Json;

SingleQueryArgument: Json;

AllQueryArguments: Json;

UriPath: Json;

QueryString: Json;

Body: Json;

Method: Json;

JsonBody: AWS.WAFv2.RuleGroup.JsonBody; };

export type IPSetReferenceStatement = { Arn: String;

IPSetForwardedIPConfig: AWS.WAFv2.RuleGroup.IPSetForwardedIPConfiguration; };

export type RateBasedStatement = { Limit: Integer;

AggregateKeyType: String;

ScopeDownStatement: AWS.WAFv2.RuleGroup.Statement;

ForwardedIPConfig: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration; };

export type VisibilityConfig = AWS.WAFv2.RuleGroup.VisibilityConfig;

export type GeoMatchStatement = { CountryCodes: List<String>;

ForwardedIPConfig: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration; };

export type AndStatement = { Statements: List<AWS.WAFv2.RuleGroup.Statement>; };

export type IPSetForwardedIPConfiguration = { HeaderName: String;

FallbackBehavior: String;

Position: String; };

export type TextTransformation = { Priority: Integer;

Type: String; };

export type ByteMatchStatement = { SearchString: String;

SearchStringBase64: String;

FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

TextTransformations: List<AWS.WAFv2.RuleGroup.TextTransformation>;

PositionalConstraint: String; };

export type RegexPatternSetReferenceStatement = { Arn: String;

FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

TextTransformations: List<AWS.WAFv2.RuleGroup.TextTransformation>; };

export type OrStatement = { Statements: List<AWS.WAFv2.RuleGroup.Statement>; };

export type Rule = { Name: String;

Priority: Integer;

Statement: AWS.WAFv2.RuleGroup.Statement;

Action: AWS.WAFv2.RuleGroup.RuleAction;

RuleLabels: List<AWS.WAFv2.RuleGroup.Label>;

VisibilityConfig: AWS.WAFv2.RuleGroup.VisibilityConfig; };

export type JsonBody = { MatchPattern: AWS.WAFv2.RuleGroup.JsonMatchPattern;

MatchScope: String;

InvalidFallbackBehavior: String; };

export type CustomResponseBody = { ContentType: String;

Content: String; };

export type Label = { Name: String; };

export type SqliMatchStatement = { FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

TextTransformations: List<AWS.WAFv2.RuleGroup.TextTransformation>; };

export type NotStatement = { Statement: AWS.WAFv2.RuleGroup.Statement; };

export type ForwardedIPConfiguration = { HeaderName: String;

FallbackBehavior: String; };

export type SizeConstraintStatement = { FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

ComparisonOperator: String;

Size: Double;

TextTransformations: List<AWS.WAFv2.RuleGroup.TextTransformation>; };

export type Capacity = Integer;

export type Description = String;

export type Name = String;

export type Scope = String;

export type Rules = List<AWS.WAFv2.RuleGroup.Rule>;

export type Tags = List<AWS.WAFv2.RuleGroup.Tag>;

export type CustomResponseBodies = Map<AWS.WAFv2.RuleGroup.CustomResponseBody>;

}

export namespace WebACL {

export type CustomRequestHandling = { InsertHeaders: List<AWS.WAFv2.WebACL.CustomHTTPHeader>; };

export type ManagedRuleGroupStatement = { Name: String;

VendorName: String;

ExcludedRules: List<AWS.WAFv2.WebACL.ExcludedRule>;

ScopeDownStatement: AWS.WAFv2.WebACL.Statement; };

export type TextTransformation = { Priority: Integer;

Type: String; };

export type AllowAction = { CustomRequestHandling: AWS.WAFv2.WebACL.CustomRequestHandling; };

export type DefaultAction = AWS.WAFv2.WebACL.DefaultAction;

export type XssMatchStatement = { FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

TextTransformations: List<AWS.WAFv2.WebACL.TextTransformation>; };

export type ByteMatchStatement = { SearchString: String;

SearchStringBase64: String;

FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

TextTransformations: List<AWS.WAFv2.WebACL.TextTransformation>;

PositionalConstraint: String; };

export type ForwardedIPConfiguration = { HeaderName: String;

FallbackBehavior: String; };

export type OrStatement = { Statements: List<AWS.WAFv2.WebACL.Statement>; };

export type Label = { Name: String; };

export type CustomHTTPHeader = { Name: String;

Value: String; };

export type RegexPatternSetReferenceStatement = { Arn: String;

FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

TextTransformations: List<AWS.WAFv2.WebACL.TextTransformation>; };

export type IPSetForwardedIPConfiguration = { HeaderName: String;

FallbackBehavior: String;

Position: String; };

export type CustomResponseBody = { ContentType: String;

Content: String; };

export type Statement = { ByteMatchStatement: AWS.WAFv2.WebACL.ByteMatchStatement;

SqliMatchStatement: AWS.WAFv2.WebACL.SqliMatchStatement;

XssMatchStatement: AWS.WAFv2.WebACL.XssMatchStatement;

SizeConstraintStatement: AWS.WAFv2.WebACL.SizeConstraintStatement;

GeoMatchStatement: AWS.WAFv2.WebACL.GeoMatchStatement;

RuleGroupReferenceStatement: AWS.WAFv2.WebACL.RuleGroupReferenceStatement;

IPSetReferenceStatement: AWS.WAFv2.WebACL.IPSetReferenceStatement;

RegexPatternSetReferenceStatement: AWS.WAFv2.WebACL.RegexPatternSetReferenceStatement;

ManagedRuleGroupStatement: AWS.WAFv2.WebACL.ManagedRuleGroupStatement;

RateBasedStatement: AWS.WAFv2.WebACL.RateBasedStatement;

AndStatement: AWS.WAFv2.WebACL.AndStatement;

OrStatement: AWS.WAFv2.WebACL.OrStatement;

NotStatement: AWS.WAFv2.WebACL.NotStatement;

LabelMatchStatement: AWS.WAFv2.WebACL.LabelMatchStatement; };

export type BlockAction = { CustomResponse: AWS.WAFv2.WebACL.CustomResponse; };

export type RuleGroupReferenceStatement = { Arn: String;

ExcludedRules: List<AWS.WAFv2.WebACL.ExcludedRule>; };

export type LabelMatchStatement = { Scope: String;

Key: String; };

export type JsonMatchPattern = { All: Json;

IncludedPaths: List<String>; };

export type AndStatement = { Statements: List<AWS.WAFv2.WebACL.Statement>; };

export type CountAction = { CustomRequestHandling: AWS.WAFv2.WebACL.CustomRequestHandling; };

export type SizeConstraintStatement = { FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

ComparisonOperator: String;

Size: Double;

TextTransformations: List<AWS.WAFv2.WebACL.TextTransformation>; };

export type FieldToMatch = { SingleHeader: Json;

SingleQueryArgument: Json;

AllQueryArguments: Json;

UriPath: Json;

QueryString: Json;

Body: Json;

Method: Json;

JsonBody: AWS.WAFv2.WebACL.JsonBody; };

export type SqliMatchStatement = { FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

TextTransformations: List<AWS.WAFv2.WebACL.TextTransformation>; };

export type GeoMatchStatement = { CountryCodes: List<String>;

ForwardedIPConfig: AWS.WAFv2.WebACL.ForwardedIPConfiguration; };

export type RuleAction = { Allow: AWS.WAFv2.WebACL.AllowAction;

Block: AWS.WAFv2.WebACL.BlockAction;

Count: AWS.WAFv2.WebACL.CountAction; };

export type JsonBody = { MatchPattern: AWS.WAFv2.WebACL.JsonMatchPattern;

MatchScope: String;

InvalidFallbackBehavior: String; };

export type NotStatement = { Statement: AWS.WAFv2.WebACL.Statement; };

export type OverrideAction = { Count: Json;

None: Json; };

export type Rule = { Name: String;

Priority: Integer;

Statement: AWS.WAFv2.WebACL.Statement;

Action: AWS.WAFv2.WebACL.RuleAction;

OverrideAction: AWS.WAFv2.WebACL.OverrideAction;

RuleLabels: List<AWS.WAFv2.WebACL.Label>;

VisibilityConfig: AWS.WAFv2.WebACL.VisibilityConfig; };

export type CustomResponse = { ResponseCode: Integer;

CustomResponseBodyKey: String;

ResponseHeaders: List<AWS.WAFv2.WebACL.CustomHTTPHeader>; };

export type RateBasedStatement = { Limit: Integer;

AggregateKeyType: String;

ScopeDownStatement: AWS.WAFv2.WebACL.Statement;

ForwardedIPConfig: AWS.WAFv2.WebACL.ForwardedIPConfiguration; };

export type ExcludedRule = { Name: String; };

export type VisibilityConfig = AWS.WAFv2.WebACL.VisibilityConfig;

export type IPSetReferenceStatement = { Arn: String;

IPSetForwardedIPConfig: AWS.WAFv2.WebACL.IPSetForwardedIPConfiguration; };

export type Description = String;

export type Name = String;

export type Scope = String;

export type Rules = List<AWS.WAFv2.WebACL.Rule>;

export type Tags = List<AWS.WAFv2.WebACL.Tag>;

export type CustomResponseBodies = Map<AWS.WAFv2.WebACL.CustomResponseBody>;

}

export namespace RegexPatternSet {

export type Description = String;

export type Name = String;

export type RegularExpressionList = List<String>;

export type Scope = String;

export type Tags = List<AWS.WAFv2.RegexPatternSet.Tag>;

}

export namespace IPSet {

export type Description = String;

export type Name = String;

export type Scope = String;

export type IPAddressVersion = String;

export type Addresses = List<String>;

export type Tags = List<AWS.WAFv2.IPSet.Tag>;

}

export namespace WebACLAssociation {

export type ResourceArn = String;

export type WebACLArn = String;

}

}

export namespace MediaPackage {

export namespace OriginEndpoint {

export type StreamSelection = { MinVideoBitsPerSecond: Integer;

MaxVideoBitsPerSecond: Integer;

StreamOrder: String; };

export type CmafPackage = AWS.MediaPackage.OriginEndpoint.CmafPackage;

export type MssEncryption = { SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider; };

export type Authorization = AWS.MediaPackage.OriginEndpoint.Authorization;

export type DashPackage = AWS.MediaPackage.OriginEndpoint.DashPackage;

export type DashEncryption = { KeyRotationIntervalSeconds: Integer;

SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider; };

export type HlsManifest = { Id: String;

ManifestName: String;

Url: String;

PlaylistWindowSeconds: Integer;

PlaylistType: String;

AdMarkers: String;

ProgramDateTimeIntervalSeconds: Integer;

IncludeIframeOnlyStream: Boolean;

AdTriggers: List<String>;

AdsOnDeliveryRestrictions: String; };

export type SpekeKeyProvider = { ResourceId: String;

SystemIds: List<String>;

Url: String;

RoleArn: String;

CertificateArn: String; };

export type CmafEncryption = { KeyRotationIntervalSeconds: Integer;

SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;

ConstantInitializationVector: String; };

export type HlsEncryption = { EncryptionMethod: String;

ConstantInitializationVector: String;

KeyRotationIntervalSeconds: Integer;

RepeatExtXKey: Boolean;

SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider; };

export type MssPackage = AWS.MediaPackage.OriginEndpoint.MssPackage;

export type HlsPackage = AWS.MediaPackage.OriginEndpoint.HlsPackage;

export type Id = String;

export type ChannelId = String;

export type Description = String;

export type Whitelist = List<String>;

export type StartoverWindowSeconds = Integer;

export type TimeDelaySeconds = Integer;

export type ManifestName = String;

export type Origination = String;

export type Tags = List<AWS.MediaPackage.OriginEndpoint.Tag>;

}

export namespace PackagingConfiguration {

export type DashEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

export type SpekeKeyProvider = { RoleArn: String;

SystemIds: List<String>;

Url: String; };

export type CmafPackage = AWS.MediaPackage.PackagingConfiguration.CmafPackage;

export type DashPackage = AWS.MediaPackage.PackagingConfiguration.DashPackage;

export type DashManifest = { ManifestLayout: String;

ManifestName: String;

MinBufferTimeSeconds: Integer;

Profile: String;

StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection; };

export type HlsEncryption = { ConstantInitializationVector: String;

EncryptionMethod: String;

SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

export type MssManifest = { ManifestName: String;

StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection; };

export type CmafEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

export type MssEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

export type StreamSelection = { MaxVideoBitsPerSecond: Integer;

MinVideoBitsPerSecond: Integer;

StreamOrder: String; };

export type MssPackage = AWS.MediaPackage.PackagingConfiguration.MssPackage;

export type HlsPackage = AWS.MediaPackage.PackagingConfiguration.HlsPackage;

export type HlsManifest = { AdMarkers: String;

IncludeIframeOnlyStream: Boolean;

ManifestName: String;

ProgramDateTimeIntervalSeconds: Integer;

RepeatExtXKey: Boolean;

StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection; };

export type Id = String;

export type PackagingGroupId = String;

export type Tags = List<AWS.MediaPackage.PackagingConfiguration.Tag>;

}

export namespace PackagingGroup {

export type LogConfiguration = { LogGroupName: String; };

export type Authorization = AWS.MediaPackage.PackagingGroup.Authorization;

export type Id = String;

export type Tags = List<AWS.MediaPackage.PackagingGroup.Tag>;

export type EgressAccessLogs = AWS.MediaPackage.PackagingGroup.LogConfiguration;

}

export namespace Channel {

export type LogConfiguration = { LogGroupName: String; };

export type Id = String;

export type Description = String;

export type Tags = List<AWS.MediaPackage.Channel.Tag>;

export type EgressAccessLogs = AWS.MediaPackage.Channel.LogConfiguration;

export type IngressAccessLogs = AWS.MediaPackage.Channel.LogConfiguration;

}

export namespace Asset {

export type EgressEndpoint = { PackagingConfigurationId: String;

Url: String; };

export type Id = String;

export type PackagingGroupId = String;

export type ResourceId = String;

export type SourceArn = String;

export type SourceRoleArn = String;

export type Tags = List<AWS.MediaPackage.Asset.Tag>;

}

}

export namespace ACMPCA {

export namespace Certificate {

export type Extensions = { CertificatePolicies: List<AWS.ACMPCA.Certificate.PolicyInformation>;

ExtendedKeyUsage: List<AWS.ACMPCA.Certificate.ExtendedKeyUsage>;

KeyUsage: AWS.ACMPCA.Certificate.KeyUsage;

SubjectAlternativeNames: List<AWS.ACMPCA.Certificate.GeneralName>; };

export type Subject = { Country: String;

Organization: String;

OrganizationalUnit: String;

DistinguishedNameQualifier: String;

State: String;

CommonName: String;

SerialNumber: String;

Locality: String;

Title: String;

Surname: String;

GivenName: String;

Initials: String;

Pseudonym: String;

GenerationQualifier: String; };

export type PolicyInformation = { CertPolicyId: String;

PolicyQualifiers: List<AWS.ACMPCA.Certificate.PolicyQualifierInfo>; };

export type PolicyQualifierInfo = { PolicyQualifierId: String;

Qualifier: AWS.ACMPCA.Certificate.Qualifier; };

export type Qualifier = { CpsUri: String; };

export type GeneralName = { OtherName: AWS.ACMPCA.Certificate.OtherName;

Rfc822Name: String;

DnsName: String;

DirectoryName: AWS.ACMPCA.Certificate.Subject;

EdiPartyName: AWS.ACMPCA.Certificate.EdiPartyName;

UniformResourceIdentifier: String;

IpAddress: String;

RegisteredId: String; };

export type ApiPassthrough = AWS.ACMPCA.Certificate.ApiPassthrough;

export type EdiPartyName = { PartyName: String;

NameAssigner: String; };

export type OtherName = { TypeId: String;

Value: String; };

export type Validity = AWS.ACMPCA.Certificate.Validity;

export type ExtendedKeyUsage = { ExtendedKeyUsageType: String;

ExtendedKeyUsageObjectIdentifier: String; };

export type KeyUsage = { DigitalSignature: Boolean;

NonRepudiation: Boolean;

KeyEncipherment: Boolean;

DataEncipherment: Boolean;

KeyAgreement: Boolean;

KeyCertSign: Boolean;

CRLSign: Boolean;

EncipherOnly: Boolean;

DecipherOnly: Boolean; };

export type CertificateAuthorityArn = String;

export type CertificateSigningRequest = String;

export type SigningAlgorithm = String;

export type TemplateArn = String;

export type ValidityNotBefore = AWS.ACMPCA.Certificate.Validity;

}

export namespace CertificateAuthority {

export type RevocationConfiguration = AWS.ACMPCA.CertificateAuthority.RevocationConfiguration;

export type KeyUsage = { DigitalSignature: Boolean;

NonRepudiation: Boolean;

KeyEncipherment: Boolean;

DataEncipherment: Boolean;

KeyAgreement: Boolean;

KeyCertSign: Boolean;

CRLSign: Boolean;

EncipherOnly: Boolean;

DecipherOnly: Boolean; };

export type CsrExtensions = AWS.ACMPCA.CertificateAuthority.CsrExtensions;

export type AccessDescription = { AccessMethod: AWS.ACMPCA.CertificateAuthority.AccessMethod;

AccessLocation: AWS.ACMPCA.CertificateAuthority.GeneralName; };

export type EdiPartyName = { PartyName: String;

NameAssigner: String; };

export type Subject = AWS.ACMPCA.CertificateAuthority.Subject;

export type AccessMethod = { CustomObjectIdentifier: String;

AccessMethodType: String; };

export type OtherName = { TypeId: String;

Value: String; };

export type CrlConfiguration = { Enabled: Boolean;

ExpirationInDays: Integer;

CustomCname: String;

S3BucketName: String;

S3ObjectAcl: String; };

export type GeneralName = { OtherName: AWS.ACMPCA.CertificateAuthority.OtherName;

Rfc822Name: String;

DnsName: String;

DirectoryName: AWS.ACMPCA.CertificateAuthority.Subject;

EdiPartyName: AWS.ACMPCA.CertificateAuthority.EdiPartyName;

UniformResourceIdentifier: String;

IpAddress: String;

RegisteredId: String; };

export type Type = String;

export type KeyAlgorithm = String;

export type SigningAlgorithm = String;

export type Tags = List<AWS.ACMPCA.CertificateAuthority.Tag>;

export type KeyStorageSecurityStandard = String;

}

export namespace CertificateAuthorityActivation {

export type CertificateAuthorityArn = String;

export type Certificate = String;

export type CertificateChain = String;

export type Status = String;

}

}

export namespace IoTWireless {

export namespace WirelessDevice {

export type AbpV11 = { DevAddr: String;

SessionKeys: AWS.IoTWireless.WirelessDevice.SessionKeysAbpV11; };

export type LoRaWANDevice = { DevEui: String;

DeviceProfileId: String;

ServiceProfileId: String;

OtaaV11: AWS.IoTWireless.WirelessDevice.OtaaV11;

OtaaV10x: AWS.IoTWireless.WirelessDevice.OtaaV10x;

AbpV11: AWS.IoTWireless.WirelessDevice.AbpV11;

AbpV10x: AWS.IoTWireless.WirelessDevice.AbpV10x; };

export type SessionKeysAbpV11 = { FNwkSIntKey: String;

SNwkSIntKey: String;

NwkSEncKey: String;

AppSKey: String; };

export type AbpV10x = { DevAddr: String;

SessionKeys: AWS.IoTWireless.WirelessDevice.SessionKeysAbpV10x; };

export type OtaaV11 = { AppKey: String;

NwkKey: String;

JoinEui: String; };

export type SessionKeysAbpV10x = { NwkSKey: String;

AppSKey: String; };

export type OtaaV10x = { AppKey: String;

AppEui: String; };

export type Type = String;

export type Name = String;

export type Description = String;

export type DestinationName = String;

export type LoRaWAN = AWS.IoTWireless.WirelessDevice.LoRaWANDevice;

export type Tags = List<AWS.IoTWireless.WirelessDevice.Tag>;

export type ThingArn = String;

export type LastUplinkReceivedAt = String;

}

export namespace TaskDefinition {

export type UpdateWirelessGatewayTaskCreate = { UpdateDataSource: String;

UpdateDataRole: String;

LoRaWAN: AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskCreate; };

export type LoRaWANUpdateGatewayTaskEntry = AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskEntry;

export type LoRaWANGatewayVersion = { PackageVersion: String;

Model: String;

Station: String; };

export type LoRaWANUpdateGatewayTaskCreate = { UpdateSignature: String;

SigKeyCrc: Integer;

CurrentVersion: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;

UpdateVersion: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion; };

export type Name = String;

export type AutoCreateTasks = Boolean;

export type Update = AWS.IoTWireless.TaskDefinition.UpdateWirelessGatewayTaskCreate;

export type TaskDefinitionType = String;

export type Tags = List<AWS.IoTWireless.TaskDefinition.Tag>;

}

export namespace DeviceProfile {

export type LoRaWANDeviceProfile = { SupportsClassB: Boolean;

ClassBTimeout: Integer;

PingSlotPeriod: Integer;

PingSlotDr: Integer;

PingSlotFreq: Integer;

SupportsClassC: Boolean;

ClassCTimeout: Integer;

MacVersion: String;

RegParamsRevision: String;

MaxEirp: Integer;

MaxDutyCycle: Integer;

SupportsJoin: Boolean;

RfRegion: String;

Supports32BitFCnt: Boolean; };

export type Name = String;

export type LoRaWAN = AWS.IoTWireless.DeviceProfile.LoRaWANDeviceProfile;

export type Tags = List<AWS.IoTWireless.DeviceProfile.Tag>;

}

export namespace PartnerAccount {

export type SidewalkAccountInfo = { AppServerPrivateKey: String; };

export type SidewalkUpdateAccount = { AppServerPrivateKey: String; };

export type Sidewalk = AWS.IoTWireless.PartnerAccount.SidewalkAccountInfo;

export type PartnerAccountId = String;

export type PartnerType = String;

export type AccountLinked = Boolean;

export type SidewalkUpdate = AWS.IoTWireless.PartnerAccount.SidewalkUpdateAccount;

export type Fingerprint = String;

export type Tags = List<AWS.IoTWireless.PartnerAccount.Tag>;

}

export namespace WirelessGateway {

export type LoRaWANGateway = { GatewayEui: String;

RfRegion: String; };

export type Name = String;

export type Description = String;

export type Tags = List<AWS.IoTWireless.WirelessGateway.Tag>;

export type LoRaWAN = AWS.IoTWireless.WirelessGateway.LoRaWANGateway;

export type ThingArn = String;

export type LastUplinkReceivedAt = String;

}

export namespace ServiceProfile {

export type LoRaWANServiceProfile = { UlRate: Integer;

UlBucketSize: Integer;

UlRatePolicy: String;

DlRate: Integer;

DlBucketSize: Integer;

DlRatePolicy: String;

AddGwMetadata: Boolean;

DevStatusReqFreq: Integer;

ReportDevStatusBattery: Boolean;

ReportDevStatusMargin: Boolean;

DrMin: Integer;

DrMax: Integer;

ChannelMask: String;

PrAllowed: Boolean;

HrAllowed: Boolean;

RaAllowed: Boolean;

NwkGeoLoc: Boolean;

TargetPer: Integer;

MinGwDiversity: Integer; };

export type Name = String;

export type LoRaWAN = AWS.IoTWireless.ServiceProfile.LoRaWANServiceProfile;

export type Tags = List<AWS.IoTWireless.ServiceProfile.Tag>;

}

export namespace Destination {

export type Name = String;

export type Expression = String;

export type ExpressionType = String;

export type Description = String;

export type Tags = List<AWS.IoTWireless.Destination.Tag>;

export type RoleArn = String;

}

}

export namespace KinesisAnalyticsV2 {

export namespace ApplicationReferenceDataSource {

export type RecordColumn = { Mapping: String;

SqlType: String;

Name: String; };

export type RecordFormat = { MappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.MappingParameters;

RecordFormatType: String; };

export type JSONMappingParameters = { RecordRowPath: String; };

export type ReferenceDataSource = AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.ReferenceDataSource;

export type MappingParameters = { JSONMappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.JSONMappingParameters;

CSVMappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.CSVMappingParameters; };

export type S3ReferenceDataSource = { BucketARN: String;

FileKey: String; };

export type ReferenceSchema = { RecordEncoding: String;

RecordColumns: List<AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordColumn>;

RecordFormat: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordFormat; };

export type CSVMappingParameters = { RecordRowDelimiter: String;

RecordColumnDelimiter: String; };

export type ApplicationName = String;

}

export namespace Application {

export type CustomArtifactConfiguration = { MavenReference: AWS.KinesisAnalyticsV2.Application.MavenReference;

S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

ArtifactType: String; };

export type S3ContentLocation = { BucketARN: String;

FileKey: String;

ObjectVersion: String; };

export type DeployAsApplicationConfiguration = { S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentBaseLocation; };

export type PropertyGroup = { PropertyMap: Json;

PropertyGroupId: String; };

export type MappingParameters = { JSONMappingParameters: AWS.KinesisAnalyticsV2.Application.JSONMappingParameters;

CSVMappingParameters: AWS.KinesisAnalyticsV2.Application.CSVMappingParameters; };

export type InputParallelism = { Count: Integer; };

export type FlinkApplicationConfiguration = { CheckpointConfiguration: AWS.KinesisAnalyticsV2.Application.CheckpointConfiguration;

ParallelismConfiguration: AWS.KinesisAnalyticsV2.Application.ParallelismConfiguration;

MonitoringConfiguration: AWS.KinesisAnalyticsV2.Application.MonitoringConfiguration; };

export type Input = { NamePrefix: String;

InputSchema: AWS.KinesisAnalyticsV2.Application.InputSchema;

KinesisStreamsInput: AWS.KinesisAnalyticsV2.Application.KinesisStreamsInput;

KinesisFirehoseInput: AWS.KinesisAnalyticsV2.Application.KinesisFirehoseInput;

InputProcessingConfiguration: AWS.KinesisAnalyticsV2.Application.InputProcessingConfiguration;

InputParallelism: AWS.KinesisAnalyticsV2.Application.InputParallelism; };

export type ApplicationSnapshotConfiguration = { SnapshotsEnabled: Boolean; };

export type KinesisFirehoseInput = { ResourceARN: String; };

export type InputSchema = { RecordEncoding: String;

RecordColumns: List<AWS.KinesisAnalyticsV2.Application.RecordColumn>;

RecordFormat: AWS.KinesisAnalyticsV2.Application.RecordFormat; };

export type ParallelismConfiguration = { ConfigurationType: String;

ParallelismPerKPU: Integer;

AutoScalingEnabled: Boolean;

Parallelism: Integer; };

export type MonitoringConfiguration = { ConfigurationType: String;

MetricsLevel: String;

LogLevel: String; };

export type CustomArtifactsConfiguration = List<AWS.KinesisAnalyticsV2.Application.CustomArtifactConfiguration>;

export type SqlApplicationConfiguration = { Inputs: List<AWS.KinesisAnalyticsV2.Application.Input>; };

export type InputProcessingConfiguration = { InputLambdaProcessor: AWS.KinesisAnalyticsV2.Application.InputLambdaProcessor; };

export type ApplicationCodeConfiguration = { CodeContentType: String;

CodeContent: AWS.KinesisAnalyticsV2.Application.CodeContent; };

export type ZeppelinApplicationConfiguration = { CatalogConfiguration: AWS.KinesisAnalyticsV2.Application.CatalogConfiguration;

MonitoringConfiguration: AWS.KinesisAnalyticsV2.Application.ZeppelinMonitoringConfiguration;

DeployAsApplicationConfiguration: AWS.KinesisAnalyticsV2.Application.DeployAsApplicationConfiguration;

CustomArtifactsConfiguration: AWS.KinesisAnalyticsV2.Application.CustomArtifactsConfiguration; };

export type MavenReference = { ArtifactId: String;

Version: String;

GroupId: String; };

export type KinesisStreamsInput = { ResourceARN: String; };

export type CheckpointConfiguration = { ConfigurationType: String;

CheckpointInterval: Integer;

MinPauseBetweenCheckpoints: Integer;

CheckpointingEnabled: Boolean; };

export type ZeppelinMonitoringConfiguration = { LogLevel: String; };

export type S3ContentBaseLocation = { BucketARN: String;

BasePath: String; };

export type InputLambdaProcessor = { ResourceARN: String; };

export type RecordColumn = { Mapping: String;

SqlType: String;

Name: String; };

export type CSVMappingParameters = { RecordRowDelimiter: String;

RecordColumnDelimiter: String; };

export type RecordFormat = { MappingParameters: AWS.KinesisAnalyticsV2.Application.MappingParameters;

RecordFormatType: String; };

export type GlueDataCatalogConfiguration = { DatabaseARN: String; };

export type JSONMappingParameters = { RecordRowPath: String; };

export type CodeContent = { ZipFileContent: String;

S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

TextContent: String; };

export type ApplicationConfiguration = AWS.KinesisAnalyticsV2.Application.ApplicationConfiguration;

export type EnvironmentProperties = { PropertyGroups: List<AWS.KinesisAnalyticsV2.Application.PropertyGroup>; };

export type CatalogConfiguration = { GlueDataCatalogConfiguration: AWS.KinesisAnalyticsV2.Application.GlueDataCatalogConfiguration; };

export type ApplicationName = String;

export type RuntimeEnvironment = String;

export type ApplicationMode = String;

export type ApplicationDescription = String;

export type Tags = List<AWS.KinesisAnalyticsV2.Application.Tag>;

export type ServiceExecutionRole = String;

}

export namespace ApplicationOutput {

export type KinesisFirehoseOutput = { ResourceARN: String; };

export type KinesisStreamsOutput = { ResourceARN: String; };

export type DestinationSchema = { RecordFormatType: String; };

export type Output = AWS.KinesisAnalyticsV2.ApplicationOutput.Output;

export type LambdaOutput = { ResourceARN: String; };

export type ApplicationName = String;

}

export namespace ApplicationCloudWatchLoggingOption {

export type CloudWatchLoggingOption = AWS.KinesisAnalyticsV2.ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption;

export type ApplicationName = String;

}

}

export namespace Cognito {

export namespace UserPool {

export type PasswordPolicy = { RequireNumbers: Boolean;

MinimumLength: Integer;

TemporaryPasswordValidityDays: Integer;

RequireUppercase: Boolean;

RequireLowercase: Boolean;

RequireSymbols: Boolean; };

export type RecoveryOption = { Priority: Integer;

Name: String; };

export type AdminCreateUserConfig = AWS.Cognito.UserPool.AdminCreateUserConfig;

export type SmsConfiguration = AWS.Cognito.UserPool.SmsConfiguration;

export type StringAttributeConstraints = { MinLength: String;

MaxLength: String; };

export type VerificationMessageTemplate = AWS.Cognito.UserPool.VerificationMessageTemplate;

export type LambdaConfig = AWS.Cognito.UserPool.LambdaConfig;

export type InviteMessageTemplate = { EmailMessage: String;

SMSMessage: String;

EmailSubject: String; };

export type EmailConfiguration = AWS.Cognito.UserPool.EmailConfiguration;

export type SchemaAttribute = { DeveloperOnlyAttribute: Boolean;

Mutable: Boolean;

AttributeDataType: String;

StringAttributeConstraints: AWS.Cognito.UserPool.StringAttributeConstraints;

Required: Boolean;

NumberAttributeConstraints: AWS.Cognito.UserPool.NumberAttributeConstraints;

Name: String; };

export type NumberAttributeConstraints = { MinValue: String;

MaxValue: String; };

export type CustomSMSSender = { LambdaArn: String;

LambdaVersion: String; };

export type AccountRecoverySetting = AWS.Cognito.UserPool.AccountRecoverySetting;

export type UserPoolAddOns = AWS.Cognito.UserPool.UserPoolAddOns;

export type Policies = AWS.Cognito.UserPool.Policies;

export type CustomEmailSender = { LambdaArn: String;

LambdaVersion: String; };

export type DeviceConfiguration = AWS.Cognito.UserPool.DeviceConfiguration;

export type UsernameConfiguration = AWS.Cognito.UserPool.UsernameConfiguration;

export type UserPoolTags = Json;

export type MfaConfiguration = String;

export type Schema = List<AWS.Cognito.UserPool.SchemaAttribute>;

export type SmsAuthenticationMessage = String;

export type UserPoolName = String;

export type SmsVerificationMessage = String;

export type AliasAttributes = List<String>;

export type EnabledMfas = List<String>;

export type EmailVerificationSubject = String;

export type UsernameAttributes = List<String>;

export type AutoVerifiedAttributes = List<String>;

export type EmailVerificationMessage = String;

}

export namespace UserPoolResourceServer {

export type ResourceServerScopeType = { ScopeName: String;

ScopeDescription: String; };

export type UserPoolId = String;

export type Identifier = String;

export type Scopes = List<AWS.Cognito.UserPoolResourceServer.ResourceServerScopeType>;

export type Name = String;

}

export namespace UserPoolRiskConfigurationAttachment {

export type AccountTakeoverActionsType = { HighAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

LowAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

MediumAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType; };

export type RiskExceptionConfigurationType = { BlockedIPRangeList: List<String>;

SkippedIPRangeList: List<String>; };

export type AccountTakeoverActionType = { Notify: Boolean;

EventAction: String; };

export type CompromisedCredentialsRiskConfigurationType = { Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType;

EventFilter: List<String>; };

export type NotifyEmailType = { TextBody: String;

HtmlBody: String;

Subject: String; };

export type CompromisedCredentialsActionsType = { EventAction: String; };

export type NotifyConfigurationType = { BlockEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

ReplyTo: String;

SourceArn: String;

NoActionEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

From: String;

MfaEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType; };

export type AccountTakeoverRiskConfigurationType = { Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType;

NotifyConfiguration: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyConfigurationType; };

export type CompromisedCredentialsRiskConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType;

export type UserPoolId = String;

export type ClientId = String;

export type AccountTakeoverRiskConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType;

export type RiskExceptionConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType;

}

export namespace IdentityPoolRoleAttachment {

export type RoleMapping = { Type: String;

AmbiguousRoleResolution: String;

RulesConfiguration: AWS.Cognito.IdentityPoolRoleAttachment.RulesConfigurationType;

IdentityProvider: String; };

export type MappingRule = { MatchType: String;

Value: String;

Claim: String;

RoleARN: String; };

export type RulesConfigurationType = { Rules: List<AWS.Cognito.IdentityPoolRoleAttachment.MappingRule>; };

export type RoleMappings = Json;

export type IdentityPoolId = String;

export type Roles = Json;

}

export namespace IdentityPool {

export type CognitoStreams = AWS.Cognito.IdentityPool.CognitoStreams;

export type PushSync = AWS.Cognito.IdentityPool.PushSync;

export type CognitoIdentityProvider = { ServerSideTokenCheck: Boolean;

ProviderName: String;

ClientId: String; };

export type CognitoIdentityProviders = List<AWS.Cognito.IdentityPool.CognitoIdentityProvider>;

export type CognitoEvents = Json;

export type DeveloperProviderName = String;

export type IdentityPoolName = String;

export type AllowUnauthenticatedIdentities = Boolean;

export type SupportedLoginProviders = Json;

export type SamlProviderARNs = List<String>;

export type OpenIdConnectProviderARNs = List<String>;

export type AllowClassicFlow = Boolean;

}

export namespace UserPoolUser {

export type AttributeType = { Value: String;

Name: String; };

export type ValidationData = List<AWS.Cognito.UserPoolUser.AttributeType>;

export type UserPoolId = String;

export type Username = String;

export type MessageAction = String;

export type ClientMetadata = Json;

export type DesiredDeliveryMediums = List<String>;

export type ForceAliasCreation = Boolean;

export type UserAttributes = List<AWS.Cognito.UserPoolUser.AttributeType>;

}

export namespace UserPoolClient {

export type TokenValidityUnits = AWS.Cognito.UserPoolClient.TokenValidityUnits;

export type AnalyticsConfiguration = AWS.Cognito.UserPoolClient.AnalyticsConfiguration;

export type GenerateSecret = Boolean;

export type CallbackURLs = List<String>;

export type IdTokenValidity = Integer;

export type AllowedOAuthScopes = List<String>;

export type ReadAttributes = List<String>;

export type AllowedOAuthFlowsUserPoolClient = Boolean;

export type DefaultRedirectURI = String;

export type SupportedIdentityProviders = List<String>;

export type ClientName = String;

export type UserPoolId = String;

export type AllowedOAuthFlows = List<String>;

export type ExplicitAuthFlows = List<String>;

export type LogoutURLs = List<String>;

export type AccessTokenValidity = Integer;

export type RefreshTokenValidity = Integer;

export type WriteAttributes = List<String>;

export type PreventUserExistenceErrors = String;

export type EnableTokenRevocation = Boolean;

}

export namespace UserPoolDomain {

export type CustomDomainConfigType = { CertificateArn: String; };

export type UserPoolId = String;

export type CustomDomainConfig = AWS.Cognito.UserPoolDomain.CustomDomainConfigType;

export type Domain = String;

}

export namespace UserPoolIdentityProvider {

export type ProviderName = String;

export type UserPoolId = String;

export type AttributeMapping = Json;

export type ProviderDetails = Json;

export type ProviderType = String;

export type IdpIdentifiers = List<String>;

}

export namespace UserPoolUserToGroupAttachment {

export type GroupName = String;

export type UserPoolId = String;

export type Username = String;

}

export namespace UserPoolUICustomizationAttachment {

export type CSS = String;

export type UserPoolId = String;

export type ClientId = String;

}

export namespace UserPoolGroup {

export type GroupName = String;

export type Description = String;

export type UserPoolId = String;

export type Precedence = Double;

export type RoleArn = String;

}

}

export namespace ECS {

export namespace ClusterCapacityProviderAssociations {

export type CapacityProviderStrategy = { Base: Integer;

Weight: Integer;

CapacityProvider: String; };

export type CapacityProviders = List<String>;

export type Cluster = String;

export type DefaultCapacityProviderStrategy = List<AWS.ECS.ClusterCapacityProviderAssociations.CapacityProviderStrategy>;

}

export namespace TaskDefinition {

export type LogConfiguration = { LogDriver: String;

Options: Map<String>;

SecretOptions: List<AWS.ECS.TaskDefinition.Secret>; };

export type FirelensConfiguration = { Type: String;

Options: Map<String>; };

export type Device = { ContainerPath: String;

HostPath: String;

Permissions: List<String>; };

export type EFSVolumeConfiguration = { FilesystemId: String;

RootDirectory: String;

TransitEncryption: String;

TransitEncryptionPort: Integer;

AuthorizationConfig: AWS.ECS.TaskDefinition.AuthorizationConfig; };

export type SystemControl = { Namespace: String;

Value: String; };

export type EphemeralStorage = AWS.ECS.TaskDefinition.EphemeralStorage;

export type ResourceRequirement = { Type: String;

Value: String; };

export type DockerVolumeConfiguration = { Autoprovision: Boolean;

Driver: String;

DriverOpts: Map<String>;

Labels: Map<String>;

Scope: String; };

export type AuthorizationConfig = { IAM: String;

AccessPointId: String; };

export type MountPoint = { ContainerPath: String;

ReadOnly: Boolean;

SourceVolume: String; };

export type KernelCapabilities = { Add: List<String>;

Drop: List<String>; };

export type PortMapping = { ContainerPort: Integer;

HostPort: Integer;

Protocol: String; };

export type Ulimit = { HardLimit: Integer;

Name: String;

SoftLimit: Integer; };

export type ContainerDependency = { ContainerName: String;

Condition: String; };

export type HostVolumeProperties = { SourcePath: String; };

export type RepositoryCredentials = { CredentialsParameter: String; };

export type InferenceAccelerator = { DeviceName: String;

DeviceType: String; };

export type Secret = { Name: String;

ValueFrom: String; };

export type EnvironmentFile = { Value: String;

Type: String; };

export type VolumeFrom = { ReadOnly: Boolean;

SourceContainer: String; };

export type HostEntry = { Hostname: String;

IpAddress: String; };

export type TaskDefinitionPlacementConstraint = { Type: String;

Expression: String; };

export type Volume = { DockerVolumeConfiguration: AWS.ECS.TaskDefinition.DockerVolumeConfiguration;

EFSVolumeConfiguration: AWS.ECS.TaskDefinition.EFSVolumeConfiguration;

Host: AWS.ECS.TaskDefinition.HostVolumeProperties;

Name: String; };

export type Tmpfs = { ContainerPath: String;

MountOptions: List<String>;

Size: Integer; };

export type ContainerDefinition = { Command: List<String>;

Cpu: Integer;

DependsOn: List<AWS.ECS.TaskDefinition.ContainerDependency>;

DisableNetworking: Boolean;

DnsSearchDomains: List<String>;

DnsServers: List<String>;

DockerLabels: Map<String>;

DockerSecurityOptions: List<String>;

EntryPoint: List<String>;

Environment: List<AWS.ECS.TaskDefinition.KeyValuePair>;

EnvironmentFiles: List<AWS.ECS.TaskDefinition.EnvironmentFile>;

Essential: Boolean;

ExtraHosts: List<AWS.ECS.TaskDefinition.HostEntry>;

FirelensConfiguration: AWS.ECS.TaskDefinition.FirelensConfiguration;

HealthCheck: AWS.ECS.TaskDefinition.HealthCheck;

Hostname: String;

Image: String;

Links: List<String>;

LinuxParameters: AWS.ECS.TaskDefinition.LinuxParameters;

LogConfiguration: AWS.ECS.TaskDefinition.LogConfiguration;

Memory: Integer;

MemoryReservation: Integer;

MountPoints: List<AWS.ECS.TaskDefinition.MountPoint>;

Name: String;

PortMappings: List<AWS.ECS.TaskDefinition.PortMapping>;

Privileged: Boolean;

ReadonlyRootFilesystem: Boolean;

RepositoryCredentials: AWS.ECS.TaskDefinition.RepositoryCredentials;

ResourceRequirements: List<AWS.ECS.TaskDefinition.ResourceRequirement>;

Secrets: List<AWS.ECS.TaskDefinition.Secret>;

StartTimeout: Integer;

StopTimeout: Integer;

Ulimits: List<AWS.ECS.TaskDefinition.Ulimit>;

User: String;

VolumesFrom: List<AWS.ECS.TaskDefinition.VolumeFrom>;

WorkingDirectory: String;

Interactive: Boolean;

PseudoTerminal: Boolean;

SystemControls: List<AWS.ECS.TaskDefinition.SystemControl>; };

export type KeyValuePair = { Name: String;

Value: String; };

export type HealthCheck = { Command: List<String>;

Interval: Integer;

Timeout: Integer;

Retries: Integer;

StartPeriod: Integer; };

export type LinuxParameters = { Capabilities: AWS.ECS.TaskDefinition.KernelCapabilities;

Devices: List<AWS.ECS.TaskDefinition.Device>;

InitProcessEnabled: Boolean;

MaxSwap: Integer;

SharedMemorySize: Integer;

Swappiness: Integer;

Tmpfs: List<AWS.ECS.TaskDefinition.Tmpfs>; };

export type ProxyConfiguration = AWS.ECS.TaskDefinition.ProxyConfiguration;

export type Family = String;

export type ContainerDefinitions = List<AWS.ECS.TaskDefinition.ContainerDefinition>;

export type Cpu = String;

export type ExecutionRoleArn = String;

export type InferenceAccelerators = List<AWS.ECS.TaskDefinition.InferenceAccelerator>;

export type Memory = String;

export type NetworkMode = String;

export type PlacementConstraints = List<AWS.ECS.TaskDefinition.TaskDefinitionPlacementConstraint>;

export type RequiresCompatibilities = List<String>;

export type TaskRoleArn = String;

export type Volumes = List<AWS.ECS.TaskDefinition.Volume>;

export type PidMode = String;

export type IpcMode = String;

export type Tags = List<AWS.ECS.TaskDefinition.Tag>;

}

export namespace Service {

export type PlacementStrategy = { Field: String;

Type: String; };

export type DeploymentController = AWS.ECS.Service.DeploymentController;

export type PlacementConstraint = { Expression: String;

Type: String; };

export type LoadBalancer = { ContainerName: String;

ContainerPort: Integer;

LoadBalancerName: String;

TargetGroupArn: String; };

export type DeploymentConfiguration = AWS.ECS.Service.DeploymentConfiguration;

export type AwsVpcConfiguration = { AssignPublicIp: String;

SecurityGroups: List<String>;

Subnets: List<String>; };

export type NetworkConfiguration = AWS.ECS.Service.NetworkConfiguration;

export type CapacityProviderStrategyItem = { Base: Integer;

CapacityProvider: String;

Weight: Integer; };

export type DeploymentCircuitBreaker = { Enable: Boolean;

Rollback: Boolean; };

export type ServiceRegistry = { ContainerName: String;

ContainerPort: Integer;

Port: Integer;

RegistryArn: String; };

export type CapacityProviderStrategy = List<AWS.ECS.Service.CapacityProviderStrategyItem>;

export type Cluster = String;

export type DesiredCount = Integer;

export type EnableECSManagedTags = Boolean;

export type EnableExecuteCommand = Boolean;

export type HealthCheckGracePeriodSeconds = Integer;

export type LaunchType = String;

export type LoadBalancers = List<AWS.ECS.Service.LoadBalancer>;

export type PlacementConstraints = List<AWS.ECS.Service.PlacementConstraint>;

export type PlacementStrategies = List<AWS.ECS.Service.PlacementStrategy>;

export type PlatformVersion = String;

export type PropagateTags = String;

export type Role = String;

export type SchedulingStrategy = String;

export type ServiceName = String;

export type ServiceRegistries = List<AWS.ECS.Service.ServiceRegistry>;

export type Tags = List<AWS.ECS.Service.Tag>;

export type TaskDefinition = String;

}

export namespace TaskSet {

export type NetworkConfiguration = AWS.ECS.TaskSet.NetworkConfiguration;

export type ServiceRegistry = { ContainerName: String;

ContainerPort: Integer;

Port: Integer;

RegistryArn: String; };

export type LoadBalancer = { ContainerName: String;

ContainerPort: Integer;

LoadBalancerName: String;

TargetGroupArn: String; };

export type AwsVpcConfiguration = { AssignPublicIp: String;

SecurityGroups: List<String>;

Subnets: List<String>; };

export type Scale = AWS.ECS.TaskSet.Scale;

export type Cluster = String;

export type ExternalId = String;

export type LaunchType = String;

export type LoadBalancers = List<AWS.ECS.TaskSet.LoadBalancer>;

export type PlatformVersion = String;

export type Service = String;

export type ServiceRegistries = List<AWS.ECS.TaskSet.ServiceRegistry>;

export type TaskDefinition = String;

}

export namespace Cluster {

export type ClusterSettings = List<AWS.ECS.Cluster.ClusterSettings>;

export type ExecuteCommandLogConfiguration = { CloudWatchLogGroupName: String;

CloudWatchEncryptionEnabled: Boolean;

S3BucketName: String;

S3EncryptionEnabled: Boolean;

S3KeyPrefix: String; };

export type ExecuteCommandConfiguration = { KmsKeyId: String;

Logging: String;

LogConfiguration: AWS.ECS.Cluster.ExecuteCommandLogConfiguration; };

export type ClusterConfiguration = { ExecuteCommandConfiguration: AWS.ECS.Cluster.ExecuteCommandConfiguration; };

export type CapacityProviderStrategyItem = { CapacityProvider: String;

Weight: Integer;

Base: Integer; };

export type Tags = List<AWS.ECS.Cluster.Tag>;

export type ClusterName = String;

export type Configuration = AWS.ECS.Cluster.ClusterConfiguration;

export type CapacityProviders = List<String>;

export type DefaultCapacityProviderStrategy = List<AWS.ECS.Cluster.CapacityProviderStrategyItem>;

}

export namespace CapacityProvider {

export type AutoScalingGroupProvider = AWS.ECS.CapacityProvider.AutoScalingGroupProvider;

export type ManagedScaling = { MinimumScalingStepSize: Integer;

MaximumScalingStepSize: Integer;

Status: String;

TargetCapacity: Integer;

InstanceWarmupPeriod: Integer; };

export type Name = String;

export type Tags = List<AWS.ECS.CapacityProvider.Tag>;

}

export namespace PrimaryTaskSet {

export type Cluster = String;

export type TaskSetId = String;

export type Service = String;

}

}

export namespace KinesisAnalytics {

export namespace ApplicationOutput {

export type KinesisFirehoseOutput = { ResourceARN: String;

RoleARN: String; };

export type KinesisStreamsOutput = { ResourceARN: String;

RoleARN: String; };

export type LambdaOutput = { ResourceARN: String;

RoleARN: String; };

export type Output = AWS.KinesisAnalytics.ApplicationOutput.Output;

export type DestinationSchema = { RecordFormatType: String; };

export type ApplicationName = String;

}

export namespace Application {

export type CSVMappingParameters = { RecordRowDelimiter: String;

RecordColumnDelimiter: String; };

export type Input = { NamePrefix: String;

InputSchema: AWS.KinesisAnalytics.Application.InputSchema;

KinesisStreamsInput: AWS.KinesisAnalytics.Application.KinesisStreamsInput;

KinesisFirehoseInput: AWS.KinesisAnalytics.Application.KinesisFirehoseInput;

InputProcessingConfiguration: AWS.KinesisAnalytics.Application.InputProcessingConfiguration;

InputParallelism: AWS.KinesisAnalytics.Application.InputParallelism; };

export type JSONMappingParameters = { RecordRowPath: String; };

export type KinesisStreamsInput = { ResourceARN: String;

RoleARN: String; };

export type RecordColumn = { Mapping: String;

SqlType: String;

Name: String; };

export type KinesisFirehoseInput = { ResourceARN: String;

RoleARN: String; };

export type InputParallelism = { Count: Integer; };

export type InputSchema = { RecordEncoding: String;

RecordColumns: List<AWS.KinesisAnalytics.Application.RecordColumn>;

RecordFormat: AWS.KinesisAnalytics.Application.RecordFormat; };

export type MappingParameters = { JSONMappingParameters: AWS.KinesisAnalytics.Application.JSONMappingParameters;

CSVMappingParameters: AWS.KinesisAnalytics.Application.CSVMappingParameters; };

export type RecordFormat = { MappingParameters: AWS.KinesisAnalytics.Application.MappingParameters;

RecordFormatType: String; };

export type InputProcessingConfiguration = { InputLambdaProcessor: AWS.KinesisAnalytics.Application.InputLambdaProcessor; };

export type InputLambdaProcessor = { ResourceARN: String;

RoleARN: String; };

export type ApplicationName = String;

export type Inputs = List<AWS.KinesisAnalytics.Application.Input>;

export type ApplicationDescription = String;

export type ApplicationCode = String;

}

export namespace ApplicationReferenceDataSource {

export type RecordFormat = { MappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.MappingParameters;

RecordFormatType: String; };

export type CSVMappingParameters = { RecordRowDelimiter: String;

RecordColumnDelimiter: String; };

export type S3ReferenceDataSource = { BucketARN: String;

FileKey: String;

ReferenceRoleARN: String; };

export type RecordColumn = { Mapping: String;

SqlType: String;

Name: String; };

export type ReferenceSchema = { RecordEncoding: String;

RecordColumns: List<AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordColumn>;

RecordFormat: AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordFormat; };

export type MappingParameters = { JSONMappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.JSONMappingParameters;

CSVMappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.CSVMappingParameters; };

export type JSONMappingParameters = { RecordRowPath: String; };

export type ReferenceDataSource = AWS.KinesisAnalytics.ApplicationReferenceDataSource.ReferenceDataSource;

export type ApplicationName = String;

}

}

export namespace Config {

export namespace ConfigurationAggregator {

export type OrganizationAggregationSource = AWS.Config.ConfigurationAggregator.OrganizationAggregationSource;

export type AccountAggregationSource = { AllAwsRegions: Boolean;

AwsRegions: List<String>;

AccountIds: List<String>; };

export type AccountAggregationSources = List<AWS.Config.ConfigurationAggregator.AccountAggregationSource>;

export type ConfigurationAggregatorName = String;

export type Tags = List<AWS.Config.ConfigurationAggregator.Tag>;

}

export namespace DeliveryChannel {

export type ConfigSnapshotDeliveryProperties = AWS.Config.DeliveryChannel.ConfigSnapshotDeliveryProperties;

export type Name = String;

export type S3BucketName = String;

export type S3KeyPrefix = String;

export type S3KmsKeyArn = String;

export type SnsTopicARN = String;

}

export namespace ConfigurationRecorder {

export type RecordingGroup = AWS.Config.ConfigurationRecorder.RecordingGroup;

export type Name = String;

export type RoleARN = String;

}

export namespace RemediationConfiguration {

export type ResourceValue = { Value: String; };

export type RemediationParameterValue = { ResourceValue: AWS.Config.RemediationConfiguration.ResourceValue;

StaticValue: AWS.Config.RemediationConfiguration.StaticValue; };

export type SsmControls = { ErrorPercentage: Integer;

ConcurrentExecutionRatePercentage: Integer; };

export type StaticValue = { Values: List<String>; };

export type ExecutionControls = AWS.Config.RemediationConfiguration.ExecutionControls;

export type TargetVersion = String;

export type Parameters = Json;

export type TargetType = String;

export type ConfigRuleName = String;

export type ResourceType = String;

export type RetryAttemptSeconds = Integer;

export type MaximumAutomaticAttempts = Integer;

export type TargetId = String;

export type Automatic = Boolean;

}

export namespace ConformancePack {

export type ConformancePackInputParameter = { ParameterName: String;

ParameterValue: String; };

export type ConformancePackName = String;

export type DeliveryS3Bucket = String;

export type DeliveryS3KeyPrefix = String;

export type TemplateBody = String;

export type TemplateS3Uri = String;

export type ConformancePackInputParameters = List<AWS.Config.ConformancePack.ConformancePackInputParameter>;

}

export namespace ConfigRule {

export type Source = AWS.Config.ConfigRule.Source;

export type Scope = AWS.Config.ConfigRule.Scope;

export type SourceDetail = { EventSource: String;

MaximumExecutionFrequency: String;

MessageType: String; };

export type ConfigRuleName = String;

export type Description = String;

export type InputParameters = Json;

export type MaximumExecutionFrequency = String;

}

export namespace OrganizationConformancePack {

export type ConformancePackInputParameter = { ParameterName: String;

ParameterValue: String; };

export type OrganizationConformancePackName = String;

export type TemplateS3Uri = String;

export type TemplateBody = String;

export type DeliveryS3Bucket = String;

export type DeliveryS3KeyPrefix = String;

export type ConformancePackInputParameters = List<AWS.Config.OrganizationConformancePack.ConformancePackInputParameter>;

export type ExcludedAccounts = List<String>;

}

export namespace OrganizationConfigRule {

export type OrganizationManagedRuleMetadata = AWS.Config.OrganizationConfigRule.OrganizationManagedRuleMetadata;

export type OrganizationCustomRuleMetadata = AWS.Config.OrganizationConfigRule.OrganizationCustomRuleMetadata;

export type OrganizationConfigRuleName = String;

export type ExcludedAccounts = List<String>;

}

export namespace StoredQuery {

export type QueryName = String;

export type QueryDescription = String;

export type QueryExpression = String;

export type Tags = List<AWS.Config.StoredQuery.Tag>;

}

export namespace AggregationAuthorization {

export type AuthorizedAccountId = String;

export type AuthorizedAwsRegion = String;

export type Tags = List<AWS.Config.AggregationAuthorization.Tag>;

}

}

export namespace OpsWorks {

export namespace Layer {

export type ShutdownEventConfiguration = { DelayUntilElbConnectionsDrained: Boolean;

ExecutionTimeout: Integer; };

export type VolumeConfiguration = { Encrypted: Boolean;

Iops: Integer;

MountPoint: String;

NumberOfDisks: Integer;

RaidLevel: Integer;

Size: Integer;

VolumeType: String; };

export type Recipes = { Configure: List<String>;

Deploy: List<String>;

Setup: List<String>;

Shutdown: List<String>;

Undeploy: List<String>; };

export type LifecycleEventConfiguration = AWS.OpsWorks.Layer.LifecycleEventConfiguration;

export type LoadBasedAutoScaling = AWS.OpsWorks.Layer.LoadBasedAutoScaling;

export type AutoScalingThresholds = { CpuThreshold: Double;

IgnoreMetricsTime: Integer;

InstanceCount: Integer;

LoadThreshold: Double;

MemoryThreshold: Double;

ThresholdsWaitTime: Integer; };

export type Attributes = Map<String>;

export type AutoAssignElasticIps = Boolean;

export type AutoAssignPublicIps = Boolean;

export type CustomInstanceProfileArn = String;

export type CustomJson = Json;

export type CustomRecipes = AWS.OpsWorks.Layer.Recipes;

export type CustomSecurityGroupIds = List<String>;

export type EnableAutoHealing = Boolean;

export type InstallUpdatesOnBoot = Boolean;

export type Name = String;

export type Packages = List<String>;

export type Shortname = String;

export type StackId = String;

export type Tags = List<AWS.OpsWorks.Layer.Tag>;

export type Type = String;

export type UseEbsOptimizedInstances = Boolean;

export type VolumeConfigurations = List<AWS.OpsWorks.Layer.VolumeConfiguration>;

}

export namespace App {

export type DataSource = { Arn: String;

DatabaseName: String;

Type: String; };

export type SslConfiguration = AWS.OpsWorks.App.SslConfiguration;

export type EnvironmentVariable = { Key: String;

Secure: Boolean;

Value: String; };

export type Source = { Password: String;

Revision: String;

SshKey: String;

Type: String;

Url: String;

Username: String; };

export type AppSource = AWS.OpsWorks.App.Source;

export type Attributes = Map<String>;

export type DataSources = List<AWS.OpsWorks.App.DataSource>;

export type Description = String;

export type Domains = List<String>;

export type EnableSsl = Boolean;

export type Environment = List<AWS.OpsWorks.App.EnvironmentVariable>;

export type Name = String;

export type Shortname = String;

export type StackId = String;

export type Type = String;

}

export namespace Instance {

export type BlockDeviceMapping = { DeviceName: String;

Ebs: AWS.OpsWorks.Instance.EbsBlockDevice;

NoDevice: String;

VirtualName: String; };

export type TimeBasedAutoScaling = AWS.OpsWorks.Instance.TimeBasedAutoScaling;

export type EbsBlockDevice = { DeleteOnTermination: Boolean;

Iops: Integer;

SnapshotId: String;

VolumeSize: Integer;

VolumeType: String; };

export type AgentVersion = String;

export type AmiId = String;

export type Architecture = String;

export type AutoScalingType = String;

export type AvailabilityZone = String;

export type BlockDeviceMappings = List<AWS.OpsWorks.Instance.BlockDeviceMapping>;

export type EbsOptimized = Boolean;

export type ElasticIps = List<String>;

export type Hostname = String;

export type InstallUpdatesOnBoot = Boolean;

export type InstanceType = String;

export type LayerIds = List<String>;

export type Os = String;

export type RootDeviceType = String;

export type SshKeyName = String;

export type StackId = String;

export type SubnetId = String;

export type Tenancy = String;

export type VirtualizationType = String;

export type Volumes = List<String>;

}

export namespace Stack {

export type StackConfigurationManager = { Name: String;

Version: String; };

export type RdsDbInstance = { DbPassword: String;

DbUser: String;

RdsDbInstanceArn: String; };

export type Source = { Password: String;

Revision: String;

SshKey: String;

Type: String;

Url: String;

Username: String; };

export type ChefConfiguration = AWS.OpsWorks.Stack.ChefConfiguration;

export type ElasticIp = { Ip: String;

Name: String; };

export type AgentVersion = String;

export type Attributes = Map<String>;

export type CloneAppIds = List<String>;

export type ClonePermissions = Boolean;

export type ConfigurationManager = AWS.OpsWorks.Stack.StackConfigurationManager;

export type CustomCookbooksSource = AWS.OpsWorks.Stack.Source;

export type CustomJson = Json;

export type DefaultAvailabilityZone = String;

export type DefaultInstanceProfileArn = String;

export type DefaultOs = String;

export type DefaultRootDeviceType = String;

export type DefaultSshKeyName = String;

export type DefaultSubnetId = String;

export type EcsClusterArn = String;

export type ElasticIps = List<AWS.OpsWorks.Stack.ElasticIp>;

export type HostnameTheme = String;

export type Name = String;

export type RdsDbInstances = List<AWS.OpsWorks.Stack.RdsDbInstance>;

export type ServiceRoleArn = String;

export type SourceStackId = String;

export type Tags = List<AWS.OpsWorks.Stack.Tag>;

export type UseCustomCookbooks = Boolean;

export type UseOpsworksSecurityGroups = Boolean;

export type VpcId = String;

}

export namespace UserProfile {

export type AllowSelfManagement = Boolean;

export type IamUserArn = String;

export type SshPublicKey = String;

export type SshUsername = String;

}

export namespace Volume {

export type Ec2VolumeId = String;

export type MountPoint = String;

export type Name = String;

export type StackId = String;

}

export namespace ElasticLoadBalancerAttachment {

export type ElasticLoadBalancerName = String;

export type LayerId = String;

}

}

export namespace CodeDeploy {

export namespace DeploymentConfig {

export type TimeBasedCanary = { CanaryInterval: Integer;

CanaryPercentage: Integer; };

export type MinimumHealthyHosts = AWS.CodeDeploy.DeploymentConfig.MinimumHealthyHosts;

export type TrafficRoutingConfig = AWS.CodeDeploy.DeploymentConfig.TrafficRoutingConfig;

export type TimeBasedLinear = { LinearInterval: Integer;

LinearPercentage: Integer; };

export type ComputePlatform = String;

export type DeploymentConfigName = String;

}

export namespace DeploymentGroup {

export type TargetGroupInfo = { Name: String; };

export type OnPremisesTagSetListObject = { OnPremisesTagGroup: List<AWS.CodeDeploy.DeploymentGroup.TagFilter>; };

export type DeploymentStyle = AWS.CodeDeploy.DeploymentGroup.DeploymentStyle;

export type EC2TagFilter = { Key: String;

Type: String;

Value: String; };

export type OnPremisesTagSet = AWS.CodeDeploy.DeploymentGroup.OnPremisesTagSet;

export type LoadBalancerInfo = AWS.CodeDeploy.DeploymentGroup.LoadBalancerInfo;

export type RevisionLocation = { GitHubLocation: AWS.CodeDeploy.DeploymentGroup.GitHubLocation;

RevisionType: String;

S3Location: AWS.CodeDeploy.DeploymentGroup.S3Location; };

export type TriggerConfig = { TriggerEvents: List<String>;

TriggerName: String;

TriggerTargetArn: String; };

export type EC2TagSet = { Ec2TagSetList: List<AWS.CodeDeploy.DeploymentGroup.EC2TagSetListObject>; };

export type AlarmConfiguration = AWS.CodeDeploy.DeploymentGroup.AlarmConfiguration;

export type BlueGreenDeploymentConfiguration = AWS.CodeDeploy.DeploymentGroup.BlueGreenDeploymentConfiguration;

export type DeploymentReadyOption = { ActionOnTimeout: String;

WaitTimeInMinutes: Integer; };

export type AutoRollbackConfiguration = AWS.CodeDeploy.DeploymentGroup.AutoRollbackConfiguration;

export type S3Location = { Bucket: String;

BundleType: String;

ETag: String;

Key: String;

Version: String; };

export type BlueInstanceTerminationOption = { Action: String;

TerminationWaitTimeInMinutes: Integer; };

export type TagFilter = { Key: String;

Type: String;

Value: String; };

export type GitHubLocation = { CommitId: String;

Repository: String; };

export type ELBInfo = { Name: String; };

export type Alarm = { Name: String; };

export type GreenFleetProvisioningOption = { Action: String; };

export type Deployment = AWS.CodeDeploy.DeploymentGroup.Deployment;

export type ECSService = { ClusterName: String;

ServiceName: String; };

export type EC2TagSetListObject = { Ec2TagGroup: List<AWS.CodeDeploy.DeploymentGroup.EC2TagFilter>; };

export type ApplicationName = String;

export type AutoScalingGroups = List<String>;

export type DeploymentConfigName = String;

export type DeploymentGroupName = String;

export type ECSServices = List<AWS.CodeDeploy.DeploymentGroup.ECSService>;

export type Ec2TagFilters = List<AWS.CodeDeploy.DeploymentGroup.EC2TagFilter>;

export type Ec2TagSet = AWS.CodeDeploy.DeploymentGroup.EC2TagSet;

export type OnPremisesInstanceTagFilters = List<AWS.CodeDeploy.DeploymentGroup.TagFilter>;

export type ServiceRoleArn = String;

export type TriggerConfigurations = List<AWS.CodeDeploy.DeploymentGroup.TriggerConfig>;

}

export namespace Application {

export type ApplicationName = String;

export type ComputePlatform = String;

export type Tags = List<AWS.CodeDeploy.Application.Tag>;

}

}

export namespace Batch {

export namespace JobDefinition {

export type Volumes = { Host: AWS.Batch.JobDefinition.VolumesHost;

EfsVolumeConfiguration: AWS.Batch.JobDefinition.EfsVolumeConfiguration;

Name: String; };

export type AuthorizationConfig = { Iam: String;

AccessPointId: String; };

export type ResourceRequirement = { Type: String;

Value: String; };

export type Environment = { Value: String;

Name: String; };

export type VolumesHost = { SourcePath: String; };

export type NodeProperties = AWS.Batch.JobDefinition.NodeProperties;

export type RetryStrategy = AWS.Batch.JobDefinition.RetryStrategy;

export type Secret = { ValueFrom: String;

Name: String; };

export type NetworkConfiguration = { AssignPublicIp: String; };

export type LogConfiguration = { SecretOptions: List<AWS.Batch.JobDefinition.Secret>;

Options: Json;

LogDriver: String; };

export type ContainerProperties = AWS.Batch.JobDefinition.ContainerProperties;

export type MountPoints = { ReadOnly: Boolean;

SourceVolume: String;

ContainerPath: String; };

export type EvaluateOnExit = { Action: String;

OnExitCode: String;

OnReason: String;

OnStatusReason: String; };

export type Ulimit = { SoftLimit: Integer;

HardLimit: Integer;

Name: String; };

export type LinuxParameters = { Swappiness: Integer;

Tmpfs: List<AWS.Batch.JobDefinition.Tmpfs>;

SharedMemorySize: Integer;

Devices: List<AWS.Batch.JobDefinition.Device>;

InitProcessEnabled: Boolean;

MaxSwap: Integer; };

export type FargatePlatformConfiguration = { PlatformVersion: String; };

export type Timeout = AWS.Batch.JobDefinition.Timeout;

export type Tmpfs = { Size: Integer;

ContainerPath: String;

MountOptions: List<String>; };

export type NodeRangeProperty = { Container: AWS.Batch.JobDefinition.ContainerProperties;

TargetNodes: String; };

export type EfsVolumeConfiguration = { TransitEncryption: String;

AuthorizationConfig: AWS.Batch.JobDefinition.AuthorizationConfig;

FileSystemId: String;

RootDirectory: String;

TransitEncryptionPort: Integer; };

export type Device = { HostPath: String;

Permissions: List<String>;

ContainerPath: String; };

export type Type = String;

export type Parameters = Json;

export type JobDefinitionName = String;

export type PropagateTags = Boolean;

export type PlatformCapabilities = List<String>;

export type Tags = Json;

}

export namespace ComputeEnvironment {

export type ComputeResources = AWS.Batch.ComputeEnvironment.ComputeResources;

export type LaunchTemplateSpecification = { LaunchTemplateName: String;

Version: String;

LaunchTemplateId: String; };

export type Ec2ConfigurationObject = { ImageIdOverride: String;

ImageType: String; };

export type Type = String;

export type ServiceRole = String;

export type ComputeEnvironmentName = String;

export type State = String;

export type Tags = Json;

}

export namespace JobQueue {

export type ComputeEnvironmentOrder = List<AWS.Batch.JobQueue.ComputeEnvironmentOrder>;

export type Priority = Integer;

export type State = String;

export type JobQueueName = String;

export type Tags = Json;

}

}

export namespace DataBrew {

export namespace Dataset {

export type FilterExpression = { Expression: String;

ValuesMap: List<AWS.DataBrew.Dataset.FilterValue>; };

export type PathParameter = { PathParameterName: String;

DatasetParameter: AWS.DataBrew.Dataset.DatasetParameter; };

export type DatabaseInputDefinition = { GlueConnectionName: String;

DatabaseTableName: String;

TempDirectory: AWS.DataBrew.Dataset.S3Location; };

export type PathOptions = AWS.DataBrew.Dataset.PathOptions;

export type DatasetParameter = { Name: String;

Type: String;

DatetimeOptions: AWS.DataBrew.Dataset.DatetimeOptions;

CreateColumn: Boolean;

Filter: AWS.DataBrew.Dataset.FilterExpression; };

export type FilesLimit = { MaxFiles: Integer;

OrderedBy: String;

Order: String; };

export type CsvOptions = { Delimiter: String;

HeaderRow: Boolean; };

export type FormatOptions = AWS.DataBrew.Dataset.FormatOptions;

export type ExcelOptions = { SheetNames: List<String>;

SheetIndexes: List<Integer>;

HeaderRow: Boolean; };

export type JsonOptions = { MultiLine: Boolean; };

export type Input = AWS.DataBrew.Dataset.Input;

export type FilterValue = { ValueReference: String;

Value: String; };

export type DataCatalogInputDefinition = { CatalogId: String;

DatabaseName: String;

TableName: String;

TempDirectory: AWS.DataBrew.Dataset.S3Location; };

export type DatetimeOptions = { Format: String;

TimezoneOffset: String;

LocaleCode: String; };

export type S3Location = { Bucket: String;

Key: String; };

export type Name = String;

export type Format = String;

export type Tags = List<AWS.DataBrew.Dataset.Tag>;

}

export namespace Recipe {

export type RecipeStep = { Action: AWS.DataBrew.Recipe.Action;

ConditionExpressions: List<AWS.DataBrew.Recipe.ConditionExpression>; };

export type SecondaryInput = { S3InputDefinition: AWS.DataBrew.Recipe.S3Location;

DataCatalogInputDefinition: AWS.DataBrew.Recipe.DataCatalogInputDefinition; };

export type Action = { Operation: String;

Parameters: AWS.DataBrew.Recipe.ParameterMap; };

export type RecipeParameters = { AggregateFunction: String;

Base: String;

CaseStatement: String;

CategoryMap: String;

CharsToRemove: String;

CollapseConsecutiveWhitespace: String;

ColumnDataType: String;

ColumnRange: String;

Count: String;

CustomCharacters: String;

CustomStopWords: String;

CustomValue: String;

DatasetsColumns: String;

DateAddValue: String;

DateTimeFormat: String;

DateTimeParameters: String;

DeleteOtherRows: String;

Delimiter: String;

EndPattern: String;

EndPosition: String;

EndValue: String;

ExpandContractions: String;

Exponent: String;

FalseString: String;

GroupByAggFunctionOptions: String;

GroupByColumns: String;

HiddenColumns: String;

IgnoreCase: String;

IncludeInSplit: String;

Interval: String;

IsText: String;

JoinKeys: String;

JoinType: String;

LeftColumns: String;

Limit: String;

LowerBound: String;

MapType: String;

ModeType: String;

MultiLine: Boolean;

NumRows: String;

NumRowsAfter: String;

NumRowsBefore: String;

OrderByColumn: String;

OrderByColumns: String;

Other: String;

Pattern: String;

PatternOption1: String;

PatternOption2: String;

PatternOptions: String;

Period: String;

Position: String;

RemoveAllPunctuation: String;

RemoveAllQuotes: String;

RemoveAllWhitespace: String;

RemoveCustomCharacters: String;

RemoveCustomValue: String;

RemoveLeadingAndTrailingPunctuation: String;

RemoveLeadingAndTrailingQuotes: String;

RemoveLeadingAndTrailingWhitespace: String;

RemoveLetters: String;

RemoveNumbers: String;

RemoveSourceColumn: String;

RemoveSpecialCharacters: String;

RightColumns: String;

SampleSize: String;

SampleType: String;

SecondInput: String;

SecondaryInputs: List<AWS.DataBrew.Recipe.SecondaryInput>;

SourceColumn: String;

SourceColumn1: String;

SourceColumn2: String;

SourceColumns: String;

StartColumnIndex: String;

StartPattern: String;

StartPosition: String;

StartValue: String;

StemmingMode: String;

StepCount: String;

StepIndex: String;

StopWordsMode: String;

Strategy: String;

SheetNames: List<String>;

SheetIndexes: List<Integer>;

TargetColumn: String;

TargetColumnNames: String;

TargetDateFormat: String;

TargetIndex: String;

TimeZone: String;

TokenizerPattern: String;

TrueString: String;

UdfLang: String;

Units: String;

UnpivotColumn: String;

UpperBound: String;

UseNewDataFrame: String;

Value: String;

Value1: String;

Value2: String;

ValueColumn: String;

ViewFrame: String;

Input: Json; };

export type S3Location = { Bucket: String;

Key: String; };

export type ParameterMap = any;

export type ConditionExpression = { Condition: String;

Value: String;

TargetColumn: String; };

export type DataCatalogInputDefinition = { CatalogId: String;

DatabaseName: String;

TableName: String;

TempDirectory: AWS.DataBrew.Recipe.S3Location; };

export type Description = String;

export type Name = String;

export type Steps = List<AWS.DataBrew.Recipe.RecipeStep>;

export type Tags = List<AWS.DataBrew.Recipe.Tag>;

}

export namespace Job {

export type DataCatalogOutput = { CatalogId: String;

DatabaseName: String;

TableName: String;

S3Options: AWS.DataBrew.Job.S3TableOutputOptions;

DatabaseOptions: AWS.DataBrew.Job.DatabaseTableOutputOptions;

Overwrite: Boolean; };

export type S3Location = { Bucket: String;

Key: String; };

export type OutputFormatOptions = { Csv: AWS.DataBrew.Job.CsvOutputOptions; };

export type CsvOutputOptions = { Delimiter: String; };

export type Recipe = AWS.DataBrew.Job.Recipe;

export type S3TableOutputOptions = { Location: AWS.DataBrew.Job.S3Location; };

export type Output = { CompressionFormat: String;

Format: String;

FormatOptions: AWS.DataBrew.Job.OutputFormatOptions;

PartitionColumns: List<String>;

Location: AWS.DataBrew.Job.S3Location;

Overwrite: Boolean; };

export type OutputLocation = AWS.DataBrew.Job.OutputLocation;

export type DatabaseTableOutputOptions = { TempDirectory: AWS.DataBrew.Job.S3Location;

TableName: String; };

export type JobSample = AWS.DataBrew.Job.JobSample;

export type DatasetName = String;

export type EncryptionKeyArn = String;

export type EncryptionMode = String;

export type Name = String;

export type Type = String;

export type LogSubscription = String;

export type MaxCapacity = Integer;

export type MaxRetries = Integer;

export type Outputs = List<AWS.DataBrew.Job.Output>;

export type DataCatalogOutputs = List<AWS.DataBrew.Job.DataCatalogOutput>;

export type ProjectName = String;

export type RoleArn = String;

export type Tags = List<AWS.DataBrew.Job.Tag>;

export type Timeout = Integer;

}

export namespace Project {

export type Sample = AWS.DataBrew.Project.Sample;

export type DatasetName = String;

export type Name = String;

export type RecipeName = String;

export type RoleArn = String;

export type Tags = List<AWS.DataBrew.Project.Tag>;

}

export namespace Schedule {

export type JobNames = List<String>;

export type CronExpression = String;

export type Name = String;

export type Tags = List<AWS.DataBrew.Schedule.Tag>;

}

}

export namespace ApplicationAutoScaling {

export namespace ScalingPolicy {

export type StepScalingPolicyConfiguration = AWS.ApplicationAutoScaling.ScalingPolicy.StepScalingPolicyConfiguration;

export type PredefinedMetricSpecification = { PredefinedMetricType: String;

ResourceLabel: String; };

export type CustomizedMetricSpecification = { Dimensions: List<AWS.ApplicationAutoScaling.ScalingPolicy.MetricDimension>;

MetricName: String;

Namespace: String;

Statistic: String;

Unit: String; };

export type MetricDimension = { Name: String;

Value: String; };

export type StepAdjustment = { MetricIntervalLowerBound: Double;

MetricIntervalUpperBound: Double;

ScalingAdjustment: Integer; };

export type TargetTrackingScalingPolicyConfiguration = AWS.ApplicationAutoScaling.ScalingPolicy.TargetTrackingScalingPolicyConfiguration;

export type PolicyName = String;

export type PolicyType = String;

export type ResourceId = String;

export type ScalableDimension = String;

export type ScalingTargetId = String;

export type ServiceNamespace = String;

}

export namespace ScalableTarget {

export type SuspendedState = AWS.ApplicationAutoScaling.ScalableTarget.SuspendedState;

export type ScheduledAction = { EndTime: Timestamp;

ScalableTargetAction: AWS.ApplicationAutoScaling.ScalableTarget.ScalableTargetAction;

Schedule: String;

ScheduledActionName: String;

StartTime: Timestamp;

Timezone: String; };

export type ScalableTargetAction = { MaxCapacity: Integer;

MinCapacity: Integer; };

export type MaxCapacity = Integer;

export type MinCapacity = Integer;

export type ResourceId = String;

export type RoleARN = String;

export type ScalableDimension = String;

export type ScheduledActions = List<AWS.ApplicationAutoScaling.ScalableTarget.ScheduledAction>;

export type ServiceNamespace = String;

}

}

export namespace EC2 {

export namespace TransitGatewayConnect {

export type TransitGatewayConnectOptions = { Protocol: String; };

export type TransportTransitGatewayAttachmentId = String;

export type Tags = List<AWS.EC2.TransitGatewayConnect.Tag>;

export type Options = AWS.EC2.TransitGatewayConnect.TransitGatewayConnectOptions;

}

export namespace EC2Fleet {

export type FleetLaunchTemplateSpecificationRequest = { LaunchTemplateName: String;

LaunchTemplateId: String;

Version: String; };

export type TargetCapacitySpecificationRequest = { DefaultTargetCapacityType: String;

TotalTargetCapacity: Integer;

OnDemandTargetCapacity: Integer;

SpotTargetCapacity: Integer; };

export type CapacityReservationOptionsRequest = { UsageStrategy: String; };

export type FleetLaunchTemplateConfigRequest = { LaunchTemplateSpecification: AWS.EC2.EC2Fleet.FleetLaunchTemplateSpecificationRequest;

Overrides: List<AWS.EC2.EC2Fleet.FleetLaunchTemplateOverridesRequest>; };

export type TagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.EC2Fleet.Tag>; };

export type SpotOptionsRequest = { SingleAvailabilityZone: Boolean;

AllocationStrategy: String;

SingleInstanceType: Boolean;

MinTargetCapacity: Integer;

MaxTotalPrice: String;

InstanceInterruptionBehavior: String;

InstancePoolsToUseCount: Integer; };

export type OnDemandOptionsRequest = { SingleAvailabilityZone: Boolean;

AllocationStrategy: String;

SingleInstanceType: Boolean;

MinTargetCapacity: Integer;

MaxTotalPrice: String;

CapacityReservationOptions: AWS.EC2.EC2Fleet.CapacityReservationOptionsRequest; };

export type FleetLaunchTemplateOverridesRequest = { WeightedCapacity: Double;

Placement: AWS.EC2.EC2Fleet.Placement;

Priority: Double;

AvailabilityZone: String;

SubnetId: String;

InstanceType: String;

MaxPrice: String; };

export type Placement = { GroupName: String;

Tenancy: String;

SpreadDomain: String;

PartitionNumber: Integer;

AvailabilityZone: String;

Affinity: String;

HostId: String;

HostResourceGroupArn: String; };

export type TargetCapacitySpecification = AWS.EC2.EC2Fleet.TargetCapacitySpecificationRequest;

export type OnDemandOptions = AWS.EC2.EC2Fleet.OnDemandOptionsRequest;

export type Type = String;

export type ExcessCapacityTerminationPolicy = String;

export type TagSpecifications = List<AWS.EC2.EC2Fleet.TagSpecification>;

export type SpotOptions = AWS.EC2.EC2Fleet.SpotOptionsRequest;

export type ValidFrom = String;

export type ReplaceUnhealthyInstances = Boolean;

export type LaunchTemplateConfigs = List<AWS.EC2.EC2Fleet.FleetLaunchTemplateConfigRequest>;

export type TerminateInstancesWithExpiration = Boolean;

export type ValidUntil = String;

export type Context = String;

}

export namespace VPNConnection {

export type VpnTunnelOptionsSpecification = { PreSharedKey: String;

TunnelInsideCidr: String; };

export type CustomerGatewayId = String;

export type StaticRoutesOnly = Boolean;

export type Tags = List<AWS.EC2.VPNConnection.Tag>;

export type TransitGatewayId = String;

export type Type = String;

export type VpnGatewayId = String;

export type VpnTunnelOptionsSpecifications = List<AWS.EC2.VPNConnection.VpnTunnelOptionsSpecification>;

}

export namespace TrafficMirrorFilterRule {

export type TrafficMirrorPortRange = { FromPort: Integer;

ToPort: Integer; };

export type DestinationPortRange = AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

export type Description = String;

export type SourcePortRange = AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

export type RuleAction = String;

export type SourceCidrBlock = String;

export type RuleNumber = Integer;

export type DestinationCidrBlock = String;

export type TrafficMirrorFilterId = String;

export type TrafficDirection = String;

export type Protocol = Integer;

}

export namespace LaunchTemplate {

export type BlockDeviceMapping = { Ebs: AWS.EC2.LaunchTemplate.Ebs;

NoDevice: String;

VirtualName: String;

DeviceName: String; };

export type SpotOptions = { SpotInstanceType: String;

InstanceInterruptionBehavior: String;

MaxPrice: String;

BlockDurationMinutes: Integer;

ValidUntil: String; };

export type ElasticGpuSpecification = { Type: String; };

export type TagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.LaunchTemplate.Tag>; };

export type Ebs = { SnapshotId: String;

VolumeType: String;

KmsKeyId: String;

Encrypted: Boolean;

Throughput: Integer;

Iops: Integer;

VolumeSize: Integer;

DeleteOnTermination: Boolean; };

export type EnclaveOptions = { Enabled: Boolean; };

export type LaunchTemplateData = AWS.EC2.LaunchTemplate.LaunchTemplateData;

export type MetadataOptions = { HttpPutResponseHopLimit: Integer;

HttpTokens: String;

HttpEndpoint: String; };

export type CapacityReservationSpecification = { CapacityReservationPreference: String;

CapacityReservationTarget: AWS.EC2.LaunchTemplate.CapacityReservationTarget; };

export type CapacityReservationTarget = { CapacityReservationResourceGroupArn: String;

CapacityReservationId: String; };

export type CpuOptions = { ThreadsPerCore: Integer;

CoreCount: Integer; };

export type PrivateIpAdd = { PrivateIpAddress: String;

Primary: Boolean; };

export type IamInstanceProfile = { Arn: String;

Name: String; };

export type LicenseSpecification = { LicenseConfigurationArn: String; };

export type HibernationOptions = { Configured: Boolean; };

export type InstanceMarketOptions = { SpotOptions: AWS.EC2.LaunchTemplate.SpotOptions;

MarketType: String; };

export type CreditSpecification = { CpuCredits: String; };

export type Monitoring = { Enabled: Boolean; };

export type Placement = { GroupName: String;

Tenancy: String;

SpreadDomain: String;

PartitionNumber: Integer;

AvailabilityZone: String;

Affinity: String;

HostId: String;

HostResourceGroupArn: String; };

export type Ipv6Add = { Ipv6Address: String; };

export type NetworkInterface = { Description: String;

PrivateIpAddress: String;

PrivateIpAddresses: List<AWS.EC2.LaunchTemplate.PrivateIpAdd>;

SecondaryPrivateIpAddressCount: Integer;

DeviceIndex: Integer;

SubnetId: String;

Ipv6Addresses: List<AWS.EC2.LaunchTemplate.Ipv6Add>;

AssociatePublicIpAddress: Boolean;

NetworkInterfaceId: String;

NetworkCardIndex: Integer;

InterfaceType: String;

AssociateCarrierIpAddress: Boolean;

Ipv6AddressCount: Integer;

Groups: List<String>;

DeleteOnTermination: Boolean; };

export type LaunchTemplateElasticInferenceAccelerator = { Type: String;

Count: Integer; };

export type LaunchTemplateTagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.LaunchTemplate.Tag>; };

export type LaunchTemplateName = String;

export type TagSpecifications = List<AWS.EC2.LaunchTemplate.LaunchTemplateTagSpecification>;

}

export namespace Instance {

export type HibernationOptions = AWS.EC2.Instance.HibernationOptions;

export type Ebs = { DeleteOnTermination: Boolean;

Encrypted: Boolean;

Iops: Integer;

KmsKeyId: String;

SnapshotId: String;

VolumeSize: Integer;

VolumeType: String; };

export type NoDevice = {  };

export type CreditSpecification = AWS.EC2.Instance.CreditSpecification;

export type ElasticGpuSpecification = { Type: String; };

export type CpuOptions = AWS.EC2.Instance.CpuOptions;

export type LaunchTemplateSpecification = { LaunchTemplateId: String;

LaunchTemplateName: String;

Version: String; };

export type BlockDeviceMapping = { DeviceName: String;

Ebs: AWS.EC2.Instance.Ebs;

NoDevice: AWS.EC2.Instance.NoDevice;

VirtualName: String; };

export type PrivateIpAddressSpecification = { Primary: Boolean;

PrivateIpAddress: String; };

export type Volume = { Device: String;

VolumeId: String; };

export type NetworkInterface = { AssociatePublicIpAddress: Boolean;

DeleteOnTermination: Boolean;

Description: String;

DeviceIndex: String;

GroupSet: List<String>;

Ipv6AddressCount: Integer;

Ipv6Addresses: List<AWS.EC2.Instance.InstanceIpv6Address>;

NetworkInterfaceId: String;

PrivateIpAddress: String;

PrivateIpAddresses: List<AWS.EC2.Instance.PrivateIpAddressSpecification>;

SecondaryPrivateIpAddressCount: Integer;

SubnetId: String; };

export type InstanceIpv6Address = { Ipv6Address: String; };

export type AssociationParameter = { Key: String;

Value: List<String>; };

export type EnclaveOptions = AWS.EC2.Instance.EnclaveOptions;

export type LicenseSpecification = { LicenseConfigurationArn: String; };

export type SsmAssociation = { AssociationParameters: List<AWS.EC2.Instance.AssociationParameter>;

DocumentName: String; };

export type ElasticInferenceAccelerator = { Count: Integer;

Type: String; };

export type AdditionalInfo = String;

export type Affinity = String;

export type AvailabilityZone = String;

export type BlockDeviceMappings = List<AWS.EC2.Instance.BlockDeviceMapping>;

export type DisableApiTermination = Boolean;

export type EbsOptimized = Boolean;

export type ElasticGpuSpecifications = List<AWS.EC2.Instance.ElasticGpuSpecification>;

export type ElasticInferenceAccelerators = List<AWS.EC2.Instance.ElasticInferenceAccelerator>;

export type HostId = String;

export type HostResourceGroupArn = String;

export type IamInstanceProfile = String;

export type ImageId = String;

export type InstanceInitiatedShutdownBehavior = String;

export type InstanceType = String;

export type Ipv6AddressCount = Integer;

export type Ipv6Addresses = List<AWS.EC2.Instance.InstanceIpv6Address>;

export type KernelId = String;

export type KeyName = String;

export type LaunchTemplate = AWS.EC2.Instance.LaunchTemplateSpecification;

export type LicenseSpecifications = List<AWS.EC2.Instance.LicenseSpecification>;

export type Monitoring = Boolean;

export type NetworkInterfaces = List<AWS.EC2.Instance.NetworkInterface>;

export type PlacementGroupName = String;

export type PrivateIpAddress = String;

export type RamdiskId = String;

export type SecurityGroupIds = List<String>;

export type SecurityGroups = List<String>;

export type SourceDestCheck = Boolean;

export type SsmAssociations = List<AWS.EC2.Instance.SsmAssociation>;

export type SubnetId = String;

export type Tags = List<AWS.EC2.Instance.Tag>;

export type Tenancy = String;

export type UserData = String;

export type Volumes = List<AWS.EC2.Instance.Volume>;

}

export namespace SpotFleet {

export type SpotPlacement = { AvailabilityZone: String;

GroupName: String;

Tenancy: String; };

export type LaunchTemplateOverrides = { AvailabilityZone: String;

InstanceType: String;

SpotPrice: String;

SubnetId: String;

WeightedCapacity: Double; };

export type IamInstanceProfileSpecification = { Arn: String; };

export type InstanceNetworkInterfaceSpecification = { AssociatePublicIpAddress: Boolean;

DeleteOnTermination: Boolean;

Description: String;

DeviceIndex: Integer;

Groups: List<String>;

Ipv6AddressCount: Integer;

Ipv6Addresses: List<AWS.EC2.SpotFleet.InstanceIpv6Address>;

NetworkInterfaceId: String;

PrivateIpAddresses: List<AWS.EC2.SpotFleet.PrivateIpAddressSpecification>;

SecondaryPrivateIpAddressCount: Integer;

SubnetId: String; };

export type SpotFleetLaunchSpecification = { BlockDeviceMappings: List<AWS.EC2.SpotFleet.BlockDeviceMapping>;

EbsOptimized: Boolean;

IamInstanceProfile: AWS.EC2.SpotFleet.IamInstanceProfileSpecification;

ImageId: String;

InstanceType: String;

KernelId: String;

KeyName: String;

Monitoring: AWS.EC2.SpotFleet.SpotFleetMonitoring;

NetworkInterfaces: List<AWS.EC2.SpotFleet.InstanceNetworkInterfaceSpecification>;

Placement: AWS.EC2.SpotFleet.SpotPlacement;

RamdiskId: String;

SecurityGroups: List<AWS.EC2.SpotFleet.GroupIdentifier>;

SpotPrice: String;

SubnetId: String;

TagSpecifications: List<AWS.EC2.SpotFleet.SpotFleetTagSpecification>;

UserData: String;

WeightedCapacity: Double; };

export type ClassicLoadBalancersConfig = { ClassicLoadBalancers: List<AWS.EC2.SpotFleet.ClassicLoadBalancer>; };

export type SpotMaintenanceStrategies = { CapacityRebalance: AWS.EC2.SpotFleet.SpotCapacityRebalance; };

export type SpotFleetTagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.SpotFleet.Tag>; };

export type PrivateIpAddressSpecification = { Primary: Boolean;

PrivateIpAddress: String; };

export type SpotCapacityRebalance = { ReplacementStrategy: String; };

export type EbsBlockDevice = { DeleteOnTermination: Boolean;

Encrypted: Boolean;

Iops: Integer;

SnapshotId: String;

VolumeSize: Integer;

VolumeType: String; };

export type LoadBalancersConfig = { ClassicLoadBalancersConfig: AWS.EC2.SpotFleet.ClassicLoadBalancersConfig;

TargetGroupsConfig: AWS.EC2.SpotFleet.TargetGroupsConfig; };

export type FleetLaunchTemplateSpecification = { LaunchTemplateId: String;

LaunchTemplateName: String;

Version: String; };

export type TargetGroup = { Arn: String; };

export type SpotFleetMonitoring = { Enabled: Boolean; };

export type ClassicLoadBalancer = { Name: String; };

export type LaunchTemplateConfig = { LaunchTemplateSpecification: AWS.EC2.SpotFleet.FleetLaunchTemplateSpecification;

Overrides: List<AWS.EC2.SpotFleet.LaunchTemplateOverrides>; };

export type SpotFleetRequestConfigData = AWS.EC2.SpotFleet.SpotFleetRequestConfigData;

export type InstanceIpv6Address = { Ipv6Address: String; };

export type TargetGroupsConfig = { TargetGroups: List<AWS.EC2.SpotFleet.TargetGroup>; };

export type GroupIdentifier = { GroupId: String; };

export type BlockDeviceMapping = { DeviceName: String;

Ebs: AWS.EC2.SpotFleet.EbsBlockDevice;

NoDevice: String;

VirtualName: String; };

}

export namespace NetworkInterface {

export type InstanceIpv6Address = { Ipv6Address: String; };

export type PrivateIpAddressSpecification = { Primary: Boolean;

PrivateIpAddress: String; };

export type Description = String;

export type GroupSet = List<String>;

export type InterfaceType = String;

export type Ipv6AddressCount = Integer;

export type Ipv6Addresses = List<AWS.EC2.NetworkInterface.InstanceIpv6Address>;

export type PrivateIpAddress = String;

export type PrivateIpAddresses = List<AWS.EC2.NetworkInterface.PrivateIpAddressSpecification>;

export type SecondaryPrivateIpAddressCount = Integer;

export type SourceDestCheck = Boolean;

export type SubnetId = String;

export type Tags = List<AWS.EC2.NetworkInterface.Tag>;

}

export namespace NetworkInsightsAnalysis {

export type AnalysisAclRule = { Cidr: String;

Egress: Boolean;

PortRange: AWS.EC2.NetworkInsightsAnalysis.PortRange;

Protocol: String;

RuleAction: String;

RuleNumber: Integer; };

export type AlternatePathHint = { ComponentId: String;

ComponentArn: String; };

export type Explanation = { Acl: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

AclRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

Address: String;

Addresses: List<String>;

AttachedTo: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

AvailabilityZones: List<String>;

Cidrs: List<String>;

Component: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

CustomerGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Destination: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

DestinationVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Direction: String;

ExplanationCode: String;

IngressRouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

InternetGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

LoadBalancerArn: String;

ClassicLoadBalancerListener: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerListener;

LoadBalancerListenerPort: Integer;

LoadBalancerTarget: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerTarget;

LoadBalancerTargetGroup: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

LoadBalancerTargetGroups: List<AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent>;

LoadBalancerTargetPort: Integer;

ElasticLoadBalancerListener: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

MissingComponent: String;

NatGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

NetworkInterface: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

PacketField: String;

VpcPeeringConnection: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Port: Integer;

PortRanges: List<AWS.EC2.NetworkInsightsAnalysis.PortRange>;

PrefixList: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Protocols: List<String>;

RouteTableRoute: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

RouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

SecurityGroup: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

SecurityGroupRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

SecurityGroups: List<AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent>;

SourceVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

State: String;

Subnet: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

SubnetRouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Vpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

vpcEndpoint: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

VpnConnection: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

VpnGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent; };

export type AnalysisLoadBalancerListener = { InstancePort: Integer;

LoadBalancerPort: Integer; };

export type AnalysisLoadBalancerTarget = { Address: String;

AvailabilityZone: String;

Instance: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Port: Integer; };

export type AnalysisRouteTableRoute = { destinationCidr: String;

destinationPrefixListId: String;

egressOnlyInternetGatewayId: String;

gatewayId: String;

instanceId: String;

NatGatewayId: String;

NetworkInterfaceId: String;

Origin: String;

TransitGatewayId: String;

VpcPeeringConnectionId: String; };

export type AnalysisPacketHeader = { DestinationAddresses: List<String>;

DestinationPortRanges: List<AWS.EC2.NetworkInsightsAnalysis.PortRange>;

Protocol: String;

SourceAddresses: List<String>;

SourcePortRanges: List<AWS.EC2.NetworkInsightsAnalysis.PortRange>; };

export type PathComponent = { SequenceNumber: Integer;

AclRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

Component: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

DestinationVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

OutboundHeader: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

InboundHeader: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

RouteTableRoute: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

SecurityGroupRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

SourceVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Subnet: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

Vpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent; };

export type AnalysisComponent = { Id: String;

Arn: String; };

export type PortRange = { From: Integer;

To: Integer; };

export type AnalysisSecurityGroupRule = { Cidr: String;

Direction: String;

SecurityGroupId: String;

PortRange: AWS.EC2.NetworkInsightsAnalysis.PortRange;

PrefixListId: String;

Protocol: String; };

export type NetworkInsightsPathId = String;

export type FilterInArns = List<String>;

export type Tags = List<AWS.EC2.NetworkInsightsAnalysis.Tag>;

}

export namespace ClientVpnEndpoint {

export type ClientConnectOptions = AWS.EC2.ClientVpnEndpoint.ClientConnectOptions;

export type DirectoryServiceAuthenticationRequest = { DirectoryId: String; };

export type TagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.ClientVpnEndpoint.Tag>; };

export type ClientAuthenticationRequest = { MutualAuthentication: AWS.EC2.ClientVpnEndpoint.CertificateAuthenticationRequest;

Type: String;

FederatedAuthentication: AWS.EC2.ClientVpnEndpoint.FederatedAuthenticationRequest;

ActiveDirectory: AWS.EC2.ClientVpnEndpoint.DirectoryServiceAuthenticationRequest; };

export type FederatedAuthenticationRequest = { SelfServiceSAMLProviderArn: String;

SAMLProviderArn: String; };

export type ConnectionLogOptions = AWS.EC2.ClientVpnEndpoint.ConnectionLogOptions;

export type CertificateAuthenticationRequest = { ClientRootCertificateChainArn: String; };

export type ClientCidrBlock = String;

export type Description = String;

export type TagSpecifications = List<AWS.EC2.ClientVpnEndpoint.TagSpecification>;

export type AuthenticationOptions = List<AWS.EC2.ClientVpnEndpoint.ClientAuthenticationRequest>;

export type ServerCertificateArn = String;

export type DnsServers = List<String>;

export type SecurityGroupIds = List<String>;

export type SplitTunnel = Boolean;

export type VpcId = String;

export type SelfServicePortal = String;

export type TransportProtocol = String;

export type VpnPort = Integer;

}

export namespace CapacityReservation {

export type TagSpecification = { ResourceType: String;

Tags: List<AWS.EC2.CapacityReservation.Tag>; };

export type Tenancy = String;

export type EndDateType = String;

export type InstanceCount = Integer;

export type TagSpecifications = List<AWS.EC2.CapacityReservation.TagSpecification>;

export type AvailabilityZone = String;

export type InstancePlatform = String;

export type InstanceType = String;

export type EphemeralStorage = Boolean;

export type InstanceMatchCriteria = String;

export type EndDate = String;

export type EbsOptimized = Boolean;

}

export namespace NetworkAclEntry {

export type PortRange = AWS.EC2.NetworkAclEntry.PortRange;

export type Icmp = AWS.EC2.NetworkAclEntry.Icmp;

export type CidrBlock = String;

export type Egress = Boolean;

export type Ipv6CidrBlock = String;

export type NetworkAclId = String;

export type Protocol = Integer;

export type RuleAction = String;

export type RuleNumber = Integer;

}

export namespace SecurityGroup {

export type Egress = { CidrIp: String;

CidrIpv6: String;

Description: String;

DestinationPrefixListId: String;

DestinationSecurityGroupId: String;

FromPort: Integer;

IpProtocol: String;

ToPort: Integer; };

export type Ingress = { CidrIp: String;

CidrIpv6: String;

Description: String;

FromPort: Integer;

IpProtocol: String;

SourcePrefixListId: String;

SourceSecurityGroupId: String;

SourceSecurityGroupName: String;

SourceSecurityGroupOwnerId: String;

ToPort: Integer; };

export type GroupDescription = String;

export type GroupName = String;

export type SecurityGroupEgress = List<AWS.EC2.SecurityGroup.Egress>;

export type SecurityGroupIngress = List<AWS.EC2.SecurityGroup.Ingress>;

export type Tags = List<AWS.EC2.SecurityGroup.Tag>;

export type VpcId = String;

}

export namespace PrefixList {

export type Entry = { Cidr: String;

Description: String; };

export type PrefixListName = String;

export type AddressFamily = String;

export type MaxEntries = Integer;

export type Tags = List<AWS.EC2.PrefixList.Tag>;

export type Entries = List<AWS.EC2.PrefixList.Entry>;

}

export namespace VPCPeeringConnection {

export type PeerOwnerId = String;

export type PeerRegion = String;

export type PeerRoleArn = String;

export type PeerVpcId = String;

export type Tags = List<AWS.EC2.VPCPeeringConnection.Tag>;

export type VpcId = String;

}

export namespace VPCEndpointServicePermissions {

export type AllowedPrincipals = List<String>;

export type ServiceId = String;

}

export namespace TransitGatewayRouteTableAssociation {

export type TransitGatewayRouteTableId = String;

export type TransitGatewayAttachmentId = String;

}

export namespace EIP {

export type Domain = String;

export type InstanceId = String;

export type PublicIpv4Pool = String;

export type Tags = List<AWS.EC2.EIP.Tag>;

}

export namespace SecurityGroupEgress {

export type CidrIp = String;

export type CidrIpv6 = String;

export type Description = String;

export type DestinationPrefixListId = String;

export type DestinationSecurityGroupId = String;

export type FromPort = Integer;

export type GroupId = String;

export type IpProtocol = String;

export type ToPort = Integer;

}

export namespace TransitGatewayAttachment {

export type TransitGatewayId = String;

export type VpcId = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.EC2.TransitGatewayAttachment.Tag>;

}

export namespace TransitGatewayMulticastDomainAssociation {

export type TransitGatewayMulticastDomainId = String;

export type TransitGatewayAttachmentId = String;

export type SubnetId = String;

}

export namespace DHCPOptions {

export type DomainName = String;

export type DomainNameServers = List<String>;

export type NetbiosNameServers = List<String>;

export type NetbiosNodeType = Integer;

export type NtpServers = List<String>;

export type Tags = List<AWS.EC2.DHCPOptions.Tag>;

}

export namespace EgressOnlyInternetGateway {

export type VpcId = String;

}

export namespace NetworkInterfaceAttachment {

export type DeleteOnTermination = Boolean;

export type DeviceIndex = String;

export type InstanceId = String;

export type NetworkInterfaceId = String;

}

export namespace CustomerGateway {

export type BgpAsn = Integer;

export type IpAddress = String;

export type Tags = List<AWS.EC2.CustomerGateway.Tag>;

export type Type = String;

}

export namespace ClientVpnRoute {

export type ClientVpnEndpointId = String;

export type TargetVpcSubnetId = String;

export type Description = String;

export type DestinationCidrBlock = String;

}

export namespace PlacementGroup {

export type Strategy = String;

}

export namespace InternetGateway {

export type Tags = List<AWS.EC2.InternetGateway.Tag>;

}

export namespace VPNConnectionRoute {

export type DestinationCidrBlock = String;

export type VpnConnectionId = String;

}

export namespace NetworkInterfacePermission {

export type AwsAccountId = String;

export type NetworkInterfaceId = String;

export type Permission = String;

}

export namespace TransitGatewayMulticastGroupMember {

export type GroupIpAddress = String;

export type TransitGatewayMulticastDomainId = String;

export type NetworkInterfaceId = String;

}

export namespace LocalGatewayRouteTableVPCAssociation {

export type LocalGatewayRouteTableId = String;

export type VpcId = String;

export type Tags = List<AWS.EC2.LocalGatewayRouteTableVPCAssociation.Tag>;

}

export namespace TransitGatewayMulticastGroupSource {

export type GroupIpAddress = String;

export type TransitGatewayMulticastDomainId = String;

export type NetworkInterfaceId = String;

}

export namespace ClientVpnAuthorizationRule {

export type ClientVpnEndpointId = String;

export type Description = String;

export type AccessGroupId = String;

export type TargetNetworkCidr = String;

export type AuthorizeAllGroups = Boolean;

}

export namespace NatGateway {

export type AllocationId = String;

export type ConnectivityType = String;

export type SubnetId = String;

export type Tags = List<AWS.EC2.NatGateway.Tag>;

}

export namespace TransitGatewayMulticastDomain {

export type TransitGatewayId = String;

export type Tags = List<AWS.EC2.TransitGatewayMulticastDomain.Tag>;

export type Options = Json;

}

export namespace VPCDHCPOptionsAssociation {

export type DhcpOptionsId = String;

export type VpcId = String;

}

export namespace EnclaveCertificateIamRoleAssociation {

export type CertificateArn = String;

export type RoleArn = String;

}

export namespace TrafficMirrorTarget {

export type NetworkLoadBalancerArn = String;

export type Description = String;

export type NetworkInterfaceId = String;

export type Tags = List<AWS.EC2.TrafficMirrorTarget.Tag>;

}

export namespace RouteTable {

export type Tags = List<AWS.EC2.RouteTable.Tag>;

export type VpcId = String;

}

export namespace TransitGateway {

export type DefaultRouteTablePropagation = String;

export type Description = String;

export type AutoAcceptSharedAttachments = String;

export type DefaultRouteTableAssociation = String;

export type VpnEcmpSupport = String;

export type DnsSupport = String;

export type MulticastSupport = String;

export type AmazonSideAsn = Integer;

export type Tags = List<AWS.EC2.TransitGateway.Tag>;

}

export namespace Volume {

export type AutoEnableIO = Boolean;

export type AvailabilityZone = String;

export type Encrypted = Boolean;

export type Iops = Integer;

export type KmsKeyId = String;

export type MultiAttachEnabled = Boolean;

export type OutpostArn = String;

export type Size = Integer;

export type SnapshotId = String;

export type Tags = List<AWS.EC2.Volume.Tag>;

export type Throughput = Integer;

export type VolumeType = String;

}

export namespace LocalGatewayRoute {

export type DestinationCidrBlock = String;

export type LocalGatewayRouteTableId = String;

export type LocalGatewayVirtualInterfaceGroupId = String;

}

export namespace VPCEndpointConnectionNotification {

export type ConnectionEvents = List<String>;

export type VPCEndpointId = String;

export type ServiceId = String;

export type ConnectionNotificationArn = String;

}

export namespace FlowLog {

export type DeliverLogsPermissionArn = String;

export type LogDestination = String;

export type LogDestinationType = String;

export type LogFormat = String;

export type LogGroupName = String;

export type MaxAggregationInterval = Integer;

export type ResourceId = String;

export type ResourceType = String;

export type Tags = List<AWS.EC2.FlowLog.Tag>;

export type TrafficType = String;

}

export namespace Subnet {

export type AssignIpv6AddressOnCreation = Boolean;

export type AvailabilityZone = String;

export type CidrBlock = String;

export type Ipv6CidrBlock = String;

export type MapPublicIpOnLaunch = Boolean;

export type OutpostArn = String;

export type Tags = List<AWS.EC2.Subnet.Tag>;

export type VpcId = String;

}

export namespace CarrierGateway {

export type VpcId = String;

export type Tags = List<AWS.EC2.CarrierGateway.Tag>;

}

export namespace NetworkInsightsPath {

export type SourceIp = String;

export type DestinationIp = String;

export type Source = String;

export type Destination = String;

export type Protocol = String;

export type DestinationPort = Integer;

export type Tags = List<AWS.EC2.NetworkInsightsPath.Tag>;

}

export namespace EIPAssociation {

export type AllocationId = String;

export type EIP = String;

export type InstanceId = String;

export type NetworkInterfaceId = String;

export type PrivateIpAddress = String;

}

export namespace VPNGateway {

export type AmazonSideAsn = Long;

export type Tags = List<AWS.EC2.VPNGateway.Tag>;

export type Type = String;

}

export namespace TransitGatewayRouteTable {

export type TransitGatewayId = String;

export type Tags = List<AWS.EC2.TransitGatewayRouteTable.Tag>;

}

export namespace VPCEndpointService {

export type NetworkLoadBalancerArns = List<String>;

export type AcceptanceRequired = Boolean;

export type GatewayLoadBalancerArns = List<String>;

}

export namespace GatewayRouteTableAssociation {

export type RouteTableId = String;

export type GatewayId = String;

}

export namespace TrafficMirrorFilter {

export type Description = String;

export type NetworkServices = List<String>;

export type Tags = List<AWS.EC2.TrafficMirrorFilter.Tag>;

}

export namespace SecurityGroupIngress {

export type CidrIp = String;

export type CidrIpv6 = String;

export type Description = String;

export type FromPort = Integer;

export type GroupId = String;

export type GroupName = String;

export type IpProtocol = String;

export type SourcePrefixListId = String;

export type SourceSecurityGroupId = String;

export type SourceSecurityGroupName = String;

export type SourceSecurityGroupOwnerId = String;

export type ToPort = Integer;

}

export namespace SubnetRouteTableAssociation {

export type RouteTableId = String;

export type SubnetId = String;

}

export namespace Route {

export type CarrierGatewayId = String;

export type DestinationCidrBlock = String;

export type DestinationIpv6CidrBlock = String;

export type EgressOnlyInternetGatewayId = String;

export type GatewayId = String;

export type InstanceId = String;

export type LocalGatewayId = String;

export type NatGatewayId = String;

export type NetworkInterfaceId = String;

export type RouteTableId = String;

export type TransitGatewayId = String;

export type VpcEndpointId = String;

export type VpcPeeringConnectionId = String;

}

export namespace TransitGatewayRouteTablePropagation {

export type TransitGatewayRouteTableId = String;

export type TransitGatewayAttachmentId = String;

}

export namespace SubnetNetworkAclAssociation {

export type NetworkAclId = String;

export type SubnetId = String;

}

export namespace TrafficMirrorSession {

export type TrafficMirrorTargetId = String;

export type Description = String;

export type SessionNumber = Integer;

export type VirtualNetworkId = Integer;

export type PacketLength = Integer;

export type NetworkInterfaceId = String;

export type TrafficMirrorFilterId = String;

export type Tags = List<AWS.EC2.TrafficMirrorSession.Tag>;

}

export namespace SubnetCidrBlock {

export type Ipv6CidrBlock = String;

export type SubnetId = String;

}

export namespace VPC {

export type CidrBlock = String;

export type EnableDnsHostnames = Boolean;

export type EnableDnsSupport = Boolean;

export type InstanceTenancy = String;

export type Tags = List<AWS.EC2.VPC.Tag>;

}

export namespace TransitGatewayRoute {

export type TransitGatewayRouteTableId = String;

export type DestinationCidrBlock = String;

export type Blackhole = Boolean;

export type TransitGatewayAttachmentId = String;

}

export namespace NetworkAcl {

export type Tags = List<AWS.EC2.NetworkAcl.Tag>;

export type VpcId = String;

}

export namespace VPNGatewayRoutePropagation {

export type RouteTableIds = List<String>;

export type VpnGatewayId = String;

}

export namespace ClientVpnTargetNetworkAssociation {

export type ClientVpnEndpointId = String;

export type SubnetId = String;

}

export namespace TransitGatewayPeeringAttachment {

export type TransitGatewayId = String;

export type PeerTransitGatewayId = String;

export type PeerAccountId = String;

export type PeerRegion = String;

export type Tags = List<AWS.EC2.TransitGatewayPeeringAttachment.Tag>;

}

export namespace VolumeAttachment {

export type Device = String;

export type InstanceId = String;

export type VolumeId = String;

}

export namespace Host {

export type AutoPlacement = String;

export type AvailabilityZone = String;

export type HostRecovery = String;

export type InstanceType = String;

}

export namespace VPCEndpoint {

export type PolicyDocument = Json;

export type PrivateDnsEnabled = Boolean;

export type RouteTableIds = List<String>;

export type SecurityGroupIds = List<String>;

export type ServiceName = String;

export type SubnetIds = List<String>;

export type VpcEndpointType = String;

export type VpcId = String;

}

export namespace VPCGatewayAttachment {

export type InternetGatewayId = String;

export type VpcId = String;

export type VpnGatewayId = String;

}

export namespace VPCCidrBlock {

export type AmazonProvidedIpv6CidrBlock = Boolean;

export type CidrBlock = String;

export type VpcId = String;

}

}

export namespace ImageBuilder {

export namespace ImagePipeline {

export type ImageTestsConfiguration = AWS.ImageBuilder.ImagePipeline.ImageTestsConfiguration;

export type Schedule = AWS.ImageBuilder.ImagePipeline.Schedule;

export type Name = String;

export type Description = String;

export type Status = String;

export type ImageRecipeArn = String;

export type ContainerRecipeArn = String;

export type DistributionConfigurationArn = String;

export type InfrastructureConfigurationArn = String;

export type EnhancedImageMetadataEnabled = Boolean;

export type Tags = Map<String>;

}

export namespace ImageRecipe {

export type InstanceBlockDeviceMapping = { DeviceName: String;

VirtualName: String;

NoDevice: String;

Ebs: AWS.ImageBuilder.ImageRecipe.EbsInstanceBlockDeviceSpecification; };

export type ComponentConfiguration = { ComponentArn: String; };

export type EbsInstanceBlockDeviceSpecification = { Encrypted: Boolean;

DeleteOnTermination: Boolean;

Iops: Integer;

KmsKeyId: String;

SnapshotId: String;

VolumeSize: Integer;

VolumeType: String; };

export type Name = String;

export type Description = String;

export type Version = String;

export type Components = List<AWS.ImageBuilder.ImageRecipe.ComponentConfiguration>;

export type BlockDeviceMappings = List<AWS.ImageBuilder.ImageRecipe.InstanceBlockDeviceMapping>;

export type ParentImage = String;

export type WorkingDirectory = String;

export type Tags = Map<String>;

}

export namespace ContainerRecipe {

export type ComponentConfiguration = { ComponentArn: String; };

export type EbsInstanceBlockDeviceSpecification = { Encrypted: Boolean;

DeleteOnTermination: Boolean;

Iops: Integer;

KmsKeyId: String;

SnapshotId: String;

VolumeSize: Integer;

VolumeType: String; };

export type InstanceBlockDeviceMapping = { DeviceName: String;

VirtualName: String;

NoDevice: String;

Ebs: AWS.ImageBuilder.ContainerRecipe.EbsInstanceBlockDeviceSpecification; };

export type InstanceConfiguration = AWS.ImageBuilder.ContainerRecipe.InstanceConfiguration;

export type TargetContainerRepository = { Service: String;

RepositoryName: String; };

export type Name = String;

export type Description = String;

export type Version = String;

export type Components = List<AWS.ImageBuilder.ContainerRecipe.ComponentConfiguration>;

export type DockerfileTemplateData = String;

export type DockerfileTemplateUri = String;

export type PlatformOverride = String;

export type ContainerType = String;

export type ImageOsVersionOverride = String;

export type TargetRepository = AWS.ImageBuilder.ContainerRecipe.TargetContainerRepository;

export type KmsKeyId = String;

export type ParentImage = String;

export type WorkingDirectory = String;

export type Tags = Map<String>;

}

export namespace InfrastructureConfiguration {

export type Logging = AWS.ImageBuilder.InfrastructureConfiguration.Logging;

export type S3Logs = { S3BucketName: String;

S3KeyPrefix: String; };

export type Name = String;

export type Description = String;

export type InstanceTypes = List<String>;

export type SecurityGroupIds = List<String>;

export type SubnetId = String;

export type KeyPair = String;

export type TerminateInstanceOnFailure = Boolean;

export type InstanceProfileName = String;

export type SnsTopicArn = String;

export type ResourceTags = Map<String>;

export type Tags = Map<String>;

}

export namespace DistributionConfiguration {

export type Distribution = { Region: String;

AmiDistributionConfiguration: Json;

ContainerDistributionConfiguration: Json;

LicenseConfigurationArns: List<String>;

LaunchTemplateConfigurations: List<AWS.ImageBuilder.DistributionConfiguration.LaunchTemplateConfiguration>; };

export type LaunchTemplateConfiguration = { LaunchTemplateId: String;

AccountId: String;

SetDefaultVersion: Boolean; };

export type Name = String;

export type Description = String;

export type Distributions = List<AWS.ImageBuilder.DistributionConfiguration.Distribution>;

export type Tags = Map<String>;

}

export namespace Image {

export type ImageTestsConfiguration = AWS.ImageBuilder.Image.ImageTestsConfiguration;

export type ImageRecipeArn = String;

export type ContainerRecipeArn = String;

export type DistributionConfigurationArn = String;

export type InfrastructureConfigurationArn = String;

export type EnhancedImageMetadataEnabled = Boolean;

export type Tags = Map<String>;

}

export namespace Component {

export type Name = String;

export type Version = String;

export type Description = String;

export type ChangeDescription = String;

export type Platform = String;

export type Data = String;

export type KmsKeyId = String;

export type Tags = Map<String>;

export type Uri = String;

export type SupportedOsVersions = List<String>;

}

}

export namespace MediaLive {

export namespace Channel {

export type HlsInputSettings = { BufferSegments: Integer;

Retries: Integer;

Bandwidth: Integer;

RetryInterval: Integer; };

export type DvbSubDestinationSettings = { BackgroundOpacity: Integer;

FontResolution: Integer;

OutlineColor: String;

FontColor: String;

ShadowColor: String;

ShadowOpacity: Integer;

Font: AWS.MediaLive.Channel.InputLocation;

ShadowYOffset: Integer;

Alignment: String;

XPosition: Integer;

FontSize: String;

YPosition: Integer;

OutlineSize: Integer;

TeletextGridControl: String;

FontOpacity: Integer;

ShadowXOffset: Integer;

BackgroundColor: String; };

export type Rec709Settings = {  };

export type VideoCodecSettings = { Mpeg2Settings: AWS.MediaLive.Channel.Mpeg2Settings;

FrameCaptureSettings: AWS.MediaLive.Channel.FrameCaptureSettings;

H264Settings: AWS.MediaLive.Channel.H264Settings;

H265Settings: AWS.MediaLive.Channel.H265Settings; };

export type HlsSettings = { StandardHlsSettings: AWS.MediaLive.Channel.StandardHlsSettings;

AudioOnlyHlsSettings: AWS.MediaLive.Channel.AudioOnlyHlsSettings;

Fmp4HlsSettings: AWS.MediaLive.Channel.Fmp4HlsSettings;

FrameCaptureHlsSettings: AWS.MediaLive.Channel.FrameCaptureHlsSettings; };

export type FrameCaptureSettings = { CaptureInterval: Integer;

CaptureIntervalUnits: String; };

export type MotionGraphicsSettings = { HtmlMotionGraphicsSettings: AWS.MediaLive.Channel.HtmlMotionGraphicsSettings; };

export type FrameCaptureCdnSettings = { FrameCaptureS3Settings: AWS.MediaLive.Channel.FrameCaptureS3Settings; };

export type InputLossBehavior = { InputLossImageColor: String;

BlackFrameMsec: Integer;

InputLossImageType: String;

InputLossImageSlate: AWS.MediaLive.Channel.InputLocation;

RepeatFrameMsec: Integer; };

export type MultiplexProgramChannelDestinationSettings = { MultiplexId: String;

ProgramName: String; };

export type HlsCdnSettings = { HlsWebdavSettings: AWS.MediaLive.Channel.HlsWebdavSettings;

HlsS3Settings: AWS.MediaLive.Channel.HlsS3Settings;

HlsAkamaiSettings: AWS.MediaLive.Channel.HlsAkamaiSettings;

HlsBasicPutSettings: AWS.MediaLive.Channel.HlsBasicPutSettings;

HlsMediaStoreSettings: AWS.MediaLive.Channel.HlsMediaStoreSettings; };

export type HlsOutputSettings = { NameModifier: String;

HlsSettings: AWS.MediaLive.Channel.HlsSettings;

H265PackagingType: String;

SegmentModifier: String; };

export type EmbeddedPlusScte20DestinationSettings = {  };

export type FrameCaptureS3Settings = { CannedAcl: String; };

export type ArchiveCdnSettings = { ArchiveS3Settings: AWS.MediaLive.Channel.ArchiveS3Settings; };

export type Scte27SourceSettings = { Pid: Integer; };

export type AudioTrackSelection = { Tracks: List<AWS.MediaLive.Channel.AudioTrack>; };

export type EbuTtDDestinationSettings = { FontFamily: String;

FillLineGap: String;

StyleControl: String;

CopyrightHolder: String; };

export type VideoSelectorPid = { Pid: Integer; };

export type FailoverCondition = { FailoverConditionSettings: AWS.MediaLive.Channel.FailoverConditionSettings; };

export type Hdr10Settings = { MaxCll: Integer;

MaxFall: Integer; };

export type StaticKeySettings = { KeyProviderServer: AWS.MediaLive.Channel.InputLocation;

StaticKeyValue: String; };

export type InputLocation = { Username: String;

PasswordParam: String;

Uri: String; };

export type AudioLanguageSelection = { LanguageCode: String;

LanguageSelectionPolicy: String; };

export type CaptionRectangle = { TopOffset: Double;

Height: Double;

Width: Double;

LeftOffset: Double; };

export type ArchiveS3Settings = { CannedAcl: String; };

export type SmpteTtDestinationSettings = {  };

export type AribSourceSettings = {  };

export type Mp2Settings = { CodingMode: String;

SampleRate: Double;

Bitrate: Double; };

export type AudioSilenceFailoverSettings = { AudioSelectorName: String;

AudioSilenceThresholdMsec: Integer; };

export type Fmp4HlsSettings = { AudioRenditionSets: String;

NielsenId3Behavior: String;

TimedMetadataBehavior: String; };

export type Scte35SpliceInsert = { AdAvailOffset: Integer;

WebDeliveryAllowedFlag: String;

NoRegionalBlackoutFlag: String; };

export type AudioChannelMapping = { OutputChannel: Integer;

InputChannelLevels: List<AWS.MediaLive.Channel.InputChannelLevel>; };

export type FeatureActivations = { InputPrepareScheduleActions: String; };

export type OutputGroup = { Outputs: List<AWS.MediaLive.Channel.Output>;

OutputGroupSettings: AWS.MediaLive.Channel.OutputGroupSettings;

Name: String; };

export type UdpOutputSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef;

FecOutputSettings: AWS.MediaLive.Channel.FecOutputSettings;

ContainerSettings: AWS.MediaLive.Channel.UdpContainerSettings;

BufferMsec: Integer; };

export type Ac3Settings = { CodingMode: String;

DrcProfile: String;

MetadataControl: String;

Dialnorm: Integer;

LfeFilter: String;

BitstreamMode: String;

Bitrate: Double; };

export type Eac3Settings = { CodingMode: String;

SurroundMode: String;

PassthroughControl: String;

Dialnorm: Integer;

LoRoSurroundMixLevel: Double;

PhaseControl: String;

LtRtCenterMixLevel: Double;

LfeFilter: String;

LfeControl: String;

Bitrate: Double;

DrcLine: String;

DcFilter: String;

MetadataControl: String;

LtRtSurroundMixLevel: Double;

LoRoCenterMixLevel: Double;

DrcRf: String;

AttenuationControl: String;

BitstreamMode: String;

SurroundExMode: String;

StereoDownmix: String; };

export type MediaPackageOutputSettings = {  };

export type Rec601Settings = {  };

export type H264Settings = { NumRefFrames: Integer;

TemporalAq: String;

Slices: Integer;

FramerateControl: String;

QvbrQualityLevel: Integer;

FramerateNumerator: Integer;

ParControl: String;

GopClosedCadence: Integer;

FlickerAq: String;

Profile: String;

QualityLevel: String;

MinIInterval: Integer;

SceneChangeDetect: String;

ForceFieldPictures: String;

FramerateDenominator: Integer;

Softness: Integer;

GopSize: Double;

AdaptiveQuantization: String;

FilterSettings: AWS.MediaLive.Channel.H264FilterSettings;

ColorSpaceSettings: AWS.MediaLive.Channel.H264ColorSpaceSettings;

EntropyEncoding: String;

SpatialAq: String;

ParDenominator: Integer;

FixedAfd: String;

GopSizeUnits: String;

AfdSignaling: String;

Bitrate: Integer;

ParNumerator: Integer;

RateControlMode: String;

ScanType: String;

BufSize: Integer;

TimecodeInsertion: String;

ColorMetadata: String;

BufFillPct: Integer;

GopBReference: String;

LookAheadRateControl: String;

Level: String;

MaxBitrate: Integer;

Syntax: String;

SubgopLength: String;

GopNumBFrames: Integer; };

export type H264FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

export type FailoverConditionSettings = { AudioSilenceSettings: AWS.MediaLive.Channel.AudioSilenceFailoverSettings;

VideoBlackSettings: AWS.MediaLive.Channel.VideoBlackFailoverSettings;

InputLossSettings: AWS.MediaLive.Channel.InputLossFailoverSettings; };

export type Mpeg2Settings = { ColorSpace: String;

FixedAfd: String;

GopSizeUnits: String;

FramerateNumerator: Integer;

GopClosedCadence: Integer;

AfdSignaling: String;

DisplayAspectRatio: String;

ScanType: String;

TimecodeInsertion: String;

ColorMetadata: String;

FramerateDenominator: Integer;

GopSize: Double;

AdaptiveQuantization: String;

SubgopLength: String;

FilterSettings: AWS.MediaLive.Channel.Mpeg2FilterSettings;

GopNumBFrames: Integer; };

export type AudioSelectorSettings = { AudioPidSelection: AWS.MediaLive.Channel.AudioPidSelection;

AudioLanguageSelection: AWS.MediaLive.Channel.AudioLanguageSelection;

AudioTrackSelection: AWS.MediaLive.Channel.AudioTrackSelection; };

export type UdpContainerSettings = { M2tsSettings: AWS.MediaLive.Channel.M2tsSettings; };

export type TimecodeConfig = { SyncThreshold: Integer;

Source: String; };

export type VideoSelector = { ColorSpaceSettings: AWS.MediaLive.Channel.VideoSelectorColorSpaceSettings;

SelectorSettings: AWS.MediaLive.Channel.VideoSelectorSettings;

ColorSpace: String;

ColorSpaceUsage: String; };

export type DvbTdtSettings = { RepInterval: Integer; };

export type HlsGroupSettings = { SegmentationMode: String;

Destination: AWS.MediaLive.Channel.OutputLocationRef;

CodecSpecification: String;

IvSource: String;

TimedMetadataId3Frame: String;

KeyFormatVersions: String;

RedundantManifest: String;

OutputSelection: String;

KeyProviderSettings: AWS.MediaLive.Channel.KeyProviderSettings;

StreamInfResolution: String;

CaptionLanguageMappings: List<AWS.MediaLive.Channel.CaptionLanguageMapping>;

HlsId3SegmentTagging: String;

IFrameOnlyPlaylists: String;

CaptionLanguageSetting: String;

KeepSegments: Integer;

ConstantIv: String;

DirectoryStructure: String;

EncryptionType: String;

AdMarkers: List<String>;

HlsCdnSettings: AWS.MediaLive.Channel.HlsCdnSettings;

IndexNSegments: Integer;

DiscontinuityTags: String;

InputLossAction: String;

Mode: String;

TsFileMode: String;

BaseUrlManifest1: String;

ClientCache: String;

MinSegmentLength: Integer;

KeyFormat: String;

IvInManifest: String;

BaseUrlContent1: String;

ManifestCompression: String;

ManifestDurationFormat: String;

TimedMetadataId3Period: Integer;

IncompleteSegmentBehavior: String;

ProgramDateTimePeriod: Integer;

SegmentLength: Integer;

TimestampDeltaMilliseconds: Integer;

ProgramDateTime: String;

SegmentsPerSubdirectory: Integer;

BaseUrlContent: String;

BaseUrlManifest: String; };

export type OutputDestinationSettings = { StreamName: String;

Username: String;

PasswordParam: String;

Url: String; };

export type AvailConfiguration = { AvailSettings: AWS.MediaLive.Channel.AvailSettings; };

export type TeletextDestinationSettings = {  };

export type H265Settings = { Slices: Integer;

QvbrQualityLevel: Integer;

FramerateNumerator: Integer;

GopClosedCadence: Integer;

FlickerAq: String;

Profile: String;

MinIInterval: Integer;

SceneChangeDetect: String;

FramerateDenominator: Integer;

GopSize: Double;

AdaptiveQuantization: String;

FilterSettings: AWS.MediaLive.Channel.H265FilterSettings;

AlternativeTransferFunction: String;

ColorSpaceSettings: AWS.MediaLive.Channel.H265ColorSpaceSettings;

Tier: String;

ParDenominator: Integer;

FixedAfd: String;

GopSizeUnits: String;

AfdSignaling: String;

Bitrate: Integer;

ParNumerator: Integer;

RateControlMode: String;

ScanType: String;

BufSize: Integer;

TimecodeInsertion: String;

ColorMetadata: String;

LookAheadRateControl: String;

Level: String;

MaxBitrate: Integer; };

export type AudioCodecSettings = { Eac3Settings: AWS.MediaLive.Channel.Eac3Settings;

Ac3Settings: AWS.MediaLive.Channel.Ac3Settings;

Mp2Settings: AWS.MediaLive.Channel.Mp2Settings;

PassThroughSettings: AWS.MediaLive.Channel.PassThroughSettings;

WavSettings: AWS.MediaLive.Channel.WavSettings;

AacSettings: AWS.MediaLive.Channel.AacSettings; };

export type DvbNitSettings = { NetworkName: String;

RepInterval: Integer;

NetworkId: Integer; };

export type WebvttDestinationSettings = {  };

export type AacSettings = { CodingMode: String;

RateControlMode: String;

SampleRate: Double;

InputType: String;

VbrQuality: String;

RawFormat: String;

Spec: String;

Bitrate: Double;

Profile: String; };

export type Scte35TimeSignalApos = { AdAvailOffset: Integer;

WebDeliveryAllowedFlag: String;

NoRegionalBlackoutFlag: String; };

export type FecOutputSettings = { RowLength: Integer;

ColumnDepth: Integer;

IncludeFec: String; };

export type OutputDestination = { MultiplexSettings: AWS.MediaLive.Channel.MultiplexProgramChannelDestinationSettings;

Id: String;

Settings: List<AWS.MediaLive.Channel.OutputDestinationSettings>;

MediaPackageSettings: List<AWS.MediaLive.Channel.MediaPackageOutputDestinationSettings>; };

export type AncillarySourceSettings = { SourceAncillaryChannelNumber: Integer; };

export type Mpeg2FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

export type CaptionSelector = { LanguageCode: String;

SelectorSettings: AWS.MediaLive.Channel.CaptionSelectorSettings;

Name: String; };

export type VideoBlackFailoverSettings = { VideoBlackThresholdMsec: Integer;

BlackDetectThreshold: Double; };

export type RtmpOutputSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef;

CertificateMode: String;

NumRetries: Integer;

ConnectionRetryInterval: Integer; };

export type RtmpCaptionInfoDestinationSettings = {  };

export type TtmlDestinationSettings = { StyleControl: String; };

export type M2tsSettings = { EtvPlatformPid: String;

PatInterval: Integer;

ProgramNum: Integer;

RateMode: String;

KlvDataPids: String;

NullPacketBitrate: Double;

PmtInterval: Integer;

AribCaptionsPid: String;

EsRateInPes: String;

VideoPid: String;

TransportStreamId: Integer;

EbpPlacement: String;

DvbSubPids: String;

SegmentationStyle: String;

Scte35Pid: String;

AudioStreamType: String;

Klv: String;

EbpLookaheadMs: Integer;

DvbTdtSettings: AWS.MediaLive.Channel.DvbTdtSettings;

TimedMetadataBehavior: String;

EbpAudioInterval: String;

FragmentTime: Double;

DvbTeletextPid: String;

Scte35Control: String;

PcrPeriod: Integer;

NielsenId3Behavior: String;

PcrPid: String;

SegmentationTime: Double;

CcDescriptor: String;

AudioFramesPerPes: Integer;

AbsentInputAudioBehavior: String;

Bitrate: Integer;

PmtPid: String;

Scte27Pids: String;

SegmentationMarkers: String;

DvbNitSettings: AWS.MediaLive.Channel.DvbNitSettings;

DvbSdtSettings: AWS.MediaLive.Channel.DvbSdtSettings;

EtvSignalPid: String;

Arib: String;

BufferModel: String;

EcmPid: String;

TimedMetadataPid: String;

AudioPids: String;

AudioBufferModel: String;

Ebif: String;

AribCaptionsPidControl: String;

PcrControl: String; };

export type HlsWebdavSettings = { FilecacheDuration: Integer;

NumRetries: Integer;

RestartDelay: Integer;

ConnectionRetryInterval: Integer;

HttpTransferMode: String; };

export type NielsenConfiguration = { DistributorId: String;

NielsenPcmToId3Tagging: String; };

export type GlobalConfiguration = { InputEndAction: String;

OutputTimingSource: String;

OutputLockingMode: String;

SupportLowFramerateInputs: String;

InitialAudioGain: Integer;

InputLossBehavior: AWS.MediaLive.Channel.InputLossBehavior; };

export type MediaPackageOutputDestinationSettings = { ChannelId: String; };

export type AudioOnlyHlsSettings = { SegmentType: String;

AudioTrackType: String;

AudioOnlyImage: AWS.MediaLive.Channel.InputLocation;

AudioGroupId: String; };

export type OutputLocationRef = { DestinationRefId: String; };

export type Scte27DestinationSettings = {  };

export type AutomaticInputFailoverSettings = { FailoverConditions: List<AWS.MediaLive.Channel.FailoverCondition>;

InputPreference: String;

SecondaryInputId: String;

ErrorClearTimeMsec: Integer; };

export type FrameCaptureGroupSettings = { FrameCaptureCdnSettings: AWS.MediaLive.Channel.FrameCaptureCdnSettings;

Destination: AWS.MediaLive.Channel.OutputLocationRef; };

export type ArchiveOutputSettings = { Extension: String;

NameModifier: String;

ContainerSettings: AWS.MediaLive.Channel.ArchiveContainerSettings; };

export type ArchiveGroupSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef;

ArchiveCdnSettings: AWS.MediaLive.Channel.ArchiveCdnSettings;

RolloverInterval: Integer; };

export type RawSettings = {  };

export type DvbSdtSettings = { ServiceProviderName: String;

OutputSdt: String;

ServiceName: String;

RepInterval: Integer; };

export type VideoSelectorProgramId = { ProgramId: Integer; };

export type InputAttachment = { InputAttachmentName: String;

InputId: String;

AutomaticInputFailoverSettings: AWS.MediaLive.Channel.AutomaticInputFailoverSettings;

InputSettings: AWS.MediaLive.Channel.InputSettings; };

export type InputChannelLevel = { InputChannel: Integer;

Gain: Integer; };

export type StandardHlsSettings = { AudioRenditionSets: String;

M3u8Settings: AWS.MediaLive.Channel.M3u8Settings; };

export type PassThroughSettings = {  };

export type ArchiveContainerSettings = { RawSettings: AWS.MediaLive.Channel.RawSettings;

M2tsSettings: AWS.MediaLive.Channel.M2tsSettings; };

export type EmbeddedSourceSettings = { Source608ChannelNumber: Integer;

Scte20Detection: String;

Source608TrackNumber: Integer;

Convert608To708: String; };

export type InputSpecification = AWS.MediaLive.Channel.InputSpecification;

export type FrameCaptureOutputSettings = { NameModifier: String; };

export type EncoderSettings = AWS.MediaLive.Channel.EncoderSettings;

export type AvailSettings = { Scte35SpliceInsert: AWS.MediaLive.Channel.Scte35SpliceInsert;

Scte35TimeSignalApos: AWS.MediaLive.Channel.Scte35TimeSignalApos; };

export type H264ColorSpaceSettings = { Rec601Settings: AWS.MediaLive.Channel.Rec601Settings;

Rec709Settings: AWS.MediaLive.Channel.Rec709Settings;

ColorSpacePassthroughSettings: AWS.MediaLive.Channel.ColorSpacePassthroughSettings; };

export type MediaPackageGroupSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef; };

export type MultiplexOutputSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef; };

export type H265ColorSpaceSettings = { Rec601Settings: AWS.MediaLive.Channel.Rec601Settings;

Rec709Settings: AWS.MediaLive.Channel.Rec709Settings;

ColorSpacePassthroughSettings: AWS.MediaLive.Channel.ColorSpacePassthroughSettings;

Hdr10Settings: AWS.MediaLive.Channel.Hdr10Settings; };

export type EmbeddedDestinationSettings = {  };

export type AvailBlanking = { State: String;

AvailBlankingImage: AWS.MediaLive.Channel.InputLocation; };

export type InputSettings = { DeblockFilter: String;

FilterStrength: Integer;

InputFilter: String;

SourceEndBehavior: String;

VideoSelector: AWS.MediaLive.Channel.VideoSelector;

Smpte2038DataPreference: String;

AudioSelectors: List<AWS.MediaLive.Channel.AudioSelector>;

CaptionSelectors: List<AWS.MediaLive.Channel.CaptionSelector>;

DenoiseFilter: String;

NetworkInputSettings: AWS.MediaLive.Channel.NetworkInputSettings; };

export type AudioNormalizationSettings = { TargetLkfs: Double;

Algorithm: String;

AlgorithmControl: String; };

export type MultiplexGroupSettings = {  };

export type InputLossFailoverSettings = { InputLossThresholdMsec: Integer; };

export type AudioSelector = { SelectorSettings: AWS.MediaLive.Channel.AudioSelectorSettings;

Name: String; };

export type AudioPidSelection = { Pid: Integer; };

export type CaptionLanguageMapping = { LanguageCode: String;

LanguageDescription: String;

CaptionChannel: Integer; };

export type DvbSubSourceSettings = { Pid: Integer; };

export type CaptionSelectorSettings = { DvbSubSourceSettings: AWS.MediaLive.Channel.DvbSubSourceSettings;

Scte27SourceSettings: AWS.MediaLive.Channel.Scte27SourceSettings;

AribSourceSettings: AWS.MediaLive.Channel.AribSourceSettings;

EmbeddedSourceSettings: AWS.MediaLive.Channel.EmbeddedSourceSettings;

Scte20SourceSettings: AWS.MediaLive.Channel.Scte20SourceSettings;

TeletextSourceSettings: AWS.MediaLive.Channel.TeletextSourceSettings;

AncillarySourceSettings: AWS.MediaLive.Channel.AncillarySourceSettings; };

export type VideoSelectorSettings = { VideoSelectorProgramId: AWS.MediaLive.Channel.VideoSelectorProgramId;

VideoSelectorPid: AWS.MediaLive.Channel.VideoSelectorPid; };

export type VpcOutputSettings = { PublicAddressAllocationIds: List<String>;

SecurityGroupIds: List<String>;

SubnetIds: List<String>; };

export type TeletextSourceSettings = { OutputRectangle: AWS.MediaLive.Channel.CaptionRectangle;

PageNumber: String; };

export type CaptionDescription = { DestinationSettings: AWS.MediaLive.Channel.CaptionDestinationSettings;

LanguageCode: String;

LanguageDescription: String;

CaptionSelectorName: String;

Name: String; };

export type MotionGraphicsConfiguration = { MotionGraphicsSettings: AWS.MediaLive.Channel.MotionGraphicsSettings;

MotionGraphicsInsertion: String; };

export type VideoSelectorColorSpaceSettings = { Hdr10Settings: AWS.MediaLive.Channel.Hdr10Settings; };

export type Output = { OutputSettings: AWS.MediaLive.Channel.OutputSettings;

CaptionDescriptionNames: List<String>;

AudioDescriptionNames: List<String>;

OutputName: String;

VideoDescriptionName: String; };

export type NetworkInputSettings = { ServerValidation: String;

HlsInputSettings: AWS.MediaLive.Channel.HlsInputSettings; };

export type H265FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

export type HlsBasicPutSettings = { FilecacheDuration: Integer;

NumRetries: Integer;

RestartDelay: Integer;

ConnectionRetryInterval: Integer; };

export type Scte20PlusEmbeddedDestinationSettings = {  };

export type Scte20SourceSettings = { Source608ChannelNumber: Integer;

Convert608To708: String; };

export type AudioTrack = { Track: Integer; };

export type AudioDescription = { AudioNormalizationSettings: AWS.MediaLive.Channel.AudioNormalizationSettings;

LanguageCode: String;

RemixSettings: AWS.MediaLive.Channel.RemixSettings;

AudioSelectorName: String;

StreamName: String;

LanguageCodeControl: String;

AudioType: String;

AudioTypeControl: String;

CodecSettings: AWS.MediaLive.Channel.AudioCodecSettings;

Name: String; };

export type BurnInDestinationSettings = { BackgroundOpacity: Integer;

FontResolution: Integer;

OutlineColor: String;

FontColor: String;

ShadowColor: String;

ShadowOpacity: Integer;

Font: AWS.MediaLive.Channel.InputLocation;

ShadowYOffset: Integer;

Alignment: String;

XPosition: Integer;

FontSize: String;

YPosition: Integer;

OutlineSize: Integer;

TeletextGridControl: String;

FontOpacity: Integer;

ShadowXOffset: Integer;

BackgroundColor: String; };

export type RtmpGroupSettings = { AuthenticationScheme: String;

CacheLength: Integer;

AdMarkers: List<String>;

InputLossAction: String;

RestartDelay: Integer;

CaptionData: String;

CacheFullBehavior: String; };

export type MsSmoothOutputSettings = { NameModifier: String;

H265PackagingType: String; };

export type CaptionDestinationSettings = { AribDestinationSettings: AWS.MediaLive.Channel.AribDestinationSettings;

EbuTtDDestinationSettings: AWS.MediaLive.Channel.EbuTtDDestinationSettings;

SmpteTtDestinationSettings: AWS.MediaLive.Channel.SmpteTtDestinationSettings;

EmbeddedPlusScte20DestinationSettings: AWS.MediaLive.Channel.EmbeddedPlusScte20DestinationSettings;

TtmlDestinationSettings: AWS.MediaLive.Channel.TtmlDestinationSettings;

Scte20PlusEmbeddedDestinationSettings: AWS.MediaLive.Channel.Scte20PlusEmbeddedDestinationSettings;

DvbSubDestinationSettings: AWS.MediaLive.Channel.DvbSubDestinationSettings;

TeletextDestinationSettings: AWS.MediaLive.Channel.TeletextDestinationSettings;

BurnInDestinationSettings: AWS.MediaLive.Channel.BurnInDestinationSettings;

WebvttDestinationSettings: AWS.MediaLive.Channel.WebvttDestinationSettings;

EmbeddedDestinationSettings: AWS.MediaLive.Channel.EmbeddedDestinationSettings;

RtmpCaptionInfoDestinationSettings: AWS.MediaLive.Channel.RtmpCaptionInfoDestinationSettings;

Scte27DestinationSettings: AWS.MediaLive.Channel.Scte27DestinationSettings; };

export type MsSmoothGroupSettings = { SegmentationMode: String;

Destination: AWS.MediaLive.Channel.OutputLocationRef;

EventStopBehavior: String;

FilecacheDuration: Integer;

CertificateMode: String;

AcquisitionPointId: String;

StreamManifestBehavior: String;

InputLossAction: String;

FragmentLength: Integer;

RestartDelay: Integer;

SparseTrackType: String;

EventIdMode: String;

TimestampOffsetMode: String;

AudioOnlyTimecodeControl: String;

NumRetries: Integer;

TimestampOffset: String;

EventId: String;

SendDelayMs: Integer;

ConnectionRetryInterval: Integer; };

export type WavSettings = { CodingMode: String;

SampleRate: Double;

BitDepth: Double; };

export type KeyProviderSettings = { StaticKeySettings: AWS.MediaLive.Channel.StaticKeySettings; };

export type CdiInputSpecification = AWS.MediaLive.Channel.CdiInputSpecification;

export type OutputGroupSettings = { HlsGroupSettings: AWS.MediaLive.Channel.HlsGroupSettings;

FrameCaptureGroupSettings: AWS.MediaLive.Channel.FrameCaptureGroupSettings;

MultiplexGroupSettings: AWS.MediaLive.Channel.MultiplexGroupSettings;

ArchiveGroupSettings: AWS.MediaLive.Channel.ArchiveGroupSettings;

MediaPackageGroupSettings: AWS.MediaLive.Channel.MediaPackageGroupSettings;

UdpGroupSettings: AWS.MediaLive.Channel.UdpGroupSettings;

MsSmoothGroupSettings: AWS.MediaLive.Channel.MsSmoothGroupSettings;

RtmpGroupSettings: AWS.MediaLive.Channel.RtmpGroupSettings; };

export type HtmlMotionGraphicsSettings = {  };

export type OutputSettings = { MediaPackageOutputSettings: AWS.MediaLive.Channel.MediaPackageOutputSettings;

MsSmoothOutputSettings: AWS.MediaLive.Channel.MsSmoothOutputSettings;

FrameCaptureOutputSettings: AWS.MediaLive.Channel.FrameCaptureOutputSettings;

HlsOutputSettings: AWS.MediaLive.Channel.HlsOutputSettings;

RtmpOutputSettings: AWS.MediaLive.Channel.RtmpOutputSettings;

UdpOutputSettings: AWS.MediaLive.Channel.UdpOutputSettings;

MultiplexOutputSettings: AWS.MediaLive.Channel.MultiplexOutputSettings;

ArchiveOutputSettings: AWS.MediaLive.Channel.ArchiveOutputSettings; };

export type HlsS3Settings = { CannedAcl: String; };

export type VideoDescription = { ScalingBehavior: String;

RespondToAfd: String;

Height: Integer;

Sharpness: Integer;

Width: Integer;

CodecSettings: AWS.MediaLive.Channel.VideoCodecSettings;

Name: String; };

export type BlackoutSlate = { NetworkEndBlackout: String;

State: String;

NetworkId: String;

NetworkEndBlackoutImage: AWS.MediaLive.Channel.InputLocation;

BlackoutSlateImage: AWS.MediaLive.Channel.InputLocation; };

export type ColorSpacePassthroughSettings = {  };

export type HlsMediaStoreSettings = { FilecacheDuration: Integer;

NumRetries: Integer;

MediaStoreStorageClass: String;

RestartDelay: Integer;

ConnectionRetryInterval: Integer; };

export type M3u8Settings = { PatInterval: Integer;

ProgramNum: Integer;

PcrPeriod: Integer;

PmtInterval: Integer;

NielsenId3Behavior: String;

PcrPid: String;

VideoPid: String;

AudioFramesPerPes: Integer;

TransportStreamId: Integer;

PmtPid: String;

Scte35Pid: String;

Scte35Behavior: String;

EcmPid: String;

TimedMetadataPid: String;

AudioPids: String;

PcrControl: String;

TimedMetadataBehavior: String; };

export type AribDestinationSettings = {  };

export type UdpGroupSettings = { TimedMetadataId3Frame: String;

TimedMetadataId3Period: Integer;

InputLossAction: String; };

export type FrameCaptureHlsSettings = {  };

export type RemixSettings = { ChannelsOut: Integer;

ChannelMappings: List<AWS.MediaLive.Channel.AudioChannelMapping>;

ChannelsIn: Integer; };

export type TemporalFilterSettings = { PostFilterSharpening: String;

Strength: String; };

export type HlsAkamaiSettings = { Salt: String;

FilecacheDuration: Integer;

NumRetries: Integer;

Token: String;

RestartDelay: Integer;

ConnectionRetryInterval: Integer;

HttpTransferMode: String; };

export type InputAttachments = List<AWS.MediaLive.Channel.InputAttachment>;

export type ChannelClass = String;

export type Destinations = List<AWS.MediaLive.Channel.OutputDestination>;

export type Vpc = AWS.MediaLive.Channel.VpcOutputSettings;

export type LogLevel = String;

export type RoleArn = String;

export type Tags = Json;

export type Name = String;

}

export namespace Input {

export type InputSourceRequest = { Username: String;

PasswordParam: String;

Url: String; };

export type InputDeviceRequest = { Id: String; };

export type InputDeviceSettings = { Id: String; };

export type InputVpcRequest = { SecurityGroupIds: List<String>;

SubnetIds: List<String>; };

export type InputDestinationRequest = { StreamName: String; };

export type MediaConnectFlowRequest = { FlowArn: String; };

export type Type = String;

export type Destinations = List<AWS.MediaLive.Input.InputDestinationRequest>;

export type Vpc = AWS.MediaLive.Input.InputVpcRequest;

export type MediaConnectFlows = List<AWS.MediaLive.Input.MediaConnectFlowRequest>;

export type InputSecurityGroups = List<String>;

export type InputDevices = List<AWS.MediaLive.Input.InputDeviceSettings>;

export type Sources = List<AWS.MediaLive.Input.InputSourceRequest>;

export type RoleArn = String;

export type Tags = Json;

export type Name = String;

}

export namespace InputSecurityGroup {

export type InputWhitelistRuleCidr = { Cidr: String; };

export type WhitelistRules = List<AWS.MediaLive.InputSecurityGroup.InputWhitelistRuleCidr>;

export type Tags = Json;

}

}

export namespace DirectoryService {

export namespace MicrosoftAD {

export type VpcSettings = AWS.DirectoryService.MicrosoftAD.VpcSettings;

export type CreateAlias = Boolean;

export type Edition = String;

export type EnableSso = Boolean;

export type Name = String;

export type Password = String;

export type ShortName = String;

}

export namespace SimpleAD {

export type VpcSettings = AWS.DirectoryService.SimpleAD.VpcSettings;

export type CreateAlias = Boolean;

export type Description = String;

export type EnableSso = Boolean;

export type Name = String;

export type Password = String;

export type ShortName = String;

export type Size = String;

}

}

export namespace AppSync {

export namespace DataSource {

export type RelationalDatabaseConfig = AWS.AppSync.DataSource.RelationalDatabaseConfig;

export type LambdaConfig = AWS.AppSync.DataSource.LambdaConfig;

export type HttpConfig = AWS.AppSync.DataSource.HttpConfig;

export type AwsIamConfig = { SigningRegion: String;

SigningServiceName: String; };

export type DynamoDBConfig = AWS.AppSync.DataSource.DynamoDBConfig;

export type AuthorizationConfig = { AwsIamConfig: AWS.AppSync.DataSource.AwsIamConfig;

AuthorizationType: String; };

export type RdsHttpEndpointConfig = { AwsRegion: String;

Schema: String;

DatabaseName: String;

DbClusterIdentifier: String;

AwsSecretStoreArn: String; };

export type ElasticsearchConfig = AWS.AppSync.DataSource.ElasticsearchConfig;

export type DeltaSyncConfig = { BaseTableTTL: String;

DeltaSyncTableTTL: String;

DeltaSyncTableName: String; };

export type Type = String;

export type Description = String;

export type ServiceRoleArn = String;

export type ApiId = String;

export type Name = String;

}

export namespace GraphQLApi {

export type Tags = AWS.AppSync.GraphQLApi.Tags;

export type OpenIDConnectConfig = AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

export type CognitoUserPoolConfig = { AppIdClientRegex: String;

UserPoolId: String;

AwsRegion: String; };

export type AdditionalAuthenticationProviders = AWS.AppSync.GraphQLApi.AdditionalAuthenticationProviders;

export type UserPoolConfig = AWS.AppSync.GraphQLApi.UserPoolConfig;

export type LogConfig = AWS.AppSync.GraphQLApi.LogConfig;

export type AdditionalAuthenticationProvider = { OpenIDConnectConfig: AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

UserPoolConfig: AWS.AppSync.GraphQLApi.CognitoUserPoolConfig;

AuthenticationType: String; };

export type XrayEnabled = Boolean;

export type Name = String;

export type AuthenticationType = String;

}

export namespace FunctionConfiguration {

export type SyncConfig = AWS.AppSync.FunctionConfiguration.SyncConfig;

export type LambdaConflictHandlerConfig = { LambdaConflictHandlerArn: String; };

export type ResponseMappingTemplateS3Location = String;

export type Description = String;

export type DataSourceName = String;

export type RequestMappingTemplate = String;

export type ResponseMappingTemplate = String;

export type FunctionVersion = String;

export type RequestMappingTemplateS3Location = String;

export type ApiId = String;

export type Name = String;

}

export namespace Resolver {

export type LambdaConflictHandlerConfig = { LambdaConflictHandlerArn: String; };

export type PipelineConfig = AWS.AppSync.Resolver.PipelineConfig;

export type SyncConfig = AWS.AppSync.Resolver.SyncConfig;

export type CachingConfig = AWS.AppSync.Resolver.CachingConfig;

export type ResponseMappingTemplateS3Location = String;

export type TypeName = String;

export type DataSourceName = String;

export type RequestMappingTemplate = String;

export type ResponseMappingTemplate = String;

export type Kind = String;

export type RequestMappingTemplateS3Location = String;

export type ApiId = String;

export type FieldName = String;

}

export namespace GraphQLSchema {

export type Definition = String;

export type DefinitionS3Location = String;

export type ApiId = String;

}

export namespace ApiKey {

export type Description = String;

export type ApiKeyId = String;

export type Expires = Double;

export type ApiId = String;

}

export namespace ApiCache {

export type Type = String;

export type TransitEncryptionEnabled = Boolean;

export type AtRestEncryptionEnabled = Boolean;

export type ApiId = String;

export type ApiCachingBehavior = String;

export type Ttl = Double;

}

}

export namespace Lambda {

export namespace Function {

export type VpcConfig = AWS.Lambda.Function.VpcConfig;

export type DeadLetterConfig = AWS.Lambda.Function.DeadLetterConfig;

export type FileSystemConfig = { Arn: String;

LocalMountPath: String; };

export type Code = AWS.Lambda.Function.Code;

export type TracingConfig = AWS.Lambda.Function.TracingConfig;

export type Environment = AWS.Lambda.Function.Environment;

export type ImageConfig = AWS.Lambda.Function.ImageConfig;

export type Description = String;

export type FileSystemConfigs = List<AWS.Lambda.Function.FileSystemConfig>;

export type FunctionName = String;

export type Handler = String;

export type KmsKeyArn = String;

export type Layers = List<String>;

export type MemorySize = Integer;

export type ReservedConcurrentExecutions = Integer;

export type Role = String;

export type Runtime = String;

export type Tags = List<AWS.Lambda.Function.Tag>;

export type Timeout = Integer;

export type CodeSigningConfigArn = String;

export type PackageType = String;

}

export namespace Alias {

export type ProvisionedConcurrencyConfiguration = { ProvisionedConcurrentExecutions: Integer; };

export type AliasRoutingConfiguration = { AdditionalVersionWeights: List<AWS.Lambda.Alias.VersionWeight>; };

export type VersionWeight = { FunctionVersion: String;

FunctionWeight: Double; };

export type Description = String;

export type FunctionName = String;

export type FunctionVersion = String;

export type Name = String;

export type ProvisionedConcurrencyConfig = AWS.Lambda.Alias.ProvisionedConcurrencyConfiguration;

export type RoutingConfig = AWS.Lambda.Alias.AliasRoutingConfiguration;

}

export namespace EventInvokeConfig {

export type OnFailure = { Destination: String; };

export type OnSuccess = { Destination: String; };

export type DestinationConfig = AWS.Lambda.EventInvokeConfig.DestinationConfig;

export type FunctionName = String;

export type MaximumRetryAttempts = Integer;

export type Qualifier = String;

export type MaximumEventAgeInSeconds = Integer;

}

export namespace EventSourceMapping {

export type SelfManagedEventSource = AWS.Lambda.EventSourceMapping.SelfManagedEventSource;

export type OnFailure = { Destination: String; };

export type SourceAccessConfiguration = { Type: String;

URI: String; };

export type Endpoints = { KafkaBootstrapServers: List<String>; };

export type DestinationConfig = AWS.Lambda.EventSourceMapping.DestinationConfig;

export type BatchSize = Integer;

export type BisectBatchOnFunctionError = Boolean;

export type Enabled = Boolean;

export type EventSourceArn = String;

export type FunctionName = String;

export type MaximumBatchingWindowInSeconds = Integer;

export type MaximumRecordAgeInSeconds = Integer;

export type MaximumRetryAttempts = Integer;

export type ParallelizationFactor = Integer;

export type StartingPosition = String;

export type StartingPositionTimestamp = Double;

export type Topics = List<String>;

export type Queues = List<String>;

export type SourceAccessConfigurations = List<AWS.Lambda.EventSourceMapping.SourceAccessConfiguration>;

export type TumblingWindowInSeconds = Integer;

export type FunctionResponseTypes = List<String>;

}

export namespace LayerVersion {

export type Content = AWS.Lambda.LayerVersion.Content;

export type CompatibleRuntimes = List<String>;

export type LicenseInfo = String;

export type Description = String;

export type LayerName = String;

}

export namespace CodeSigningConfig {

export type CodeSigningPolicies = AWS.Lambda.CodeSigningConfig.CodeSigningPolicies;

export type AllowedPublishers = AWS.Lambda.CodeSigningConfig.AllowedPublishers;

export type Description = String;

}

export namespace Version {

export type ProvisionedConcurrencyConfiguration = { ProvisionedConcurrentExecutions: Integer; };

export type CodeSha256 = String;

export type Description = String;

export type FunctionName = String;

export type ProvisionedConcurrencyConfig = AWS.Lambda.Version.ProvisionedConcurrencyConfiguration;

}

export namespace LayerVersionPermission {

export type Action = String;

export type LayerVersionArn = String;

export type OrganizationId = String;

export type Principal = String;

}

export namespace Permission {

export type Action = String;

export type EventSourceToken = String;

export type FunctionName = String;

export type Principal = String;

export type SourceAccount = String;

export type SourceArn = String;

}

}

export namespace Elasticsearch {

export namespace Domain {

export type DomainEndpointOptions = AWS.Elasticsearch.Domain.DomainEndpointOptions;

export type NodeToNodeEncryptionOptions = AWS.Elasticsearch.Domain.NodeToNodeEncryptionOptions;

export type ElasticsearchClusterConfig = AWS.Elasticsearch.Domain.ElasticsearchClusterConfig;

export type AdvancedSecurityOptionsInput = { Enabled: Boolean;

InternalUserDatabaseEnabled: Boolean;

MasterUserOptions: AWS.Elasticsearch.Domain.MasterUserOptions; };

export type ZoneAwarenessConfig = { AvailabilityZoneCount: Integer; };

export type SnapshotOptions = AWS.Elasticsearch.Domain.SnapshotOptions;

export type CognitoOptions = AWS.Elasticsearch.Domain.CognitoOptions;

export type VPCOptions = AWS.Elasticsearch.Domain.VPCOptions;

export type MasterUserOptions = { MasterUserARN: String;

MasterUserName: String;

MasterUserPassword: String; };

export type LogPublishingOption = { CloudWatchLogsLogGroupArn: String;

Enabled: Boolean; };

export type EBSOptions = AWS.Elasticsearch.Domain.EBSOptions;

export type EncryptionAtRestOptions = AWS.Elasticsearch.Domain.EncryptionAtRestOptions;

export type AccessPolicies = Json;

export type AdvancedOptions = Map<String>;

export type AdvancedSecurityOptions = AWS.Elasticsearch.Domain.AdvancedSecurityOptionsInput;

export type DomainName = String;

export type ElasticsearchVersion = String;

export type LogPublishingOptions = Map<AWS.Elasticsearch.Domain.LogPublishingOption>;

export type Tags = List<AWS.Elasticsearch.Domain.Tag>;

}

}

export namespace GroundStation {

export namespace Config {

export type S3RecordingConfig = { BucketArn: String;

RoleArn: String;

Prefix: String; };

export type UplinkEchoConfig = { Enabled: Boolean;

AntennaUplinkConfigArn: String; };

export type DataflowEndpointConfig = { DataflowEndpointName: String;

DataflowEndpointRegion: String; };

export type AntennaDownlinkConfig = { SpectrumConfig: AWS.GroundStation.Config.SpectrumConfig; };

export type DemodulationConfig = { UnvalidatedJSON: String; };

export type AntennaDownlinkDemodDecodeConfig = { SpectrumConfig: AWS.GroundStation.Config.SpectrumConfig;

DemodulationConfig: AWS.GroundStation.Config.DemodulationConfig;

DecodeConfig: AWS.GroundStation.Config.DecodeConfig; };

export type UplinkSpectrumConfig = { CenterFrequency: AWS.GroundStation.Config.Frequency;

Polarization: String; };

export type Frequency = { Value: Double;

Units: String; };

export type SpectrumConfig = { CenterFrequency: AWS.GroundStation.Config.Frequency;

Bandwidth: AWS.GroundStation.Config.FrequencyBandwidth;

Polarization: String; };

export type FrequencyBandwidth = { Value: Double;

Units: String; };

export type TrackingConfig = { Autotrack: String; };

export type ConfigData = AWS.GroundStation.Config.ConfigData;

export type AntennaUplinkConfig = { SpectrumConfig: AWS.GroundStation.Config.UplinkSpectrumConfig;

TargetEirp: AWS.GroundStation.Config.Eirp;

TransmitDisabled: Boolean; };

export type DecodeConfig = { UnvalidatedJSON: String; };

export type Eirp = { Value: Double;

Units: String; };

export type Name = String;

export type Tags = List<AWS.GroundStation.Config.Tag>;

}

export namespace MissionProfile {

export type DataflowEdge = { Source: String;

Destination: String; };

export type Name = String;

export type ContactPrePassDurationSeconds = Integer;

export type ContactPostPassDurationSeconds = Integer;

export type MinimumViableContactDurationSeconds = Integer;

export type DataflowEdges = List<AWS.GroundStation.MissionProfile.DataflowEdge>;

export type TrackingConfigArn = String;

export type Tags = List<AWS.GroundStation.MissionProfile.Tag>;

}

export namespace DataflowEndpointGroup {

export type DataflowEndpoint = { Name: String;

Address: AWS.GroundStation.DataflowEndpointGroup.SocketAddress;

Mtu: Integer; };

export type SecurityDetails = { SubnetIds: List<String>;

SecurityGroupIds: List<String>;

RoleArn: String; };

export type SocketAddress = { Name: String;

Port: Integer; };

export type EndpointDetails = List<AWS.GroundStation.DataflowEndpointGroup.EndpointDetails>;

export type Tags = List<AWS.GroundStation.DataflowEndpointGroup.Tag>;

}

}

export namespace IoTEvents {

export namespace DetectorModel {

export type SetTimer = { DurationExpression: String;

Seconds: Integer;

TimerName: String; };

export type ResetTimer = { TimerName: String; };

export type IotEvents = { InputName: String;

Payload: AWS.IoTEvents.DetectorModel.Payload; };

export type TransitionEvent = { Actions: List<AWS.IoTEvents.DetectorModel.Action>;

Condition: String;

EventName: String;

NextState: String; };

export type IotSiteWise = { AssetId: String;

EntryId: String;

PropertyAlias: String;

PropertyId: String;

PropertyValue: AWS.IoTEvents.DetectorModel.AssetPropertyValue; };

export type DynamoDB = { HashKeyField: String;

HashKeyType: String;

HashKeyValue: String;

Operation: String;

Payload: AWS.IoTEvents.DetectorModel.Payload;

PayloadField: String;

RangeKeyField: String;

RangeKeyType: String;

RangeKeyValue: String;

TableName: String; };

export type Firehose = { DeliveryStreamName: String;

Payload: AWS.IoTEvents.DetectorModel.Payload;

Separator: String; };

export type ClearTimer = { TimerName: String; };

export type State = { OnEnter: AWS.IoTEvents.DetectorModel.OnEnter;

OnExit: AWS.IoTEvents.DetectorModel.OnExit;

OnInput: AWS.IoTEvents.DetectorModel.OnInput;

StateName: String; };

export type Event = { Actions: List<AWS.IoTEvents.DetectorModel.Action>;

Condition: String;

EventName: String; };

export type Sns = { Payload: AWS.IoTEvents.DetectorModel.Payload;

TargetArn: String; };

export type OnExit = { Events: List<AWS.IoTEvents.DetectorModel.Event>; };

export type Sqs = { Payload: AWS.IoTEvents.DetectorModel.Payload;

QueueUrl: String;

UseBase64: Boolean; };

export type DetectorModelDefinition = AWS.IoTEvents.DetectorModel.DetectorModelDefinition;

export type IotTopicPublish = { MqttTopic: String;

Payload: AWS.IoTEvents.DetectorModel.Payload; };

export type Action = { ClearTimer: AWS.IoTEvents.DetectorModel.ClearTimer;

DynamoDB: AWS.IoTEvents.DetectorModel.DynamoDB;

DynamoDBv2: AWS.IoTEvents.DetectorModel.DynamoDBv2;

Firehose: AWS.IoTEvents.DetectorModel.Firehose;

IotEvents: AWS.IoTEvents.DetectorModel.IotEvents;

IotSiteWise: AWS.IoTEvents.DetectorModel.IotSiteWise;

IotTopicPublish: AWS.IoTEvents.DetectorModel.IotTopicPublish;

Lambda: AWS.IoTEvents.DetectorModel.Lambda;

ResetTimer: AWS.IoTEvents.DetectorModel.ResetTimer;

SetTimer: AWS.IoTEvents.DetectorModel.SetTimer;

SetVariable: AWS.IoTEvents.DetectorModel.SetVariable;

Sns: AWS.IoTEvents.DetectorModel.Sns;

Sqs: AWS.IoTEvents.DetectorModel.Sqs; };

export type AssetPropertyTimestamp = { OffsetInNanos: String;

TimeInSeconds: String; };

export type DynamoDBv2 = { Payload: AWS.IoTEvents.DetectorModel.Payload;

TableName: String; };

export type OnInput = { Events: List<AWS.IoTEvents.DetectorModel.Event>;

TransitionEvents: List<AWS.IoTEvents.DetectorModel.TransitionEvent>; };

export type AssetPropertyVariant = { BooleanValue: String;

DoubleValue: String;

IntegerValue: String;

StringValue: String; };

export type SetVariable = { Value: String;

VariableName: String; };

export type Payload = { ContentExpression: String;

Type: String; };

export type OnEnter = { Events: List<AWS.IoTEvents.DetectorModel.Event>; };

export type AssetPropertyValue = { Quality: String;

Timestamp: AWS.IoTEvents.DetectorModel.AssetPropertyTimestamp;

Value: AWS.IoTEvents.DetectorModel.AssetPropertyVariant; };

export type Lambda = { FunctionArn: String;

Payload: AWS.IoTEvents.DetectorModel.Payload; };

export type DetectorModelDescription = String;

export type DetectorModelName = String;

export type EvaluationMethod = String;

export type Key = String;

export type RoleArn = String;

export type Tags = List<AWS.IoTEvents.DetectorModel.Tag>;

}

export namespace Input {

export type Attribute = { JsonPath: String; };

export type InputDefinition = AWS.IoTEvents.Input.InputDefinition;

export type InputDescription = String;

export type InputName = String;

export type Tags = List<AWS.IoTEvents.Input.Tag>;

}

}

export namespace GreengrassV2 {

export namespace ComponentVersion {

export type ComponentPlatform = { Name: String;

Attributes: Map<String>; };

export type LambdaContainerParams = { MemorySizeInKB: Integer;

MountROSysfs: Boolean;

Volumes: List<AWS.GreengrassV2.ComponentVersion.LambdaVolumeMount>;

Devices: List<AWS.GreengrassV2.ComponentVersion.LambdaDeviceMount>; };

export type LambdaVolumeMount = { SourcePath: String;

DestinationPath: String;

Permission: String;

AddGroupOwner: Boolean; };

export type LambdaFunctionRecipeSource = { LambdaArn: String;

ComponentName: String;

ComponentVersion: String;

ComponentPlatforms: List<AWS.GreengrassV2.ComponentVersion.ComponentPlatform>;

ComponentDependencies: Map<AWS.GreengrassV2.ComponentVersion.ComponentDependencyRequirement>;

ComponentLambdaParameters: AWS.GreengrassV2.ComponentVersion.LambdaExecutionParameters; };

export type ComponentDependencyRequirement = { VersionRequirement: String;

DependencyType: String; };

export type LambdaDeviceMount = { Path: String;

Permission: String;

AddGroupOwner: Boolean; };

export type LambdaLinuxProcessParams = { IsolationMode: String;

ContainerParams: AWS.GreengrassV2.ComponentVersion.LambdaContainerParams; };

export type LambdaEventSource = { Topic: String;

Type: String; };

export type LambdaExecutionParameters = { EventSources: List<AWS.GreengrassV2.ComponentVersion.LambdaEventSource>;

MaxQueueSize: Integer;

MaxInstancesCount: Integer;

MaxIdleTimeInSeconds: Integer;

TimeoutInSeconds: Integer;

StatusTimeoutInSeconds: Integer;

Pinned: Boolean;

InputPayloadEncodingType: String;

ExecArgs: List<String>;

EnvironmentVariables: Map<String>;

LinuxProcessParams: AWS.GreengrassV2.ComponentVersion.LambdaLinuxProcessParams; };

export type InlineRecipe = String;

export type LambdaFunction = AWS.GreengrassV2.ComponentVersion.LambdaFunctionRecipeSource;

export type Tags = Map<String>;

}

}

export namespace ManagedBlockchain {

export namespace Node {

export type NodeConfiguration = AWS.ManagedBlockchain.Node.NodeConfiguration;

export type MemberId = String;

export type NetworkId = String;

}

export namespace Member {

export type NetworkFrameworkConfiguration = { NetworkFabricConfiguration: AWS.ManagedBlockchain.Member.NetworkFabricConfiguration; };

export type NetworkConfiguration = AWS.ManagedBlockchain.Member.NetworkConfiguration;

export type NetworkFabricConfiguration = { Edition: String; };

export type MemberConfiguration = AWS.ManagedBlockchain.Member.MemberConfiguration;

export type ApprovalThresholdPolicy = { ThresholdComparator: String;

ThresholdPercentage: Integer;

ProposalDurationInHours: Integer; };

export type MemberFrameworkConfiguration = { MemberFabricConfiguration: AWS.ManagedBlockchain.Member.MemberFabricConfiguration; };

export type VotingPolicy = { ApprovalThresholdPolicy: AWS.ManagedBlockchain.Member.ApprovalThresholdPolicy; };

export type MemberFabricConfiguration = { AdminUsername: String;

AdminPassword: String; };

export type NetworkId = String;

export type InvitationId = String;

}

}

export namespace WAF {

export namespace WebACL {

export type WafAction = { Type: String; };

export type ActivatedRule = { Action: AWS.WAF.WebACL.WafAction;

Priority: Integer;

RuleId: String; };

export type DefaultAction = AWS.WAF.WebACL.WafAction;

export type MetricName = String;

export type Name = String;

export type Rules = List<AWS.WAF.WebACL.ActivatedRule>;

}

export namespace IPSet {

export type IPSetDescriptor = { Type: String;

Value: String; };

export type IPSetDescriptors = List<AWS.WAF.IPSet.IPSetDescriptor>;

export type Name = String;

}

export namespace ByteMatchSet {

export type FieldToMatch = { Data: String;

Type: String; };

export type ByteMatchTuple = { FieldToMatch: AWS.WAF.ByteMatchSet.FieldToMatch;

PositionalConstraint: String;

TargetString: String;

TargetStringBase64: String;

TextTransformation: String; };

export type ByteMatchTuples = List<AWS.WAF.ByteMatchSet.ByteMatchTuple>;

export type Name = String;

}

export namespace SqlInjectionMatchSet {

export type FieldToMatch = { Data: String;

Type: String; };

export type SqlInjectionMatchTuple = { FieldToMatch: AWS.WAF.SqlInjectionMatchSet.FieldToMatch;

TextTransformation: String; };

export type Name = String;

export type SqlInjectionMatchTuples = List<AWS.WAF.SqlInjectionMatchSet.SqlInjectionMatchTuple>;

}

export namespace XssMatchSet {

export type XssMatchTuple = { FieldToMatch: AWS.WAF.XssMatchSet.FieldToMatch;

TextTransformation: String; };

export type FieldToMatch = { Data: String;

Type: String; };

export type Name = String;

export type XssMatchTuples = List<AWS.WAF.XssMatchSet.XssMatchTuple>;

}

export namespace Rule {

export type Predicate = { DataId: String;

Negated: Boolean;

Type: String; };

export type MetricName = String;

export type Name = String;

export type Predicates = List<AWS.WAF.Rule.Predicate>;

}

export namespace SizeConstraintSet {

export type FieldToMatch = { Data: String;

Type: String; };

export type SizeConstraint = { ComparisonOperator: String;

FieldToMatch: AWS.WAF.SizeConstraintSet.FieldToMatch;

Size: Integer;

TextTransformation: String; };

export type Name = String;

export type SizeConstraints = List<AWS.WAF.SizeConstraintSet.SizeConstraint>;

}

}

export namespace NetworkFirewall {

export namespace RuleGroup {

export type ActionDefinition = { PublishMetricAction: AWS.NetworkFirewall.RuleGroup.PublishMetricAction; };

export type TCPFlagField = { Flags: List<String>;

Masks: List<String>; };

export type Header = { Protocol: String;

Source: String;

SourcePort: String;

Direction: String;

Destination: String;

DestinationPort: String; };

export type Dimension = { Value: String; };

export type StatelessRulesAndCustomActions = { StatelessRules: List<AWS.NetworkFirewall.RuleGroup.StatelessRule>;

CustomActions: List<AWS.NetworkFirewall.RuleGroup.CustomAction>; };

export type RuleOption = { Keyword: String;

Settings: List<String>; };

export type RuleDefinition = { MatchAttributes: AWS.NetworkFirewall.RuleGroup.MatchAttributes;

Actions: List<String>; };

export type RuleGroup = AWS.NetworkFirewall.RuleGroup.RuleGroup;

export type RulesSourceList = { Targets: List<String>;

TargetTypes: List<String>;

GeneratedRulesType: String; };

export type StatelessRule = { RuleDefinition: AWS.NetworkFirewall.RuleGroup.RuleDefinition;

Priority: Integer; };

export type PortRange = { FromPort: Integer;

ToPort: Integer; };

export type IPSet = { Definition: List<String>; };

export type CustomAction = { ActionName: String;

ActionDefinition: AWS.NetworkFirewall.RuleGroup.ActionDefinition; };

export type PortSet = { Definition: List<String>; };

export type MatchAttributes = { Sources: List<AWS.NetworkFirewall.RuleGroup.Address>;

Destinations: List<AWS.NetworkFirewall.RuleGroup.Address>;

SourcePorts: List<AWS.NetworkFirewall.RuleGroup.PortRange>;

DestinationPorts: List<AWS.NetworkFirewall.RuleGroup.PortRange>;

Protocols: List<Integer>;

TCPFlags: List<AWS.NetworkFirewall.RuleGroup.TCPFlagField>; };

export type RuleVariables = { IPSets: Map<AWS.NetworkFirewall.RuleGroup.IPSet>;

PortSets: Map<AWS.NetworkFirewall.RuleGroup.PortSet>; };

export type PublishMetricAction = { Dimensions: List<AWS.NetworkFirewall.RuleGroup.Dimension>; };

export type Address = { AddressDefinition: String; };

export type RulesSource = { RulesString: String;

RulesSourceList: AWS.NetworkFirewall.RuleGroup.RulesSourceList;

StatefulRules: List<AWS.NetworkFirewall.RuleGroup.StatefulRule>;

StatelessRulesAndCustomActions: AWS.NetworkFirewall.RuleGroup.StatelessRulesAndCustomActions; };

export type StatefulRule = { Action: String;

Header: AWS.NetworkFirewall.RuleGroup.Header;

RuleOptions: List<AWS.NetworkFirewall.RuleGroup.RuleOption>; };

export type RuleGroupName = String;

export type Type = String;

export type Capacity = Integer;

export type Description = String;

export type Tags = List<AWS.NetworkFirewall.RuleGroup.Tag>;

}

export namespace FirewallPolicy {

export type CustomAction = { ActionName: String;

ActionDefinition: AWS.NetworkFirewall.FirewallPolicy.ActionDefinition; };

export type StatelessRuleGroupReference = { ResourceArn: String;

Priority: Integer; };

export type StatefulRuleGroupReference = { ResourceArn: String; };

export type PublishMetricAction = { Dimensions: List<AWS.NetworkFirewall.FirewallPolicy.Dimension>; };

export type ActionDefinition = { PublishMetricAction: AWS.NetworkFirewall.FirewallPolicy.PublishMetricAction; };

export type Dimension = { Value: String; };

export type FirewallPolicy = AWS.NetworkFirewall.FirewallPolicy.FirewallPolicy;

export type FirewallPolicyName = String;

export type Description = String;

export type Tags = List<AWS.NetworkFirewall.FirewallPolicy.Tag>;

}

export namespace LoggingConfiguration {

export type LogDestinationConfig = { LogType: String;

LogDestinationType: String;

LogDestination: Map<String>; };

export type LoggingConfiguration = AWS.NetworkFirewall.LoggingConfiguration.LoggingConfiguration;

export type FirewallName = String;

export type FirewallArn = String;

}

export namespace Firewall {

export type SubnetMapping = { SubnetId: String; };

export type FirewallName = String;

export type FirewallPolicyArn = String;

export type VpcId = String;

export type SubnetMappings = List<AWS.NetworkFirewall.Firewall.SubnetMapping>;

export type DeleteProtection = Boolean;

export type SubnetChangeProtection = Boolean;

export type FirewallPolicyChangeProtection = Boolean;

export type Description = String;

export type Tags = List<AWS.NetworkFirewall.Firewall.Tag>;

}

}

export namespace DataSync {

export namespace Task {

export type FilterRule = { FilterType: String;

Value: String; };

export type Options = AWS.DataSync.Task.Options;

export type TaskSchedule = { ScheduleExpression: String; };

export type Excludes = List<AWS.DataSync.Task.FilterRule>;

export type Tags = List<AWS.DataSync.Task.Tag>;

export type CloudWatchLogGroupArn = String;

export type DestinationLocationArn = String;

export type Name = String;

export type Schedule = AWS.DataSync.Task.TaskSchedule;

export type SourceLocationArn = String;

}

export namespace LocationS3 {

export type S3Config = AWS.DataSync.LocationS3.S3Config;

export type S3BucketArn = String;

export type Subdirectory = String;

export type S3StorageClass = String;

export type Tags = List<AWS.DataSync.LocationS3.Tag>;

}

export namespace LocationNFS {

export type OnPremConfig = AWS.DataSync.LocationNFS.OnPremConfig;

export type MountOptions = AWS.DataSync.LocationNFS.MountOptions;

export type ServerHostname = String;

export type Subdirectory = String;

export type Tags = List<AWS.DataSync.LocationNFS.Tag>;

}

export namespace LocationEFS {

export type Ec2Config = AWS.DataSync.LocationEFS.Ec2Config;

export type EfsFilesystemArn = String;

export type Subdirectory = String;

export type Tags = List<AWS.DataSync.LocationEFS.Tag>;

}

export namespace LocationSMB {

export type MountOptions = AWS.DataSync.LocationSMB.MountOptions;

export type AgentArns = List<String>;

export type Domain = String;

export type Password = String;

export type ServerHostname = String;

export type Subdirectory = String;

export type User = String;

export type Tags = List<AWS.DataSync.LocationSMB.Tag>;

}

export namespace Agent {

export type AgentName = String;

export type ActivationKey = String;

export type SecurityGroupArns = List<String>;

export type SubnetArns = List<String>;

export type VpcEndpointId = String;

export type Tags = List<AWS.DataSync.Agent.Tag>;

}

export namespace LocationFSxWindows {

export type Domain = String;

export type FsxFilesystemArn = String;

export type Password = String;

export type SecurityGroupArns = List<String>;

export type Subdirectory = String;

export type User = String;

export type Tags = List<AWS.DataSync.LocationFSxWindows.Tag>;

}

export namespace LocationObjectStorage {

export type AccessKey = String;

export type AgentArns = List<String>;

export type BucketName = String;

export type SecretKey = String;

export type ServerHostname = String;

export type ServerPort = Integer;

export type ServerProtocol = String;

export type Subdirectory = String;

export type Tags = List<AWS.DataSync.LocationObjectStorage.Tag>;

}

}

export namespace ApiGateway {

export namespace Deployment {

export type MethodSetting = { CacheDataEncrypted: Boolean;

CacheTtlInSeconds: Integer;

CachingEnabled: Boolean;

DataTraceEnabled: Boolean;

HttpMethod: String;

LoggingLevel: String;

MetricsEnabled: Boolean;

ResourcePath: String;

ThrottlingBurstLimit: Integer;

ThrottlingRateLimit: Double; };

export type AccessLogSetting = { DestinationArn: String;

Format: String; };

export type DeploymentCanarySettings = AWS.ApiGateway.Deployment.DeploymentCanarySettings;

export type StageDescription = AWS.ApiGateway.Deployment.StageDescription;

export type CanarySetting = { PercentTraffic: Double;

StageVariableOverrides: Map<String>;

UseStageCache: Boolean; };

export type Description = String;

export type RestApiId = String;

export type StageName = String;

}

export namespace UsagePlan {

export type ApiStage = { ApiId: String;

Stage: String;

Throttle: Map<AWS.ApiGateway.UsagePlan.ThrottleSettings>; };

export type ThrottleSettings = { BurstLimit: Integer;

RateLimit: Double; };

export type QuotaSettings = { Limit: Integer;

Offset: Integer;

Period: String; };

export type ApiStages = List<AWS.ApiGateway.UsagePlan.ApiStage>;

export type Description = String;

export type Quota = AWS.ApiGateway.UsagePlan.QuotaSettings;

export type Tags = List<AWS.ApiGateway.UsagePlan.Tag>;

export type Throttle = AWS.ApiGateway.UsagePlan.ThrottleSettings;

export type UsagePlanName = String;

}

export namespace ApiKey {

export type StageKey = { RestApiId: String;

StageName: String; };

export type CustomerId = String;

export type Description = String;

export type Enabled = Boolean;

export type GenerateDistinctId = Boolean;

export type Name = String;

export type StageKeys = List<AWS.ApiGateway.ApiKey.StageKey>;

export type Tags = List<AWS.ApiGateway.ApiKey.Tag>;

export type Value = String;

}

export namespace DocumentationPart {

export type Location = AWS.ApiGateway.DocumentationPart.Location;

export type Properties = String;

export type RestApiId = String;

}

export namespace Method {

export type MethodResponse = { ResponseModels: Map<String>;

ResponseParameters: Map<Boolean>;

StatusCode: String; };

export type Integration = AWS.ApiGateway.Method.Integration;

export type IntegrationResponse = { ContentHandling: String;

ResponseParameters: Map<String>;

ResponseTemplates: Map<String>;

SelectionPattern: String;

StatusCode: String; };

export type ApiKeyRequired = Boolean;

export type AuthorizationScopes = List<String>;

export type AuthorizationType = String;

export type AuthorizerId = String;

export type HttpMethod = String;

export type MethodResponses = List<AWS.ApiGateway.Method.MethodResponse>;

export type OperationName = String;

export type RequestModels = Map<String>;

export type RequestParameters = Map<Boolean>;

export type RequestValidatorId = String;

export type ResourceId = String;

export type RestApiId = String;

}

export namespace DomainName {

export type MutualTlsAuthentication = AWS.ApiGateway.DomainName.MutualTlsAuthentication;

export type EndpointConfiguration = AWS.ApiGateway.DomainName.EndpointConfiguration;

export type DomainName = String;

export type CertificateArn = String;

export type RegionalCertificateArn = String;

export type SecurityPolicy = String;

export type Tags = List<AWS.ApiGateway.DomainName.Tag>;

}

export namespace RestApi {

export type S3Location = { Bucket: String;

ETag: String;

Key: String;

Version: String; };

export type EndpointConfiguration = AWS.ApiGateway.RestApi.EndpointConfiguration;

export type ApiKeySourceType = String;

export type BinaryMediaTypes = List<String>;

export type Body = Json;

export type BodyS3Location = AWS.ApiGateway.RestApi.S3Location;

export type CloneFrom = String;

export type Description = String;

export type DisableExecuteApiEndpoint = Boolean;

export type FailOnWarnings = Boolean;

export type MinimumCompressionSize = Integer;

export type Mode = String;

export type Name = String;

export type Parameters = Map<String>;

export type Policy = Json;

export type Tags = List<AWS.ApiGateway.RestApi.Tag>;

}

export namespace Stage {

export type CanarySetting = AWS.ApiGateway.Stage.CanarySetting;

export type AccessLogSetting = AWS.ApiGateway.Stage.AccessLogSetting;

export type MethodSetting = { CacheDataEncrypted: Boolean;

CacheTtlInSeconds: Integer;

CachingEnabled: Boolean;

DataTraceEnabled: Boolean;

HttpMethod: String;

LoggingLevel: String;

MetricsEnabled: Boolean;

ResourcePath: String;

ThrottlingBurstLimit: Integer;

ThrottlingRateLimit: Double; };

export type CacheClusterEnabled = Boolean;

export type CacheClusterSize = String;

export type ClientCertificateId = String;

export type DeploymentId = String;

export type Description = String;

export type DocumentationVersion = String;

export type MethodSettings = List<AWS.ApiGateway.Stage.MethodSetting>;

export type RestApiId = String;

export type StageName = String;

export type Tags = List<AWS.ApiGateway.Stage.Tag>;

export type TracingEnabled = Boolean;

export type Variables = Map<String>;

}

export namespace GatewayResponse {

export type ResponseParameters = Map<String>;

export type ResponseTemplates = Map<String>;

export type ResponseType = String;

export type RestApiId = String;

export type StatusCode = String;

}

export namespace UsagePlanKey {

export type KeyId = String;

export type KeyType = String;

export type UsagePlanId = String;

}

export namespace RequestValidator {

export type Name = String;

export type RestApiId = String;

export type ValidateRequestBody = Boolean;

export type ValidateRequestParameters = Boolean;

}

export namespace Resource {

export type ParentId = String;

export type PathPart = String;

export type RestApiId = String;

}

export namespace Account {

export type CloudWatchRoleArn = String;

}

export namespace Authorizer {

export type AuthType = String;

export type AuthorizerCredentials = String;

export type AuthorizerResultTtlInSeconds = Integer;

export type AuthorizerUri = String;

export type IdentitySource = String;

export type IdentityValidationExpression = String;

export type Name = String;

export type ProviderARNs = List<String>;

export type RestApiId = String;

export type Type = String;

}

export namespace Model {

export type ContentType = String;

export type Description = String;

export type Name = String;

export type RestApiId = String;

export type Schema = Json;

}

export namespace BasePathMapping {

export type BasePath = String;

export type DomainName = String;

export type RestApiId = String;

export type Stage = String;

}

export namespace ClientCertificate {

export type Description = String;

export type Tags = List<AWS.ApiGateway.ClientCertificate.Tag>;

}

export namespace DocumentationVersion {

export type Description = String;

export type DocumentationVersion = String;

export type RestApiId = String;

}

export namespace VpcLink {

export type Description = String;

export type TargetArns = List<String>;

export type Name = String;

}

}

export namespace AppConfig {

export namespace Deployment {

export type Tags = List<AWS.AppConfig.Deployment.Tags>;

export type DeploymentStrategyId = String;

export type ConfigurationProfileId = String;

export type EnvironmentId = String;

export type Description = String;

export type ConfigurationVersion = String;

export type ApplicationId = String;

}

export namespace DeploymentStrategy {

export type Tags = List<AWS.AppConfig.DeploymentStrategy.Tags>;

export type ReplicateTo = String;

export type GrowthType = String;

export type Description = String;

export type DeploymentDurationInMinutes = Double;

export type GrowthFactor = Double;

export type FinalBakeTimeInMinutes = Double;

export type Name = String;

}

export namespace Environment {

export type Monitors = List<AWS.AppConfig.Environment.Monitors>;

export type Tags = List<AWS.AppConfig.Environment.Tags>;

export type Description = String;

export type ApplicationId = String;

export type Name = String;

}

export namespace ConfigurationProfile {

export type Validators = List<AWS.AppConfig.ConfigurationProfile.Validators>;

export type Tags = List<AWS.AppConfig.ConfigurationProfile.Tags>;

export type LocationUri = String;

export type Description = String;

export type RetrievalRoleArn = String;

export type ApplicationId = String;

export type Name = String;

}

export namespace Application {

export type Tags = List<AWS.AppConfig.Application.Tags>;

export type Description = String;

export type Name = String;

}

export namespace HostedConfigurationVersion {

export type ConfigurationProfileId = String;

export type Description = String;

export type ContentType = String;

export type LatestVersionNumber = Double;

export type Content = String;

export type ApplicationId = String;

}

}

export namespace DevOpsGuru {

export namespace NotificationChannel {

export type NotificationChannelConfig = { Sns: AWS.DevOpsGuru.NotificationChannel.SnsChannelConfig; };

export type SnsChannelConfig = { TopicArn: String; };

export type Config = AWS.DevOpsGuru.NotificationChannel.NotificationChannelConfig;

}

export namespace ResourceCollection {

export type ResourceCollectionFilter = AWS.DevOpsGuru.ResourceCollection.ResourceCollectionFilter;

export type CloudFormationCollectionFilter = { StackNames: List<String>; };

}

}

export namespace ResourceGroups {

export namespace Group {

export type TagFilter = { Key: String;

Values: List<String>; };

export type Query = { ResourceTypeFilters: List<String>;

StackIdentifier: String;

TagFilters: List<AWS.ResourceGroups.Group.TagFilter>; };

export type ConfigurationParameter = { Name: String;

Values: List<String>; };

export type ConfigurationItem = { Type: String;

Parameters: List<AWS.ResourceGroups.Group.ConfigurationParameter>; };

export type ResourceQuery = AWS.ResourceGroups.Group.ResourceQuery;

export type Name = String;

export type Description = String;

export type Tags = List<AWS.ResourceGroups.Group.Tag>;

export type Configuration = List<AWS.ResourceGroups.Group.ConfigurationItem>;

export type Resources = List<String>;

}

}

export namespace ECR {

export namespace ReplicationConfiguration {

export type ReplicationConfiguration = AWS.ECR.ReplicationConfiguration.ReplicationConfiguration;

export type ReplicationDestination = { Region: String;

RegistryId: String; };

export type ReplicationRule = { Destinations: List<AWS.ECR.ReplicationConfiguration.ReplicationDestination>; };

}

export namespace Repository {

export type LifecyclePolicy = AWS.ECR.Repository.LifecyclePolicy;

export type ImageScanningConfiguration = AWS.ECR.Repository.ImageScanningConfiguration;

export type EncryptionConfiguration = AWS.ECR.Repository.EncryptionConfiguration;

export type RepositoryName = String;

export type RepositoryPolicyText = Json;

export type Tags = List<AWS.ECR.Repository.Tag>;

export type ImageTagMutability = String;

}

export namespace RegistryPolicy {

export type PolicyText = Json;

}

export namespace PublicRepository {

export type RepositoryName = String;

export type RepositoryPolicyText = Json;

export type RepositoryCatalogData = Json;

export type Tags = List<AWS.ECR.PublicRepository.Tag>;

}

}

export namespace EFS {

export namespace AccessPoint {

export type AccessPointTag = { Key: String;

Value: String; };

export type RootDirectory = AWS.EFS.AccessPoint.RootDirectory;

export type CreationInfo = { OwnerUid: String;

OwnerGid: String;

Permissions: String; };

export type PosixUser = AWS.EFS.AccessPoint.PosixUser;

export type ClientToken = String;

export type AccessPointTags = List<AWS.EFS.AccessPoint.AccessPointTag>;

export type FileSystemId = String;

}

export namespace FileSystem {

export type ElasticFileSystemTag = { Key: String;

Value: String; };

export type LifecyclePolicy = { TransitionToIA: String; };

export type BackupPolicy = AWS.EFS.FileSystem.BackupPolicy;

export type Encrypted = Boolean;

export type FileSystemTags = List<AWS.EFS.FileSystem.ElasticFileSystemTag>;

export type KmsKeyId = String;

export type LifecyclePolicies = List<AWS.EFS.FileSystem.LifecyclePolicy>;

export type PerformanceMode = String;

export type ProvisionedThroughputInMibps = Double;

export type ThroughputMode = String;

export type FileSystemPolicy = Json;

export type BypassPolicyLockoutSafetyCheck = Boolean;

export type AvailabilityZoneName = String;

}

export namespace MountTarget {

export type FileSystemId = String;

export type IpAddress = String;

export type SecurityGroups = List<String>;

export type SubnetId = String;

}

}

export namespace StepFunctions {

export namespace Activity {

export type TagsEntry = { Value: String;

Key: String; };

export type Tags = List<AWS.StepFunctions.Activity.TagsEntry>;

export type Name = String;

}

export namespace StateMachine {

export type Definition = AWS.StepFunctions.StateMachine.Definition;

export type LogDestination = { CloudWatchLogsLogGroup: AWS.StepFunctions.StateMachine.CloudWatchLogsLogGroup; };

export type TagsEntry = { Key: String;

Value: String; };

export type LoggingConfiguration = AWS.StepFunctions.StateMachine.LoggingConfiguration;

export type S3Location = { Bucket: String;

Key: String;

Version: String; };

export type CloudWatchLogsLogGroup = { LogGroupArn: String; };

export type TracingConfiguration = AWS.StepFunctions.StateMachine.TracingConfiguration;

export type DefinitionString = String;

export type RoleArn = String;

export type StateMachineName = String;

export type StateMachineType = String;

export type DefinitionS3Location = AWS.StepFunctions.StateMachine.S3Location;

export type DefinitionSubstitutions = Map<String>;

export type Tags = List<AWS.StepFunctions.StateMachine.TagsEntry>;

}

}

export namespace KinesisFirehose {

export namespace DeliveryStream {

export type EncryptionConfiguration = { KMSEncryptionConfig: AWS.KinesisFirehose.DeliveryStream.KMSEncryptionConfig;

NoEncryptionConfig: String; };

export type InputFormatConfiguration = { Deserializer: AWS.KinesisFirehose.DeliveryStream.Deserializer; };

export type HiveJsonSerDe = { TimestampFormats: List<String>; };

export type Processor = { Parameters: List<AWS.KinesisFirehose.DeliveryStream.ProcessorParameter>;

Type: String; };

export type DataFormatConversionConfiguration = { Enabled: Boolean;

InputFormatConfiguration: AWS.KinesisFirehose.DeliveryStream.InputFormatConfiguration;

OutputFormatConfiguration: AWS.KinesisFirehose.DeliveryStream.OutputFormatConfiguration;

SchemaConfiguration: AWS.KinesisFirehose.DeliveryStream.SchemaConfiguration; };

export type SchemaConfiguration = { CatalogId: String;

DatabaseName: String;

Region: String;

RoleARN: String;

TableName: String;

VersionId: String; };

export type SplunkRetryOptions = { DurationInSeconds: Integer; };

export type HttpEndpointRequestConfiguration = { ContentEncoding: String;

CommonAttributes: List<AWS.KinesisFirehose.DeliveryStream.HttpEndpointCommonAttribute>; };

export type HttpEndpointConfiguration = { Url: String;

AccessKey: String;

Name: String; };

export type Serializer = { OrcSerDe: AWS.KinesisFirehose.DeliveryStream.OrcSerDe;

ParquetSerDe: AWS.KinesisFirehose.DeliveryStream.ParquetSerDe; };

export type CopyCommand = { CopyOptions: String;

DataTableColumns: String;

DataTableName: String; };

export type OpenXJsonSerDe = { CaseInsensitive: Boolean;

ColumnToJsonKeyMappings: Map<String>;

ConvertDotsInJsonKeysToUnderscores: Boolean; };

export type OrcSerDe = { BlockSizeBytes: Integer;

BloomFilterColumns: List<String>;

BloomFilterFalsePositiveProbability: Double;

Compression: String;

DictionaryKeyThreshold: Double;

EnablePadding: Boolean;

FormatVersion: String;

PaddingTolerance: Double;

RowIndexStride: Integer;

StripeSizeBytes: Integer; };

export type ElasticsearchBufferingHints = { IntervalInSeconds: Integer;

SizeInMBs: Integer; };

export type SplunkDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.SplunkDestinationConfiguration;

export type CloudWatchLoggingOptions = { Enabled: Boolean;

LogGroupName: String;

LogStreamName: String; };

export type ProcessingConfiguration = { Enabled: Boolean;

Processors: List<AWS.KinesisFirehose.DeliveryStream.Processor>; };

export type BufferingHints = { IntervalInSeconds: Integer;

SizeInMBs: Integer; };

export type ProcessorParameter = { ParameterName: String;

ParameterValue: String; };

export type DeliveryStreamEncryptionConfigurationInput = AWS.KinesisFirehose.DeliveryStream.DeliveryStreamEncryptionConfigurationInput;

export type ElasticsearchRetryOptions = { DurationInSeconds: Integer; };

export type KMSEncryptionConfig = { AWSKMSKeyARN: String; };

export type OutputFormatConfiguration = { Serializer: AWS.KinesisFirehose.DeliveryStream.Serializer; };

export type ElasticsearchDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.ElasticsearchDestinationConfiguration;

export type Deserializer = { HiveJsonSerDe: AWS.KinesisFirehose.DeliveryStream.HiveJsonSerDe;

OpenXJsonSerDe: AWS.KinesisFirehose.DeliveryStream.OpenXJsonSerDe; };

export type KinesisStreamSourceConfiguration = AWS.KinesisFirehose.DeliveryStream.KinesisStreamSourceConfiguration;

export type RedshiftRetryOptions = { DurationInSeconds: Integer; };

export type RetryOptions = { DurationInSeconds: Integer; };

export type ParquetSerDe = { BlockSizeBytes: Integer;

Compression: String;

EnableDictionaryCompression: Boolean;

MaxPaddingBytes: Integer;

PageSizeBytes: Integer;

WriterVersion: String; };

export type S3DestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

export type VpcConfiguration = { RoleARN: String;

SubnetIds: List<String>;

SecurityGroupIds: List<String>; };

export type ExtendedS3DestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.ExtendedS3DestinationConfiguration;

export type RedshiftDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.RedshiftDestinationConfiguration;

export type HttpEndpointCommonAttribute = { AttributeName: String;

AttributeValue: String; };

export type HttpEndpointDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.HttpEndpointDestinationConfiguration;

export type DeliveryStreamName = String;

export type DeliveryStreamType = String;

export type Tags = List<AWS.KinesisFirehose.DeliveryStream.Tag>;

}

}

export namespace AppStream {

export namespace ImageBuilder {

export type VpcConfig = AWS.AppStream.ImageBuilder.VpcConfig;

export type AccessEndpoint = { EndpointType: String;

VpceId: String; };

export type DomainJoinInfo = AWS.AppStream.ImageBuilder.DomainJoinInfo;

export type Description = String;

export type EnableDefaultInternetAccess = Boolean;

export type AppstreamAgentVersion = String;

export type Name = String;

export type ImageName = String;

export type DisplayName = String;

export type IamRoleArn = String;

export type InstanceType = String;

export type Tags = List<AWS.AppStream.ImageBuilder.Tag>;

export type ImageArn = String;

export type AccessEndpoints = List<AWS.AppStream.ImageBuilder.AccessEndpoint>;

}

export namespace Fleet {

export type DomainJoinInfo = AWS.AppStream.Fleet.DomainJoinInfo;

export type VpcConfig = AWS.AppStream.Fleet.VpcConfig;

export type ComputeCapacity = AWS.AppStream.Fleet.ComputeCapacity;

export type Description = String;

export type FleetType = String;

export type EnableDefaultInternetAccess = Boolean;

export type Name = String;

export type ImageName = String;

export type MaxUserDurationInSeconds = Integer;

export type IdleDisconnectTimeoutInSeconds = Integer;

export type DisconnectTimeoutInSeconds = Integer;

export type DisplayName = String;

export type StreamView = String;

export type IamRoleArn = String;

export type InstanceType = String;

export type Tags = List<AWS.AppStream.Fleet.Tag>;

export type ImageArn = String;

}

export namespace Stack {

export type AccessEndpoint = { EndpointType: String;

VpceId: String; };

export type UserSetting = { Action: String;

Permission: String; };

export type ApplicationSettings = AWS.AppStream.Stack.ApplicationSettings;

export type StorageConnector = { Domains: List<String>;

ResourceIdentifier: String;

ConnectorType: String; };

export type Description = String;

export type StorageConnectors = List<AWS.AppStream.Stack.StorageConnector>;

export type DeleteStorageConnectors = Boolean;

export type EmbedHostDomains = List<String>;

export type UserSettings = List<AWS.AppStream.Stack.UserSetting>;

export type AttributesToDelete = List<String>;

export type RedirectURL = String;

export type Name = String;

export type FeedbackURL = String;

export type DisplayName = String;

export type Tags = List<AWS.AppStream.Stack.Tag>;

export type AccessEndpoints = List<AWS.AppStream.Stack.AccessEndpoint>;

}

export namespace DirectoryConfig {

export type ServiceAccountCredentials = AWS.AppStream.DirectoryConfig.ServiceAccountCredentials;

export type OrganizationalUnitDistinguishedNames = List<String>;

export type DirectoryName = String;

}

export namespace User {

export type UserName = String;

export type FirstName = String;

export type MessageAction = String;

export type LastName = String;

export type AuthenticationType = String;

}

export namespace StackUserAssociation {

export type SendEmailNotification = Boolean;

export type UserName = String;

export type StackName = String;

export type AuthenticationType = String;

}

export namespace StackFleetAssociation {

export type FleetName = String;

export type StackName = String;

}

}

export namespace ElasticLoadBalancing {

export namespace LoadBalancer {

export type AccessLoggingPolicy = AWS.ElasticLoadBalancing.LoadBalancer.AccessLoggingPolicy;

export type HealthCheck = AWS.ElasticLoadBalancing.LoadBalancer.HealthCheck;

export type ConnectionSettings = AWS.ElasticLoadBalancing.LoadBalancer.ConnectionSettings;

export type ConnectionDrainingPolicy = AWS.ElasticLoadBalancing.LoadBalancer.ConnectionDrainingPolicy;

export type AppCookieStickinessPolicy = List<AWS.ElasticLoadBalancing.LoadBalancer.AppCookieStickinessPolicy>;

export type LBCookieStickinessPolicy = List<AWS.ElasticLoadBalancing.LoadBalancer.LBCookieStickinessPolicy>;

export type Listeners = List<AWS.ElasticLoadBalancing.LoadBalancer.Listeners>;

export type Policies = List<AWS.ElasticLoadBalancing.LoadBalancer.Policies>;

export type AvailabilityZones = List<String>;

export type CrossZone = Boolean;

export type Instances = List<String>;

export type LoadBalancerName = String;

export type Scheme = String;

export type SecurityGroups = List<String>;

export type Subnets = List<String>;

export type Tags = List<AWS.ElasticLoadBalancing.LoadBalancer.Tag>;

}

}

export namespace Backup {

export namespace BackupPlan {

export type CopyActionResourceType = { Lifecycle: AWS.Backup.BackupPlan.LifecycleResourceType;

DestinationBackupVaultArn: String; };

export type BackupPlanResourceType = { BackupPlanName: String;

AdvancedBackupSettings: List<AWS.Backup.BackupPlan.AdvancedBackupSettingResourceType>;

BackupPlanRule: List<AWS.Backup.BackupPlan.BackupRuleResourceType>; };

export type AdvancedBackupSettingResourceType = { BackupOptions: Json;

ResourceType: String; };

export type LifecycleResourceType = { MoveToColdStorageAfterDays: Double;

DeleteAfterDays: Double; };

export type BackupRuleResourceType = { RuleName: String;

TargetBackupVault: String;

StartWindowMinutes: Double;

CompletionWindowMinutes: Double;

ScheduleExpression: String;

RecoveryPointTags: Map<String>;

CopyActions: List<AWS.Backup.BackupPlan.CopyActionResourceType>;

Lifecycle: AWS.Backup.BackupPlan.LifecycleResourceType;

EnableContinuousBackup: Boolean; };

export type BackupPlan = AWS.Backup.BackupPlan.BackupPlanResourceType;

export type BackupPlanTags = Map<String>;

}

export namespace BackupSelection {

export type ConditionResourceType = { ConditionKey: String;

ConditionValue: String;

ConditionType: String; };

export type BackupSelectionResourceType = { IamRoleArn: String;

ListOfTags: List<AWS.Backup.BackupSelection.ConditionResourceType>;

Resources: List<String>;

SelectionName: String; };

export type BackupPlanId = String;

export type BackupSelection = AWS.Backup.BackupSelection.BackupSelectionResourceType;

}

export namespace BackupVault {

export type NotificationObjectType = { BackupVaultEvents: List<String>;

SNSTopicArn: String; };

export type AccessPolicy = Json;

export type BackupVaultName = String;

export type BackupVaultTags = Map<String>;

export type EncryptionKeyArn = String;

export type Notifications = AWS.Backup.BackupVault.NotificationObjectType;

}

}

export namespace GameLift {

export namespace GameServerGroup {

export type TargetTrackingConfiguration = { TargetValue: Double; };

export type LaunchTemplate = AWS.GameLift.GameServerGroup.LaunchTemplate;

export type AutoScalingPolicy = AWS.GameLift.GameServerGroup.AutoScalingPolicy;

export type InstanceDefinition = { InstanceType: String;

WeightedCapacity: String; };

export type BalancingStrategy = String;

export type DeleteOption = String;

export type GameServerGroupName = String;

export type GameServerProtectionPolicy = String;

export type InstanceDefinitions = List<AWS.GameLift.GameServerGroup.InstanceDefinition>;

export type MaxSize = Double;

export type MinSize = Double;

export type RoleArn = String;

export type Tags = List<AWS.GameLift.GameServerGroup.Tag>;

export type VpcSubnets = List<String>;

}

export namespace Fleet {

export type LocationCapacity = { DesiredEC2Instances: Integer;

MinSize: Integer;

MaxSize: Integer; };

export type CertificateConfiguration = AWS.GameLift.Fleet.CertificateConfiguration;

export type LocationConfiguration = { Location: String;

LocationCapacity: AWS.GameLift.Fleet.LocationCapacity; };

export type IpPermission = { FromPort: Integer;

IpRange: String;

Protocol: String;

ToPort: Integer; };

export type ServerProcess = { ConcurrentExecutions: Integer;

LaunchPath: String;

Parameters: String; };

export type ResourceCreationLimitPolicy = AWS.GameLift.Fleet.ResourceCreationLimitPolicy;

export type RuntimeConfiguration = AWS.GameLift.Fleet.RuntimeConfiguration;

export type Description = String;

export type DesiredEC2Instances = Integer;

export type EC2InboundPermissions = List<AWS.GameLift.Fleet.IpPermission>;

export type EC2InstanceType = String;

export type FleetType = String;

export type InstanceRoleARN = String;

export type Locations = List<AWS.GameLift.Fleet.LocationConfiguration>;

export type MaxSize = Integer;

export type MetricGroups = List<String>;

export type MinSize = Integer;

export type Name = String;

export type NewGameSessionProtectionPolicy = String;

export type PeerVpcAwsAccountId = String;

export type PeerVpcId = String;

export type BuildId = String;

export type ScriptId = String;

}

export namespace Build {

export type S3Location = { Bucket: String;

Key: String;

ObjectVersion: String;

RoleArn: String; };

export type Name = String;

export type OperatingSystem = String;

export type StorageLocation = AWS.GameLift.Build.S3Location;

export type Version = String;

}

export namespace Alias {

export type RoutingStrategy = AWS.GameLift.Alias.RoutingStrategy;

export type Description = String;

export type Name = String;

}

export namespace Script {

export type S3Location = { ObjectVersion: String;

Bucket: String;

Key: String;

RoleArn: String; };

export type Version = String;

export type StorageLocation = AWS.GameLift.Script.S3Location;

export type Name = String;

}

export namespace GameSessionQueue {

export type PlayerLatencyPolicy = { PolicyDurationSeconds: Integer;

MaximumIndividualPlayerLatencyMilliseconds: Integer; };

export type Destination = { DestinationArn: String; };

export type FilterConfiguration = AWS.GameLift.GameSessionQueue.FilterConfiguration;

export type PriorityConfiguration = AWS.GameLift.GameSessionQueue.PriorityConfiguration;

export type TimeoutInSeconds = Integer;

export type PlayerLatencyPolicies = List<AWS.GameLift.GameSessionQueue.PlayerLatencyPolicy>;

export type Destinations = List<AWS.GameLift.GameSessionQueue.Destination>;

export type NotificationTarget = String;

export type CustomEventData = String;

export type Name = String;

}

export namespace MatchmakingConfiguration {

export type GameProperty = { Value: String;

Key: String; };

export type GameProperties = List<AWS.GameLift.MatchmakingConfiguration.GameProperty>;

export type GameSessionData = String;

export type Description = String;

export type AcceptanceTimeoutSeconds = Integer;

export type NotificationTarget = String;

export type CustomEventData = String;

export type Name = String;

export type AdditionalPlayerCount = Integer;

export type BackfillMode = String;

export type RequestTimeoutSeconds = Integer;

export type AcceptanceRequired = Boolean;

export type FlexMatchMode = String;

export type RuleSetName = String;

export type GameSessionQueueArns = List<String>;

}

export namespace MatchmakingRuleSet {

export type RuleSetBody = String;

export type Name = String;

}

}

export namespace RDS {

export namespace DBProxyTargetGroup {

export type ConnectionPoolConfigurationInfoFormat = { MaxConnectionsPercent: Integer;

MaxIdleConnectionsPercent: Integer;

ConnectionBorrowTimeout: Integer;

SessionPinningFilters: List<String>;

InitQuery: String; };

export type DBProxyName = String;

export type TargetGroupName = String;

export type ConnectionPoolConfigurationInfo = AWS.RDS.DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat;

export type DBInstanceIdentifiers = List<String>;

export type DBClusterIdentifiers = List<String>;

}

export namespace DBInstance {

export type DBInstanceRole = { FeatureName: String;

RoleArn: String; };

export type ProcessorFeature = { Name: String;

Value: String; };

export type AllocatedStorage = String;

export type AllowMajorVersionUpgrade = Boolean;

export type AssociatedRoles = List<AWS.RDS.DBInstance.DBInstanceRole>;

export type AutoMinorVersionUpgrade = Boolean;

export type AvailabilityZone = String;

export type BackupRetentionPeriod = Integer;

export type CACertificateIdentifier = String;

export type CharacterSetName = String;

export type CopyTagsToSnapshot = Boolean;

export type DBClusterIdentifier = String;

export type DBInstanceClass = String;

export type DBInstanceIdentifier = String;

export type DBName = String;

export type DBParameterGroupName = String;

export type DBSecurityGroups = List<String>;

export type DBSnapshotIdentifier = String;

export type DBSubnetGroupName = String;

export type DeleteAutomatedBackups = Boolean;

export type DeletionProtection = Boolean;

export type Domain = String;

export type DomainIAMRoleName = String;

export type EnableCloudwatchLogsExports = List<String>;

export type EnableIAMDatabaseAuthentication = Boolean;

export type EnablePerformanceInsights = Boolean;

export type Engine = String;

export type EngineVersion = String;

export type Iops = Integer;

export type KmsKeyId = String;

export type LicenseModel = String;

export type MasterUserPassword = String;

export type MasterUsername = String;

export type MaxAllocatedStorage = Integer;

export type MonitoringInterval = Integer;

export type MonitoringRoleArn = String;

export type MultiAZ = Boolean;

export type OptionGroupName = String;

export type PerformanceInsightsKMSKeyId = String;

export type PerformanceInsightsRetentionPeriod = Integer;

export type Port = String;

export type PreferredBackupWindow = String;

export type PreferredMaintenanceWindow = String;

export type ProcessorFeatures = List<AWS.RDS.DBInstance.ProcessorFeature>;

export type PromotionTier = Integer;

export type PubliclyAccessible = Boolean;

export type SourceDBInstanceIdentifier = String;

export type SourceRegion = String;

export type StorageEncrypted = Boolean;

export type StorageType = String;

export type Tags = List<AWS.RDS.DBInstance.Tag>;

export type Timezone = String;

export type UseDefaultProcessorFeatures = Boolean;

export type VPCSecurityGroups = List<String>;

}

export namespace DBCluster {

export type ScalingConfiguration = AWS.RDS.DBCluster.ScalingConfiguration;

export type DBClusterRole = { FeatureName: String;

RoleArn: String; };

export type AssociatedRoles = List<AWS.RDS.DBCluster.DBClusterRole>;

export type AvailabilityZones = List<String>;

export type BacktrackWindow = Long;

export type BackupRetentionPeriod = Integer;

export type CopyTagsToSnapshot = Boolean;

export type DBClusterIdentifier = String;

export type DBClusterParameterGroupName = String;

export type DBSubnetGroupName = String;

export type DatabaseName = String;

export type DeletionProtection = Boolean;

export type EnableCloudwatchLogsExports = List<String>;

export type EnableHttpEndpoint = Boolean;

export type EnableIAMDatabaseAuthentication = Boolean;

export type Engine = String;

export type EngineMode = String;

export type EngineVersion = String;

export type GlobalClusterIdentifier = String;

export type KmsKeyId = String;

export type MasterUserPassword = String;

export type MasterUsername = String;

export type Port = Integer;

export type PreferredBackupWindow = String;

export type PreferredMaintenanceWindow = String;

export type ReplicationSourceIdentifier = String;

export type RestoreType = String;

export type SnapshotIdentifier = String;

export type SourceDBClusterIdentifier = String;

export type SourceRegion = String;

export type StorageEncrypted = Boolean;

export type Tags = List<AWS.RDS.DBCluster.Tag>;

export type UseLatestRestorableTime = Boolean;

export type VpcSecurityGroupIds = List<String>;

}

export namespace DBSecurityGroup {

export type Ingress = { CIDRIP: String;

EC2SecurityGroupId: String;

EC2SecurityGroupName: String;

EC2SecurityGroupOwnerId: String; };

export type DBSecurityGroupIngress = List<AWS.RDS.DBSecurityGroup.Ingress>;

export type EC2VpcId = String;

export type GroupDescription = String;

export type Tags = List<AWS.RDS.DBSecurityGroup.Tag>;

}

export namespace DBProxy {

export type TagFormat = { Key: String;

Value: String; };

export type AuthFormat = { AuthScheme: String;

Description: String;

IAMAuth: String;

SecretArn: String;

UserName: String; };

export type Auth = List<AWS.RDS.DBProxy.AuthFormat>;

export type DBProxyName = String;

export type DebugLogging = Boolean;

export type EngineFamily = String;

export type IdleClientTimeout = Integer;

export type RequireTLS = Boolean;

export type RoleArn = String;

export type Tags = List<AWS.RDS.DBProxy.TagFormat>;

export type VpcSecurityGroupIds = List<String>;

export type VpcSubnetIds = List<String>;

}

export namespace DBProxyEndpoint {

export type TagFormat = { Key: String;

Value: String; };

export type DBProxyEndpointName = String;

export type DBProxyName = String;

export type VpcSecurityGroupIds = List<String>;

export type VpcSubnetIds = List<String>;

export type TargetRole = String;

export type Tags = List<AWS.RDS.DBProxyEndpoint.TagFormat>;

}

export namespace OptionGroup {

export type OptionSetting = { Name: String;

Value: String; };

export type OptionConfiguration = { DBSecurityGroupMemberships: List<String>;

OptionName: String;

OptionSettings: List<AWS.RDS.OptionGroup.OptionSetting>;

OptionVersion: String;

Port: Integer;

VpcSecurityGroupMemberships: List<String>; };

export type EngineName = String;

export type MajorEngineVersion = String;

export type OptionConfigurations = List<AWS.RDS.OptionGroup.OptionConfiguration>;

export type OptionGroupDescription = String;

export type Tags = List<AWS.RDS.OptionGroup.Tag>;

}

export namespace DBSubnetGroup {

export type DBSubnetGroupDescription = String;

export type DBSubnetGroupName = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.RDS.DBSubnetGroup.Tag>;

}

export namespace GlobalCluster {

export type Engine = String;

export type EngineVersion = String;

export type DeletionProtection = Boolean;

export type GlobalClusterIdentifier = String;

export type SourceDBClusterIdentifier = String;

export type StorageEncrypted = Boolean;

}

export namespace DBSecurityGroupIngress {

export type CIDRIP = String;

export type DBSecurityGroupName = String;

export type EC2SecurityGroupId = String;

export type EC2SecurityGroupName = String;

export type EC2SecurityGroupOwnerId = String;

}

export namespace EventSubscription {

export type Enabled = Boolean;

export type EventCategories = List<String>;

export type SnsTopicArn = String;

export type SourceIds = List<String>;

export type SourceType = String;

}

export namespace DBClusterParameterGroup {

export type Description = String;

export type Family = String;

export type Parameters = Json;

export type Tags = List<AWS.RDS.DBClusterParameterGroup.Tag>;

}

export namespace DBParameterGroup {

export type Description = String;

export type Family = String;

export type Parameters = Map<String>;

export type Tags = List<AWS.RDS.DBParameterGroup.Tag>;

}

}

export namespace DynamoDB {

export namespace Table {

export type LocalSecondaryIndex = { IndexName: String;

KeySchema: List<AWS.DynamoDB.Table.KeySchema>;

Projection: AWS.DynamoDB.Table.Projection; };

export type PointInTimeRecoverySpecification = AWS.DynamoDB.Table.PointInTimeRecoverySpecification;

export type KinesisStreamSpecification = AWS.DynamoDB.Table.KinesisStreamSpecification;

export type AttributeDefinition = { AttributeName: String;

AttributeType: String; };

export type GlobalSecondaryIndex = { ContributorInsightsSpecification: AWS.DynamoDB.Table.ContributorInsightsSpecification;

IndexName: String;

KeySchema: List<AWS.DynamoDB.Table.KeySchema>;

Projection: AWS.DynamoDB.Table.Projection;

ProvisionedThroughput: AWS.DynamoDB.Table.ProvisionedThroughput; };

export type ContributorInsightsSpecification = AWS.DynamoDB.Table.ContributorInsightsSpecification;

export type KeySchema = List<AWS.DynamoDB.Table.KeySchema>;

export type SSESpecification = AWS.DynamoDB.Table.SSESpecification;

export type TimeToLiveSpecification = AWS.DynamoDB.Table.TimeToLiveSpecification;

export type ProvisionedThroughput = AWS.DynamoDB.Table.ProvisionedThroughput;

export type Projection = { NonKeyAttributes: List<String>;

ProjectionType: String; };

export type StreamSpecification = AWS.DynamoDB.Table.StreamSpecification;

export type AttributeDefinitions = List<AWS.DynamoDB.Table.AttributeDefinition>;

export type BillingMode = String;

export type GlobalSecondaryIndexes = List<AWS.DynamoDB.Table.GlobalSecondaryIndex>;

export type LocalSecondaryIndexes = List<AWS.DynamoDB.Table.LocalSecondaryIndex>;

export type TableName = String;

export type Tags = List<AWS.DynamoDB.Table.Tag>;

}

export namespace GlobalTable {

export type PointInTimeRecoverySpecification = { PointInTimeRecoveryEnabled: Boolean; };

export type ContributorInsightsSpecification = { Enabled: Boolean; };

export type CapacityAutoScalingSettings = { MinCapacity: Integer;

MaxCapacity: Integer;

SeedCapacity: Integer;

TargetTrackingScalingPolicyConfiguration: AWS.DynamoDB.GlobalTable.TargetTrackingScalingPolicyConfiguration; };

export type ReadProvisionedThroughputSettings = { ReadCapacityUnits: Integer;

ReadCapacityAutoScalingSettings: AWS.DynamoDB.GlobalTable.CapacityAutoScalingSettings; };

export type LocalSecondaryIndex = { IndexName: String;

KeySchema: List<AWS.DynamoDB.GlobalTable.KeySchema>;

Projection: AWS.DynamoDB.GlobalTable.Projection; };

export type TargetTrackingScalingPolicyConfiguration = { DisableScaleIn: Boolean;

ScaleInCooldown: Integer;

ScaleOutCooldown: Integer;

TargetValue: Double; };

export type ReplicaSpecification = { Region: String;

GlobalSecondaryIndexes: List<AWS.DynamoDB.GlobalTable.ReplicaGlobalSecondaryIndexSpecification>;

ContributorInsightsSpecification: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

PointInTimeRecoverySpecification: AWS.DynamoDB.GlobalTable.PointInTimeRecoverySpecification;

SSESpecification: AWS.DynamoDB.GlobalTable.ReplicaSSESpecification;

Tags: List<AWS.DynamoDB.GlobalTable.Tag>;

ReadProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings; };

export type GlobalSecondaryIndex = { IndexName: String;

KeySchema: List<AWS.DynamoDB.GlobalTable.KeySchema>;

Projection: AWS.DynamoDB.GlobalTable.Projection;

WriteProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings; };

export type KeySchema = List<AWS.DynamoDB.GlobalTable.KeySchema>;

export type StreamSpecification = AWS.DynamoDB.GlobalTable.StreamSpecification;

export type Projection = { NonKeyAttributes: List<String>;

ProjectionType: String; };

export type ReplicaGlobalSecondaryIndexSpecification = { IndexName: String;

ContributorInsightsSpecification: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

ReadProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings; };

export type AttributeDefinition = { AttributeName: String;

AttributeType: String; };

export type SSESpecification = AWS.DynamoDB.GlobalTable.SSESpecification;

export type WriteProvisionedThroughputSettings = AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings;

export type TimeToLiveSpecification = AWS.DynamoDB.GlobalTable.TimeToLiveSpecification;

export type ReplicaSSESpecification = { KMSMasterKeyId: String; };

export type AttributeDefinitions = List<AWS.DynamoDB.GlobalTable.AttributeDefinition>;

export type BillingMode = String;

export type GlobalSecondaryIndexes = List<AWS.DynamoDB.GlobalTable.GlobalSecondaryIndex>;

export type LocalSecondaryIndexes = List<AWS.DynamoDB.GlobalTable.LocalSecondaryIndex>;

export type Replicas = List<AWS.DynamoDB.GlobalTable.ReplicaSpecification>;

export type TableName = String;

}

}

export namespace EKS {

export namespace Cluster {

export type Provider = { KeyArn: String; };

export type EncryptionConfig = List<AWS.EKS.Cluster.EncryptionConfig>;

export type KubernetesNetworkConfig = AWS.EKS.Cluster.KubernetesNetworkConfig;

export type ResourcesVpcConfig = AWS.EKS.Cluster.ResourcesVpcConfig;

export type Version = String;

export type RoleArn = String;

export type Name = String;

}

export namespace FargateProfile {

export type Label = { Key: String;

Value: String; };

export type Selector = { Namespace: String;

Labels: List<AWS.EKS.FargateProfile.Label>; };

export type ClusterName = String;

export type FargateProfileName = String;

export type PodExecutionRoleArn = String;

export type Subnets = List<String>;

export type Selectors = List<AWS.EKS.FargateProfile.Selector>;

export type Tags = List<AWS.EKS.FargateProfile.Tag>;

}

export namespace Nodegroup {

export type Taint = { Value: String;

Effect: String;

Key: String; };

export type LaunchTemplateSpecification = { Version: String;

Id: String;

Name: String; };

export type UpdateConfig = AWS.EKS.Nodegroup.UpdateConfig;

export type ScalingConfig = AWS.EKS.Nodegroup.ScalingConfig;

export type RemoteAccess = AWS.EKS.Nodegroup.RemoteAccess;

export type Labels = Json;

export type Taints = List<AWS.EKS.Nodegroup.Taint>;

export type ReleaseVersion = String;

export type CapacityType = String;

export type NodegroupName = String;

export type Subnets = List<String>;

export type NodeRole = String;

export type AmiType = String;

export type ForceUpdateEnabled = Boolean;

export type Version = String;

export type LaunchTemplate = AWS.EKS.Nodegroup.LaunchTemplateSpecification;

export type DiskSize = Double;

export type ClusterName = String;

export type InstanceTypes = List<String>;

export type Tags = Json;

}

export namespace Addon {

export type ClusterName = String;

export type AddonName = String;

export type AddonVersion = String;

export type ResolveConflicts = String;

export type ServiceAccountRoleArn = String;

export type Tags = List<AWS.EKS.Addon.Tag>;

}

}

export namespace DLM {

export namespace LifecyclePolicy {

export type FastRestoreRule = { IntervalUnit: String;

AvailabilityZones: List<String>;

Count: Integer;

Interval: Integer; };

export type EventSource = { Type: String;

Parameters: AWS.DLM.LifecyclePolicy.EventParameters; };

export type EventParameters = { EventType: String;

SnapshotOwner: List<String>;

DescriptionRegex: String; };

export type Action = { CrossRegionCopy: List<AWS.DLM.LifecyclePolicy.CrossRegionCopyAction>;

Name: String; };

export type CreateRule = { IntervalUnit: String;

Times: List<String>;

CronExpression: String;

Interval: Integer;

Location: String; };

export type RetainRule = { IntervalUnit: String;

Count: Integer;

Interval: Integer; };

export type PolicyDetails = AWS.DLM.LifecyclePolicy.PolicyDetails;

export type Parameters = { ExcludeBootVolume: Boolean;

NoReboot: Boolean; };

export type EncryptionConfiguration = { Encrypted: Boolean;

CmkArn: String; };

export type Schedule = { ShareRules: List<AWS.DLM.LifecyclePolicy.ShareRule>;

TagsToAdd: List<AWS.DLM.LifecyclePolicy.Tag>;

CreateRule: AWS.DLM.LifecyclePolicy.CreateRule;

VariableTags: List<AWS.DLM.LifecyclePolicy.Tag>;

FastRestoreRule: AWS.DLM.LifecyclePolicy.FastRestoreRule;

RetainRule: AWS.DLM.LifecyclePolicy.RetainRule;

CrossRegionCopyRules: List<AWS.DLM.LifecyclePolicy.CrossRegionCopyRule>;

Name: String;

CopyTags: Boolean; };

export type CrossRegionCopyRetainRule = { IntervalUnit: String;

Interval: Integer; };

export type CrossRegionCopyRule = { TargetRegion: String;

Target: String;

Encrypted: Boolean;

CmkArn: String;

RetainRule: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule;

CopyTags: Boolean; };

export type CrossRegionCopyAction = { Target: String;

EncryptionConfiguration: AWS.DLM.LifecyclePolicy.EncryptionConfiguration;

RetainRule: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule; };

export type ShareRule = { TargetAccounts: List<String>;

UnshareIntervalUnit: String;

UnshareInterval: Integer; };

export type ExecutionRoleArn = String;

export type Description = String;

export type State = String;

export type Tags = List<AWS.DLM.LifecyclePolicy.Tag>;

}

}

export namespace GuardDuty {

export namespace Filter {

export type FindingCriteria = AWS.GuardDuty.Filter.FindingCriteria;

export type Condition = { Lt: Integer;

Gte: Integer;

Neq: List<String>;

Eq: List<String>;

Lte: Integer; };

export type Action = String;

export type Description = String;

export type DetectorId = String;

export type Rank = Integer;

export type Name = String;

}

export namespace Detector {

export type CFNDataSourceConfigurations = { S3Logs: AWS.GuardDuty.Detector.CFNS3LogsConfiguration; };

export type CFNS3LogsConfiguration = { Enable: Boolean; };

export type FindingPublishingFrequency = String;

export type DataSources = AWS.GuardDuty.Detector.CFNDataSourceConfigurations;

export type Enable = Boolean;

}

export namespace ThreatIntelSet {

export type Format = String;

export type Activate = Boolean;

export type DetectorId = String;

export type Name = String;

export type Location = String;

}

export namespace Member {

export type Status = String;

export type MemberId = String;

export type Email = String;

export type Message = String;

export type DisableEmailNotification = Boolean;

export type DetectorId = String;

}

export namespace Master {

export type DetectorId = String;

export type MasterId = String;

export type InvitationId = String;

}

export namespace IPSet {

export type Format = String;

export type Activate = Boolean;

export type DetectorId = String;

export type Name = String;

export type Location = String;

}

}

export namespace CloudWatch {

export namespace Alarm {

export type MetricStat = { Metric: AWS.CloudWatch.Alarm.Metric;

Period: Integer;

Stat: String;

Unit: String; };

export type MetricDataQuery = { Expression: String;

Id: String;

Label: String;

MetricStat: AWS.CloudWatch.Alarm.MetricStat;

Period: Integer;

ReturnData: Boolean; };

export type Dimension = { Name: String;

Value: String; };

export type Metric = { Dimensions: List<AWS.CloudWatch.Alarm.Dimension>;

MetricName: String;

Namespace: String; };

export type ActionsEnabled = Boolean;

export type AlarmActions = List<String>;

export type AlarmDescription = String;

export type AlarmName = String;

export type ComparisonOperator = String;

export type DatapointsToAlarm = Integer;

export type Dimensions = List<AWS.CloudWatch.Alarm.Dimension>;

export type EvaluateLowSampleCountPercentile = String;

export type EvaluationPeriods = Integer;

export type ExtendedStatistic = String;

export type InsufficientDataActions = List<String>;

export type MetricName = String;

export type Metrics = List<AWS.CloudWatch.Alarm.MetricDataQuery>;

export type Namespace = String;

export type OKActions = List<String>;

export type Period = Integer;

export type Statistic = String;

export type Threshold = Double;

export type ThresholdMetricId = String;

export type TreatMissingData = String;

export type Unit = String;

}

export namespace MetricStream {

export type MetricStreamFilter = { Namespace: String; };

export type ExcludeFilters = List<AWS.CloudWatch.MetricStream.MetricStreamFilter>;

export type FirehoseArn = String;

export type IncludeFilters = List<AWS.CloudWatch.MetricStream.MetricStreamFilter>;

export type Name = String;

export type RoleArn = String;

export type OutputFormat = String;

export type Tags = List<AWS.CloudWatch.MetricStream.Tag>;

}

export namespace AnomalyDetector {

export type Range = { EndTime: String;

StartTime: String; };

export type Dimension = { Value: String;

Name: String; };

export type Configuration = AWS.CloudWatch.AnomalyDetector.Configuration;

export type MetricName = String;

export type Stat = String;

export type Dimensions = List<AWS.CloudWatch.AnomalyDetector.Dimension>;

export type Namespace = String;

}

export namespace InsightRule {

export type Tags = AWS.CloudWatch.InsightRule.Tags;

export type RuleState = String;

export type RuleBody = String;

export type RuleName = String;

}

export namespace CompositeAlarm {

export type AlarmName = String;

export type AlarmRule = String;

export type AlarmDescription = String;

export type ActionsEnabled = Boolean;

export type OKActions = List<String>;

export type AlarmActions = List<String>;

export type InsufficientDataActions = List<String>;

}

export namespace Dashboard {

export type DashboardName = String;

export type DashboardBody = String;

}

}

export namespace SSM {

export namespace Document {

export type DocumentRequires = { Name: String;

Version: String; };

export type AttachmentsSource = { Key: String;

Values: List<String>;

Name: String; };

export type Content = Json;

export type Attachments = List<AWS.SSM.Document.AttachmentsSource>;

export type Name = String;

export type VersionName = String;

export type DocumentType = String;

export type DocumentFormat = String;

export type TargetType = String;

export type Tags = List<AWS.SSM.Document.Tag>;

export type Requires = List<AWS.SSM.Document.DocumentRequires>;

}

export namespace PatchBaseline {

export type PatchStringDate = String;

export type PatchFilter = { Values: List<String>;

Key: String; };

export type Rule = { ApproveUntilDate: AWS.SSM.PatchBaseline.PatchStringDate;

EnableNonSecurity: Boolean;

PatchFilterGroup: AWS.SSM.PatchBaseline.PatchFilterGroup;

ApproveAfterDays: Integer;

ComplianceLevel: String; };

export type PatchFilterGroup = { PatchFilters: List<AWS.SSM.PatchBaseline.PatchFilter>; };

export type PatchSource = { Products: List<String>;

Configuration: String;

Name: String; };

export type RuleGroup = { PatchRules: List<AWS.SSM.PatchBaseline.Rule>; };

export type OperatingSystem = String;

export type Description = String;

export type ApprovalRules = AWS.SSM.PatchBaseline.RuleGroup;

export type Sources = List<AWS.SSM.PatchBaseline.PatchSource>;

export type Name = String;

export type RejectedPatches = List<String>;

export type ApprovedPatches = List<String>;

export type RejectedPatchesAction = String;

export type PatchGroups = List<String>;

export type ApprovedPatchesComplianceLevel = String;

export type ApprovedPatchesEnableNonSecurity = Boolean;

export type GlobalFilters = AWS.SSM.PatchBaseline.PatchFilterGroup;

export type Tags = List<AWS.SSM.PatchBaseline.Tag>;

}

export namespace MaintenanceWindowTask {

export type LoggingInfo = AWS.SSM.MaintenanceWindowTask.LoggingInfo;

export type Target = { Values: List<String>;

Key: String; };

export type NotificationConfig = { NotificationArn: String;

NotificationType: String;

NotificationEvents: List<String>; };

export type MaintenanceWindowAutomationParameters = { Parameters: Json;

DocumentVersion: String; };

export type TaskInvocationParameters = AWS.SSM.MaintenanceWindowTask.TaskInvocationParameters;

export type MaintenanceWindowStepFunctionsParameters = { Input: String;

Name: String; };

export type MaintenanceWindowRunCommandParameters = { TimeoutSeconds: Integer;

Comment: String;

OutputS3KeyPrefix: String;

Parameters: Json;

DocumentHashType: String;

ServiceRoleArn: String;

NotificationConfig: AWS.SSM.MaintenanceWindowTask.NotificationConfig;

OutputS3BucketName: String;

DocumentHash: String; };

export type MaintenanceWindowLambdaParameters = { ClientContext: String;

Qualifier: String;

Payload: String; };

export type MaxErrors = String;

export type Description = String;

export type ServiceRoleArn = String;

export type Priority = Integer;

export type MaxConcurrency = String;

export type Targets = List<AWS.SSM.MaintenanceWindowTask.Target>;

export type Name = String;

export type TaskArn = String;

export type WindowId = String;

export type TaskParameters = Json;

export type TaskType = String;

}

export namespace Association {

export type InstanceAssociationOutputLocation = { S3Location: AWS.SSM.Association.S3OutputLocation; };

export type Target = { Key: String;

Values: List<String>; };

export type S3OutputLocation = { OutputS3Region: String;

OutputS3BucketName: String;

OutputS3KeyPrefix: String; };

export type AssociationName = String;

export type DocumentVersion = String;

export type InstanceId = String;

export type Name = String;

export type Parameters = Map<Json>;

export type ScheduleExpression = String;

export type Targets = List<AWS.SSM.Association.Target>;

export type OutputLocation = AWS.SSM.Association.InstanceAssociationOutputLocation;

export type AutomationTargetParameterName = String;

export type MaxErrors = String;

export type MaxConcurrency = String;

export type ComplianceSeverity = String;

export type SyncCompliance = String;

export type WaitForSuccessTimeoutSeconds = Integer;

export type ApplyOnlyAtCronInterval = Boolean;

export type CalendarNames = List<String>;

}

export namespace ResourceDataSync {

export type AwsOrganizationsSource = { OrganizationalUnits: List<String>;

OrganizationSourceType: String; };

export type SyncSource = AWS.SSM.ResourceDataSync.SyncSource;

export type S3Destination = AWS.SSM.ResourceDataSync.S3Destination;

export type KMSKeyArn = String;

export type BucketName = String;

export type BucketRegion = String;

export type SyncFormat = String;

export type SyncName = String;

export type SyncType = String;

export type BucketPrefix = String;

}

export namespace MaintenanceWindowTarget {

export type Targets = List<AWS.SSM.MaintenanceWindowTarget.Targets>;

export type OwnerInformation = String;

export type Description = String;

export type WindowId = String;

export type ResourceType = String;

export type Name = String;

}

export namespace MaintenanceWindow {

export type StartDate = String;

export type Description = String;

export type AllowUnassociatedTargets = Boolean;

export type Cutoff = Integer;

export type Schedule = String;

export type Duration = Integer;

export type ScheduleOffset = Integer;

export type EndDate = String;

export type Tags = List<AWS.SSM.MaintenanceWindow.Tag>;

export type Name = String;

export type ScheduleTimezone = String;

}

export namespace Parameter {

export type Type = String;

export type Description = String;

export type Policies = String;

export type AllowedPattern = String;

export type Tier = String;

export type Value = String;

export type DataType = String;

export type Tags = Json;

export type Name = String;

}

}

export namespace Redshift {

export namespace Cluster {

export type Endpoint = AWS.Redshift.Cluster.Endpoint;

export type LoggingProperties = AWS.Redshift.Cluster.LoggingProperties;

export type ClusterIdentifier = String;

export type MasterUsername = String;

export type MasterUserPassword = String;

export type NodeType = String;

export type AllowVersionUpgrade = Boolean;

export type AutomatedSnapshotRetentionPeriod = Integer;

export type AvailabilityZone = String;

export type ClusterParameterGroupName = String;

export type ClusterType = String;

export type ClusterVersion = String;

export type ClusterSubnetGroupName = String;

export type DBName = String;

export type ElasticIp = String;

export type Encrypted = Boolean;

export type HsmClientCertificateIdentifier = String;

export type HsmConfigurationIdentifier = String;

export type KmsKeyId = String;

export type NumberOfNodes = Integer;

export type Port = Integer;

export type PreferredMaintenanceWindow = String;

export type PubliclyAccessible = Boolean;

export type ClusterSecurityGroups = List<String>;

export type IamRoles = List<String>;

export type Tags = List<AWS.Redshift.Cluster.Tag>;

export type VpcSecurityGroupIds = List<String>;

export type SnapshotClusterIdentifier = String;

export type SnapshotIdentifier = String;

export type OwnerAccount = String;

}

export namespace ClusterParameterGroup {

export type Parameter = { ParameterName: String;

ParameterValue: String; };

export type Description = String;

export type ParameterGroupFamily = String;

export type Parameters = List<AWS.Redshift.ClusterParameterGroup.Parameter>;

export type Tags = List<AWS.Redshift.ClusterParameterGroup.Tag>;

}

export namespace ClusterSubnetGroup {

export type Description = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.Redshift.ClusterSubnetGroup.Tag>;

}

export namespace ClusterSecurityGroup {

export type Description = String;

export type Tags = List<AWS.Redshift.ClusterSecurityGroup.Tag>;

}

export namespace ClusterSecurityGroupIngress {

export type CIDRIP = String;

export type ClusterSecurityGroupName = String;

export type EC2SecurityGroupName = String;

export type EC2SecurityGroupOwnerId = String;

}

}

export namespace ElasticLoadBalancingV2 {

export namespace ListenerRule {

export type SourceIpConfig = { Values: List<String>; };

export type AuthenticateOidcConfig = { OnUnauthenticatedRequest: String;

TokenEndpoint: String;

SessionTimeout: Integer;

Scope: String;

Issuer: String;

ClientSecret: String;

UserInfoEndpoint: String;

ClientId: String;

AuthorizationEndpoint: String;

SessionCookieName: String;

UseExistingClientSecret: Boolean;

AuthenticationRequestExtraParams: Map<String>; };

export type AuthenticateCognitoConfig = { OnUnauthenticatedRequest: String;

UserPoolClientId: String;

UserPoolDomain: String;

SessionTimeout: Integer;

Scope: String;

SessionCookieName: String;

UserPoolArn: String;

AuthenticationRequestExtraParams: Map<String>; };

export type QueryStringKeyValue = { Value: String;

Key: String; };

export type QueryStringConfig = { Values: List<AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringKeyValue>; };

export type PathPatternConfig = { Values: List<String>; };

export type RuleCondition = { Field: String;

Values: List<String>;

HttpRequestMethodConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HttpRequestMethodConfig;

PathPatternConfig: AWS.ElasticLoadBalancingV2.ListenerRule.PathPatternConfig;

HttpHeaderConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HttpHeaderConfig;

SourceIpConfig: AWS.ElasticLoadBalancingV2.ListenerRule.SourceIpConfig;

HostHeaderConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HostHeaderConfig;

QueryStringConfig: AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringConfig; };

export type RedirectConfig = { Path: String;

Query: String;

Port: String;

Host: String;

Protocol: String;

StatusCode: String; };

export type HostHeaderConfig = { Values: List<String>; };

export type FixedResponseConfig = { ContentType: String;

StatusCode: String;

MessageBody: String; };

export type Action = { Order: Integer;

TargetGroupArn: String;

FixedResponseConfig: AWS.ElasticLoadBalancingV2.ListenerRule.FixedResponseConfig;

AuthenticateCognitoConfig: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateCognitoConfig;

Type: String;

RedirectConfig: AWS.ElasticLoadBalancingV2.ListenerRule.RedirectConfig;

ForwardConfig: AWS.ElasticLoadBalancingV2.ListenerRule.ForwardConfig;

AuthenticateOidcConfig: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateOidcConfig; };

export type HttpHeaderConfig = { Values: List<String>;

HttpHeaderName: String; };

export type ForwardConfig = { TargetGroupStickinessConfig: AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupStickinessConfig;

TargetGroups: List<AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupTuple>; };

export type TargetGroupTuple = { TargetGroupArn: String;

Weight: Integer; };

export type HttpRequestMethodConfig = { Values: List<String>; };

export type TargetGroupStickinessConfig = { Enabled: Boolean;

DurationSeconds: Integer; };

export type ListenerArn = String;

export type Actions = List<AWS.ElasticLoadBalancingV2.ListenerRule.Action>;

export type Priority = Integer;

export type Conditions = List<AWS.ElasticLoadBalancingV2.ListenerRule.RuleCondition>;

}

export namespace LoadBalancer {

export type LoadBalancerAttribute = { Key: String;

Value: String; };

export type SubnetMapping = { AllocationId: String;

IPv6Address: String;

PrivateIPv4Address: String;

SubnetId: String; };

export type IpAddressType = String;

export type LoadBalancerAttributes = List<AWS.ElasticLoadBalancingV2.LoadBalancer.LoadBalancerAttribute>;

export type Name = String;

export type Scheme = String;

export type SecurityGroups = List<String>;

export type SubnetMappings = List<AWS.ElasticLoadBalancingV2.LoadBalancer.SubnetMapping>;

export type Subnets = List<String>;

export type Tags = List<AWS.ElasticLoadBalancingV2.LoadBalancer.Tag>;

export type Type = String;

}

export namespace Listener {

export type ForwardConfig = { TargetGroupStickinessConfig: AWS.ElasticLoadBalancingV2.Listener.TargetGroupStickinessConfig;

TargetGroups: List<AWS.ElasticLoadBalancingV2.Listener.TargetGroupTuple>; };

export type AuthenticateOidcConfig = { OnUnauthenticatedRequest: String;

TokenEndpoint: String;

SessionTimeout: String;

Scope: String;

Issuer: String;

ClientSecret: String;

UserInfoEndpoint: String;

ClientId: String;

AuthorizationEndpoint: String;

SessionCookieName: String;

AuthenticationRequestExtraParams: Map<String>; };

export type Certificate = { CertificateArn: String; };

export type TargetGroupStickinessConfig = { Enabled: Boolean;

DurationSeconds: Integer; };

export type AuthenticateCognitoConfig = { OnUnauthenticatedRequest: String;

UserPoolClientId: String;

UserPoolDomain: String;

SessionTimeout: String;

Scope: String;

SessionCookieName: String;

UserPoolArn: String;

AuthenticationRequestExtraParams: Map<String>; };

export type Action = { Order: Integer;

TargetGroupArn: String;

FixedResponseConfig: AWS.ElasticLoadBalancingV2.Listener.FixedResponseConfig;

AuthenticateCognitoConfig: AWS.ElasticLoadBalancingV2.Listener.AuthenticateCognitoConfig;

Type: String;

RedirectConfig: AWS.ElasticLoadBalancingV2.Listener.RedirectConfig;

ForwardConfig: AWS.ElasticLoadBalancingV2.Listener.ForwardConfig;

AuthenticateOidcConfig: AWS.ElasticLoadBalancingV2.Listener.AuthenticateOidcConfig; };

export type RedirectConfig = { Path: String;

Query: String;

Port: String;

Host: String;

Protocol: String;

StatusCode: String; };

export type FixedResponseConfig = { ContentType: String;

StatusCode: String;

MessageBody: String; };

export type TargetGroupTuple = { TargetGroupArn: String;

Weight: Integer; };

export type SslPolicy = String;

export type LoadBalancerArn = String;

export type DefaultActions = List<AWS.ElasticLoadBalancingV2.Listener.Action>;

export type Port = Integer;

export type Certificates = List<AWS.ElasticLoadBalancingV2.Listener.Certificate>;

export type Protocol = String;

export type AlpnPolicy = List<String>;

}

export namespace TargetGroup {

export type TargetDescription = { AvailabilityZone: String;

Id: String;

Port: Integer; };

export type TargetGroupAttribute = { Key: String;

Value: String; };

export type Matcher = AWS.ElasticLoadBalancingV2.TargetGroup.Matcher;

export type HealthCheckEnabled = Boolean;

export type HealthCheckIntervalSeconds = Integer;

export type HealthCheckPath = String;

export type HealthCheckPort = String;

export type HealthCheckProtocol = String;

export type HealthCheckTimeoutSeconds = Integer;

export type HealthyThresholdCount = Integer;

export type Name = String;

export type Port = Integer;

export type Protocol = String;

export type ProtocolVersion = String;

export type Tags = List<AWS.ElasticLoadBalancingV2.TargetGroup.Tag>;

export type TargetGroupAttributes = List<AWS.ElasticLoadBalancingV2.TargetGroup.TargetGroupAttribute>;

export type TargetType = String;

export type Targets = List<AWS.ElasticLoadBalancingV2.TargetGroup.TargetDescription>;

export type UnhealthyThresholdCount = Integer;

export type VpcId = String;

}

export namespace ListenerCertificate {

export type Certificate = { CertificateArn: String; };

export type Certificates = List<AWS.ElasticLoadBalancingV2.ListenerCertificate.Certificate>;

export type ListenerArn = String;

}

}

export namespace Budgets {

export namespace Budget {

export type BudgetData = { BudgetLimit: AWS.Budgets.Budget.Spend;

TimePeriod: AWS.Budgets.Budget.TimePeriod;

TimeUnit: String;

PlannedBudgetLimits: Json;

CostFilters: Json;

BudgetName: String;

CostTypes: AWS.Budgets.Budget.CostTypes;

BudgetType: String; };

export type Subscriber = { SubscriptionType: String;

Address: String; };

export type TimePeriod = { Start: String;

End: String; };

export type CostTypes = { IncludeSupport: Boolean;

IncludeOtherSubscription: Boolean;

IncludeTax: Boolean;

IncludeSubscription: Boolean;

UseBlended: Boolean;

IncludeUpfront: Boolean;

IncludeDiscount: Boolean;

IncludeCredit: Boolean;

IncludeRecurring: Boolean;

UseAmortized: Boolean;

IncludeRefund: Boolean; };

export type NotificationWithSubscribers = { Subscribers: List<AWS.Budgets.Budget.Subscriber>;

Notification: AWS.Budgets.Budget.Notification; };

export type Notification = { ComparisonOperator: String;

NotificationType: String;

Threshold: Double;

ThresholdType: String; };

export type Spend = { Amount: Double;

Unit: String; };

export type NotificationsWithSubscribers = List<AWS.Budgets.Budget.NotificationWithSubscribers>;

export type Budget = AWS.Budgets.Budget.BudgetData;

}

export namespace BudgetsAction {

export type IamActionDefinition = { PolicyArn: String;

Roles: List<String>;

Groups: List<String>;

Users: List<String>; };

export type Definition = AWS.Budgets.BudgetsAction.Definition;

export type ScpActionDefinition = { PolicyId: String;

TargetIds: List<String>; };

export type SsmActionDefinition = { Subtype: String;

Region: String;

InstanceIds: List<String>; };

export type ActionThreshold = AWS.Budgets.BudgetsAction.ActionThreshold;

export type Subscriber = { Type: String;

Address: String; };

export type BudgetName = String;

export type NotificationType = String;

export type ActionType = String;

export type ExecutionRoleArn = String;

export type ApprovalModel = String;

export type Subscribers = List<AWS.Budgets.BudgetsAction.Subscriber>;

}

}

export namespace MediaConnect {

export namespace Flow {

export type Encryption = { Algorithm: String;

ConstantInitializationVector: String;

DeviceId: String;

KeyType: String;

Region: String;

ResourceId: String;

RoleArn: String;

SecretArn: String;

Url: String; };

export type Source = AWS.MediaConnect.Flow.Source;

export type FailoverConfig = { State: String;

RecoveryWindow: Integer; };

export type Name = String;

export type AvailabilityZone = String;

export type SourceFailoverConfig = AWS.MediaConnect.Flow.FailoverConfig;

}

export namespace FlowOutput {

export type Encryption = AWS.MediaConnect.FlowOutput.Encryption;

export type VpcInterfaceAttachment = AWS.MediaConnect.FlowOutput.VpcInterfaceAttachment;

export type FlowArn = String;

export type CidrAllowList = List<String>;

export type Description = String;

export type Destination = String;

export type MaxLatency = Integer;

export type Name = String;

export type Port = Integer;

export type Protocol = String;

export type RemoteId = String;

export type SmoothingLatency = Integer;

export type StreamId = String;

}

export namespace FlowSource {

export type Encryption = { Algorithm: String;

ConstantInitializationVector: String;

DeviceId: String;

KeyType: String;

Region: String;

ResourceId: String;

RoleArn: String;

SecretArn: String;

Url: String; };

export type FlowArn = String;

export type Decryption = AWS.MediaConnect.FlowSource.Encryption;

export type Description = String;

export type EntitlementArn = String;

export type IngestPort = Integer;

export type MaxBitrate = Integer;

export type MaxLatency = Integer;

export type Name = String;

export type Protocol = String;

export type StreamId = String;

export type VpcInterfaceName = String;

export type WhitelistCidr = String;

}

export namespace FlowEntitlement {

export type Encryption = AWS.MediaConnect.FlowEntitlement.Encryption;

export type FlowArn = String;

export type DataTransferSubscriberFeePercent = Integer;

export type Description = String;

export type EntitlementStatus = String;

export type Name = String;

export type Subscribers = List<String>;

}

export namespace FlowVpcInterface {

export type FlowArn = String;

export type Name = String;

export type RoleArn = String;

export type SecurityGroupIds = List<String>;

export type SubnetId = String;

}

}

export namespace CodeStar {

export namespace GitHubRepository {

export type Code = AWS.CodeStar.GitHubRepository.Code;

export type S3 = { ObjectVersion: String;

Bucket: String;

Key: String; };

export type EnableIssues = Boolean;

export type ConnectionArn = String;

export type RepositoryName = String;

export type RepositoryAccessToken = String;

export type RepositoryOwner = String;

export type IsPrivate = Boolean;

export type RepositoryDescription = String;

}

}

export namespace SSMContacts {

export namespace Contact {

export type ContactTargetInfo = { ContactId: String;

IsEssential: Boolean; };

export type Targets = { ContactTargetInfo: AWS.SSMContacts.Contact.ContactTargetInfo;

ChannelTargetInfo: AWS.SSMContacts.Contact.ChannelTargetInfo; };

export type ChannelTargetInfo = { ChannelId: String;

RetryIntervalInMinutes: Integer; };

export type Stage = { DurationInMinutes: Integer;

Targets: List<AWS.SSMContacts.Contact.Targets>; };

export type Alias = String;

export type DisplayName = String;

export type Type = String;

export type Plan = List<AWS.SSMContacts.Contact.Stage>;

}

export namespace ContactChannel {

export type ContactId = String;

export type ChannelName = String;

export type ChannelType = String;

export type DeferActivation = Boolean;

export type ChannelAddress = String;

}

}

export namespace AuditManager {

export namespace Assessment {

export type Delegation = { LastUpdated: Double;

ControlSetId: String;

CreationTime: Double;

CreatedBy: String;

RoleArn: String;

AssessmentName: String;

Comment: String;

Id: String;

RoleType: String;

AssessmentId: String;

Status: String; };

export type AWSAccount = { Id: String;

EmailAddress: String;

Name: String; };

export type Role = { RoleArn: String;

RoleType: String; };

export type AssessmentReportsDestination = AWS.AuditManager.Assessment.AssessmentReportsDestination;

export type AWSService = { ServiceName: String; };

export type Scope = AWS.AuditManager.Assessment.Scope;

export type FrameworkId = String;

export type AwsAccount = AWS.AuditManager.Assessment.AWSAccount;

export type Tags = List<AWS.AuditManager.Assessment.Tag>;

export type Roles = List<AWS.AuditManager.Assessment.Role>;

export type Status = String;

export type Name = String;

export type Description = String;

}

}

export namespace LakeFormation {

export namespace Permissions {

export type DataLocationResource = { S3Resource: String;

CatalogId: String; };

export type ColumnWildcard = { ExcludedColumnNames: List<String>; };

export type DatabaseResource = { CatalogId: String;

Name: String; };

export type TableWildcard = {  };

export type Resource = AWS.LakeFormation.Permissions.Resource;

export type DataLakePrincipal = AWS.LakeFormation.Permissions.DataLakePrincipal;

export type TableResource = { DatabaseName: String;

CatalogId: String;

TableWildcard: AWS.LakeFormation.Permissions.TableWildcard;

Name: String; };

export type TableWithColumnsResource = { ColumnNames: List<String>;

DatabaseName: String;

CatalogId: String;

Name: String;

ColumnWildcard: AWS.LakeFormation.Permissions.ColumnWildcard; };

export type Permissions = List<String>;

export type PermissionsWithGrantOption = List<String>;

}

export namespace DataLakeSettings {

export type DataLakePrincipal = { DataLakePrincipalIdentifier: String; };

export type Admins = AWS.LakeFormation.DataLakeSettings.Admins;

export type TrustedResourceOwners = List<String>;

}

export namespace Resource {

export type ResourceArn = String;

export type UseServiceLinkedRole = Boolean;

export type RoleArn = String;

}

}

export namespace NetworkManager {

export namespace Device {

export type Location = AWS.NetworkManager.Device.Location;

export type Description = String;

export type Tags = List<AWS.NetworkManager.Device.Tag>;

export type GlobalNetworkId = String;

export type Model = String;

export type SerialNumber = String;

export type SiteId = String;

export type Type = String;

export type Vendor = String;

}

export namespace Link {

export type Bandwidth = AWS.NetworkManager.Link.Bandwidth;

export type GlobalNetworkId = String;

export type SiteId = String;

export type Provider = String;

export type Description = String;

export type Tags = List<AWS.NetworkManager.Link.Tag>;

export type Type = String;

}

export namespace Site {

export type Location = AWS.NetworkManager.Site.Location;

export type Description = String;

export type Tags = List<AWS.NetworkManager.Site.Tag>;

export type GlobalNetworkId = String;

}

export namespace CustomerGatewayAssociation {

export type GlobalNetworkId = String;

export type CustomerGatewayArn = String;

export type DeviceId = String;

export type LinkId = String;

}

export namespace LinkAssociation {

export type GlobalNetworkId = String;

export type DeviceId = String;

export type LinkId = String;

}

export namespace GlobalNetwork {

export type Description = String;

export type Tags = List<AWS.NetworkManager.GlobalNetwork.Tag>;

}

export namespace TransitGatewayRegistration {

export type GlobalNetworkId = String;

export type TransitGatewayArn = String;

}

}

export namespace Route53 {

export namespace HostedZone {

export type HostedZoneTag = { Key: String;

Value: String; };

export type HostedZoneConfig = AWS.Route53.HostedZone.HostedZoneConfig;

export type QueryLoggingConfig = AWS.Route53.HostedZone.QueryLoggingConfig;

export type VPC = { VPCId: String;

VPCRegion: String; };

export type HostedZoneTags = List<AWS.Route53.HostedZone.HostedZoneTag>;

export type Name = String;

export type VPCs = List<AWS.Route53.HostedZone.VPC>;

}

export namespace RecordSetGroup {

export type GeoLocation = { ContinentCode: String;

CountryCode: String;

SubdivisionCode: String; };

export type RecordSet = { AliasTarget: AWS.Route53.RecordSetGroup.AliasTarget;

Comment: String;

Failover: String;

GeoLocation: AWS.Route53.RecordSetGroup.GeoLocation;

HealthCheckId: String;

HostedZoneId: String;

HostedZoneName: String;

MultiValueAnswer: Boolean;

Name: String;

Region: String;

ResourceRecords: List<String>;

SetIdentifier: String;

TTL: String;

Type: String;

Weight: Integer; };

export type AliasTarget = { DNSName: String;

EvaluateTargetHealth: Boolean;

HostedZoneId: String; };

export type Comment = String;

export type HostedZoneId = String;

export type HostedZoneName = String;

export type RecordSets = List<AWS.Route53.RecordSetGroup.RecordSet>;

}

export namespace RecordSet {

export type GeoLocation = AWS.Route53.RecordSet.GeoLocation;

export type AliasTarget = AWS.Route53.RecordSet.AliasTarget;

export type Comment = String;

export type Failover = String;

export type HealthCheckId = String;

export type HostedZoneId = String;

export type HostedZoneName = String;

export type MultiValueAnswer = Boolean;

export type Name = String;

export type Region = String;

export type ResourceRecords = List<String>;

export type SetIdentifier = String;

export type TTL = String;

export type Type = String;

export type Weight = Integer;

}

export namespace HealthCheck {

export type HealthCheckTag = { Key: String;

Value: String; };

export type HealthCheckConfig = Json;

export type HealthCheckTags = List<AWS.Route53.HealthCheck.HealthCheckTag>;

}

export namespace DNSSEC {

export type HostedZoneId = String;

}

export namespace KeySigningKey {

export type HostedZoneId = String;

export type Status = String;

export type Name = String;

export type KeyManagementServiceArn = String;

}

}

export namespace Logs {

export namespace MetricFilter {

export type MetricTransformation = { DefaultValue: Double;

MetricName: String;

MetricNamespace: String;

MetricValue: String; };

export type FilterPattern = String;

export type LogGroupName = String;

export type MetricTransformations = List<AWS.Logs.MetricFilter.MetricTransformation>;

}

export namespace Destination {

export type DestinationName = String;

export type DestinationPolicy = String;

export type RoleArn = String;

export type TargetArn = String;

}

export namespace LogGroup {

export type LogGroupName = String;

export type KmsKeyId = String;

export type RetentionInDays = Integer;

}

export namespace LogStream {

export type LogGroupName = String;

export type LogStreamName = String;

}

export namespace SubscriptionFilter {

export type DestinationArn = String;

export type FilterPattern = String;

export type LogGroupName = String;

export type RoleArn = String;

}

export namespace QueryDefinition {

export type Name = String;

export type QueryString = String;

export type LogGroupNames = List<String>;

}

}

export namespace S3Outposts {

export namespace Bucket {

export type AbortIncompleteMultipartUpload = { DaysAfterInitiation: Integer; };

export type Rule = { Status: String;

Id: String;

AbortIncompleteMultipartUpload: AWS.S3Outposts.Bucket.AbortIncompleteMultipartUpload;

ExpirationDate: String;

ExpirationInDays: Integer;

Filter: Json; };

export type LifecycleConfiguration = AWS.S3Outposts.Bucket.LifecycleConfiguration;

export type BucketName = String;

export type OutpostId = String;

export type Tags = List<AWS.S3Outposts.Bucket.Tag>;

}

export namespace AccessPoint {

export type VpcConfiguration = AWS.S3Outposts.AccessPoint.VpcConfiguration;

export type Bucket = String;

export type Name = String;

export type Policy = Json;

}

export namespace Endpoint {

export type NetworkInterface = { NetworkInterfaceId: String; };

export type OutpostId = String;

export type SecurityGroupId = String;

export type SubnetId = String;

}

export namespace BucketPolicy {

export type Bucket = String;

export type PolicyDocument = Json;

}

}

export namespace SecretsManager {

export namespace RotationSchedule {

export type RotationRules = AWS.SecretsManager.RotationSchedule.RotationRules;

export type HostedRotationLambda = AWS.SecretsManager.RotationSchedule.HostedRotationLambda;

export type SecretId = String;

export type RotationLambdaARN = String;

}

export namespace Secret {

export type ReplicaRegion = { KmsKeyId: String;

Region: String; };

export type GenerateSecretString = AWS.SecretsManager.Secret.GenerateSecretString;

export type Description = String;

export type KmsKeyId = String;

export type SecretString = String;

export type ReplicaRegions = List<AWS.SecretsManager.Secret.ReplicaRegion>;

export type Tags = List<AWS.SecretsManager.Secret.Tag>;

export type Name = String;

}

export namespace ResourcePolicy {

export type BlockPublicPolicy = Boolean;

export type SecretId = String;

export type ResourcePolicy = Json;

}

export namespace SecretTargetAttachment {

export type SecretId = String;

export type TargetType = String;

export type TargetId = String;

}

}

export namespace ApplicationInsights {

export namespace Application {

export type SubComponentConfigurationDetails = { AlarmMetrics: List<AWS.ApplicationInsights.Application.AlarmMetric>;

Logs: List<AWS.ApplicationInsights.Application.Log>;

WindowsEvents: List<AWS.ApplicationInsights.Application.WindowsEvent>; };

export type ComponentMonitoringSetting = { ComponentName: String;

ComponentARN: String;

Tier: String;

ComponentConfigurationMode: String;

DefaultOverwriteComponentConfiguration: AWS.ApplicationInsights.Application.ComponentConfiguration;

CustomComponentConfiguration: AWS.ApplicationInsights.Application.ComponentConfiguration; };

export type LogPattern = { PatternName: String;

Pattern: String;

Rank: Integer; };

export type LogPatternSet = { PatternSetName: String;

LogPatterns: List<AWS.ApplicationInsights.Application.LogPattern>; };

export type Alarm = { AlarmName: String;

Severity: String; };

export type WindowsEvent = { LogGroupName: String;

EventName: String;

EventLevels: List<String>;

PatternSet: String; };

export type ComponentConfiguration = { ConfigurationDetails: AWS.ApplicationInsights.Application.ConfigurationDetails;

SubComponentTypeConfigurations: List<AWS.ApplicationInsights.Application.SubComponentTypeConfiguration>; };

export type CustomComponent = { ComponentName: String;

ResourceList: List<String>; };

export type JMXPrometheusExporter = { JMXURL: String;

HostPort: String;

PrometheusPort: String; };

export type AlarmMetric = { AlarmMetricName: String; };

export type ConfigurationDetails = { AlarmMetrics: List<AWS.ApplicationInsights.Application.AlarmMetric>;

Logs: List<AWS.ApplicationInsights.Application.Log>;

WindowsEvents: List<AWS.ApplicationInsights.Application.WindowsEvent>;

Alarms: List<AWS.ApplicationInsights.Application.Alarm>;

JMXPrometheusExporter: AWS.ApplicationInsights.Application.JMXPrometheusExporter; };

export type Log = { LogGroupName: String;

LogPath: String;

LogType: String;

Encoding: String;

PatternSet: String; };

export type SubComponentTypeConfiguration = { SubComponentType: String;

SubComponentConfigurationDetails: AWS.ApplicationInsights.Application.SubComponentConfigurationDetails; };

export type ResourceGroupName = String;

export type CWEMonitorEnabled = Boolean;

export type OpsCenterEnabled = Boolean;

export type OpsItemSNSTopicArn = String;

export type Tags = List<AWS.ApplicationInsights.Application.Tag>;

export type CustomComponents = List<AWS.ApplicationInsights.Application.CustomComponent>;

export type LogPatternSets = List<AWS.ApplicationInsights.Application.LogPatternSet>;

export type AutoConfigurationEnabled = Boolean;

export type ComponentMonitoringSettings = List<AWS.ApplicationInsights.Application.ComponentMonitoringSetting>;

}

}

export namespace CodeBuild {

export namespace Project {

export type Environment = AWS.CodeBuild.Project.Environment;

export type GitSubmodulesConfig = { FetchSubmodules: Boolean; };

export type VpcConfig = AWS.CodeBuild.Project.VpcConfig;

export type Artifacts = AWS.CodeBuild.Project.Artifacts;

export type RegistryCredential = { Credential: String;

CredentialProvider: String; };

export type CloudWatchLogsConfig = { Status: String;

GroupName: String;

StreamName: String; };

export type ProjectCache = { Modes: List<String>;

Type: String;

Location: String; };

export type ProjectBuildBatchConfig = { CombineArtifacts: Boolean;

ServiceRole: String;

TimeoutInMins: Integer;

Restrictions: AWS.CodeBuild.Project.BatchRestrictions; };

export type FilterGroup = List<AWS.CodeBuild.Project.WebhookFilter>;

export type BatchRestrictions = { ComputeTypesAllowed: List<String>;

MaximumBuildsAllowed: Integer; };

export type ProjectTriggers = { FilterGroups: List<AWS.CodeBuild.Project.FilterGroup>;

BuildType: String;

Webhook: Boolean; };

export type Source = AWS.CodeBuild.Project.Source;

export type ProjectSourceVersion = { SourceIdentifier: String;

SourceVersion: String; };

export type LogsConfig = AWS.CodeBuild.Project.LogsConfig;

export type SourceAuth = { Type: String;

Resource: String; };

export type ProjectFileSystemLocation = { MountPoint: String;

Type: String;

Identifier: String;

MountOptions: String;

Location: String; };

export type S3LogsConfig = { Status: String;

EncryptionDisabled: Boolean;

Location: String; };

export type WebhookFilter = { Pattern: String;

Type: String;

ExcludeMatchedPattern: Boolean; };

export type BuildStatusConfig = { Context: String;

TargetUrl: String; };

export type EnvironmentVariable = { Type: String;

Value: String;

Name: String; };

export type Description = String;

export type SecondarySources = List<AWS.CodeBuild.Project.Source>;

export type EncryptionKey = String;

export type SourceVersion = String;

export type Triggers = AWS.CodeBuild.Project.ProjectTriggers;

export type SecondaryArtifacts = List<AWS.CodeBuild.Project.Artifacts>;

export type Name = String;

export type BadgeEnabled = Boolean;

export type ServiceRole = String;

export type QueuedTimeoutInMinutes = Integer;

export type FileSystemLocations = List<AWS.CodeBuild.Project.ProjectFileSystemLocation>;

export type SecondarySourceVersions = List<AWS.CodeBuild.Project.ProjectSourceVersion>;

export type ConcurrentBuildLimit = Integer;

export type BuildBatchConfig = AWS.CodeBuild.Project.ProjectBuildBatchConfig;

export type Tags = List<AWS.CodeBuild.Project.Tag>;

export type TimeoutInMinutes = Integer;

export type Cache = AWS.CodeBuild.Project.ProjectCache;

}

export namespace ReportGroup {

export type ReportExportConfig = { S3Destination: AWS.CodeBuild.ReportGroup.S3ReportExportConfig;

ExportConfigType: String; };

export type S3ReportExportConfig = { Path: String;

Bucket: String;

Packaging: String;

EncryptionKey: String;

BucketOwner: String;

EncryptionDisabled: Boolean; };

export type Type = String;

export type ExportConfig = AWS.CodeBuild.ReportGroup.ReportExportConfig;

export type DeleteReports = Boolean;

export type Tags = List<AWS.CodeBuild.ReportGroup.Tag>;

export type Name = String;

}

export namespace SourceCredential {

export type ServerType = String;

export type Username = String;

export type Token = String;

export type AuthType = String;

}

}

export namespace IoTSiteWise {

export namespace AccessPolicy {

export type Project = { id: String; };

export type IamRole = { arn: String; };

export type AccessPolicyResource = AWS.IoTSiteWise.AccessPolicy.AccessPolicyResource;

export type User = { id: String; };

export type IamUser = { arn: String; };

export type Portal = { id: String; };

export type AccessPolicyIdentity = AWS.IoTSiteWise.AccessPolicy.AccessPolicyIdentity;

export type AccessPolicyPermission = String;

}

export namespace Gateway {

export type Greengrass = { GroupArn: String; };

export type GatewayCapabilitySummary = { CapabilityNamespace: String;

CapabilityConfiguration: String; };

export type GatewayPlatform = AWS.IoTSiteWise.Gateway.GatewayPlatform;

export type GatewayName = String;

export type Tags = List<AWS.IoTSiteWise.Gateway.Tag>;

export type GatewayCapabilitySummaries = List<AWS.IoTSiteWise.Gateway.GatewayCapabilitySummary>;

}

export namespace AssetModel {

export type AssetModelCompositeModel = { Description: String;

Name: String;

Type: String;

CompositeModelProperties: List<AWS.IoTSiteWise.AssetModel.AssetModelProperty>; };

export type MetricWindow = { Tumbling: AWS.IoTSiteWise.AssetModel.TumblingWindow; };

export type TumblingWindow = { Interval: String; };

export type Attribute = { DefaultValue: String; };

export type ExpressionVariable = { Name: String;

Value: AWS.IoTSiteWise.AssetModel.VariableValue; };

export type VariableValue = { PropertyLogicalId: String;

HierarchyLogicalId: String; };

export type Transform = { Expression: String;

Variables: List<AWS.IoTSiteWise.AssetModel.ExpressionVariable>; };

export type AssetModelHierarchy = { LogicalId: String;

Name: String;

ChildAssetModelId: String; };

export type Metric = { Expression: String;

Variables: List<AWS.IoTSiteWise.AssetModel.ExpressionVariable>;

Window: AWS.IoTSiteWise.AssetModel.MetricWindow; };

export type AssetModelProperty = { LogicalId: String;

Name: String;

DataType: String;

DataTypeSpec: String;

Unit: String;

Type: AWS.IoTSiteWise.AssetModel.PropertyType; };

export type PropertyType = { TypeName: String;

Attribute: AWS.IoTSiteWise.AssetModel.Attribute;

Transform: AWS.IoTSiteWise.AssetModel.Transform;

Metric: AWS.IoTSiteWise.AssetModel.Metric; };

export type AssetModelName = String;

export type AssetModelDescription = String;

export type AssetModelProperties = List<AWS.IoTSiteWise.AssetModel.AssetModelProperty>;

export type AssetModelCompositeModels = List<AWS.IoTSiteWise.AssetModel.AssetModelCompositeModel>;

export type AssetModelHierarchies = List<AWS.IoTSiteWise.AssetModel.AssetModelHierarchy>;

export type Tags = List<AWS.IoTSiteWise.AssetModel.Tag>;

}

export namespace Asset {

export type AssetHierarchy = { LogicalId: String;

ChildAssetId: String; };

export type AssetProperty = { LogicalId: String;

Alias: String;

NotificationState: String; };

export type AssetModelId = String;

export type AssetName = String;

export type AssetProperties = List<AWS.IoTSiteWise.Asset.AssetProperty>;

export type AssetHierarchies = List<AWS.IoTSiteWise.Asset.AssetHierarchy>;

export type Tags = List<AWS.IoTSiteWise.Asset.Tag>;

}

export namespace Dashboard {

export type ProjectId = String;

export type DashboardName = String;

export type DashboardDescription = String;

export type DashboardDefinition = String;

export type Tags = List<AWS.IoTSiteWise.Dashboard.Tag>;

}

export namespace Portal {

export type PortalAuthMode = String;

export type PortalContactEmail = String;

export type PortalDescription = String;

export type PortalName = String;

export type RoleArn = String;

export type NotificationSenderEmail = String;

export type Alarms = Json;

export type Tags = List<AWS.IoTSiteWise.Portal.Tag>;

}

export namespace Project {

export type PortalId = String;

export type ProjectName = String;

export type ProjectDescription = String;

export type Tags = List<AWS.IoTSiteWise.Project.Tag>;

}

}

export namespace CloudFormation {

export namespace StackSet {

export type StackInstances = { DeploymentTargets: AWS.CloudFormation.StackSet.DeploymentTargets;

Regions: List<String>;

ParameterOverrides: List<AWS.CloudFormation.StackSet.Parameter>; };

export type AutoDeployment = AWS.CloudFormation.StackSet.AutoDeployment;

export type DeploymentTargets = { Accounts: List<String>;

OrganizationalUnitIds: List<String>; };

export type OperationPreferences = AWS.CloudFormation.StackSet.OperationPreferences;

export type Parameter = { ParameterKey: String;

ParameterValue: String; };

export type StackSetName = String;

export type AdministrationRoleARN = String;

export type Capabilities = List<String>;

export type Description = String;

export type ExecutionRoleName = String;

export type StackInstancesGroup = List<AWS.CloudFormation.StackSet.StackInstances>;

export type Parameters = List<AWS.CloudFormation.StackSet.Parameter>;

export type PermissionModel = String;

export type Tags = List<AWS.CloudFormation.StackSet.Tag>;

export type TemplateBody = String;

export type TemplateURL = String;

export type CallAs = String;

}

export namespace ResourceVersion {

export type LoggingConfig = AWS.CloudFormation.ResourceVersion.LoggingConfig;

export type ExecutionRoleArn = String;

export type SchemaHandlerPackage = String;

export type TypeName = String;

}

export namespace TypeActivation {

export type LoggingConfig = AWS.CloudFormation.TypeActivation.LoggingConfig;

export type ExecutionRoleArn = String;

export type PublisherId = String;

export type PublicTypeArn = String;

export type AutoUpdate = Boolean;

export type TypeNameAlias = String;

export type VersionBump = String;

export type MajorVersion = String;

export type TypeName = String;

export type Type = String;

}

export namespace ResourceDefaultVersion {

export type TypeVersionArn = String;

export type TypeName = String;

export type VersionId = String;

}

export namespace CustomResource {

export type ServiceToken = String;

}

export namespace PublicTypeVersion {

export type Arn = String;

export type PublicVersionNumber = String;

export type TypeName = String;

export type LogDeliveryBucket = String;

export type Type = String;

}

export namespace Macro {

export type Description = String;

export type FunctionName = String;

export type LogGroupName = String;

export type LogRoleARN = String;

export type Name = String;

}

export namespace ModuleDefaultVersion {

export type Arn = String;

export type ModuleName = String;

export type VersionId = String;

}

export namespace Stack {

export type NotificationARNs = List<String>;

export type Parameters = Map<String>;

export type Tags = List<AWS.CloudFormation.Stack.Tag>;

export type TemplateURL = String;

export type TimeoutInMinutes = Integer;

}

export namespace Publisher {

export type AcceptTermsAndConditions = Boolean;

export type ConnectionArn = String;

}

export namespace WaitCondition {

export type Count = Integer;

export type Handle = String;

export type Timeout = String;

}

export namespace WaitConditionHandle {



}

export namespace ModuleVersion {

export type ModuleName = String;

export type ModulePackage = String;

}

}

export namespace SSMIncidents {

export namespace ResponsePlan {

export type SsmParameter = { Key: String;

Values: List<String>; };

export type SsmAutomation = { RoleArn: String;

DocumentName: String;

DocumentVersion: String;

TargetAccount: String;

Parameters: List<AWS.SSMIncidents.ResponsePlan.SsmParameter>; };

export type Action = { SsmAutomation: AWS.SSMIncidents.ResponsePlan.SsmAutomation; };

export type NotificationTargetItem = { SnsTopicArn: String; };

export type ChatChannel = AWS.SSMIncidents.ResponsePlan.ChatChannel;

export type IncidentTemplate = AWS.SSMIncidents.ResponsePlan.IncidentTemplate;

export type Name = String;

export type DisplayName = String;

export type Engagements = List<String>;

export type Actions = List<AWS.SSMIncidents.ResponsePlan.Action>;

export type Tags = List<AWS.SSMIncidents.ResponsePlan.Tag>;

}

export namespace ReplicationSet {

export type RegionConfiguration = { SseKmsKeyId: String; };

export type ReplicationRegion = { RegionName: String;

RegionConfiguration: AWS.SSMIncidents.ReplicationSet.RegionConfiguration; };

export type Regions = List<AWS.SSMIncidents.ReplicationSet.ReplicationRegion>;

export type DeletionProtected = Boolean;

}

}

export namespace Route53Resolver {

export namespace FirewallRuleGroup {

export type FirewallRule = { FirewallDomainListId: String;

Priority: Integer;

Action: String;

BlockResponse: String;

BlockOverrideDomain: String;

BlockOverrideDnsType: String;

BlockOverrideTtl: Integer; };

export type Name = String;

export type FirewallRules = List<AWS.Route53Resolver.FirewallRuleGroup.FirewallRule>;

export type Tags = List<AWS.Route53Resolver.FirewallRuleGroup.Tag>;

}

export namespace ResolverRule {

export type TargetAddress = { Ip: String;

Port: String; };

export type ResolverEndpointId = String;

export type DomainName = String;

export type RuleType = String;

export type TargetIps = List<AWS.Route53Resolver.ResolverRule.TargetAddress>;

export type Tags = List<AWS.Route53Resolver.ResolverRule.Tag>;

export type Name = String;

}

export namespace ResolverEndpoint {

export type IpAddressRequest = { Ip: String;

SubnetId: String; };

export type IpAddresses = List<AWS.Route53Resolver.ResolverEndpoint.IpAddressRequest>;

export type Direction = String;

export type SecurityGroupIds = List<String>;

export type Tags = List<AWS.Route53Resolver.ResolverEndpoint.Tag>;

export type Name = String;

}

export namespace ResolverQueryLoggingConfig {

export type Name = String;

export type DestinationArn = String;

}

export namespace FirewallRuleGroupAssociation {

export type FirewallRuleGroupId = String;

export type VpcId = String;

export type Name = String;

export type Priority = Integer;

export type MutationProtection = String;

export type Tags = List<AWS.Route53Resolver.FirewallRuleGroupAssociation.Tag>;

}

export namespace ResolverQueryLoggingConfigAssociation {

export type ResolverQueryLogConfigId = String;

export type ResourceId = String;

}

export namespace ResolverDNSSECConfig {

export type ResourceId = String;

}

export namespace FirewallDomainList {

export type Name = String;

export type Domains = List<String>;

export type DomainFileUrl = String;

export type Tags = List<AWS.Route53Resolver.FirewallDomainList.Tag>;

}

export namespace ResolverRuleAssociation {

export type VPCId = String;

export type ResolverRuleId = String;

export type Name = String;

}

}

export namespace SNS {

export namespace Topic {

export type Subscription = List<AWS.SNS.Topic.Subscription>;

export type ContentBasedDeduplication = Boolean;

export type DisplayName = String;

export type FifoTopic = Boolean;

export type KmsMasterKeyId = String;

export type Tags = List<AWS.SNS.Topic.Tag>;

export type TopicName = String;

}

export namespace Subscription {

export type DeliveryPolicy = Json;

export type Endpoint = String;

export type FilterPolicy = Json;

export type Protocol = String;

export type RawMessageDelivery = Boolean;

export type RedrivePolicy = Json;

export type Region = String;

export type SubscriptionRoleArn = String;

export type TopicArn = String;

}

export namespace TopicPolicy {

export type PolicyDocument = Json;

export type Topics = List<String>;

}

}

export namespace Connect {

export namespace QuickConnect {

export type QueueQuickConnectConfig = { ContactFlowArn: String;

QueueArn: String; };

export type QuickConnectConfig = AWS.Connect.QuickConnect.QuickConnectConfig;

export type UserQuickConnectConfig = { ContactFlowArn: String;

UserArn: String; };

export type PhoneNumberQuickConnectConfig = { PhoneNumber: String; };

export type InstanceArn = String;

export type Name = String;

export type Description = String;

export type Tags = List<AWS.Connect.QuickConnect.Tag>;

}

}

export namespace ApiGatewayV2 {

export namespace ApiGatewayManagedOverrides {

export type AccessLogSettings = { Format: String;

DestinationArn: String; };

export type RouteOverrides = { Target: String;

AuthorizerId: String;

OperationName: String;

AuthorizationScopes: List<String>;

AuthorizationType: String; };

export type StageOverrides = { Description: String;

AccessLogSettings: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.AccessLogSettings;

AutoDeploy: Boolean;

RouteSettings: Json;

StageVariables: Json;

DefaultRouteSettings: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteSettings; };

export type RouteSettings = { LoggingLevel: String;

DataTraceEnabled: Boolean;

ThrottlingBurstLimit: Integer;

DetailedMetricsEnabled: Boolean;

ThrottlingRateLimit: Double; };

export type IntegrationOverrides = { Description: String;

PayloadFormatVersion: String;

TimeoutInMillis: Integer;

IntegrationMethod: String; };

export type Integration = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.IntegrationOverrides;

export type Stage = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.StageOverrides;

export type ApiId = String;

export type Route = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteOverrides;

}

export namespace Integration {

export type ResponseParameterList = { ResponseParameters: List<AWS.ApiGatewayV2.Integration.ResponseParameter>; };

export type TlsConfig = AWS.ApiGatewayV2.Integration.TlsConfig;

export type ResponseParameter = { Destination: String;

Source: String; };

export type Description = String;

export type TemplateSelectionExpression = String;

export type ConnectionType = String;

export type ResponseParameters = Json;

export type IntegrationMethod = String;

export type PassthroughBehavior = String;

export type RequestParameters = Json;

export type ConnectionId = String;

export type IntegrationUri = String;

export type PayloadFormatVersion = String;

export type CredentialsArn = String;

export type RequestTemplates = Json;

export type TimeoutInMillis = Integer;

export type ContentHandlingStrategy = String;

export type IntegrationSubtype = String;

export type ApiId = String;

export type IntegrationType = String;

}

export namespace Route {

export type ParameterConstraints = { Required: Boolean; };

export type Target = String;

export type RouteResponseSelectionExpression = String;

export type AuthorizerId = String;

export type RequestModels = Json;

export type OperationName = String;

export type AuthorizationScopes = List<String>;

export type ApiKeyRequired = Boolean;

export type RouteKey = String;

export type AuthorizationType = String;

export type ModelSelectionExpression = String;

export type ApiId = String;

export type RequestParameters = Json;

}

export namespace Stage {

export type AccessLogSettings = AWS.ApiGatewayV2.Stage.AccessLogSettings;

export type RouteSettings = Json;

export type ClientCertificateId = String;

export type DeploymentId = String;

export type Description = String;

export type AutoDeploy = Boolean;

export type StageName = String;

export type StageVariables = Json;

export type AccessPolicyId = String;

export type ApiId = String;

export type DefaultRouteSettings = AWS.ApiGatewayV2.Stage.RouteSettings;

export type Tags = Json;

}

export namespace DomainName {

export type MutualTlsAuthentication = AWS.ApiGatewayV2.DomainName.MutualTlsAuthentication;

export type DomainNameConfiguration = { SecurityPolicy: String;

EndpointType: String;

CertificateName: String;

CertificateArn: String; };

export type DomainName = String;

export type DomainNameConfigurations = List<AWS.ApiGatewayV2.DomainName.DomainNameConfiguration>;

export type Tags = Json;

}

export namespace Authorizer {

export type JWTConfiguration = { Issuer: String;

Audience: List<String>; };

export type IdentityValidationExpression = String;

export type AuthorizerUri = String;

export type AuthorizerCredentialsArn = String;

export type AuthorizerType = String;

export type JwtConfiguration = AWS.ApiGatewayV2.Authorizer.JWTConfiguration;

export type AuthorizerResultTtlInSeconds = Integer;

export type IdentitySource = List<String>;

export type AuthorizerPayloadFormatVersion = String;

export type EnableSimpleResponses = Boolean;

export type ApiId = String;

export type Name = String;

}

export namespace RouteResponse {

export type ParameterConstraints = { Required: Boolean; };

export type RouteResponseKey = String;

export type ResponseParameters = Json;

export type RouteId = String;

export type ModelSelectionExpression = String;

export type ApiId = String;

export type ResponseModels = Json;

}

export namespace Api {

export type Cors = { AllowOrigins: List<String>;

AllowCredentials: Boolean;

ExposeHeaders: List<String>;

AllowHeaders: List<String>;

MaxAge: Integer;

AllowMethods: List<String>; };

export type BodyS3Location = AWS.ApiGatewayV2.Api.BodyS3Location;

export type RouteSelectionExpression = String;

export type Description = String;

export type BasePath = String;

export type FailOnWarnings = Boolean;

export type DisableExecuteApiEndpoint = Boolean;

export type DisableSchemaValidation = Boolean;

export type Name = String;

export type Target = String;

export type CredentialsArn = String;

export type CorsConfiguration = AWS.ApiGatewayV2.Api.Cors;

export type Version = String;

export type ProtocolType = String;

export type RouteKey = String;

export type Body = Json;

export type Tags = Json;

export type ApiKeySelectionExpression = String;

}

export namespace Deployment {

export type Description = String;

export type StageName = String;

export type ApiId = String;

}

export namespace Model {

export type Description = String;

export type ContentType = String;

export type Schema = Json;

export type ApiId = String;

export type Name = String;

}

export namespace IntegrationResponse {

export type ResponseTemplates = Json;

export type TemplateSelectionExpression = String;

export type ResponseParameters = Json;

export type ContentHandlingStrategy = String;

export type IntegrationId = String;

export type IntegrationResponseKey = String;

export type ApiId = String;

}

export namespace VpcLink {

export type SubnetIds = List<String>;

export type SecurityGroupIds = List<String>;

export type Tags = Json;

export type Name = String;

}

export namespace ApiMapping {

export type DomainName = String;

export type Stage = String;

export type ApiMappingKey = String;

export type ApiId = String;

}

}

export namespace CodePipeline {

export namespace Webhook {

export type WebhookFilterRule = { JsonPath: String;

MatchEquals: String; };

export type WebhookAuthConfiguration = { AllowedIPRange: String;

SecretToken: String; };

export type AuthenticationConfiguration = AWS.CodePipeline.Webhook.WebhookAuthConfiguration;

export type Filters = List<AWS.CodePipeline.Webhook.WebhookFilterRule>;

export type Authentication = String;

export type TargetPipeline = String;

export type TargetAction = String;

export type Name = String;

export type TargetPipelineVersion = Integer;

export type RegisterWithThirdParty = Boolean;

}

export namespace Pipeline {

export type OutputArtifact = { Name: String; };

export type StageTransition = { Reason: String;

StageName: String; };

export type InputArtifact = { Name: String; };

export type BlockerDeclaration = { Name: String;

Type: String; };

export type ArtifactStoreMap = { ArtifactStore: AWS.CodePipeline.Pipeline.ArtifactStore;

Region: String; };

export type EncryptionKey = { Id: String;

Type: String; };

export type ActionDeclaration = { ActionTypeId: AWS.CodePipeline.Pipeline.ActionTypeId;

Configuration: Json;

InputArtifacts: List<AWS.CodePipeline.Pipeline.InputArtifact>;

Name: String;

Namespace: String;

OutputArtifacts: List<AWS.CodePipeline.Pipeline.OutputArtifact>;

Region: String;

RoleArn: String;

RunOrder: Integer; };

export type StageDeclaration = { Actions: List<AWS.CodePipeline.Pipeline.ActionDeclaration>;

Blockers: List<AWS.CodePipeline.Pipeline.BlockerDeclaration>;

Name: String; };

export type ArtifactStore = AWS.CodePipeline.Pipeline.ArtifactStore;

export type ActionTypeId = { Category: String;

Owner: String;

Provider: String;

Version: String; };

export type ArtifactStores = List<AWS.CodePipeline.Pipeline.ArtifactStoreMap>;

export type DisableInboundStageTransitions = List<AWS.CodePipeline.Pipeline.StageTransition>;

export type Name = String;

export type RestartExecutionOnUpdate = Boolean;

export type RoleArn = String;

export type Stages = List<AWS.CodePipeline.Pipeline.StageDeclaration>;

export type Tags = List<AWS.CodePipeline.Pipeline.Tag>;

}

export namespace CustomActionType {

export type ArtifactDetails = { MaximumCount: Integer;

MinimumCount: Integer; };

export type ConfigurationProperties = List<AWS.CodePipeline.CustomActionType.ConfigurationProperties>;

export type Settings = AWS.CodePipeline.CustomActionType.Settings;

export type Category = String;

export type InputArtifactDetails = AWS.CodePipeline.CustomActionType.ArtifactDetails;

export type OutputArtifactDetails = AWS.CodePipeline.CustomActionType.ArtifactDetails;

export type Provider = String;

export type Tags = List<AWS.CodePipeline.CustomActionType.Tag>;

export type Version = String;

}

}

export namespace MSK {

export namespace Cluster {

export type S3 = { Bucket: String;

Enabled: Boolean;

Prefix: String; };

export type CloudWatchLogs = { LogGroup: String;

Enabled: Boolean; };

export type EncryptionAtRest = { DataVolumeKMSKeyId: String; };

export type BrokerLogs = { S3: AWS.MSK.Cluster.S3;

Firehose: AWS.MSK.Cluster.Firehose;

CloudWatchLogs: AWS.MSK.Cluster.CloudWatchLogs; };

export type EncryptionInTransit = { ClientBroker: String;

InCluster: Boolean; };

export type Prometheus = { JmxExporter: AWS.MSK.Cluster.JmxExporter;

NodeExporter: AWS.MSK.Cluster.NodeExporter; };

export type LoggingInfo = AWS.MSK.Cluster.LoggingInfo;

export type EncryptionInfo = AWS.MSK.Cluster.EncryptionInfo;

export type Iam = { Enabled: Boolean; };

export type Sasl = { Iam: AWS.MSK.Cluster.Iam;

Scram: AWS.MSK.Cluster.Scram; };

export type ConfigurationInfo = AWS.MSK.Cluster.ConfigurationInfo;

export type BrokerNodeGroupInfo = AWS.MSK.Cluster.BrokerNodeGroupInfo;

export type Scram = { Enabled: Boolean; };

export type JmxExporter = { EnabledInBroker: Boolean; };

export type StorageInfo = { EBSStorageInfo: AWS.MSK.Cluster.EBSStorageInfo; };

export type NodeExporter = { EnabledInBroker: Boolean; };

export type EBSStorageInfo = { VolumeSize: Integer; };

export type Firehose = { DeliveryStream: String;

Enabled: Boolean; };

export type ClientAuthentication = AWS.MSK.Cluster.ClientAuthentication;

export type Tls = { CertificateAuthorityArnList: List<String>; };

export type OpenMonitoring = AWS.MSK.Cluster.OpenMonitoring;

export type EnhancedMonitoring = String;

export type KafkaVersion = String;

export type NumberOfBrokerNodes = Integer;

export type ClusterName = String;

export type Tags = Json;

}

}

export namespace NimbleStudio {

export namespace StudioComponent {

export type LicenseServiceConfiguration = { Endpoint: String; };

export type ScriptParameterKeyValue = { Key: String;

Value: String; };

export type ActiveDirectoryConfiguration = { ComputerAttributes: List<AWS.NimbleStudio.StudioComponent.ActiveDirectoryComputerAttribute>;

DirectoryId: String;

OrganizationalUnitDistinguishedName: String; };

export type ActiveDirectoryComputerAttribute = { Name: String;

Value: String; };

export type StudioComponentConfiguration = { ActiveDirectoryConfiguration: AWS.NimbleStudio.StudioComponent.ActiveDirectoryConfiguration;

ComputeFarmConfiguration: AWS.NimbleStudio.StudioComponent.ComputeFarmConfiguration;

LicenseServiceConfiguration: AWS.NimbleStudio.StudioComponent.LicenseServiceConfiguration;

SharedFileSystemConfiguration: AWS.NimbleStudio.StudioComponent.SharedFileSystemConfiguration; };

export type StudioComponentInitializationScript = { LaunchProfileProtocolVersion: String;

Platform: String;

RunContext: String;

Script: String; };

export type ComputeFarmConfiguration = { ActiveDirectoryUser: String;

Endpoint: String; };

export type SharedFileSystemConfiguration = { Endpoint: String;

FileSystemId: String;

LinuxMountPoint: String;

ShareName: String;

WindowsMountDrive: String; };

export type Configuration = AWS.NimbleStudio.StudioComponent.StudioComponentConfiguration;

export type Description = String;

export type InitializationScripts = List<AWS.NimbleStudio.StudioComponent.StudioComponentInitializationScript>;

export type Name = String;

export type ScriptParameters = List<AWS.NimbleStudio.StudioComponent.ScriptParameterKeyValue>;

export type Ec2SecurityGroupIds = List<String>;

export type StudioId = String;

export type Subtype = String;

export type Type = String;

export type Tags = Map<String>;

}

export namespace LaunchProfile {

export type StreamConfiguration = AWS.NimbleStudio.LaunchProfile.StreamConfiguration;

export type Description = String;

export type Name = String;

export type Ec2SubnetIds = List<String>;

export type StudioComponentIds = List<String>;

export type LaunchProfileProtocolVersions = List<String>;

export type StudioId = String;

export type Tags = Map<String>;

}

export namespace Studio {

export type StudioEncryptionConfiguration = AWS.NimbleStudio.Studio.StudioEncryptionConfiguration;

export type AdminRoleArn = String;

export type DisplayName = String;

export type StudioName = String;

export type UserRoleArn = String;

export type Tags = Map<String>;

}

export namespace StreamingImage {

export type StudioId = String;

export type Ec2ImageId = String;

export type Name = String;

export type Description = String;

export type Tags = Map<String>;

}

}

export namespace GlobalAccelerator {

export namespace EndpointGroup {

export type PortOverride = { ListenerPort: Integer;

EndpointPort: Integer; };

export type EndpointConfiguration = { EndpointId: String;

Weight: Integer;

ClientIPPreservationEnabled: Boolean; };

export type ListenerArn = String;

export type EndpointGroupRegion = String;

export type EndpointConfigurations = List<AWS.GlobalAccelerator.EndpointGroup.EndpointConfiguration>;

export type TrafficDialPercentage = Double;

export type HealthCheckPort = Integer;

export type HealthCheckProtocol = String;

export type HealthCheckPath = String;

export type HealthCheckIntervalSeconds = Integer;

export type ThresholdCount = Integer;

export type PortOverrides = List<AWS.GlobalAccelerator.EndpointGroup.PortOverride>;

}

export namespace Listener {

export type PortRange = { FromPort: Integer;

ToPort: Integer; };

export type AcceleratorArn = String;

export type PortRanges = List<AWS.GlobalAccelerator.Listener.PortRange>;

export type Protocol = String;

export type ClientAffinity = String;

}

export namespace Accelerator {

export type Name = String;

export type IpAddressType = String;

export type IpAddresses = List<String>;

export type Enabled = Boolean;

export type Tags = List<AWS.GlobalAccelerator.Accelerator.Tag>;

}

}

export namespace IVS {

export namespace RecordingConfiguration {

export type DestinationConfiguration = AWS.IVS.RecordingConfiguration.DestinationConfiguration;

export type S3DestinationConfiguration = { BucketName: String; };

export type Name = String;

export type Tags = List<AWS.IVS.RecordingConfiguration.Tag>;

}

export namespace Channel {

export type Name = String;

export type Authorized = Boolean;

export type LatencyMode = String;

export type Type = String;

export type Tags = List<AWS.IVS.Channel.Tag>;

export type RecordingConfigurationArn = String;

}

export namespace PlaybackKeyPair {

export type Name = String;

export type PublicKeyMaterial = String;

export type Tags = List<AWS.IVS.PlaybackKeyPair.Tag>;

}

export namespace StreamKey {

export type ChannelArn = String;

export type Tags = List<AWS.IVS.StreamKey.Tag>;

}

}

export namespace AmazonMQ {

export namespace Broker {

export type LogList = { Audit: Boolean;

General: Boolean; };

export type User = { Username: String;

Groups: List<String>;

ConsoleAccess: Boolean;

Password: String; };

export type LdapServerMetadata = AWS.AmazonMQ.Broker.LdapServerMetadata;

export type EncryptionOptions = AWS.AmazonMQ.Broker.EncryptionOptions;

export type MaintenanceWindow = { DayOfWeek: String;

TimeOfDay: String;

TimeZone: String; };

export type TagsEntry = { Value: String;

Key: String; };

export type ConfigurationId = { Revision: Integer;

Id: String; };

export type SecurityGroups = List<String>;

export type StorageType = String;

export type EngineVersion = String;

export type Configuration = AWS.AmazonMQ.Broker.ConfigurationId;

export type AuthenticationStrategy = String;

export type MaintenanceWindowStartTime = AWS.AmazonMQ.Broker.MaintenanceWindow;

export type HostInstanceType = String;

export type AutoMinorVersionUpgrade = Boolean;

export type Users = List<AWS.AmazonMQ.Broker.User>;

export type Logs = AWS.AmazonMQ.Broker.LogList;

export type SubnetIds = List<String>;

export type BrokerName = String;

export type DeploymentMode = String;

export type EngineType = String;

export type PubliclyAccessible = Boolean;

export type Tags = List<AWS.AmazonMQ.Broker.TagsEntry>;

}

export namespace Configuration {

export type TagsEntry = { Value: String;

Key: String; };

export type EngineVersion = String;

export type Description = String;

export type AuthenticationStrategy = String;

export type EngineType = String;

export type Data = String;

export type Tags = List<AWS.AmazonMQ.Configuration.TagsEntry>;

export type Name = String;

}

export namespace ConfigurationAssociation {

export type ConfigurationId = { Revision: Integer;

Id: String; };

export type Broker = String;

export type Configuration = AWS.AmazonMQ.ConfigurationAssociation.ConfigurationId;

}

}

export namespace DataPipeline {

export namespace Pipeline {

export type PipelineObject = { Fields: List<AWS.DataPipeline.Pipeline.Field>;

Id: String;

Name: String; };

export type ParameterAttribute = { Key: String;

StringValue: String; };

export type PipelineTag = { Key: String;

Value: String; };

export type ParameterObject = { Attributes: List<AWS.DataPipeline.Pipeline.ParameterAttribute>;

Id: String; };

export type ParameterValue = { Id: String;

StringValue: String; };

export type Field = { Key: String;

RefValue: String;

StringValue: String; };

export type Activate = Boolean;

export type Description = String;

export type Name = String;

export type ParameterObjects = List<AWS.DataPipeline.Pipeline.ParameterObject>;

export type ParameterValues = List<AWS.DataPipeline.Pipeline.ParameterValue>;

export type PipelineObjects = List<AWS.DataPipeline.Pipeline.PipelineObject>;

export type PipelineTags = List<AWS.DataPipeline.Pipeline.PipelineTag>;

}

}

export namespace FIS {

export namespace ExperimentTemplate {

export type ExperimentTemplateStopCondition = { Source: String;

Value: String; };

export type ExperimentTemplateTarget = { ResourceType: String;

ResourceArns: List<String>;

ResourceTags: Map<String>;

Filters: List<AWS.FIS.ExperimentTemplate.ExperimentTemplateTargetFilter>;

SelectionMode: String; };

export type ExperimentTemplateAction = { ActionId: String;

Description: String;

Parameters: Map<String>;

Targets: Map<String>;

StartAfter: List<String>; };

export type ExperimentTemplateTargetFilter = { Path: String;

Values: List<String>; };

export type Description = String;

export type Targets = Map<AWS.FIS.ExperimentTemplate.ExperimentTemplateTarget>;

export type Actions = Map<AWS.FIS.ExperimentTemplate.ExperimentTemplateAction>;

export type StopConditions = List<AWS.FIS.ExperimentTemplate.ExperimentTemplateStopCondition>;

export type RoleArn = String;

export type Tags = Map<String>;

}

}

export namespace IAM {

export namespace Role {

export type Policy = { PolicyDocument: Json;

PolicyName: String; };

export type AssumeRolePolicyDocument = Json;

export type Description = String;

export type ManagedPolicyArns = List<String>;

export type MaxSessionDuration = Integer;

export type Path = String;

export type PermissionsBoundary = String;

export type Policies = List<AWS.IAM.Role.Policy>;

export type RoleName = String;

export type Tags = List<AWS.IAM.Role.Tag>;

}

export namespace User {

export type LoginProfile = AWS.IAM.User.LoginProfile;

export type Policy = { PolicyDocument: Json;

PolicyName: String; };

export type Groups = List<String>;

export type ManagedPolicyArns = List<String>;

export type Path = String;

export type PermissionsBoundary = String;

export type Policies = List<AWS.IAM.User.Policy>;

export type Tags = List<AWS.IAM.User.Tag>;

export type UserName = String;

}

export namespace Group {

export type Policy = { PolicyDocument: Json;

PolicyName: String; };

export type GroupName = String;

export type ManagedPolicyArns = List<String>;

export type Path = String;

export type Policies = List<AWS.IAM.Group.Policy>;

}

export namespace VirtualMFADevice {

export type VirtualMfaDeviceName = String;

export type Path = String;

export type Users = List<String>;

export type Tags = List<AWS.IAM.VirtualMFADevice.Tag>;

}

export namespace SAMLProvider {

export type Name = String;

export type SamlMetadataDocument = String;

export type Tags = List<AWS.IAM.SAMLProvider.Tag>;

}

export namespace ServerCertificate {

export type CertificateBody = String;

export type CertificateChain = String;

export type ServerCertificateName = String;

export type Path = String;

export type PrivateKey = String;

export type Tags = List<AWS.IAM.ServerCertificate.Tag>;

}

export namespace Policy {

export type Groups = List<String>;

export type PolicyDocument = Json;

export type PolicyName = String;

export type Roles = List<String>;

export type Users = List<String>;

}

export namespace ServiceLinkedRole {

export type CustomSuffix = String;

export type Description = String;

export type AWSServiceName = String;

}

export namespace AccessKey {

export type Serial = Integer;

export type Status = String;

export type UserName = String;

}

export namespace OIDCProvider {

export type ClientIdList = List<String>;

export type Url = String;

export type ThumbprintList = List<String>;

export type Tags = List<AWS.IAM.OIDCProvider.Tag>;

}

export namespace UserToGroupAddition {

export type GroupName = String;

export type Users = List<String>;

}

export namespace InstanceProfile {

export type InstanceProfileName = String;

export type Path = String;

export type Roles = List<String>;

}

export namespace ManagedPolicy {

export type Description = String;

export type Groups = List<String>;

export type ManagedPolicyName = String;

export type Path = String;

export type PolicyDocument = Json;

export type Roles = List<String>;

export type Users = List<String>;

}

}

export namespace FraudDetector {

export namespace Detector {

export type Label = { Arn: String;

Inline: Boolean;

Name: String;

Description: String;

Tags: List<AWS.FraudDetector.Detector.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type EntityType = { Arn: String;

Inline: Boolean;

Name: String;

Description: String;

Tags: List<AWS.FraudDetector.Detector.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type Model = { Arn: String; };

export type Outcome = { Arn: String;

Inline: Boolean;

Name: String;

Description: String;

Tags: List<AWS.FraudDetector.Detector.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type EventVariable = { Arn: String;

Inline: Boolean;

Name: String;

DataSource: String;

DataType: String;

DefaultValue: String;

VariableType: String;

Description: String;

Tags: List<AWS.FraudDetector.Detector.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type Rule = { RuleId: String;

RuleVersion: String;

DetectorId: String;

Expression: String;

Language: String;

Outcomes: List<AWS.FraudDetector.Detector.Outcome>;

Arn: String;

Description: String;

Tags: List<AWS.FraudDetector.Detector.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type EventType = AWS.FraudDetector.Detector.EventType;

export type DetectorId = String;

export type DetectorVersionStatus = String;

export type RuleExecutionMode = String;

export type Tags = List<AWS.FraudDetector.Detector.Tag>;

export type Description = String;

export type Rules = List<AWS.FraudDetector.Detector.Rule>;

export type AssociatedModels = List<AWS.FraudDetector.Detector.Model>;

}

export namespace EventType {

export type EntityType = { Arn: String;

Inline: Boolean;

Name: String;

Description: String;

Tags: List<AWS.FraudDetector.EventType.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type EventVariable = { Arn: String;

Inline: Boolean;

Name: String;

DataSource: String;

DataType: String;

DefaultValue: String;

VariableType: String;

Description: String;

Tags: List<AWS.FraudDetector.EventType.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type Label = { Arn: String;

Inline: Boolean;

Name: String;

Description: String;

Tags: List<AWS.FraudDetector.EventType.Tag>;

CreatedTime: String;

LastUpdatedTime: String; };

export type Name = String;

export type Tags = List<AWS.FraudDetector.EventType.Tag>;

export type Description = String;

export type EventVariables = List<AWS.FraudDetector.EventType.EventVariable>;

export type Labels = List<AWS.FraudDetector.EventType.Label>;

export type EntityTypes = List<AWS.FraudDetector.EventType.EntityType>;

}

export namespace EntityType {

export type Name = String;

export type Tags = List<AWS.FraudDetector.EntityType.Tag>;

export type Description = String;

}

export namespace Outcome {

export type Name = String;

export type Tags = List<AWS.FraudDetector.Outcome.Tag>;

export type Description = String;

}

export namespace Label {

export type Name = String;

export type Tags = List<AWS.FraudDetector.Label.Tag>;

export type Description = String;

}

export namespace Variable {

export type Name = String;

export type DataSource = String;

export type DataType = String;

export type DefaultValue = String;

export type Description = String;

export type Tags = List<AWS.FraudDetector.Variable.Tag>;

export type VariableType = String;

}

}

export namespace ServiceCatalog {

export namespace CloudFormationProvisionedProduct {

export type ProvisioningParameter = { Key: String;

Value: String; };

export type ProvisioningPreferences = AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningPreferences;

export type AcceptLanguage = String;

export type NotificationArns = List<String>;

export type PathId = String;

export type PathName = String;

export type ProductId = String;

export type ProductName = String;

export type ProvisionedProductName = String;

export type ProvisioningArtifactId = String;

export type ProvisioningArtifactName = String;

export type ProvisioningParameters = List<AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningParameter>;

export type Tags = List<AWS.ServiceCatalog.CloudFormationProvisionedProduct.Tag>;

}

export namespace ServiceAction {

export type DefinitionParameter = { Key: String;

Value: String; };

export type AcceptLanguage = String;

export type Name = String;

export type DefinitionType = String;

export type Definition = List<AWS.ServiceCatalog.ServiceAction.DefinitionParameter>;

export type Description = String;

}

export namespace CloudFormationProduct {

export type ProvisioningArtifactProperties = { Description: String;

DisableTemplateValidation: Boolean;

Info: Json;

Name: String; };

export type ReplaceProvisioningArtifacts = Boolean;

export type Owner = String;

export type SupportDescription = String;

export type Description = String;

export type Distributor = String;

export type SupportEmail = String;

export type AcceptLanguage = String;

export type SupportUrl = String;

export type Tags = List<AWS.ServiceCatalog.CloudFormationProduct.Tag>;

export type Name = String;

export type ProvisioningArtifactParameters = List<AWS.ServiceCatalog.CloudFormationProduct.ProvisioningArtifactProperties>;

}

export namespace PortfolioShare {

export type AccountId = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ShareTagOptions = Boolean;

}

export namespace ResourceUpdateConstraint {

export type Description = String;

export type AcceptLanguage = String;

export type TagUpdateOnProvisionedProduct = String;

export type PortfolioId = String;

export type ProductId = String;

}

export namespace TagOption {

export type Active = Boolean;

export type Value = String;

export type Key = String;

}

export namespace PortfolioProductAssociation {

export type SourcePortfolioId = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ProductId = String;

}

export namespace AcceptedPortfolioShare {

export type AcceptLanguage = String;

export type PortfolioId = String;

}

export namespace LaunchTemplateConstraint {

export type Description = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ProductId = String;

export type Rules = String;

}

export namespace Portfolio {

export type ProviderName = String;

export type Description = String;

export type DisplayName = String;

export type AcceptLanguage = String;

export type Tags = List<AWS.ServiceCatalog.Portfolio.Tag>;

}

export namespace LaunchNotificationConstraint {

export type Description = String;

export type NotificationArns = List<String>;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ProductId = String;

}

export namespace ServiceActionAssociation {

export type ProductId = String;

export type ProvisioningArtifactId = String;

export type ServiceActionId = String;

}

export namespace StackSetConstraint {

export type Description = String;

export type StackInstanceControl = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ProductId = String;

export type RegionList = List<String>;

export type AdminRole = String;

export type AccountList = List<String>;

export type ExecutionRole = String;

}

export namespace TagOptionAssociation {

export type TagOptionId = String;

export type ResourceId = String;

}

export namespace PortfolioPrincipalAssociation {

export type PrincipalARN = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type PrincipalType = String;

}

export namespace LaunchRoleConstraint {

export type Description = String;

export type LocalRoleName = String;

export type AcceptLanguage = String;

export type PortfolioId = String;

export type ProductId = String;

export type RoleArn = String;

}

}

export namespace Location {

export namespace PlaceIndex {

export type DataSourceConfiguration = AWS.Location.PlaceIndex.DataSourceConfiguration;

export type DataSource = String;

export type Description = String;

export type IndexName = String;

export type PricingPlan = String;

}

export namespace Map {

export type MapConfiguration = { Style: String; };

export type Configuration = AWS.Location.Map.MapConfiguration;

export type Description = String;

export type MapName = String;

export type PricingPlan = String;

}

export namespace Tracker {

export type Description = String;

export type KmsKeyId = String;

export type PricingPlan = String;

export type PricingPlanDataSource = String;

export type TrackerName = String;

}

export namespace GeofenceCollection {

export type CollectionName = String;

export type Description = String;

export type KmsKeyId = String;

export type PricingPlan = String;

export type PricingPlanDataSource = String;

}

export namespace TrackerConsumer {

export type ConsumerArn = String;

export type TrackerName = String;

}

export namespace RouteCalculator {

export type CalculatorName = String;

export type DataSource = String;

export type Description = String;

export type PricingPlan = String;

}

}

export namespace LicenseManager {

export namespace License {

export type ProvisionalConfiguration = { MaxTimeToLiveInMinutes: Integer; };

export type ConsumptionConfiguration = AWS.LicenseManager.License.ConsumptionConfiguration;

export type IssuerData = { Name: String;

SignKey: String; };

export type BorrowConfiguration = { MaxTimeToLiveInMinutes: Integer;

AllowEarlyCheckIn: Boolean; };

export type Metadata = { Name: String;

Value: String; };

export type Entitlement = { Name: String;

Value: String;

MaxCount: Integer;

Overage: Boolean;

Unit: String;

AllowCheckIn: Boolean; };

export type ValidityDateFormat = { Begin: String;

End: String; };

export type ProductSKU = String;

export type Issuer = AWS.LicenseManager.License.IssuerData;

export type LicenseName = String;

export type ProductName = String;

export type HomeRegion = String;

export type Validity = AWS.LicenseManager.License.ValidityDateFormat;

export type Entitlements = List<AWS.LicenseManager.License.Entitlement>;

export type Beneficiary = String;

export type LicenseMetadata = List<AWS.LicenseManager.License.Metadata>;

export type Status = String;

}

export namespace Grant {

export type GrantName = String;

export type LicenseArn = String;

export type HomeRegion = String;

export type AllowedOperations = List<String>;

export type Principals = List<String>;

export type Status = String;

}

}

export namespace MediaStore {

export namespace Container {

export type MetricPolicy = AWS.MediaStore.Container.MetricPolicy;

export type MetricPolicyRule = { ObjectGroup: String;

ObjectGroupName: String; };

export type CorsRule = { AllowedMethods: List<String>;

AllowedOrigins: List<String>;

ExposeHeaders: List<String>;

MaxAgeSeconds: Integer;

AllowedHeaders: List<String>; };

export type Policy = String;

export type ContainerName = String;

export type CorsPolicy = List<AWS.MediaStore.Container.CorsRule>;

export type LifecyclePolicy = String;

export type AccessLoggingEnabled = Boolean;

export type Tags = List<AWS.MediaStore.Container.Tag>;

}

}

export namespace Events {

export namespace Rule {

export type BatchRetryStrategy = { Attempts: Integer; };

export type HttpParameters = { HeaderParameters: Map<String>;

PathParameterValues: List<String>;

QueryStringParameters: Map<String>; };

export type BatchArrayProperties = { Size: Integer; };

export type BatchParameters = { ArrayProperties: AWS.Events.Rule.BatchArrayProperties;

JobDefinition: String;

JobName: String;

RetryStrategy: AWS.Events.Rule.BatchRetryStrategy; };

export type RunCommandParameters = { RunCommandTargets: List<AWS.Events.Rule.RunCommandTarget>; };

export type DeadLetterConfig = { Arn: String; };

export type NetworkConfiguration = { AwsVpcConfiguration: AWS.Events.Rule.AwsVpcConfiguration; };

export type RunCommandTarget = { Key: String;

Values: List<String>; };

export type InputTransformer = { InputPathsMap: Map<String>;

InputTemplate: String; };

export type SqsParameters = { MessageGroupId: String; };

export type RetryPolicy = { MaximumEventAgeInSeconds: Integer;

MaximumRetryAttempts: Integer; };

export type Target = { Arn: String;

BatchParameters: AWS.Events.Rule.BatchParameters;

DeadLetterConfig: AWS.Events.Rule.DeadLetterConfig;

EcsParameters: AWS.Events.Rule.EcsParameters;

HttpParameters: AWS.Events.Rule.HttpParameters;

Id: String;

Input: String;

InputPath: String;

InputTransformer: AWS.Events.Rule.InputTransformer;

KinesisParameters: AWS.Events.Rule.KinesisParameters;

RedshiftDataParameters: AWS.Events.Rule.RedshiftDataParameters;

RetryPolicy: AWS.Events.Rule.RetryPolicy;

RoleArn: String;

RunCommandParameters: AWS.Events.Rule.RunCommandParameters;

SqsParameters: AWS.Events.Rule.SqsParameters; };

export type KinesisParameters = { PartitionKeyPath: String; };

export type RedshiftDataParameters = { Database: String;

DbUser: String;

SecretManagerArn: String;

Sql: String;

StatementName: String;

WithEvent: Boolean; };

export type EcsParameters = { Group: String;

LaunchType: String;

NetworkConfiguration: AWS.Events.Rule.NetworkConfiguration;

PlatformVersion: String;

TaskCount: Integer;

TaskDefinitionArn: String; };

export type AwsVpcConfiguration = { AssignPublicIp: String;

SecurityGroups: List<String>;

Subnets: List<String>; };

export type Description = String;

export type EventBusName = String;

export type EventPattern = Json;

export type Name = String;

export type RoleArn = String;

export type ScheduleExpression = String;

export type State = String;

export type Targets = List<AWS.Events.Rule.Target>;

}

export namespace EventBusPolicy {

export type Condition = AWS.Events.EventBusPolicy.Condition;

export type EventBusName = String;

export type Action = String;

export type StatementId = String;

export type Statement = Json;

export type Principal = String;

}

export namespace ApiDestination {

export type Name = String;

export type Description = String;

export type ConnectionArn = String;

export type InvocationRateLimitPerSecond = Integer;

export type InvocationEndpoint = String;

export type HttpMethod = String;

}

export namespace Archive {

export type ArchiveName = String;

export type SourceArn = String;

export type Description = String;

export type EventPattern = Json;

export type RetentionDays = Integer;

}

export namespace Connection {

export type Name = String;

export type Description = String;

export type AuthorizationType = String;

export type AuthParameters = Json;

}

export namespace EventBus {

export type EventSourceName = String;

export type Name = String;

}

}

export namespace Signer {

export namespace SigningProfile {

export type SignatureValidityPeriod = AWS.Signer.SigningProfile.SignatureValidityPeriod;

export type PlatformId = String;

export type Tags = List<AWS.Signer.SigningProfile.Tag>;

}

export namespace ProfilePermission {

export type ProfileName = String;

export type ProfileVersion = String;

export type Action = String;

export type Principal = String;

export type StatementId = String;

}

}

export namespace Kendra {

export namespace DataSource {

export type ConfluenceAttachmentToIndexFieldMapping = { DataSourceFieldName: String;

DateFieldFormat: String;

IndexFieldName: String; };

export type SalesforceStandardObjectConfiguration = { Name: String;

DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type SalesforceChatterFeedConfiguration = { DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>;

IncludeFilterTypes: List<String>; };

export type SalesforceConfiguration = { ServerUrl: String;

SecretArn: String;

StandardObjectConfigurations: List<AWS.Kendra.DataSource.SalesforceStandardObjectConfiguration>;

KnowledgeArticleConfiguration: AWS.Kendra.DataSource.SalesforceKnowledgeArticleConfiguration;

ChatterFeedConfiguration: AWS.Kendra.DataSource.SalesforceChatterFeedConfiguration;

CrawlAttachments: Boolean;

StandardObjectAttachmentConfiguration: AWS.Kendra.DataSource.SalesforceStandardObjectAttachmentConfiguration;

IncludeAttachmentFilePatterns: List<String>;

ExcludeAttachmentFilePatterns: List<String>; };

export type ColumnConfiguration = { DocumentIdColumnName: String;

DocumentDataColumnName: String;

DocumentTitleColumnName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>;

ChangeDetectingColumns: List<String>; };

export type ServiceNowKnowledgeArticleConfiguration = { CrawlAttachments: Boolean;

IncludeAttachmentFilePatterns: List<String>;

ExcludeAttachmentFilePatterns: List<String>;

DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type ConfluenceSpaceConfiguration = { CrawlPersonalSpaces: Boolean;

CrawlArchivedSpaces: Boolean;

IncludeSpaces: List<String>;

ExcludeSpaces: List<String>;

SpaceFieldMappings: List<AWS.Kendra.DataSource.ConfluenceSpaceToIndexFieldMapping>; };

export type GoogleDriveConfiguration = { SecretArn: String;

InclusionPatterns: List<String>;

ExclusionPatterns: List<String>;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>;

ExcludeMimeTypes: List<String>;

ExcludeUserAccounts: List<String>;

ExcludeSharedDrives: List<String>; };

export type S3Path = { Bucket: String;

Key: String; };

export type ServiceNowConfiguration = { HostUrl: String;

SecretArn: String;

ServiceNowBuildVersion: String;

KnowledgeArticleConfiguration: AWS.Kendra.DataSource.ServiceNowKnowledgeArticleConfiguration;

ServiceCatalogConfiguration: AWS.Kendra.DataSource.ServiceNowServiceCatalogConfiguration; };

export type ConfluenceConfiguration = { ServerUrl: String;

SecretArn: String;

Version: String;

SpaceConfiguration: AWS.Kendra.DataSource.ConfluenceSpaceConfiguration;

PageConfiguration: AWS.Kendra.DataSource.ConfluencePageConfiguration;

BlogConfiguration: AWS.Kendra.DataSource.ConfluenceBlogConfiguration;

AttachmentConfiguration: AWS.Kendra.DataSource.ConfluenceAttachmentConfiguration;

VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

InclusionPatterns: List<String>;

ExclusionPatterns: List<String>; };

export type ConfluencePageToIndexFieldMapping = { DataSourceFieldName: String;

DateFieldFormat: String;

IndexFieldName: String; };

export type DatabaseConfiguration = { DatabaseEngineType: String;

ConnectionConfiguration: AWS.Kendra.DataSource.ConnectionConfiguration;

VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

ColumnConfiguration: AWS.Kendra.DataSource.ColumnConfiguration;

AclConfiguration: AWS.Kendra.DataSource.AclConfiguration;

SqlConfiguration: AWS.Kendra.DataSource.SqlConfiguration; };

export type SqlConfiguration = { QueryIdentifiersEnclosingOption: String; };

export type S3DataSourceConfiguration = { BucketName: String;

InclusionPrefixes: List<String>;

InclusionPatterns: List<String>;

ExclusionPatterns: List<String>;

DocumentsMetadataConfiguration: AWS.Kendra.DataSource.DocumentsMetadataConfiguration;

AccessControlListConfiguration: AWS.Kendra.DataSource.AccessControlListConfiguration; };

export type ConfluenceBlogConfiguration = { BlogFieldMappings: List<AWS.Kendra.DataSource.ConfluenceBlogToIndexFieldMapping>; };

export type ConfluencePageConfiguration = { PageFieldMappings: List<AWS.Kendra.DataSource.ConfluencePageToIndexFieldMapping>; };

export type ConnectionConfiguration = { DatabaseHost: String;

DatabasePort: Integer;

DatabaseName: String;

TableName: String;

SecretArn: String; };

export type ServiceNowServiceCatalogConfiguration = { CrawlAttachments: Boolean;

IncludeAttachmentFilePatterns: List<String>;

ExcludeAttachmentFilePatterns: List<String>;

DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type SalesforceStandardObjectAttachmentConfiguration = { DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type SalesforceCustomKnowledgeArticleTypeConfiguration = { Name: String;

DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type ConfluenceBlogToIndexFieldMapping = { DataSourceFieldName: String;

DateFieldFormat: String;

IndexFieldName: String; };

export type OneDriveUsers = { OneDriveUserList: List<String>;

OneDriveUserS3Path: AWS.Kendra.DataSource.S3Path; };

export type AclConfiguration = { AllowedGroupsColumnName: String; };

export type SalesforceStandardKnowledgeArticleTypeConfiguration = { DocumentDataFieldName: String;

DocumentTitleFieldName: String;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>; };

export type ConfluenceAttachmentConfiguration = { CrawlAttachments: Boolean;

AttachmentFieldMappings: List<AWS.Kendra.DataSource.ConfluenceAttachmentToIndexFieldMapping>; };

export type DataSourceVpcConfiguration = { SubnetIds: List<String>;

SecurityGroupIds: List<String>; };

export type SalesforceKnowledgeArticleConfiguration = { IncludedStates: List<String>;

StandardKnowledgeArticleTypeConfiguration: AWS.Kendra.DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration;

CustomKnowledgeArticleTypeConfigurations: List<AWS.Kendra.DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration>; };

export type AccessControlListConfiguration = { KeyPath: String; };

export type DataSourceToIndexFieldMapping = { DataSourceFieldName: String;

DateFieldFormat: String;

IndexFieldName: String; };

export type ConfluenceSpaceToIndexFieldMapping = { DataSourceFieldName: String;

DateFieldFormat: String;

IndexFieldName: String; };

export type OneDriveConfiguration = { TenantDomain: String;

SecretArn: String;

OneDriveUsers: AWS.Kendra.DataSource.OneDriveUsers;

InclusionPatterns: List<String>;

ExclusionPatterns: List<String>;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>;

DisableLocalGroups: Boolean; };

export type DataSourceConfiguration = AWS.Kendra.DataSource.DataSourceConfiguration;

export type SharePointConfiguration = { SharePointVersion: String;

Urls: List<String>;

SecretArn: String;

CrawlAttachments: Boolean;

UseChangeLog: Boolean;

InclusionPatterns: List<String>;

ExclusionPatterns: List<String>;

VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

FieldMappings: List<AWS.Kendra.DataSource.DataSourceToIndexFieldMapping>;

DocumentTitleFieldName: String;

DisableLocalGroups: Boolean; };

export type DocumentsMetadataConfiguration = { S3Prefix: String; };

export type Name = String;

export type IndexId = String;

export type Type = String;

export type Description = String;

export type Schedule = String;

export type RoleArn = String;

export type Tags = List<AWS.Kendra.DataSource.Tag>;

}

export namespace Index {

export type ServerSideEncryptionConfiguration = AWS.Kendra.Index.ServerSideEncryptionConfiguration;

export type JsonTokenTypeConfiguration = { UserNameAttributeField: String;

GroupAttributeField: String; };

export type ValueImportanceItem = { Key: String;

Value: Integer; };

export type DocumentMetadataConfiguration = { Name: String;

Type: String;

Relevance: AWS.Kendra.Index.Relevance;

Search: AWS.Kendra.Index.Search; };

export type UserTokenConfiguration = { JwtTokenTypeConfiguration: AWS.Kendra.Index.JwtTokenTypeConfiguration;

JsonTokenTypeConfiguration: AWS.Kendra.Index.JsonTokenTypeConfiguration; };

export type Search = { Facetable: Boolean;

Searchable: Boolean;

Displayable: Boolean;

Sortable: Boolean; };

export type Relevance = { Freshness: Boolean;

Importance: Integer;

Duration: String;

RankOrder: String;

ValueImportanceItems: List<AWS.Kendra.Index.ValueImportanceItem>; };

export type JwtTokenTypeConfiguration = { KeyLocation: String;

URL: String;

SecretManagerArn: String;

UserNameAttributeField: String;

GroupAttributeField: String;

Issuer: String;

ClaimRegex: String; };

export type CapacityUnitsConfiguration = { StorageCapacityUnits: Integer;

QueryCapacityUnits: Integer; };

export type Description = String;

export type Tags = List<AWS.Kendra.Index.Tag>;

export type Name = String;

export type RoleArn = String;

export type Edition = String;

export type DocumentMetadataConfigurations = List<AWS.Kendra.Index.DocumentMetadataConfiguration>;

export type CapacityUnits = AWS.Kendra.Index.CapacityUnitsConfiguration;

export type UserContextPolicy = String;

export type UserTokenConfigurations = List<AWS.Kendra.Index.UserTokenConfiguration>;

}

export namespace Faq {

export type S3Path = AWS.Kendra.Faq.S3Path;

export type IndexId = String;

export type Name = String;

export type Description = String;

export type FileFormat = String;

export type RoleArn = String;

export type Tags = List<AWS.Kendra.Faq.Tag>;

}

}

export namespace Amplify {

export namespace App {

export type EnvironmentVariable = { Name: String;

Value: String; };

export type AutoBranchCreationConfig = AWS.Amplify.App.AutoBranchCreationConfig;

export type BasicAuthConfig = AWS.Amplify.App.BasicAuthConfig;

export type CustomRule = { Condition: String;

Status: String;

Target: String;

Source: String; };

export type AccessToken = String;

export type BuildSpec = String;

export type CustomHeaders = String;

export type CustomRules = List<AWS.Amplify.App.CustomRule>;

export type Description = String;

export type EnableBranchAutoDeletion = Boolean;

export type EnvironmentVariables = List<AWS.Amplify.App.EnvironmentVariable>;

export type IAMServiceRole = String;

export type Name = String;

export type OauthToken = String;

export type Repository = String;

export type Tags = List<AWS.Amplify.App.Tag>;

}

export namespace Domain {

export type SubDomainSetting = { Prefix: String;

BranchName: String; };

export type SubDomainSettings = List<AWS.Amplify.Domain.SubDomainSetting>;

export type AppId = String;

export type AutoSubDomainIAMRole = String;

export type DomainName = String;

export type EnableAutoSubDomain = Boolean;

export type AutoSubDomainCreationPatterns = List<String>;

}

export namespace Branch {

export type BasicAuthConfig = AWS.Amplify.Branch.BasicAuthConfig;

export type EnvironmentVariable = { Name: String;

Value: String; };

export type AppId = String;

export type BranchName = String;

export type BuildSpec = String;

export type Description = String;

export type EnableAutoBuild = Boolean;

export type EnablePerformanceMode = Boolean;

export type EnablePullRequestPreview = Boolean;

export type EnvironmentVariables = List<AWS.Amplify.Branch.EnvironmentVariable>;

export type PullRequestEnvironmentName = String;

export type Stage = String;

export type Tags = List<AWS.Amplify.Branch.Tag>;

}

}

export namespace RoboMaker {

export namespace SimulationApplication {

export type SimulationSoftwareSuite = AWS.RoboMaker.SimulationApplication.SimulationSoftwareSuite;

export type RobotSoftwareSuite = AWS.RoboMaker.SimulationApplication.RobotSoftwareSuite;

export type SourceConfig = { S3Bucket: String;

Architecture: String;

S3Key: String; };

export type RenderingEngine = AWS.RoboMaker.SimulationApplication.RenderingEngine;

export type CurrentRevisionId = String;

export type Sources = List<AWS.RoboMaker.SimulationApplication.SourceConfig>;

export type Tags = Json;

export type Name = String;

}

export namespace RobotApplication {

export type RobotSoftwareSuite = AWS.RoboMaker.RobotApplication.RobotSoftwareSuite;

export type SourceConfig = { S3Bucket: String;

Architecture: String;

S3Key: String; };

export type CurrentRevisionId = String;

export type Sources = List<AWS.RoboMaker.RobotApplication.SourceConfig>;

export type Tags = Json;

export type Name = String;

}

export namespace SimulationApplicationVersion {

export type CurrentRevisionId = String;

export type Application = String;

}

export namespace Fleet {

export type Tags = Json;

export type Name = String;

}

export namespace RobotApplicationVersion {

export type CurrentRevisionId = String;

export type Application = String;

}

export namespace Robot {

export type Fleet = String;

export type Architecture = String;

export type GreengrassGroupId = String;

export type Tags = Json;

export type Name = String;

}

}

export namespace Macie {

export namespace FindingsFilter {

export type FindingsFilterListItem = { Id: String;

Name: String; };

export type FindingCriteria = AWS.Macie.FindingsFilter.FindingCriteria;

export type Criterion = any;

export type Name = String;

export type Description = String;

export type Action = String;

export type Position = Integer;

}

export namespace Session {

export type Status = String;

export type FindingPublishingFrequency = String;

}

export namespace CustomDataIdentifier {

export type Name = String;

export type Description = String;

export type Regex = String;

export type MaximumMatchDistance = Integer;

export type Keywords = List<String>;

export type IgnoreWords = List<String>;

}

}

export namespace Synthetics {

export namespace Canary {

export type VPCConfig = AWS.Synthetics.Canary.VPCConfig;

export type Schedule = AWS.Synthetics.Canary.Schedule;

export type Code = AWS.Synthetics.Canary.Code;

export type RunConfig = AWS.Synthetics.Canary.RunConfig;

export type Name = String;

export type ArtifactS3Location = String;

export type ExecutionRoleArn = String;

export type RuntimeVersion = String;

export type SuccessRetentionPeriod = Integer;

export type FailureRetentionPeriod = Integer;

export type Tags = List<AWS.Synthetics.Canary.Tag>;

export type StartCanaryAfterCreation = Boolean;

}

}

export namespace AutoScalingPlans {

export namespace ScalingPlan {

export type ScalingInstruction = { DisableDynamicScaling: Boolean;

ServiceNamespace: String;

PredictiveScalingMaxCapacityBehavior: String;

ScalableDimension: String;

ScalingPolicyUpdateBehavior: String;

MinCapacity: Integer;

TargetTrackingConfigurations: List<AWS.AutoScalingPlans.ScalingPlan.TargetTrackingConfiguration>;

PredictiveScalingMaxCapacityBuffer: Integer;

CustomizedLoadMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.CustomizedLoadMetricSpecification;

PredefinedLoadMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.PredefinedLoadMetricSpecification;

ResourceId: String;

ScheduledActionBufferTime: Integer;

MaxCapacity: Integer;

PredictiveScalingMode: String; };

export type MetricDimension = { Value: String;

Name: String; };

export type PredefinedScalingMetricSpecification = { ResourceLabel: String;

PredefinedScalingMetricType: String; };

export type CustomizedScalingMetricSpecification = { MetricName: String;

Statistic: String;

Dimensions: List<AWS.AutoScalingPlans.ScalingPlan.MetricDimension>;

Unit: String;

Namespace: String; };

export type TagFilter = { Values: List<String>;

Key: String; };

export type CustomizedLoadMetricSpecification = { MetricName: String;

Statistic: String;

Dimensions: List<AWS.AutoScalingPlans.ScalingPlan.MetricDimension>;

Unit: String;

Namespace: String; };

export type ApplicationSource = AWS.AutoScalingPlans.ScalingPlan.ApplicationSource;

export type TargetTrackingConfiguration = { ScaleOutCooldown: Integer;

TargetValue: Double;

PredefinedScalingMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.PredefinedScalingMetricSpecification;

DisableScaleIn: Boolean;

ScaleInCooldown: Integer;

EstimatedInstanceWarmup: Integer;

CustomizedScalingMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.CustomizedScalingMetricSpecification; };

export type PredefinedLoadMetricSpecification = { PredefinedLoadMetricType: String;

ResourceLabel: String; };

export type ScalingInstructions = List<AWS.AutoScalingPlans.ScalingPlan.ScalingInstruction>;

}

}

export namespace CertificateManager {

export namespace Account {

export type ExpiryEventsConfiguration = AWS.CertificateManager.Account.ExpiryEventsConfiguration;

}

export namespace Certificate {

export type DomainValidationOption = { DomainName: String;

HostedZoneId: String;

ValidationDomain: String; };

export type CertificateAuthorityArn = String;

export type CertificateTransparencyLoggingPreference = String;

export type DomainName = String;

export type DomainValidationOptions = List<AWS.CertificateManager.Certificate.DomainValidationOption>;

export type SubjectAlternativeNames = List<String>;

export type Tags = List<AWS.CertificateManager.Certificate.Tag>;

export type ValidationMethod = String;

}

}

export namespace ServiceDiscovery {

export namespace Service {

export type DnsConfig = AWS.ServiceDiscovery.Service.DnsConfig;

export type HealthCheckConfig = AWS.ServiceDiscovery.Service.HealthCheckConfig;

export type HealthCheckCustomConfig = AWS.ServiceDiscovery.Service.HealthCheckCustomConfig;

export type DnsRecord = { Type: String;

TTL: Double; };

export type Type = String;

export type Description = String;

export type NamespaceId = String;

export type Tags = List<AWS.ServiceDiscovery.Service.Tag>;

export type Name = String;

}

export namespace PublicDnsNamespace {

export type Properties = AWS.ServiceDiscovery.PublicDnsNamespace.Properties;

export type PublicDnsPropertiesMutable = { SOA: AWS.ServiceDiscovery.PublicDnsNamespace.SOA; };

export type SOA = { TTL: Double; };

export type Description = String;

export type Tags = List<AWS.ServiceDiscovery.PublicDnsNamespace.Tag>;

export type Name = String;

}

export namespace PrivateDnsNamespace {

export type Properties = AWS.ServiceDiscovery.PrivateDnsNamespace.Properties;

export type SOA = { TTL: Double; };

export type PrivateDnsPropertiesMutable = { SOA: AWS.ServiceDiscovery.PrivateDnsNamespace.SOA; };

export type Description = String;

export type Vpc = String;

export type Tags = List<AWS.ServiceDiscovery.PrivateDnsNamespace.Tag>;

export type Name = String;

}

export namespace Instance {

export type InstanceAttributes = Json;

export type InstanceId = String;

export type ServiceId = String;

}

export namespace HttpNamespace {

export type Description = String;

export type Tags = List<AWS.ServiceDiscovery.HttpNamespace.Tag>;

export type Name = String;

}

}

export namespace AccessAnalyzer {

export namespace Analyzer {

export type ArchiveRule = { Filter: List<AWS.AccessAnalyzer.Analyzer.Filter>;

RuleName: String; };

export type Filter = { Contains: List<String>;

Eq: List<String>;

Exists: Boolean;

Property: String;

Neq: List<String>; };

export type AnalyzerName = String;

export type ArchiveRules = List<AWS.AccessAnalyzer.Analyzer.ArchiveRule>;

export type Tags = List<AWS.AccessAnalyzer.Analyzer.Tag>;

export type Type = String;

}

}

export namespace S3ObjectLambda {

export namespace AccessPoint {

export type ObjectLambdaConfiguration = AWS.S3ObjectLambda.AccessPoint.ObjectLambdaConfiguration;

export type TransformationConfiguration = { Actions: List<String>;

ContentTransformation: Json; };

export type Name = String;

}

export namespace AccessPointPolicy {

export type ObjectLambdaAccessPoint = String;

export type PolicyDocument = Json;

}

}

export namespace IoTThingsGraph {

export namespace FlowTemplate {

export type DefinitionDocument = { Language: String;

Text: String; };

export type CompatibleNamespaceVersion = Double;

export type Definition = AWS.IoTThingsGraph.FlowTemplate.DefinitionDocument;

}

}

export namespace QLDB {

export namespace Stream {

export type KinesisConfiguration = AWS.QLDB.Stream.KinesisConfiguration;

export type LedgerName = String;

export type StreamName = String;

export type RoleArn = String;

export type InclusiveStartTime = String;

export type ExclusiveEndTime = String;

export type Tags = List<AWS.QLDB.Stream.Tag>;

}

export namespace Ledger {

export type PermissionsMode = String;

export type DeletionProtection = Boolean;

export type KmsKey = String;

export type Tags = List<AWS.QLDB.Ledger.Tag>;

export type Name = String;

}

}

export namespace MediaConvert {

export namespace JobTemplate {

export type HopDestination = { WaitMinutes: Integer;

Priority: Integer;

Queue: String; };

export type AccelerationSettings = AWS.MediaConvert.JobTemplate.AccelerationSettings;

export type Category = String;

export type Description = String;

export type Priority = Integer;

export type StatusUpdateInterval = String;

export type SettingsJson = Json;

export type Queue = String;

export type HopDestinations = List<AWS.MediaConvert.JobTemplate.HopDestination>;

export type Tags = Json;

export type Name = String;

}

export namespace Queue {

export type Status = String;

export type Description = String;

export type PricingPlan = String;

export type Tags = Json;

export type Name = String;

}

export namespace Preset {

export type Category = String;

export type Description = String;

export type SettingsJson = Json;

export type Tags = Json;

export type Name = String;

}

}

export namespace CE {

export namespace AnomalySubscription {

export type Subscriber = { Address: String;

Status: String;

Type: String; };

export type SubscriptionName = String;

export type MonitorArnList = List<String>;

export type Subscribers = List<AWS.CE.AnomalySubscription.Subscriber>;

export type Threshold = Double;

export type Frequency = String;

}

export namespace CostCategory {

export type Name = String;

export type RuleVersion = String;

export type Rules = String;

export type DefaultValue = String;

}

export namespace AnomalyMonitor {

export type MonitorType = String;

export type MonitorName = String;

export type MonitorDimension = String;

export type MonitorSpecification = String;

}

}

export namespace AppIntegrations {

export namespace EventIntegration {

export type Metadata = { Key: String;

Value: String; };

export type EventFilter = AWS.AppIntegrations.EventIntegration.EventFilter;

export type EventIntegrationAssociation = { ClientAssociationMetadata: List<AWS.AppIntegrations.EventIntegration.Metadata>;

ClientId: String;

EventBridgeRuleName: String;

EventIntegrationAssociationArn: String;

EventIntegrationAssociationId: String; };

export type Description = String;

export type Name = String;

export type EventBridgeBus = String;

export type Tags = List<AWS.AppIntegrations.EventIntegration.Tag>;

}

}

export namespace FMS {

export namespace Policy {

export type PolicyTag = { Key: String;

Value: String; };

export type ResourceTag = { Key: String;

Value: String; };

export type IEMap = { ACCOUNT: List<String>;

ORGUNIT: List<String>; };

export type ExcludeMap = AWS.FMS.Policy.IEMap;

export type ExcludeResourceTags = Boolean;

export type IncludeMap = AWS.FMS.Policy.IEMap;

export type PolicyName = String;

export type RemediationEnabled = Boolean;

export type ResourceTags = List<AWS.FMS.Policy.ResourceTag>;

export type ResourceType = String;

export type ResourceTypeList = List<String>;

export type SecurityServicePolicyData = Json;

export type DeleteAllPolicyResources = Boolean;

export type Tags = List<AWS.FMS.Policy.PolicyTag>;

}

export namespace NotificationChannel {

export type SnsRoleName = String;

export type SnsTopicArn = String;

}

}

export namespace Kinesis {

export namespace Stream {

export type StreamEncryption = AWS.Kinesis.Stream.StreamEncryption;

export type Name = String;

export type RetentionPeriodHours = Integer;

export type ShardCount = Integer;

export type Tags = List<AWS.Kinesis.Stream.Tag>;

}

export namespace StreamConsumer {

export type ConsumerName = String;

export type StreamARN = String;

}

}

export namespace CodeCommit {

export namespace Repository {

export type Code = AWS.CodeCommit.Repository.Code;

export type S3 = { ObjectVersion: String;

Bucket: String;

Key: String; };

export type RepositoryTrigger = { Events: List<String>;

Branches: List<String>;

CustomData: String;

DestinationArn: String;

Name: String; };

export type RepositoryName = String;

export type Triggers = List<AWS.CodeCommit.Repository.RepositoryTrigger>;

export type RepositoryDescription = String;

export type Tags = List<AWS.CodeCommit.Repository.Tag>;

}

}

export namespace EMRContainers {

export namespace VirtualCluster {

export type ContainerInfo = { EksInfo: AWS.EMRContainers.VirtualCluster.EksInfo; };

export type EksInfo = { Namespace: String; };

export type ContainerProvider = AWS.EMRContainers.VirtualCluster.ContainerProvider;

export type Name = String;

export type Tags = List<AWS.EMRContainers.VirtualCluster.Tag>;

}

}

export namespace Neptune {

export namespace DBCluster {

export type DBClusterRole = { RoleArn: String;

FeatureName: String; };

export type StorageEncrypted = Boolean;

export type RestoreToTime = String;

export type EngineVersion = String;

export type KmsKeyId = String;

export type AssociatedRoles = List<AWS.Neptune.DBCluster.DBClusterRole>;

export type AvailabilityZones = List<String>;

export type SnapshotIdentifier = String;

export type Port = Integer;

export type DBClusterIdentifier = String;

export type PreferredMaintenanceWindow = String;

export type IamAuthEnabled = Boolean;

export type DBSubnetGroupName = String;

export type DeletionProtection = Boolean;

export type PreferredBackupWindow = String;

export type UseLatestRestorableTime = Boolean;

export type VpcSecurityGroupIds = List<String>;

export type SourceDBClusterIdentifier = String;

export type DBClusterParameterGroupName = String;

export type BackupRetentionPeriod = Integer;

export type RestoreType = String;

export type Tags = List<AWS.Neptune.DBCluster.Tag>;

export type EnableCloudwatchLogsExports = List<String>;

}

export namespace DBSubnetGroup {

export type DBSubnetGroupName = String;

export type DBSubnetGroupDescription = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.Neptune.DBSubnetGroup.Tag>;

}

export namespace DBInstance {

export type DBParameterGroupName = String;

export type DBInstanceClass = String;

export type AllowMajorVersionUpgrade = Boolean;

export type DBClusterIdentifier = String;

export type AvailabilityZone = String;

export type PreferredMaintenanceWindow = String;

export type AutoMinorVersionUpgrade = Boolean;

export type DBSubnetGroupName = String;

export type DBInstanceIdentifier = String;

export type DBSnapshotIdentifier = String;

export type Tags = List<AWS.Neptune.DBInstance.Tag>;

}

export namespace DBClusterParameterGroup {

export type Description = String;

export type Parameters = Json;

export type Family = String;

export type Tags = List<AWS.Neptune.DBClusterParameterGroup.Tag>;

export type Name = String;

}

export namespace DBParameterGroup {

export type Description = String;

export type Parameters = Json;

export type Family = String;

export type Tags = List<AWS.Neptune.DBParameterGroup.Tag>;

export type Name = String;

}

}

export namespace SSO {

export namespace InstanceAccessControlAttributeConfiguration {

export type AccessControlAttribute = { Key: String;

Value: AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue; };

export type AccessControlAttributeValue = { Source: List<String>; };

export type InstanceArn = String;

export type AccessControlAttributes = List<AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttribute>;

}

export namespace Assignment {

export type InstanceArn = String;

export type TargetId = String;

export type TargetType = String;

export type PermissionSetArn = String;

export type PrincipalType = String;

export type PrincipalId = String;

}

export namespace PermissionSet {

export type Name = String;

export type Description = String;

export type InstanceArn = String;

export type SessionDuration = String;

export type RelayStateType = String;

export type ManagedPolicies = List<String>;

export type InlinePolicy = Json;

export type Tags = List<AWS.SSO.PermissionSet.Tag>;

}

}

export namespace FSx {

export namespace FileSystem {

export type LustreConfiguration = AWS.FSx.FileSystem.LustreConfiguration;

export type SelfManagedActiveDirectoryConfiguration = { FileSystemAdministratorsGroup: String;

UserName: String;

DomainName: String;

OrganizationalUnitDistinguishedName: String;

DnsIps: List<String>;

Password: String; };

export type WindowsConfiguration = AWS.FSx.FileSystem.WindowsConfiguration;

export type StorageType = String;

export type KmsKeyId = String;

export type StorageCapacity = Integer;

export type FileSystemType = String;

export type BackupId = String;

export type SubnetIds = List<String>;

export type SecurityGroupIds = List<String>;

export type Tags = List<AWS.FSx.FileSystem.Tag>;

}

}

export namespace FinSpace {

export namespace Environment {

export type FederationParameters = AWS.FinSpace.Environment.FederationParameters;

export type Name = String;

export type Description = String;

export type KmsKeyId = String;

export type FederationMode = String;

}

}

export namespace WorkSpaces {

export namespace Workspace {

export type WorkspaceProperties = AWS.WorkSpaces.Workspace.WorkspaceProperties;

export type BundleId = String;

export type DirectoryId = String;

export type RootVolumeEncryptionEnabled = Boolean;

export type Tags = List<AWS.WorkSpaces.Workspace.Tag>;

export type UserName = String;

export type UserVolumeEncryptionEnabled = Boolean;

export type VolumeEncryptionKey = String;

}

export namespace ConnectionAlias {

export type ConnectionAliasAssociation = { AssociationStatus: String;

AssociatedAccountId: String;

ResourceId: String;

ConnectionIdentifier: String; };

export type ConnectionString = String;

export type Tags = List<AWS.WorkSpaces.ConnectionAlias.Tag>;

}

}

export namespace Transfer {

export namespace User {

export type HomeDirectoryMapEntry = { Entry: String;

Target: String; };

export type SshPublicKey = String;

export type PosixProfile = AWS.Transfer.User.PosixProfile;

export type Policy = String;

export type Role = String;

export type HomeDirectory = String;

export type HomeDirectoryType = String;

export type ServerId = String;

export type UserName = String;

export type HomeDirectoryMappings = List<AWS.Transfer.User.HomeDirectoryMapEntry>;

export type SshPublicKeys = List<AWS.Transfer.User.SshPublicKey>;

export type Tags = List<AWS.Transfer.User.Tag>;

}

export namespace Server {

export type ProtocolDetails = AWS.Transfer.Server.ProtocolDetails;

export type IdentityProviderDetails = AWS.Transfer.Server.IdentityProviderDetails;

export type EndpointDetails = AWS.Transfer.Server.EndpointDetails;

export type Protocol = String;

export type LoggingRole = String;

export type Protocols = List<AWS.Transfer.Server.Protocol>;

export type EndpointType = String;

export type SecurityPolicyName = String;

export type Domain = String;

export type IdentityProviderType = String;

export type Tags = List<AWS.Transfer.Server.Tag>;

export type Certificate = String;

}

}

export namespace MWAA {

export namespace Environment {

export type NetworkConfiguration = AWS.MWAA.Environment.NetworkConfiguration;

export type ModuleLoggingConfiguration = { Enabled: Boolean;

LogLevel: String;

CloudWatchLogGroupArn: String; };

export type TagMap = any;

export type LoggingConfiguration = AWS.MWAA.Environment.LoggingConfiguration;

export type Name = String;

export type ExecutionRoleArn = String;

export type KmsKey = String;

export type AirflowVersion = String;

export type SourceBucketArn = String;

export type DagS3Path = String;

export type PluginsS3Path = String;

export type PluginsS3ObjectVersion = String;

export type RequirementsS3Path = String;

export type RequirementsS3ObjectVersion = String;

export type AirflowConfigurationOptions = Json;

export type EnvironmentClass = String;

export type MaxWorkers = Integer;

export type MinWorkers = Integer;

export type Schedulers = Integer;

export type WeeklyMaintenanceWindowStart = String;

export type Tags = AWS.MWAA.Environment.TagMap;

export type WebserverAccessMode = String;

}

}

export namespace IoT1Click {

export namespace Project {

export type DeviceTemplate = { DeviceType: String;

CallbackOverrides: Json; };

export type PlacementTemplate = AWS.IoT1Click.Project.PlacementTemplate;

export type Description = String;

export type ProjectName = String;

}

export namespace Placement {

export type PlacementName = String;

export type ProjectName = String;

export type AssociatedDevices = Json;

export type Attributes = Json;

}

export namespace Device {

export type DeviceId = String;

export type Enabled = Boolean;

}

}

export namespace DAX {

export namespace Cluster {

export type SSESpecification = AWS.DAX.Cluster.SSESpecification;

export type Description = String;

export type ReplicationFactor = Integer;

export type ParameterGroupName = String;

export type AvailabilityZones = List<String>;

export type IAMRoleARN = String;

export type SubnetGroupName = String;

export type PreferredMaintenanceWindow = String;

export type ClusterEndpointEncryptionType = String;

export type NotificationTopicARN = String;

export type SecurityGroupIds = List<String>;

export type NodeType = String;

export type ClusterName = String;

export type Tags = Json;

}

export namespace ParameterGroup {

export type ParameterNameValues = Json;

export type Description = String;

export type ParameterGroupName = String;

}

export namespace SubnetGroup {

export type Description = String;

export type SubnetGroupName = String;

export type SubnetIds = List<String>;

}

}

export namespace CodeGuruProfiler {

export namespace ProfilingGroup {

export type Channel = { channelId: String;

channelUri: String; };

export type ProfilingGroupName = String;

export type ComputePlatform = String;

export type AgentPermissions = Json;

export type AnomalyDetectionNotificationConfiguration = List<AWS.CodeGuruProfiler.ProfilingGroup.Channel>;

export type Tags = List<AWS.CodeGuruProfiler.ProfilingGroup.Tag>;

}

}

export namespace OpsWorksCM {

export namespace Server {

export type EngineAttribute = { Value: String;

Name: String; };

export type KeyPair = String;

export type EngineVersion = String;

export type ServiceRoleArn = String;

export type DisableAutomatedBackup = Boolean;

export type BackupId = String;

export type EngineModel = String;

export type PreferredMaintenanceWindow = String;

export type AssociatePublicIpAddress = Boolean;

export type InstanceProfileArn = String;

export type CustomCertificate = String;

export type PreferredBackupWindow = String;

export type SecurityGroupIds = List<String>;

export type SubnetIds = List<String>;

export type CustomDomain = String;

export type CustomPrivateKey = String;

export type ServerName = String;

export type EngineAttributes = List<AWS.OpsWorksCM.Server.EngineAttribute>;

export type BackupRetentionCount = Integer;

export type InstanceType = String;

export type Tags = List<AWS.OpsWorksCM.Server.Tag>;

export type Engine = String;

}

}

export namespace CodeStarNotifications {

export namespace NotificationRule {

export type Target = { TargetType: String;

TargetAddress: String; };

export type EventTypeIds = List<String>;

export type Status = String;

export type DetailType = String;

export type Resource = String;

export type Targets = List<AWS.CodeStarNotifications.NotificationRule.Target>;

export type Tags = Json;

export type Name = String;

}

}

export namespace Cloud9 {

export namespace EnvironmentEC2 {

export type Repository = { PathComponent: String;

RepositoryUrl: String; };

export type Repositories = List<AWS.Cloud9.EnvironmentEC2.Repository>;

export type OwnerArn = String;

export type Description = String;

export type ConnectionType = String;

export type AutomaticStopTimeMinutes = Integer;

export type ImageId = String;

export type SubnetId = String;

export type InstanceType = String;

export type Tags = List<AWS.Cloud9.EnvironmentEC2.Tag>;

export type Name = String;

}

}

export namespace RAM {

export namespace ResourceShare {

export type PermissionArns = List<String>;

export type Principals = List<String>;

export type AllowExternalPrincipals = Boolean;

export type ResourceArns = List<String>;

export type Tags = List<AWS.RAM.ResourceShare.Tag>;

export type Name = String;

}

}

export namespace IoTFleetHub {

export namespace Application {

export type ApplicationName = String;

export type ApplicationDescription = String;

export type RoleArn = String;

export type Tags = List<AWS.IoTFleetHub.Application.Tag>;

}

}

export namespace DocDB {

export namespace DBCluster {

export type StorageEncrypted = Boolean;

export type EngineVersion = String;

export type KmsKeyId = String;

export type AvailabilityZones = List<String>;

export type SnapshotIdentifier = String;

export type Port = Integer;

export type DBClusterIdentifier = String;

export type PreferredMaintenanceWindow = String;

export type DBSubnetGroupName = String;

export type DeletionProtection = Boolean;

export type PreferredBackupWindow = String;

export type MasterUserPassword = String;

export type VpcSecurityGroupIds = List<String>;

export type MasterUsername = String;

export type DBClusterParameterGroupName = String;

export type BackupRetentionPeriod = Integer;

export type Tags = List<AWS.DocDB.DBCluster.Tag>;

export type EnableCloudwatchLogsExports = List<String>;

}

export namespace DBSubnetGroup {

export type DBSubnetGroupName = String;

export type DBSubnetGroupDescription = String;

export type SubnetIds = List<String>;

export type Tags = List<AWS.DocDB.DBSubnetGroup.Tag>;

}

export namespace DBInstance {

export type DBInstanceClass = String;

export type DBClusterIdentifier = String;

export type AvailabilityZone = String;

export type PreferredMaintenanceWindow = String;

export type AutoMinorVersionUpgrade = Boolean;

export type DBInstanceIdentifier = String;

export type Tags = List<AWS.DocDB.DBInstance.Tag>;

}

export namespace DBClusterParameterGroup {

export type Description = String;

export type Parameters = Json;

export type Family = String;

export type Tags = List<AWS.DocDB.DBClusterParameterGroup.Tag>;

export type Name = String;

}

}

export namespace KMS {

export namespace ReplicaKey {

export type PrimaryKeyArn = String;

export type Description = String;

export type Enabled = Boolean;

export type KeyPolicy = Json;

export type PendingWindowInDays = Integer;

export type Tags = List<AWS.KMS.ReplicaKey.Tag>;

}

export namespace Alias {

export type AliasName = String;

export type TargetKeyId = String;

}

export namespace Key {

export type Description = String;

export type Enabled = Boolean;

export type EnableKeyRotation = Boolean;

export type KeyPolicy = Json;

export type KeyUsage = String;

export type KeySpec = String;

export type MultiRegion = Boolean;

export type PendingWindowInDays = Integer;

export type Tags = List<AWS.KMS.Key.Tag>;

}

}

export namespace Detective {

export namespace MemberInvitation {

export type GraphArn = String;

export type MemberId = String;

export type MemberEmailAddress = String;

export type DisableEmailNotification = Boolean;

export type Message = String;

}

export namespace Graph {

export type Tags = List<AWS.Detective.Graph.Tag>;

}

}

export namespace CodeGuruReviewer {

export namespace RepositoryAssociation {

export type Name = String;

export type Type = String;

export type Owner = String;

export type BucketName = String;

export type ConnectionArn = String;

export type Tags = List<AWS.CodeGuruReviewer.RepositoryAssociation.Tag>;

}

}

export namespace IoTCoreDeviceAdvisor {

export namespace SuiteDefinition {

export type SuiteDefinitionConfiguration = Json;

export type Tags = List<AWS.IoTCoreDeviceAdvisor.SuiteDefinition.Tag>;

}

}

export namespace Timestream {

export namespace Database {

export type DatabaseName = String;

export type KmsKeyId = String;

export type Tags = List<AWS.Timestream.Database.Tag>;

}

export namespace Table {

export type DatabaseName = String;

export type TableName = String;

export type RetentionProperties = Json;

export type Tags = List<AWS.Timestream.Table.Tag>;

}

}

export namespace Inspector {

export namespace ResourceGroup {

export type ResourceGroupTags = List<AWS.Inspector.ResourceGroup.Tag>;

}

export namespace AssessmentTemplate {

export type AssessmentTargetArn = String;

export type DurationInSeconds = Integer;

export type AssessmentTemplateName = String;

export type RulesPackageArns = List<String>;

export type UserAttributesForFindings = List<AWS.Inspector.AssessmentTemplate.Tag>;

}

export namespace AssessmentTarget {

export type AssessmentTargetName = String;

export type ResourceGroupArn = String;

}

}

export namespace CodeArtifact {

export namespace Domain {

export type DomainName = String;

export type EncryptionKey = String;

export type PermissionsPolicyDocument = Json;

export type Tags = List<AWS.CodeArtifact.Domain.Tag>;

}

export namespace Repository {

export type RepositoryName = String;

export type DomainName = String;

export type DomainOwner = String;

export type Description = String;

export type ExternalConnections = List<String>;

export type Upstreams = List<String>;

export type PermissionsPolicyDocument = Json;

export type Tags = List<AWS.CodeArtifact.Repository.Tag>;

}

}

export namespace SQS {

export namespace QueuePolicy {

export type PolicyDocument = Json;

export type Queues = List<String>;

}

export namespace Queue {

export type ContentBasedDeduplication = Boolean;

export type DeduplicationScope = String;

export type DelaySeconds = Integer;

export type FifoQueue = Boolean;

export type FifoThroughputLimit = String;

export type KmsDataKeyReusePeriodSeconds = Integer;

export type KmsMasterKeyId = String;

export type MaximumMessageSize = Integer;

export type MessageRetentionPeriod = Integer;

export type QueueName = String;

export type ReceiveMessageWaitTimeSeconds = Integer;

export type RedrivePolicy = Json;

export type Tags = List<AWS.SQS.Queue.Tag>;

export type VisibilityTimeout = Integer;

}

}

export namespace LookoutVision {

export namespace Project {

export type ProjectName = String;

}

}

export namespace Chatbot {

export namespace SlackChannelConfiguration {

export type SlackWorkspaceId = String;

export type SlackChannelId = String;

export type ConfigurationName = String;

export type IamRoleArn = String;

export type SnsTopicArns = List<String>;

export type LoggingLevel = String;

}

}

export namespace CodeStarConnections {

export namespace Connection {

export type ConnectionName = String;

export type ProviderType = String;

export type HostArn = String;

export type Tags = List<AWS.CodeStarConnections.Connection.Tag>;

}

}

export namespace ServiceCatalogAppRegistry {

export namespace Application {

export type Name = String;

export type Description = String;

export type Tags = Map<String>;

}

export namespace ResourceAssociation {

export type Application = String;

export type Resource = String;

export type ResourceType = String;

}

export namespace AttributeGroup {

export type Name = String;

export type Description = String;

export type Attributes = Json;

export type Tags = Map<String>;

}

export namespace AttributeGroupAssociation {

export type Application = String;

export type AttributeGroup = String;

}

}

export namespace SDB {

export namespace Domain {

export type Description = String;

}

}

export namespace SecurityHub {

export namespace Hub {

export type Tags = Json;

}

}

export namespace CUR {

export namespace ReportDefinition {

export type ReportName = String;

export type TimeUnit = String;

export type Format = String;

export type Compression = String;

export type AdditionalSchemaElements = List<String>;

export type S3Bucket = String;

export type S3Prefix = String;

export type S3Region = String;

export type AdditionalArtifacts = List<String>;

export type RefreshClosedReports = Boolean;

export type ReportVersioning = String;

export type BillingViewArn = String;

}

}

}

export namespace Alexa {

export namespace ASK {

export namespace Skill {

export type Overrides = { Manifest: Json; };

export type SkillPackage = Alexa.ASK.Skill.SkillPackage;

export type AuthenticationConfiguration = Alexa.ASK.Skill.AuthenticationConfiguration;

export type VendorId = String;

}

}

}

export namespace Tag {

export type Key = String;

export type Value = String;

}