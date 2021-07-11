export type JSONString = string;

export type Timestamp = string;

export namespace AWS {

    export namespace WAFRegional {

        export namespace ByteMatchSet {

            export type ByteMatchTuple = {
                TargetString: string;

                TargetStringBase64: string;

                PositionalConstraint: string;

                TextTransformation: string;

                FieldToMatch: AWS.WAFRegional.ByteMatchSet.FieldToMatch;
            };

            export type FieldToMatch = {
                Type: string;

                Data: string;
            };

            export type ByteMatchTuples = AWS.WAFRegional.ByteMatchSet.ByteMatchTuple[];

            export type Name = string;

        }

        export namespace Rule {

            export type Predicate = {
                Type: string;

                DataId: string;

                Negated: boolean;
            };

            export type MetricName = string;

            export type Predicates = AWS.WAFRegional.Rule.Predicate[];

            export type Name = string;

        }

        export namespace SizeConstraintSet {

            export type SizeConstraint = {
                ComparisonOperator: string;

                Size: number;

                TextTransformation: string;

                FieldToMatch: AWS.WAFRegional.SizeConstraintSet.FieldToMatch;
            };

            export type FieldToMatch = {
                Type: string;

                Data: string;
            };

            export type SizeConstraints = AWS.WAFRegional.SizeConstraintSet.SizeConstraint[];

            export type Name = string;

        }

        export namespace XssMatchSet {

            export type XssMatchTuple = {
                TextTransformation: string;

                FieldToMatch: AWS.WAFRegional.XssMatchSet.FieldToMatch;
            };

            export type FieldToMatch = {
                Type: string;

                Data: string;
            };

            export type XssMatchTuples = AWS.WAFRegional.XssMatchSet.XssMatchTuple[];

            export type Name = string;

        }

        export namespace GeoMatchSet {

            export type GeoMatchConstraint = {
                Type: string;

                Value: string;
            };

            export type GeoMatchConstraints = AWS.WAFRegional.GeoMatchSet.GeoMatchConstraint[];

            export type Name = string;

        }

        export namespace SqlInjectionMatchSet {

            export type FieldToMatch = {
                Type: string;

                Data: string;
            };

            export type SqlInjectionMatchTuple = {
                TextTransformation: string;

                FieldToMatch: AWS.WAFRegional.SqlInjectionMatchSet.FieldToMatch;
            };

            export type SqlInjectionMatchTuples = AWS.WAFRegional.SqlInjectionMatchSet.SqlInjectionMatchTuple[];

            export type Name = string;

        }

        export namespace WebACL {

            export type Action = { Type: string; };

            export type Rule = {
                Action: AWS.WAFRegional.WebACL.Action;

                Priority: number;

                RuleId: string;
            };

            export type MetricName = string;

            export type DefaultAction = AWS.WAFRegional.WebACL.Action;

            export type Rules = AWS.WAFRegional.WebACL.Rule[];

            export type Name = string;

        }

        export namespace IPSet {

            export type IPSetDescriptor = {
                Type: string;

                Value: string;
            };

            export type IPSetDescriptors = AWS.WAFRegional.IPSet.IPSetDescriptor[];

            export type Name = string;

        }

        export namespace RateBasedRule {

            export type Predicate = {
                Type: string;

                DataId: string;

                Negated: boolean;
            };

            export type MetricName = string;

            export type RateLimit = number;

            export type MatchPredicates = AWS.WAFRegional.RateBasedRule.Predicate[];

            export type RateKey = string;

            export type Name = string;

        }

        export namespace RegexPatternSet {

            export type RegexPatternStrings = string[];

            export type Name = string;

        }

        export namespace WebACLAssociation {

            export type ResourceArn = string;

            export type WebACLId = string;

        }

    }

    export namespace AppMesh {

        export namespace VirtualRouter {

            export type PortMapping = {
                Port: number;

                Protocol: string;
            };

            export type VirtualRouterSpec = { Listeners: AWS.AppMesh.VirtualRouter.VirtualRouterListener[]; };

            export type VirtualRouterListener = { PortMapping: AWS.AppMesh.VirtualRouter.PortMapping; };

            export type MeshName = string;

            export type VirtualRouterName = string;

            export type MeshOwner = string;

            export type Spec = AWS.AppMesh.VirtualRouter.VirtualRouterSpec;

            export type Tags = AWS.AppMesh.VirtualRouter.Tag[];

        }

        export namespace VirtualNode {

            export type TlsValidationContextSdsTrust = { SecretName: string; };

            export type ClientPolicyTls = {
                Validation: AWS.AppMesh.VirtualNode.TlsValidationContext;

                Enforce: boolean;

                Ports: number[];

                Certificate: AWS.AppMesh.VirtualNode.ClientTlsCertificate;
            };

            export type FileAccessLog = { Path: string; };

            export type AwsCloudMapInstanceAttribute = {
                Value: string;

                Key: string;
            };

            export type ListenerTlsValidationContext = {
                SubjectAlternativeNames: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

                Trust: AWS.AppMesh.VirtualNode.ListenerTlsValidationContextTrust;
            };

            export type TcpTimeout = { Idle: AWS.AppMesh.VirtualNode.Duration; };

            export type Backend = { VirtualService: AWS.AppMesh.VirtualNode.VirtualServiceBackend; };

            export type ListenerTimeout = {
                TCP: AWS.AppMesh.VirtualNode.TcpTimeout;

                HTTP2: AWS.AppMesh.VirtualNode.HttpTimeout;

                HTTP: AWS.AppMesh.VirtualNode.HttpTimeout;

                GRPC: AWS.AppMesh.VirtualNode.GrpcTimeout;
            };

            export type PortMapping = {
                Port: number;

                Protocol: string;
            };

            export type ListenerTls = {
                Validation: AWS.AppMesh.VirtualNode.ListenerTlsValidationContext;

                Mode: string;

                Certificate: AWS.AppMesh.VirtualNode.ListenerTlsCertificate;
            };

            export type ListenerTlsSdsCertificate = { SecretName: string; };

            export type BackendDefaults = { ClientPolicy: AWS.AppMesh.VirtualNode.ClientPolicy; };

            export type VirtualNodeTcpConnectionPool = { MaxConnections: number; };

            export type HttpTimeout = {
                PerRequest: AWS.AppMesh.VirtualNode.Duration;

                Idle: AWS.AppMesh.VirtualNode.Duration;
            };

            export type HealthCheck = {
                Path: string;

                UnhealthyThreshold: number;

                Port: number;

                HealthyThreshold: number;

                TimeoutMillis: number;

                Protocol: string;

                IntervalMillis: number;
            };

            export type AwsCloudMapServiceDiscovery = {
                NamespaceName: string;

                ServiceName: string;

                Attributes: AWS.AppMesh.VirtualNode.AwsCloudMapInstanceAttribute[];
            };

            export type VirtualNodeHttpConnectionPool = {
                MaxConnections: number;

                MaxPendingRequests: number;
            };

            export type ListenerTlsFileCertificate = {
                PrivateKey: string;

                CertificateChain: string;
            };

            export type TlsValidationContext = {
                SubjectAlternativeNames: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

                Trust: AWS.AppMesh.VirtualNode.TlsValidationContextTrust;
            };

            export type VirtualNodeSpec = {
                Logging: AWS.AppMesh.VirtualNode.Logging;

                Backends: AWS.AppMesh.VirtualNode.Backend[];

                Listeners: AWS.AppMesh.VirtualNode.Listener[];

                BackendDefaults: AWS.AppMesh.VirtualNode.BackendDefaults;

                ServiceDiscovery: AWS.AppMesh.VirtualNode.ServiceDiscovery;
            };

            export type Listener = {
                ConnectionPool: AWS.AppMesh.VirtualNode.VirtualNodeConnectionPool;

                Timeout: AWS.AppMesh.VirtualNode.ListenerTimeout;

                HealthCheck: AWS.AppMesh.VirtualNode.HealthCheck;

                TLS: AWS.AppMesh.VirtualNode.ListenerTls;

                PortMapping: AWS.AppMesh.VirtualNode.PortMapping;

                OutlierDetection: AWS.AppMesh.VirtualNode.OutlierDetection;
            };

            export type DnsServiceDiscovery = {
                Hostname: string;

                ResponseType: string;
            };

            export type TlsValidationContextFileTrust = { CertificateChain: string; };

            export type GrpcTimeout = {
                PerRequest: AWS.AppMesh.VirtualNode.Duration;

                Idle: AWS.AppMesh.VirtualNode.Duration;
            };

            export type VirtualNodeConnectionPool = {
                TCP: AWS.AppMesh.VirtualNode.VirtualNodeTcpConnectionPool;

                HTTP2: AWS.AppMesh.VirtualNode.VirtualNodeHttp2ConnectionPool;

                HTTP: AWS.AppMesh.VirtualNode.VirtualNodeHttpConnectionPool;

                GRPC: AWS.AppMesh.VirtualNode.VirtualNodeGrpcConnectionPool;
            };

            export type Logging = { AccessLog: AWS.AppMesh.VirtualNode.AccessLog; };

            export type ServiceDiscovery = {
                DNS: AWS.AppMesh.VirtualNode.DnsServiceDiscovery;

                AWSCloudMap: AWS.AppMesh.VirtualNode.AwsCloudMapServiceDiscovery;
            };

            export type Duration = {
                Value: number;

                Unit: string;
            };

            export type TlsValidationContextTrust = {
                SDS: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

                ACM: AWS.AppMesh.VirtualNode.TlsValidationContextAcmTrust;

                File: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust;
            };

            export type ListenerTlsAcmCertificate = { CertificateArn: string; };

            export type VirtualNodeHttp2ConnectionPool = { MaxRequests: number; };

            export type ListenerTlsCertificate = {
                SDS: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

                ACM: AWS.AppMesh.VirtualNode.ListenerTlsAcmCertificate;

                File: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate;
            };

            export type VirtualServiceBackend = {
                ClientPolicy: AWS.AppMesh.VirtualNode.ClientPolicy;

                VirtualServiceName: string;
            };

            export type OutlierDetection = {
                MaxEjectionPercent: number;

                BaseEjectionDuration: AWS.AppMesh.VirtualNode.Duration;

                MaxServerErrors: number;

                Interval: AWS.AppMesh.VirtualNode.Duration;
            };

            export type TlsValidationContextAcmTrust = { CertificateAuthorityArns: string[]; };

            export type ClientPolicy = { TLS: AWS.AppMesh.VirtualNode.ClientPolicyTls; };

            export type ClientTlsCertificate = {
                SDS: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

                File: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate;
            };

            export type ListenerTlsValidationContextTrust = {
                SDS: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

                File: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust;
            };

            export type AccessLog = { File: AWS.AppMesh.VirtualNode.FileAccessLog; };

            export type SubjectAlternativeNameMatchers = { Exact: string[]; };

            export type SubjectAlternativeNames = { Match: AWS.AppMesh.VirtualNode.SubjectAlternativeNameMatchers; };

            export type VirtualNodeGrpcConnectionPool = { MaxRequests: number; };

            export type MeshName = string;

            export type MeshOwner = string;

            export type Spec = AWS.AppMesh.VirtualNode.VirtualNodeSpec;

            export type VirtualNodeName = string;

            export type Tags = AWS.AppMesh.VirtualNode.Tag[];

        }

        export namespace GatewayRoute {

            export type HttpQueryParameterMatch = { Exact: string; };

            export type HttpGatewayRoutePrefixRewrite = {
                Value: string;

                DefaultPrefix: string;
            };

            export type HttpGatewayRouteHeaderMatch = {
                Suffix: string;

                Regex: string;

                Exact: string;

                Prefix: string;

                Range: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch;
            };

            export type GatewayRouteSpec = {
                HttpRoute: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

                Http2Route: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

                GrpcRoute: AWS.AppMesh.GatewayRoute.GrpcGatewayRoute;
            };

            export type HttpGatewayRouteHeader = {
                Invert: boolean;

                Name: string;

                Match: AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeaderMatch;
            };

            export type GatewayRouteHostnameRewrite = { DefaultTargetHostname: string; };

            export type QueryParameter = {
                Name: string;

                Match: AWS.AppMesh.GatewayRoute.HttpQueryParameterMatch;
            };

            export type GatewayRouteMetadataMatch = {
                Suffix: string;

                Regex: string;

                Exact: string;

                Prefix: string;

                Range: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch;
            };

            export type GrpcGatewayRouteAction = {
                Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

                Rewrite: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteRewrite;
            };

            export type GrpcGatewayRouteRewrite = { Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite; };

            export type GatewayRouteTarget = { VirtualService: AWS.AppMesh.GatewayRoute.GatewayRouteVirtualService; };

            export type GrpcGatewayRouteMatch = {
                ServiceName: string;

                Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

                Metadata: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMetadata[];
            };

            export type HttpGatewayRoutePathRewrite = { Exact: string; };

            export type GrpcGatewayRoute = {
                Action: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteAction;

                Match: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMatch;
            };

            export type GatewayRouteRangeMatch = {
                Start: number;

                End: number;
            };

            export type HttpGatewayRouteRewrite = {
                Path: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePathRewrite;

                Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite;

                Prefix: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePrefixRewrite;
            };

            export type GrpcGatewayRouteMetadata = {
                Invert: boolean;

                Name: string;

                Match: AWS.AppMesh.GatewayRoute.GatewayRouteMetadataMatch;
            };

            export type HttpGatewayRouteAction = {
                Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

                Rewrite: AWS.AppMesh.GatewayRoute.HttpGatewayRouteRewrite;
            };

            export type GatewayRouteHostnameMatch = {
                Suffix: string;

                Exact: string;
            };

            export type GatewayRouteVirtualService = { VirtualServiceName: string; };

            export type HttpGatewayRouteMatch = {
                Path: AWS.AppMesh.GatewayRoute.HttpPathMatch;

                Headers: AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeader[];

                Hostname: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

                Prefix: string;

                Method: string;

                QueryParameters: AWS.AppMesh.GatewayRoute.QueryParameter[];
            };

            export type HttpPathMatch = {
                Regex: string;

                Exact: string;
            };

            export type HttpGatewayRoute = {
                Action: AWS.AppMesh.GatewayRoute.HttpGatewayRouteAction;

                Match: AWS.AppMesh.GatewayRoute.HttpGatewayRouteMatch;
            };

            export type MeshName = string;

            export type VirtualGatewayName = string;

            export type MeshOwner = string;

            export type GatewayRouteName = string;

            export type Spec = AWS.AppMesh.GatewayRoute.GatewayRouteSpec;

            export type Tags = AWS.AppMesh.GatewayRoute.Tag[];

        }

        export namespace Route {

            export type Duration = {
                Value: number;

                Unit: string;
            };

            export type WeightedTarget = {
                VirtualNode: string;

                Weight: number;
            };

            export type GrpcRouteMetadataMatchMethod = {
                Suffix: string;

                Regex: string;

                Exact: string;

                Prefix: string;

                Range: AWS.AppMesh.Route.MatchRange;
            };

            export type HeaderMatchMethod = {
                Suffix: string;

                Regex: string;

                Exact: string;

                Prefix: string;

                Range: AWS.AppMesh.Route.MatchRange;
            };

            export type RouteSpec = {
                HttpRoute: AWS.AppMesh.Route.HttpRoute;

                Priority: number;

                Http2Route: AWS.AppMesh.Route.HttpRoute;

                GrpcRoute: AWS.AppMesh.Route.GrpcRoute;

                TcpRoute: AWS.AppMesh.Route.TcpRoute;
            };

            export type HttpPathMatch = {
                Regex: string;

                Exact: string;
            };

            export type GrpcRouteMetadata = {
                Invert: boolean;

                Name: string;

                Match: AWS.AppMesh.Route.GrpcRouteMetadataMatchMethod;
            };

            export type QueryParameter = {
                Name: string;

                Match: AWS.AppMesh.Route.HttpQueryParameterMatch;
            };

            export type HttpRouteMatch = {
                Path: AWS.AppMesh.Route.HttpPathMatch;

                Scheme: string;

                Headers: AWS.AppMesh.Route.HttpRouteHeader[];

                Prefix: string;

                Method: string;

                QueryParameters: AWS.AppMesh.Route.QueryParameter[];
            };

            export type HttpQueryParameterMatch = { Exact: string; };

            export type GrpcRouteAction = { WeightedTargets: AWS.AppMesh.Route.WeightedTarget[]; };

            export type GrpcRouteMatch = {
                ServiceName: string;

                Metadata: AWS.AppMesh.Route.GrpcRouteMetadata[];

                MethodName: string;
            };

            export type HttpRoute = {
                Action: AWS.AppMesh.Route.HttpRouteAction;

                Timeout: AWS.AppMesh.Route.HttpTimeout;

                RetryPolicy: AWS.AppMesh.Route.HttpRetryPolicy;

                Match: AWS.AppMesh.Route.HttpRouteMatch;
            };

            export type TcpRouteAction = { WeightedTargets: AWS.AppMesh.Route.WeightedTarget[]; };

            export type GrpcRetryPolicy = {
                MaxRetries: number;

                PerRetryTimeout: AWS.AppMesh.Route.Duration;

                GrpcRetryEvents: string[];

                HttpRetryEvents: string[];

                TcpRetryEvents: string[];
            };

            export type TcpRoute = {
                Action: AWS.AppMesh.Route.TcpRouteAction;

                Timeout: AWS.AppMesh.Route.TcpTimeout;
            };

            export type HttpRetryPolicy = {
                MaxRetries: number;

                PerRetryTimeout: AWS.AppMesh.Route.Duration;

                HttpRetryEvents: string[];

                TcpRetryEvents: string[];
            };

            export type GrpcTimeout = {
                PerRequest: AWS.AppMesh.Route.Duration;

                Idle: AWS.AppMesh.Route.Duration;
            };

            export type GrpcRoute = {
                Action: AWS.AppMesh.Route.GrpcRouteAction;

                Timeout: AWS.AppMesh.Route.GrpcTimeout;

                RetryPolicy: AWS.AppMesh.Route.GrpcRetryPolicy;

                Match: AWS.AppMesh.Route.GrpcRouteMatch;
            };

            export type TcpTimeout = { Idle: AWS.AppMesh.Route.Duration; };

            export type HttpTimeout = {
                PerRequest: AWS.AppMesh.Route.Duration;

                Idle: AWS.AppMesh.Route.Duration;
            };

            export type HttpRouteHeader = {
                Invert: boolean;

                Name: string;

                Match: AWS.AppMesh.Route.HeaderMatchMethod;
            };

            export type HttpRouteAction = { WeightedTargets: AWS.AppMesh.Route.WeightedTarget[]; };

            export type MatchRange = {
                Start: number;

                End: number;
            };

            export type MeshName = string;

            export type VirtualRouterName = string;

            export type MeshOwner = string;

            export type RouteName = string;

            export type Spec = AWS.AppMesh.Route.RouteSpec;

            export type Tags = AWS.AppMesh.Route.Tag[];

        }

        export namespace VirtualGateway {

            export type VirtualGatewayTlsValidationContextTrust = {
                SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

                ACM: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust;

                File: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust;
            };

            export type VirtualGatewayListenerTlsAcmCertificate = { CertificateArn: string; };

            export type VirtualGatewayTlsValidationContextFileTrust = { CertificateChain: string; };

            export type VirtualGatewayHttp2ConnectionPool = { MaxRequests: number; };

            export type VirtualGatewaySpec = {
                Logging: AWS.AppMesh.VirtualGateway.VirtualGatewayLogging;

                Listeners: AWS.AppMesh.VirtualGateway.VirtualGatewayListener[];

                BackendDefaults: AWS.AppMesh.VirtualGateway.VirtualGatewayBackendDefaults;
            };

            export type VirtualGatewayTlsValidationContext = {
                SubjectAlternativeNames: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

                Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextTrust;
            };

            export type VirtualGatewayListenerTlsCertificate = {
                SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

                ACM: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsAcmCertificate;

                File: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate;
            };

            export type VirtualGatewayGrpcConnectionPool = { MaxRequests: number; };

            export type VirtualGatewayConnectionPool = {
                HTTP2: AWS.AppMesh.VirtualGateway.VirtualGatewayHttp2ConnectionPool;

                HTTP: AWS.AppMesh.VirtualGateway.VirtualGatewayHttpConnectionPool;

                GRPC: AWS.AppMesh.VirtualGateway.VirtualGatewayGrpcConnectionPool;
            };

            export type SubjectAlternativeNames = { Match: AWS.AppMesh.VirtualGateway.SubjectAlternativeNameMatchers; };

            export type VirtualGatewayClientTlsCertificate = {
                SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

                File: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate;
            };

            export type VirtualGatewayListenerTlsValidationContext = {
                SubjectAlternativeNames: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

                Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust;
            };

            export type VirtualGatewayListenerTlsFileCertificate = {
                PrivateKey: string;

                CertificateChain: string;
            };

            export type VirtualGatewayLogging = { AccessLog: AWS.AppMesh.VirtualGateway.VirtualGatewayAccessLog; };

            export type VirtualGatewayListenerTls = {
                Validation: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContext;

                Mode: string;

                Certificate: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsCertificate;
            };

            export type SubjectAlternativeNameMatchers = { Exact: string[]; };

            export type VirtualGatewayClientPolicy = { TLS: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicyTls; };

            export type VirtualGatewayTlsValidationContextSdsTrust = { SecretName: string; };

            export type VirtualGatewayListener = {
                ConnectionPool: AWS.AppMesh.VirtualGateway.VirtualGatewayConnectionPool;

                HealthCheck: AWS.AppMesh.VirtualGateway.VirtualGatewayHealthCheckPolicy;

                TLS: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTls;

                PortMapping: AWS.AppMesh.VirtualGateway.VirtualGatewayPortMapping;
            };

            export type VirtualGatewayPortMapping = {
                Port: number;

                Protocol: string;
            };

            export type VirtualGatewayBackendDefaults = { ClientPolicy: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicy; };

            export type VirtualGatewayClientPolicyTls = {
                Validation: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContext;

                Enforce: boolean;

                Ports: number[];

                Certificate: AWS.AppMesh.VirtualGateway.VirtualGatewayClientTlsCertificate;
            };

            export type VirtualGatewayAccessLog = { File: AWS.AppMesh.VirtualGateway.VirtualGatewayFileAccessLog; };

            export type VirtualGatewayFileAccessLog = { Path: string; };

            export type VirtualGatewayHttpConnectionPool = {
                MaxConnections: number;

                MaxPendingRequests: number;
            };

            export type VirtualGatewayHealthCheckPolicy = {
                Path: string;

                UnhealthyThreshold: number;

                Port: number;

                HealthyThreshold: number;

                TimeoutMillis: number;

                Protocol: string;

                IntervalMillis: number;
            };

            export type VirtualGatewayTlsValidationContextAcmTrust = { CertificateAuthorityArns: string[]; };

            export type VirtualGatewayListenerTlsValidationContextTrust = {
                SDS: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

                File: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust;
            };

            export type VirtualGatewayListenerTlsSdsCertificate = { SecretName: string; };

            export type VirtualGatewayName = string;

            export type MeshName = string;

            export type MeshOwner = string;

            export type Spec = AWS.AppMesh.VirtualGateway.VirtualGatewaySpec;

            export type Tags = AWS.AppMesh.VirtualGateway.Tag[];

        }

        export namespace VirtualService {

            export type VirtualRouterServiceProvider = { VirtualRouterName: string; };

            export type VirtualNodeServiceProvider = { VirtualNodeName: string; };

            export type VirtualServiceProvider = {
                VirtualNode: AWS.AppMesh.VirtualService.VirtualNodeServiceProvider;

                VirtualRouter: AWS.AppMesh.VirtualService.VirtualRouterServiceProvider;
            };

            export type VirtualServiceSpec = { Provider: AWS.AppMesh.VirtualService.VirtualServiceProvider; };

            export type MeshName = string;

            export type MeshOwner = string;

            export type VirtualServiceName = string;

            export type Spec = AWS.AppMesh.VirtualService.VirtualServiceSpec;

            export type Tags = AWS.AppMesh.VirtualService.Tag[];

        }

        export namespace Mesh {

            export type MeshSpec = { EgressFilter: AWS.AppMesh.Mesh.EgressFilter; };

            export type EgressFilter = { Type: string; };

            export type MeshName = string;

            export type Spec = AWS.AppMesh.Mesh.MeshSpec;

            export type Tags = AWS.AppMesh.Mesh.Tag[];

        }

    }

    export namespace QuickSight {

        export namespace DataSet {

            export type JoinKeyProperties = { UniqueKey: boolean; };

            export type UploadSettings = {
                ContainsHeader: boolean;

                TextQualifier: string;

                Format: string;

                StartFromRow: number;

                Delimiter: string;
            };

            export type ProjectOperation = { ProjectedColumns: string[]; };

            export type ColumnLevelPermissionRule = {
                ColumnNames: string[];

                Principals: string[];
            };

            export type CreateColumnsOperation = { Columns: AWS.QuickSight.DataSet.CalculatedColumn[]; };

            export type PhysicalTable = {
                RelationalTable: AWS.QuickSight.DataSet.RelationalTable;

                CustomSql: AWS.QuickSight.DataSet.CustomSql;

                S3Source: AWS.QuickSight.DataSet.S3Source;
            };

            export type ColumnDescription = { Text: string; };

            export type RenameColumnOperation = {
                NewColumnName: string;

                ColumnName: string;
            };

            export type ColumnGroup = { GeoSpatialColumnGroup: AWS.QuickSight.DataSet.GeoSpatialColumnGroup; };

            export type GeoSpatialColumnGroup = {
                Columns: string[];

                CountryCode: string;

                Name: string;
            };

            export type RelationalTable = {
                DataSourceArn: string;

                InputColumns: AWS.QuickSight.DataSet.InputColumn[];

                Schema: string;

                Catalog: string;

                Name: string;
            };

            export type InputColumn = {
                Type: string;

                Name: string;
            };

            export type RowLevelPermissionDataSet = AWS.QuickSight.DataSet.RowLevelPermissionDataSet;

            export type FilterOperation = { ConditionExpression: string; };

            export type CustomSql = {
                DataSourceArn: string;

                SqlQuery: string;

                Columns: AWS.QuickSight.DataSet.InputColumn[];

                Name: string;
            };

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type FieldFolder = {
                Description: string;

                Columns: string[];
            };

            export type S3Source = {
                DataSourceArn: string;

                InputColumns: AWS.QuickSight.DataSet.InputColumn[];

                UploadSettings: AWS.QuickSight.DataSet.UploadSettings;
            };

            export type LogicalTable = {
                Alias: string;

                DataTransforms: AWS.QuickSight.DataSet.TransformOperation[];

                Source: AWS.QuickSight.DataSet.LogicalTableSource;
            };

            export type TransformOperation = {
                TagColumnOperation: AWS.QuickSight.DataSet.TagColumnOperation;

                FilterOperation: AWS.QuickSight.DataSet.FilterOperation;

                CastColumnTypeOperation: AWS.QuickSight.DataSet.CastColumnTypeOperation;

                CreateColumnsOperation: AWS.QuickSight.DataSet.CreateColumnsOperation;

                RenameColumnOperation: AWS.QuickSight.DataSet.RenameColumnOperation;

                ProjectOperation: AWS.QuickSight.DataSet.ProjectOperation;
            };

            export type JoinInstruction = {
                OnClause: string;

                Type: string;

                LeftJoinKeyProperties: AWS.QuickSight.DataSet.JoinKeyProperties;

                LeftOperand: string;

                RightOperand: string;

                RightJoinKeyProperties: AWS.QuickSight.DataSet.JoinKeyProperties;
            };

            export type OutputColumn = {
                Type: string;

                Description: string;

                Name: string;
            };

            export type ColumnTag = {
                ColumnGeographicRole: string;

                ColumnDescription: AWS.QuickSight.DataSet.ColumnDescription;
            };

            export type TagColumnOperation = {
                ColumnName: string;

                Tags: AWS.QuickSight.DataSet.ColumnTag[];
            };

            export type IngestionWaitPolicy = AWS.QuickSight.DataSet.IngestionWaitPolicy;

            export type CalculatedColumn = {
                ColumnId: string;

                ColumnName: string;

                Expression: string;
            };

            export type CastColumnTypeOperation = {
                ColumnName: string;

                Format: string;

                NewColumnType: string;
            };

            export type LogicalTableSource = {
                PhysicalTableId: string;

                JoinInstruction: AWS.QuickSight.DataSet.JoinInstruction;
            };

            export type AwsAccountId = string;

            export type ColumnGroups = AWS.QuickSight.DataSet.ColumnGroup[];

            export type ColumnLevelPermissionRules = AWS.QuickSight.DataSet.ColumnLevelPermissionRule[];

            export type DataSetId = string;

            export type FieldFolders = Record<string, AWS.QuickSight.DataSet.FieldFolder>;

            export type ImportMode = string;

            export type LogicalTableMap = Record<string, AWS.QuickSight.DataSet.LogicalTable>;

            export type Name = string;

            export type Permissions = AWS.QuickSight.DataSet.ResourcePermission[];

            export type PhysicalTableMap = Record<string, AWS.QuickSight.DataSet.PhysicalTable>;

            export type Tags = AWS.QuickSight.DataSet.Tag[];

        }

        export namespace DataSource {

            export type DataSourceParameters = AWS.QuickSight.DataSource.DataSourceParameters;

            export type AuroraPostgreSqlParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type DataSourceCredentials = {
                CopySourceArn: string;

                CredentialPair: AWS.QuickSight.DataSource.CredentialPair;
            };

            export type CredentialPair = {
                AlternateDataSourceParameters: AWS.QuickSight.DataSource.DataSourceParameters[];

                Username: string;

                Password: string;
            };

            export type SnowflakeParameters = {
                Warehouse: string;

                Database: string;

                Host: string;
            };

            export type SslProperties = AWS.QuickSight.DataSource.SslProperties;

            export type S3Parameters = { ManifestFileLocation: AWS.QuickSight.DataSource.ManifestFileLocation; };

            export type PrestoParameters = {
                Port: number;

                Host: string;

                Catalog: string;
            };

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type SparkParameters = {
                Port: number;

                Host: string;
            };

            export type AuroraParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type MariaDbParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type TeradataParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type AthenaParameters = { WorkGroup: string; };

            export type ManifestFileLocation = {
                Bucket: string;

                Key: string;
            };

            export type MySqlParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type OracleParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type AmazonElasticsearchParameters = { Domain: string; };

            export type DataSourceErrorInfo = {
                Type: string;

                Message: string;
            };

            export type VpcConnectionProperties = AWS.QuickSight.DataSource.VpcConnectionProperties;

            export type RedshiftParameters = {
                ClusterId: string;

                Port: number;

                Database: string;

                Host: string;
            };

            export type PostgreSqlParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type RdsParameters = {
                InstanceId: string;

                Database: string;
            };

            export type SqlServerParameters = {
                Port: number;

                Database: string;

                Host: string;
            };

            export type AlternateDataSourceParameters = AWS.QuickSight.DataSource.DataSourceParameters[];

            export type AwsAccountId = string;

            export type Credentials = AWS.QuickSight.DataSource.DataSourceCredentials;

            export type DataSourceId = string;

            export type ErrorInfo = AWS.QuickSight.DataSource.DataSourceErrorInfo;

            export type Name = string;

            export type Permissions = AWS.QuickSight.DataSource.ResourcePermission[];

            export type Tags = AWS.QuickSight.DataSource.Tag[];

            export type Type = string;

        }

        export namespace Dashboard {

            export type SheetControlsOption = { VisibilityState: string; };

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type DashboardSourceEntity = { SourceTemplate: AWS.QuickSight.Dashboard.DashboardSourceTemplate; };

            export type Parameters = AWS.QuickSight.Dashboard.Parameters;

            export type DashboardSourceTemplate = {
                DataSetReferences: AWS.QuickSight.Dashboard.DataSetReference[];

                Arn: string;
            };

            export type DataSetReference = {
                DataSetArn: string;

                DataSetPlaceholder: string;
            };

            export type StringParameter = {
                Values: string[];

                Name: string;
            };

            export type IntegerParameter = {
                Values: number[];

                Name: string;
            };

            export type ExportToCSVOption = { AvailabilityStatus: string; };

            export type DashboardPublishOptions = AWS.QuickSight.Dashboard.DashboardPublishOptions;

            export type DecimalParameter = {
                Values: number[];

                Name: string;
            };

            export type DateTimeParameter = {
                Values: string[];

                Name: string;
            };

            export type AdHocFilteringOption = { AvailabilityStatus: string; };

            export type AwsAccountId = string;

            export type DashboardId = string;

            export type Name = string;

            export type Permissions = AWS.QuickSight.Dashboard.ResourcePermission[];

            export type SourceEntity = AWS.QuickSight.Dashboard.DashboardSourceEntity;

            export type Tags = AWS.QuickSight.Dashboard.Tag[];

            export type ThemeArn = string;

            export type VersionDescription = string;

        }

        export namespace Analysis {

            export type DecimalParameter = {
                Values: number[];

                Name: string;
            };

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type AnalysisSourceTemplate = {
                DataSetReferences: AWS.QuickSight.Analysis.DataSetReference[];

                Arn: string;
            };

            export type Sheet = {
                SheetId: string;

                Name: string;
            };

            export type AnalysisSourceEntity = { SourceTemplate: AWS.QuickSight.Analysis.AnalysisSourceTemplate; };

            export type DataSetReference = {
                DataSetArn: string;

                DataSetPlaceholder: string;
            };

            export type DateTimeParameter = {
                Values: string[];

                Name: string;
            };

            export type IntegerParameter = {
                Values: number[];

                Name: string;
            };

            export type Parameters = AWS.QuickSight.Analysis.Parameters;

            export type StringParameter = {
                Values: string[];

                Name: string;
            };

            export type AnalysisError = {
                Type: string;

                Message: string;
            };

            export type AnalysisId = string;

            export type AwsAccountId = string;

            export type Errors = AWS.QuickSight.Analysis.AnalysisError[];

            export type Name = string;

            export type Permissions = AWS.QuickSight.Analysis.ResourcePermission[];

            export type SourceEntity = AWS.QuickSight.Analysis.AnalysisSourceEntity;

            export type Tags = AWS.QuickSight.Analysis.Tag[];

            export type ThemeArn = string;

        }

        export namespace Theme {

            export type Font = { FontFamily: string; };

            export type BorderStyle = { Show: boolean; };

            export type TileStyle = { Border: AWS.QuickSight.Theme.BorderStyle; };

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type MarginStyle = { Show: boolean; };

            export type GutterStyle = { Show: boolean; };

            export type DataColorPalette = {
                EmptyFillColor: string;

                Colors: string[];

                MinMaxGradient: string[];
            };

            export type ThemeConfiguration = {
                DataColorPalette: AWS.QuickSight.Theme.DataColorPalette;

                UIColorPalette: AWS.QuickSight.Theme.UIColorPalette;

                Sheet: AWS.QuickSight.Theme.SheetStyle;

                Typography: AWS.QuickSight.Theme.Typography;
            };

            export type UIColorPalette = {
                Warning: string;

                Accent: string;

                AccentForeground: string;

                SecondaryBackground: string;

                DangerForeground: string;

                PrimaryBackground: string;

                Dimension: string;

                SecondaryForeground: string;

                WarningForeground: string;

                DimensionForeground: string;

                PrimaryForeground: string;

                Success: string;

                Danger: string;

                SuccessForeground: string;

                Measure: string;

                MeasureForeground: string;
            };

            export type SheetStyle = {
                TileLayout: AWS.QuickSight.Theme.TileLayoutStyle;

                Tile: AWS.QuickSight.Theme.TileStyle;
            };

            export type TileLayoutStyle = {
                Gutter: AWS.QuickSight.Theme.GutterStyle;

                Margin: AWS.QuickSight.Theme.MarginStyle;
            };

            export type Typography = { FontFamilies: AWS.QuickSight.Theme.Font[]; };

            export type AwsAccountId = string;

            export type BaseThemeId = string;

            export type Configuration = AWS.QuickSight.Theme.ThemeConfiguration;

            export type Name = string;

            export type Permissions = AWS.QuickSight.Theme.ResourcePermission[];

            export type Tags = AWS.QuickSight.Theme.Tag[];

            export type ThemeId = string;

            export type VersionDescription = string;

        }

        export namespace Template {

            export type ResourcePermission = {
                Actions: string[];

                Principal: string;
            };

            export type TemplateSourceTemplate = { Arn: string; };

            export type DataSetReference = {
                DataSetArn: string;

                DataSetPlaceholder: string;
            };

            export type TemplateSourceEntity = {
                SourceAnalysis: AWS.QuickSight.Template.TemplateSourceAnalysis;

                SourceTemplate: AWS.QuickSight.Template.TemplateSourceTemplate;
            };

            export type TemplateSourceAnalysis = {
                DataSetReferences: AWS.QuickSight.Template.DataSetReference[];

                Arn: string;
            };

            export type AwsAccountId = string;

            export type Name = string;

            export type Permissions = AWS.QuickSight.Template.ResourcePermission[];

            export type SourceEntity = AWS.QuickSight.Template.TemplateSourceEntity;

            export type Tags = AWS.QuickSight.Template.Tag[];

            export type TemplateId = string;

            export type VersionDescription = string;

        }

    }

    export namespace ElastiCache {

        export namespace ReplicationGroup {

            export type LogDeliveryConfigurationRequest = {
                DestinationDetails: AWS.ElastiCache.ReplicationGroup.DestinationDetails;

                DestinationType: string;

                LogFormat: string;

                LogType: string;
            };

            export type CloudWatchLogsDestinationDetails = { LogGroup: string; };

            export type NodeGroupConfiguration = AWS.ElastiCache.ReplicationGroup.NodeGroupConfiguration[];

            export type DestinationDetails = {
                CloudWatchLogsDetails: AWS.ElastiCache.ReplicationGroup.CloudWatchLogsDestinationDetails;

                KinesisFirehoseDetails: AWS.ElastiCache.ReplicationGroup.KinesisFirehoseDestinationDetails;
            };

            export type KinesisFirehoseDestinationDetails = { DeliveryStream: string; };

            export type AtRestEncryptionEnabled = boolean;

            export type AuthToken = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type AutomaticFailoverEnabled = boolean;

            export type CacheNodeType = string;

            export type CacheParameterGroupName = string;

            export type CacheSecurityGroupNames = string[];

            export type CacheSubnetGroupName = string;

            export type Engine = string;

            export type EngineVersion = string;

            export type GlobalReplicationGroupId = string;

            export type KmsKeyId = string;

            export type LogDeliveryConfigurations = AWS.ElastiCache.ReplicationGroup.LogDeliveryConfigurationRequest[];

            export type MultiAZEnabled = boolean;

            export type NotificationTopicArn = string;

            export type NumCacheClusters = number;

            export type NumNodeGroups = number;

            export type Port = number;

            export type PreferredCacheClusterAZs = string[];

            export type PreferredMaintenanceWindow = string;

            export type PrimaryClusterId = string;

            export type ReplicasPerNodeGroup = number;

            export type ReplicationGroupDescription = string;

            export type ReplicationGroupId = string;

            export type SecurityGroupIds = string[];

            export type SnapshotArns = string[];

            export type SnapshotName = string;

            export type SnapshotRetentionLimit = number;

            export type SnapshotWindow = string;

            export type SnapshottingClusterId = string;

            export type Tags = AWS.ElastiCache.ReplicationGroup.Tag[];

            export type TransitEncryptionEnabled = boolean;

            export type UserGroupIds = string[];

        }

        export namespace CacheCluster {

            export type KinesisFirehoseDestinationDetails = { DeliveryStream: string; };

            export type LogDeliveryConfigurationRequest = {
                DestinationDetails: AWS.ElastiCache.CacheCluster.DestinationDetails;

                DestinationType: string;

                LogFormat: string;

                LogType: string;
            };

            export type DestinationDetails = {
                CloudWatchLogsDetails: AWS.ElastiCache.CacheCluster.CloudWatchLogsDestinationDetails;

                KinesisFirehoseDetails: AWS.ElastiCache.CacheCluster.KinesisFirehoseDestinationDetails;
            };

            export type CloudWatchLogsDestinationDetails = { LogGroup: string; };

            export type AZMode = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type CacheNodeType = string;

            export type CacheParameterGroupName = string;

            export type CacheSecurityGroupNames = string[];

            export type CacheSubnetGroupName = string;

            export type ClusterName = string;

            export type Engine = string;

            export type EngineVersion = string;

            export type LogDeliveryConfigurations = AWS.ElastiCache.CacheCluster.LogDeliveryConfigurationRequest[];

            export type NotificationTopicArn = string;

            export type NumCacheNodes = number;

            export type Port = number;

            export type PreferredAvailabilityZone = string;

            export type PreferredAvailabilityZones = string[];

            export type PreferredMaintenanceWindow = string;

            export type SnapshotArns = string[];

            export type SnapshotName = string;

            export type SnapshotRetentionLimit = number;

            export type SnapshotWindow = string;

            export type Tags = AWS.ElastiCache.CacheCluster.Tag[];

            export type VpcSecurityGroupIds = string[];

        }

        export namespace GlobalReplicationGroup {

            export type RegionalConfiguration = {
                ReplicationGroupId: string;

                ReplicationGroupRegion: string;

                ReshardingConfigurations: AWS.ElastiCache.GlobalReplicationGroup.ReshardingConfiguration[];
            };

            export type ReshardingConfiguration = {
                NodeGroupId: string;

                PreferredAvailabilityZones: string[];
            };

            export type GlobalReplicationGroupMember = {
                ReplicationGroupId: string;

                ReplicationGroupRegion: string;

                Role: string;
            };

            export type GlobalReplicationGroupIdSuffix = string;

            export type AutomaticFailoverEnabled = boolean;

            export type CacheNodeType = string;

            export type EngineVersion = string;

            export type CacheParameterGroupName = string;

            export type GlobalNodeGroupCount = number;

            export type GlobalReplicationGroupDescription = string;

            export type Members = AWS.ElastiCache.GlobalReplicationGroup.GlobalReplicationGroupMember[];

            export type RegionalConfigurations = AWS.ElastiCache.GlobalReplicationGroup.RegionalConfiguration[];

        }

        export namespace UserGroup {

            export type UserGroupId = string;

            export type Engine = string;

            export type UserIds = string[];

        }

        export namespace SubnetGroup {

            export type CacheSubnetGroupName = string;

            export type Description = string;

            export type SubnetIds = string[];

            export type Tags = AWS.ElastiCache.SubnetGroup.Tag[];

        }

        export namespace ParameterGroup {

            export type CacheParameterGroupFamily = string;

            export type Description = string;

            export type Properties = Record<string, string>;

            export type Tags = AWS.ElastiCache.ParameterGroup.Tag[];

        }

        export namespace User {

            export type UserId = string;

            export type UserName = string;

            export type Engine = string;

            export type AccessString = string;

            export type NoPasswordRequired = boolean;

            export type Passwords = string[];

        }

        export namespace SecurityGroup {

            export type Description = string;

            export type Tags = AWS.ElastiCache.SecurityGroup.Tag[];

        }

        export namespace SecurityGroupIngress {

            export type CacheSecurityGroupName = string;

            export type EC2SecurityGroupName = string;

            export type EC2SecurityGroupOwnerId = string;

        }

    }

    export namespace AppFlow {

        export namespace Flow {

            export type IncrementalPullConfig = { DatetimeTypeFieldName: string; };

            export type PrefixConfig = {
                PrefixType: string;

                PrefixFormat: string;
            };

            export type S3OutputFormatConfig = {
                FileType: string;

                PrefixConfig: AWS.AppFlow.Flow.PrefixConfig;

                AggregationConfig: AWS.AppFlow.Flow.AggregationConfig;
            };

            export type DestinationFlowConfig = {
                ConnectorType: string;

                ConnectorProfileName: string;

                DestinationConnectorProperties: AWS.AppFlow.Flow.DestinationConnectorProperties;
            };

            export type DatadogSourceProperties = { Object: string; };

            export type AggregationConfig = { AggregationType: string; };

            export type ScheduledTriggerProperties = {
                ScheduleExpression: string;

                DataPullMode: string;

                ScheduleStartTime: number;

                ScheduleEndTime: number;

                TimeZone: string;
            };

            export type DestinationConnectorProperties = {
                Redshift: AWS.AppFlow.Flow.RedshiftDestinationProperties;

                S3: AWS.AppFlow.Flow.S3DestinationProperties;

                Salesforce: AWS.AppFlow.Flow.SalesforceDestinationProperties;

                Snowflake: AWS.AppFlow.Flow.SnowflakeDestinationProperties;

                EventBridge: AWS.AppFlow.Flow.EventBridgeDestinationProperties;

                Upsolver: AWS.AppFlow.Flow.UpsolverDestinationProperties;

                LookoutMetrics: AWS.AppFlow.Flow.LookoutMetricsDestinationProperties;

                Zendesk: AWS.AppFlow.Flow.ZendeskDestinationProperties;
            };

            export type ConnectorOperator = {
                Amplitude: string;

                Datadog: string;

                Dynatrace: string;

                GoogleAnalytics: string;

                InforNexus: string;

                Marketo: string;

                S3: string;

                Salesforce: string;

                ServiceNow: string;

                Singular: string;

                Slack: string;

                Trendmicro: string;

                Veeva: string;

                Zendesk: string;
            };

            export type ZendeskSourceProperties = { Object: string; };

            export type SalesforceDestinationProperties = {
                Object: string;

                ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;

                IdFieldNames: string[];

                WriteOperationType: string;
            };

            export type ErrorHandlingConfig = {
                FailOnFirstError: boolean;

                BucketPrefix: string;

                BucketName: string;
            };

            export type S3SourceProperties = {
                BucketName: string;

                BucketPrefix: string;
            };

            export type SalesforceSourceProperties = {
                Object: string;

                EnableDynamicFieldUpdate: boolean;

                IncludeDeletedRecords: boolean;
            };

            export type SingularSourceProperties = { Object: string; };

            export type EventBridgeDestinationProperties = {
                Object: string;

                ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;
            };

            export type MarketoSourceProperties = { Object: string; };

            export type SlackSourceProperties = { Object: string; };

            export type RedshiftDestinationProperties = {
                Object: string;

                IntermediateBucketName: string;

                BucketPrefix: string;

                ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;
            };

            export type LookoutMetricsDestinationProperties = { Object: string; };

            export type SourceFlowConfig = AWS.AppFlow.Flow.SourceFlowConfig;

            export type UpsolverS3OutputFormatConfig = {
                FileType: string;

                PrefixConfig: AWS.AppFlow.Flow.PrefixConfig;

                AggregationConfig: AWS.AppFlow.Flow.AggregationConfig;
            };

            export type UpsolverDestinationProperties = {
                BucketName: string;

                BucketPrefix: string;

                S3OutputFormatConfig: AWS.AppFlow.Flow.UpsolverS3OutputFormatConfig;
            };

            export type ServiceNowSourceProperties = { Object: string; };

            export type ZendeskDestinationProperties = {
                Object: string;

                ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;

                IdFieldNames: string[];

                WriteOperationType: string;
            };

            export type InforNexusSourceProperties = { Object: string; };

            export type S3DestinationProperties = {
                BucketName: string;

                BucketPrefix: string;

                S3OutputFormatConfig: AWS.AppFlow.Flow.S3OutputFormatConfig;
            };

            export type SourceConnectorProperties = {
                Amplitude: AWS.AppFlow.Flow.AmplitudeSourceProperties;

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

                Zendesk: AWS.AppFlow.Flow.ZendeskSourceProperties;
            };

            export type TrendmicroSourceProperties = { Object: string; };

            export type SnowflakeDestinationProperties = {
                Object: string;

                IntermediateBucketName: string;

                BucketPrefix: string;

                ErrorHandlingConfig: AWS.AppFlow.Flow.ErrorHandlingConfig;
            };

            export type GoogleAnalyticsSourceProperties = { Object: string; };

            export type VeevaSourceProperties = { Object: string; };

            export type DynatraceSourceProperties = { Object: string; };

            export type Task = {
                SourceFields: string[];

                ConnectorOperator: AWS.AppFlow.Flow.ConnectorOperator;

                DestinationField: string;

                TaskType: string;

                TaskProperties: AWS.AppFlow.Flow.TaskPropertiesObject[];
            };

            export type TaskPropertiesObject = {
                Key: string;

                Value: string;
            };

            export type TriggerConfig = AWS.AppFlow.Flow.TriggerConfig;

            export type AmplitudeSourceProperties = { Object: string; };

            export type FlowName = string;

            export type Description = string;

            export type KMSArn = string;

            export type DestinationFlowConfigList = AWS.AppFlow.Flow.DestinationFlowConfig[];

            export type Tasks = AWS.AppFlow.Flow.Task[];

            export type Tags = AWS.AppFlow.Flow.Tag[];

        }

        export namespace ConnectorProfile {

            export type InforNexusConnectorProfileProperties = { InstanceUrl: string; };

            export type DynatraceConnectorProfileCredentials = { ApiToken: string; };

            export type MarketoConnectorProfileCredentials = {
                ClientId: string;

                ClientSecret: string;

                AccessToken: string;

                ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
            };

            export type RedshiftConnectorProfileCredentials = {
                Username: string;

                Password: string;
            };

            export type ZendeskConnectorProfileProperties = { InstanceUrl: string; };

            export type GoogleAnalyticsConnectorProfileCredentials = {
                ClientId: string;

                ClientSecret: string;

                AccessToken: string;

                RefreshToken: string;

                ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
            };

            export type DynatraceConnectorProfileProperties = { InstanceUrl: string; };

            export type SalesforceConnectorProfileCredentials = {
                AccessToken: string;

                RefreshToken: string;

                ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;

                ClientCredentialsArn: string;
            };

            export type RedshiftConnectorProfileProperties = {
                DatabaseUrl: string;

                BucketName: string;

                BucketPrefix: string;

                RoleArn: string;
            };

            export type ConnectorProfileCredentials = {
                Amplitude: AWS.AppFlow.ConnectorProfile.AmplitudeConnectorProfileCredentials;

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

                Zendesk: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileCredentials;
            };

            export type SingularConnectorProfileCredentials = { ApiKey: string; };

            export type ServiceNowConnectorProfileCredentials = {
                Username: string;

                Password: string;
            };

            export type SnowflakeConnectorProfileCredentials = {
                Username: string;

                Password: string;
            };

            export type ZendeskConnectorProfileCredentials = {
                ClientId: string;

                ClientSecret: string;

                AccessToken: string;

                ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
            };

            export type SnowflakeConnectorProfileProperties = {
                Warehouse: string;

                Stage: string;

                BucketName: string;

                BucketPrefix: string;

                PrivateLinkServiceName: string;

                AccountName: string;

                Region: string;
            };

            export type SalesforceConnectorProfileProperties = {
                InstanceUrl: string;

                isSandboxEnvironment: boolean;
            };

            export type ConnectorProfileConfig = AWS.AppFlow.ConnectorProfile.ConnectorProfileConfig;

            export type AmplitudeConnectorProfileCredentials = {
                ApiKey: string;

                SecretKey: string;
            };

            export type ConnectorOAuthRequest = {
                AuthCode: string;

                RedirectUri: string;
            };

            export type DatadogConnectorProfileCredentials = {
                ApiKey: string;

                ApplicationKey: string;
            };

            export type SlackConnectorProfileCredentials = {
                ClientId: string;

                ClientSecret: string;

                AccessToken: string;

                ConnectorOAuthRequest: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
            };

            export type TrendmicroConnectorProfileCredentials = { ApiSecretKey: string; };

            export type VeevaConnectorProfileCredentials = {
                Username: string;

                Password: string;
            };

            export type VeevaConnectorProfileProperties = { InstanceUrl: string; };

            export type SlackConnectorProfileProperties = { InstanceUrl: string; };

            export type MarketoConnectorProfileProperties = { InstanceUrl: string; };

            export type InforNexusConnectorProfileCredentials = {
                AccessKeyId: string;

                UserId: string;

                SecretAccessKey: string;

                Datakey: string;
            };

            export type DatadogConnectorProfileProperties = { InstanceUrl: string; };

            export type ServiceNowConnectorProfileProperties = { InstanceUrl: string; };

            export type ConnectorProfileProperties = {
                Datadog: AWS.AppFlow.ConnectorProfile.DatadogConnectorProfileProperties;

                Dynatrace: AWS.AppFlow.ConnectorProfile.DynatraceConnectorProfileProperties;

                InforNexus: AWS.AppFlow.ConnectorProfile.InforNexusConnectorProfileProperties;

                Marketo: AWS.AppFlow.ConnectorProfile.MarketoConnectorProfileProperties;

                Redshift: AWS.AppFlow.ConnectorProfile.RedshiftConnectorProfileProperties;

                Salesforce: AWS.AppFlow.ConnectorProfile.SalesforceConnectorProfileProperties;

                ServiceNow: AWS.AppFlow.ConnectorProfile.ServiceNowConnectorProfileProperties;

                Slack: AWS.AppFlow.ConnectorProfile.SlackConnectorProfileProperties;

                Snowflake: AWS.AppFlow.ConnectorProfile.SnowflakeConnectorProfileProperties;

                Veeva: AWS.AppFlow.ConnectorProfile.VeevaConnectorProfileProperties;

                Zendesk: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileProperties;
            };

            export type ConnectorProfileName = string;

            export type KMSArn = string;

            export type ConnectorType = string;

            export type ConnectionMode = string;

        }

    }

    export namespace LookoutMetrics {

        export namespace AnomalyDetector {

            export type FileFormatDescriptor = {
                CsvFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.CsvFormatDescriptor;

                JsonFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.JsonFormatDescriptor;
            };

            export type CsvFormatDescriptor = {
                FileCompression: string;

                Charset: string;

                Delimiter: string;

                HeaderList: string[];

                QuoteSymbol: string;

                ContainsHeader: boolean;
            };

            export type VpcConfiguration = {
                SubnetIdList: string[];

                SecurityGroupIdList: string[];
            };

            export type RDSSourceConfig = {
                DBInstanceIdentifier: string;

                DatabaseHost: string;

                DatabasePort: number;

                SecretManagerArn: string;

                DatabaseName: string;

                TableName: string;

                RoleArn: string;

                VpcConfiguration: AWS.LookoutMetrics.AnomalyDetector.VpcConfiguration;
            };

            export type TimestampColumn = {
                ColumnName: string;

                ColumnFormat: string;
            };

            export type JsonFormatDescriptor = {
                FileCompression: string;

                Charset: string;
            };

            export type AppFlowConfig = {
                RoleArn: string;

                FlowName: string;
            };

            export type MetricSource = {
                S3SourceConfig: AWS.LookoutMetrics.AnomalyDetector.S3SourceConfig;

                RDSSourceConfig: AWS.LookoutMetrics.AnomalyDetector.RDSSourceConfig;

                RedshiftSourceConfig: AWS.LookoutMetrics.AnomalyDetector.RedshiftSourceConfig;

                CloudwatchConfig: AWS.LookoutMetrics.AnomalyDetector.CloudwatchConfig;

                AppFlowConfig: AWS.LookoutMetrics.AnomalyDetector.AppFlowConfig;
            };

            export type RedshiftSourceConfig = {
                ClusterIdentifier: string;

                DatabaseHost: string;

                DatabasePort: number;

                SecretManagerArn: string;

                DatabaseName: string;

                TableName: string;

                RoleArn: string;

                VpcConfiguration: AWS.LookoutMetrics.AnomalyDetector.VpcConfiguration;
            };

            export type Metric = {
                MetricName: string;

                AggregationFunction: string;

                Namespace: string;
            };

            export type MetricSet = {
                MetricSetName: string;

                MetricSetDescription: string;

                MetricSource: AWS.LookoutMetrics.AnomalyDetector.MetricSource;

                MetricList: AWS.LookoutMetrics.AnomalyDetector.Metric[];

                Offset: number;

                TimestampColumn: AWS.LookoutMetrics.AnomalyDetector.TimestampColumn;

                DimensionList: string[];

                MetricSetFrequency: string;

                Timezone: string;
            };

            export type CloudwatchConfig = { RoleArn: string; };

            export type S3SourceConfig = {
                RoleArn: string;

                TemplatedPathList: string[];

                HistoricalDataPathList: string[];

                FileFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.FileFormatDescriptor;
            };

            export type AnomalyDetectorName = string;

            export type AnomalyDetectorDescription = string;

            export type AnomalyDetectorConfig = JSONString;

            export type MetricSetList = AWS.LookoutMetrics.AnomalyDetector.MetricSet[];

            export type KmsKeyArn = string;

        }

        export namespace Alert {

            export type AlertName = string;

            export type AlertDescription = string;

            export type AnomalyDetectorArn = string;

            export type AlertSensitivityThreshold = number;

            export type Action = JSONString;

        }

    }

    export namespace Greengrass {

        export namespace CoreDefinition {

            export type Core = {
                SyncShadow: boolean;

                ThingArn: string;

                Id: string;

                CertificateArn: string;
            };

            export type CoreDefinitionVersion = { Cores: AWS.Greengrass.CoreDefinition.Core[]; };

            export type InitialVersion = AWS.Greengrass.CoreDefinition.CoreDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace FunctionDefinitionVersion {

            export type FunctionConfiguration = {
                MemorySize: number;

                Pinned: boolean;

                ExecArgs: string;

                Timeout: number;

                EncodingType: string;

                Environment: AWS.Greengrass.FunctionDefinitionVersion.Environment;

                Executable: string;
            };

            export type Execution = {
                IsolationMode: string;

                RunAs: AWS.Greengrass.FunctionDefinitionVersion.RunAs;
            };

            export type DefaultConfig = AWS.Greengrass.FunctionDefinitionVersion.DefaultConfig;

            export type Function = {
                FunctionArn: string;

                FunctionConfiguration: AWS.Greengrass.FunctionDefinitionVersion.FunctionConfiguration;

                Id: string;
            };

            export type RunAs = {
                Uid: number;

                Gid: number;
            };

            export type Environment = {
                Variables: JSONString;

                Execution: AWS.Greengrass.FunctionDefinitionVersion.Execution;

                ResourceAccessPolicies: AWS.Greengrass.FunctionDefinitionVersion.ResourceAccessPolicy[];

                AccessSysfs: boolean;
            };

            export type ResourceAccessPolicy = {
                ResourceId: string;

                Permission: string;
            };

            export type Functions = AWS.Greengrass.FunctionDefinitionVersion.Function[];

            export type FunctionDefinitionId = string;

        }

        export namespace ResourceDefinitionVersion {

            export type ResourceInstance = {
                ResourceDataContainer: AWS.Greengrass.ResourceDefinitionVersion.ResourceDataContainer;

                Id: string;

                Name: string;
            };

            export type LocalDeviceResourceData = {
                SourcePath: string;

                GroupOwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting;
            };

            export type LocalVolumeResourceData = {
                SourcePath: string;

                DestinationPath: string;

                GroupOwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting;
            };

            export type SecretsManagerSecretResourceData = {
                ARN: string;

                AdditionalStagingLabelsToDownload: string[];
            };

            export type SageMakerMachineLearningModelResourceData = {
                OwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

                DestinationPath: string;

                SageMakerJobArn: string;
            };

            export type ResourceDownloadOwnerSetting = {
                GroupOwner: string;

                GroupPermission: string;
            };

            export type S3MachineLearningModelResourceData = {
                OwnerSetting: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

                DestinationPath: string;

                S3Uri: string;
            };

            export type ResourceDataContainer = {
                SecretsManagerSecretResourceData: AWS.Greengrass.ResourceDefinitionVersion.SecretsManagerSecretResourceData;

                SageMakerMachineLearningModelResourceData: AWS.Greengrass.ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData;

                LocalVolumeResourceData: AWS.Greengrass.ResourceDefinitionVersion.LocalVolumeResourceData;

                LocalDeviceResourceData: AWS.Greengrass.ResourceDefinitionVersion.LocalDeviceResourceData;

                S3MachineLearningModelResourceData: AWS.Greengrass.ResourceDefinitionVersion.S3MachineLearningModelResourceData;
            };

            export type GroupOwnerSetting = {
                AutoAddGroupOwner: boolean;

                GroupOwner: string;
            };

            export type Resources = AWS.Greengrass.ResourceDefinitionVersion.ResourceInstance[];

            export type ResourceDefinitionId = string;

        }

        export namespace FunctionDefinition {

            export type FunctionConfiguration = {
                MemorySize: number;

                Pinned: boolean;

                ExecArgs: string;

                Timeout: number;

                EncodingType: string;

                Environment: AWS.Greengrass.FunctionDefinition.Environment;

                Executable: string;
            };

            export type DefaultConfig = { Execution: AWS.Greengrass.FunctionDefinition.Execution; };

            export type Execution = {
                IsolationMode: string;

                RunAs: AWS.Greengrass.FunctionDefinition.RunAs;
            };

            export type Environment = {
                Variables: JSONString;

                Execution: AWS.Greengrass.FunctionDefinition.Execution;

                ResourceAccessPolicies: AWS.Greengrass.FunctionDefinition.ResourceAccessPolicy[];

                AccessSysfs: boolean;
            };

            export type FunctionDefinitionVersion = {
                DefaultConfig: AWS.Greengrass.FunctionDefinition.DefaultConfig;

                Functions: AWS.Greengrass.FunctionDefinition.Function[];
            };

            export type RunAs = {
                Uid: number;

                Gid: number;
            };

            export type Function = {
                FunctionArn: string;

                FunctionConfiguration: AWS.Greengrass.FunctionDefinition.FunctionConfiguration;

                Id: string;
            };

            export type ResourceAccessPolicy = {
                ResourceId: string;

                Permission: string;
            };

            export type InitialVersion = AWS.Greengrass.FunctionDefinition.FunctionDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace LoggerDefinitionVersion {

            export type Logger = {
                Space: number;

                Type: string;

                Level: string;

                Id: string;

                Component: string;
            };

            export type LoggerDefinitionId = string;

            export type Loggers = AWS.Greengrass.LoggerDefinitionVersion.Logger[];

        }

        export namespace ResourceDefinition {

            export type S3MachineLearningModelResourceData = {
                OwnerSetting: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

                DestinationPath: string;

                S3Uri: string;
            };

            export type SecretsManagerSecretResourceData = {
                ARN: string;

                AdditionalStagingLabelsToDownload: string[];
            };

            export type ResourceDownloadOwnerSetting = {
                GroupOwner: string;

                GroupPermission: string;
            };

            export type SageMakerMachineLearningModelResourceData = {
                OwnerSetting: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

                DestinationPath: string;

                SageMakerJobArn: string;
            };

            export type GroupOwnerSetting = {
                AutoAddGroupOwner: boolean;

                GroupOwner: string;
            };

            export type LocalDeviceResourceData = {
                SourcePath: string;

                GroupOwnerSetting: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting;
            };

            export type ResourceDefinitionVersion = { Resources: AWS.Greengrass.ResourceDefinition.ResourceInstance[]; };

            export type LocalVolumeResourceData = {
                SourcePath: string;

                DestinationPath: string;

                GroupOwnerSetting: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting;
            };

            export type ResourceInstance = {
                ResourceDataContainer: AWS.Greengrass.ResourceDefinition.ResourceDataContainer;

                Id: string;

                Name: string;
            };

            export type ResourceDataContainer = {
                SecretsManagerSecretResourceData: AWS.Greengrass.ResourceDefinition.SecretsManagerSecretResourceData;

                SageMakerMachineLearningModelResourceData: AWS.Greengrass.ResourceDefinition.SageMakerMachineLearningModelResourceData;

                LocalVolumeResourceData: AWS.Greengrass.ResourceDefinition.LocalVolumeResourceData;

                LocalDeviceResourceData: AWS.Greengrass.ResourceDefinition.LocalDeviceResourceData;

                S3MachineLearningModelResourceData: AWS.Greengrass.ResourceDefinition.S3MachineLearningModelResourceData;
            };

            export type InitialVersion = AWS.Greengrass.ResourceDefinition.ResourceDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace SubscriptionDefinition {

            export type SubscriptionDefinitionVersion = { Subscriptions: AWS.Greengrass.SubscriptionDefinition.Subscription[]; };

            export type Subscription = {
                Target: string;

                Id: string;

                Source: string;

                Subject: string;
            };

            export type InitialVersion = AWS.Greengrass.SubscriptionDefinition.SubscriptionDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace ConnectorDefinition {

            export type ConnectorDefinitionVersion = { Connectors: AWS.Greengrass.ConnectorDefinition.Connector[]; };

            export type Connector = {
                ConnectorArn: string;

                Parameters: JSONString;

                Id: string;
            };

            export type InitialVersion = AWS.Greengrass.ConnectorDefinition.ConnectorDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace LoggerDefinition {

            export type Logger = {
                Space: number;

                Type: string;

                Level: string;

                Id: string;

                Component: string;
            };

            export type LoggerDefinitionVersion = { Loggers: AWS.Greengrass.LoggerDefinition.Logger[]; };

            export type InitialVersion = AWS.Greengrass.LoggerDefinition.LoggerDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace SubscriptionDefinitionVersion {

            export type Subscription = {
                Target: string;

                Id: string;

                Source: string;

                Subject: string;
            };

            export type SubscriptionDefinitionId = string;

            export type Subscriptions = AWS.Greengrass.SubscriptionDefinitionVersion.Subscription[];

        }

        export namespace CoreDefinitionVersion {

            export type Core = {
                SyncShadow: boolean;

                ThingArn: string;

                Id: string;

                CertificateArn: string;
            };

            export type Cores = AWS.Greengrass.CoreDefinitionVersion.Core[];

            export type CoreDefinitionId = string;

        }

        export namespace DeviceDefinitionVersion {

            export type Device = {
                SyncShadow: boolean;

                ThingArn: string;

                Id: string;

                CertificateArn: string;
            };

            export type DeviceDefinitionId = string;

            export type Devices = AWS.Greengrass.DeviceDefinitionVersion.Device[];

        }

        export namespace Group {

            export type GroupVersion = {
                LoggerDefinitionVersionArn: string;

                DeviceDefinitionVersionArn: string;

                FunctionDefinitionVersionArn: string;

                CoreDefinitionVersionArn: string;

                ResourceDefinitionVersionArn: string;

                ConnectorDefinitionVersionArn: string;

                SubscriptionDefinitionVersionArn: string;
            };

            export type InitialVersion = AWS.Greengrass.Group.GroupVersion;

            export type RoleArn = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace DeviceDefinition {

            export type Device = {
                SyncShadow: boolean;

                ThingArn: string;

                Id: string;

                CertificateArn: string;
            };

            export type DeviceDefinitionVersion = { Devices: AWS.Greengrass.DeviceDefinition.Device[]; };

            export type InitialVersion = AWS.Greengrass.DeviceDefinition.DeviceDefinitionVersion;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace ConnectorDefinitionVersion {

            export type Connector = {
                ConnectorArn: string;

                Parameters: JSONString;

                Id: string;
            };

            export type Connectors = AWS.Greengrass.ConnectorDefinitionVersion.Connector[];

            export type ConnectorDefinitionId = string;

        }

        export namespace GroupVersion {

            export type LoggerDefinitionVersionArn = string;

            export type DeviceDefinitionVersionArn = string;

            export type FunctionDefinitionVersionArn = string;

            export type CoreDefinitionVersionArn = string;

            export type ResourceDefinitionVersionArn = string;

            export type ConnectorDefinitionVersionArn = string;

            export type SubscriptionDefinitionVersionArn = string;

            export type GroupId = string;

        }

    }

    export namespace Glue {

        export namespace MLTransform {

            export type FindMatchesParameters = {
                PrecisionRecallTradeoff: number;

                EnforceProvidedLabels: boolean;

                PrimaryKeyColumnName: string;

                AccuracyCostTradeoff: number;
            };

            export type MLUserDataEncryption = {
                MLUserDataEncryptionMode: string;

                KmsKeyId: string;
            };

            export type InputRecordTables = AWS.Glue.MLTransform.InputRecordTables;

            export type GlueTables = {
                ConnectionName: string;

                TableName: string;

                DatabaseName: string;

                CatalogId: string;
            };

            export type TransformEncryption = AWS.Glue.MLTransform.TransformEncryption;

            export type TransformParameters = AWS.Glue.MLTransform.TransformParameters;

            export type MaxRetries = number;

            export type Description = string;

            export type Timeout = number;

            export type Name = string;

            export type Role = string;

            export type WorkerType = string;

            export type GlueVersion = string;

            export type NumberOfWorkers = number;

            export type Tags = JSONString;

            export type MaxCapacity = number;

        }

        export namespace Database {

            export type DatabaseInput = AWS.Glue.Database.DatabaseInput;

            export type DatabaseIdentifier = {
                DatabaseName: string;

                CatalogId: string;
            };

            export type CatalogId = string;

        }

        export namespace Job {

            export type JobCommand = {
                PythonVersion: string;

                ScriptLocation: string;

                Name: string;
            };

            export type ConnectionsList = { Connections: string[]; };

            export type NotificationProperty = AWS.Glue.Job.NotificationProperty;

            export type ExecutionProperty = AWS.Glue.Job.ExecutionProperty;

            export type Connections = AWS.Glue.Job.ConnectionsList;

            export type MaxRetries = number;

            export type Description = string;

            export type Timeout = number;

            export type AllocatedCapacity = number;

            export type Name = string;

            export type Role = string;

            export type DefaultArguments = JSONString;

            export type WorkerType = string;

            export type LogUri = string;

            export type Command = AWS.Glue.Job.JobCommand;

            export type GlueVersion = string;

            export type SecurityConfiguration = string;

            export type NumberOfWorkers = number;

            export type Tags = JSONString;

            export type MaxCapacity = number;

        }

        export namespace Crawler {

            export type CatalogTarget = {
                DatabaseName: string;

                Tables: string[];
            };

            export type Schedule = AWS.Glue.Crawler.Schedule;

            export type SchemaChangePolicy = AWS.Glue.Crawler.SchemaChangePolicy;

            export type Targets = AWS.Glue.Crawler.Targets;

            export type JdbcTarget = {
                ConnectionName: string;

                Path: string;

                Exclusions: string[];
            };

            export type DynamoDBTarget = { Path: string; };

            export type S3Target = {
                ConnectionName: string;

                Path: string;

                Exclusions: string[];
            };

            export type Role = string;

            export type Classifiers = string[];

            export type Description = string;

            export type Configuration = string;

            export type DatabaseName = string;

            export type CrawlerSecurityConfiguration = string;

            export type TablePrefix = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Connection {

            export type ConnectionInput = AWS.Glue.Connection.ConnectionInput;

            export type PhysicalConnectionRequirements = {
                AvailabilityZone: string;

                SecurityGroupIdList: string[];

                SubnetId: string;
            };

            export type CatalogId = string;

        }

        export namespace SchemaVersion {

            export type Schema = AWS.Glue.SchemaVersion.Schema;

            export type SchemaDefinition = string;

        }

        export namespace Schema {

            export type SchemaVersion = {
                IsLatest: boolean;

                VersionNumber: number;
            };

            export type Registry = AWS.Glue.Schema.Registry;

            export type Name = string;

            export type Description = string;

            export type DataFormat = string;

            export type Compatibility = string;

            export type SchemaDefinition = string;

            export type CheckpointVersion = AWS.Glue.Schema.SchemaVersion;

            export type Tags = AWS.Glue.Schema.Tag[];

        }

        export namespace DataCatalogEncryptionSettings {

            export type DataCatalogEncryptionSettings = AWS.Glue.DataCatalogEncryptionSettings.DataCatalogEncryptionSettings;

            export type EncryptionAtRest = {
                CatalogEncryptionMode: string;

                SseAwsKmsKeyId: string;
            };

            export type ConnectionPasswordEncryption = {
                ReturnConnectionPasswordEncrypted: boolean;

                KmsKeyId: string;
            };

            export type CatalogId = string;

        }

        export namespace Trigger {

            export type Condition = {
                CrawlerName: string;

                State: string;

                CrawlState: string;

                LogicalOperator: string;

                JobName: string;
            };

            export type Predicate = AWS.Glue.Trigger.Predicate;

            export type Action = {
                NotificationProperty: AWS.Glue.Trigger.NotificationProperty;

                CrawlerName: string;

                Timeout: number;

                JobName: string;

                Arguments: JSONString;

                SecurityConfiguration: string;
            };

            export type NotificationProperty = { NotifyDelayAfter: number; };

            export type Type = string;

            export type StartOnCreation = boolean;

            export type Description = string;

            export type Actions = AWS.Glue.Trigger.Action[];

            export type WorkflowName = string;

            export type Schedule = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Partition {

            export type PartitionInput = AWS.Glue.Partition.PartitionInput;

            export type Order = {
                Column: string;

                SortOrder: number;
            };

            export type SchemaReference = {
                SchemaId: AWS.Glue.Partition.SchemaId;

                SchemaVersionNumber: number;

                SchameVersionId: string;
            };

            export type SerdeInfo = {
                Parameters: JSONString;

                SerializationLibrary: string;

                Name: string;
            };

            export type Column = {
                Comment: string;

                Type: string;

                Name: string;
            };

            export type StorageDescriptor = {
                StoredAsSubDirectories: boolean;

                Parameters: JSONString;

                BucketColumns: string[];

                NumberOfBuckets: number;

                OutputFormat: string;

                Columns: AWS.Glue.Partition.Column[];

                SerdeInfo: AWS.Glue.Partition.SerdeInfo;

                SortColumns: AWS.Glue.Partition.Order[];

                Compressed: boolean;

                SchemaReference: AWS.Glue.Partition.SchemaReference;

                SkewedInfo: AWS.Glue.Partition.SkewedInfo;

                InputFormat: string;

                Location: string;
            };

            export type SkewedInfo = {
                SkewedColumnNames: string[];

                SkewedColumnValues: string[];

                SkewedColumnValueLocationMaps: JSONString;
            };

            export type SchemaId = {
                RegistryName: string;

                SchemaName: string;

                SchemaArn: string;
            };

            export type TableName = string;

            export type DatabaseName = string;

            export type CatalogId = string;

        }

        export namespace Table {

            export type Column = {
                Comment: string;

                Type: string;

                Name: string;
            };

            export type TableInput = AWS.Glue.Table.TableInput;

            export type SerdeInfo = {
                Parameters: JSONString;

                SerializationLibrary: string;

                Name: string;
            };

            export type SchemaId = {
                RegistryName: string;

                SchemaName: string;

                SchemaArn: string;
            };

            export type Order = {
                Column: string;

                SortOrder: number;
            };

            export type SkewedInfo = {
                SkewedColumnNames: string[];

                SkewedColumnValues: string[];

                SkewedColumnValueLocationMaps: JSONString;
            };

            export type StorageDescriptor = {
                StoredAsSubDirectories: boolean;

                Parameters: JSONString;

                BucketColumns: string[];

                NumberOfBuckets: number;

                OutputFormat: string;

                Columns: AWS.Glue.Table.Column[];

                SerdeInfo: AWS.Glue.Table.SerdeInfo;

                SortColumns: AWS.Glue.Table.Order[];

                Compressed: boolean;

                SchemaReference: AWS.Glue.Table.SchemaReference;

                SkewedInfo: AWS.Glue.Table.SkewedInfo;

                InputFormat: string;

                Location: string;
            };

            export type SchemaReference = {
                SchemaId: AWS.Glue.Table.SchemaId;

                SchemaVersionNumber: number;

                SchameVersionId: string;
            };

            export type TableIdentifier = {
                DatabaseName: string;

                CatalogId: string;

                Name: string;
            };

            export type DatabaseName = string;

            export type CatalogId = string;

        }

        export namespace Classifier {

            export type CsvClassifier = AWS.Glue.Classifier.CsvClassifier;

            export type GrokClassifier = AWS.Glue.Classifier.GrokClassifier;

            export type JsonClassifier = AWS.Glue.Classifier.JsonClassifier;

            export type XMLClassifier = AWS.Glue.Classifier.XMLClassifier;

        }

        export namespace SecurityConfiguration {

            export type EncryptionConfiguration = AWS.Glue.SecurityConfiguration.EncryptionConfiguration;

            export type JobBookmarksEncryption = {
                KmsKeyArn: string;

                JobBookmarksEncryptionMode: string;
            };

            export type S3Encryptions = AWS.Glue.SecurityConfiguration.S3Encryption[];

            export type S3Encryption = {
                KmsKeyArn: string;

                S3EncryptionMode: string;
            };

            export type CloudWatchEncryption = {
                KmsKeyArn: string;

                CloudWatchEncryptionMode: string;
            };

            export type Name = string;

        }

        export namespace DevEndpoint {

            export type ExtraJarsS3Path = string;

            export type PublicKey = string;

            export type NumberOfNodes = number;

            export type Arguments = JSONString;

            export type SubnetId = string;

            export type PublicKeys = string[];

            export type SecurityGroupIds = string[];

            export type RoleArn = string;

            export type WorkerType = string;

            export type EndpointName = string;

            export type GlueVersion = string;

            export type ExtraPythonLibsS3Path = string;

            export type SecurityConfiguration = string;

            export type NumberOfWorkers = number;

            export type Tags = JSONString;

        }

        export namespace SchemaVersionMetadata {

            export type SchemaVersionId = string;

            export type Key = string;

            export type Value = string;

        }

        export namespace Workflow {

            export type Description = string;

            export type DefaultRunProperties = JSONString;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Registry {

            export type Name = string;

            export type Description = string;

            export type Tags = AWS.Glue.Registry.Tag[];

        }

    }

    export namespace Athena {

        export namespace WorkGroup {

            export type WorkGroupConfigurationUpdates = AWS.Athena.WorkGroup.WorkGroupConfigurationUpdates;

            export type ResultConfiguration = {
                EncryptionConfiguration: AWS.Athena.WorkGroup.EncryptionConfiguration;

                OutputLocation: string;
            };

            export type ResultConfigurationUpdates = {
                EncryptionConfiguration: AWS.Athena.WorkGroup.EncryptionConfiguration;

                OutputLocation: string;

                RemoveEncryptionConfiguration: boolean;

                RemoveOutputLocation: boolean;
            };

            export type WorkGroupConfiguration = AWS.Athena.WorkGroup.WorkGroupConfiguration;

            export type EncryptionConfiguration = {
                EncryptionOption: string;

                KmsKey: string;
            };

            export type EngineVersion = {
                SelectedEngineVersion: string;

                EffectiveEngineVersion: string;
            };

            export type Name = string;

            export type Description = string;

            export type Tags = AWS.Athena.WorkGroup.Tag[];

            export type State = string;

            export type RecursiveDeleteOption = boolean;

        }

        export namespace DataCatalog {

            export type Name = string;

            export type Description = string;

            export type Parameters = Record<string, string>;

            export type Tags = AWS.Athena.DataCatalog.Tag[];

            export type Type = string;

        }

        export namespace NamedQuery {

            export type Name = string;

            export type Database = string;

            export type Description = string;

            export type QueryString = string;

            export type WorkGroup = string;

        }

    }

    export namespace SageMaker {

        export namespace MonitoringSchedule {

            export type Environment = any;

            export type ConstraintsResource = { S3Uri: string; };

            export type MonitoringExecutionSummary = {
                CreationTime: string;

                EndpointName: string;

                FailureReason: string;

                LastModifiedTime: string;

                MonitoringExecutionStatus: string;

                MonitoringScheduleName: string;

                ProcessingJobArn: string;

                ScheduledTime: string;
            };

            export type MonitoringOutputConfig = {
                KmsKeyId: string;

                MonitoringOutputs: AWS.SageMaker.MonitoringSchedule.MonitoringOutput[];
            };

            export type StatisticsResource = { S3Uri: string; };

            export type VpcConfig = {
                SecurityGroupIds: string[];

                Subnets: string[];
            };

            export type ClusterConfig = {
                InstanceCount: number;

                InstanceType: string;

                VolumeKmsKeyId: string;

                VolumeSizeInGB: number;
            };

            export type MonitoringAppSpecification = {
                ContainerArguments: string[];

                ContainerEntrypoint: string[];

                ImageUri: string;

                PostAnalyticsProcessorSourceUri: string;

                RecordPreprocessorSourceUri: string;
            };

            export type MonitoringJobDefinition = {
                BaselineConfig: AWS.SageMaker.MonitoringSchedule.BaselineConfig;

                Environment: AWS.SageMaker.MonitoringSchedule.Environment;

                MonitoringAppSpecification: AWS.SageMaker.MonitoringSchedule.MonitoringAppSpecification;

                MonitoringInputs: AWS.SageMaker.MonitoringSchedule.MonitoringInput[];

                MonitoringOutputConfig: AWS.SageMaker.MonitoringSchedule.MonitoringOutputConfig;

                MonitoringResources: AWS.SageMaker.MonitoringSchedule.MonitoringResources;

                NetworkConfig: AWS.SageMaker.MonitoringSchedule.NetworkConfig;

                RoleArn: string;

                StoppingCondition: AWS.SageMaker.MonitoringSchedule.StoppingCondition;
            };

            export type BaselineConfig = {
                ConstraintsResource: AWS.SageMaker.MonitoringSchedule.ConstraintsResource;

                StatisticsResource: AWS.SageMaker.MonitoringSchedule.StatisticsResource;
            };

            export type MonitoringOutput = { S3Output: AWS.SageMaker.MonitoringSchedule.S3Output; };

            export type ScheduleConfig = { ScheduleExpression: string; };

            export type MonitoringScheduleConfig = AWS.SageMaker.MonitoringSchedule.MonitoringScheduleConfig;

            export type EndpointInput = {
                EndpointName: string;

                LocalPath: string;

                S3DataDistributionType: string;

                S3InputMode: string;
            };

            export type NetworkConfig = {
                EnableInterContainerTrafficEncryption: boolean;

                EnableNetworkIsolation: boolean;

                VpcConfig: AWS.SageMaker.MonitoringSchedule.VpcConfig;
            };

            export type S3Output = {
                LocalPath: string;

                S3UploadMode: string;

                S3Uri: string;
            };

            export type MonitoringResources = { ClusterConfig: AWS.SageMaker.MonitoringSchedule.ClusterConfig; };

            export type StoppingCondition = { MaxRuntimeInSeconds: number; };

            export type MonitoringInput = { EndpointInput: AWS.SageMaker.MonitoringSchedule.EndpointInput; };

            export type MonitoringScheduleName = string;

            export type Tags = AWS.SageMaker.MonitoringSchedule.Tag[];

            export type EndpointName = string;

            export type FailureReason = string;

            export type LastMonitoringExecutionSummary = AWS.SageMaker.MonitoringSchedule.MonitoringExecutionSummary;

            export type MonitoringScheduleStatus = string;

        }

        export namespace ModelBiasJobDefinition {

            export type ClusterConfig = {
                InstanceCount: number;

                InstanceType: string;

                VolumeKmsKeyId: string;

                VolumeSizeInGB: number;
            };

            export type S3Output = {
                LocalPath: string;

                S3UploadMode: string;

                S3Uri: string;
            };

            export type ModelBiasBaselineConfig = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasBaselineConfig;

            export type ModelBiasJobInput = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasJobInput;

            export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelBiasJobDefinition.ClusterConfig; };

            export type ModelBiasAppSpecification = AWS.SageMaker.ModelBiasJobDefinition.ModelBiasAppSpecification;

            export type MonitoringGroundTruthS3Input = { S3Uri: string; };

            export type ConstraintsResource = { S3Uri: string; };

            export type StoppingCondition = AWS.SageMaker.ModelBiasJobDefinition.StoppingCondition;

            export type Environment = any;

            export type MonitoringOutputConfig = {
                KmsKeyId: string;

                MonitoringOutputs: AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutput[];
            };

            export type VpcConfig = {
                SecurityGroupIds: string[];

                Subnets: string[];
            };

            export type NetworkConfig = AWS.SageMaker.ModelBiasJobDefinition.NetworkConfig;

            export type EndpointInput = {
                EndpointName: string;

                LocalPath: string;

                S3DataDistributionType: string;

                S3InputMode: string;

                StartTimeOffset: string;

                EndTimeOffset: string;

                FeaturesAttribute: string;

                InferenceAttribute: string;

                ProbabilityAttribute: string;

                ProbabilityThresholdAttribute: number;
            };

            export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelBiasJobDefinition.S3Output; };

            export type JobDefinitionName = string;

            export type ModelBiasJobOutputConfig = AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutputConfig;

            export type JobResources = AWS.SageMaker.ModelBiasJobDefinition.MonitoringResources;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.ModelBiasJobDefinition.Tag[];

        }

        export namespace DataQualityJobDefinition {

            export type DataQualityBaselineConfig = AWS.SageMaker.DataQualityJobDefinition.DataQualityBaselineConfig;

            export type StatisticsResource = { S3Uri: string; };

            export type ConstraintsResource = { S3Uri: string; };

            export type Environment = any;

            export type DataQualityJobInput = AWS.SageMaker.DataQualityJobDefinition.DataQualityJobInput;

            export type MonitoringResources = { ClusterConfig: AWS.SageMaker.DataQualityJobDefinition.ClusterConfig; };

            export type MonitoringOutput = { S3Output: AWS.SageMaker.DataQualityJobDefinition.S3Output; };

            export type MonitoringOutputConfig = {
                KmsKeyId: string;

                MonitoringOutputs: AWS.SageMaker.DataQualityJobDefinition.MonitoringOutput[];
            };

            export type DataQualityAppSpecification = AWS.SageMaker.DataQualityJobDefinition.DataQualityAppSpecification;

            export type ClusterConfig = {
                InstanceCount: number;

                InstanceType: string;

                VolumeKmsKeyId: string;

                VolumeSizeInGB: number;
            };

            export type VpcConfig = {
                SecurityGroupIds: string[];

                Subnets: string[];
            };

            export type S3Output = {
                LocalPath: string;

                S3UploadMode: string;

                S3Uri: string;
            };

            export type StoppingCondition = AWS.SageMaker.DataQualityJobDefinition.StoppingCondition;

            export type NetworkConfig = AWS.SageMaker.DataQualityJobDefinition.NetworkConfig;

            export type EndpointInput = {
                EndpointName: string;

                LocalPath: string;

                S3DataDistributionType: string;

                S3InputMode: string;
            };

            export type JobDefinitionName = string;

            export type DataQualityJobOutputConfig = AWS.SageMaker.DataQualityJobDefinition.MonitoringOutputConfig;

            export type JobResources = AWS.SageMaker.DataQualityJobDefinition.MonitoringResources;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.DataQualityJobDefinition.Tag[];

        }

        export namespace AppImageConfig {

            export type KernelGatewayImageConfig = AWS.SageMaker.AppImageConfig.KernelGatewayImageConfig;

            export type FileSystemConfig = {
                DefaultGid: number;

                DefaultUid: number;

                MountPath: string;
            };

            export type KernelSpec = {
                DisplayName: string;

                Name: string;
            };

            export type AppImageConfigName = string;

            export type Tags = AWS.SageMaker.AppImageConfig.Tag[];

        }

        export namespace Endpoint {

            export type Alarm = { AlarmName: string; };

            export type AutoRollbackConfig = { Alarms: AWS.SageMaker.Endpoint.Alarm[]; };

            export type TrafficRoutingConfig = {
                Type: string;

                CanarySize: AWS.SageMaker.Endpoint.CapacitySize;

                WaitIntervalInSeconds: number;
            };

            export type DeploymentConfig = AWS.SageMaker.Endpoint.DeploymentConfig;

            export type CapacitySize = {
                Type: string;

                Value: number;
            };

            export type VariantProperty = { VariantPropertyType: string; };

            export type BlueGreenUpdatePolicy = {
                MaximumExecutionTimeoutInSeconds: number;

                TerminationWaitInSeconds: number;

                TrafficRoutingConfiguration: AWS.SageMaker.Endpoint.TrafficRoutingConfig;
            };

            export type RetainAllVariantProperties = boolean;

            export type EndpointName = string;

            export type ExcludeRetainedVariantProperties = AWS.SageMaker.Endpoint.VariantProperty[];

            export type EndpointConfigName = string;

            export type Tags = AWS.SageMaker.Endpoint.Tag[];

        }

        export namespace Model {

            export type MultiModelConfig = { ModelCacheSetting: string; };

            export type VpcConfig = AWS.SageMaker.Model.VpcConfig;

            export type ContainerDefinition = {
                ImageConfig: AWS.SageMaker.Model.ImageConfig;

                ContainerHostname: string;

                ModelPackageName: string;

                Mode: string;

                Environment: JSONString;

                ModelDataUrl: string;

                Image: string;

                MultiModelConfig: AWS.SageMaker.Model.MultiModelConfig;
            };

            export type ImageConfig = { RepositoryAccessMode: string; };

            export type InferenceExecutionConfig = AWS.SageMaker.Model.InferenceExecutionConfig;

            export type ExecutionRoleArn = string;

            export type EnableNetworkIsolation = boolean;

            export type PrimaryContainer = AWS.SageMaker.Model.ContainerDefinition;

            export type ModelName = string;

            export type Containers = AWS.SageMaker.Model.ContainerDefinition[];

            export type Tags = AWS.SageMaker.Model.Tag[];

        }

        export namespace Domain {

            export type JupyterServerAppSettings = { DefaultResourceSpec: AWS.SageMaker.Domain.ResourceSpec; };

            export type UserSettings = {
                ExecutionRole: string;

                JupyterServerAppSettings: AWS.SageMaker.Domain.JupyterServerAppSettings;

                KernelGatewayAppSettings: AWS.SageMaker.Domain.KernelGatewayAppSettings;

                SecurityGroups: string[];

                SharingSettings: AWS.SageMaker.Domain.SharingSettings;
            };

            export type CustomImage = {
                AppImageConfigName: string;

                ImageName: string;

                ImageVersionNumber: number;
            };

            export type ResourceSpec = {
                InstanceType: string;

                SageMakerImageArn: string;

                SageMakerImageVersionArn: string;
            };

            export type KernelGatewayAppSettings = {
                CustomImages: AWS.SageMaker.Domain.CustomImage[];

                DefaultResourceSpec: AWS.SageMaker.Domain.ResourceSpec;
            };

            export type SharingSettings = {
                NotebookOutputOption: string;

                S3KmsKeyId: string;

                S3OutputPath: string;
            };

            export type AppNetworkAccessType = string;

            export type AuthMode = string;

            export type DefaultUserSettings = AWS.SageMaker.Domain.UserSettings;

            export type DomainName = string;

            export type KmsKeyId = string;

            export type SubnetIds = string[];

            export type Tags = AWS.SageMaker.Domain.Tag[];

            export type VpcId = string;

        }

        export namespace DeviceFleet {

            export type EdgeOutputConfig = {
                S3OutputLocation: string;

                KmsKeyId: string;
            };

            export type Description = string;

            export type DeviceFleetName = string;

            export type OutputConfig = AWS.SageMaker.DeviceFleet.EdgeOutputConfig;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.DeviceFleet.Tag[];

        }

        export namespace ModelExplainabilityJobDefinition {

            export type ModelExplainabilityAppSpecification = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification;

            export type ModelExplainabilityJobInput = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityJobInput;

            export type ClusterConfig = {
                InstanceCount: number;

                InstanceType: string;

                VolumeKmsKeyId: string;

                VolumeSizeInGB: number;
            };

            export type ConstraintsResource = { S3Uri: string; };

            export type StoppingCondition = AWS.SageMaker.ModelExplainabilityJobDefinition.StoppingCondition;

            export type Environment = any;

            export type S3Output = {
                LocalPath: string;

                S3UploadMode: string;

                S3Uri: string;
            };

            export type NetworkConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.NetworkConfig;

            export type ModelExplainabilityBaselineConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig;

            export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelExplainabilityJobDefinition.S3Output; };

            export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelExplainabilityJobDefinition.ClusterConfig; };

            export type MonitoringOutputConfig = {
                KmsKeyId: string;

                MonitoringOutputs: AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutput[];
            };

            export type VpcConfig = {
                SecurityGroupIds: string[];

                Subnets: string[];
            };

            export type EndpointInput = {
                EndpointName: string;

                LocalPath: string;

                S3DataDistributionType: string;

                S3InputMode: string;

                FeaturesAttribute: string;

                InferenceAttribute: string;

                ProbabilityAttribute: string;
            };

            export type JobDefinitionName = string;

            export type ModelExplainabilityJobOutputConfig = AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutputConfig;

            export type JobResources = AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringResources;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.ModelExplainabilityJobDefinition.Tag[];

        }

        export namespace UserProfile {

            export type JupyterServerAppSettings = { DefaultResourceSpec: AWS.SageMaker.UserProfile.ResourceSpec; };

            export type ResourceSpec = {
                InstanceType: string;

                SageMakerImageArn: string;

                SageMakerImageVersionArn: string;
            };

            export type KernelGatewayAppSettings = {
                CustomImages: AWS.SageMaker.UserProfile.CustomImage[];

                DefaultResourceSpec: AWS.SageMaker.UserProfile.ResourceSpec;
            };

            export type CustomImage = {
                AppImageConfigName: string;

                ImageName: string;

                ImageVersionNumber: number;
            };

            export type SharingSettings = {
                NotebookOutputOption: string;

                S3KmsKeyId: string;

                S3OutputPath: string;
            };

            export type UserSettings = AWS.SageMaker.UserProfile.UserSettings;

            export type DomainId = string;

            export type SingleSignOnUserIdentifier = string;

            export type SingleSignOnUserValue = string;

            export type UserProfileName = string;

            export type Tags = AWS.SageMaker.UserProfile.Tag[];

        }

        export namespace EndpointConfig {

            export type CaptureOption = { CaptureMode: string; };

            export type ProductionVariant = {
                ModelName: string;

                VariantName: string;

                InitialInstanceCount: number;

                InstanceType: string;

                AcceleratorType: string;

                InitialVariantWeight: number;
            };

            export type CaptureContentTypeHeader = {
                JsonContentTypes: string[];

                CsvContentTypes: string[];
            };

            export type DataCaptureConfig = AWS.SageMaker.EndpointConfig.DataCaptureConfig;

            export type ProductionVariants = AWS.SageMaker.EndpointConfig.ProductionVariant[];

            export type KmsKeyId = string;

            export type EndpointConfigName = string;

            export type Tags = AWS.SageMaker.EndpointConfig.Tag[];

        }

        export namespace ModelQualityJobDefinition {

            export type ModelQualityJobInput = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityJobInput;

            export type MonitoringResources = { ClusterConfig: AWS.SageMaker.ModelQualityJobDefinition.ClusterConfig; };

            export type EndpointInput = {
                EndpointName: string;

                LocalPath: string;

                S3DataDistributionType: string;

                S3InputMode: string;

                StartTimeOffset: string;

                EndTimeOffset: string;

                InferenceAttribute: string;

                ProbabilityAttribute: string;

                ProbabilityThresholdAttribute: number;
            };

            export type NetworkConfig = AWS.SageMaker.ModelQualityJobDefinition.NetworkConfig;

            export type VpcConfig = {
                SecurityGroupIds: string[];

                Subnets: string[];
            };

            export type Environment = any;

            export type ModelQualityAppSpecification = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityAppSpecification;

            export type MonitoringOutput = { S3Output: AWS.SageMaker.ModelQualityJobDefinition.S3Output; };

            export type ClusterConfig = {
                InstanceCount: number;

                InstanceType: string;

                VolumeKmsKeyId: string;

                VolumeSizeInGB: number;
            };

            export type ConstraintsResource = { S3Uri: string; };

            export type S3Output = {
                LocalPath: string;

                S3UploadMode: string;

                S3Uri: string;
            };

            export type MonitoringGroundTruthS3Input = { S3Uri: string; };

            export type ModelQualityBaselineConfig = AWS.SageMaker.ModelQualityJobDefinition.ModelQualityBaselineConfig;

            export type StoppingCondition = AWS.SageMaker.ModelQualityJobDefinition.StoppingCondition;

            export type MonitoringOutputConfig = {
                KmsKeyId: string;

                MonitoringOutputs: AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutput[];
            };

            export type JobDefinitionName = string;

            export type ModelQualityJobOutputConfig = AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutputConfig;

            export type JobResources = AWS.SageMaker.ModelQualityJobDefinition.MonitoringResources;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.ModelQualityJobDefinition.Tag[];

        }

        export namespace Device {

            export type Device = AWS.SageMaker.Device.Device;

            export type DeviceFleetName = string;

            export type Tags = AWS.SageMaker.Device.Tag[];

        }

        export namespace Workteam {

            export type NotificationConfiguration = AWS.SageMaker.Workteam.NotificationConfiguration;

            export type CognitoMemberDefinition = {
                CognitoUserPool: string;

                CognitoClientId: string;

                CognitoUserGroup: string;
            };

            export type MemberDefinition = { CognitoMemberDefinition: AWS.SageMaker.Workteam.CognitoMemberDefinition; };

            export type Description = string;

            export type WorkteamName = string;

            export type MemberDefinitions = AWS.SageMaker.Workteam.MemberDefinition[];

            export type Tags = AWS.SageMaker.Workteam.Tag[];

        }

        export namespace NotebookInstanceLifecycleConfig {

            export type NotebookInstanceLifecycleHook = { Content: string; };

            export type OnStart = AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook[];

            export type NotebookInstanceLifecycleConfigName = string;

            export type OnCreate = AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook[];

        }

        export namespace CodeRepository {

            export type GitConfig = AWS.SageMaker.CodeRepository.GitConfig;

            export type CodeRepositoryName = string;

            export type Tags = AWS.SageMaker.CodeRepository.Tag[];

        }

        export namespace App {

            export type ResourceSpec = AWS.SageMaker.App.ResourceSpec;

            export type AppName = string;

            export type AppType = string;

            export type DomainId = string;

            export type Tags = AWS.SageMaker.App.Tag[];

            export type UserProfileName = string;

        }

        export namespace FeatureGroup {

            export type FeatureDefinition = {
                FeatureName: string;

                FeatureType: string;
            };

            export type FeatureGroupName = string;

            export type RecordIdentifierFeatureName = string;

            export type EventTimeFeatureName = string;

            export type FeatureDefinitions = AWS.SageMaker.FeatureGroup.FeatureDefinition[];

            export type OnlineStoreConfig = JSONString;

            export type OfflineStoreConfig = JSONString;

            export type RoleArn = string;

            export type Description = string;

            export type Tags = AWS.SageMaker.FeatureGroup.Tag[];

        }

        export namespace ImageVersion {

            export type ImageName = string;

            export type BaseImage = string;

        }

        export namespace ModelPackageGroup {

            export type Tags = AWS.SageMaker.ModelPackageGroup.Tag[];

            export type ModelPackageGroupName = string;

            export type ModelPackageGroupDescription = string;

            export type ModelPackageGroupPolicy = JSONString;

        }

        export namespace NotebookInstance {

            export type KmsKeyId = string;

            export type VolumeSizeInGB = number;

            export type AdditionalCodeRepositories = string[];

            export type DefaultCodeRepository = string;

            export type DirectInternetAccess = string;

            export type AcceleratorTypes = string[];

            export type SubnetId = string;

            export type SecurityGroupIds = string[];

            export type RoleArn = string;

            export type RootAccess = string;

            export type NotebookInstanceName = string;

            export type InstanceType = string;

            export type LifecycleConfigName = string;

            export type Tags = AWS.SageMaker.NotebookInstance.Tag[];

        }

        export namespace Pipeline {

            export type PipelineName = string;

            export type PipelineDisplayName = string;

            export type PipelineDescription = string;

            export type PipelineDefinition = JSONString;

            export type RoleArn = string;

            export type Tags = AWS.SageMaker.Pipeline.Tag[];

        }

        export namespace Project {

            export type Tags = AWS.SageMaker.Project.Tag[];

            export type ProjectName = string;

            export type ProjectDescription = string;

            export type ServiceCatalogProvisioningDetails = JSONString;

        }

        export namespace Image {

            export type ImageName = string;

            export type ImageRoleArn = string;

            export type ImageDisplayName = string;

            export type ImageDescription = string;

            export type Tags = AWS.SageMaker.Image.Tag[];

        }

    }

    export namespace S3 {

        export namespace AccessPoint {

            export type PublicAccessBlockConfiguration = AWS.S3.AccessPoint.PublicAccessBlockConfiguration;

            export type VpcConfiguration = AWS.S3.AccessPoint.VpcConfiguration;

            export type Name = string;

            export type Bucket = string;

            export type Policy = JSONString;

        }

        export namespace StorageLens {

            export type PrefixLevelStorageMetrics = {
                IsEnabled: boolean;

                SelectionCriteria: AWS.S3.StorageLens.SelectionCriteria;
            };

            export type SelectionCriteria = {
                MaxDepth: number;

                Delimiter: string;

                MinStorageBytesPercentage: number;
            };

            export type ActivityMetrics = { IsEnabled: boolean; };

            export type BucketLevel = {
                ActivityMetrics: AWS.S3.StorageLens.ActivityMetrics;

                PrefixLevel: AWS.S3.StorageLens.PrefixLevel;
            };

            export type BucketsAndRegions = {
                Buckets: string[];

                Regions: string[];
            };

            export type DataExport = { S3BucketDestination: AWS.S3.StorageLens.S3BucketDestination; };

            export type AwsOrg = { Arn: string; };

            export type PrefixLevel = { StorageMetrics: AWS.S3.StorageLens.PrefixLevelStorageMetrics; };

            export type Encryption = any;

            export type S3BucketDestination = {
                OutputSchemaVersion: string;

                Format: string;

                AccountId: string;

                Arn: string;

                Prefix: string;

                Encryption: AWS.S3.StorageLens.Encryption;
            };

            export type StorageLensConfiguration = AWS.S3.StorageLens.StorageLensConfiguration;

            export type AccountLevel = {
                ActivityMetrics: AWS.S3.StorageLens.ActivityMetrics;

                BucketLevel: AWS.S3.StorageLens.BucketLevel;
            };

            export type Tags = AWS.S3.StorageLens.Tag[];

        }

        export namespace Bucket {

            export type OwnershipControls = AWS.S3.Bucket.OwnershipControls;

            export type ReplicaModifications = { Status: string; };

            export type CorsRule = {
                AllowedHeaders: string[];

                AllowedMethods: string[];

                AllowedOrigins: string[];

                ExposedHeaders: string[];

                Id: string;

                MaxAge: number;
            };

            export type Destination = {
                BucketAccountId: string;

                BucketArn: string;

                Format: string;

                Prefix: string;
            };

            export type OwnershipControlsRule = { ObjectOwnership: string; };

            export type AccessControlTranslation = { Owner: string; };

            export type VersioningConfiguration = AWS.S3.Bucket.VersioningConfiguration;

            export type ReplicationTime = {
                Status: string;

                Time: AWS.S3.Bucket.ReplicationTimeValue;
            };

            export type ServerSideEncryptionByDefault = {
                KMSMasterKeyID: string;

                SSEAlgorithm: string;
            };

            export type Tiering = {
                AccessTier: string;

                Days: number;
            };

            export type SseKmsEncryptedObjects = { Status: string; };

            export type QueueConfiguration = {
                Event: string;

                Filter: AWS.S3.Bucket.NotificationFilter;

                Queue: string;
            };

            export type ObjectLockConfiguration = AWS.S3.Bucket.ObjectLockConfiguration;

            export type AccelerateConfiguration = AWS.S3.Bucket.AccelerateConfiguration;

            export type IntelligentTieringConfiguration = {
                Id: string;

                Prefix: string;

                Status: string;

                TagFilters: AWS.S3.Bucket.TagFilter[];

                Tierings: AWS.S3.Bucket.Tiering[];
            };

            export type AbortIncompleteMultipartUpload = { DaysAfterInitiation: number; };

            export type DeleteMarkerReplication = { Status: string; };

            export type PublicAccessBlockConfiguration = AWS.S3.Bucket.PublicAccessBlockConfiguration;

            export type ReplicationRule = {
                DeleteMarkerReplication: AWS.S3.Bucket.DeleteMarkerReplication;

                Destination: AWS.S3.Bucket.ReplicationDestination;

                Filter: AWS.S3.Bucket.ReplicationRuleFilter;

                Id: string;

                Prefix: string;

                Priority: number;

                SourceSelectionCriteria: AWS.S3.Bucket.SourceSelectionCriteria;

                Status: string;
            };

            export type SourceSelectionCriteria = {
                ReplicaModifications: AWS.S3.Bucket.ReplicaModifications;

                SseKmsEncryptedObjects: AWS.S3.Bucket.SseKmsEncryptedObjects;
            };

            export type StorageClassAnalysis = { DataExport: AWS.S3.Bucket.DataExport; };

            export type RedirectRule = {
                HostName: string;

                HttpRedirectCode: string;

                Protocol: string;

                ReplaceKeyPrefixWith: string;

                ReplaceKeyWith: string;
            };

            export type ObjectLockRule = { DefaultRetention: AWS.S3.Bucket.DefaultRetention; };

            export type Rule = {
                AbortIncompleteMultipartUpload: AWS.S3.Bucket.AbortIncompleteMultipartUpload;

                ExpirationDate: Timestamp;

                ExpirationInDays: number;

                ExpiredObjectDeleteMarker: boolean;

                Id: string;

                NoncurrentVersionExpirationInDays: number;

                NoncurrentVersionTransition: AWS.S3.Bucket.NoncurrentVersionTransition;

                NoncurrentVersionTransitions: AWS.S3.Bucket.NoncurrentVersionTransition[];

                Prefix: string;

                Status: string;

                TagFilters: AWS.S3.Bucket.TagFilter[];

                Transition: AWS.S3.Bucket.Transition;

                Transitions: AWS.S3.Bucket.Transition[];
            };

            export type MetricsConfiguration = {
                Id: string;

                Prefix: string;

                TagFilters: AWS.S3.Bucket.TagFilter[];
            };

            export type DataExport = {
                Destination: AWS.S3.Bucket.Destination;

                OutputSchemaVersion: string;
            };

            export type ReplicationTimeValue = { Minutes: number; };

            export type FilterRule = {
                Name: string;

                Value: string;
            };

            export type ReplicationRuleAndOperator = {
                Prefix: string;

                TagFilters: AWS.S3.Bucket.TagFilter[];
            };

            export type BucketEncryption = AWS.S3.Bucket.BucketEncryption;

            export type Metrics = {
                EventThreshold: AWS.S3.Bucket.ReplicationTimeValue;

                Status: string;
            };

            export type RoutingRuleCondition = {
                HttpErrorCodeReturnedEquals: string;

                KeyPrefixEquals: string;
            };

            export type LifecycleConfiguration = AWS.S3.Bucket.LifecycleConfiguration;

            export type NotificationConfiguration = AWS.S3.Bucket.NotificationConfiguration;

            export type RedirectAllRequestsTo = {
                HostName: string;

                Protocol: string;
            };

            export type S3KeyFilter = { Rules: AWS.S3.Bucket.FilterRule[]; };

            export type InventoryConfiguration = {
                Destination: AWS.S3.Bucket.Destination;

                Enabled: boolean;

                Id: string;

                IncludedObjectVersions: string;

                OptionalFields: string[];

                Prefix: string;

                ScheduleFrequency: string;
            };

            export type ReplicationConfiguration = AWS.S3.Bucket.ReplicationConfiguration;

            export type CorsConfiguration = AWS.S3.Bucket.CorsConfiguration;

            export type ReplicationDestination = {
                AccessControlTranslation: AWS.S3.Bucket.AccessControlTranslation;

                Account: string;

                Bucket: string;

                EncryptionConfiguration: AWS.S3.Bucket.EncryptionConfiguration;

                Metrics: AWS.S3.Bucket.Metrics;

                ReplicationTime: AWS.S3.Bucket.ReplicationTime;

                StorageClass: string;
            };

            export type NoncurrentVersionTransition = {
                StorageClass: string;

                TransitionInDays: number;
            };

            export type DefaultRetention = {
                Days: number;

                Mode: string;

                Years: number;
            };

            export type NotificationFilter = { S3Key: AWS.S3.Bucket.S3KeyFilter; };

            export type LambdaConfiguration = {
                Event: string;

                Filter: AWS.S3.Bucket.NotificationFilter;

                Function: string;
            };

            export type ServerSideEncryptionRule = {
                BucketKeyEnabled: boolean;

                ServerSideEncryptionByDefault: AWS.S3.Bucket.ServerSideEncryptionByDefault;
            };

            export type AnalyticsConfiguration = {
                Id: string;

                Prefix: string;

                StorageClassAnalysis: AWS.S3.Bucket.StorageClassAnalysis;

                TagFilters: AWS.S3.Bucket.TagFilter[];
            };

            export type LoggingConfiguration = AWS.S3.Bucket.LoggingConfiguration;

            export type RoutingRule = {
                RedirectRule: AWS.S3.Bucket.RedirectRule;

                RoutingRuleCondition: AWS.S3.Bucket.RoutingRuleCondition;
            };

            export type EncryptionConfiguration = { ReplicaKmsKeyID: string; };

            export type WebsiteConfiguration = AWS.S3.Bucket.WebsiteConfiguration;

            export type TopicConfiguration = {
                Event: string;

                Filter: AWS.S3.Bucket.NotificationFilter;

                Topic: string;
            };

            export type TagFilter = {
                Key: string;

                Value: string;
            };

            export type Transition = {
                StorageClass: string;

                TransitionDate: Timestamp;

                TransitionInDays: number;
            };

            export type ReplicationRuleFilter = {
                And: AWS.S3.Bucket.ReplicationRuleAndOperator;

                Prefix: string;

                TagFilter: AWS.S3.Bucket.TagFilter;
            };

            export type AccessControl = string;

            export type AnalyticsConfigurations = AWS.S3.Bucket.AnalyticsConfiguration[];

            export type BucketName = string;

            export type IntelligentTieringConfigurations = AWS.S3.Bucket.IntelligentTieringConfiguration[];

            export type InventoryConfigurations = AWS.S3.Bucket.InventoryConfiguration[];

            export type MetricsConfigurations = AWS.S3.Bucket.MetricsConfiguration[];

            export type ObjectLockEnabled = boolean;

            export type Tags = AWS.S3.Bucket.Tag[];

        }

        export namespace BucketPolicy {

            export type Bucket = string;

            export type PolicyDocument = JSONString;

        }

    }

    export namespace ElasticBeanstalk {

        export namespace Environment {

            export type OptionSetting = {
                Namespace: string;

                OptionName: string;

                ResourceName: string;

                Value: string;
            };

            export type Tier = AWS.ElasticBeanstalk.Environment.Tier;

            export type ApplicationName = string;

            export type CNAMEPrefix = string;

            export type Description = string;

            export type EnvironmentName = string;

            export type OperationsRole = string;

            export type OptionSettings = AWS.ElasticBeanstalk.Environment.OptionSetting[];

            export type PlatformArn = string;

            export type SolutionStackName = string;

            export type Tags = AWS.ElasticBeanstalk.Environment.Tag[];

            export type TemplateName = string;

            export type VersionLabel = string;

        }

        export namespace ApplicationVersion {

            export type SourceBundle = AWS.ElasticBeanstalk.ApplicationVersion.SourceBundle;

            export type ApplicationName = string;

            export type Description = string;

        }

        export namespace Application {

            export type MaxAgeRule = {
                DeleteSourceFromS3: boolean;

                Enabled: boolean;

                MaxAgeInDays: number;
            };

            export type ApplicationResourceLifecycleConfig = {
                ServiceRole: string;

                VersionLifecycleConfig: AWS.ElasticBeanstalk.Application.ApplicationVersionLifecycleConfig;
            };

            export type ApplicationVersionLifecycleConfig = {
                MaxAgeRule: AWS.ElasticBeanstalk.Application.MaxAgeRule;

                MaxCountRule: AWS.ElasticBeanstalk.Application.MaxCountRule;
            };

            export type MaxCountRule = {
                DeleteSourceFromS3: boolean;

                Enabled: boolean;

                MaxCount: number;
            };

            export type ApplicationName = string;

            export type Description = string;

            export type ResourceLifecycleConfig = AWS.ElasticBeanstalk.Application.ApplicationResourceLifecycleConfig;

        }

        export namespace ConfigurationTemplate {

            export type SourceConfiguration = AWS.ElasticBeanstalk.ConfigurationTemplate.SourceConfiguration;

            export type ConfigurationOptionSetting = {
                Namespace: string;

                OptionName: string;

                ResourceName: string;

                Value: string;
            };

            export type ApplicationName = string;

            export type Description = string;

            export type EnvironmentId = string;

            export type OptionSettings = AWS.ElasticBeanstalk.ConfigurationTemplate.ConfigurationOptionSetting[];

            export type PlatformArn = string;

            export type SolutionStackName = string;

        }

    }

    export namespace Pinpoint {

        export namespace Campaign {

            export type MetricDimension = {
                ComparisonOperator: string;

                Value: number;
            };

            export type Schedule = AWS.Pinpoint.Campaign.Schedule;

            export type QuietTime = {
                Start: string;

                End: string;
            };

            export type Message = {
                JsonBody: string;

                Action: string;

                MediaUrl: string;

                TimeToLive: number;

                ImageSmallIconUrl: string;

                ImageUrl: string;

                Title: string;

                ImageIconUrl: string;

                SilentPush: boolean;

                Body: string;

                RawContent: string;

                Url: string;
            };

            export type CampaignEventFilter = {
                FilterType: string;

                Dimensions: AWS.Pinpoint.Campaign.EventDimensions;
            };

            export type CampaignSmsMessage = {
                EntityId: string;

                OriginationNumber: string;

                SenderId: string;

                Body: string;

                MessageType: string;

                TemplateId: string;
            };

            export type WriteTreatmentResource = {
                TreatmentDescription: string;

                MessageConfiguration: AWS.Pinpoint.Campaign.MessageConfiguration;

                Schedule: AWS.Pinpoint.Campaign.Schedule;

                SizePercent: number;

                TreatmentName: string;
            };

            export type SetDimension = {
                DimensionType: string;

                Values: string[];
            };

            export type EventDimensions = {
                Metrics: JSONString;

                EventType: AWS.Pinpoint.Campaign.SetDimension;

                Attributes: JSONString;
            };

            export type Limits = AWS.Pinpoint.Campaign.Limits;

            export type AttributeDimension = {
                AttributeType: string;

                Values: string[];
            };

            export type MessageConfiguration = AWS.Pinpoint.Campaign.MessageConfiguration;

            export type CampaignHook = AWS.Pinpoint.Campaign.CampaignHook;

            export type CampaignEmailMessage = {
                FromAddress: string;

                HtmlBody: string;

                Title: string;

                Body: string;
            };

            export type Description = string;

            export type SegmentId = string;

            export type IsPaused = boolean;

            export type AdditionalTreatments = AWS.Pinpoint.Campaign.WriteTreatmentResource[];

            export type Name = string;

            export type SegmentVersion = number;

            export type TreatmentDescription = string;

            export type HoldoutPercent = number;

            export type ApplicationId = string;

            export type Tags = JSONString;

            export type TreatmentName = string;

        }

        export namespace Segment {

            export type AttributeDimension = {
                AttributeType: string;

                Values: string[];
            };

            export type Recency = {
                Duration: string;

                RecencyType: string;
            };

            export type Groups = {
                Type: string;

                SourceType: string;

                Dimensions: AWS.Pinpoint.Segment.SegmentDimensions[];

                SourceSegments: AWS.Pinpoint.Segment.SourceSegments[];
            };

            export type Location = {
                GPSPoint: AWS.Pinpoint.Segment.GPSPoint;

                Country: AWS.Pinpoint.Segment.SetDimension;
            };

            export type SegmentGroups = AWS.Pinpoint.Segment.SegmentGroups;

            export type Coordinates = {
                Latitude: number;

                Longitude: number;
            };

            export type SegmentDimensions = {
                Demographic: AWS.Pinpoint.Segment.Demographic;

                Metrics: JSONString;

                Attributes: JSONString;

                Behavior: AWS.Pinpoint.Segment.Behavior;

                UserAttributes: JSONString;

                Location: AWS.Pinpoint.Segment.Location;
            };

            export type SourceSegments = {
                Version: number;

                Id: string;
            };

            export type GPSPoint = {
                RangeInKilometers: number;

                Coordinates: AWS.Pinpoint.Segment.Coordinates;
            };

            export type Demographic = {
                AppVersion: AWS.Pinpoint.Segment.SetDimension;

                DeviceType: AWS.Pinpoint.Segment.SetDimension;

                Platform: AWS.Pinpoint.Segment.SetDimension;

                Channel: AWS.Pinpoint.Segment.SetDimension;

                Model: AWS.Pinpoint.Segment.SetDimension;

                Make: AWS.Pinpoint.Segment.SetDimension;
            };

            export type SetDimension = {
                DimensionType: string;

                Values: string[];
            };

            export type Behavior = { Recency: AWS.Pinpoint.Segment.Recency; };

            export type Dimensions = AWS.Pinpoint.Segment.SegmentDimensions;

            export type ApplicationId = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace ApplicationSettings {

            export type CampaignHook = AWS.Pinpoint.ApplicationSettings.CampaignHook;

            export type Limits = AWS.Pinpoint.ApplicationSettings.Limits;

            export type QuietTime = AWS.Pinpoint.ApplicationSettings.QuietTime;

            export type ApplicationId = string;

            export type CloudWatchMetricsEnabled = boolean;

        }

        export namespace PushTemplate {

            export type DefaultPushNotificationTemplate = {
                Action: string;

                Title: string;

                Sound: string;

                Body: string;

                Url: string;
            };

            export type AndroidPushNotificationTemplate = {
                Action: string;

                ImageUrl: string;

                SmallImageIconUrl: string;

                Title: string;

                ImageIconUrl: string;

                Sound: string;

                Body: string;

                Url: string;
            };

            export type APNSPushNotificationTemplate = {
                Action: string;

                MediaUrl: string;

                Title: string;

                Sound: string;

                Body: string;

                Url: string;
            };

            export type GCM = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

            export type Baidu = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

            export type TemplateName = string;

            export type ADM = AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

            export type APNS = AWS.Pinpoint.PushTemplate.APNSPushNotificationTemplate;

            export type TemplateDescription = string;

            export type DefaultSubstitutions = string;

            export type Default = AWS.Pinpoint.PushTemplate.DefaultPushNotificationTemplate;

            export type Tags = JSONString;

        }

        export namespace VoiceChannel {

            export type Enabled = boolean;

            export type ApplicationId = string;

        }

        export namespace EventStream {

            export type ApplicationId = string;

            export type DestinationStreamArn = string;

            export type RoleArn = string;

        }

        export namespace EmailTemplate {

            export type HtmlPart = string;

            export type TextPart = string;

            export type TemplateName = string;

            export type TemplateDescription = string;

            export type DefaultSubstitutions = string;

            export type Subject = string;

            export type Tags = JSONString;

        }

        export namespace BaiduChannel {

            export type SecretKey = string;

            export type ApiKey = string;

            export type Enabled = boolean;

            export type ApplicationId = string;

        }

        export namespace GCMChannel {

            export type ApiKey = string;

            export type Enabled = boolean;

            export type ApplicationId = string;

        }

        export namespace APNSChannel {

            export type BundleId = string;

            export type PrivateKey = string;

            export type Enabled = boolean;

            export type DefaultAuthenticationMethod = string;

            export type TokenKey = string;

            export type ApplicationId = string;

            export type TeamId = string;

            export type Certificate = string;

            export type TokenKeyId = string;

        }

        export namespace APNSVoipSandboxChannel {

            export type BundleId = string;

            export type PrivateKey = string;

            export type Enabled = boolean;

            export type DefaultAuthenticationMethod = string;

            export type TokenKey = string;

            export type ApplicationId = string;

            export type TeamId = string;

            export type Certificate = string;

            export type TokenKeyId = string;

        }

        export namespace APNSVoipChannel {

            export type BundleId = string;

            export type PrivateKey = string;

            export type Enabled = boolean;

            export type DefaultAuthenticationMethod = string;

            export type TokenKey = string;

            export type ApplicationId = string;

            export type TeamId = string;

            export type Certificate = string;

            export type TokenKeyId = string;

        }

        export namespace EmailChannel {

            export type ConfigurationSet = string;

            export type FromAddress = string;

            export type Enabled = boolean;

            export type ApplicationId = string;

            export type Identity = string;

            export type RoleArn = string;

        }

        export namespace SMSChannel {

            export type ShortCode = string;

            export type Enabled = boolean;

            export type ApplicationId = string;

            export type SenderId = string;

        }

        export namespace SmsTemplate {

            export type TemplateName = string;

            export type TemplateDescription = string;

            export type DefaultSubstitutions = string;

            export type Body = string;

            export type Tags = JSONString;

        }

        export namespace APNSSandboxChannel {

            export type BundleId = string;

            export type PrivateKey = string;

            export type Enabled = boolean;

            export type DefaultAuthenticationMethod = string;

            export type TokenKey = string;

            export type ApplicationId = string;

            export type TeamId = string;

            export type Certificate = string;

            export type TokenKeyId = string;

        }

        export namespace ADMChannel {

            export type ClientSecret = string;

            export type Enabled = boolean;

            export type ClientId = string;

            export type ApplicationId = string;

        }

        export namespace App {

            export type Tags = JSONString;

            export type Name = string;

        }

    }

    export namespace EventSchemas {

        export namespace Schema {

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type Type = string;

            export type Description = string;

            export type Content = string;

            export type RegistryName = string;

            export type SchemaName = string;

            export type Tags = AWS.EventSchemas.Schema.TagsEntry[];

        }

        export namespace Discoverer {

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type Description = string;

            export type SourceArn = string;

            export type Tags = AWS.EventSchemas.Discoverer.TagsEntry[];

        }

        export namespace Registry {

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type Description = string;

            export type RegistryName = string;

            export type Tags = AWS.EventSchemas.Registry.TagsEntry[];

        }

        export namespace RegistryPolicy {

            export type Policy = JSONString;

            export type RegistryName = string;

            export type RevisionId = string;

        }

    }

    export namespace CustomerProfiles {

        export namespace Integration {

            export type Task = {
                ConnectorOperator: AWS.CustomerProfiles.Integration.ConnectorOperator;

                SourceFields: string[];

                DestinationField: string;

                TaskType: string;

                TaskProperties: AWS.CustomerProfiles.Integration.TaskPropertiesMap[];
            };

            export type TriggerProperties = { Scheduled: AWS.CustomerProfiles.Integration.ScheduledTriggerProperties; };

            export type ScheduledTriggerProperties = {
                ScheduleExpression: string;

                DataPullMode: string;

                ScheduleStartTime: number;

                ScheduleEndTime: number;

                Timezone: string;

                ScheduleOffset: number;

                FirstExecutionFrom: number;
            };

            export type S3SourceProperties = {
                BucketName: string;

                BucketPrefix: string;
            };

            export type FlowDefinition = AWS.CustomerProfiles.Integration.FlowDefinition;

            export type IncrementalPullConfig = { DatetimeTypeFieldName: string; };

            export type MarketoSourceProperties = { Object: string; };

            export type TaskPropertiesMap = {
                OperatorPropertyKey: string;

                Property: string;
            };

            export type ConnectorOperator = {
                Marketo: string;

                S3: string;

                Salesforce: string;

                ServiceNow: string;

                Zendesk: string;
            };

            export type ZendeskSourceProperties = { Object: string; };

            export type SourceConnectorProperties = {
                Marketo: AWS.CustomerProfiles.Integration.MarketoSourceProperties;

                S3: AWS.CustomerProfiles.Integration.S3SourceProperties;

                Salesforce: AWS.CustomerProfiles.Integration.SalesforceSourceProperties;

                ServiceNow: AWS.CustomerProfiles.Integration.ServiceNowSourceProperties;

                Zendesk: AWS.CustomerProfiles.Integration.ZendeskSourceProperties;
            };

            export type ServiceNowSourceProperties = { Object: string; };

            export type SalesforceSourceProperties = {
                Object: string;

                EnableDynamicFieldUpdate: boolean;

                IncludeDeletedRecords: boolean;
            };

            export type TriggerConfig = {
                TriggerType: string;

                TriggerProperties: AWS.CustomerProfiles.Integration.TriggerProperties;
            };

            export type SourceFlowConfig = {
                ConnectorType: string;

                ConnectorProfileName: string;

                IncrementalPullConfig: AWS.CustomerProfiles.Integration.IncrementalPullConfig;

                SourceConnectorProperties: AWS.CustomerProfiles.Integration.SourceConnectorProperties;
            };

            export type DomainName = string;

            export type Uri = string;

            export type ObjectTypeName = string;

            export type Tags = AWS.CustomerProfiles.Integration.Tag[];

        }

        export namespace ObjectType {

            export type KeyMap = {
                Name: string;

                ObjectTypeKeyList: AWS.CustomerProfiles.ObjectType.ObjectTypeKey[];
            };

            export type FieldMap = {
                Name: string;

                ObjectTypeField: AWS.CustomerProfiles.ObjectType.ObjectTypeField;
            };

            export type ObjectTypeField = {
                Source: string;

                Target: string;

                ContentType: string;
            };

            export type ObjectTypeKey = {
                FieldNames: string[];

                StandardIdentifiers: string[];
            };

            export type DomainName = string;

            export type ObjectTypeName = string;

            export type AllowProfileCreation = boolean;

            export type Description = string;

            export type EncryptionKey = string;

            export type ExpirationDays = number;

            export type Fields = AWS.CustomerProfiles.ObjectType.FieldMap[];

            export type Keys = AWS.CustomerProfiles.ObjectType.KeyMap[];

            export type Tags = AWS.CustomerProfiles.ObjectType.Tag[];

            export type TemplateId = string;

        }

        export namespace Domain {

            export type DomainName = string;

            export type DeadLetterQueueUrl = string;

            export type DefaultEncryptionKey = string;

            export type DefaultExpirationDays = number;

            export type Tags = AWS.CustomerProfiles.Domain.Tag[];

        }

    }

    export namespace AppRunner {

        export namespace Service {

            export type ImageConfiguration = {
                StartCommand: string;

                Port: string;

                RuntimeEnvironmentVariables: AWS.AppRunner.Service.KeyValuePair[];
            };

            export type InstanceConfiguration = AWS.AppRunner.Service.InstanceConfiguration;

            export type AuthenticationConfiguration = {
                ConnectionArn: string;

                AccessRoleArn: string;
            };

            export type KeyValuePair = {
                Name: string;

                Value: string;
            };

            export type EncryptionConfiguration = AWS.AppRunner.Service.EncryptionConfiguration;

            export type HealthCheckConfiguration = AWS.AppRunner.Service.HealthCheckConfiguration;

            export type CodeConfigurationValues = {
                Runtime: string;

                BuildCommand: string;

                StartCommand: string;

                Port: string;

                RuntimeEnvironmentVariables: AWS.AppRunner.Service.KeyValuePair[];
            };

            export type SourceCodeVersion = {
                Type: string;

                Value: string;
            };

            export type ImageRepository = {
                ImageIdentifier: string;

                ImageConfiguration: AWS.AppRunner.Service.ImageConfiguration;

                ImageRepositoryType: string;
            };

            export type SourceConfiguration = AWS.AppRunner.Service.SourceConfiguration;

            export type CodeRepository = {
                RepositoryUrl: string;

                SourceCodeVersion: AWS.AppRunner.Service.SourceCodeVersion;

                CodeConfiguration: AWS.AppRunner.Service.CodeConfiguration;
            };

            export type CodeConfiguration = {
                ConfigurationSource: string;

                CodeConfigurationValues: AWS.AppRunner.Service.CodeConfigurationValues;
            };

            export type ServiceName = string;

            export type Tags = AWS.AppRunner.Service.Tag[];

            export type AutoScalingConfigurationArn = string;

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

            export type Port = number;

            export type ResourceIdentifier = string;

            export type SslMode = string;

            export type EndpointType = string;

            export type Tags = AWS.DMS.Endpoint.Tag[];

            export type Password = string;

            export type KmsKeyId = string;

            export type DatabaseName = string;

            export type EngineName = string;

            export type Username = string;

            export type ServerName = string;

            export type ExtraConnectionAttributes = string;

            export type EndpointIdentifier = string;

            export type CertificateArn = string;

        }

        export namespace ReplicationSubnetGroup {

            export type ReplicationSubnetGroupDescription = string;

            export type ReplicationSubnetGroupIdentifier = string;

            export type SubnetIds = string[];

            export type Tags = AWS.DMS.ReplicationSubnetGroup.Tag[];

        }

        export namespace EventSubscription {

            export type SourceType = string;

            export type EventCategories = string[];

            export type Enabled = boolean;

            export type SubscriptionName = string;

            export type SnsTopicArn = string;

            export type SourceIds = string[];

            export type Tags = AWS.DMS.EventSubscription.Tag[];

        }

        export namespace Certificate {

            export type CertificateIdentifier = string;

            export type CertificatePem = string;

            export type CertificateWallet = string;

        }

        export namespace ReplicationTask {

            export type ReplicationTaskSettings = string;

            export type CdcStartPosition = string;

            export type CdcStopPosition = string;

            export type MigrationType = string;

            export type TargetEndpointArn = string;

            export type ReplicationInstanceArn = string;

            export type TaskData = string;

            export type CdcStartTime = number;

            export type ResourceIdentifier = string;

            export type TableMappings = string;

            export type ReplicationTaskIdentifier = string;

            export type SourceEndpointArn = string;

            export type Tags = AWS.DMS.ReplicationTask.Tag[];

        }

        export namespace ReplicationInstance {

            export type ReplicationInstanceIdentifier = string;

            export type EngineVersion = string;

            export type KmsKeyId = string;

            export type AvailabilityZone = string;

            export type PreferredMaintenanceWindow = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type ReplicationSubnetGroupIdentifier = string;

            export type AllocatedStorage = number;

            export type ResourceIdentifier = string;

            export type VpcSecurityGroupIds = string[];

            export type AllowMajorVersionUpgrade = boolean;

            export type ReplicationInstanceClass = string;

            export type PubliclyAccessible = boolean;

            export type MultiAZ = boolean;

            export type Tags = AWS.DMS.ReplicationInstance.Tag[];

        }

    }

    export namespace IoTAnalytics {

        export namespace Dataset {

            export type DatasetContentVersionValue = { DatasetName: string; };

            export type GlueConfiguration = {
                TableName: string;

                DatabaseName: string;
            };

            export type DeltaTimeSessionWindowConfiguration = { TimeoutInMinutes: number; };

            export type OutputFileUriValue = { FileName: string; };

            export type Filter = { DeltaTime: AWS.IoTAnalytics.Dataset.DeltaTime; };

            export type DatasetContentDeliveryRule = {
                Destination: AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRuleDestination;

                EntryName: string;
            };

            export type Action = {
                ActionName: string;

                ContainerAction: AWS.IoTAnalytics.Dataset.ContainerAction;

                QueryAction: AWS.IoTAnalytics.Dataset.QueryAction;
            };

            export type LateDataRuleConfiguration = { DeltaTimeSessionWindowConfiguration: AWS.IoTAnalytics.Dataset.DeltaTimeSessionWindowConfiguration; };

            export type ContainerAction = {
                Variables: AWS.IoTAnalytics.Dataset.Variable[];

                ExecutionRoleArn: string;

                Image: string;

                ResourceConfiguration: AWS.IoTAnalytics.Dataset.ResourceConfiguration;
            };

            export type LateDataRule = {
                RuleConfiguration: AWS.IoTAnalytics.Dataset.LateDataRuleConfiguration;

                RuleName: string;
            };

            export type QueryAction = {
                Filters: AWS.IoTAnalytics.Dataset.Filter[];

                SqlQuery: string;
            };

            export type DatasetContentDeliveryRuleDestination = {
                IotEventsDestinationConfiguration: AWS.IoTAnalytics.Dataset.IotEventsDestinationConfiguration;

                S3DestinationConfiguration: AWS.IoTAnalytics.Dataset.S3DestinationConfiguration;
            };

            export type VersioningConfiguration = AWS.IoTAnalytics.Dataset.VersioningConfiguration;

            export type Schedule = { ScheduleExpression: string; };

            export type RetentionPeriod = AWS.IoTAnalytics.Dataset.RetentionPeriod;

            export type S3DestinationConfiguration = {
                GlueConfiguration: AWS.IoTAnalytics.Dataset.GlueConfiguration;

                Bucket: string;

                Key: string;

                RoleArn: string;
            };

            export type Variable = {
                DatasetContentVersionValue: AWS.IoTAnalytics.Dataset.DatasetContentVersionValue;

                DoubleValue: number;

                OutputFileUriValue: AWS.IoTAnalytics.Dataset.OutputFileUriValue;

                VariableName: string;

                StringValue: string;
            };

            export type DeltaTime = {
                TimeExpression: string;

                OffsetSeconds: number;
            };

            export type Trigger = {
                Schedule: AWS.IoTAnalytics.Dataset.Schedule;

                TriggeringDataset: AWS.IoTAnalytics.Dataset.TriggeringDataset;
            };

            export type IotEventsDestinationConfiguration = {
                InputName: string;

                RoleArn: string;
            };

            export type ResourceConfiguration = {
                VolumeSizeInGB: number;

                ComputeType: string;
            };

            export type TriggeringDataset = { DatasetName: string; };

            export type Actions = AWS.IoTAnalytics.Dataset.Action[];

            export type LateDataRules = AWS.IoTAnalytics.Dataset.LateDataRule[];

            export type DatasetName = string;

            export type ContentDeliveryRules = AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRule[];

            export type Triggers = AWS.IoTAnalytics.Dataset.Trigger[];

            export type Tags = AWS.IoTAnalytics.Dataset.Tag[];

        }

        export namespace Pipeline {

            export type DeviceShadowEnrich = {
                Attribute: string;

                Next: string;

                ThingName: string;

                RoleArn: string;

                Name: string;
            };

            export type SelectAttributes = {
                Next: string;

                Attributes: string[];

                Name: string;
            };

            export type RemoveAttributes = {
                Next: string;

                Attributes: string[];

                Name: string;
            };

            export type Datastore = {
                DatastoreName: string;

                Name: string;
            };

            export type DeviceRegistryEnrich = {
                Attribute: string;

                Next: string;

                ThingName: string;

                RoleArn: string;

                Name: string;
            };

            export type Lambda = {
                BatchSize: number;

                Next: string;

                LambdaName: string;

                Name: string;
            };

            export type Channel = {
                ChannelName: string;

                Next: string;

                Name: string;
            };

            export type Filter = {
                Filter: string;

                Next: string;

                Name: string;
            };

            export type Activity = {
                SelectAttributes: AWS.IoTAnalytics.Pipeline.SelectAttributes;

                Datastore: AWS.IoTAnalytics.Pipeline.Datastore;

                Filter: AWS.IoTAnalytics.Pipeline.Filter;

                AddAttributes: AWS.IoTAnalytics.Pipeline.AddAttributes;

                Channel: AWS.IoTAnalytics.Pipeline.Channel;

                DeviceShadowEnrich: AWS.IoTAnalytics.Pipeline.DeviceShadowEnrich;

                Math: AWS.IoTAnalytics.Pipeline.Math;

                Lambda: AWS.IoTAnalytics.Pipeline.Lambda;

                DeviceRegistryEnrich: AWS.IoTAnalytics.Pipeline.DeviceRegistryEnrich;

                RemoveAttributes: AWS.IoTAnalytics.Pipeline.RemoveAttributes;
            };

            export type Math = {
                Attribute: string;

                Next: string;

                Math: string;

                Name: string;
            };

            export type AddAttributes = {
                Next: string;

                Attributes: JSONString;

                Name: string;
            };

            export type PipelineName = string;

            export type Tags = AWS.IoTAnalytics.Pipeline.Tag[];

            export type PipelineActivities = AWS.IoTAnalytics.Pipeline.Activity[];

        }

        export namespace Datastore {

            export type FileFormatConfiguration = AWS.IoTAnalytics.Datastore.FileFormatConfiguration;

            export type ServiceManagedS3 = {};

            export type RetentionPeriod = AWS.IoTAnalytics.Datastore.RetentionPeriod;

            export type CustomerManagedS3 = {
                Bucket: string;

                RoleArn: string;

                KeyPrefix: string;
            };

            export type DatastorePartitions = AWS.IoTAnalytics.Datastore.DatastorePartitions;

            export type SchemaDefinition = { Columns: AWS.IoTAnalytics.Datastore.Column[]; };

            export type Column = {
                Type: string;

                Name: string;
            };

            export type ParquetConfiguration = { SchemaDefinition: AWS.IoTAnalytics.Datastore.SchemaDefinition; };

            export type DatastoreStorage = AWS.IoTAnalytics.Datastore.DatastoreStorage;

            export type Partition = { AttributeName: string; };

            export type DatastorePartition = {
                Partition: AWS.IoTAnalytics.Datastore.Partition;

                TimestampPartition: AWS.IoTAnalytics.Datastore.TimestampPartition;
            };

            export type TimestampPartition = {
                AttributeName: string;

                TimestampFormat: string;
            };

            export type JsonConfiguration = {};

            export type DatastoreName = string;

            export type Tags = AWS.IoTAnalytics.Datastore.Tag[];

        }

        export namespace Channel {

            export type CustomerManagedS3 = {
                Bucket: string;

                RoleArn: string;

                KeyPrefix: string;
            };

            export type RetentionPeriod = AWS.IoTAnalytics.Channel.RetentionPeriod;

            export type ServiceManagedS3 = {};

            export type ChannelStorage = AWS.IoTAnalytics.Channel.ChannelStorage;

            export type ChannelName = string;

            export type Tags = AWS.IoTAnalytics.Channel.Tag[];

        }

    }

    export namespace CloudTrail {

        export namespace Trail {

            export type EventSelector = {
                DataResources: AWS.CloudTrail.Trail.DataResource[];

                IncludeManagementEvents: boolean;

                ReadWriteType: string;
            };

            export type DataResource = {
                Type: string;

                Values: string[];
            };

            export type CloudWatchLogsLogGroupArn = string;

            export type CloudWatchLogsRoleArn = string;

            export type EnableLogFileValidation = boolean;

            export type EventSelectors = AWS.CloudTrail.Trail.EventSelector[];

            export type IncludeGlobalServiceEvents = boolean;

            export type IsLogging = boolean;

            export type IsMultiRegionTrail = boolean;

            export type KMSKeyId = string;

            export type S3BucketName = string;

            export type S3KeyPrefix = string;

            export type SnsTopicName = string;

            export type Tags = AWS.CloudTrail.Trail.Tag[];

            export type TrailName = string;

        }

    }

    export namespace SES {

        export namespace ReceiptRule {

            export type BounceAction = {
                Sender: string;

                SmtpReplyCode: string;

                Message: string;

                TopicArn: string;

                StatusCode: string;
            };

            export type Action = {
                BounceAction: AWS.SES.ReceiptRule.BounceAction;

                S3Action: AWS.SES.ReceiptRule.S3Action;

                StopAction: AWS.SES.ReceiptRule.StopAction;

                SNSAction: AWS.SES.ReceiptRule.SNSAction;

                WorkmailAction: AWS.SES.ReceiptRule.WorkmailAction;

                AddHeaderAction: AWS.SES.ReceiptRule.AddHeaderAction;

                LambdaAction: AWS.SES.ReceiptRule.LambdaAction;
            };

            export type StopAction = {
                Scope: string;

                TopicArn: string;
            };

            export type SNSAction = {
                TopicArn: string;

                Encoding: string;
            };

            export type S3Action = {
                BucketName: string;

                KmsKeyArn: string;

                TopicArn: string;

                ObjectKeyPrefix: string;
            };

            export type WorkmailAction = {
                TopicArn: string;

                OrganizationArn: string;
            };

            export type Rule = AWS.SES.ReceiptRule.Rule;

            export type LambdaAction = {
                FunctionArn: string;

                TopicArn: string;

                InvocationType: string;
            };

            export type AddHeaderAction = {
                HeaderValue: string;

                HeaderName: string;
            };

            export type After = string;

            export type RuleSetName = string;

        }

        export namespace ReceiptFilter {

            export type Filter = AWS.SES.ReceiptFilter.Filter;

            export type IpFilter = {
                Policy: string;

                Cidr: string;
            };

        }

        export namespace ConfigurationSetEventDestination {

            export type EventDestination = AWS.SES.ConfigurationSetEventDestination.EventDestination;

            export type DimensionConfiguration = {
                DimensionValueSource: string;

                DefaultDimensionValue: string;

                DimensionName: string;
            };

            export type KinesisFirehoseDestination = {
                IAMRoleARN: string;

                DeliveryStreamARN: string;
            };

            export type CloudWatchDestination = { DimensionConfigurations: AWS.SES.ConfigurationSetEventDestination.DimensionConfiguration[]; };

            export type ConfigurationSetName = string;

        }

        export namespace Template {

            export type Template = AWS.SES.Template.Template;

        }

        export namespace ContactList {

            export type Topic = {
                TopicName: string;

                DisplayName: string;

                Description: string;

                DefaultSubscriptionStatus: string;
            };

            export type ContactListName = string;

            export type Description = string;

            export type Topics = AWS.SES.ContactList.Topic[];

            export type Tags = AWS.SES.ContactList.Tag[];

        }

        export namespace ConfigurationSet {

            export type Name = string;

        }

        export namespace ReceiptRuleSet {

            export type RuleSetName = string;

        }

    }

    export namespace XRay {

        export namespace Group {

            export type InsightsConfiguration = AWS.XRay.Group.InsightsConfiguration;

            export type FilterExpression = string;

            export type GroupName = string;

            export type Tags = JSONString[];

        }

        export namespace SamplingRule {

            export type SamplingRuleUpdate = AWS.XRay.SamplingRule.SamplingRuleUpdate;

            export type SamplingRuleRecord = AWS.XRay.SamplingRule.SamplingRuleRecord;

            export type SamplingRule = AWS.XRay.SamplingRule.SamplingRule;

            export type RuleName = string;

            export type Tags = JSONString[];

        }

    }

    export namespace PinpointEmail {

        export namespace ConfigurationSetEventDestination {

            export type DimensionConfiguration = {
                DimensionValueSource: string;

                DefaultDimensionValue: string;

                DimensionName: string;
            };

            export type CloudWatchDestination = { DimensionConfigurations: AWS.PinpointEmail.ConfigurationSetEventDestination.DimensionConfiguration[]; };

            export type SnsDestination = { TopicArn: string; };

            export type PinpointDestination = { ApplicationArn: string; };

            export type KinesisFirehoseDestination = {
                DeliveryStreamArn: string;

                IamRoleArn: string;
            };

            export type EventDestination = AWS.PinpointEmail.ConfigurationSetEventDestination.EventDestination;

            export type EventDestinationName = string;

            export type ConfigurationSetName = string;

        }

        export namespace ConfigurationSet {

            export type SendingOptions = AWS.PinpointEmail.ConfigurationSet.SendingOptions;

            export type ReputationOptions = AWS.PinpointEmail.ConfigurationSet.ReputationOptions;

            export type TrackingOptions = AWS.PinpointEmail.ConfigurationSet.TrackingOptions;

            export type Tags = AWS.PinpointEmail.ConfigurationSet.Tags[];

            export type DeliveryOptions = AWS.PinpointEmail.ConfigurationSet.DeliveryOptions;

            export type Name = string;

        }

        export namespace DedicatedIpPool {

            export type Tags = AWS.PinpointEmail.DedicatedIpPool.Tags[];

            export type PoolName = string;

        }

        export namespace Identity {

            export type Tags = AWS.PinpointEmail.Identity.Tags[];

            export type MailFromAttributes = AWS.PinpointEmail.Identity.MailFromAttributes;

            export type FeedbackForwardingEnabled = boolean;

            export type DkimSigningEnabled = boolean;

            export type Name = string;

        }

    }

    export namespace IoT {

        export namespace TopicRule {

            export type AssetPropertyVariant = {
                StringValue: string;

                DoubleValue: string;

                BooleanValue: string;

                IntegerValue: string;
            };

            export type SigV4Authorization = {
                ServiceName: string;

                SigningRegion: string;

                RoleArn: string;
            };

            export type SqsAction = {
                RoleArn: string;

                UseBase64: boolean;

                QueueUrl: string;
            };

            export type PutItemInput = { TableName: string; };

            export type SnsAction = {
                TargetArn: string;

                MessageFormat: string;

                RoleArn: string;
            };

            export type HttpAction = {
                ConfirmationUrl: string;

                Headers: AWS.IoT.TopicRule.HttpActionHeader[];

                Url: string;

                Auth: AWS.IoT.TopicRule.HttpAuthorization;
            };

            export type PutAssetPropertyValueEntry = {
                PropertyAlias: string;

                PropertyValues: AWS.IoT.TopicRule.AssetPropertyValue[];

                AssetId: string;

                EntryId: string;

                PropertyId: string;
            };

            export type LambdaAction = { FunctionArn: string; };

            export type DynamoDBAction = {
                TableName: string;

                PayloadField: string;

                RangeKeyField: string;

                HashKeyField: string;

                RangeKeyValue: string;

                RangeKeyType: string;

                HashKeyType: string;

                HashKeyValue: string;

                RoleArn: string;
            };

            export type IotAnalyticsAction = {
                RoleArn: string;

                ChannelName: string;

                BatchMode: boolean;
            };

            export type IotEventsAction = {
                InputName: string;

                RoleArn: string;

                MessageId: string;

                BatchMode: boolean;
            };

            export type KafkaAction = {
                DestinationArn: string;

                Topic: string;

                Key: string;

                Partition: string;

                ClientProperties: Record<string, string>;
            };

            export type TimestreamAction = {
                RoleArn: string;

                DatabaseName: string;

                TableName: string;

                Dimensions: AWS.IoT.TopicRule.TimestreamDimension[];

                Timestamp: AWS.IoT.TopicRule.TimestreamTimestamp;

                BatchMode: boolean;
            };

            export type IotSiteWiseAction = {
                RoleArn: string;

                PutAssetPropertyValueEntries: AWS.IoT.TopicRule.PutAssetPropertyValueEntry[];
            };

            export type DynamoDBv2Action = {
                PutItem: AWS.IoT.TopicRule.PutItemInput;

                RoleArn: string;
            };

            export type CloudwatchMetricAction = {
                MetricName: string;

                MetricValue: string;

                MetricNamespace: string;

                MetricUnit: string;

                RoleArn: string;

                MetricTimestamp: string;
            };

            export type S3Action = {
                BucketName: string;

                Key: string;

                RoleArn: string;

                CannedAcl: string;
            };

            export type FirehoseAction = {
                DeliveryStreamName: string;

                RoleArn: string;

                Separator: string;

                BatchMode: boolean;
            };

            export type AssetPropertyTimestamp = {
                TimeInSeconds: string;

                OffsetInNanos: string;
            };

            export type AssetPropertyValue = {
                Value: AWS.IoT.TopicRule.AssetPropertyVariant;

                Timestamp: AWS.IoT.TopicRule.AssetPropertyTimestamp;

                Quality: string;
            };

            export type ElasticsearchAction = {
                Type: string;

                Index: string;

                Id: string;

                Endpoint: string;

                RoleArn: string;
            };

            export type KinesisAction = {
                PartitionKey: string;

                StreamName: string;

                RoleArn: string;
            };

            export type Action = {
                S3: AWS.IoT.TopicRule.S3Action;

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

                Kafka: AWS.IoT.TopicRule.KafkaAction;
            };

            export type HttpAuthorization = { Sigv4: AWS.IoT.TopicRule.SigV4Authorization; };

            export type HttpActionHeader = {
                Value: string;

                Key: string;
            };

            export type RepublishAction = {
                Qos: number;

                Topic: string;

                RoleArn: string;
            };

            export type StepFunctionsAction = {
                ExecutionNamePrefix: string;

                StateMachineName: string;

                RoleArn: string;
            };

            export type TopicRulePayload = AWS.IoT.TopicRule.TopicRulePayload;

            export type CloudwatchAlarmAction = {
                StateValue: string;

                AlarmName: string;

                StateReason: string;

                RoleArn: string;
            };

            export type CloudwatchLogsAction = {
                LogGroupName: string;

                RoleArn: string;
            };

            export type TimestreamDimension = {
                Name: string;

                Value: string;
            };

            export type TimestreamTimestamp = {
                Value: string;

                Unit: string;
            };

            export type RuleName = string;

            export type Tags = AWS.IoT.TopicRule.Tag[];

        }

        export namespace MitigationAction {

            export type AddThingsToThingGroupParams = {
                OverrideDynamicGroups: boolean;

                ThingGroupNames: string[];
            };

            export type UpdateCACertificateParams = { Action: string; };

            export type UpdateDeviceCertificateParams = { Action: string; };

            export type ReplaceDefaultPolicyVersionParams = { TemplateName: string; };

            export type EnableIoTLoggingParams = {
                LogLevel: string;

                RoleArnForLogging: string;
            };

            export type ActionParams = AWS.IoT.MitigationAction.ActionParams;

            export type PublishFindingToSnsParams = { TopicArn: string; };

            export type ActionName = string;

            export type RoleArn = string;

            export type Tags = AWS.IoT.MitigationAction.Tag[];

        }

        export namespace TopicRuleDestination {

            export type VpcDestinationProperties = {
                SubnetIds: string[];

                SecurityGroups: string[];

                VpcId: string;

                RoleArn: string;
            };

            export type HttpUrlDestinationSummary = { ConfirmationUrl: string; };

            export type Status = string;

            export type HttpUrlProperties = AWS.IoT.TopicRuleDestination.HttpUrlDestinationSummary;

            export type VpcProperties = AWS.IoT.TopicRuleDestination.VpcDestinationProperties;

        }

        export namespace SecurityProfile {

            export type MetricToRetain = {
                Metric: string;

                MetricDimension: AWS.IoT.SecurityProfile.MetricDimension;
            };

            export type MachineLearningDetectionConfig = { ConfidenceLevel: string; };

            export type MetricDimension = {
                DimensionName: string;

                Operator: string;
            };

            export type MetricValue = {
                Count: string;

                Cidrs: string[];

                Ports: number[];

                Number: number;

                Numbers: number[];

                Strings: string[];
            };

            export type AlertTarget = {
                AlertTargetArn: string;

                RoleArn: string;
            };

            export type Behavior = {
                Name: string;

                Metric: string;

                MetricDimension: AWS.IoT.SecurityProfile.MetricDimension;

                Criteria: AWS.IoT.SecurityProfile.BehaviorCriteria;

                SuppressAlerts: boolean;
            };

            export type BehaviorCriteria = {
                ComparisonOperator: string;

                Value: AWS.IoT.SecurityProfile.MetricValue;

                DurationSeconds: number;

                ConsecutiveDatapointsToAlarm: number;

                ConsecutiveDatapointsToClear: number;

                StatisticalThreshold: AWS.IoT.SecurityProfile.StatisticalThreshold;

                MlDetectionConfig: AWS.IoT.SecurityProfile.MachineLearningDetectionConfig;
            };

            export type StatisticalThreshold = { Statistic: string; };

            export type SecurityProfileName = string;

            export type SecurityProfileDescription = string;

            export type Behaviors = AWS.IoT.SecurityProfile.Behavior[];

            export type AlertTargets = Record<string, AWS.IoT.SecurityProfile.AlertTarget>;

            export type AdditionalMetricsToRetainV2 = AWS.IoT.SecurityProfile.MetricToRetain[];

            export type Tags = AWS.IoT.SecurityProfile.Tag[];

            export type TargetArns = string[];

        }

        export namespace AccountAuditConfiguration {

            export type AuditCheckConfiguration = { Enabled: boolean; };

            export type AuditNotificationTargetConfigurations = AWS.IoT.AccountAuditConfiguration.AuditNotificationTargetConfigurations;

            export type AuditNotificationTarget = {
                TargetArn: string;

                RoleArn: string;

                Enabled: boolean;
            };

            export type AuditCheckConfigurations = AWS.IoT.AccountAuditConfiguration.AuditCheckConfigurations;

            export type AccountId = string;

            export type RoleArn = string;

        }

        export namespace ProvisioningTemplate {

            export type ProvisioningHook = {
                TargetArn: string;

                PayloadVersion: string;
            };

            export type TemplateName = string;

            export type Description = string;

            export type Enabled = boolean;

            export type ProvisioningRoleArn = string;

            export type TemplateBody = string;

            export type PreProvisioningHook = AWS.IoT.ProvisioningTemplate.ProvisioningHook;

            export type Tags = AWS.IoT.ProvisioningTemplate.Tag[];

        }

        export namespace Thing {

            export type AttributePayload = AWS.IoT.Thing.AttributePayload;

            export type ThingName = string;

        }

        export namespace DomainConfiguration {

            export type AuthorizerConfig = AWS.IoT.DomainConfiguration.AuthorizerConfig;

            export type ServerCertificateSummary = {
                ServerCertificateArn: string;

                ServerCertificateStatus: string;

                ServerCertificateStatusDetail: string;
            };

            export type DomainConfigurationName = string;

            export type DomainName = string;

            export type ServerCertificateArns = string[];

            export type ServiceType = string;

            export type ValidationCertificateArn = string;

            export type DomainConfigurationStatus = string;

            export type Tags = AWS.IoT.DomainConfiguration.Tag[];

        }

        export namespace CustomMetric {

            export type MetricName = string;

            export type DisplayName = string;

            export type MetricType = string;

            export type Tags = AWS.IoT.CustomMetric.Tag[];

        }

        export namespace Authorizer {

            export type AuthorizerFunctionArn = string;

            export type AuthorizerName = string;

            export type SigningDisabled = boolean;

            export type Status = string;

            export type TokenKeyName = string;

            export type TokenSigningPublicKeys = Record<string, string>;

            export type Tags = AWS.IoT.Authorizer.Tag[];

        }

        export namespace Dimension {

            export type Name = string;

            export type Type = string;

            export type StringValues = string[];

            export type Tags = AWS.IoT.Dimension.Tag[];

        }

        export namespace ThingPrincipalAttachment {

            export type Principal = string;

            export type ThingName = string;

        }

        export namespace Policy {

            export type PolicyDocument = JSONString;

            export type PolicyName = string;

        }

        export namespace ScheduledAudit {

            export type ScheduledAuditName = string;

            export type Frequency = string;

            export type DayOfMonth = string;

            export type DayOfWeek = string;

            export type TargetCheckNames = string[];

            export type Tags = AWS.IoT.ScheduledAudit.Tag[];

        }

        export namespace PolicyPrincipalAttachment {

            export type PolicyName = string;

            export type Principal = string;

        }

        export namespace Certificate {

            export type CACertificatePem = string;

            export type CertificatePem = string;

            export type CertificateSigningRequest = string;

            export type CertificateMode = string;

            export type Status = string;

        }

    }

    export namespace AutoScaling {

        export namespace LaunchConfiguration {

            export type BlockDeviceMapping = {
                DeviceName: string;

                Ebs: AWS.AutoScaling.LaunchConfiguration.BlockDevice;

                NoDevice: boolean;

                VirtualName: string;
            };

            export type MetadataOptions = AWS.AutoScaling.LaunchConfiguration.MetadataOptions;

            export type BlockDevice = {
                DeleteOnTermination: boolean;

                Encrypted: boolean;

                Iops: number;

                SnapshotId: string;

                Throughput: number;

                VolumeSize: number;

                VolumeType: string;
            };

            export type AssociatePublicIpAddress = boolean;

            export type BlockDeviceMappings = AWS.AutoScaling.LaunchConfiguration.BlockDeviceMapping[];

            export type ClassicLinkVPCId = string;

            export type ClassicLinkVPCSecurityGroups = string[];

            export type EbsOptimized = boolean;

            export type IamInstanceProfile = string;

            export type ImageId = string;

            export type InstanceId = string;

            export type InstanceMonitoring = boolean;

            export type InstanceType = string;

            export type KernelId = string;

            export type KeyName = string;

            export type LaunchConfigurationName = string;

            export type PlacementTenancy = string;

            export type RamDiskId = string;

            export type SecurityGroups = string[];

            export type SpotPrice = string;

            export type UserData = string;

        }

        export namespace AutoScalingGroup {

            export type LaunchTemplateOverrides = {
                InstanceType: string;

                LaunchTemplateSpecification: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

                WeightedCapacity: string;
            };

            export type MetricsCollection = AWS.AutoScaling.AutoScalingGroup.MetricsCollection[];

            export type InstancesDistribution = {
                OnDemandAllocationStrategy: string;

                OnDemandBaseCapacity: number;

                OnDemandPercentageAboveBaseCapacity: number;

                SpotAllocationStrategy: string;

                SpotInstancePools: number;

                SpotMaxPrice: string;
            };

            export type LifecycleHookSpecification = {
                DefaultResult: string;

                HeartbeatTimeout: number;

                LifecycleHookName: string;

                LifecycleTransition: string;

                NotificationMetadata: string;

                NotificationTargetARN: string;

                RoleARN: string;
            };

            export type LaunchTemplateSpecification = {
                LaunchTemplateId: string;

                LaunchTemplateName: string;

                Version: string;
            };

            export type MixedInstancesPolicy = AWS.AutoScaling.AutoScalingGroup.MixedInstancesPolicy;

            export type NotificationConfiguration = {
                NotificationTypes: string[];

                TopicARN: string;
            };

            export type LaunchTemplate = AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

            export type TagProperty = {
                Key: string;

                PropagateAtLaunch: boolean;

                Value: string;
            };

            export type AutoScalingGroupName = string;

            export type AvailabilityZones = string[];

            export type CapacityRebalance = boolean;

            export type Context = string;

            export type Cooldown = string;

            export type DesiredCapacity = string;

            export type HealthCheckGracePeriod = number;

            export type HealthCheckType = string;

            export type InstanceId = string;

            export type LaunchConfigurationName = string;

            export type LifecycleHookSpecificationList = AWS.AutoScaling.AutoScalingGroup.LifecycleHookSpecification[];

            export type LoadBalancerNames = string[];

            export type MaxInstanceLifetime = number;

            export type MaxSize = string;

            export type MinSize = string;

            export type NewInstancesProtectedFromScaleIn = boolean;

            export type NotificationConfigurations = AWS.AutoScaling.AutoScalingGroup.NotificationConfiguration[];

            export type PlacementGroup = string;

            export type ServiceLinkedRoleARN = string;

            export type Tags = AWS.AutoScaling.AutoScalingGroup.TagProperty[];

            export type TargetGroupARNs = string[];

            export type TerminationPolicies = string[];

            export type VPCZoneIdentifier = string[];

        }

        export namespace ScalingPolicy {

            export type CustomizedMetricSpecification = {
                Dimensions: AWS.AutoScaling.ScalingPolicy.MetricDimension[];

                MetricName: string;

                Namespace: string;

                Statistic: string;

                Unit: string;
            };

            export type MetricDimension = {
                Name: string;

                Value: string;
            };

            export type TargetTrackingConfiguration = AWS.AutoScaling.ScalingPolicy.TargetTrackingConfiguration;

            export type StepAdjustment = {
                MetricIntervalLowerBound: number;

                MetricIntervalUpperBound: number;

                ScalingAdjustment: number;
            };

            export type PredefinedMetricSpecification = {
                PredefinedMetricType: string;

                ResourceLabel: string;
            };

            export type AdjustmentType = string;

            export type AutoScalingGroupName = string;

            export type Cooldown = string;

            export type EstimatedInstanceWarmup = number;

            export type MetricAggregationType = string;

            export type MinAdjustmentMagnitude = number;

            export type PolicyType = string;

            export type ScalingAdjustment = number;

            export type StepAdjustments = AWS.AutoScaling.ScalingPolicy.StepAdjustment[];

        }

        export namespace ScheduledAction {

            export type AutoScalingGroupName = string;

            export type DesiredCapacity = number;

            export type EndTime = string;

            export type MaxSize = number;

            export type MinSize = number;

            export type Recurrence = string;

            export type StartTime = string;

            export type TimeZone = string;

        }

        export namespace LifecycleHook {

            export type AutoScalingGroupName = string;

            export type DefaultResult = string;

            export type HeartbeatTimeout = number;

            export type LifecycleHookName = string;

            export type LifecycleTransition = string;

            export type NotificationMetadata = string;

            export type NotificationTargetARN = string;

            export type RoleARN = string;

        }

        export namespace WarmPool {

            export type AutoScalingGroupName = string;

            export type MaxGroupPreparedCapacity = number;

            export type MinSize = number;

            export type PoolState = string;

        }

    }

    export namespace CloudFront {

        export namespace Distribution {

            export type Cookies = {
                Forward: string;

                WhitelistedNames: string[];
            };

            export type DistributionConfig = AWS.CloudFront.Distribution.DistributionConfig;

            export type LegacyS3Origin = {
                DNSName: string;

                OriginAccessIdentity: string;
            };

            export type OriginCustomHeader = {
                HeaderName: string;

                HeaderValue: string;
            };

            export type OriginGroup = {
                FailoverCriteria: AWS.CloudFront.Distribution.OriginGroupFailoverCriteria;

                Id: string;

                Members: AWS.CloudFront.Distribution.OriginGroupMembers;
            };

            export type CustomOriginConfig = {
                HTTPPort: number;

                HTTPSPort: number;

                OriginKeepaliveTimeout: number;

                OriginProtocolPolicy: string;

                OriginReadTimeout: number;

                OriginSSLProtocols: string[];
            };

            export type OriginGroups = {
                Items: AWS.CloudFront.Distribution.OriginGroup[];

                Quantity: number;
            };

            export type OriginGroupMembers = {
                Items: AWS.CloudFront.Distribution.OriginGroupMember[];

                Quantity: number;
            };

            export type GeoRestriction = {
                Locations: string[];

                RestrictionType: string;
            };

            export type ViewerCertificate = {
                AcmCertificateArn: string;

                CloudFrontDefaultCertificate: boolean;

                IamCertificateId: string;

                MinimumProtocolVersion: string;

                SslSupportMethod: string;
            };

            export type CustomErrorResponse = {
                ErrorCachingMinTTL: number;

                ErrorCode: number;

                ResponseCode: number;

                ResponsePagePath: string;
            };

            export type LambdaFunctionAssociation = {
                EventType: string;

                IncludeBody: boolean;

                LambdaFunctionARN: string;
            };

            export type OriginGroupMember = { OriginId: string; };

            export type CacheBehavior = {
                AllowedMethods: string[];

                CachePolicyId: string;

                CachedMethods: string[];

                Compress: boolean;

                DefaultTTL: number;

                FieldLevelEncryptionId: string;

                ForwardedValues: AWS.CloudFront.Distribution.ForwardedValues;

                FunctionAssociations: AWS.CloudFront.Distribution.FunctionAssociation[];

                LambdaFunctionAssociations: AWS.CloudFront.Distribution.LambdaFunctionAssociation[];

                MaxTTL: number;

                MinTTL: number;

                OriginRequestPolicyId: string;

                PathPattern: string;

                RealtimeLogConfigArn: string;

                SmoothStreaming: boolean;

                TargetOriginId: string;

                TrustedKeyGroups: string[];

                TrustedSigners: string[];

                ViewerProtocolPolicy: string;
            };

            export type LegacyCustomOrigin = {
                DNSName: string;

                HTTPPort: number;

                HTTPSPort: number;

                OriginProtocolPolicy: string;

                OriginSSLProtocols: string[];
            };

            export type DefaultCacheBehavior = {
                AllowedMethods: string[];

                CachePolicyId: string;

                CachedMethods: string[];

                Compress: boolean;

                DefaultTTL: number;

                FieldLevelEncryptionId: string;

                ForwardedValues: AWS.CloudFront.Distribution.ForwardedValues;

                FunctionAssociations: AWS.CloudFront.Distribution.FunctionAssociation[];

                LambdaFunctionAssociations: AWS.CloudFront.Distribution.LambdaFunctionAssociation[];

                MaxTTL: number;

                MinTTL: number;

                OriginRequestPolicyId: string;

                RealtimeLogConfigArn: string;

                SmoothStreaming: boolean;

                TargetOriginId: string;

                TrustedKeyGroups: string[];

                TrustedSigners: string[];

                ViewerProtocolPolicy: string;
            };

            export type Restrictions = { GeoRestriction: AWS.CloudFront.Distribution.GeoRestriction; };

            export type Origin = {
                ConnectionAttempts: number;

                ConnectionTimeout: number;

                CustomOriginConfig: AWS.CloudFront.Distribution.CustomOriginConfig;

                DomainName: string;

                Id: string;

                OriginCustomHeaders: AWS.CloudFront.Distribution.OriginCustomHeader[];

                OriginPath: string;

                OriginShield: AWS.CloudFront.Distribution.OriginShield;

                S3OriginConfig: AWS.CloudFront.Distribution.S3OriginConfig;
            };

            export type StatusCodes = {
                Items: number[];

                Quantity: number;
            };

            export type OriginGroupFailoverCriteria = { StatusCodes: AWS.CloudFront.Distribution.StatusCodes; };

            export type ForwardedValues = {
                Cookies: AWS.CloudFront.Distribution.Cookies;

                Headers: string[];

                QueryString: boolean;

                QueryStringCacheKeys: string[];
            };

            export type OriginShield = {
                Enabled: boolean;

                OriginShieldRegion: string;
            };

            export type S3OriginConfig = { OriginAccessIdentity: string; };

            export type Logging = {
                Bucket: string;

                IncludeCookies: boolean;

                Prefix: string;
            };

            export type FunctionAssociation = {
                EventType: string;

                FunctionARN: string;
            };

            export type Tags = AWS.CloudFront.Distribution.Tag[];

        }

        export namespace CachePolicy {

            export type HeadersConfig = {
                HeaderBehavior: string;

                Headers: string[];
            };

            export type CachePolicyConfig = AWS.CloudFront.CachePolicy.CachePolicyConfig;

            export type ParametersInCacheKeyAndForwardedToOrigin = {
                CookiesConfig: AWS.CloudFront.CachePolicy.CookiesConfig;

                EnableAcceptEncodingBrotli: boolean;

                EnableAcceptEncodingGzip: boolean;

                HeadersConfig: AWS.CloudFront.CachePolicy.HeadersConfig;

                QueryStringsConfig: AWS.CloudFront.CachePolicy.QueryStringsConfig;
            };

            export type QueryStringsConfig = {
                QueryStringBehavior: string;

                QueryStrings: string[];
            };

            export type CookiesConfig = {
                CookieBehavior: string;

                Cookies: string[];
            };

        }

        export namespace KeyGroup {

            export type KeyGroupConfig = AWS.CloudFront.KeyGroup.KeyGroupConfig;

        }

        export namespace OriginRequestPolicy {

            export type OriginRequestPolicyConfig = AWS.CloudFront.OriginRequestPolicy.OriginRequestPolicyConfig;

            export type CookiesConfig = {
                CookieBehavior: string;

                Cookies: string[];
            };

            export type QueryStringsConfig = {
                QueryStringBehavior: string;

                QueryStrings: string[];
            };

            export type HeadersConfig = {
                HeaderBehavior: string;

                Headers: string[];
            };

        }

        export namespace StreamingDistribution {

            export type S3Origin = {
                DomainName: string;

                OriginAccessIdentity: string;
            };

            export type Logging = {
                Bucket: string;

                Enabled: boolean;

                Prefix: string;
            };

            export type StreamingDistributionConfig = AWS.CloudFront.StreamingDistribution.StreamingDistributionConfig;

            export type TrustedSigners = {
                Enabled: boolean;

                AwsAccountNumbers: string[];
            };

            export type Tags = AWS.CloudFront.StreamingDistribution.Tag[];

        }

        export namespace CloudFrontOriginAccessIdentity {

            export type CloudFrontOriginAccessIdentityConfig = AWS.CloudFront.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig;

        }

        export namespace RealtimeLogConfig {

            export type EndPoint = {
                KinesisStreamConfig: AWS.CloudFront.RealtimeLogConfig.KinesisStreamConfig;

                StreamType: string;
            };

            export type KinesisStreamConfig = {
                RoleArn: string;

                StreamArn: string;
            };

            export type EndPoints = AWS.CloudFront.RealtimeLogConfig.EndPoint[];

            export type Fields = string[];

            export type Name = string;

            export type SamplingRate = number;

        }

        export namespace PublicKey {

            export type PublicKeyConfig = AWS.CloudFront.PublicKey.PublicKeyConfig;

        }

        export namespace Function {

            export type FunctionConfig = AWS.CloudFront.Function.FunctionConfig;

            export type FunctionMetadata = AWS.CloudFront.Function.FunctionMetadata;

            export type AutoPublish = boolean;

            export type FunctionCode = string;

            export type Name = string;

        }

    }

    export namespace EMR {

        export namespace Step {

            export type HadoopJarStepConfig = {
                Args: string[];

                Jar: string;

                MainClass: string;

                StepProperties: AWS.EMR.Step.KeyValue[];
            };

            export type KeyValue = {
                Key: string;

                Value: string;
            };

            export type ActionOnFailure = string;

            export type HadoopJarStep = AWS.EMR.Step.HadoopJarStepConfig;

            export type JobFlowId = string;

            export type Name = string;

        }

        export namespace Cluster {

            export type ComputeLimits = {
                MaximumCapacityUnits: number;

                MaximumCoreCapacityUnits: number;

                MaximumOnDemandCapacityUnits: number;

                MinimumCapacityUnits: number;

                UnitType: string;
            };

            export type SpotProvisioningSpecification = {
                AllocationStrategy: string;

                BlockDurationMinutes: number;

                TimeoutAction: string;

                TimeoutDurationMinutes: number;
            };

            export type BootstrapActionConfig = {
                Name: string;

                ScriptBootstrapAction: AWS.EMR.Cluster.ScriptBootstrapActionConfig;
            };

            export type StepConfig = {
                ActionOnFailure: string;

                HadoopJarStep: AWS.EMR.Cluster.HadoopJarStepConfig;

                Name: string;
            };

            export type EbsBlockDeviceConfig = {
                VolumeSpecification: AWS.EMR.Cluster.VolumeSpecification;

                VolumesPerInstance: number;
            };

            export type ManagedScalingPolicy = AWS.EMR.Cluster.ManagedScalingPolicy;

            export type CloudWatchAlarmDefinition = {
                ComparisonOperator: string;

                Dimensions: AWS.EMR.Cluster.MetricDimension[];

                EvaluationPeriods: number;

                MetricName: string;

                Namespace: string;

                Period: number;

                Statistic: string;

                Threshold: number;

                Unit: string;
            };

            export type KeyValue = {
                Key: string;

                Value: string;
            };

            export type VolumeSpecification = {
                Iops: number;

                SizeInGB: number;

                VolumeType: string;
            };

            export type InstanceFleetProvisioningSpecifications = {
                OnDemandSpecification: AWS.EMR.Cluster.OnDemandProvisioningSpecification;

                SpotSpecification: AWS.EMR.Cluster.SpotProvisioningSpecification;
            };

            export type InstanceGroupConfig = {
                AutoScalingPolicy: AWS.EMR.Cluster.AutoScalingPolicy;

                BidPrice: string;

                Configurations: AWS.EMR.Cluster.Configuration[];

                EbsConfiguration: AWS.EMR.Cluster.EbsConfiguration;

                InstanceCount: number;

                InstanceType: string;

                Market: string;

                Name: string;
            };

            export type KerberosAttributes = AWS.EMR.Cluster.KerberosAttributes;

            export type Application = {
                AdditionalInfo: Record<string, string>;

                Args: string[];

                Name: string;

                Version: string;
            };

            export type Configuration = {
                Classification: string;

                ConfigurationProperties: Record<string, string>;

                Configurations: AWS.EMR.Cluster.Configuration[];
            };

            export type ScriptBootstrapActionConfig = {
                Args: string[];

                Path: string;
            };

            export type EbsConfiguration = {
                EbsBlockDeviceConfigs: AWS.EMR.Cluster.EbsBlockDeviceConfig[];

                EbsOptimized: boolean;
            };

            export type InstanceTypeConfig = {
                BidPrice: string;

                BidPriceAsPercentageOfOnDemandPrice: number;

                Configurations: AWS.EMR.Cluster.Configuration[];

                EbsConfiguration: AWS.EMR.Cluster.EbsConfiguration;

                InstanceType: string;

                WeightedCapacity: number;
            };

            export type MetricDimension = {
                Key: string;

                Value: string;
            };

            export type OnDemandProvisioningSpecification = { AllocationStrategy: string; };

            export type ScalingTrigger = { CloudWatchAlarmDefinition: AWS.EMR.Cluster.CloudWatchAlarmDefinition; };

            export type InstanceFleetConfig = {
                InstanceTypeConfigs: AWS.EMR.Cluster.InstanceTypeConfig[];

                LaunchSpecifications: AWS.EMR.Cluster.InstanceFleetProvisioningSpecifications;

                Name: string;

                TargetOnDemandCapacity: number;

                TargetSpotCapacity: number;
            };

            export type JobFlowInstancesConfig = {
                AdditionalMasterSecurityGroups: string[];

                AdditionalSlaveSecurityGroups: string[];

                CoreInstanceFleet: AWS.EMR.Cluster.InstanceFleetConfig;

                CoreInstanceGroup: AWS.EMR.Cluster.InstanceGroupConfig;

                Ec2KeyName: string;

                Ec2SubnetId: string;

                Ec2SubnetIds: string[];

                EmrManagedMasterSecurityGroup: string;

                EmrManagedSlaveSecurityGroup: string;

                HadoopVersion: string;

                KeepJobFlowAliveWhenNoSteps: boolean;

                MasterInstanceFleet: AWS.EMR.Cluster.InstanceFleetConfig;

                MasterInstanceGroup: AWS.EMR.Cluster.InstanceGroupConfig;

                Placement: AWS.EMR.Cluster.PlacementType;

                ServiceAccessSecurityGroup: string;

                TerminationProtected: boolean;
            };

            export type ScalingConstraints = {
                MaxCapacity: number;

                MinCapacity: number;
            };

            export type ScalingAction = {
                Market: string;

                SimpleScalingPolicyConfiguration: AWS.EMR.Cluster.SimpleScalingPolicyConfiguration;
            };

            export type SimpleScalingPolicyConfiguration = {
                AdjustmentType: string;

                CoolDown: number;

                ScalingAdjustment: number;
            };

            export type PlacementType = { AvailabilityZone: string; };

            export type ScalingRule = {
                Action: AWS.EMR.Cluster.ScalingAction;

                Description: string;

                Name: string;

                Trigger: AWS.EMR.Cluster.ScalingTrigger;
            };

            export type AutoScalingPolicy = {
                Constraints: AWS.EMR.Cluster.ScalingConstraints;

                Rules: AWS.EMR.Cluster.ScalingRule[];
            };

            export type HadoopJarStepConfig = {
                Args: string[];

                Jar: string;

                MainClass: string;

                StepProperties: AWS.EMR.Cluster.KeyValue[];
            };

            export type AdditionalInfo = JSONString;

            export type Applications = AWS.EMR.Cluster.Application[];

            export type AutoScalingRole = string;

            export type BootstrapActions = AWS.EMR.Cluster.BootstrapActionConfig[];

            export type Configurations = AWS.EMR.Cluster.Configuration[];

            export type CustomAmiId = string;

            export type EbsRootVolumeSize = number;

            export type Instances = AWS.EMR.Cluster.JobFlowInstancesConfig;

            export type JobFlowRole = string;

            export type LogEncryptionKmsKeyId = string;

            export type LogUri = string;

            export type Name = string;

            export type ReleaseLabel = string;

            export type ScaleDownBehavior = string;

            export type SecurityConfiguration = string;

            export type ServiceRole = string;

            export type StepConcurrencyLevel = number;

            export type Steps = AWS.EMR.Cluster.StepConfig[];

            export type Tags = AWS.EMR.Cluster.Tag[];

            export type VisibleToAllUsers = boolean;

        }

        export namespace InstanceGroupConfig {

            export type AutoScalingPolicy = AWS.EMR.InstanceGroupConfig.AutoScalingPolicy;

            export type Configuration = {
                Classification: string;

                ConfigurationProperties: Record<string, string>;

                Configurations: AWS.EMR.InstanceGroupConfig.Configuration[];
            };

            export type MetricDimension = {
                Key: string;

                Value: string;
            };

            export type SimpleScalingPolicyConfiguration = {
                AdjustmentType: string;

                CoolDown: number;

                ScalingAdjustment: number;
            };

            export type ScalingRule = {
                Action: AWS.EMR.InstanceGroupConfig.ScalingAction;

                Description: string;

                Name: string;

                Trigger: AWS.EMR.InstanceGroupConfig.ScalingTrigger;
            };

            export type CloudWatchAlarmDefinition = {
                ComparisonOperator: string;

                Dimensions: AWS.EMR.InstanceGroupConfig.MetricDimension[];

                EvaluationPeriods: number;

                MetricName: string;

                Namespace: string;

                Period: number;

                Statistic: string;

                Threshold: number;

                Unit: string;
            };

            export type EbsBlockDeviceConfig = {
                VolumeSpecification: AWS.EMR.InstanceGroupConfig.VolumeSpecification;

                VolumesPerInstance: number;
            };

            export type ScalingAction = {
                Market: string;

                SimpleScalingPolicyConfiguration: AWS.EMR.InstanceGroupConfig.SimpleScalingPolicyConfiguration;
            };

            export type ScalingTrigger = { CloudWatchAlarmDefinition: AWS.EMR.InstanceGroupConfig.CloudWatchAlarmDefinition; };

            export type VolumeSpecification = {
                Iops: number;

                SizeInGB: number;

                VolumeType: string;
            };

            export type EbsConfiguration = AWS.EMR.InstanceGroupConfig.EbsConfiguration;

            export type ScalingConstraints = {
                MaxCapacity: number;

                MinCapacity: number;
            };

            export type BidPrice = string;

            export type Configurations = AWS.EMR.InstanceGroupConfig.Configuration[];

            export type InstanceCount = number;

            export type InstanceRole = string;

            export type InstanceType = string;

            export type JobFlowId = string;

            export type Market = string;

            export type Name = string;

        }

        export namespace InstanceFleetConfig {

            export type Configuration = {
                Classification: string;

                ConfigurationProperties: Record<string, string>;

                Configurations: AWS.EMR.InstanceFleetConfig.Configuration[];
            };

            export type InstanceTypeConfig = {
                BidPrice: string;

                BidPriceAsPercentageOfOnDemandPrice: number;

                Configurations: AWS.EMR.InstanceFleetConfig.Configuration[];

                EbsConfiguration: AWS.EMR.InstanceFleetConfig.EbsConfiguration;

                InstanceType: string;

                WeightedCapacity: number;
            };

            export type SpotProvisioningSpecification = {
                AllocationStrategy: string;

                BlockDurationMinutes: number;

                TimeoutAction: string;

                TimeoutDurationMinutes: number;
            };

            export type EbsConfiguration = {
                EbsBlockDeviceConfigs: AWS.EMR.InstanceFleetConfig.EbsBlockDeviceConfig[];

                EbsOptimized: boolean;
            };

            export type OnDemandProvisioningSpecification = { AllocationStrategy: string; };

            export type VolumeSpecification = {
                Iops: number;

                SizeInGB: number;

                VolumeType: string;
            };

            export type InstanceFleetProvisioningSpecifications = {
                OnDemandSpecification: AWS.EMR.InstanceFleetConfig.OnDemandProvisioningSpecification;

                SpotSpecification: AWS.EMR.InstanceFleetConfig.SpotProvisioningSpecification;
            };

            export type EbsBlockDeviceConfig = {
                VolumeSpecification: AWS.EMR.InstanceFleetConfig.VolumeSpecification;

                VolumesPerInstance: number;
            };

            export type ClusterId = string;

            export type InstanceFleetType = string;

            export type InstanceTypeConfigs = AWS.EMR.InstanceFleetConfig.InstanceTypeConfig[];

            export type LaunchSpecifications = AWS.EMR.InstanceFleetConfig.InstanceFleetProvisioningSpecifications;

            export type Name = string;

            export type TargetOnDemandCapacity = number;

            export type TargetSpotCapacity = number;

        }

        export namespace SecurityConfiguration {

            export type Name = string;

            export type SecurityConfiguration = JSONString;

        }

        export namespace StudioSessionMapping {

            export type IdentityName = string;

            export type IdentityType = string;

            export type SessionPolicyArn = string;

            export type StudioId = string;

        }

        export namespace Studio {

            export type AuthMode = string;

            export type DefaultS3Location = string;

            export type Description = string;

            export type EngineSecurityGroupId = string;

            export type Name = string;

            export type ServiceRole = string;

            export type SubnetIds = string[];

            export type Tags = AWS.EMR.Studio.Tag[];

            export type UserRole = string;

            export type VpcId = string;

            export type WorkspaceSecurityGroupId = string;

        }

    }

    export namespace Cassandra {

        export namespace Table {

            export type BillingMode = AWS.Cassandra.Table.BillingMode;

            export type Column = {
                ColumnName: string;

                ColumnType: string;
            };

            export type ClusteringKeyColumn = {
                Column: AWS.Cassandra.Table.Column;

                OrderBy: string;
            };

            export type ProvisionedThroughput = {
                ReadCapacityUnits: number;

                WriteCapacityUnits: number;
            };

            export type KeyspaceName = string;

            export type TableName = string;

            export type RegularColumns = AWS.Cassandra.Table.Column[];

            export type PartitionKeyColumns = AWS.Cassandra.Table.Column[];

            export type ClusteringKeyColumns = AWS.Cassandra.Table.ClusteringKeyColumn[];

            export type PointInTimeRecoveryEnabled = boolean;

            export type Tags = AWS.Cassandra.Table.Tag[];

        }

        export namespace Keyspace {

            export type KeyspaceName = string;

            export type Tags = AWS.Cassandra.Keyspace.Tag[];

        }

    }

    export namespace WAFv2 {

        export namespace RuleGroup {

            export type JsonMatchPattern = {
                All: JSONString;

                IncludedPaths: string[];
            };

            export type XssMatchStatement = {
                FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

                TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
            };

            export type LabelMatchStatement = {
                Scope: string;

                Key: string;
            };

            export type RuleAction = {
                Allow: JSONString;

                Block: JSONString;

                Count: JSONString;
            };

            export type Statement = {
                ByteMatchStatement: AWS.WAFv2.RuleGroup.ByteMatchStatement;

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

                LabelMatchStatement: AWS.WAFv2.RuleGroup.LabelMatchStatement;
            };

            export type LabelSummary = { Name: string; };

            export type FieldToMatch = {
                SingleHeader: JSONString;

                SingleQueryArgument: JSONString;

                AllQueryArguments: JSONString;

                UriPath: JSONString;

                QueryString: JSONString;

                Body: JSONString;

                Method: JSONString;

                JsonBody: AWS.WAFv2.RuleGroup.JsonBody;
            };

            export type IPSetReferenceStatement = {
                Arn: string;

                IPSetForwardedIPConfig: AWS.WAFv2.RuleGroup.IPSetForwardedIPConfiguration;
            };

            export type RateBasedStatement = {
                Limit: number;

                AggregateKeyType: string;

                ScopeDownStatement: AWS.WAFv2.RuleGroup.Statement;

                ForwardedIPConfig: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration;
            };

            export type VisibilityConfig = AWS.WAFv2.RuleGroup.VisibilityConfig;

            export type GeoMatchStatement = {
                CountryCodes: string[];

                ForwardedIPConfig: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration;
            };

            export type AndStatement = { Statements: AWS.WAFv2.RuleGroup.Statement[]; };

            export type IPSetForwardedIPConfiguration = {
                HeaderName: string;

                FallbackBehavior: string;

                Position: string;
            };

            export type TextTransformation = {
                Priority: number;

                Type: string;
            };

            export type ByteMatchStatement = {
                SearchString: string;

                SearchStringBase64: string;

                FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

                TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];

                PositionalConstraint: string;
            };

            export type RegexPatternSetReferenceStatement = {
                Arn: string;

                FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

                TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
            };

            export type OrStatement = { Statements: AWS.WAFv2.RuleGroup.Statement[]; };

            export type Rule = {
                Name: string;

                Priority: number;

                Statement: AWS.WAFv2.RuleGroup.Statement;

                Action: AWS.WAFv2.RuleGroup.RuleAction;

                RuleLabels: AWS.WAFv2.RuleGroup.Label[];

                VisibilityConfig: AWS.WAFv2.RuleGroup.VisibilityConfig;
            };

            export type JsonBody = {
                MatchPattern: AWS.WAFv2.RuleGroup.JsonMatchPattern;

                MatchScope: string;

                InvalidFallbackBehavior: string;
            };

            export type CustomResponseBody = {
                ContentType: string;

                Content: string;
            };

            export type Label = { Name: string; };

            export type SqliMatchStatement = {
                FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

                TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
            };

            export type NotStatement = { Statement: AWS.WAFv2.RuleGroup.Statement; };

            export type ForwardedIPConfiguration = {
                HeaderName: string;

                FallbackBehavior: string;
            };

            export type SizeConstraintStatement = {
                FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

                ComparisonOperator: string;

                Size: number;

                TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
            };

            export type Capacity = number;

            export type Description = string;

            export type Name = string;

            export type Scope = string;

            export type Rules = AWS.WAFv2.RuleGroup.Rule[];

            export type Tags = AWS.WAFv2.RuleGroup.Tag[];

            export type CustomResponseBodies = Record<string, AWS.WAFv2.RuleGroup.CustomResponseBody>;

        }

        export namespace WebACL {

            export type CustomRequestHandling = { InsertHeaders: AWS.WAFv2.WebACL.CustomHTTPHeader[]; };

            export type ManagedRuleGroupStatement = {
                Name: string;

                VendorName: string;

                ExcludedRules: AWS.WAFv2.WebACL.ExcludedRule[];

                ScopeDownStatement: AWS.WAFv2.WebACL.Statement;
            };

            export type TextTransformation = {
                Priority: number;

                Type: string;
            };

            export type AllowAction = { CustomRequestHandling: AWS.WAFv2.WebACL.CustomRequestHandling; };

            export type DefaultAction = AWS.WAFv2.WebACL.DefaultAction;

            export type XssMatchStatement = {
                FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

                TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
            };

            export type ByteMatchStatement = {
                SearchString: string;

                SearchStringBase64: string;

                FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

                TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];

                PositionalConstraint: string;
            };

            export type ForwardedIPConfiguration = {
                HeaderName: string;

                FallbackBehavior: string;
            };

            export type OrStatement = { Statements: AWS.WAFv2.WebACL.Statement[]; };

            export type Label = { Name: string; };

            export type CustomHTTPHeader = {
                Name: string;

                Value: string;
            };

            export type RegexPatternSetReferenceStatement = {
                Arn: string;

                FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

                TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
            };

            export type IPSetForwardedIPConfiguration = {
                HeaderName: string;

                FallbackBehavior: string;

                Position: string;
            };

            export type CustomResponseBody = {
                ContentType: string;

                Content: string;
            };

            export type Statement = {
                ByteMatchStatement: AWS.WAFv2.WebACL.ByteMatchStatement;

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

                LabelMatchStatement: AWS.WAFv2.WebACL.LabelMatchStatement;
            };

            export type BlockAction = { CustomResponse: AWS.WAFv2.WebACL.CustomResponse; };

            export type RuleGroupReferenceStatement = {
                Arn: string;

                ExcludedRules: AWS.WAFv2.WebACL.ExcludedRule[];
            };

            export type LabelMatchStatement = {
                Scope: string;

                Key: string;
            };

            export type JsonMatchPattern = {
                All: JSONString;

                IncludedPaths: string[];
            };

            export type AndStatement = { Statements: AWS.WAFv2.WebACL.Statement[]; };

            export type CountAction = { CustomRequestHandling: AWS.WAFv2.WebACL.CustomRequestHandling; };

            export type SizeConstraintStatement = {
                FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

                ComparisonOperator: string;

                Size: number;

                TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
            };

            export type FieldToMatch = {
                SingleHeader: JSONString;

                SingleQueryArgument: JSONString;

                AllQueryArguments: JSONString;

                UriPath: JSONString;

                QueryString: JSONString;

                Body: JSONString;

                Method: JSONString;

                JsonBody: AWS.WAFv2.WebACL.JsonBody;
            };

            export type SqliMatchStatement = {
                FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

                TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
            };

            export type GeoMatchStatement = {
                CountryCodes: string[];

                ForwardedIPConfig: AWS.WAFv2.WebACL.ForwardedIPConfiguration;
            };

            export type RuleAction = {
                Allow: AWS.WAFv2.WebACL.AllowAction;

                Block: AWS.WAFv2.WebACL.BlockAction;

                Count: AWS.WAFv2.WebACL.CountAction;
            };

            export type JsonBody = {
                MatchPattern: AWS.WAFv2.WebACL.JsonMatchPattern;

                MatchScope: string;

                InvalidFallbackBehavior: string;
            };

            export type NotStatement = { Statement: AWS.WAFv2.WebACL.Statement; };

            export type OverrideAction = {
                Count: JSONString;

                None: JSONString;
            };

            export type Rule = {
                Name: string;

                Priority: number;

                Statement: AWS.WAFv2.WebACL.Statement;

                Action: AWS.WAFv2.WebACL.RuleAction;

                OverrideAction: AWS.WAFv2.WebACL.OverrideAction;

                RuleLabels: AWS.WAFv2.WebACL.Label[];

                VisibilityConfig: AWS.WAFv2.WebACL.VisibilityConfig;
            };

            export type CustomResponse = {
                ResponseCode: number;

                CustomResponseBodyKey: string;

                ResponseHeaders: AWS.WAFv2.WebACL.CustomHTTPHeader[];
            };

            export type RateBasedStatement = {
                Limit: number;

                AggregateKeyType: string;

                ScopeDownStatement: AWS.WAFv2.WebACL.Statement;

                ForwardedIPConfig: AWS.WAFv2.WebACL.ForwardedIPConfiguration;
            };

            export type ExcludedRule = { Name: string; };

            export type VisibilityConfig = AWS.WAFv2.WebACL.VisibilityConfig;

            export type IPSetReferenceStatement = {
                Arn: string;

                IPSetForwardedIPConfig: AWS.WAFv2.WebACL.IPSetForwardedIPConfiguration;
            };

            export type Description = string;

            export type Name = string;

            export type Scope = string;

            export type Rules = AWS.WAFv2.WebACL.Rule[];

            export type Tags = AWS.WAFv2.WebACL.Tag[];

            export type CustomResponseBodies = Record<string, AWS.WAFv2.WebACL.CustomResponseBody>;

        }

        export namespace RegexPatternSet {

            export type Description = string;

            export type Name = string;

            export type RegularExpressionList = string[];

            export type Scope = string;

            export type Tags = AWS.WAFv2.RegexPatternSet.Tag[];

        }

        export namespace IPSet {

            export type Description = string;

            export type Name = string;

            export type Scope = string;

            export type IPAddressVersion = string;

            export type Addresses = string[];

            export type Tags = AWS.WAFv2.IPSet.Tag[];

        }

        export namespace WebACLAssociation {

            export type ResourceArn = string;

            export type WebACLArn = string;

        }

    }

    export namespace MediaPackage {

        export namespace OriginEndpoint {

            export type StreamSelection = {
                MinVideoBitsPerSecond: number;

                MaxVideoBitsPerSecond: number;

                StreamOrder: string;
            };

            export type CmafPackage = AWS.MediaPackage.OriginEndpoint.CmafPackage;

            export type MssEncryption = { SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider; };

            export type Authorization = AWS.MediaPackage.OriginEndpoint.Authorization;

            export type DashPackage = AWS.MediaPackage.OriginEndpoint.DashPackage;

            export type DashEncryption = {
                KeyRotationIntervalSeconds: number;

                SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;
            };

            export type HlsManifest = {
                Id: string;

                ManifestName: string;

                Url: string;

                PlaylistWindowSeconds: number;

                PlaylistType: string;

                AdMarkers: string;

                ProgramDateTimeIntervalSeconds: number;

                IncludeIframeOnlyStream: boolean;

                AdTriggers: string[];

                AdsOnDeliveryRestrictions: string;
            };

            export type SpekeKeyProvider = {
                ResourceId: string;

                SystemIds: string[];

                Url: string;

                RoleArn: string;

                CertificateArn: string;
            };

            export type CmafEncryption = {
                KeyRotationIntervalSeconds: number;

                SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;

                ConstantInitializationVector: string;
            };

            export type HlsEncryption = {
                EncryptionMethod: string;

                ConstantInitializationVector: string;

                KeyRotationIntervalSeconds: number;

                RepeatExtXKey: boolean;

                SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;
            };

            export type MssPackage = AWS.MediaPackage.OriginEndpoint.MssPackage;

            export type HlsPackage = AWS.MediaPackage.OriginEndpoint.HlsPackage;

            export type Id = string;

            export type ChannelId = string;

            export type Description = string;

            export type Whitelist = string[];

            export type StartoverWindowSeconds = number;

            export type TimeDelaySeconds = number;

            export type ManifestName = string;

            export type Origination = string;

            export type Tags = AWS.MediaPackage.OriginEndpoint.Tag[];

        }

        export namespace PackagingConfiguration {

            export type DashEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

            export type SpekeKeyProvider = {
                RoleArn: string;

                SystemIds: string[];

                Url: string;
            };

            export type CmafPackage = AWS.MediaPackage.PackagingConfiguration.CmafPackage;

            export type DashPackage = AWS.MediaPackage.PackagingConfiguration.DashPackage;

            export type DashManifest = {
                ManifestLayout: string;

                ManifestName: string;

                MinBufferTimeSeconds: number;

                Profile: string;

                StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
            };

            export type HlsEncryption = {
                ConstantInitializationVector: string;

                EncryptionMethod: string;

                SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider;
            };

            export type MssManifest = {
                ManifestName: string;

                StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
            };

            export type CmafEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

            export type MssEncryption = { SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider; };

            export type StreamSelection = {
                MaxVideoBitsPerSecond: number;

                MinVideoBitsPerSecond: number;

                StreamOrder: string;
            };

            export type MssPackage = AWS.MediaPackage.PackagingConfiguration.MssPackage;

            export type HlsPackage = AWS.MediaPackage.PackagingConfiguration.HlsPackage;

            export type HlsManifest = {
                AdMarkers: string;

                IncludeIframeOnlyStream: boolean;

                ManifestName: string;

                ProgramDateTimeIntervalSeconds: number;

                RepeatExtXKey: boolean;

                StreamSelection: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
            };

            export type Id = string;

            export type PackagingGroupId = string;

            export type Tags = AWS.MediaPackage.PackagingConfiguration.Tag[];

        }

        export namespace PackagingGroup {

            export type LogConfiguration = { LogGroupName: string; };

            export type Authorization = AWS.MediaPackage.PackagingGroup.Authorization;

            export type Id = string;

            export type Tags = AWS.MediaPackage.PackagingGroup.Tag[];

            export type EgressAccessLogs = AWS.MediaPackage.PackagingGroup.LogConfiguration;

        }

        export namespace Channel {

            export type LogConfiguration = { LogGroupName: string; };

            export type Id = string;

            export type Description = string;

            export type Tags = AWS.MediaPackage.Channel.Tag[];

            export type EgressAccessLogs = AWS.MediaPackage.Channel.LogConfiguration;

            export type IngressAccessLogs = AWS.MediaPackage.Channel.LogConfiguration;

        }

        export namespace Asset {

            export type EgressEndpoint = {
                PackagingConfigurationId: string;

                Url: string;
            };

            export type Id = string;

            export type PackagingGroupId = string;

            export type ResourceId = string;

            export type SourceArn = string;

            export type SourceRoleArn = string;

            export type Tags = AWS.MediaPackage.Asset.Tag[];

        }

    }

    export namespace ACMPCA {

        export namespace Certificate {

            export type Extensions = {
                CertificatePolicies: AWS.ACMPCA.Certificate.PolicyInformation[];

                ExtendedKeyUsage: AWS.ACMPCA.Certificate.ExtendedKeyUsage[];

                KeyUsage: AWS.ACMPCA.Certificate.KeyUsage;

                SubjectAlternativeNames: AWS.ACMPCA.Certificate.GeneralName[];
            };

            export type Subject = {
                Country: string;

                Organization: string;

                OrganizationalUnit: string;

                DistinguishedNameQualifier: string;

                State: string;

                CommonName: string;

                SerialNumber: string;

                Locality: string;

                Title: string;

                Surname: string;

                GivenName: string;

                Initials: string;

                Pseudonym: string;

                GenerationQualifier: string;
            };

            export type PolicyInformation = {
                CertPolicyId: string;

                PolicyQualifiers: AWS.ACMPCA.Certificate.PolicyQualifierInfo[];
            };

            export type PolicyQualifierInfo = {
                PolicyQualifierId: string;

                Qualifier: AWS.ACMPCA.Certificate.Qualifier;
            };

            export type Qualifier = { CpsUri: string; };

            export type GeneralName = {
                OtherName: AWS.ACMPCA.Certificate.OtherName;

                Rfc822Name: string;

                DnsName: string;

                DirectoryName: AWS.ACMPCA.Certificate.Subject;

                EdiPartyName: AWS.ACMPCA.Certificate.EdiPartyName;

                UniformResourceIdentifier: string;

                IpAddress: string;

                RegisteredId: string;
            };

            export type ApiPassthrough = AWS.ACMPCA.Certificate.ApiPassthrough;

            export type EdiPartyName = {
                PartyName: string;

                NameAssigner: string;
            };

            export type OtherName = {
                TypeId: string;

                Value: string;
            };

            export type Validity = AWS.ACMPCA.Certificate.Validity;

            export type ExtendedKeyUsage = {
                ExtendedKeyUsageType: string;

                ExtendedKeyUsageObjectIdentifier: string;
            };

            export type KeyUsage = {
                DigitalSignature: boolean;

                NonRepudiation: boolean;

                KeyEncipherment: boolean;

                DataEncipherment: boolean;

                KeyAgreement: boolean;

                KeyCertSign: boolean;

                CRLSign: boolean;

                EncipherOnly: boolean;

                DecipherOnly: boolean;
            };

            export type CertificateAuthorityArn = string;

            export type CertificateSigningRequest = string;

            export type SigningAlgorithm = string;

            export type TemplateArn = string;

            export type ValidityNotBefore = AWS.ACMPCA.Certificate.Validity;

        }

        export namespace CertificateAuthority {

            export type RevocationConfiguration = AWS.ACMPCA.CertificateAuthority.RevocationConfiguration;

            export type KeyUsage = {
                DigitalSignature: boolean;

                NonRepudiation: boolean;

                KeyEncipherment: boolean;

                DataEncipherment: boolean;

                KeyAgreement: boolean;

                KeyCertSign: boolean;

                CRLSign: boolean;

                EncipherOnly: boolean;

                DecipherOnly: boolean;
            };

            export type CsrExtensions = AWS.ACMPCA.CertificateAuthority.CsrExtensions;

            export type AccessDescription = {
                AccessMethod: AWS.ACMPCA.CertificateAuthority.AccessMethod;

                AccessLocation: AWS.ACMPCA.CertificateAuthority.GeneralName;
            };

            export type EdiPartyName = {
                PartyName: string;

                NameAssigner: string;
            };

            export type Subject = AWS.ACMPCA.CertificateAuthority.Subject;

            export type AccessMethod = {
                CustomObjectIdentifier: string;

                AccessMethodType: string;
            };

            export type OtherName = {
                TypeId: string;

                Value: string;
            };

            export type CrlConfiguration = {
                Enabled: boolean;

                ExpirationInDays: number;

                CustomCname: string;

                S3BucketName: string;

                S3ObjectAcl: string;
            };

            export type GeneralName = {
                OtherName: AWS.ACMPCA.CertificateAuthority.OtherName;

                Rfc822Name: string;

                DnsName: string;

                DirectoryName: AWS.ACMPCA.CertificateAuthority.Subject;

                EdiPartyName: AWS.ACMPCA.CertificateAuthority.EdiPartyName;

                UniformResourceIdentifier: string;

                IpAddress: string;

                RegisteredId: string;
            };

            export type Type = string;

            export type KeyAlgorithm = string;

            export type SigningAlgorithm = string;

            export type Tags = AWS.ACMPCA.CertificateAuthority.Tag[];

            export type KeyStorageSecurityStandard = string;

        }

        export namespace CertificateAuthorityActivation {

            export type CertificateAuthorityArn = string;

            export type Certificate = string;

            export type CertificateChain = string;

            export type Status = string;

        }

    }

    export namespace IoTWireless {

        export namespace WirelessDevice {

            export type AbpV11 = {
                DevAddr: string;

                SessionKeys: AWS.IoTWireless.WirelessDevice.SessionKeysAbpV11;
            };

            export type LoRaWANDevice = {
                DevEui: string;

                DeviceProfileId: string;

                ServiceProfileId: string;

                OtaaV11: AWS.IoTWireless.WirelessDevice.OtaaV11;

                OtaaV10x: AWS.IoTWireless.WirelessDevice.OtaaV10x;

                AbpV11: AWS.IoTWireless.WirelessDevice.AbpV11;

                AbpV10x: AWS.IoTWireless.WirelessDevice.AbpV10x;
            };

            export type SessionKeysAbpV11 = {
                FNwkSIntKey: string;

                SNwkSIntKey: string;

                NwkSEncKey: string;

                AppSKey: string;
            };

            export type AbpV10x = {
                DevAddr: string;

                SessionKeys: AWS.IoTWireless.WirelessDevice.SessionKeysAbpV10x;
            };

            export type OtaaV11 = {
                AppKey: string;

                NwkKey: string;

                JoinEui: string;
            };

            export type SessionKeysAbpV10x = {
                NwkSKey: string;

                AppSKey: string;
            };

            export type OtaaV10x = {
                AppKey: string;

                AppEui: string;
            };

            export type Type = string;

            export type Name = string;

            export type Description = string;

            export type DestinationName = string;

            export type LoRaWAN = AWS.IoTWireless.WirelessDevice.LoRaWANDevice;

            export type Tags = AWS.IoTWireless.WirelessDevice.Tag[];

            export type ThingArn = string;

            export type LastUplinkReceivedAt = string;

        }

        export namespace TaskDefinition {

            export type UpdateWirelessGatewayTaskCreate = {
                UpdateDataSource: string;

                UpdateDataRole: string;

                LoRaWAN: AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskCreate;
            };

            export type LoRaWANUpdateGatewayTaskEntry = AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskEntry;

            export type LoRaWANGatewayVersion = {
                PackageVersion: string;

                Model: string;

                Station: string;
            };

            export type LoRaWANUpdateGatewayTaskCreate = {
                UpdateSignature: string;

                SigKeyCrc: number;

                CurrentVersion: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;

                UpdateVersion: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;
            };

            export type Name = string;

            export type AutoCreateTasks = boolean;

            export type Update = AWS.IoTWireless.TaskDefinition.UpdateWirelessGatewayTaskCreate;

            export type TaskDefinitionType = string;

            export type Tags = AWS.IoTWireless.TaskDefinition.Tag[];

        }

        export namespace DeviceProfile {

            export type LoRaWANDeviceProfile = {
                SupportsClassB: boolean;

                ClassBTimeout: number;

                PingSlotPeriod: number;

                PingSlotDr: number;

                PingSlotFreq: number;

                SupportsClassC: boolean;

                ClassCTimeout: number;

                MacVersion: string;

                RegParamsRevision: string;

                MaxEirp: number;

                MaxDutyCycle: number;

                SupportsJoin: boolean;

                RfRegion: string;

                Supports32BitFCnt: boolean;
            };

            export type Name = string;

            export type LoRaWAN = AWS.IoTWireless.DeviceProfile.LoRaWANDeviceProfile;

            export type Tags = AWS.IoTWireless.DeviceProfile.Tag[];

        }

        export namespace PartnerAccount {

            export type SidewalkAccountInfo = { AppServerPrivateKey: string; };

            export type SidewalkUpdateAccount = { AppServerPrivateKey: string; };

            export type Sidewalk = AWS.IoTWireless.PartnerAccount.SidewalkAccountInfo;

            export type PartnerAccountId = string;

            export type PartnerType = string;

            export type AccountLinked = boolean;

            export type SidewalkUpdate = AWS.IoTWireless.PartnerAccount.SidewalkUpdateAccount;

            export type Fingerprint = string;

            export type Tags = AWS.IoTWireless.PartnerAccount.Tag[];

        }

        export namespace WirelessGateway {

            export type LoRaWANGateway = {
                GatewayEui: string;

                RfRegion: string;
            };

            export type Name = string;

            export type Description = string;

            export type Tags = AWS.IoTWireless.WirelessGateway.Tag[];

            export type LoRaWAN = AWS.IoTWireless.WirelessGateway.LoRaWANGateway;

            export type ThingArn = string;

            export type LastUplinkReceivedAt = string;

        }

        export namespace ServiceProfile {

            export type LoRaWANServiceProfile = {
                UlRate: number;

                UlBucketSize: number;

                UlRatePolicy: string;

                DlRate: number;

                DlBucketSize: number;

                DlRatePolicy: string;

                AddGwMetadata: boolean;

                DevStatusReqFreq: number;

                ReportDevStatusBattery: boolean;

                ReportDevStatusMargin: boolean;

                DrMin: number;

                DrMax: number;

                ChannelMask: string;

                PrAllowed: boolean;

                HrAllowed: boolean;

                RaAllowed: boolean;

                NwkGeoLoc: boolean;

                TargetPer: number;

                MinGwDiversity: number;
            };

            export type Name = string;

            export type LoRaWAN = AWS.IoTWireless.ServiceProfile.LoRaWANServiceProfile;

            export type Tags = AWS.IoTWireless.ServiceProfile.Tag[];

        }

        export namespace Destination {

            export type Name = string;

            export type Expression = string;

            export type ExpressionType = string;

            export type Description = string;

            export type Tags = AWS.IoTWireless.Destination.Tag[];

            export type RoleArn = string;

        }

    }

    export namespace KinesisAnalyticsV2 {

        export namespace ApplicationReferenceDataSource {

            export type RecordColumn = {
                Mapping: string;

                SqlType: string;

                Name: string;
            };

            export type RecordFormat = {
                MappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.MappingParameters;

                RecordFormatType: string;
            };

            export type JSONMappingParameters = { RecordRowPath: string; };

            export type ReferenceDataSource = AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.ReferenceDataSource;

            export type MappingParameters = {
                JSONMappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.JSONMappingParameters;

                CSVMappingParameters: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.CSVMappingParameters;
            };

            export type S3ReferenceDataSource = {
                BucketARN: string;

                FileKey: string;
            };

            export type ReferenceSchema = {
                RecordEncoding: string;

                RecordColumns: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordColumn[];

                RecordFormat: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordFormat;
            };

            export type CSVMappingParameters = {
                RecordRowDelimiter: string;

                RecordColumnDelimiter: string;
            };

            export type ApplicationName = string;

        }

        export namespace Application {

            export type CustomArtifactConfiguration = {
                MavenReference: AWS.KinesisAnalyticsV2.Application.MavenReference;

                S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

                ArtifactType: string;
            };

            export type S3ContentLocation = {
                BucketARN: string;

                FileKey: string;

                ObjectVersion: string;
            };

            export type DeployAsApplicationConfiguration = { S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentBaseLocation; };

            export type PropertyGroup = {
                PropertyMap: JSONString;

                PropertyGroupId: string;
            };

            export type MappingParameters = {
                JSONMappingParameters: AWS.KinesisAnalyticsV2.Application.JSONMappingParameters;

                CSVMappingParameters: AWS.KinesisAnalyticsV2.Application.CSVMappingParameters;
            };

            export type InputParallelism = { Count: number; };

            export type FlinkApplicationConfiguration = {
                CheckpointConfiguration: AWS.KinesisAnalyticsV2.Application.CheckpointConfiguration;

                ParallelismConfiguration: AWS.KinesisAnalyticsV2.Application.ParallelismConfiguration;

                MonitoringConfiguration: AWS.KinesisAnalyticsV2.Application.MonitoringConfiguration;
            };

            export type Input = {
                NamePrefix: string;

                InputSchema: AWS.KinesisAnalyticsV2.Application.InputSchema;

                KinesisStreamsInput: AWS.KinesisAnalyticsV2.Application.KinesisStreamsInput;

                KinesisFirehoseInput: AWS.KinesisAnalyticsV2.Application.KinesisFirehoseInput;

                InputProcessingConfiguration: AWS.KinesisAnalyticsV2.Application.InputProcessingConfiguration;

                InputParallelism: AWS.KinesisAnalyticsV2.Application.InputParallelism;
            };

            export type ApplicationSnapshotConfiguration = { SnapshotsEnabled: boolean; };

            export type KinesisFirehoseInput = { ResourceARN: string; };

            export type InputSchema = {
                RecordEncoding: string;

                RecordColumns: AWS.KinesisAnalyticsV2.Application.RecordColumn[];

                RecordFormat: AWS.KinesisAnalyticsV2.Application.RecordFormat;
            };

            export type ParallelismConfiguration = {
                ConfigurationType: string;

                ParallelismPerKPU: number;

                AutoScalingEnabled: boolean;

                Parallelism: number;
            };

            export type MonitoringConfiguration = {
                ConfigurationType: string;

                MetricsLevel: string;

                LogLevel: string;
            };

            export type CustomArtifactsConfiguration = AWS.KinesisAnalyticsV2.Application.CustomArtifactConfiguration[];

            export type SqlApplicationConfiguration = { Inputs: AWS.KinesisAnalyticsV2.Application.Input[]; };

            export type InputProcessingConfiguration = { InputLambdaProcessor: AWS.KinesisAnalyticsV2.Application.InputLambdaProcessor; };

            export type ApplicationCodeConfiguration = {
                CodeContentType: string;

                CodeContent: AWS.KinesisAnalyticsV2.Application.CodeContent;
            };

            export type ZeppelinApplicationConfiguration = {
                CatalogConfiguration: AWS.KinesisAnalyticsV2.Application.CatalogConfiguration;

                MonitoringConfiguration: AWS.KinesisAnalyticsV2.Application.ZeppelinMonitoringConfiguration;

                DeployAsApplicationConfiguration: AWS.KinesisAnalyticsV2.Application.DeployAsApplicationConfiguration;

                CustomArtifactsConfiguration: AWS.KinesisAnalyticsV2.Application.CustomArtifactsConfiguration;
            };

            export type MavenReference = {
                ArtifactId: string;

                Version: string;

                GroupId: string;
            };

            export type KinesisStreamsInput = { ResourceARN: string; };

            export type CheckpointConfiguration = {
                ConfigurationType: string;

                CheckpointInterval: number;

                MinPauseBetweenCheckpoints: number;

                CheckpointingEnabled: boolean;
            };

            export type ZeppelinMonitoringConfiguration = { LogLevel: string; };

            export type S3ContentBaseLocation = {
                BucketARN: string;

                BasePath: string;
            };

            export type InputLambdaProcessor = { ResourceARN: string; };

            export type RecordColumn = {
                Mapping: string;

                SqlType: string;

                Name: string;
            };

            export type CSVMappingParameters = {
                RecordRowDelimiter: string;

                RecordColumnDelimiter: string;
            };

            export type RecordFormat = {
                MappingParameters: AWS.KinesisAnalyticsV2.Application.MappingParameters;

                RecordFormatType: string;
            };

            export type GlueDataCatalogConfiguration = { DatabaseARN: string; };

            export type JSONMappingParameters = { RecordRowPath: string; };

            export type CodeContent = {
                ZipFileContent: string;

                S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

                TextContent: string;
            };

            export type ApplicationConfiguration = AWS.KinesisAnalyticsV2.Application.ApplicationConfiguration;

            export type EnvironmentProperties = { PropertyGroups: AWS.KinesisAnalyticsV2.Application.PropertyGroup[]; };

            export type CatalogConfiguration = { GlueDataCatalogConfiguration: AWS.KinesisAnalyticsV2.Application.GlueDataCatalogConfiguration; };

            export type ApplicationName = string;

            export type RuntimeEnvironment = string;

            export type ApplicationMode = string;

            export type ApplicationDescription = string;

            export type Tags = AWS.KinesisAnalyticsV2.Application.Tag[];

            export type ServiceExecutionRole = string;

        }

        export namespace ApplicationOutput {

            export type KinesisFirehoseOutput = { ResourceARN: string; };

            export type KinesisStreamsOutput = { ResourceARN: string; };

            export type DestinationSchema = { RecordFormatType: string; };

            export type Output = AWS.KinesisAnalyticsV2.ApplicationOutput.Output;

            export type LambdaOutput = { ResourceARN: string; };

            export type ApplicationName = string;

        }

        export namespace ApplicationCloudWatchLoggingOption {

            export type CloudWatchLoggingOption = AWS.KinesisAnalyticsV2.ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption;

            export type ApplicationName = string;

        }

    }

    export namespace Cognito {

        export namespace UserPool {

            export type PasswordPolicy = {
                RequireNumbers: boolean;

                MinimumLength: number;

                TemporaryPasswordValidityDays: number;

                RequireUppercase: boolean;

                RequireLowercase: boolean;

                RequireSymbols: boolean;
            };

            export type RecoveryOption = {
                Priority: number;

                Name: string;
            };

            export type AdminCreateUserConfig = AWS.Cognito.UserPool.AdminCreateUserConfig;

            export type SmsConfiguration = AWS.Cognito.UserPool.SmsConfiguration;

            export type StringAttributeConstraints = {
                MinLength: string;

                MaxLength: string;
            };

            export type VerificationMessageTemplate = AWS.Cognito.UserPool.VerificationMessageTemplate;

            export type LambdaConfig = AWS.Cognito.UserPool.LambdaConfig;

            export type InviteMessageTemplate = {
                EmailMessage: string;

                SMSMessage: string;

                EmailSubject: string;
            };

            export type EmailConfiguration = AWS.Cognito.UserPool.EmailConfiguration;

            export type SchemaAttribute = {
                DeveloperOnlyAttribute: boolean;

                Mutable: boolean;

                AttributeDataType: string;

                StringAttributeConstraints: AWS.Cognito.UserPool.StringAttributeConstraints;

                Required: boolean;

                NumberAttributeConstraints: AWS.Cognito.UserPool.NumberAttributeConstraints;

                Name: string;
            };

            export type NumberAttributeConstraints = {
                MinValue: string;

                MaxValue: string;
            };

            export type CustomSMSSender = {
                LambdaArn: string;

                LambdaVersion: string;
            };

            export type AccountRecoverySetting = AWS.Cognito.UserPool.AccountRecoverySetting;

            export type UserPoolAddOns = AWS.Cognito.UserPool.UserPoolAddOns;

            export type Policies = AWS.Cognito.UserPool.Policies;

            export type CustomEmailSender = {
                LambdaArn: string;

                LambdaVersion: string;
            };

            export type DeviceConfiguration = AWS.Cognito.UserPool.DeviceConfiguration;

            export type UsernameConfiguration = AWS.Cognito.UserPool.UsernameConfiguration;

            export type UserPoolTags = JSONString;

            export type MfaConfiguration = string;

            export type Schema = AWS.Cognito.UserPool.SchemaAttribute[];

            export type SmsAuthenticationMessage = string;

            export type UserPoolName = string;

            export type SmsVerificationMessage = string;

            export type AliasAttributes = string[];

            export type EnabledMfas = string[];

            export type EmailVerificationSubject = string;

            export type UsernameAttributes = string[];

            export type AutoVerifiedAttributes = string[];

            export type EmailVerificationMessage = string;

        }

        export namespace UserPoolResourceServer {

            export type ResourceServerScopeType = {
                ScopeName: string;

                ScopeDescription: string;
            };

            export type UserPoolId = string;

            export type Identifier = string;

            export type Scopes = AWS.Cognito.UserPoolResourceServer.ResourceServerScopeType[];

            export type Name = string;

        }

        export namespace UserPoolRiskConfigurationAttachment {

            export type AccountTakeoverActionsType = {
                HighAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

                LowAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

                MediumAction: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;
            };

            export type RiskExceptionConfigurationType = {
                BlockedIPRangeList: string[];

                SkippedIPRangeList: string[];
            };

            export type AccountTakeoverActionType = {
                Notify: boolean;

                EventAction: string;
            };

            export type CompromisedCredentialsRiskConfigurationType = {
                Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType;

                EventFilter: string[];
            };

            export type NotifyEmailType = {
                TextBody: string;

                HtmlBody: string;

                Subject: string;
            };

            export type CompromisedCredentialsActionsType = { EventAction: string; };

            export type NotifyConfigurationType = {
                BlockEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

                ReplyTo: string;

                SourceArn: string;

                NoActionEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

                From: string;

                MfaEmail: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;
            };

            export type AccountTakeoverRiskConfigurationType = {
                Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType;

                NotifyConfiguration: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyConfigurationType;
            };

            export type CompromisedCredentialsRiskConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType;

            export type UserPoolId = string;

            export type ClientId = string;

            export type AccountTakeoverRiskConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType;

            export type RiskExceptionConfiguration = AWS.Cognito.UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType;

        }

        export namespace IdentityPoolRoleAttachment {

            export type RoleMapping = {
                Type: string;

                AmbiguousRoleResolution: string;

                RulesConfiguration: AWS.Cognito.IdentityPoolRoleAttachment.RulesConfigurationType;

                IdentityProvider: string;
            };

            export type MappingRule = {
                MatchType: string;

                Value: string;

                Claim: string;

                RoleARN: string;
            };

            export type RulesConfigurationType = { Rules: AWS.Cognito.IdentityPoolRoleAttachment.MappingRule[]; };

            export type RoleMappings = JSONString;

            export type IdentityPoolId = string;

            export type Roles = JSONString;

        }

        export namespace IdentityPool {

            export type CognitoStreams = AWS.Cognito.IdentityPool.CognitoStreams;

            export type PushSync = AWS.Cognito.IdentityPool.PushSync;

            export type CognitoIdentityProvider = {
                ServerSideTokenCheck: boolean;

                ProviderName: string;

                ClientId: string;
            };

            export type CognitoIdentityProviders = AWS.Cognito.IdentityPool.CognitoIdentityProvider[];

            export type CognitoEvents = JSONString;

            export type DeveloperProviderName = string;

            export type IdentityPoolName = string;

            export type AllowUnauthenticatedIdentities = boolean;

            export type SupportedLoginProviders = JSONString;

            export type SamlProviderARNs = string[];

            export type OpenIdConnectProviderARNs = string[];

            export type AllowClassicFlow = boolean;

        }

        export namespace UserPoolUser {

            export type AttributeType = {
                Value: string;

                Name: string;
            };

            export type ValidationData = AWS.Cognito.UserPoolUser.AttributeType[];

            export type UserPoolId = string;

            export type Username = string;

            export type MessageAction = string;

            export type ClientMetadata = JSONString;

            export type DesiredDeliveryMediums = string[];

            export type ForceAliasCreation = boolean;

            export type UserAttributes = AWS.Cognito.UserPoolUser.AttributeType[];

        }

        export namespace UserPoolClient {

            export type TokenValidityUnits = AWS.Cognito.UserPoolClient.TokenValidityUnits;

            export type AnalyticsConfiguration = AWS.Cognito.UserPoolClient.AnalyticsConfiguration;

            export type GenerateSecret = boolean;

            export type CallbackURLs = string[];

            export type IdTokenValidity = number;

            export type AllowedOAuthScopes = string[];

            export type ReadAttributes = string[];

            export type AllowedOAuthFlowsUserPoolClient = boolean;

            export type DefaultRedirectURI = string;

            export type SupportedIdentityProviders = string[];

            export type ClientName = string;

            export type UserPoolId = string;

            export type AllowedOAuthFlows = string[];

            export type ExplicitAuthFlows = string[];

            export type LogoutURLs = string[];

            export type AccessTokenValidity = number;

            export type RefreshTokenValidity = number;

            export type WriteAttributes = string[];

            export type PreventUserExistenceErrors = string;

            export type EnableTokenRevocation = boolean;

        }

        export namespace UserPoolDomain {

            export type CustomDomainConfigType = { CertificateArn: string; };

            export type UserPoolId = string;

            export type CustomDomainConfig = AWS.Cognito.UserPoolDomain.CustomDomainConfigType;

            export type Domain = string;

        }

        export namespace UserPoolIdentityProvider {

            export type ProviderName = string;

            export type UserPoolId = string;

            export type AttributeMapping = JSONString;

            export type ProviderDetails = JSONString;

            export type ProviderType = string;

            export type IdpIdentifiers = string[];

        }

        export namespace UserPoolUserToGroupAttachment {

            export type GroupName = string;

            export type UserPoolId = string;

            export type Username = string;

        }

        export namespace UserPoolUICustomizationAttachment {

            export type CSS = string;

            export type UserPoolId = string;

            export type ClientId = string;

        }

        export namespace UserPoolGroup {

            export type GroupName = string;

            export type Description = string;

            export type UserPoolId = string;

            export type Precedence = number;

            export type RoleArn = string;

        }

    }

    export namespace ECS {

        export namespace ClusterCapacityProviderAssociations {

            export type CapacityProviderStrategy = {
                Base: number;

                Weight: number;

                CapacityProvider: string;
            };

            export type CapacityProviders = string[];

            export type Cluster = string;

            export type DefaultCapacityProviderStrategy = AWS.ECS.ClusterCapacityProviderAssociations.CapacityProviderStrategy[];

        }

        export namespace TaskDefinition {

            export type LogConfiguration = {
                LogDriver: string;

                Options: Record<string, string>;

                SecretOptions: AWS.ECS.TaskDefinition.Secret[];
            };

            export type FirelensConfiguration = {
                Type: string;

                Options: Record<string, string>;
            };

            export type Device = {
                ContainerPath: string;

                HostPath: string;

                Permissions: string[];
            };

            export type EFSVolumeConfiguration = {
                FilesystemId: string;

                RootDirectory: string;

                TransitEncryption: string;

                TransitEncryptionPort: number;

                AuthorizationConfig: AWS.ECS.TaskDefinition.AuthorizationConfig;
            };

            export type SystemControl = {
                Namespace: string;

                Value: string;
            };

            export type EphemeralStorage = AWS.ECS.TaskDefinition.EphemeralStorage;

            export type ResourceRequirement = {
                Type: string;

                Value: string;
            };

            export type DockerVolumeConfiguration = {
                Autoprovision: boolean;

                Driver: string;

                DriverOpts: Record<string, string>;

                Labels: Record<string, string>;

                Scope: string;
            };

            export type AuthorizationConfig = {
                IAM: string;

                AccessPointId: string;
            };

            export type MountPoint = {
                ContainerPath: string;

                ReadOnly: boolean;

                SourceVolume: string;
            };

            export type KernelCapabilities = {
                Add: string[];

                Drop: string[];
            };

            export type PortMapping = {
                ContainerPort: number;

                HostPort: number;

                Protocol: string;
            };

            export type Ulimit = {
                HardLimit: number;

                Name: string;

                SoftLimit: number;
            };

            export type ContainerDependency = {
                ContainerName: string;

                Condition: string;
            };

            export type HostVolumeProperties = { SourcePath: string; };

            export type RepositoryCredentials = { CredentialsParameter: string; };

            export type InferenceAccelerator = {
                DeviceName: string;

                DeviceType: string;
            };

            export type Secret = {
                Name: string;

                ValueFrom: string;
            };

            export type EnvironmentFile = {
                Value: string;

                Type: string;
            };

            export type VolumeFrom = {
                ReadOnly: boolean;

                SourceContainer: string;
            };

            export type HostEntry = {
                Hostname: string;

                IpAddress: string;
            };

            export type TaskDefinitionPlacementConstraint = {
                Type: string;

                Expression: string;
            };

            export type Volume = {
                DockerVolumeConfiguration: AWS.ECS.TaskDefinition.DockerVolumeConfiguration;

                EFSVolumeConfiguration: AWS.ECS.TaskDefinition.EFSVolumeConfiguration;

                Host: AWS.ECS.TaskDefinition.HostVolumeProperties;

                Name: string;
            };

            export type Tmpfs = {
                ContainerPath: string;

                MountOptions: string[];

                Size: number;
            };

            export type ContainerDefinition = {
                Command: string[];

                Cpu: number;

                DependsOn: AWS.ECS.TaskDefinition.ContainerDependency[];

                DisableNetworking: boolean;

                DnsSearchDomains: string[];

                DnsServers: string[];

                DockerLabels: Record<string, string>;

                DockerSecurityOptions: string[];

                EntryPoint: string[];

                Environment: AWS.ECS.TaskDefinition.KeyValuePair[];

                EnvironmentFiles: AWS.ECS.TaskDefinition.EnvironmentFile[];

                Essential: boolean;

                ExtraHosts: AWS.ECS.TaskDefinition.HostEntry[];

                FirelensConfiguration: AWS.ECS.TaskDefinition.FirelensConfiguration;

                HealthCheck: AWS.ECS.TaskDefinition.HealthCheck;

                Hostname: string;

                Image: string;

                Links: string[];

                LinuxParameters: AWS.ECS.TaskDefinition.LinuxParameters;

                LogConfiguration: AWS.ECS.TaskDefinition.LogConfiguration;

                Memory: number;

                MemoryReservation: number;

                MountPoints: AWS.ECS.TaskDefinition.MountPoint[];

                Name: string;

                PortMappings: AWS.ECS.TaskDefinition.PortMapping[];

                Privileged: boolean;

                ReadonlyRootFilesystem: boolean;

                RepositoryCredentials: AWS.ECS.TaskDefinition.RepositoryCredentials;

                ResourceRequirements: AWS.ECS.TaskDefinition.ResourceRequirement[];

                Secrets: AWS.ECS.TaskDefinition.Secret[];

                StartTimeout: number;

                StopTimeout: number;

                Ulimits: AWS.ECS.TaskDefinition.Ulimit[];

                User: string;

                VolumesFrom: AWS.ECS.TaskDefinition.VolumeFrom[];

                WorkingDirectory: string;

                Interactive: boolean;

                PseudoTerminal: boolean;

                SystemControls: AWS.ECS.TaskDefinition.SystemControl[];
            };

            export type KeyValuePair = {
                Name: string;

                Value: string;
            };

            export type HealthCheck = {
                Command: string[];

                Interval: number;

                Timeout: number;

                Retries: number;

                StartPeriod: number;
            };

            export type LinuxParameters = {
                Capabilities: AWS.ECS.TaskDefinition.KernelCapabilities;

                Devices: AWS.ECS.TaskDefinition.Device[];

                InitProcessEnabled: boolean;

                MaxSwap: number;

                SharedMemorySize: number;

                Swappiness: number;

                Tmpfs: AWS.ECS.TaskDefinition.Tmpfs[];
            };

            export type ProxyConfiguration = AWS.ECS.TaskDefinition.ProxyConfiguration;

            export type Family = string;

            export type ContainerDefinitions = AWS.ECS.TaskDefinition.ContainerDefinition[];

            export type Cpu = string;

            export type ExecutionRoleArn = string;

            export type InferenceAccelerators = AWS.ECS.TaskDefinition.InferenceAccelerator[];

            export type Memory = string;

            export type NetworkMode = string;

            export type PlacementConstraints = AWS.ECS.TaskDefinition.TaskDefinitionPlacementConstraint[];

            export type RequiresCompatibilities = string[];

            export type TaskRoleArn = string;

            export type Volumes = AWS.ECS.TaskDefinition.Volume[];

            export type PidMode = string;

            export type IpcMode = string;

            export type Tags = AWS.ECS.TaskDefinition.Tag[];

        }

        export namespace Service {

            export type PlacementStrategy = {
                Field: string;

                Type: string;
            };

            export type DeploymentController = AWS.ECS.Service.DeploymentController;

            export type PlacementConstraint = {
                Expression: string;

                Type: string;
            };

            export type LoadBalancer = {
                ContainerName: string;

                ContainerPort: number;

                LoadBalancerName: string;

                TargetGroupArn: string;
            };

            export type DeploymentConfiguration = AWS.ECS.Service.DeploymentConfiguration;

            export type AwsVpcConfiguration = {
                AssignPublicIp: string;

                SecurityGroups: string[];

                Subnets: string[];
            };

            export type NetworkConfiguration = AWS.ECS.Service.NetworkConfiguration;

            export type CapacityProviderStrategyItem = {
                Base: number;

                CapacityProvider: string;

                Weight: number;
            };

            export type DeploymentCircuitBreaker = {
                Enable: boolean;

                Rollback: boolean;
            };

            export type ServiceRegistry = {
                ContainerName: string;

                ContainerPort: number;

                Port: number;

                RegistryArn: string;
            };

            export type CapacityProviderStrategy = AWS.ECS.Service.CapacityProviderStrategyItem[];

            export type Cluster = string;

            export type DesiredCount = number;

            export type EnableECSManagedTags = boolean;

            export type EnableExecuteCommand = boolean;

            export type HealthCheckGracePeriodSeconds = number;

            export type LaunchType = string;

            export type LoadBalancers = AWS.ECS.Service.LoadBalancer[];

            export type PlacementConstraints = AWS.ECS.Service.PlacementConstraint[];

            export type PlacementStrategies = AWS.ECS.Service.PlacementStrategy[];

            export type PlatformVersion = string;

            export type PropagateTags = string;

            export type Role = string;

            export type SchedulingStrategy = string;

            export type ServiceName = string;

            export type ServiceRegistries = AWS.ECS.Service.ServiceRegistry[];

            export type Tags = AWS.ECS.Service.Tag[];

            export type TaskDefinition = string;

        }

        export namespace TaskSet {

            export type NetworkConfiguration = AWS.ECS.TaskSet.NetworkConfiguration;

            export type ServiceRegistry = {
                ContainerName: string;

                ContainerPort: number;

                Port: number;

                RegistryArn: string;
            };

            export type LoadBalancer = {
                ContainerName: string;

                ContainerPort: number;

                LoadBalancerName: string;

                TargetGroupArn: string;
            };

            export type AwsVpcConfiguration = {
                AssignPublicIp: string;

                SecurityGroups: string[];

                Subnets: string[];
            };

            export type Scale = AWS.ECS.TaskSet.Scale;

            export type Cluster = string;

            export type ExternalId = string;

            export type LaunchType = string;

            export type LoadBalancers = AWS.ECS.TaskSet.LoadBalancer[];

            export type PlatformVersion = string;

            export type Service = string;

            export type ServiceRegistries = AWS.ECS.TaskSet.ServiceRegistry[];

            export type TaskDefinition = string;

        }

        export namespace Cluster {

            export type ClusterSettings = AWS.ECS.Cluster.ClusterSettings[];

            export type ExecuteCommandLogConfiguration = {
                CloudWatchLogGroupName: string;

                CloudWatchEncryptionEnabled: boolean;

                S3BucketName: string;

                S3EncryptionEnabled: boolean;

                S3KeyPrefix: string;
            };

            export type ExecuteCommandConfiguration = {
                KmsKeyId: string;

                Logging: string;

                LogConfiguration: AWS.ECS.Cluster.ExecuteCommandLogConfiguration;
            };

            export type ClusterConfiguration = { ExecuteCommandConfiguration: AWS.ECS.Cluster.ExecuteCommandConfiguration; };

            export type CapacityProviderStrategyItem = {
                CapacityProvider: string;

                Weight: number;

                Base: number;
            };

            export type Tags = AWS.ECS.Cluster.Tag[];

            export type ClusterName = string;

            export type Configuration = AWS.ECS.Cluster.ClusterConfiguration;

            export type CapacityProviders = string[];

            export type DefaultCapacityProviderStrategy = AWS.ECS.Cluster.CapacityProviderStrategyItem[];

        }

        export namespace CapacityProvider {

            export type AutoScalingGroupProvider = AWS.ECS.CapacityProvider.AutoScalingGroupProvider;

            export type ManagedScaling = {
                MinimumScalingStepSize: number;

                MaximumScalingStepSize: number;

                Status: string;

                TargetCapacity: number;

                InstanceWarmupPeriod: number;
            };

            export type Name = string;

            export type Tags = AWS.ECS.CapacityProvider.Tag[];

        }

        export namespace PrimaryTaskSet {

            export type Cluster = string;

            export type TaskSetId = string;

            export type Service = string;

        }

    }

    export namespace KinesisAnalytics {

        export namespace ApplicationOutput {

            export type KinesisFirehoseOutput = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type KinesisStreamsOutput = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type LambdaOutput = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type Output = AWS.KinesisAnalytics.ApplicationOutput.Output;

            export type DestinationSchema = { RecordFormatType: string; };

            export type ApplicationName = string;

        }

        export namespace Application {

            export type CSVMappingParameters = {
                RecordRowDelimiter: string;

                RecordColumnDelimiter: string;
            };

            export type Input = {
                NamePrefix: string;

                InputSchema: AWS.KinesisAnalytics.Application.InputSchema;

                KinesisStreamsInput: AWS.KinesisAnalytics.Application.KinesisStreamsInput;

                KinesisFirehoseInput: AWS.KinesisAnalytics.Application.KinesisFirehoseInput;

                InputProcessingConfiguration: AWS.KinesisAnalytics.Application.InputProcessingConfiguration;

                InputParallelism: AWS.KinesisAnalytics.Application.InputParallelism;
            };

            export type JSONMappingParameters = { RecordRowPath: string; };

            export type KinesisStreamsInput = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type RecordColumn = {
                Mapping: string;

                SqlType: string;

                Name: string;
            };

            export type KinesisFirehoseInput = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type InputParallelism = { Count: number; };

            export type InputSchema = {
                RecordEncoding: string;

                RecordColumns: AWS.KinesisAnalytics.Application.RecordColumn[];

                RecordFormat: AWS.KinesisAnalytics.Application.RecordFormat;
            };

            export type MappingParameters = {
                JSONMappingParameters: AWS.KinesisAnalytics.Application.JSONMappingParameters;

                CSVMappingParameters: AWS.KinesisAnalytics.Application.CSVMappingParameters;
            };

            export type RecordFormat = {
                MappingParameters: AWS.KinesisAnalytics.Application.MappingParameters;

                RecordFormatType: string;
            };

            export type InputProcessingConfiguration = { InputLambdaProcessor: AWS.KinesisAnalytics.Application.InputLambdaProcessor; };

            export type InputLambdaProcessor = {
                ResourceARN: string;

                RoleARN: string;
            };

            export type ApplicationName = string;

            export type Inputs = AWS.KinesisAnalytics.Application.Input[];

            export type ApplicationDescription = string;

            export type ApplicationCode = string;

        }

        export namespace ApplicationReferenceDataSource {

            export type RecordFormat = {
                MappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.MappingParameters;

                RecordFormatType: string;
            };

            export type CSVMappingParameters = {
                RecordRowDelimiter: string;

                RecordColumnDelimiter: string;
            };

            export type S3ReferenceDataSource = {
                BucketARN: string;

                FileKey: string;

                ReferenceRoleARN: string;
            };

            export type RecordColumn = {
                Mapping: string;

                SqlType: string;

                Name: string;
            };

            export type ReferenceSchema = {
                RecordEncoding: string;

                RecordColumns: AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordColumn[];

                RecordFormat: AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordFormat;
            };

            export type MappingParameters = {
                JSONMappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.JSONMappingParameters;

                CSVMappingParameters: AWS.KinesisAnalytics.ApplicationReferenceDataSource.CSVMappingParameters;
            };

            export type JSONMappingParameters = { RecordRowPath: string; };

            export type ReferenceDataSource = AWS.KinesisAnalytics.ApplicationReferenceDataSource.ReferenceDataSource;

            export type ApplicationName = string;

        }

    }

    export namespace Config {

        export namespace ConfigurationAggregator {

            export type OrganizationAggregationSource = AWS.Config.ConfigurationAggregator.OrganizationAggregationSource;

            export type AccountAggregationSource = {
                AllAwsRegions: boolean;

                AwsRegions: string[];

                AccountIds: string[];
            };

            export type AccountAggregationSources = AWS.Config.ConfigurationAggregator.AccountAggregationSource[];

            export type ConfigurationAggregatorName = string;

            export type Tags = AWS.Config.ConfigurationAggregator.Tag[];

        }

        export namespace DeliveryChannel {

            export type ConfigSnapshotDeliveryProperties = AWS.Config.DeliveryChannel.ConfigSnapshotDeliveryProperties;

            export type Name = string;

            export type S3BucketName = string;

            export type S3KeyPrefix = string;

            export type S3KmsKeyArn = string;

            export type SnsTopicARN = string;

        }

        export namespace ConfigurationRecorder {

            export type RecordingGroup = AWS.Config.ConfigurationRecorder.RecordingGroup;

            export type Name = string;

            export type RoleARN = string;

        }

        export namespace RemediationConfiguration {

            export type ResourceValue = { Value: string; };

            export type RemediationParameterValue = {
                ResourceValue: AWS.Config.RemediationConfiguration.ResourceValue;

                StaticValue: AWS.Config.RemediationConfiguration.StaticValue;
            };

            export type SsmControls = {
                ErrorPercentage: number;

                ConcurrentExecutionRatePercentage: number;
            };

            export type StaticValue = { Values: string[]; };

            export type ExecutionControls = AWS.Config.RemediationConfiguration.ExecutionControls;

            export type TargetVersion = string;

            export type Parameters = JSONString;

            export type TargetType = string;

            export type ConfigRuleName = string;

            export type ResourceType = string;

            export type RetryAttemptSeconds = number;

            export type MaximumAutomaticAttempts = number;

            export type TargetId = string;

            export type Automatic = boolean;

        }

        export namespace ConformancePack {

            export type ConformancePackInputParameter = {
                ParameterName: string;

                ParameterValue: string;
            };

            export type ConformancePackName = string;

            export type DeliveryS3Bucket = string;

            export type DeliveryS3KeyPrefix = string;

            export type TemplateBody = string;

            export type TemplateS3Uri = string;

            export type ConformancePackInputParameters = AWS.Config.ConformancePack.ConformancePackInputParameter[];

        }

        export namespace ConfigRule {

            export type Source = AWS.Config.ConfigRule.Source;

            export type Scope = AWS.Config.ConfigRule.Scope;

            export type SourceDetail = {
                EventSource: string;

                MaximumExecutionFrequency: string;

                MessageType: string;
            };

            export type ConfigRuleName = string;

            export type Description = string;

            export type InputParameters = JSONString;

            export type MaximumExecutionFrequency = string;

        }

        export namespace OrganizationConformancePack {

            export type ConformancePackInputParameter = {
                ParameterName: string;

                ParameterValue: string;
            };

            export type OrganizationConformancePackName = string;

            export type TemplateS3Uri = string;

            export type TemplateBody = string;

            export type DeliveryS3Bucket = string;

            export type DeliveryS3KeyPrefix = string;

            export type ConformancePackInputParameters = AWS.Config.OrganizationConformancePack.ConformancePackInputParameter[];

            export type ExcludedAccounts = string[];

        }

        export namespace OrganizationConfigRule {

            export type OrganizationManagedRuleMetadata = AWS.Config.OrganizationConfigRule.OrganizationManagedRuleMetadata;

            export type OrganizationCustomRuleMetadata = AWS.Config.OrganizationConfigRule.OrganizationCustomRuleMetadata;

            export type OrganizationConfigRuleName = string;

            export type ExcludedAccounts = string[];

        }

        export namespace StoredQuery {

            export type QueryName = string;

            export type QueryDescription = string;

            export type QueryExpression = string;

            export type Tags = AWS.Config.StoredQuery.Tag[];

        }

        export namespace AggregationAuthorization {

            export type AuthorizedAccountId = string;

            export type AuthorizedAwsRegion = string;

            export type Tags = AWS.Config.AggregationAuthorization.Tag[];

        }

    }

    export namespace OpsWorks {

        export namespace Layer {

            export type ShutdownEventConfiguration = {
                DelayUntilElbConnectionsDrained: boolean;

                ExecutionTimeout: number;
            };

            export type VolumeConfiguration = {
                Encrypted: boolean;

                Iops: number;

                MountPoint: string;

                NumberOfDisks: number;

                RaidLevel: number;

                Size: number;

                VolumeType: string;
            };

            export type Recipes = {
                Configure: string[];

                Deploy: string[];

                Setup: string[];

                Shutdown: string[];

                Undeploy: string[];
            };

            export type LifecycleEventConfiguration = AWS.OpsWorks.Layer.LifecycleEventConfiguration;

            export type LoadBasedAutoScaling = AWS.OpsWorks.Layer.LoadBasedAutoScaling;

            export type AutoScalingThresholds = {
                CpuThreshold: number;

                IgnoreMetricsTime: number;

                InstanceCount: number;

                LoadThreshold: number;

                MemoryThreshold: number;

                ThresholdsWaitTime: number;
            };

            export type Attributes = Record<string, string>;

            export type AutoAssignElasticIps = boolean;

            export type AutoAssignPublicIps = boolean;

            export type CustomInstanceProfileArn = string;

            export type CustomJson = JSONString;

            export type CustomRecipes = AWS.OpsWorks.Layer.Recipes;

            export type CustomSecurityGroupIds = string[];

            export type EnableAutoHealing = boolean;

            export type InstallUpdatesOnBoot = boolean;

            export type Name = string;

            export type Packages = string[];

            export type Shortname = string;

            export type StackId = string;

            export type Tags = AWS.OpsWorks.Layer.Tag[];

            export type Type = string;

            export type UseEbsOptimizedInstances = boolean;

            export type VolumeConfigurations = AWS.OpsWorks.Layer.VolumeConfiguration[];

        }

        export namespace App {

            export type DataSource = {
                Arn: string;

                DatabaseName: string;

                Type: string;
            };

            export type SslConfiguration = AWS.OpsWorks.App.SslConfiguration;

            export type EnvironmentVariable = {
                Key: string;

                Secure: boolean;

                Value: string;
            };

            export type Source = {
                Password: string;

                Revision: string;

                SshKey: string;

                Type: string;

                Url: string;

                Username: string;
            };

            export type AppSource = AWS.OpsWorks.App.Source;

            export type Attributes = Record<string, string>;

            export type DataSources = AWS.OpsWorks.App.DataSource[];

            export type Description = string;

            export type Domains = string[];

            export type EnableSsl = boolean;

            export type Environment = AWS.OpsWorks.App.EnvironmentVariable[];

            export type Name = string;

            export type Shortname = string;

            export type StackId = string;

            export type Type = string;

        }

        export namespace Instance {

            export type BlockDeviceMapping = {
                DeviceName: string;

                Ebs: AWS.OpsWorks.Instance.EbsBlockDevice;

                NoDevice: string;

                VirtualName: string;
            };

            export type TimeBasedAutoScaling = AWS.OpsWorks.Instance.TimeBasedAutoScaling;

            export type EbsBlockDevice = {
                DeleteOnTermination: boolean;

                Iops: number;

                SnapshotId: string;

                VolumeSize: number;

                VolumeType: string;
            };

            export type AgentVersion = string;

            export type AmiId = string;

            export type Architecture = string;

            export type AutoScalingType = string;

            export type AvailabilityZone = string;

            export type BlockDeviceMappings = AWS.OpsWorks.Instance.BlockDeviceMapping[];

            export type EbsOptimized = boolean;

            export type ElasticIps = string[];

            export type Hostname = string;

            export type InstallUpdatesOnBoot = boolean;

            export type InstanceType = string;

            export type LayerIds = string[];

            export type Os = string;

            export type RootDeviceType = string;

            export type SshKeyName = string;

            export type StackId = string;

            export type SubnetId = string;

            export type Tenancy = string;

            export type VirtualizationType = string;

            export type Volumes = string[];

        }

        export namespace Stack {

            export type StackConfigurationManager = {
                Name: string;

                Version: string;
            };

            export type RdsDbInstance = {
                DbPassword: string;

                DbUser: string;

                RdsDbInstanceArn: string;
            };

            export type Source = {
                Password: string;

                Revision: string;

                SshKey: string;

                Type: string;

                Url: string;

                Username: string;
            };

            export type ChefConfiguration = AWS.OpsWorks.Stack.ChefConfiguration;

            export type ElasticIp = {
                Ip: string;

                Name: string;
            };

            export type AgentVersion = string;

            export type Attributes = Record<string, string>;

            export type CloneAppIds = string[];

            export type ClonePermissions = boolean;

            export type ConfigurationManager = AWS.OpsWorks.Stack.StackConfigurationManager;

            export type CustomCookbooksSource = AWS.OpsWorks.Stack.Source;

            export type CustomJson = JSONString;

            export type DefaultAvailabilityZone = string;

            export type DefaultInstanceProfileArn = string;

            export type DefaultOs = string;

            export type DefaultRootDeviceType = string;

            export type DefaultSshKeyName = string;

            export type DefaultSubnetId = string;

            export type EcsClusterArn = string;

            export type ElasticIps = AWS.OpsWorks.Stack.ElasticIp[];

            export type HostnameTheme = string;

            export type Name = string;

            export type RdsDbInstances = AWS.OpsWorks.Stack.RdsDbInstance[];

            export type ServiceRoleArn = string;

            export type SourceStackId = string;

            export type Tags = AWS.OpsWorks.Stack.Tag[];

            export type UseCustomCookbooks = boolean;

            export type UseOpsworksSecurityGroups = boolean;

            export type VpcId = string;

        }

        export namespace UserProfile {

            export type AllowSelfManagement = boolean;

            export type IamUserArn = string;

            export type SshPublicKey = string;

            export type SshUsername = string;

        }

        export namespace Volume {

            export type Ec2VolumeId = string;

            export type MountPoint = string;

            export type Name = string;

            export type StackId = string;

        }

        export namespace ElasticLoadBalancerAttachment {

            export type ElasticLoadBalancerName = string;

            export type LayerId = string;

        }

    }

    export namespace CodeDeploy {

        export namespace DeploymentConfig {

            export type TimeBasedCanary = {
                CanaryInterval: number;

                CanaryPercentage: number;
            };

            export type MinimumHealthyHosts = AWS.CodeDeploy.DeploymentConfig.MinimumHealthyHosts;

            export type TrafficRoutingConfig = AWS.CodeDeploy.DeploymentConfig.TrafficRoutingConfig;

            export type TimeBasedLinear = {
                LinearInterval: number;

                LinearPercentage: number;
            };

            export type ComputePlatform = string;

            export type DeploymentConfigName = string;

        }

        export namespace DeploymentGroup {

            export type TargetGroupInfo = { Name: string; };

            export type OnPremisesTagSetListObject = { OnPremisesTagGroup: AWS.CodeDeploy.DeploymentGroup.TagFilter[]; };

            export type DeploymentStyle = AWS.CodeDeploy.DeploymentGroup.DeploymentStyle;

            export type EC2TagFilter = {
                Key: string;

                Type: string;

                Value: string;
            };

            export type OnPremisesTagSet = AWS.CodeDeploy.DeploymentGroup.OnPremisesTagSet;

            export type LoadBalancerInfo = AWS.CodeDeploy.DeploymentGroup.LoadBalancerInfo;

            export type RevisionLocation = {
                GitHubLocation: AWS.CodeDeploy.DeploymentGroup.GitHubLocation;

                RevisionType: string;

                S3Location: AWS.CodeDeploy.DeploymentGroup.S3Location;
            };

            export type TriggerConfig = {
                TriggerEvents: string[];

                TriggerName: string;

                TriggerTargetArn: string;
            };

            export type EC2TagSet = { Ec2TagSetList: AWS.CodeDeploy.DeploymentGroup.EC2TagSetListObject[]; };

            export type AlarmConfiguration = AWS.CodeDeploy.DeploymentGroup.AlarmConfiguration;

            export type BlueGreenDeploymentConfiguration = AWS.CodeDeploy.DeploymentGroup.BlueGreenDeploymentConfiguration;

            export type DeploymentReadyOption = {
                ActionOnTimeout: string;

                WaitTimeInMinutes: number;
            };

            export type AutoRollbackConfiguration = AWS.CodeDeploy.DeploymentGroup.AutoRollbackConfiguration;

            export type S3Location = {
                Bucket: string;

                BundleType: string;

                ETag: string;

                Key: string;

                Version: string;
            };

            export type BlueInstanceTerminationOption = {
                Action: string;

                TerminationWaitTimeInMinutes: number;
            };

            export type TagFilter = {
                Key: string;

                Type: string;

                Value: string;
            };

            export type GitHubLocation = {
                CommitId: string;

                Repository: string;
            };

            export type ELBInfo = { Name: string; };

            export type Alarm = { Name: string; };

            export type GreenFleetProvisioningOption = { Action: string; };

            export type Deployment = AWS.CodeDeploy.DeploymentGroup.Deployment;

            export type ECSService = {
                ClusterName: string;

                ServiceName: string;
            };

            export type EC2TagSetListObject = { Ec2TagGroup: AWS.CodeDeploy.DeploymentGroup.EC2TagFilter[]; };

            export type ApplicationName = string;

            export type AutoScalingGroups = string[];

            export type DeploymentConfigName = string;

            export type DeploymentGroupName = string;

            export type ECSServices = AWS.CodeDeploy.DeploymentGroup.ECSService[];

            export type Ec2TagFilters = AWS.CodeDeploy.DeploymentGroup.EC2TagFilter[];

            export type Ec2TagSet = AWS.CodeDeploy.DeploymentGroup.EC2TagSet;

            export type OnPremisesInstanceTagFilters = AWS.CodeDeploy.DeploymentGroup.TagFilter[];

            export type ServiceRoleArn = string;

            export type TriggerConfigurations = AWS.CodeDeploy.DeploymentGroup.TriggerConfig[];

        }

        export namespace Application {

            export type ApplicationName = string;

            export type ComputePlatform = string;

            export type Tags = AWS.CodeDeploy.Application.Tag[];

        }

    }

    export namespace Batch {

        export namespace JobDefinition {

            export type Volumes = {
                Host: AWS.Batch.JobDefinition.VolumesHost;

                EfsVolumeConfiguration: AWS.Batch.JobDefinition.EfsVolumeConfiguration;

                Name: string;
            };

            export type AuthorizationConfig = {
                Iam: string;

                AccessPointId: string;
            };

            export type ResourceRequirement = {
                Type: string;

                Value: string;
            };

            export type Environment = {
                Value: string;

                Name: string;
            };

            export type VolumesHost = { SourcePath: string; };

            export type NodeProperties = AWS.Batch.JobDefinition.NodeProperties;

            export type RetryStrategy = AWS.Batch.JobDefinition.RetryStrategy;

            export type Secret = {
                ValueFrom: string;

                Name: string;
            };

            export type NetworkConfiguration = { AssignPublicIp: string; };

            export type LogConfiguration = {
                SecretOptions: AWS.Batch.JobDefinition.Secret[];

                Options: JSONString;

                LogDriver: string;
            };

            export type ContainerProperties = AWS.Batch.JobDefinition.ContainerProperties;

            export type MountPoints = {
                ReadOnly: boolean;

                SourceVolume: string;

                ContainerPath: string;
            };

            export type EvaluateOnExit = {
                Action: string;

                OnExitCode: string;

                OnReason: string;

                OnStatusReason: string;
            };

            export type Ulimit = {
                SoftLimit: number;

                HardLimit: number;

                Name: string;
            };

            export type LinuxParameters = {
                Swappiness: number;

                Tmpfs: AWS.Batch.JobDefinition.Tmpfs[];

                SharedMemorySize: number;

                Devices: AWS.Batch.JobDefinition.Device[];

                InitProcessEnabled: boolean;

                MaxSwap: number;
            };

            export type FargatePlatformConfiguration = { PlatformVersion: string; };

            export type Timeout = AWS.Batch.JobDefinition.Timeout;

            export type Tmpfs = {
                Size: number;

                ContainerPath: string;

                MountOptions: string[];
            };

            export type NodeRangeProperty = {
                Container: AWS.Batch.JobDefinition.ContainerProperties;

                TargetNodes: string;
            };

            export type EfsVolumeConfiguration = {
                TransitEncryption: string;

                AuthorizationConfig: AWS.Batch.JobDefinition.AuthorizationConfig;

                FileSystemId: string;

                RootDirectory: string;

                TransitEncryptionPort: number;
            };

            export type Device = {
                HostPath: string;

                Permissions: string[];

                ContainerPath: string;
            };

            export type Type = string;

            export type Parameters = JSONString;

            export type JobDefinitionName = string;

            export type PropagateTags = boolean;

            export type PlatformCapabilities = string[];

            export type Tags = JSONString;

        }

        export namespace ComputeEnvironment {

            export type ComputeResources = AWS.Batch.ComputeEnvironment.ComputeResources;

            export type LaunchTemplateSpecification = {
                LaunchTemplateName: string;

                Version: string;

                LaunchTemplateId: string;
            };

            export type Ec2ConfigurationObject = {
                ImageIdOverride: string;

                ImageType: string;
            };

            export type Type = string;

            export type ServiceRole = string;

            export type ComputeEnvironmentName = string;

            export type State = string;

            export type Tags = JSONString;

        }

        export namespace JobQueue {

            export type ComputeEnvironmentOrder = AWS.Batch.JobQueue.ComputeEnvironmentOrder[];

            export type Priority = number;

            export type State = string;

            export type JobQueueName = string;

            export type Tags = JSONString;

        }

    }

    export namespace DataBrew {

        export namespace Dataset {

            export type FilterExpression = {
                Expression: string;

                ValuesMap: AWS.DataBrew.Dataset.FilterValue[];
            };

            export type PathParameter = {
                PathParameterName: string;

                DatasetParameter: AWS.DataBrew.Dataset.DatasetParameter;
            };

            export type DatabaseInputDefinition = {
                GlueConnectionName: string;

                DatabaseTableName: string;

                TempDirectory: AWS.DataBrew.Dataset.S3Location;
            };

            export type PathOptions = AWS.DataBrew.Dataset.PathOptions;

            export type DatasetParameter = {
                Name: string;

                Type: string;

                DatetimeOptions: AWS.DataBrew.Dataset.DatetimeOptions;

                CreateColumn: boolean;

                Filter: AWS.DataBrew.Dataset.FilterExpression;
            };

            export type FilesLimit = {
                MaxFiles: number;

                OrderedBy: string;

                Order: string;
            };

            export type CsvOptions = {
                Delimiter: string;

                HeaderRow: boolean;
            };

            export type FormatOptions = AWS.DataBrew.Dataset.FormatOptions;

            export type ExcelOptions = {
                SheetNames: string[];

                SheetIndexes: number[];

                HeaderRow: boolean;
            };

            export type JsonOptions = { MultiLine: boolean; };

            export type Input = AWS.DataBrew.Dataset.Input;

            export type FilterValue = {
                ValueReference: string;

                Value: string;
            };

            export type DataCatalogInputDefinition = {
                CatalogId: string;

                DatabaseName: string;

                TableName: string;

                TempDirectory: AWS.DataBrew.Dataset.S3Location;
            };

            export type DatetimeOptions = {
                Format: string;

                TimezoneOffset: string;

                LocaleCode: string;
            };

            export type S3Location = {
                Bucket: string;

                Key: string;
            };

            export type Name = string;

            export type Format = string;

            export type Tags = AWS.DataBrew.Dataset.Tag[];

        }

        export namespace Recipe {

            export type RecipeStep = {
                Action: AWS.DataBrew.Recipe.Action;

                ConditionExpressions: AWS.DataBrew.Recipe.ConditionExpression[];
            };

            export type SecondaryInput = {
                S3InputDefinition: AWS.DataBrew.Recipe.S3Location;

                DataCatalogInputDefinition: AWS.DataBrew.Recipe.DataCatalogInputDefinition;
            };

            export type Action = {
                Operation: string;

                Parameters: AWS.DataBrew.Recipe.ParameterMap;
            };

            export type RecipeParameters = {
                AggregateFunction: string;

                Base: string;

                CaseStatement: string;

                CategoryMap: string;

                CharsToRemove: string;

                CollapseConsecutiveWhitespace: string;

                ColumnDataType: string;

                ColumnRange: string;

                Count: string;

                CustomCharacters: string;

                CustomStopWords: string;

                CustomValue: string;

                DatasetsColumns: string;

                DateAddValue: string;

                DateTimeFormat: string;

                DateTimeParameters: string;

                DeleteOtherRows: string;

                Delimiter: string;

                EndPattern: string;

                EndPosition: string;

                EndValue: string;

                ExpandContractions: string;

                Exponent: string;

                FalseString: string;

                GroupByAggFunctionOptions: string;

                GroupByColumns: string;

                HiddenColumns: string;

                IgnoreCase: string;

                IncludeInSplit: string;

                Interval: string;

                IsText: string;

                JoinKeys: string;

                JoinType: string;

                LeftColumns: string;

                Limit: string;

                LowerBound: string;

                MapType: string;

                ModeType: string;

                MultiLine: boolean;

                NumRows: string;

                NumRowsAfter: string;

                NumRowsBefore: string;

                OrderByColumn: string;

                OrderByColumns: string;

                Other: string;

                Pattern: string;

                PatternOption1: string;

                PatternOption2: string;

                PatternOptions: string;

                Period: string;

                Position: string;

                RemoveAllPunctuation: string;

                RemoveAllQuotes: string;

                RemoveAllWhitespace: string;

                RemoveCustomCharacters: string;

                RemoveCustomValue: string;

                RemoveLeadingAndTrailingPunctuation: string;

                RemoveLeadingAndTrailingQuotes: string;

                RemoveLeadingAndTrailingWhitespace: string;

                RemoveLetters: string;

                RemoveNumbers: string;

                RemoveSourceColumn: string;

                RemoveSpecialCharacters: string;

                RightColumns: string;

                SampleSize: string;

                SampleType: string;

                SecondInput: string;

                SecondaryInputs: AWS.DataBrew.Recipe.SecondaryInput[];

                SourceColumn: string;

                SourceColumn1: string;

                SourceColumn2: string;

                SourceColumns: string;

                StartColumnIndex: string;

                StartPattern: string;

                StartPosition: string;

                StartValue: string;

                StemmingMode: string;

                StepCount: string;

                StepIndex: string;

                StopWordsMode: string;

                Strategy: string;

                SheetNames: string[];

                SheetIndexes: number[];

                TargetColumn: string;

                TargetColumnNames: string;

                TargetDateFormat: string;

                TargetIndex: string;

                TimeZone: string;

                TokenizerPattern: string;

                TrueString: string;

                UdfLang: string;

                Units: string;

                UnpivotColumn: string;

                UpperBound: string;

                UseNewDataFrame: string;

                Value: string;

                Value1: string;

                Value2: string;

                ValueColumn: string;

                ViewFrame: string;

                Input: JSONString;
            };

            export type S3Location = {
                Bucket: string;

                Key: string;
            };

            export type ParameterMap = any;

            export type ConditionExpression = {
                Condition: string;

                Value: string;

                TargetColumn: string;
            };

            export type DataCatalogInputDefinition = {
                CatalogId: string;

                DatabaseName: string;

                TableName: string;

                TempDirectory: AWS.DataBrew.Recipe.S3Location;
            };

            export type Description = string;

            export type Name = string;

            export type Steps = AWS.DataBrew.Recipe.RecipeStep[];

            export type Tags = AWS.DataBrew.Recipe.Tag[];

        }

        export namespace Job {

            export type DataCatalogOutput = {
                CatalogId: string;

                DatabaseName: string;

                TableName: string;

                S3Options: AWS.DataBrew.Job.S3TableOutputOptions;

                DatabaseOptions: AWS.DataBrew.Job.DatabaseTableOutputOptions;

                Overwrite: boolean;
            };

            export type S3Location = {
                Bucket: string;

                Key: string;
            };

            export type OutputFormatOptions = { Csv: AWS.DataBrew.Job.CsvOutputOptions; };

            export type CsvOutputOptions = { Delimiter: string; };

            export type Recipe = AWS.DataBrew.Job.Recipe;

            export type S3TableOutputOptions = { Location: AWS.DataBrew.Job.S3Location; };

            export type Output = {
                CompressionFormat: string;

                Format: string;

                FormatOptions: AWS.DataBrew.Job.OutputFormatOptions;

                PartitionColumns: string[];

                Location: AWS.DataBrew.Job.S3Location;

                Overwrite: boolean;
            };

            export type OutputLocation = AWS.DataBrew.Job.OutputLocation;

            export type DatabaseTableOutputOptions = {
                TempDirectory: AWS.DataBrew.Job.S3Location;

                TableName: string;
            };

            export type JobSample = AWS.DataBrew.Job.JobSample;

            export type DatasetName = string;

            export type EncryptionKeyArn = string;

            export type EncryptionMode = string;

            export type Name = string;

            export type Type = string;

            export type LogSubscription = string;

            export type MaxCapacity = number;

            export type MaxRetries = number;

            export type Outputs = AWS.DataBrew.Job.Output[];

            export type DataCatalogOutputs = AWS.DataBrew.Job.DataCatalogOutput[];

            export type ProjectName = string;

            export type RoleArn = string;

            export type Tags = AWS.DataBrew.Job.Tag[];

            export type Timeout = number;

        }

        export namespace Project {

            export type Sample = AWS.DataBrew.Project.Sample;

            export type DatasetName = string;

            export type Name = string;

            export type RecipeName = string;

            export type RoleArn = string;

            export type Tags = AWS.DataBrew.Project.Tag[];

        }

        export namespace Schedule {

            export type JobNames = string[];

            export type CronExpression = string;

            export type Name = string;

            export type Tags = AWS.DataBrew.Schedule.Tag[];

        }

    }

    export namespace ApplicationAutoScaling {

        export namespace ScalingPolicy {

            export type StepScalingPolicyConfiguration = AWS.ApplicationAutoScaling.ScalingPolicy.StepScalingPolicyConfiguration;

            export type PredefinedMetricSpecification = {
                PredefinedMetricType: string;

                ResourceLabel: string;
            };

            export type CustomizedMetricSpecification = {
                Dimensions: AWS.ApplicationAutoScaling.ScalingPolicy.MetricDimension[];

                MetricName: string;

                Namespace: string;

                Statistic: string;

                Unit: string;
            };

            export type MetricDimension = {
                Name: string;

                Value: string;
            };

            export type StepAdjustment = {
                MetricIntervalLowerBound: number;

                MetricIntervalUpperBound: number;

                ScalingAdjustment: number;
            };

            export type TargetTrackingScalingPolicyConfiguration = AWS.ApplicationAutoScaling.ScalingPolicy.TargetTrackingScalingPolicyConfiguration;

            export type PolicyName = string;

            export type PolicyType = string;

            export type ResourceId = string;

            export type ScalableDimension = string;

            export type ScalingTargetId = string;

            export type ServiceNamespace = string;

        }

        export namespace ScalableTarget {

            export type SuspendedState = AWS.ApplicationAutoScaling.ScalableTarget.SuspendedState;

            export type ScheduledAction = {
                EndTime: Timestamp;

                ScalableTargetAction: AWS.ApplicationAutoScaling.ScalableTarget.ScalableTargetAction;

                Schedule: string;

                ScheduledActionName: string;

                StartTime: Timestamp;

                Timezone: string;
            };

            export type ScalableTargetAction = {
                MaxCapacity: number;

                MinCapacity: number;
            };

            export type MaxCapacity = number;

            export type MinCapacity = number;

            export type ResourceId = string;

            export type RoleARN = string;

            export type ScalableDimension = string;

            export type ScheduledActions = AWS.ApplicationAutoScaling.ScalableTarget.ScheduledAction[];

            export type ServiceNamespace = string;

        }

    }

    export namespace EC2 {

        export namespace TransitGatewayConnect {

            export type TransitGatewayConnectOptions = { Protocol: string; };

            export type TransportTransitGatewayAttachmentId = string;

            export type Tags = AWS.EC2.TransitGatewayConnect.Tag[];

            export type Options = AWS.EC2.TransitGatewayConnect.TransitGatewayConnectOptions;

        }

        export namespace EC2Fleet {

            export type FleetLaunchTemplateSpecificationRequest = {
                LaunchTemplateName: string;

                LaunchTemplateId: string;

                Version: string;
            };

            export type TargetCapacitySpecificationRequest = {
                DefaultTargetCapacityType: string;

                TotalTargetCapacity: number;

                OnDemandTargetCapacity: number;

                SpotTargetCapacity: number;
            };

            export type CapacityReservationOptionsRequest = { UsageStrategy: string; };

            export type FleetLaunchTemplateConfigRequest = {
                LaunchTemplateSpecification: AWS.EC2.EC2Fleet.FleetLaunchTemplateSpecificationRequest;

                Overrides: AWS.EC2.EC2Fleet.FleetLaunchTemplateOverridesRequest[];
            };

            export type TagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.EC2Fleet.Tag[];
            };

            export type SpotOptionsRequest = {
                SingleAvailabilityZone: boolean;

                AllocationStrategy: string;

                SingleInstanceType: boolean;

                MinTargetCapacity: number;

                MaxTotalPrice: string;

                InstanceInterruptionBehavior: string;

                InstancePoolsToUseCount: number;
            };

            export type OnDemandOptionsRequest = {
                SingleAvailabilityZone: boolean;

                AllocationStrategy: string;

                SingleInstanceType: boolean;

                MinTargetCapacity: number;

                MaxTotalPrice: string;

                CapacityReservationOptions: AWS.EC2.EC2Fleet.CapacityReservationOptionsRequest;
            };

            export type FleetLaunchTemplateOverridesRequest = {
                WeightedCapacity: number;

                Placement: AWS.EC2.EC2Fleet.Placement;

                Priority: number;

                AvailabilityZone: string;

                SubnetId: string;

                InstanceType: string;

                MaxPrice: string;
            };

            export type Placement = {
                GroupName: string;

                Tenancy: string;

                SpreadDomain: string;

                PartitionNumber: number;

                AvailabilityZone: string;

                Affinity: string;

                HostId: string;

                HostResourceGroupArn: string;
            };

            export type TargetCapacitySpecification = AWS.EC2.EC2Fleet.TargetCapacitySpecificationRequest;

            export type OnDemandOptions = AWS.EC2.EC2Fleet.OnDemandOptionsRequest;

            export type Type = string;

            export type ExcessCapacityTerminationPolicy = string;

            export type TagSpecifications = AWS.EC2.EC2Fleet.TagSpecification[];

            export type SpotOptions = AWS.EC2.EC2Fleet.SpotOptionsRequest;

            export type ValidFrom = string;

            export type ReplaceUnhealthyInstances = boolean;

            export type LaunchTemplateConfigs = AWS.EC2.EC2Fleet.FleetLaunchTemplateConfigRequest[];

            export type TerminateInstancesWithExpiration = boolean;

            export type ValidUntil = string;

            export type Context = string;

        }

        export namespace VPNConnection {

            export type VpnTunnelOptionsSpecification = {
                PreSharedKey: string;

                TunnelInsideCidr: string;
            };

            export type CustomerGatewayId = string;

            export type StaticRoutesOnly = boolean;

            export type Tags = AWS.EC2.VPNConnection.Tag[];

            export type TransitGatewayId = string;

            export type Type = string;

            export type VpnGatewayId = string;

            export type VpnTunnelOptionsSpecifications = AWS.EC2.VPNConnection.VpnTunnelOptionsSpecification[];

        }

        export namespace TrafficMirrorFilterRule {

            export type TrafficMirrorPortRange = {
                FromPort: number;

                ToPort: number;
            };

            export type DestinationPortRange = AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

            export type Description = string;

            export type SourcePortRange = AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

            export type RuleAction = string;

            export type SourceCidrBlock = string;

            export type RuleNumber = number;

            export type DestinationCidrBlock = string;

            export type TrafficMirrorFilterId = string;

            export type TrafficDirection = string;

            export type Protocol = number;

        }

        export namespace LaunchTemplate {

            export type BlockDeviceMapping = {
                Ebs: AWS.EC2.LaunchTemplate.Ebs;

                NoDevice: string;

                VirtualName: string;

                DeviceName: string;
            };

            export type SpotOptions = {
                SpotInstanceType: string;

                InstanceInterruptionBehavior: string;

                MaxPrice: string;

                BlockDurationMinutes: number;

                ValidUntil: string;
            };

            export type ElasticGpuSpecification = { Type: string; };

            export type TagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.LaunchTemplate.Tag[];
            };

            export type Ebs = {
                SnapshotId: string;

                VolumeType: string;

                KmsKeyId: string;

                Encrypted: boolean;

                Throughput: number;

                Iops: number;

                VolumeSize: number;

                DeleteOnTermination: boolean;
            };

            export type EnclaveOptions = { Enabled: boolean; };

            export type LaunchTemplateData = AWS.EC2.LaunchTemplate.LaunchTemplateData;

            export type MetadataOptions = {
                HttpPutResponseHopLimit: number;

                HttpTokens: string;

                HttpEndpoint: string;
            };

            export type CapacityReservationSpecification = {
                CapacityReservationPreference: string;

                CapacityReservationTarget: AWS.EC2.LaunchTemplate.CapacityReservationTarget;
            };

            export type CapacityReservationTarget = {
                CapacityReservationResourceGroupArn: string;

                CapacityReservationId: string;
            };

            export type CpuOptions = {
                ThreadsPerCore: number;

                CoreCount: number;
            };

            export type PrivateIpAdd = {
                PrivateIpAddress: string;

                Primary: boolean;
            };

            export type IamInstanceProfile = {
                Arn: string;

                Name: string;
            };

            export type LicenseSpecification = { LicenseConfigurationArn: string; };

            export type HibernationOptions = { Configured: boolean; };

            export type InstanceMarketOptions = {
                SpotOptions: AWS.EC2.LaunchTemplate.SpotOptions;

                MarketType: string;
            };

            export type CreditSpecification = { CpuCredits: string; };

            export type Monitoring = { Enabled: boolean; };

            export type Placement = {
                GroupName: string;

                Tenancy: string;

                SpreadDomain: string;

                PartitionNumber: number;

                AvailabilityZone: string;

                Affinity: string;

                HostId: string;

                HostResourceGroupArn: string;
            };

            export type Ipv6Add = { Ipv6Address: string; };

            export type NetworkInterface = {
                Description: string;

                PrivateIpAddress: string;

                PrivateIpAddresses: AWS.EC2.LaunchTemplate.PrivateIpAdd[];

                SecondaryPrivateIpAddressCount: number;

                DeviceIndex: number;

                SubnetId: string;

                Ipv6Addresses: AWS.EC2.LaunchTemplate.Ipv6Add[];

                AssociatePublicIpAddress: boolean;

                NetworkInterfaceId: string;

                NetworkCardIndex: number;

                InterfaceType: string;

                AssociateCarrierIpAddress: boolean;

                Ipv6AddressCount: number;

                Groups: string[];

                DeleteOnTermination: boolean;
            };

            export type LaunchTemplateElasticInferenceAccelerator = {
                Type: string;

                Count: number;
            };

            export type LaunchTemplateTagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.LaunchTemplate.Tag[];
            };

            export type LaunchTemplateName = string;

            export type TagSpecifications = AWS.EC2.LaunchTemplate.LaunchTemplateTagSpecification[];

        }

        export namespace Instance {

            export type HibernationOptions = AWS.EC2.Instance.HibernationOptions;

            export type Ebs = {
                DeleteOnTermination: boolean;

                Encrypted: boolean;

                Iops: number;

                KmsKeyId: string;

                SnapshotId: string;

                VolumeSize: number;

                VolumeType: string;
            };

            export type NoDevice = {};

            export type CreditSpecification = AWS.EC2.Instance.CreditSpecification;

            export type ElasticGpuSpecification = { Type: string; };

            export type CpuOptions = AWS.EC2.Instance.CpuOptions;

            export type LaunchTemplateSpecification = {
                LaunchTemplateId: string;

                LaunchTemplateName: string;

                Version: string;
            };

            export type BlockDeviceMapping = {
                DeviceName: string;

                Ebs: AWS.EC2.Instance.Ebs;

                NoDevice: AWS.EC2.Instance.NoDevice;

                VirtualName: string;
            };

            export type PrivateIpAddressSpecification = {
                Primary: boolean;

                PrivateIpAddress: string;
            };

            export type Volume = {
                Device: string;

                VolumeId: string;
            };

            export type NetworkInterface = {
                AssociatePublicIpAddress: boolean;

                DeleteOnTermination: boolean;

                Description: string;

                DeviceIndex: string;

                GroupSet: string[];

                Ipv6AddressCount: number;

                Ipv6Addresses: AWS.EC2.Instance.InstanceIpv6Address[];

                NetworkInterfaceId: string;

                PrivateIpAddress: string;

                PrivateIpAddresses: AWS.EC2.Instance.PrivateIpAddressSpecification[];

                SecondaryPrivateIpAddressCount: number;

                SubnetId: string;
            };

            export type InstanceIpv6Address = { Ipv6Address: string; };

            export type AssociationParameter = {
                Key: string;

                Value: string[];
            };

            export type EnclaveOptions = AWS.EC2.Instance.EnclaveOptions;

            export type LicenseSpecification = { LicenseConfigurationArn: string; };

            export type SsmAssociation = {
                AssociationParameters: AWS.EC2.Instance.AssociationParameter[];

                DocumentName: string;
            };

            export type ElasticInferenceAccelerator = {
                Count: number;

                Type: string;
            };

            export type AdditionalInfo = string;

            export type Affinity = string;

            export type AvailabilityZone = string;

            export type BlockDeviceMappings = AWS.EC2.Instance.BlockDeviceMapping[];

            export type DisableApiTermination = boolean;

            export type EbsOptimized = boolean;

            export type ElasticGpuSpecifications = AWS.EC2.Instance.ElasticGpuSpecification[];

            export type ElasticInferenceAccelerators = AWS.EC2.Instance.ElasticInferenceAccelerator[];

            export type HostId = string;

            export type HostResourceGroupArn = string;

            export type IamInstanceProfile = string;

            export type ImageId = string;

            export type InstanceInitiatedShutdownBehavior = string;

            export type InstanceType = string;

            export type Ipv6AddressCount = number;

            export type Ipv6Addresses = AWS.EC2.Instance.InstanceIpv6Address[];

            export type KernelId = string;

            export type KeyName = string;

            export type LaunchTemplate = AWS.EC2.Instance.LaunchTemplateSpecification;

            export type LicenseSpecifications = AWS.EC2.Instance.LicenseSpecification[];

            export type Monitoring = boolean;

            export type NetworkInterfaces = AWS.EC2.Instance.NetworkInterface[];

            export type PlacementGroupName = string;

            export type PrivateIpAddress = string;

            export type RamdiskId = string;

            export type SecurityGroupIds = string[];

            export type SecurityGroups = string[];

            export type SourceDestCheck = boolean;

            export type SsmAssociations = AWS.EC2.Instance.SsmAssociation[];

            export type SubnetId = string;

            export type Tags = AWS.EC2.Instance.Tag[];

            export type Tenancy = string;

            export type UserData = string;

            export type Volumes = AWS.EC2.Instance.Volume[];

        }

        export namespace SpotFleet {

            export type SpotPlacement = {
                AvailabilityZone: string;

                GroupName: string;

                Tenancy: string;
            };

            export type LaunchTemplateOverrides = {
                AvailabilityZone: string;

                InstanceType: string;

                SpotPrice: string;

                SubnetId: string;

                WeightedCapacity: number;
            };

            export type IamInstanceProfileSpecification = { Arn: string; };

            export type InstanceNetworkInterfaceSpecification = {
                AssociatePublicIpAddress: boolean;

                DeleteOnTermination: boolean;

                Description: string;

                DeviceIndex: number;

                Groups: string[];

                Ipv6AddressCount: number;

                Ipv6Addresses: AWS.EC2.SpotFleet.InstanceIpv6Address[];

                NetworkInterfaceId: string;

                PrivateIpAddresses: AWS.EC2.SpotFleet.PrivateIpAddressSpecification[];

                SecondaryPrivateIpAddressCount: number;

                SubnetId: string;
            };

            export type SpotFleetLaunchSpecification = {
                BlockDeviceMappings: AWS.EC2.SpotFleet.BlockDeviceMapping[];

                EbsOptimized: boolean;

                IamInstanceProfile: AWS.EC2.SpotFleet.IamInstanceProfileSpecification;

                ImageId: string;

                InstanceType: string;

                KernelId: string;

                KeyName: string;

                Monitoring: AWS.EC2.SpotFleet.SpotFleetMonitoring;

                NetworkInterfaces: AWS.EC2.SpotFleet.InstanceNetworkInterfaceSpecification[];

                Placement: AWS.EC2.SpotFleet.SpotPlacement;

                RamdiskId: string;

                SecurityGroups: AWS.EC2.SpotFleet.GroupIdentifier[];

                SpotPrice: string;

                SubnetId: string;

                TagSpecifications: AWS.EC2.SpotFleet.SpotFleetTagSpecification[];

                UserData: string;

                WeightedCapacity: number;
            };

            export type ClassicLoadBalancersConfig = { ClassicLoadBalancers: AWS.EC2.SpotFleet.ClassicLoadBalancer[]; };

            export type SpotMaintenanceStrategies = { CapacityRebalance: AWS.EC2.SpotFleet.SpotCapacityRebalance; };

            export type SpotFleetTagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.SpotFleet.Tag[];
            };

            export type PrivateIpAddressSpecification = {
                Primary: boolean;

                PrivateIpAddress: string;
            };

            export type SpotCapacityRebalance = { ReplacementStrategy: string; };

            export type EbsBlockDevice = {
                DeleteOnTermination: boolean;

                Encrypted: boolean;

                Iops: number;

                SnapshotId: string;

                VolumeSize: number;

                VolumeType: string;
            };

            export type LoadBalancersConfig = {
                ClassicLoadBalancersConfig: AWS.EC2.SpotFleet.ClassicLoadBalancersConfig;

                TargetGroupsConfig: AWS.EC2.SpotFleet.TargetGroupsConfig;
            };

            export type FleetLaunchTemplateSpecification = {
                LaunchTemplateId: string;

                LaunchTemplateName: string;

                Version: string;
            };

            export type TargetGroup = { Arn: string; };

            export type SpotFleetMonitoring = { Enabled: boolean; };

            export type ClassicLoadBalancer = { Name: string; };

            export type LaunchTemplateConfig = {
                LaunchTemplateSpecification: AWS.EC2.SpotFleet.FleetLaunchTemplateSpecification;

                Overrides: AWS.EC2.SpotFleet.LaunchTemplateOverrides[];
            };

            export type SpotFleetRequestConfigData = AWS.EC2.SpotFleet.SpotFleetRequestConfigData;

            export type InstanceIpv6Address = { Ipv6Address: string; };

            export type TargetGroupsConfig = { TargetGroups: AWS.EC2.SpotFleet.TargetGroup[]; };

            export type GroupIdentifier = { GroupId: string; };

            export type BlockDeviceMapping = {
                DeviceName: string;

                Ebs: AWS.EC2.SpotFleet.EbsBlockDevice;

                NoDevice: string;

                VirtualName: string;
            };

        }

        export namespace NetworkInterface {

            export type InstanceIpv6Address = { Ipv6Address: string; };

            export type PrivateIpAddressSpecification = {
                Primary: boolean;

                PrivateIpAddress: string;
            };

            export type Description = string;

            export type GroupSet = string[];

            export type InterfaceType = string;

            export type Ipv6AddressCount = number;

            export type Ipv6Addresses = AWS.EC2.NetworkInterface.InstanceIpv6Address[];

            export type PrivateIpAddress = string;

            export type PrivateIpAddresses = AWS.EC2.NetworkInterface.PrivateIpAddressSpecification[];

            export type SecondaryPrivateIpAddressCount = number;

            export type SourceDestCheck = boolean;

            export type SubnetId = string;

            export type Tags = AWS.EC2.NetworkInterface.Tag[];

        }

        export namespace NetworkInsightsAnalysis {

            export type AnalysisAclRule = {
                Cidr: string;

                Egress: boolean;

                PortRange: AWS.EC2.NetworkInsightsAnalysis.PortRange;

                Protocol: string;

                RuleAction: string;

                RuleNumber: number;
            };

            export type AlternatePathHint = {
                ComponentId: string;

                ComponentArn: string;
            };

            export type Explanation = {
                Acl: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                AclRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

                Address: string;

                Addresses: string[];

                AttachedTo: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                AvailabilityZones: string[];

                Cidrs: string[];

                Component: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                CustomerGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Destination: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                DestinationVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Direction: string;

                ExplanationCode: string;

                IngressRouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                InternetGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                LoadBalancerArn: string;

                ClassicLoadBalancerListener: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerListener;

                LoadBalancerListenerPort: number;

                LoadBalancerTarget: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerTarget;

                LoadBalancerTargetGroup: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                LoadBalancerTargetGroups: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent[];

                LoadBalancerTargetPort: number;

                ElasticLoadBalancerListener: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                MissingComponent: string;

                NatGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                NetworkInterface: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                PacketField: string;

                VpcPeeringConnection: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Port: number;

                PortRanges: AWS.EC2.NetworkInsightsAnalysis.PortRange[];

                PrefixList: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Protocols: string[];

                RouteTableRoute: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

                RouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                SecurityGroup: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                SecurityGroupRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

                SecurityGroups: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent[];

                SourceVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                State: string;

                Subnet: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                SubnetRouteTable: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Vpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                vpcEndpoint: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                VpnConnection: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                VpnGateway: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;
            };

            export type AnalysisLoadBalancerListener = {
                InstancePort: number;

                LoadBalancerPort: number;
            };

            export type AnalysisLoadBalancerTarget = {
                Address: string;

                AvailabilityZone: string;

                Instance: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Port: number;
            };

            export type AnalysisRouteTableRoute = {
                destinationCidr: string;

                destinationPrefixListId: string;

                egressOnlyInternetGatewayId: string;

                gatewayId: string;

                instanceId: string;

                NatGatewayId: string;

                NetworkInterfaceId: string;

                Origin: string;

                TransitGatewayId: string;

                VpcPeeringConnectionId: string;
            };

            export type AnalysisPacketHeader = {
                DestinationAddresses: string[];

                DestinationPortRanges: AWS.EC2.NetworkInsightsAnalysis.PortRange[];

                Protocol: string;

                SourceAddresses: string[];

                SourcePortRanges: AWS.EC2.NetworkInsightsAnalysis.PortRange[];
            };

            export type PathComponent = {
                SequenceNumber: number;

                AclRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

                Component: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                DestinationVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                OutboundHeader: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

                InboundHeader: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

                RouteTableRoute: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

                SecurityGroupRule: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

                SourceVpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Subnet: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

                Vpc: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;
            };

            export type AnalysisComponent = {
                Id: string;

                Arn: string;
            };

            export type PortRange = {
                From: number;

                To: number;
            };

            export type AnalysisSecurityGroupRule = {
                Cidr: string;

                Direction: string;

                SecurityGroupId: string;

                PortRange: AWS.EC2.NetworkInsightsAnalysis.PortRange;

                PrefixListId: string;

                Protocol: string;
            };

            export type NetworkInsightsPathId = string;

            export type FilterInArns = string[];

            export type Tags = AWS.EC2.NetworkInsightsAnalysis.Tag[];

        }

        export namespace ClientVpnEndpoint {

            export type ClientConnectOptions = AWS.EC2.ClientVpnEndpoint.ClientConnectOptions;

            export type DirectoryServiceAuthenticationRequest = { DirectoryId: string; };

            export type TagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.ClientVpnEndpoint.Tag[];
            };

            export type ClientAuthenticationRequest = {
                MutualAuthentication: AWS.EC2.ClientVpnEndpoint.CertificateAuthenticationRequest;

                Type: string;

                FederatedAuthentication: AWS.EC2.ClientVpnEndpoint.FederatedAuthenticationRequest;

                ActiveDirectory: AWS.EC2.ClientVpnEndpoint.DirectoryServiceAuthenticationRequest;
            };

            export type FederatedAuthenticationRequest = {
                SelfServiceSAMLProviderArn: string;

                SAMLProviderArn: string;
            };

            export type ConnectionLogOptions = AWS.EC2.ClientVpnEndpoint.ConnectionLogOptions;

            export type CertificateAuthenticationRequest = { ClientRootCertificateChainArn: string; };

            export type ClientCidrBlock = string;

            export type Description = string;

            export type TagSpecifications = AWS.EC2.ClientVpnEndpoint.TagSpecification[];

            export type AuthenticationOptions = AWS.EC2.ClientVpnEndpoint.ClientAuthenticationRequest[];

            export type ServerCertificateArn = string;

            export type DnsServers = string[];

            export type SecurityGroupIds = string[];

            export type SplitTunnel = boolean;

            export type VpcId = string;

            export type SelfServicePortal = string;

            export type TransportProtocol = string;

            export type VpnPort = number;

        }

        export namespace CapacityReservation {

            export type TagSpecification = {
                ResourceType: string;

                Tags: AWS.EC2.CapacityReservation.Tag[];
            };

            export type Tenancy = string;

            export type EndDateType = string;

            export type InstanceCount = number;

            export type TagSpecifications = AWS.EC2.CapacityReservation.TagSpecification[];

            export type AvailabilityZone = string;

            export type InstancePlatform = string;

            export type InstanceType = string;

            export type EphemeralStorage = boolean;

            export type InstanceMatchCriteria = string;

            export type EndDate = string;

            export type EbsOptimized = boolean;

        }

        export namespace NetworkAclEntry {

            export type PortRange = AWS.EC2.NetworkAclEntry.PortRange;

            export type Icmp = AWS.EC2.NetworkAclEntry.Icmp;

            export type CidrBlock = string;

            export type Egress = boolean;

            export type Ipv6CidrBlock = string;

            export type NetworkAclId = string;

            export type Protocol = number;

            export type RuleAction = string;

            export type RuleNumber = number;

        }

        export namespace SecurityGroup {

            export type Egress = {
                CidrIp: string;

                CidrIpv6: string;

                Description: string;

                DestinationPrefixListId: string;

                DestinationSecurityGroupId: string;

                FromPort: number;

                IpProtocol: string;

                ToPort: number;
            };

            export type Ingress = {
                CidrIp: string;

                CidrIpv6: string;

                Description: string;

                FromPort: number;

                IpProtocol: string;

                SourcePrefixListId: string;

                SourceSecurityGroupId: string;

                SourceSecurityGroupName: string;

                SourceSecurityGroupOwnerId: string;

                ToPort: number;
            };

            export type GroupDescription = string;

            export type GroupName = string;

            export type SecurityGroupEgress = AWS.EC2.SecurityGroup.Egress[];

            export type SecurityGroupIngress = AWS.EC2.SecurityGroup.Ingress[];

            export type Tags = AWS.EC2.SecurityGroup.Tag[];

            export type VpcId = string;

        }

        export namespace PrefixList {

            export type Entry = {
                Cidr: string;

                Description: string;
            };

            export type PrefixListName = string;

            export type AddressFamily = string;

            export type MaxEntries = number;

            export type Tags = AWS.EC2.PrefixList.Tag[];

            export type Entries = AWS.EC2.PrefixList.Entry[];

        }

        export namespace VPCPeeringConnection {

            export type PeerOwnerId = string;

            export type PeerRegion = string;

            export type PeerRoleArn = string;

            export type PeerVpcId = string;

            export type Tags = AWS.EC2.VPCPeeringConnection.Tag[];

            export type VpcId = string;

        }

        export namespace VPCEndpointServicePermissions {

            export type AllowedPrincipals = string[];

            export type ServiceId = string;

        }

        export namespace TransitGatewayRouteTableAssociation {

            export type TransitGatewayRouteTableId = string;

            export type TransitGatewayAttachmentId = string;

        }

        export namespace EIP {

            export type Domain = string;

            export type InstanceId = string;

            export type PublicIpv4Pool = string;

            export type Tags = AWS.EC2.EIP.Tag[];

        }

        export namespace SecurityGroupEgress {

            export type CidrIp = string;

            export type CidrIpv6 = string;

            export type Description = string;

            export type DestinationPrefixListId = string;

            export type DestinationSecurityGroupId = string;

            export type FromPort = number;

            export type GroupId = string;

            export type IpProtocol = string;

            export type ToPort = number;

        }

        export namespace TransitGatewayAttachment {

            export type TransitGatewayId = string;

            export type VpcId = string;

            export type SubnetIds = string[];

            export type Tags = AWS.EC2.TransitGatewayAttachment.Tag[];

        }

        export namespace TransitGatewayMulticastDomainAssociation {

            export type TransitGatewayMulticastDomainId = string;

            export type TransitGatewayAttachmentId = string;

            export type SubnetId = string;

        }

        export namespace DHCPOptions {

            export type DomainName = string;

            export type DomainNameServers = string[];

            export type NetbiosNameServers = string[];

            export type NetbiosNodeType = number;

            export type NtpServers = string[];

            export type Tags = AWS.EC2.DHCPOptions.Tag[];

        }

        export namespace EgressOnlyInternetGateway {

            export type VpcId = string;

        }

        export namespace NetworkInterfaceAttachment {

            export type DeleteOnTermination = boolean;

            export type DeviceIndex = string;

            export type InstanceId = string;

            export type NetworkInterfaceId = string;

        }

        export namespace CustomerGateway {

            export type BgpAsn = number;

            export type IpAddress = string;

            export type Tags = AWS.EC2.CustomerGateway.Tag[];

            export type Type = string;

        }

        export namespace ClientVpnRoute {

            export type ClientVpnEndpointId = string;

            export type TargetVpcSubnetId = string;

            export type Description = string;

            export type DestinationCidrBlock = string;

        }

        export namespace PlacementGroup {

            export type Strategy = string;

        }

        export namespace InternetGateway {

            export type Tags = AWS.EC2.InternetGateway.Tag[];

        }

        export namespace VPNConnectionRoute {

            export type DestinationCidrBlock = string;

            export type VpnConnectionId = string;

        }

        export namespace NetworkInterfacePermission {

            export type AwsAccountId = string;

            export type NetworkInterfaceId = string;

            export type Permission = string;

        }

        export namespace TransitGatewayMulticastGroupMember {

            export type GroupIpAddress = string;

            export type TransitGatewayMulticastDomainId = string;

            export type NetworkInterfaceId = string;

        }

        export namespace LocalGatewayRouteTableVPCAssociation {

            export type LocalGatewayRouteTableId = string;

            export type VpcId = string;

            export type Tags = AWS.EC2.LocalGatewayRouteTableVPCAssociation.Tag[];

        }

        export namespace TransitGatewayMulticastGroupSource {

            export type GroupIpAddress = string;

            export type TransitGatewayMulticastDomainId = string;

            export type NetworkInterfaceId = string;

        }

        export namespace ClientVpnAuthorizationRule {

            export type ClientVpnEndpointId = string;

            export type Description = string;

            export type AccessGroupId = string;

            export type TargetNetworkCidr = string;

            export type AuthorizeAllGroups = boolean;

        }

        export namespace NatGateway {

            export type AllocationId = string;

            export type ConnectivityType = string;

            export type SubnetId = string;

            export type Tags = AWS.EC2.NatGateway.Tag[];

        }

        export namespace TransitGatewayMulticastDomain {

            export type TransitGatewayId = string;

            export type Tags = AWS.EC2.TransitGatewayMulticastDomain.Tag[];

            export type Options = JSONString;

        }

        export namespace VPCDHCPOptionsAssociation {

            export type DhcpOptionsId = string;

            export type VpcId = string;

        }

        export namespace EnclaveCertificateIamRoleAssociation {

            export type CertificateArn = string;

            export type RoleArn = string;

        }

        export namespace TrafficMirrorTarget {

            export type NetworkLoadBalancerArn = string;

            export type Description = string;

            export type NetworkInterfaceId = string;

            export type Tags = AWS.EC2.TrafficMirrorTarget.Tag[];

        }

        export namespace RouteTable {

            export type Tags = AWS.EC2.RouteTable.Tag[];

            export type VpcId = string;

        }

        export namespace TransitGateway {

            export type DefaultRouteTablePropagation = string;

            export type Description = string;

            export type AutoAcceptSharedAttachments = string;

            export type DefaultRouteTableAssociation = string;

            export type VpnEcmpSupport = string;

            export type DnsSupport = string;

            export type MulticastSupport = string;

            export type AmazonSideAsn = number;

            export type Tags = AWS.EC2.TransitGateway.Tag[];

        }

        export namespace Volume {

            export type AutoEnableIO = boolean;

            export type AvailabilityZone = string;

            export type Encrypted = boolean;

            export type Iops = number;

            export type KmsKeyId = string;

            export type MultiAttachEnabled = boolean;

            export type OutpostArn = string;

            export type Size = number;

            export type SnapshotId = string;

            export type Tags = AWS.EC2.Volume.Tag[];

            export type Throughput = number;

            export type VolumeType = string;

        }

        export namespace LocalGatewayRoute {

            export type DestinationCidrBlock = string;

            export type LocalGatewayRouteTableId = string;

            export type LocalGatewayVirtualInterfaceGroupId = string;

        }

        export namespace VPCEndpointConnectionNotification {

            export type ConnectionEvents = string[];

            export type VPCEndpointId = string;

            export type ServiceId = string;

            export type ConnectionNotificationArn = string;

        }

        export namespace FlowLog {

            export type DeliverLogsPermissionArn = string;

            export type LogDestination = string;

            export type LogDestinationType = string;

            export type LogFormat = string;

            export type LogGroupName = string;

            export type MaxAggregationInterval = number;

            export type ResourceId = string;

            export type ResourceType = string;

            export type Tags = AWS.EC2.FlowLog.Tag[];

            export type TrafficType = string;

        }

        export namespace Subnet {

            export type AssignIpv6AddressOnCreation = boolean;

            export type AvailabilityZone = string;

            export type CidrBlock = string;

            export type Ipv6CidrBlock = string;

            export type MapPublicIpOnLaunch = boolean;

            export type OutpostArn = string;

            export type Tags = AWS.EC2.Subnet.Tag[];

            export type VpcId = string;

        }

        export namespace CarrierGateway {

            export type VpcId = string;

            export type Tags = AWS.EC2.CarrierGateway.Tag[];

        }

        export namespace NetworkInsightsPath {

            export type SourceIp = string;

            export type DestinationIp = string;

            export type Source = string;

            export type Destination = string;

            export type Protocol = string;

            export type DestinationPort = number;

            export type Tags = AWS.EC2.NetworkInsightsPath.Tag[];

        }

        export namespace EIPAssociation {

            export type AllocationId = string;

            export type EIP = string;

            export type InstanceId = string;

            export type NetworkInterfaceId = string;

            export type PrivateIpAddress = string;

        }

        export namespace VPNGateway {

            export type AmazonSideAsn = number;

            export type Tags = AWS.EC2.VPNGateway.Tag[];

            export type Type = string;

        }

        export namespace TransitGatewayRouteTable {

            export type TransitGatewayId = string;

            export type Tags = AWS.EC2.TransitGatewayRouteTable.Tag[];

        }

        export namespace VPCEndpointService {

            export type NetworkLoadBalancerArns = string[];

            export type AcceptanceRequired = boolean;

            export type GatewayLoadBalancerArns = string[];

        }

        export namespace GatewayRouteTableAssociation {

            export type RouteTableId = string;

            export type GatewayId = string;

        }

        export namespace TrafficMirrorFilter {

            export type Description = string;

            export type NetworkServices = string[];

            export type Tags = AWS.EC2.TrafficMirrorFilter.Tag[];

        }

        export namespace SecurityGroupIngress {

            export type CidrIp = string;

            export type CidrIpv6 = string;

            export type Description = string;

            export type FromPort = number;

            export type GroupId = string;

            export type GroupName = string;

            export type IpProtocol = string;

            export type SourcePrefixListId = string;

            export type SourceSecurityGroupId = string;

            export type SourceSecurityGroupName = string;

            export type SourceSecurityGroupOwnerId = string;

            export type ToPort = number;

        }

        export namespace SubnetRouteTableAssociation {

            export type RouteTableId = string;

            export type SubnetId = string;

        }

        export namespace Route {

            export type CarrierGatewayId = string;

            export type DestinationCidrBlock = string;

            export type DestinationIpv6CidrBlock = string;

            export type EgressOnlyInternetGatewayId = string;

            export type GatewayId = string;

            export type InstanceId = string;

            export type LocalGatewayId = string;

            export type NatGatewayId = string;

            export type NetworkInterfaceId = string;

            export type RouteTableId = string;

            export type TransitGatewayId = string;

            export type VpcEndpointId = string;

            export type VpcPeeringConnectionId = string;

        }

        export namespace TransitGatewayRouteTablePropagation {

            export type TransitGatewayRouteTableId = string;

            export type TransitGatewayAttachmentId = string;

        }

        export namespace SubnetNetworkAclAssociation {

            export type NetworkAclId = string;

            export type SubnetId = string;

        }

        export namespace TrafficMirrorSession {

            export type TrafficMirrorTargetId = string;

            export type Description = string;

            export type SessionNumber = number;

            export type VirtualNetworkId = number;

            export type PacketLength = number;

            export type NetworkInterfaceId = string;

            export type TrafficMirrorFilterId = string;

            export type Tags = AWS.EC2.TrafficMirrorSession.Tag[];

        }

        export namespace SubnetCidrBlock {

            export type Ipv6CidrBlock = string;

            export type SubnetId = string;

        }

        export namespace VPC {

            export type CidrBlock = string;

            export type EnableDnsHostnames = boolean;

            export type EnableDnsSupport = boolean;

            export type InstanceTenancy = string;

            export type Tags = AWS.EC2.VPC.Tag[];

        }

        export namespace TransitGatewayRoute {

            export type TransitGatewayRouteTableId = string;

            export type DestinationCidrBlock = string;

            export type Blackhole = boolean;

            export type TransitGatewayAttachmentId = string;

        }

        export namespace NetworkAcl {

            export type Tags = AWS.EC2.NetworkAcl.Tag[];

            export type VpcId = string;

        }

        export namespace VPNGatewayRoutePropagation {

            export type RouteTableIds = string[];

            export type VpnGatewayId = string;

        }

        export namespace ClientVpnTargetNetworkAssociation {

            export type ClientVpnEndpointId = string;

            export type SubnetId = string;

        }

        export namespace TransitGatewayPeeringAttachment {

            export type TransitGatewayId = string;

            export type PeerTransitGatewayId = string;

            export type PeerAccountId = string;

            export type PeerRegion = string;

            export type Tags = AWS.EC2.TransitGatewayPeeringAttachment.Tag[];

        }

        export namespace VolumeAttachment {

            export type Device = string;

            export type InstanceId = string;

            export type VolumeId = string;

        }

        export namespace Host {

            export type AutoPlacement = string;

            export type AvailabilityZone = string;

            export type HostRecovery = string;

            export type InstanceType = string;

        }

        export namespace VPCEndpoint {

            export type PolicyDocument = JSONString;

            export type PrivateDnsEnabled = boolean;

            export type RouteTableIds = string[];

            export type SecurityGroupIds = string[];

            export type ServiceName = string;

            export type SubnetIds = string[];

            export type VpcEndpointType = string;

            export type VpcId = string;

        }

        export namespace VPCGatewayAttachment {

            export type InternetGatewayId = string;

            export type VpcId = string;

            export type VpnGatewayId = string;

        }

        export namespace VPCCidrBlock {

            export type AmazonProvidedIpv6CidrBlock = boolean;

            export type CidrBlock = string;

            export type VpcId = string;

        }

    }

    export namespace ImageBuilder {

        export namespace ImagePipeline {

            export type ImageTestsConfiguration = AWS.ImageBuilder.ImagePipeline.ImageTestsConfiguration;

            export type Schedule = AWS.ImageBuilder.ImagePipeline.Schedule;

            export type Name = string;

            export type Description = string;

            export type Status = string;

            export type ImageRecipeArn = string;

            export type ContainerRecipeArn = string;

            export type DistributionConfigurationArn = string;

            export type InfrastructureConfigurationArn = string;

            export type EnhancedImageMetadataEnabled = boolean;

            export type Tags = Record<string, string>;

        }

        export namespace ImageRecipe {

            export type InstanceBlockDeviceMapping = {
                DeviceName: string;

                VirtualName: string;

                NoDevice: string;

                Ebs: AWS.ImageBuilder.ImageRecipe.EbsInstanceBlockDeviceSpecification;
            };

            export type ComponentConfiguration = { ComponentArn: string; };

            export type EbsInstanceBlockDeviceSpecification = {
                Encrypted: boolean;

                DeleteOnTermination: boolean;

                Iops: number;

                KmsKeyId: string;

                SnapshotId: string;

                VolumeSize: number;

                VolumeType: string;
            };

            export type Name = string;

            export type Description = string;

            export type Version = string;

            export type Components = AWS.ImageBuilder.ImageRecipe.ComponentConfiguration[];

            export type BlockDeviceMappings = AWS.ImageBuilder.ImageRecipe.InstanceBlockDeviceMapping[];

            export type ParentImage = string;

            export type WorkingDirectory = string;

            export type Tags = Record<string, string>;

        }

        export namespace ContainerRecipe {

            export type ComponentConfiguration = { ComponentArn: string; };

            export type EbsInstanceBlockDeviceSpecification = {
                Encrypted: boolean;

                DeleteOnTermination: boolean;

                Iops: number;

                KmsKeyId: string;

                SnapshotId: string;

                VolumeSize: number;

                VolumeType: string;
            };

            export type InstanceBlockDeviceMapping = {
                DeviceName: string;

                VirtualName: string;

                NoDevice: string;

                Ebs: AWS.ImageBuilder.ContainerRecipe.EbsInstanceBlockDeviceSpecification;
            };

            export type InstanceConfiguration = AWS.ImageBuilder.ContainerRecipe.InstanceConfiguration;

            export type TargetContainerRepository = {
                Service: string;

                RepositoryName: string;
            };

            export type Name = string;

            export type Description = string;

            export type Version = string;

            export type Components = AWS.ImageBuilder.ContainerRecipe.ComponentConfiguration[];

            export type DockerfileTemplateData = string;

            export type DockerfileTemplateUri = string;

            export type PlatformOverride = string;

            export type ContainerType = string;

            export type ImageOsVersionOverride = string;

            export type TargetRepository = AWS.ImageBuilder.ContainerRecipe.TargetContainerRepository;

            export type KmsKeyId = string;

            export type ParentImage = string;

            export type WorkingDirectory = string;

            export type Tags = Record<string, string>;

        }

        export namespace InfrastructureConfiguration {

            export type Logging = AWS.ImageBuilder.InfrastructureConfiguration.Logging;

            export type S3Logs = {
                S3BucketName: string;

                S3KeyPrefix: string;
            };

            export type Name = string;

            export type Description = string;

            export type InstanceTypes = string[];

            export type SecurityGroupIds = string[];

            export type SubnetId = string;

            export type KeyPair = string;

            export type TerminateInstanceOnFailure = boolean;

            export type InstanceProfileName = string;

            export type SnsTopicArn = string;

            export type ResourceTags = Record<string, string>;

            export type Tags = Record<string, string>;

        }

        export namespace DistributionConfiguration {

            export type Distribution = {
                Region: string;

                AmiDistributionConfiguration: JSONString;

                ContainerDistributionConfiguration: JSONString;

                LicenseConfigurationArns: string[];

                LaunchTemplateConfigurations: AWS.ImageBuilder.DistributionConfiguration.LaunchTemplateConfiguration[];
            };

            export type LaunchTemplateConfiguration = {
                LaunchTemplateId: string;

                AccountId: string;

                SetDefaultVersion: boolean;
            };

            export type Name = string;

            export type Description = string;

            export type Distributions = AWS.ImageBuilder.DistributionConfiguration.Distribution[];

            export type Tags = Record<string, string>;

        }

        export namespace Image {

            export type ImageTestsConfiguration = AWS.ImageBuilder.Image.ImageTestsConfiguration;

            export type ImageRecipeArn = string;

            export type ContainerRecipeArn = string;

            export type DistributionConfigurationArn = string;

            export type InfrastructureConfigurationArn = string;

            export type EnhancedImageMetadataEnabled = boolean;

            export type Tags = Record<string, string>;

        }

        export namespace Component {

            export type Name = string;

            export type Version = string;

            export type Description = string;

            export type ChangeDescription = string;

            export type Platform = string;

            export type Data = string;

            export type KmsKeyId = string;

            export type Tags = Record<string, string>;

            export type Uri = string;

            export type SupportedOsVersions = string[];

        }

    }

    export namespace MediaLive {

        export namespace Channel {

            export type HlsInputSettings = {
                BufferSegments: number;

                Retries: number;

                Bandwidth: number;

                RetryInterval: number;
            };

            export type DvbSubDestinationSettings = {
                BackgroundOpacity: number;

                FontResolution: number;

                OutlineColor: string;

                FontColor: string;

                ShadowColor: string;

                ShadowOpacity: number;

                Font: AWS.MediaLive.Channel.InputLocation;

                ShadowYOffset: number;

                Alignment: string;

                XPosition: number;

                FontSize: string;

                YPosition: number;

                OutlineSize: number;

                TeletextGridControl: string;

                FontOpacity: number;

                ShadowXOffset: number;

                BackgroundColor: string;
            };

            export type Rec709Settings = {};

            export type VideoCodecSettings = {
                Mpeg2Settings: AWS.MediaLive.Channel.Mpeg2Settings;

                FrameCaptureSettings: AWS.MediaLive.Channel.FrameCaptureSettings;

                H264Settings: AWS.MediaLive.Channel.H264Settings;

                H265Settings: AWS.MediaLive.Channel.H265Settings;
            };

            export type HlsSettings = {
                StandardHlsSettings: AWS.MediaLive.Channel.StandardHlsSettings;

                AudioOnlyHlsSettings: AWS.MediaLive.Channel.AudioOnlyHlsSettings;

                Fmp4HlsSettings: AWS.MediaLive.Channel.Fmp4HlsSettings;

                FrameCaptureHlsSettings: AWS.MediaLive.Channel.FrameCaptureHlsSettings;
            };

            export type FrameCaptureSettings = {
                CaptureInterval: number;

                CaptureIntervalUnits: string;
            };

            export type MotionGraphicsSettings = { HtmlMotionGraphicsSettings: AWS.MediaLive.Channel.HtmlMotionGraphicsSettings; };

            export type FrameCaptureCdnSettings = { FrameCaptureS3Settings: AWS.MediaLive.Channel.FrameCaptureS3Settings; };

            export type InputLossBehavior = {
                InputLossImageColor: string;

                BlackFrameMsec: number;

                InputLossImageType: string;

                InputLossImageSlate: AWS.MediaLive.Channel.InputLocation;

                RepeatFrameMsec: number;
            };

            export type MultiplexProgramChannelDestinationSettings = {
                MultiplexId: string;

                ProgramName: string;
            };

            export type HlsCdnSettings = {
                HlsWebdavSettings: AWS.MediaLive.Channel.HlsWebdavSettings;

                HlsS3Settings: AWS.MediaLive.Channel.HlsS3Settings;

                HlsAkamaiSettings: AWS.MediaLive.Channel.HlsAkamaiSettings;

                HlsBasicPutSettings: AWS.MediaLive.Channel.HlsBasicPutSettings;

                HlsMediaStoreSettings: AWS.MediaLive.Channel.HlsMediaStoreSettings;
            };

            export type HlsOutputSettings = {
                NameModifier: string;

                HlsSettings: AWS.MediaLive.Channel.HlsSettings;

                H265PackagingType: string;

                SegmentModifier: string;
            };

            export type EmbeddedPlusScte20DestinationSettings = {};

            export type FrameCaptureS3Settings = { CannedAcl: string; };

            export type ArchiveCdnSettings = { ArchiveS3Settings: AWS.MediaLive.Channel.ArchiveS3Settings; };

            export type Scte27SourceSettings = { Pid: number; };

            export type AudioTrackSelection = { Tracks: AWS.MediaLive.Channel.AudioTrack[]; };

            export type EbuTtDDestinationSettings = {
                FontFamily: string;

                FillLineGap: string;

                StyleControl: string;

                CopyrightHolder: string;
            };

            export type VideoSelectorPid = { Pid: number; };

            export type FailoverCondition = { FailoverConditionSettings: AWS.MediaLive.Channel.FailoverConditionSettings; };

            export type Hdr10Settings = {
                MaxCll: number;

                MaxFall: number;
            };

            export type StaticKeySettings = {
                KeyProviderServer: AWS.MediaLive.Channel.InputLocation;

                StaticKeyValue: string;
            };

            export type InputLocation = {
                Username: string;

                PasswordParam: string;

                Uri: string;
            };

            export type AudioLanguageSelection = {
                LanguageCode: string;

                LanguageSelectionPolicy: string;
            };

            export type CaptionRectangle = {
                TopOffset: number;

                Height: number;

                Width: number;

                LeftOffset: number;
            };

            export type ArchiveS3Settings = { CannedAcl: string; };

            export type SmpteTtDestinationSettings = {};

            export type AribSourceSettings = {};

            export type Mp2Settings = {
                CodingMode: string;

                SampleRate: number;

                Bitrate: number;
            };

            export type AudioSilenceFailoverSettings = {
                AudioSelectorName: string;

                AudioSilenceThresholdMsec: number;
            };

            export type Fmp4HlsSettings = {
                AudioRenditionSets: string;

                NielsenId3Behavior: string;

                TimedMetadataBehavior: string;
            };

            export type Scte35SpliceInsert = {
                AdAvailOffset: number;

                WebDeliveryAllowedFlag: string;

                NoRegionalBlackoutFlag: string;
            };

            export type AudioChannelMapping = {
                OutputChannel: number;

                InputChannelLevels: AWS.MediaLive.Channel.InputChannelLevel[];
            };

            export type FeatureActivations = { InputPrepareScheduleActions: string; };

            export type OutputGroup = {
                Outputs: AWS.MediaLive.Channel.Output[];

                OutputGroupSettings: AWS.MediaLive.Channel.OutputGroupSettings;

                Name: string;
            };

            export type UdpOutputSettings = {
                Destination: AWS.MediaLive.Channel.OutputLocationRef;

                FecOutputSettings: AWS.MediaLive.Channel.FecOutputSettings;

                ContainerSettings: AWS.MediaLive.Channel.UdpContainerSettings;

                BufferMsec: number;
            };

            export type Ac3Settings = {
                CodingMode: string;

                DrcProfile: string;

                MetadataControl: string;

                Dialnorm: number;

                LfeFilter: string;

                BitstreamMode: string;

                Bitrate: number;
            };

            export type Eac3Settings = {
                CodingMode: string;

                SurroundMode: string;

                PassthroughControl: string;

                Dialnorm: number;

                LoRoSurroundMixLevel: number;

                PhaseControl: string;

                LtRtCenterMixLevel: number;

                LfeFilter: string;

                LfeControl: string;

                Bitrate: number;

                DrcLine: string;

                DcFilter: string;

                MetadataControl: string;

                LtRtSurroundMixLevel: number;

                LoRoCenterMixLevel: number;

                DrcRf: string;

                AttenuationControl: string;

                BitstreamMode: string;

                SurroundExMode: string;

                StereoDownmix: string;
            };

            export type MediaPackageOutputSettings = {};

            export type Rec601Settings = {};

            export type H264Settings = {
                NumRefFrames: number;

                TemporalAq: string;

                Slices: number;

                FramerateControl: string;

                QvbrQualityLevel: number;

                FramerateNumerator: number;

                ParControl: string;

                GopClosedCadence: number;

                FlickerAq: string;

                Profile: string;

                QualityLevel: string;

                MinIInterval: number;

                SceneChangeDetect: string;

                ForceFieldPictures: string;

                FramerateDenominator: number;

                Softness: number;

                GopSize: number;

                AdaptiveQuantization: string;

                FilterSettings: AWS.MediaLive.Channel.H264FilterSettings;

                ColorSpaceSettings: AWS.MediaLive.Channel.H264ColorSpaceSettings;

                EntropyEncoding: string;

                SpatialAq: string;

                ParDenominator: number;

                FixedAfd: string;

                GopSizeUnits: string;

                AfdSignaling: string;

                Bitrate: number;

                ParNumerator: number;

                RateControlMode: string;

                ScanType: string;

                BufSize: number;

                TimecodeInsertion: string;

                ColorMetadata: string;

                BufFillPct: number;

                GopBReference: string;

                LookAheadRateControl: string;

                Level: string;

                MaxBitrate: number;

                Syntax: string;

                SubgopLength: string;

                GopNumBFrames: number;
            };

            export type H264FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

            export type FailoverConditionSettings = {
                AudioSilenceSettings: AWS.MediaLive.Channel.AudioSilenceFailoverSettings;

                VideoBlackSettings: AWS.MediaLive.Channel.VideoBlackFailoverSettings;

                InputLossSettings: AWS.MediaLive.Channel.InputLossFailoverSettings;
            };

            export type Mpeg2Settings = {
                ColorSpace: string;

                FixedAfd: string;

                GopSizeUnits: string;

                FramerateNumerator: number;

                GopClosedCadence: number;

                AfdSignaling: string;

                DisplayAspectRatio: string;

                ScanType: string;

                TimecodeInsertion: string;

                ColorMetadata: string;

                FramerateDenominator: number;

                GopSize: number;

                AdaptiveQuantization: string;

                SubgopLength: string;

                FilterSettings: AWS.MediaLive.Channel.Mpeg2FilterSettings;

                GopNumBFrames: number;
            };

            export type AudioSelectorSettings = {
                AudioPidSelection: AWS.MediaLive.Channel.AudioPidSelection;

                AudioLanguageSelection: AWS.MediaLive.Channel.AudioLanguageSelection;

                AudioTrackSelection: AWS.MediaLive.Channel.AudioTrackSelection;
            };

            export type UdpContainerSettings = { M2tsSettings: AWS.MediaLive.Channel.M2tsSettings; };

            export type TimecodeConfig = {
                SyncThreshold: number;

                Source: string;
            };

            export type VideoSelector = {
                ColorSpaceSettings: AWS.MediaLive.Channel.VideoSelectorColorSpaceSettings;

                SelectorSettings: AWS.MediaLive.Channel.VideoSelectorSettings;

                ColorSpace: string;

                ColorSpaceUsage: string;
            };

            export type DvbTdtSettings = { RepInterval: number; };

            export type HlsGroupSettings = {
                SegmentationMode: string;

                Destination: AWS.MediaLive.Channel.OutputLocationRef;

                CodecSpecification: string;

                IvSource: string;

                TimedMetadataId3Frame: string;

                KeyFormatVersions: string;

                RedundantManifest: string;

                OutputSelection: string;

                KeyProviderSettings: AWS.MediaLive.Channel.KeyProviderSettings;

                StreamInfResolution: string;

                CaptionLanguageMappings: AWS.MediaLive.Channel.CaptionLanguageMapping[];

                HlsId3SegmentTagging: string;

                IFrameOnlyPlaylists: string;

                CaptionLanguageSetting: string;

                KeepSegments: number;

                ConstantIv: string;

                DirectoryStructure: string;

                EncryptionType: string;

                AdMarkers: string[];

                HlsCdnSettings: AWS.MediaLive.Channel.HlsCdnSettings;

                IndexNSegments: number;

                DiscontinuityTags: string;

                InputLossAction: string;

                Mode: string;

                TsFileMode: string;

                BaseUrlManifest1: string;

                ClientCache: string;

                MinSegmentLength: number;

                KeyFormat: string;

                IvInManifest: string;

                BaseUrlContent1: string;

                ManifestCompression: string;

                ManifestDurationFormat: string;

                TimedMetadataId3Period: number;

                IncompleteSegmentBehavior: string;

                ProgramDateTimePeriod: number;

                SegmentLength: number;

                TimestampDeltaMilliseconds: number;

                ProgramDateTime: string;

                SegmentsPerSubdirectory: number;

                BaseUrlContent: string;

                BaseUrlManifest: string;
            };

            export type OutputDestinationSettings = {
                StreamName: string;

                Username: string;

                PasswordParam: string;

                Url: string;
            };

            export type AvailConfiguration = { AvailSettings: AWS.MediaLive.Channel.AvailSettings; };

            export type TeletextDestinationSettings = {};

            export type H265Settings = {
                Slices: number;

                QvbrQualityLevel: number;

                FramerateNumerator: number;

                GopClosedCadence: number;

                FlickerAq: string;

                Profile: string;

                MinIInterval: number;

                SceneChangeDetect: string;

                FramerateDenominator: number;

                GopSize: number;

                AdaptiveQuantization: string;

                FilterSettings: AWS.MediaLive.Channel.H265FilterSettings;

                AlternativeTransferFunction: string;

                ColorSpaceSettings: AWS.MediaLive.Channel.H265ColorSpaceSettings;

                Tier: string;

                ParDenominator: number;

                FixedAfd: string;

                GopSizeUnits: string;

                AfdSignaling: string;

                Bitrate: number;

                ParNumerator: number;

                RateControlMode: string;

                ScanType: string;

                BufSize: number;

                TimecodeInsertion: string;

                ColorMetadata: string;

                LookAheadRateControl: string;

                Level: string;

                MaxBitrate: number;
            };

            export type AudioCodecSettings = {
                Eac3Settings: AWS.MediaLive.Channel.Eac3Settings;

                Ac3Settings: AWS.MediaLive.Channel.Ac3Settings;

                Mp2Settings: AWS.MediaLive.Channel.Mp2Settings;

                PassThroughSettings: AWS.MediaLive.Channel.PassThroughSettings;

                WavSettings: AWS.MediaLive.Channel.WavSettings;

                AacSettings: AWS.MediaLive.Channel.AacSettings;
            };

            export type DvbNitSettings = {
                NetworkName: string;

                RepInterval: number;

                NetworkId: number;
            };

            export type WebvttDestinationSettings = {};

            export type AacSettings = {
                CodingMode: string;

                RateControlMode: string;

                SampleRate: number;

                InputType: string;

                VbrQuality: string;

                RawFormat: string;

                Spec: string;

                Bitrate: number;

                Profile: string;
            };

            export type Scte35TimeSignalApos = {
                AdAvailOffset: number;

                WebDeliveryAllowedFlag: string;

                NoRegionalBlackoutFlag: string;
            };

            export type FecOutputSettings = {
                RowLength: number;

                ColumnDepth: number;

                IncludeFec: string;
            };

            export type OutputDestination = {
                MultiplexSettings: AWS.MediaLive.Channel.MultiplexProgramChannelDestinationSettings;

                Id: string;

                Settings: AWS.MediaLive.Channel.OutputDestinationSettings[];

                MediaPackageSettings: AWS.MediaLive.Channel.MediaPackageOutputDestinationSettings[];
            };

            export type AncillarySourceSettings = { SourceAncillaryChannelNumber: number; };

            export type Mpeg2FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

            export type CaptionSelector = {
                LanguageCode: string;

                SelectorSettings: AWS.MediaLive.Channel.CaptionSelectorSettings;

                Name: string;
            };

            export type VideoBlackFailoverSettings = {
                VideoBlackThresholdMsec: number;

                BlackDetectThreshold: number;
            };

            export type RtmpOutputSettings = {
                Destination: AWS.MediaLive.Channel.OutputLocationRef;

                CertificateMode: string;

                NumRetries: number;

                ConnectionRetryInterval: number;
            };

            export type RtmpCaptionInfoDestinationSettings = {};

            export type TtmlDestinationSettings = { StyleControl: string; };

            export type M2tsSettings = {
                EtvPlatformPid: string;

                PatInterval: number;

                ProgramNum: number;

                RateMode: string;

                KlvDataPids: string;

                NullPacketBitrate: number;

                PmtInterval: number;

                AribCaptionsPid: string;

                EsRateInPes: string;

                VideoPid: string;

                TransportStreamId: number;

                EbpPlacement: string;

                DvbSubPids: string;

                SegmentationStyle: string;

                Scte35Pid: string;

                AudioStreamType: string;

                Klv: string;

                EbpLookaheadMs: number;

                DvbTdtSettings: AWS.MediaLive.Channel.DvbTdtSettings;

                TimedMetadataBehavior: string;

                EbpAudioInterval: string;

                FragmentTime: number;

                DvbTeletextPid: string;

                Scte35Control: string;

                PcrPeriod: number;

                NielsenId3Behavior: string;

                PcrPid: string;

                SegmentationTime: number;

                CcDescriptor: string;

                AudioFramesPerPes: number;

                AbsentInputAudioBehavior: string;

                Bitrate: number;

                PmtPid: string;

                Scte27Pids: string;

                SegmentationMarkers: string;

                DvbNitSettings: AWS.MediaLive.Channel.DvbNitSettings;

                DvbSdtSettings: AWS.MediaLive.Channel.DvbSdtSettings;

                EtvSignalPid: string;

                Arib: string;

                BufferModel: string;

                EcmPid: string;

                TimedMetadataPid: string;

                AudioPids: string;

                AudioBufferModel: string;

                Ebif: string;

                AribCaptionsPidControl: string;

                PcrControl: string;
            };

            export type HlsWebdavSettings = {
                FilecacheDuration: number;

                NumRetries: number;

                RestartDelay: number;

                ConnectionRetryInterval: number;

                HttpTransferMode: string;
            };

            export type NielsenConfiguration = {
                DistributorId: string;

                NielsenPcmToId3Tagging: string;
            };

            export type GlobalConfiguration = {
                InputEndAction: string;

                OutputTimingSource: string;

                OutputLockingMode: string;

                SupportLowFramerateInputs: string;

                InitialAudioGain: number;

                InputLossBehavior: AWS.MediaLive.Channel.InputLossBehavior;
            };

            export type MediaPackageOutputDestinationSettings = { ChannelId: string; };

            export type AudioOnlyHlsSettings = {
                SegmentType: string;

                AudioTrackType: string;

                AudioOnlyImage: AWS.MediaLive.Channel.InputLocation;

                AudioGroupId: string;
            };

            export type OutputLocationRef = { DestinationRefId: string; };

            export type Scte27DestinationSettings = {};

            export type AutomaticInputFailoverSettings = {
                FailoverConditions: AWS.MediaLive.Channel.FailoverCondition[];

                InputPreference: string;

                SecondaryInputId: string;

                ErrorClearTimeMsec: number;
            };

            export type FrameCaptureGroupSettings = {
                FrameCaptureCdnSettings: AWS.MediaLive.Channel.FrameCaptureCdnSettings;

                Destination: AWS.MediaLive.Channel.OutputLocationRef;
            };

            export type ArchiveOutputSettings = {
                Extension: string;

                NameModifier: string;

                ContainerSettings: AWS.MediaLive.Channel.ArchiveContainerSettings;
            };

            export type ArchiveGroupSettings = {
                Destination: AWS.MediaLive.Channel.OutputLocationRef;

                ArchiveCdnSettings: AWS.MediaLive.Channel.ArchiveCdnSettings;

                RolloverInterval: number;
            };

            export type RawSettings = {};

            export type DvbSdtSettings = {
                ServiceProviderName: string;

                OutputSdt: string;

                ServiceName: string;

                RepInterval: number;
            };

            export type VideoSelectorProgramId = { ProgramId: number; };

            export type InputAttachment = {
                InputAttachmentName: string;

                InputId: string;

                AutomaticInputFailoverSettings: AWS.MediaLive.Channel.AutomaticInputFailoverSettings;

                InputSettings: AWS.MediaLive.Channel.InputSettings;
            };

            export type InputChannelLevel = {
                InputChannel: number;

                Gain: number;
            };

            export type StandardHlsSettings = {
                AudioRenditionSets: string;

                M3u8Settings: AWS.MediaLive.Channel.M3u8Settings;
            };

            export type PassThroughSettings = {};

            export type ArchiveContainerSettings = {
                RawSettings: AWS.MediaLive.Channel.RawSettings;

                M2tsSettings: AWS.MediaLive.Channel.M2tsSettings;
            };

            export type EmbeddedSourceSettings = {
                Source608ChannelNumber: number;

                Scte20Detection: string;

                Source608TrackNumber: number;

                Convert608To708: string;
            };

            export type InputSpecification = AWS.MediaLive.Channel.InputSpecification;

            export type FrameCaptureOutputSettings = { NameModifier: string; };

            export type EncoderSettings = AWS.MediaLive.Channel.EncoderSettings;

            export type AvailSettings = {
                Scte35SpliceInsert: AWS.MediaLive.Channel.Scte35SpliceInsert;

                Scte35TimeSignalApos: AWS.MediaLive.Channel.Scte35TimeSignalApos;
            };

            export type H264ColorSpaceSettings = {
                Rec601Settings: AWS.MediaLive.Channel.Rec601Settings;

                Rec709Settings: AWS.MediaLive.Channel.Rec709Settings;

                ColorSpacePassthroughSettings: AWS.MediaLive.Channel.ColorSpacePassthroughSettings;
            };

            export type MediaPackageGroupSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef; };

            export type MultiplexOutputSettings = { Destination: AWS.MediaLive.Channel.OutputLocationRef; };

            export type H265ColorSpaceSettings = {
                Rec601Settings: AWS.MediaLive.Channel.Rec601Settings;

                Rec709Settings: AWS.MediaLive.Channel.Rec709Settings;

                ColorSpacePassthroughSettings: AWS.MediaLive.Channel.ColorSpacePassthroughSettings;

                Hdr10Settings: AWS.MediaLive.Channel.Hdr10Settings;
            };

            export type EmbeddedDestinationSettings = {};

            export type AvailBlanking = {
                State: string;

                AvailBlankingImage: AWS.MediaLive.Channel.InputLocation;
            };

            export type InputSettings = {
                DeblockFilter: string;

                FilterStrength: number;

                InputFilter: string;

                SourceEndBehavior: string;

                VideoSelector: AWS.MediaLive.Channel.VideoSelector;

                Smpte2038DataPreference: string;

                AudioSelectors: AWS.MediaLive.Channel.AudioSelector[];

                CaptionSelectors: AWS.MediaLive.Channel.CaptionSelector[];

                DenoiseFilter: string;

                NetworkInputSettings: AWS.MediaLive.Channel.NetworkInputSettings;
            };

            export type AudioNormalizationSettings = {
                TargetLkfs: number;

                Algorithm: string;

                AlgorithmControl: string;
            };

            export type MultiplexGroupSettings = {};

            export type InputLossFailoverSettings = { InputLossThresholdMsec: number; };

            export type AudioSelector = {
                SelectorSettings: AWS.MediaLive.Channel.AudioSelectorSettings;

                Name: string;
            };

            export type AudioPidSelection = { Pid: number; };

            export type CaptionLanguageMapping = {
                LanguageCode: string;

                LanguageDescription: string;

                CaptionChannel: number;
            };

            export type DvbSubSourceSettings = { Pid: number; };

            export type CaptionSelectorSettings = {
                DvbSubSourceSettings: AWS.MediaLive.Channel.DvbSubSourceSettings;

                Scte27SourceSettings: AWS.MediaLive.Channel.Scte27SourceSettings;

                AribSourceSettings: AWS.MediaLive.Channel.AribSourceSettings;

                EmbeddedSourceSettings: AWS.MediaLive.Channel.EmbeddedSourceSettings;

                Scte20SourceSettings: AWS.MediaLive.Channel.Scte20SourceSettings;

                TeletextSourceSettings: AWS.MediaLive.Channel.TeletextSourceSettings;

                AncillarySourceSettings: AWS.MediaLive.Channel.AncillarySourceSettings;
            };

            export type VideoSelectorSettings = {
                VideoSelectorProgramId: AWS.MediaLive.Channel.VideoSelectorProgramId;

                VideoSelectorPid: AWS.MediaLive.Channel.VideoSelectorPid;
            };

            export type VpcOutputSettings = {
                PublicAddressAllocationIds: string[];

                SecurityGroupIds: string[];

                SubnetIds: string[];
            };

            export type TeletextSourceSettings = {
                OutputRectangle: AWS.MediaLive.Channel.CaptionRectangle;

                PageNumber: string;
            };

            export type CaptionDescription = {
                DestinationSettings: AWS.MediaLive.Channel.CaptionDestinationSettings;

                LanguageCode: string;

                LanguageDescription: string;

                CaptionSelectorName: string;

                Name: string;
            };

            export type MotionGraphicsConfiguration = {
                MotionGraphicsSettings: AWS.MediaLive.Channel.MotionGraphicsSettings;

                MotionGraphicsInsertion: string;
            };

            export type VideoSelectorColorSpaceSettings = { Hdr10Settings: AWS.MediaLive.Channel.Hdr10Settings; };

            export type Output = {
                OutputSettings: AWS.MediaLive.Channel.OutputSettings;

                CaptionDescriptionNames: string[];

                AudioDescriptionNames: string[];

                OutputName: string;

                VideoDescriptionName: string;
            };

            export type NetworkInputSettings = {
                ServerValidation: string;

                HlsInputSettings: AWS.MediaLive.Channel.HlsInputSettings;
            };

            export type H265FilterSettings = { TemporalFilterSettings: AWS.MediaLive.Channel.TemporalFilterSettings; };

            export type HlsBasicPutSettings = {
                FilecacheDuration: number;

                NumRetries: number;

                RestartDelay: number;

                ConnectionRetryInterval: number;
            };

            export type Scte20PlusEmbeddedDestinationSettings = {};

            export type Scte20SourceSettings = {
                Source608ChannelNumber: number;

                Convert608To708: string;
            };

            export type AudioTrack = { Track: number; };

            export type AudioDescription = {
                AudioNormalizationSettings: AWS.MediaLive.Channel.AudioNormalizationSettings;

                LanguageCode: string;

                RemixSettings: AWS.MediaLive.Channel.RemixSettings;

                AudioSelectorName: string;

                StreamName: string;

                LanguageCodeControl: string;

                AudioType: string;

                AudioTypeControl: string;

                CodecSettings: AWS.MediaLive.Channel.AudioCodecSettings;

                Name: string;
            };

            export type BurnInDestinationSettings = {
                BackgroundOpacity: number;

                FontResolution: number;

                OutlineColor: string;

                FontColor: string;

                ShadowColor: string;

                ShadowOpacity: number;

                Font: AWS.MediaLive.Channel.InputLocation;

                ShadowYOffset: number;

                Alignment: string;

                XPosition: number;

                FontSize: string;

                YPosition: number;

                OutlineSize: number;

                TeletextGridControl: string;

                FontOpacity: number;

                ShadowXOffset: number;

                BackgroundColor: string;
            };

            export type RtmpGroupSettings = {
                AuthenticationScheme: string;

                CacheLength: number;

                AdMarkers: string[];

                InputLossAction: string;

                RestartDelay: number;

                CaptionData: string;

                CacheFullBehavior: string;
            };

            export type MsSmoothOutputSettings = {
                NameModifier: string;

                H265PackagingType: string;
            };

            export type CaptionDestinationSettings = {
                AribDestinationSettings: AWS.MediaLive.Channel.AribDestinationSettings;

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

                Scte27DestinationSettings: AWS.MediaLive.Channel.Scte27DestinationSettings;
            };

            export type MsSmoothGroupSettings = {
                SegmentationMode: string;

                Destination: AWS.MediaLive.Channel.OutputLocationRef;

                EventStopBehavior: string;

                FilecacheDuration: number;

                CertificateMode: string;

                AcquisitionPointId: string;

                StreamManifestBehavior: string;

                InputLossAction: string;

                FragmentLength: number;

                RestartDelay: number;

                SparseTrackType: string;

                EventIdMode: string;

                TimestampOffsetMode: string;

                AudioOnlyTimecodeControl: string;

                NumRetries: number;

                TimestampOffset: string;

                EventId: string;

                SendDelayMs: number;

                ConnectionRetryInterval: number;
            };

            export type WavSettings = {
                CodingMode: string;

                SampleRate: number;

                BitDepth: number;
            };

            export type KeyProviderSettings = { StaticKeySettings: AWS.MediaLive.Channel.StaticKeySettings; };

            export type CdiInputSpecification = AWS.MediaLive.Channel.CdiInputSpecification;

            export type OutputGroupSettings = {
                HlsGroupSettings: AWS.MediaLive.Channel.HlsGroupSettings;

                FrameCaptureGroupSettings: AWS.MediaLive.Channel.FrameCaptureGroupSettings;

                MultiplexGroupSettings: AWS.MediaLive.Channel.MultiplexGroupSettings;

                ArchiveGroupSettings: AWS.MediaLive.Channel.ArchiveGroupSettings;

                MediaPackageGroupSettings: AWS.MediaLive.Channel.MediaPackageGroupSettings;

                UdpGroupSettings: AWS.MediaLive.Channel.UdpGroupSettings;

                MsSmoothGroupSettings: AWS.MediaLive.Channel.MsSmoothGroupSettings;

                RtmpGroupSettings: AWS.MediaLive.Channel.RtmpGroupSettings;
            };

            export type HtmlMotionGraphicsSettings = {};

            export type OutputSettings = {
                MediaPackageOutputSettings: AWS.MediaLive.Channel.MediaPackageOutputSettings;

                MsSmoothOutputSettings: AWS.MediaLive.Channel.MsSmoothOutputSettings;

                FrameCaptureOutputSettings: AWS.MediaLive.Channel.FrameCaptureOutputSettings;

                HlsOutputSettings: AWS.MediaLive.Channel.HlsOutputSettings;

                RtmpOutputSettings: AWS.MediaLive.Channel.RtmpOutputSettings;

                UdpOutputSettings: AWS.MediaLive.Channel.UdpOutputSettings;

                MultiplexOutputSettings: AWS.MediaLive.Channel.MultiplexOutputSettings;

                ArchiveOutputSettings: AWS.MediaLive.Channel.ArchiveOutputSettings;
            };

            export type HlsS3Settings = { CannedAcl: string; };

            export type VideoDescription = {
                ScalingBehavior: string;

                RespondToAfd: string;

                Height: number;

                Sharpness: number;

                Width: number;

                CodecSettings: AWS.MediaLive.Channel.VideoCodecSettings;

                Name: string;
            };

            export type BlackoutSlate = {
                NetworkEndBlackout: string;

                State: string;

                NetworkId: string;

                NetworkEndBlackoutImage: AWS.MediaLive.Channel.InputLocation;

                BlackoutSlateImage: AWS.MediaLive.Channel.InputLocation;
            };

            export type ColorSpacePassthroughSettings = {};

            export type HlsMediaStoreSettings = {
                FilecacheDuration: number;

                NumRetries: number;

                MediaStoreStorageClass: string;

                RestartDelay: number;

                ConnectionRetryInterval: number;
            };

            export type M3u8Settings = {
                PatInterval: number;

                ProgramNum: number;

                PcrPeriod: number;

                PmtInterval: number;

                NielsenId3Behavior: string;

                PcrPid: string;

                VideoPid: string;

                AudioFramesPerPes: number;

                TransportStreamId: number;

                PmtPid: string;

                Scte35Pid: string;

                Scte35Behavior: string;

                EcmPid: string;

                TimedMetadataPid: string;

                AudioPids: string;

                PcrControl: string;

                TimedMetadataBehavior: string;
            };

            export type AribDestinationSettings = {};

            export type UdpGroupSettings = {
                TimedMetadataId3Frame: string;

                TimedMetadataId3Period: number;

                InputLossAction: string;
            };

            export type FrameCaptureHlsSettings = {};

            export type RemixSettings = {
                ChannelsOut: number;

                ChannelMappings: AWS.MediaLive.Channel.AudioChannelMapping[];

                ChannelsIn: number;
            };

            export type TemporalFilterSettings = {
                PostFilterSharpening: string;

                Strength: string;
            };

            export type HlsAkamaiSettings = {
                Salt: string;

                FilecacheDuration: number;

                NumRetries: number;

                Token: string;

                RestartDelay: number;

                ConnectionRetryInterval: number;

                HttpTransferMode: string;
            };

            export type InputAttachments = AWS.MediaLive.Channel.InputAttachment[];

            export type ChannelClass = string;

            export type Destinations = AWS.MediaLive.Channel.OutputDestination[];

            export type Vpc = AWS.MediaLive.Channel.VpcOutputSettings;

            export type LogLevel = string;

            export type RoleArn = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Input {

            export type InputSourceRequest = {
                Username: string;

                PasswordParam: string;

                Url: string;
            };

            export type InputDeviceRequest = { Id: string; };

            export type InputDeviceSettings = { Id: string; };

            export type InputVpcRequest = {
                SecurityGroupIds: string[];

                SubnetIds: string[];
            };

            export type InputDestinationRequest = { StreamName: string; };

            export type MediaConnectFlowRequest = { FlowArn: string; };

            export type Type = string;

            export type Destinations = AWS.MediaLive.Input.InputDestinationRequest[];

            export type Vpc = AWS.MediaLive.Input.InputVpcRequest;

            export type MediaConnectFlows = AWS.MediaLive.Input.MediaConnectFlowRequest[];

            export type InputSecurityGroups = string[];

            export type InputDevices = AWS.MediaLive.Input.InputDeviceSettings[];

            export type Sources = AWS.MediaLive.Input.InputSourceRequest[];

            export type RoleArn = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace InputSecurityGroup {

            export type InputWhitelistRuleCidr = { Cidr: string; };

            export type WhitelistRules = AWS.MediaLive.InputSecurityGroup.InputWhitelistRuleCidr[];

            export type Tags = JSONString;

        }

    }

    export namespace DirectoryService {

        export namespace MicrosoftAD {

            export type VpcSettings = AWS.DirectoryService.MicrosoftAD.VpcSettings;

            export type CreateAlias = boolean;

            export type Edition = string;

            export type EnableSso = boolean;

            export type Name = string;

            export type Password = string;

            export type ShortName = string;

        }

        export namespace SimpleAD {

            export type VpcSettings = AWS.DirectoryService.SimpleAD.VpcSettings;

            export type CreateAlias = boolean;

            export type Description = string;

            export type EnableSso = boolean;

            export type Name = string;

            export type Password = string;

            export type ShortName = string;

            export type Size = string;

        }

    }

    export namespace AppSync {

        export namespace DataSource {

            export type RelationalDatabaseConfig = AWS.AppSync.DataSource.RelationalDatabaseConfig;

            export type LambdaConfig = AWS.AppSync.DataSource.LambdaConfig;

            export type HttpConfig = AWS.AppSync.DataSource.HttpConfig;

            export type AwsIamConfig = {
                SigningRegion: string;

                SigningServiceName: string;
            };

            export type DynamoDBConfig = AWS.AppSync.DataSource.DynamoDBConfig;

            export type AuthorizationConfig = {
                AwsIamConfig: AWS.AppSync.DataSource.AwsIamConfig;

                AuthorizationType: string;
            };

            export type RdsHttpEndpointConfig = {
                AwsRegion: string;

                Schema: string;

                DatabaseName: string;

                DbClusterIdentifier: string;

                AwsSecretStoreArn: string;
            };

            export type ElasticsearchConfig = AWS.AppSync.DataSource.ElasticsearchConfig;

            export type DeltaSyncConfig = {
                BaseTableTTL: string;

                DeltaSyncTableTTL: string;

                DeltaSyncTableName: string;
            };

            export type Type = string;

            export type Description = string;

            export type ServiceRoleArn = string;

            export type ApiId = string;

            export type Name = string;

        }

        export namespace GraphQLApi {

            export type Tags = AWS.AppSync.GraphQLApi.Tags;

            export type OpenIDConnectConfig = AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

            export type CognitoUserPoolConfig = {
                AppIdClientRegex: string;

                UserPoolId: string;

                AwsRegion: string;
            };

            export type AdditionalAuthenticationProviders = AWS.AppSync.GraphQLApi.AdditionalAuthenticationProviders;

            export type UserPoolConfig = AWS.AppSync.GraphQLApi.UserPoolConfig;

            export type LogConfig = AWS.AppSync.GraphQLApi.LogConfig;

            export type AdditionalAuthenticationProvider = {
                OpenIDConnectConfig: AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

                UserPoolConfig: AWS.AppSync.GraphQLApi.CognitoUserPoolConfig;

                AuthenticationType: string;
            };

            export type XrayEnabled = boolean;

            export type Name = string;

            export type AuthenticationType = string;

        }

        export namespace FunctionConfiguration {

            export type SyncConfig = AWS.AppSync.FunctionConfiguration.SyncConfig;

            export type LambdaConflictHandlerConfig = { LambdaConflictHandlerArn: string; };

            export type ResponseMappingTemplateS3Location = string;

            export type Description = string;

            export type DataSourceName = string;

            export type RequestMappingTemplate = string;

            export type ResponseMappingTemplate = string;

            export type FunctionVersion = string;

            export type RequestMappingTemplateS3Location = string;

            export type ApiId = string;

            export type Name = string;

        }

        export namespace Resolver {

            export type LambdaConflictHandlerConfig = { LambdaConflictHandlerArn: string; };

            export type PipelineConfig = AWS.AppSync.Resolver.PipelineConfig;

            export type SyncConfig = AWS.AppSync.Resolver.SyncConfig;

            export type CachingConfig = AWS.AppSync.Resolver.CachingConfig;

            export type ResponseMappingTemplateS3Location = string;

            export type TypeName = string;

            export type DataSourceName = string;

            export type RequestMappingTemplate = string;

            export type ResponseMappingTemplate = string;

            export type Kind = string;

            export type RequestMappingTemplateS3Location = string;

            export type ApiId = string;

            export type FieldName = string;

        }

        export namespace GraphQLSchema {

            export type Definition = string;

            export type DefinitionS3Location = string;

            export type ApiId = string;

        }

        export namespace ApiKey {

            export type Description = string;

            export type ApiKeyId = string;

            export type Expires = number;

            export type ApiId = string;

        }

        export namespace ApiCache {

            export type Type = string;

            export type TransitEncryptionEnabled = boolean;

            export type AtRestEncryptionEnabled = boolean;

            export type ApiId = string;

            export type ApiCachingBehavior = string;

            export type Ttl = number;

        }

    }

    export namespace Lambda {

        export namespace Function {

            export type VpcConfig = AWS.Lambda.Function.VpcConfig;

            export type DeadLetterConfig = AWS.Lambda.Function.DeadLetterConfig;

            export type FileSystemConfig = {
                Arn: string;

                LocalMountPath: string;
            };

            export type Code = AWS.Lambda.Function.Code;

            export type TracingConfig = AWS.Lambda.Function.TracingConfig;

            export type Environment = AWS.Lambda.Function.Environment;

            export type ImageConfig = AWS.Lambda.Function.ImageConfig;

            export type Description = string;

            export type FileSystemConfigs = AWS.Lambda.Function.FileSystemConfig[];

            export type FunctionName = string;

            export type Handler = string;

            export type KmsKeyArn = string;

            export type Layers = string[];

            export type MemorySize = number;

            export type ReservedConcurrentExecutions = number;

            export type Role = string;

            export type Runtime = string;

            export type Tags = AWS.Lambda.Function.Tag[];

            export type Timeout = number;

            export type CodeSigningConfigArn = string;

            export type PackageType = string;

        }

        export namespace Alias {

            export type ProvisionedConcurrencyConfiguration = { ProvisionedConcurrentExecutions: number; };

            export type AliasRoutingConfiguration = { AdditionalVersionWeights: AWS.Lambda.Alias.VersionWeight[]; };

            export type VersionWeight = {
                FunctionVersion: string;

                FunctionWeight: number;
            };

            export type Description = string;

            export type FunctionName = string;

            export type FunctionVersion = string;

            export type Name = string;

            export type ProvisionedConcurrencyConfig = AWS.Lambda.Alias.ProvisionedConcurrencyConfiguration;

            export type RoutingConfig = AWS.Lambda.Alias.AliasRoutingConfiguration;

        }

        export namespace EventInvokeConfig {

            export type OnFailure = { Destination: string; };

            export type OnSuccess = { Destination: string; };

            export type DestinationConfig = AWS.Lambda.EventInvokeConfig.DestinationConfig;

            export type FunctionName = string;

            export type MaximumRetryAttempts = number;

            export type Qualifier = string;

            export type MaximumEventAgeInSeconds = number;

        }

        export namespace EventSourceMapping {

            export type SelfManagedEventSource = AWS.Lambda.EventSourceMapping.SelfManagedEventSource;

            export type OnFailure = { Destination: string; };

            export type SourceAccessConfiguration = {
                Type: string;

                URI: string;
            };

            export type Endpoints = { KafkaBootstrapServers: string[]; };

            export type DestinationConfig = AWS.Lambda.EventSourceMapping.DestinationConfig;

            export type BatchSize = number;

            export type BisectBatchOnFunctionError = boolean;

            export type Enabled = boolean;

            export type EventSourceArn = string;

            export type FunctionName = string;

            export type MaximumBatchingWindowInSeconds = number;

            export type MaximumRecordAgeInSeconds = number;

            export type MaximumRetryAttempts = number;

            export type ParallelizationFactor = number;

            export type StartingPosition = string;

            export type StartingPositionTimestamp = number;

            export type Topics = string[];

            export type Queues = string[];

            export type SourceAccessConfigurations = AWS.Lambda.EventSourceMapping.SourceAccessConfiguration[];

            export type TumblingWindowInSeconds = number;

            export type FunctionResponseTypes = string[];

        }

        export namespace LayerVersion {

            export type Content = AWS.Lambda.LayerVersion.Content;

            export type CompatibleRuntimes = string[];

            export type LicenseInfo = string;

            export type Description = string;

            export type LayerName = string;

        }

        export namespace CodeSigningConfig {

            export type CodeSigningPolicies = AWS.Lambda.CodeSigningConfig.CodeSigningPolicies;

            export type AllowedPublishers = AWS.Lambda.CodeSigningConfig.AllowedPublishers;

            export type Description = string;

        }

        export namespace Version {

            export type ProvisionedConcurrencyConfiguration = { ProvisionedConcurrentExecutions: number; };

            export type CodeSha256 = string;

            export type Description = string;

            export type FunctionName = string;

            export type ProvisionedConcurrencyConfig = AWS.Lambda.Version.ProvisionedConcurrencyConfiguration;

        }

        export namespace LayerVersionPermission {

            export type Action = string;

            export type LayerVersionArn = string;

            export type OrganizationId = string;

            export type Principal = string;

        }

        export namespace Permission {

            export type Action = string;

            export type EventSourceToken = string;

            export type FunctionName = string;

            export type Principal = string;

            export type SourceAccount = string;

            export type SourceArn = string;

        }

    }

    export namespace Elasticsearch {

        export namespace Domain {

            export type DomainEndpointOptions = AWS.Elasticsearch.Domain.DomainEndpointOptions;

            export type NodeToNodeEncryptionOptions = AWS.Elasticsearch.Domain.NodeToNodeEncryptionOptions;

            export type ElasticsearchClusterConfig = AWS.Elasticsearch.Domain.ElasticsearchClusterConfig;

            export type AdvancedSecurityOptionsInput = {
                Enabled: boolean;

                InternalUserDatabaseEnabled: boolean;

                MasterUserOptions: AWS.Elasticsearch.Domain.MasterUserOptions;
            };

            export type ZoneAwarenessConfig = { AvailabilityZoneCount: number; };

            export type SnapshotOptions = AWS.Elasticsearch.Domain.SnapshotOptions;

            export type CognitoOptions = AWS.Elasticsearch.Domain.CognitoOptions;

            export type VPCOptions = AWS.Elasticsearch.Domain.VPCOptions;

            export type MasterUserOptions = {
                MasterUserARN: string;

                MasterUserName: string;

                MasterUserPassword: string;
            };

            export type LogPublishingOption = {
                CloudWatchLogsLogGroupArn: string;

                Enabled: boolean;
            };

            export type EBSOptions = AWS.Elasticsearch.Domain.EBSOptions;

            export type EncryptionAtRestOptions = AWS.Elasticsearch.Domain.EncryptionAtRestOptions;

            export type AccessPolicies = JSONString;

            export type AdvancedOptions = Record<string, string>;

            export type AdvancedSecurityOptions = AWS.Elasticsearch.Domain.AdvancedSecurityOptionsInput;

            export type DomainName = string;

            export type ElasticsearchVersion = string;

            export type LogPublishingOptions = Record<string, AWS.Elasticsearch.Domain.LogPublishingOption>;

            export type Tags = AWS.Elasticsearch.Domain.Tag[];

        }

    }

    export namespace GroundStation {

        export namespace Config {

            export type S3RecordingConfig = {
                BucketArn: string;

                RoleArn: string;

                Prefix: string;
            };

            export type UplinkEchoConfig = {
                Enabled: boolean;

                AntennaUplinkConfigArn: string;
            };

            export type DataflowEndpointConfig = {
                DataflowEndpointName: string;

                DataflowEndpointRegion: string;
            };

            export type AntennaDownlinkConfig = { SpectrumConfig: AWS.GroundStation.Config.SpectrumConfig; };

            export type DemodulationConfig = { UnvalidatedJSON: string; };

            export type AntennaDownlinkDemodDecodeConfig = {
                SpectrumConfig: AWS.GroundStation.Config.SpectrumConfig;

                DemodulationConfig: AWS.GroundStation.Config.DemodulationConfig;

                DecodeConfig: AWS.GroundStation.Config.DecodeConfig;
            };

            export type UplinkSpectrumConfig = {
                CenterFrequency: AWS.GroundStation.Config.Frequency;

                Polarization: string;
            };

            export type Frequency = {
                Value: number;

                Units: string;
            };

            export type SpectrumConfig = {
                CenterFrequency: AWS.GroundStation.Config.Frequency;

                Bandwidth: AWS.GroundStation.Config.FrequencyBandwidth;

                Polarization: string;
            };

            export type FrequencyBandwidth = {
                Value: number;

                Units: string;
            };

            export type TrackingConfig = { Autotrack: string; };

            export type ConfigData = AWS.GroundStation.Config.ConfigData;

            export type AntennaUplinkConfig = {
                SpectrumConfig: AWS.GroundStation.Config.UplinkSpectrumConfig;

                TargetEirp: AWS.GroundStation.Config.Eirp;

                TransmitDisabled: boolean;
            };

            export type DecodeConfig = { UnvalidatedJSON: string; };

            export type Eirp = {
                Value: number;

                Units: string;
            };

            export type Name = string;

            export type Tags = AWS.GroundStation.Config.Tag[];

        }

        export namespace MissionProfile {

            export type DataflowEdge = {
                Source: string;

                Destination: string;
            };

            export type Name = string;

            export type ContactPrePassDurationSeconds = number;

            export type ContactPostPassDurationSeconds = number;

            export type MinimumViableContactDurationSeconds = number;

            export type DataflowEdges = AWS.GroundStation.MissionProfile.DataflowEdge[];

            export type TrackingConfigArn = string;

            export type Tags = AWS.GroundStation.MissionProfile.Tag[];

        }

        export namespace DataflowEndpointGroup {

            export type DataflowEndpoint = {
                Name: string;

                Address: AWS.GroundStation.DataflowEndpointGroup.SocketAddress;

                Mtu: number;
            };

            export type SecurityDetails = {
                SubnetIds: string[];

                SecurityGroupIds: string[];

                RoleArn: string;
            };

            export type SocketAddress = {
                Name: string;

                Port: number;
            };

            export type EndpointDetails = AWS.GroundStation.DataflowEndpointGroup.EndpointDetails[];

            export type Tags = AWS.GroundStation.DataflowEndpointGroup.Tag[];

        }

    }

    export namespace IoTEvents {

        export namespace DetectorModel {

            export type SetTimer = {
                DurationExpression: string;

                Seconds: number;

                TimerName: string;
            };

            export type ResetTimer = { TimerName: string; };

            export type IotEvents = {
                InputName: string;

                Payload: AWS.IoTEvents.DetectorModel.Payload;
            };

            export type TransitionEvent = {
                Actions: AWS.IoTEvents.DetectorModel.Action[];

                Condition: string;

                EventName: string;

                NextState: string;
            };

            export type IotSiteWise = {
                AssetId: string;

                EntryId: string;

                PropertyAlias: string;

                PropertyId: string;

                PropertyValue: AWS.IoTEvents.DetectorModel.AssetPropertyValue;
            };

            export type DynamoDB = {
                HashKeyField: string;

                HashKeyType: string;

                HashKeyValue: string;

                Operation: string;

                Payload: AWS.IoTEvents.DetectorModel.Payload;

                PayloadField: string;

                RangeKeyField: string;

                RangeKeyType: string;

                RangeKeyValue: string;

                TableName: string;
            };

            export type Firehose = {
                DeliveryStreamName: string;

                Payload: AWS.IoTEvents.DetectorModel.Payload;

                Separator: string;
            };

            export type ClearTimer = { TimerName: string; };

            export type State = {
                OnEnter: AWS.IoTEvents.DetectorModel.OnEnter;

                OnExit: AWS.IoTEvents.DetectorModel.OnExit;

                OnInput: AWS.IoTEvents.DetectorModel.OnInput;

                StateName: string;
            };

            export type Event = {
                Actions: AWS.IoTEvents.DetectorModel.Action[];

                Condition: string;

                EventName: string;
            };

            export type Sns = {
                Payload: AWS.IoTEvents.DetectorModel.Payload;

                TargetArn: string;
            };

            export type OnExit = { Events: AWS.IoTEvents.DetectorModel.Event[]; };

            export type Sqs = {
                Payload: AWS.IoTEvents.DetectorModel.Payload;

                QueueUrl: string;

                UseBase64: boolean;
            };

            export type DetectorModelDefinition = AWS.IoTEvents.DetectorModel.DetectorModelDefinition;

            export type IotTopicPublish = {
                MqttTopic: string;

                Payload: AWS.IoTEvents.DetectorModel.Payload;
            };

            export type Action = {
                ClearTimer: AWS.IoTEvents.DetectorModel.ClearTimer;

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

                Sqs: AWS.IoTEvents.DetectorModel.Sqs;
            };

            export type AssetPropertyTimestamp = {
                OffsetInNanos: string;

                TimeInSeconds: string;
            };

            export type DynamoDBv2 = {
                Payload: AWS.IoTEvents.DetectorModel.Payload;

                TableName: string;
            };

            export type OnInput = {
                Events: AWS.IoTEvents.DetectorModel.Event[];

                TransitionEvents: AWS.IoTEvents.DetectorModel.TransitionEvent[];
            };

            export type AssetPropertyVariant = {
                BooleanValue: string;

                DoubleValue: string;

                IntegerValue: string;

                StringValue: string;
            };

            export type SetVariable = {
                Value: string;

                VariableName: string;
            };

            export type Payload = {
                ContentExpression: string;

                Type: string;
            };

            export type OnEnter = { Events: AWS.IoTEvents.DetectorModel.Event[]; };

            export type AssetPropertyValue = {
                Quality: string;

                Timestamp: AWS.IoTEvents.DetectorModel.AssetPropertyTimestamp;

                Value: AWS.IoTEvents.DetectorModel.AssetPropertyVariant;
            };

            export type Lambda = {
                FunctionArn: string;

                Payload: AWS.IoTEvents.DetectorModel.Payload;
            };

            export type DetectorModelDescription = string;

            export type DetectorModelName = string;

            export type EvaluationMethod = string;

            export type Key = string;

            export type RoleArn = string;

            export type Tags = AWS.IoTEvents.DetectorModel.Tag[];

        }

        export namespace Input {

            export type Attribute = { JsonPath: string; };

            export type InputDefinition = AWS.IoTEvents.Input.InputDefinition;

            export type InputDescription = string;

            export type InputName = string;

            export type Tags = AWS.IoTEvents.Input.Tag[];

        }

    }

    export namespace GreengrassV2 {

        export namespace ComponentVersion {

            export type ComponentPlatform = {
                Name: string;

                Attributes: Record<string, string>;
            };

            export type LambdaContainerParams = {
                MemorySizeInKB: number;

                MountROSysfs: boolean;

                Volumes: AWS.GreengrassV2.ComponentVersion.LambdaVolumeMount[];

                Devices: AWS.GreengrassV2.ComponentVersion.LambdaDeviceMount[];
            };

            export type LambdaVolumeMount = {
                SourcePath: string;

                DestinationPath: string;

                Permission: string;

                AddGroupOwner: boolean;
            };

            export type LambdaFunctionRecipeSource = {
                LambdaArn: string;

                ComponentName: string;

                ComponentVersion: string;

                ComponentPlatforms: AWS.GreengrassV2.ComponentVersion.ComponentPlatform[];

                ComponentDependencies: Record<string, AWS.GreengrassV2.ComponentVersion.ComponentDependencyRequirement>;

                ComponentLambdaParameters: AWS.GreengrassV2.ComponentVersion.LambdaExecutionParameters;
            };

            export type ComponentDependencyRequirement = {
                VersionRequirement: string;

                DependencyType: string;
            };

            export type LambdaDeviceMount = {
                Path: string;

                Permission: string;

                AddGroupOwner: boolean;
            };

            export type LambdaLinuxProcessParams = {
                IsolationMode: string;

                ContainerParams: AWS.GreengrassV2.ComponentVersion.LambdaContainerParams;
            };

            export type LambdaEventSource = {
                Topic: string;

                Type: string;
            };

            export type LambdaExecutionParameters = {
                EventSources: AWS.GreengrassV2.ComponentVersion.LambdaEventSource[];

                MaxQueueSize: number;

                MaxInstancesCount: number;

                MaxIdleTimeInSeconds: number;

                TimeoutInSeconds: number;

                StatusTimeoutInSeconds: number;

                Pinned: boolean;

                InputPayloadEncodingType: string;

                ExecArgs: string[];

                EnvironmentVariables: Record<string, string>;

                LinuxProcessParams: AWS.GreengrassV2.ComponentVersion.LambdaLinuxProcessParams;
            };

            export type InlineRecipe = string;

            export type LambdaFunction = AWS.GreengrassV2.ComponentVersion.LambdaFunctionRecipeSource;

            export type Tags = Record<string, string>;

        }

    }

    export namespace ManagedBlockchain {

        export namespace Node {

            export type NodeConfiguration = AWS.ManagedBlockchain.Node.NodeConfiguration;

            export type MemberId = string;

            export type NetworkId = string;

        }

        export namespace Member {

            export type NetworkFrameworkConfiguration = { NetworkFabricConfiguration: AWS.ManagedBlockchain.Member.NetworkFabricConfiguration; };

            export type NetworkConfiguration = AWS.ManagedBlockchain.Member.NetworkConfiguration;

            export type NetworkFabricConfiguration = { Edition: string; };

            export type MemberConfiguration = AWS.ManagedBlockchain.Member.MemberConfiguration;

            export type ApprovalThresholdPolicy = {
                ThresholdComparator: string;

                ThresholdPercentage: number;

                ProposalDurationInHours: number;
            };

            export type MemberFrameworkConfiguration = { MemberFabricConfiguration: AWS.ManagedBlockchain.Member.MemberFabricConfiguration; };

            export type VotingPolicy = { ApprovalThresholdPolicy: AWS.ManagedBlockchain.Member.ApprovalThresholdPolicy; };

            export type MemberFabricConfiguration = {
                AdminUsername: string;

                AdminPassword: string;
            };

            export type NetworkId = string;

            export type InvitationId = string;

        }

    }

    export namespace WAF {

        export namespace WebACL {

            export type WafAction = { Type: string; };

            export type ActivatedRule = {
                Action: AWS.WAF.WebACL.WafAction;

                Priority: number;

                RuleId: string;
            };

            export type DefaultAction = AWS.WAF.WebACL.WafAction;

            export type MetricName = string;

            export type Name = string;

            export type Rules = AWS.WAF.WebACL.ActivatedRule[];

        }

        export namespace IPSet {

            export type IPSetDescriptor = {
                Type: string;

                Value: string;
            };

            export type IPSetDescriptors = AWS.WAF.IPSet.IPSetDescriptor[];

            export type Name = string;

        }

        export namespace ByteMatchSet {

            export type FieldToMatch = {
                Data: string;

                Type: string;
            };

            export type ByteMatchTuple = {
                FieldToMatch: AWS.WAF.ByteMatchSet.FieldToMatch;

                PositionalConstraint: string;

                TargetString: string;

                TargetStringBase64: string;

                TextTransformation: string;
            };

            export type ByteMatchTuples = AWS.WAF.ByteMatchSet.ByteMatchTuple[];

            export type Name = string;

        }

        export namespace SqlInjectionMatchSet {

            export type FieldToMatch = {
                Data: string;

                Type: string;
            };

            export type SqlInjectionMatchTuple = {
                FieldToMatch: AWS.WAF.SqlInjectionMatchSet.FieldToMatch;

                TextTransformation: string;
            };

            export type Name = string;

            export type SqlInjectionMatchTuples = AWS.WAF.SqlInjectionMatchSet.SqlInjectionMatchTuple[];

        }

        export namespace XssMatchSet {

            export type XssMatchTuple = {
                FieldToMatch: AWS.WAF.XssMatchSet.FieldToMatch;

                TextTransformation: string;
            };

            export type FieldToMatch = {
                Data: string;

                Type: string;
            };

            export type Name = string;

            export type XssMatchTuples = AWS.WAF.XssMatchSet.XssMatchTuple[];

        }

        export namespace Rule {

            export type Predicate = {
                DataId: string;

                Negated: boolean;

                Type: string;
            };

            export type MetricName = string;

            export type Name = string;

            export type Predicates = AWS.WAF.Rule.Predicate[];

        }

        export namespace SizeConstraintSet {

            export type FieldToMatch = {
                Data: string;

                Type: string;
            };

            export type SizeConstraint = {
                ComparisonOperator: string;

                FieldToMatch: AWS.WAF.SizeConstraintSet.FieldToMatch;

                Size: number;

                TextTransformation: string;
            };

            export type Name = string;

            export type SizeConstraints = AWS.WAF.SizeConstraintSet.SizeConstraint[];

        }

    }

    export namespace NetworkFirewall {

        export namespace RuleGroup {

            export type ActionDefinition = { PublishMetricAction: AWS.NetworkFirewall.RuleGroup.PublishMetricAction; };

            export type TCPFlagField = {
                Flags: string[];

                Masks: string[];
            };

            export type Header = {
                Protocol: string;

                Source: string;

                SourcePort: string;

                Direction: string;

                Destination: string;

                DestinationPort: string;
            };

            export type Dimension = { Value: string; };

            export type StatelessRulesAndCustomActions = {
                StatelessRules: AWS.NetworkFirewall.RuleGroup.StatelessRule[];

                CustomActions: AWS.NetworkFirewall.RuleGroup.CustomAction[];
            };

            export type RuleOption = {
                Keyword: string;

                Settings: string[];
            };

            export type RuleDefinition = {
                MatchAttributes: AWS.NetworkFirewall.RuleGroup.MatchAttributes;

                Actions: string[];
            };

            export type RuleGroup = AWS.NetworkFirewall.RuleGroup.RuleGroup;

            export type RulesSourceList = {
                Targets: string[];

                TargetTypes: string[];

                GeneratedRulesType: string;
            };

            export type StatelessRule = {
                RuleDefinition: AWS.NetworkFirewall.RuleGroup.RuleDefinition;

                Priority: number;
            };

            export type PortRange = {
                FromPort: number;

                ToPort: number;
            };

            export type IPSet = { Definition: string[]; };

            export type CustomAction = {
                ActionName: string;

                ActionDefinition: AWS.NetworkFirewall.RuleGroup.ActionDefinition;
            };

            export type PortSet = { Definition: string[]; };

            export type MatchAttributes = {
                Sources: AWS.NetworkFirewall.RuleGroup.Address[];

                Destinations: AWS.NetworkFirewall.RuleGroup.Address[];

                SourcePorts: AWS.NetworkFirewall.RuleGroup.PortRange[];

                DestinationPorts: AWS.NetworkFirewall.RuleGroup.PortRange[];

                Protocols: number[];

                TCPFlags: AWS.NetworkFirewall.RuleGroup.TCPFlagField[];
            };

            export type RuleVariables = {
                IPSets: Record<string, AWS.NetworkFirewall.RuleGroup.IPSet>;

                PortSets: Record<string, AWS.NetworkFirewall.RuleGroup.PortSet>;
            };

            export type PublishMetricAction = { Dimensions: AWS.NetworkFirewall.RuleGroup.Dimension[]; };

            export type Address = { AddressDefinition: string; };

            export type RulesSource = {
                RulesString: string;

                RulesSourceList: AWS.NetworkFirewall.RuleGroup.RulesSourceList;

                StatefulRules: AWS.NetworkFirewall.RuleGroup.StatefulRule[];

                StatelessRulesAndCustomActions: AWS.NetworkFirewall.RuleGroup.StatelessRulesAndCustomActions;
            };

            export type StatefulRule = {
                Action: string;

                Header: AWS.NetworkFirewall.RuleGroup.Header;

                RuleOptions: AWS.NetworkFirewall.RuleGroup.RuleOption[];
            };

            export type RuleGroupName = string;

            export type Type = string;

            export type Capacity = number;

            export type Description = string;

            export type Tags = AWS.NetworkFirewall.RuleGroup.Tag[];

        }

        export namespace FirewallPolicy {

            export type CustomAction = {
                ActionName: string;

                ActionDefinition: AWS.NetworkFirewall.FirewallPolicy.ActionDefinition;
            };

            export type StatelessRuleGroupReference = {
                ResourceArn: string;

                Priority: number;
            };

            export type StatefulRuleGroupReference = { ResourceArn: string; };

            export type PublishMetricAction = { Dimensions: AWS.NetworkFirewall.FirewallPolicy.Dimension[]; };

            export type ActionDefinition = { PublishMetricAction: AWS.NetworkFirewall.FirewallPolicy.PublishMetricAction; };

            export type Dimension = { Value: string; };

            export type FirewallPolicy = AWS.NetworkFirewall.FirewallPolicy.FirewallPolicy;

            export type FirewallPolicyName = string;

            export type Description = string;

            export type Tags = AWS.NetworkFirewall.FirewallPolicy.Tag[];

        }

        export namespace LoggingConfiguration {

            export type LogDestinationConfig = {
                LogType: string;

                LogDestinationType: string;

                LogDestination: Record<string, string>;
            };

            export type LoggingConfiguration = AWS.NetworkFirewall.LoggingConfiguration.LoggingConfiguration;

            export type FirewallName = string;

            export type FirewallArn = string;

        }

        export namespace Firewall {

            export type SubnetMapping = { SubnetId: string; };

            export type FirewallName = string;

            export type FirewallPolicyArn = string;

            export type VpcId = string;

            export type SubnetMappings = AWS.NetworkFirewall.Firewall.SubnetMapping[];

            export type DeleteProtection = boolean;

            export type SubnetChangeProtection = boolean;

            export type FirewallPolicyChangeProtection = boolean;

            export type Description = string;

            export type Tags = AWS.NetworkFirewall.Firewall.Tag[];

        }

    }

    export namespace DataSync {

        export namespace Task {

            export type FilterRule = {
                FilterType: string;

                Value: string;
            };

            export type Options = AWS.DataSync.Task.Options;

            export type TaskSchedule = { ScheduleExpression: string; };

            export type Excludes = AWS.DataSync.Task.FilterRule[];

            export type Tags = AWS.DataSync.Task.Tag[];

            export type CloudWatchLogGroupArn = string;

            export type DestinationLocationArn = string;

            export type Name = string;

            export type Schedule = AWS.DataSync.Task.TaskSchedule;

            export type SourceLocationArn = string;

        }

        export namespace LocationS3 {

            export type S3Config = AWS.DataSync.LocationS3.S3Config;

            export type S3BucketArn = string;

            export type Subdirectory = string;

            export type S3StorageClass = string;

            export type Tags = AWS.DataSync.LocationS3.Tag[];

        }

        export namespace LocationNFS {

            export type OnPremConfig = AWS.DataSync.LocationNFS.OnPremConfig;

            export type MountOptions = AWS.DataSync.LocationNFS.MountOptions;

            export type ServerHostname = string;

            export type Subdirectory = string;

            export type Tags = AWS.DataSync.LocationNFS.Tag[];

        }

        export namespace LocationEFS {

            export type Ec2Config = AWS.DataSync.LocationEFS.Ec2Config;

            export type EfsFilesystemArn = string;

            export type Subdirectory = string;

            export type Tags = AWS.DataSync.LocationEFS.Tag[];

        }

        export namespace LocationSMB {

            export type MountOptions = AWS.DataSync.LocationSMB.MountOptions;

            export type AgentArns = string[];

            export type Domain = string;

            export type Password = string;

            export type ServerHostname = string;

            export type Subdirectory = string;

            export type User = string;

            export type Tags = AWS.DataSync.LocationSMB.Tag[];

        }

        export namespace Agent {

            export type AgentName = string;

            export type ActivationKey = string;

            export type SecurityGroupArns = string[];

            export type SubnetArns = string[];

            export type VpcEndpointId = string;

            export type Tags = AWS.DataSync.Agent.Tag[];

        }

        export namespace LocationFSxWindows {

            export type Domain = string;

            export type FsxFilesystemArn = string;

            export type Password = string;

            export type SecurityGroupArns = string[];

            export type Subdirectory = string;

            export type User = string;

            export type Tags = AWS.DataSync.LocationFSxWindows.Tag[];

        }

        export namespace LocationObjectStorage {

            export type AccessKey = string;

            export type AgentArns = string[];

            export type BucketName = string;

            export type SecretKey = string;

            export type ServerHostname = string;

            export type ServerPort = number;

            export type ServerProtocol = string;

            export type Subdirectory = string;

            export type Tags = AWS.DataSync.LocationObjectStorage.Tag[];

        }

    }

    export namespace ApiGateway {

        export namespace Deployment {

            export type MethodSetting = {
                CacheDataEncrypted: boolean;

                CacheTtlInSeconds: number;

                CachingEnabled: boolean;

                DataTraceEnabled: boolean;

                HttpMethod: string;

                LoggingLevel: string;

                MetricsEnabled: boolean;

                ResourcePath: string;

                ThrottlingBurstLimit: number;

                ThrottlingRateLimit: number;
            };

            export type AccessLogSetting = {
                DestinationArn: string;

                Format: string;
            };

            export type DeploymentCanarySettings = AWS.ApiGateway.Deployment.DeploymentCanarySettings;

            export type StageDescription = AWS.ApiGateway.Deployment.StageDescription;

            export type CanarySetting = {
                PercentTraffic: number;

                StageVariableOverrides: Record<string, string>;

                UseStageCache: boolean;
            };

            export type Description = string;

            export type RestApiId = string;

            export type StageName = string;

        }

        export namespace UsagePlan {

            export type ApiStage = {
                ApiId: string;

                Stage: string;

                Throttle: Record<string, AWS.ApiGateway.UsagePlan.ThrottleSettings>;
            };

            export type ThrottleSettings = {
                BurstLimit: number;

                RateLimit: number;
            };

            export type QuotaSettings = {
                Limit: number;

                Offset: number;

                Period: string;
            };

            export type ApiStages = AWS.ApiGateway.UsagePlan.ApiStage[];

            export type Description = string;

            export type Quota = AWS.ApiGateway.UsagePlan.QuotaSettings;

            export type Tags = AWS.ApiGateway.UsagePlan.Tag[];

            export type Throttle = AWS.ApiGateway.UsagePlan.ThrottleSettings;

            export type UsagePlanName = string;

        }

        export namespace ApiKey {

            export type StageKey = {
                RestApiId: string;

                StageName: string;
            };

            export type CustomerId = string;

            export type Description = string;

            export type Enabled = boolean;

            export type GenerateDistinctId = boolean;

            export type Name = string;

            export type StageKeys = AWS.ApiGateway.ApiKey.StageKey[];

            export type Tags = AWS.ApiGateway.ApiKey.Tag[];

            export type Value = string;

        }

        export namespace DocumentationPart {

            export type Location = AWS.ApiGateway.DocumentationPart.Location;

            export type Properties = string;

            export type RestApiId = string;

        }

        export namespace Method {

            export type MethodResponse = {
                ResponseModels: Record<string, string>;

                ResponseParameters: Record<string, boolean>;

                StatusCode: string;
            };

            export type Integration = AWS.ApiGateway.Method.Integration;

            export type IntegrationResponse = {
                ContentHandling: string;

                ResponseParameters: Record<string, string>;

                ResponseTemplates: Record<string, string>;

                SelectionPattern: string;

                StatusCode: string;
            };

            export type ApiKeyRequired = boolean;

            export type AuthorizationScopes = string[];

            export type AuthorizationType = string;

            export type AuthorizerId = string;

            export type HttpMethod = string;

            export type MethodResponses = AWS.ApiGateway.Method.MethodResponse[];

            export type OperationName = string;

            export type RequestModels = Record<string, string>;

            export type RequestParameters = Record<string, boolean>;

            export type RequestValidatorId = string;

            export type ResourceId = string;

            export type RestApiId = string;

        }

        export namespace DomainName {

            export type MutualTlsAuthentication = AWS.ApiGateway.DomainName.MutualTlsAuthentication;

            export type EndpointConfiguration = AWS.ApiGateway.DomainName.EndpointConfiguration;

            export type DomainName = string;

            export type CertificateArn = string;

            export type RegionalCertificateArn = string;

            export type SecurityPolicy = string;

            export type Tags = AWS.ApiGateway.DomainName.Tag[];

        }

        export namespace RestApi {

            export type S3Location = {
                Bucket: string;

                ETag: string;

                Key: string;

                Version: string;
            };

            export type EndpointConfiguration = AWS.ApiGateway.RestApi.EndpointConfiguration;

            export type ApiKeySourceType = string;

            export type BinaryMediaTypes = string[];

            export type Body = JSONString;

            export type BodyS3Location = AWS.ApiGateway.RestApi.S3Location;

            export type CloneFrom = string;

            export type Description = string;

            export type DisableExecuteApiEndpoint = boolean;

            export type FailOnWarnings = boolean;

            export type MinimumCompressionSize = number;

            export type Mode = string;

            export type Name = string;

            export type Parameters = Record<string, string>;

            export type Policy = JSONString;

            export type Tags = AWS.ApiGateway.RestApi.Tag[];

        }

        export namespace Stage {

            export type CanarySetting = AWS.ApiGateway.Stage.CanarySetting;

            export type AccessLogSetting = AWS.ApiGateway.Stage.AccessLogSetting;

            export type MethodSetting = {
                CacheDataEncrypted: boolean;

                CacheTtlInSeconds: number;

                CachingEnabled: boolean;

                DataTraceEnabled: boolean;

                HttpMethod: string;

                LoggingLevel: string;

                MetricsEnabled: boolean;

                ResourcePath: string;

                ThrottlingBurstLimit: number;

                ThrottlingRateLimit: number;
            };

            export type CacheClusterEnabled = boolean;

            export type CacheClusterSize = string;

            export type ClientCertificateId = string;

            export type DeploymentId = string;

            export type Description = string;

            export type DocumentationVersion = string;

            export type MethodSettings = AWS.ApiGateway.Stage.MethodSetting[];

            export type RestApiId = string;

            export type StageName = string;

            export type Tags = AWS.ApiGateway.Stage.Tag[];

            export type TracingEnabled = boolean;

            export type Variables = Record<string, string>;

        }

        export namespace GatewayResponse {

            export type ResponseParameters = Record<string, string>;

            export type ResponseTemplates = Record<string, string>;

            export type ResponseType = string;

            export type RestApiId = string;

            export type StatusCode = string;

        }

        export namespace UsagePlanKey {

            export type KeyId = string;

            export type KeyType = string;

            export type UsagePlanId = string;

        }

        export namespace RequestValidator {

            export type Name = string;

            export type RestApiId = string;

            export type ValidateRequestBody = boolean;

            export type ValidateRequestParameters = boolean;

        }

        export namespace Resource {

            export type ParentId = string;

            export type PathPart = string;

            export type RestApiId = string;

        }

        export namespace Account {

            export type CloudWatchRoleArn = string;

        }

        export namespace Authorizer {

            export type AuthType = string;

            export type AuthorizerCredentials = string;

            export type AuthorizerResultTtlInSeconds = number;

            export type AuthorizerUri = string;

            export type IdentitySource = string;

            export type IdentityValidationExpression = string;

            export type Name = string;

            export type ProviderARNs = string[];

            export type RestApiId = string;

            export type Type = string;

        }

        export namespace Model {

            export type ContentType = string;

            export type Description = string;

            export type Name = string;

            export type RestApiId = string;

            export type Schema = JSONString;

        }

        export namespace BasePathMapping {

            export type BasePath = string;

            export type DomainName = string;

            export type RestApiId = string;

            export type Stage = string;

        }

        export namespace ClientCertificate {

            export type Description = string;

            export type Tags = AWS.ApiGateway.ClientCertificate.Tag[];

        }

        export namespace DocumentationVersion {

            export type Description = string;

            export type DocumentationVersion = string;

            export type RestApiId = string;

        }

        export namespace VpcLink {

            export type Description = string;

            export type TargetArns = string[];

            export type Name = string;

        }

    }

    export namespace AppConfig {

        export namespace Deployment {

            export type Tags = AWS.AppConfig.Deployment.Tags[];

            export type DeploymentStrategyId = string;

            export type ConfigurationProfileId = string;

            export type EnvironmentId = string;

            export type Description = string;

            export type ConfigurationVersion = string;

            export type ApplicationId = string;

        }

        export namespace DeploymentStrategy {

            export type Tags = AWS.AppConfig.DeploymentStrategy.Tags[];

            export type ReplicateTo = string;

            export type GrowthType = string;

            export type Description = string;

            export type DeploymentDurationInMinutes = number;

            export type GrowthFactor = number;

            export type FinalBakeTimeInMinutes = number;

            export type Name = string;

        }

        export namespace Environment {

            export type Monitors = AWS.AppConfig.Environment.Monitors[];

            export type Tags = AWS.AppConfig.Environment.Tags[];

            export type Description = string;

            export type ApplicationId = string;

            export type Name = string;

        }

        export namespace ConfigurationProfile {

            export type Validators = AWS.AppConfig.ConfigurationProfile.Validators[];

            export type Tags = AWS.AppConfig.ConfigurationProfile.Tags[];

            export type LocationUri = string;

            export type Description = string;

            export type RetrievalRoleArn = string;

            export type ApplicationId = string;

            export type Name = string;

        }

        export namespace Application {

            export type Tags = AWS.AppConfig.Application.Tags[];

            export type Description = string;

            export type Name = string;

        }

        export namespace HostedConfigurationVersion {

            export type ConfigurationProfileId = string;

            export type Description = string;

            export type ContentType = string;

            export type LatestVersionNumber = number;

            export type Content = string;

            export type ApplicationId = string;

        }

    }

    export namespace DevOpsGuru {

        export namespace NotificationChannel {

            export type NotificationChannelConfig = { Sns: AWS.DevOpsGuru.NotificationChannel.SnsChannelConfig; };

            export type SnsChannelConfig = { TopicArn: string; };

            export type Config = AWS.DevOpsGuru.NotificationChannel.NotificationChannelConfig;

        }

        export namespace ResourceCollection {

            export type ResourceCollectionFilter = AWS.DevOpsGuru.ResourceCollection.ResourceCollectionFilter;

            export type CloudFormationCollectionFilter = { StackNames: string[]; };

        }

    }

    export namespace ResourceGroups {

        export namespace Group {

            export type TagFilter = {
                Key: string;

                Values: string[];
            };

            export type Query = {
                ResourceTypeFilters: string[];

                StackIdentifier: string;

                TagFilters: AWS.ResourceGroups.Group.TagFilter[];
            };

            export type ConfigurationParameter = {
                Name: string;

                Values: string[];
            };

            export type ConfigurationItem = {
                Type: string;

                Parameters: AWS.ResourceGroups.Group.ConfigurationParameter[];
            };

            export type ResourceQuery = AWS.ResourceGroups.Group.ResourceQuery;

            export type Name = string;

            export type Description = string;

            export type Tags = AWS.ResourceGroups.Group.Tag[];

            export type Configuration = AWS.ResourceGroups.Group.ConfigurationItem[];

            export type Resources = string[];

        }

    }

    export namespace ECR {

        export namespace ReplicationConfiguration {

            export type ReplicationConfiguration = AWS.ECR.ReplicationConfiguration.ReplicationConfiguration;

            export type ReplicationDestination = {
                Region: string;

                RegistryId: string;
            };

            export type ReplicationRule = { Destinations: AWS.ECR.ReplicationConfiguration.ReplicationDestination[]; };

        }

        export namespace Repository {

            export type LifecyclePolicy = AWS.ECR.Repository.LifecyclePolicy;

            export type ImageScanningConfiguration = AWS.ECR.Repository.ImageScanningConfiguration;

            export type EncryptionConfiguration = AWS.ECR.Repository.EncryptionConfiguration;

            export type RepositoryName = string;

            export type RepositoryPolicyText = JSONString;

            export type Tags = AWS.ECR.Repository.Tag[];

            export type ImageTagMutability = string;

        }

        export namespace RegistryPolicy {

            export type PolicyText = JSONString;

        }

        export namespace PublicRepository {

            export type RepositoryName = string;

            export type RepositoryPolicyText = JSONString;

            export type RepositoryCatalogData = JSONString;

            export type Tags = AWS.ECR.PublicRepository.Tag[];

        }

    }

    export namespace EFS {

        export namespace AccessPoint {

            export type AccessPointTag = {
                Key: string;

                Value: string;
            };

            export type RootDirectory = AWS.EFS.AccessPoint.RootDirectory;

            export type CreationInfo = {
                OwnerUid: string;

                OwnerGid: string;

                Permissions: string;
            };

            export type PosixUser = AWS.EFS.AccessPoint.PosixUser;

            export type ClientToken = string;

            export type AccessPointTags = AWS.EFS.AccessPoint.AccessPointTag[];

            export type FileSystemId = string;

        }

        export namespace FileSystem {

            export type ElasticFileSystemTag = {
                Key: string;

                Value: string;
            };

            export type LifecyclePolicy = { TransitionToIA: string; };

            export type BackupPolicy = AWS.EFS.FileSystem.BackupPolicy;

            export type Encrypted = boolean;

            export type FileSystemTags = AWS.EFS.FileSystem.ElasticFileSystemTag[];

            export type KmsKeyId = string;

            export type LifecyclePolicies = AWS.EFS.FileSystem.LifecyclePolicy[];

            export type PerformanceMode = string;

            export type ProvisionedThroughputInMibps = number;

            export type ThroughputMode = string;

            export type FileSystemPolicy = JSONString;

            export type BypassPolicyLockoutSafetyCheck = boolean;

            export type AvailabilityZoneName = string;

        }

        export namespace MountTarget {

            export type FileSystemId = string;

            export type IpAddress = string;

            export type SecurityGroups = string[];

            export type SubnetId = string;

        }

    }

    export namespace StepFunctions {

        export namespace Activity {

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type Tags = AWS.StepFunctions.Activity.TagsEntry[];

            export type Name = string;

        }

        export namespace StateMachine {

            export type Definition = AWS.StepFunctions.StateMachine.Definition;

            export type LogDestination = { CloudWatchLogsLogGroup: AWS.StepFunctions.StateMachine.CloudWatchLogsLogGroup; };

            export type TagsEntry = {
                Key: string;

                Value: string;
            };

            export type LoggingConfiguration = AWS.StepFunctions.StateMachine.LoggingConfiguration;

            export type S3Location = {
                Bucket: string;

                Key: string;

                Version: string;
            };

            export type CloudWatchLogsLogGroup = { LogGroupArn: string; };

            export type TracingConfiguration = AWS.StepFunctions.StateMachine.TracingConfiguration;

            export type DefinitionString = string;

            export type RoleArn = string;

            export type StateMachineName = string;

            export type StateMachineType = string;

            export type DefinitionS3Location = AWS.StepFunctions.StateMachine.S3Location;

            export type DefinitionSubstitutions = Record<string, string>;

            export type Tags = AWS.StepFunctions.StateMachine.TagsEntry[];

        }

    }

    export namespace KinesisFirehose {

        export namespace DeliveryStream {

            export type EncryptionConfiguration = {
                KMSEncryptionConfig: AWS.KinesisFirehose.DeliveryStream.KMSEncryptionConfig;

                NoEncryptionConfig: string;
            };

            export type InputFormatConfiguration = { Deserializer: AWS.KinesisFirehose.DeliveryStream.Deserializer; };

            export type HiveJsonSerDe = { TimestampFormats: string[]; };

            export type Processor = {
                Parameters: AWS.KinesisFirehose.DeliveryStream.ProcessorParameter[];

                Type: string;
            };

            export type DataFormatConversionConfiguration = {
                Enabled: boolean;

                InputFormatConfiguration: AWS.KinesisFirehose.DeliveryStream.InputFormatConfiguration;

                OutputFormatConfiguration: AWS.KinesisFirehose.DeliveryStream.OutputFormatConfiguration;

                SchemaConfiguration: AWS.KinesisFirehose.DeliveryStream.SchemaConfiguration;
            };

            export type SchemaConfiguration = {
                CatalogId: string;

                DatabaseName: string;

                Region: string;

                RoleARN: string;

                TableName: string;

                VersionId: string;
            };

            export type SplunkRetryOptions = { DurationInSeconds: number; };

            export type HttpEndpointRequestConfiguration = {
                ContentEncoding: string;

                CommonAttributes: AWS.KinesisFirehose.DeliveryStream.HttpEndpointCommonAttribute[];
            };

            export type HttpEndpointConfiguration = {
                Url: string;

                AccessKey: string;

                Name: string;
            };

            export type Serializer = {
                OrcSerDe: AWS.KinesisFirehose.DeliveryStream.OrcSerDe;

                ParquetSerDe: AWS.KinesisFirehose.DeliveryStream.ParquetSerDe;
            };

            export type CopyCommand = {
                CopyOptions: string;

                DataTableColumns: string;

                DataTableName: string;
            };

            export type OpenXJsonSerDe = {
                CaseInsensitive: boolean;

                ColumnToJsonKeyMappings: Record<string, string>;

                ConvertDotsInJsonKeysToUnderscores: boolean;
            };

            export type OrcSerDe = {
                BlockSizeBytes: number;

                BloomFilterColumns: string[];

                BloomFilterFalsePositiveProbability: number;

                Compression: string;

                DictionaryKeyThreshold: number;

                EnablePadding: boolean;

                FormatVersion: string;

                PaddingTolerance: number;

                RowIndexStride: number;

                StripeSizeBytes: number;
            };

            export type ElasticsearchBufferingHints = {
                IntervalInSeconds: number;

                SizeInMBs: number;
            };

            export type SplunkDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.SplunkDestinationConfiguration;

            export type CloudWatchLoggingOptions = {
                Enabled: boolean;

                LogGroupName: string;

                LogStreamName: string;
            };

            export type ProcessingConfiguration = {
                Enabled: boolean;

                Processors: AWS.KinesisFirehose.DeliveryStream.Processor[];
            };

            export type BufferingHints = {
                IntervalInSeconds: number;

                SizeInMBs: number;
            };

            export type ProcessorParameter = {
                ParameterName: string;

                ParameterValue: string;
            };

            export type DeliveryStreamEncryptionConfigurationInput = AWS.KinesisFirehose.DeliveryStream.DeliveryStreamEncryptionConfigurationInput;

            export type ElasticsearchRetryOptions = { DurationInSeconds: number; };

            export type KMSEncryptionConfig = { AWSKMSKeyARN: string; };

            export type OutputFormatConfiguration = { Serializer: AWS.KinesisFirehose.DeliveryStream.Serializer; };

            export type ElasticsearchDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.ElasticsearchDestinationConfiguration;

            export type Deserializer = {
                HiveJsonSerDe: AWS.KinesisFirehose.DeliveryStream.HiveJsonSerDe;

                OpenXJsonSerDe: AWS.KinesisFirehose.DeliveryStream.OpenXJsonSerDe;
            };

            export type KinesisStreamSourceConfiguration = AWS.KinesisFirehose.DeliveryStream.KinesisStreamSourceConfiguration;

            export type RedshiftRetryOptions = { DurationInSeconds: number; };

            export type RetryOptions = { DurationInSeconds: number; };

            export type ParquetSerDe = {
                BlockSizeBytes: number;

                Compression: string;

                EnableDictionaryCompression: boolean;

                MaxPaddingBytes: number;

                PageSizeBytes: number;

                WriterVersion: string;
            };

            export type S3DestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

            export type VpcConfiguration = {
                RoleARN: string;

                SubnetIds: string[];

                SecurityGroupIds: string[];
            };

            export type ExtendedS3DestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.ExtendedS3DestinationConfiguration;

            export type RedshiftDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.RedshiftDestinationConfiguration;

            export type HttpEndpointCommonAttribute = {
                AttributeName: string;

                AttributeValue: string;
            };

            export type HttpEndpointDestinationConfiguration = AWS.KinesisFirehose.DeliveryStream.HttpEndpointDestinationConfiguration;

            export type DeliveryStreamName = string;

            export type DeliveryStreamType = string;

            export type Tags = AWS.KinesisFirehose.DeliveryStream.Tag[];

        }

    }

    export namespace AppStream {

        export namespace ImageBuilder {

            export type VpcConfig = AWS.AppStream.ImageBuilder.VpcConfig;

            export type AccessEndpoint = {
                EndpointType: string;

                VpceId: string;
            };

            export type DomainJoinInfo = AWS.AppStream.ImageBuilder.DomainJoinInfo;

            export type Description = string;

            export type EnableDefaultInternetAccess = boolean;

            export type AppstreamAgentVersion = string;

            export type Name = string;

            export type ImageName = string;

            export type DisplayName = string;

            export type IamRoleArn = string;

            export type InstanceType = string;

            export type Tags = AWS.AppStream.ImageBuilder.Tag[];

            export type ImageArn = string;

            export type AccessEndpoints = AWS.AppStream.ImageBuilder.AccessEndpoint[];

        }

        export namespace Fleet {

            export type DomainJoinInfo = AWS.AppStream.Fleet.DomainJoinInfo;

            export type VpcConfig = AWS.AppStream.Fleet.VpcConfig;

            export type ComputeCapacity = AWS.AppStream.Fleet.ComputeCapacity;

            export type Description = string;

            export type FleetType = string;

            export type EnableDefaultInternetAccess = boolean;

            export type Name = string;

            export type ImageName = string;

            export type MaxUserDurationInSeconds = number;

            export type IdleDisconnectTimeoutInSeconds = number;

            export type DisconnectTimeoutInSeconds = number;

            export type DisplayName = string;

            export type StreamView = string;

            export type IamRoleArn = string;

            export type InstanceType = string;

            export type Tags = AWS.AppStream.Fleet.Tag[];

            export type ImageArn = string;

        }

        export namespace Stack {

            export type AccessEndpoint = {
                EndpointType: string;

                VpceId: string;
            };

            export type UserSetting = {
                Action: string;

                Permission: string;
            };

            export type ApplicationSettings = AWS.AppStream.Stack.ApplicationSettings;

            export type StorageConnector = {
                Domains: string[];

                ResourceIdentifier: string;

                ConnectorType: string;
            };

            export type Description = string;

            export type StorageConnectors = AWS.AppStream.Stack.StorageConnector[];

            export type DeleteStorageConnectors = boolean;

            export type EmbedHostDomains = string[];

            export type UserSettings = AWS.AppStream.Stack.UserSetting[];

            export type AttributesToDelete = string[];

            export type RedirectURL = string;

            export type Name = string;

            export type FeedbackURL = string;

            export type DisplayName = string;

            export type Tags = AWS.AppStream.Stack.Tag[];

            export type AccessEndpoints = AWS.AppStream.Stack.AccessEndpoint[];

        }

        export namespace DirectoryConfig {

            export type ServiceAccountCredentials = AWS.AppStream.DirectoryConfig.ServiceAccountCredentials;

            export type OrganizationalUnitDistinguishedNames = string[];

            export type DirectoryName = string;

        }

        export namespace User {

            export type UserName = string;

            export type FirstName = string;

            export type MessageAction = string;

            export type LastName = string;

            export type AuthenticationType = string;

        }

        export namespace StackUserAssociation {

            export type SendEmailNotification = boolean;

            export type UserName = string;

            export type StackName = string;

            export type AuthenticationType = string;

        }

        export namespace StackFleetAssociation {

            export type FleetName = string;

            export type StackName = string;

        }

    }

    export namespace ElasticLoadBalancing {

        export namespace LoadBalancer {

            export type AccessLoggingPolicy = AWS.ElasticLoadBalancing.LoadBalancer.AccessLoggingPolicy;

            export type HealthCheck = AWS.ElasticLoadBalancing.LoadBalancer.HealthCheck;

            export type ConnectionSettings = AWS.ElasticLoadBalancing.LoadBalancer.ConnectionSettings;

            export type ConnectionDrainingPolicy = AWS.ElasticLoadBalancing.LoadBalancer.ConnectionDrainingPolicy;

            export type AppCookieStickinessPolicy = AWS.ElasticLoadBalancing.LoadBalancer.AppCookieStickinessPolicy[];

            export type LBCookieStickinessPolicy = AWS.ElasticLoadBalancing.LoadBalancer.LBCookieStickinessPolicy[];

            export type Listeners = AWS.ElasticLoadBalancing.LoadBalancer.Listeners[];

            export type Policies = AWS.ElasticLoadBalancing.LoadBalancer.Policies[];

            export type AvailabilityZones = string[];

            export type CrossZone = boolean;

            export type Instances = string[];

            export type LoadBalancerName = string;

            export type Scheme = string;

            export type SecurityGroups = string[];

            export type Subnets = string[];

            export type Tags = AWS.ElasticLoadBalancing.LoadBalancer.Tag[];

        }

    }

    export namespace Backup {

        export namespace BackupPlan {

            export type CopyActionResourceType = {
                Lifecycle: AWS.Backup.BackupPlan.LifecycleResourceType;

                DestinationBackupVaultArn: string;
            };

            export type BackupPlanResourceType = {
                BackupPlanName: string;

                AdvancedBackupSettings: AWS.Backup.BackupPlan.AdvancedBackupSettingResourceType[];

                BackupPlanRule: AWS.Backup.BackupPlan.BackupRuleResourceType[];
            };

            export type AdvancedBackupSettingResourceType = {
                BackupOptions: JSONString;

                ResourceType: string;
            };

            export type LifecycleResourceType = {
                MoveToColdStorageAfterDays: number;

                DeleteAfterDays: number;
            };

            export type BackupRuleResourceType = {
                RuleName: string;

                TargetBackupVault: string;

                StartWindowMinutes: number;

                CompletionWindowMinutes: number;

                ScheduleExpression: string;

                RecoveryPointTags: Record<string, string>;

                CopyActions: AWS.Backup.BackupPlan.CopyActionResourceType[];

                Lifecycle: AWS.Backup.BackupPlan.LifecycleResourceType;

                EnableContinuousBackup: boolean;
            };

            export type BackupPlan = AWS.Backup.BackupPlan.BackupPlanResourceType;

            export type BackupPlanTags = Record<string, string>;

        }

        export namespace BackupSelection {

            export type ConditionResourceType = {
                ConditionKey: string;

                ConditionValue: string;

                ConditionType: string;
            };

            export type BackupSelectionResourceType = {
                IamRoleArn: string;

                ListOfTags: AWS.Backup.BackupSelection.ConditionResourceType[];

                Resources: string[];

                SelectionName: string;
            };

            export type BackupPlanId = string;

            export type BackupSelection = AWS.Backup.BackupSelection.BackupSelectionResourceType;

        }

        export namespace BackupVault {

            export type NotificationObjectType = {
                BackupVaultEvents: string[];

                SNSTopicArn: string;
            };

            export type AccessPolicy = JSONString;

            export type BackupVaultName = string;

            export type BackupVaultTags = Record<string, string>;

            export type EncryptionKeyArn = string;

            export type Notifications = AWS.Backup.BackupVault.NotificationObjectType;

        }

    }

    export namespace GameLift {

        export namespace GameServerGroup {

            export type TargetTrackingConfiguration = { TargetValue: number; };

            export type LaunchTemplate = AWS.GameLift.GameServerGroup.LaunchTemplate;

            export type AutoScalingPolicy = AWS.GameLift.GameServerGroup.AutoScalingPolicy;

            export type InstanceDefinition = {
                InstanceType: string;

                WeightedCapacity: string;
            };

            export type BalancingStrategy = string;

            export type DeleteOption = string;

            export type GameServerGroupName = string;

            export type GameServerProtectionPolicy = string;

            export type InstanceDefinitions = AWS.GameLift.GameServerGroup.InstanceDefinition[];

            export type MaxSize = number;

            export type MinSize = number;

            export type RoleArn = string;

            export type Tags = AWS.GameLift.GameServerGroup.Tag[];

            export type VpcSubnets = string[];

        }

        export namespace Fleet {

            export type LocationCapacity = {
                DesiredEC2Instances: number;

                MinSize: number;

                MaxSize: number;
            };

            export type CertificateConfiguration = AWS.GameLift.Fleet.CertificateConfiguration;

            export type LocationConfiguration = {
                Location: string;

                LocationCapacity: AWS.GameLift.Fleet.LocationCapacity;
            };

            export type IpPermission = {
                FromPort: number;

                IpRange: string;

                Protocol: string;

                ToPort: number;
            };

            export type ServerProcess = {
                ConcurrentExecutions: number;

                LaunchPath: string;

                Parameters: string;
            };

            export type ResourceCreationLimitPolicy = AWS.GameLift.Fleet.ResourceCreationLimitPolicy;

            export type RuntimeConfiguration = AWS.GameLift.Fleet.RuntimeConfiguration;

            export type Description = string;

            export type DesiredEC2Instances = number;

            export type EC2InboundPermissions = AWS.GameLift.Fleet.IpPermission[];

            export type EC2InstanceType = string;

            export type FleetType = string;

            export type InstanceRoleARN = string;

            export type Locations = AWS.GameLift.Fleet.LocationConfiguration[];

            export type MaxSize = number;

            export type MetricGroups = string[];

            export type MinSize = number;

            export type Name = string;

            export type NewGameSessionProtectionPolicy = string;

            export type PeerVpcAwsAccountId = string;

            export type PeerVpcId = string;

            export type BuildId = string;

            export type ScriptId = string;

        }

        export namespace Build {

            export type S3Location = {
                Bucket: string;

                Key: string;

                ObjectVersion: string;

                RoleArn: string;
            };

            export type Name = string;

            export type OperatingSystem = string;

            export type StorageLocation = AWS.GameLift.Build.S3Location;

            export type Version = string;

        }

        export namespace Alias {

            export type RoutingStrategy = AWS.GameLift.Alias.RoutingStrategy;

            export type Description = string;

            export type Name = string;

        }

        export namespace Script {

            export type S3Location = {
                ObjectVersion: string;

                Bucket: string;

                Key: string;

                RoleArn: string;
            };

            export type Version = string;

            export type StorageLocation = AWS.GameLift.Script.S3Location;

            export type Name = string;

        }

        export namespace GameSessionQueue {

            export type PlayerLatencyPolicy = {
                PolicyDurationSeconds: number;

                MaximumIndividualPlayerLatencyMilliseconds: number;
            };

            export type Destination = { DestinationArn: string; };

            export type FilterConfiguration = AWS.GameLift.GameSessionQueue.FilterConfiguration;

            export type PriorityConfiguration = AWS.GameLift.GameSessionQueue.PriorityConfiguration;

            export type TimeoutInSeconds = number;

            export type PlayerLatencyPolicies = AWS.GameLift.GameSessionQueue.PlayerLatencyPolicy[];

            export type Destinations = AWS.GameLift.GameSessionQueue.Destination[];

            export type NotificationTarget = string;

            export type CustomEventData = string;

            export type Name = string;

        }

        export namespace MatchmakingConfiguration {

            export type GameProperty = {
                Value: string;

                Key: string;
            };

            export type GameProperties = AWS.GameLift.MatchmakingConfiguration.GameProperty[];

            export type GameSessionData = string;

            export type Description = string;

            export type AcceptanceTimeoutSeconds = number;

            export type NotificationTarget = string;

            export type CustomEventData = string;

            export type Name = string;

            export type AdditionalPlayerCount = number;

            export type BackfillMode = string;

            export type RequestTimeoutSeconds = number;

            export type AcceptanceRequired = boolean;

            export type FlexMatchMode = string;

            export type RuleSetName = string;

            export type GameSessionQueueArns = string[];

        }

        export namespace MatchmakingRuleSet {

            export type RuleSetBody = string;

            export type Name = string;

        }

    }

    export namespace RDS {

        export namespace DBProxyTargetGroup {

            export type ConnectionPoolConfigurationInfoFormat = {
                MaxConnectionsPercent: number;

                MaxIdleConnectionsPercent: number;

                ConnectionBorrowTimeout: number;

                SessionPinningFilters: string[];

                InitQuery: string;
            };

            export type DBProxyName = string;

            export type TargetGroupName = string;

            export type ConnectionPoolConfigurationInfo = AWS.RDS.DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat;

            export type DBInstanceIdentifiers = string[];

            export type DBClusterIdentifiers = string[];

        }

        export namespace DBInstance {

            export type DBInstanceRole = {
                FeatureName: string;

                RoleArn: string;
            };

            export type ProcessorFeature = {
                Name: string;

                Value: string;
            };

            export type AllocatedStorage = string;

            export type AllowMajorVersionUpgrade = boolean;

            export type AssociatedRoles = AWS.RDS.DBInstance.DBInstanceRole[];

            export type AutoMinorVersionUpgrade = boolean;

            export type AvailabilityZone = string;

            export type BackupRetentionPeriod = number;

            export type CACertificateIdentifier = string;

            export type CharacterSetName = string;

            export type CopyTagsToSnapshot = boolean;

            export type DBClusterIdentifier = string;

            export type DBInstanceClass = string;

            export type DBInstanceIdentifier = string;

            export type DBName = string;

            export type DBParameterGroupName = string;

            export type DBSecurityGroups = string[];

            export type DBSnapshotIdentifier = string;

            export type DBSubnetGroupName = string;

            export type DeleteAutomatedBackups = boolean;

            export type DeletionProtection = boolean;

            export type Domain = string;

            export type DomainIAMRoleName = string;

            export type EnableCloudwatchLogsExports = string[];

            export type EnableIAMDatabaseAuthentication = boolean;

            export type EnablePerformanceInsights = boolean;

            export type Engine = string;

            export type EngineVersion = string;

            export type Iops = number;

            export type KmsKeyId = string;

            export type LicenseModel = string;

            export type MasterUserPassword = string;

            export type MasterUsername = string;

            export type MaxAllocatedStorage = number;

            export type MonitoringInterval = number;

            export type MonitoringRoleArn = string;

            export type MultiAZ = boolean;

            export type OptionGroupName = string;

            export type PerformanceInsightsKMSKeyId = string;

            export type PerformanceInsightsRetentionPeriod = number;

            export type Port = string;

            export type PreferredBackupWindow = string;

            export type PreferredMaintenanceWindow = string;

            export type ProcessorFeatures = AWS.RDS.DBInstance.ProcessorFeature[];

            export type PromotionTier = number;

            export type PubliclyAccessible = boolean;

            export type SourceDBInstanceIdentifier = string;

            export type SourceRegion = string;

            export type StorageEncrypted = boolean;

            export type StorageType = string;

            export type Tags = AWS.RDS.DBInstance.Tag[];

            export type Timezone = string;

            export type UseDefaultProcessorFeatures = boolean;

            export type VPCSecurityGroups = string[];

        }

        export namespace DBCluster {

            export type ScalingConfiguration = AWS.RDS.DBCluster.ScalingConfiguration;

            export type DBClusterRole = {
                FeatureName: string;

                RoleArn: string;
            };

            export type AssociatedRoles = AWS.RDS.DBCluster.DBClusterRole[];

            export type AvailabilityZones = string[];

            export type BacktrackWindow = number;

            export type BackupRetentionPeriod = number;

            export type CopyTagsToSnapshot = boolean;

            export type DBClusterIdentifier = string;

            export type DBClusterParameterGroupName = string;

            export type DBSubnetGroupName = string;

            export type DatabaseName = string;

            export type DeletionProtection = boolean;

            export type EnableCloudwatchLogsExports = string[];

            export type EnableHttpEndpoint = boolean;

            export type EnableIAMDatabaseAuthentication = boolean;

            export type Engine = string;

            export type EngineMode = string;

            export type EngineVersion = string;

            export type GlobalClusterIdentifier = string;

            export type KmsKeyId = string;

            export type MasterUserPassword = string;

            export type MasterUsername = string;

            export type Port = number;

            export type PreferredBackupWindow = string;

            export type PreferredMaintenanceWindow = string;

            export type ReplicationSourceIdentifier = string;

            export type RestoreType = string;

            export type SnapshotIdentifier = string;

            export type SourceDBClusterIdentifier = string;

            export type SourceRegion = string;

            export type StorageEncrypted = boolean;

            export type Tags = AWS.RDS.DBCluster.Tag[];

            export type UseLatestRestorableTime = boolean;

            export type VpcSecurityGroupIds = string[];

        }

        export namespace DBSecurityGroup {

            export type Ingress = {
                CIDRIP: string;

                EC2SecurityGroupId: string;

                EC2SecurityGroupName: string;

                EC2SecurityGroupOwnerId: string;
            };

            export type DBSecurityGroupIngress = AWS.RDS.DBSecurityGroup.Ingress[];

            export type EC2VpcId = string;

            export type GroupDescription = string;

            export type Tags = AWS.RDS.DBSecurityGroup.Tag[];

        }

        export namespace DBProxy {

            export type TagFormat = {
                Key: string;

                Value: string;
            };

            export type AuthFormat = {
                AuthScheme: string;

                Description: string;

                IAMAuth: string;

                SecretArn: string;

                UserName: string;
            };

            export type Auth = AWS.RDS.DBProxy.AuthFormat[];

            export type DBProxyName = string;

            export type DebugLogging = boolean;

            export type EngineFamily = string;

            export type IdleClientTimeout = number;

            export type RequireTLS = boolean;

            export type RoleArn = string;

            export type Tags = AWS.RDS.DBProxy.TagFormat[];

            export type VpcSecurityGroupIds = string[];

            export type VpcSubnetIds = string[];

        }

        export namespace DBProxyEndpoint {

            export type TagFormat = {
                Key: string;

                Value: string;
            };

            export type DBProxyEndpointName = string;

            export type DBProxyName = string;

            export type VpcSecurityGroupIds = string[];

            export type VpcSubnetIds = string[];

            export type TargetRole = string;

            export type Tags = AWS.RDS.DBProxyEndpoint.TagFormat[];

        }

        export namespace OptionGroup {

            export type OptionSetting = {
                Name: string;

                Value: string;
            };

            export type OptionConfiguration = {
                DBSecurityGroupMemberships: string[];

                OptionName: string;

                OptionSettings: AWS.RDS.OptionGroup.OptionSetting[];

                OptionVersion: string;

                Port: number;

                VpcSecurityGroupMemberships: string[];
            };

            export type EngineName = string;

            export type MajorEngineVersion = string;

            export type OptionConfigurations = AWS.RDS.OptionGroup.OptionConfiguration[];

            export type OptionGroupDescription = string;

            export type Tags = AWS.RDS.OptionGroup.Tag[];

        }

        export namespace DBSubnetGroup {

            export type DBSubnetGroupDescription = string;

            export type DBSubnetGroupName = string;

            export type SubnetIds = string[];

            export type Tags = AWS.RDS.DBSubnetGroup.Tag[];

        }

        export namespace GlobalCluster {

            export type Engine = string;

            export type EngineVersion = string;

            export type DeletionProtection = boolean;

            export type GlobalClusterIdentifier = string;

            export type SourceDBClusterIdentifier = string;

            export type StorageEncrypted = boolean;

        }

        export namespace DBSecurityGroupIngress {

            export type CIDRIP = string;

            export type DBSecurityGroupName = string;

            export type EC2SecurityGroupId = string;

            export type EC2SecurityGroupName = string;

            export type EC2SecurityGroupOwnerId = string;

        }

        export namespace EventSubscription {

            export type Enabled = boolean;

            export type EventCategories = string[];

            export type SnsTopicArn = string;

            export type SourceIds = string[];

            export type SourceType = string;

        }

        export namespace DBClusterParameterGroup {

            export type Description = string;

            export type Family = string;

            export type Parameters = JSONString;

            export type Tags = AWS.RDS.DBClusterParameterGroup.Tag[];

        }

        export namespace DBParameterGroup {

            export type Description = string;

            export type Family = string;

            export type Parameters = Record<string, string>;

            export type Tags = AWS.RDS.DBParameterGroup.Tag[];

        }

    }

    export namespace DynamoDB {

        export namespace Table {

            export type LocalSecondaryIndex = {
                IndexName: string;

                KeySchema: AWS.DynamoDB.Table.KeySchema[];

                Projection: AWS.DynamoDB.Table.Projection;
            };

            export type PointInTimeRecoverySpecification = AWS.DynamoDB.Table.PointInTimeRecoverySpecification;

            export type KinesisStreamSpecification = AWS.DynamoDB.Table.KinesisStreamSpecification;

            export type AttributeDefinition = {
                AttributeName: string;

                AttributeType: string;
            };

            export type GlobalSecondaryIndex = {
                ContributorInsightsSpecification: AWS.DynamoDB.Table.ContributorInsightsSpecification;

                IndexName: string;

                KeySchema: AWS.DynamoDB.Table.KeySchema[];

                Projection: AWS.DynamoDB.Table.Projection;

                ProvisionedThroughput: AWS.DynamoDB.Table.ProvisionedThroughput;
            };

            export type ContributorInsightsSpecification = AWS.DynamoDB.Table.ContributorInsightsSpecification;

            export type KeySchema = AWS.DynamoDB.Table.KeySchema[];

            export type SSESpecification = AWS.DynamoDB.Table.SSESpecification;

            export type TimeToLiveSpecification = AWS.DynamoDB.Table.TimeToLiveSpecification;

            export type ProvisionedThroughput = AWS.DynamoDB.Table.ProvisionedThroughput;

            export type Projection = {
                NonKeyAttributes: string[];

                ProjectionType: string;
            };

            export type StreamSpecification = AWS.DynamoDB.Table.StreamSpecification;

            export type AttributeDefinitions = AWS.DynamoDB.Table.AttributeDefinition[];

            export type BillingMode = string;

            export type GlobalSecondaryIndexes = AWS.DynamoDB.Table.GlobalSecondaryIndex[];

            export type LocalSecondaryIndexes = AWS.DynamoDB.Table.LocalSecondaryIndex[];

            export type TableName = string;

            export type Tags = AWS.DynamoDB.Table.Tag[];

        }

        export namespace GlobalTable {

            export type PointInTimeRecoverySpecification = { PointInTimeRecoveryEnabled: boolean; };

            export type ContributorInsightsSpecification = { Enabled: boolean; };

            export type CapacityAutoScalingSettings = {
                MinCapacity: number;

                MaxCapacity: number;

                SeedCapacity: number;

                TargetTrackingScalingPolicyConfiguration: AWS.DynamoDB.GlobalTable.TargetTrackingScalingPolicyConfiguration;
            };

            export type ReadProvisionedThroughputSettings = {
                ReadCapacityUnits: number;

                ReadCapacityAutoScalingSettings: AWS.DynamoDB.GlobalTable.CapacityAutoScalingSettings;
            };

            export type LocalSecondaryIndex = {
                IndexName: string;

                KeySchema: AWS.DynamoDB.GlobalTable.KeySchema[];

                Projection: AWS.DynamoDB.GlobalTable.Projection;
            };

            export type TargetTrackingScalingPolicyConfiguration = {
                DisableScaleIn: boolean;

                ScaleInCooldown: number;

                ScaleOutCooldown: number;

                TargetValue: number;
            };

            export type ReplicaSpecification = {
                Region: string;

                GlobalSecondaryIndexes: AWS.DynamoDB.GlobalTable.ReplicaGlobalSecondaryIndexSpecification[];

                ContributorInsightsSpecification: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

                PointInTimeRecoverySpecification: AWS.DynamoDB.GlobalTable.PointInTimeRecoverySpecification;

                SSESpecification: AWS.DynamoDB.GlobalTable.ReplicaSSESpecification;

                Tags: AWS.DynamoDB.GlobalTable.Tag[];

                ReadProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings;
            };

            export type GlobalSecondaryIndex = {
                IndexName: string;

                KeySchema: AWS.DynamoDB.GlobalTable.KeySchema[];

                Projection: AWS.DynamoDB.GlobalTable.Projection;

                WriteProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings;
            };

            export type KeySchema = AWS.DynamoDB.GlobalTable.KeySchema[];

            export type StreamSpecification = AWS.DynamoDB.GlobalTable.StreamSpecification;

            export type Projection = {
                NonKeyAttributes: string[];

                ProjectionType: string;
            };

            export type ReplicaGlobalSecondaryIndexSpecification = {
                IndexName: string;

                ContributorInsightsSpecification: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

                ReadProvisionedThroughputSettings: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings;
            };

            export type AttributeDefinition = {
                AttributeName: string;

                AttributeType: string;
            };

            export type SSESpecification = AWS.DynamoDB.GlobalTable.SSESpecification;

            export type WriteProvisionedThroughputSettings = AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings;

            export type TimeToLiveSpecification = AWS.DynamoDB.GlobalTable.TimeToLiveSpecification;

            export type ReplicaSSESpecification = { KMSMasterKeyId: string; };

            export type AttributeDefinitions = AWS.DynamoDB.GlobalTable.AttributeDefinition[];

            export type BillingMode = string;

            export type GlobalSecondaryIndexes = AWS.DynamoDB.GlobalTable.GlobalSecondaryIndex[];

            export type LocalSecondaryIndexes = AWS.DynamoDB.GlobalTable.LocalSecondaryIndex[];

            export type Replicas = AWS.DynamoDB.GlobalTable.ReplicaSpecification[];

            export type TableName = string;

        }

    }

    export namespace EKS {

        export namespace Cluster {

            export type Provider = { KeyArn: string; };

            export type EncryptionConfig = AWS.EKS.Cluster.EncryptionConfig[];

            export type KubernetesNetworkConfig = AWS.EKS.Cluster.KubernetesNetworkConfig;

            export type ResourcesVpcConfig = AWS.EKS.Cluster.ResourcesVpcConfig;

            export type Version = string;

            export type RoleArn = string;

            export type Name = string;

        }

        export namespace FargateProfile {

            export type Label = {
                Key: string;

                Value: string;
            };

            export type Selector = {
                Namespace: string;

                Labels: AWS.EKS.FargateProfile.Label[];
            };

            export type ClusterName = string;

            export type FargateProfileName = string;

            export type PodExecutionRoleArn = string;

            export type Subnets = string[];

            export type Selectors = AWS.EKS.FargateProfile.Selector[];

            export type Tags = AWS.EKS.FargateProfile.Tag[];

        }

        export namespace Nodegroup {

            export type Taint = {
                Value: string;

                Effect: string;

                Key: string;
            };

            export type LaunchTemplateSpecification = {
                Version: string;

                Id: string;

                Name: string;
            };

            export type UpdateConfig = AWS.EKS.Nodegroup.UpdateConfig;

            export type ScalingConfig = AWS.EKS.Nodegroup.ScalingConfig;

            export type RemoteAccess = AWS.EKS.Nodegroup.RemoteAccess;

            export type Labels = JSONString;

            export type Taints = AWS.EKS.Nodegroup.Taint[];

            export type ReleaseVersion = string;

            export type CapacityType = string;

            export type NodegroupName = string;

            export type Subnets = string[];

            export type NodeRole = string;

            export type AmiType = string;

            export type ForceUpdateEnabled = boolean;

            export type Version = string;

            export type LaunchTemplate = AWS.EKS.Nodegroup.LaunchTemplateSpecification;

            export type DiskSize = number;

            export type ClusterName = string;

            export type InstanceTypes = string[];

            export type Tags = JSONString;

        }

        export namespace Addon {

            export type ClusterName = string;

            export type AddonName = string;

            export type AddonVersion = string;

            export type ResolveConflicts = string;

            export type ServiceAccountRoleArn = string;

            export type Tags = AWS.EKS.Addon.Tag[];

        }

    }

    export namespace DLM {

        export namespace LifecyclePolicy {

            export type FastRestoreRule = {
                IntervalUnit: string;

                AvailabilityZones: string[];

                Count: number;

                Interval: number;
            };

            export type EventSource = {
                Type: string;

                Parameters: AWS.DLM.LifecyclePolicy.EventParameters;
            };

            export type EventParameters = {
                EventType: string;

                SnapshotOwner: string[];

                DescriptionRegex: string;
            };

            export type Action = {
                CrossRegionCopy: AWS.DLM.LifecyclePolicy.CrossRegionCopyAction[];

                Name: string;
            };

            export type CreateRule = {
                IntervalUnit: string;

                Times: string[];

                CronExpression: string;

                Interval: number;

                Location: string;
            };

            export type RetainRule = {
                IntervalUnit: string;

                Count: number;

                Interval: number;
            };

            export type PolicyDetails = AWS.DLM.LifecyclePolicy.PolicyDetails;

            export type Parameters = {
                ExcludeBootVolume: boolean;

                NoReboot: boolean;
            };

            export type EncryptionConfiguration = {
                Encrypted: boolean;

                CmkArn: string;
            };

            export type Schedule = {
                ShareRules: AWS.DLM.LifecyclePolicy.ShareRule[];

                TagsToAdd: AWS.DLM.LifecyclePolicy.Tag[];

                CreateRule: AWS.DLM.LifecyclePolicy.CreateRule;

                VariableTags: AWS.DLM.LifecyclePolicy.Tag[];

                FastRestoreRule: AWS.DLM.LifecyclePolicy.FastRestoreRule;

                RetainRule: AWS.DLM.LifecyclePolicy.RetainRule;

                CrossRegionCopyRules: AWS.DLM.LifecyclePolicy.CrossRegionCopyRule[];

                Name: string;

                CopyTags: boolean;
            };

            export type CrossRegionCopyRetainRule = {
                IntervalUnit: string;

                Interval: number;
            };

            export type CrossRegionCopyRule = {
                TargetRegion: string;

                Target: string;

                Encrypted: boolean;

                CmkArn: string;

                RetainRule: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule;

                CopyTags: boolean;
            };

            export type CrossRegionCopyAction = {
                Target: string;

                EncryptionConfiguration: AWS.DLM.LifecyclePolicy.EncryptionConfiguration;

                RetainRule: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule;
            };

            export type ShareRule = {
                TargetAccounts: string[];

                UnshareIntervalUnit: string;

                UnshareInterval: number;
            };

            export type ExecutionRoleArn = string;

            export type Description = string;

            export type State = string;

            export type Tags = AWS.DLM.LifecyclePolicy.Tag[];

        }

    }

    export namespace GuardDuty {

        export namespace Filter {

            export type FindingCriteria = AWS.GuardDuty.Filter.FindingCriteria;

            export type Condition = {
                Lt: number;

                Gte: number;

                Neq: string[];

                Eq: string[];

                Lte: number;
            };

            export type Action = string;

            export type Description = string;

            export type DetectorId = string;

            export type Rank = number;

            export type Name = string;

        }

        export namespace Detector {

            export type CFNDataSourceConfigurations = { S3Logs: AWS.GuardDuty.Detector.CFNS3LogsConfiguration; };

            export type CFNS3LogsConfiguration = { Enable: boolean; };

            export type FindingPublishingFrequency = string;

            export type DataSources = AWS.GuardDuty.Detector.CFNDataSourceConfigurations;

            export type Enable = boolean;

        }

        export namespace ThreatIntelSet {

            export type Format = string;

            export type Activate = boolean;

            export type DetectorId = string;

            export type Name = string;

            export type Location = string;

        }

        export namespace Member {

            export type Status = string;

            export type MemberId = string;

            export type Email = string;

            export type Message = string;

            export type DisableEmailNotification = boolean;

            export type DetectorId = string;

        }

        export namespace Master {

            export type DetectorId = string;

            export type MasterId = string;

            export type InvitationId = string;

        }

        export namespace IPSet {

            export type Format = string;

            export type Activate = boolean;

            export type DetectorId = string;

            export type Name = string;

            export type Location = string;

        }

    }

    export namespace CloudWatch {

        export namespace Alarm {

            export type MetricStat = {
                Metric: AWS.CloudWatch.Alarm.Metric;

                Period: number;

                Stat: string;

                Unit: string;
            };

            export type MetricDataQuery = {
                Expression: string;

                Id: string;

                Label: string;

                MetricStat: AWS.CloudWatch.Alarm.MetricStat;

                Period: number;

                ReturnData: boolean;
            };

            export type Dimension = {
                Name: string;

                Value: string;
            };

            export type Metric = {
                Dimensions: AWS.CloudWatch.Alarm.Dimension[];

                MetricName: string;

                Namespace: string;
            };

            export type ActionsEnabled = boolean;

            export type AlarmActions = string[];

            export type AlarmDescription = string;

            export type AlarmName = string;

            export type ComparisonOperator = string;

            export type DatapointsToAlarm = number;

            export type Dimensions = AWS.CloudWatch.Alarm.Dimension[];

            export type EvaluateLowSampleCountPercentile = string;

            export type EvaluationPeriods = number;

            export type ExtendedStatistic = string;

            export type InsufficientDataActions = string[];

            export type MetricName = string;

            export type Metrics = AWS.CloudWatch.Alarm.MetricDataQuery[];

            export type Namespace = string;

            export type OKActions = string[];

            export type Period = number;

            export type Statistic = string;

            export type Threshold = number;

            export type ThresholdMetricId = string;

            export type TreatMissingData = string;

            export type Unit = string;

        }

        export namespace MetricStream {

            export type MetricStreamFilter = { Namespace: string; };

            export type ExcludeFilters = AWS.CloudWatch.MetricStream.MetricStreamFilter[];

            export type FirehoseArn = string;

            export type IncludeFilters = AWS.CloudWatch.MetricStream.MetricStreamFilter[];

            export type Name = string;

            export type RoleArn = string;

            export type OutputFormat = string;

            export type Tags = AWS.CloudWatch.MetricStream.Tag[];

        }

        export namespace AnomalyDetector {

            export type Range = {
                EndTime: string;

                StartTime: string;
            };

            export type Dimension = {
                Value: string;

                Name: string;
            };

            export type Configuration = AWS.CloudWatch.AnomalyDetector.Configuration;

            export type MetricName = string;

            export type Stat = string;

            export type Dimensions = AWS.CloudWatch.AnomalyDetector.Dimension[];

            export type Namespace = string;

        }

        export namespace InsightRule {

            export type Tags = AWS.CloudWatch.InsightRule.Tags;

            export type RuleState = string;

            export type RuleBody = string;

            export type RuleName = string;

        }

        export namespace CompositeAlarm {

            export type AlarmName = string;

            export type AlarmRule = string;

            export type AlarmDescription = string;

            export type ActionsEnabled = boolean;

            export type OKActions = string[];

            export type AlarmActions = string[];

            export type InsufficientDataActions = string[];

        }

        export namespace Dashboard {

            export type DashboardName = string;

            export type DashboardBody = string;

        }

    }

    export namespace SSM {

        export namespace Document {

            export type DocumentRequires = {
                Name: string;

                Version: string;
            };

            export type AttachmentsSource = {
                Key: string;

                Values: string[];

                Name: string;
            };

            export type Content = JSONString;

            export type Attachments = AWS.SSM.Document.AttachmentsSource[];

            export type Name = string;

            export type VersionName = string;

            export type DocumentType = string;

            export type DocumentFormat = string;

            export type TargetType = string;

            export type Tags = AWS.SSM.Document.Tag[];

            export type Requires = AWS.SSM.Document.DocumentRequires[];

        }

        export namespace PatchBaseline {

            export type PatchStringDate = string;

            export type PatchFilter = {
                Values: string[];

                Key: string;
            };

            export type Rule = {
                ApproveUntilDate: AWS.SSM.PatchBaseline.PatchStringDate;

                EnableNonSecurity: boolean;

                PatchFilterGroup: AWS.SSM.PatchBaseline.PatchFilterGroup;

                ApproveAfterDays: number;

                ComplianceLevel: string;
            };

            export type PatchFilterGroup = { PatchFilters: AWS.SSM.PatchBaseline.PatchFilter[]; };

            export type PatchSource = {
                Products: string[];

                Configuration: string;

                Name: string;
            };

            export type RuleGroup = { PatchRules: AWS.SSM.PatchBaseline.Rule[]; };

            export type OperatingSystem = string;

            export type Description = string;

            export type ApprovalRules = AWS.SSM.PatchBaseline.RuleGroup;

            export type Sources = AWS.SSM.PatchBaseline.PatchSource[];

            export type Name = string;

            export type RejectedPatches = string[];

            export type ApprovedPatches = string[];

            export type RejectedPatchesAction = string;

            export type PatchGroups = string[];

            export type ApprovedPatchesComplianceLevel = string;

            export type ApprovedPatchesEnableNonSecurity = boolean;

            export type GlobalFilters = AWS.SSM.PatchBaseline.PatchFilterGroup;

            export type Tags = AWS.SSM.PatchBaseline.Tag[];

        }

        export namespace MaintenanceWindowTask {

            export type LoggingInfo = AWS.SSM.MaintenanceWindowTask.LoggingInfo;

            export type Target = {
                Values: string[];

                Key: string;
            };

            export type NotificationConfig = {
                NotificationArn: string;

                NotificationType: string;

                NotificationEvents: string[];
            };

            export type MaintenanceWindowAutomationParameters = {
                Parameters: JSONString;

                DocumentVersion: string;
            };

            export type TaskInvocationParameters = AWS.SSM.MaintenanceWindowTask.TaskInvocationParameters;

            export type MaintenanceWindowStepFunctionsParameters = {
                Input: string;

                Name: string;
            };

            export type MaintenanceWindowRunCommandParameters = {
                TimeoutSeconds: number;

                Comment: string;

                OutputS3KeyPrefix: string;

                Parameters: JSONString;

                DocumentHashType: string;

                ServiceRoleArn: string;

                NotificationConfig: AWS.SSM.MaintenanceWindowTask.NotificationConfig;

                OutputS3BucketName: string;

                DocumentHash: string;
            };

            export type MaintenanceWindowLambdaParameters = {
                ClientContext: string;

                Qualifier: string;

                Payload: string;
            };

            export type MaxErrors = string;

            export type Description = string;

            export type ServiceRoleArn = string;

            export type Priority = number;

            export type MaxConcurrency = string;

            export type Targets = AWS.SSM.MaintenanceWindowTask.Target[];

            export type Name = string;

            export type TaskArn = string;

            export type WindowId = string;

            export type TaskParameters = JSONString;

            export type TaskType = string;

        }

        export namespace Association {

            export type InstanceAssociationOutputLocation = { S3Location: AWS.SSM.Association.S3OutputLocation; };

            export type Target = {
                Key: string;

                Values: string[];
            };

            export type S3OutputLocation = {
                OutputS3Region: string;

                OutputS3BucketName: string;

                OutputS3KeyPrefix: string;
            };

            export type AssociationName = string;

            export type DocumentVersion = string;

            export type InstanceId = string;

            export type Name = string;

            export type Parameters = Record<string, JSONString>;

            export type ScheduleExpression = string;

            export type Targets = AWS.SSM.Association.Target[];

            export type OutputLocation = AWS.SSM.Association.InstanceAssociationOutputLocation;

            export type AutomationTargetParameterName = string;

            export type MaxErrors = string;

            export type MaxConcurrency = string;

            export type ComplianceSeverity = string;

            export type SyncCompliance = string;

            export type WaitForSuccessTimeoutSeconds = number;

            export type ApplyOnlyAtCronInterval = boolean;

            export type CalendarNames = string[];

        }

        export namespace ResourceDataSync {

            export type AwsOrganizationsSource = {
                OrganizationalUnits: string[];

                OrganizationSourceType: string;
            };

            export type SyncSource = AWS.SSM.ResourceDataSync.SyncSource;

            export type S3Destination = AWS.SSM.ResourceDataSync.S3Destination;

            export type KMSKeyArn = string;

            export type BucketName = string;

            export type BucketRegion = string;

            export type SyncFormat = string;

            export type SyncName = string;

            export type SyncType = string;

            export type BucketPrefix = string;

        }

        export namespace MaintenanceWindowTarget {

            export type Targets = AWS.SSM.MaintenanceWindowTarget.Targets[];

            export type OwnerInformation = string;

            export type Description = string;

            export type WindowId = string;

            export type ResourceType = string;

            export type Name = string;

        }

        export namespace MaintenanceWindow {

            export type StartDate = string;

            export type Description = string;

            export type AllowUnassociatedTargets = boolean;

            export type Cutoff = number;

            export type Schedule = string;

            export type Duration = number;

            export type ScheduleOffset = number;

            export type EndDate = string;

            export type Tags = AWS.SSM.MaintenanceWindow.Tag[];

            export type Name = string;

            export type ScheduleTimezone = string;

        }

        export namespace Parameter {

            export type Type = string;

            export type Description = string;

            export type Policies = string;

            export type AllowedPattern = string;

            export type Tier = string;

            export type Value = string;

            export type DataType = string;

            export type Tags = JSONString;

            export type Name = string;

        }

    }

    export namespace Redshift {

        export namespace Cluster {

            export type Endpoint = AWS.Redshift.Cluster.Endpoint;

            export type LoggingProperties = AWS.Redshift.Cluster.LoggingProperties;

            export type ClusterIdentifier = string;

            export type MasterUsername = string;

            export type MasterUserPassword = string;

            export type NodeType = string;

            export type AllowVersionUpgrade = boolean;

            export type AutomatedSnapshotRetentionPeriod = number;

            export type AvailabilityZone = string;

            export type ClusterParameterGroupName = string;

            export type ClusterType = string;

            export type ClusterVersion = string;

            export type ClusterSubnetGroupName = string;

            export type DBName = string;

            export type ElasticIp = string;

            export type Encrypted = boolean;

            export type HsmClientCertificateIdentifier = string;

            export type HsmConfigurationIdentifier = string;

            export type KmsKeyId = string;

            export type NumberOfNodes = number;

            export type Port = number;

            export type PreferredMaintenanceWindow = string;

            export type PubliclyAccessible = boolean;

            export type ClusterSecurityGroups = string[];

            export type IamRoles = string[];

            export type Tags = AWS.Redshift.Cluster.Tag[];

            export type VpcSecurityGroupIds = string[];

            export type SnapshotClusterIdentifier = string;

            export type SnapshotIdentifier = string;

            export type OwnerAccount = string;

        }

        export namespace ClusterParameterGroup {

            export type Parameter = {
                ParameterName: string;

                ParameterValue: string;
            };

            export type Description = string;

            export type ParameterGroupFamily = string;

            export type Parameters = AWS.Redshift.ClusterParameterGroup.Parameter[];

            export type Tags = AWS.Redshift.ClusterParameterGroup.Tag[];

        }

        export namespace ClusterSubnetGroup {

            export type Description = string;

            export type SubnetIds = string[];

            export type Tags = AWS.Redshift.ClusterSubnetGroup.Tag[];

        }

        export namespace ClusterSecurityGroup {

            export type Description = string;

            export type Tags = AWS.Redshift.ClusterSecurityGroup.Tag[];

        }

        export namespace ClusterSecurityGroupIngress {

            export type CIDRIP = string;

            export type ClusterSecurityGroupName = string;

            export type EC2SecurityGroupName = string;

            export type EC2SecurityGroupOwnerId = string;

        }

    }

    export namespace ElasticLoadBalancingV2 {

        export namespace ListenerRule {

            export type SourceIpConfig = { Values: string[]; };

            export type AuthenticateOidcConfig = {
                OnUnauthenticatedRequest: string;

                TokenEndpoint: string;

                SessionTimeout: number;

                Scope: string;

                Issuer: string;

                ClientSecret: string;

                UserInfoEndpoint: string;

                ClientId: string;

                AuthorizationEndpoint: string;

                SessionCookieName: string;

                UseExistingClientSecret: boolean;

                AuthenticationRequestExtraParams: Record<string, string>;
            };

            export type AuthenticateCognitoConfig = {
                OnUnauthenticatedRequest: string;

                UserPoolClientId: string;

                UserPoolDomain: string;

                SessionTimeout: number;

                Scope: string;

                SessionCookieName: string;

                UserPoolArn: string;

                AuthenticationRequestExtraParams: Record<string, string>;
            };

            export type QueryStringKeyValue = {
                Value: string;

                Key: string;
            };

            export type QueryStringConfig = { Values: AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringKeyValue[]; };

            export type PathPatternConfig = { Values: string[]; };

            export type RuleCondition = {
                Field: string;

                Values: string[];

                HttpRequestMethodConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HttpRequestMethodConfig;

                PathPatternConfig: AWS.ElasticLoadBalancingV2.ListenerRule.PathPatternConfig;

                HttpHeaderConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HttpHeaderConfig;

                SourceIpConfig: AWS.ElasticLoadBalancingV2.ListenerRule.SourceIpConfig;

                HostHeaderConfig: AWS.ElasticLoadBalancingV2.ListenerRule.HostHeaderConfig;

                QueryStringConfig: AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringConfig;
            };

            export type RedirectConfig = {
                Path: string;

                Query: string;

                Port: string;

                Host: string;

                Protocol: string;

                StatusCode: string;
            };

            export type HostHeaderConfig = { Values: string[]; };

            export type FixedResponseConfig = {
                ContentType: string;

                StatusCode: string;

                MessageBody: string;
            };

            export type Action = {
                Order: number;

                TargetGroupArn: string;

                FixedResponseConfig: AWS.ElasticLoadBalancingV2.ListenerRule.FixedResponseConfig;

                AuthenticateCognitoConfig: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateCognitoConfig;

                Type: string;

                RedirectConfig: AWS.ElasticLoadBalancingV2.ListenerRule.RedirectConfig;

                ForwardConfig: AWS.ElasticLoadBalancingV2.ListenerRule.ForwardConfig;

                AuthenticateOidcConfig: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateOidcConfig;
            };

            export type HttpHeaderConfig = {
                Values: string[];

                HttpHeaderName: string;
            };

            export type ForwardConfig = {
                TargetGroupStickinessConfig: AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupStickinessConfig;

                TargetGroups: AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupTuple[];
            };

            export type TargetGroupTuple = {
                TargetGroupArn: string;

                Weight: number;
            };

            export type HttpRequestMethodConfig = { Values: string[]; };

            export type TargetGroupStickinessConfig = {
                Enabled: boolean;

                DurationSeconds: number;
            };

            export type ListenerArn = string;

            export type Actions = AWS.ElasticLoadBalancingV2.ListenerRule.Action[];

            export type Priority = number;

            export type Conditions = AWS.ElasticLoadBalancingV2.ListenerRule.RuleCondition[];

        }

        export namespace LoadBalancer {

            export type LoadBalancerAttribute = {
                Key: string;

                Value: string;
            };

            export type SubnetMapping = {
                AllocationId: string;

                IPv6Address: string;

                PrivateIPv4Address: string;

                SubnetId: string;
            };

            export type IpAddressType = string;

            export type LoadBalancerAttributes = AWS.ElasticLoadBalancingV2.LoadBalancer.LoadBalancerAttribute[];

            export type Name = string;

            export type Scheme = string;

            export type SecurityGroups = string[];

            export type SubnetMappings = AWS.ElasticLoadBalancingV2.LoadBalancer.SubnetMapping[];

            export type Subnets = string[];

            export type Tags = AWS.ElasticLoadBalancingV2.LoadBalancer.Tag[];

            export type Type = string;

        }

        export namespace Listener {

            export type ForwardConfig = {
                TargetGroupStickinessConfig: AWS.ElasticLoadBalancingV2.Listener.TargetGroupStickinessConfig;

                TargetGroups: AWS.ElasticLoadBalancingV2.Listener.TargetGroupTuple[];
            };

            export type AuthenticateOidcConfig = {
                OnUnauthenticatedRequest: string;

                TokenEndpoint: string;

                SessionTimeout: string;

                Scope: string;

                Issuer: string;

                ClientSecret: string;

                UserInfoEndpoint: string;

                ClientId: string;

                AuthorizationEndpoint: string;

                SessionCookieName: string;

                AuthenticationRequestExtraParams: Record<string, string>;
            };

            export type Certificate = { CertificateArn: string; };

            export type TargetGroupStickinessConfig = {
                Enabled: boolean;

                DurationSeconds: number;
            };

            export type AuthenticateCognitoConfig = {
                OnUnauthenticatedRequest: string;

                UserPoolClientId: string;

                UserPoolDomain: string;

                SessionTimeout: string;

                Scope: string;

                SessionCookieName: string;

                UserPoolArn: string;

                AuthenticationRequestExtraParams: Record<string, string>;
            };

            export type Action = {
                Order: number;

                TargetGroupArn: string;

                FixedResponseConfig: AWS.ElasticLoadBalancingV2.Listener.FixedResponseConfig;

                AuthenticateCognitoConfig: AWS.ElasticLoadBalancingV2.Listener.AuthenticateCognitoConfig;

                Type: string;

                RedirectConfig: AWS.ElasticLoadBalancingV2.Listener.RedirectConfig;

                ForwardConfig: AWS.ElasticLoadBalancingV2.Listener.ForwardConfig;

                AuthenticateOidcConfig: AWS.ElasticLoadBalancingV2.Listener.AuthenticateOidcConfig;
            };

            export type RedirectConfig = {
                Path: string;

                Query: string;

                Port: string;

                Host: string;

                Protocol: string;

                StatusCode: string;
            };

            export type FixedResponseConfig = {
                ContentType: string;

                StatusCode: string;

                MessageBody: string;
            };

            export type TargetGroupTuple = {
                TargetGroupArn: string;

                Weight: number;
            };

            export type SslPolicy = string;

            export type LoadBalancerArn = string;

            export type DefaultActions = AWS.ElasticLoadBalancingV2.Listener.Action[];

            export type Port = number;

            export type Certificates = AWS.ElasticLoadBalancingV2.Listener.Certificate[];

            export type Protocol = string;

            export type AlpnPolicy = string[];

        }

        export namespace TargetGroup {

            export type TargetDescription = {
                AvailabilityZone: string;

                Id: string;

                Port: number;
            };

            export type TargetGroupAttribute = {
                Key: string;

                Value: string;
            };

            export type Matcher = AWS.ElasticLoadBalancingV2.TargetGroup.Matcher;

            export type HealthCheckEnabled = boolean;

            export type HealthCheckIntervalSeconds = number;

            export type HealthCheckPath = string;

            export type HealthCheckPort = string;

            export type HealthCheckProtocol = string;

            export type HealthCheckTimeoutSeconds = number;

            export type HealthyThresholdCount = number;

            export type Name = string;

            export type Port = number;

            export type Protocol = string;

            export type ProtocolVersion = string;

            export type Tags = AWS.ElasticLoadBalancingV2.TargetGroup.Tag[];

            export type TargetGroupAttributes = AWS.ElasticLoadBalancingV2.TargetGroup.TargetGroupAttribute[];

            export type TargetType = string;

            export type Targets = AWS.ElasticLoadBalancingV2.TargetGroup.TargetDescription[];

            export type UnhealthyThresholdCount = number;

            export type VpcId = string;

        }

        export namespace ListenerCertificate {

            export type Certificate = { CertificateArn: string; };

            export type Certificates = AWS.ElasticLoadBalancingV2.ListenerCertificate.Certificate[];

            export type ListenerArn = string;

        }

    }

    export namespace Budgets {

        export namespace Budget {

            export type BudgetData = {
                BudgetLimit: AWS.Budgets.Budget.Spend;

                TimePeriod: AWS.Budgets.Budget.TimePeriod;

                TimeUnit: string;

                PlannedBudgetLimits: JSONString;

                CostFilters: JSONString;

                BudgetName: string;

                CostTypes: AWS.Budgets.Budget.CostTypes;

                BudgetType: string;
            };

            export type Subscriber = {
                SubscriptionType: string;

                Address: string;
            };

            export type TimePeriod = {
                Start: string;

                End: string;
            };

            export type CostTypes = {
                IncludeSupport: boolean;

                IncludeOtherSubscription: boolean;

                IncludeTax: boolean;

                IncludeSubscription: boolean;

                UseBlended: boolean;

                IncludeUpfront: boolean;

                IncludeDiscount: boolean;

                IncludeCredit: boolean;

                IncludeRecurring: boolean;

                UseAmortized: boolean;

                IncludeRefund: boolean;
            };

            export type NotificationWithSubscribers = {
                Subscribers: AWS.Budgets.Budget.Subscriber[];

                Notification: AWS.Budgets.Budget.Notification;
            };

            export type Notification = {
                ComparisonOperator: string;

                NotificationType: string;

                Threshold: number;

                ThresholdType: string;
            };

            export type Spend = {
                Amount: number;

                Unit: string;
            };

            export type NotificationsWithSubscribers = AWS.Budgets.Budget.NotificationWithSubscribers[];

            export type Budget = AWS.Budgets.Budget.BudgetData;

        }

        export namespace BudgetsAction {

            export type IamActionDefinition = {
                PolicyArn: string;

                Roles: string[];

                Groups: string[];

                Users: string[];
            };

            export type Definition = AWS.Budgets.BudgetsAction.Definition;

            export type ScpActionDefinition = {
                PolicyId: string;

                TargetIds: string[];
            };

            export type SsmActionDefinition = {
                Subtype: string;

                Region: string;

                InstanceIds: string[];
            };

            export type ActionThreshold = AWS.Budgets.BudgetsAction.ActionThreshold;

            export type Subscriber = {
                Type: string;

                Address: string;
            };

            export type BudgetName = string;

            export type NotificationType = string;

            export type ActionType = string;

            export type ExecutionRoleArn = string;

            export type ApprovalModel = string;

            export type Subscribers = AWS.Budgets.BudgetsAction.Subscriber[];

        }

    }

    export namespace MediaConnect {

        export namespace Flow {

            export type Encryption = {
                Algorithm: string;

                ConstantInitializationVector: string;

                DeviceId: string;

                KeyType: string;

                Region: string;

                ResourceId: string;

                RoleArn: string;

                SecretArn: string;

                Url: string;
            };

            export type Source = AWS.MediaConnect.Flow.Source;

            export type FailoverConfig = {
                State: string;

                RecoveryWindow: number;
            };

            export type Name = string;

            export type AvailabilityZone = string;

            export type SourceFailoverConfig = AWS.MediaConnect.Flow.FailoverConfig;

        }

        export namespace FlowOutput {

            export type Encryption = AWS.MediaConnect.FlowOutput.Encryption;

            export type VpcInterfaceAttachment = AWS.MediaConnect.FlowOutput.VpcInterfaceAttachment;

            export type FlowArn = string;

            export type CidrAllowList = string[];

            export type Description = string;

            export type Destination = string;

            export type MaxLatency = number;

            export type Name = string;

            export type Port = number;

            export type Protocol = string;

            export type RemoteId = string;

            export type SmoothingLatency = number;

            export type StreamId = string;

        }

        export namespace FlowSource {

            export type Encryption = {
                Algorithm: string;

                ConstantInitializationVector: string;

                DeviceId: string;

                KeyType: string;

                Region: string;

                ResourceId: string;

                RoleArn: string;

                SecretArn: string;

                Url: string;
            };

            export type FlowArn = string;

            export type Decryption = AWS.MediaConnect.FlowSource.Encryption;

            export type Description = string;

            export type EntitlementArn = string;

            export type IngestPort = number;

            export type MaxBitrate = number;

            export type MaxLatency = number;

            export type Name = string;

            export type Protocol = string;

            export type StreamId = string;

            export type VpcInterfaceName = string;

            export type WhitelistCidr = string;

        }

        export namespace FlowEntitlement {

            export type Encryption = AWS.MediaConnect.FlowEntitlement.Encryption;

            export type FlowArn = string;

            export type DataTransferSubscriberFeePercent = number;

            export type Description = string;

            export type EntitlementStatus = string;

            export type Name = string;

            export type Subscribers = string[];

        }

        export namespace FlowVpcInterface {

            export type FlowArn = string;

            export type Name = string;

            export type RoleArn = string;

            export type SecurityGroupIds = string[];

            export type SubnetId = string;

        }

    }

    export namespace CodeStar {

        export namespace GitHubRepository {

            export type Code = AWS.CodeStar.GitHubRepository.Code;

            export type S3 = {
                ObjectVersion: string;

                Bucket: string;

                Key: string;
            };

            export type EnableIssues = boolean;

            export type ConnectionArn = string;

            export type RepositoryName = string;

            export type RepositoryAccessToken = string;

            export type RepositoryOwner = string;

            export type IsPrivate = boolean;

            export type RepositoryDescription = string;

        }

    }

    export namespace SSMContacts {

        export namespace Contact {

            export type ContactTargetInfo = {
                ContactId: string;

                IsEssential: boolean;
            };

            export type Targets = {
                ContactTargetInfo: AWS.SSMContacts.Contact.ContactTargetInfo;

                ChannelTargetInfo: AWS.SSMContacts.Contact.ChannelTargetInfo;
            };

            export type ChannelTargetInfo = {
                ChannelId: string;

                RetryIntervalInMinutes: number;
            };

            export type Stage = {
                DurationInMinutes: number;

                Targets: AWS.SSMContacts.Contact.Targets[];
            };

            export type Alias = string;

            export type DisplayName = string;

            export type Type = string;

            export type Plan = AWS.SSMContacts.Contact.Stage[];

        }

        export namespace ContactChannel {

            export type ContactId = string;

            export type ChannelName = string;

            export type ChannelType = string;

            export type DeferActivation = boolean;

            export type ChannelAddress = string;

        }

    }

    export namespace AuditManager {

        export namespace Assessment {

            export type Delegation = {
                LastUpdated: number;

                ControlSetId: string;

                CreationTime: number;

                CreatedBy: string;

                RoleArn: string;

                AssessmentName: string;

                Comment: string;

                Id: string;

                RoleType: string;

                AssessmentId: string;

                Status: string;
            };

            export type AWSAccount = {
                Id: string;

                EmailAddress: string;

                Name: string;
            };

            export type Role = {
                RoleArn: string;

                RoleType: string;
            };

            export type AssessmentReportsDestination = AWS.AuditManager.Assessment.AssessmentReportsDestination;

            export type AWSService = { ServiceName: string; };

            export type Scope = AWS.AuditManager.Assessment.Scope;

            export type FrameworkId = string;

            export type AwsAccount = AWS.AuditManager.Assessment.AWSAccount;

            export type Tags = AWS.AuditManager.Assessment.Tag[];

            export type Roles = AWS.AuditManager.Assessment.Role[];

            export type Status = string;

            export type Name = string;

            export type Description = string;

        }

    }

    export namespace LakeFormation {

        export namespace Permissions {

            export type DataLocationResource = {
                S3Resource: string;

                CatalogId: string;
            };

            export type ColumnWildcard = { ExcludedColumnNames: string[]; };

            export type DatabaseResource = {
                CatalogId: string;

                Name: string;
            };

            export type TableWildcard = {};

            export type Resource = AWS.LakeFormation.Permissions.Resource;

            export type DataLakePrincipal = AWS.LakeFormation.Permissions.DataLakePrincipal;

            export type TableResource = {
                DatabaseName: string;

                CatalogId: string;

                TableWildcard: AWS.LakeFormation.Permissions.TableWildcard;

                Name: string;
            };

            export type TableWithColumnsResource = {
                ColumnNames: string[];

                DatabaseName: string;

                CatalogId: string;

                Name: string;

                ColumnWildcard: AWS.LakeFormation.Permissions.ColumnWildcard;
            };

            export type Permissions = string[];

            export type PermissionsWithGrantOption = string[];

        }

        export namespace DataLakeSettings {

            export type DataLakePrincipal = { DataLakePrincipalIdentifier: string; };

            export type Admins = AWS.LakeFormation.DataLakeSettings.Admins;

            export type TrustedResourceOwners = string[];

        }

        export namespace Resource {

            export type ResourceArn = string;

            export type UseServiceLinkedRole = boolean;

            export type RoleArn = string;

        }

    }

    export namespace NetworkManager {

        export namespace Device {

            export type Location = AWS.NetworkManager.Device.Location;

            export type Description = string;

            export type Tags = AWS.NetworkManager.Device.Tag[];

            export type GlobalNetworkId = string;

            export type Model = string;

            export type SerialNumber = string;

            export type SiteId = string;

            export type Type = string;

            export type Vendor = string;

        }

        export namespace Link {

            export type Bandwidth = AWS.NetworkManager.Link.Bandwidth;

            export type GlobalNetworkId = string;

            export type SiteId = string;

            export type Provider = string;

            export type Description = string;

            export type Tags = AWS.NetworkManager.Link.Tag[];

            export type Type = string;

        }

        export namespace Site {

            export type Location = AWS.NetworkManager.Site.Location;

            export type Description = string;

            export type Tags = AWS.NetworkManager.Site.Tag[];

            export type GlobalNetworkId = string;

        }

        export namespace CustomerGatewayAssociation {

            export type GlobalNetworkId = string;

            export type CustomerGatewayArn = string;

            export type DeviceId = string;

            export type LinkId = string;

        }

        export namespace LinkAssociation {

            export type GlobalNetworkId = string;

            export type DeviceId = string;

            export type LinkId = string;

        }

        export namespace GlobalNetwork {

            export type Description = string;

            export type Tags = AWS.NetworkManager.GlobalNetwork.Tag[];

        }

        export namespace TransitGatewayRegistration {

            export type GlobalNetworkId = string;

            export type TransitGatewayArn = string;

        }

    }

    export namespace Route53 {

        export namespace HostedZone {

            export type HostedZoneTag = {
                Key: string;

                Value: string;
            };

            export type HostedZoneConfig = AWS.Route53.HostedZone.HostedZoneConfig;

            export type QueryLoggingConfig = AWS.Route53.HostedZone.QueryLoggingConfig;

            export type VPC = {
                VPCId: string;

                VPCRegion: string;
            };

            export type HostedZoneTags = AWS.Route53.HostedZone.HostedZoneTag[];

            export type Name = string;

            export type VPCs = AWS.Route53.HostedZone.VPC[];

        }

        export namespace RecordSetGroup {

            export type GeoLocation = {
                ContinentCode: string;

                CountryCode: string;

                SubdivisionCode: string;
            };

            export type RecordSet = {
                AliasTarget: AWS.Route53.RecordSetGroup.AliasTarget;

                Comment: string;

                Failover: string;

                GeoLocation: AWS.Route53.RecordSetGroup.GeoLocation;

                HealthCheckId: string;

                HostedZoneId: string;

                HostedZoneName: string;

                MultiValueAnswer: boolean;

                Name: string;

                Region: string;

                ResourceRecords: string[];

                SetIdentifier: string;

                TTL: string;

                Type: string;

                Weight: number;
            };

            export type AliasTarget = {
                DNSName: string;

                EvaluateTargetHealth: boolean;

                HostedZoneId: string;
            };

            export type Comment = string;

            export type HostedZoneId = string;

            export type HostedZoneName = string;

            export type RecordSets = AWS.Route53.RecordSetGroup.RecordSet[];

        }

        export namespace RecordSet {

            export type GeoLocation = AWS.Route53.RecordSet.GeoLocation;

            export type AliasTarget = AWS.Route53.RecordSet.AliasTarget;

            export type Comment = string;

            export type Failover = string;

            export type HealthCheckId = string;

            export type HostedZoneId = string;

            export type HostedZoneName = string;

            export type MultiValueAnswer = boolean;

            export type Name = string;

            export type Region = string;

            export type ResourceRecords = string[];

            export type SetIdentifier = string;

            export type TTL = string;

            export type Type = string;

            export type Weight = number;

        }

        export namespace HealthCheck {

            export type HealthCheckTag = {
                Key: string;

                Value: string;
            };

            export type HealthCheckConfig = JSONString;

            export type HealthCheckTags = AWS.Route53.HealthCheck.HealthCheckTag[];

        }

        export namespace DNSSEC {

            export type HostedZoneId = string;

        }

        export namespace KeySigningKey {

            export type HostedZoneId = string;

            export type Status = string;

            export type Name = string;

            export type KeyManagementServiceArn = string;

        }

    }

    export namespace Logs {

        export namespace MetricFilter {

            export type MetricTransformation = {
                DefaultValue: number;

                MetricName: string;

                MetricNamespace: string;

                MetricValue: string;
            };

            export type FilterPattern = string;

            export type LogGroupName = string;

            export type MetricTransformations = AWS.Logs.MetricFilter.MetricTransformation[];

        }

        export namespace Destination {

            export type DestinationName = string;

            export type DestinationPolicy = string;

            export type RoleArn = string;

            export type TargetArn = string;

        }

        export namespace LogGroup {

            export type LogGroupName = string;

            export type KmsKeyId = string;

            export type RetentionInDays = number;

        }

        export namespace LogStream {

            export type LogGroupName = string;

            export type LogStreamName = string;

        }

        export namespace SubscriptionFilter {

            export type DestinationArn = string;

            export type FilterPattern = string;

            export type LogGroupName = string;

            export type RoleArn = string;

        }

        export namespace QueryDefinition {

            export type Name = string;

            export type QueryString = string;

            export type LogGroupNames = string[];

        }

    }

    export namespace S3Outposts {

        export namespace Bucket {

            export type AbortIncompleteMultipartUpload = { DaysAfterInitiation: number; };

            export type Rule = {
                Status: string;

                Id: string;

                AbortIncompleteMultipartUpload: AWS.S3Outposts.Bucket.AbortIncompleteMultipartUpload;

                ExpirationDate: string;

                ExpirationInDays: number;

                Filter: JSONString;
            };

            export type LifecycleConfiguration = AWS.S3Outposts.Bucket.LifecycleConfiguration;

            export type BucketName = string;

            export type OutpostId = string;

            export type Tags = AWS.S3Outposts.Bucket.Tag[];

        }

        export namespace AccessPoint {

            export type VpcConfiguration = AWS.S3Outposts.AccessPoint.VpcConfiguration;

            export type Bucket = string;

            export type Name = string;

            export type Policy = JSONString;

        }

        export namespace Endpoint {

            export type NetworkInterface = { NetworkInterfaceId: string; };

            export type OutpostId = string;

            export type SecurityGroupId = string;

            export type SubnetId = string;

        }

        export namespace BucketPolicy {

            export type Bucket = string;

            export type PolicyDocument = JSONString;

        }

    }

    export namespace SecretsManager {

        export namespace RotationSchedule {

            export type RotationRules = AWS.SecretsManager.RotationSchedule.RotationRules;

            export type HostedRotationLambda = AWS.SecretsManager.RotationSchedule.HostedRotationLambda;

            export type SecretId = string;

            export type RotationLambdaARN = string;

        }

        export namespace Secret {

            export type ReplicaRegion = {
                KmsKeyId: string;

                Region: string;
            };

            export type GenerateSecretString = AWS.SecretsManager.Secret.GenerateSecretString;

            export type Description = string;

            export type KmsKeyId = string;

            export type SecretString = string;

            export type ReplicaRegions = AWS.SecretsManager.Secret.ReplicaRegion[];

            export type Tags = AWS.SecretsManager.Secret.Tag[];

            export type Name = string;

        }

        export namespace ResourcePolicy {

            export type BlockPublicPolicy = boolean;

            export type SecretId = string;

            export type ResourcePolicy = JSONString;

        }

        export namespace SecretTargetAttachment {

            export type SecretId = string;

            export type TargetType = string;

            export type TargetId = string;

        }

    }

    export namespace ApplicationInsights {

        export namespace Application {

            export type SubComponentConfigurationDetails = {
                AlarmMetrics: AWS.ApplicationInsights.Application.AlarmMetric[];

                Logs: AWS.ApplicationInsights.Application.Log[];

                WindowsEvents: AWS.ApplicationInsights.Application.WindowsEvent[];
            };

            export type ComponentMonitoringSetting = {
                ComponentName: string;

                ComponentARN: string;

                Tier: string;

                ComponentConfigurationMode: string;

                DefaultOverwriteComponentConfiguration: AWS.ApplicationInsights.Application.ComponentConfiguration;

                CustomComponentConfiguration: AWS.ApplicationInsights.Application.ComponentConfiguration;
            };

            export type LogPattern = {
                PatternName: string;

                Pattern: string;

                Rank: number;
            };

            export type LogPatternSet = {
                PatternSetName: string;

                LogPatterns: AWS.ApplicationInsights.Application.LogPattern[];
            };

            export type Alarm = {
                AlarmName: string;

                Severity: string;
            };

            export type WindowsEvent = {
                LogGroupName: string;

                EventName: string;

                EventLevels: string[];

                PatternSet: string;
            };

            export type ComponentConfiguration = {
                ConfigurationDetails: AWS.ApplicationInsights.Application.ConfigurationDetails;

                SubComponentTypeConfigurations: AWS.ApplicationInsights.Application.SubComponentTypeConfiguration[];
            };

            export type CustomComponent = {
                ComponentName: string;

                ResourceList: string[];
            };

            export type JMXPrometheusExporter = {
                JMXURL: string;

                HostPort: string;

                PrometheusPort: string;
            };

            export type AlarmMetric = { AlarmMetricName: string; };

            export type ConfigurationDetails = {
                AlarmMetrics: AWS.ApplicationInsights.Application.AlarmMetric[];

                Logs: AWS.ApplicationInsights.Application.Log[];

                WindowsEvents: AWS.ApplicationInsights.Application.WindowsEvent[];

                Alarms: AWS.ApplicationInsights.Application.Alarm[];

                JMXPrometheusExporter: AWS.ApplicationInsights.Application.JMXPrometheusExporter;
            };

            export type Log = {
                LogGroupName: string;

                LogPath: string;

                LogType: string;

                Encoding: string;

                PatternSet: string;
            };

            export type SubComponentTypeConfiguration = {
                SubComponentType: string;

                SubComponentConfigurationDetails: AWS.ApplicationInsights.Application.SubComponentConfigurationDetails;
            };

            export type ResourceGroupName = string;

            export type CWEMonitorEnabled = boolean;

            export type OpsCenterEnabled = boolean;

            export type OpsItemSNSTopicArn = string;

            export type Tags = AWS.ApplicationInsights.Application.Tag[];

            export type CustomComponents = AWS.ApplicationInsights.Application.CustomComponent[];

            export type LogPatternSets = AWS.ApplicationInsights.Application.LogPatternSet[];

            export type AutoConfigurationEnabled = boolean;

            export type ComponentMonitoringSettings = AWS.ApplicationInsights.Application.ComponentMonitoringSetting[];

        }

    }

    export namespace CodeBuild {

        export namespace Project {

            export type Environment = AWS.CodeBuild.Project.Environment;

            export type GitSubmodulesConfig = { FetchSubmodules: boolean; };

            export type VpcConfig = AWS.CodeBuild.Project.VpcConfig;

            export type Artifacts = AWS.CodeBuild.Project.Artifacts;

            export type RegistryCredential = {
                Credential: string;

                CredentialProvider: string;
            };

            export type CloudWatchLogsConfig = {
                Status: string;

                GroupName: string;

                StreamName: string;
            };

            export type ProjectCache = {
                Modes: string[];

                Type: string;

                Location: string;
            };

            export type ProjectBuildBatchConfig = {
                CombineArtifacts: boolean;

                ServiceRole: string;

                TimeoutInMins: number;

                Restrictions: AWS.CodeBuild.Project.BatchRestrictions;
            };

            export type FilterGroup = AWS.CodeBuild.Project.WebhookFilter[];

            export type BatchRestrictions = {
                ComputeTypesAllowed: string[];

                MaximumBuildsAllowed: number;
            };

            export type ProjectTriggers = {
                FilterGroups: AWS.CodeBuild.Project.FilterGroup[];

                BuildType: string;

                Webhook: boolean;
            };

            export type Source = AWS.CodeBuild.Project.Source;

            export type ProjectSourceVersion = {
                SourceIdentifier: string;

                SourceVersion: string;
            };

            export type LogsConfig = AWS.CodeBuild.Project.LogsConfig;

            export type SourceAuth = {
                Type: string;

                Resource: string;
            };

            export type ProjectFileSystemLocation = {
                MountPoint: string;

                Type: string;

                Identifier: string;

                MountOptions: string;

                Location: string;
            };

            export type S3LogsConfig = {
                Status: string;

                EncryptionDisabled: boolean;

                Location: string;
            };

            export type WebhookFilter = {
                Pattern: string;

                Type: string;

                ExcludeMatchedPattern: boolean;
            };

            export type BuildStatusConfig = {
                Context: string;

                TargetUrl: string;
            };

            export type EnvironmentVariable = {
                Type: string;

                Value: string;

                Name: string;
            };

            export type Description = string;

            export type SecondarySources = AWS.CodeBuild.Project.Source[];

            export type EncryptionKey = string;

            export type SourceVersion = string;

            export type Triggers = AWS.CodeBuild.Project.ProjectTriggers;

            export type SecondaryArtifacts = AWS.CodeBuild.Project.Artifacts[];

            export type Name = string;

            export type BadgeEnabled = boolean;

            export type ServiceRole = string;

            export type QueuedTimeoutInMinutes = number;

            export type FileSystemLocations = AWS.CodeBuild.Project.ProjectFileSystemLocation[];

            export type SecondarySourceVersions = AWS.CodeBuild.Project.ProjectSourceVersion[];

            export type ConcurrentBuildLimit = number;

            export type BuildBatchConfig = AWS.CodeBuild.Project.ProjectBuildBatchConfig;

            export type Tags = AWS.CodeBuild.Project.Tag[];

            export type TimeoutInMinutes = number;

            export type Cache = AWS.CodeBuild.Project.ProjectCache;

        }

        export namespace ReportGroup {

            export type ReportExportConfig = {
                S3Destination: AWS.CodeBuild.ReportGroup.S3ReportExportConfig;

                ExportConfigType: string;
            };

            export type S3ReportExportConfig = {
                Path: string;

                Bucket: string;

                Packaging: string;

                EncryptionKey: string;

                BucketOwner: string;

                EncryptionDisabled: boolean;
            };

            export type Type = string;

            export type ExportConfig = AWS.CodeBuild.ReportGroup.ReportExportConfig;

            export type DeleteReports = boolean;

            export type Tags = AWS.CodeBuild.ReportGroup.Tag[];

            export type Name = string;

        }

        export namespace SourceCredential {

            export type ServerType = string;

            export type Username = string;

            export type Token = string;

            export type AuthType = string;

        }

    }

    export namespace IoTSiteWise {

        export namespace AccessPolicy {

            export type Project = { id: string; };

            export type IamRole = { arn: string; };

            export type AccessPolicyResource = AWS.IoTSiteWise.AccessPolicy.AccessPolicyResource;

            export type User = { id: string; };

            export type IamUser = { arn: string; };

            export type Portal = { id: string; };

            export type AccessPolicyIdentity = AWS.IoTSiteWise.AccessPolicy.AccessPolicyIdentity;

            export type AccessPolicyPermission = string;

        }

        export namespace Gateway {

            export type Greengrass = { GroupArn: string; };

            export type GatewayCapabilitySummary = {
                CapabilityNamespace: string;

                CapabilityConfiguration: string;
            };

            export type GatewayPlatform = AWS.IoTSiteWise.Gateway.GatewayPlatform;

            export type GatewayName = string;

            export type Tags = AWS.IoTSiteWise.Gateway.Tag[];

            export type GatewayCapabilitySummaries = AWS.IoTSiteWise.Gateway.GatewayCapabilitySummary[];

        }

        export namespace AssetModel {

            export type AssetModelCompositeModel = {
                Description: string;

                Name: string;

                Type: string;

                CompositeModelProperties: AWS.IoTSiteWise.AssetModel.AssetModelProperty[];
            };

            export type MetricWindow = { Tumbling: AWS.IoTSiteWise.AssetModel.TumblingWindow; };

            export type TumblingWindow = { Interval: string; };

            export type Attribute = { DefaultValue: string; };

            export type ExpressionVariable = {
                Name: string;

                Value: AWS.IoTSiteWise.AssetModel.VariableValue;
            };

            export type VariableValue = {
                PropertyLogicalId: string;

                HierarchyLogicalId: string;
            };

            export type Transform = {
                Expression: string;

                Variables: AWS.IoTSiteWise.AssetModel.ExpressionVariable[];
            };

            export type AssetModelHierarchy = {
                LogicalId: string;

                Name: string;

                ChildAssetModelId: string;
            };

            export type Metric = {
                Expression: string;

                Variables: AWS.IoTSiteWise.AssetModel.ExpressionVariable[];

                Window: AWS.IoTSiteWise.AssetModel.MetricWindow;
            };

            export type AssetModelProperty = {
                LogicalId: string;

                Name: string;

                DataType: string;

                DataTypeSpec: string;

                Unit: string;

                Type: AWS.IoTSiteWise.AssetModel.PropertyType;
            };

            export type PropertyType = {
                TypeName: string;

                Attribute: AWS.IoTSiteWise.AssetModel.Attribute;

                Transform: AWS.IoTSiteWise.AssetModel.Transform;

                Metric: AWS.IoTSiteWise.AssetModel.Metric;
            };

            export type AssetModelName = string;

            export type AssetModelDescription = string;

            export type AssetModelProperties = AWS.IoTSiteWise.AssetModel.AssetModelProperty[];

            export type AssetModelCompositeModels = AWS.IoTSiteWise.AssetModel.AssetModelCompositeModel[];

            export type AssetModelHierarchies = AWS.IoTSiteWise.AssetModel.AssetModelHierarchy[];

            export type Tags = AWS.IoTSiteWise.AssetModel.Tag[];

        }

        export namespace Asset {

            export type AssetHierarchy = {
                LogicalId: string;

                ChildAssetId: string;
            };

            export type AssetProperty = {
                LogicalId: string;

                Alias: string;

                NotificationState: string;
            };

            export type AssetModelId = string;

            export type AssetName = string;

            export type AssetProperties = AWS.IoTSiteWise.Asset.AssetProperty[];

            export type AssetHierarchies = AWS.IoTSiteWise.Asset.AssetHierarchy[];

            export type Tags = AWS.IoTSiteWise.Asset.Tag[];

        }

        export namespace Dashboard {

            export type ProjectId = string;

            export type DashboardName = string;

            export type DashboardDescription = string;

            export type DashboardDefinition = string;

            export type Tags = AWS.IoTSiteWise.Dashboard.Tag[];

        }

        export namespace Portal {

            export type PortalAuthMode = string;

            export type PortalContactEmail = string;

            export type PortalDescription = string;

            export type PortalName = string;

            export type RoleArn = string;

            export type NotificationSenderEmail = string;

            export type Alarms = JSONString;

            export type Tags = AWS.IoTSiteWise.Portal.Tag[];

        }

        export namespace Project {

            export type PortalId = string;

            export type ProjectName = string;

            export type ProjectDescription = string;

            export type Tags = AWS.IoTSiteWise.Project.Tag[];

        }

    }

    export namespace CloudFormation {

        export namespace StackSet {

            export type StackInstances = {
                DeploymentTargets: AWS.CloudFormation.StackSet.DeploymentTargets;

                Regions: string[];

                ParameterOverrides: AWS.CloudFormation.StackSet.Parameter[];
            };

            export type AutoDeployment = AWS.CloudFormation.StackSet.AutoDeployment;

            export type DeploymentTargets = {
                Accounts: string[];

                OrganizationalUnitIds: string[];
            };

            export type OperationPreferences = AWS.CloudFormation.StackSet.OperationPreferences;

            export type Parameter = {
                ParameterKey: string;

                ParameterValue: string;
            };

            export type StackSetName = string;

            export type AdministrationRoleARN = string;

            export type Capabilities = string[];

            export type Description = string;

            export type ExecutionRoleName = string;

            export type StackInstancesGroup = AWS.CloudFormation.StackSet.StackInstances[];

            export type Parameters = AWS.CloudFormation.StackSet.Parameter[];

            export type PermissionModel = string;

            export type Tags = AWS.CloudFormation.StackSet.Tag[];

            export type TemplateBody = string;

            export type TemplateURL = string;

            export type CallAs = string;

        }

        export namespace ResourceVersion {

            export type LoggingConfig = AWS.CloudFormation.ResourceVersion.LoggingConfig;

            export type ExecutionRoleArn = string;

            export type SchemaHandlerPackage = string;

            export type TypeName = string;

        }

        export namespace TypeActivation {

            export type LoggingConfig = AWS.CloudFormation.TypeActivation.LoggingConfig;

            export type ExecutionRoleArn = string;

            export type PublisherId = string;

            export type PublicTypeArn = string;

            export type AutoUpdate = boolean;

            export type TypeNameAlias = string;

            export type VersionBump = string;

            export type MajorVersion = string;

            export type TypeName = string;

            export type Type = string;

        }

        export namespace ResourceDefaultVersion {

            export type TypeVersionArn = string;

            export type TypeName = string;

            export type VersionId = string;

        }

        export namespace CustomResource {

            export type ServiceToken = string;

        }

        export namespace PublicTypeVersion {

            export type Arn = string;

            export type PublicVersionNumber = string;

            export type TypeName = string;

            export type LogDeliveryBucket = string;

            export type Type = string;

        }

        export namespace Macro {

            export type Description = string;

            export type FunctionName = string;

            export type LogGroupName = string;

            export type LogRoleARN = string;

            export type Name = string;

        }

        export namespace ModuleDefaultVersion {

            export type Arn = string;

            export type ModuleName = string;

            export type VersionId = string;

        }

        export namespace Stack {

            export type NotificationARNs = string[];

            export type Parameters = Record<string, string>;

            export type Tags = AWS.CloudFormation.Stack.Tag[];

            export type TemplateURL = string;

            export type TimeoutInMinutes = number;

        }

        export namespace Publisher {

            export type AcceptTermsAndConditions = boolean;

            export type ConnectionArn = string;

        }

        export namespace WaitCondition {

            export type Count = number;

            export type Handle = string;

            export type Timeout = string;

        }

        export namespace WaitConditionHandle {


        }

        export namespace ModuleVersion {

            export type ModuleName = string;

            export type ModulePackage = string;

        }

    }

    export namespace SSMIncidents {

        export namespace ResponsePlan {

            export type SsmParameter = {
                Key: string;

                Values: string[];
            };

            export type SsmAutomation = {
                RoleArn: string;

                DocumentName: string;

                DocumentVersion: string;

                TargetAccount: string;

                Parameters: AWS.SSMIncidents.ResponsePlan.SsmParameter[];
            };

            export type Action = { SsmAutomation: AWS.SSMIncidents.ResponsePlan.SsmAutomation; };

            export type NotificationTargetItem = { SnsTopicArn: string; };

            export type ChatChannel = AWS.SSMIncidents.ResponsePlan.ChatChannel;

            export type IncidentTemplate = AWS.SSMIncidents.ResponsePlan.IncidentTemplate;

            export type Name = string;

            export type DisplayName = string;

            export type Engagements = string[];

            export type Actions = AWS.SSMIncidents.ResponsePlan.Action[];

            export type Tags = AWS.SSMIncidents.ResponsePlan.Tag[];

        }

        export namespace ReplicationSet {

            export type RegionConfiguration = { SseKmsKeyId: string; };

            export type ReplicationRegion = {
                RegionName: string;

                RegionConfiguration: AWS.SSMIncidents.ReplicationSet.RegionConfiguration;
            };

            export type Regions = AWS.SSMIncidents.ReplicationSet.ReplicationRegion[];

            export type DeletionProtected = boolean;

        }

    }

    export namespace Route53Resolver {

        export namespace FirewallRuleGroup {

            export type FirewallRule = {
                FirewallDomainListId: string;

                Priority: number;

                Action: string;

                BlockResponse: string;

                BlockOverrideDomain: string;

                BlockOverrideDnsType: string;

                BlockOverrideTtl: number;
            };

            export type Name = string;

            export type FirewallRules = AWS.Route53Resolver.FirewallRuleGroup.FirewallRule[];

            export type Tags = AWS.Route53Resolver.FirewallRuleGroup.Tag[];

        }

        export namespace ResolverRule {

            export type TargetAddress = {
                Ip: string;

                Port: string;
            };

            export type ResolverEndpointId = string;

            export type DomainName = string;

            export type RuleType = string;

            export type TargetIps = AWS.Route53Resolver.ResolverRule.TargetAddress[];

            export type Tags = AWS.Route53Resolver.ResolverRule.Tag[];

            export type Name = string;

        }

        export namespace ResolverEndpoint {

            export type IpAddressRequest = {
                Ip: string;

                SubnetId: string;
            };

            export type IpAddresses = AWS.Route53Resolver.ResolverEndpoint.IpAddressRequest[];

            export type Direction = string;

            export type SecurityGroupIds = string[];

            export type Tags = AWS.Route53Resolver.ResolverEndpoint.Tag[];

            export type Name = string;

        }

        export namespace ResolverQueryLoggingConfig {

            export type Name = string;

            export type DestinationArn = string;

        }

        export namespace FirewallRuleGroupAssociation {

            export type FirewallRuleGroupId = string;

            export type VpcId = string;

            export type Name = string;

            export type Priority = number;

            export type MutationProtection = string;

            export type Tags = AWS.Route53Resolver.FirewallRuleGroupAssociation.Tag[];

        }

        export namespace ResolverQueryLoggingConfigAssociation {

            export type ResolverQueryLogConfigId = string;

            export type ResourceId = string;

        }

        export namespace ResolverDNSSECConfig {

            export type ResourceId = string;

        }

        export namespace FirewallDomainList {

            export type Name = string;

            export type Domains = string[];

            export type DomainFileUrl = string;

            export type Tags = AWS.Route53Resolver.FirewallDomainList.Tag[];

        }

        export namespace ResolverRuleAssociation {

            export type VPCId = string;

            export type ResolverRuleId = string;

            export type Name = string;

        }

    }

    export namespace SNS {

        export namespace Topic {

            export type Subscription = AWS.SNS.Topic.Subscription[];

            export type ContentBasedDeduplication = boolean;

            export type DisplayName = string;

            export type FifoTopic = boolean;

            export type KmsMasterKeyId = string;

            export type Tags = AWS.SNS.Topic.Tag[];

            export type TopicName = string;

        }

        export namespace Subscription {

            export type DeliveryPolicy = JSONString;

            export type Endpoint = string;

            export type FilterPolicy = JSONString;

            export type Protocol = string;

            export type RawMessageDelivery = boolean;

            export type RedrivePolicy = JSONString;

            export type Region = string;

            export type SubscriptionRoleArn = string;

            export type TopicArn = string;

        }

        export namespace TopicPolicy {

            export type PolicyDocument = JSONString;

            export type Topics = string[];

        }

    }

    export namespace Connect {

        export namespace QuickConnect {

            export type QueueQuickConnectConfig = {
                ContactFlowArn: string;

                QueueArn: string;
            };

            export type QuickConnectConfig = AWS.Connect.QuickConnect.QuickConnectConfig;

            export type UserQuickConnectConfig = {
                ContactFlowArn: string;

                UserArn: string;
            };

            export type PhoneNumberQuickConnectConfig = { PhoneNumber: string; };

            export type InstanceArn = string;

            export type Name = string;

            export type Description = string;

            export type Tags = AWS.Connect.QuickConnect.Tag[];

        }

    }

    export namespace ApiGatewayV2 {

        export namespace ApiGatewayManagedOverrides {

            export type AccessLogSettings = {
                Format: string;

                DestinationArn: string;
            };

            export type RouteOverrides = {
                Target: string;

                AuthorizerId: string;

                OperationName: string;

                AuthorizationScopes: string[];

                AuthorizationType: string;
            };

            export type StageOverrides = {
                Description: string;

                AccessLogSettings: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.AccessLogSettings;

                AutoDeploy: boolean;

                RouteSettings: JSONString;

                StageVariables: JSONString;

                DefaultRouteSettings: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteSettings;
            };

            export type RouteSettings = {
                LoggingLevel: string;

                DataTraceEnabled: boolean;

                ThrottlingBurstLimit: number;

                DetailedMetricsEnabled: boolean;

                ThrottlingRateLimit: number;
            };

            export type IntegrationOverrides = {
                Description: string;

                PayloadFormatVersion: string;

                TimeoutInMillis: number;

                IntegrationMethod: string;
            };

            export type Integration = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.IntegrationOverrides;

            export type Stage = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.StageOverrides;

            export type ApiId = string;

            export type Route = AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteOverrides;

        }

        export namespace Integration {

            export type ResponseParameterList = { ResponseParameters: AWS.ApiGatewayV2.Integration.ResponseParameter[]; };

            export type TlsConfig = AWS.ApiGatewayV2.Integration.TlsConfig;

            export type ResponseParameter = {
                Destination: string;

                Source: string;
            };

            export type Description = string;

            export type TemplateSelectionExpression = string;

            export type ConnectionType = string;

            export type ResponseParameters = JSONString;

            export type IntegrationMethod = string;

            export type PassthroughBehavior = string;

            export type RequestParameters = JSONString;

            export type ConnectionId = string;

            export type IntegrationUri = string;

            export type PayloadFormatVersion = string;

            export type CredentialsArn = string;

            export type RequestTemplates = JSONString;

            export type TimeoutInMillis = number;

            export type ContentHandlingStrategy = string;

            export type IntegrationSubtype = string;

            export type ApiId = string;

            export type IntegrationType = string;

        }

        export namespace Route {

            export type ParameterConstraints = { Required: boolean; };

            export type Target = string;

            export type RouteResponseSelectionExpression = string;

            export type AuthorizerId = string;

            export type RequestModels = JSONString;

            export type OperationName = string;

            export type AuthorizationScopes = string[];

            export type ApiKeyRequired = boolean;

            export type RouteKey = string;

            export type AuthorizationType = string;

            export type ModelSelectionExpression = string;

            export type ApiId = string;

            export type RequestParameters = JSONString;

        }

        export namespace Stage {

            export type AccessLogSettings = AWS.ApiGatewayV2.Stage.AccessLogSettings;

            export type RouteSettings = JSONString;

            export type ClientCertificateId = string;

            export type DeploymentId = string;

            export type Description = string;

            export type AutoDeploy = boolean;

            export type StageName = string;

            export type StageVariables = JSONString;

            export type AccessPolicyId = string;

            export type ApiId = string;

            export type DefaultRouteSettings = AWS.ApiGatewayV2.Stage.RouteSettings;

            export type Tags = JSONString;

        }

        export namespace DomainName {

            export type MutualTlsAuthentication = AWS.ApiGatewayV2.DomainName.MutualTlsAuthentication;

            export type DomainNameConfiguration = {
                SecurityPolicy: string;

                EndpointType: string;

                CertificateName: string;

                CertificateArn: string;
            };

            export type DomainName = string;

            export type DomainNameConfigurations = AWS.ApiGatewayV2.DomainName.DomainNameConfiguration[];

            export type Tags = JSONString;

        }

        export namespace Authorizer {

            export type JWTConfiguration = {
                Issuer: string;

                Audience: string[];
            };

            export type IdentityValidationExpression = string;

            export type AuthorizerUri = string;

            export type AuthorizerCredentialsArn = string;

            export type AuthorizerType = string;

            export type JwtConfiguration = AWS.ApiGatewayV2.Authorizer.JWTConfiguration;

            export type AuthorizerResultTtlInSeconds = number;

            export type IdentitySource = string[];

            export type AuthorizerPayloadFormatVersion = string;

            export type EnableSimpleResponses = boolean;

            export type ApiId = string;

            export type Name = string;

        }

        export namespace RouteResponse {

            export type ParameterConstraints = { Required: boolean; };

            export type RouteResponseKey = string;

            export type ResponseParameters = JSONString;

            export type RouteId = string;

            export type ModelSelectionExpression = string;

            export type ApiId = string;

            export type ResponseModels = JSONString;

        }

        export namespace Api {

            export type Cors = {
                AllowOrigins: string[];

                AllowCredentials: boolean;

                ExposeHeaders: string[];

                AllowHeaders: string[];

                MaxAge: number;

                AllowMethods: string[];
            };

            export type BodyS3Location = AWS.ApiGatewayV2.Api.BodyS3Location;

            export type RouteSelectionExpression = string;

            export type Description = string;

            export type BasePath = string;

            export type FailOnWarnings = boolean;

            export type DisableExecuteApiEndpoint = boolean;

            export type DisableSchemaValidation = boolean;

            export type Name = string;

            export type Target = string;

            export type CredentialsArn = string;

            export type CorsConfiguration = AWS.ApiGatewayV2.Api.Cors;

            export type Version = string;

            export type ProtocolType = string;

            export type RouteKey = string;

            export type Body = JSONString;

            export type Tags = JSONString;

            export type ApiKeySelectionExpression = string;

        }

        export namespace Deployment {

            export type Description = string;

            export type StageName = string;

            export type ApiId = string;

        }

        export namespace Model {

            export type Description = string;

            export type ContentType = string;

            export type Schema = JSONString;

            export type ApiId = string;

            export type Name = string;

        }

        export namespace IntegrationResponse {

            export type ResponseTemplates = JSONString;

            export type TemplateSelectionExpression = string;

            export type ResponseParameters = JSONString;

            export type ContentHandlingStrategy = string;

            export type IntegrationId = string;

            export type IntegrationResponseKey = string;

            export type ApiId = string;

        }

        export namespace VpcLink {

            export type SubnetIds = string[];

            export type SecurityGroupIds = string[];

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace ApiMapping {

            export type DomainName = string;

            export type Stage = string;

            export type ApiMappingKey = string;

            export type ApiId = string;

        }

    }

    export namespace CodePipeline {

        export namespace Webhook {

            export type WebhookFilterRule = {
                JsonPath: string;

                MatchEquals: string;
            };

            export type WebhookAuthConfiguration = {
                AllowedIPRange: string;

                SecretToken: string;
            };

            export type AuthenticationConfiguration = AWS.CodePipeline.Webhook.WebhookAuthConfiguration;

            export type Filters = AWS.CodePipeline.Webhook.WebhookFilterRule[];

            export type Authentication = string;

            export type TargetPipeline = string;

            export type TargetAction = string;

            export type Name = string;

            export type TargetPipelineVersion = number;

            export type RegisterWithThirdParty = boolean;

        }

        export namespace Pipeline {

            export type OutputArtifact = { Name: string; };

            export type StageTransition = {
                Reason: string;

                StageName: string;
            };

            export type InputArtifact = { Name: string; };

            export type BlockerDeclaration = {
                Name: string;

                Type: string;
            };

            export type ArtifactStoreMap = {
                ArtifactStore: AWS.CodePipeline.Pipeline.ArtifactStore;

                Region: string;
            };

            export type EncryptionKey = {
                Id: string;

                Type: string;
            };

            export type ActionDeclaration = {
                ActionTypeId: AWS.CodePipeline.Pipeline.ActionTypeId;

                Configuration: JSONString;

                InputArtifacts: AWS.CodePipeline.Pipeline.InputArtifact[];

                Name: string;

                Namespace: string;

                OutputArtifacts: AWS.CodePipeline.Pipeline.OutputArtifact[];

                Region: string;

                RoleArn: string;

                RunOrder: number;
            };

            export type StageDeclaration = {
                Actions: AWS.CodePipeline.Pipeline.ActionDeclaration[];

                Blockers: AWS.CodePipeline.Pipeline.BlockerDeclaration[];

                Name: string;
            };

            export type ArtifactStore = AWS.CodePipeline.Pipeline.ArtifactStore;

            export type ActionTypeId = {
                Category: string;

                Owner: string;

                Provider: string;

                Version: string;
            };

            export type ArtifactStores = AWS.CodePipeline.Pipeline.ArtifactStoreMap[];

            export type DisableInboundStageTransitions = AWS.CodePipeline.Pipeline.StageTransition[];

            export type Name = string;

            export type RestartExecutionOnUpdate = boolean;

            export type RoleArn = string;

            export type Stages = AWS.CodePipeline.Pipeline.StageDeclaration[];

            export type Tags = AWS.CodePipeline.Pipeline.Tag[];

        }

        export namespace CustomActionType {

            export type ArtifactDetails = {
                MaximumCount: number;

                MinimumCount: number;
            };

            export type ConfigurationProperties = AWS.CodePipeline.CustomActionType.ConfigurationProperties[];

            export type Settings = AWS.CodePipeline.CustomActionType.Settings;

            export type Category = string;

            export type InputArtifactDetails = AWS.CodePipeline.CustomActionType.ArtifactDetails;

            export type OutputArtifactDetails = AWS.CodePipeline.CustomActionType.ArtifactDetails;

            export type Provider = string;

            export type Tags = AWS.CodePipeline.CustomActionType.Tag[];

            export type Version = string;

        }

    }

    export namespace MSK {

        export namespace Cluster {

            export type S3 = {
                Bucket: string;

                Enabled: boolean;

                Prefix: string;
            };

            export type CloudWatchLogs = {
                LogGroup: string;

                Enabled: boolean;
            };

            export type EncryptionAtRest = { DataVolumeKMSKeyId: string; };

            export type BrokerLogs = {
                S3: AWS.MSK.Cluster.S3;

                Firehose: AWS.MSK.Cluster.Firehose;

                CloudWatchLogs: AWS.MSK.Cluster.CloudWatchLogs;
            };

            export type EncryptionInTransit = {
                ClientBroker: string;

                InCluster: boolean;
            };

            export type Prometheus = {
                JmxExporter: AWS.MSK.Cluster.JmxExporter;

                NodeExporter: AWS.MSK.Cluster.NodeExporter;
            };

            export type LoggingInfo = AWS.MSK.Cluster.LoggingInfo;

            export type EncryptionInfo = AWS.MSK.Cluster.EncryptionInfo;

            export type Iam = { Enabled: boolean; };

            export type Sasl = {
                Iam: AWS.MSK.Cluster.Iam;

                Scram: AWS.MSK.Cluster.Scram;
            };

            export type ConfigurationInfo = AWS.MSK.Cluster.ConfigurationInfo;

            export type BrokerNodeGroupInfo = AWS.MSK.Cluster.BrokerNodeGroupInfo;

            export type Scram = { Enabled: boolean; };

            export type JmxExporter = { EnabledInBroker: boolean; };

            export type StorageInfo = { EBSStorageInfo: AWS.MSK.Cluster.EBSStorageInfo; };

            export type NodeExporter = { EnabledInBroker: boolean; };

            export type EBSStorageInfo = { VolumeSize: number; };

            export type Firehose = {
                DeliveryStream: string;

                Enabled: boolean;
            };

            export type ClientAuthentication = AWS.MSK.Cluster.ClientAuthentication;

            export type Tls = { CertificateAuthorityArnList: string[]; };

            export type OpenMonitoring = AWS.MSK.Cluster.OpenMonitoring;

            export type EnhancedMonitoring = string;

            export type KafkaVersion = string;

            export type NumberOfBrokerNodes = number;

            export type ClusterName = string;

            export type Tags = JSONString;

        }

    }

    export namespace NimbleStudio {

        export namespace StudioComponent {

            export type LicenseServiceConfiguration = { Endpoint: string; };

            export type ScriptParameterKeyValue = {
                Key: string;

                Value: string;
            };

            export type ActiveDirectoryConfiguration = {
                ComputerAttributes: AWS.NimbleStudio.StudioComponent.ActiveDirectoryComputerAttribute[];

                DirectoryId: string;

                OrganizationalUnitDistinguishedName: string;
            };

            export type ActiveDirectoryComputerAttribute = {
                Name: string;

                Value: string;
            };

            export type StudioComponentConfiguration = {
                ActiveDirectoryConfiguration: AWS.NimbleStudio.StudioComponent.ActiveDirectoryConfiguration;

                ComputeFarmConfiguration: AWS.NimbleStudio.StudioComponent.ComputeFarmConfiguration;

                LicenseServiceConfiguration: AWS.NimbleStudio.StudioComponent.LicenseServiceConfiguration;

                SharedFileSystemConfiguration: AWS.NimbleStudio.StudioComponent.SharedFileSystemConfiguration;
            };

            export type StudioComponentInitializationScript = {
                LaunchProfileProtocolVersion: string;

                Platform: string;

                RunContext: string;

                Script: string;
            };

            export type ComputeFarmConfiguration = {
                ActiveDirectoryUser: string;

                Endpoint: string;
            };

            export type SharedFileSystemConfiguration = {
                Endpoint: string;

                FileSystemId: string;

                LinuxMountPoint: string;

                ShareName: string;

                WindowsMountDrive: string;
            };

            export type Configuration = AWS.NimbleStudio.StudioComponent.StudioComponentConfiguration;

            export type Description = string;

            export type InitializationScripts = AWS.NimbleStudio.StudioComponent.StudioComponentInitializationScript[];

            export type Name = string;

            export type ScriptParameters = AWS.NimbleStudio.StudioComponent.ScriptParameterKeyValue[];

            export type Ec2SecurityGroupIds = string[];

            export type StudioId = string;

            export type Subtype = string;

            export type Type = string;

            export type Tags = Record<string, string>;

        }

        export namespace LaunchProfile {

            export type StreamConfiguration = AWS.NimbleStudio.LaunchProfile.StreamConfiguration;

            export type Description = string;

            export type Name = string;

            export type Ec2SubnetIds = string[];

            export type StudioComponentIds = string[];

            export type LaunchProfileProtocolVersions = string[];

            export type StudioId = string;

            export type Tags = Record<string, string>;

        }

        export namespace Studio {

            export type StudioEncryptionConfiguration = AWS.NimbleStudio.Studio.StudioEncryptionConfiguration;

            export type AdminRoleArn = string;

            export type DisplayName = string;

            export type StudioName = string;

            export type UserRoleArn = string;

            export type Tags = Record<string, string>;

        }

        export namespace StreamingImage {

            export type StudioId = string;

            export type Ec2ImageId = string;

            export type Name = string;

            export type Description = string;

            export type Tags = Record<string, string>;

        }

    }

    export namespace GlobalAccelerator {

        export namespace EndpointGroup {

            export type PortOverride = {
                ListenerPort: number;

                EndpointPort: number;
            };

            export type EndpointConfiguration = {
                EndpointId: string;

                Weight: number;

                ClientIPPreservationEnabled: boolean;
            };

            export type ListenerArn = string;

            export type EndpointGroupRegion = string;

            export type EndpointConfigurations = AWS.GlobalAccelerator.EndpointGroup.EndpointConfiguration[];

            export type TrafficDialPercentage = number;

            export type HealthCheckPort = number;

            export type HealthCheckProtocol = string;

            export type HealthCheckPath = string;

            export type HealthCheckIntervalSeconds = number;

            export type ThresholdCount = number;

            export type PortOverrides = AWS.GlobalAccelerator.EndpointGroup.PortOverride[];

        }

        export namespace Listener {

            export type PortRange = {
                FromPort: number;

                ToPort: number;
            };

            export type AcceleratorArn = string;

            export type PortRanges = AWS.GlobalAccelerator.Listener.PortRange[];

            export type Protocol = string;

            export type ClientAffinity = string;

        }

        export namespace Accelerator {

            export type Name = string;

            export type IpAddressType = string;

            export type IpAddresses = string[];

            export type Enabled = boolean;

            export type Tags = AWS.GlobalAccelerator.Accelerator.Tag[];

        }

    }

    export namespace IVS {

        export namespace RecordingConfiguration {

            export type DestinationConfiguration = AWS.IVS.RecordingConfiguration.DestinationConfiguration;

            export type S3DestinationConfiguration = { BucketName: string; };

            export type Name = string;

            export type Tags = AWS.IVS.RecordingConfiguration.Tag[];

        }

        export namespace Channel {

            export type Name = string;

            export type Authorized = boolean;

            export type LatencyMode = string;

            export type Type = string;

            export type Tags = AWS.IVS.Channel.Tag[];

            export type RecordingConfigurationArn = string;

        }

        export namespace PlaybackKeyPair {

            export type Name = string;

            export type PublicKeyMaterial = string;

            export type Tags = AWS.IVS.PlaybackKeyPair.Tag[];

        }

        export namespace StreamKey {

            export type ChannelArn = string;

            export type Tags = AWS.IVS.StreamKey.Tag[];

        }

    }

    export namespace AmazonMQ {

        export namespace Broker {

            export type LogList = {
                Audit: boolean;

                General: boolean;
            };

            export type User = {
                Username: string;

                Groups: string[];

                ConsoleAccess: boolean;

                Password: string;
            };

            export type LdapServerMetadata = AWS.AmazonMQ.Broker.LdapServerMetadata;

            export type EncryptionOptions = AWS.AmazonMQ.Broker.EncryptionOptions;

            export type MaintenanceWindow = {
                DayOfWeek: string;

                TimeOfDay: string;

                TimeZone: string;
            };

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type ConfigurationId = {
                Revision: number;

                Id: string;
            };

            export type SecurityGroups = string[];

            export type StorageType = string;

            export type EngineVersion = string;

            export type Configuration = AWS.AmazonMQ.Broker.ConfigurationId;

            export type AuthenticationStrategy = string;

            export type MaintenanceWindowStartTime = AWS.AmazonMQ.Broker.MaintenanceWindow;

            export type HostInstanceType = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type Users = AWS.AmazonMQ.Broker.User[];

            export type Logs = AWS.AmazonMQ.Broker.LogList;

            export type SubnetIds = string[];

            export type BrokerName = string;

            export type DeploymentMode = string;

            export type EngineType = string;

            export type PubliclyAccessible = boolean;

            export type Tags = AWS.AmazonMQ.Broker.TagsEntry[];

        }

        export namespace Configuration {

            export type TagsEntry = {
                Value: string;

                Key: string;
            };

            export type EngineVersion = string;

            export type Description = string;

            export type AuthenticationStrategy = string;

            export type EngineType = string;

            export type Data = string;

            export type Tags = AWS.AmazonMQ.Configuration.TagsEntry[];

            export type Name = string;

        }

        export namespace ConfigurationAssociation {

            export type ConfigurationId = {
                Revision: number;

                Id: string;
            };

            export type Broker = string;

            export type Configuration = AWS.AmazonMQ.ConfigurationAssociation.ConfigurationId;

        }

    }

    export namespace DataPipeline {

        export namespace Pipeline {

            export type PipelineObject = {
                Fields: AWS.DataPipeline.Pipeline.Field[];

                Id: string;

                Name: string;
            };

            export type ParameterAttribute = {
                Key: string;

                StringValue: string;
            };

            export type PipelineTag = {
                Key: string;

                Value: string;
            };

            export type ParameterObject = {
                Attributes: AWS.DataPipeline.Pipeline.ParameterAttribute[];

                Id: string;
            };

            export type ParameterValue = {
                Id: string;

                StringValue: string;
            };

            export type Field = {
                Key: string;

                RefValue: string;

                StringValue: string;
            };

            export type Activate = boolean;

            export type Description = string;

            export type Name = string;

            export type ParameterObjects = AWS.DataPipeline.Pipeline.ParameterObject[];

            export type ParameterValues = AWS.DataPipeline.Pipeline.ParameterValue[];

            export type PipelineObjects = AWS.DataPipeline.Pipeline.PipelineObject[];

            export type PipelineTags = AWS.DataPipeline.Pipeline.PipelineTag[];

        }

    }

    export namespace FIS {

        export namespace ExperimentTemplate {

            export type ExperimentTemplateStopCondition = {
                Source: string;

                Value: string;
            };

            export type ExperimentTemplateTarget = {
                ResourceType: string;

                ResourceArns: string[];

                ResourceTags: Record<string, string>;

                Filters: AWS.FIS.ExperimentTemplate.ExperimentTemplateTargetFilter[];

                SelectionMode: string;
            };

            export type ExperimentTemplateAction = {
                ActionId: string;

                Description: string;

                Parameters: Record<string, string>;

                Targets: Record<string, string>;

                StartAfter: string[];
            };

            export type ExperimentTemplateTargetFilter = {
                Path: string;

                Values: string[];
            };

            export type Description = string;

            export type Targets = Record<string, AWS.FIS.ExperimentTemplate.ExperimentTemplateTarget>;

            export type Actions = Record<string, AWS.FIS.ExperimentTemplate.ExperimentTemplateAction>;

            export type StopConditions = AWS.FIS.ExperimentTemplate.ExperimentTemplateStopCondition[];

            export type RoleArn = string;

            export type Tags = Record<string, string>;

        }

    }

    export namespace IAM {

        export namespace Role {

            export type Policy = {
                PolicyDocument: JSONString;

                PolicyName: string;
            };

            export type AssumeRolePolicyDocument = JSONString;

            export type Description = string;

            export type ManagedPolicyArns = string[];

            export type MaxSessionDuration = number;

            export type Path = string;

            export type PermissionsBoundary = string;

            export type Policies = AWS.IAM.Role.Policy[];

            export type RoleName = string;

            export type Tags = AWS.IAM.Role.Tag[];

        }

        export namespace User {

            export type LoginProfile = AWS.IAM.User.LoginProfile;

            export type Policy = {
                PolicyDocument: JSONString;

                PolicyName: string;
            };

            export type Groups = string[];

            export type ManagedPolicyArns = string[];

            export type Path = string;

            export type PermissionsBoundary = string;

            export type Policies = AWS.IAM.User.Policy[];

            export type Tags = AWS.IAM.User.Tag[];

            export type UserName = string;

        }

        export namespace Group {

            export type Policy = {
                PolicyDocument: JSONString;

                PolicyName: string;
            };

            export type GroupName = string;

            export type ManagedPolicyArns = string[];

            export type Path = string;

            export type Policies = AWS.IAM.Group.Policy[];

        }

        export namespace VirtualMFADevice {

            export type VirtualMfaDeviceName = string;

            export type Path = string;

            export type Users = string[];

            export type Tags = AWS.IAM.VirtualMFADevice.Tag[];

        }

        export namespace SAMLProvider {

            export type Name = string;

            export type SamlMetadataDocument = string;

            export type Tags = AWS.IAM.SAMLProvider.Tag[];

        }

        export namespace ServerCertificate {

            export type CertificateBody = string;

            export type CertificateChain = string;

            export type ServerCertificateName = string;

            export type Path = string;

            export type PrivateKey = string;

            export type Tags = AWS.IAM.ServerCertificate.Tag[];

        }

        export namespace Policy {

            export type Groups = string[];

            export type PolicyDocument = JSONString;

            export type PolicyName = string;

            export type Roles = string[];

            export type Users = string[];

        }

        export namespace ServiceLinkedRole {

            export type CustomSuffix = string;

            export type Description = string;

            export type AWSServiceName = string;

        }

        export namespace AccessKey {

            export type Serial = number;

            export type Status = string;

            export type UserName = string;

        }

        export namespace OIDCProvider {

            export type ClientIdList = string[];

            export type Url = string;

            export type ThumbprintList = string[];

            export type Tags = AWS.IAM.OIDCProvider.Tag[];

        }

        export namespace UserToGroupAddition {

            export type GroupName = string;

            export type Users = string[];

        }

        export namespace InstanceProfile {

            export type InstanceProfileName = string;

            export type Path = string;

            export type Roles = string[];

        }

        export namespace ManagedPolicy {

            export type Description = string;

            export type Groups = string[];

            export type ManagedPolicyName = string;

            export type Path = string;

            export type PolicyDocument = JSONString;

            export type Roles = string[];

            export type Users = string[];

        }

    }

    export namespace FraudDetector {

        export namespace Detector {

            export type Label = {
                Arn: string;

                Inline: boolean;

                Name: string;

                Description: string;

                Tags: AWS.FraudDetector.Detector.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type EntityType = {
                Arn: string;

                Inline: boolean;

                Name: string;

                Description: string;

                Tags: AWS.FraudDetector.Detector.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type Model = { Arn: string; };

            export type Outcome = {
                Arn: string;

                Inline: boolean;

                Name: string;

                Description: string;

                Tags: AWS.FraudDetector.Detector.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type EventVariable = {
                Arn: string;

                Inline: boolean;

                Name: string;

                DataSource: string;

                DataType: string;

                DefaultValue: string;

                VariableType: string;

                Description: string;

                Tags: AWS.FraudDetector.Detector.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type Rule = {
                RuleId: string;

                RuleVersion: string;

                DetectorId: string;

                Expression: string;

                Language: string;

                Outcomes: AWS.FraudDetector.Detector.Outcome[];

                Arn: string;

                Description: string;

                Tags: AWS.FraudDetector.Detector.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type EventType = AWS.FraudDetector.Detector.EventType;

            export type DetectorId = string;

            export type DetectorVersionStatus = string;

            export type RuleExecutionMode = string;

            export type Tags = AWS.FraudDetector.Detector.Tag[];

            export type Description = string;

            export type Rules = AWS.FraudDetector.Detector.Rule[];

            export type AssociatedModels = AWS.FraudDetector.Detector.Model[];

        }

        export namespace EventType {

            export type EntityType = {
                Arn: string;

                Inline: boolean;

                Name: string;

                Description: string;

                Tags: AWS.FraudDetector.EventType.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type EventVariable = {
                Arn: string;

                Inline: boolean;

                Name: string;

                DataSource: string;

                DataType: string;

                DefaultValue: string;

                VariableType: string;

                Description: string;

                Tags: AWS.FraudDetector.EventType.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type Label = {
                Arn: string;

                Inline: boolean;

                Name: string;

                Description: string;

                Tags: AWS.FraudDetector.EventType.Tag[];

                CreatedTime: string;

                LastUpdatedTime: string;
            };

            export type Name = string;

            export type Tags = AWS.FraudDetector.EventType.Tag[];

            export type Description = string;

            export type EventVariables = AWS.FraudDetector.EventType.EventVariable[];

            export type Labels = AWS.FraudDetector.EventType.Label[];

            export type EntityTypes = AWS.FraudDetector.EventType.EntityType[];

        }

        export namespace EntityType {

            export type Name = string;

            export type Tags = AWS.FraudDetector.EntityType.Tag[];

            export type Description = string;

        }

        export namespace Outcome {

            export type Name = string;

            export type Tags = AWS.FraudDetector.Outcome.Tag[];

            export type Description = string;

        }

        export namespace Label {

            export type Name = string;

            export type Tags = AWS.FraudDetector.Label.Tag[];

            export type Description = string;

        }

        export namespace Variable {

            export type Name = string;

            export type DataSource = string;

            export type DataType = string;

            export type DefaultValue = string;

            export type Description = string;

            export type Tags = AWS.FraudDetector.Variable.Tag[];

            export type VariableType = string;

        }

    }

    export namespace ServiceCatalog {

        export namespace CloudFormationProvisionedProduct {

            export type ProvisioningParameter = {
                Key: string;

                Value: string;
            };

            export type ProvisioningPreferences = AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningPreferences;

            export type AcceptLanguage = string;

            export type NotificationArns = string[];

            export type PathId = string;

            export type PathName = string;

            export type ProductId = string;

            export type ProductName = string;

            export type ProvisionedProductName = string;

            export type ProvisioningArtifactId = string;

            export type ProvisioningArtifactName = string;

            export type ProvisioningParameters = AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningParameter[];

            export type Tags = AWS.ServiceCatalog.CloudFormationProvisionedProduct.Tag[];

        }

        export namespace ServiceAction {

            export type DefinitionParameter = {
                Key: string;

                Value: string;
            };

            export type AcceptLanguage = string;

            export type Name = string;

            export type DefinitionType = string;

            export type Definition = AWS.ServiceCatalog.ServiceAction.DefinitionParameter[];

            export type Description = string;

        }

        export namespace CloudFormationProduct {

            export type ProvisioningArtifactProperties = {
                Description: string;

                DisableTemplateValidation: boolean;

                Info: JSONString;

                Name: string;
            };

            export type ReplaceProvisioningArtifacts = boolean;

            export type Owner = string;

            export type SupportDescription = string;

            export type Description = string;

            export type Distributor = string;

            export type SupportEmail = string;

            export type AcceptLanguage = string;

            export type SupportUrl = string;

            export type Tags = AWS.ServiceCatalog.CloudFormationProduct.Tag[];

            export type Name = string;

            export type ProvisioningArtifactParameters = AWS.ServiceCatalog.CloudFormationProduct.ProvisioningArtifactProperties[];

        }

        export namespace PortfolioShare {

            export type AccountId = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ShareTagOptions = boolean;

        }

        export namespace ResourceUpdateConstraint {

            export type Description = string;

            export type AcceptLanguage = string;

            export type TagUpdateOnProvisionedProduct = string;

            export type PortfolioId = string;

            export type ProductId = string;

        }

        export namespace TagOption {

            export type Active = boolean;

            export type Value = string;

            export type Key = string;

        }

        export namespace PortfolioProductAssociation {

            export type SourcePortfolioId = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ProductId = string;

        }

        export namespace AcceptedPortfolioShare {

            export type AcceptLanguage = string;

            export type PortfolioId = string;

        }

        export namespace LaunchTemplateConstraint {

            export type Description = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ProductId = string;

            export type Rules = string;

        }

        export namespace Portfolio {

            export type ProviderName = string;

            export type Description = string;

            export type DisplayName = string;

            export type AcceptLanguage = string;

            export type Tags = AWS.ServiceCatalog.Portfolio.Tag[];

        }

        export namespace LaunchNotificationConstraint {

            export type Description = string;

            export type NotificationArns = string[];

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ProductId = string;

        }

        export namespace ServiceActionAssociation {

            export type ProductId = string;

            export type ProvisioningArtifactId = string;

            export type ServiceActionId = string;

        }

        export namespace StackSetConstraint {

            export type Description = string;

            export type StackInstanceControl = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ProductId = string;

            export type RegionList = string[];

            export type AdminRole = string;

            export type AccountList = string[];

            export type ExecutionRole = string;

        }

        export namespace TagOptionAssociation {

            export type TagOptionId = string;

            export type ResourceId = string;

        }

        export namespace PortfolioPrincipalAssociation {

            export type PrincipalARN = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type PrincipalType = string;

        }

        export namespace LaunchRoleConstraint {

            export type Description = string;

            export type LocalRoleName = string;

            export type AcceptLanguage = string;

            export type PortfolioId = string;

            export type ProductId = string;

            export type RoleArn = string;

        }

    }

    export namespace Location {

        export namespace PlaceIndex {

            export type DataSourceConfiguration = AWS.Location.PlaceIndex.DataSourceConfiguration;

            export type DataSource = string;

            export type Description = string;

            export type IndexName = string;

            export type PricingPlan = string;

        }

        export namespace Map {

            export type MapConfiguration = { Style: string; };

            export type Configuration = AWS.Location.Map.MapConfiguration;

            export type Description = string;

            export type MapName = string;

            export type PricingPlan = string;

        }

        export namespace Tracker {

            export type Description = string;

            export type KmsKeyId = string;

            export type PricingPlan = string;

            export type PricingPlanDataSource = string;

            export type TrackerName = string;

        }

        export namespace GeofenceCollection {

            export type CollectionName = string;

            export type Description = string;

            export type KmsKeyId = string;

            export type PricingPlan = string;

            export type PricingPlanDataSource = string;

        }

        export namespace TrackerConsumer {

            export type ConsumerArn = string;

            export type TrackerName = string;

        }

        export namespace RouteCalculator {

            export type CalculatorName = string;

            export type DataSource = string;

            export type Description = string;

            export type PricingPlan = string;

        }

    }

    export namespace LicenseManager {

        export namespace License {

            export type ProvisionalConfiguration = { MaxTimeToLiveInMinutes: number; };

            export type ConsumptionConfiguration = AWS.LicenseManager.License.ConsumptionConfiguration;

            export type IssuerData = {
                Name: string;

                SignKey: string;
            };

            export type BorrowConfiguration = {
                MaxTimeToLiveInMinutes: number;

                AllowEarlyCheckIn: boolean;
            };

            export type Metadata = {
                Name: string;

                Value: string;
            };

            export type Entitlement = {
                Name: string;

                Value: string;

                MaxCount: number;

                Overage: boolean;

                Unit: string;

                AllowCheckIn: boolean;
            };

            export type ValidityDateFormat = {
                Begin: string;

                End: string;
            };

            export type ProductSKU = string;

            export type Issuer = AWS.LicenseManager.License.IssuerData;

            export type LicenseName = string;

            export type ProductName = string;

            export type HomeRegion = string;

            export type Validity = AWS.LicenseManager.License.ValidityDateFormat;

            export type Entitlements = AWS.LicenseManager.License.Entitlement[];

            export type Beneficiary = string;

            export type LicenseMetadata = AWS.LicenseManager.License.Metadata[];

            export type Status = string;

        }

        export namespace Grant {

            export type GrantName = string;

            export type LicenseArn = string;

            export type HomeRegion = string;

            export type AllowedOperations = string[];

            export type Principals = string[];

            export type Status = string;

        }

    }

    export namespace MediaStore {

        export namespace Container {

            export type MetricPolicy = AWS.MediaStore.Container.MetricPolicy;

            export type MetricPolicyRule = {
                ObjectGroup: string;

                ObjectGroupName: string;
            };

            export type CorsRule = {
                AllowedMethods: string[];

                AllowedOrigins: string[];

                ExposeHeaders: string[];

                MaxAgeSeconds: number;

                AllowedHeaders: string[];
            };

            export type Policy = string;

            export type ContainerName = string;

            export type CorsPolicy = AWS.MediaStore.Container.CorsRule[];

            export type LifecyclePolicy = string;

            export type AccessLoggingEnabled = boolean;

            export type Tags = AWS.MediaStore.Container.Tag[];

        }

    }

    export namespace Events {

        export namespace Rule {

            export type BatchRetryStrategy = { Attempts: number; };

            export type HttpParameters = {
                HeaderParameters: Record<string, string>;

                PathParameterValues: string[];

                QueryStringParameters: Record<string, string>;
            };

            export type BatchArrayProperties = { Size: number; };

            export type BatchParameters = {
                ArrayProperties: AWS.Events.Rule.BatchArrayProperties;

                JobDefinition: string;

                JobName: string;

                RetryStrategy: AWS.Events.Rule.BatchRetryStrategy;
            };

            export type RunCommandParameters = { RunCommandTargets: AWS.Events.Rule.RunCommandTarget[]; };

            export type DeadLetterConfig = { Arn: string; };

            export type NetworkConfiguration = { AwsVpcConfiguration: AWS.Events.Rule.AwsVpcConfiguration; };

            export type RunCommandTarget = {
                Key: string;

                Values: string[];
            };

            export type InputTransformer = {
                InputPathsMap: Record<string, string>;

                InputTemplate: string;
            };

            export type SqsParameters = { MessageGroupId: string; };

            export type RetryPolicy = {
                MaximumEventAgeInSeconds: number;

                MaximumRetryAttempts: number;
            };

            export type Target = {
                Arn: string;

                BatchParameters: AWS.Events.Rule.BatchParameters;

                DeadLetterConfig: AWS.Events.Rule.DeadLetterConfig;

                EcsParameters: AWS.Events.Rule.EcsParameters;

                HttpParameters: AWS.Events.Rule.HttpParameters;

                Id: string;

                Input: string;

                InputPath: string;

                InputTransformer: AWS.Events.Rule.InputTransformer;

                KinesisParameters: AWS.Events.Rule.KinesisParameters;

                RedshiftDataParameters: AWS.Events.Rule.RedshiftDataParameters;

                RetryPolicy: AWS.Events.Rule.RetryPolicy;

                RoleArn: string;

                RunCommandParameters: AWS.Events.Rule.RunCommandParameters;

                SqsParameters: AWS.Events.Rule.SqsParameters;
            };

            export type KinesisParameters = { PartitionKeyPath: string; };

            export type RedshiftDataParameters = {
                Database: string;

                DbUser: string;

                SecretManagerArn: string;

                Sql: string;

                StatementName: string;

                WithEvent: boolean;
            };

            export type EcsParameters = {
                Group: string;

                LaunchType: string;

                NetworkConfiguration: AWS.Events.Rule.NetworkConfiguration;

                PlatformVersion: string;

                TaskCount: number;

                TaskDefinitionArn: string;
            };

            export type AwsVpcConfiguration = {
                AssignPublicIp: string;

                SecurityGroups: string[];

                Subnets: string[];
            };

            export type Description = string;

            export type EventBusName = string;

            export type EventPattern = JSONString;

            export type Name = string;

            export type RoleArn = string;

            export type ScheduleExpression = string;

            export type State = string;

            export type Targets = AWS.Events.Rule.Target[];

        }

        export namespace EventBusPolicy {

            export type Condition = AWS.Events.EventBusPolicy.Condition;

            export type EventBusName = string;

            export type Action = string;

            export type StatementId = string;

            export type Statement = JSONString;

            export type Principal = string;

        }

        export namespace ApiDestination {

            export type Name = string;

            export type Description = string;

            export type ConnectionArn = string;

            export type InvocationRateLimitPerSecond = number;

            export type InvocationEndpoint = string;

            export type HttpMethod = string;

        }

        export namespace Archive {

            export type ArchiveName = string;

            export type SourceArn = string;

            export type Description = string;

            export type EventPattern = JSONString;

            export type RetentionDays = number;

        }

        export namespace Connection {

            export type Name = string;

            export type Description = string;

            export type AuthorizationType = string;

            export type AuthParameters = JSONString;

        }

        export namespace EventBus {

            export type EventSourceName = string;

            export type Name = string;

        }

    }

    export namespace Signer {

        export namespace SigningProfile {

            export type SignatureValidityPeriod = AWS.Signer.SigningProfile.SignatureValidityPeriod;

            export type PlatformId = string;

            export type Tags = AWS.Signer.SigningProfile.Tag[];

        }

        export namespace ProfilePermission {

            export type ProfileName = string;

            export type ProfileVersion = string;

            export type Action = string;

            export type Principal = string;

            export type StatementId = string;

        }

    }

    export namespace Kendra {

        export namespace DataSource {

            export type ConfluenceAttachmentToIndexFieldMapping = {
                DataSourceFieldName: string;

                DateFieldFormat: string;

                IndexFieldName: string;
            };

            export type SalesforceStandardObjectConfiguration = {
                Name: string;

                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type SalesforceChatterFeedConfiguration = {
                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

                IncludeFilterTypes: string[];
            };

            export type SalesforceConfiguration = {
                ServerUrl: string;

                SecretArn: string;

                StandardObjectConfigurations: AWS.Kendra.DataSource.SalesforceStandardObjectConfiguration[];

                KnowledgeArticleConfiguration: AWS.Kendra.DataSource.SalesforceKnowledgeArticleConfiguration;

                ChatterFeedConfiguration: AWS.Kendra.DataSource.SalesforceChatterFeedConfiguration;

                CrawlAttachments: boolean;

                StandardObjectAttachmentConfiguration: AWS.Kendra.DataSource.SalesforceStandardObjectAttachmentConfiguration;

                IncludeAttachmentFilePatterns: string[];

                ExcludeAttachmentFilePatterns: string[];
            };

            export type ColumnConfiguration = {
                DocumentIdColumnName: string;

                DocumentDataColumnName: string;

                DocumentTitleColumnName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

                ChangeDetectingColumns: string[];
            };

            export type ServiceNowKnowledgeArticleConfiguration = {
                CrawlAttachments: boolean;

                IncludeAttachmentFilePatterns: string[];

                ExcludeAttachmentFilePatterns: string[];

                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type ConfluenceSpaceConfiguration = {
                CrawlPersonalSpaces: boolean;

                CrawlArchivedSpaces: boolean;

                IncludeSpaces: string[];

                ExcludeSpaces: string[];

                SpaceFieldMappings: AWS.Kendra.DataSource.ConfluenceSpaceToIndexFieldMapping[];
            };

            export type GoogleDriveConfiguration = {
                SecretArn: string;

                InclusionPatterns: string[];

                ExclusionPatterns: string[];

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

                ExcludeMimeTypes: string[];

                ExcludeUserAccounts: string[];

                ExcludeSharedDrives: string[];
            };

            export type S3Path = {
                Bucket: string;

                Key: string;
            };

            export type ServiceNowConfiguration = {
                HostUrl: string;

                SecretArn: string;

                ServiceNowBuildVersion: string;

                KnowledgeArticleConfiguration: AWS.Kendra.DataSource.ServiceNowKnowledgeArticleConfiguration;

                ServiceCatalogConfiguration: AWS.Kendra.DataSource.ServiceNowServiceCatalogConfiguration;
            };

            export type ConfluenceConfiguration = {
                ServerUrl: string;

                SecretArn: string;

                Version: string;

                SpaceConfiguration: AWS.Kendra.DataSource.ConfluenceSpaceConfiguration;

                PageConfiguration: AWS.Kendra.DataSource.ConfluencePageConfiguration;

                BlogConfiguration: AWS.Kendra.DataSource.ConfluenceBlogConfiguration;

                AttachmentConfiguration: AWS.Kendra.DataSource.ConfluenceAttachmentConfiguration;

                VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

                InclusionPatterns: string[];

                ExclusionPatterns: string[];
            };

            export type ConfluencePageToIndexFieldMapping = {
                DataSourceFieldName: string;

                DateFieldFormat: string;

                IndexFieldName: string;
            };

            export type DatabaseConfiguration = {
                DatabaseEngineType: string;

                ConnectionConfiguration: AWS.Kendra.DataSource.ConnectionConfiguration;

                VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

                ColumnConfiguration: AWS.Kendra.DataSource.ColumnConfiguration;

                AclConfiguration: AWS.Kendra.DataSource.AclConfiguration;

                SqlConfiguration: AWS.Kendra.DataSource.SqlConfiguration;
            };

            export type SqlConfiguration = { QueryIdentifiersEnclosingOption: string; };

            export type S3DataSourceConfiguration = {
                BucketName: string;

                InclusionPrefixes: string[];

                InclusionPatterns: string[];

                ExclusionPatterns: string[];

                DocumentsMetadataConfiguration: AWS.Kendra.DataSource.DocumentsMetadataConfiguration;

                AccessControlListConfiguration: AWS.Kendra.DataSource.AccessControlListConfiguration;
            };

            export type ConfluenceBlogConfiguration = { BlogFieldMappings: AWS.Kendra.DataSource.ConfluenceBlogToIndexFieldMapping[]; };

            export type ConfluencePageConfiguration = { PageFieldMappings: AWS.Kendra.DataSource.ConfluencePageToIndexFieldMapping[]; };

            export type ConnectionConfiguration = {
                DatabaseHost: string;

                DatabasePort: number;

                DatabaseName: string;

                TableName: string;

                SecretArn: string;
            };

            export type ServiceNowServiceCatalogConfiguration = {
                CrawlAttachments: boolean;

                IncludeAttachmentFilePatterns: string[];

                ExcludeAttachmentFilePatterns: string[];

                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type SalesforceStandardObjectAttachmentConfiguration = {
                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type SalesforceCustomKnowledgeArticleTypeConfiguration = {
                Name: string;

                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type ConfluenceBlogToIndexFieldMapping = {
                DataSourceFieldName: string;

                DateFieldFormat: string;

                IndexFieldName: string;
            };

            export type OneDriveUsers = {
                OneDriveUserList: string[];

                OneDriveUserS3Path: AWS.Kendra.DataSource.S3Path;
            };

            export type AclConfiguration = { AllowedGroupsColumnName: string; };

            export type SalesforceStandardKnowledgeArticleTypeConfiguration = {
                DocumentDataFieldName: string;

                DocumentTitleFieldName: string;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
            };

            export type ConfluenceAttachmentConfiguration = {
                CrawlAttachments: boolean;

                AttachmentFieldMappings: AWS.Kendra.DataSource.ConfluenceAttachmentToIndexFieldMapping[];
            };

            export type DataSourceVpcConfiguration = {
                SubnetIds: string[];

                SecurityGroupIds: string[];
            };

            export type SalesforceKnowledgeArticleConfiguration = {
                IncludedStates: string[];

                StandardKnowledgeArticleTypeConfiguration: AWS.Kendra.DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration;

                CustomKnowledgeArticleTypeConfigurations: AWS.Kendra.DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration[];
            };

            export type AccessControlListConfiguration = { KeyPath: string; };

            export type DataSourceToIndexFieldMapping = {
                DataSourceFieldName: string;

                DateFieldFormat: string;

                IndexFieldName: string;
            };

            export type ConfluenceSpaceToIndexFieldMapping = {
                DataSourceFieldName: string;

                DateFieldFormat: string;

                IndexFieldName: string;
            };

            export type OneDriveConfiguration = {
                TenantDomain: string;

                SecretArn: string;

                OneDriveUsers: AWS.Kendra.DataSource.OneDriveUsers;

                InclusionPatterns: string[];

                ExclusionPatterns: string[];

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

                DisableLocalGroups: boolean;
            };

            export type DataSourceConfiguration = AWS.Kendra.DataSource.DataSourceConfiguration;

            export type SharePointConfiguration = {
                SharePointVersion: string;

                Urls: string[];

                SecretArn: string;

                CrawlAttachments: boolean;

                UseChangeLog: boolean;

                InclusionPatterns: string[];

                ExclusionPatterns: string[];

                VpcConfiguration: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

                FieldMappings: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

                DocumentTitleFieldName: string;

                DisableLocalGroups: boolean;
            };

            export type DocumentsMetadataConfiguration = { S3Prefix: string; };

            export type Name = string;

            export type IndexId = string;

            export type Type = string;

            export type Description = string;

            export type Schedule = string;

            export type RoleArn = string;

            export type Tags = AWS.Kendra.DataSource.Tag[];

        }

        export namespace Index {

            export type ServerSideEncryptionConfiguration = AWS.Kendra.Index.ServerSideEncryptionConfiguration;

            export type JsonTokenTypeConfiguration = {
                UserNameAttributeField: string;

                GroupAttributeField: string;
            };

            export type ValueImportanceItem = {
                Key: string;

                Value: number;
            };

            export type DocumentMetadataConfiguration = {
                Name: string;

                Type: string;

                Relevance: AWS.Kendra.Index.Relevance;

                Search: AWS.Kendra.Index.Search;
            };

            export type UserTokenConfiguration = {
                JwtTokenTypeConfiguration: AWS.Kendra.Index.JwtTokenTypeConfiguration;

                JsonTokenTypeConfiguration: AWS.Kendra.Index.JsonTokenTypeConfiguration;
            };

            export type Search = {
                Facetable: boolean;

                Searchable: boolean;

                Displayable: boolean;

                Sortable: boolean;
            };

            export type Relevance = {
                Freshness: boolean;

                Importance: number;

                Duration: string;

                RankOrder: string;

                ValueImportanceItems: AWS.Kendra.Index.ValueImportanceItem[];
            };

            export type JwtTokenTypeConfiguration = {
                KeyLocation: string;

                URL: string;

                SecretManagerArn: string;

                UserNameAttributeField: string;

                GroupAttributeField: string;

                Issuer: string;

                ClaimRegex: string;
            };

            export type CapacityUnitsConfiguration = {
                StorageCapacityUnits: number;

                QueryCapacityUnits: number;
            };

            export type Description = string;

            export type Tags = AWS.Kendra.Index.Tag[];

            export type Name = string;

            export type RoleArn = string;

            export type Edition = string;

            export type DocumentMetadataConfigurations = AWS.Kendra.Index.DocumentMetadataConfiguration[];

            export type CapacityUnits = AWS.Kendra.Index.CapacityUnitsConfiguration;

            export type UserContextPolicy = string;

            export type UserTokenConfigurations = AWS.Kendra.Index.UserTokenConfiguration[];

        }

        export namespace Faq {

            export type S3Path = AWS.Kendra.Faq.S3Path;

            export type IndexId = string;

            export type Name = string;

            export type Description = string;

            export type FileFormat = string;

            export type RoleArn = string;

            export type Tags = AWS.Kendra.Faq.Tag[];

        }

    }

    export namespace Amplify {

        export namespace App {

            export type EnvironmentVariable = {
                Name: string;

                Value: string;
            };

            export type AutoBranchCreationConfig = AWS.Amplify.App.AutoBranchCreationConfig;

            export type BasicAuthConfig = AWS.Amplify.App.BasicAuthConfig;

            export type CustomRule = {
                Condition: string;

                Status: string;

                Target: string;

                Source: string;
            };

            export type AccessToken = string;

            export type BuildSpec = string;

            export type CustomHeaders = string;

            export type CustomRules = AWS.Amplify.App.CustomRule[];

            export type Description = string;

            export type EnableBranchAutoDeletion = boolean;

            export type EnvironmentVariables = AWS.Amplify.App.EnvironmentVariable[];

            export type IAMServiceRole = string;

            export type Name = string;

            export type OauthToken = string;

            export type Repository = string;

            export type Tags = AWS.Amplify.App.Tag[];

        }

        export namespace Domain {

            export type SubDomainSetting = {
                Prefix: string;

                BranchName: string;
            };

            export type SubDomainSettings = AWS.Amplify.Domain.SubDomainSetting[];

            export type AppId = string;

            export type AutoSubDomainIAMRole = string;

            export type DomainName = string;

            export type EnableAutoSubDomain = boolean;

            export type AutoSubDomainCreationPatterns = string[];

        }

        export namespace Branch {

            export type BasicAuthConfig = AWS.Amplify.Branch.BasicAuthConfig;

            export type EnvironmentVariable = {
                Name: string;

                Value: string;
            };

            export type AppId = string;

            export type BranchName = string;

            export type BuildSpec = string;

            export type Description = string;

            export type EnableAutoBuild = boolean;

            export type EnablePerformanceMode = boolean;

            export type EnablePullRequestPreview = boolean;

            export type EnvironmentVariables = AWS.Amplify.Branch.EnvironmentVariable[];

            export type PullRequestEnvironmentName = string;

            export type Stage = string;

            export type Tags = AWS.Amplify.Branch.Tag[];

        }

    }

    export namespace RoboMaker {

        export namespace SimulationApplication {

            export type SimulationSoftwareSuite = AWS.RoboMaker.SimulationApplication.SimulationSoftwareSuite;

            export type RobotSoftwareSuite = AWS.RoboMaker.SimulationApplication.RobotSoftwareSuite;

            export type SourceConfig = {
                S3Bucket: string;

                Architecture: string;

                S3Key: string;
            };

            export type RenderingEngine = AWS.RoboMaker.SimulationApplication.RenderingEngine;

            export type CurrentRevisionId = string;

            export type Sources = AWS.RoboMaker.SimulationApplication.SourceConfig[];

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace RobotApplication {

            export type RobotSoftwareSuite = AWS.RoboMaker.RobotApplication.RobotSoftwareSuite;

            export type SourceConfig = {
                S3Bucket: string;

                Architecture: string;

                S3Key: string;
            };

            export type CurrentRevisionId = string;

            export type Sources = AWS.RoboMaker.RobotApplication.SourceConfig[];

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace SimulationApplicationVersion {

            export type CurrentRevisionId = string;

            export type Application = string;

        }

        export namespace Fleet {

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace RobotApplicationVersion {

            export type CurrentRevisionId = string;

            export type Application = string;

        }

        export namespace Robot {

            export type Fleet = string;

            export type Architecture = string;

            export type GreengrassGroupId = string;

            export type Tags = JSONString;

            export type Name = string;

        }

    }

    export namespace Macie {

        export namespace FindingsFilter {

            export type FindingsFilterListItem = {
                Id: string;

                Name: string;
            };

            export type FindingCriteria = AWS.Macie.FindingsFilter.FindingCriteria;

            export type Criterion = any;

            export type Name = string;

            export type Description = string;

            export type Action = string;

            export type Position = number;

        }

        export namespace Session {

            export type Status = string;

            export type FindingPublishingFrequency = string;

        }

        export namespace CustomDataIdentifier {

            export type Name = string;

            export type Description = string;

            export type Regex = string;

            export type MaximumMatchDistance = number;

            export type Keywords = string[];

            export type IgnoreWords = string[];

        }

    }

    export namespace Synthetics {

        export namespace Canary {

            export type VPCConfig = AWS.Synthetics.Canary.VPCConfig;

            export type Schedule = AWS.Synthetics.Canary.Schedule;

            export type Code = AWS.Synthetics.Canary.Code;

            export type RunConfig = AWS.Synthetics.Canary.RunConfig;

            export type Name = string;

            export type ArtifactS3Location = string;

            export type ExecutionRoleArn = string;

            export type RuntimeVersion = string;

            export type SuccessRetentionPeriod = number;

            export type FailureRetentionPeriod = number;

            export type Tags = AWS.Synthetics.Canary.Tag[];

            export type StartCanaryAfterCreation = boolean;

        }

    }

    export namespace AutoScalingPlans {

        export namespace ScalingPlan {

            export type ScalingInstruction = {
                DisableDynamicScaling: boolean;

                ServiceNamespace: string;

                PredictiveScalingMaxCapacityBehavior: string;

                ScalableDimension: string;

                ScalingPolicyUpdateBehavior: string;

                MinCapacity: number;

                TargetTrackingConfigurations: AWS.AutoScalingPlans.ScalingPlan.TargetTrackingConfiguration[];

                PredictiveScalingMaxCapacityBuffer: number;

                CustomizedLoadMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.CustomizedLoadMetricSpecification;

                PredefinedLoadMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.PredefinedLoadMetricSpecification;

                ResourceId: string;

                ScheduledActionBufferTime: number;

                MaxCapacity: number;

                PredictiveScalingMode: string;
            };

            export type MetricDimension = {
                Value: string;

                Name: string;
            };

            export type PredefinedScalingMetricSpecification = {
                ResourceLabel: string;

                PredefinedScalingMetricType: string;
            };

            export type CustomizedScalingMetricSpecification = {
                MetricName: string;

                Statistic: string;

                Dimensions: AWS.AutoScalingPlans.ScalingPlan.MetricDimension[];

                Unit: string;

                Namespace: string;
            };

            export type TagFilter = {
                Values: string[];

                Key: string;
            };

            export type CustomizedLoadMetricSpecification = {
                MetricName: string;

                Statistic: string;

                Dimensions: AWS.AutoScalingPlans.ScalingPlan.MetricDimension[];

                Unit: string;

                Namespace: string;
            };

            export type ApplicationSource = AWS.AutoScalingPlans.ScalingPlan.ApplicationSource;

            export type TargetTrackingConfiguration = {
                ScaleOutCooldown: number;

                TargetValue: number;

                PredefinedScalingMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.PredefinedScalingMetricSpecification;

                DisableScaleIn: boolean;

                ScaleInCooldown: number;

                EstimatedInstanceWarmup: number;

                CustomizedScalingMetricSpecification: AWS.AutoScalingPlans.ScalingPlan.CustomizedScalingMetricSpecification;
            };

            export type PredefinedLoadMetricSpecification = {
                PredefinedLoadMetricType: string;

                ResourceLabel: string;
            };

            export type ScalingInstructions = AWS.AutoScalingPlans.ScalingPlan.ScalingInstruction[];

        }

    }

    export namespace CertificateManager {

        export namespace Account {

            export type ExpiryEventsConfiguration = AWS.CertificateManager.Account.ExpiryEventsConfiguration;

        }

        export namespace Certificate {

            export type DomainValidationOption = {
                DomainName: string;

                HostedZoneId: string;

                ValidationDomain: string;
            };

            export type CertificateAuthorityArn = string;

            export type CertificateTransparencyLoggingPreference = string;

            export type DomainName = string;

            export type DomainValidationOptions = AWS.CertificateManager.Certificate.DomainValidationOption[];

            export type SubjectAlternativeNames = string[];

            export type Tags = AWS.CertificateManager.Certificate.Tag[];

            export type ValidationMethod = string;

        }

    }

    export namespace ServiceDiscovery {

        export namespace Service {

            export type DnsConfig = AWS.ServiceDiscovery.Service.DnsConfig;

            export type HealthCheckConfig = AWS.ServiceDiscovery.Service.HealthCheckConfig;

            export type HealthCheckCustomConfig = AWS.ServiceDiscovery.Service.HealthCheckCustomConfig;

            export type DnsRecord = {
                Type: string;

                TTL: number;
            };

            export type Type = string;

            export type Description = string;

            export type NamespaceId = string;

            export type Tags = AWS.ServiceDiscovery.Service.Tag[];

            export type Name = string;

        }

        export namespace PublicDnsNamespace {

            export type Properties = AWS.ServiceDiscovery.PublicDnsNamespace.Properties;

            export type PublicDnsPropertiesMutable = { SOA: AWS.ServiceDiscovery.PublicDnsNamespace.SOA; };

            export type SOA = { TTL: number; };

            export type Description = string;

            export type Tags = AWS.ServiceDiscovery.PublicDnsNamespace.Tag[];

            export type Name = string;

        }

        export namespace PrivateDnsNamespace {

            export type Properties = AWS.ServiceDiscovery.PrivateDnsNamespace.Properties;

            export type SOA = { TTL: number; };

            export type PrivateDnsPropertiesMutable = { SOA: AWS.ServiceDiscovery.PrivateDnsNamespace.SOA; };

            export type Description = string;

            export type Vpc = string;

            export type Tags = AWS.ServiceDiscovery.PrivateDnsNamespace.Tag[];

            export type Name = string;

        }

        export namespace Instance {

            export type InstanceAttributes = JSONString;

            export type InstanceId = string;

            export type ServiceId = string;

        }

        export namespace HttpNamespace {

            export type Description = string;

            export type Tags = AWS.ServiceDiscovery.HttpNamespace.Tag[];

            export type Name = string;

        }

    }

    export namespace AccessAnalyzer {

        export namespace Analyzer {

            export type ArchiveRule = {
                Filter: AWS.AccessAnalyzer.Analyzer.Filter[];

                RuleName: string;
            };

            export type Filter = {
                Contains: string[];

                Eq: string[];

                Exists: boolean;

                Property: string;

                Neq: string[];
            };

            export type AnalyzerName = string;

            export type ArchiveRules = AWS.AccessAnalyzer.Analyzer.ArchiveRule[];

            export type Tags = AWS.AccessAnalyzer.Analyzer.Tag[];

            export type Type = string;

        }

    }

    export namespace S3ObjectLambda {

        export namespace AccessPoint {

            export type ObjectLambdaConfiguration = AWS.S3ObjectLambda.AccessPoint.ObjectLambdaConfiguration;

            export type TransformationConfiguration = {
                Actions: string[];

                ContentTransformation: JSONString;
            };

            export type Name = string;

        }

        export namespace AccessPointPolicy {

            export type ObjectLambdaAccessPoint = string;

            export type PolicyDocument = JSONString;

        }

    }

    export namespace IoTThingsGraph {

        export namespace FlowTemplate {

            export type DefinitionDocument = {
                Language: string;

                Text: string;
            };

            export type CompatibleNamespaceVersion = number;

            export type Definition = AWS.IoTThingsGraph.FlowTemplate.DefinitionDocument;

        }

    }

    export namespace QLDB {

        export namespace Stream {

            export type KinesisConfiguration = AWS.QLDB.Stream.KinesisConfiguration;

            export type LedgerName = string;

            export type StreamName = string;

            export type RoleArn = string;

            export type InclusiveStartTime = string;

            export type ExclusiveEndTime = string;

            export type Tags = AWS.QLDB.Stream.Tag[];

        }

        export namespace Ledger {

            export type PermissionsMode = string;

            export type DeletionProtection = boolean;

            export type KmsKey = string;

            export type Tags = AWS.QLDB.Ledger.Tag[];

            export type Name = string;

        }

    }

    export namespace MediaConvert {

        export namespace JobTemplate {

            export type HopDestination = {
                WaitMinutes: number;

                Priority: number;

                Queue: string;
            };

            export type AccelerationSettings = AWS.MediaConvert.JobTemplate.AccelerationSettings;

            export type Category = string;

            export type Description = string;

            export type Priority = number;

            export type StatusUpdateInterval = string;

            export type SettingsJson = JSONString;

            export type Queue = string;

            export type HopDestinations = AWS.MediaConvert.JobTemplate.HopDestination[];

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Queue {

            export type Status = string;

            export type Description = string;

            export type PricingPlan = string;

            export type Tags = JSONString;

            export type Name = string;

        }

        export namespace Preset {

            export type Category = string;

            export type Description = string;

            export type SettingsJson = JSONString;

            export type Tags = JSONString;

            export type Name = string;

        }

    }

    export namespace CE {

        export namespace AnomalySubscription {

            export type Subscriber = {
                Address: string;

                Status: string;

                Type: string;
            };

            export type SubscriptionName = string;

            export type MonitorArnList = string[];

            export type Subscribers = AWS.CE.AnomalySubscription.Subscriber[];

            export type Threshold = number;

            export type Frequency = string;

        }

        export namespace CostCategory {

            export type Name = string;

            export type RuleVersion = string;

            export type Rules = string;

            export type DefaultValue = string;

        }

        export namespace AnomalyMonitor {

            export type MonitorType = string;

            export type MonitorName = string;

            export type MonitorDimension = string;

            export type MonitorSpecification = string;

        }

    }

    export namespace AppIntegrations {

        export namespace EventIntegration {

            export type Metadata = {
                Key: string;

                Value: string;
            };

            export type EventFilter = AWS.AppIntegrations.EventIntegration.EventFilter;

            export type EventIntegrationAssociation = {
                ClientAssociationMetadata: AWS.AppIntegrations.EventIntegration.Metadata[];

                ClientId: string;

                EventBridgeRuleName: string;

                EventIntegrationAssociationArn: string;

                EventIntegrationAssociationId: string;
            };

            export type Description = string;

            export type Name = string;

            export type EventBridgeBus = string;

            export type Tags = AWS.AppIntegrations.EventIntegration.Tag[];

        }

    }

    export namespace FMS {

        export namespace Policy {

            export type PolicyTag = {
                Key: string;

                Value: string;
            };

            export type ResourceTag = {
                Key: string;

                Value: string;
            };

            export type IEMap = {
                ACCOUNT: string[];

                ORGUNIT: string[];
            };

            export type ExcludeMap = AWS.FMS.Policy.IEMap;

            export type ExcludeResourceTags = boolean;

            export type IncludeMap = AWS.FMS.Policy.IEMap;

            export type PolicyName = string;

            export type RemediationEnabled = boolean;

            export type ResourceTags = AWS.FMS.Policy.ResourceTag[];

            export type ResourceType = string;

            export type ResourceTypeList = string[];

            export type SecurityServicePolicyData = JSONString;

            export type DeleteAllPolicyResources = boolean;

            export type Tags = AWS.FMS.Policy.PolicyTag[];

        }

        export namespace NotificationChannel {

            export type SnsRoleName = string;

            export type SnsTopicArn = string;

        }

    }

    export namespace Kinesis {

        export namespace Stream {

            export type StreamEncryption = AWS.Kinesis.Stream.StreamEncryption;

            export type Name = string;

            export type RetentionPeriodHours = number;

            export type ShardCount = number;

            export type Tags = AWS.Kinesis.Stream.Tag[];

        }

        export namespace StreamConsumer {

            export type ConsumerName = string;

            export type StreamARN = string;

        }

    }

    export namespace CodeCommit {

        export namespace Repository {

            export type Code = AWS.CodeCommit.Repository.Code;

            export type S3 = {
                ObjectVersion: string;

                Bucket: string;

                Key: string;
            };

            export type RepositoryTrigger = {
                Events: string[];

                Branches: string[];

                CustomData: string;

                DestinationArn: string;

                Name: string;
            };

            export type RepositoryName = string;

            export type Triggers = AWS.CodeCommit.Repository.RepositoryTrigger[];

            export type RepositoryDescription = string;

            export type Tags = AWS.CodeCommit.Repository.Tag[];

        }

    }

    export namespace EMRContainers {

        export namespace VirtualCluster {

            export type ContainerInfo = { EksInfo: AWS.EMRContainers.VirtualCluster.EksInfo; };

            export type EksInfo = { Namespace: string; };

            export type ContainerProvider = AWS.EMRContainers.VirtualCluster.ContainerProvider;

            export type Name = string;

            export type Tags = AWS.EMRContainers.VirtualCluster.Tag[];

        }

    }

    export namespace Neptune {

        export namespace DBCluster {

            export type DBClusterRole = {
                RoleArn: string;

                FeatureName: string;
            };

            export type StorageEncrypted = boolean;

            export type RestoreToTime = string;

            export type EngineVersion = string;

            export type KmsKeyId = string;

            export type AssociatedRoles = AWS.Neptune.DBCluster.DBClusterRole[];

            export type AvailabilityZones = string[];

            export type SnapshotIdentifier = string;

            export type Port = number;

            export type DBClusterIdentifier = string;

            export type PreferredMaintenanceWindow = string;

            export type IamAuthEnabled = boolean;

            export type DBSubnetGroupName = string;

            export type DeletionProtection = boolean;

            export type PreferredBackupWindow = string;

            export type UseLatestRestorableTime = boolean;

            export type VpcSecurityGroupIds = string[];

            export type SourceDBClusterIdentifier = string;

            export type DBClusterParameterGroupName = string;

            export type BackupRetentionPeriod = number;

            export type RestoreType = string;

            export type Tags = AWS.Neptune.DBCluster.Tag[];

            export type EnableCloudwatchLogsExports = string[];

        }

        export namespace DBSubnetGroup {

            export type DBSubnetGroupName = string;

            export type DBSubnetGroupDescription = string;

            export type SubnetIds = string[];

            export type Tags = AWS.Neptune.DBSubnetGroup.Tag[];

        }

        export namespace DBInstance {

            export type DBParameterGroupName = string;

            export type DBInstanceClass = string;

            export type AllowMajorVersionUpgrade = boolean;

            export type DBClusterIdentifier = string;

            export type AvailabilityZone = string;

            export type PreferredMaintenanceWindow = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type DBSubnetGroupName = string;

            export type DBInstanceIdentifier = string;

            export type DBSnapshotIdentifier = string;

            export type Tags = AWS.Neptune.DBInstance.Tag[];

        }

        export namespace DBClusterParameterGroup {

            export type Description = string;

            export type Parameters = JSONString;

            export type Family = string;

            export type Tags = AWS.Neptune.DBClusterParameterGroup.Tag[];

            export type Name = string;

        }

        export namespace DBParameterGroup {

            export type Description = string;

            export type Parameters = JSONString;

            export type Family = string;

            export type Tags = AWS.Neptune.DBParameterGroup.Tag[];

            export type Name = string;

        }

    }

    export namespace SSO {

        export namespace InstanceAccessControlAttributeConfiguration {

            export type AccessControlAttribute = {
                Key: string;

                Value: AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue;
            };

            export type AccessControlAttributeValue = { Source: string[]; };

            export type InstanceArn = string;

            export type AccessControlAttributes = AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttribute[];

        }

        export namespace Assignment {

            export type InstanceArn = string;

            export type TargetId = string;

            export type TargetType = string;

            export type PermissionSetArn = string;

            export type PrincipalType = string;

            export type PrincipalId = string;

        }

        export namespace PermissionSet {

            export type Name = string;

            export type Description = string;

            export type InstanceArn = string;

            export type SessionDuration = string;

            export type RelayStateType = string;

            export type ManagedPolicies = string[];

            export type InlinePolicy = JSONString;

            export type Tags = AWS.SSO.PermissionSet.Tag[];

        }

    }

    export namespace FSx {

        export namespace FileSystem {

            export type LustreConfiguration = AWS.FSx.FileSystem.LustreConfiguration;

            export type SelfManagedActiveDirectoryConfiguration = {
                FileSystemAdministratorsGroup: string;

                UserName: string;

                DomainName: string;

                OrganizationalUnitDistinguishedName: string;

                DnsIps: string[];

                Password: string;
            };

            export type WindowsConfiguration = AWS.FSx.FileSystem.WindowsConfiguration;

            export type StorageType = string;

            export type KmsKeyId = string;

            export type StorageCapacity = number;

            export type FileSystemType = string;

            export type BackupId = string;

            export type SubnetIds = string[];

            export type SecurityGroupIds = string[];

            export type Tags = AWS.FSx.FileSystem.Tag[];

        }

    }

    export namespace FinSpace {

        export namespace Environment {

            export type FederationParameters = AWS.FinSpace.Environment.FederationParameters;

            export type Name = string;

            export type Description = string;

            export type KmsKeyId = string;

            export type FederationMode = string;

        }

    }

    export namespace WorkSpaces {

        export namespace Workspace {

            export type WorkspaceProperties = AWS.WorkSpaces.Workspace.WorkspaceProperties;

            export type BundleId = string;

            export type DirectoryId = string;

            export type RootVolumeEncryptionEnabled = boolean;

            export type Tags = AWS.WorkSpaces.Workspace.Tag[];

            export type UserName = string;

            export type UserVolumeEncryptionEnabled = boolean;

            export type VolumeEncryptionKey = string;

        }

        export namespace ConnectionAlias {

            export type ConnectionAliasAssociation = {
                AssociationStatus: string;

                AssociatedAccountId: string;

                ResourceId: string;

                ConnectionIdentifier: string;
            };

            export type ConnectionString = string;

            export type Tags = AWS.WorkSpaces.ConnectionAlias.Tag[];

        }

    }

    export namespace Transfer {

        export namespace User {

            export type HomeDirectoryMapEntry = {
                Entry: string;

                Target: string;
            };

            export type SshPublicKey = string;

            export type PosixProfile = AWS.Transfer.User.PosixProfile;

            export type Policy = string;

            export type Role = string;

            export type HomeDirectory = string;

            export type HomeDirectoryType = string;

            export type ServerId = string;

            export type UserName = string;

            export type HomeDirectoryMappings = AWS.Transfer.User.HomeDirectoryMapEntry[];

            export type SshPublicKeys = AWS.Transfer.User.SshPublicKey[];

            export type Tags = AWS.Transfer.User.Tag[];

        }

        export namespace Server {

            export type ProtocolDetails = AWS.Transfer.Server.ProtocolDetails;

            export type IdentityProviderDetails = AWS.Transfer.Server.IdentityProviderDetails;

            export type EndpointDetails = AWS.Transfer.Server.EndpointDetails;

            export type Protocol = string;

            export type LoggingRole = string;

            export type Protocols = AWS.Transfer.Server.Protocol[];

            export type EndpointType = string;

            export type SecurityPolicyName = string;

            export type Domain = string;

            export type IdentityProviderType = string;

            export type Tags = AWS.Transfer.Server.Tag[];

            export type Certificate = string;

        }

    }

    export namespace MWAA {

        export namespace Environment {

            export type NetworkConfiguration = AWS.MWAA.Environment.NetworkConfiguration;

            export type ModuleLoggingConfiguration = {
                Enabled: boolean;

                LogLevel: string;

                CloudWatchLogGroupArn: string;
            };

            export type TagMap = any;

            export type LoggingConfiguration = AWS.MWAA.Environment.LoggingConfiguration;

            export type Name = string;

            export type ExecutionRoleArn = string;

            export type KmsKey = string;

            export type AirflowVersion = string;

            export type SourceBucketArn = string;

            export type DagS3Path = string;

            export type PluginsS3Path = string;

            export type PluginsS3ObjectVersion = string;

            export type RequirementsS3Path = string;

            export type RequirementsS3ObjectVersion = string;

            export type AirflowConfigurationOptions = JSONString;

            export type EnvironmentClass = string;

            export type MaxWorkers = number;

            export type MinWorkers = number;

            export type Schedulers = number;

            export type WeeklyMaintenanceWindowStart = string;

            export type Tags = AWS.MWAA.Environment.TagMap;

            export type WebserverAccessMode = string;

        }

    }

    export namespace IoT1Click {

        export namespace Project {

            export type DeviceTemplate = {
                DeviceType: string;

                CallbackOverrides: JSONString;
            };

            export type PlacementTemplate = AWS.IoT1Click.Project.PlacementTemplate;

            export type Description = string;

            export type ProjectName = string;

        }

        export namespace Placement {

            export type PlacementName = string;

            export type ProjectName = string;

            export type AssociatedDevices = JSONString;

            export type Attributes = JSONString;

        }

        export namespace Device {

            export type DeviceId = string;

            export type Enabled = boolean;

        }

    }

    export namespace DAX {

        export namespace Cluster {

            export type SSESpecification = AWS.DAX.Cluster.SSESpecification;

            export type Description = string;

            export type ReplicationFactor = number;

            export type ParameterGroupName = string;

            export type AvailabilityZones = string[];

            export type IAMRoleARN = string;

            export type SubnetGroupName = string;

            export type PreferredMaintenanceWindow = string;

            export type ClusterEndpointEncryptionType = string;

            export type NotificationTopicARN = string;

            export type SecurityGroupIds = string[];

            export type NodeType = string;

            export type ClusterName = string;

            export type Tags = JSONString;

        }

        export namespace ParameterGroup {

            export type ParameterNameValues = JSONString;

            export type Description = string;

            export type ParameterGroupName = string;

        }

        export namespace SubnetGroup {

            export type Description = string;

            export type SubnetGroupName = string;

            export type SubnetIds = string[];

        }

    }

    export namespace CodeGuruProfiler {

        export namespace ProfilingGroup {

            export type Channel = {
                channelId: string;

                channelUri: string;
            };

            export type ProfilingGroupName = string;

            export type ComputePlatform = string;

            export type AgentPermissions = JSONString;

            export type AnomalyDetectionNotificationConfiguration = AWS.CodeGuruProfiler.ProfilingGroup.Channel[];

            export type Tags = AWS.CodeGuruProfiler.ProfilingGroup.Tag[];

        }

    }

    export namespace OpsWorksCM {

        export namespace Server {

            export type EngineAttribute = {
                Value: string;

                Name: string;
            };

            export type KeyPair = string;

            export type EngineVersion = string;

            export type ServiceRoleArn = string;

            export type DisableAutomatedBackup = boolean;

            export type BackupId = string;

            export type EngineModel = string;

            export type PreferredMaintenanceWindow = string;

            export type AssociatePublicIpAddress = boolean;

            export type InstanceProfileArn = string;

            export type CustomCertificate = string;

            export type PreferredBackupWindow = string;

            export type SecurityGroupIds = string[];

            export type SubnetIds = string[];

            export type CustomDomain = string;

            export type CustomPrivateKey = string;

            export type ServerName = string;

            export type EngineAttributes = AWS.OpsWorksCM.Server.EngineAttribute[];

            export type BackupRetentionCount = number;

            export type InstanceType = string;

            export type Tags = AWS.OpsWorksCM.Server.Tag[];

            export type Engine = string;

        }

    }

    export namespace CodeStarNotifications {

        export namespace NotificationRule {

            export type Target = {
                TargetType: string;

                TargetAddress: string;
            };

            export type EventTypeIds = string[];

            export type Status = string;

            export type DetailType = string;

            export type Resource = string;

            export type Targets = AWS.CodeStarNotifications.NotificationRule.Target[];

            export type Tags = JSONString;

            export type Name = string;

        }

    }

    export namespace Cloud9 {

        export namespace EnvironmentEC2 {

            export type Repository = {
                PathComponent: string;

                RepositoryUrl: string;
            };

            export type Repositories = AWS.Cloud9.EnvironmentEC2.Repository[];

            export type OwnerArn = string;

            export type Description = string;

            export type ConnectionType = string;

            export type AutomaticStopTimeMinutes = number;

            export type ImageId = string;

            export type SubnetId = string;

            export type InstanceType = string;

            export type Tags = AWS.Cloud9.EnvironmentEC2.Tag[];

            export type Name = string;

        }

    }

    export namespace RAM {

        export namespace ResourceShare {

            export type PermissionArns = string[];

            export type Principals = string[];

            export type AllowExternalPrincipals = boolean;

            export type ResourceArns = string[];

            export type Tags = AWS.RAM.ResourceShare.Tag[];

            export type Name = string;

        }

    }

    export namespace IoTFleetHub {

        export namespace Application {

            export type ApplicationName = string;

            export type ApplicationDescription = string;

            export type RoleArn = string;

            export type Tags = AWS.IoTFleetHub.Application.Tag[];

        }

    }

    export namespace DocDB {

        export namespace DBCluster {

            export type StorageEncrypted = boolean;

            export type EngineVersion = string;

            export type KmsKeyId = string;

            export type AvailabilityZones = string[];

            export type SnapshotIdentifier = string;

            export type Port = number;

            export type DBClusterIdentifier = string;

            export type PreferredMaintenanceWindow = string;

            export type DBSubnetGroupName = string;

            export type DeletionProtection = boolean;

            export type PreferredBackupWindow = string;

            export type MasterUserPassword = string;

            export type VpcSecurityGroupIds = string[];

            export type MasterUsername = string;

            export type DBClusterParameterGroupName = string;

            export type BackupRetentionPeriod = number;

            export type Tags = AWS.DocDB.DBCluster.Tag[];

            export type EnableCloudwatchLogsExports = string[];

        }

        export namespace DBSubnetGroup {

            export type DBSubnetGroupName = string;

            export type DBSubnetGroupDescription = string;

            export type SubnetIds = string[];

            export type Tags = AWS.DocDB.DBSubnetGroup.Tag[];

        }

        export namespace DBInstance {

            export type DBInstanceClass = string;

            export type DBClusterIdentifier = string;

            export type AvailabilityZone = string;

            export type PreferredMaintenanceWindow = string;

            export type AutoMinorVersionUpgrade = boolean;

            export type DBInstanceIdentifier = string;

            export type Tags = AWS.DocDB.DBInstance.Tag[];

        }

        export namespace DBClusterParameterGroup {

            export type Description = string;

            export type Parameters = JSONString;

            export type Family = string;

            export type Tags = AWS.DocDB.DBClusterParameterGroup.Tag[];

            export type Name = string;

        }

    }

    export namespace KMS {

        export namespace ReplicaKey {

            export type PrimaryKeyArn = string;

            export type Description = string;

            export type Enabled = boolean;

            export type KeyPolicy = JSONString;

            export type PendingWindowInDays = number;

            export type Tags = AWS.KMS.ReplicaKey.Tag[];

        }

        export namespace Alias {

            export type AliasName = string;

            export type TargetKeyId = string;

        }

        export namespace Key {

            export type Description = string;

            export type Enabled = boolean;

            export type EnableKeyRotation = boolean;

            export type KeyPolicy = JSONString;

            export type KeyUsage = string;

            export type KeySpec = string;

            export type MultiRegion = boolean;

            export type PendingWindowInDays = number;

            export type Tags = AWS.KMS.Key.Tag[];

        }

    }

    export namespace Detective {

        export namespace MemberInvitation {

            export type GraphArn = string;

            export type MemberId = string;

            export type MemberEmailAddress = string;

            export type DisableEmailNotification = boolean;

            export type Message = string;

        }

        export namespace Graph {

            export type Tags = AWS.Detective.Graph.Tag[];

        }

    }

    export namespace CodeGuruReviewer {

        export namespace RepositoryAssociation {

            export type Name = string;

            export type Type = string;

            export type Owner = string;

            export type BucketName = string;

            export type ConnectionArn = string;

            export type Tags = AWS.CodeGuruReviewer.RepositoryAssociation.Tag[];

        }

    }

    export namespace IoTCoreDeviceAdvisor {

        export namespace SuiteDefinition {

            export type SuiteDefinitionConfiguration = JSONString;

            export type Tags = AWS.IoTCoreDeviceAdvisor.SuiteDefinition.Tag[];

        }

    }

    export namespace Timestream {

        export namespace Database {

            export type DatabaseName = string;

            export type KmsKeyId = string;

            export type Tags = AWS.Timestream.Database.Tag[];

        }

        export namespace Table {

            export type DatabaseName = string;

            export type TableName = string;

            export type RetentionProperties = JSONString;

            export type Tags = AWS.Timestream.Table.Tag[];

        }

    }

    export namespace Inspector {

        export namespace ResourceGroup {

            export type ResourceGroupTags = AWS.Inspector.ResourceGroup.Tag[];

        }

        export namespace AssessmentTemplate {

            export type AssessmentTargetArn = string;

            export type DurationInSeconds = number;

            export type AssessmentTemplateName = string;

            export type RulesPackageArns = string[];

            export type UserAttributesForFindings = AWS.Inspector.AssessmentTemplate.Tag[];

        }

        export namespace AssessmentTarget {

            export type AssessmentTargetName = string;

            export type ResourceGroupArn = string;

        }

    }

    export namespace CodeArtifact {

        export namespace Domain {

            export type DomainName = string;

            export type EncryptionKey = string;

            export type PermissionsPolicyDocument = JSONString;

            export type Tags = AWS.CodeArtifact.Domain.Tag[];

        }

        export namespace Repository {

            export type RepositoryName = string;

            export type DomainName = string;

            export type DomainOwner = string;

            export type Description = string;

            export type ExternalConnections = string[];

            export type Upstreams = string[];

            export type PermissionsPolicyDocument = JSONString;

            export type Tags = AWS.CodeArtifact.Repository.Tag[];

        }

    }

    export namespace SQS {

        export namespace QueuePolicy {

            export type PolicyDocument = JSONString;

            export type Queues = string[];

        }

        export namespace Queue {

            export type ContentBasedDeduplication = boolean;

            export type DeduplicationScope = string;

            export type DelaySeconds = number;

            export type FifoQueue = boolean;

            export type FifoThroughputLimit = string;

            export type KmsDataKeyReusePeriodSeconds = number;

            export type KmsMasterKeyId = string;

            export type MaximumMessageSize = number;

            export type MessageRetentionPeriod = number;

            export type QueueName = string;

            export type ReceiveMessageWaitTimeSeconds = number;

            export type RedrivePolicy = JSONString;

            export type Tags = AWS.SQS.Queue.Tag[];

            export type VisibilityTimeout = number;

        }

    }

    export namespace LookoutVision {

        export namespace Project {

            export type ProjectName = string;

        }

    }

    export namespace Chatbot {

        export namespace SlackChannelConfiguration {

            export type SlackWorkspaceId = string;

            export type SlackChannelId = string;

            export type ConfigurationName = string;

            export type IamRoleArn = string;

            export type SnsTopicArns = string[];

            export type LoggingLevel = string;

        }

    }

    export namespace CodeStarConnections {

        export namespace Connection {

            export type ConnectionName = string;

            export type ProviderType = string;

            export type HostArn = string;

            export type Tags = AWS.CodeStarConnections.Connection.Tag[];

        }

    }

    export namespace ServiceCatalogAppRegistry {

        export namespace Application {

            export type Name = string;

            export type Description = string;

            export type Tags = Record<string, string>;

        }

        export namespace ResourceAssociation {

            export type Application = string;

            export type Resource = string;

            export type ResourceType = string;

        }

        export namespace AttributeGroup {

            export type Name = string;

            export type Description = string;

            export type Attributes = JSONString;

            export type Tags = Record<string, string>;

        }

        export namespace AttributeGroupAssociation {

            export type Application = string;

            export type AttributeGroup = string;

        }

    }

    export namespace SDB {

        export namespace Domain {

            export type Description = string;

        }

    }

    export namespace SecurityHub {

        export namespace Hub {

            export type Tags = JSONString;

        }

    }

    export namespace CUR {

        export namespace ReportDefinition {

            export type ReportName = string;

            export type TimeUnit = string;

            export type Format = string;

            export type Compression = string;

            export type AdditionalSchemaElements = string[];

            export type S3Bucket = string;

            export type S3Prefix = string;

            export type S3Region = string;

            export type AdditionalArtifacts = string[];

            export type RefreshClosedReports = boolean;

            export type ReportVersioning = string;

            export type BillingViewArn = string;

        }

    }

}

export namespace Alexa {

    export namespace ASK {

        export namespace Skill {

            export type Overrides = { Manifest: JSONString; };

            export type SkillPackage = Alexa.ASK.Skill.SkillPackage;

            export type AuthenticationConfiguration = Alexa.ASK.Skill.AuthenticationConfiguration;

            export type VendorId = string;

        }

    }

}

export namespace Tag {

    export type Key = string;

    export type Value = string;

}