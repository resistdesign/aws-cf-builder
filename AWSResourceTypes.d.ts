export type JSONString = string;

export type Timestamp = string;

export namespace AWS {
  export namespace WAFRegional {
    export type ByteMatchSet = {
      ByteMatchTuples?: AWS.WAFRegional.ByteMatchSet.ByteMatchTuple[];

      Name: string;
    };

    export namespace ByteMatchSet {
      export type ByteMatchTuple = {
        TargetString?: string;

        TargetStringBase64?: string;

        PositionalConstraint: string;

        TextTransformation: string;

        FieldToMatch: AWS.WAFRegional.ByteMatchSet.FieldToMatch;
      };

      export type FieldToMatch = {
        Type: string;

        Data?: string;
      };
    }

    export type Rule = {
      MetricName: string;

      Predicates?: AWS.WAFRegional.Rule.Predicate[];

      Name: string;
    };

    export namespace Rule {
      export type Predicate = {
        Type: string;

        DataId: string;

        Negated: boolean;
      };
    }

    export type SizeConstraintSet = {
      SizeConstraints?: AWS.WAFRegional.SizeConstraintSet.SizeConstraint[];

      Name: string;
    };

    export namespace SizeConstraintSet {
      export type SizeConstraint = {
        ComparisonOperator: string;

        Size: number;

        TextTransformation: string;

        FieldToMatch: AWS.WAFRegional.SizeConstraintSet.FieldToMatch;
      };

      export type FieldToMatch = {
        Type: string;

        Data?: string;
      };
    }

    export type XssMatchSet = {
      XssMatchTuples?: AWS.WAFRegional.XssMatchSet.XssMatchTuple[];

      Name: string;
    };

    export namespace XssMatchSet {
      export type XssMatchTuple = {
        TextTransformation: string;

        FieldToMatch: AWS.WAFRegional.XssMatchSet.FieldToMatch;
      };

      export type FieldToMatch = {
        Type: string;

        Data?: string;
      };
    }

    export type GeoMatchSet = {
      GeoMatchConstraints?: AWS.WAFRegional.GeoMatchSet.GeoMatchConstraint[];

      Name: string;
    };

    export namespace GeoMatchSet {
      export type GeoMatchConstraint = {
        Type: string;

        Value: string;
      };
    }

    export type SqlInjectionMatchSet = {
      SqlInjectionMatchTuples?: AWS.WAFRegional.SqlInjectionMatchSet.SqlInjectionMatchTuple[];

      Name: string;
    };

    export namespace SqlInjectionMatchSet {
      export type FieldToMatch = {
        Type: string;

        Data?: string;
      };

      export type SqlInjectionMatchTuple = {
        TextTransformation: string;

        FieldToMatch: AWS.WAFRegional.SqlInjectionMatchSet.FieldToMatch;
      };
    }

    export type WebACL = {
      MetricName: string;

      DefaultAction: AWS.WAFRegional.WebACL.Action;

      Rules?: AWS.WAFRegional.WebACL.Rule[];

      Name: string;
    };

    export namespace WebACL {
      export type Action = {
        Type: string;
      };

      export type Rule = {
        Action: AWS.WAFRegional.WebACL.Action;

        Priority: number;

        RuleId: string;
      };
    }

    export type IPSet = {
      IPSetDescriptors?: AWS.WAFRegional.IPSet.IPSetDescriptor[];

      Name: string;
    };

    export namespace IPSet {
      export type IPSetDescriptor = {
        Type: string;

        Value: string;
      };
    }

    export type RateBasedRule = {
      MetricName: string;

      RateLimit: number;

      MatchPredicates?: AWS.WAFRegional.RateBasedRule.Predicate[];

      RateKey: string;

      Name: string;
    };

    export namespace RateBasedRule {
      export type Predicate = {
        Type: string;

        DataId: string;

        Negated: boolean;
      };
    }

    export type RegexPatternSet = {
      RegexPatternStrings: string[];

      Name: string;
    };

    export type WebACLAssociation = {
      ResourceArn: string;

      WebACLId: string;
    };
  }

  export namespace AppMesh {
    export type VirtualRouter = {
      MeshName: string;

      VirtualRouterName?: string;

      MeshOwner?: string;

      Spec: AWS.AppMesh.VirtualRouter.VirtualRouterSpec;

      Tags?: Tag[];
    };

    export namespace VirtualRouter {
      export type PortMapping = {
        Port: number;

        Protocol: string;
      };

      export type VirtualRouterSpec = {
        Listeners: AWS.AppMesh.VirtualRouter.VirtualRouterListener[];
      };

      export type VirtualRouterListener = {
        PortMapping: AWS.AppMesh.VirtualRouter.PortMapping;
      };
    }

    export type VirtualNode = {
      MeshName: string;

      MeshOwner?: string;

      Spec: AWS.AppMesh.VirtualNode.VirtualNodeSpec;

      VirtualNodeName?: string;

      Tags?: Tag[];
    };

    export namespace VirtualNode {
      export type TlsValidationContextSdsTrust = {
        SecretName: string;
      };

      export type ClientPolicyTls = {
        Validation: AWS.AppMesh.VirtualNode.TlsValidationContext;

        Enforce?: boolean;

        Ports?: number[];

        Certificate?: AWS.AppMesh.VirtualNode.ClientTlsCertificate;
      };

      export type FileAccessLog = {
        Path: string;
      };

      export type AwsCloudMapInstanceAttribute = {
        Value: string;

        Key: string;
      };

      export type ListenerTlsValidationContext = {
        SubjectAlternativeNames?: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

        Trust: AWS.AppMesh.VirtualNode.ListenerTlsValidationContextTrust;
      };

      export type TcpTimeout = {
        Idle?: AWS.AppMesh.VirtualNode.Duration;
      };

      export type Backend = {
        VirtualService?: AWS.AppMesh.VirtualNode.VirtualServiceBackend;
      };

      export type ListenerTimeout = {
        TCP?: AWS.AppMesh.VirtualNode.TcpTimeout;

        HTTP2?: AWS.AppMesh.VirtualNode.HttpTimeout;

        HTTP?: AWS.AppMesh.VirtualNode.HttpTimeout;

        GRPC?: AWS.AppMesh.VirtualNode.GrpcTimeout;
      };

      export type PortMapping = {
        Port: number;

        Protocol: string;
      };

      export type ListenerTls = {
        Validation?: AWS.AppMesh.VirtualNode.ListenerTlsValidationContext;

        Mode: string;

        Certificate: AWS.AppMesh.VirtualNode.ListenerTlsCertificate;
      };

      export type ListenerTlsSdsCertificate = {
        SecretName: string;
      };

      export type BackendDefaults = {
        ClientPolicy?: AWS.AppMesh.VirtualNode.ClientPolicy;
      };

      export type VirtualNodeTcpConnectionPool = {
        MaxConnections: number;
      };

      export type HttpTimeout = {
        PerRequest?: AWS.AppMesh.VirtualNode.Duration;

        Idle?: AWS.AppMesh.VirtualNode.Duration;
      };

      export type HealthCheck = {
        Path?: string;

        UnhealthyThreshold: number;

        Port?: number;

        HealthyThreshold: number;

        TimeoutMillis: number;

        Protocol: string;

        IntervalMillis: number;
      };

      export type AwsCloudMapServiceDiscovery = {
        NamespaceName: string;

        ServiceName: string;

        Attributes?: AWS.AppMesh.VirtualNode.AwsCloudMapInstanceAttribute[];
      };

      export type VirtualNodeHttpConnectionPool = {
        MaxConnections: number;

        MaxPendingRequests?: number;
      };

      export type ListenerTlsFileCertificate = {
        PrivateKey: string;

        CertificateChain: string;
      };

      export type TlsValidationContext = {
        SubjectAlternativeNames?: AWS.AppMesh.VirtualNode.SubjectAlternativeNames;

        Trust: AWS.AppMesh.VirtualNode.TlsValidationContextTrust;
      };

      export type VirtualNodeSpec = {
        Logging?: AWS.AppMesh.VirtualNode.Logging;

        Backends?: AWS.AppMesh.VirtualNode.Backend[];

        Listeners?: AWS.AppMesh.VirtualNode.Listener[];

        BackendDefaults?: AWS.AppMesh.VirtualNode.BackendDefaults;

        ServiceDiscovery?: AWS.AppMesh.VirtualNode.ServiceDiscovery;
      };

      export type Listener = {
        ConnectionPool?: AWS.AppMesh.VirtualNode.VirtualNodeConnectionPool;

        Timeout?: AWS.AppMesh.VirtualNode.ListenerTimeout;

        HealthCheck?: AWS.AppMesh.VirtualNode.HealthCheck;

        TLS?: AWS.AppMesh.VirtualNode.ListenerTls;

        PortMapping: AWS.AppMesh.VirtualNode.PortMapping;

        OutlierDetection?: AWS.AppMesh.VirtualNode.OutlierDetection;
      };

      export type DnsServiceDiscovery = {
        Hostname: string;

        ResponseType?: string;
      };

      export type TlsValidationContextFileTrust = {
        CertificateChain: string;
      };

      export type GrpcTimeout = {
        PerRequest?: AWS.AppMesh.VirtualNode.Duration;

        Idle?: AWS.AppMesh.VirtualNode.Duration;
      };

      export type VirtualNodeConnectionPool = {
        TCP?: AWS.AppMesh.VirtualNode.VirtualNodeTcpConnectionPool;

        HTTP2?: AWS.AppMesh.VirtualNode.VirtualNodeHttp2ConnectionPool;

        HTTP?: AWS.AppMesh.VirtualNode.VirtualNodeHttpConnectionPool;

        GRPC?: AWS.AppMesh.VirtualNode.VirtualNodeGrpcConnectionPool;
      };

      export type Logging = {
        AccessLog?: AWS.AppMesh.VirtualNode.AccessLog;
      };

      export type ServiceDiscovery = {
        DNS?: AWS.AppMesh.VirtualNode.DnsServiceDiscovery;

        AWSCloudMap?: AWS.AppMesh.VirtualNode.AwsCloudMapServiceDiscovery;
      };

      export type Duration = {
        Value: number;

        Unit: string;
      };

      export type TlsValidationContextTrust = {
        SDS?: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

        ACM?: AWS.AppMesh.VirtualNode.TlsValidationContextAcmTrust;

        File?: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust;
      };

      export type ListenerTlsAcmCertificate = {
        CertificateArn: string;
      };

      export type VirtualNodeHttp2ConnectionPool = {
        MaxRequests: number;
      };

      export type ListenerTlsCertificate = {
        SDS?: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

        ACM?: AWS.AppMesh.VirtualNode.ListenerTlsAcmCertificate;

        File?: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate;
      };

      export type VirtualServiceBackend = {
        ClientPolicy?: AWS.AppMesh.VirtualNode.ClientPolicy;

        VirtualServiceName: string;
      };

      export type OutlierDetection = {
        MaxEjectionPercent: number;

        BaseEjectionDuration: AWS.AppMesh.VirtualNode.Duration;

        MaxServerErrors: number;

        Interval: AWS.AppMesh.VirtualNode.Duration;
      };

      export type TlsValidationContextAcmTrust = {
        CertificateAuthorityArns: string[];
      };

      export type ClientPolicy = {
        TLS?: AWS.AppMesh.VirtualNode.ClientPolicyTls;
      };

      export type ClientTlsCertificate = {
        SDS?: AWS.AppMesh.VirtualNode.ListenerTlsSdsCertificate;

        File?: AWS.AppMesh.VirtualNode.ListenerTlsFileCertificate;
      };

      export type ListenerTlsValidationContextTrust = {
        SDS?: AWS.AppMesh.VirtualNode.TlsValidationContextSdsTrust;

        File?: AWS.AppMesh.VirtualNode.TlsValidationContextFileTrust;
      };

      export type AccessLog = {
        File?: AWS.AppMesh.VirtualNode.FileAccessLog;
      };

      export type SubjectAlternativeNameMatchers = {
        Exact?: string[];
      };

      export type SubjectAlternativeNames = {
        Match: AWS.AppMesh.VirtualNode.SubjectAlternativeNameMatchers;
      };

      export type VirtualNodeGrpcConnectionPool = {
        MaxRequests: number;
      };
    }

    export type GatewayRoute = {
      MeshName: string;

      VirtualGatewayName: string;

      MeshOwner?: string;

      GatewayRouteName?: string;

      Spec: AWS.AppMesh.GatewayRoute.GatewayRouteSpec;

      Tags?: Tag[];
    };

    export namespace GatewayRoute {
      export type HttpQueryParameterMatch = {
        Exact?: string;
      };

      export type HttpGatewayRoutePrefixRewrite = {
        Value?: string;

        DefaultPrefix?: string;
      };

      export type HttpGatewayRouteHeaderMatch = {
        Suffix?: string;

        Regex?: string;

        Exact?: string;

        Prefix?: string;

        Range?: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch;
      };

      export type GatewayRouteSpec = {
        HttpRoute?: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

        Http2Route?: AWS.AppMesh.GatewayRoute.HttpGatewayRoute;

        GrpcRoute?: AWS.AppMesh.GatewayRoute.GrpcGatewayRoute;
      };

      export type HttpGatewayRouteHeader = {
        Invert?: boolean;

        Name: string;

        Match?: AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeaderMatch;
      };

      export type GatewayRouteHostnameRewrite = {
        DefaultTargetHostname?: string;
      };

      export type QueryParameter = {
        Name: string;

        Match?: AWS.AppMesh.GatewayRoute.HttpQueryParameterMatch;
      };

      export type GatewayRouteMetadataMatch = {
        Suffix?: string;

        Regex?: string;

        Exact?: string;

        Prefix?: string;

        Range?: AWS.AppMesh.GatewayRoute.GatewayRouteRangeMatch;
      };

      export type GrpcGatewayRouteAction = {
        Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

        Rewrite?: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteRewrite;
      };

      export type GrpcGatewayRouteRewrite = {
        Hostname?: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite;
      };

      export type GatewayRouteTarget = {
        VirtualService: AWS.AppMesh.GatewayRoute.GatewayRouteVirtualService;
      };

      export type GrpcGatewayRouteMatch = {
        ServiceName?: string;

        Hostname?: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

        Metadata?: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMetadata[];
      };

      export type HttpGatewayRoutePathRewrite = {
        Exact?: string;
      };

      export type GrpcGatewayRoute = {
        Action: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteAction;

        Match: AWS.AppMesh.GatewayRoute.GrpcGatewayRouteMatch;
      };

      export type GatewayRouteRangeMatch = {
        Start: number;

        End: number;
      };

      export type HttpGatewayRouteRewrite = {
        Path?: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePathRewrite;

        Hostname?: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameRewrite;

        Prefix?: AWS.AppMesh.GatewayRoute.HttpGatewayRoutePrefixRewrite;
      };

      export type GrpcGatewayRouteMetadata = {
        Invert?: boolean;

        Name: string;

        Match?: AWS.AppMesh.GatewayRoute.GatewayRouteMetadataMatch;
      };

      export type HttpGatewayRouteAction = {
        Target: AWS.AppMesh.GatewayRoute.GatewayRouteTarget;

        Rewrite?: AWS.AppMesh.GatewayRoute.HttpGatewayRouteRewrite;
      };

      export type GatewayRouteHostnameMatch = {
        Suffix?: string;

        Exact?: string;
      };

      export type GatewayRouteVirtualService = {
        VirtualServiceName: string;
      };

      export type HttpGatewayRouteMatch = {
        Path?: AWS.AppMesh.GatewayRoute.HttpPathMatch;

        Headers?: AWS.AppMesh.GatewayRoute.HttpGatewayRouteHeader[];

        Hostname?: AWS.AppMesh.GatewayRoute.GatewayRouteHostnameMatch;

        Prefix?: string;

        Method?: string;

        QueryParameters?: AWS.AppMesh.GatewayRoute.QueryParameter[];
      };

      export type HttpPathMatch = {
        Regex?: string;

        Exact?: string;
      };

      export type HttpGatewayRoute = {
        Action: AWS.AppMesh.GatewayRoute.HttpGatewayRouteAction;

        Match: AWS.AppMesh.GatewayRoute.HttpGatewayRouteMatch;
      };
    }

    export type Route = {
      MeshName: string;

      VirtualRouterName: string;

      MeshOwner?: string;

      RouteName?: string;

      Spec: AWS.AppMesh.Route.RouteSpec;

      Tags?: Tag[];
    };

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
        Suffix?: string;

        Regex?: string;

        Exact?: string;

        Prefix?: string;

        Range?: AWS.AppMesh.Route.MatchRange;
      };

      export type HeaderMatchMethod = {
        Suffix?: string;

        Regex?: string;

        Exact?: string;

        Prefix?: string;

        Range?: AWS.AppMesh.Route.MatchRange;
      };

      export type RouteSpec = {
        HttpRoute?: AWS.AppMesh.Route.HttpRoute;

        Priority?: number;

        Http2Route?: AWS.AppMesh.Route.HttpRoute;

        GrpcRoute?: AWS.AppMesh.Route.GrpcRoute;

        TcpRoute?: AWS.AppMesh.Route.TcpRoute;
      };

      export type HttpPathMatch = {
        Regex?: string;

        Exact?: string;
      };

      export type GrpcRouteMetadata = {
        Invert?: boolean;

        Name: string;

        Match?: AWS.AppMesh.Route.GrpcRouteMetadataMatchMethod;
      };

      export type QueryParameter = {
        Name: string;

        Match?: AWS.AppMesh.Route.HttpQueryParameterMatch;
      };

      export type HttpRouteMatch = {
        Path?: AWS.AppMesh.Route.HttpPathMatch;

        Scheme?: string;

        Headers?: AWS.AppMesh.Route.HttpRouteHeader[];

        Prefix?: string;

        Method?: string;

        QueryParameters?: AWS.AppMesh.Route.QueryParameter[];
      };

      export type HttpQueryParameterMatch = {
        Exact?: string;
      };

      export type GrpcRouteAction = {
        WeightedTargets: AWS.AppMesh.Route.WeightedTarget[];
      };

      export type GrpcRouteMatch = {
        ServiceName?: string;

        Metadata?: AWS.AppMesh.Route.GrpcRouteMetadata[];

        MethodName?: string;
      };

      export type HttpRoute = {
        Action: AWS.AppMesh.Route.HttpRouteAction;

        Timeout?: AWS.AppMesh.Route.HttpTimeout;

        RetryPolicy?: AWS.AppMesh.Route.HttpRetryPolicy;

        Match: AWS.AppMesh.Route.HttpRouteMatch;
      };

      export type TcpRouteAction = {
        WeightedTargets: AWS.AppMesh.Route.WeightedTarget[];
      };

      export type GrpcRetryPolicy = {
        MaxRetries: number;

        PerRetryTimeout: AWS.AppMesh.Route.Duration;

        GrpcRetryEvents?: string[];

        HttpRetryEvents?: string[];

        TcpRetryEvents?: string[];
      };

      export type TcpRoute = {
        Action: AWS.AppMesh.Route.TcpRouteAction;

        Timeout?: AWS.AppMesh.Route.TcpTimeout;
      };

      export type HttpRetryPolicy = {
        MaxRetries: number;

        PerRetryTimeout: AWS.AppMesh.Route.Duration;

        HttpRetryEvents?: string[];

        TcpRetryEvents?: string[];
      };

      export type GrpcTimeout = {
        PerRequest?: AWS.AppMesh.Route.Duration;

        Idle?: AWS.AppMesh.Route.Duration;
      };

      export type GrpcRoute = {
        Action: AWS.AppMesh.Route.GrpcRouteAction;

        Timeout?: AWS.AppMesh.Route.GrpcTimeout;

        RetryPolicy?: AWS.AppMesh.Route.GrpcRetryPolicy;

        Match: AWS.AppMesh.Route.GrpcRouteMatch;
      };

      export type TcpTimeout = {
        Idle?: AWS.AppMesh.Route.Duration;
      };

      export type HttpTimeout = {
        PerRequest?: AWS.AppMesh.Route.Duration;

        Idle?: AWS.AppMesh.Route.Duration;
      };

      export type HttpRouteHeader = {
        Invert?: boolean;

        Name: string;

        Match?: AWS.AppMesh.Route.HeaderMatchMethod;
      };

      export type HttpRouteAction = {
        WeightedTargets: AWS.AppMesh.Route.WeightedTarget[];
      };

      export type MatchRange = {
        Start: number;

        End: number;
      };
    }

    export type VirtualGateway = {
      VirtualGatewayName?: string;

      MeshName: string;

      MeshOwner?: string;

      Spec: AWS.AppMesh.VirtualGateway.VirtualGatewaySpec;

      Tags?: Tag[];
    };

    export namespace VirtualGateway {
      export type VirtualGatewayTlsValidationContextTrust = {
        SDS?: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

        ACM?: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust;

        File?: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust;
      };

      export type VirtualGatewayListenerTlsAcmCertificate = {
        CertificateArn: string;
      };

      export type VirtualGatewayTlsValidationContextFileTrust = {
        CertificateChain: string;
      };

      export type VirtualGatewayHttp2ConnectionPool = {
        MaxRequests: number;
      };

      export type VirtualGatewaySpec = {
        Logging?: AWS.AppMesh.VirtualGateway.VirtualGatewayLogging;

        Listeners: AWS.AppMesh.VirtualGateway.VirtualGatewayListener[];

        BackendDefaults?: AWS.AppMesh.VirtualGateway.VirtualGatewayBackendDefaults;
      };

      export type VirtualGatewayTlsValidationContext = {
        SubjectAlternativeNames?: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

        Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextTrust;
      };

      export type VirtualGatewayListenerTlsCertificate = {
        SDS?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

        ACM?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsAcmCertificate;

        File?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate;
      };

      export type VirtualGatewayGrpcConnectionPool = {
        MaxRequests: number;
      };

      export type VirtualGatewayConnectionPool = {
        HTTP2?: AWS.AppMesh.VirtualGateway.VirtualGatewayHttp2ConnectionPool;

        HTTP?: AWS.AppMesh.VirtualGateway.VirtualGatewayHttpConnectionPool;

        GRPC?: AWS.AppMesh.VirtualGateway.VirtualGatewayGrpcConnectionPool;
      };

      export type SubjectAlternativeNames = {
        Match: AWS.AppMesh.VirtualGateway.SubjectAlternativeNameMatchers;
      };

      export type VirtualGatewayClientTlsCertificate = {
        SDS?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsSdsCertificate;

        File?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsFileCertificate;
      };

      export type VirtualGatewayListenerTlsValidationContext = {
        SubjectAlternativeNames?: AWS.AppMesh.VirtualGateway.SubjectAlternativeNames;

        Trust: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust;
      };

      export type VirtualGatewayListenerTlsFileCertificate = {
        PrivateKey: string;

        CertificateChain: string;
      };

      export type VirtualGatewayLogging = {
        AccessLog?: AWS.AppMesh.VirtualGateway.VirtualGatewayAccessLog;
      };

      export type VirtualGatewayListenerTls = {
        Validation?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsValidationContext;

        Mode: string;

        Certificate: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTlsCertificate;
      };

      export type SubjectAlternativeNameMatchers = {
        Exact?: string[];
      };

      export type VirtualGatewayClientPolicy = {
        TLS?: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicyTls;
      };

      export type VirtualGatewayTlsValidationContextSdsTrust = {
        SecretName: string;
      };

      export type VirtualGatewayListener = {
        ConnectionPool?: AWS.AppMesh.VirtualGateway.VirtualGatewayConnectionPool;

        HealthCheck?: AWS.AppMesh.VirtualGateway.VirtualGatewayHealthCheckPolicy;

        TLS?: AWS.AppMesh.VirtualGateway.VirtualGatewayListenerTls;

        PortMapping: AWS.AppMesh.VirtualGateway.VirtualGatewayPortMapping;
      };

      export type VirtualGatewayPortMapping = {
        Port: number;

        Protocol: string;
      };

      export type VirtualGatewayBackendDefaults = {
        ClientPolicy?: AWS.AppMesh.VirtualGateway.VirtualGatewayClientPolicy;
      };

      export type VirtualGatewayClientPolicyTls = {
        Validation: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContext;

        Enforce?: boolean;

        Ports?: number[];

        Certificate?: AWS.AppMesh.VirtualGateway.VirtualGatewayClientTlsCertificate;
      };

      export type VirtualGatewayAccessLog = {
        File?: AWS.AppMesh.VirtualGateway.VirtualGatewayFileAccessLog;
      };

      export type VirtualGatewayFileAccessLog = {
        Path: string;
      };

      export type VirtualGatewayHttpConnectionPool = {
        MaxConnections: number;

        MaxPendingRequests?: number;
      };

      export type VirtualGatewayHealthCheckPolicy = {
        Path?: string;

        UnhealthyThreshold: number;

        Port?: number;

        HealthyThreshold: number;

        TimeoutMillis: number;

        Protocol: string;

        IntervalMillis: number;
      };

      export type VirtualGatewayTlsValidationContextAcmTrust = {
        CertificateAuthorityArns: string[];
      };

      export type VirtualGatewayListenerTlsValidationContextTrust = {
        SDS?: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust;

        File?: AWS.AppMesh.VirtualGateway.VirtualGatewayTlsValidationContextFileTrust;
      };

      export type VirtualGatewayListenerTlsSdsCertificate = {
        SecretName: string;
      };
    }

    export type VirtualService = {
      MeshName: string;

      MeshOwner?: string;

      VirtualServiceName: string;

      Spec: AWS.AppMesh.VirtualService.VirtualServiceSpec;

      Tags?: Tag[];
    };

    export namespace VirtualService {
      export type VirtualRouterServiceProvider = {
        VirtualRouterName: string;
      };

      export type VirtualNodeServiceProvider = {
        VirtualNodeName: string;
      };

      export type VirtualServiceProvider = {
        VirtualNode?: AWS.AppMesh.VirtualService.VirtualNodeServiceProvider;

        VirtualRouter?: AWS.AppMesh.VirtualService.VirtualRouterServiceProvider;
      };

      export type VirtualServiceSpec = {
        Provider?: AWS.AppMesh.VirtualService.VirtualServiceProvider;
      };
    }

    export type Mesh = {
      MeshName?: string;

      Spec?: AWS.AppMesh.Mesh.MeshSpec;

      Tags?: Tag[];
    };

    export namespace Mesh {
      export type MeshSpec = {
        EgressFilter?: AWS.AppMesh.Mesh.EgressFilter;
      };

      export type EgressFilter = {
        Type: string;
      };
    }
  }

  export namespace QuickSight {
    export type DataSet = {
      AwsAccountId?: string;

      ColumnGroups?: AWS.QuickSight.DataSet.ColumnGroup[];

      ColumnLevelPermissionRules?: AWS.QuickSight.DataSet.ColumnLevelPermissionRule[];

      DataSetId?: string;

      FieldFolders?: Record<string, AWS.QuickSight.DataSet.FieldFolder>;

      ImportMode?: string;

      LogicalTableMap?: Record<string, AWS.QuickSight.DataSet.LogicalTable>;

      Name?: string;

      Permissions?: AWS.QuickSight.DataSet.ResourcePermission[];

      PhysicalTableMap?: Record<string, AWS.QuickSight.DataSet.PhysicalTable>;

      RowLevelPermissionDataSet?: AWS.QuickSight.DataSet.RowLevelPermissionDataSet;

      Tags?: Tag[];

      IngestionWaitPolicy?: AWS.QuickSight.DataSet.IngestionWaitPolicy;
    };

    export namespace DataSet {
      export type JoinKeyProperties = {
        UniqueKey?: boolean;
      };

      export type UploadSettings = {
        ContainsHeader?: boolean;

        TextQualifier?: string;

        Format?: string;

        StartFromRow?: number;

        Delimiter?: string;
      };

      export type ProjectOperation = {
        ProjectedColumns: string[];
      };

      export type ColumnLevelPermissionRule = {
        ColumnNames?: string[];

        Principals?: string[];
      };

      export type CreateColumnsOperation = {
        Columns: AWS.QuickSight.DataSet.CalculatedColumn[];
      };

      export type PhysicalTable = {
        RelationalTable?: AWS.QuickSight.DataSet.RelationalTable;

        CustomSql?: AWS.QuickSight.DataSet.CustomSql;

        S3Source?: AWS.QuickSight.DataSet.S3Source;
      };

      export type ColumnDescription = {
        Text?: string;
      };

      export type RenameColumnOperation = {
        NewColumnName: string;

        ColumnName: string;
      };

      export type ColumnGroup = {
        GeoSpatialColumnGroup?: AWS.QuickSight.DataSet.GeoSpatialColumnGroup;
      };

      export type GeoSpatialColumnGroup = {
        Columns: string[];

        CountryCode?: string;

        Name: string;
      };

      export type RelationalTable = {
        DataSourceArn: string;

        InputColumns: AWS.QuickSight.DataSet.InputColumn[];

        Schema?: string;

        Catalog?: string;

        Name: string;
      };

      export type InputColumn = {
        Type: string;

        Name: string;
      };

      export type RowLevelPermissionDataSet = {
        Arn: string;

        Namespace?: string;

        PermissionPolicy: string;
      };

      export type FilterOperation = {
        ConditionExpression: string;
      };

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
        Description?: string;

        Columns?: string[];
      };

      export type S3Source = {
        DataSourceArn: string;

        InputColumns: AWS.QuickSight.DataSet.InputColumn[];

        UploadSettings?: AWS.QuickSight.DataSet.UploadSettings;
      };

      export type LogicalTable = {
        Alias: string;

        DataTransforms?: AWS.QuickSight.DataSet.TransformOperation[];

        Source: AWS.QuickSight.DataSet.LogicalTableSource;
      };

      export type TransformOperation = {
        TagColumnOperation?: AWS.QuickSight.DataSet.TagColumnOperation;

        FilterOperation?: AWS.QuickSight.DataSet.FilterOperation;

        CastColumnTypeOperation?: AWS.QuickSight.DataSet.CastColumnTypeOperation;

        CreateColumnsOperation?: AWS.QuickSight.DataSet.CreateColumnsOperation;

        RenameColumnOperation?: AWS.QuickSight.DataSet.RenameColumnOperation;

        ProjectOperation?: AWS.QuickSight.DataSet.ProjectOperation;
      };

      export type JoinInstruction = {
        OnClause: string;

        Type: string;

        LeftJoinKeyProperties?: AWS.QuickSight.DataSet.JoinKeyProperties;

        LeftOperand: string;

        RightOperand: string;

        RightJoinKeyProperties?: AWS.QuickSight.DataSet.JoinKeyProperties;
      };

      export type OutputColumn = {
        Type?: string;

        Description?: string;

        Name?: string;
      };

      export type ColumnTag = {
        ColumnGeographicRole?: string;

        ColumnDescription?: AWS.QuickSight.DataSet.ColumnDescription;
      };

      export type TagColumnOperation = {
        ColumnName: string;

        Tags: AWS.QuickSight.DataSet.ColumnTag[];
      };

      export type IngestionWaitPolicy = {
        WaitForSpiceIngestion?: boolean;

        IngestionWaitTimeInHours?: number;
      };

      export type CalculatedColumn = {
        ColumnId: string;

        ColumnName: string;

        Expression: string;
      };

      export type CastColumnTypeOperation = {
        ColumnName: string;

        Format?: string;

        NewColumnType: string;
      };

      export type LogicalTableSource = {
        PhysicalTableId?: string;

        JoinInstruction?: AWS.QuickSight.DataSet.JoinInstruction;
      };
    }

    export type DataSource = {
      AlternateDataSourceParameters?: AWS.QuickSight.DataSource.DataSourceParameters[];

      AwsAccountId?: string;

      Credentials?: AWS.QuickSight.DataSource.DataSourceCredentials;

      DataSourceId?: string;

      DataSourceParameters?: AWS.QuickSight.DataSource.DataSourceParameters;

      ErrorInfo?: AWS.QuickSight.DataSource.DataSourceErrorInfo;

      Name?: string;

      Permissions?: AWS.QuickSight.DataSource.ResourcePermission[];

      SslProperties?: AWS.QuickSight.DataSource.SslProperties;

      Tags?: Tag[];

      Type?: string;

      VpcConnectionProperties?: AWS.QuickSight.DataSource.VpcConnectionProperties;
    };

    export namespace DataSource {
      export type DataSourceParameters = {
        AuroraPostgreSqlParameters?: AWS.QuickSight.DataSource.AuroraPostgreSqlParameters;

        TeradataParameters?: AWS.QuickSight.DataSource.TeradataParameters;

        RdsParameters?: AWS.QuickSight.DataSource.RdsParameters;

        AthenaParameters?: AWS.QuickSight.DataSource.AthenaParameters;

        SparkParameters?: AWS.QuickSight.DataSource.SparkParameters;

        MariaDbParameters?: AWS.QuickSight.DataSource.MariaDbParameters;

        OracleParameters?: AWS.QuickSight.DataSource.OracleParameters;

        PrestoParameters?: AWS.QuickSight.DataSource.PrestoParameters;

        RedshiftParameters?: AWS.QuickSight.DataSource.RedshiftParameters;

        MySqlParameters?: AWS.QuickSight.DataSource.MySqlParameters;

        SqlServerParameters?: AWS.QuickSight.DataSource.SqlServerParameters;

        SnowflakeParameters?: AWS.QuickSight.DataSource.SnowflakeParameters;

        AmazonElasticsearchParameters?: AWS.QuickSight.DataSource.AmazonElasticsearchParameters;

        PostgreSqlParameters?: AWS.QuickSight.DataSource.PostgreSqlParameters;

        AuroraParameters?: AWS.QuickSight.DataSource.AuroraParameters;

        S3Parameters?: AWS.QuickSight.DataSource.S3Parameters;
      };

      export type AuroraPostgreSqlParameters = {
        Port: number;

        Database: string;

        Host: string;
      };

      export type DataSourceCredentials = {
        CopySourceArn?: string;

        CredentialPair?: AWS.QuickSight.DataSource.CredentialPair;
      };

      export type CredentialPair = {
        AlternateDataSourceParameters?: AWS.QuickSight.DataSource.DataSourceParameters[];

        Username: string;

        Password: string;
      };

      export type SnowflakeParameters = {
        Warehouse: string;

        Database: string;

        Host: string;
      };

      export type SslProperties = {
        DisableSsl?: boolean;
      };

      export type S3Parameters = {
        ManifestFileLocation: AWS.QuickSight.DataSource.ManifestFileLocation;
      };

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

      export type AthenaParameters = {
        WorkGroup?: string;
      };

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

      export type AmazonElasticsearchParameters = {
        Domain: string;
      };

      export type DataSourceErrorInfo = {
        Type?: string;

        Message?: string;
      };

      export type VpcConnectionProperties = {
        VpcConnectionArn: string;
      };

      export type RedshiftParameters = {
        ClusterId?: string;

        Port?: number;

        Database: string;

        Host?: string;
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
    }

    export type Dashboard = {
      AwsAccountId: string;

      DashboardId: string;

      DashboardPublishOptions?: AWS.QuickSight.Dashboard.DashboardPublishOptions;

      Name?: string;

      Parameters?: AWS.QuickSight.Dashboard.Parameters;

      Permissions?: AWS.QuickSight.Dashboard.ResourcePermission[];

      SourceEntity?: AWS.QuickSight.Dashboard.DashboardSourceEntity;

      Tags?: Tag[];

      ThemeArn?: string;

      VersionDescription?: string;
    };

    export namespace Dashboard {
      export type SheetControlsOption = {
        VisibilityState?: string;
      };

      export type ResourcePermission = {
        Actions: string[];

        Principal: string;
      };

      export type DashboardSourceEntity = {
        SourceTemplate?: AWS.QuickSight.Dashboard.DashboardSourceTemplate;
      };

      export type Parameters = {
        StringParameters?: AWS.QuickSight.Dashboard.StringParameter[];

        DecimalParameters?: AWS.QuickSight.Dashboard.DecimalParameter[];

        IntegerParameters?: AWS.QuickSight.Dashboard.IntegerParameter[];

        DateTimeParameters?: AWS.QuickSight.Dashboard.DateTimeParameter[];
      };

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

      export type ExportToCSVOption = {
        AvailabilityStatus?: string;
      };

      export type DashboardPublishOptions = {
        SheetControlsOption?: AWS.QuickSight.Dashboard.SheetControlsOption;

        ExportToCSVOption?: AWS.QuickSight.Dashboard.ExportToCSVOption;

        AdHocFilteringOption?: AWS.QuickSight.Dashboard.AdHocFilteringOption;
      };

      export type DecimalParameter = {
        Values: number[];

        Name: string;
      };

      export type DateTimeParameter = {
        Values: string[];

        Name: string;
      };

      export type AdHocFilteringOption = {
        AvailabilityStatus?: string;
      };
    }

    export type Analysis = {
      AnalysisId: string;

      AwsAccountId: string;

      Errors?: AWS.QuickSight.Analysis.AnalysisError[];

      Name?: string;

      Parameters?: AWS.QuickSight.Analysis.Parameters;

      Permissions?: AWS.QuickSight.Analysis.ResourcePermission[];

      SourceEntity?: AWS.QuickSight.Analysis.AnalysisSourceEntity;

      Tags?: Tag[];

      ThemeArn?: string;
    };

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
        SheetId?: string;

        Name?: string;
      };

      export type AnalysisSourceEntity = {
        SourceTemplate?: AWS.QuickSight.Analysis.AnalysisSourceTemplate;
      };

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

      export type Parameters = {
        StringParameters?: AWS.QuickSight.Analysis.StringParameter[];

        DecimalParameters?: AWS.QuickSight.Analysis.DecimalParameter[];

        IntegerParameters?: AWS.QuickSight.Analysis.IntegerParameter[];

        DateTimeParameters?: AWS.QuickSight.Analysis.DateTimeParameter[];
      };

      export type StringParameter = {
        Values: string[];

        Name: string;
      };

      export type AnalysisError = {
        Type?: string;

        Message?: string;
      };
    }

    export type Theme = {
      AwsAccountId: string;

      BaseThemeId?: string;

      Configuration?: AWS.QuickSight.Theme.ThemeConfiguration;

      Name?: string;

      Permissions?: AWS.QuickSight.Theme.ResourcePermission[];

      Tags?: Tag[];

      ThemeId: string;

      VersionDescription?: string;
    };

    export namespace Theme {
      export type Font = {
        FontFamily?: string;
      };

      export type BorderStyle = {
        Show?: boolean;
      };

      export type TileStyle = {
        Border?: AWS.QuickSight.Theme.BorderStyle;
      };

      export type ResourcePermission = {
        Actions: string[];

        Principal: string;
      };

      export type MarginStyle = {
        Show?: boolean;
      };

      export type GutterStyle = {
        Show?: boolean;
      };

      export type DataColorPalette = {
        EmptyFillColor?: string;

        Colors?: string[];

        MinMaxGradient?: string[];
      };

      export type ThemeConfiguration = {
        DataColorPalette?: AWS.QuickSight.Theme.DataColorPalette;

        UIColorPalette?: AWS.QuickSight.Theme.UIColorPalette;

        Sheet?: AWS.QuickSight.Theme.SheetStyle;

        Typography?: AWS.QuickSight.Theme.Typography;
      };

      export type UIColorPalette = {
        Warning?: string;

        Accent?: string;

        AccentForeground?: string;

        SecondaryBackground?: string;

        DangerForeground?: string;

        PrimaryBackground?: string;

        Dimension?: string;

        SecondaryForeground?: string;

        WarningForeground?: string;

        DimensionForeground?: string;

        PrimaryForeground?: string;

        Success?: string;

        Danger?: string;

        SuccessForeground?: string;

        Measure?: string;

        MeasureForeground?: string;
      };

      export type SheetStyle = {
        TileLayout?: AWS.QuickSight.Theme.TileLayoutStyle;

        Tile?: AWS.QuickSight.Theme.TileStyle;
      };

      export type TileLayoutStyle = {
        Gutter?: AWS.QuickSight.Theme.GutterStyle;

        Margin?: AWS.QuickSight.Theme.MarginStyle;
      };

      export type Typography = {
        FontFamilies?: AWS.QuickSight.Theme.Font[];
      };
    }

    export type Template = {
      AwsAccountId: string;

      Name?: string;

      Permissions?: AWS.QuickSight.Template.ResourcePermission[];

      SourceEntity?: AWS.QuickSight.Template.TemplateSourceEntity;

      Tags?: Tag[];

      TemplateId: string;

      VersionDescription?: string;
    };

    export namespace Template {
      export type ResourcePermission = {
        Actions: string[];

        Principal: string;
      };

      export type TemplateSourceTemplate = {
        Arn: string;
      };

      export type DataSetReference = {
        DataSetArn: string;

        DataSetPlaceholder: string;
      };

      export type TemplateSourceEntity = {
        SourceAnalysis?: AWS.QuickSight.Template.TemplateSourceAnalysis;

        SourceTemplate?: AWS.QuickSight.Template.TemplateSourceTemplate;
      };

      export type TemplateSourceAnalysis = {
        DataSetReferences: AWS.QuickSight.Template.DataSetReference[];

        Arn: string;
      };
    }
  }

  export namespace ElastiCache {
    export type ReplicationGroup = {
      AtRestEncryptionEnabled?: boolean;

      AuthToken?: string;

      AutoMinorVersionUpgrade?: boolean;

      AutomaticFailoverEnabled?: boolean;

      CacheNodeType?: string;

      CacheParameterGroupName?: string;

      CacheSecurityGroupNames?: string[];

      CacheSubnetGroupName?: string;

      Engine?: string;

      EngineVersion?: string;

      GlobalReplicationGroupId?: string;

      KmsKeyId?: string;

      LogDeliveryConfigurations?: AWS.ElastiCache.ReplicationGroup.LogDeliveryConfigurationRequest[];

      MultiAZEnabled?: boolean;

      NodeGroupConfiguration?: AWS.ElastiCache.ReplicationGroup.NodeGroupConfiguration[];

      NotificationTopicArn?: string;

      NumCacheClusters?: number;

      NumNodeGroups?: number;

      Port?: number;

      PreferredCacheClusterAZs?: string[];

      PreferredMaintenanceWindow?: string;

      PrimaryClusterId?: string;

      ReplicasPerNodeGroup?: number;

      ReplicationGroupDescription: string;

      ReplicationGroupId?: string;

      SecurityGroupIds?: string[];

      SnapshotArns?: string[];

      SnapshotName?: string;

      SnapshotRetentionLimit?: number;

      SnapshotWindow?: string;

      SnapshottingClusterId?: string;

      Tags?: Tag[];

      TransitEncryptionEnabled?: boolean;

      UserGroupIds?: string[];
    };

    export namespace ReplicationGroup {
      export type LogDeliveryConfigurationRequest = {
        DestinationDetails?: AWS.ElastiCache.ReplicationGroup.DestinationDetails;

        DestinationType?: string;

        LogFormat?: string;

        LogType?: string;
      };

      export type CloudWatchLogsDestinationDetails = {
        LogGroup?: string;
      };

      export type NodeGroupConfiguration = {
        NodeGroupId?: string;

        PrimaryAvailabilityZone?: string;

        ReplicaAvailabilityZones?: string[];

        ReplicaCount?: number;

        Slots?: string;
      };

      export type DestinationDetails = {
        CloudWatchLogsDetails?: AWS.ElastiCache.ReplicationGroup.CloudWatchLogsDestinationDetails;

        KinesisFirehoseDetails?: AWS.ElastiCache.ReplicationGroup.KinesisFirehoseDestinationDetails;
      };

      export type KinesisFirehoseDestinationDetails = {
        DeliveryStream?: string;
      };
    }

    export type CacheCluster = {
      AZMode?: string;

      AutoMinorVersionUpgrade?: boolean;

      CacheNodeType: string;

      CacheParameterGroupName?: string;

      CacheSecurityGroupNames?: string[];

      CacheSubnetGroupName?: string;

      ClusterName?: string;

      Engine: string;

      EngineVersion?: string;

      LogDeliveryConfigurations?: AWS.ElastiCache.CacheCluster.LogDeliveryConfigurationRequest[];

      NotificationTopicArn?: string;

      NumCacheNodes: number;

      Port?: number;

      PreferredAvailabilityZone?: string;

      PreferredAvailabilityZones?: string[];

      PreferredMaintenanceWindow?: string;

      SnapshotArns?: string[];

      SnapshotName?: string;

      SnapshotRetentionLimit?: number;

      SnapshotWindow?: string;

      Tags?: Tag[];

      VpcSecurityGroupIds?: string[];
    };

    export namespace CacheCluster {
      export type KinesisFirehoseDestinationDetails = {
        DeliveryStream?: string;
      };

      export type LogDeliveryConfigurationRequest = {
        DestinationDetails?: AWS.ElastiCache.CacheCluster.DestinationDetails;

        DestinationType?: string;

        LogFormat?: string;

        LogType?: string;
      };

      export type DestinationDetails = {
        CloudWatchLogsDetails?: AWS.ElastiCache.CacheCluster.CloudWatchLogsDestinationDetails;

        KinesisFirehoseDetails?: AWS.ElastiCache.CacheCluster.KinesisFirehoseDestinationDetails;
      };

      export type CloudWatchLogsDestinationDetails = {
        LogGroup?: string;
      };
    }

    export type GlobalReplicationGroup = {
      GlobalReplicationGroupIdSuffix?: string;

      AutomaticFailoverEnabled?: boolean;

      CacheNodeType?: string;

      EngineVersion?: string;

      CacheParameterGroupName?: string;

      GlobalNodeGroupCount?: number;

      GlobalReplicationGroupDescription?: string;

      Members: AWS.ElastiCache.GlobalReplicationGroup.GlobalReplicationGroupMember[];

      RegionalConfigurations?: AWS.ElastiCache.GlobalReplicationGroup.RegionalConfiguration[];
    };

    export namespace GlobalReplicationGroup {
      export type RegionalConfiguration = {
        ReplicationGroupId?: string;

        ReplicationGroupRegion?: string;

        ReshardingConfigurations?: AWS.ElastiCache.GlobalReplicationGroup.ReshardingConfiguration[];
      };

      export type ReshardingConfiguration = {
        NodeGroupId?: string;

        PreferredAvailabilityZones?: string[];
      };

      export type GlobalReplicationGroupMember = {
        ReplicationGroupId?: string;

        ReplicationGroupRegion?: string;

        Role?: string;
      };
    }

    export type UserGroup = {
      UserGroupId: string;

      Engine: string;

      UserIds?: string[];
    };

    export type SubnetGroup = {
      CacheSubnetGroupName?: string;

      Description: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type ParameterGroup = {
      CacheParameterGroupFamily: string;

      Description: string;

      Properties?: Record<string, string>;

      Tags?: Tag[];
    };

    export type User = {
      UserId: string;

      UserName: string;

      Engine: string;

      AccessString?: string;

      NoPasswordRequired?: boolean;

      Passwords?: string[];
    };

    export type SecurityGroup = {
      Description: string;

      Tags?: Tag[];
    };

    export type SecurityGroupIngress = {
      CacheSecurityGroupName: string;

      EC2SecurityGroupName: string;

      EC2SecurityGroupOwnerId?: string;
    };
  }

  export namespace AppFlow {
    export type Flow = {
      FlowName: string;

      Description?: string;

      KMSArn?: string;

      TriggerConfig: AWS.AppFlow.Flow.TriggerConfig;

      SourceFlowConfig: AWS.AppFlow.Flow.SourceFlowConfig;

      DestinationFlowConfigList: AWS.AppFlow.Flow.DestinationFlowConfig[];

      Tasks: AWS.AppFlow.Flow.Task[];

      Tags?: Tag[];
    };

    export namespace Flow {
      export type IncrementalPullConfig = {
        DatetimeTypeFieldName?: string;
      };

      export type PrefixConfig = {
        PrefixType?: string;

        PrefixFormat?: string;
      };

      export type S3OutputFormatConfig = {
        FileType?: string;

        PrefixConfig?: AWS.AppFlow.Flow.PrefixConfig;

        AggregationConfig?: AWS.AppFlow.Flow.AggregationConfig;
      };

      export type DestinationFlowConfig = {
        ConnectorType: string;

        ConnectorProfileName?: string;

        DestinationConnectorProperties: AWS.AppFlow.Flow.DestinationConnectorProperties;
      };

      export type DatadogSourceProperties = {
        Object: string;
      };

      export type AggregationConfig = {
        AggregationType?: string;
      };

      export type ScheduledTriggerProperties = {
        ScheduleExpression: string;

        DataPullMode?: string;

        ScheduleStartTime?: number;

        ScheduleEndTime?: number;

        TimeZone?: string;
      };

      export type DestinationConnectorProperties = {
        Redshift?: AWS.AppFlow.Flow.RedshiftDestinationProperties;

        S3?: AWS.AppFlow.Flow.S3DestinationProperties;

        Salesforce?: AWS.AppFlow.Flow.SalesforceDestinationProperties;

        Snowflake?: AWS.AppFlow.Flow.SnowflakeDestinationProperties;

        EventBridge?: AWS.AppFlow.Flow.EventBridgeDestinationProperties;

        Upsolver?: AWS.AppFlow.Flow.UpsolverDestinationProperties;

        LookoutMetrics?: AWS.AppFlow.Flow.LookoutMetricsDestinationProperties;

        Zendesk?: AWS.AppFlow.Flow.ZendeskDestinationProperties;
      };

      export type ConnectorOperator = {
        Amplitude?: string;

        Datadog?: string;

        Dynatrace?: string;

        GoogleAnalytics?: string;

        InforNexus?: string;

        Marketo?: string;

        S3?: string;

        Salesforce?: string;

        ServiceNow?: string;

        Singular?: string;

        Slack?: string;

        Trendmicro?: string;

        Veeva?: string;

        Zendesk?: string;
      };

      export type ZendeskSourceProperties = {
        Object: string;
      };

      export type SalesforceDestinationProperties = {
        Object: string;

        ErrorHandlingConfig?: AWS.AppFlow.Flow.ErrorHandlingConfig;

        IdFieldNames?: string[];

        WriteOperationType?: string;
      };

      export type ErrorHandlingConfig = {
        FailOnFirstError?: boolean;

        BucketPrefix?: string;

        BucketName?: string;
      };

      export type S3SourceProperties = {
        BucketName: string;

        BucketPrefix: string;
      };

      export type SalesforceSourceProperties = {
        Object: string;

        EnableDynamicFieldUpdate?: boolean;

        IncludeDeletedRecords?: boolean;
      };

      export type SingularSourceProperties = {
        Object: string;
      };

      export type EventBridgeDestinationProperties = {
        Object: string;

        ErrorHandlingConfig?: AWS.AppFlow.Flow.ErrorHandlingConfig;
      };

      export type MarketoSourceProperties = {
        Object: string;
      };

      export type SlackSourceProperties = {
        Object: string;
      };

      export type RedshiftDestinationProperties = {
        Object: string;

        IntermediateBucketName: string;

        BucketPrefix?: string;

        ErrorHandlingConfig?: AWS.AppFlow.Flow.ErrorHandlingConfig;
      };

      export type LookoutMetricsDestinationProperties = {
        Object?: string;
      };

      export type SourceFlowConfig = {
        ConnectorType: string;

        ConnectorProfileName?: string;

        SourceConnectorProperties: AWS.AppFlow.Flow.SourceConnectorProperties;

        IncrementalPullConfig?: AWS.AppFlow.Flow.IncrementalPullConfig;
      };

      export type UpsolverS3OutputFormatConfig = {
        FileType?: string;

        PrefixConfig: AWS.AppFlow.Flow.PrefixConfig;

        AggregationConfig?: AWS.AppFlow.Flow.AggregationConfig;
      };

      export type UpsolverDestinationProperties = {
        BucketName: string;

        BucketPrefix?: string;

        S3OutputFormatConfig: AWS.AppFlow.Flow.UpsolverS3OutputFormatConfig;
      };

      export type ServiceNowSourceProperties = {
        Object: string;
      };

      export type ZendeskDestinationProperties = {
        Object: string;

        ErrorHandlingConfig?: AWS.AppFlow.Flow.ErrorHandlingConfig;

        IdFieldNames?: string[];

        WriteOperationType?: string;
      };

      export type InforNexusSourceProperties = {
        Object: string;
      };

      export type S3DestinationProperties = {
        BucketName: string;

        BucketPrefix?: string;

        S3OutputFormatConfig?: AWS.AppFlow.Flow.S3OutputFormatConfig;
      };

      export type SourceConnectorProperties = {
        Amplitude?: AWS.AppFlow.Flow.AmplitudeSourceProperties;

        Datadog?: AWS.AppFlow.Flow.DatadogSourceProperties;

        Dynatrace?: AWS.AppFlow.Flow.DynatraceSourceProperties;

        GoogleAnalytics?: AWS.AppFlow.Flow.GoogleAnalyticsSourceProperties;

        InforNexus?: AWS.AppFlow.Flow.InforNexusSourceProperties;

        Marketo?: AWS.AppFlow.Flow.MarketoSourceProperties;

        S3?: AWS.AppFlow.Flow.S3SourceProperties;

        Salesforce?: AWS.AppFlow.Flow.SalesforceSourceProperties;

        ServiceNow?: AWS.AppFlow.Flow.ServiceNowSourceProperties;

        Singular?: AWS.AppFlow.Flow.SingularSourceProperties;

        Slack?: AWS.AppFlow.Flow.SlackSourceProperties;

        Trendmicro?: AWS.AppFlow.Flow.TrendmicroSourceProperties;

        Veeva?: AWS.AppFlow.Flow.VeevaSourceProperties;

        Zendesk?: AWS.AppFlow.Flow.ZendeskSourceProperties;
      };

      export type TrendmicroSourceProperties = {
        Object: string;
      };

      export type SnowflakeDestinationProperties = {
        Object: string;

        IntermediateBucketName: string;

        BucketPrefix?: string;

        ErrorHandlingConfig?: AWS.AppFlow.Flow.ErrorHandlingConfig;
      };

      export type GoogleAnalyticsSourceProperties = {
        Object: string;
      };

      export type VeevaSourceProperties = {
        Object: string;
      };

      export type DynatraceSourceProperties = {
        Object: string;
      };

      export type Task = {
        SourceFields: string[];

        ConnectorOperator?: AWS.AppFlow.Flow.ConnectorOperator;

        DestinationField?: string;

        TaskType: string;

        TaskProperties?: AWS.AppFlow.Flow.TaskPropertiesObject[];
      };

      export type TaskPropertiesObject = {
        Key: string;

        Value: string;
      };

      export type TriggerConfig = {
        TriggerType: string;

        TriggerProperties?: AWS.AppFlow.Flow.ScheduledTriggerProperties;
      };

      export type AmplitudeSourceProperties = {
        Object: string;
      };
    }

    export type ConnectorProfile = {
      ConnectorProfileName: string;

      KMSArn?: string;

      ConnectorType: string;

      ConnectionMode: string;

      ConnectorProfileConfig?: AWS.AppFlow.ConnectorProfile.ConnectorProfileConfig;
    };

    export namespace ConnectorProfile {
      export type InforNexusConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type DynatraceConnectorProfileCredentials = {
        ApiToken: string;
      };

      export type MarketoConnectorProfileCredentials = {
        ClientId: string;

        ClientSecret: string;

        AccessToken?: string;

        ConnectorOAuthRequest?: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
      };

      export type RedshiftConnectorProfileCredentials = {
        Username: string;

        Password: string;
      };

      export type ZendeskConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type GoogleAnalyticsConnectorProfileCredentials = {
        ClientId: string;

        ClientSecret: string;

        AccessToken?: string;

        RefreshToken?: string;

        ConnectorOAuthRequest?: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
      };

      export type DynatraceConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type SalesforceConnectorProfileCredentials = {
        AccessToken?: string;

        RefreshToken?: string;

        ConnectorOAuthRequest?: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;

        ClientCredentialsArn?: string;
      };

      export type RedshiftConnectorProfileProperties = {
        DatabaseUrl: string;

        BucketName: string;

        BucketPrefix?: string;

        RoleArn: string;
      };

      export type ConnectorProfileCredentials = {
        Amplitude?: AWS.AppFlow.ConnectorProfile.AmplitudeConnectorProfileCredentials;

        Datadog?: AWS.AppFlow.ConnectorProfile.DatadogConnectorProfileCredentials;

        Dynatrace?: AWS.AppFlow.ConnectorProfile.DynatraceConnectorProfileCredentials;

        GoogleAnalytics?: AWS.AppFlow.ConnectorProfile.GoogleAnalyticsConnectorProfileCredentials;

        InforNexus?: AWS.AppFlow.ConnectorProfile.InforNexusConnectorProfileCredentials;

        Marketo?: AWS.AppFlow.ConnectorProfile.MarketoConnectorProfileCredentials;

        Redshift?: AWS.AppFlow.ConnectorProfile.RedshiftConnectorProfileCredentials;

        Salesforce?: AWS.AppFlow.ConnectorProfile.SalesforceConnectorProfileCredentials;

        ServiceNow?: AWS.AppFlow.ConnectorProfile.ServiceNowConnectorProfileCredentials;

        Singular?: AWS.AppFlow.ConnectorProfile.SingularConnectorProfileCredentials;

        Slack?: AWS.AppFlow.ConnectorProfile.SlackConnectorProfileCredentials;

        Snowflake?: AWS.AppFlow.ConnectorProfile.SnowflakeConnectorProfileCredentials;

        Trendmicro?: AWS.AppFlow.ConnectorProfile.TrendmicroConnectorProfileCredentials;

        Veeva?: AWS.AppFlow.ConnectorProfile.VeevaConnectorProfileCredentials;

        Zendesk?: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileCredentials;
      };

      export type SingularConnectorProfileCredentials = {
        ApiKey: string;
      };

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

        AccessToken?: string;

        ConnectorOAuthRequest?: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
      };

      export type SnowflakeConnectorProfileProperties = {
        Warehouse: string;

        Stage: string;

        BucketName: string;

        BucketPrefix?: string;

        PrivateLinkServiceName?: string;

        AccountName?: string;

        Region?: string;
      };

      export type SalesforceConnectorProfileProperties = {
        InstanceUrl?: string;

        isSandboxEnvironment?: boolean;
      };

      export type ConnectorProfileConfig = {
        ConnectorProfileProperties?: AWS.AppFlow.ConnectorProfile.ConnectorProfileProperties;

        ConnectorProfileCredentials: AWS.AppFlow.ConnectorProfile.ConnectorProfileCredentials;
      };

      export type AmplitudeConnectorProfileCredentials = {
        ApiKey: string;

        SecretKey: string;
      };

      export type ConnectorOAuthRequest = {
        AuthCode?: string;

        RedirectUri?: string;
      };

      export type DatadogConnectorProfileCredentials = {
        ApiKey: string;

        ApplicationKey: string;
      };

      export type SlackConnectorProfileCredentials = {
        ClientId: string;

        ClientSecret: string;

        AccessToken?: string;

        ConnectorOAuthRequest?: AWS.AppFlow.ConnectorProfile.ConnectorOAuthRequest;
      };

      export type TrendmicroConnectorProfileCredentials = {
        ApiSecretKey: string;
      };

      export type VeevaConnectorProfileCredentials = {
        Username: string;

        Password: string;
      };

      export type VeevaConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type SlackConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type MarketoConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type InforNexusConnectorProfileCredentials = {
        AccessKeyId: string;

        UserId: string;

        SecretAccessKey: string;

        Datakey: string;
      };

      export type DatadogConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type ServiceNowConnectorProfileProperties = {
        InstanceUrl: string;
      };

      export type ConnectorProfileProperties = {
        Datadog?: AWS.AppFlow.ConnectorProfile.DatadogConnectorProfileProperties;

        Dynatrace?: AWS.AppFlow.ConnectorProfile.DynatraceConnectorProfileProperties;

        InforNexus?: AWS.AppFlow.ConnectorProfile.InforNexusConnectorProfileProperties;

        Marketo?: AWS.AppFlow.ConnectorProfile.MarketoConnectorProfileProperties;

        Redshift?: AWS.AppFlow.ConnectorProfile.RedshiftConnectorProfileProperties;

        Salesforce?: AWS.AppFlow.ConnectorProfile.SalesforceConnectorProfileProperties;

        ServiceNow?: AWS.AppFlow.ConnectorProfile.ServiceNowConnectorProfileProperties;

        Slack?: AWS.AppFlow.ConnectorProfile.SlackConnectorProfileProperties;

        Snowflake?: AWS.AppFlow.ConnectorProfile.SnowflakeConnectorProfileProperties;

        Veeva?: AWS.AppFlow.ConnectorProfile.VeevaConnectorProfileProperties;

        Zendesk?: AWS.AppFlow.ConnectorProfile.ZendeskConnectorProfileProperties;
      };
    }
  }

  export namespace LookoutMetrics {
    export type AnomalyDetector = {
      AnomalyDetectorName?: string;

      AnomalyDetectorDescription?: string;

      AnomalyDetectorConfig: JSONString;

      MetricSetList: AWS.LookoutMetrics.AnomalyDetector.MetricSet[];

      KmsKeyArn?: string;
    };

    export namespace AnomalyDetector {
      export type FileFormatDescriptor = {
        CsvFormatDescriptor?: AWS.LookoutMetrics.AnomalyDetector.CsvFormatDescriptor;

        JsonFormatDescriptor?: AWS.LookoutMetrics.AnomalyDetector.JsonFormatDescriptor;
      };

      export type CsvFormatDescriptor = {
        FileCompression?: string;

        Charset?: string;

        Delimiter?: string;

        HeaderList?: string[];

        QuoteSymbol?: string;

        ContainsHeader?: boolean;
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
        ColumnName?: string;

        ColumnFormat?: string;
      };

      export type JsonFormatDescriptor = {
        FileCompression?: string;

        Charset?: string;
      };

      export type AppFlowConfig = {
        RoleArn: string;

        FlowName: string;
      };

      export type MetricSource = {
        S3SourceConfig?: AWS.LookoutMetrics.AnomalyDetector.S3SourceConfig;

        RDSSourceConfig?: AWS.LookoutMetrics.AnomalyDetector.RDSSourceConfig;

        RedshiftSourceConfig?: AWS.LookoutMetrics.AnomalyDetector.RedshiftSourceConfig;

        CloudwatchConfig?: AWS.LookoutMetrics.AnomalyDetector.CloudwatchConfig;

        AppFlowConfig?: AWS.LookoutMetrics.AnomalyDetector.AppFlowConfig;
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

        Namespace?: string;
      };

      export type MetricSet = {
        MetricSetName: string;

        MetricSetDescription?: string;

        MetricSource: AWS.LookoutMetrics.AnomalyDetector.MetricSource;

        MetricList: AWS.LookoutMetrics.AnomalyDetector.Metric[];

        Offset?: number;

        TimestampColumn?: AWS.LookoutMetrics.AnomalyDetector.TimestampColumn;

        DimensionList?: string[];

        MetricSetFrequency?: string;

        Timezone?: string;
      };

      export type CloudwatchConfig = {
        RoleArn: string;
      };

      export type S3SourceConfig = {
        RoleArn: string;

        TemplatedPathList?: string[];

        HistoricalDataPathList?: string[];

        FileFormatDescriptor: AWS.LookoutMetrics.AnomalyDetector.FileFormatDescriptor;
      };
    }

    export type Alert = {
      AlertName?: string;

      AlertDescription?: string;

      AnomalyDetectorArn: string;

      AlertSensitivityThreshold: number;

      Action: JSONString;
    };
  }

  export namespace Greengrass {
    export type CoreDefinition = {
      InitialVersion?: AWS.Greengrass.CoreDefinition.CoreDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace CoreDefinition {
      export type Core = {
        SyncShadow?: boolean;

        ThingArn: string;

        Id: string;

        CertificateArn: string;
      };

      export type CoreDefinitionVersion = {
        Cores: AWS.Greengrass.CoreDefinition.Core[];
      };
    }

    export type FunctionDefinitionVersion = {
      DefaultConfig?: AWS.Greengrass.FunctionDefinitionVersion.DefaultConfig;

      Functions: AWS.Greengrass.FunctionDefinitionVersion.Function[];

      FunctionDefinitionId: string;
    };

    export namespace FunctionDefinitionVersion {
      export type FunctionConfiguration = {
        MemorySize?: number;

        Pinned?: boolean;

        ExecArgs?: string;

        Timeout?: number;

        EncodingType?: string;

        Environment?: AWS.Greengrass.FunctionDefinitionVersion.Environment;

        Executable?: string;
      };

      export type Execution = {
        IsolationMode?: string;

        RunAs?: AWS.Greengrass.FunctionDefinitionVersion.RunAs;
      };

      export type DefaultConfig = {
        Execution: AWS.Greengrass.FunctionDefinitionVersion.Execution;
      };

      export type Function = {
        FunctionArn: string;

        FunctionConfiguration: AWS.Greengrass.FunctionDefinitionVersion.FunctionConfiguration;

        Id: string;
      };

      export type RunAs = {
        Uid?: number;

        Gid?: number;
      };

      export type Environment = {
        Variables?: JSONString;

        Execution?: AWS.Greengrass.FunctionDefinitionVersion.Execution;

        ResourceAccessPolicies?: AWS.Greengrass.FunctionDefinitionVersion.ResourceAccessPolicy[];

        AccessSysfs?: boolean;
      };

      export type ResourceAccessPolicy = {
        ResourceId: string;

        Permission?: string;
      };
    }

    export type ResourceDefinitionVersion = {
      Resources: AWS.Greengrass.ResourceDefinitionVersion.ResourceInstance[];

      ResourceDefinitionId: string;
    };

    export namespace ResourceDefinitionVersion {
      export type ResourceInstance = {
        ResourceDataContainer: AWS.Greengrass.ResourceDefinitionVersion.ResourceDataContainer;

        Id: string;

        Name: string;
      };

      export type LocalDeviceResourceData = {
        SourcePath: string;

        GroupOwnerSetting?: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting;
      };

      export type LocalVolumeResourceData = {
        SourcePath: string;

        DestinationPath: string;

        GroupOwnerSetting?: AWS.Greengrass.ResourceDefinitionVersion.GroupOwnerSetting;
      };

      export type SecretsManagerSecretResourceData = {
        ARN: string;

        AdditionalStagingLabelsToDownload?: string[];
      };

      export type SageMakerMachineLearningModelResourceData = {
        OwnerSetting?: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

        DestinationPath: string;

        SageMakerJobArn: string;
      };

      export type ResourceDownloadOwnerSetting = {
        GroupOwner: string;

        GroupPermission: string;
      };

      export type S3MachineLearningModelResourceData = {
        OwnerSetting?: AWS.Greengrass.ResourceDefinitionVersion.ResourceDownloadOwnerSetting;

        DestinationPath: string;

        S3Uri: string;
      };

      export type ResourceDataContainer = {
        SecretsManagerSecretResourceData?: AWS.Greengrass.ResourceDefinitionVersion.SecretsManagerSecretResourceData;

        SageMakerMachineLearningModelResourceData?: AWS.Greengrass.ResourceDefinitionVersion.SageMakerMachineLearningModelResourceData;

        LocalVolumeResourceData?: AWS.Greengrass.ResourceDefinitionVersion.LocalVolumeResourceData;

        LocalDeviceResourceData?: AWS.Greengrass.ResourceDefinitionVersion.LocalDeviceResourceData;

        S3MachineLearningModelResourceData?: AWS.Greengrass.ResourceDefinitionVersion.S3MachineLearningModelResourceData;
      };

      export type GroupOwnerSetting = {
        AutoAddGroupOwner: boolean;

        GroupOwner?: string;
      };
    }

    export type FunctionDefinition = {
      InitialVersion?: AWS.Greengrass.FunctionDefinition.FunctionDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace FunctionDefinition {
      export type FunctionConfiguration = {
        MemorySize?: number;

        Pinned?: boolean;

        ExecArgs?: string;

        Timeout?: number;

        EncodingType?: string;

        Environment?: AWS.Greengrass.FunctionDefinition.Environment;

        Executable?: string;
      };

      export type DefaultConfig = {
        Execution: AWS.Greengrass.FunctionDefinition.Execution;
      };

      export type Execution = {
        IsolationMode?: string;

        RunAs?: AWS.Greengrass.FunctionDefinition.RunAs;
      };

      export type Environment = {
        Variables?: JSONString;

        Execution?: AWS.Greengrass.FunctionDefinition.Execution;

        ResourceAccessPolicies?: AWS.Greengrass.FunctionDefinition.ResourceAccessPolicy[];

        AccessSysfs?: boolean;
      };

      export type FunctionDefinitionVersion = {
        DefaultConfig?: AWS.Greengrass.FunctionDefinition.DefaultConfig;

        Functions: AWS.Greengrass.FunctionDefinition.Function[];
      };

      export type RunAs = {
        Uid?: number;

        Gid?: number;
      };

      export type Function = {
        FunctionArn: string;

        FunctionConfiguration: AWS.Greengrass.FunctionDefinition.FunctionConfiguration;

        Id: string;
      };

      export type ResourceAccessPolicy = {
        ResourceId: string;

        Permission?: string;
      };
    }

    export type LoggerDefinitionVersion = {
      LoggerDefinitionId: string;

      Loggers: AWS.Greengrass.LoggerDefinitionVersion.Logger[];
    };

    export namespace LoggerDefinitionVersion {
      export type Logger = {
        Space?: number;

        Type: string;

        Level: string;

        Id: string;

        Component: string;
      };
    }

    export type ResourceDefinition = {
      InitialVersion?: AWS.Greengrass.ResourceDefinition.ResourceDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace ResourceDefinition {
      export type S3MachineLearningModelResourceData = {
        OwnerSetting?: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

        DestinationPath: string;

        S3Uri: string;
      };

      export type SecretsManagerSecretResourceData = {
        ARN: string;

        AdditionalStagingLabelsToDownload?: string[];
      };

      export type ResourceDownloadOwnerSetting = {
        GroupOwner: string;

        GroupPermission: string;
      };

      export type SageMakerMachineLearningModelResourceData = {
        OwnerSetting?: AWS.Greengrass.ResourceDefinition.ResourceDownloadOwnerSetting;

        DestinationPath: string;

        SageMakerJobArn: string;
      };

      export type GroupOwnerSetting = {
        AutoAddGroupOwner: boolean;

        GroupOwner?: string;
      };

      export type LocalDeviceResourceData = {
        SourcePath: string;

        GroupOwnerSetting?: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting;
      };

      export type ResourceDefinitionVersion = {
        Resources: AWS.Greengrass.ResourceDefinition.ResourceInstance[];
      };

      export type LocalVolumeResourceData = {
        SourcePath: string;

        DestinationPath: string;

        GroupOwnerSetting?: AWS.Greengrass.ResourceDefinition.GroupOwnerSetting;
      };

      export type ResourceInstance = {
        ResourceDataContainer: AWS.Greengrass.ResourceDefinition.ResourceDataContainer;

        Id: string;

        Name: string;
      };

      export type ResourceDataContainer = {
        SecretsManagerSecretResourceData?: AWS.Greengrass.ResourceDefinition.SecretsManagerSecretResourceData;

        SageMakerMachineLearningModelResourceData?: AWS.Greengrass.ResourceDefinition.SageMakerMachineLearningModelResourceData;

        LocalVolumeResourceData?: AWS.Greengrass.ResourceDefinition.LocalVolumeResourceData;

        LocalDeviceResourceData?: AWS.Greengrass.ResourceDefinition.LocalDeviceResourceData;

        S3MachineLearningModelResourceData?: AWS.Greengrass.ResourceDefinition.S3MachineLearningModelResourceData;
      };
    }

    export type SubscriptionDefinition = {
      InitialVersion?: AWS.Greengrass.SubscriptionDefinition.SubscriptionDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace SubscriptionDefinition {
      export type SubscriptionDefinitionVersion = {
        Subscriptions: AWS.Greengrass.SubscriptionDefinition.Subscription[];
      };

      export type Subscription = {
        Target: string;

        Id: string;

        Source: string;

        Subject: string;
      };
    }

    export type ConnectorDefinition = {
      InitialVersion?: AWS.Greengrass.ConnectorDefinition.ConnectorDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace ConnectorDefinition {
      export type ConnectorDefinitionVersion = {
        Connectors: AWS.Greengrass.ConnectorDefinition.Connector[];
      };

      export type Connector = {
        ConnectorArn: string;

        Parameters?: JSONString;

        Id: string;
      };
    }

    export type LoggerDefinition = {
      InitialVersion?: AWS.Greengrass.LoggerDefinition.LoggerDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace LoggerDefinition {
      export type Logger = {
        Space?: number;

        Type: string;

        Level: string;

        Id: string;

        Component: string;
      };

      export type LoggerDefinitionVersion = {
        Loggers: AWS.Greengrass.LoggerDefinition.Logger[];
      };
    }

    export type SubscriptionDefinitionVersion = {
      SubscriptionDefinitionId: string;

      Subscriptions: AWS.Greengrass.SubscriptionDefinitionVersion.Subscription[];
    };

    export namespace SubscriptionDefinitionVersion {
      export type Subscription = {
        Target: string;

        Id: string;

        Source: string;

        Subject: string;
      };
    }

    export type CoreDefinitionVersion = {
      Cores: AWS.Greengrass.CoreDefinitionVersion.Core[];

      CoreDefinitionId: string;
    };

    export namespace CoreDefinitionVersion {
      export type Core = {
        SyncShadow?: boolean;

        ThingArn: string;

        Id: string;

        CertificateArn: string;
      };
    }

    export type DeviceDefinitionVersion = {
      DeviceDefinitionId: string;

      Devices: AWS.Greengrass.DeviceDefinitionVersion.Device[];
    };

    export namespace DeviceDefinitionVersion {
      export type Device = {
        SyncShadow?: boolean;

        ThingArn: string;

        Id: string;

        CertificateArn: string;
      };
    }

    export type Group = {
      InitialVersion?: AWS.Greengrass.Group.GroupVersion;

      RoleArn?: string;

      Tags?: JSONString;

      Name: string;
    };

    export namespace Group {
      export type GroupVersion = {
        LoggerDefinitionVersionArn?: string;

        DeviceDefinitionVersionArn?: string;

        FunctionDefinitionVersionArn?: string;

        CoreDefinitionVersionArn?: string;

        ResourceDefinitionVersionArn?: string;

        ConnectorDefinitionVersionArn?: string;

        SubscriptionDefinitionVersionArn?: string;
      };
    }

    export type DeviceDefinition = {
      InitialVersion?: AWS.Greengrass.DeviceDefinition.DeviceDefinitionVersion;

      Tags?: JSONString;

      Name: string;
    };

    export namespace DeviceDefinition {
      export type Device = {
        SyncShadow?: boolean;

        ThingArn: string;

        Id: string;

        CertificateArn: string;
      };

      export type DeviceDefinitionVersion = {
        Devices: AWS.Greengrass.DeviceDefinition.Device[];
      };
    }

    export type ConnectorDefinitionVersion = {
      Connectors: AWS.Greengrass.ConnectorDefinitionVersion.Connector[];

      ConnectorDefinitionId: string;
    };

    export namespace ConnectorDefinitionVersion {
      export type Connector = {
        ConnectorArn: string;

        Parameters?: JSONString;

        Id: string;
      };
    }

    export type GroupVersion = {
      LoggerDefinitionVersionArn?: string;

      DeviceDefinitionVersionArn?: string;

      FunctionDefinitionVersionArn?: string;

      CoreDefinitionVersionArn?: string;

      ResourceDefinitionVersionArn?: string;

      ConnectorDefinitionVersionArn?: string;

      SubscriptionDefinitionVersionArn?: string;

      GroupId: string;
    };
  }

  export namespace Glue {
    export type MLTransform = {
      MaxRetries?: number;

      Description?: string;

      TransformEncryption?: AWS.Glue.MLTransform.TransformEncryption;

      Timeout?: number;

      Name?: string;

      Role: string;

      WorkerType?: string;

      GlueVersion?: string;

      TransformParameters: AWS.Glue.MLTransform.TransformParameters;

      InputRecordTables: AWS.Glue.MLTransform.InputRecordTables;

      NumberOfWorkers?: number;

      Tags?: JSONString;

      MaxCapacity?: number;
    };

    export namespace MLTransform {
      export type FindMatchesParameters = {
        PrecisionRecallTradeoff?: number;

        EnforceProvidedLabels?: boolean;

        PrimaryKeyColumnName: string;

        AccuracyCostTradeoff?: number;
      };

      export type MLUserDataEncryption = {
        MLUserDataEncryptionMode: string;

        KmsKeyId?: string;
      };

      export type InputRecordTables = {
        GlueTables?: AWS.Glue.MLTransform.GlueTables[];
      };

      export type GlueTables = {
        ConnectionName?: string;

        TableName: string;

        DatabaseName: string;

        CatalogId?: string;
      };

      export type TransformEncryption = {
        MLUserDataEncryption?: AWS.Glue.MLTransform.MLUserDataEncryption;

        TaskRunSecurityConfigurationName?: string;
      };

      export type TransformParameters = {
        TransformType: string;

        FindMatchesParameters?: AWS.Glue.MLTransform.FindMatchesParameters;
      };
    }

    export type Database = {
      DatabaseInput: AWS.Glue.Database.DatabaseInput;

      CatalogId: string;
    };

    export namespace Database {
      export type DatabaseInput = {
        LocationUri?: string;

        Description?: string;

        Parameters?: JSONString;

        TargetDatabase?: AWS.Glue.Database.DatabaseIdentifier;

        Name?: string;
      };

      export type DatabaseIdentifier = {
        DatabaseName?: string;

        CatalogId?: string;
      };
    }

    export type Job = {
      Connections?: AWS.Glue.Job.ConnectionsList;

      MaxRetries?: number;

      Description?: string;

      Timeout?: number;

      AllocatedCapacity?: number;

      Name?: string;

      Role: string;

      DefaultArguments?: JSONString;

      NotificationProperty?: AWS.Glue.Job.NotificationProperty;

      WorkerType?: string;

      LogUri?: string;

      Command: AWS.Glue.Job.JobCommand;

      GlueVersion?: string;

      ExecutionProperty?: AWS.Glue.Job.ExecutionProperty;

      SecurityConfiguration?: string;

      NumberOfWorkers?: number;

      Tags?: JSONString;

      MaxCapacity?: number;
    };

    export namespace Job {
      export type JobCommand = {
        PythonVersion?: string;

        ScriptLocation?: string;

        Name?: string;
      };

      export type ConnectionsList = {
        Connections?: string[];
      };

      export type NotificationProperty = {
        NotifyDelayAfter?: number;
      };

      export type ExecutionProperty = {
        MaxConcurrentRuns?: number;
      };
    }

    export type Crawler = {
      Role: string;

      Classifiers?: string[];

      Description?: string;

      SchemaChangePolicy?: AWS.Glue.Crawler.SchemaChangePolicy;

      Configuration?: string;

      Schedule?: AWS.Glue.Crawler.Schedule;

      DatabaseName?: string;

      Targets: AWS.Glue.Crawler.Targets;

      CrawlerSecurityConfiguration?: string;

      TablePrefix?: string;

      Tags?: JSONString;

      Name?: string;
    };

    export namespace Crawler {
      export type CatalogTarget = {
        DatabaseName?: string;

        Tables?: string[];
      };

      export type Schedule = {
        ScheduleExpression?: string;
      };

      export type SchemaChangePolicy = {
        UpdateBehavior?: string;

        DeleteBehavior?: string;
      };

      export type Targets = {
        S3Targets?: AWS.Glue.Crawler.S3Target[];

        CatalogTargets?: AWS.Glue.Crawler.CatalogTarget[];

        JdbcTargets?: AWS.Glue.Crawler.JdbcTarget[];

        DynamoDBTargets?: AWS.Glue.Crawler.DynamoDBTarget[];
      };

      export type JdbcTarget = {
        ConnectionName?: string;

        Path?: string;

        Exclusions?: string[];
      };

      export type DynamoDBTarget = {
        Path?: string;
      };

      export type S3Target = {
        ConnectionName?: string;

        Path?: string;

        Exclusions?: string[];
      };
    }

    export type Connection = {
      ConnectionInput: AWS.Glue.Connection.ConnectionInput;

      CatalogId: string;
    };

    export namespace Connection {
      export type ConnectionInput = {
        Description?: string;

        ConnectionType: string;

        MatchCriteria?: string[];

        PhysicalConnectionRequirements?: AWS.Glue.Connection.PhysicalConnectionRequirements;

        ConnectionProperties?: JSONString;

        Name?: string;
      };

      export type PhysicalConnectionRequirements = {
        AvailabilityZone?: string;

        SecurityGroupIdList?: string[];

        SubnetId?: string;
      };
    }

    export type SchemaVersion = {
      Schema: AWS.Glue.SchemaVersion.Schema;

      SchemaDefinition: string;
    };

    export namespace SchemaVersion {
      export type Schema = {
        SchemaArn?: string;

        SchemaName?: string;

        RegistryName?: string;
      };
    }

    export type Schema = {
      Registry?: AWS.Glue.Schema.Registry;

      Name: string;

      Description?: string;

      DataFormat: string;

      Compatibility: string;

      SchemaDefinition: string;

      CheckpointVersion?: AWS.Glue.Schema.SchemaVersion;

      Tags?: Tag[];
    };

    export namespace Schema {
      export type SchemaVersion = {
        IsLatest?: boolean;

        VersionNumber?: number;
      };

      export type Registry = {
        Name?: string;

        Arn?: string;
      };
    }

    export type DataCatalogEncryptionSettings = {
      DataCatalogEncryptionSettings: AWS.Glue.DataCatalogEncryptionSettings.DataCatalogEncryptionSettings;

      CatalogId: string;
    };

    export namespace DataCatalogEncryptionSettings {
      export type DataCatalogEncryptionSettings = {
        ConnectionPasswordEncryption?: AWS.Glue.DataCatalogEncryptionSettings.ConnectionPasswordEncryption;

        EncryptionAtRest?: AWS.Glue.DataCatalogEncryptionSettings.EncryptionAtRest;
      };

      export type EncryptionAtRest = {
        CatalogEncryptionMode?: string;

        SseAwsKmsKeyId?: string;
      };

      export type ConnectionPasswordEncryption = {
        ReturnConnectionPasswordEncrypted?: boolean;

        KmsKeyId?: string;
      };
    }

    export type Trigger = {
      Type: string;

      StartOnCreation?: boolean;

      Description?: string;

      Actions: AWS.Glue.Trigger.Action[];

      WorkflowName?: string;

      Schedule?: string;

      Tags?: JSONString;

      Name?: string;

      Predicate?: AWS.Glue.Trigger.Predicate;
    };

    export namespace Trigger {
      export type Condition = {
        CrawlerName?: string;

        State?: string;

        CrawlState?: string;

        LogicalOperator?: string;

        JobName?: string;
      };

      export type Predicate = {
        Logical?: string;

        Conditions?: AWS.Glue.Trigger.Condition[];
      };

      export type Action = {
        NotificationProperty?: AWS.Glue.Trigger.NotificationProperty;

        CrawlerName?: string;

        Timeout?: number;

        JobName?: string;

        Arguments?: JSONString;

        SecurityConfiguration?: string;
      };

      export type NotificationProperty = {
        NotifyDelayAfter?: number;
      };
    }

    export type Partition = {
      TableName: string;

      DatabaseName: string;

      CatalogId: string;

      PartitionInput: AWS.Glue.Partition.PartitionInput;
    };

    export namespace Partition {
      export type PartitionInput = {
        Parameters?: JSONString;

        StorageDescriptor?: AWS.Glue.Partition.StorageDescriptor;

        Values: string[];
      };

      export type Order = {
        Column: string;

        SortOrder?: number;
      };

      export type SchemaReference = {
        SchemaId?: AWS.Glue.Partition.SchemaId;

        SchemaVersionNumber?: number;

        SchameVersionId?: string;
      };

      export type SerdeInfo = {
        Parameters?: JSONString;

        SerializationLibrary?: string;

        Name?: string;
      };

      export type Column = {
        Comment?: string;

        Type?: string;

        Name: string;
      };

      export type StorageDescriptor = {
        StoredAsSubDirectories?: boolean;

        Parameters?: JSONString;

        BucketColumns?: string[];

        NumberOfBuckets?: number;

        OutputFormat?: string;

        Columns?: AWS.Glue.Partition.Column[];

        SerdeInfo?: AWS.Glue.Partition.SerdeInfo;

        SortColumns?: AWS.Glue.Partition.Order[];

        Compressed?: boolean;

        SchemaReference?: AWS.Glue.Partition.SchemaReference;

        SkewedInfo?: AWS.Glue.Partition.SkewedInfo;

        InputFormat?: string;

        Location?: string;
      };

      export type SkewedInfo = {
        SkewedColumnNames?: string[];

        SkewedColumnValues?: string[];

        SkewedColumnValueLocationMaps?: JSONString;
      };

      export type SchemaId = {
        RegistryName?: string;

        SchemaName?: string;

        SchemaArn?: string;
      };
    }

    export type Table = {
      TableInput: AWS.Glue.Table.TableInput;

      DatabaseName: string;

      CatalogId: string;
    };

    export namespace Table {
      export type Column = {
        Comment?: string;

        Type?: string;

        Name: string;
      };

      export type TableInput = {
        Owner?: string;

        ViewOriginalText?: string;

        Description?: string;

        TableType?: string;

        Parameters?: JSONString;

        ViewExpandedText?: string;

        StorageDescriptor?: AWS.Glue.Table.StorageDescriptor;

        TargetTable?: AWS.Glue.Table.TableIdentifier;

        PartitionKeys?: AWS.Glue.Table.Column[];

        Retention?: number;

        Name?: string;
      };

      export type SerdeInfo = {
        Parameters?: JSONString;

        SerializationLibrary?: string;

        Name?: string;
      };

      export type SchemaId = {
        RegistryName?: string;

        SchemaName?: string;

        SchemaArn?: string;
      };

      export type Order = {
        Column: string;

        SortOrder: number;
      };

      export type SkewedInfo = {
        SkewedColumnNames?: string[];

        SkewedColumnValues?: string[];

        SkewedColumnValueLocationMaps?: JSONString;
      };

      export type StorageDescriptor = {
        StoredAsSubDirectories?: boolean;

        Parameters?: JSONString;

        BucketColumns?: string[];

        NumberOfBuckets?: number;

        OutputFormat?: string;

        Columns?: AWS.Glue.Table.Column[];

        SerdeInfo?: AWS.Glue.Table.SerdeInfo;

        SortColumns?: AWS.Glue.Table.Order[];

        Compressed?: boolean;

        SchemaReference?: AWS.Glue.Table.SchemaReference;

        SkewedInfo?: AWS.Glue.Table.SkewedInfo;

        InputFormat?: string;

        Location?: string;
      };

      export type SchemaReference = {
        SchemaId?: AWS.Glue.Table.SchemaId;

        SchemaVersionNumber?: number;

        SchameVersionId?: string;
      };

      export type TableIdentifier = {
        DatabaseName?: string;

        CatalogId?: string;

        Name?: string;
      };
    }

    export type Classifier = {
      XMLClassifier?: AWS.Glue.Classifier.XMLClassifier;

      JsonClassifier?: AWS.Glue.Classifier.JsonClassifier;

      CsvClassifier?: AWS.Glue.Classifier.CsvClassifier;

      GrokClassifier?: AWS.Glue.Classifier.GrokClassifier;
    };

    export namespace Classifier {
      export type CsvClassifier = {
        QuoteSymbol?: string;

        ContainsHeader?: string;

        Delimiter?: string;

        Header?: string[];

        AllowSingleColumn?: boolean;

        DisableValueTrimming?: boolean;

        Name?: string;
      };

      export type GrokClassifier = {
        CustomPatterns?: string;

        GrokPattern: string;

        Classification: string;

        Name?: string;
      };

      export type JsonClassifier = {
        JsonPath: string;

        Name?: string;
      };

      export type XMLClassifier = {
        RowTag: string;

        Classification: string;

        Name?: string;
      };
    }

    export type SecurityConfiguration = {
      EncryptionConfiguration: AWS.Glue.SecurityConfiguration.EncryptionConfiguration;

      Name: string;
    };

    export type SecurityConfiguration = {
      S3Encryptions?: AWS.Glue.SecurityConfiguration.S3Encryption[];
    };

    export namespace SecurityConfiguration {
      export type EncryptionConfiguration = {
        S3Encryptions?: AWS.Glue.SecurityConfiguration.S3Encryptions;

        CloudWatchEncryption?: AWS.Glue.SecurityConfiguration.CloudWatchEncryption;

        JobBookmarksEncryption?: AWS.Glue.SecurityConfiguration.JobBookmarksEncryption;
      };

      export type JobBookmarksEncryption = {
        KmsKeyArn?: string;

        JobBookmarksEncryptionMode?: string;
      };

      export type S3Encryption = {
        KmsKeyArn?: string;

        S3EncryptionMode?: string;
      };

      export type CloudWatchEncryption = {
        KmsKeyArn?: string;

        CloudWatchEncryptionMode?: string;
      };
    }

    export type DevEndpoint = {
      ExtraJarsS3Path?: string;

      PublicKey?: string;

      NumberOfNodes?: number;

      Arguments?: JSONString;

      SubnetId?: string;

      PublicKeys?: string[];

      SecurityGroupIds?: string[];

      RoleArn: string;

      WorkerType?: string;

      EndpointName?: string;

      GlueVersion?: string;

      ExtraPythonLibsS3Path?: string;

      SecurityConfiguration?: string;

      NumberOfWorkers?: number;

      Tags?: JSONString;
    };

    export type SchemaVersionMetadata = {
      SchemaVersionId: string;

      Key: string;

      Value: string;
    };

    export type Workflow = {
      Description?: string;

      DefaultRunProperties?: JSONString;

      Tags?: JSONString;

      Name?: string;
    };

    export type Registry = {
      Name: string;

      Description?: string;

      Tags?: Tag[];
    };
  }

  export namespace Athena {
    export type WorkGroup = {
      Name: string;

      Description?: string;

      Tags?: Tag[];

      WorkGroupConfiguration?: AWS.Athena.WorkGroup.WorkGroupConfiguration;

      WorkGroupConfigurationUpdates?: AWS.Athena.WorkGroup.WorkGroupConfigurationUpdates;

      State?: string;

      RecursiveDeleteOption?: boolean;
    };

    export namespace WorkGroup {
      export type WorkGroupConfigurationUpdates = {
        BytesScannedCutoffPerQuery?: number;

        EnforceWorkGroupConfiguration?: boolean;

        PublishCloudWatchMetricsEnabled?: boolean;

        RequesterPaysEnabled?: boolean;

        ResultConfigurationUpdates?: AWS.Athena.WorkGroup.ResultConfigurationUpdates;

        RemoveBytesScannedCutoffPerQuery?: boolean;

        EngineVersion?: AWS.Athena.WorkGroup.EngineVersion;
      };

      export type ResultConfiguration = {
        EncryptionConfiguration?: AWS.Athena.WorkGroup.EncryptionConfiguration;

        OutputLocation?: string;
      };

      export type ResultConfigurationUpdates = {
        EncryptionConfiguration?: AWS.Athena.WorkGroup.EncryptionConfiguration;

        OutputLocation?: string;

        RemoveEncryptionConfiguration?: boolean;

        RemoveOutputLocation?: boolean;
      };

      export type WorkGroupConfiguration = {
        BytesScannedCutoffPerQuery?: number;

        EnforceWorkGroupConfiguration?: boolean;

        PublishCloudWatchMetricsEnabled?: boolean;

        RequesterPaysEnabled?: boolean;

        ResultConfiguration?: AWS.Athena.WorkGroup.ResultConfiguration;

        EngineVersion?: AWS.Athena.WorkGroup.EngineVersion;
      };

      export type EncryptionConfiguration = {
        EncryptionOption: string;

        KmsKey?: string;
      };

      export type EngineVersion = {
        SelectedEngineVersion?: string;

        EffectiveEngineVersion?: string;
      };
    }

    export type DataCatalog = {
      Name: string;

      Description?: string;

      Parameters?: Record<string, string>;

      Tags?: Tag[];

      Type: string;
    };

    export type NamedQuery = {
      Name?: string;

      Database: string;

      Description?: string;

      QueryString: string;

      WorkGroup?: string;
    };
  }

  export namespace SageMaker {
    export type MonitoringSchedule = {
      MonitoringScheduleName: string;

      MonitoringScheduleConfig: AWS.SageMaker.MonitoringSchedule.MonitoringScheduleConfig;

      Tags?: Tag[];

      EndpointName?: string;

      FailureReason?: string;

      LastMonitoringExecutionSummary?: AWS.SageMaker.MonitoringSchedule.MonitoringExecutionSummary;

      MonitoringScheduleStatus?: string;
    };

    export type MonitoringSchedule = {
      Environment?: any;
    };

    export namespace MonitoringSchedule {
      export type ConstraintsResource = {
        S3Uri?: string;
      };

      export type MonitoringExecutionSummary = {
        CreationTime: string;

        EndpointName?: string;

        FailureReason?: string;

        LastModifiedTime: string;

        MonitoringExecutionStatus: string;

        MonitoringScheduleName: string;

        ProcessingJobArn?: string;

        ScheduledTime: string;
      };

      export type MonitoringOutputConfig = {
        KmsKeyId?: string;

        MonitoringOutputs: AWS.SageMaker.MonitoringSchedule.MonitoringOutput[];
      };

      export type StatisticsResource = {
        S3Uri?: string;
      };

      export type VpcConfig = {
        SecurityGroupIds: string[];

        Subnets: string[];
      };

      export type ClusterConfig = {
        InstanceCount: number;

        InstanceType: string;

        VolumeKmsKeyId?: string;

        VolumeSizeInGB: number;
      };

      export type MonitoringAppSpecification = {
        ContainerArguments?: string[];

        ContainerEntrypoint?: string[];

        ImageUri: string;

        PostAnalyticsProcessorSourceUri?: string;

        RecordPreprocessorSourceUri?: string;
      };

      export type MonitoringJobDefinition = {
        BaselineConfig?: AWS.SageMaker.MonitoringSchedule.BaselineConfig;

        Environment?: AWS.SageMaker.MonitoringSchedule.Environment;

        MonitoringAppSpecification: AWS.SageMaker.MonitoringSchedule.MonitoringAppSpecification;

        MonitoringInputs: AWS.SageMaker.MonitoringSchedule.MonitoringInput[];

        MonitoringOutputConfig: AWS.SageMaker.MonitoringSchedule.MonitoringOutputConfig;

        MonitoringResources: AWS.SageMaker.MonitoringSchedule.MonitoringResources;

        NetworkConfig?: AWS.SageMaker.MonitoringSchedule.NetworkConfig;

        RoleArn: string;

        StoppingCondition?: AWS.SageMaker.MonitoringSchedule.StoppingCondition;
      };

      export type BaselineConfig = {
        ConstraintsResource?: AWS.SageMaker.MonitoringSchedule.ConstraintsResource;

        StatisticsResource?: AWS.SageMaker.MonitoringSchedule.StatisticsResource;
      };

      export type MonitoringOutput = {
        S3Output: AWS.SageMaker.MonitoringSchedule.S3Output;
      };

      export type ScheduleConfig = {
        ScheduleExpression: string;
      };

      export type MonitoringScheduleConfig = {
        MonitoringJobDefinition?: AWS.SageMaker.MonitoringSchedule.MonitoringJobDefinition;

        MonitoringJobDefinitionName?: string;

        MonitoringType?: string;

        ScheduleConfig?: AWS.SageMaker.MonitoringSchedule.ScheduleConfig;
      };

      export type EndpointInput = {
        EndpointName: string;

        LocalPath: string;

        S3DataDistributionType?: string;

        S3InputMode?: string;
      };

      export type NetworkConfig = {
        EnableInterContainerTrafficEncryption?: boolean;

        EnableNetworkIsolation?: boolean;

        VpcConfig?: AWS.SageMaker.MonitoringSchedule.VpcConfig;
      };

      export type S3Output = {
        LocalPath: string;

        S3UploadMode?: string;

        S3Uri: string;
      };

      export type MonitoringResources = {
        ClusterConfig: AWS.SageMaker.MonitoringSchedule.ClusterConfig;
      };

      export type StoppingCondition = {
        MaxRuntimeInSeconds: number;
      };

      export type MonitoringInput = {
        EndpointInput: AWS.SageMaker.MonitoringSchedule.EndpointInput;
      };
    }

    export type ModelBiasJobDefinition = {
      JobDefinitionName?: string;

      ModelBiasBaselineConfig?: AWS.SageMaker.ModelBiasJobDefinition.ModelBiasBaselineConfig;

      ModelBiasAppSpecification: AWS.SageMaker.ModelBiasJobDefinition.ModelBiasAppSpecification;

      ModelBiasJobInput: AWS.SageMaker.ModelBiasJobDefinition.ModelBiasJobInput;

      ModelBiasJobOutputConfig: AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutputConfig;

      JobResources: AWS.SageMaker.ModelBiasJobDefinition.MonitoringResources;

      NetworkConfig?: AWS.SageMaker.ModelBiasJobDefinition.NetworkConfig;

      RoleArn: string;

      StoppingCondition?: AWS.SageMaker.ModelBiasJobDefinition.StoppingCondition;

      Tags?: Tag[];
    };

    export type ModelBiasJobDefinition = {
      Environment?: any;
    };

    export namespace ModelBiasJobDefinition {
      export type ClusterConfig = {
        InstanceCount: number;

        InstanceType: string;

        VolumeKmsKeyId?: string;

        VolumeSizeInGB: number;
      };

      export type S3Output = {
        LocalPath: string;

        S3UploadMode?: string;

        S3Uri: string;
      };

      export type ModelBiasBaselineConfig = {
        BaseliningJobName?: string;

        ConstraintsResource?: AWS.SageMaker.ModelBiasJobDefinition.ConstraintsResource;
      };

      export type ModelBiasJobInput = {
        EndpointInput: AWS.SageMaker.ModelBiasJobDefinition.EndpointInput;

        GroundTruthS3Input: AWS.SageMaker.ModelBiasJobDefinition.MonitoringGroundTruthS3Input;
      };

      export type MonitoringResources = {
        ClusterConfig: AWS.SageMaker.ModelBiasJobDefinition.ClusterConfig;
      };

      export type ModelBiasAppSpecification = {
        ImageUri: string;

        ConfigUri: string;

        Environment?: AWS.SageMaker.ModelBiasJobDefinition.Environment;
      };

      export type MonitoringGroundTruthS3Input = {
        S3Uri: string;
      };

      export type ConstraintsResource = {
        S3Uri?: string;
      };

      export type StoppingCondition = {
        MaxRuntimeInSeconds: number;
      };

      export type MonitoringOutputConfig = {
        KmsKeyId?: string;

        MonitoringOutputs: AWS.SageMaker.ModelBiasJobDefinition.MonitoringOutput[];
      };

      export type VpcConfig = {
        SecurityGroupIds: string[];

        Subnets: string[];
      };

      export type NetworkConfig = {
        EnableInterContainerTrafficEncryption?: boolean;

        EnableNetworkIsolation?: boolean;

        VpcConfig?: AWS.SageMaker.ModelBiasJobDefinition.VpcConfig;
      };

      export type EndpointInput = {
        EndpointName: string;

        LocalPath: string;

        S3DataDistributionType?: string;

        S3InputMode?: string;

        StartTimeOffset?: string;

        EndTimeOffset?: string;

        FeaturesAttribute?: string;

        InferenceAttribute?: string;

        ProbabilityAttribute?: string;

        ProbabilityThresholdAttribute?: number;
      };

      export type MonitoringOutput = {
        S3Output: AWS.SageMaker.ModelBiasJobDefinition.S3Output;
      };
    }

    export type DataQualityJobDefinition = {
      JobDefinitionName?: string;

      DataQualityBaselineConfig?: AWS.SageMaker.DataQualityJobDefinition.DataQualityBaselineConfig;

      DataQualityAppSpecification: AWS.SageMaker.DataQualityJobDefinition.DataQualityAppSpecification;

      DataQualityJobInput: AWS.SageMaker.DataQualityJobDefinition.DataQualityJobInput;

      DataQualityJobOutputConfig: AWS.SageMaker.DataQualityJobDefinition.MonitoringOutputConfig;

      JobResources: AWS.SageMaker.DataQualityJobDefinition.MonitoringResources;

      NetworkConfig?: AWS.SageMaker.DataQualityJobDefinition.NetworkConfig;

      RoleArn: string;

      StoppingCondition?: AWS.SageMaker.DataQualityJobDefinition.StoppingCondition;

      Tags?: Tag[];
    };

    export type DataQualityJobDefinition = {
      Environment?: any;
    };

    export namespace DataQualityJobDefinition {
      export type DataQualityBaselineConfig = {
        BaseliningJobName?: string;

        ConstraintsResource?: AWS.SageMaker.DataQualityJobDefinition.ConstraintsResource;

        StatisticsResource?: AWS.SageMaker.DataQualityJobDefinition.StatisticsResource;
      };

      export type StatisticsResource = {
        S3Uri?: string;
      };

      export type ConstraintsResource = {
        S3Uri?: string;
      };

      export type DataQualityJobInput = {
        EndpointInput: AWS.SageMaker.DataQualityJobDefinition.EndpointInput;
      };

      export type MonitoringResources = {
        ClusterConfig: AWS.SageMaker.DataQualityJobDefinition.ClusterConfig;
      };

      export type MonitoringOutput = {
        S3Output: AWS.SageMaker.DataQualityJobDefinition.S3Output;
      };

      export type MonitoringOutputConfig = {
        KmsKeyId?: string;

        MonitoringOutputs: AWS.SageMaker.DataQualityJobDefinition.MonitoringOutput[];
      };

      export type DataQualityAppSpecification = {
        ContainerArguments?: string[];

        ContainerEntrypoint?: string[];

        ImageUri: string;

        PostAnalyticsProcessorSourceUri?: string;

        RecordPreprocessorSourceUri?: string;

        Environment?: AWS.SageMaker.DataQualityJobDefinition.Environment;
      };

      export type ClusterConfig = {
        InstanceCount: number;

        InstanceType: string;

        VolumeKmsKeyId?: string;

        VolumeSizeInGB: number;
      };

      export type VpcConfig = {
        SecurityGroupIds: string[];

        Subnets: string[];
      };

      export type S3Output = {
        LocalPath: string;

        S3UploadMode?: string;

        S3Uri: string;
      };

      export type StoppingCondition = {
        MaxRuntimeInSeconds: number;
      };

      export type NetworkConfig = {
        EnableInterContainerTrafficEncryption?: boolean;

        EnableNetworkIsolation?: boolean;

        VpcConfig?: AWS.SageMaker.DataQualityJobDefinition.VpcConfig;
      };

      export type EndpointInput = {
        EndpointName: string;

        LocalPath: string;

        S3DataDistributionType?: string;

        S3InputMode?: string;
      };
    }

    export type AppImageConfig = {
      AppImageConfigName: string;

      KernelGatewayImageConfig?: AWS.SageMaker.AppImageConfig.KernelGatewayImageConfig;

      Tags?: Tag[];
    };

    export namespace AppImageConfig {
      export type KernelGatewayImageConfig = {
        FileSystemConfig?: AWS.SageMaker.AppImageConfig.FileSystemConfig;

        KernelSpecs: AWS.SageMaker.AppImageConfig.KernelSpec[];
      };

      export type FileSystemConfig = {
        DefaultGid?: number;

        DefaultUid?: number;

        MountPath?: string;
      };

      export type KernelSpec = {
        DisplayName?: string;

        Name: string;
      };
    }

    export type Endpoint = {
      RetainAllVariantProperties?: boolean;

      EndpointName?: string;

      ExcludeRetainedVariantProperties?: AWS.SageMaker.Endpoint.VariantProperty[];

      EndpointConfigName: string;

      DeploymentConfig?: AWS.SageMaker.Endpoint.DeploymentConfig;

      Tags?: Tag[];
    };

    export namespace Endpoint {
      export type Alarm = {
        AlarmName: string;
      };

      export type AutoRollbackConfig = {
        Alarms: AWS.SageMaker.Endpoint.Alarm[];
      };

      export type TrafficRoutingConfig = {
        Type: string;

        CanarySize?: AWS.SageMaker.Endpoint.CapacitySize;

        WaitIntervalInSeconds?: number;
      };

      export type DeploymentConfig = {
        AutoRollbackConfiguration?: AWS.SageMaker.Endpoint.AutoRollbackConfig;

        BlueGreenUpdatePolicy: AWS.SageMaker.Endpoint.BlueGreenUpdatePolicy;
      };

      export type CapacitySize = {
        Type: string;

        Value: number;
      };

      export type VariantProperty = {
        VariantPropertyType?: string;
      };

      export type BlueGreenUpdatePolicy = {
        MaximumExecutionTimeoutInSeconds?: number;

        TerminationWaitInSeconds?: number;

        TrafficRoutingConfiguration: AWS.SageMaker.Endpoint.TrafficRoutingConfig;
      };
    }

    export type Model = {
      ExecutionRoleArn: string;

      EnableNetworkIsolation?: boolean;

      PrimaryContainer?: AWS.SageMaker.Model.ContainerDefinition;

      ModelName?: string;

      VpcConfig?: AWS.SageMaker.Model.VpcConfig;

      Containers?: AWS.SageMaker.Model.ContainerDefinition[];

      InferenceExecutionConfig?: AWS.SageMaker.Model.InferenceExecutionConfig;

      Tags?: Tag[];
    };

    export namespace Model {
      export type MultiModelConfig = {
        ModelCacheSetting?: string;
      };

      export type VpcConfig = {
        Subnets: string[];

        SecurityGroupIds: string[];
      };

      export type ContainerDefinition = {
        ImageConfig?: AWS.SageMaker.Model.ImageConfig;

        ContainerHostname?: string;

        ModelPackageName?: string;

        Mode?: string;

        Environment?: JSONString;

        ModelDataUrl?: string;

        Image?: string;

        MultiModelConfig?: AWS.SageMaker.Model.MultiModelConfig;
      };

      export type ImageConfig = {
        RepositoryAccessMode: string;
      };

      export type InferenceExecutionConfig = {
        Mode: string;
      };
    }

    export type Domain = {
      AppNetworkAccessType?: string;

      AuthMode: string;

      DefaultUserSettings: AWS.SageMaker.Domain.UserSettings;

      DomainName: string;

      KmsKeyId?: string;

      SubnetIds: string[];

      Tags?: Tag[];

      VpcId: string;
    };

    export namespace Domain {
      export type JupyterServerAppSettings = {
        DefaultResourceSpec?: AWS.SageMaker.Domain.ResourceSpec;
      };

      export type UserSettings = {
        ExecutionRole?: string;

        JupyterServerAppSettings?: AWS.SageMaker.Domain.JupyterServerAppSettings;

        KernelGatewayAppSettings?: AWS.SageMaker.Domain.KernelGatewayAppSettings;

        SecurityGroups?: string[];

        SharingSettings?: AWS.SageMaker.Domain.SharingSettings;
      };

      export type CustomImage = {
        AppImageConfigName: string;

        ImageName: string;

        ImageVersionNumber?: number;
      };

      export type ResourceSpec = {
        InstanceType?: string;

        SageMakerImageArn?: string;

        SageMakerImageVersionArn?: string;
      };

      export type KernelGatewayAppSettings = {
        CustomImages?: AWS.SageMaker.Domain.CustomImage[];

        DefaultResourceSpec?: AWS.SageMaker.Domain.ResourceSpec;
      };

      export type SharingSettings = {
        NotebookOutputOption?: string;

        S3KmsKeyId?: string;

        S3OutputPath?: string;
      };
    }

    export type DeviceFleet = {
      Description?: string;

      DeviceFleetName: string;

      OutputConfig: AWS.SageMaker.DeviceFleet.EdgeOutputConfig;

      RoleArn: string;

      Tags?: Tag[];
    };

    export namespace DeviceFleet {
      export type EdgeOutputConfig = {
        S3OutputLocation: string;

        KmsKeyId?: string;
      };
    }

    export type ModelExplainabilityJobDefinition = {
      JobDefinitionName?: string;

      ModelExplainabilityBaselineConfig?: AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig;

      ModelExplainabilityAppSpecification: AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification;

      ModelExplainabilityJobInput: AWS.SageMaker.ModelExplainabilityJobDefinition.ModelExplainabilityJobInput;

      ModelExplainabilityJobOutputConfig: AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutputConfig;

      JobResources: AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringResources;

      NetworkConfig?: AWS.SageMaker.ModelExplainabilityJobDefinition.NetworkConfig;

      RoleArn: string;

      StoppingCondition?: AWS.SageMaker.ModelExplainabilityJobDefinition.StoppingCondition;

      Tags?: Tag[];
    };

    export type ModelExplainabilityJobDefinition = {
      Environment?: any;
    };

    export namespace ModelExplainabilityJobDefinition {
      export type ModelExplainabilityAppSpecification = {
        ImageUri: string;

        ConfigUri: string;

        Environment?: AWS.SageMaker.ModelExplainabilityJobDefinition.Environment;
      };

      export type ModelExplainabilityJobInput = {
        EndpointInput: AWS.SageMaker.ModelExplainabilityJobDefinition.EndpointInput;
      };

      export type ClusterConfig = {
        InstanceCount: number;

        InstanceType: string;

        VolumeKmsKeyId?: string;

        VolumeSizeInGB: number;
      };

      export type ConstraintsResource = {
        S3Uri?: string;
      };

      export type StoppingCondition = {
        MaxRuntimeInSeconds: number;
      };

      export type S3Output = {
        LocalPath: string;

        S3UploadMode?: string;

        S3Uri: string;
      };

      export type NetworkConfig = {
        EnableInterContainerTrafficEncryption?: boolean;

        EnableNetworkIsolation?: boolean;

        VpcConfig?: AWS.SageMaker.ModelExplainabilityJobDefinition.VpcConfig;
      };

      export type ModelExplainabilityBaselineConfig = {
        BaseliningJobName?: string;

        ConstraintsResource?: AWS.SageMaker.ModelExplainabilityJobDefinition.ConstraintsResource;
      };

      export type MonitoringOutput = {
        S3Output: AWS.SageMaker.ModelExplainabilityJobDefinition.S3Output;
      };

      export type MonitoringResources = {
        ClusterConfig: AWS.SageMaker.ModelExplainabilityJobDefinition.ClusterConfig;
      };

      export type MonitoringOutputConfig = {
        KmsKeyId?: string;

        MonitoringOutputs: AWS.SageMaker.ModelExplainabilityJobDefinition.MonitoringOutput[];
      };

      export type VpcConfig = {
        SecurityGroupIds: string[];

        Subnets: string[];
      };

      export type EndpointInput = {
        EndpointName: string;

        LocalPath: string;

        S3DataDistributionType?: string;

        S3InputMode?: string;

        FeaturesAttribute?: string;

        InferenceAttribute?: string;

        ProbabilityAttribute?: string;
      };
    }

    export type UserProfile = {
      DomainId: string;

      SingleSignOnUserIdentifier?: string;

      SingleSignOnUserValue?: string;

      UserProfileName: string;

      UserSettings?: AWS.SageMaker.UserProfile.UserSettings;

      Tags?: Tag[];
    };

    export namespace UserProfile {
      export type JupyterServerAppSettings = {
        DefaultResourceSpec?: AWS.SageMaker.UserProfile.ResourceSpec;
      };

      export type ResourceSpec = {
        InstanceType?: string;

        SageMakerImageArn?: string;

        SageMakerImageVersionArn?: string;
      };

      export type KernelGatewayAppSettings = {
        CustomImages?: AWS.SageMaker.UserProfile.CustomImage[];

        DefaultResourceSpec?: AWS.SageMaker.UserProfile.ResourceSpec;
      };

      export type CustomImage = {
        AppImageConfigName: string;

        ImageName: string;

        ImageVersionNumber?: number;
      };

      export type SharingSettings = {
        NotebookOutputOption?: string;

        S3KmsKeyId?: string;

        S3OutputPath?: string;
      };

      export type UserSettings = {
        ExecutionRole?: string;

        JupyterServerAppSettings?: AWS.SageMaker.UserProfile.JupyterServerAppSettings;

        KernelGatewayAppSettings?: AWS.SageMaker.UserProfile.KernelGatewayAppSettings;

        SecurityGroups?: string[];

        SharingSettings?: AWS.SageMaker.UserProfile.SharingSettings;
      };
    }

    export type EndpointConfig = {
      DataCaptureConfig?: AWS.SageMaker.EndpointConfig.DataCaptureConfig;

      ProductionVariants: AWS.SageMaker.EndpointConfig.ProductionVariant[];

      KmsKeyId?: string;

      EndpointConfigName?: string;

      Tags?: Tag[];
    };

    export namespace EndpointConfig {
      export type CaptureOption = {
        CaptureMode: string;
      };

      export type ProductionVariant = {
        ModelName: string;

        VariantName: string;

        InitialInstanceCount: number;

        InstanceType: string;

        AcceleratorType?: string;

        InitialVariantWeight: number;
      };

      export type CaptureContentTypeHeader = {
        JsonContentTypes?: string[];

        CsvContentTypes?: string[];
      };

      export type DataCaptureConfig = {
        CaptureOptions: AWS.SageMaker.EndpointConfig.CaptureOption[];

        KmsKeyId?: string;

        DestinationS3Uri: string;

        InitialSamplingPercentage: number;

        CaptureContentTypeHeader?: AWS.SageMaker.EndpointConfig.CaptureContentTypeHeader;

        EnableCapture?: boolean;
      };
    }

    export type ModelQualityJobDefinition = {
      JobDefinitionName?: string;

      ModelQualityBaselineConfig?: AWS.SageMaker.ModelQualityJobDefinition.ModelQualityBaselineConfig;

      ModelQualityAppSpecification: AWS.SageMaker.ModelQualityJobDefinition.ModelQualityAppSpecification;

      ModelQualityJobInput: AWS.SageMaker.ModelQualityJobDefinition.ModelQualityJobInput;

      ModelQualityJobOutputConfig: AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutputConfig;

      JobResources: AWS.SageMaker.ModelQualityJobDefinition.MonitoringResources;

      NetworkConfig?: AWS.SageMaker.ModelQualityJobDefinition.NetworkConfig;

      RoleArn: string;

      StoppingCondition?: AWS.SageMaker.ModelQualityJobDefinition.StoppingCondition;

      Tags?: Tag[];
    };

    export type ModelQualityJobDefinition = {
      Environment?: any;
    };

    export namespace ModelQualityJobDefinition {
      export type ModelQualityJobInput = {
        EndpointInput: AWS.SageMaker.ModelQualityJobDefinition.EndpointInput;

        GroundTruthS3Input: AWS.SageMaker.ModelQualityJobDefinition.MonitoringGroundTruthS3Input;
      };

      export type MonitoringResources = {
        ClusterConfig: AWS.SageMaker.ModelQualityJobDefinition.ClusterConfig;
      };

      export type EndpointInput = {
        EndpointName: string;

        LocalPath: string;

        S3DataDistributionType?: string;

        S3InputMode?: string;

        StartTimeOffset?: string;

        EndTimeOffset?: string;

        InferenceAttribute?: string;

        ProbabilityAttribute?: string;

        ProbabilityThresholdAttribute?: number;
      };

      export type NetworkConfig = {
        EnableInterContainerTrafficEncryption?: boolean;

        EnableNetworkIsolation?: boolean;

        VpcConfig?: AWS.SageMaker.ModelQualityJobDefinition.VpcConfig;
      };

      export type VpcConfig = {
        SecurityGroupIds: string[];

        Subnets: string[];
      };

      export type ModelQualityAppSpecification = {
        ContainerArguments?: string[];

        ContainerEntrypoint?: string[];

        ImageUri: string;

        PostAnalyticsProcessorSourceUri?: string;

        RecordPreprocessorSourceUri?: string;

        Environment?: AWS.SageMaker.ModelQualityJobDefinition.Environment;

        ProblemType: string;
      };

      export type MonitoringOutput = {
        S3Output: AWS.SageMaker.ModelQualityJobDefinition.S3Output;
      };

      export type ClusterConfig = {
        InstanceCount: number;

        InstanceType: string;

        VolumeKmsKeyId?: string;

        VolumeSizeInGB: number;
      };

      export type ConstraintsResource = {
        S3Uri?: string;
      };

      export type S3Output = {
        LocalPath: string;

        S3UploadMode?: string;

        S3Uri: string;
      };

      export type MonitoringGroundTruthS3Input = {
        S3Uri: string;
      };

      export type ModelQualityBaselineConfig = {
        BaseliningJobName?: string;

        ConstraintsResource?: AWS.SageMaker.ModelQualityJobDefinition.ConstraintsResource;
      };

      export type StoppingCondition = {
        MaxRuntimeInSeconds: number;
      };

      export type MonitoringOutputConfig = {
        KmsKeyId?: string;

        MonitoringOutputs: AWS.SageMaker.ModelQualityJobDefinition.MonitoringOutput[];
      };
    }

    export type Device = {
      DeviceFleetName: string;

      Device?: AWS.SageMaker.Device.Device;

      Tags?: Tag[];
    };

    export namespace Device {
      export type Device = {
        Description?: string;

        DeviceName: string;

        IotThingName?: string;
      };
    }

    export type Workteam = {
      Description?: string;

      NotificationConfiguration?: AWS.SageMaker.Workteam.NotificationConfiguration;

      WorkteamName?: string;

      MemberDefinitions?: AWS.SageMaker.Workteam.MemberDefinition[];

      Tags?: Tag[];
    };

    export namespace Workteam {
      export type NotificationConfiguration = {
        NotificationTopicArn: string;
      };

      export type CognitoMemberDefinition = {
        CognitoUserPool: string;

        CognitoClientId: string;

        CognitoUserGroup: string;
      };

      export type MemberDefinition = {
        CognitoMemberDefinition: AWS.SageMaker.Workteam.CognitoMemberDefinition;
      };
    }

    export type NotebookInstanceLifecycleConfig = {
      OnStart?: AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook[];

      NotebookInstanceLifecycleConfigName?: string;

      OnCreate?: AWS.SageMaker.NotebookInstanceLifecycleConfig.NotebookInstanceLifecycleHook[];
    };

    export namespace NotebookInstanceLifecycleConfig {
      export type NotebookInstanceLifecycleHook = {
        Content?: string;
      };
    }

    export type CodeRepository = {
      CodeRepositoryName?: string;

      GitConfig: AWS.SageMaker.CodeRepository.GitConfig;

      Tags?: Tag[];
    };

    export namespace CodeRepository {
      export type GitConfig = {
        SecretArn?: string;

        Branch?: string;

        RepositoryUrl: string;
      };
    }

    export type App = {
      AppName: string;

      AppType: string;

      DomainId: string;

      ResourceSpec?: AWS.SageMaker.App.ResourceSpec;

      Tags?: Tag[];

      UserProfileName: string;
    };

    export namespace App {
      export type ResourceSpec = {
        InstanceType?: string;

        SageMakerImageArn?: string;

        SageMakerImageVersionArn?: string;
      };
    }

    export type FeatureGroup = {
      FeatureGroupName: string;

      RecordIdentifierFeatureName: string;

      EventTimeFeatureName: string;

      FeatureDefinitions: AWS.SageMaker.FeatureGroup.FeatureDefinition[];

      OnlineStoreConfig?: JSONString;

      OfflineStoreConfig?: JSONString;

      RoleArn?: string;

      Description?: string;

      Tags?: Tag[];
    };

    export namespace FeatureGroup {
      export type FeatureDefinition = {
        FeatureName: string;

        FeatureType: string;
      };
    }

    export type ImageVersion = {
      ImageName: string;

      BaseImage: string;
    };

    export type ModelPackageGroup = {
      Tags?: Tag[];

      ModelPackageGroupName: string;

      ModelPackageGroupDescription?: string;

      ModelPackageGroupPolicy?: JSONString;
    };

    export type NotebookInstance = {
      KmsKeyId?: string;

      VolumeSizeInGB?: number;

      AdditionalCodeRepositories?: string[];

      DefaultCodeRepository?: string;

      DirectInternetAccess?: string;

      AcceleratorTypes?: string[];

      SubnetId?: string;

      SecurityGroupIds?: string[];

      RoleArn: string;

      RootAccess?: string;

      NotebookInstanceName?: string;

      InstanceType: string;

      LifecycleConfigName?: string;

      Tags?: Tag[];
    };

    export type Pipeline = {
      PipelineName: string;

      PipelineDisplayName?: string;

      PipelineDescription?: string;

      PipelineDefinition: JSONString;

      RoleArn: string;

      Tags?: Tag[];
    };

    export type Project = {
      Tags?: Tag[];

      ProjectName: string;

      ProjectDescription?: string;

      ServiceCatalogProvisioningDetails: JSONString;
    };

    export type Image = {
      ImageName: string;

      ImageRoleArn: string;

      ImageDisplayName?: string;

      ImageDescription?: string;

      Tags?: Tag[];
    };
  }

  export namespace S3 {
    export type AccessPoint = {
      Name?: string;

      Bucket: string;

      VpcConfiguration?: AWS.S3.AccessPoint.VpcConfiguration;

      PublicAccessBlockConfiguration?: AWS.S3.AccessPoint.PublicAccessBlockConfiguration;

      Policy?: JSONString;
    };

    export namespace AccessPoint {
      export type PublicAccessBlockConfiguration = {
        BlockPublicAcls?: boolean;

        IgnorePublicAcls?: boolean;

        BlockPublicPolicy?: boolean;

        RestrictPublicBuckets?: boolean;
      };

      export type VpcConfiguration = {
        VpcId?: string;
      };
    }

    export type StorageLens = {
      StorageLensConfiguration: AWS.S3.StorageLens.StorageLensConfiguration;

      Tags?: Tag[];
    };

    export type StorageLens = {
      Encryption?: any;
    };

    export namespace StorageLens {
      export type PrefixLevelStorageMetrics = {
        IsEnabled?: boolean;

        SelectionCriteria?: AWS.S3.StorageLens.SelectionCriteria;
      };

      export type SelectionCriteria = {
        MaxDepth?: number;

        Delimiter?: string;

        MinStorageBytesPercentage?: number;
      };

      export type ActivityMetrics = {
        IsEnabled?: boolean;
      };

      export type BucketLevel = {
        ActivityMetrics?: AWS.S3.StorageLens.ActivityMetrics;

        PrefixLevel?: AWS.S3.StorageLens.PrefixLevel;
      };

      export type BucketsAndRegions = {
        Buckets?: string[];

        Regions?: string[];
      };

      export type DataExport = {
        S3BucketDestination: AWS.S3.StorageLens.S3BucketDestination;
      };

      export type AwsOrg = {
        Arn: string;
      };

      export type PrefixLevel = {
        StorageMetrics: AWS.S3.StorageLens.PrefixLevelStorageMetrics;
      };

      export type S3BucketDestination = {
        OutputSchemaVersion: string;

        Format: string;

        AccountId: string;

        Arn: string;

        Prefix?: string;

        Encryption?: AWS.S3.StorageLens.Encryption;
      };

      export type StorageLensConfiguration = {
        Id: string;

        Include?: AWS.S3.StorageLens.BucketsAndRegions;

        Exclude?: AWS.S3.StorageLens.BucketsAndRegions;

        AwsOrg?: AWS.S3.StorageLens.AwsOrg;

        AccountLevel: AWS.S3.StorageLens.AccountLevel;

        DataExport?: AWS.S3.StorageLens.DataExport;

        IsEnabled: boolean;

        StorageLensArn?: string;
      };

      export type AccountLevel = {
        ActivityMetrics?: AWS.S3.StorageLens.ActivityMetrics;

        BucketLevel: AWS.S3.StorageLens.BucketLevel;
      };
    }

    export type Bucket = {
      AccelerateConfiguration?: AWS.S3.Bucket.AccelerateConfiguration;

      AccessControl?: string;

      AnalyticsConfigurations?: AWS.S3.Bucket.AnalyticsConfiguration[];

      BucketEncryption?: AWS.S3.Bucket.BucketEncryption;

      BucketName?: string;

      CorsConfiguration?: AWS.S3.Bucket.CorsConfiguration;

      IntelligentTieringConfigurations?: AWS.S3.Bucket.IntelligentTieringConfiguration[];

      InventoryConfigurations?: AWS.S3.Bucket.InventoryConfiguration[];

      LifecycleConfiguration?: AWS.S3.Bucket.LifecycleConfiguration;

      LoggingConfiguration?: AWS.S3.Bucket.LoggingConfiguration;

      MetricsConfigurations?: AWS.S3.Bucket.MetricsConfiguration[];

      NotificationConfiguration?: AWS.S3.Bucket.NotificationConfiguration;

      ObjectLockConfiguration?: AWS.S3.Bucket.ObjectLockConfiguration;

      ObjectLockEnabled?: boolean;

      OwnershipControls?: AWS.S3.Bucket.OwnershipControls;

      PublicAccessBlockConfiguration?: AWS.S3.Bucket.PublicAccessBlockConfiguration;

      ReplicationConfiguration?: AWS.S3.Bucket.ReplicationConfiguration;

      Tags?: Tag[];

      VersioningConfiguration?: AWS.S3.Bucket.VersioningConfiguration;

      WebsiteConfiguration?: AWS.S3.Bucket.WebsiteConfiguration;
    };

    export namespace Bucket {
      export type OwnershipControls = {
        Rules: AWS.S3.Bucket.OwnershipControlsRule[];
      };

      export type ReplicaModifications = {
        Status: string;
      };

      export type CorsRule = {
        AllowedHeaders?: string[];

        AllowedMethods: string[];

        AllowedOrigins: string[];

        ExposedHeaders?: string[];

        Id?: string;

        MaxAge?: number;
      };

      export type Destination = {
        BucketAccountId?: string;

        BucketArn: string;

        Format: string;

        Prefix?: string;
      };

      export type OwnershipControlsRule = {
        ObjectOwnership?: string;
      };

      export type AccessControlTranslation = {
        Owner: string;
      };

      export type VersioningConfiguration = {
        Status: string;
      };

      export type ReplicationTime = {
        Status: string;

        Time: AWS.S3.Bucket.ReplicationTimeValue;
      };

      export type ServerSideEncryptionByDefault = {
        KMSMasterKeyID?: string;

        SSEAlgorithm: string;
      };

      export type Tiering = {
        AccessTier: string;

        Days: number;
      };

      export type SseKmsEncryptedObjects = {
        Status: string;
      };

      export type QueueConfiguration = {
        Event: string;

        Filter?: AWS.S3.Bucket.NotificationFilter;

        Queue: string;
      };

      export type ObjectLockConfiguration = {
        ObjectLockEnabled?: string;

        Rule?: AWS.S3.Bucket.ObjectLockRule;
      };

      export type AccelerateConfiguration = {
        AccelerationStatus: string;
      };

      export type IntelligentTieringConfiguration = {
        Id: string;

        Prefix?: string;

        Status: string;

        TagFilters?: AWS.S3.Bucket.TagFilter[];

        Tierings: AWS.S3.Bucket.Tiering[];
      };

      export type AbortIncompleteMultipartUpload = {
        DaysAfterInitiation: number;
      };

      export type DeleteMarkerReplication = {
        Status?: string;
      };

      export type PublicAccessBlockConfiguration = {
        BlockPublicAcls?: boolean;

        BlockPublicPolicy?: boolean;

        IgnorePublicAcls?: boolean;

        RestrictPublicBuckets?: boolean;
      };

      export type ReplicationRule = {
        DeleteMarkerReplication?: AWS.S3.Bucket.DeleteMarkerReplication;

        Destination: AWS.S3.Bucket.ReplicationDestination;

        Filter?: AWS.S3.Bucket.ReplicationRuleFilter;

        Id?: string;

        Prefix?: string;

        Priority?: number;

        SourceSelectionCriteria?: AWS.S3.Bucket.SourceSelectionCriteria;

        Status: string;
      };

      export type SourceSelectionCriteria = {
        ReplicaModifications?: AWS.S3.Bucket.ReplicaModifications;

        SseKmsEncryptedObjects?: AWS.S3.Bucket.SseKmsEncryptedObjects;
      };

      export type StorageClassAnalysis = {
        DataExport?: AWS.S3.Bucket.DataExport;
      };

      export type RedirectRule = {
        HostName?: string;

        HttpRedirectCode?: string;

        Protocol?: string;

        ReplaceKeyPrefixWith?: string;

        ReplaceKeyWith?: string;
      };

      export type ObjectLockRule = {
        DefaultRetention?: AWS.S3.Bucket.DefaultRetention;
      };

      export type Rule = {
        AbortIncompleteMultipartUpload?: AWS.S3.Bucket.AbortIncompleteMultipartUpload;

        ExpirationDate?: Timestamp;

        ExpirationInDays?: number;

        ExpiredObjectDeleteMarker?: boolean;

        Id?: string;

        NoncurrentVersionExpirationInDays?: number;

        NoncurrentVersionTransition?: AWS.S3.Bucket.NoncurrentVersionTransition;

        NoncurrentVersionTransitions?: AWS.S3.Bucket.NoncurrentVersionTransition[];

        Prefix?: string;

        Status: string;

        TagFilters?: AWS.S3.Bucket.TagFilter[];

        Transition?: AWS.S3.Bucket.Transition;

        Transitions?: AWS.S3.Bucket.Transition[];
      };

      export type MetricsConfiguration = {
        Id: string;

        Prefix?: string;

        TagFilters?: AWS.S3.Bucket.TagFilter[];
      };

      export type DataExport = {
        Destination: AWS.S3.Bucket.Destination;

        OutputSchemaVersion: string;
      };

      export type ReplicationTimeValue = {
        Minutes: number;
      };

      export type FilterRule = {
        Name: string;

        Value: string;
      };

      export type ReplicationRuleAndOperator = {
        Prefix?: string;

        TagFilters?: AWS.S3.Bucket.TagFilter[];
      };

      export type BucketEncryption = {
        ServerSideEncryptionConfiguration: AWS.S3.Bucket.ServerSideEncryptionRule[];
      };

      export type Metrics = {
        EventThreshold?: AWS.S3.Bucket.ReplicationTimeValue;

        Status: string;
      };

      export type RoutingRuleCondition = {
        HttpErrorCodeReturnedEquals?: string;

        KeyPrefixEquals?: string;
      };

      export type LifecycleConfiguration = {
        Rules: AWS.S3.Bucket.Rule[];
      };

      export type NotificationConfiguration = {
        LambdaConfigurations?: AWS.S3.Bucket.LambdaConfiguration[];

        QueueConfigurations?: AWS.S3.Bucket.QueueConfiguration[];

        TopicConfigurations?: AWS.S3.Bucket.TopicConfiguration[];
      };

      export type RedirectAllRequestsTo = {
        HostName: string;

        Protocol?: string;
      };

      export type S3KeyFilter = {
        Rules: AWS.S3.Bucket.FilterRule[];
      };

      export type InventoryConfiguration = {
        Destination: AWS.S3.Bucket.Destination;

        Enabled: boolean;

        Id: string;

        IncludedObjectVersions: string;

        OptionalFields?: string[];

        Prefix?: string;

        ScheduleFrequency: string;
      };

      export type ReplicationConfiguration = {
        Role: string;

        Rules: AWS.S3.Bucket.ReplicationRule[];
      };

      export type CorsConfiguration = {
        CorsRules: AWS.S3.Bucket.CorsRule[];
      };

      export type ReplicationDestination = {
        AccessControlTranslation?: AWS.S3.Bucket.AccessControlTranslation;

        Account?: string;

        Bucket: string;

        EncryptionConfiguration?: AWS.S3.Bucket.EncryptionConfiguration;

        Metrics?: AWS.S3.Bucket.Metrics;

        ReplicationTime?: AWS.S3.Bucket.ReplicationTime;

        StorageClass?: string;
      };

      export type NoncurrentVersionTransition = {
        StorageClass: string;

        TransitionInDays: number;
      };

      export type DefaultRetention = {
        Days?: number;

        Mode?: string;

        Years?: number;
      };

      export type NotificationFilter = {
        S3Key: AWS.S3.Bucket.S3KeyFilter;
      };

      export type LambdaConfiguration = {
        Event: string;

        Filter?: AWS.S3.Bucket.NotificationFilter;

        Function: string;
      };

      export type ServerSideEncryptionRule = {
        BucketKeyEnabled?: boolean;

        ServerSideEncryptionByDefault?: AWS.S3.Bucket.ServerSideEncryptionByDefault;
      };

      export type AnalyticsConfiguration = {
        Id: string;

        Prefix?: string;

        StorageClassAnalysis: AWS.S3.Bucket.StorageClassAnalysis;

        TagFilters?: AWS.S3.Bucket.TagFilter[];
      };

      export type LoggingConfiguration = {
        DestinationBucketName?: string;

        LogFilePrefix?: string;
      };

      export type RoutingRule = {
        RedirectRule: AWS.S3.Bucket.RedirectRule;

        RoutingRuleCondition?: AWS.S3.Bucket.RoutingRuleCondition;
      };

      export type EncryptionConfiguration = {
        ReplicaKmsKeyID: string;
      };

      export type WebsiteConfiguration = {
        ErrorDocument?: string;

        IndexDocument?: string;

        RedirectAllRequestsTo?: AWS.S3.Bucket.RedirectAllRequestsTo;

        RoutingRules?: AWS.S3.Bucket.RoutingRule[];
      };

      export type TopicConfiguration = {
        Event: string;

        Filter?: AWS.S3.Bucket.NotificationFilter;

        Topic: string;
      };

      export type TagFilter = {
        Key: string;

        Value: string;
      };

      export type Transition = {
        StorageClass: string;

        TransitionDate?: Timestamp;

        TransitionInDays?: number;
      };

      export type ReplicationRuleFilter = {
        And?: AWS.S3.Bucket.ReplicationRuleAndOperator;

        Prefix?: string;

        TagFilter?: AWS.S3.Bucket.TagFilter;
      };
    }

    export type BucketPolicy = {
      Bucket: string;

      PolicyDocument: JSONString;
    };
  }

  export namespace ElasticBeanstalk {
    export type Environment = {
      ApplicationName: string;

      CNAMEPrefix?: string;

      Description?: string;

      EnvironmentName?: string;

      OperationsRole?: string;

      OptionSettings?: AWS.ElasticBeanstalk.Environment.OptionSetting[];

      PlatformArn?: string;

      SolutionStackName?: string;

      Tags?: Tag[];

      TemplateName?: string;

      Tier?: AWS.ElasticBeanstalk.Environment.Tier;

      VersionLabel?: string;
    };

    export namespace Environment {
      export type OptionSetting = {
        Namespace: string;

        OptionName: string;

        ResourceName?: string;

        Value?: string;
      };

      export type Tier = {
        Name?: string;

        Type?: string;

        Version?: string;
      };
    }

    export type ApplicationVersion = {
      ApplicationName: string;

      Description?: string;

      SourceBundle: AWS.ElasticBeanstalk.ApplicationVersion.SourceBundle;
    };

    export namespace ApplicationVersion {
      export type SourceBundle = {
        S3Bucket: string;

        S3Key: string;
      };
    }

    export type Application = {
      ApplicationName?: string;

      Description?: string;

      ResourceLifecycleConfig?: AWS.ElasticBeanstalk.Application.ApplicationResourceLifecycleConfig;
    };

    export namespace Application {
      export type MaxAgeRule = {
        DeleteSourceFromS3?: boolean;

        Enabled?: boolean;

        MaxAgeInDays?: number;
      };

      export type ApplicationResourceLifecycleConfig = {
        ServiceRole?: string;

        VersionLifecycleConfig?: AWS.ElasticBeanstalk.Application.ApplicationVersionLifecycleConfig;
      };

      export type ApplicationVersionLifecycleConfig = {
        MaxAgeRule?: AWS.ElasticBeanstalk.Application.MaxAgeRule;

        MaxCountRule?: AWS.ElasticBeanstalk.Application.MaxCountRule;
      };

      export type MaxCountRule = {
        DeleteSourceFromS3?: boolean;

        Enabled?: boolean;

        MaxCount?: number;
      };
    }

    export type ConfigurationTemplate = {
      ApplicationName: string;

      Description?: string;

      EnvironmentId?: string;

      OptionSettings?: AWS.ElasticBeanstalk.ConfigurationTemplate.ConfigurationOptionSetting[];

      PlatformArn?: string;

      SolutionStackName?: string;

      SourceConfiguration?: AWS.ElasticBeanstalk.ConfigurationTemplate.SourceConfiguration;
    };

    export namespace ConfigurationTemplate {
      export type SourceConfiguration = {
        ApplicationName: string;

        TemplateName: string;
      };

      export type ConfigurationOptionSetting = {
        Namespace: string;

        OptionName: string;

        ResourceName?: string;

        Value?: string;
      };
    }
  }

  export namespace Pinpoint {
    export type Campaign = {
      Description?: string;

      SegmentId: string;

      IsPaused?: boolean;

      AdditionalTreatments?: AWS.Pinpoint.Campaign.WriteTreatmentResource[];

      Name: string;

      SegmentVersion?: number;

      TreatmentDescription?: string;

      MessageConfiguration: AWS.Pinpoint.Campaign.MessageConfiguration;

      Limits?: AWS.Pinpoint.Campaign.Limits;

      HoldoutPercent?: number;

      Schedule: AWS.Pinpoint.Campaign.Schedule;

      ApplicationId: string;

      CampaignHook?: AWS.Pinpoint.Campaign.CampaignHook;

      Tags?: JSONString;

      TreatmentName?: string;
    };

    export namespace Campaign {
      export type MetricDimension = {
        ComparisonOperator?: string;

        Value?: number;
      };

      export type Schedule = {
        TimeZone?: string;

        QuietTime?: AWS.Pinpoint.Campaign.QuietTime;

        EndTime?: string;

        StartTime?: string;

        Frequency?: string;

        EventFilter?: AWS.Pinpoint.Campaign.CampaignEventFilter;

        IsLocalTime?: boolean;
      };

      export type QuietTime = {
        Start: string;

        End: string;
      };

      export type Message = {
        JsonBody?: string;

        Action?: string;

        MediaUrl?: string;

        TimeToLive?: number;

        ImageSmallIconUrl?: string;

        ImageUrl?: string;

        Title?: string;

        ImageIconUrl?: string;

        SilentPush?: boolean;

        Body?: string;

        RawContent?: string;

        Url?: string;
      };

      export type CampaignEventFilter = {
        FilterType?: string;

        Dimensions?: AWS.Pinpoint.Campaign.EventDimensions;
      };

      export type CampaignSmsMessage = {
        EntityId?: string;

        OriginationNumber?: string;

        SenderId?: string;

        Body?: string;

        MessageType?: string;

        TemplateId?: string;
      };

      export type WriteTreatmentResource = {
        TreatmentDescription?: string;

        MessageConfiguration?: AWS.Pinpoint.Campaign.MessageConfiguration;

        Schedule?: AWS.Pinpoint.Campaign.Schedule;

        SizePercent?: number;

        TreatmentName?: string;
      };

      export type SetDimension = {
        DimensionType?: string;

        Values?: string[];
      };

      export type EventDimensions = {
        Metrics?: JSONString;

        EventType?: AWS.Pinpoint.Campaign.SetDimension;

        Attributes?: JSONString;
      };

      export type Limits = {
        Daily?: number;

        MaximumDuration?: number;

        Total?: number;

        MessagesPerSecond?: number;
      };

      export type AttributeDimension = {
        AttributeType?: string;

        Values?: string[];
      };

      export type MessageConfiguration = {
        APNSMessage?: AWS.Pinpoint.Campaign.Message;

        BaiduMessage?: AWS.Pinpoint.Campaign.Message;

        DefaultMessage?: AWS.Pinpoint.Campaign.Message;

        EmailMessage?: AWS.Pinpoint.Campaign.CampaignEmailMessage;

        GCMMessage?: AWS.Pinpoint.Campaign.Message;

        SMSMessage?: AWS.Pinpoint.Campaign.CampaignSmsMessage;

        ADMMessage?: AWS.Pinpoint.Campaign.Message;
      };

      export type CampaignHook = {
        Mode?: string;

        WebUrl?: string;

        LambdaFunctionName?: string;
      };

      export type CampaignEmailMessage = {
        FromAddress?: string;

        HtmlBody?: string;

        Title?: string;

        Body?: string;
      };
    }

    export type Segment = {
      SegmentGroups?: AWS.Pinpoint.Segment.SegmentGroups;

      Dimensions?: AWS.Pinpoint.Segment.SegmentDimensions;

      ApplicationId: string;

      Tags?: JSONString;

      Name: string;
    };

    export namespace Segment {
      export type AttributeDimension = {
        AttributeType?: string;

        Values?: string[];
      };

      export type Recency = {
        Duration: string;

        RecencyType: string;
      };

      export type Groups = {
        Type?: string;

        SourceType?: string;

        Dimensions?: AWS.Pinpoint.Segment.SegmentDimensions[];

        SourceSegments?: AWS.Pinpoint.Segment.SourceSegments[];
      };

      export type Location = {
        GPSPoint?: AWS.Pinpoint.Segment.GPSPoint;

        Country?: AWS.Pinpoint.Segment.SetDimension;
      };

      export type SegmentGroups = {
        Groups?: AWS.Pinpoint.Segment.Groups[];

        Include?: string;
      };

      export type Coordinates = {
        Latitude: number;

        Longitude: number;
      };

      export type SegmentDimensions = {
        Demographic?: AWS.Pinpoint.Segment.Demographic;

        Metrics?: JSONString;

        Attributes?: JSONString;

        Behavior?: AWS.Pinpoint.Segment.Behavior;

        UserAttributes?: JSONString;

        Location?: AWS.Pinpoint.Segment.Location;
      };

      export type SourceSegments = {
        Version?: number;

        Id: string;
      };

      export type GPSPoint = {
        RangeInKilometers: number;

        Coordinates: AWS.Pinpoint.Segment.Coordinates;
      };

      export type Demographic = {
        AppVersion?: AWS.Pinpoint.Segment.SetDimension;

        DeviceType?: AWS.Pinpoint.Segment.SetDimension;

        Platform?: AWS.Pinpoint.Segment.SetDimension;

        Channel?: AWS.Pinpoint.Segment.SetDimension;

        Model?: AWS.Pinpoint.Segment.SetDimension;

        Make?: AWS.Pinpoint.Segment.SetDimension;
      };

      export type SetDimension = {
        DimensionType?: string;

        Values?: string[];
      };

      export type Behavior = {
        Recency?: AWS.Pinpoint.Segment.Recency;
      };
    }

    export type ApplicationSettings = {
      QuietTime?: AWS.Pinpoint.ApplicationSettings.QuietTime;

      Limits?: AWS.Pinpoint.ApplicationSettings.Limits;

      ApplicationId: string;

      CampaignHook?: AWS.Pinpoint.ApplicationSettings.CampaignHook;

      CloudWatchMetricsEnabled?: boolean;
    };

    export namespace ApplicationSettings {
      export type CampaignHook = {
        Mode?: string;

        WebUrl?: string;

        LambdaFunctionName?: string;
      };

      export type Limits = {
        Daily?: number;

        MaximumDuration?: number;

        Total?: number;

        MessagesPerSecond?: number;
      };

      export type QuietTime = {
        Start: string;

        End: string;
      };
    }

    export type PushTemplate = {
      GCM?: AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

      Baidu?: AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

      TemplateName: string;

      ADM?: AWS.Pinpoint.PushTemplate.AndroidPushNotificationTemplate;

      APNS?: AWS.Pinpoint.PushTemplate.APNSPushNotificationTemplate;

      TemplateDescription?: string;

      DefaultSubstitutions?: string;

      Default?: AWS.Pinpoint.PushTemplate.DefaultPushNotificationTemplate;

      Tags?: JSONString;
    };

    export namespace PushTemplate {
      export type DefaultPushNotificationTemplate = {
        Action?: string;

        Title?: string;

        Sound?: string;

        Body?: string;

        Url?: string;
      };

      export type AndroidPushNotificationTemplate = {
        Action?: string;

        ImageUrl?: string;

        SmallImageIconUrl?: string;

        Title?: string;

        ImageIconUrl?: string;

        Sound?: string;

        Body?: string;

        Url?: string;
      };

      export type APNSPushNotificationTemplate = {
        Action?: string;

        MediaUrl?: string;

        Title?: string;

        Sound?: string;

        Body?: string;

        Url?: string;
      };
    }

    export type VoiceChannel = {
      Enabled?: boolean;

      ApplicationId: string;
    };

    export type EventStream = {
      ApplicationId: string;

      DestinationStreamArn: string;

      RoleArn: string;
    };

    export type EmailTemplate = {
      HtmlPart?: string;

      TextPart?: string;

      TemplateName: string;

      TemplateDescription?: string;

      DefaultSubstitutions?: string;

      Subject: string;

      Tags?: JSONString;
    };

    export type BaiduChannel = {
      SecretKey: string;

      ApiKey: string;

      Enabled?: boolean;

      ApplicationId: string;
    };

    export type GCMChannel = {
      ApiKey: string;

      Enabled?: boolean;

      ApplicationId: string;
    };

    export type APNSChannel = {
      BundleId?: string;

      PrivateKey?: string;

      Enabled?: boolean;

      DefaultAuthenticationMethod?: string;

      TokenKey?: string;

      ApplicationId: string;

      TeamId?: string;

      Certificate?: string;

      TokenKeyId?: string;
    };

    export type APNSVoipSandboxChannel = {
      BundleId?: string;

      PrivateKey?: string;

      Enabled?: boolean;

      DefaultAuthenticationMethod?: string;

      TokenKey?: string;

      ApplicationId: string;

      TeamId?: string;

      Certificate?: string;

      TokenKeyId?: string;
    };

    export type APNSVoipChannel = {
      BundleId?: string;

      PrivateKey?: string;

      Enabled?: boolean;

      DefaultAuthenticationMethod?: string;

      TokenKey?: string;

      ApplicationId: string;

      TeamId?: string;

      Certificate?: string;

      TokenKeyId?: string;
    };

    export type EmailChannel = {
      ConfigurationSet?: string;

      FromAddress: string;

      Enabled?: boolean;

      ApplicationId: string;

      Identity: string;

      RoleArn?: string;
    };

    export type SMSChannel = {
      ShortCode?: string;

      Enabled?: boolean;

      ApplicationId: string;

      SenderId?: string;
    };

    export type SmsTemplate = {
      TemplateName: string;

      TemplateDescription?: string;

      DefaultSubstitutions?: string;

      Body: string;

      Tags?: JSONString;
    };

    export type APNSSandboxChannel = {
      BundleId?: string;

      PrivateKey?: string;

      Enabled?: boolean;

      DefaultAuthenticationMethod?: string;

      TokenKey?: string;

      ApplicationId: string;

      TeamId?: string;

      Certificate?: string;

      TokenKeyId?: string;
    };

    export type ADMChannel = {
      ClientSecret: string;

      Enabled?: boolean;

      ClientId: string;

      ApplicationId: string;
    };

    export type App = {
      Tags?: JSONString;

      Name: string;
    };
  }

  export namespace EventSchemas {
    export type Schema = {
      Type: string;

      Description?: string;

      Content: string;

      RegistryName: string;

      SchemaName?: string;

      Tags?: AWS.EventSchemas.Schema.TagsEntry[];
    };

    export namespace Schema {
      export type TagsEntry = {
        Value: string;

        Key: string;
      };
    }

    export type Discoverer = {
      Description?: string;

      SourceArn: string;

      Tags?: AWS.EventSchemas.Discoverer.TagsEntry[];
    };

    export namespace Discoverer {
      export type TagsEntry = {
        Value: string;

        Key: string;
      };
    }

    export type Registry = {
      Description?: string;

      RegistryName?: string;

      Tags?: AWS.EventSchemas.Registry.TagsEntry[];
    };

    export namespace Registry {
      export type TagsEntry = {
        Value: string;

        Key: string;
      };
    }

    export type RegistryPolicy = {
      Policy: JSONString;

      RegistryName: string;

      RevisionId?: string;
    };
  }

  export namespace CustomerProfiles {
    export type Integration = {
      DomainName: string;

      Uri?: string;

      FlowDefinition?: AWS.CustomerProfiles.Integration.FlowDefinition;

      ObjectTypeName: string;

      Tags?: Tag[];
    };

    export namespace Integration {
      export type Task = {
        ConnectorOperator?: AWS.CustomerProfiles.Integration.ConnectorOperator;

        SourceFields: string[];

        DestinationField?: string;

        TaskType: string;

        TaskProperties?: AWS.CustomerProfiles.Integration.TaskPropertiesMap[];
      };

      export type TriggerProperties = {
        Scheduled?: AWS.CustomerProfiles.Integration.ScheduledTriggerProperties;
      };

      export type ScheduledTriggerProperties = {
        ScheduleExpression: string;

        DataPullMode?: string;

        ScheduleStartTime?: number;

        ScheduleEndTime?: number;

        Timezone?: string;

        ScheduleOffset?: number;

        FirstExecutionFrom?: number;
      };

      export type S3SourceProperties = {
        BucketName: string;

        BucketPrefix?: string;
      };

      export type FlowDefinition = {
        FlowName: string;

        Description?: string;

        KmsArn: string;

        Tasks: AWS.CustomerProfiles.Integration.Task[];

        TriggerConfig: AWS.CustomerProfiles.Integration.TriggerConfig;

        SourceFlowConfig: AWS.CustomerProfiles.Integration.SourceFlowConfig;
      };

      export type IncrementalPullConfig = {
        DatetimeTypeFieldName?: string;
      };

      export type MarketoSourceProperties = {
        Object: string;
      };

      export type TaskPropertiesMap = {
        OperatorPropertyKey: string;

        Property: string;
      };

      export type ConnectorOperator = {
        Marketo?: string;

        S3?: string;

        Salesforce?: string;

        ServiceNow?: string;

        Zendesk?: string;
      };

      export type ZendeskSourceProperties = {
        Object: string;
      };

      export type SourceConnectorProperties = {
        Marketo?: AWS.CustomerProfiles.Integration.MarketoSourceProperties;

        S3?: AWS.CustomerProfiles.Integration.S3SourceProperties;

        Salesforce?: AWS.CustomerProfiles.Integration.SalesforceSourceProperties;

        ServiceNow?: AWS.CustomerProfiles.Integration.ServiceNowSourceProperties;

        Zendesk?: AWS.CustomerProfiles.Integration.ZendeskSourceProperties;
      };

      export type ServiceNowSourceProperties = {
        Object: string;
      };

      export type SalesforceSourceProperties = {
        Object: string;

        EnableDynamicFieldUpdate?: boolean;

        IncludeDeletedRecords?: boolean;
      };

      export type TriggerConfig = {
        TriggerType: string;

        TriggerProperties?: AWS.CustomerProfiles.Integration.TriggerProperties;
      };

      export type SourceFlowConfig = {
        ConnectorType: string;

        ConnectorProfileName?: string;

        IncrementalPullConfig?: AWS.CustomerProfiles.Integration.IncrementalPullConfig;

        SourceConnectorProperties: AWS.CustomerProfiles.Integration.SourceConnectorProperties;
      };
    }

    export type ObjectType = {
      DomainName: string;

      ObjectTypeName?: string;

      AllowProfileCreation?: boolean;

      Description?: string;

      EncryptionKey?: string;

      ExpirationDays?: number;

      Fields?: AWS.CustomerProfiles.ObjectType.FieldMap[];

      Keys?: AWS.CustomerProfiles.ObjectType.KeyMap[];

      Tags?: Tag[];

      TemplateId?: string;
    };

    export namespace ObjectType {
      export type KeyMap = {
        Name?: string;

        ObjectTypeKeyList?: AWS.CustomerProfiles.ObjectType.ObjectTypeKey[];
      };

      export type FieldMap = {
        Name?: string;

        ObjectTypeField?: AWS.CustomerProfiles.ObjectType.ObjectTypeField;
      };

      export type ObjectTypeField = {
        Source?: string;

        Target?: string;

        ContentType?: string;
      };

      export type ObjectTypeKey = {
        FieldNames?: string[];

        StandardIdentifiers?: string[];
      };
    }

    export type Domain = {
      DomainName: string;

      DeadLetterQueueUrl?: string;

      DefaultEncryptionKey?: string;

      DefaultExpirationDays?: number;

      Tags?: Tag[];
    };
  }

  export namespace AppRunner {
    export type Service = {
      ServiceName?: string;

      SourceConfiguration: AWS.AppRunner.Service.SourceConfiguration;

      InstanceConfiguration?: AWS.AppRunner.Service.InstanceConfiguration;

      Tags?: Tag[];

      EncryptionConfiguration?: AWS.AppRunner.Service.EncryptionConfiguration;

      HealthCheckConfiguration?: AWS.AppRunner.Service.HealthCheckConfiguration;

      AutoScalingConfigurationArn?: string;
    };

    export namespace Service {
      export type ImageConfiguration = {
        StartCommand?: string;

        Port?: string;

        RuntimeEnvironmentVariables?: AWS.AppRunner.Service.KeyValuePair[];
      };

      export type InstanceConfiguration = {
        Cpu?: string;

        Memory?: string;

        InstanceRoleArn?: string;
      };

      export type AuthenticationConfiguration = {
        ConnectionArn?: string;

        AccessRoleArn?: string;
      };

      export type KeyValuePair = {
        Name?: string;

        Value?: string;
      };

      export type EncryptionConfiguration = {
        KmsKey: string;
      };

      export type HealthCheckConfiguration = {
        Protocol?: string;

        Path?: string;

        Interval?: number;

        Timeout?: number;

        HealthyThreshold?: number;

        UnhealthyThreshold?: number;
      };

      export type CodeConfigurationValues = {
        Runtime: string;

        BuildCommand?: string;

        StartCommand?: string;

        Port?: string;

        RuntimeEnvironmentVariables?: AWS.AppRunner.Service.KeyValuePair[];
      };

      export type SourceCodeVersion = {
        Type: string;

        Value: string;
      };

      export type ImageRepository = {
        ImageIdentifier: string;

        ImageConfiguration?: AWS.AppRunner.Service.ImageConfiguration;

        ImageRepositoryType: string;
      };

      export type SourceConfiguration = {
        CodeRepository?: AWS.AppRunner.Service.CodeRepository;

        ImageRepository?: AWS.AppRunner.Service.ImageRepository;

        AutoDeploymentsEnabled?: boolean;

        AuthenticationConfiguration?: AWS.AppRunner.Service.AuthenticationConfiguration;
      };

      export type CodeRepository = {
        RepositoryUrl: string;

        SourceCodeVersion: AWS.AppRunner.Service.SourceCodeVersion;

        CodeConfiguration?: AWS.AppRunner.Service.CodeConfiguration;
      };

      export type CodeConfiguration = {
        ConfigurationSource: string;

        CodeConfigurationValues?: AWS.AppRunner.Service.CodeConfigurationValues;
      };
    }
  }

  export namespace DMS {
    export type Endpoint = {
      SybaseSettings?: AWS.DMS.Endpoint.SybaseSettings;

      OracleSettings?: AWS.DMS.Endpoint.OracleSettings;

      KafkaSettings?: AWS.DMS.Endpoint.KafkaSettings;

      Port?: number;

      MySqlSettings?: AWS.DMS.Endpoint.MySqlSettings;

      S3Settings?: AWS.DMS.Endpoint.S3Settings;

      ResourceIdentifier?: string;

      KinesisSettings?: AWS.DMS.Endpoint.KinesisSettings;

      SslMode?: string;

      RedshiftSettings?: AWS.DMS.Endpoint.RedshiftSettings;

      EndpointType: string;

      Tags?: Tag[];

      Password?: string;

      MongoDbSettings?: AWS.DMS.Endpoint.MongoDbSettings;

      IbmDb2Settings?: AWS.DMS.Endpoint.IbmDb2Settings;

      KmsKeyId?: string;

      DatabaseName?: string;

      NeptuneSettings?: AWS.DMS.Endpoint.NeptuneSettings;

      ElasticsearchSettings?: AWS.DMS.Endpoint.ElasticsearchSettings;

      EngineName: string;

      DocDbSettings?: AWS.DMS.Endpoint.DocDbSettings;

      DynamoDbSettings?: AWS.DMS.Endpoint.DynamoDbSettings;

      Username?: string;

      MicrosoftSqlServerSettings?: AWS.DMS.Endpoint.MicrosoftSqlServerSettings;

      ServerName?: string;

      ExtraConnectionAttributes?: string;

      EndpointIdentifier?: string;

      CertificateArn?: string;

      PostgreSqlSettings?: AWS.DMS.Endpoint.PostgreSqlSettings;
    };

    export namespace Endpoint {
      export type KinesisSettings = {
        MessageFormat?: string;

        StreamArn?: string;

        ServiceAccessRoleArn?: string;
      };

      export type S3Settings = {
        ExternalTableDefinition?: string;

        BucketName?: string;

        BucketFolder?: string;

        CsvRowDelimiter?: string;

        CsvDelimiter?: string;

        ServiceAccessRoleArn?: string;

        CompressionType?: string;
      };

      export type PostgreSqlSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type MicrosoftSqlServerSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type MongoDbSettings = {
        Port?: number;

        ExtractDocId?: string;

        DatabaseName?: string;

        AuthSource?: string;

        AuthMechanism?: string;

        Username?: string;

        DocsToInvestigate?: string;

        ServerName?: string;

        SecretsManagerSecretId?: string;

        AuthType?: string;

        SecretsManagerAccessRoleArn?: string;

        Password?: string;

        NestingLevel?: string;
      };

      export type KafkaSettings = {
        Broker?: string;

        Topic?: string;
      };

      export type MySqlSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type NeptuneSettings = {
        MaxRetryCount?: number;

        MaxFileSize?: number;

        S3BucketFolder?: string;

        ErrorRetryDuration?: number;

        IamAuthEnabled?: boolean;

        S3BucketName?: string;

        ServiceAccessRoleArn?: string;
      };

      export type IbmDb2Settings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type ElasticsearchSettings = {
        EndpointUri?: string;

        FullLoadErrorPercentage?: number;

        ErrorRetryDuration?: number;

        ServiceAccessRoleArn?: string;
      };

      export type OracleSettings = {
        SecretsManagerOracleAsmAccessRoleArn?: string;

        SecretsManagerOracleAsmSecretId?: string;

        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type DynamoDbSettings = {
        ServiceAccessRoleArn?: string;
      };

      export type DocDbSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type SybaseSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };

      export type RedshiftSettings = {
        SecretsManagerSecretId?: string;

        SecretsManagerAccessRoleArn?: string;
      };
    }

    export type ReplicationSubnetGroup = {
      ReplicationSubnetGroupDescription: string;

      ReplicationSubnetGroupIdentifier?: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type EventSubscription = {
      SourceType?: string;

      EventCategories?: string[];

      Enabled?: boolean;

      SubscriptionName?: string;

      SnsTopicArn: string;

      SourceIds?: string[];

      Tags?: Tag[];
    };

    export type Certificate = {
      CertificateIdentifier?: string;

      CertificatePem?: string;

      CertificateWallet?: string;
    };

    export type ReplicationTask = {
      ReplicationTaskSettings?: string;

      CdcStartPosition?: string;

      CdcStopPosition?: string;

      MigrationType: string;

      TargetEndpointArn: string;

      ReplicationInstanceArn: string;

      TaskData?: string;

      CdcStartTime?: number;

      ResourceIdentifier?: string;

      TableMappings: string;

      ReplicationTaskIdentifier?: string;

      SourceEndpointArn: string;

      Tags?: Tag[];
    };

    export type ReplicationInstance = {
      ReplicationInstanceIdentifier?: string;

      EngineVersion?: string;

      KmsKeyId?: string;

      AvailabilityZone?: string;

      PreferredMaintenanceWindow?: string;

      AutoMinorVersionUpgrade?: boolean;

      ReplicationSubnetGroupIdentifier?: string;

      AllocatedStorage?: number;

      ResourceIdentifier?: string;

      VpcSecurityGroupIds?: string[];

      AllowMajorVersionUpgrade?: boolean;

      ReplicationInstanceClass: string;

      PubliclyAccessible?: boolean;

      MultiAZ?: boolean;

      Tags?: Tag[];
    };
  }

  export namespace IoTAnalytics {
    export type Dataset = {
      Actions: AWS.IoTAnalytics.Dataset.Action[];

      LateDataRules?: AWS.IoTAnalytics.Dataset.LateDataRule[];

      DatasetName?: string;

      ContentDeliveryRules?: AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRule[];

      Triggers?: AWS.IoTAnalytics.Dataset.Trigger[];

      VersioningConfiguration?: AWS.IoTAnalytics.Dataset.VersioningConfiguration;

      RetentionPeriod?: AWS.IoTAnalytics.Dataset.RetentionPeriod;

      Tags?: Tag[];
    };

    export namespace Dataset {
      export type DatasetContentVersionValue = {
        DatasetName?: string;
      };

      export type GlueConfiguration = {
        TableName: string;

        DatabaseName: string;
      };

      export type DeltaTimeSessionWindowConfiguration = {
        TimeoutInMinutes: number;
      };

      export type OutputFileUriValue = {
        FileName?: string;
      };

      export type Filter = {
        DeltaTime?: AWS.IoTAnalytics.Dataset.DeltaTime;
      };

      export type DatasetContentDeliveryRule = {
        Destination: AWS.IoTAnalytics.Dataset.DatasetContentDeliveryRuleDestination;

        EntryName?: string;
      };

      export type Action = {
        ActionName: string;

        ContainerAction?: AWS.IoTAnalytics.Dataset.ContainerAction;

        QueryAction?: AWS.IoTAnalytics.Dataset.QueryAction;
      };

      export type LateDataRuleConfiguration = {
        DeltaTimeSessionWindowConfiguration?: AWS.IoTAnalytics.Dataset.DeltaTimeSessionWindowConfiguration;
      };

      export type ContainerAction = {
        Variables?: AWS.IoTAnalytics.Dataset.Variable[];

        ExecutionRoleArn: string;

        Image: string;

        ResourceConfiguration: AWS.IoTAnalytics.Dataset.ResourceConfiguration;
      };

      export type LateDataRule = {
        RuleConfiguration: AWS.IoTAnalytics.Dataset.LateDataRuleConfiguration;

        RuleName?: string;
      };

      export type QueryAction = {
        Filters?: AWS.IoTAnalytics.Dataset.Filter[];

        SqlQuery: string;
      };

      export type DatasetContentDeliveryRuleDestination = {
        IotEventsDestinationConfiguration?: AWS.IoTAnalytics.Dataset.IotEventsDestinationConfiguration;

        S3DestinationConfiguration?: AWS.IoTAnalytics.Dataset.S3DestinationConfiguration;
      };

      export type VersioningConfiguration = {
        MaxVersions?: number;

        Unlimited?: boolean;
      };

      export type Schedule = {
        ScheduleExpression: string;
      };

      export type RetentionPeriod = {
        NumberOfDays: number;

        Unlimited: boolean;
      };

      export type S3DestinationConfiguration = {
        GlueConfiguration?: AWS.IoTAnalytics.Dataset.GlueConfiguration;

        Bucket: string;

        Key: string;

        RoleArn: string;
      };

      export type Variable = {
        DatasetContentVersionValue?: AWS.IoTAnalytics.Dataset.DatasetContentVersionValue;

        DoubleValue?: number;

        OutputFileUriValue?: AWS.IoTAnalytics.Dataset.OutputFileUriValue;

        VariableName: string;

        StringValue?: string;
      };

      export type DeltaTime = {
        TimeExpression: string;

        OffsetSeconds: number;
      };

      export type Trigger = {
        Schedule?: AWS.IoTAnalytics.Dataset.Schedule;

        TriggeringDataset?: AWS.IoTAnalytics.Dataset.TriggeringDataset;
      };

      export type IotEventsDestinationConfiguration = {
        InputName: string;

        RoleArn: string;
      };

      export type ResourceConfiguration = {
        VolumeSizeInGB: number;

        ComputeType: string;
      };

      export type TriggeringDataset = {
        DatasetName: string;
      };
    }

    export type Pipeline = {
      PipelineName?: string;

      Tags?: Tag[];

      PipelineActivities: AWS.IoTAnalytics.Pipeline.Activity[];
    };

    export namespace Pipeline {
      export type DeviceShadowEnrich = {
        Attribute?: string;

        Next?: string;

        ThingName?: string;

        RoleArn?: string;

        Name?: string;
      };

      export type SelectAttributes = {
        Next?: string;

        Attributes?: string[];

        Name?: string;
      };

      export type RemoveAttributes = {
        Next?: string;

        Attributes?: string[];

        Name?: string;
      };

      export type Datastore = {
        DatastoreName?: string;

        Name?: string;
      };

      export type DeviceRegistryEnrich = {
        Attribute?: string;

        Next?: string;

        ThingName?: string;

        RoleArn?: string;

        Name?: string;
      };

      export type Lambda = {
        BatchSize?: number;

        Next?: string;

        LambdaName?: string;

        Name?: string;
      };

      export type Channel = {
        ChannelName?: string;

        Next?: string;

        Name?: string;
      };

      export type Filter = {
        Filter?: string;

        Next?: string;

        Name?: string;
      };

      export type Activity = {
        SelectAttributes?: AWS.IoTAnalytics.Pipeline.SelectAttributes;

        Datastore?: AWS.IoTAnalytics.Pipeline.Datastore;

        Filter?: AWS.IoTAnalytics.Pipeline.Filter;

        AddAttributes?: AWS.IoTAnalytics.Pipeline.AddAttributes;

        Channel?: AWS.IoTAnalytics.Pipeline.Channel;

        DeviceShadowEnrich?: AWS.IoTAnalytics.Pipeline.DeviceShadowEnrich;

        Math?: AWS.IoTAnalytics.Pipeline.Math;

        Lambda?: AWS.IoTAnalytics.Pipeline.Lambda;

        DeviceRegistryEnrich?: AWS.IoTAnalytics.Pipeline.DeviceRegistryEnrich;

        RemoveAttributes?: AWS.IoTAnalytics.Pipeline.RemoveAttributes;
      };

      export type Math = {
        Attribute?: string;

        Next?: string;

        Math?: string;

        Name?: string;
      };

      export type AddAttributes = {
        Next?: string;

        Attributes?: JSONString;

        Name?: string;
      };
    }

    export type Datastore = {
      DatastoreStorage?: AWS.IoTAnalytics.Datastore.DatastoreStorage;

      FileFormatConfiguration?: AWS.IoTAnalytics.Datastore.FileFormatConfiguration;

      DatastorePartitions?: AWS.IoTAnalytics.Datastore.DatastorePartitions;

      DatastoreName?: string;

      RetentionPeriod?: AWS.IoTAnalytics.Datastore.RetentionPeriod;

      Tags?: Tag[];
    };

    export namespace Datastore {
      export type FileFormatConfiguration = {
        ParquetConfiguration?: AWS.IoTAnalytics.Datastore.ParquetConfiguration;

        JsonConfiguration?: AWS.IoTAnalytics.Datastore.JsonConfiguration;
      };

      export type RetentionPeriod = {
        NumberOfDays?: number;

        Unlimited?: boolean;
      };

      export type CustomerManagedS3 = {
        Bucket: string;

        RoleArn: string;

        KeyPrefix?: string;
      };

      export type DatastorePartitions = {
        Partitions?: AWS.IoTAnalytics.Datastore.DatastorePartition[];
      };

      export type SchemaDefinition = {
        Columns?: AWS.IoTAnalytics.Datastore.Column[];
      };

      export type Column = {
        Type: string;

        Name: string;
      };

      export type ParquetConfiguration = {
        SchemaDefinition?: AWS.IoTAnalytics.Datastore.SchemaDefinition;
      };

      export type DatastoreStorage = {
        CustomerManagedS3?: AWS.IoTAnalytics.Datastore.CustomerManagedS3;

        ServiceManagedS3?: AWS.IoTAnalytics.Datastore.ServiceManagedS3;
      };

      export type Partition = {
        AttributeName: string;
      };

      export type DatastorePartition = {
        Partition?: AWS.IoTAnalytics.Datastore.Partition;

        TimestampPartition?: AWS.IoTAnalytics.Datastore.TimestampPartition;
      };

      export type TimestampPartition = {
        AttributeName: string;

        TimestampFormat?: string;
      };
    }

    export type Channel = {
      ChannelName?: string;

      ChannelStorage?: AWS.IoTAnalytics.Channel.ChannelStorage;

      RetentionPeriod?: AWS.IoTAnalytics.Channel.RetentionPeriod;

      Tags?: Tag[];
    };

    export namespace Channel {
      export type CustomerManagedS3 = {
        Bucket: string;

        RoleArn: string;

        KeyPrefix?: string;
      };

      export type RetentionPeriod = {
        NumberOfDays?: number;

        Unlimited?: boolean;
      };

      export type ChannelStorage = {
        CustomerManagedS3?: AWS.IoTAnalytics.Channel.CustomerManagedS3;

        ServiceManagedS3?: AWS.IoTAnalytics.Channel.ServiceManagedS3;
      };
    }
  }

  export namespace CloudTrail {
    export type Trail = {
      CloudWatchLogsLogGroupArn?: string;

      CloudWatchLogsRoleArn?: string;

      EnableLogFileValidation?: boolean;

      EventSelectors?: AWS.CloudTrail.Trail.EventSelector[];

      IncludeGlobalServiceEvents?: boolean;

      IsLogging: boolean;

      IsMultiRegionTrail?: boolean;

      KMSKeyId?: string;

      S3BucketName: string;

      S3KeyPrefix?: string;

      SnsTopicName?: string;

      Tags?: Tag[];

      TrailName?: string;
    };

    export namespace Trail {
      export type EventSelector = {
        DataResources?: AWS.CloudTrail.Trail.DataResource[];

        IncludeManagementEvents?: boolean;

        ReadWriteType?: string;
      };

      export type DataResource = {
        Type: string;

        Values?: string[];
      };
    }
  }

  export namespace SES {
    export type ReceiptRule = {
      After?: string;

      Rule: AWS.SES.ReceiptRule.Rule;

      RuleSetName: string;
    };

    export namespace ReceiptRule {
      export type BounceAction = {
        Sender: string;

        SmtpReplyCode: string;

        Message: string;

        TopicArn?: string;

        StatusCode?: string;
      };

      export type Action = {
        BounceAction?: AWS.SES.ReceiptRule.BounceAction;

        S3Action?: AWS.SES.ReceiptRule.S3Action;

        StopAction?: AWS.SES.ReceiptRule.StopAction;

        SNSAction?: AWS.SES.ReceiptRule.SNSAction;

        WorkmailAction?: AWS.SES.ReceiptRule.WorkmailAction;

        AddHeaderAction?: AWS.SES.ReceiptRule.AddHeaderAction;

        LambdaAction?: AWS.SES.ReceiptRule.LambdaAction;
      };

      export type StopAction = {
        Scope: string;

        TopicArn?: string;
      };

      export type SNSAction = {
        TopicArn?: string;

        Encoding?: string;
      };

      export type S3Action = {
        BucketName: string;

        KmsKeyArn?: string;

        TopicArn?: string;

        ObjectKeyPrefix?: string;
      };

      export type WorkmailAction = {
        TopicArn?: string;

        OrganizationArn: string;
      };

      export type Rule = {
        ScanEnabled?: boolean;

        Recipients?: string[];

        Actions?: AWS.SES.ReceiptRule.Action[];

        Enabled?: boolean;

        Name?: string;

        TlsPolicy?: string;
      };

      export type LambdaAction = {
        FunctionArn: string;

        TopicArn?: string;

        InvocationType?: string;
      };

      export type AddHeaderAction = {
        HeaderValue: string;

        HeaderName: string;
      };
    }

    export type ReceiptFilter = {
      Filter: AWS.SES.ReceiptFilter.Filter;
    };

    export namespace ReceiptFilter {
      export type Filter = {
        IpFilter: AWS.SES.ReceiptFilter.IpFilter;

        Name?: string;
      };

      export type IpFilter = {
        Policy: string;

        Cidr: string;
      };
    }

    export type ConfigurationSetEventDestination = {
      ConfigurationSetName: string;

      EventDestination: AWS.SES.ConfigurationSetEventDestination.EventDestination;
    };

    export namespace ConfigurationSetEventDestination {
      export type EventDestination = {
        CloudWatchDestination?: AWS.SES.ConfigurationSetEventDestination.CloudWatchDestination;

        Enabled?: boolean;

        MatchingEventTypes: string[];

        Name?: string;

        KinesisFirehoseDestination?: AWS.SES.ConfigurationSetEventDestination.KinesisFirehoseDestination;
      };

      export type DimensionConfiguration = {
        DimensionValueSource: string;

        DefaultDimensionValue: string;

        DimensionName: string;
      };

      export type KinesisFirehoseDestination = {
        IAMRoleARN: string;

        DeliveryStreamARN: string;
      };

      export type CloudWatchDestination = {
        DimensionConfigurations?: AWS.SES.ConfigurationSetEventDestination.DimensionConfiguration[];
      };
    }

    export type Template = {
      Template?: AWS.SES.Template.Template;
    };

    export namespace Template {
      export type Template = {
        HtmlPart?: string;

        TextPart?: string;

        TemplateName?: string;

        SubjectPart?: string;
      };
    }

    export type ContactList = {
      ContactListName?: string;

      Description?: string;

      Topics?: AWS.SES.ContactList.Topic[];

      Tags?: Tag[];
    };

    export namespace ContactList {
      export type Topic = {
        TopicName: string;

        DisplayName: string;

        Description?: string;

        DefaultSubscriptionStatus: string;
      };
    }

    export type ConfigurationSet = {
      Name?: string;
    };

    export type ReceiptRuleSet = {
      RuleSetName?: string;
    };
  }

  export namespace XRay {
    export type Group = {
      FilterExpression?: string;

      GroupName?: string;

      InsightsConfiguration?: AWS.XRay.Group.InsightsConfiguration;

      Tags?: JSONString[];
    };

    export namespace Group {
      export type InsightsConfiguration = {
        InsightsEnabled?: boolean;

        NotificationsEnabled?: boolean;
      };
    }

    export type SamplingRule = {
      SamplingRule?: AWS.XRay.SamplingRule.SamplingRule;

      SamplingRuleRecord?: AWS.XRay.SamplingRule.SamplingRuleRecord;

      SamplingRuleUpdate?: AWS.XRay.SamplingRule.SamplingRuleUpdate;

      RuleName?: string;

      Tags?: JSONString[];
    };

    export namespace SamplingRule {
      export type SamplingRuleUpdate = {
        Attributes?: Record<string, string>;

        FixedRate?: number;

        Host?: string;

        HTTPMethod?: string;

        Priority?: number;

        ReservoirSize?: number;

        ResourceARN?: string;

        RuleARN?: string;

        RuleName?: string;

        ServiceName?: string;

        ServiceType?: string;

        URLPath?: string;
      };

      export type SamplingRuleRecord = {
        CreatedAt?: string;

        ModifiedAt?: string;

        SamplingRule?: AWS.XRay.SamplingRule.SamplingRule;
      };

      export type SamplingRule = {
        Attributes?: Record<string, string>;

        FixedRate?: number;

        Host?: string;

        HTTPMethod?: string;

        Priority?: number;

        ReservoirSize?: number;

        ResourceARN?: string;

        RuleARN?: string;

        RuleName?: string;

        ServiceName?: string;

        ServiceType?: string;

        URLPath?: string;

        Version?: number;
      };
    }
  }

  export namespace PinpointEmail {
    export type ConfigurationSetEventDestination = {
      EventDestinationName: string;

      ConfigurationSetName: string;

      EventDestination?: AWS.PinpointEmail.ConfigurationSetEventDestination.EventDestination;
    };

    export namespace ConfigurationSetEventDestination {
      export type DimensionConfiguration = {
        DimensionValueSource: string;

        DefaultDimensionValue: string;

        DimensionName: string;
      };

      export type CloudWatchDestination = {
        DimensionConfigurations?: AWS.PinpointEmail.ConfigurationSetEventDestination.DimensionConfiguration[];
      };

      export type SnsDestination = {
        TopicArn: string;
      };

      export type PinpointDestination = {
        ApplicationArn?: string;
      };

      export type KinesisFirehoseDestination = {
        DeliveryStreamArn: string;

        IamRoleArn: string;
      };

      export type EventDestination = {
        SnsDestination?: AWS.PinpointEmail.ConfigurationSetEventDestination.SnsDestination;

        CloudWatchDestination?: AWS.PinpointEmail.ConfigurationSetEventDestination.CloudWatchDestination;

        Enabled?: boolean;

        MatchingEventTypes: string[];

        PinpointDestination?: AWS.PinpointEmail.ConfigurationSetEventDestination.PinpointDestination;

        KinesisFirehoseDestination?: AWS.PinpointEmail.ConfigurationSetEventDestination.KinesisFirehoseDestination;
      };
    }

    export type ConfigurationSet = {
      SendingOptions?: AWS.PinpointEmail.ConfigurationSet.SendingOptions;

      TrackingOptions?: AWS.PinpointEmail.ConfigurationSet.TrackingOptions;

      ReputationOptions?: AWS.PinpointEmail.ConfigurationSet.ReputationOptions;

      DeliveryOptions?: AWS.PinpointEmail.ConfigurationSet.DeliveryOptions;

      Tags?: AWS.PinpointEmail.ConfigurationSet.Tags[];

      Name: string;
    };

    export namespace ConfigurationSet {
      export type SendingOptions = {
        SendingEnabled?: boolean;
      };

      export type ReputationOptions = {
        ReputationMetricsEnabled?: boolean;
      };

      export type TrackingOptions = {
        CustomRedirectDomain?: string;
      };

      export type Tags = {
        Value?: string;

        Key?: string;
      };

      export type DeliveryOptions = {
        SendingPoolName?: string;
      };
    }

    export type DedicatedIpPool = {
      PoolName?: string;

      Tags?: AWS.PinpointEmail.DedicatedIpPool.Tags[];
    };

    export namespace DedicatedIpPool {
      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type Identity = {
      FeedbackForwardingEnabled?: boolean;

      DkimSigningEnabled?: boolean;

      Tags?: AWS.PinpointEmail.Identity.Tags[];

      Name: string;

      MailFromAttributes?: AWS.PinpointEmail.Identity.MailFromAttributes;
    };

    export namespace Identity {
      export type Tags = {
        Value?: string;

        Key?: string;
      };

      export type MailFromAttributes = {
        MailFromDomain?: string;

        BehaviorOnMxFailure?: string;
      };
    }
  }

  export namespace IoT {
    export type TopicRule = {
      RuleName?: string;

      TopicRulePayload: AWS.IoT.TopicRule.TopicRulePayload;

      Tags?: Tag[];
    };

    export namespace TopicRule {
      export type AssetPropertyVariant = {
        StringValue?: string;

        DoubleValue?: string;

        BooleanValue?: string;

        IntegerValue?: string;
      };

      export type SigV4Authorization = {
        ServiceName: string;

        SigningRegion: string;

        RoleArn: string;
      };

      export type SqsAction = {
        RoleArn: string;

        UseBase64?: boolean;

        QueueUrl: string;
      };

      export type PutItemInput = {
        TableName: string;
      };

      export type SnsAction = {
        TargetArn: string;

        MessageFormat?: string;

        RoleArn: string;
      };

      export type HttpAction = {
        ConfirmationUrl?: string;

        Headers?: AWS.IoT.TopicRule.HttpActionHeader[];

        Url: string;

        Auth?: AWS.IoT.TopicRule.HttpAuthorization;
      };

      export type PutAssetPropertyValueEntry = {
        PropertyAlias?: string;

        PropertyValues: AWS.IoT.TopicRule.AssetPropertyValue[];

        AssetId?: string;

        EntryId?: string;

        PropertyId?: string;
      };

      export type LambdaAction = {
        FunctionArn?: string;
      };

      export type DynamoDBAction = {
        TableName: string;

        PayloadField?: string;

        RangeKeyField?: string;

        HashKeyField: string;

        RangeKeyValue?: string;

        RangeKeyType?: string;

        HashKeyType?: string;

        HashKeyValue: string;

        RoleArn: string;
      };

      export type IotAnalyticsAction = {
        RoleArn: string;

        ChannelName: string;

        BatchMode?: boolean;
      };

      export type IotEventsAction = {
        InputName: string;

        RoleArn: string;

        MessageId?: string;

        BatchMode?: boolean;
      };

      export type KafkaAction = {
        DestinationArn: string;

        Topic: string;

        Key?: string;

        Partition?: string;

        ClientProperties: Record<string, string>;
      };

      export type TimestreamAction = {
        RoleArn: string;

        DatabaseName: string;

        TableName: string;

        Dimensions: AWS.IoT.TopicRule.TimestreamDimension[];

        Timestamp?: AWS.IoT.TopicRule.TimestreamTimestamp;

        BatchMode?: boolean;
      };

      export type IotSiteWiseAction = {
        RoleArn: string;

        PutAssetPropertyValueEntries: AWS.IoT.TopicRule.PutAssetPropertyValueEntry[];
      };

      export type DynamoDBv2Action = {
        PutItem?: AWS.IoT.TopicRule.PutItemInput;

        RoleArn?: string;
      };

      export type CloudwatchMetricAction = {
        MetricName: string;

        MetricValue: string;

        MetricNamespace: string;

        MetricUnit: string;

        RoleArn: string;

        MetricTimestamp?: string;
      };

      export type S3Action = {
        BucketName: string;

        Key: string;

        RoleArn: string;

        CannedAcl?: string;
      };

      export type FirehoseAction = {
        DeliveryStreamName: string;

        RoleArn: string;

        Separator?: string;

        BatchMode?: boolean;
      };

      export type AssetPropertyTimestamp = {
        TimeInSeconds: string;

        OffsetInNanos?: string;
      };

      export type AssetPropertyValue = {
        Value: AWS.IoT.TopicRule.AssetPropertyVariant;

        Timestamp: AWS.IoT.TopicRule.AssetPropertyTimestamp;

        Quality?: string;
      };

      export type ElasticsearchAction = {
        Type: string;

        Index: string;

        Id: string;

        Endpoint: string;

        RoleArn: string;
      };

      export type KinesisAction = {
        PartitionKey?: string;

        StreamName: string;

        RoleArn: string;
      };

      export type Action = {
        S3?: AWS.IoT.TopicRule.S3Action;

        CloudwatchAlarm?: AWS.IoT.TopicRule.CloudwatchAlarmAction;

        CloudwatchLogs?: AWS.IoT.TopicRule.CloudwatchLogsAction;

        IotEvents?: AWS.IoT.TopicRule.IotEventsAction;

        Firehose?: AWS.IoT.TopicRule.FirehoseAction;

        Republish?: AWS.IoT.TopicRule.RepublishAction;

        StepFunctions?: AWS.IoT.TopicRule.StepFunctionsAction;

        DynamoDB?: AWS.IoT.TopicRule.DynamoDBAction;

        Http?: AWS.IoT.TopicRule.HttpAction;

        DynamoDBv2?: AWS.IoT.TopicRule.DynamoDBv2Action;

        CloudwatchMetric?: AWS.IoT.TopicRule.CloudwatchMetricAction;

        IotSiteWise?: AWS.IoT.TopicRule.IotSiteWiseAction;

        Elasticsearch?: AWS.IoT.TopicRule.ElasticsearchAction;

        Sqs?: AWS.IoT.TopicRule.SqsAction;

        Kinesis?: AWS.IoT.TopicRule.KinesisAction;

        IotAnalytics?: AWS.IoT.TopicRule.IotAnalyticsAction;

        Sns?: AWS.IoT.TopicRule.SnsAction;

        Lambda?: AWS.IoT.TopicRule.LambdaAction;

        Timestream?: AWS.IoT.TopicRule.TimestreamAction;

        Kafka?: AWS.IoT.TopicRule.KafkaAction;
      };

      export type HttpAuthorization = {
        Sigv4?: AWS.IoT.TopicRule.SigV4Authorization;
      };

      export type HttpActionHeader = {
        Value: string;

        Key: string;
      };

      export type RepublishAction = {
        Qos?: number;

        Topic: string;

        RoleArn: string;
      };

      export type StepFunctionsAction = {
        ExecutionNamePrefix?: string;

        StateMachineName: string;

        RoleArn: string;
      };

      export type TopicRulePayload = {
        RuleDisabled?: boolean;

        ErrorAction?: AWS.IoT.TopicRule.Action;

        Description?: string;

        AwsIotSqlVersion?: string;

        Actions: AWS.IoT.TopicRule.Action[];

        Sql: string;
      };

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
    }

    export type MitigationAction = {
      ActionName?: string;

      RoleArn: string;

      Tags?: Tag[];

      ActionParams: AWS.IoT.MitigationAction.ActionParams;
    };

    export namespace MitigationAction {
      export type AddThingsToThingGroupParams = {
        OverrideDynamicGroups?: boolean;

        ThingGroupNames: string[];
      };

      export type UpdateCACertificateParams = {
        Action: string;
      };

      export type UpdateDeviceCertificateParams = {
        Action: string;
      };

      export type ReplaceDefaultPolicyVersionParams = {
        TemplateName: string;
      };

      export type EnableIoTLoggingParams = {
        LogLevel: string;

        RoleArnForLogging: string;
      };

      export type ActionParams = {
        AddThingsToThingGroupParams?: AWS.IoT.MitigationAction.AddThingsToThingGroupParams;

        EnableIoTLoggingParams?: AWS.IoT.MitigationAction.EnableIoTLoggingParams;

        PublishFindingToSnsParams?: AWS.IoT.MitigationAction.PublishFindingToSnsParams;

        ReplaceDefaultPolicyVersionParams?: AWS.IoT.MitigationAction.ReplaceDefaultPolicyVersionParams;

        UpdateCACertificateParams?: AWS.IoT.MitigationAction.UpdateCACertificateParams;

        UpdateDeviceCertificateParams?: AWS.IoT.MitigationAction.UpdateDeviceCertificateParams;
      };

      export type PublishFindingToSnsParams = {
        TopicArn: string;
      };
    }

    export type TopicRuleDestination = {
      Status?: string;

      HttpUrlProperties?: AWS.IoT.TopicRuleDestination.HttpUrlDestinationSummary;

      VpcProperties?: AWS.IoT.TopicRuleDestination.VpcDestinationProperties;
    };

    export namespace TopicRuleDestination {
      export type VpcDestinationProperties = {
        SubnetIds?: string[];

        SecurityGroups?: string[];

        VpcId?: string;

        RoleArn?: string;
      };

      export type HttpUrlDestinationSummary = {
        ConfirmationUrl?: string;
      };
    }

    export type SecurityProfile = {
      SecurityProfileName?: string;

      SecurityProfileDescription?: string;

      Behaviors?: AWS.IoT.SecurityProfile.Behavior[];

      AlertTargets?: Record<string, AWS.IoT.SecurityProfile.AlertTarget>;

      AdditionalMetricsToRetainV2?: AWS.IoT.SecurityProfile.MetricToRetain[];

      Tags?: Tag[];

      TargetArns?: string[];
    };

    export namespace SecurityProfile {
      export type MetricToRetain = {
        Metric: string;

        MetricDimension?: AWS.IoT.SecurityProfile.MetricDimension;
      };

      export type MachineLearningDetectionConfig = {
        ConfidenceLevel?: string;
      };

      export type MetricDimension = {
        DimensionName: string;

        Operator?: string;
      };

      export type MetricValue = {
        Count?: string;

        Cidrs?: string[];

        Ports?: number[];

        Number?: number;

        Numbers?: number[];

        Strings?: string[];
      };

      export type AlertTarget = {
        AlertTargetArn: string;

        RoleArn: string;
      };

      export type Behavior = {
        Name: string;

        Metric?: string;

        MetricDimension?: AWS.IoT.SecurityProfile.MetricDimension;

        Criteria?: AWS.IoT.SecurityProfile.BehaviorCriteria;

        SuppressAlerts?: boolean;
      };

      export type BehaviorCriteria = {
        ComparisonOperator?: string;

        Value?: AWS.IoT.SecurityProfile.MetricValue;

        DurationSeconds?: number;

        ConsecutiveDatapointsToAlarm?: number;

        ConsecutiveDatapointsToClear?: number;

        StatisticalThreshold?: AWS.IoT.SecurityProfile.StatisticalThreshold;

        MlDetectionConfig?: AWS.IoT.SecurityProfile.MachineLearningDetectionConfig;
      };

      export type StatisticalThreshold = {
        Statistic?: string;
      };
    }

    export type AccountAuditConfiguration = {
      AccountId: string;

      AuditCheckConfigurations: AWS.IoT.AccountAuditConfiguration.AuditCheckConfigurations;

      AuditNotificationTargetConfigurations?: AWS.IoT.AccountAuditConfiguration.AuditNotificationTargetConfigurations;

      RoleArn: string;
    };

    export namespace AccountAuditConfiguration {
      export type AuditCheckConfiguration = {
        Enabled?: boolean;
      };

      export type AuditNotificationTargetConfigurations = {
        Sns?: AWS.IoT.AccountAuditConfiguration.AuditNotificationTarget;
      };

      export type AuditNotificationTarget = {
        TargetArn?: string;

        RoleArn?: string;

        Enabled?: boolean;
      };

      export type AuditCheckConfigurations = {
        AuthenticatedCognitoRoleOverlyPermissiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        CaCertificateExpiringCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        CaCertificateKeyQualityCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        ConflictingClientIdsCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        DeviceCertificateExpiringCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        DeviceCertificateKeyQualityCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        DeviceCertificateSharedCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        IotPolicyOverlyPermissiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        IotRoleAliasAllowsAccessToUnusedServicesCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        IotRoleAliasOverlyPermissiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        LoggingDisabledCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        RevokedCaCertificateStillActiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        RevokedDeviceCertificateStillActiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;

        UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AWS.IoT.AccountAuditConfiguration.AuditCheckConfiguration;
      };
    }

    export type ProvisioningTemplate = {
      TemplateName?: string;

      Description?: string;

      Enabled?: boolean;

      ProvisioningRoleArn: string;

      TemplateBody: string;

      PreProvisioningHook?: AWS.IoT.ProvisioningTemplate.ProvisioningHook;

      Tags?: Tag[];
    };

    export namespace ProvisioningTemplate {
      export type ProvisioningHook = {
        TargetArn?: string;

        PayloadVersion?: string;
      };
    }

    export type Thing = {
      AttributePayload?: AWS.IoT.Thing.AttributePayload;

      ThingName?: string;
    };

    export namespace Thing {
      export type AttributePayload = {
        Attributes?: Record<string, string>;
      };
    }

    export type DomainConfiguration = {
      DomainConfigurationName?: string;

      AuthorizerConfig?: AWS.IoT.DomainConfiguration.AuthorizerConfig;

      DomainName?: string;

      ServerCertificateArns?: string[];

      ServiceType?: string;

      ValidationCertificateArn?: string;

      DomainConfigurationStatus?: string;

      Tags?: Tag[];
    };

    export namespace DomainConfiguration {
      export type AuthorizerConfig = {
        AllowAuthorizerOverride?: boolean;

        DefaultAuthorizerName?: string;
      };

      export type ServerCertificateSummary = {
        ServerCertificateArn?: string;

        ServerCertificateStatus?: string;

        ServerCertificateStatusDetail?: string;
      };
    }

    export type CustomMetric = {
      MetricName?: string;

      DisplayName?: string;

      MetricType: string;

      Tags?: Tag[];
    };

    export type Authorizer = {
      AuthorizerFunctionArn: string;

      AuthorizerName?: string;

      SigningDisabled?: boolean;

      Status?: string;

      TokenKeyName?: string;

      TokenSigningPublicKeys?: Record<string, string>;

      Tags?: Tag[];
    };

    export type Dimension = {
      Name?: string;

      Type: string;

      StringValues: string[];

      Tags?: Tag[];
    };

    export type ThingPrincipalAttachment = {
      Principal: string;

      ThingName: string;
    };

    export type Policy = {
      PolicyDocument: JSONString;

      PolicyName?: string;
    };

    export type ScheduledAudit = {
      ScheduledAuditName?: string;

      Frequency: string;

      DayOfMonth?: string;

      DayOfWeek?: string;

      TargetCheckNames: string[];

      Tags?: Tag[];
    };

    export type PolicyPrincipalAttachment = {
      PolicyName: string;

      Principal: string;
    };

    export type Certificate = {
      CACertificatePem?: string;

      CertificatePem?: string;

      CertificateSigningRequest?: string;

      CertificateMode?: string;

      Status: string;
    };
  }

  export namespace AutoScaling {
    export type LaunchConfiguration = {
      AssociatePublicIpAddress?: boolean;

      BlockDeviceMappings?: AWS.AutoScaling.LaunchConfiguration.BlockDeviceMapping[];

      ClassicLinkVPCId?: string;

      ClassicLinkVPCSecurityGroups?: string[];

      EbsOptimized?: boolean;

      IamInstanceProfile?: string;

      ImageId: string;

      InstanceId?: string;

      InstanceMonitoring?: boolean;

      InstanceType: string;

      KernelId?: string;

      KeyName?: string;

      LaunchConfigurationName?: string;

      MetadataOptions?: AWS.AutoScaling.LaunchConfiguration.MetadataOptions;

      PlacementTenancy?: string;

      RamDiskId?: string;

      SecurityGroups?: string[];

      SpotPrice?: string;

      UserData?: string;
    };

    export namespace LaunchConfiguration {
      export type BlockDeviceMapping = {
        DeviceName: string;

        Ebs?: AWS.AutoScaling.LaunchConfiguration.BlockDevice;

        NoDevice?: boolean;

        VirtualName?: string;
      };

      export type MetadataOptions = {
        HttpEndpoint?: string;

        HttpPutResponseHopLimit?: number;

        HttpTokens?: string;
      };

      export type BlockDevice = {
        DeleteOnTermination?: boolean;

        Encrypted?: boolean;

        Iops?: number;

        SnapshotId?: string;

        Throughput?: number;

        VolumeSize?: number;

        VolumeType?: string;
      };
    }

    export type AutoScalingGroup = {
      AutoScalingGroupName?: string;

      AvailabilityZones?: string[];

      CapacityRebalance?: boolean;

      Context?: string;

      Cooldown?: string;

      DesiredCapacity?: string;

      HealthCheckGracePeriod?: number;

      HealthCheckType?: string;

      InstanceId?: string;

      LaunchConfigurationName?: string;

      LaunchTemplate?: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

      LifecycleHookSpecificationList?: AWS.AutoScaling.AutoScalingGroup.LifecycleHookSpecification[];

      LoadBalancerNames?: string[];

      MaxInstanceLifetime?: number;

      MaxSize: string;

      MetricsCollection?: AWS.AutoScaling.AutoScalingGroup.MetricsCollection[];

      MinSize: string;

      MixedInstancesPolicy?: AWS.AutoScaling.AutoScalingGroup.MixedInstancesPolicy;

      NewInstancesProtectedFromScaleIn?: boolean;

      NotificationConfigurations?: AWS.AutoScaling.AutoScalingGroup.NotificationConfiguration[];

      PlacementGroup?: string;

      ServiceLinkedRoleARN?: string;

      Tags?: AWS.AutoScaling.AutoScalingGroup.TagProperty[];

      TargetGroupARNs?: string[];

      TerminationPolicies?: string[];

      VPCZoneIdentifier?: string[];
    };

    export namespace AutoScalingGroup {
      export type LaunchTemplateOverrides = {
        InstanceType?: string;

        LaunchTemplateSpecification?: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

        WeightedCapacity?: string;
      };

      export type MetricsCollection = {
        Granularity: string;

        Metrics?: string[];
      };

      export type InstancesDistribution = {
        OnDemandAllocationStrategy?: string;

        OnDemandBaseCapacity?: number;

        OnDemandPercentageAboveBaseCapacity?: number;

        SpotAllocationStrategy?: string;

        SpotInstancePools?: number;

        SpotMaxPrice?: string;
      };

      export type LifecycleHookSpecification = {
        DefaultResult?: string;

        HeartbeatTimeout?: number;

        LifecycleHookName: string;

        LifecycleTransition: string;

        NotificationMetadata?: string;

        NotificationTargetARN?: string;

        RoleARN?: string;
      };

      export type LaunchTemplateSpecification = {
        LaunchTemplateId?: string;

        LaunchTemplateName?: string;

        Version: string;
      };

      export type MixedInstancesPolicy = {
        InstancesDistribution?: AWS.AutoScaling.AutoScalingGroup.InstancesDistribution;

        LaunchTemplate: AWS.AutoScaling.AutoScalingGroup.LaunchTemplate;
      };

      export type NotificationConfiguration = {
        NotificationTypes?: string[];

        TopicARN: string;
      };

      export type LaunchTemplate = {
        LaunchTemplateSpecification: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateSpecification;

        Overrides?: AWS.AutoScaling.AutoScalingGroup.LaunchTemplateOverrides[];
      };

      export type TagProperty = {
        Key: string;

        PropagateAtLaunch: boolean;

        Value: string;
      };
    }

    export type ScalingPolicy = {
      AdjustmentType?: string;

      AutoScalingGroupName: string;

      Cooldown?: string;

      EstimatedInstanceWarmup?: number;

      MetricAggregationType?: string;

      MinAdjustmentMagnitude?: number;

      PolicyType?: string;

      ScalingAdjustment?: number;

      StepAdjustments?: AWS.AutoScaling.ScalingPolicy.StepAdjustment[];

      TargetTrackingConfiguration?: AWS.AutoScaling.ScalingPolicy.TargetTrackingConfiguration;
    };

    export namespace ScalingPolicy {
      export type CustomizedMetricSpecification = {
        Dimensions?: AWS.AutoScaling.ScalingPolicy.MetricDimension[];

        MetricName: string;

        Namespace: string;

        Statistic: string;

        Unit?: string;
      };

      export type MetricDimension = {
        Name: string;

        Value: string;
      };

      export type TargetTrackingConfiguration = {
        CustomizedMetricSpecification?: AWS.AutoScaling.ScalingPolicy.CustomizedMetricSpecification;

        DisableScaleIn?: boolean;

        PredefinedMetricSpecification?: AWS.AutoScaling.ScalingPolicy.PredefinedMetricSpecification;

        TargetValue: number;
      };

      export type StepAdjustment = {
        MetricIntervalLowerBound?: number;

        MetricIntervalUpperBound?: number;

        ScalingAdjustment: number;
      };

      export type PredefinedMetricSpecification = {
        PredefinedMetricType: string;

        ResourceLabel?: string;
      };
    }

    export type ScheduledAction = {
      AutoScalingGroupName: string;

      DesiredCapacity?: number;

      EndTime?: string;

      MaxSize?: number;

      MinSize?: number;

      Recurrence?: string;

      StartTime?: string;

      TimeZone?: string;
    };

    export type LifecycleHook = {
      AutoScalingGroupName: string;

      DefaultResult?: string;

      HeartbeatTimeout?: number;

      LifecycleHookName?: string;

      LifecycleTransition: string;

      NotificationMetadata?: string;

      NotificationTargetARN?: string;

      RoleARN?: string;
    };

    export type WarmPool = {
      AutoScalingGroupName: string;

      MaxGroupPreparedCapacity?: number;

      MinSize?: number;

      PoolState?: string;
    };
  }

  export namespace CloudFront {
    export type Distribution = {
      DistributionConfig: AWS.CloudFront.Distribution.DistributionConfig;

      Tags?: Tag[];
    };

    export namespace Distribution {
      export type Cookies = {
        Forward: string;

        WhitelistedNames?: string[];
      };

      export type DistributionConfig = {
        Aliases?: string[];

        CNAMEs?: string[];

        CacheBehaviors?: AWS.CloudFront.Distribution.CacheBehavior[];

        Comment?: string;

        CustomErrorResponses?: AWS.CloudFront.Distribution.CustomErrorResponse[];

        CustomOrigin?: AWS.CloudFront.Distribution.LegacyCustomOrigin;

        DefaultCacheBehavior?: AWS.CloudFront.Distribution.DefaultCacheBehavior;

        DefaultRootObject?: string;

        Enabled: boolean;

        HttpVersion?: string;

        IPV6Enabled?: boolean;

        Logging?: AWS.CloudFront.Distribution.Logging;

        OriginGroups?: AWS.CloudFront.Distribution.OriginGroups;

        Origins?: AWS.CloudFront.Distribution.Origin[];

        PriceClass?: string;

        Restrictions?: AWS.CloudFront.Distribution.Restrictions;

        S3Origin?: AWS.CloudFront.Distribution.LegacyS3Origin;

        ViewerCertificate?: AWS.CloudFront.Distribution.ViewerCertificate;

        WebACLId?: string;
      };

      export type LegacyS3Origin = {
        DNSName: string;

        OriginAccessIdentity?: string;
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
        HTTPPort?: number;

        HTTPSPort?: number;

        OriginKeepaliveTimeout?: number;

        OriginProtocolPolicy: string;

        OriginReadTimeout?: number;

        OriginSSLProtocols?: string[];
      };

      export type OriginGroups = {
        Items?: AWS.CloudFront.Distribution.OriginGroup[];

        Quantity: number;
      };

      export type OriginGroupMembers = {
        Items: AWS.CloudFront.Distribution.OriginGroupMember[];

        Quantity: number;
      };

      export type GeoRestriction = {
        Locations?: string[];

        RestrictionType: string;
      };

      export type ViewerCertificate = {
        AcmCertificateArn?: string;

        CloudFrontDefaultCertificate?: boolean;

        IamCertificateId?: string;

        MinimumProtocolVersion?: string;

        SslSupportMethod?: string;
      };

      export type CustomErrorResponse = {
        ErrorCachingMinTTL?: number;

        ErrorCode: number;

        ResponseCode?: number;

        ResponsePagePath?: string;
      };

      export type LambdaFunctionAssociation = {
        EventType?: string;

        IncludeBody?: boolean;

        LambdaFunctionARN?: string;
      };

      export type OriginGroupMember = {
        OriginId: string;
      };

      export type CacheBehavior = {
        AllowedMethods?: string[];

        CachePolicyId?: string;

        CachedMethods?: string[];

        Compress?: boolean;

        DefaultTTL?: number;

        FieldLevelEncryptionId?: string;

        ForwardedValues?: AWS.CloudFront.Distribution.ForwardedValues;

        FunctionAssociations?: AWS.CloudFront.Distribution.FunctionAssociation[];

        LambdaFunctionAssociations?: AWS.CloudFront.Distribution.LambdaFunctionAssociation[];

        MaxTTL?: number;

        MinTTL?: number;

        OriginRequestPolicyId?: string;

        PathPattern: string;

        RealtimeLogConfigArn?: string;

        SmoothStreaming?: boolean;

        TargetOriginId: string;

        TrustedKeyGroups?: string[];

        TrustedSigners?: string[];

        ViewerProtocolPolicy: string;
      };

      export type LegacyCustomOrigin = {
        DNSName: string;

        HTTPPort?: number;

        HTTPSPort?: number;

        OriginProtocolPolicy: string;

        OriginSSLProtocols: string[];
      };

      export type DefaultCacheBehavior = {
        AllowedMethods?: string[];

        CachePolicyId?: string;

        CachedMethods?: string[];

        Compress?: boolean;

        DefaultTTL?: number;

        FieldLevelEncryptionId?: string;

        ForwardedValues?: AWS.CloudFront.Distribution.ForwardedValues;

        FunctionAssociations?: AWS.CloudFront.Distribution.FunctionAssociation[];

        LambdaFunctionAssociations?: AWS.CloudFront.Distribution.LambdaFunctionAssociation[];

        MaxTTL?: number;

        MinTTL?: number;

        OriginRequestPolicyId?: string;

        RealtimeLogConfigArn?: string;

        SmoothStreaming?: boolean;

        TargetOriginId: string;

        TrustedKeyGroups?: string[];

        TrustedSigners?: string[];

        ViewerProtocolPolicy: string;
      };

      export type Restrictions = {
        GeoRestriction: AWS.CloudFront.Distribution.GeoRestriction;
      };

      export type Origin = {
        ConnectionAttempts?: number;

        ConnectionTimeout?: number;

        CustomOriginConfig?: AWS.CloudFront.Distribution.CustomOriginConfig;

        DomainName: string;

        Id: string;

        OriginCustomHeaders?: AWS.CloudFront.Distribution.OriginCustomHeader[];

        OriginPath?: string;

        OriginShield?: AWS.CloudFront.Distribution.OriginShield;

        S3OriginConfig?: AWS.CloudFront.Distribution.S3OriginConfig;
      };

      export type StatusCodes = {
        Items: number[];

        Quantity: number;
      };

      export type OriginGroupFailoverCriteria = {
        StatusCodes: AWS.CloudFront.Distribution.StatusCodes;
      };

      export type ForwardedValues = {
        Cookies?: AWS.CloudFront.Distribution.Cookies;

        Headers?: string[];

        QueryString: boolean;

        QueryStringCacheKeys?: string[];
      };

      export type OriginShield = {
        Enabled?: boolean;

        OriginShieldRegion?: string;
      };

      export type S3OriginConfig = {
        OriginAccessIdentity?: string;
      };

      export type Logging = {
        Bucket: string;

        IncludeCookies?: boolean;

        Prefix?: string;
      };

      export type FunctionAssociation = {
        EventType?: string;

        FunctionARN?: string;
      };
    }

    export type CachePolicy = {
      CachePolicyConfig: AWS.CloudFront.CachePolicy.CachePolicyConfig;
    };

    export namespace CachePolicy {
      export type HeadersConfig = {
        HeaderBehavior: string;

        Headers?: string[];
      };

      export type CachePolicyConfig = {
        Comment?: string;

        DefaultTTL: number;

        MaxTTL: number;

        MinTTL: number;

        Name: string;

        ParametersInCacheKeyAndForwardedToOrigin: AWS.CloudFront.CachePolicy.ParametersInCacheKeyAndForwardedToOrigin;
      };

      export type ParametersInCacheKeyAndForwardedToOrigin = {
        CookiesConfig: AWS.CloudFront.CachePolicy.CookiesConfig;

        EnableAcceptEncodingBrotli?: boolean;

        EnableAcceptEncodingGzip: boolean;

        HeadersConfig: AWS.CloudFront.CachePolicy.HeadersConfig;

        QueryStringsConfig: AWS.CloudFront.CachePolicy.QueryStringsConfig;
      };

      export type QueryStringsConfig = {
        QueryStringBehavior: string;

        QueryStrings?: string[];
      };

      export type CookiesConfig = {
        CookieBehavior: string;

        Cookies?: string[];
      };
    }

    export type KeyGroup = {
      KeyGroupConfig: AWS.CloudFront.KeyGroup.KeyGroupConfig;
    };

    export namespace KeyGroup {
      export type KeyGroupConfig = {
        Comment?: string;

        Items: string[];

        Name: string;
      };
    }

    export type OriginRequestPolicy = {
      OriginRequestPolicyConfig: AWS.CloudFront.OriginRequestPolicy.OriginRequestPolicyConfig;
    };

    export namespace OriginRequestPolicy {
      export type OriginRequestPolicyConfig = {
        Comment?: string;

        CookiesConfig: AWS.CloudFront.OriginRequestPolicy.CookiesConfig;

        HeadersConfig: AWS.CloudFront.OriginRequestPolicy.HeadersConfig;

        Name: string;

        QueryStringsConfig: AWS.CloudFront.OriginRequestPolicy.QueryStringsConfig;
      };

      export type CookiesConfig = {
        CookieBehavior: string;

        Cookies?: string[];
      };

      export type QueryStringsConfig = {
        QueryStringBehavior: string;

        QueryStrings?: string[];
      };

      export type HeadersConfig = {
        HeaderBehavior: string;

        Headers?: string[];
      };
    }

    export type StreamingDistribution = {
      StreamingDistributionConfig: AWS.CloudFront.StreamingDistribution.StreamingDistributionConfig;

      Tags: Tag[];
    };

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

      export type StreamingDistributionConfig = {
        Logging?: AWS.CloudFront.StreamingDistribution.Logging;

        Comment: string;

        PriceClass?: string;

        S3Origin: AWS.CloudFront.StreamingDistribution.S3Origin;

        Enabled: boolean;

        Aliases?: string[];

        TrustedSigners: AWS.CloudFront.StreamingDistribution.TrustedSigners;
      };

      export type TrustedSigners = {
        Enabled: boolean;

        AwsAccountNumbers?: string[];
      };
    }

    export type CloudFrontOriginAccessIdentity = {
      CloudFrontOriginAccessIdentityConfig: AWS.CloudFront.CloudFrontOriginAccessIdentity.CloudFrontOriginAccessIdentityConfig;
    };

    export namespace CloudFrontOriginAccessIdentity {
      export type CloudFrontOriginAccessIdentityConfig = {
        Comment: string;
      };
    }

    export type RealtimeLogConfig = {
      EndPoints: AWS.CloudFront.RealtimeLogConfig.EndPoint[];

      Fields: string[];

      Name: string;

      SamplingRate: number;
    };

    export namespace RealtimeLogConfig {
      export type EndPoint = {
        KinesisStreamConfig: AWS.CloudFront.RealtimeLogConfig.KinesisStreamConfig;

        StreamType: string;
      };

      export type KinesisStreamConfig = {
        RoleArn: string;

        StreamArn: string;
      };
    }

    export type PublicKey = {
      PublicKeyConfig: AWS.CloudFront.PublicKey.PublicKeyConfig;
    };

    export namespace PublicKey {
      export type PublicKeyConfig = {
        CallerReference: string;

        Comment?: string;

        EncodedKey: string;

        Name: string;
      };
    }

    export type Function = {
      AutoPublish?: boolean;

      FunctionCode?: string;

      FunctionConfig?: AWS.CloudFront.Function.FunctionConfig;

      FunctionMetadata?: AWS.CloudFront.Function.FunctionMetadata;

      Name: string;
    };

    export namespace Function {
      export type FunctionConfig = {
        Comment: string;

        Runtime: string;
      };

      export type FunctionMetadata = {
        FunctionARN?: string;
      };
    }
  }

  export namespace EMR {
    export type Step = {
      ActionOnFailure: string;

      HadoopJarStep: AWS.EMR.Step.HadoopJarStepConfig;

      JobFlowId: string;

      Name: string;
    };

    export namespace Step {
      export type HadoopJarStepConfig = {
        Args?: string[];

        Jar: string;

        MainClass?: string;

        StepProperties?: AWS.EMR.Step.KeyValue[];
      };

      export type KeyValue = {
        Key?: string;

        Value?: string;
      };
    }

    export type Cluster = {
      AdditionalInfo?: JSONString;

      Applications?: AWS.EMR.Cluster.Application[];

      AutoScalingRole?: string;

      BootstrapActions?: AWS.EMR.Cluster.BootstrapActionConfig[];

      Configurations?: AWS.EMR.Cluster.Configuration[];

      CustomAmiId?: string;

      EbsRootVolumeSize?: number;

      Instances: AWS.EMR.Cluster.JobFlowInstancesConfig;

      JobFlowRole: string;

      KerberosAttributes?: AWS.EMR.Cluster.KerberosAttributes;

      LogEncryptionKmsKeyId?: string;

      LogUri?: string;

      ManagedScalingPolicy?: AWS.EMR.Cluster.ManagedScalingPolicy;

      Name: string;

      ReleaseLabel?: string;

      ScaleDownBehavior?: string;

      SecurityConfiguration?: string;

      ServiceRole: string;

      StepConcurrencyLevel?: number;

      Steps?: AWS.EMR.Cluster.StepConfig[];

      Tags?: Tag[];

      VisibleToAllUsers?: boolean;
    };

    export namespace Cluster {
      export type ComputeLimits = {
        MaximumCapacityUnits: number;

        MaximumCoreCapacityUnits?: number;

        MaximumOnDemandCapacityUnits?: number;

        MinimumCapacityUnits: number;

        UnitType: string;
      };

      export type SpotProvisioningSpecification = {
        AllocationStrategy?: string;

        BlockDurationMinutes?: number;

        TimeoutAction: string;

        TimeoutDurationMinutes: number;
      };

      export type BootstrapActionConfig = {
        Name: string;

        ScriptBootstrapAction: AWS.EMR.Cluster.ScriptBootstrapActionConfig;
      };

      export type StepConfig = {
        ActionOnFailure?: string;

        HadoopJarStep: AWS.EMR.Cluster.HadoopJarStepConfig;

        Name: string;
      };

      export type EbsBlockDeviceConfig = {
        VolumeSpecification: AWS.EMR.Cluster.VolumeSpecification;

        VolumesPerInstance?: number;
      };

      export type ManagedScalingPolicy = {
        ComputeLimits?: AWS.EMR.Cluster.ComputeLimits;
      };

      export type CloudWatchAlarmDefinition = {
        ComparisonOperator: string;

        Dimensions?: AWS.EMR.Cluster.MetricDimension[];

        EvaluationPeriods?: number;

        MetricName: string;

        Namespace?: string;

        Period: number;

        Statistic?: string;

        Threshold: number;

        Unit?: string;
      };

      export type KeyValue = {
        Key?: string;

        Value?: string;
      };

      export type VolumeSpecification = {
        Iops?: number;

        SizeInGB: number;

        VolumeType: string;
      };

      export type InstanceFleetProvisioningSpecifications = {
        OnDemandSpecification?: AWS.EMR.Cluster.OnDemandProvisioningSpecification;

        SpotSpecification?: AWS.EMR.Cluster.SpotProvisioningSpecification;
      };

      export type InstanceGroupConfig = {
        AutoScalingPolicy?: AWS.EMR.Cluster.AutoScalingPolicy;

        BidPrice?: string;

        Configurations?: AWS.EMR.Cluster.Configuration[];

        EbsConfiguration?: AWS.EMR.Cluster.EbsConfiguration;

        InstanceCount: number;

        InstanceType: string;

        Market?: string;

        Name?: string;
      };

      export type KerberosAttributes = {
        ADDomainJoinPassword?: string;

        ADDomainJoinUser?: string;

        CrossRealmTrustPrincipalPassword?: string;

        KdcAdminPassword: string;

        Realm: string;
      };

      export type Application = {
        AdditionalInfo?: Record<string, string>;

        Args?: string[];

        Name?: string;

        Version?: string;
      };

      export type Configuration = {
        Classification?: string;

        ConfigurationProperties?: Record<string, string>;

        Configurations?: AWS.EMR.Cluster.Configuration[];
      };

      export type ScriptBootstrapActionConfig = {
        Args?: string[];

        Path: string;
      };

      export type EbsConfiguration = {
        EbsBlockDeviceConfigs?: AWS.EMR.Cluster.EbsBlockDeviceConfig[];

        EbsOptimized?: boolean;
      };

      export type InstanceTypeConfig = {
        BidPrice?: string;

        BidPriceAsPercentageOfOnDemandPrice?: number;

        Configurations?: AWS.EMR.Cluster.Configuration[];

        EbsConfiguration?: AWS.EMR.Cluster.EbsConfiguration;

        InstanceType: string;

        WeightedCapacity?: number;
      };

      export type MetricDimension = {
        Key: string;

        Value: string;
      };

      export type OnDemandProvisioningSpecification = {
        AllocationStrategy: string;
      };

      export type ScalingTrigger = {
        CloudWatchAlarmDefinition: AWS.EMR.Cluster.CloudWatchAlarmDefinition;
      };

      export type InstanceFleetConfig = {
        InstanceTypeConfigs?: AWS.EMR.Cluster.InstanceTypeConfig[];

        LaunchSpecifications?: AWS.EMR.Cluster.InstanceFleetProvisioningSpecifications;

        Name?: string;

        TargetOnDemandCapacity?: number;

        TargetSpotCapacity?: number;
      };

      export type JobFlowInstancesConfig = {
        AdditionalMasterSecurityGroups?: string[];

        AdditionalSlaveSecurityGroups?: string[];

        CoreInstanceFleet?: AWS.EMR.Cluster.InstanceFleetConfig;

        CoreInstanceGroup?: AWS.EMR.Cluster.InstanceGroupConfig;

        Ec2KeyName?: string;

        Ec2SubnetId?: string;

        Ec2SubnetIds?: string[];

        EmrManagedMasterSecurityGroup?: string;

        EmrManagedSlaveSecurityGroup?: string;

        HadoopVersion?: string;

        KeepJobFlowAliveWhenNoSteps?: boolean;

        MasterInstanceFleet?: AWS.EMR.Cluster.InstanceFleetConfig;

        MasterInstanceGroup?: AWS.EMR.Cluster.InstanceGroupConfig;

        Placement?: AWS.EMR.Cluster.PlacementType;

        ServiceAccessSecurityGroup?: string;

        TerminationProtected?: boolean;
      };

      export type ScalingConstraints = {
        MaxCapacity: number;

        MinCapacity: number;
      };

      export type ScalingAction = {
        Market?: string;

        SimpleScalingPolicyConfiguration: AWS.EMR.Cluster.SimpleScalingPolicyConfiguration;
      };

      export type SimpleScalingPolicyConfiguration = {
        AdjustmentType?: string;

        CoolDown?: number;

        ScalingAdjustment: number;
      };

      export type PlacementType = {
        AvailabilityZone: string;
      };

      export type ScalingRule = {
        Action: AWS.EMR.Cluster.ScalingAction;

        Description?: string;

        Name: string;

        Trigger: AWS.EMR.Cluster.ScalingTrigger;
      };

      export type AutoScalingPolicy = {
        Constraints: AWS.EMR.Cluster.ScalingConstraints;

        Rules: AWS.EMR.Cluster.ScalingRule[];
      };

      export type HadoopJarStepConfig = {
        Args?: string[];

        Jar: string;

        MainClass?: string;

        StepProperties?: AWS.EMR.Cluster.KeyValue[];
      };
    }

    export type InstanceGroupConfig = {
      AutoScalingPolicy?: AWS.EMR.InstanceGroupConfig.AutoScalingPolicy;

      BidPrice?: string;

      Configurations?: AWS.EMR.InstanceGroupConfig.Configuration[];

      EbsConfiguration?: AWS.EMR.InstanceGroupConfig.EbsConfiguration;

      InstanceCount: number;

      InstanceRole: string;

      InstanceType: string;

      JobFlowId: string;

      Market?: string;

      Name?: string;
    };

    export namespace InstanceGroupConfig {
      export type AutoScalingPolicy = {
        Constraints: AWS.EMR.InstanceGroupConfig.ScalingConstraints;

        Rules: AWS.EMR.InstanceGroupConfig.ScalingRule[];
      };

      export type Configuration = {
        Classification?: string;

        ConfigurationProperties?: Record<string, string>;

        Configurations?: AWS.EMR.InstanceGroupConfig.Configuration[];
      };

      export type MetricDimension = {
        Key: string;

        Value: string;
      };

      export type SimpleScalingPolicyConfiguration = {
        AdjustmentType?: string;

        CoolDown?: number;

        ScalingAdjustment: number;
      };

      export type ScalingRule = {
        Action: AWS.EMR.InstanceGroupConfig.ScalingAction;

        Description?: string;

        Name: string;

        Trigger: AWS.EMR.InstanceGroupConfig.ScalingTrigger;
      };

      export type CloudWatchAlarmDefinition = {
        ComparisonOperator: string;

        Dimensions?: AWS.EMR.InstanceGroupConfig.MetricDimension[];

        EvaluationPeriods?: number;

        MetricName: string;

        Namespace?: string;

        Period: number;

        Statistic?: string;

        Threshold: number;

        Unit?: string;
      };

      export type EbsBlockDeviceConfig = {
        VolumeSpecification: AWS.EMR.InstanceGroupConfig.VolumeSpecification;

        VolumesPerInstance?: number;
      };

      export type ScalingAction = {
        Market?: string;

        SimpleScalingPolicyConfiguration: AWS.EMR.InstanceGroupConfig.SimpleScalingPolicyConfiguration;
      };

      export type ScalingTrigger = {
        CloudWatchAlarmDefinition: AWS.EMR.InstanceGroupConfig.CloudWatchAlarmDefinition;
      };

      export type VolumeSpecification = {
        Iops?: number;

        SizeInGB: number;

        VolumeType: string;
      };

      export type EbsConfiguration = {
        EbsBlockDeviceConfigs?: AWS.EMR.InstanceGroupConfig.EbsBlockDeviceConfig[];

        EbsOptimized?: boolean;
      };

      export type ScalingConstraints = {
        MaxCapacity: number;

        MinCapacity: number;
      };
    }

    export type InstanceFleetConfig = {
      ClusterId: string;

      InstanceFleetType: string;

      InstanceTypeConfigs?: AWS.EMR.InstanceFleetConfig.InstanceTypeConfig[];

      LaunchSpecifications?: AWS.EMR.InstanceFleetConfig.InstanceFleetProvisioningSpecifications;

      Name?: string;

      TargetOnDemandCapacity?: number;

      TargetSpotCapacity?: number;
    };

    export namespace InstanceFleetConfig {
      export type Configuration = {
        Classification?: string;

        ConfigurationProperties?: Record<string, string>;

        Configurations?: AWS.EMR.InstanceFleetConfig.Configuration[];
      };

      export type InstanceTypeConfig = {
        BidPrice?: string;

        BidPriceAsPercentageOfOnDemandPrice?: number;

        Configurations?: AWS.EMR.InstanceFleetConfig.Configuration[];

        EbsConfiguration?: AWS.EMR.InstanceFleetConfig.EbsConfiguration;

        InstanceType: string;

        WeightedCapacity?: number;
      };

      export type SpotProvisioningSpecification = {
        AllocationStrategy?: string;

        BlockDurationMinutes?: number;

        TimeoutAction: string;

        TimeoutDurationMinutes: number;
      };

      export type EbsConfiguration = {
        EbsBlockDeviceConfigs?: AWS.EMR.InstanceFleetConfig.EbsBlockDeviceConfig[];

        EbsOptimized?: boolean;
      };

      export type OnDemandProvisioningSpecification = {
        AllocationStrategy: string;
      };

      export type VolumeSpecification = {
        Iops?: number;

        SizeInGB: number;

        VolumeType: string;
      };

      export type InstanceFleetProvisioningSpecifications = {
        OnDemandSpecification?: AWS.EMR.InstanceFleetConfig.OnDemandProvisioningSpecification;

        SpotSpecification?: AWS.EMR.InstanceFleetConfig.SpotProvisioningSpecification;
      };

      export type EbsBlockDeviceConfig = {
        VolumeSpecification: AWS.EMR.InstanceFleetConfig.VolumeSpecification;

        VolumesPerInstance?: number;
      };
    }

    export type SecurityConfiguration = {
      Name?: string;

      SecurityConfiguration: JSONString;
    };

    export type StudioSessionMapping = {
      IdentityName: string;

      IdentityType: string;

      SessionPolicyArn: string;

      StudioId: string;
    };

    export type Studio = {
      AuthMode: string;

      DefaultS3Location: string;

      Description?: string;

      EngineSecurityGroupId: string;

      Name: string;

      ServiceRole: string;

      SubnetIds: string[];

      Tags?: Tag[];

      UserRole: string;

      VpcId: string;

      WorkspaceSecurityGroupId: string;
    };
  }

  export namespace Cassandra {
    export type Table = {
      KeyspaceName: string;

      TableName?: string;

      RegularColumns?: AWS.Cassandra.Table.Column[];

      PartitionKeyColumns: AWS.Cassandra.Table.Column[];

      ClusteringKeyColumns?: AWS.Cassandra.Table.ClusteringKeyColumn[];

      BillingMode?: AWS.Cassandra.Table.BillingMode;

      PointInTimeRecoveryEnabled?: boolean;

      Tags?: Tag[];
    };

    export namespace Table {
      export type BillingMode = {
        Mode: string;

        ProvisionedThroughput?: AWS.Cassandra.Table.ProvisionedThroughput;
      };

      export type Column = {
        ColumnName: string;

        ColumnType: string;
      };

      export type ClusteringKeyColumn = {
        Column: AWS.Cassandra.Table.Column;

        OrderBy?: string;
      };

      export type ProvisionedThroughput = {
        ReadCapacityUnits: number;

        WriteCapacityUnits: number;
      };
    }

    export type Keyspace = {
      KeyspaceName?: string;

      Tags?: Tag[];
    };
  }

  export namespace WAFv2 {
    export type RuleGroup = {
      Capacity: number;

      Description?: string;

      Name?: string;

      Scope: string;

      Rules?: AWS.WAFv2.RuleGroup.Rule[];

      VisibilityConfig: AWS.WAFv2.RuleGroup.VisibilityConfig;

      Tags?: Tag[];

      CustomResponseBodies?: Record<
        string,
        AWS.WAFv2.RuleGroup.CustomResponseBody
      >;
    };

    export namespace RuleGroup {
      export type JsonMatchPattern = {
        All?: JSONString;

        IncludedPaths?: string[];
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
        Allow?: JSONString;

        Block?: JSONString;

        Count?: JSONString;
      };

      export type Statement = {
        ByteMatchStatement?: AWS.WAFv2.RuleGroup.ByteMatchStatement;

        SqliMatchStatement?: AWS.WAFv2.RuleGroup.SqliMatchStatement;

        XssMatchStatement?: AWS.WAFv2.RuleGroup.XssMatchStatement;

        SizeConstraintStatement?: AWS.WAFv2.RuleGroup.SizeConstraintStatement;

        GeoMatchStatement?: AWS.WAFv2.RuleGroup.GeoMatchStatement;

        IPSetReferenceStatement?: AWS.WAFv2.RuleGroup.IPSetReferenceStatement;

        RegexPatternSetReferenceStatement?: AWS.WAFv2.RuleGroup.RegexPatternSetReferenceStatement;

        RateBasedStatement?: AWS.WAFv2.RuleGroup.RateBasedStatement;

        AndStatement?: AWS.WAFv2.RuleGroup.AndStatement;

        OrStatement?: AWS.WAFv2.RuleGroup.OrStatement;

        NotStatement?: AWS.WAFv2.RuleGroup.NotStatement;

        LabelMatchStatement?: AWS.WAFv2.RuleGroup.LabelMatchStatement;
      };

      export type LabelSummary = {
        Name?: string;
      };

      export type FieldToMatch = {
        SingleHeader?: JSONString;

        SingleQueryArgument?: JSONString;

        AllQueryArguments?: JSONString;

        UriPath?: JSONString;

        QueryString?: JSONString;

        Body?: JSONString;

        Method?: JSONString;

        JsonBody?: AWS.WAFv2.RuleGroup.JsonBody;
      };

      export type IPSetReferenceStatement = {
        Arn: string;

        IPSetForwardedIPConfig?: AWS.WAFv2.RuleGroup.IPSetForwardedIPConfiguration;
      };

      export type RateBasedStatement = {
        Limit: number;

        AggregateKeyType: string;

        ScopeDownStatement?: AWS.WAFv2.RuleGroup.Statement;

        ForwardedIPConfig?: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration;
      };

      export type VisibilityConfig = {
        SampledRequestsEnabled: boolean;

        CloudWatchMetricsEnabled: boolean;

        MetricName: string;
      };

      export type GeoMatchStatement = {
        CountryCodes?: string[];

        ForwardedIPConfig?: AWS.WAFv2.RuleGroup.ForwardedIPConfiguration;
      };

      export type AndStatement = {
        Statements: AWS.WAFv2.RuleGroup.Statement[];
      };

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
        SearchString?: string;

        SearchStringBase64?: string;

        FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

        TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];

        PositionalConstraint: string;
      };

      export type RegexPatternSetReferenceStatement = {
        Arn: string;

        FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

        TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
      };

      export type OrStatement = {
        Statements: AWS.WAFv2.RuleGroup.Statement[];
      };

      export type Rule = {
        Name: string;

        Priority: number;

        Statement: AWS.WAFv2.RuleGroup.Statement;

        Action?: AWS.WAFv2.RuleGroup.RuleAction;

        RuleLabels?: AWS.WAFv2.RuleGroup.Label[];

        VisibilityConfig: AWS.WAFv2.RuleGroup.VisibilityConfig;
      };

      export type JsonBody = {
        MatchPattern: AWS.WAFv2.RuleGroup.JsonMatchPattern;

        MatchScope: string;

        InvalidFallbackBehavior?: string;
      };

      export type CustomResponseBody = {
        ContentType: string;

        Content: string;
      };

      export type Label = {
        Name: string;
      };

      export type SqliMatchStatement = {
        FieldToMatch: AWS.WAFv2.RuleGroup.FieldToMatch;

        TextTransformations: AWS.WAFv2.RuleGroup.TextTransformation[];
      };

      export type NotStatement = {
        Statement: AWS.WAFv2.RuleGroup.Statement;
      };

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
    }

    export type WebACL = {
      DefaultAction: AWS.WAFv2.WebACL.DefaultAction;

      Description?: string;

      Name?: string;

      Scope: string;

      Rules?: AWS.WAFv2.WebACL.Rule[];

      VisibilityConfig: AWS.WAFv2.WebACL.VisibilityConfig;

      Tags?: Tag[];

      CustomResponseBodies?: Record<
        string,
        AWS.WAFv2.WebACL.CustomResponseBody
      >;
    };

    export namespace WebACL {
      export type CustomRequestHandling = {
        InsertHeaders: AWS.WAFv2.WebACL.CustomHTTPHeader[];
      };

      export type ManagedRuleGroupStatement = {
        Name: string;

        VendorName: string;

        ExcludedRules?: AWS.WAFv2.WebACL.ExcludedRule[];

        ScopeDownStatement?: AWS.WAFv2.WebACL.Statement;
      };

      export type TextTransformation = {
        Priority: number;

        Type: string;
      };

      export type AllowAction = {
        CustomRequestHandling?: AWS.WAFv2.WebACL.CustomRequestHandling;
      };

      export type DefaultAction = {
        Allow?: AWS.WAFv2.WebACL.AllowAction;

        Block?: AWS.WAFv2.WebACL.BlockAction;
      };

      export type XssMatchStatement = {
        FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

        TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
      };

      export type ByteMatchStatement = {
        SearchString?: string;

        SearchStringBase64?: string;

        FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

        TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];

        PositionalConstraint: string;
      };

      export type ForwardedIPConfiguration = {
        HeaderName: string;

        FallbackBehavior: string;
      };

      export type OrStatement = {
        Statements: AWS.WAFv2.WebACL.Statement[];
      };

      export type Label = {
        Name: string;
      };

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
        ByteMatchStatement?: AWS.WAFv2.WebACL.ByteMatchStatement;

        SqliMatchStatement?: AWS.WAFv2.WebACL.SqliMatchStatement;

        XssMatchStatement?: AWS.WAFv2.WebACL.XssMatchStatement;

        SizeConstraintStatement?: AWS.WAFv2.WebACL.SizeConstraintStatement;

        GeoMatchStatement?: AWS.WAFv2.WebACL.GeoMatchStatement;

        RuleGroupReferenceStatement?: AWS.WAFv2.WebACL.RuleGroupReferenceStatement;

        IPSetReferenceStatement?: AWS.WAFv2.WebACL.IPSetReferenceStatement;

        RegexPatternSetReferenceStatement?: AWS.WAFv2.WebACL.RegexPatternSetReferenceStatement;

        ManagedRuleGroupStatement?: AWS.WAFv2.WebACL.ManagedRuleGroupStatement;

        RateBasedStatement?: AWS.WAFv2.WebACL.RateBasedStatement;

        AndStatement?: AWS.WAFv2.WebACL.AndStatement;

        OrStatement?: AWS.WAFv2.WebACL.OrStatement;

        NotStatement?: AWS.WAFv2.WebACL.NotStatement;

        LabelMatchStatement?: AWS.WAFv2.WebACL.LabelMatchStatement;
      };

      export type BlockAction = {
        CustomResponse?: AWS.WAFv2.WebACL.CustomResponse;
      };

      export type RuleGroupReferenceStatement = {
        Arn: string;

        ExcludedRules?: AWS.WAFv2.WebACL.ExcludedRule[];
      };

      export type LabelMatchStatement = {
        Scope: string;

        Key: string;
      };

      export type JsonMatchPattern = {
        All?: JSONString;

        IncludedPaths?: string[];
      };

      export type AndStatement = {
        Statements: AWS.WAFv2.WebACL.Statement[];
      };

      export type CountAction = {
        CustomRequestHandling?: AWS.WAFv2.WebACL.CustomRequestHandling;
      };

      export type SizeConstraintStatement = {
        FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

        ComparisonOperator: string;

        Size: number;

        TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
      };

      export type FieldToMatch = {
        SingleHeader?: JSONString;

        SingleQueryArgument?: JSONString;

        AllQueryArguments?: JSONString;

        UriPath?: JSONString;

        QueryString?: JSONString;

        Body?: JSONString;

        Method?: JSONString;

        JsonBody?: AWS.WAFv2.WebACL.JsonBody;
      };

      export type SqliMatchStatement = {
        FieldToMatch: AWS.WAFv2.WebACL.FieldToMatch;

        TextTransformations: AWS.WAFv2.WebACL.TextTransformation[];
      };

      export type GeoMatchStatement = {
        CountryCodes?: string[];

        ForwardedIPConfig?: AWS.WAFv2.WebACL.ForwardedIPConfiguration;
      };

      export type RuleAction = {
        Allow?: AWS.WAFv2.WebACL.AllowAction;

        Block?: AWS.WAFv2.WebACL.BlockAction;

        Count?: AWS.WAFv2.WebACL.CountAction;
      };

      export type JsonBody = {
        MatchPattern: AWS.WAFv2.WebACL.JsonMatchPattern;

        MatchScope: string;

        InvalidFallbackBehavior?: string;
      };

      export type NotStatement = {
        Statement: AWS.WAFv2.WebACL.Statement;
      };

      export type OverrideAction = {
        Count?: JSONString;

        None?: JSONString;
      };

      export type Rule = {
        Name: string;

        Priority: number;

        Statement: AWS.WAFv2.WebACL.Statement;

        Action?: AWS.WAFv2.WebACL.RuleAction;

        OverrideAction?: AWS.WAFv2.WebACL.OverrideAction;

        RuleLabels?: AWS.WAFv2.WebACL.Label[];

        VisibilityConfig: AWS.WAFv2.WebACL.VisibilityConfig;
      };

      export type CustomResponse = {
        ResponseCode: number;

        CustomResponseBodyKey?: string;

        ResponseHeaders?: AWS.WAFv2.WebACL.CustomHTTPHeader[];
      };

      export type RateBasedStatement = {
        Limit: number;

        AggregateKeyType: string;

        ScopeDownStatement?: AWS.WAFv2.WebACL.Statement;

        ForwardedIPConfig?: AWS.WAFv2.WebACL.ForwardedIPConfiguration;
      };

      export type ExcludedRule = {
        Name: string;
      };

      export type VisibilityConfig = {
        SampledRequestsEnabled: boolean;

        CloudWatchMetricsEnabled: boolean;

        MetricName: string;
      };

      export type IPSetReferenceStatement = {
        Arn: string;

        IPSetForwardedIPConfig?: AWS.WAFv2.WebACL.IPSetForwardedIPConfiguration;
      };
    }

    export type RegexPatternSet = {
      Description?: string;

      Name?: string;

      RegularExpressionList: string[];

      Scope: string;

      Tags?: Tag[];
    };

    export type IPSet = {
      Description?: string;

      Name?: string;

      Scope: string;

      IPAddressVersion: string;

      Addresses: string[];

      Tags?: Tag[];
    };

    export type WebACLAssociation = {
      ResourceArn: string;

      WebACLArn: string;
    };
  }

  export namespace MediaPackage {
    export type OriginEndpoint = {
      Id: string;

      ChannelId: string;

      Description?: string;

      Whitelist?: string[];

      StartoverWindowSeconds?: number;

      TimeDelaySeconds?: number;

      ManifestName?: string;

      Origination?: string;

      Authorization?: AWS.MediaPackage.OriginEndpoint.Authorization;

      HlsPackage?: AWS.MediaPackage.OriginEndpoint.HlsPackage;

      DashPackage?: AWS.MediaPackage.OriginEndpoint.DashPackage;

      MssPackage?: AWS.MediaPackage.OriginEndpoint.MssPackage;

      CmafPackage?: AWS.MediaPackage.OriginEndpoint.CmafPackage;

      Tags?: Tag[];
    };

    export namespace OriginEndpoint {
      export type StreamSelection = {
        MinVideoBitsPerSecond?: number;

        MaxVideoBitsPerSecond?: number;

        StreamOrder?: string;
      };

      export type CmafPackage = {
        SegmentDurationSeconds?: number;

        SegmentPrefix?: string;

        Encryption?: AWS.MediaPackage.OriginEndpoint.CmafEncryption;

        StreamSelection?: AWS.MediaPackage.OriginEndpoint.StreamSelection;

        HlsManifests?: AWS.MediaPackage.OriginEndpoint.HlsManifest[];
      };

      export type MssEncryption = {
        SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;
      };

      export type Authorization = {
        SecretsRoleArn: string;

        CdnIdentifierSecret: string;
      };

      export type DashPackage = {
        SegmentDurationSeconds?: number;

        ManifestWindowSeconds?: number;

        Profile?: string;

        MinUpdatePeriodSeconds?: number;

        MinBufferTimeSeconds?: number;

        SuggestedPresentationDelaySeconds?: number;

        PeriodTriggers?: string[];

        ManifestLayout?: string;

        SegmentTemplateFormat?: string;

        AdTriggers?: string[];

        AdsOnDeliveryRestrictions?: string;

        Encryption?: AWS.MediaPackage.OriginEndpoint.DashEncryption;

        StreamSelection?: AWS.MediaPackage.OriginEndpoint.StreamSelection;

        UtcTiming?: string;

        UtcTimingUri?: string;
      };

      export type DashEncryption = {
        KeyRotationIntervalSeconds?: number;

        SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;
      };

      export type HlsManifest = {
        Id: string;

        ManifestName?: string;

        Url?: string;

        PlaylistWindowSeconds?: number;

        PlaylistType?: string;

        AdMarkers?: string;

        ProgramDateTimeIntervalSeconds?: number;

        IncludeIframeOnlyStream?: boolean;

        AdTriggers?: string[];

        AdsOnDeliveryRestrictions?: string;
      };

      export type SpekeKeyProvider = {
        ResourceId: string;

        SystemIds: string[];

        Url: string;

        RoleArn: string;

        CertificateArn?: string;
      };

      export type CmafEncryption = {
        KeyRotationIntervalSeconds?: number;

        SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;

        ConstantInitializationVector?: string;
      };

      export type HlsEncryption = {
        EncryptionMethod?: string;

        ConstantInitializationVector?: string;

        KeyRotationIntervalSeconds?: number;

        RepeatExtXKey?: boolean;

        SpekeKeyProvider: AWS.MediaPackage.OriginEndpoint.SpekeKeyProvider;
      };

      export type MssPackage = {
        ManifestWindowSeconds?: number;

        SegmentDurationSeconds?: number;

        Encryption?: AWS.MediaPackage.OriginEndpoint.MssEncryption;

        StreamSelection?: AWS.MediaPackage.OriginEndpoint.StreamSelection;
      };

      export type HlsPackage = {
        SegmentDurationSeconds?: number;

        PlaylistWindowSeconds?: number;

        PlaylistType?: string;

        AdMarkers?: string;

        AdTriggers?: string[];

        AdsOnDeliveryRestrictions?: string;

        ProgramDateTimeIntervalSeconds?: number;

        IncludeIframeOnlyStream?: boolean;

        UseAudioRenditionGroup?: boolean;

        Encryption?: AWS.MediaPackage.OriginEndpoint.HlsEncryption;

        StreamSelection?: AWS.MediaPackage.OriginEndpoint.StreamSelection;
      };
    }

    export type PackagingConfiguration = {
      Id: string;

      PackagingGroupId: string;

      CmafPackage?: AWS.MediaPackage.PackagingConfiguration.CmafPackage;

      DashPackage?: AWS.MediaPackage.PackagingConfiguration.DashPackage;

      HlsPackage?: AWS.MediaPackage.PackagingConfiguration.HlsPackage;

      MssPackage?: AWS.MediaPackage.PackagingConfiguration.MssPackage;

      Tags?: Tag[];
    };

    export namespace PackagingConfiguration {
      export type DashEncryption = {
        SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider;
      };

      export type SpekeKeyProvider = {
        RoleArn: string;

        SystemIds: string[];

        Url: string;
      };

      export type CmafPackage = {
        Encryption?: AWS.MediaPackage.PackagingConfiguration.CmafEncryption;

        HlsManifests: AWS.MediaPackage.PackagingConfiguration.HlsManifest[];

        SegmentDurationSeconds?: number;

        IncludeEncoderConfigurationInSegments?: boolean;
      };

      export type DashPackage = {
        DashManifests: AWS.MediaPackage.PackagingConfiguration.DashManifest[];

        Encryption?: AWS.MediaPackage.PackagingConfiguration.DashEncryption;

        PeriodTriggers?: string[];

        SegmentDurationSeconds?: number;

        SegmentTemplateFormat?: string;

        IncludeEncoderConfigurationInSegments?: boolean;
      };

      export type DashManifest = {
        ManifestLayout?: string;

        ManifestName?: string;

        MinBufferTimeSeconds?: number;

        Profile?: string;

        StreamSelection?: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
      };

      export type HlsEncryption = {
        ConstantInitializationVector?: string;

        EncryptionMethod?: string;

        SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider;
      };

      export type MssManifest = {
        ManifestName?: string;

        StreamSelection?: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
      };

      export type CmafEncryption = {
        SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider;
      };

      export type MssEncryption = {
        SpekeKeyProvider: AWS.MediaPackage.PackagingConfiguration.SpekeKeyProvider;
      };

      export type StreamSelection = {
        MaxVideoBitsPerSecond?: number;

        MinVideoBitsPerSecond?: number;

        StreamOrder?: string;
      };

      export type MssPackage = {
        Encryption?: AWS.MediaPackage.PackagingConfiguration.MssEncryption;

        MssManifests: AWS.MediaPackage.PackagingConfiguration.MssManifest[];

        SegmentDurationSeconds?: number;
      };

      export type HlsPackage = {
        Encryption?: AWS.MediaPackage.PackagingConfiguration.HlsEncryption;

        HlsManifests: AWS.MediaPackage.PackagingConfiguration.HlsManifest[];

        SegmentDurationSeconds?: number;

        UseAudioRenditionGroup?: boolean;
      };

      export type HlsManifest = {
        AdMarkers?: string;

        IncludeIframeOnlyStream?: boolean;

        ManifestName?: string;

        ProgramDateTimeIntervalSeconds?: number;

        RepeatExtXKey?: boolean;

        StreamSelection?: AWS.MediaPackage.PackagingConfiguration.StreamSelection;
      };
    }

    export type PackagingGroup = {
      Id: string;

      Authorization?: AWS.MediaPackage.PackagingGroup.Authorization;

      Tags?: Tag[];

      EgressAccessLogs?: AWS.MediaPackage.PackagingGroup.LogConfiguration;
    };

    export namespace PackagingGroup {
      export type LogConfiguration = {
        LogGroupName?: string;
      };

      export type Authorization = {
        CdnIdentifierSecret: string;

        SecretsRoleArn: string;
      };
    }

    export type Channel = {
      Id: string;

      Description?: string;

      Tags?: Tag[];

      EgressAccessLogs?: AWS.MediaPackage.Channel.LogConfiguration;

      IngressAccessLogs?: AWS.MediaPackage.Channel.LogConfiguration;
    };

    export namespace Channel {
      export type LogConfiguration = {
        LogGroupName?: string;
      };
    }

    export type Asset = {
      Id: string;

      PackagingGroupId: string;

      ResourceId?: string;

      SourceArn: string;

      SourceRoleArn: string;

      Tags?: Tag[];
    };

    export namespace Asset {
      export type EgressEndpoint = {
        PackagingConfigurationId: string;

        Url: string;
      };
    }
  }

  export namespace ACMPCA {
    export type Certificate = {
      ApiPassthrough?: AWS.ACMPCA.Certificate.ApiPassthrough;

      CertificateAuthorityArn: string;

      CertificateSigningRequest: string;

      SigningAlgorithm: string;

      TemplateArn?: string;

      Validity: AWS.ACMPCA.Certificate.Validity;

      ValidityNotBefore?: AWS.ACMPCA.Certificate.Validity;
    };

    export namespace Certificate {
      export type Extensions = {
        CertificatePolicies?: AWS.ACMPCA.Certificate.PolicyInformation[];

        ExtendedKeyUsage?: AWS.ACMPCA.Certificate.ExtendedKeyUsage[];

        KeyUsage?: AWS.ACMPCA.Certificate.KeyUsage;

        SubjectAlternativeNames?: AWS.ACMPCA.Certificate.GeneralName[];
      };

      export type Subject = {
        Country?: string;

        Organization?: string;

        OrganizationalUnit?: string;

        DistinguishedNameQualifier?: string;

        State?: string;

        CommonName?: string;

        SerialNumber?: string;

        Locality?: string;

        Title?: string;

        Surname?: string;

        GivenName?: string;

        Initials?: string;

        Pseudonym?: string;

        GenerationQualifier?: string;
      };

      export type PolicyInformation = {
        CertPolicyId: string;

        PolicyQualifiers?: AWS.ACMPCA.Certificate.PolicyQualifierInfo[];
      };

      export type PolicyQualifierInfo = {
        PolicyQualifierId: string;

        Qualifier: AWS.ACMPCA.Certificate.Qualifier;
      };

      export type Qualifier = {
        CpsUri: string;
      };

      export type GeneralName = {
        OtherName?: AWS.ACMPCA.Certificate.OtherName;

        Rfc822Name?: string;

        DnsName?: string;

        DirectoryName?: AWS.ACMPCA.Certificate.Subject;

        EdiPartyName?: AWS.ACMPCA.Certificate.EdiPartyName;

        UniformResourceIdentifier?: string;

        IpAddress?: string;

        RegisteredId?: string;
      };

      export type ApiPassthrough = {
        Extensions?: AWS.ACMPCA.Certificate.Extensions;

        Subject?: AWS.ACMPCA.Certificate.Subject;
      };

      export type EdiPartyName = {
        PartyName: string;

        NameAssigner: string;
      };

      export type OtherName = {
        TypeId: string;

        Value: string;
      };

      export type Validity = {
        Value: number;

        Type: string;
      };

      export type ExtendedKeyUsage = {
        ExtendedKeyUsageType?: string;

        ExtendedKeyUsageObjectIdentifier?: string;
      };

      export type KeyUsage = {
        DigitalSignature?: boolean;

        NonRepudiation?: boolean;

        KeyEncipherment?: boolean;

        DataEncipherment?: boolean;

        KeyAgreement?: boolean;

        KeyCertSign?: boolean;

        CRLSign?: boolean;

        EncipherOnly?: boolean;

        DecipherOnly?: boolean;
      };
    }

    export type CertificateAuthority = {
      Type: string;

      KeyAlgorithm: string;

      SigningAlgorithm: string;

      Subject: AWS.ACMPCA.CertificateAuthority.Subject;

      RevocationConfiguration?: AWS.ACMPCA.CertificateAuthority.RevocationConfiguration;

      Tags?: Tag[];

      CsrExtensions?: AWS.ACMPCA.CertificateAuthority.CsrExtensions;

      KeyStorageSecurityStandard?: string;
    };

    export namespace CertificateAuthority {
      export type RevocationConfiguration = {
        CrlConfiguration?: AWS.ACMPCA.CertificateAuthority.CrlConfiguration;
      };

      export type KeyUsage = {
        DigitalSignature?: boolean;

        NonRepudiation?: boolean;

        KeyEncipherment?: boolean;

        DataEncipherment?: boolean;

        KeyAgreement?: boolean;

        KeyCertSign?: boolean;

        CRLSign?: boolean;

        EncipherOnly?: boolean;

        DecipherOnly?: boolean;
      };

      export type CsrExtensions = {
        KeyUsage?: AWS.ACMPCA.CertificateAuthority.KeyUsage;

        SubjectInformationAccess?: AWS.ACMPCA.CertificateAuthority.AccessDescription[];
      };

      export type AccessDescription = {
        AccessMethod: AWS.ACMPCA.CertificateAuthority.AccessMethod;

        AccessLocation: AWS.ACMPCA.CertificateAuthority.GeneralName;
      };

      export type EdiPartyName = {
        PartyName: string;

        NameAssigner: string;
      };

      export type Subject = {
        Country?: string;

        Organization?: string;

        OrganizationalUnit?: string;

        DistinguishedNameQualifier?: string;

        State?: string;

        CommonName?: string;

        SerialNumber?: string;

        Locality?: string;

        Title?: string;

        Surname?: string;

        GivenName?: string;

        Initials?: string;

        Pseudonym?: string;

        GenerationQualifier?: string;
      };

      export type AccessMethod = {
        CustomObjectIdentifier?: string;

        AccessMethodType?: string;
      };

      export type OtherName = {
        TypeId: string;

        Value: string;
      };

      export type CrlConfiguration = {
        Enabled?: boolean;

        ExpirationInDays?: number;

        CustomCname?: string;

        S3BucketName?: string;

        S3ObjectAcl?: string;
      };

      export type GeneralName = {
        OtherName?: AWS.ACMPCA.CertificateAuthority.OtherName;

        Rfc822Name?: string;

        DnsName?: string;

        DirectoryName?: AWS.ACMPCA.CertificateAuthority.Subject;

        EdiPartyName?: AWS.ACMPCA.CertificateAuthority.EdiPartyName;

        UniformResourceIdentifier?: string;

        IpAddress?: string;

        RegisteredId?: string;
      };
    }

    export type CertificateAuthorityActivation = {
      CertificateAuthorityArn: string;

      Certificate: string;

      CertificateChain?: string;

      Status?: string;
    };
  }

  export namespace IoTWireless {
    export type WirelessDevice = {
      Type: string;

      Name?: string;

      Description?: string;

      DestinationName: string;

      LoRaWAN?: AWS.IoTWireless.WirelessDevice.LoRaWANDevice;

      Tags?: Tag[];

      ThingArn?: string;

      LastUplinkReceivedAt?: string;
    };

    export namespace WirelessDevice {
      export type AbpV11 = {
        DevAddr: string;

        SessionKeys: AWS.IoTWireless.WirelessDevice.SessionKeysAbpV11;
      };

      export type LoRaWANDevice = {
        DevEui?: string;

        DeviceProfileId?: string;

        ServiceProfileId?: string;

        OtaaV11?: AWS.IoTWireless.WirelessDevice.OtaaV11;

        OtaaV10x?: AWS.IoTWireless.WirelessDevice.OtaaV10x;

        AbpV11?: AWS.IoTWireless.WirelessDevice.AbpV11;

        AbpV10x?: AWS.IoTWireless.WirelessDevice.AbpV10x;
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
    }

    export type TaskDefinition = {
      Name?: string;

      AutoCreateTasks: boolean;

      Update?: AWS.IoTWireless.TaskDefinition.UpdateWirelessGatewayTaskCreate;

      LoRaWANUpdateGatewayTaskEntry?: AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskEntry;

      TaskDefinitionType?: string;

      Tags?: Tag[];
    };

    export namespace TaskDefinition {
      export type UpdateWirelessGatewayTaskCreate = {
        UpdateDataSource?: string;

        UpdateDataRole?: string;

        LoRaWAN?: AWS.IoTWireless.TaskDefinition.LoRaWANUpdateGatewayTaskCreate;
      };

      export type LoRaWANUpdateGatewayTaskEntry = {
        CurrentVersion?: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;

        UpdateVersion?: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;
      };

      export type LoRaWANGatewayVersion = {
        PackageVersion?: string;

        Model?: string;

        Station?: string;
      };

      export type LoRaWANUpdateGatewayTaskCreate = {
        UpdateSignature?: string;

        SigKeyCrc?: number;

        CurrentVersion?: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;

        UpdateVersion?: AWS.IoTWireless.TaskDefinition.LoRaWANGatewayVersion;
      };
    }

    export type DeviceProfile = {
      Name?: string;

      LoRaWAN?: AWS.IoTWireless.DeviceProfile.LoRaWANDeviceProfile;

      Tags?: Tag[];
    };

    export namespace DeviceProfile {
      export type LoRaWANDeviceProfile = {
        SupportsClassB?: boolean;

        ClassBTimeout?: number;

        PingSlotPeriod?: number;

        PingSlotDr?: number;

        PingSlotFreq?: number;

        SupportsClassC?: boolean;

        ClassCTimeout?: number;

        MacVersion?: string;

        RegParamsRevision?: string;

        MaxEirp?: number;

        MaxDutyCycle?: number;

        SupportsJoin?: boolean;

        RfRegion?: string;

        Supports32BitFCnt?: boolean;
      };
    }

    export type PartnerAccount = {
      Sidewalk?: AWS.IoTWireless.PartnerAccount.SidewalkAccountInfo;

      PartnerAccountId?: string;

      PartnerType?: string;

      AccountLinked?: boolean;

      SidewalkUpdate?: AWS.IoTWireless.PartnerAccount.SidewalkUpdateAccount;

      Fingerprint?: string;

      Tags?: Tag[];
    };

    export namespace PartnerAccount {
      export type SidewalkAccountInfo = {
        AppServerPrivateKey: string;
      };

      export type SidewalkUpdateAccount = {
        AppServerPrivateKey?: string;
      };
    }

    export type WirelessGateway = {
      Name?: string;

      Description?: string;

      Tags?: Tag[];

      LoRaWAN: AWS.IoTWireless.WirelessGateway.LoRaWANGateway;

      ThingArn?: string;

      LastUplinkReceivedAt?: string;
    };

    export namespace WirelessGateway {
      export type LoRaWANGateway = {
        GatewayEui: string;

        RfRegion: string;
      };
    }

    export type ServiceProfile = {
      Name?: string;

      LoRaWAN?: AWS.IoTWireless.ServiceProfile.LoRaWANServiceProfile;

      Tags?: Tag[];
    };

    export namespace ServiceProfile {
      export type LoRaWANServiceProfile = {
        UlRate?: number;

        UlBucketSize?: number;

        UlRatePolicy?: string;

        DlRate?: number;

        DlBucketSize?: number;

        DlRatePolicy?: string;

        AddGwMetadata?: boolean;

        DevStatusReqFreq?: number;

        ReportDevStatusBattery?: boolean;

        ReportDevStatusMargin?: boolean;

        DrMin?: number;

        DrMax?: number;

        ChannelMask?: string;

        PrAllowed?: boolean;

        HrAllowed?: boolean;

        RaAllowed?: boolean;

        NwkGeoLoc?: boolean;

        TargetPer?: number;

        MinGwDiversity?: number;
      };
    }

    export type Destination = {
      Name: string;

      Expression: string;

      ExpressionType: string;

      Description?: string;

      Tags?: Tag[];

      RoleArn: string;
    };
  }

  export namespace KinesisAnalyticsV2 {
    export type ApplicationReferenceDataSource = {
      ApplicationName: string;

      ReferenceDataSource: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.ReferenceDataSource;
    };

    export namespace ApplicationReferenceDataSource {
      export type RecordColumn = {
        Mapping?: string;

        SqlType: string;

        Name: string;
      };

      export type RecordFormat = {
        MappingParameters?: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.MappingParameters;

        RecordFormatType: string;
      };

      export type JSONMappingParameters = {
        RecordRowPath: string;
      };

      export type ReferenceDataSource = {
        ReferenceSchema: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.ReferenceSchema;

        TableName?: string;

        S3ReferenceDataSource?: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.S3ReferenceDataSource;
      };

      export type MappingParameters = {
        JSONMappingParameters?: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.JSONMappingParameters;

        CSVMappingParameters?: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.CSVMappingParameters;
      };

      export type S3ReferenceDataSource = {
        BucketARN: string;

        FileKey: string;
      };

      export type ReferenceSchema = {
        RecordEncoding?: string;

        RecordColumns: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordColumn[];

        RecordFormat: AWS.KinesisAnalyticsV2.ApplicationReferenceDataSource.RecordFormat;
      };

      export type CSVMappingParameters = {
        RecordRowDelimiter: string;

        RecordColumnDelimiter: string;
      };
    }

    export type Application = {
      ApplicationName?: string;

      RuntimeEnvironment: string;

      ApplicationMode?: string;

      ApplicationConfiguration?: AWS.KinesisAnalyticsV2.Application.ApplicationConfiguration;

      ApplicationDescription?: string;

      Tags?: Tag[];

      ServiceExecutionRole: string;
    };

    export type Application = {
      CustomArtifactsConfiguration?: AWS.KinesisAnalyticsV2.Application.CustomArtifactConfiguration[];
    };

    export namespace Application {
      export type CustomArtifactConfiguration = {
        MavenReference?: AWS.KinesisAnalyticsV2.Application.MavenReference;

        S3ContentLocation?: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

        ArtifactType: string;
      };

      export type S3ContentLocation = {
        BucketARN?: string;

        FileKey?: string;

        ObjectVersion?: string;
      };

      export type DeployAsApplicationConfiguration = {
        S3ContentLocation: AWS.KinesisAnalyticsV2.Application.S3ContentBaseLocation;
      };

      export type PropertyGroup = {
        PropertyMap?: JSONString;

        PropertyGroupId?: string;
      };

      export type MappingParameters = {
        JSONMappingParameters?: AWS.KinesisAnalyticsV2.Application.JSONMappingParameters;

        CSVMappingParameters?: AWS.KinesisAnalyticsV2.Application.CSVMappingParameters;
      };

      export type InputParallelism = {
        Count?: number;
      };

      export type FlinkApplicationConfiguration = {
        CheckpointConfiguration?: AWS.KinesisAnalyticsV2.Application.CheckpointConfiguration;

        ParallelismConfiguration?: AWS.KinesisAnalyticsV2.Application.ParallelismConfiguration;

        MonitoringConfiguration?: AWS.KinesisAnalyticsV2.Application.MonitoringConfiguration;
      };

      export type Input = {
        NamePrefix: string;

        InputSchema: AWS.KinesisAnalyticsV2.Application.InputSchema;

        KinesisStreamsInput?: AWS.KinesisAnalyticsV2.Application.KinesisStreamsInput;

        KinesisFirehoseInput?: AWS.KinesisAnalyticsV2.Application.KinesisFirehoseInput;

        InputProcessingConfiguration?: AWS.KinesisAnalyticsV2.Application.InputProcessingConfiguration;

        InputParallelism?: AWS.KinesisAnalyticsV2.Application.InputParallelism;
      };

      export type ApplicationSnapshotConfiguration = {
        SnapshotsEnabled: boolean;
      };

      export type KinesisFirehoseInput = {
        ResourceARN: string;
      };

      export type InputSchema = {
        RecordEncoding?: string;

        RecordColumns: AWS.KinesisAnalyticsV2.Application.RecordColumn[];

        RecordFormat: AWS.KinesisAnalyticsV2.Application.RecordFormat;
      };

      export type ParallelismConfiguration = {
        ConfigurationType: string;

        ParallelismPerKPU?: number;

        AutoScalingEnabled?: boolean;

        Parallelism?: number;
      };

      export type MonitoringConfiguration = {
        ConfigurationType: string;

        MetricsLevel?: string;

        LogLevel?: string;
      };

      export type SqlApplicationConfiguration = {
        Inputs?: AWS.KinesisAnalyticsV2.Application.Input[];
      };

      export type InputProcessingConfiguration = {
        InputLambdaProcessor?: AWS.KinesisAnalyticsV2.Application.InputLambdaProcessor;
      };

      export type ApplicationCodeConfiguration = {
        CodeContentType: string;

        CodeContent: AWS.KinesisAnalyticsV2.Application.CodeContent;
      };

      export type ZeppelinApplicationConfiguration = {
        CatalogConfiguration?: AWS.KinesisAnalyticsV2.Application.CatalogConfiguration;

        MonitoringConfiguration?: AWS.KinesisAnalyticsV2.Application.ZeppelinMonitoringConfiguration;

        DeployAsApplicationConfiguration?: AWS.KinesisAnalyticsV2.Application.DeployAsApplicationConfiguration;

        CustomArtifactsConfiguration?: AWS.KinesisAnalyticsV2.Application.CustomArtifactsConfiguration;
      };

      export type MavenReference = {
        ArtifactId: string;

        Version: string;

        GroupId: string;
      };

      export type KinesisStreamsInput = {
        ResourceARN: string;
      };

      export type CheckpointConfiguration = {
        ConfigurationType: string;

        CheckpointInterval?: number;

        MinPauseBetweenCheckpoints?: number;

        CheckpointingEnabled?: boolean;
      };

      export type ZeppelinMonitoringConfiguration = {
        LogLevel?: string;
      };

      export type S3ContentBaseLocation = {
        BucketARN: string;

        BasePath: string;
      };

      export type InputLambdaProcessor = {
        ResourceARN: string;
      };

      export type RecordColumn = {
        Mapping?: string;

        SqlType: string;

        Name: string;
      };

      export type CSVMappingParameters = {
        RecordRowDelimiter: string;

        RecordColumnDelimiter: string;
      };

      export type RecordFormat = {
        MappingParameters?: AWS.KinesisAnalyticsV2.Application.MappingParameters;

        RecordFormatType: string;
      };

      export type GlueDataCatalogConfiguration = {
        DatabaseARN?: string;
      };

      export type JSONMappingParameters = {
        RecordRowPath: string;
      };

      export type CodeContent = {
        ZipFileContent?: string;

        S3ContentLocation?: AWS.KinesisAnalyticsV2.Application.S3ContentLocation;

        TextContent?: string;
      };

      export type ApplicationConfiguration = {
        ApplicationCodeConfiguration?: AWS.KinesisAnalyticsV2.Application.ApplicationCodeConfiguration;

        EnvironmentProperties?: AWS.KinesisAnalyticsV2.Application.EnvironmentProperties;

        FlinkApplicationConfiguration?: AWS.KinesisAnalyticsV2.Application.FlinkApplicationConfiguration;

        SqlApplicationConfiguration?: AWS.KinesisAnalyticsV2.Application.SqlApplicationConfiguration;

        ZeppelinApplicationConfiguration?: AWS.KinesisAnalyticsV2.Application.ZeppelinApplicationConfiguration;

        ApplicationSnapshotConfiguration?: AWS.KinesisAnalyticsV2.Application.ApplicationSnapshotConfiguration;
      };

      export type EnvironmentProperties = {
        PropertyGroups?: AWS.KinesisAnalyticsV2.Application.PropertyGroup[];
      };

      export type CatalogConfiguration = {
        GlueDataCatalogConfiguration?: AWS.KinesisAnalyticsV2.Application.GlueDataCatalogConfiguration;
      };
    }

    export type ApplicationOutput = {
      ApplicationName: string;

      Output: AWS.KinesisAnalyticsV2.ApplicationOutput.Output;
    };

    export namespace ApplicationOutput {
      export type KinesisFirehoseOutput = {
        ResourceARN: string;
      };

      export type KinesisStreamsOutput = {
        ResourceARN: string;
      };

      export type DestinationSchema = {
        RecordFormatType?: string;
      };

      export type Output = {
        DestinationSchema: AWS.KinesisAnalyticsV2.ApplicationOutput.DestinationSchema;

        LambdaOutput?: AWS.KinesisAnalyticsV2.ApplicationOutput.LambdaOutput;

        KinesisFirehoseOutput?: AWS.KinesisAnalyticsV2.ApplicationOutput.KinesisFirehoseOutput;

        KinesisStreamsOutput?: AWS.KinesisAnalyticsV2.ApplicationOutput.KinesisStreamsOutput;

        Name?: string;
      };

      export type LambdaOutput = {
        ResourceARN: string;
      };
    }

    export type ApplicationCloudWatchLoggingOption = {
      ApplicationName: string;

      CloudWatchLoggingOption: AWS.KinesisAnalyticsV2.ApplicationCloudWatchLoggingOption.CloudWatchLoggingOption;
    };

    export namespace ApplicationCloudWatchLoggingOption {
      export type CloudWatchLoggingOption = {
        LogStreamARN: string;
      };
    }
  }

  export namespace Cognito {
    export type UserPool = {
      UserPoolTags?: JSONString;

      Policies?: AWS.Cognito.UserPool.Policies;

      VerificationMessageTemplate?: AWS.Cognito.UserPool.VerificationMessageTemplate;

      MfaConfiguration?: string;

      Schema?: AWS.Cognito.UserPool.SchemaAttribute[];

      AdminCreateUserConfig?: AWS.Cognito.UserPool.AdminCreateUserConfig;

      SmsAuthenticationMessage?: string;

      UsernameConfiguration?: AWS.Cognito.UserPool.UsernameConfiguration;

      UserPoolName?: string;

      SmsVerificationMessage?: string;

      UserPoolAddOns?: AWS.Cognito.UserPool.UserPoolAddOns;

      EmailConfiguration?: AWS.Cognito.UserPool.EmailConfiguration;

      SmsConfiguration?: AWS.Cognito.UserPool.SmsConfiguration;

      AliasAttributes?: string[];

      EnabledMfas?: string[];

      EmailVerificationSubject?: string;

      LambdaConfig?: AWS.Cognito.UserPool.LambdaConfig;

      UsernameAttributes?: string[];

      AutoVerifiedAttributes?: string[];

      DeviceConfiguration?: AWS.Cognito.UserPool.DeviceConfiguration;

      EmailVerificationMessage?: string;

      AccountRecoverySetting?: AWS.Cognito.UserPool.AccountRecoverySetting;
    };

    export namespace UserPool {
      export type PasswordPolicy = {
        RequireNumbers?: boolean;

        MinimumLength?: number;

        TemporaryPasswordValidityDays?: number;

        RequireUppercase?: boolean;

        RequireLowercase?: boolean;

        RequireSymbols?: boolean;
      };

      export type RecoveryOption = {
        Priority?: number;

        Name?: string;
      };

      export type AdminCreateUserConfig = {
        InviteMessageTemplate?: AWS.Cognito.UserPool.InviteMessageTemplate;

        UnusedAccountValidityDays?: number;

        AllowAdminCreateUserOnly?: boolean;
      };

      export type SmsConfiguration = {
        ExternalId?: string;

        SnsCallerArn?: string;
      };

      export type StringAttributeConstraints = {
        MinLength?: string;

        MaxLength?: string;
      };

      export type VerificationMessageTemplate = {
        EmailMessageByLink?: string;

        EmailMessage?: string;

        SmsMessage?: string;

        EmailSubject?: string;

        DefaultEmailOption?: string;

        EmailSubjectByLink?: string;
      };

      export type LambdaConfig = {
        CreateAuthChallenge?: string;

        PreSignUp?: string;

        KMSKeyID?: string;

        UserMigration?: string;

        PostAuthentication?: string;

        VerifyAuthChallengeResponse?: string;

        PreAuthentication?: string;

        DefineAuthChallenge?: string;

        PreTokenGeneration?: string;

        CustomSMSSender?: AWS.Cognito.UserPool.CustomSMSSender;

        PostConfirmation?: string;

        CustomMessage?: string;

        CustomEmailSender?: AWS.Cognito.UserPool.CustomEmailSender;
      };

      export type InviteMessageTemplate = {
        EmailMessage?: string;

        SMSMessage?: string;

        EmailSubject?: string;
      };

      export type EmailConfiguration = {
        ReplyToEmailAddress?: string;

        ConfigurationSet?: string;

        EmailSendingAccount?: string;

        SourceArn?: string;

        From?: string;
      };

      export type SchemaAttribute = {
        DeveloperOnlyAttribute?: boolean;

        Mutable?: boolean;

        AttributeDataType?: string;

        StringAttributeConstraints?: AWS.Cognito.UserPool.StringAttributeConstraints;

        Required?: boolean;

        NumberAttributeConstraints?: AWS.Cognito.UserPool.NumberAttributeConstraints;

        Name?: string;
      };

      export type NumberAttributeConstraints = {
        MinValue?: string;

        MaxValue?: string;
      };

      export type CustomSMSSender = {
        LambdaArn?: string;

        LambdaVersion?: string;
      };

      export type AccountRecoverySetting = {
        RecoveryMechanisms?: AWS.Cognito.UserPool.RecoveryOption[];
      };

      export type UserPoolAddOns = {
        AdvancedSecurityMode?: string;
      };

      export type Policies = {
        PasswordPolicy?: AWS.Cognito.UserPool.PasswordPolicy;
      };

      export type CustomEmailSender = {
        LambdaArn?: string;

        LambdaVersion?: string;
      };

      export type DeviceConfiguration = {
        DeviceOnlyRememberedOnUserPrompt?: boolean;

        ChallengeRequiredOnNewDevice?: boolean;
      };

      export type UsernameConfiguration = {
        CaseSensitive?: boolean;
      };
    }

    export type UserPoolResourceServer = {
      UserPoolId: string;

      Identifier: string;

      Scopes?: AWS.Cognito.UserPoolResourceServer.ResourceServerScopeType[];

      Name: string;
    };

    export namespace UserPoolResourceServer {
      export type ResourceServerScopeType = {
        ScopeName: string;

        ScopeDescription: string;
      };
    }

    export type UserPoolRiskConfigurationAttachment = {
      CompromisedCredentialsRiskConfiguration?: AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsRiskConfigurationType;

      UserPoolId: string;

      ClientId: string;

      AccountTakeoverRiskConfiguration?: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverRiskConfigurationType;

      RiskExceptionConfiguration?: AWS.Cognito.UserPoolRiskConfigurationAttachment.RiskExceptionConfigurationType;
    };

    export namespace UserPoolRiskConfigurationAttachment {
      export type AccountTakeoverActionsType = {
        HighAction?: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

        LowAction?: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;

        MediumAction?: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionType;
      };

      export type RiskExceptionConfigurationType = {
        BlockedIPRangeList?: string[];

        SkippedIPRangeList?: string[];
      };

      export type AccountTakeoverActionType = {
        Notify: boolean;

        EventAction: string;
      };

      export type CompromisedCredentialsRiskConfigurationType = {
        Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.CompromisedCredentialsActionsType;

        EventFilter?: string[];
      };

      export type NotifyEmailType = {
        TextBody?: string;

        HtmlBody?: string;

        Subject: string;
      };

      export type CompromisedCredentialsActionsType = {
        EventAction: string;
      };

      export type NotifyConfigurationType = {
        BlockEmail?: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

        ReplyTo?: string;

        SourceArn: string;

        NoActionEmail?: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;

        From?: string;

        MfaEmail?: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyEmailType;
      };

      export type AccountTakeoverRiskConfigurationType = {
        Actions: AWS.Cognito.UserPoolRiskConfigurationAttachment.AccountTakeoverActionsType;

        NotifyConfiguration?: AWS.Cognito.UserPoolRiskConfigurationAttachment.NotifyConfigurationType;
      };
    }

    export type IdentityPoolRoleAttachment = {
      RoleMappings?: JSONString;

      IdentityPoolId: string;

      Roles?: JSONString;
    };

    export namespace IdentityPoolRoleAttachment {
      export type RoleMapping = {
        Type: string;

        AmbiguousRoleResolution?: string;

        RulesConfiguration?: AWS.Cognito.IdentityPoolRoleAttachment.RulesConfigurationType;

        IdentityProvider?: string;
      };

      export type MappingRule = {
        MatchType: string;

        Value: string;

        Claim: string;

        RoleARN: string;
      };

      export type RulesConfigurationType = {
        Rules: AWS.Cognito.IdentityPoolRoleAttachment.MappingRule[];
      };
    }

    export type IdentityPool = {
      PushSync?: AWS.Cognito.IdentityPool.PushSync;

      CognitoIdentityProviders?: AWS.Cognito.IdentityPool.CognitoIdentityProvider[];

      CognitoEvents?: JSONString;

      DeveloperProviderName?: string;

      CognitoStreams?: AWS.Cognito.IdentityPool.CognitoStreams;

      IdentityPoolName?: string;

      AllowUnauthenticatedIdentities: boolean;

      SupportedLoginProviders?: JSONString;

      SamlProviderARNs?: string[];

      OpenIdConnectProviderARNs?: string[];

      AllowClassicFlow?: boolean;
    };

    export namespace IdentityPool {
      export type CognitoStreams = {
        StreamingStatus?: string;

        StreamName?: string;

        RoleArn?: string;
      };

      export type PushSync = {
        ApplicationArns?: string[];

        RoleArn?: string;
      };

      export type CognitoIdentityProvider = {
        ServerSideTokenCheck?: boolean;

        ProviderName?: string;

        ClientId?: string;
      };
    }

    export type UserPoolUser = {
      ValidationData?: AWS.Cognito.UserPoolUser.AttributeType[];

      UserPoolId: string;

      Username?: string;

      MessageAction?: string;

      ClientMetadata?: JSONString;

      DesiredDeliveryMediums?: string[];

      ForceAliasCreation?: boolean;

      UserAttributes?: AWS.Cognito.UserPoolUser.AttributeType[];
    };

    export namespace UserPoolUser {
      export type AttributeType = {
        Value?: string;

        Name?: string;
      };
    }

    export type UserPoolClient = {
      AnalyticsConfiguration?: AWS.Cognito.UserPoolClient.AnalyticsConfiguration;

      GenerateSecret?: boolean;

      CallbackURLs?: string[];

      IdTokenValidity?: number;

      AllowedOAuthScopes?: string[];

      TokenValidityUnits?: AWS.Cognito.UserPoolClient.TokenValidityUnits;

      ReadAttributes?: string[];

      AllowedOAuthFlowsUserPoolClient?: boolean;

      DefaultRedirectURI?: string;

      SupportedIdentityProviders?: string[];

      ClientName?: string;

      UserPoolId: string;

      AllowedOAuthFlows?: string[];

      ExplicitAuthFlows?: string[];

      LogoutURLs?: string[];

      AccessTokenValidity?: number;

      RefreshTokenValidity?: number;

      WriteAttributes?: string[];

      PreventUserExistenceErrors?: string;

      EnableTokenRevocation?: boolean;
    };

    export namespace UserPoolClient {
      export type TokenValidityUnits = {
        IdToken?: string;

        RefreshToken?: string;

        AccessToken?: string;
      };

      export type AnalyticsConfiguration = {
        ApplicationArn?: string;

        UserDataShared?: boolean;

        ExternalId?: string;

        ApplicationId?: string;

        RoleArn?: string;
      };
    }

    export type UserPoolDomain = {
      UserPoolId: string;

      CustomDomainConfig?: AWS.Cognito.UserPoolDomain.CustomDomainConfigType;

      Domain: string;
    };

    export namespace UserPoolDomain {
      export type CustomDomainConfigType = {
        CertificateArn?: string;
      };
    }

    export type UserPoolIdentityProvider = {
      ProviderName: string;

      UserPoolId: string;

      AttributeMapping?: JSONString;

      ProviderDetails?: JSONString;

      ProviderType: string;

      IdpIdentifiers?: string[];
    };

    export type UserPoolUserToGroupAttachment = {
      GroupName: string;

      UserPoolId: string;

      Username: string;
    };

    export type UserPoolUICustomizationAttachment = {
      CSS?: string;

      UserPoolId: string;

      ClientId: string;
    };

    export type UserPoolGroup = {
      GroupName?: string;

      Description?: string;

      UserPoolId: string;

      Precedence?: number;

      RoleArn?: string;
    };
  }

  export namespace ECS {
    export type ClusterCapacityProviderAssociations = {
      CapacityProviders: string[];

      Cluster: string;

      DefaultCapacityProviderStrategy: AWS.ECS.ClusterCapacityProviderAssociations.CapacityProviderStrategy[];
    };

    export namespace ClusterCapacityProviderAssociations {
      export type CapacityProviderStrategy = {
        Base?: number;

        Weight?: number;

        CapacityProvider: string;
      };
    }

    export type TaskDefinition = {
      Family?: string;

      ContainerDefinitions?: AWS.ECS.TaskDefinition.ContainerDefinition[];

      Cpu?: string;

      ExecutionRoleArn?: string;

      EphemeralStorage?: AWS.ECS.TaskDefinition.EphemeralStorage;

      InferenceAccelerators?: AWS.ECS.TaskDefinition.InferenceAccelerator[];

      Memory?: string;

      NetworkMode?: string;

      PlacementConstraints?: AWS.ECS.TaskDefinition.TaskDefinitionPlacementConstraint[];

      ProxyConfiguration?: AWS.ECS.TaskDefinition.ProxyConfiguration;

      RequiresCompatibilities?: string[];

      TaskRoleArn?: string;

      Volumes?: AWS.ECS.TaskDefinition.Volume[];

      PidMode?: string;

      IpcMode?: string;

      Tags?: Tag[];
    };

    export namespace TaskDefinition {
      export type LogConfiguration = {
        LogDriver: string;

        Options?: Record<string, string>;

        SecretOptions?: AWS.ECS.TaskDefinition.Secret[];
      };

      export type FirelensConfiguration = {
        Type?: string;

        Options?: Record<string, string>;
      };

      export type Device = {
        ContainerPath?: string;

        HostPath?: string;

        Permissions?: string[];
      };

      export type EFSVolumeConfiguration = {
        FilesystemId: string;

        RootDirectory?: string;

        TransitEncryption?: string;

        TransitEncryptionPort?: number;

        AuthorizationConfig?: AWS.ECS.TaskDefinition.AuthorizationConfig;
      };

      export type SystemControl = {
        Namespace?: string;

        Value?: string;
      };

      export type EphemeralStorage = {
        SizeInGiB?: number;
      };

      export type ResourceRequirement = {
        Type: string;

        Value: string;
      };

      export type DockerVolumeConfiguration = {
        Autoprovision?: boolean;

        Driver?: string;

        DriverOpts?: Record<string, string>;

        Labels?: Record<string, string>;

        Scope?: string;
      };

      export type AuthorizationConfig = {
        IAM?: string;

        AccessPointId?: string;
      };

      export type MountPoint = {
        ContainerPath?: string;

        ReadOnly?: boolean;

        SourceVolume?: string;
      };

      export type KernelCapabilities = {
        Add?: string[];

        Drop?: string[];
      };

      export type PortMapping = {
        ContainerPort?: number;

        HostPort?: number;

        Protocol?: string;
      };

      export type Ulimit = {
        HardLimit: number;

        Name: string;

        SoftLimit: number;
      };

      export type ContainerDependency = {
        ContainerName?: string;

        Condition?: string;
      };

      export type HostVolumeProperties = {
        SourcePath?: string;
      };

      export type RepositoryCredentials = {
        CredentialsParameter?: string;
      };

      export type InferenceAccelerator = {
        DeviceName?: string;

        DeviceType?: string;
      };

      export type Secret = {
        Name: string;

        ValueFrom: string;
      };

      export type EnvironmentFile = {
        Value?: string;

        Type?: string;
      };

      export type VolumeFrom = {
        ReadOnly?: boolean;

        SourceContainer?: string;
      };

      export type HostEntry = {
        Hostname?: string;

        IpAddress?: string;
      };

      export type TaskDefinitionPlacementConstraint = {
        Type: string;

        Expression?: string;
      };

      export type Volume = {
        DockerVolumeConfiguration?: AWS.ECS.TaskDefinition.DockerVolumeConfiguration;

        EFSVolumeConfiguration?: AWS.ECS.TaskDefinition.EFSVolumeConfiguration;

        Host?: AWS.ECS.TaskDefinition.HostVolumeProperties;

        Name?: string;
      };

      export type Tmpfs = {
        ContainerPath?: string;

        MountOptions?: string[];

        Size: number;
      };

      export type ContainerDefinition = {
        Command?: string[];

        Cpu?: number;

        DependsOn?: AWS.ECS.TaskDefinition.ContainerDependency[];

        DisableNetworking?: boolean;

        DnsSearchDomains?: string[];

        DnsServers?: string[];

        DockerLabels?: Record<string, string>;

        DockerSecurityOptions?: string[];

        EntryPoint?: string[];

        Environment?: AWS.ECS.TaskDefinition.KeyValuePair[];

        EnvironmentFiles?: AWS.ECS.TaskDefinition.EnvironmentFile[];

        Essential?: boolean;

        ExtraHosts?: AWS.ECS.TaskDefinition.HostEntry[];

        FirelensConfiguration?: AWS.ECS.TaskDefinition.FirelensConfiguration;

        HealthCheck?: AWS.ECS.TaskDefinition.HealthCheck;

        Hostname?: string;

        Image?: string;

        Links?: string[];

        LinuxParameters?: AWS.ECS.TaskDefinition.LinuxParameters;

        LogConfiguration?: AWS.ECS.TaskDefinition.LogConfiguration;

        Memory?: number;

        MemoryReservation?: number;

        MountPoints?: AWS.ECS.TaskDefinition.MountPoint[];

        Name?: string;

        PortMappings?: AWS.ECS.TaskDefinition.PortMapping[];

        Privileged?: boolean;

        ReadonlyRootFilesystem?: boolean;

        RepositoryCredentials?: AWS.ECS.TaskDefinition.RepositoryCredentials;

        ResourceRequirements?: AWS.ECS.TaskDefinition.ResourceRequirement[];

        Secrets?: AWS.ECS.TaskDefinition.Secret[];

        StartTimeout?: number;

        StopTimeout?: number;

        Ulimits?: AWS.ECS.TaskDefinition.Ulimit[];

        User?: string;

        VolumesFrom?: AWS.ECS.TaskDefinition.VolumeFrom[];

        WorkingDirectory?: string;

        Interactive?: boolean;

        PseudoTerminal?: boolean;

        SystemControls?: AWS.ECS.TaskDefinition.SystemControl[];
      };

      export type KeyValuePair = {
        Name?: string;

        Value?: string;
      };

      export type HealthCheck = {
        Command?: string[];

        Interval?: number;

        Timeout?: number;

        Retries?: number;

        StartPeriod?: number;
      };

      export type LinuxParameters = {
        Capabilities?: AWS.ECS.TaskDefinition.KernelCapabilities;

        Devices?: AWS.ECS.TaskDefinition.Device[];

        InitProcessEnabled?: boolean;

        MaxSwap?: number;

        SharedMemorySize?: number;

        Swappiness?: number;

        Tmpfs?: AWS.ECS.TaskDefinition.Tmpfs[];
      };

      export type ProxyConfiguration = {
        ContainerName: string;

        ProxyConfigurationProperties?: AWS.ECS.TaskDefinition.KeyValuePair[];

        Type?: string;
      };
    }

    export type Service = {
      CapacityProviderStrategy?: AWS.ECS.Service.CapacityProviderStrategyItem[];

      Cluster?: string;

      DeploymentConfiguration?: AWS.ECS.Service.DeploymentConfiguration;

      DeploymentController?: AWS.ECS.Service.DeploymentController;

      DesiredCount?: number;

      EnableECSManagedTags?: boolean;

      EnableExecuteCommand?: boolean;

      HealthCheckGracePeriodSeconds?: number;

      LaunchType?: string;

      LoadBalancers?: AWS.ECS.Service.LoadBalancer[];

      NetworkConfiguration?: AWS.ECS.Service.NetworkConfiguration;

      PlacementConstraints?: AWS.ECS.Service.PlacementConstraint[];

      PlacementStrategies?: AWS.ECS.Service.PlacementStrategy[];

      PlatformVersion?: string;

      PropagateTags?: string;

      Role?: string;

      SchedulingStrategy?: string;

      ServiceName?: string;

      ServiceRegistries?: AWS.ECS.Service.ServiceRegistry[];

      Tags?: Tag[];

      TaskDefinition?: string;
    };

    export namespace Service {
      export type PlacementStrategy = {
        Field?: string;

        Type: string;
      };

      export type DeploymentController = {
        Type?: string;
      };

      export type PlacementConstraint = {
        Expression?: string;

        Type: string;
      };

      export type LoadBalancer = {
        ContainerName?: string;

        ContainerPort?: number;

        LoadBalancerName?: string;

        TargetGroupArn?: string;
      };

      export type DeploymentConfiguration = {
        DeploymentCircuitBreaker?: AWS.ECS.Service.DeploymentCircuitBreaker;

        MaximumPercent?: number;

        MinimumHealthyPercent?: number;
      };

      export type AwsVpcConfiguration = {
        AssignPublicIp?: string;

        SecurityGroups?: string[];

        Subnets?: string[];
      };

      export type NetworkConfiguration = {
        AwsvpcConfiguration?: AWS.ECS.Service.AwsVpcConfiguration;
      };

      export type CapacityProviderStrategyItem = {
        Base?: number;

        CapacityProvider?: string;

        Weight?: number;
      };

      export type DeploymentCircuitBreaker = {
        Enable: boolean;

        Rollback: boolean;
      };

      export type ServiceRegistry = {
        ContainerName?: string;

        ContainerPort?: number;

        Port?: number;

        RegistryArn?: string;
      };
    }

    export type TaskSet = {
      Cluster: string;

      ExternalId?: string;

      LaunchType?: string;

      LoadBalancers?: AWS.ECS.TaskSet.LoadBalancer[];

      NetworkConfiguration?: AWS.ECS.TaskSet.NetworkConfiguration;

      PlatformVersion?: string;

      Scale?: AWS.ECS.TaskSet.Scale;

      Service: string;

      ServiceRegistries?: AWS.ECS.TaskSet.ServiceRegistry[];

      TaskDefinition: string;
    };

    export namespace TaskSet {
      export type NetworkConfiguration = {
        AwsVpcConfiguration?: AWS.ECS.TaskSet.AwsVpcConfiguration;
      };

      export type ServiceRegistry = {
        ContainerName?: string;

        ContainerPort?: number;

        Port?: number;

        RegistryArn?: string;
      };

      export type LoadBalancer = {
        ContainerName?: string;

        ContainerPort?: number;

        LoadBalancerName?: string;

        TargetGroupArn?: string;
      };

      export type AwsVpcConfiguration = {
        AssignPublicIp?: string;

        SecurityGroups?: string[];

        Subnets: string[];
      };

      export type Scale = {
        Unit?: string;

        Value?: number;
      };
    }

    export type Cluster = {
      Tags?: Tag[];

      ClusterName?: string;

      ClusterSettings?: AWS.ECS.Cluster.ClusterSettings[];

      Configuration?: AWS.ECS.Cluster.ClusterConfiguration;

      CapacityProviders?: string[];

      DefaultCapacityProviderStrategy?: AWS.ECS.Cluster.CapacityProviderStrategyItem[];
    };

    export namespace Cluster {
      export type ClusterSettings = {
        Name?: string;

        Value?: string;
      };

      export type ExecuteCommandLogConfiguration = {
        CloudWatchLogGroupName?: string;

        CloudWatchEncryptionEnabled?: boolean;

        S3BucketName?: string;

        S3EncryptionEnabled?: boolean;

        S3KeyPrefix?: string;
      };

      export type ExecuteCommandConfiguration = {
        KmsKeyId?: string;

        Logging?: string;

        LogConfiguration?: AWS.ECS.Cluster.ExecuteCommandLogConfiguration;
      };

      export type ClusterConfiguration = {
        ExecuteCommandConfiguration?: AWS.ECS.Cluster.ExecuteCommandConfiguration;
      };

      export type CapacityProviderStrategyItem = {
        CapacityProvider?: string;

        Weight?: number;

        Base?: number;
      };
    }

    export type CapacityProvider = {
      AutoScalingGroupProvider: AWS.ECS.CapacityProvider.AutoScalingGroupProvider;

      Name?: string;

      Tags?: Tag[];
    };

    export namespace CapacityProvider {
      export type AutoScalingGroupProvider = {
        AutoScalingGroupArn: string;

        ManagedScaling?: AWS.ECS.CapacityProvider.ManagedScaling;

        ManagedTerminationProtection?: string;
      };

      export type ManagedScaling = {
        MinimumScalingStepSize?: number;

        MaximumScalingStepSize?: number;

        Status?: string;

        TargetCapacity?: number;

        InstanceWarmupPeriod?: number;
      };
    }

    export type PrimaryTaskSet = {
      Cluster: string;

      TaskSetId: string;

      Service: string;
    };
  }

  export namespace KinesisAnalytics {
    export type ApplicationOutput = {
      ApplicationName: string;

      Output: AWS.KinesisAnalytics.ApplicationOutput.Output;
    };

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

      export type Output = {
        DestinationSchema: AWS.KinesisAnalytics.ApplicationOutput.DestinationSchema;

        LambdaOutput?: AWS.KinesisAnalytics.ApplicationOutput.LambdaOutput;

        KinesisFirehoseOutput?: AWS.KinesisAnalytics.ApplicationOutput.KinesisFirehoseOutput;

        KinesisStreamsOutput?: AWS.KinesisAnalytics.ApplicationOutput.KinesisStreamsOutput;

        Name?: string;
      };

      export type DestinationSchema = {
        RecordFormatType?: string;
      };
    }

    export type Application = {
      ApplicationName?: string;

      Inputs: AWS.KinesisAnalytics.Application.Input[];

      ApplicationDescription?: string;

      ApplicationCode?: string;
    };

    export namespace Application {
      export type CSVMappingParameters = {
        RecordRowDelimiter: string;

        RecordColumnDelimiter: string;
      };

      export type Input = {
        NamePrefix: string;

        InputSchema: AWS.KinesisAnalytics.Application.InputSchema;

        KinesisStreamsInput?: AWS.KinesisAnalytics.Application.KinesisStreamsInput;

        KinesisFirehoseInput?: AWS.KinesisAnalytics.Application.KinesisFirehoseInput;

        InputProcessingConfiguration?: AWS.KinesisAnalytics.Application.InputProcessingConfiguration;

        InputParallelism?: AWS.KinesisAnalytics.Application.InputParallelism;
      };

      export type JSONMappingParameters = {
        RecordRowPath: string;
      };

      export type KinesisStreamsInput = {
        ResourceARN: string;

        RoleARN: string;
      };

      export type RecordColumn = {
        Mapping?: string;

        SqlType: string;

        Name: string;
      };

      export type KinesisFirehoseInput = {
        ResourceARN: string;

        RoleARN: string;
      };

      export type InputParallelism = {
        Count?: number;
      };

      export type InputSchema = {
        RecordEncoding?: string;

        RecordColumns: AWS.KinesisAnalytics.Application.RecordColumn[];

        RecordFormat: AWS.KinesisAnalytics.Application.RecordFormat;
      };

      export type MappingParameters = {
        JSONMappingParameters?: AWS.KinesisAnalytics.Application.JSONMappingParameters;

        CSVMappingParameters?: AWS.KinesisAnalytics.Application.CSVMappingParameters;
      };

      export type RecordFormat = {
        MappingParameters?: AWS.KinesisAnalytics.Application.MappingParameters;

        RecordFormatType: string;
      };

      export type InputProcessingConfiguration = {
        InputLambdaProcessor?: AWS.KinesisAnalytics.Application.InputLambdaProcessor;
      };

      export type InputLambdaProcessor = {
        ResourceARN: string;

        RoleARN: string;
      };
    }

    export type ApplicationReferenceDataSource = {
      ApplicationName: string;

      ReferenceDataSource: AWS.KinesisAnalytics.ApplicationReferenceDataSource.ReferenceDataSource;
    };

    export namespace ApplicationReferenceDataSource {
      export type RecordFormat = {
        MappingParameters?: AWS.KinesisAnalytics.ApplicationReferenceDataSource.MappingParameters;

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
        Mapping?: string;

        SqlType: string;

        Name: string;
      };

      export type ReferenceSchema = {
        RecordEncoding?: string;

        RecordColumns: AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordColumn[];

        RecordFormat: AWS.KinesisAnalytics.ApplicationReferenceDataSource.RecordFormat;
      };

      export type MappingParameters = {
        JSONMappingParameters?: AWS.KinesisAnalytics.ApplicationReferenceDataSource.JSONMappingParameters;

        CSVMappingParameters?: AWS.KinesisAnalytics.ApplicationReferenceDataSource.CSVMappingParameters;
      };

      export type JSONMappingParameters = {
        RecordRowPath: string;
      };

      export type ReferenceDataSource = {
        ReferenceSchema: AWS.KinesisAnalytics.ApplicationReferenceDataSource.ReferenceSchema;

        TableName?: string;

        S3ReferenceDataSource?: AWS.KinesisAnalytics.ApplicationReferenceDataSource.S3ReferenceDataSource;
      };
    }
  }

  export namespace Config {
    export type ConfigurationAggregator = {
      AccountAggregationSources?: AWS.Config.ConfigurationAggregator.AccountAggregationSource[];

      ConfigurationAggregatorName?: string;

      OrganizationAggregationSource?: AWS.Config.ConfigurationAggregator.OrganizationAggregationSource;

      Tags?: Tag[];
    };

    export namespace ConfigurationAggregator {
      export type OrganizationAggregationSource = {
        AllAwsRegions?: boolean;

        AwsRegions?: string[];

        RoleArn: string;
      };

      export type AccountAggregationSource = {
        AllAwsRegions?: boolean;

        AwsRegions?: string[];

        AccountIds: string[];
      };
    }

    export type DeliveryChannel = {
      ConfigSnapshotDeliveryProperties?: AWS.Config.DeliveryChannel.ConfigSnapshotDeliveryProperties;

      Name?: string;

      S3BucketName: string;

      S3KeyPrefix?: string;

      S3KmsKeyArn?: string;

      SnsTopicARN?: string;
    };

    export namespace DeliveryChannel {
      export type ConfigSnapshotDeliveryProperties = {
        DeliveryFrequency?: string;
      };
    }

    export type ConfigurationRecorder = {
      Name?: string;

      RecordingGroup?: AWS.Config.ConfigurationRecorder.RecordingGroup;

      RoleARN: string;
    };

    export namespace ConfigurationRecorder {
      export type RecordingGroup = {
        AllSupported?: boolean;

        IncludeGlobalResourceTypes?: boolean;

        ResourceTypes?: string[];
      };
    }

    export type RemediationConfiguration = {
      TargetVersion?: string;

      ExecutionControls?: AWS.Config.RemediationConfiguration.ExecutionControls;

      Parameters?: JSONString;

      TargetType: string;

      ConfigRuleName: string;

      ResourceType?: string;

      RetryAttemptSeconds?: number;

      MaximumAutomaticAttempts?: number;

      TargetId: string;

      Automatic?: boolean;
    };

    export namespace RemediationConfiguration {
      export type ResourceValue = {
        Value?: string;
      };

      export type RemediationParameterValue = {
        ResourceValue?: AWS.Config.RemediationConfiguration.ResourceValue;

        StaticValue?: AWS.Config.RemediationConfiguration.StaticValue;
      };

      export type SsmControls = {
        ErrorPercentage?: number;

        ConcurrentExecutionRatePercentage?: number;
      };

      export type StaticValue = {
        Values?: string[];
      };

      export type ExecutionControls = {
        SsmControls?: AWS.Config.RemediationConfiguration.SsmControls;
      };
    }

    export type ConformancePack = {
      ConformancePackName: string;

      DeliveryS3Bucket?: string;

      DeliveryS3KeyPrefix?: string;

      TemplateBody?: string;

      TemplateS3Uri?: string;

      ConformancePackInputParameters?: AWS.Config.ConformancePack.ConformancePackInputParameter[];
    };

    export namespace ConformancePack {
      export type ConformancePackInputParameter = {
        ParameterName: string;

        ParameterValue: string;
      };
    }

    export type ConfigRule = {
      ConfigRuleName?: string;

      Description?: string;

      InputParameters?: JSONString;

      MaximumExecutionFrequency?: string;

      Scope?: AWS.Config.ConfigRule.Scope;

      Source: AWS.Config.ConfigRule.Source;
    };

    export namespace ConfigRule {
      export type Source = {
        Owner: string;

        SourceDetails?: AWS.Config.ConfigRule.SourceDetail[];

        SourceIdentifier: string;
      };

      export type Scope = {
        ComplianceResourceId?: string;

        ComplianceResourceTypes?: string[];

        TagKey?: string;

        TagValue?: string;
      };

      export type SourceDetail = {
        EventSource: string;

        MaximumExecutionFrequency?: string;

        MessageType: string;
      };
    }

    export type OrganizationConformancePack = {
      OrganizationConformancePackName: string;

      TemplateS3Uri?: string;

      TemplateBody?: string;

      DeliveryS3Bucket?: string;

      DeliveryS3KeyPrefix?: string;

      ConformancePackInputParameters?: AWS.Config.OrganizationConformancePack.ConformancePackInputParameter[];

      ExcludedAccounts?: string[];
    };

    export namespace OrganizationConformancePack {
      export type ConformancePackInputParameter = {
        ParameterName: string;

        ParameterValue: string;
      };
    }

    export type OrganizationConfigRule = {
      OrganizationManagedRuleMetadata?: AWS.Config.OrganizationConfigRule.OrganizationManagedRuleMetadata;

      OrganizationConfigRuleName: string;

      OrganizationCustomRuleMetadata?: AWS.Config.OrganizationConfigRule.OrganizationCustomRuleMetadata;

      ExcludedAccounts?: string[];
    };

    export namespace OrganizationConfigRule {
      export type OrganizationManagedRuleMetadata = {
        TagKeyScope?: string;

        TagValueScope?: string;

        Description?: string;

        ResourceIdScope?: string;

        RuleIdentifier: string;

        ResourceTypesScope?: string[];

        MaximumExecutionFrequency?: string;

        InputParameters?: string;
      };

      export type OrganizationCustomRuleMetadata = {
        TagKeyScope?: string;

        TagValueScope?: string;

        Description?: string;

        ResourceIdScope?: string;

        LambdaFunctionArn: string;

        OrganizationConfigRuleTriggerTypes: string[];

        ResourceTypesScope?: string[];

        MaximumExecutionFrequency?: string;

        InputParameters?: string;
      };
    }

    export type StoredQuery = {
      QueryName: string;

      QueryDescription?: string;

      QueryExpression: string;

      Tags?: Tag[];
    };

    export type AggregationAuthorization = {
      AuthorizedAccountId: string;

      AuthorizedAwsRegion: string;

      Tags?: Tag[];
    };
  }

  export namespace OpsWorks {
    export type Layer = {
      Attributes?: Record<string, string>;

      AutoAssignElasticIps: boolean;

      AutoAssignPublicIps: boolean;

      CustomInstanceProfileArn?: string;

      CustomJson?: JSONString;

      CustomRecipes?: AWS.OpsWorks.Layer.Recipes;

      CustomSecurityGroupIds?: string[];

      EnableAutoHealing: boolean;

      InstallUpdatesOnBoot?: boolean;

      LifecycleEventConfiguration?: AWS.OpsWorks.Layer.LifecycleEventConfiguration;

      LoadBasedAutoScaling?: AWS.OpsWorks.Layer.LoadBasedAutoScaling;

      Name: string;

      Packages?: string[];

      Shortname: string;

      StackId: string;

      Tags?: Tag[];

      Type: string;

      UseEbsOptimizedInstances?: boolean;

      VolumeConfigurations?: AWS.OpsWorks.Layer.VolumeConfiguration[];
    };

    export namespace Layer {
      export type ShutdownEventConfiguration = {
        DelayUntilElbConnectionsDrained?: boolean;

        ExecutionTimeout?: number;
      };

      export type VolumeConfiguration = {
        Encrypted?: boolean;

        Iops?: number;

        MountPoint?: string;

        NumberOfDisks?: number;

        RaidLevel?: number;

        Size?: number;

        VolumeType?: string;
      };

      export type Recipes = {
        Configure?: string[];

        Deploy?: string[];

        Setup?: string[];

        Shutdown?: string[];

        Undeploy?: string[];
      };

      export type LifecycleEventConfiguration = {
        ShutdownEventConfiguration?: AWS.OpsWorks.Layer.ShutdownEventConfiguration;
      };

      export type LoadBasedAutoScaling = {
        DownScaling?: AWS.OpsWorks.Layer.AutoScalingThresholds;

        Enable?: boolean;

        UpScaling?: AWS.OpsWorks.Layer.AutoScalingThresholds;
      };

      export type AutoScalingThresholds = {
        CpuThreshold?: number;

        IgnoreMetricsTime?: number;

        InstanceCount?: number;

        LoadThreshold?: number;

        MemoryThreshold?: number;

        ThresholdsWaitTime?: number;
      };
    }

    export type App = {
      AppSource?: AWS.OpsWorks.App.Source;

      Attributes?: Record<string, string>;

      DataSources?: AWS.OpsWorks.App.DataSource[];

      Description?: string;

      Domains?: string[];

      EnableSsl?: boolean;

      Environment?: AWS.OpsWorks.App.EnvironmentVariable[];

      Name: string;

      Shortname?: string;

      SslConfiguration?: AWS.OpsWorks.App.SslConfiguration;

      StackId: string;

      Type: string;
    };

    export namespace App {
      export type DataSource = {
        Arn?: string;

        DatabaseName?: string;

        Type?: string;
      };

      export type SslConfiguration = {
        Certificate?: string;

        Chain?: string;

        PrivateKey?: string;
      };

      export type EnvironmentVariable = {
        Key: string;

        Secure?: boolean;

        Value: string;
      };

      export type Source = {
        Password?: string;

        Revision?: string;

        SshKey?: string;

        Type?: string;

        Url?: string;

        Username?: string;
      };
    }

    export type Instance = {
      AgentVersion?: string;

      AmiId?: string;

      Architecture?: string;

      AutoScalingType?: string;

      AvailabilityZone?: string;

      BlockDeviceMappings?: AWS.OpsWorks.Instance.BlockDeviceMapping[];

      EbsOptimized?: boolean;

      ElasticIps?: string[];

      Hostname?: string;

      InstallUpdatesOnBoot?: boolean;

      InstanceType: string;

      LayerIds: string[];

      Os?: string;

      RootDeviceType?: string;

      SshKeyName?: string;

      StackId: string;

      SubnetId?: string;

      Tenancy?: string;

      TimeBasedAutoScaling?: AWS.OpsWorks.Instance.TimeBasedAutoScaling;

      VirtualizationType?: string;

      Volumes?: string[];
    };

    export namespace Instance {
      export type BlockDeviceMapping = {
        DeviceName?: string;

        Ebs?: AWS.OpsWorks.Instance.EbsBlockDevice;

        NoDevice?: string;

        VirtualName?: string;
      };

      export type TimeBasedAutoScaling = {
        Friday?: Record<string, string>;

        Monday?: Record<string, string>;

        Saturday?: Record<string, string>;

        Sunday?: Record<string, string>;

        Thursday?: Record<string, string>;

        Tuesday?: Record<string, string>;

        Wednesday?: Record<string, string>;
      };

      export type EbsBlockDevice = {
        DeleteOnTermination?: boolean;

        Iops?: number;

        SnapshotId?: string;

        VolumeSize?: number;

        VolumeType?: string;
      };
    }

    export type Stack = {
      AgentVersion?: string;

      Attributes?: Record<string, string>;

      ChefConfiguration?: AWS.OpsWorks.Stack.ChefConfiguration;

      CloneAppIds?: string[];

      ClonePermissions?: boolean;

      ConfigurationManager?: AWS.OpsWorks.Stack.StackConfigurationManager;

      CustomCookbooksSource?: AWS.OpsWorks.Stack.Source;

      CustomJson?: JSONString;

      DefaultAvailabilityZone?: string;

      DefaultInstanceProfileArn: string;

      DefaultOs?: string;

      DefaultRootDeviceType?: string;

      DefaultSshKeyName?: string;

      DefaultSubnetId?: string;

      EcsClusterArn?: string;

      ElasticIps?: AWS.OpsWorks.Stack.ElasticIp[];

      HostnameTheme?: string;

      Name: string;

      RdsDbInstances?: AWS.OpsWorks.Stack.RdsDbInstance[];

      ServiceRoleArn: string;

      SourceStackId?: string;

      Tags?: Tag[];

      UseCustomCookbooks?: boolean;

      UseOpsworksSecurityGroups?: boolean;

      VpcId?: string;
    };

    export namespace Stack {
      export type StackConfigurationManager = {
        Name?: string;

        Version?: string;
      };

      export type RdsDbInstance = {
        DbPassword: string;

        DbUser: string;

        RdsDbInstanceArn: string;
      };

      export type Source = {
        Password?: string;

        Revision?: string;

        SshKey?: string;

        Type?: string;

        Url?: string;

        Username?: string;
      };

      export type ChefConfiguration = {
        BerkshelfVersion?: string;

        ManageBerkshelf?: boolean;
      };

      export type ElasticIp = {
        Ip: string;

        Name?: string;
      };
    }

    export type UserProfile = {
      AllowSelfManagement?: boolean;

      IamUserArn: string;

      SshPublicKey?: string;

      SshUsername?: string;
    };

    export type Volume = {
      Ec2VolumeId: string;

      MountPoint?: string;

      Name?: string;

      StackId: string;
    };

    export type ElasticLoadBalancerAttachment = {
      ElasticLoadBalancerName: string;

      LayerId: string;
    };
  }

  export namespace CodeDeploy {
    export type DeploymentConfig = {
      ComputePlatform?: string;

      DeploymentConfigName?: string;

      MinimumHealthyHosts?: AWS.CodeDeploy.DeploymentConfig.MinimumHealthyHosts;

      TrafficRoutingConfig?: AWS.CodeDeploy.DeploymentConfig.TrafficRoutingConfig;
    };

    export namespace DeploymentConfig {
      export type TimeBasedCanary = {
        CanaryInterval: number;

        CanaryPercentage: number;
      };

      export type MinimumHealthyHosts = {
        Type: string;

        Value: number;
      };

      export type TrafficRoutingConfig = {
        TimeBasedCanary?: AWS.CodeDeploy.DeploymentConfig.TimeBasedCanary;

        TimeBasedLinear?: AWS.CodeDeploy.DeploymentConfig.TimeBasedLinear;

        Type: string;
      };

      export type TimeBasedLinear = {
        LinearInterval: number;

        LinearPercentage: number;
      };
    }

    export type DeploymentGroup = {
      AlarmConfiguration?: AWS.CodeDeploy.DeploymentGroup.AlarmConfiguration;

      ApplicationName: string;

      AutoRollbackConfiguration?: AWS.CodeDeploy.DeploymentGroup.AutoRollbackConfiguration;

      AutoScalingGroups?: string[];

      BlueGreenDeploymentConfiguration?: AWS.CodeDeploy.DeploymentGroup.BlueGreenDeploymentConfiguration;

      Deployment?: AWS.CodeDeploy.DeploymentGroup.Deployment;

      DeploymentConfigName?: string;

      DeploymentGroupName?: string;

      DeploymentStyle?: AWS.CodeDeploy.DeploymentGroup.DeploymentStyle;

      ECSServices?: AWS.CodeDeploy.DeploymentGroup.ECSService[];

      Ec2TagFilters?: AWS.CodeDeploy.DeploymentGroup.EC2TagFilter[];

      Ec2TagSet?: AWS.CodeDeploy.DeploymentGroup.EC2TagSet;

      LoadBalancerInfo?: AWS.CodeDeploy.DeploymentGroup.LoadBalancerInfo;

      OnPremisesInstanceTagFilters?: AWS.CodeDeploy.DeploymentGroup.TagFilter[];

      OnPremisesTagSet?: AWS.CodeDeploy.DeploymentGroup.OnPremisesTagSet;

      ServiceRoleArn: string;

      TriggerConfigurations?: AWS.CodeDeploy.DeploymentGroup.TriggerConfig[];
    };

    export namespace DeploymentGroup {
      export type TargetGroupInfo = {
        Name?: string;
      };

      export type OnPremisesTagSetListObject = {
        OnPremisesTagGroup?: AWS.CodeDeploy.DeploymentGroup.TagFilter[];
      };

      export type DeploymentStyle = {
        DeploymentOption?: string;

        DeploymentType?: string;
      };

      export type EC2TagFilter = {
        Key?: string;

        Type?: string;

        Value?: string;
      };

      export type OnPremisesTagSet = {
        OnPremisesTagSetList?: AWS.CodeDeploy.DeploymentGroup.OnPremisesTagSetListObject[];
      };

      export type LoadBalancerInfo = {
        ElbInfoList?: AWS.CodeDeploy.DeploymentGroup.ELBInfo[];

        TargetGroupInfoList?: AWS.CodeDeploy.DeploymentGroup.TargetGroupInfo[];
      };

      export type RevisionLocation = {
        GitHubLocation?: AWS.CodeDeploy.DeploymentGroup.GitHubLocation;

        RevisionType?: string;

        S3Location?: AWS.CodeDeploy.DeploymentGroup.S3Location;
      };

      export type TriggerConfig = {
        TriggerEvents?: string[];

        TriggerName?: string;

        TriggerTargetArn?: string;
      };

      export type EC2TagSet = {
        Ec2TagSetList?: AWS.CodeDeploy.DeploymentGroup.EC2TagSetListObject[];
      };

      export type AlarmConfiguration = {
        Alarms?: AWS.CodeDeploy.DeploymentGroup.Alarm[];

        Enabled?: boolean;

        IgnorePollAlarmFailure?: boolean;
      };

      export type BlueGreenDeploymentConfiguration = {
        DeploymentReadyOption?: AWS.CodeDeploy.DeploymentGroup.DeploymentReadyOption;

        GreenFleetProvisioningOption?: AWS.CodeDeploy.DeploymentGroup.GreenFleetProvisioningOption;

        TerminateBlueInstancesOnDeploymentSuccess?: AWS.CodeDeploy.DeploymentGroup.BlueInstanceTerminationOption;
      };

      export type DeploymentReadyOption = {
        ActionOnTimeout?: string;

        WaitTimeInMinutes?: number;
      };

      export type AutoRollbackConfiguration = {
        Enabled?: boolean;

        Events?: string[];
      };

      export type S3Location = {
        Bucket: string;

        BundleType?: string;

        ETag?: string;

        Key: string;

        Version?: string;
      };

      export type BlueInstanceTerminationOption = {
        Action?: string;

        TerminationWaitTimeInMinutes?: number;
      };

      export type TagFilter = {
        Key?: string;

        Type?: string;

        Value?: string;
      };

      export type GitHubLocation = {
        CommitId: string;

        Repository: string;
      };

      export type ELBInfo = {
        Name?: string;
      };

      export type Alarm = {
        Name?: string;
      };

      export type GreenFleetProvisioningOption = {
        Action?: string;
      };

      export type Deployment = {
        Description?: string;

        IgnoreApplicationStopFailures?: boolean;

        Revision: AWS.CodeDeploy.DeploymentGroup.RevisionLocation;
      };

      export type ECSService = {
        ClusterName: string;

        ServiceName: string;
      };

      export type EC2TagSetListObject = {
        Ec2TagGroup?: AWS.CodeDeploy.DeploymentGroup.EC2TagFilter[];
      };
    }

    export type Application = {
      ApplicationName?: string;

      ComputePlatform?: string;

      Tags?: Tag[];
    };
  }

  export namespace Batch {
    export type JobDefinition = {
      Type: string;

      Parameters?: JSONString;

      NodeProperties?: AWS.Batch.JobDefinition.NodeProperties;

      Timeout?: AWS.Batch.JobDefinition.Timeout;

      ContainerProperties?: AWS.Batch.JobDefinition.ContainerProperties;

      JobDefinitionName?: string;

      PropagateTags?: boolean;

      PlatformCapabilities?: string[];

      RetryStrategy?: AWS.Batch.JobDefinition.RetryStrategy;

      Tags?: JSONString;
    };

    export namespace JobDefinition {
      export type Volumes = {
        Host?: AWS.Batch.JobDefinition.VolumesHost;

        EfsVolumeConfiguration?: AWS.Batch.JobDefinition.EfsVolumeConfiguration;

        Name?: string;
      };

      export type AuthorizationConfig = {
        Iam?: string;

        AccessPointId?: string;
      };

      export type ResourceRequirement = {
        Type?: string;

        Value?: string;
      };

      export type Environment = {
        Value?: string;

        Name?: string;
      };

      export type VolumesHost = {
        SourcePath?: string;
      };

      export type NodeProperties = {
        MainNode: number;

        NodeRangeProperties: AWS.Batch.JobDefinition.NodeRangeProperty[];

        NumNodes: number;
      };

      export type RetryStrategy = {
        EvaluateOnExit?: AWS.Batch.JobDefinition.EvaluateOnExit[];

        Attempts?: number;
      };

      export type Secret = {
        ValueFrom: string;

        Name: string;
      };

      export type NetworkConfiguration = {
        AssignPublicIp?: string;
      };

      export type LogConfiguration = {
        SecretOptions?: AWS.Batch.JobDefinition.Secret[];

        Options?: JSONString;

        LogDriver: string;
      };

      export type ContainerProperties = {
        User?: string;

        Secrets?: AWS.Batch.JobDefinition.Secret[];

        Memory?: number;

        Privileged?: boolean;

        LinuxParameters?: AWS.Batch.JobDefinition.LinuxParameters;

        FargatePlatformConfiguration?: AWS.Batch.JobDefinition.FargatePlatformConfiguration;

        JobRoleArn?: string;

        ReadonlyRootFilesystem?: boolean;

        Vcpus?: number;

        Image: string;

        ResourceRequirements?: AWS.Batch.JobDefinition.ResourceRequirement[];

        LogConfiguration?: AWS.Batch.JobDefinition.LogConfiguration;

        MountPoints?: AWS.Batch.JobDefinition.MountPoints[];

        ExecutionRoleArn?: string;

        Volumes?: AWS.Batch.JobDefinition.Volumes[];

        Command?: string[];

        Environment?: AWS.Batch.JobDefinition.Environment[];

        Ulimits?: AWS.Batch.JobDefinition.Ulimit[];

        NetworkConfiguration?: AWS.Batch.JobDefinition.NetworkConfiguration;

        InstanceType?: string;
      };

      export type MountPoints = {
        ReadOnly?: boolean;

        SourceVolume?: string;

        ContainerPath?: string;
      };

      export type EvaluateOnExit = {
        Action: string;

        OnExitCode?: string;

        OnReason?: string;

        OnStatusReason?: string;
      };

      export type Ulimit = {
        SoftLimit: number;

        HardLimit: number;

        Name: string;
      };

      export type LinuxParameters = {
        Swappiness?: number;

        Tmpfs?: AWS.Batch.JobDefinition.Tmpfs[];

        SharedMemorySize?: number;

        Devices?: AWS.Batch.JobDefinition.Device[];

        InitProcessEnabled?: boolean;

        MaxSwap?: number;
      };

      export type FargatePlatformConfiguration = {
        PlatformVersion?: string;
      };

      export type Timeout = {
        AttemptDurationSeconds?: number;
      };

      export type Tmpfs = {
        Size: number;

        ContainerPath: string;

        MountOptions?: string[];
      };

      export type NodeRangeProperty = {
        Container?: AWS.Batch.JobDefinition.ContainerProperties;

        TargetNodes: string;
      };

      export type EfsVolumeConfiguration = {
        TransitEncryption?: string;

        AuthorizationConfig?: AWS.Batch.JobDefinition.AuthorizationConfig;

        FileSystemId: string;

        RootDirectory?: string;

        TransitEncryptionPort?: number;
      };

      export type Device = {
        HostPath?: string;

        Permissions?: string[];

        ContainerPath?: string;
      };
    }

    export type ComputeEnvironment = {
      Type: string;

      ServiceRole?: string;

      ComputeEnvironmentName?: string;

      ComputeResources?: AWS.Batch.ComputeEnvironment.ComputeResources;

      State?: string;

      Tags?: JSONString;
    };

    export namespace ComputeEnvironment {
      export type ComputeResources = {
        SpotIamFleetRole?: string;

        MaxvCpus: number;

        Ec2Configuration?: AWS.Batch.ComputeEnvironment.Ec2ConfigurationObject[];

        BidPercentage?: number;

        SecurityGroupIds?: string[];

        Subnets: string[];

        Type: string;

        AllocationStrategy?: string;

        MinvCpus?: number;

        LaunchTemplate?: AWS.Batch.ComputeEnvironment.LaunchTemplateSpecification;

        ImageId?: string;

        InstanceRole?: string;

        InstanceTypes?: string[];

        Ec2KeyPair?: string;

        PlacementGroup?: string;

        Tags?: JSONString;

        DesiredvCpus?: number;
      };

      export type LaunchTemplateSpecification = {
        LaunchTemplateName?: string;

        Version?: string;

        LaunchTemplateId?: string;
      };

      export type Ec2ConfigurationObject = {
        ImageIdOverride?: string;

        ImageType: string;
      };
    }

    export type JobQueue = {
      ComputeEnvironmentOrder: AWS.Batch.JobQueue.ComputeEnvironmentOrder[];

      Priority: number;

      State?: string;

      JobQueueName?: string;

      Tags?: JSONString;
    };

    export namespace JobQueue {
      export type ComputeEnvironmentOrder = {
        ComputeEnvironment: string;

        Order: number;
      };
    }
  }

  export namespace DataBrew {
    export type Dataset = {
      Name: string;

      Format?: string;

      FormatOptions?: AWS.DataBrew.Dataset.FormatOptions;

      Input: AWS.DataBrew.Dataset.Input;

      PathOptions?: AWS.DataBrew.Dataset.PathOptions;

      Tags?: Tag[];
    };

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
        GlueConnectionName?: string;

        DatabaseTableName?: string;

        TempDirectory?: AWS.DataBrew.Dataset.S3Location;
      };

      export type PathOptions = {
        FilesLimit?: AWS.DataBrew.Dataset.FilesLimit;

        LastModifiedDateCondition?: AWS.DataBrew.Dataset.FilterExpression;

        Parameters?: AWS.DataBrew.Dataset.PathParameter[];
      };

      export type DatasetParameter = {
        Name: string;

        Type: string;

        DatetimeOptions?: AWS.DataBrew.Dataset.DatetimeOptions;

        CreateColumn?: boolean;

        Filter?: AWS.DataBrew.Dataset.FilterExpression;
      };

      export type FilesLimit = {
        MaxFiles: number;

        OrderedBy?: string;

        Order?: string;
      };

      export type CsvOptions = {
        Delimiter?: string;

        HeaderRow?: boolean;
      };

      export type FormatOptions = {
        Json?: AWS.DataBrew.Dataset.JsonOptions;

        Excel?: AWS.DataBrew.Dataset.ExcelOptions;

        Csv?: AWS.DataBrew.Dataset.CsvOptions;
      };

      export type ExcelOptions = {
        SheetNames?: string[];

        SheetIndexes?: number[];

        HeaderRow?: boolean;
      };

      export type JsonOptions = {
        MultiLine?: boolean;
      };

      export type Input = {
        S3InputDefinition?: AWS.DataBrew.Dataset.S3Location;

        DataCatalogInputDefinition?: AWS.DataBrew.Dataset.DataCatalogInputDefinition;

        DatabaseInputDefinition?: AWS.DataBrew.Dataset.DatabaseInputDefinition;
      };

      export type FilterValue = {
        ValueReference: string;

        Value: string;
      };

      export type DataCatalogInputDefinition = {
        CatalogId?: string;

        DatabaseName?: string;

        TableName?: string;

        TempDirectory?: AWS.DataBrew.Dataset.S3Location;
      };

      export type DatetimeOptions = {
        Format: string;

        TimezoneOffset?: string;

        LocaleCode?: string;
      };

      export type S3Location = {
        Bucket: string;

        Key?: string;
      };
    }

    export type Recipe = {
      Description?: string;

      Name: string;

      Steps: AWS.DataBrew.Recipe.RecipeStep[];

      Tags?: Tag[];
    };

    export type Recipe = {
      ParameterMap?: any;
    };

    export namespace Recipe {
      export type RecipeStep = {
        Action: AWS.DataBrew.Recipe.Action;

        ConditionExpressions?: AWS.DataBrew.Recipe.ConditionExpression[];
      };

      export type SecondaryInput = {
        S3InputDefinition?: AWS.DataBrew.Recipe.S3Location;

        DataCatalogInputDefinition?: AWS.DataBrew.Recipe.DataCatalogInputDefinition;
      };

      export type Action = {
        Operation: string;

        Parameters?: AWS.DataBrew.Recipe.ParameterMap;
      };

      export type RecipeParameters = {
        AggregateFunction?: string;

        Base?: string;

        CaseStatement?: string;

        CategoryMap?: string;

        CharsToRemove?: string;

        CollapseConsecutiveWhitespace?: string;

        ColumnDataType?: string;

        ColumnRange?: string;

        Count?: string;

        CustomCharacters?: string;

        CustomStopWords?: string;

        CustomValue?: string;

        DatasetsColumns?: string;

        DateAddValue?: string;

        DateTimeFormat?: string;

        DateTimeParameters?: string;

        DeleteOtherRows?: string;

        Delimiter?: string;

        EndPattern?: string;

        EndPosition?: string;

        EndValue?: string;

        ExpandContractions?: string;

        Exponent?: string;

        FalseString?: string;

        GroupByAggFunctionOptions?: string;

        GroupByColumns?: string;

        HiddenColumns?: string;

        IgnoreCase?: string;

        IncludeInSplit?: string;

        Interval?: string;

        IsText?: string;

        JoinKeys?: string;

        JoinType?: string;

        LeftColumns?: string;

        Limit?: string;

        LowerBound?: string;

        MapType?: string;

        ModeType?: string;

        MultiLine?: boolean;

        NumRows?: string;

        NumRowsAfter?: string;

        NumRowsBefore?: string;

        OrderByColumn?: string;

        OrderByColumns?: string;

        Other?: string;

        Pattern?: string;

        PatternOption1?: string;

        PatternOption2?: string;

        PatternOptions?: string;

        Period?: string;

        Position?: string;

        RemoveAllPunctuation?: string;

        RemoveAllQuotes?: string;

        RemoveAllWhitespace?: string;

        RemoveCustomCharacters?: string;

        RemoveCustomValue?: string;

        RemoveLeadingAndTrailingPunctuation?: string;

        RemoveLeadingAndTrailingQuotes?: string;

        RemoveLeadingAndTrailingWhitespace?: string;

        RemoveLetters?: string;

        RemoveNumbers?: string;

        RemoveSourceColumn?: string;

        RemoveSpecialCharacters?: string;

        RightColumns?: string;

        SampleSize?: string;

        SampleType?: string;

        SecondInput?: string;

        SecondaryInputs?: AWS.DataBrew.Recipe.SecondaryInput[];

        SourceColumn?: string;

        SourceColumn1?: string;

        SourceColumn2?: string;

        SourceColumns?: string;

        StartColumnIndex?: string;

        StartPattern?: string;

        StartPosition?: string;

        StartValue?: string;

        StemmingMode?: string;

        StepCount?: string;

        StepIndex?: string;

        StopWordsMode?: string;

        Strategy?: string;

        SheetNames?: string[];

        SheetIndexes?: number[];

        TargetColumn?: string;

        TargetColumnNames?: string;

        TargetDateFormat?: string;

        TargetIndex?: string;

        TimeZone?: string;

        TokenizerPattern?: string;

        TrueString?: string;

        UdfLang?: string;

        Units?: string;

        UnpivotColumn?: string;

        UpperBound?: string;

        UseNewDataFrame?: string;

        Value?: string;

        Value1?: string;

        Value2?: string;

        ValueColumn?: string;

        ViewFrame?: string;

        Input?: JSONString;
      };

      export type S3Location = {
        Bucket: string;

        Key?: string;
      };

      export type ConditionExpression = {
        Condition: string;

        Value?: string;

        TargetColumn: string;
      };

      export type DataCatalogInputDefinition = {
        CatalogId?: string;

        DatabaseName?: string;

        TableName?: string;

        TempDirectory?: AWS.DataBrew.Recipe.S3Location;
      };
    }

    export type Job = {
      DatasetName?: string;

      EncryptionKeyArn?: string;

      EncryptionMode?: string;

      Name: string;

      Type: string;

      LogSubscription?: string;

      MaxCapacity?: number;

      MaxRetries?: number;

      Outputs?: AWS.DataBrew.Job.Output[];

      DataCatalogOutputs?: AWS.DataBrew.Job.DataCatalogOutput[];

      OutputLocation?: AWS.DataBrew.Job.OutputLocation;

      ProjectName?: string;

      Recipe?: AWS.DataBrew.Job.Recipe;

      RoleArn: string;

      Tags?: Tag[];

      Timeout?: number;

      JobSample?: AWS.DataBrew.Job.JobSample;
    };

    export namespace Job {
      export type DataCatalogOutput = {
        CatalogId?: string;

        DatabaseName: string;

        TableName: string;

        S3Options?: AWS.DataBrew.Job.S3TableOutputOptions;

        DatabaseOptions?: AWS.DataBrew.Job.DatabaseTableOutputOptions;

        Overwrite?: boolean;
      };

      export type S3Location = {
        Bucket: string;

        Key?: string;
      };

      export type OutputFormatOptions = {
        Csv?: AWS.DataBrew.Job.CsvOutputOptions;
      };

      export type CsvOutputOptions = {
        Delimiter?: string;
      };

      export type Recipe = {
        Name: string;

        Version?: string;
      };

      export type S3TableOutputOptions = {
        Location: AWS.DataBrew.Job.S3Location;
      };

      export type Output = {
        CompressionFormat?: string;

        Format?: string;

        FormatOptions?: AWS.DataBrew.Job.OutputFormatOptions;

        PartitionColumns?: string[];

        Location: AWS.DataBrew.Job.S3Location;

        Overwrite?: boolean;
      };

      export type OutputLocation = {
        Bucket: string;

        Key?: string;
      };

      export type DatabaseTableOutputOptions = {
        TempDirectory?: AWS.DataBrew.Job.S3Location;

        TableName: string;
      };

      export type JobSample = {
        Mode?: string;

        Size?: number;
      };
    }

    export type Project = {
      DatasetName: string;

      Name: string;

      RecipeName: string;

      RoleArn: string;

      Sample?: AWS.DataBrew.Project.Sample;

      Tags?: Tag[];
    };

    export namespace Project {
      export type Sample = {
        Size?: number;

        Type: string;
      };
    }

    export type Schedule = {
      JobNames?: string[];

      CronExpression: string;

      Name: string;

      Tags?: Tag[];
    };
  }

  export namespace ApplicationAutoScaling {
    export type ScalingPolicy = {
      PolicyName: string;

      PolicyType: string;

      ResourceId?: string;

      ScalableDimension?: string;

      ScalingTargetId?: string;

      ServiceNamespace?: string;

      StepScalingPolicyConfiguration?: AWS.ApplicationAutoScaling.ScalingPolicy.StepScalingPolicyConfiguration;

      TargetTrackingScalingPolicyConfiguration?: AWS.ApplicationAutoScaling.ScalingPolicy.TargetTrackingScalingPolicyConfiguration;
    };

    export namespace ScalingPolicy {
      export type StepScalingPolicyConfiguration = {
        AdjustmentType?: string;

        Cooldown?: number;

        MetricAggregationType?: string;

        MinAdjustmentMagnitude?: number;

        StepAdjustments?: AWS.ApplicationAutoScaling.ScalingPolicy.StepAdjustment[];
      };

      export type PredefinedMetricSpecification = {
        PredefinedMetricType: string;

        ResourceLabel?: string;
      };

      export type CustomizedMetricSpecification = {
        Dimensions?: AWS.ApplicationAutoScaling.ScalingPolicy.MetricDimension[];

        MetricName: string;

        Namespace: string;

        Statistic: string;

        Unit?: string;
      };

      export type MetricDimension = {
        Name: string;

        Value: string;
      };

      export type StepAdjustment = {
        MetricIntervalLowerBound?: number;

        MetricIntervalUpperBound?: number;

        ScalingAdjustment: number;
      };

      export type TargetTrackingScalingPolicyConfiguration = {
        CustomizedMetricSpecification?: AWS.ApplicationAutoScaling.ScalingPolicy.CustomizedMetricSpecification;

        DisableScaleIn?: boolean;

        PredefinedMetricSpecification?: AWS.ApplicationAutoScaling.ScalingPolicy.PredefinedMetricSpecification;

        ScaleInCooldown?: number;

        ScaleOutCooldown?: number;

        TargetValue: number;
      };
    }

    export type ScalableTarget = {
      MaxCapacity: number;

      MinCapacity: number;

      ResourceId: string;

      RoleARN: string;

      ScalableDimension: string;

      ScheduledActions?: AWS.ApplicationAutoScaling.ScalableTarget.ScheduledAction[];

      ServiceNamespace: string;

      SuspendedState?: AWS.ApplicationAutoScaling.ScalableTarget.SuspendedState;
    };

    export namespace ScalableTarget {
      export type SuspendedState = {
        DynamicScalingInSuspended?: boolean;

        DynamicScalingOutSuspended?: boolean;

        ScheduledScalingSuspended?: boolean;
      };

      export type ScheduledAction = {
        EndTime?: Timestamp;

        ScalableTargetAction?: AWS.ApplicationAutoScaling.ScalableTarget.ScalableTargetAction;

        Schedule: string;

        ScheduledActionName: string;

        StartTime?: Timestamp;

        Timezone?: string;
      };

      export type ScalableTargetAction = {
        MaxCapacity?: number;

        MinCapacity?: number;
      };
    }
  }

  export namespace EC2 {
    export type TransitGatewayConnect = {
      TransportTransitGatewayAttachmentId: string;

      Tags?: Tag[];

      Options: AWS.EC2.TransitGatewayConnect.TransitGatewayConnectOptions;
    };

    export namespace TransitGatewayConnect {
      export type TransitGatewayConnectOptions = {
        Protocol?: string;
      };
    }

    export type EC2Fleet = {
      TargetCapacitySpecification: AWS.EC2.EC2Fleet.TargetCapacitySpecificationRequest;

      OnDemandOptions?: AWS.EC2.EC2Fleet.OnDemandOptionsRequest;

      Type?: string;

      ExcessCapacityTerminationPolicy?: string;

      TagSpecifications?: AWS.EC2.EC2Fleet.TagSpecification[];

      SpotOptions?: AWS.EC2.EC2Fleet.SpotOptionsRequest;

      ValidFrom?: string;

      ReplaceUnhealthyInstances?: boolean;

      LaunchTemplateConfigs: AWS.EC2.EC2Fleet.FleetLaunchTemplateConfigRequest[];

      TerminateInstancesWithExpiration?: boolean;

      ValidUntil?: string;

      Context?: string;
    };

    export namespace EC2Fleet {
      export type FleetLaunchTemplateSpecificationRequest = {
        LaunchTemplateName?: string;

        LaunchTemplateId?: string;

        Version?: string;
      };

      export type TargetCapacitySpecificationRequest = {
        DefaultTargetCapacityType?: string;

        TotalTargetCapacity: number;

        OnDemandTargetCapacity?: number;

        SpotTargetCapacity?: number;
      };

      export type CapacityReservationOptionsRequest = {
        UsageStrategy?: string;
      };

      export type FleetLaunchTemplateConfigRequest = {
        LaunchTemplateSpecification?: AWS.EC2.EC2Fleet.FleetLaunchTemplateSpecificationRequest;

        Overrides?: AWS.EC2.EC2Fleet.FleetLaunchTemplateOverridesRequest[];
      };

      export type TagSpecification = {
        ResourceType?: string;

        Tags?: Tag[];
      };

      export type SpotOptionsRequest = {
        SingleAvailabilityZone?: boolean;

        AllocationStrategy?: string;

        SingleInstanceType?: boolean;

        MinTargetCapacity?: number;

        MaxTotalPrice?: string;

        InstanceInterruptionBehavior?: string;

        InstancePoolsToUseCount?: number;
      };

      export type OnDemandOptionsRequest = {
        SingleAvailabilityZone?: boolean;

        AllocationStrategy?: string;

        SingleInstanceType?: boolean;

        MinTargetCapacity?: number;

        MaxTotalPrice?: string;

        CapacityReservationOptions?: AWS.EC2.EC2Fleet.CapacityReservationOptionsRequest;
      };

      export type FleetLaunchTemplateOverridesRequest = {
        WeightedCapacity?: number;

        Placement?: AWS.EC2.EC2Fleet.Placement;

        Priority?: number;

        AvailabilityZone?: string;

        SubnetId?: string;

        InstanceType?: string;

        MaxPrice?: string;
      };

      export type Placement = {
        GroupName?: string;

        Tenancy?: string;

        SpreadDomain?: string;

        PartitionNumber?: number;

        AvailabilityZone?: string;

        Affinity?: string;

        HostId?: string;

        HostResourceGroupArn?: string;
      };
    }

    export type VPNConnection = {
      CustomerGatewayId: string;

      StaticRoutesOnly?: boolean;

      Tags?: Tag[];

      TransitGatewayId?: string;

      Type: string;

      VpnGatewayId?: string;

      VpnTunnelOptionsSpecifications?: AWS.EC2.VPNConnection.VpnTunnelOptionsSpecification[];
    };

    export namespace VPNConnection {
      export type VpnTunnelOptionsSpecification = {
        PreSharedKey?: string;

        TunnelInsideCidr?: string;
      };
    }

    export type TrafficMirrorFilterRule = {
      DestinationPortRange?: AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

      Description?: string;

      SourcePortRange?: AWS.EC2.TrafficMirrorFilterRule.TrafficMirrorPortRange;

      RuleAction: string;

      SourceCidrBlock: string;

      RuleNumber: number;

      DestinationCidrBlock: string;

      TrafficMirrorFilterId: string;

      TrafficDirection: string;

      Protocol?: number;
    };

    export namespace TrafficMirrorFilterRule {
      export type TrafficMirrorPortRange = {
        FromPort: number;

        ToPort: number;
      };
    }

    export type LaunchTemplate = {
      LaunchTemplateName?: string;

      LaunchTemplateData?: AWS.EC2.LaunchTemplate.LaunchTemplateData;

      TagSpecifications?: AWS.EC2.LaunchTemplate.LaunchTemplateTagSpecification[];
    };

    export namespace LaunchTemplate {
      export type BlockDeviceMapping = {
        Ebs?: AWS.EC2.LaunchTemplate.Ebs;

        NoDevice?: string;

        VirtualName?: string;

        DeviceName?: string;
      };

      export type SpotOptions = {
        SpotInstanceType?: string;

        InstanceInterruptionBehavior?: string;

        MaxPrice?: string;

        BlockDurationMinutes?: number;

        ValidUntil?: string;
      };

      export type ElasticGpuSpecification = {
        Type?: string;
      };

      export type TagSpecification = {
        ResourceType?: string;

        Tags?: Tag[];
      };

      export type Ebs = {
        SnapshotId?: string;

        VolumeType?: string;

        KmsKeyId?: string;

        Encrypted?: boolean;

        Throughput?: number;

        Iops?: number;

        VolumeSize?: number;

        DeleteOnTermination?: boolean;
      };

      export type EnclaveOptions = {
        Enabled?: boolean;
      };

      export type LaunchTemplateData = {
        SecurityGroups?: string[];

        TagSpecifications?: AWS.EC2.LaunchTemplate.TagSpecification[];

        UserData?: string;

        BlockDeviceMappings?: AWS.EC2.LaunchTemplate.BlockDeviceMapping[];

        IamInstanceProfile?: AWS.EC2.LaunchTemplate.IamInstanceProfile;

        KernelId?: string;

        EbsOptimized?: boolean;

        ElasticGpuSpecifications?: AWS.EC2.LaunchTemplate.ElasticGpuSpecification[];

        ElasticInferenceAccelerators?: AWS.EC2.LaunchTemplate.LaunchTemplateElasticInferenceAccelerator[];

        Placement?: AWS.EC2.LaunchTemplate.Placement;

        NetworkInterfaces?: AWS.EC2.LaunchTemplate.NetworkInterface[];

        EnclaveOptions?: AWS.EC2.LaunchTemplate.EnclaveOptions;

        ImageId?: string;

        InstanceType?: string;

        Monitoring?: AWS.EC2.LaunchTemplate.Monitoring;

        HibernationOptions?: AWS.EC2.LaunchTemplate.HibernationOptions;

        MetadataOptions?: AWS.EC2.LaunchTemplate.MetadataOptions;

        LicenseSpecifications?: AWS.EC2.LaunchTemplate.LicenseSpecification[];

        InstanceInitiatedShutdownBehavior?: string;

        CpuOptions?: AWS.EC2.LaunchTemplate.CpuOptions;

        SecurityGroupIds?: string[];

        KeyName?: string;

        DisableApiTermination?: boolean;

        InstanceMarketOptions?: AWS.EC2.LaunchTemplate.InstanceMarketOptions;

        RamDiskId?: string;

        CapacityReservationSpecification?: AWS.EC2.LaunchTemplate.CapacityReservationSpecification;

        CreditSpecification?: AWS.EC2.LaunchTemplate.CreditSpecification;
      };

      export type MetadataOptions = {
        HttpPutResponseHopLimit?: number;

        HttpTokens?: string;

        HttpEndpoint?: string;
      };

      export type CapacityReservationSpecification = {
        CapacityReservationPreference?: string;

        CapacityReservationTarget?: AWS.EC2.LaunchTemplate.CapacityReservationTarget;
      };

      export type CapacityReservationTarget = {
        CapacityReservationResourceGroupArn?: string;

        CapacityReservationId?: string;
      };

      export type CpuOptions = {
        ThreadsPerCore?: number;

        CoreCount?: number;
      };

      export type PrivateIpAdd = {
        PrivateIpAddress?: string;

        Primary?: boolean;
      };

      export type IamInstanceProfile = {
        Arn?: string;

        Name?: string;
      };

      export type LicenseSpecification = {
        LicenseConfigurationArn?: string;
      };

      export type HibernationOptions = {
        Configured?: boolean;
      };

      export type InstanceMarketOptions = {
        SpotOptions?: AWS.EC2.LaunchTemplate.SpotOptions;

        MarketType?: string;
      };

      export type CreditSpecification = {
        CpuCredits?: string;
      };

      export type Monitoring = {
        Enabled?: boolean;
      };

      export type Placement = {
        GroupName?: string;

        Tenancy?: string;

        SpreadDomain?: string;

        PartitionNumber?: number;

        AvailabilityZone?: string;

        Affinity?: string;

        HostId?: string;

        HostResourceGroupArn?: string;
      };

      export type Ipv6Add = {
        Ipv6Address?: string;
      };

      export type NetworkInterface = {
        Description?: string;

        PrivateIpAddress?: string;

        PrivateIpAddresses?: AWS.EC2.LaunchTemplate.PrivateIpAdd[];

        SecondaryPrivateIpAddressCount?: number;

        DeviceIndex?: number;

        SubnetId?: string;

        Ipv6Addresses?: AWS.EC2.LaunchTemplate.Ipv6Add[];

        AssociatePublicIpAddress?: boolean;

        NetworkInterfaceId?: string;

        NetworkCardIndex?: number;

        InterfaceType?: string;

        AssociateCarrierIpAddress?: boolean;

        Ipv6AddressCount?: number;

        Groups?: string[];

        DeleteOnTermination?: boolean;
      };

      export type LaunchTemplateElasticInferenceAccelerator = {
        Type?: string;

        Count?: number;
      };

      export type LaunchTemplateTagSpecification = {
        ResourceType?: string;

        Tags?: Tag[];
      };
    }

    export type Instance = {
      AdditionalInfo?: string;

      Affinity?: string;

      AvailabilityZone?: string;

      BlockDeviceMappings?: AWS.EC2.Instance.BlockDeviceMapping[];

      CpuOptions?: AWS.EC2.Instance.CpuOptions;

      CreditSpecification?: AWS.EC2.Instance.CreditSpecification;

      DisableApiTermination?: boolean;

      EbsOptimized?: boolean;

      ElasticGpuSpecifications?: AWS.EC2.Instance.ElasticGpuSpecification[];

      ElasticInferenceAccelerators?: AWS.EC2.Instance.ElasticInferenceAccelerator[];

      EnclaveOptions?: AWS.EC2.Instance.EnclaveOptions;

      HibernationOptions?: AWS.EC2.Instance.HibernationOptions;

      HostId?: string;

      HostResourceGroupArn?: string;

      IamInstanceProfile?: string;

      ImageId?: string;

      InstanceInitiatedShutdownBehavior?: string;

      InstanceType?: string;

      Ipv6AddressCount?: number;

      Ipv6Addresses?: AWS.EC2.Instance.InstanceIpv6Address[];

      KernelId?: string;

      KeyName?: string;

      LaunchTemplate?: AWS.EC2.Instance.LaunchTemplateSpecification;

      LicenseSpecifications?: AWS.EC2.Instance.LicenseSpecification[];

      Monitoring?: boolean;

      NetworkInterfaces?: AWS.EC2.Instance.NetworkInterface[];

      PlacementGroupName?: string;

      PrivateIpAddress?: string;

      RamdiskId?: string;

      SecurityGroupIds?: string[];

      SecurityGroups?: string[];

      SourceDestCheck?: boolean;

      SsmAssociations?: AWS.EC2.Instance.SsmAssociation[];

      SubnetId?: string;

      Tags?: Tag[];

      Tenancy?: string;

      UserData?: string;

      Volumes?: AWS.EC2.Instance.Volume[];
    };

    export namespace Instance {
      export type HibernationOptions = {
        Configured?: boolean;
      };

      export type Ebs = {
        DeleteOnTermination?: boolean;

        Encrypted?: boolean;

        Iops?: number;

        KmsKeyId?: string;

        SnapshotId?: string;

        VolumeSize?: number;

        VolumeType?: string;
      };

      export type CreditSpecification = {
        CPUCredits?: string;
      };

      export type ElasticGpuSpecification = {
        Type: string;
      };

      export type CpuOptions = {
        CoreCount?: number;

        ThreadsPerCore?: number;
      };

      export type LaunchTemplateSpecification = {
        LaunchTemplateId?: string;

        LaunchTemplateName?: string;

        Version: string;
      };

      export type BlockDeviceMapping = {
        DeviceName: string;

        Ebs?: AWS.EC2.Instance.Ebs;

        NoDevice?: AWS.EC2.Instance.NoDevice;

        VirtualName?: string;
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
        AssociatePublicIpAddress?: boolean;

        DeleteOnTermination?: boolean;

        Description?: string;

        DeviceIndex: string;

        GroupSet?: string[];

        Ipv6AddressCount?: number;

        Ipv6Addresses?: AWS.EC2.Instance.InstanceIpv6Address[];

        NetworkInterfaceId?: string;

        PrivateIpAddress?: string;

        PrivateIpAddresses?: AWS.EC2.Instance.PrivateIpAddressSpecification[];

        SecondaryPrivateIpAddressCount?: number;

        SubnetId?: string;
      };

      export type InstanceIpv6Address = {
        Ipv6Address: string;
      };

      export type AssociationParameter = {
        Key: string;

        Value: string[];
      };

      export type EnclaveOptions = {
        Enabled?: boolean;
      };

      export type LicenseSpecification = {
        LicenseConfigurationArn: string;
      };

      export type SsmAssociation = {
        AssociationParameters?: AWS.EC2.Instance.AssociationParameter[];

        DocumentName: string;
      };

      export type ElasticInferenceAccelerator = {
        Count?: number;

        Type: string;
      };
    }

    export type SpotFleet = {
      SpotFleetRequestConfigData: AWS.EC2.SpotFleet.SpotFleetRequestConfigData;
    };

    export namespace SpotFleet {
      export type SpotPlacement = {
        AvailabilityZone?: string;

        GroupName?: string;

        Tenancy?: string;
      };

      export type LaunchTemplateOverrides = {
        AvailabilityZone?: string;

        InstanceType?: string;

        SpotPrice?: string;

        SubnetId?: string;

        WeightedCapacity?: number;
      };

      export type IamInstanceProfileSpecification = {
        Arn?: string;
      };

      export type InstanceNetworkInterfaceSpecification = {
        AssociatePublicIpAddress?: boolean;

        DeleteOnTermination?: boolean;

        Description?: string;

        DeviceIndex?: number;

        Groups?: string[];

        Ipv6AddressCount?: number;

        Ipv6Addresses?: AWS.EC2.SpotFleet.InstanceIpv6Address[];

        NetworkInterfaceId?: string;

        PrivateIpAddresses?: AWS.EC2.SpotFleet.PrivateIpAddressSpecification[];

        SecondaryPrivateIpAddressCount?: number;

        SubnetId?: string;
      };

      export type SpotFleetLaunchSpecification = {
        BlockDeviceMappings?: AWS.EC2.SpotFleet.BlockDeviceMapping[];

        EbsOptimized?: boolean;

        IamInstanceProfile?: AWS.EC2.SpotFleet.IamInstanceProfileSpecification;

        ImageId: string;

        InstanceType: string;

        KernelId?: string;

        KeyName?: string;

        Monitoring?: AWS.EC2.SpotFleet.SpotFleetMonitoring;

        NetworkInterfaces?: AWS.EC2.SpotFleet.InstanceNetworkInterfaceSpecification[];

        Placement?: AWS.EC2.SpotFleet.SpotPlacement;

        RamdiskId?: string;

        SecurityGroups?: AWS.EC2.SpotFleet.GroupIdentifier[];

        SpotPrice?: string;

        SubnetId?: string;

        TagSpecifications?: AWS.EC2.SpotFleet.SpotFleetTagSpecification[];

        UserData?: string;

        WeightedCapacity?: number;
      };

      export type ClassicLoadBalancersConfig = {
        ClassicLoadBalancers: AWS.EC2.SpotFleet.ClassicLoadBalancer[];
      };

      export type SpotMaintenanceStrategies = {
        CapacityRebalance?: AWS.EC2.SpotFleet.SpotCapacityRebalance;
      };

      export type SpotFleetTagSpecification = {
        ResourceType?: string;

        Tags?: Tag[];
      };

      export type PrivateIpAddressSpecification = {
        Primary?: boolean;

        PrivateIpAddress: string;
      };

      export type SpotCapacityRebalance = {
        ReplacementStrategy?: string;
      };

      export type EbsBlockDevice = {
        DeleteOnTermination?: boolean;

        Encrypted?: boolean;

        Iops?: number;

        SnapshotId?: string;

        VolumeSize?: number;

        VolumeType?: string;
      };

      export type LoadBalancersConfig = {
        ClassicLoadBalancersConfig?: AWS.EC2.SpotFleet.ClassicLoadBalancersConfig;

        TargetGroupsConfig?: AWS.EC2.SpotFleet.TargetGroupsConfig;
      };

      export type FleetLaunchTemplateSpecification = {
        LaunchTemplateId?: string;

        LaunchTemplateName?: string;

        Version: string;
      };

      export type TargetGroup = {
        Arn: string;
      };

      export type SpotFleetMonitoring = {
        Enabled?: boolean;
      };

      export type ClassicLoadBalancer = {
        Name: string;
      };

      export type LaunchTemplateConfig = {
        LaunchTemplateSpecification?: AWS.EC2.SpotFleet.FleetLaunchTemplateSpecification;

        Overrides?: AWS.EC2.SpotFleet.LaunchTemplateOverrides[];
      };

      export type SpotFleetRequestConfigData = {
        AllocationStrategy?: string;

        ExcessCapacityTerminationPolicy?: string;

        IamFleetRole: string;

        InstanceInterruptionBehavior?: string;

        InstancePoolsToUseCount?: number;

        LaunchSpecifications?: AWS.EC2.SpotFleet.SpotFleetLaunchSpecification[];

        LaunchTemplateConfigs?: AWS.EC2.SpotFleet.LaunchTemplateConfig[];

        LoadBalancersConfig?: AWS.EC2.SpotFleet.LoadBalancersConfig;

        OnDemandAllocationStrategy?: string;

        OnDemandMaxTotalPrice?: string;

        OnDemandTargetCapacity?: number;

        ReplaceUnhealthyInstances?: boolean;

        SpotMaintenanceStrategies?: AWS.EC2.SpotFleet.SpotMaintenanceStrategies;

        SpotMaxTotalPrice?: string;

        SpotPrice?: string;

        TargetCapacity: number;

        TerminateInstancesWithExpiration?: boolean;

        Type?: string;

        ValidFrom?: string;

        ValidUntil?: string;

        Context?: string;
      };

      export type InstanceIpv6Address = {
        Ipv6Address: string;
      };

      export type TargetGroupsConfig = {
        TargetGroups: AWS.EC2.SpotFleet.TargetGroup[];
      };

      export type GroupIdentifier = {
        GroupId: string;
      };

      export type BlockDeviceMapping = {
        DeviceName: string;

        Ebs?: AWS.EC2.SpotFleet.EbsBlockDevice;

        NoDevice?: string;

        VirtualName?: string;
      };
    }

    export type NetworkInterface = {
      Description?: string;

      GroupSet?: string[];

      InterfaceType?: string;

      Ipv6AddressCount?: number;

      Ipv6Addresses?: AWS.EC2.NetworkInterface.InstanceIpv6Address[];

      PrivateIpAddress?: string;

      PrivateIpAddresses?: AWS.EC2.NetworkInterface.PrivateIpAddressSpecification[];

      SecondaryPrivateIpAddressCount?: number;

      SourceDestCheck?: boolean;

      SubnetId: string;

      Tags?: Tag[];
    };

    export namespace NetworkInterface {
      export type InstanceIpv6Address = {
        Ipv6Address: string;
      };

      export type PrivateIpAddressSpecification = {
        Primary: boolean;

        PrivateIpAddress: string;
      };
    }

    export type NetworkInsightsAnalysis = {
      NetworkInsightsPathId: string;

      FilterInArns?: string[];

      Tags?: Tag[];
    };

    export namespace NetworkInsightsAnalysis {
      export type AnalysisAclRule = {
        Cidr?: string;

        Egress?: boolean;

        PortRange?: AWS.EC2.NetworkInsightsAnalysis.PortRange;

        Protocol?: string;

        RuleAction?: string;

        RuleNumber?: number;
      };

      export type AlternatePathHint = {
        ComponentId?: string;

        ComponentArn?: string;
      };

      export type Explanation = {
        Acl?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        AclRule?: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

        Address?: string;

        Addresses?: string[];

        AttachedTo?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        AvailabilityZones?: string[];

        Cidrs?: string[];

        Component?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        CustomerGateway?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Destination?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        DestinationVpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Direction?: string;

        ExplanationCode?: string;

        IngressRouteTable?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        InternetGateway?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        LoadBalancerArn?: string;

        ClassicLoadBalancerListener?: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerListener;

        LoadBalancerListenerPort?: number;

        LoadBalancerTarget?: AWS.EC2.NetworkInsightsAnalysis.AnalysisLoadBalancerTarget;

        LoadBalancerTargetGroup?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        LoadBalancerTargetGroups?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent[];

        LoadBalancerTargetPort?: number;

        ElasticLoadBalancerListener?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        MissingComponent?: string;

        NatGateway?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        NetworkInterface?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        PacketField?: string;

        VpcPeeringConnection?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Port?: number;

        PortRanges?: AWS.EC2.NetworkInsightsAnalysis.PortRange[];

        PrefixList?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Protocols?: string[];

        RouteTableRoute?: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

        RouteTable?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        SecurityGroup?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        SecurityGroupRule?: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

        SecurityGroups?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent[];

        SourceVpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        State?: string;

        Subnet?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        SubnetRouteTable?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Vpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        vpcEndpoint?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        VpnConnection?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        VpnGateway?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;
      };

      export type AnalysisLoadBalancerListener = {
        InstancePort?: number;

        LoadBalancerPort?: number;
      };

      export type AnalysisLoadBalancerTarget = {
        Address?: string;

        AvailabilityZone?: string;

        Instance?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Port?: number;
      };

      export type AnalysisRouteTableRoute = {
        destinationCidr?: string;

        destinationPrefixListId?: string;

        egressOnlyInternetGatewayId?: string;

        gatewayId?: string;

        instanceId?: string;

        NatGatewayId?: string;

        NetworkInterfaceId?: string;

        Origin?: string;

        TransitGatewayId?: string;

        VpcPeeringConnectionId?: string;
      };

      export type AnalysisPacketHeader = {
        DestinationAddresses?: string[];

        DestinationPortRanges?: AWS.EC2.NetworkInsightsAnalysis.PortRange[];

        Protocol?: string;

        SourceAddresses?: string[];

        SourcePortRanges?: AWS.EC2.NetworkInsightsAnalysis.PortRange[];
      };

      export type PathComponent = {
        SequenceNumber?: number;

        AclRule?: AWS.EC2.NetworkInsightsAnalysis.AnalysisAclRule;

        Component?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        DestinationVpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        OutboundHeader?: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

        InboundHeader?: AWS.EC2.NetworkInsightsAnalysis.AnalysisPacketHeader;

        RouteTableRoute?: AWS.EC2.NetworkInsightsAnalysis.AnalysisRouteTableRoute;

        SecurityGroupRule?: AWS.EC2.NetworkInsightsAnalysis.AnalysisSecurityGroupRule;

        SourceVpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Subnet?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;

        Vpc?: AWS.EC2.NetworkInsightsAnalysis.AnalysisComponent;
      };

      export type AnalysisComponent = {
        Id?: string;

        Arn?: string;
      };

      export type PortRange = {
        From?: number;

        To?: number;
      };

      export type AnalysisSecurityGroupRule = {
        Cidr?: string;

        Direction?: string;

        SecurityGroupId?: string;

        PortRange?: AWS.EC2.NetworkInsightsAnalysis.PortRange;

        PrefixListId?: string;

        Protocol?: string;
      };
    }

    export type ClientVpnEndpoint = {
      ClientCidrBlock: string;

      ClientConnectOptions?: AWS.EC2.ClientVpnEndpoint.ClientConnectOptions;

      Description?: string;

      TagSpecifications?: AWS.EC2.ClientVpnEndpoint.TagSpecification[];

      AuthenticationOptions: AWS.EC2.ClientVpnEndpoint.ClientAuthenticationRequest[];

      ServerCertificateArn: string;

      DnsServers?: string[];

      SecurityGroupIds?: string[];

      ConnectionLogOptions: AWS.EC2.ClientVpnEndpoint.ConnectionLogOptions;

      SplitTunnel?: boolean;

      VpcId?: string;

      SelfServicePortal?: string;

      TransportProtocol?: string;

      VpnPort?: number;
    };

    export namespace ClientVpnEndpoint {
      export type ClientConnectOptions = {
        LambdaFunctionArn?: string;

        Enabled: boolean;
      };

      export type DirectoryServiceAuthenticationRequest = {
        DirectoryId: string;
      };

      export type TagSpecification = {
        ResourceType: string;

        Tags: Tag[];
      };

      export type ClientAuthenticationRequest = {
        MutualAuthentication?: AWS.EC2.ClientVpnEndpoint.CertificateAuthenticationRequest;

        Type: string;

        FederatedAuthentication?: AWS.EC2.ClientVpnEndpoint.FederatedAuthenticationRequest;

        ActiveDirectory?: AWS.EC2.ClientVpnEndpoint.DirectoryServiceAuthenticationRequest;
      };

      export type FederatedAuthenticationRequest = {
        SelfServiceSAMLProviderArn?: string;

        SAMLProviderArn: string;
      };

      export type ConnectionLogOptions = {
        CloudwatchLogStream?: string;

        Enabled: boolean;

        CloudwatchLogGroup?: string;
      };

      export type CertificateAuthenticationRequest = {
        ClientRootCertificateChainArn: string;
      };
    }

    export type CapacityReservation = {
      Tenancy?: string;

      EndDateType?: string;

      InstanceCount: number;

      TagSpecifications?: AWS.EC2.CapacityReservation.TagSpecification[];

      AvailabilityZone: string;

      InstancePlatform: string;

      InstanceType: string;

      EphemeralStorage?: boolean;

      InstanceMatchCriteria?: string;

      EndDate?: string;

      EbsOptimized?: boolean;
    };

    export namespace CapacityReservation {
      export type TagSpecification = {
        ResourceType?: string;

        Tags?: Tag[];
      };
    }

    export type NetworkAclEntry = {
      CidrBlock?: string;

      Egress?: boolean;

      Icmp?: AWS.EC2.NetworkAclEntry.Icmp;

      Ipv6CidrBlock?: string;

      NetworkAclId: string;

      PortRange?: AWS.EC2.NetworkAclEntry.PortRange;

      Protocol: number;

      RuleAction: string;

      RuleNumber: number;
    };

    export namespace NetworkAclEntry {
      export type PortRange = {
        From?: number;

        To?: number;
      };

      export type Icmp = {
        Code?: number;

        Type?: number;
      };
    }

    export type SecurityGroup = {
      GroupDescription: string;

      GroupName?: string;

      SecurityGroupEgress?: AWS.EC2.SecurityGroup.Egress[];

      SecurityGroupIngress?: AWS.EC2.SecurityGroup.Ingress[];

      Tags?: Tag[];

      VpcId?: string;
    };

    export namespace SecurityGroup {
      export type Egress = {
        CidrIp?: string;

        CidrIpv6?: string;

        Description?: string;

        DestinationPrefixListId?: string;

        DestinationSecurityGroupId?: string;

        FromPort?: number;

        IpProtocol: string;

        ToPort?: number;
      };

      export type Ingress = {
        CidrIp?: string;

        CidrIpv6?: string;

        Description?: string;

        FromPort?: number;

        IpProtocol: string;

        SourcePrefixListId?: string;

        SourceSecurityGroupId?: string;

        SourceSecurityGroupName?: string;

        SourceSecurityGroupOwnerId?: string;

        ToPort?: number;
      };
    }

    export type PrefixList = {
      PrefixListName: string;

      AddressFamily: string;

      MaxEntries: number;

      Tags?: Tag[];

      Entries?: AWS.EC2.PrefixList.Entry[];
    };

    export namespace PrefixList {
      export type Entry = {
        Cidr: string;

        Description?: string;
      };
    }

    export type VPCPeeringConnection = {
      PeerOwnerId?: string;

      PeerRegion?: string;

      PeerRoleArn?: string;

      PeerVpcId: string;

      Tags?: Tag[];

      VpcId: string;
    };

    export type VPCEndpointServicePermissions = {
      AllowedPrincipals?: string[];

      ServiceId: string;
    };

    export type TransitGatewayRouteTableAssociation = {
      TransitGatewayRouteTableId: string;

      TransitGatewayAttachmentId: string;
    };

    export type EIP = {
      Domain?: string;

      InstanceId?: string;

      PublicIpv4Pool?: string;

      Tags?: Tag[];
    };

    export type SecurityGroupEgress = {
      CidrIp?: string;

      CidrIpv6?: string;

      Description?: string;

      DestinationPrefixListId?: string;

      DestinationSecurityGroupId?: string;

      FromPort?: number;

      GroupId: string;

      IpProtocol: string;

      ToPort?: number;
    };

    export type TransitGatewayAttachment = {
      TransitGatewayId: string;

      VpcId: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type TransitGatewayMulticastDomainAssociation = {
      TransitGatewayMulticastDomainId: string;

      TransitGatewayAttachmentId: string;

      SubnetId: string;
    };

    export type DHCPOptions = {
      DomainName?: string;

      DomainNameServers?: string[];

      NetbiosNameServers?: string[];

      NetbiosNodeType?: number;

      NtpServers?: string[];

      Tags?: Tag[];
    };

    export type EgressOnlyInternetGateway = {
      VpcId: string;
    };

    export type NetworkInterfaceAttachment = {
      DeleteOnTermination?: boolean;

      DeviceIndex: string;

      InstanceId: string;

      NetworkInterfaceId: string;
    };

    export type CustomerGateway = {
      BgpAsn: number;

      IpAddress: string;

      Tags?: Tag[];

      Type: string;
    };

    export type ClientVpnRoute = {
      ClientVpnEndpointId: string;

      TargetVpcSubnetId: string;

      Description?: string;

      DestinationCidrBlock: string;
    };

    export type PlacementGroup = {
      Strategy?: string;
    };

    export type InternetGateway = {
      Tags?: Tag[];
    };

    export type VPNConnectionRoute = {
      DestinationCidrBlock: string;

      VpnConnectionId: string;
    };

    export type NetworkInterfacePermission = {
      AwsAccountId: string;

      NetworkInterfaceId: string;

      Permission: string;
    };

    export type TransitGatewayMulticastGroupMember = {
      GroupIpAddress: string;

      TransitGatewayMulticastDomainId: string;

      NetworkInterfaceId: string;
    };

    export type LocalGatewayRouteTableVPCAssociation = {
      LocalGatewayRouteTableId: string;

      VpcId: string;

      Tags?: Tag[];
    };

    export type TransitGatewayMulticastGroupSource = {
      GroupIpAddress: string;

      TransitGatewayMulticastDomainId: string;

      NetworkInterfaceId: string;
    };

    export type ClientVpnAuthorizationRule = {
      ClientVpnEndpointId: string;

      Description?: string;

      AccessGroupId?: string;

      TargetNetworkCidr: string;

      AuthorizeAllGroups?: boolean;
    };

    export type NatGateway = {
      AllocationId?: string;

      ConnectivityType?: string;

      SubnetId: string;

      Tags?: Tag[];
    };

    export type TransitGatewayMulticastDomain = {
      TransitGatewayId: string;

      Tags?: Tag[];

      Options?: JSONString;
    };

    export type VPCDHCPOptionsAssociation = {
      DhcpOptionsId: string;

      VpcId: string;
    };

    export type EnclaveCertificateIamRoleAssociation = {
      CertificateArn: string;

      RoleArn: string;
    };

    export type TrafficMirrorTarget = {
      NetworkLoadBalancerArn?: string;

      Description?: string;

      NetworkInterfaceId?: string;

      Tags?: Tag[];
    };

    export type RouteTable = {
      Tags?: Tag[];

      VpcId: string;
    };

    export type TransitGateway = {
      DefaultRouteTablePropagation?: string;

      Description?: string;

      AutoAcceptSharedAttachments?: string;

      DefaultRouteTableAssociation?: string;

      VpnEcmpSupport?: string;

      DnsSupport?: string;

      MulticastSupport?: string;

      AmazonSideAsn?: number;

      Tags?: Tag[];
    };

    export type Volume = {
      AutoEnableIO?: boolean;

      AvailabilityZone: string;

      Encrypted?: boolean;

      Iops?: number;

      KmsKeyId?: string;

      MultiAttachEnabled?: boolean;

      OutpostArn?: string;

      Size?: number;

      SnapshotId?: string;

      Tags?: Tag[];

      Throughput?: number;

      VolumeType?: string;
    };

    export type LocalGatewayRoute = {
      DestinationCidrBlock: string;

      LocalGatewayRouteTableId: string;

      LocalGatewayVirtualInterfaceGroupId: string;
    };

    export type VPCEndpointConnectionNotification = {
      ConnectionEvents: string[];

      VPCEndpointId?: string;

      ServiceId?: string;

      ConnectionNotificationArn: string;
    };

    export type FlowLog = {
      DeliverLogsPermissionArn?: string;

      LogDestination?: string;

      LogDestinationType?: string;

      LogFormat?: string;

      LogGroupName?: string;

      MaxAggregationInterval?: number;

      ResourceId: string;

      ResourceType: string;

      Tags?: Tag[];

      TrafficType: string;
    };

    export type Subnet = {
      AssignIpv6AddressOnCreation?: boolean;

      AvailabilityZone?: string;

      CidrBlock: string;

      Ipv6CidrBlock?: string;

      MapPublicIpOnLaunch?: boolean;

      OutpostArn?: string;

      Tags?: Tag[];

      VpcId: string;
    };

    export type CarrierGateway = {
      VpcId: string;

      Tags?: Tag[];
    };

    export type NetworkInsightsPath = {
      SourceIp?: string;

      DestinationIp?: string;

      Source: string;

      Destination: string;

      Protocol: string;

      DestinationPort?: number;

      Tags?: Tag[];
    };

    export type EIPAssociation = {
      AllocationId?: string;

      EIP?: string;

      InstanceId?: string;

      NetworkInterfaceId?: string;

      PrivateIpAddress?: string;
    };

    export type VPNGateway = {
      AmazonSideAsn?: number;

      Tags?: Tag[];

      Type: string;
    };

    export type TransitGatewayRouteTable = {
      TransitGatewayId: string;

      Tags?: Tag[];
    };

    export type VPCEndpointService = {
      NetworkLoadBalancerArns?: string[];

      AcceptanceRequired?: boolean;

      GatewayLoadBalancerArns?: string[];
    };

    export type GatewayRouteTableAssociation = {
      RouteTableId: string;

      GatewayId: string;
    };

    export type TrafficMirrorFilter = {
      Description?: string;

      NetworkServices?: string[];

      Tags?: Tag[];
    };

    export type SecurityGroupIngress = {
      CidrIp?: string;

      CidrIpv6?: string;

      Description?: string;

      FromPort?: number;

      GroupId?: string;

      GroupName?: string;

      IpProtocol: string;

      SourcePrefixListId?: string;

      SourceSecurityGroupId?: string;

      SourceSecurityGroupName?: string;

      SourceSecurityGroupOwnerId?: string;

      ToPort?: number;
    };

    export type SubnetRouteTableAssociation = {
      RouteTableId: string;

      SubnetId: string;
    };

    export type Route = {
      CarrierGatewayId?: string;

      DestinationCidrBlock?: string;

      DestinationIpv6CidrBlock?: string;

      EgressOnlyInternetGatewayId?: string;

      GatewayId?: string;

      InstanceId?: string;

      LocalGatewayId?: string;

      NatGatewayId?: string;

      NetworkInterfaceId?: string;

      RouteTableId: string;

      TransitGatewayId?: string;

      VpcEndpointId?: string;

      VpcPeeringConnectionId?: string;
    };

    export type TransitGatewayRouteTablePropagation = {
      TransitGatewayRouteTableId: string;

      TransitGatewayAttachmentId: string;
    };

    export type SubnetNetworkAclAssociation = {
      NetworkAclId: string;

      SubnetId: string;
    };

    export type TrafficMirrorSession = {
      TrafficMirrorTargetId: string;

      Description?: string;

      SessionNumber: number;

      VirtualNetworkId?: number;

      PacketLength?: number;

      NetworkInterfaceId: string;

      TrafficMirrorFilterId: string;

      Tags?: Tag[];
    };

    export type SubnetCidrBlock = {
      Ipv6CidrBlock: string;

      SubnetId: string;
    };

    export type VPC = {
      CidrBlock: string;

      EnableDnsHostnames?: boolean;

      EnableDnsSupport?: boolean;

      InstanceTenancy?: string;

      Tags?: Tag[];
    };

    export type TransitGatewayRoute = {
      TransitGatewayRouteTableId: string;

      DestinationCidrBlock?: string;

      Blackhole?: boolean;

      TransitGatewayAttachmentId?: string;
    };

    export type NetworkAcl = {
      Tags?: Tag[];

      VpcId: string;
    };

    export type VPNGatewayRoutePropagation = {
      RouteTableIds: string[];

      VpnGatewayId: string;
    };

    export type ClientVpnTargetNetworkAssociation = {
      ClientVpnEndpointId: string;

      SubnetId: string;
    };

    export type TransitGatewayPeeringAttachment = {
      TransitGatewayId: string;

      PeerTransitGatewayId: string;

      PeerAccountId: string;

      PeerRegion: string;

      Tags?: Tag[];
    };

    export type VolumeAttachment = {
      Device: string;

      InstanceId: string;

      VolumeId: string;
    };

    export type Host = {
      AutoPlacement?: string;

      AvailabilityZone: string;

      HostRecovery?: string;

      InstanceType: string;
    };

    export type VPCEndpoint = {
      PolicyDocument?: JSONString;

      PrivateDnsEnabled?: boolean;

      RouteTableIds?: string[];

      SecurityGroupIds?: string[];

      ServiceName: string;

      SubnetIds?: string[];

      VpcEndpointType?: string;

      VpcId: string;
    };

    export type VPCGatewayAttachment = {
      InternetGatewayId?: string;

      VpcId: string;

      VpnGatewayId?: string;
    };

    export type VPCCidrBlock = {
      AmazonProvidedIpv6CidrBlock?: boolean;

      CidrBlock?: string;

      VpcId: string;
    };
  }

  export namespace ImageBuilder {
    export type ImagePipeline = {
      Name: string;

      Description?: string;

      ImageTestsConfiguration?: AWS.ImageBuilder.ImagePipeline.ImageTestsConfiguration;

      Status?: string;

      Schedule?: AWS.ImageBuilder.ImagePipeline.Schedule;

      ImageRecipeArn?: string;

      ContainerRecipeArn?: string;

      DistributionConfigurationArn?: string;

      InfrastructureConfigurationArn: string;

      EnhancedImageMetadataEnabled?: boolean;

      Tags?: Record<string, string>;
    };

    export namespace ImagePipeline {
      export type ImageTestsConfiguration = {
        ImageTestsEnabled?: boolean;

        TimeoutMinutes?: number;
      };

      export type Schedule = {
        ScheduleExpression?: string;

        PipelineExecutionStartCondition?: string;
      };
    }

    export type ImageRecipe = {
      Name: string;

      Description?: string;

      Version: string;

      Components: AWS.ImageBuilder.ImageRecipe.ComponentConfiguration[];

      BlockDeviceMappings?: AWS.ImageBuilder.ImageRecipe.InstanceBlockDeviceMapping[];

      ParentImage: string;

      WorkingDirectory?: string;

      Tags?: Record<string, string>;
    };

    export namespace ImageRecipe {
      export type InstanceBlockDeviceMapping = {
        DeviceName?: string;

        VirtualName?: string;

        NoDevice?: string;

        Ebs?: AWS.ImageBuilder.ImageRecipe.EbsInstanceBlockDeviceSpecification;
      };

      export type ComponentConfiguration = {
        ComponentArn?: string;
      };

      export type EbsInstanceBlockDeviceSpecification = {
        Encrypted?: boolean;

        DeleteOnTermination?: boolean;

        Iops?: number;

        KmsKeyId?: string;

        SnapshotId?: string;

        VolumeSize?: number;

        VolumeType?: string;
      };
    }

    export type ContainerRecipe = {
      Name: string;

      Description?: string;

      Version: string;

      Components: AWS.ImageBuilder.ContainerRecipe.ComponentConfiguration[];

      InstanceConfiguration?: AWS.ImageBuilder.ContainerRecipe.InstanceConfiguration;

      DockerfileTemplateData?: string;

      DockerfileTemplateUri?: string;

      PlatformOverride?: string;

      ContainerType: string;

      ImageOsVersionOverride?: string;

      TargetRepository: AWS.ImageBuilder.ContainerRecipe.TargetContainerRepository;

      KmsKeyId?: string;

      ParentImage: string;

      WorkingDirectory?: string;

      Tags?: Record<string, string>;
    };

    export namespace ContainerRecipe {
      export type ComponentConfiguration = {
        ComponentArn?: string;
      };

      export type EbsInstanceBlockDeviceSpecification = {
        Encrypted?: boolean;

        DeleteOnTermination?: boolean;

        Iops?: number;

        KmsKeyId?: string;

        SnapshotId?: string;

        VolumeSize?: number;

        VolumeType?: string;
      };

      export type InstanceBlockDeviceMapping = {
        DeviceName?: string;

        VirtualName?: string;

        NoDevice?: string;

        Ebs?: AWS.ImageBuilder.ContainerRecipe.EbsInstanceBlockDeviceSpecification;
      };

      export type InstanceConfiguration = {
        Image?: string;

        BlockDeviceMappings?: AWS.ImageBuilder.ContainerRecipe.InstanceBlockDeviceMapping[];
      };

      export type TargetContainerRepository = {
        Service?: string;

        RepositoryName?: string;
      };
    }

    export type InfrastructureConfiguration = {
      Name: string;

      Description?: string;

      InstanceTypes?: string[];

      SecurityGroupIds?: string[];

      Logging?: AWS.ImageBuilder.InfrastructureConfiguration.Logging;

      SubnetId?: string;

      KeyPair?: string;

      TerminateInstanceOnFailure?: boolean;

      InstanceProfileName: string;

      SnsTopicArn?: string;

      ResourceTags?: Record<string, string>;

      Tags?: Record<string, string>;
    };

    export namespace InfrastructureConfiguration {
      export type Logging = {
        S3Logs?: AWS.ImageBuilder.InfrastructureConfiguration.S3Logs;
      };

      export type S3Logs = {
        S3BucketName?: string;

        S3KeyPrefix?: string;
      };
    }

    export type DistributionConfiguration = {
      Name: string;

      Description?: string;

      Distributions: AWS.ImageBuilder.DistributionConfiguration.Distribution[];

      Tags?: Record<string, string>;
    };

    export namespace DistributionConfiguration {
      export type Distribution = {
        Region: string;

        AmiDistributionConfiguration?: JSONString;

        ContainerDistributionConfiguration?: JSONString;

        LicenseConfigurationArns?: string[];

        LaunchTemplateConfigurations?: AWS.ImageBuilder.DistributionConfiguration.LaunchTemplateConfiguration[];
      };

      export type LaunchTemplateConfiguration = {
        LaunchTemplateId?: string;

        AccountId?: string;

        SetDefaultVersion?: boolean;
      };
    }

    export type Image = {
      ImageTestsConfiguration?: AWS.ImageBuilder.Image.ImageTestsConfiguration;

      ImageRecipeArn?: string;

      ContainerRecipeArn?: string;

      DistributionConfigurationArn?: string;

      InfrastructureConfigurationArn: string;

      EnhancedImageMetadataEnabled?: boolean;

      Tags?: Record<string, string>;
    };

    export namespace Image {
      export type ImageTestsConfiguration = {
        ImageTestsEnabled?: boolean;

        TimeoutMinutes?: number;
      };
    }

    export type Component = {
      Name: string;

      Version: string;

      Description?: string;

      ChangeDescription?: string;

      Platform: string;

      Data?: string;

      KmsKeyId?: string;

      Tags?: Record<string, string>;

      Uri?: string;

      SupportedOsVersions?: string[];
    };
  }

  export namespace MediaLive {
    export type Channel = {
      InputAttachments?: AWS.MediaLive.Channel.InputAttachment[];

      InputSpecification?: AWS.MediaLive.Channel.InputSpecification;

      ChannelClass?: string;

      EncoderSettings?: AWS.MediaLive.Channel.EncoderSettings;

      Destinations?: AWS.MediaLive.Channel.OutputDestination[];

      Vpc?: AWS.MediaLive.Channel.VpcOutputSettings;

      CdiInputSpecification?: AWS.MediaLive.Channel.CdiInputSpecification;

      LogLevel?: string;

      RoleArn?: string;

      Tags?: JSONString;

      Name?: string;
    };

    export namespace Channel {
      export type HlsInputSettings = {
        BufferSegments?: number;

        Retries?: number;

        Bandwidth?: number;

        RetryInterval?: number;
      };

      export type DvbSubDestinationSettings = {
        BackgroundOpacity?: number;

        FontResolution?: number;

        OutlineColor?: string;

        FontColor?: string;

        ShadowColor?: string;

        ShadowOpacity?: number;

        Font?: AWS.MediaLive.Channel.InputLocation;

        ShadowYOffset?: number;

        Alignment?: string;

        XPosition?: number;

        FontSize?: string;

        YPosition?: number;

        OutlineSize?: number;

        TeletextGridControl?: string;

        FontOpacity?: number;

        ShadowXOffset?: number;

        BackgroundColor?: string;
      };

      export type VideoCodecSettings = {
        Mpeg2Settings?: AWS.MediaLive.Channel.Mpeg2Settings;

        FrameCaptureSettings?: AWS.MediaLive.Channel.FrameCaptureSettings;

        H264Settings?: AWS.MediaLive.Channel.H264Settings;

        H265Settings?: AWS.MediaLive.Channel.H265Settings;
      };

      export type HlsSettings = {
        StandardHlsSettings?: AWS.MediaLive.Channel.StandardHlsSettings;

        AudioOnlyHlsSettings?: AWS.MediaLive.Channel.AudioOnlyHlsSettings;

        Fmp4HlsSettings?: AWS.MediaLive.Channel.Fmp4HlsSettings;

        FrameCaptureHlsSettings?: AWS.MediaLive.Channel.FrameCaptureHlsSettings;
      };

      export type FrameCaptureSettings = {
        CaptureInterval?: number;

        CaptureIntervalUnits?: string;
      };

      export type MotionGraphicsSettings = {
        HtmlMotionGraphicsSettings?: AWS.MediaLive.Channel.HtmlMotionGraphicsSettings;
      };

      export type FrameCaptureCdnSettings = {
        FrameCaptureS3Settings?: AWS.MediaLive.Channel.FrameCaptureS3Settings;
      };

      export type InputLossBehavior = {
        InputLossImageColor?: string;

        BlackFrameMsec?: number;

        InputLossImageType?: string;

        InputLossImageSlate?: AWS.MediaLive.Channel.InputLocation;

        RepeatFrameMsec?: number;
      };

      export type MultiplexProgramChannelDestinationSettings = {
        MultiplexId?: string;

        ProgramName?: string;
      };

      export type HlsCdnSettings = {
        HlsWebdavSettings?: AWS.MediaLive.Channel.HlsWebdavSettings;

        HlsS3Settings?: AWS.MediaLive.Channel.HlsS3Settings;

        HlsAkamaiSettings?: AWS.MediaLive.Channel.HlsAkamaiSettings;

        HlsBasicPutSettings?: AWS.MediaLive.Channel.HlsBasicPutSettings;

        HlsMediaStoreSettings?: AWS.MediaLive.Channel.HlsMediaStoreSettings;
      };

      export type HlsOutputSettings = {
        NameModifier?: string;

        HlsSettings?: AWS.MediaLive.Channel.HlsSettings;

        H265PackagingType?: string;

        SegmentModifier?: string;
      };

      export type FrameCaptureS3Settings = {
        CannedAcl?: string;
      };

      export type ArchiveCdnSettings = {
        ArchiveS3Settings?: AWS.MediaLive.Channel.ArchiveS3Settings;
      };

      export type Scte27SourceSettings = {
        Pid?: number;
      };

      export type AudioTrackSelection = {
        Tracks?: AWS.MediaLive.Channel.AudioTrack[];
      };

      export type EbuTtDDestinationSettings = {
        FontFamily?: string;

        FillLineGap?: string;

        StyleControl?: string;

        CopyrightHolder?: string;
      };

      export type VideoSelectorPid = {
        Pid?: number;
      };

      export type FailoverCondition = {
        FailoverConditionSettings?: AWS.MediaLive.Channel.FailoverConditionSettings;
      };

      export type Hdr10Settings = {
        MaxCll?: number;

        MaxFall?: number;
      };

      export type StaticKeySettings = {
        KeyProviderServer?: AWS.MediaLive.Channel.InputLocation;

        StaticKeyValue?: string;
      };

      export type InputLocation = {
        Username?: string;

        PasswordParam?: string;

        Uri?: string;
      };

      export type AudioLanguageSelection = {
        LanguageCode?: string;

        LanguageSelectionPolicy?: string;
      };

      export type CaptionRectangle = {
        TopOffset?: number;

        Height?: number;

        Width?: number;

        LeftOffset?: number;
      };

      export type ArchiveS3Settings = {
        CannedAcl?: string;
      };

      export type Mp2Settings = {
        CodingMode?: string;

        SampleRate?: number;

        Bitrate?: number;
      };

      export type AudioSilenceFailoverSettings = {
        AudioSelectorName?: string;

        AudioSilenceThresholdMsec?: number;
      };

      export type Fmp4HlsSettings = {
        AudioRenditionSets?: string;

        NielsenId3Behavior?: string;

        TimedMetadataBehavior?: string;
      };

      export type Scte35SpliceInsert = {
        AdAvailOffset?: number;

        WebDeliveryAllowedFlag?: string;

        NoRegionalBlackoutFlag?: string;
      };

      export type AudioChannelMapping = {
        OutputChannel?: number;

        InputChannelLevels?: AWS.MediaLive.Channel.InputChannelLevel[];
      };

      export type FeatureActivations = {
        InputPrepareScheduleActions?: string;
      };

      export type OutputGroup = {
        Outputs?: AWS.MediaLive.Channel.Output[];

        OutputGroupSettings?: AWS.MediaLive.Channel.OutputGroupSettings;

        Name?: string;
      };

      export type UdpOutputSettings = {
        Destination?: AWS.MediaLive.Channel.OutputLocationRef;

        FecOutputSettings?: AWS.MediaLive.Channel.FecOutputSettings;

        ContainerSettings?: AWS.MediaLive.Channel.UdpContainerSettings;

        BufferMsec?: number;
      };

      export type Ac3Settings = {
        CodingMode?: string;

        DrcProfile?: string;

        MetadataControl?: string;

        Dialnorm?: number;

        LfeFilter?: string;

        BitstreamMode?: string;

        Bitrate?: number;
      };

      export type Eac3Settings = {
        CodingMode?: string;

        SurroundMode?: string;

        PassthroughControl?: string;

        Dialnorm?: number;

        LoRoSurroundMixLevel?: number;

        PhaseControl?: string;

        LtRtCenterMixLevel?: number;

        LfeFilter?: string;

        LfeControl?: string;

        Bitrate?: number;

        DrcLine?: string;

        DcFilter?: string;

        MetadataControl?: string;

        LtRtSurroundMixLevel?: number;

        LoRoCenterMixLevel?: number;

        DrcRf?: string;

        AttenuationControl?: string;

        BitstreamMode?: string;

        SurroundExMode?: string;

        StereoDownmix?: string;
      };

      export type H264Settings = {
        NumRefFrames?: number;

        TemporalAq?: string;

        Slices?: number;

        FramerateControl?: string;

        QvbrQualityLevel?: number;

        FramerateNumerator?: number;

        ParControl?: string;

        GopClosedCadence?: number;

        FlickerAq?: string;

        Profile?: string;

        QualityLevel?: string;

        MinIInterval?: number;

        SceneChangeDetect?: string;

        ForceFieldPictures?: string;

        FramerateDenominator?: number;

        Softness?: number;

        GopSize?: number;

        AdaptiveQuantization?: string;

        FilterSettings?: AWS.MediaLive.Channel.H264FilterSettings;

        ColorSpaceSettings?: AWS.MediaLive.Channel.H264ColorSpaceSettings;

        EntropyEncoding?: string;

        SpatialAq?: string;

        ParDenominator?: number;

        FixedAfd?: string;

        GopSizeUnits?: string;

        AfdSignaling?: string;

        Bitrate?: number;

        ParNumerator?: number;

        RateControlMode?: string;

        ScanType?: string;

        BufSize?: number;

        TimecodeInsertion?: string;

        ColorMetadata?: string;

        BufFillPct?: number;

        GopBReference?: string;

        LookAheadRateControl?: string;

        Level?: string;

        MaxBitrate?: number;

        Syntax?: string;

        SubgopLength?: string;

        GopNumBFrames?: number;
      };

      export type H264FilterSettings = {
        TemporalFilterSettings?: AWS.MediaLive.Channel.TemporalFilterSettings;
      };

      export type FailoverConditionSettings = {
        AudioSilenceSettings?: AWS.MediaLive.Channel.AudioSilenceFailoverSettings;

        VideoBlackSettings?: AWS.MediaLive.Channel.VideoBlackFailoverSettings;

        InputLossSettings?: AWS.MediaLive.Channel.InputLossFailoverSettings;
      };

      export type Mpeg2Settings = {
        ColorSpace?: string;

        FixedAfd?: string;

        GopSizeUnits?: string;

        FramerateNumerator?: number;

        GopClosedCadence?: number;

        AfdSignaling?: string;

        DisplayAspectRatio?: string;

        ScanType?: string;

        TimecodeInsertion?: string;

        ColorMetadata?: string;

        FramerateDenominator?: number;

        GopSize?: number;

        AdaptiveQuantization?: string;

        SubgopLength?: string;

        FilterSettings?: AWS.MediaLive.Channel.Mpeg2FilterSettings;

        GopNumBFrames?: number;
      };

      export type AudioSelectorSettings = {
        AudioPidSelection?: AWS.MediaLive.Channel.AudioPidSelection;

        AudioLanguageSelection?: AWS.MediaLive.Channel.AudioLanguageSelection;

        AudioTrackSelection?: AWS.MediaLive.Channel.AudioTrackSelection;
      };

      export type UdpContainerSettings = {
        M2tsSettings?: AWS.MediaLive.Channel.M2tsSettings;
      };

      export type TimecodeConfig = {
        SyncThreshold?: number;

        Source?: string;
      };

      export type VideoSelector = {
        ColorSpaceSettings?: AWS.MediaLive.Channel.VideoSelectorColorSpaceSettings;

        SelectorSettings?: AWS.MediaLive.Channel.VideoSelectorSettings;

        ColorSpace?: string;

        ColorSpaceUsage?: string;
      };

      export type DvbTdtSettings = {
        RepInterval?: number;
      };

      export type HlsGroupSettings = {
        SegmentationMode?: string;

        Destination?: AWS.MediaLive.Channel.OutputLocationRef;

        CodecSpecification?: string;

        IvSource?: string;

        TimedMetadataId3Frame?: string;

        KeyFormatVersions?: string;

        RedundantManifest?: string;

        OutputSelection?: string;

        KeyProviderSettings?: AWS.MediaLive.Channel.KeyProviderSettings;

        StreamInfResolution?: string;

        CaptionLanguageMappings?: AWS.MediaLive.Channel.CaptionLanguageMapping[];

        HlsId3SegmentTagging?: string;

        IFrameOnlyPlaylists?: string;

        CaptionLanguageSetting?: string;

        KeepSegments?: number;

        ConstantIv?: string;

        DirectoryStructure?: string;

        EncryptionType?: string;

        AdMarkers?: string[];

        HlsCdnSettings?: AWS.MediaLive.Channel.HlsCdnSettings;

        IndexNSegments?: number;

        DiscontinuityTags?: string;

        InputLossAction?: string;

        Mode?: string;

        TsFileMode?: string;

        BaseUrlManifest1?: string;

        ClientCache?: string;

        MinSegmentLength?: number;

        KeyFormat?: string;

        IvInManifest?: string;

        BaseUrlContent1?: string;

        ManifestCompression?: string;

        ManifestDurationFormat?: string;

        TimedMetadataId3Period?: number;

        IncompleteSegmentBehavior?: string;

        ProgramDateTimePeriod?: number;

        SegmentLength?: number;

        TimestampDeltaMilliseconds?: number;

        ProgramDateTime?: string;

        SegmentsPerSubdirectory?: number;

        BaseUrlContent?: string;

        BaseUrlManifest?: string;
      };

      export type OutputDestinationSettings = {
        StreamName?: string;

        Username?: string;

        PasswordParam?: string;

        Url?: string;
      };

      export type AvailConfiguration = {
        AvailSettings?: AWS.MediaLive.Channel.AvailSettings;
      };

      export type H265Settings = {
        Slices?: number;

        QvbrQualityLevel?: number;

        FramerateNumerator?: number;

        GopClosedCadence?: number;

        FlickerAq?: string;

        Profile?: string;

        MinIInterval?: number;

        SceneChangeDetect?: string;

        FramerateDenominator?: number;

        GopSize?: number;

        AdaptiveQuantization?: string;

        FilterSettings?: AWS.MediaLive.Channel.H265FilterSettings;

        AlternativeTransferFunction?: string;

        ColorSpaceSettings?: AWS.MediaLive.Channel.H265ColorSpaceSettings;

        Tier?: string;

        ParDenominator?: number;

        FixedAfd?: string;

        GopSizeUnits?: string;

        AfdSignaling?: string;

        Bitrate?: number;

        ParNumerator?: number;

        RateControlMode?: string;

        ScanType?: string;

        BufSize?: number;

        TimecodeInsertion?: string;

        ColorMetadata?: string;

        LookAheadRateControl?: string;

        Level?: string;

        MaxBitrate?: number;
      };

      export type AudioCodecSettings = {
        Eac3Settings?: AWS.MediaLive.Channel.Eac3Settings;

        Ac3Settings?: AWS.MediaLive.Channel.Ac3Settings;

        Mp2Settings?: AWS.MediaLive.Channel.Mp2Settings;

        PassThroughSettings?: AWS.MediaLive.Channel.PassThroughSettings;

        WavSettings?: AWS.MediaLive.Channel.WavSettings;

        AacSettings?: AWS.MediaLive.Channel.AacSettings;
      };

      export type DvbNitSettings = {
        NetworkName?: string;

        RepInterval?: number;

        NetworkId?: number;
      };

      export type AacSettings = {
        CodingMode?: string;

        RateControlMode?: string;

        SampleRate?: number;

        InputType?: string;

        VbrQuality?: string;

        RawFormat?: string;

        Spec?: string;

        Bitrate?: number;

        Profile?: string;
      };

      export type Scte35TimeSignalApos = {
        AdAvailOffset?: number;

        WebDeliveryAllowedFlag?: string;

        NoRegionalBlackoutFlag?: string;
      };

      export type FecOutputSettings = {
        RowLength?: number;

        ColumnDepth?: number;

        IncludeFec?: string;
      };

      export type OutputDestination = {
        MultiplexSettings?: AWS.MediaLive.Channel.MultiplexProgramChannelDestinationSettings;

        Id?: string;

        Settings?: AWS.MediaLive.Channel.OutputDestinationSettings[];

        MediaPackageSettings?: AWS.MediaLive.Channel.MediaPackageOutputDestinationSettings[];
      };

      export type AncillarySourceSettings = {
        SourceAncillaryChannelNumber?: number;
      };

      export type Mpeg2FilterSettings = {
        TemporalFilterSettings?: AWS.MediaLive.Channel.TemporalFilterSettings;
      };

      export type CaptionSelector = {
        LanguageCode?: string;

        SelectorSettings?: AWS.MediaLive.Channel.CaptionSelectorSettings;

        Name?: string;
      };

      export type VideoBlackFailoverSettings = {
        VideoBlackThresholdMsec?: number;

        BlackDetectThreshold?: number;
      };

      export type RtmpOutputSettings = {
        Destination?: AWS.MediaLive.Channel.OutputLocationRef;

        CertificateMode?: string;

        NumRetries?: number;

        ConnectionRetryInterval?: number;
      };

      export type TtmlDestinationSettings = {
        StyleControl?: string;
      };

      export type M2tsSettings = {
        EtvPlatformPid?: string;

        PatInterval?: number;

        ProgramNum?: number;

        RateMode?: string;

        KlvDataPids?: string;

        NullPacketBitrate?: number;

        PmtInterval?: number;

        AribCaptionsPid?: string;

        EsRateInPes?: string;

        VideoPid?: string;

        TransportStreamId?: number;

        EbpPlacement?: string;

        DvbSubPids?: string;

        SegmentationStyle?: string;

        Scte35Pid?: string;

        AudioStreamType?: string;

        Klv?: string;

        EbpLookaheadMs?: number;

        DvbTdtSettings?: AWS.MediaLive.Channel.DvbTdtSettings;

        TimedMetadataBehavior?: string;

        EbpAudioInterval?: string;

        FragmentTime?: number;

        DvbTeletextPid?: string;

        Scte35Control?: string;

        PcrPeriod?: number;

        NielsenId3Behavior?: string;

        PcrPid?: string;

        SegmentationTime?: number;

        CcDescriptor?: string;

        AudioFramesPerPes?: number;

        AbsentInputAudioBehavior?: string;

        Bitrate?: number;

        PmtPid?: string;

        Scte27Pids?: string;

        SegmentationMarkers?: string;

        DvbNitSettings?: AWS.MediaLive.Channel.DvbNitSettings;

        DvbSdtSettings?: AWS.MediaLive.Channel.DvbSdtSettings;

        EtvSignalPid?: string;

        Arib?: string;

        BufferModel?: string;

        EcmPid?: string;

        TimedMetadataPid?: string;

        AudioPids?: string;

        AudioBufferModel?: string;

        Ebif?: string;

        AribCaptionsPidControl?: string;

        PcrControl?: string;
      };

      export type HlsWebdavSettings = {
        FilecacheDuration?: number;

        NumRetries?: number;

        RestartDelay?: number;

        ConnectionRetryInterval?: number;

        HttpTransferMode?: string;
      };

      export type NielsenConfiguration = {
        DistributorId?: string;

        NielsenPcmToId3Tagging?: string;
      };

      export type GlobalConfiguration = {
        InputEndAction?: string;

        OutputTimingSource?: string;

        OutputLockingMode?: string;

        SupportLowFramerateInputs?: string;

        InitialAudioGain?: number;

        InputLossBehavior?: AWS.MediaLive.Channel.InputLossBehavior;
      };

      export type MediaPackageOutputDestinationSettings = {
        ChannelId?: string;
      };

      export type AudioOnlyHlsSettings = {
        SegmentType?: string;

        AudioTrackType?: string;

        AudioOnlyImage?: AWS.MediaLive.Channel.InputLocation;

        AudioGroupId?: string;
      };

      export type OutputLocationRef = {
        DestinationRefId?: string;
      };

      export type AutomaticInputFailoverSettings = {
        FailoverConditions?: AWS.MediaLive.Channel.FailoverCondition[];

        InputPreference?: string;

        SecondaryInputId?: string;

        ErrorClearTimeMsec?: number;
      };

      export type FrameCaptureGroupSettings = {
        FrameCaptureCdnSettings?: AWS.MediaLive.Channel.FrameCaptureCdnSettings;

        Destination?: AWS.MediaLive.Channel.OutputLocationRef;
      };

      export type ArchiveOutputSettings = {
        Extension?: string;

        NameModifier?: string;

        ContainerSettings?: AWS.MediaLive.Channel.ArchiveContainerSettings;
      };

      export type ArchiveGroupSettings = {
        Destination?: AWS.MediaLive.Channel.OutputLocationRef;

        ArchiveCdnSettings?: AWS.MediaLive.Channel.ArchiveCdnSettings;

        RolloverInterval?: number;
      };

      export type DvbSdtSettings = {
        ServiceProviderName?: string;

        OutputSdt?: string;

        ServiceName?: string;

        RepInterval?: number;
      };

      export type VideoSelectorProgramId = {
        ProgramId?: number;
      };

      export type InputAttachment = {
        InputAttachmentName?: string;

        InputId?: string;

        AutomaticInputFailoverSettings?: AWS.MediaLive.Channel.AutomaticInputFailoverSettings;

        InputSettings?: AWS.MediaLive.Channel.InputSettings;
      };

      export type InputChannelLevel = {
        InputChannel?: number;

        Gain?: number;
      };

      export type StandardHlsSettings = {
        AudioRenditionSets?: string;

        M3u8Settings?: AWS.MediaLive.Channel.M3u8Settings;
      };

      export type ArchiveContainerSettings = {
        RawSettings?: AWS.MediaLive.Channel.RawSettings;

        M2tsSettings?: AWS.MediaLive.Channel.M2tsSettings;
      };

      export type EmbeddedSourceSettings = {
        Source608ChannelNumber?: number;

        Scte20Detection?: string;

        Source608TrackNumber?: number;

        Convert608To708?: string;
      };

      export type InputSpecification = {
        Codec?: string;

        MaximumBitrate?: string;

        Resolution?: string;
      };

      export type FrameCaptureOutputSettings = {
        NameModifier?: string;
      };

      export type EncoderSettings = {
        AudioDescriptions?: AWS.MediaLive.Channel.AudioDescription[];

        VideoDescriptions?: AWS.MediaLive.Channel.VideoDescription[];

        FeatureActivations?: AWS.MediaLive.Channel.FeatureActivations;

        GlobalConfiguration?: AWS.MediaLive.Channel.GlobalConfiguration;

        CaptionDescriptions?: AWS.MediaLive.Channel.CaptionDescription[];

        AvailConfiguration?: AWS.MediaLive.Channel.AvailConfiguration;

        MotionGraphicsConfiguration?: AWS.MediaLive.Channel.MotionGraphicsConfiguration;

        OutputGroups?: AWS.MediaLive.Channel.OutputGroup[];

        AvailBlanking?: AWS.MediaLive.Channel.AvailBlanking;

        NielsenConfiguration?: AWS.MediaLive.Channel.NielsenConfiguration;

        BlackoutSlate?: AWS.MediaLive.Channel.BlackoutSlate;

        TimecodeConfig?: AWS.MediaLive.Channel.TimecodeConfig;
      };

      export type AvailSettings = {
        Scte35SpliceInsert?: AWS.MediaLive.Channel.Scte35SpliceInsert;

        Scte35TimeSignalApos?: AWS.MediaLive.Channel.Scte35TimeSignalApos;
      };

      export type H264ColorSpaceSettings = {
        Rec601Settings?: AWS.MediaLive.Channel.Rec601Settings;

        Rec709Settings?: AWS.MediaLive.Channel.Rec709Settings;

        ColorSpacePassthroughSettings?: AWS.MediaLive.Channel.ColorSpacePassthroughSettings;
      };

      export type MediaPackageGroupSettings = {
        Destination?: AWS.MediaLive.Channel.OutputLocationRef;
      };

      export type MultiplexOutputSettings = {
        Destination?: AWS.MediaLive.Channel.OutputLocationRef;
      };

      export type H265ColorSpaceSettings = {
        Rec601Settings?: AWS.MediaLive.Channel.Rec601Settings;

        Rec709Settings?: AWS.MediaLive.Channel.Rec709Settings;

        ColorSpacePassthroughSettings?: AWS.MediaLive.Channel.ColorSpacePassthroughSettings;

        Hdr10Settings?: AWS.MediaLive.Channel.Hdr10Settings;
      };

      export type AvailBlanking = {
        State?: string;

        AvailBlankingImage?: AWS.MediaLive.Channel.InputLocation;
      };

      export type InputSettings = {
        DeblockFilter?: string;

        FilterStrength?: number;

        InputFilter?: string;

        SourceEndBehavior?: string;

        VideoSelector?: AWS.MediaLive.Channel.VideoSelector;

        Smpte2038DataPreference?: string;

        AudioSelectors?: AWS.MediaLive.Channel.AudioSelector[];

        CaptionSelectors?: AWS.MediaLive.Channel.CaptionSelector[];

        DenoiseFilter?: string;

        NetworkInputSettings?: AWS.MediaLive.Channel.NetworkInputSettings;
      };

      export type AudioNormalizationSettings = {
        TargetLkfs?: number;

        Algorithm?: string;

        AlgorithmControl?: string;
      };

      export type InputLossFailoverSettings = {
        InputLossThresholdMsec?: number;
      };

      export type AudioSelector = {
        SelectorSettings?: AWS.MediaLive.Channel.AudioSelectorSettings;

        Name?: string;
      };

      export type AudioPidSelection = {
        Pid?: number;
      };

      export type CaptionLanguageMapping = {
        LanguageCode?: string;

        LanguageDescription?: string;

        CaptionChannel?: number;
      };

      export type DvbSubSourceSettings = {
        Pid?: number;
      };

      export type CaptionSelectorSettings = {
        DvbSubSourceSettings?: AWS.MediaLive.Channel.DvbSubSourceSettings;

        Scte27SourceSettings?: AWS.MediaLive.Channel.Scte27SourceSettings;

        AribSourceSettings?: AWS.MediaLive.Channel.AribSourceSettings;

        EmbeddedSourceSettings?: AWS.MediaLive.Channel.EmbeddedSourceSettings;

        Scte20SourceSettings?: AWS.MediaLive.Channel.Scte20SourceSettings;

        TeletextSourceSettings?: AWS.MediaLive.Channel.TeletextSourceSettings;

        AncillarySourceSettings?: AWS.MediaLive.Channel.AncillarySourceSettings;
      };

      export type VideoSelectorSettings = {
        VideoSelectorProgramId?: AWS.MediaLive.Channel.VideoSelectorProgramId;

        VideoSelectorPid?: AWS.MediaLive.Channel.VideoSelectorPid;
      };

      export type VpcOutputSettings = {
        PublicAddressAllocationIds?: string[];

        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };

      export type TeletextSourceSettings = {
        OutputRectangle?: AWS.MediaLive.Channel.CaptionRectangle;

        PageNumber?: string;
      };

      export type CaptionDescription = {
        DestinationSettings?: AWS.MediaLive.Channel.CaptionDestinationSettings;

        LanguageCode?: string;

        LanguageDescription?: string;

        CaptionSelectorName?: string;

        Name?: string;
      };

      export type MotionGraphicsConfiguration = {
        MotionGraphicsSettings?: AWS.MediaLive.Channel.MotionGraphicsSettings;

        MotionGraphicsInsertion?: string;
      };

      export type VideoSelectorColorSpaceSettings = {
        Hdr10Settings?: AWS.MediaLive.Channel.Hdr10Settings;
      };

      export type Output = {
        OutputSettings?: AWS.MediaLive.Channel.OutputSettings;

        CaptionDescriptionNames?: string[];

        AudioDescriptionNames?: string[];

        OutputName?: string;

        VideoDescriptionName?: string;
      };

      export type NetworkInputSettings = {
        ServerValidation?: string;

        HlsInputSettings?: AWS.MediaLive.Channel.HlsInputSettings;
      };

      export type H265FilterSettings = {
        TemporalFilterSettings?: AWS.MediaLive.Channel.TemporalFilterSettings;
      };

      export type HlsBasicPutSettings = {
        FilecacheDuration?: number;

        NumRetries?: number;

        RestartDelay?: number;

        ConnectionRetryInterval?: number;
      };

      export type Scte20SourceSettings = {
        Source608ChannelNumber?: number;

        Convert608To708?: string;
      };

      export type AudioTrack = {
        Track?: number;
      };

      export type AudioDescription = {
        AudioNormalizationSettings?: AWS.MediaLive.Channel.AudioNormalizationSettings;

        LanguageCode?: string;

        RemixSettings?: AWS.MediaLive.Channel.RemixSettings;

        AudioSelectorName?: string;

        StreamName?: string;

        LanguageCodeControl?: string;

        AudioType?: string;

        AudioTypeControl?: string;

        CodecSettings?: AWS.MediaLive.Channel.AudioCodecSettings;

        Name?: string;
      };

      export type BurnInDestinationSettings = {
        BackgroundOpacity?: number;

        FontResolution?: number;

        OutlineColor?: string;

        FontColor?: string;

        ShadowColor?: string;

        ShadowOpacity?: number;

        Font?: AWS.MediaLive.Channel.InputLocation;

        ShadowYOffset?: number;

        Alignment?: string;

        XPosition?: number;

        FontSize?: string;

        YPosition?: number;

        OutlineSize?: number;

        TeletextGridControl?: string;

        FontOpacity?: number;

        ShadowXOffset?: number;

        BackgroundColor?: string;
      };

      export type RtmpGroupSettings = {
        AuthenticationScheme?: string;

        CacheLength?: number;

        AdMarkers?: string[];

        InputLossAction?: string;

        RestartDelay?: number;

        CaptionData?: string;

        CacheFullBehavior?: string;
      };

      export type MsSmoothOutputSettings = {
        NameModifier?: string;

        H265PackagingType?: string;
      };

      export type CaptionDestinationSettings = {
        AribDestinationSettings?: AWS.MediaLive.Channel.AribDestinationSettings;

        EbuTtDDestinationSettings?: AWS.MediaLive.Channel.EbuTtDDestinationSettings;

        SmpteTtDestinationSettings?: AWS.MediaLive.Channel.SmpteTtDestinationSettings;

        EmbeddedPlusScte20DestinationSettings?: AWS.MediaLive.Channel.EmbeddedPlusScte20DestinationSettings;

        TtmlDestinationSettings?: AWS.MediaLive.Channel.TtmlDestinationSettings;

        Scte20PlusEmbeddedDestinationSettings?: AWS.MediaLive.Channel.Scte20PlusEmbeddedDestinationSettings;

        DvbSubDestinationSettings?: AWS.MediaLive.Channel.DvbSubDestinationSettings;

        TeletextDestinationSettings?: AWS.MediaLive.Channel.TeletextDestinationSettings;

        BurnInDestinationSettings?: AWS.MediaLive.Channel.BurnInDestinationSettings;

        WebvttDestinationSettings?: AWS.MediaLive.Channel.WebvttDestinationSettings;

        EmbeddedDestinationSettings?: AWS.MediaLive.Channel.EmbeddedDestinationSettings;

        RtmpCaptionInfoDestinationSettings?: AWS.MediaLive.Channel.RtmpCaptionInfoDestinationSettings;

        Scte27DestinationSettings?: AWS.MediaLive.Channel.Scte27DestinationSettings;
      };

      export type MsSmoothGroupSettings = {
        SegmentationMode?: string;

        Destination?: AWS.MediaLive.Channel.OutputLocationRef;

        EventStopBehavior?: string;

        FilecacheDuration?: number;

        CertificateMode?: string;

        AcquisitionPointId?: string;

        StreamManifestBehavior?: string;

        InputLossAction?: string;

        FragmentLength?: number;

        RestartDelay?: number;

        SparseTrackType?: string;

        EventIdMode?: string;

        TimestampOffsetMode?: string;

        AudioOnlyTimecodeControl?: string;

        NumRetries?: number;

        TimestampOffset?: string;

        EventId?: string;

        SendDelayMs?: number;

        ConnectionRetryInterval?: number;
      };

      export type WavSettings = {
        CodingMode?: string;

        SampleRate?: number;

        BitDepth?: number;
      };

      export type KeyProviderSettings = {
        StaticKeySettings?: AWS.MediaLive.Channel.StaticKeySettings;
      };

      export type CdiInputSpecification = {
        Resolution?: string;
      };

      export type OutputGroupSettings = {
        HlsGroupSettings?: AWS.MediaLive.Channel.HlsGroupSettings;

        FrameCaptureGroupSettings?: AWS.MediaLive.Channel.FrameCaptureGroupSettings;

        MultiplexGroupSettings?: AWS.MediaLive.Channel.MultiplexGroupSettings;

        ArchiveGroupSettings?: AWS.MediaLive.Channel.ArchiveGroupSettings;

        MediaPackageGroupSettings?: AWS.MediaLive.Channel.MediaPackageGroupSettings;

        UdpGroupSettings?: AWS.MediaLive.Channel.UdpGroupSettings;

        MsSmoothGroupSettings?: AWS.MediaLive.Channel.MsSmoothGroupSettings;

        RtmpGroupSettings?: AWS.MediaLive.Channel.RtmpGroupSettings;
      };

      export type OutputSettings = {
        MediaPackageOutputSettings?: AWS.MediaLive.Channel.MediaPackageOutputSettings;

        MsSmoothOutputSettings?: AWS.MediaLive.Channel.MsSmoothOutputSettings;

        FrameCaptureOutputSettings?: AWS.MediaLive.Channel.FrameCaptureOutputSettings;

        HlsOutputSettings?: AWS.MediaLive.Channel.HlsOutputSettings;

        RtmpOutputSettings?: AWS.MediaLive.Channel.RtmpOutputSettings;

        UdpOutputSettings?: AWS.MediaLive.Channel.UdpOutputSettings;

        MultiplexOutputSettings?: AWS.MediaLive.Channel.MultiplexOutputSettings;

        ArchiveOutputSettings?: AWS.MediaLive.Channel.ArchiveOutputSettings;
      };

      export type HlsS3Settings = {
        CannedAcl?: string;
      };

      export type VideoDescription = {
        ScalingBehavior?: string;

        RespondToAfd?: string;

        Height?: number;

        Sharpness?: number;

        Width?: number;

        CodecSettings?: AWS.MediaLive.Channel.VideoCodecSettings;

        Name?: string;
      };

      export type BlackoutSlate = {
        NetworkEndBlackout?: string;

        State?: string;

        NetworkId?: string;

        NetworkEndBlackoutImage?: AWS.MediaLive.Channel.InputLocation;

        BlackoutSlateImage?: AWS.MediaLive.Channel.InputLocation;
      };

      export type HlsMediaStoreSettings = {
        FilecacheDuration?: number;

        NumRetries?: number;

        MediaStoreStorageClass?: string;

        RestartDelay?: number;

        ConnectionRetryInterval?: number;
      };

      export type M3u8Settings = {
        PatInterval?: number;

        ProgramNum?: number;

        PcrPeriod?: number;

        PmtInterval?: number;

        NielsenId3Behavior?: string;

        PcrPid?: string;

        VideoPid?: string;

        AudioFramesPerPes?: number;

        TransportStreamId?: number;

        PmtPid?: string;

        Scte35Pid?: string;

        Scte35Behavior?: string;

        EcmPid?: string;

        TimedMetadataPid?: string;

        AudioPids?: string;

        PcrControl?: string;

        TimedMetadataBehavior?: string;
      };

      export type UdpGroupSettings = {
        TimedMetadataId3Frame?: string;

        TimedMetadataId3Period?: number;

        InputLossAction?: string;
      };

      export type RemixSettings = {
        ChannelsOut?: number;

        ChannelMappings?: AWS.MediaLive.Channel.AudioChannelMapping[];

        ChannelsIn?: number;
      };

      export type TemporalFilterSettings = {
        PostFilterSharpening?: string;

        Strength?: string;
      };

      export type HlsAkamaiSettings = {
        Salt?: string;

        FilecacheDuration?: number;

        NumRetries?: number;

        Token?: string;

        RestartDelay?: number;

        ConnectionRetryInterval?: number;

        HttpTransferMode?: string;
      };
    }

    export type Input = {
      Type?: string;

      Destinations?: AWS.MediaLive.Input.InputDestinationRequest[];

      Vpc?: AWS.MediaLive.Input.InputVpcRequest;

      MediaConnectFlows?: AWS.MediaLive.Input.MediaConnectFlowRequest[];

      InputSecurityGroups?: string[];

      InputDevices?: AWS.MediaLive.Input.InputDeviceSettings[];

      Sources?: AWS.MediaLive.Input.InputSourceRequest[];

      RoleArn?: string;

      Tags?: JSONString;

      Name?: string;
    };

    export namespace Input {
      export type InputSourceRequest = {
        Username?: string;

        PasswordParam?: string;

        Url?: string;
      };

      export type InputDeviceRequest = {
        Id?: string;
      };

      export type InputDeviceSettings = {
        Id?: string;
      };

      export type InputVpcRequest = {
        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };

      export type InputDestinationRequest = {
        StreamName?: string;
      };

      export type MediaConnectFlowRequest = {
        FlowArn?: string;
      };
    }

    export type InputSecurityGroup = {
      WhitelistRules?: AWS.MediaLive.InputSecurityGroup.InputWhitelistRuleCidr[];

      Tags?: JSONString;
    };

    export namespace InputSecurityGroup {
      export type InputWhitelistRuleCidr = {
        Cidr?: string;
      };
    }
  }

  export namespace DirectoryService {
    export type MicrosoftAD = {
      CreateAlias?: boolean;

      Edition?: string;

      EnableSso?: boolean;

      Name: string;

      Password: string;

      ShortName?: string;

      VpcSettings: AWS.DirectoryService.MicrosoftAD.VpcSettings;
    };

    export namespace MicrosoftAD {
      export type VpcSettings = {
        SubnetIds: string[];

        VpcId: string;
      };
    }

    export type SimpleAD = {
      CreateAlias?: boolean;

      Description?: string;

      EnableSso?: boolean;

      Name: string;

      Password: string;

      ShortName?: string;

      Size: string;

      VpcSettings: AWS.DirectoryService.SimpleAD.VpcSettings;
    };

    export namespace SimpleAD {
      export type VpcSettings = {
        SubnetIds: string[];

        VpcId: string;
      };
    }
  }

  export namespace AppSync {
    export type DataSource = {
      Type: string;

      Description?: string;

      ServiceRoleArn?: string;

      HttpConfig?: AWS.AppSync.DataSource.HttpConfig;

      RelationalDatabaseConfig?: AWS.AppSync.DataSource.RelationalDatabaseConfig;

      LambdaConfig?: AWS.AppSync.DataSource.LambdaConfig;

      ApiId: string;

      Name: string;

      DynamoDBConfig?: AWS.AppSync.DataSource.DynamoDBConfig;

      ElasticsearchConfig?: AWS.AppSync.DataSource.ElasticsearchConfig;
    };

    export namespace DataSource {
      export type RelationalDatabaseConfig = {
        RdsHttpEndpointConfig?: AWS.AppSync.DataSource.RdsHttpEndpointConfig;

        RelationalDatabaseSourceType: string;
      };

      export type LambdaConfig = {
        LambdaFunctionArn: string;
      };

      export type HttpConfig = {
        Endpoint: string;

        AuthorizationConfig?: AWS.AppSync.DataSource.AuthorizationConfig;
      };

      export type AwsIamConfig = {
        SigningRegion?: string;

        SigningServiceName?: string;
      };

      export type DynamoDBConfig = {
        TableName: string;

        AwsRegion: string;

        Versioned?: boolean;

        DeltaSyncConfig?: AWS.AppSync.DataSource.DeltaSyncConfig;

        UseCallerCredentials?: boolean;
      };

      export type AuthorizationConfig = {
        AwsIamConfig?: AWS.AppSync.DataSource.AwsIamConfig;

        AuthorizationType: string;
      };

      export type RdsHttpEndpointConfig = {
        AwsRegion: string;

        Schema?: string;

        DatabaseName?: string;

        DbClusterIdentifier: string;

        AwsSecretStoreArn: string;
      };

      export type ElasticsearchConfig = {
        AwsRegion: string;

        Endpoint: string;
      };

      export type DeltaSyncConfig = {
        BaseTableTTL: string;

        DeltaSyncTableTTL: string;

        DeltaSyncTableName: string;
      };
    }

    export type GraphQLApi = {
      OpenIDConnectConfig?: AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

      XrayEnabled?: boolean;

      UserPoolConfig?: AWS.AppSync.GraphQLApi.UserPoolConfig;

      Tags?: AWS.AppSync.GraphQLApi.Tags;

      Name: string;

      AuthenticationType: string;

      LogConfig?: AWS.AppSync.GraphQLApi.LogConfig;

      AdditionalAuthenticationProviders?: AWS.AppSync.GraphQLApi.AdditionalAuthenticationProviders;
    };

    export type GraphQLApi = {
      Tags?: Tag[];

      AdditionalAuthenticationProviders?: AWS.AppSync.GraphQLApi.AdditionalAuthenticationProvider[];
    };

    export namespace GraphQLApi {
      export type OpenIDConnectConfig = {
        Issuer?: string;

        ClientId?: string;

        AuthTTL?: number;

        IatTTL?: number;
      };

      export type CognitoUserPoolConfig = {
        AppIdClientRegex?: string;

        UserPoolId?: string;

        AwsRegion?: string;
      };

      export type UserPoolConfig = {
        AppIdClientRegex?: string;

        UserPoolId?: string;

        AwsRegion?: string;

        DefaultAction?: string;
      };

      export type LogConfig = {
        CloudWatchLogsRoleArn?: string;

        ExcludeVerboseContent?: boolean;

        FieldLogLevel?: string;
      };

      export type AdditionalAuthenticationProvider = {
        OpenIDConnectConfig?: AWS.AppSync.GraphQLApi.OpenIDConnectConfig;

        UserPoolConfig?: AWS.AppSync.GraphQLApi.CognitoUserPoolConfig;

        AuthenticationType: string;
      };
    }

    export type FunctionConfiguration = {
      ResponseMappingTemplateS3Location?: string;

      Description?: string;

      DataSourceName: string;

      RequestMappingTemplate?: string;

      ResponseMappingTemplate?: string;

      FunctionVersion: string;

      SyncConfig?: AWS.AppSync.FunctionConfiguration.SyncConfig;

      RequestMappingTemplateS3Location?: string;

      ApiId: string;

      Name: string;
    };

    export namespace FunctionConfiguration {
      export type SyncConfig = {
        ConflictHandler?: string;

        ConflictDetection: string;

        LambdaConflictHandlerConfig?: AWS.AppSync.FunctionConfiguration.LambdaConflictHandlerConfig;
      };

      export type LambdaConflictHandlerConfig = {
        LambdaConflictHandlerArn?: string;
      };
    }

    export type Resolver = {
      ResponseMappingTemplateS3Location?: string;

      TypeName: string;

      PipelineConfig?: AWS.AppSync.Resolver.PipelineConfig;

      DataSourceName?: string;

      RequestMappingTemplate?: string;

      ResponseMappingTemplate?: string;

      Kind?: string;

      CachingConfig?: AWS.AppSync.Resolver.CachingConfig;

      SyncConfig?: AWS.AppSync.Resolver.SyncConfig;

      RequestMappingTemplateS3Location?: string;

      ApiId: string;

      FieldName: string;
    };

    export namespace Resolver {
      export type LambdaConflictHandlerConfig = {
        LambdaConflictHandlerArn?: string;
      };

      export type PipelineConfig = {
        Functions?: string[];
      };

      export type SyncConfig = {
        ConflictHandler?: string;

        ConflictDetection: string;

        LambdaConflictHandlerConfig?: AWS.AppSync.Resolver.LambdaConflictHandlerConfig;
      };

      export type CachingConfig = {
        CachingKeys?: string[];

        Ttl?: number;
      };
    }

    export type GraphQLSchema = {
      Definition?: string;

      DefinitionS3Location?: string;

      ApiId: string;
    };

    export type ApiKey = {
      Description?: string;

      ApiKeyId?: string;

      Expires?: number;

      ApiId: string;
    };

    export type ApiCache = {
      Type: string;

      TransitEncryptionEnabled?: boolean;

      AtRestEncryptionEnabled?: boolean;

      ApiId: string;

      ApiCachingBehavior: string;

      Ttl: number;
    };
  }

  export namespace Lambda {
    export type Function = {
      Code: AWS.Lambda.Function.Code;

      DeadLetterConfig?: AWS.Lambda.Function.DeadLetterConfig;

      Description?: string;

      Environment?: AWS.Lambda.Function.Environment;

      FileSystemConfigs?: AWS.Lambda.Function.FileSystemConfig[];

      FunctionName?: string;

      Handler?: string;

      KmsKeyArn?: string;

      Layers?: string[];

      MemorySize?: number;

      ReservedConcurrentExecutions?: number;

      Role: string;

      Runtime?: string;

      Tags?: Tag[];

      Timeout?: number;

      TracingConfig?: AWS.Lambda.Function.TracingConfig;

      VpcConfig?: AWS.Lambda.Function.VpcConfig;

      CodeSigningConfigArn?: string;

      ImageConfig?: AWS.Lambda.Function.ImageConfig;

      PackageType?: string;
    };

    export namespace Function {
      export type VpcConfig = {
        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };

      export type DeadLetterConfig = {
        TargetArn?: string;
      };

      export type FileSystemConfig = {
        Arn: string;

        LocalMountPath: string;
      };

      export type Code = {
        S3Bucket?: string;

        S3Key?: string;

        S3ObjectVersion?: string;

        ZipFile?: string;

        ImageUri?: string;
      };

      export type TracingConfig = {
        Mode?: string;
      };

      export type Environment = {
        Variables?: Record<string, string>;
      };

      export type ImageConfig = {
        EntryPoint?: string[];

        Command?: string[];

        WorkingDirectory?: string;
      };
    }

    export type Alias = {
      Description?: string;

      FunctionName: string;

      FunctionVersion: string;

      Name: string;

      ProvisionedConcurrencyConfig?: AWS.Lambda.Alias.ProvisionedConcurrencyConfiguration;

      RoutingConfig?: AWS.Lambda.Alias.AliasRoutingConfiguration;
    };

    export namespace Alias {
      export type ProvisionedConcurrencyConfiguration = {
        ProvisionedConcurrentExecutions: number;
      };

      export type AliasRoutingConfiguration = {
        AdditionalVersionWeights: AWS.Lambda.Alias.VersionWeight[];
      };

      export type VersionWeight = {
        FunctionVersion: string;

        FunctionWeight: number;
      };
    }

    export type EventInvokeConfig = {
      FunctionName: string;

      MaximumRetryAttempts?: number;

      DestinationConfig?: AWS.Lambda.EventInvokeConfig.DestinationConfig;

      Qualifier: string;

      MaximumEventAgeInSeconds?: number;
    };

    export namespace EventInvokeConfig {
      export type OnFailure = {
        Destination: string;
      };

      export type OnSuccess = {
        Destination: string;
      };

      export type DestinationConfig = {
        OnSuccess?: AWS.Lambda.EventInvokeConfig.OnSuccess;

        OnFailure?: AWS.Lambda.EventInvokeConfig.OnFailure;
      };
    }

    export type EventSourceMapping = {
      BatchSize?: number;

      BisectBatchOnFunctionError?: boolean;

      DestinationConfig?: AWS.Lambda.EventSourceMapping.DestinationConfig;

      Enabled?: boolean;

      EventSourceArn?: string;

      FunctionName: string;

      MaximumBatchingWindowInSeconds?: number;

      MaximumRecordAgeInSeconds?: number;

      MaximumRetryAttempts?: number;

      ParallelizationFactor?: number;

      StartingPosition?: string;

      StartingPositionTimestamp?: number;

      Topics?: string[];

      Queues?: string[];

      SourceAccessConfigurations?: AWS.Lambda.EventSourceMapping.SourceAccessConfiguration[];

      TumblingWindowInSeconds?: number;

      FunctionResponseTypes?: string[];

      SelfManagedEventSource?: AWS.Lambda.EventSourceMapping.SelfManagedEventSource;
    };

    export namespace EventSourceMapping {
      export type SelfManagedEventSource = {
        Endpoints?: AWS.Lambda.EventSourceMapping.Endpoints;
      };

      export type OnFailure = {
        Destination?: string;
      };

      export type SourceAccessConfiguration = {
        Type?: string;

        URI?: string;
      };

      export type Endpoints = {
        KafkaBootstrapServers?: string[];
      };

      export type DestinationConfig = {
        OnFailure?: AWS.Lambda.EventSourceMapping.OnFailure;
      };
    }

    export type LayerVersion = {
      CompatibleRuntimes?: string[];

      LicenseInfo?: string;

      Description?: string;

      LayerName?: string;

      Content: AWS.Lambda.LayerVersion.Content;
    };

    export namespace LayerVersion {
      export type Content = {
        S3ObjectVersion?: string;

        S3Bucket: string;

        S3Key: string;
      };
    }

    export type CodeSigningConfig = {
      Description?: string;

      AllowedPublishers: AWS.Lambda.CodeSigningConfig.AllowedPublishers;

      CodeSigningPolicies?: AWS.Lambda.CodeSigningConfig.CodeSigningPolicies;
    };

    export namespace CodeSigningConfig {
      export type CodeSigningPolicies = {
        UntrustedArtifactOnDeployment: string;
      };

      export type AllowedPublishers = {
        SigningProfileVersionArns: string[];
      };
    }

    export type Version = {
      CodeSha256?: string;

      Description?: string;

      FunctionName: string;

      ProvisionedConcurrencyConfig?: AWS.Lambda.Version.ProvisionedConcurrencyConfiguration;
    };

    export namespace Version {
      export type ProvisionedConcurrencyConfiguration = {
        ProvisionedConcurrentExecutions: number;
      };
    }

    export type LayerVersionPermission = {
      Action: string;

      LayerVersionArn: string;

      OrganizationId?: string;

      Principal: string;
    };

    export type Permission = {
      Action: string;

      EventSourceToken?: string;

      FunctionName: string;

      Principal: string;

      SourceAccount?: string;

      SourceArn?: string;
    };
  }

  export namespace Elasticsearch {
    export type Domain = {
      AccessPolicies?: JSONString;

      AdvancedOptions?: Record<string, string>;

      AdvancedSecurityOptions?: AWS.Elasticsearch.Domain.AdvancedSecurityOptionsInput;

      CognitoOptions?: AWS.Elasticsearch.Domain.CognitoOptions;

      DomainEndpointOptions?: AWS.Elasticsearch.Domain.DomainEndpointOptions;

      DomainName?: string;

      EBSOptions?: AWS.Elasticsearch.Domain.EBSOptions;

      ElasticsearchClusterConfig?: AWS.Elasticsearch.Domain.ElasticsearchClusterConfig;

      ElasticsearchVersion?: string;

      EncryptionAtRestOptions?: AWS.Elasticsearch.Domain.EncryptionAtRestOptions;

      LogPublishingOptions?: Record<
        string,
        AWS.Elasticsearch.Domain.LogPublishingOption
      >;

      NodeToNodeEncryptionOptions?: AWS.Elasticsearch.Domain.NodeToNodeEncryptionOptions;

      SnapshotOptions?: AWS.Elasticsearch.Domain.SnapshotOptions;

      Tags?: Tag[];

      VPCOptions?: AWS.Elasticsearch.Domain.VPCOptions;
    };

    export namespace Domain {
      export type DomainEndpointOptions = {
        CustomEndpoint?: string;

        CustomEndpointCertificateArn?: string;

        CustomEndpointEnabled?: boolean;

        EnforceHTTPS?: boolean;

        TLSSecurityPolicy?: string;
      };

      export type NodeToNodeEncryptionOptions = {
        Enabled?: boolean;
      };

      export type ElasticsearchClusterConfig = {
        DedicatedMasterCount?: number;

        DedicatedMasterEnabled?: boolean;

        DedicatedMasterType?: string;

        InstanceCount?: number;

        InstanceType?: string;

        WarmCount?: number;

        WarmEnabled?: boolean;

        WarmType?: string;

        ZoneAwarenessConfig?: AWS.Elasticsearch.Domain.ZoneAwarenessConfig;

        ZoneAwarenessEnabled?: boolean;
      };

      export type AdvancedSecurityOptionsInput = {
        Enabled?: boolean;

        InternalUserDatabaseEnabled?: boolean;

        MasterUserOptions?: AWS.Elasticsearch.Domain.MasterUserOptions;
      };

      export type ZoneAwarenessConfig = {
        AvailabilityZoneCount?: number;
      };

      export type SnapshotOptions = {
        AutomatedSnapshotStartHour?: number;
      };

      export type CognitoOptions = {
        Enabled?: boolean;

        IdentityPoolId?: string;

        RoleArn?: string;

        UserPoolId?: string;
      };

      export type VPCOptions = {
        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };

      export type MasterUserOptions = {
        MasterUserARN?: string;

        MasterUserName?: string;

        MasterUserPassword?: string;
      };

      export type LogPublishingOption = {
        CloudWatchLogsLogGroupArn?: string;

        Enabled?: boolean;
      };

      export type EBSOptions = {
        EBSEnabled?: boolean;

        Iops?: number;

        VolumeSize?: number;

        VolumeType?: string;
      };

      export type EncryptionAtRestOptions = {
        Enabled?: boolean;

        KmsKeyId?: string;
      };
    }
  }

  export namespace GroundStation {
    export type Config = {
      Name: string;

      Tags?: Tag[];

      ConfigData: AWS.GroundStation.Config.ConfigData;
    };

    export namespace Config {
      export type S3RecordingConfig = {
        BucketArn?: string;

        RoleArn?: string;

        Prefix?: string;
      };

      export type UplinkEchoConfig = {
        Enabled?: boolean;

        AntennaUplinkConfigArn?: string;
      };

      export type DataflowEndpointConfig = {
        DataflowEndpointName?: string;

        DataflowEndpointRegion?: string;
      };

      export type AntennaDownlinkConfig = {
        SpectrumConfig?: AWS.GroundStation.Config.SpectrumConfig;
      };

      export type DemodulationConfig = {
        UnvalidatedJSON?: string;
      };

      export type AntennaDownlinkDemodDecodeConfig = {
        SpectrumConfig?: AWS.GroundStation.Config.SpectrumConfig;

        DemodulationConfig?: AWS.GroundStation.Config.DemodulationConfig;

        DecodeConfig?: AWS.GroundStation.Config.DecodeConfig;
      };

      export type UplinkSpectrumConfig = {
        CenterFrequency?: AWS.GroundStation.Config.Frequency;

        Polarization?: string;
      };

      export type Frequency = {
        Value?: number;

        Units?: string;
      };

      export type SpectrumConfig = {
        CenterFrequency?: AWS.GroundStation.Config.Frequency;

        Bandwidth?: AWS.GroundStation.Config.FrequencyBandwidth;

        Polarization?: string;
      };

      export type FrequencyBandwidth = {
        Value?: number;

        Units?: string;
      };

      export type TrackingConfig = {
        Autotrack?: string;
      };

      export type ConfigData = {
        AntennaDownlinkConfig?: AWS.GroundStation.Config.AntennaDownlinkConfig;

        TrackingConfig?: AWS.GroundStation.Config.TrackingConfig;

        DataflowEndpointConfig?: AWS.GroundStation.Config.DataflowEndpointConfig;

        AntennaDownlinkDemodDecodeConfig?: AWS.GroundStation.Config.AntennaDownlinkDemodDecodeConfig;

        AntennaUplinkConfig?: AWS.GroundStation.Config.AntennaUplinkConfig;

        UplinkEchoConfig?: AWS.GroundStation.Config.UplinkEchoConfig;

        S3RecordingConfig?: AWS.GroundStation.Config.S3RecordingConfig;
      };

      export type AntennaUplinkConfig = {
        SpectrumConfig?: AWS.GroundStation.Config.UplinkSpectrumConfig;

        TargetEirp?: AWS.GroundStation.Config.Eirp;

        TransmitDisabled?: boolean;
      };

      export type DecodeConfig = {
        UnvalidatedJSON?: string;
      };

      export type Eirp = {
        Value?: number;

        Units?: string;
      };
    }

    export type MissionProfile = {
      Name: string;

      ContactPrePassDurationSeconds?: number;

      ContactPostPassDurationSeconds?: number;

      MinimumViableContactDurationSeconds: number;

      DataflowEdges: AWS.GroundStation.MissionProfile.DataflowEdge[];

      TrackingConfigArn: string;

      Tags?: Tag[];
    };

    export namespace MissionProfile {
      export type DataflowEdge = {
        Source?: string;

        Destination?: string;
      };
    }

    export type DataflowEndpointGroup = {
      EndpointDetails: AWS.GroundStation.DataflowEndpointGroup.EndpointDetails[];

      Tags?: Tag[];
    };

    export namespace DataflowEndpointGroup {
      export type DataflowEndpoint = {
        Name?: string;

        Address?: AWS.GroundStation.DataflowEndpointGroup.SocketAddress;

        Mtu?: number;
      };

      export type SecurityDetails = {
        SubnetIds?: string[];

        SecurityGroupIds?: string[];

        RoleArn?: string;
      };

      export type SocketAddress = {
        Name?: string;

        Port?: number;
      };

      export type EndpointDetails = {
        SecurityDetails?: AWS.GroundStation.DataflowEndpointGroup.SecurityDetails;

        Endpoint?: AWS.GroundStation.DataflowEndpointGroup.DataflowEndpoint;
      };
    }
  }

  export namespace IoTEvents {
    export type DetectorModel = {
      DetectorModelDefinition: AWS.IoTEvents.DetectorModel.DetectorModelDefinition;

      DetectorModelDescription?: string;

      DetectorModelName?: string;

      EvaluationMethod?: string;

      Key?: string;

      RoleArn: string;

      Tags?: Tag[];
    };

    export namespace DetectorModel {
      export type SetTimer = {
        DurationExpression?: string;

        Seconds?: number;

        TimerName: string;
      };

      export type ResetTimer = {
        TimerName: string;
      };

      export type IotEvents = {
        InputName: string;

        Payload?: AWS.IoTEvents.DetectorModel.Payload;
      };

      export type TransitionEvent = {
        Actions?: AWS.IoTEvents.DetectorModel.Action[];

        Condition: string;

        EventName: string;

        NextState: string;
      };

      export type IotSiteWise = {
        AssetId?: string;

        EntryId?: string;

        PropertyAlias?: string;

        PropertyId?: string;

        PropertyValue: AWS.IoTEvents.DetectorModel.AssetPropertyValue;
      };

      export type DynamoDB = {
        HashKeyField: string;

        HashKeyType?: string;

        HashKeyValue: string;

        Operation?: string;

        Payload?: AWS.IoTEvents.DetectorModel.Payload;

        PayloadField?: string;

        RangeKeyField?: string;

        RangeKeyType?: string;

        RangeKeyValue?: string;

        TableName: string;
      };

      export type Firehose = {
        DeliveryStreamName: string;

        Payload?: AWS.IoTEvents.DetectorModel.Payload;

        Separator?: string;
      };

      export type ClearTimer = {
        TimerName: string;
      };

      export type State = {
        OnEnter?: AWS.IoTEvents.DetectorModel.OnEnter;

        OnExit?: AWS.IoTEvents.DetectorModel.OnExit;

        OnInput?: AWS.IoTEvents.DetectorModel.OnInput;

        StateName: string;
      };

      export type Event = {
        Actions?: AWS.IoTEvents.DetectorModel.Action[];

        Condition?: string;

        EventName: string;
      };

      export type Sns = {
        Payload?: AWS.IoTEvents.DetectorModel.Payload;

        TargetArn: string;
      };

      export type OnExit = {
        Events?: AWS.IoTEvents.DetectorModel.Event[];
      };

      export type Sqs = {
        Payload?: AWS.IoTEvents.DetectorModel.Payload;

        QueueUrl: string;

        UseBase64?: boolean;
      };

      export type DetectorModelDefinition = {
        InitialStateName: string;

        States: AWS.IoTEvents.DetectorModel.State[];
      };

      export type IotTopicPublish = {
        MqttTopic: string;

        Payload?: AWS.IoTEvents.DetectorModel.Payload;
      };

      export type Action = {
        ClearTimer?: AWS.IoTEvents.DetectorModel.ClearTimer;

        DynamoDB?: AWS.IoTEvents.DetectorModel.DynamoDB;

        DynamoDBv2?: AWS.IoTEvents.DetectorModel.DynamoDBv2;

        Firehose?: AWS.IoTEvents.DetectorModel.Firehose;

        IotEvents?: AWS.IoTEvents.DetectorModel.IotEvents;

        IotSiteWise?: AWS.IoTEvents.DetectorModel.IotSiteWise;

        IotTopicPublish?: AWS.IoTEvents.DetectorModel.IotTopicPublish;

        Lambda?: AWS.IoTEvents.DetectorModel.Lambda;

        ResetTimer?: AWS.IoTEvents.DetectorModel.ResetTimer;

        SetTimer?: AWS.IoTEvents.DetectorModel.SetTimer;

        SetVariable?: AWS.IoTEvents.DetectorModel.SetVariable;

        Sns?: AWS.IoTEvents.DetectorModel.Sns;

        Sqs?: AWS.IoTEvents.DetectorModel.Sqs;
      };

      export type AssetPropertyTimestamp = {
        OffsetInNanos?: string;

        TimeInSeconds: string;
      };

      export type DynamoDBv2 = {
        Payload?: AWS.IoTEvents.DetectorModel.Payload;

        TableName: string;
      };

      export type OnInput = {
        Events?: AWS.IoTEvents.DetectorModel.Event[];

        TransitionEvents?: AWS.IoTEvents.DetectorModel.TransitionEvent[];
      };

      export type AssetPropertyVariant = {
        BooleanValue?: string;

        DoubleValue?: string;

        IntegerValue?: string;

        StringValue?: string;
      };

      export type SetVariable = {
        Value: string;

        VariableName: string;
      };

      export type Payload = {
        ContentExpression: string;

        Type: string;
      };

      export type OnEnter = {
        Events?: AWS.IoTEvents.DetectorModel.Event[];
      };

      export type AssetPropertyValue = {
        Quality?: string;

        Timestamp?: AWS.IoTEvents.DetectorModel.AssetPropertyTimestamp;

        Value: AWS.IoTEvents.DetectorModel.AssetPropertyVariant;
      };

      export type Lambda = {
        FunctionArn: string;

        Payload?: AWS.IoTEvents.DetectorModel.Payload;
      };
    }

    export type Input = {
      InputDefinition: AWS.IoTEvents.Input.InputDefinition;

      InputDescription?: string;

      InputName?: string;

      Tags?: Tag[];
    };

    export namespace Input {
      export type Attribute = {
        JsonPath: string;
      };

      export type InputDefinition = {
        Attributes: AWS.IoTEvents.Input.Attribute[];
      };
    }
  }

  export namespace GreengrassV2 {
    export type ComponentVersion = {
      InlineRecipe?: string;

      LambdaFunction?: AWS.GreengrassV2.ComponentVersion.LambdaFunctionRecipeSource;

      Tags?: Record<string, string>;
    };

    export namespace ComponentVersion {
      export type ComponentPlatform = {
        Name?: string;

        Attributes?: Record<string, string>;
      };

      export type LambdaContainerParams = {
        MemorySizeInKB?: number;

        MountROSysfs?: boolean;

        Volumes?: AWS.GreengrassV2.ComponentVersion.LambdaVolumeMount[];

        Devices?: AWS.GreengrassV2.ComponentVersion.LambdaDeviceMount[];
      };

      export type LambdaVolumeMount = {
        SourcePath?: string;

        DestinationPath?: string;

        Permission?: string;

        AddGroupOwner?: boolean;
      };

      export type LambdaFunctionRecipeSource = {
        LambdaArn?: string;

        ComponentName?: string;

        ComponentVersion?: string;

        ComponentPlatforms?: AWS.GreengrassV2.ComponentVersion.ComponentPlatform[];

        ComponentDependencies?: Record<
          string,
          AWS.GreengrassV2.ComponentVersion.ComponentDependencyRequirement
        >;

        ComponentLambdaParameters?: AWS.GreengrassV2.ComponentVersion.LambdaExecutionParameters;
      };

      export type ComponentDependencyRequirement = {
        VersionRequirement?: string;

        DependencyType?: string;
      };

      export type LambdaDeviceMount = {
        Path?: string;

        Permission?: string;

        AddGroupOwner?: boolean;
      };

      export type LambdaLinuxProcessParams = {
        IsolationMode?: string;

        ContainerParams?: AWS.GreengrassV2.ComponentVersion.LambdaContainerParams;
      };

      export type LambdaEventSource = {
        Topic?: string;

        Type?: string;
      };

      export type LambdaExecutionParameters = {
        EventSources?: AWS.GreengrassV2.ComponentVersion.LambdaEventSource[];

        MaxQueueSize?: number;

        MaxInstancesCount?: number;

        MaxIdleTimeInSeconds?: number;

        TimeoutInSeconds?: number;

        StatusTimeoutInSeconds?: number;

        Pinned?: boolean;

        InputPayloadEncodingType?: string;

        ExecArgs?: string[];

        EnvironmentVariables?: Record<string, string>;

        LinuxProcessParams?: AWS.GreengrassV2.ComponentVersion.LambdaLinuxProcessParams;
      };
    }
  }

  export namespace ManagedBlockchain {
    export type Node = {
      MemberId?: string;

      NetworkId: string;

      NodeConfiguration: AWS.ManagedBlockchain.Node.NodeConfiguration;
    };

    export namespace Node {
      export type NodeConfiguration = {
        AvailabilityZone: string;

        InstanceType: string;
      };
    }

    export type Member = {
      MemberConfiguration: AWS.ManagedBlockchain.Member.MemberConfiguration;

      NetworkConfiguration?: AWS.ManagedBlockchain.Member.NetworkConfiguration;

      NetworkId?: string;

      InvitationId?: string;
    };

    export namespace Member {
      export type NetworkFrameworkConfiguration = {
        NetworkFabricConfiguration?: AWS.ManagedBlockchain.Member.NetworkFabricConfiguration;
      };

      export type NetworkConfiguration = {
        Description?: string;

        FrameworkVersion: string;

        VotingPolicy: AWS.ManagedBlockchain.Member.VotingPolicy;

        Framework: string;

        Name: string;

        NetworkFrameworkConfiguration?: AWS.ManagedBlockchain.Member.NetworkFrameworkConfiguration;
      };

      export type NetworkFabricConfiguration = {
        Edition: string;
      };

      export type MemberConfiguration = {
        Description?: string;

        MemberFrameworkConfiguration?: AWS.ManagedBlockchain.Member.MemberFrameworkConfiguration;

        Name: string;
      };

      export type ApprovalThresholdPolicy = {
        ThresholdComparator?: string;

        ThresholdPercentage?: number;

        ProposalDurationInHours?: number;
      };

      export type MemberFrameworkConfiguration = {
        MemberFabricConfiguration?: AWS.ManagedBlockchain.Member.MemberFabricConfiguration;
      };

      export type VotingPolicy = {
        ApprovalThresholdPolicy?: AWS.ManagedBlockchain.Member.ApprovalThresholdPolicy;
      };

      export type MemberFabricConfiguration = {
        AdminUsername: string;

        AdminPassword: string;
      };
    }
  }

  export namespace WAF {
    export type WebACL = {
      DefaultAction: AWS.WAF.WebACL.WafAction;

      MetricName: string;

      Name: string;

      Rules?: AWS.WAF.WebACL.ActivatedRule[];
    };

    export namespace WebACL {
      export type WafAction = {
        Type: string;
      };

      export type ActivatedRule = {
        Action?: AWS.WAF.WebACL.WafAction;

        Priority: number;

        RuleId: string;
      };
    }

    export type IPSet = {
      IPSetDescriptors?: AWS.WAF.IPSet.IPSetDescriptor[];

      Name: string;
    };

    export namespace IPSet {
      export type IPSetDescriptor = {
        Type: string;

        Value: string;
      };
    }

    export type ByteMatchSet = {
      ByteMatchTuples?: AWS.WAF.ByteMatchSet.ByteMatchTuple[];

      Name: string;
    };

    export namespace ByteMatchSet {
      export type FieldToMatch = {
        Data?: string;

        Type: string;
      };

      export type ByteMatchTuple = {
        FieldToMatch: AWS.WAF.ByteMatchSet.FieldToMatch;

        PositionalConstraint: string;

        TargetString?: string;

        TargetStringBase64?: string;

        TextTransformation: string;
      };
    }

    export type SqlInjectionMatchSet = {
      Name: string;

      SqlInjectionMatchTuples?: AWS.WAF.SqlInjectionMatchSet.SqlInjectionMatchTuple[];
    };

    export namespace SqlInjectionMatchSet {
      export type FieldToMatch = {
        Data?: string;

        Type: string;
      };

      export type SqlInjectionMatchTuple = {
        FieldToMatch: AWS.WAF.SqlInjectionMatchSet.FieldToMatch;

        TextTransformation: string;
      };
    }

    export type XssMatchSet = {
      Name: string;

      XssMatchTuples: AWS.WAF.XssMatchSet.XssMatchTuple[];
    };

    export namespace XssMatchSet {
      export type XssMatchTuple = {
        FieldToMatch: AWS.WAF.XssMatchSet.FieldToMatch;

        TextTransformation: string;
      };

      export type FieldToMatch = {
        Data?: string;

        Type: string;
      };
    }

    export type Rule = {
      MetricName: string;

      Name: string;

      Predicates?: AWS.WAF.Rule.Predicate[];
    };

    export namespace Rule {
      export type Predicate = {
        DataId: string;

        Negated: boolean;

        Type: string;
      };
    }

    export type SizeConstraintSet = {
      Name: string;

      SizeConstraints: AWS.WAF.SizeConstraintSet.SizeConstraint[];
    };

    export namespace SizeConstraintSet {
      export type FieldToMatch = {
        Data?: string;

        Type: string;
      };

      export type SizeConstraint = {
        ComparisonOperator: string;

        FieldToMatch: AWS.WAF.SizeConstraintSet.FieldToMatch;

        Size: number;

        TextTransformation: string;
      };
    }
  }

  export namespace NetworkFirewall {
    export type RuleGroup = {
      RuleGroupName: string;

      RuleGroup?: AWS.NetworkFirewall.RuleGroup.RuleGroup;

      Type: string;

      Capacity: number;

      Description?: string;

      Tags?: Tag[];
    };

    export namespace RuleGroup {
      export type ActionDefinition = {
        PublishMetricAction?: AWS.NetworkFirewall.RuleGroup.PublishMetricAction;
      };

      export type TCPFlagField = {
        Flags: string[];

        Masks?: string[];
      };

      export type Header = {
        Protocol: string;

        Source: string;

        SourcePort: string;

        Direction: string;

        Destination: string;

        DestinationPort: string;
      };

      export type Dimension = {
        Value: string;
      };

      export type StatelessRulesAndCustomActions = {
        StatelessRules: AWS.NetworkFirewall.RuleGroup.StatelessRule[];

        CustomActions?: AWS.NetworkFirewall.RuleGroup.CustomAction[];
      };

      export type RuleOption = {
        Keyword: string;

        Settings?: string[];
      };

      export type RuleDefinition = {
        MatchAttributes: AWS.NetworkFirewall.RuleGroup.MatchAttributes;

        Actions: string[];
      };

      export type RuleGroup = {
        RuleVariables?: AWS.NetworkFirewall.RuleGroup.RuleVariables;

        RulesSource: AWS.NetworkFirewall.RuleGroup.RulesSource;
      };

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

      export type IPSet = {
        Definition?: string[];
      };

      export type CustomAction = {
        ActionName: string;

        ActionDefinition: AWS.NetworkFirewall.RuleGroup.ActionDefinition;
      };

      export type PortSet = {
        Definition?: string[];
      };

      export type MatchAttributes = {
        Sources?: AWS.NetworkFirewall.RuleGroup.Address[];

        Destinations?: AWS.NetworkFirewall.RuleGroup.Address[];

        SourcePorts?: AWS.NetworkFirewall.RuleGroup.PortRange[];

        DestinationPorts?: AWS.NetworkFirewall.RuleGroup.PortRange[];

        Protocols?: number[];

        TCPFlags?: AWS.NetworkFirewall.RuleGroup.TCPFlagField[];
      };

      export type RuleVariables = {
        IPSets?: Record<string, AWS.NetworkFirewall.RuleGroup.IPSet>;

        PortSets?: Record<string, AWS.NetworkFirewall.RuleGroup.PortSet>;
      };

      export type PublishMetricAction = {
        Dimensions: AWS.NetworkFirewall.RuleGroup.Dimension[];
      };

      export type Address = {
        AddressDefinition: string;
      };

      export type RulesSource = {
        RulesString?: string;

        RulesSourceList?: AWS.NetworkFirewall.RuleGroup.RulesSourceList;

        StatefulRules?: AWS.NetworkFirewall.RuleGroup.StatefulRule[];

        StatelessRulesAndCustomActions?: AWS.NetworkFirewall.RuleGroup.StatelessRulesAndCustomActions;
      };

      export type StatefulRule = {
        Action: string;

        Header: AWS.NetworkFirewall.RuleGroup.Header;

        RuleOptions: AWS.NetworkFirewall.RuleGroup.RuleOption[];
      };
    }

    export type FirewallPolicy = {
      FirewallPolicyName: string;

      FirewallPolicy: AWS.NetworkFirewall.FirewallPolicy.FirewallPolicy;

      Description?: string;

      Tags?: Tag[];
    };

    export namespace FirewallPolicy {
      export type CustomAction = {
        ActionName: string;

        ActionDefinition: AWS.NetworkFirewall.FirewallPolicy.ActionDefinition;
      };

      export type StatelessRuleGroupReference = {
        ResourceArn: string;

        Priority: number;
      };

      export type StatefulRuleGroupReference = {
        ResourceArn: string;
      };

      export type PublishMetricAction = {
        Dimensions: AWS.NetworkFirewall.FirewallPolicy.Dimension[];
      };

      export type ActionDefinition = {
        PublishMetricAction?: AWS.NetworkFirewall.FirewallPolicy.PublishMetricAction;
      };

      export type Dimension = {
        Value: string;
      };

      export type FirewallPolicy = {
        StatelessDefaultActions: string[];

        StatelessFragmentDefaultActions: string[];

        StatelessCustomActions?: AWS.NetworkFirewall.FirewallPolicy.CustomAction[];

        StatelessRuleGroupReferences?: AWS.NetworkFirewall.FirewallPolicy.StatelessRuleGroupReference[];

        StatefulRuleGroupReferences?: AWS.NetworkFirewall.FirewallPolicy.StatefulRuleGroupReference[];
      };
    }

    export type LoggingConfiguration = {
      FirewallName?: string;

      FirewallArn: string;

      LoggingConfiguration: AWS.NetworkFirewall.LoggingConfiguration.LoggingConfiguration;
    };

    export namespace LoggingConfiguration {
      export type LogDestinationConfig = {
        LogType: string;

        LogDestinationType: string;

        LogDestination: Record<string, string>;
      };

      export type LoggingConfiguration = {
        LogDestinationConfigs: AWS.NetworkFirewall.LoggingConfiguration.LogDestinationConfig[];
      };
    }

    export type Firewall = {
      FirewallName: string;

      FirewallPolicyArn: string;

      VpcId: string;

      SubnetMappings: AWS.NetworkFirewall.Firewall.SubnetMapping[];

      DeleteProtection?: boolean;

      SubnetChangeProtection?: boolean;

      FirewallPolicyChangeProtection?: boolean;

      Description?: string;

      Tags?: Tag[];
    };

    export namespace Firewall {
      export type SubnetMapping = {
        SubnetId: string;
      };
    }
  }

  export namespace DataSync {
    export type Task = {
      Excludes?: AWS.DataSync.Task.FilterRule[];

      Tags?: Tag[];

      CloudWatchLogGroupArn?: string;

      DestinationLocationArn: string;

      Name?: string;

      Options?: AWS.DataSync.Task.Options;

      Schedule?: AWS.DataSync.Task.TaskSchedule;

      SourceLocationArn: string;
    };

    export namespace Task {
      export type FilterRule = {
        FilterType?: string;

        Value?: string;
      };

      export type Options = {
        Atime?: string;

        BytesPerSecond?: number;

        Gid?: string;

        LogLevel?: string;

        Mtime?: string;

        OverwriteMode?: string;

        PosixPermissions?: string;

        PreserveDeletedFiles?: string;

        PreserveDevices?: string;

        TaskQueueing?: string;

        TransferMode?: string;

        Uid?: string;

        VerifyMode?: string;
      };

      export type TaskSchedule = {
        ScheduleExpression: string;
      };
    }

    export type LocationS3 = {
      S3Config: AWS.DataSync.LocationS3.S3Config;

      S3BucketArn: string;

      Subdirectory?: string;

      S3StorageClass?: string;

      Tags?: Tag[];
    };

    export namespace LocationS3 {
      export type S3Config = {
        BucketAccessRoleArn: string;
      };
    }

    export type LocationNFS = {
      MountOptions?: AWS.DataSync.LocationNFS.MountOptions;

      OnPremConfig: AWS.DataSync.LocationNFS.OnPremConfig;

      ServerHostname: string;

      Subdirectory: string;

      Tags?: Tag[];
    };

    export namespace LocationNFS {
      export type OnPremConfig = {
        AgentArns: string[];
      };

      export type MountOptions = {
        Version?: string;
      };
    }

    export type LocationEFS = {
      Ec2Config: AWS.DataSync.LocationEFS.Ec2Config;

      EfsFilesystemArn: string;

      Subdirectory?: string;

      Tags?: Tag[];
    };

    export namespace LocationEFS {
      export type Ec2Config = {
        SecurityGroupArns: string[];

        SubnetArn: string;
      };
    }

    export type LocationSMB = {
      AgentArns: string[];

      Domain?: string;

      MountOptions?: AWS.DataSync.LocationSMB.MountOptions;

      Password: string;

      ServerHostname: string;

      Subdirectory: string;

      User: string;

      Tags?: Tag[];
    };

    export namespace LocationSMB {
      export type MountOptions = {
        Version?: string;
      };
    }

    export type Agent = {
      AgentName?: string;

      ActivationKey: string;

      SecurityGroupArns?: string[];

      SubnetArns?: string[];

      VpcEndpointId?: string;

      Tags?: Tag[];
    };

    export type LocationFSxWindows = {
      Domain?: string;

      FsxFilesystemArn: string;

      Password: string;

      SecurityGroupArns: string[];

      Subdirectory?: string;

      User: string;

      Tags?: Tag[];
    };

    export type LocationObjectStorage = {
      AccessKey?: string;

      AgentArns: string[];

      BucketName: string;

      SecretKey?: string;

      ServerHostname: string;

      ServerPort?: number;

      ServerProtocol?: string;

      Subdirectory?: string;

      Tags?: Tag[];
    };
  }

  export namespace ApiGateway {
    export type Deployment = {
      DeploymentCanarySettings?: AWS.ApiGateway.Deployment.DeploymentCanarySettings;

      Description?: string;

      RestApiId: string;

      StageDescription?: AWS.ApiGateway.Deployment.StageDescription;

      StageName?: string;
    };

    export namespace Deployment {
      export type MethodSetting = {
        CacheDataEncrypted?: boolean;

        CacheTtlInSeconds?: number;

        CachingEnabled?: boolean;

        DataTraceEnabled?: boolean;

        HttpMethod?: string;

        LoggingLevel?: string;

        MetricsEnabled?: boolean;

        ResourcePath?: string;

        ThrottlingBurstLimit?: number;

        ThrottlingRateLimit?: number;
      };

      export type AccessLogSetting = {
        DestinationArn?: string;

        Format?: string;
      };

      export type DeploymentCanarySettings = {
        PercentTraffic?: number;

        StageVariableOverrides?: Record<string, string>;

        UseStageCache?: boolean;
      };

      export type StageDescription = {
        AccessLogSetting?: AWS.ApiGateway.Deployment.AccessLogSetting;

        CacheClusterEnabled?: boolean;

        CacheClusterSize?: string;

        CacheDataEncrypted?: boolean;

        CacheTtlInSeconds?: number;

        CachingEnabled?: boolean;

        CanarySetting?: AWS.ApiGateway.Deployment.CanarySetting;

        ClientCertificateId?: string;

        DataTraceEnabled?: boolean;

        Description?: string;

        DocumentationVersion?: string;

        LoggingLevel?: string;

        MethodSettings?: AWS.ApiGateway.Deployment.MethodSetting[];

        MetricsEnabled?: boolean;

        Tags?: Tag[];

        ThrottlingBurstLimit?: number;

        ThrottlingRateLimit?: number;

        TracingEnabled?: boolean;

        Variables?: Record<string, string>;
      };

      export type CanarySetting = {
        PercentTraffic?: number;

        StageVariableOverrides?: Record<string, string>;

        UseStageCache?: boolean;
      };
    }

    export type UsagePlan = {
      ApiStages?: AWS.ApiGateway.UsagePlan.ApiStage[];

      Description?: string;

      Quota?: AWS.ApiGateway.UsagePlan.QuotaSettings;

      Tags?: Tag[];

      Throttle?: AWS.ApiGateway.UsagePlan.ThrottleSettings;

      UsagePlanName?: string;
    };

    export namespace UsagePlan {
      export type ApiStage = {
        ApiId?: string;

        Stage?: string;

        Throttle?: Record<string, AWS.ApiGateway.UsagePlan.ThrottleSettings>;
      };

      export type ThrottleSettings = {
        BurstLimit?: number;

        RateLimit?: number;
      };

      export type QuotaSettings = {
        Limit?: number;

        Offset?: number;

        Period?: string;
      };
    }

    export type ApiKey = {
      CustomerId?: string;

      Description?: string;

      Enabled?: boolean;

      GenerateDistinctId?: boolean;

      Name?: string;

      StageKeys?: AWS.ApiGateway.ApiKey.StageKey[];

      Tags?: Tag[];

      Value?: string;
    };

    export namespace ApiKey {
      export type StageKey = {
        RestApiId?: string;

        StageName?: string;
      };
    }

    export type DocumentationPart = {
      Location: AWS.ApiGateway.DocumentationPart.Location;

      Properties: string;

      RestApiId: string;
    };

    export namespace DocumentationPart {
      export type Location = {
        Method?: string;

        Name?: string;

        Path?: string;

        StatusCode?: string;

        Type?: string;
      };
    }

    export type Method = {
      ApiKeyRequired?: boolean;

      AuthorizationScopes?: string[];

      AuthorizationType?: string;

      AuthorizerId?: string;

      HttpMethod: string;

      Integration?: AWS.ApiGateway.Method.Integration;

      MethodResponses?: AWS.ApiGateway.Method.MethodResponse[];

      OperationName?: string;

      RequestModels?: Record<string, string>;

      RequestParameters?: Record<string, boolean>;

      RequestValidatorId?: string;

      ResourceId: string;

      RestApiId: string;
    };

    export namespace Method {
      export type MethodResponse = {
        ResponseModels?: Record<string, string>;

        ResponseParameters?: Record<string, boolean>;

        StatusCode: string;
      };

      export type Integration = {
        CacheKeyParameters?: string[];

        CacheNamespace?: string;

        ConnectionId?: string;

        ConnectionType?: string;

        ContentHandling?: string;

        Credentials?: string;

        IntegrationHttpMethod?: string;

        IntegrationResponses?: AWS.ApiGateway.Method.IntegrationResponse[];

        PassthroughBehavior?: string;

        RequestParameters?: Record<string, string>;

        RequestTemplates?: Record<string, string>;

        TimeoutInMillis?: number;

        Type?: string;

        Uri?: string;
      };

      export type IntegrationResponse = {
        ContentHandling?: string;

        ResponseParameters?: Record<string, string>;

        ResponseTemplates?: Record<string, string>;

        SelectionPattern?: string;

        StatusCode: string;
      };
    }

    export type DomainName = {
      DomainName?: string;

      EndpointConfiguration?: AWS.ApiGateway.DomainName.EndpointConfiguration;

      MutualTlsAuthentication?: AWS.ApiGateway.DomainName.MutualTlsAuthentication;

      CertificateArn?: string;

      RegionalCertificateArn?: string;

      SecurityPolicy?: string;

      Tags?: Tag[];
    };

    export namespace DomainName {
      export type MutualTlsAuthentication = {
        TruststoreUri?: string;

        TruststoreVersion?: string;
      };

      export type EndpointConfiguration = {
        Types?: string[];
      };
    }

    export type RestApi = {
      ApiKeySourceType?: string;

      BinaryMediaTypes?: string[];

      Body?: JSONString;

      BodyS3Location?: AWS.ApiGateway.RestApi.S3Location;

      CloneFrom?: string;

      Description?: string;

      DisableExecuteApiEndpoint?: boolean;

      EndpointConfiguration?: AWS.ApiGateway.RestApi.EndpointConfiguration;

      FailOnWarnings?: boolean;

      MinimumCompressionSize?: number;

      Mode?: string;

      Name?: string;

      Parameters?: Record<string, string>;

      Policy?: JSONString;

      Tags?: Tag[];
    };

    export namespace RestApi {
      export type S3Location = {
        Bucket?: string;

        ETag?: string;

        Key?: string;

        Version?: string;
      };

      export type EndpointConfiguration = {
        Types?: string[];

        VpcEndpointIds?: string[];
      };
    }

    export type Stage = {
      AccessLogSetting?: AWS.ApiGateway.Stage.AccessLogSetting;

      CacheClusterEnabled?: boolean;

      CacheClusterSize?: string;

      CanarySetting?: AWS.ApiGateway.Stage.CanarySetting;

      ClientCertificateId?: string;

      DeploymentId?: string;

      Description?: string;

      DocumentationVersion?: string;

      MethodSettings?: AWS.ApiGateway.Stage.MethodSetting[];

      RestApiId: string;

      StageName?: string;

      Tags?: Tag[];

      TracingEnabled?: boolean;

      Variables?: Record<string, string>;
    };

    export namespace Stage {
      export type CanarySetting = {
        DeploymentId?: string;

        PercentTraffic?: number;

        StageVariableOverrides?: Record<string, string>;

        UseStageCache?: boolean;
      };

      export type AccessLogSetting = {
        DestinationArn?: string;

        Format?: string;
      };

      export type MethodSetting = {
        CacheDataEncrypted?: boolean;

        CacheTtlInSeconds?: number;

        CachingEnabled?: boolean;

        DataTraceEnabled?: boolean;

        HttpMethod?: string;

        LoggingLevel?: string;

        MetricsEnabled?: boolean;

        ResourcePath?: string;

        ThrottlingBurstLimit?: number;

        ThrottlingRateLimit?: number;
      };
    }

    export type GatewayResponse = {
      ResponseParameters?: Record<string, string>;

      ResponseTemplates?: Record<string, string>;

      ResponseType: string;

      RestApiId: string;

      StatusCode?: string;
    };

    export type UsagePlanKey = {
      KeyId: string;

      KeyType: string;

      UsagePlanId: string;
    };

    export type RequestValidator = {
      Name?: string;

      RestApiId: string;

      ValidateRequestBody?: boolean;

      ValidateRequestParameters?: boolean;
    };

    export type Resource = {
      ParentId: string;

      PathPart: string;

      RestApiId: string;
    };

    export type Account = {
      CloudWatchRoleArn?: string;
    };

    export type Authorizer = {
      AuthType?: string;

      AuthorizerCredentials?: string;

      AuthorizerResultTtlInSeconds?: number;

      AuthorizerUri?: string;

      IdentitySource?: string;

      IdentityValidationExpression?: string;

      Name?: string;

      ProviderARNs?: string[];

      RestApiId: string;

      Type: string;
    };

    export type Model = {
      ContentType?: string;

      Description?: string;

      Name?: string;

      RestApiId: string;

      Schema?: JSONString;
    };

    export type BasePathMapping = {
      BasePath?: string;

      DomainName: string;

      RestApiId?: string;

      Stage?: string;
    };

    export type ClientCertificate = {
      Description?: string;

      Tags?: Tag[];
    };

    export type DocumentationVersion = {
      Description?: string;

      DocumentationVersion: string;

      RestApiId: string;
    };

    export type VpcLink = {
      Description?: string;

      TargetArns: string[];

      Name: string;
    };
  }

  export namespace AppConfig {
    export type Deployment = {
      DeploymentStrategyId: string;

      ConfigurationProfileId: string;

      EnvironmentId: string;

      Description?: string;

      ConfigurationVersion: string;

      ApplicationId: string;

      Tags?: AWS.AppConfig.Deployment.Tags[];
    };

    export namespace Deployment {
      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type DeploymentStrategy = {
      ReplicateTo: string;

      GrowthType?: string;

      Description?: string;

      DeploymentDurationInMinutes: number;

      GrowthFactor: number;

      FinalBakeTimeInMinutes?: number;

      Tags?: AWS.AppConfig.DeploymentStrategy.Tags[];

      Name: string;
    };

    export namespace DeploymentStrategy {
      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type Environment = {
      Description?: string;

      Monitors?: AWS.AppConfig.Environment.Monitors[];

      ApplicationId: string;

      Tags?: AWS.AppConfig.Environment.Tags[];

      Name: string;
    };

    export namespace Environment {
      export type Monitors = {
        AlarmArn?: string;

        AlarmRoleArn?: string;
      };

      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type ConfigurationProfile = {
      LocationUri: string;

      Description?: string;

      Validators?: AWS.AppConfig.ConfigurationProfile.Validators[];

      RetrievalRoleArn?: string;

      ApplicationId: string;

      Tags?: AWS.AppConfig.ConfigurationProfile.Tags[];

      Name: string;
    };

    export namespace ConfigurationProfile {
      export type Validators = {
        Type?: string;

        Content?: string;
      };

      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type Application = {
      Description?: string;

      Tags?: AWS.AppConfig.Application.Tags[];

      Name: string;
    };

    export namespace Application {
      export type Tags = {
        Value?: string;

        Key?: string;
      };
    }

    export type HostedConfigurationVersion = {
      ConfigurationProfileId: string;

      Description?: string;

      ContentType: string;

      LatestVersionNumber?: number;

      Content: string;

      ApplicationId: string;
    };
  }

  export namespace DevOpsGuru {
    export type NotificationChannel = {
      Config: AWS.DevOpsGuru.NotificationChannel.NotificationChannelConfig;
    };

    export namespace NotificationChannel {
      export type NotificationChannelConfig = {
        Sns?: AWS.DevOpsGuru.NotificationChannel.SnsChannelConfig;
      };

      export type SnsChannelConfig = {
        TopicArn?: string;
      };
    }

    export type ResourceCollection = {
      ResourceCollectionFilter: AWS.DevOpsGuru.ResourceCollection.ResourceCollectionFilter;
    };

    export namespace ResourceCollection {
      export type ResourceCollectionFilter = {
        CloudFormation?: AWS.DevOpsGuru.ResourceCollection.CloudFormationCollectionFilter;
      };

      export type CloudFormationCollectionFilter = {
        StackNames?: string[];
      };
    }
  }

  export namespace ResourceGroups {
    export type Group = {
      Name: string;

      Description?: string;

      ResourceQuery?: AWS.ResourceGroups.Group.ResourceQuery;

      Tags?: Tag[];

      Configuration?: AWS.ResourceGroups.Group.ConfigurationItem[];

      Resources?: string[];
    };

    export namespace Group {
      export type TagFilter = {
        Key?: string;

        Values?: string[];
      };

      export type Query = {
        ResourceTypeFilters?: string[];

        StackIdentifier?: string;

        TagFilters?: AWS.ResourceGroups.Group.TagFilter[];
      };

      export type ConfigurationParameter = {
        Name?: string;

        Values?: string[];
      };

      export type ConfigurationItem = {
        Type?: string;

        Parameters?: AWS.ResourceGroups.Group.ConfigurationParameter[];
      };

      export type ResourceQuery = {
        Type?: string;

        Query?: AWS.ResourceGroups.Group.Query;
      };
    }
  }

  export namespace ECR {
    export type ReplicationConfiguration = {
      ReplicationConfiguration: AWS.ECR.ReplicationConfiguration.ReplicationConfiguration;
    };

    export namespace ReplicationConfiguration {
      export type ReplicationConfiguration = {
        Rules: AWS.ECR.ReplicationConfiguration.ReplicationRule[];
      };

      export type ReplicationDestination = {
        Region: string;

        RegistryId: string;
      };

      export type ReplicationRule = {
        Destinations: AWS.ECR.ReplicationConfiguration.ReplicationDestination[];
      };
    }

    export type Repository = {
      LifecyclePolicy?: AWS.ECR.Repository.LifecyclePolicy;

      RepositoryName?: string;

      RepositoryPolicyText?: JSONString;

      Tags?: Tag[];

      ImageTagMutability?: string;

      ImageScanningConfiguration?: AWS.ECR.Repository.ImageScanningConfiguration;

      EncryptionConfiguration?: AWS.ECR.Repository.EncryptionConfiguration;
    };

    export namespace Repository {
      export type LifecyclePolicy = {
        LifecyclePolicyText?: string;

        RegistryId?: string;
      };

      export type ImageScanningConfiguration = {
        ScanOnPush?: boolean;
      };

      export type EncryptionConfiguration = {
        EncryptionType: string;

        KmsKey?: string;
      };
    }

    export type RegistryPolicy = {
      PolicyText: JSONString;
    };

    export type PublicRepository = {
      RepositoryName?: string;

      RepositoryPolicyText?: JSONString;

      RepositoryCatalogData?: JSONString;

      Tags?: Tag[];
    };
  }

  export namespace EFS {
    export type AccessPoint = {
      ClientToken?: string;

      AccessPointTags?: AWS.EFS.AccessPoint.AccessPointTag[];

      FileSystemId: string;

      PosixUser?: AWS.EFS.AccessPoint.PosixUser;

      RootDirectory?: AWS.EFS.AccessPoint.RootDirectory;
    };

    export namespace AccessPoint {
      export type AccessPointTag = {
        Key?: string;

        Value?: string;
      };

      export type RootDirectory = {
        Path?: string;

        CreationInfo?: AWS.EFS.AccessPoint.CreationInfo;
      };

      export type CreationInfo = {
        OwnerUid: string;

        OwnerGid: string;

        Permissions: string;
      };

      export type PosixUser = {
        Uid: string;

        Gid: string;

        SecondaryGids?: string[];
      };
    }

    export type FileSystem = {
      Encrypted?: boolean;

      FileSystemTags?: AWS.EFS.FileSystem.ElasticFileSystemTag[];

      KmsKeyId?: string;

      LifecyclePolicies?: AWS.EFS.FileSystem.LifecyclePolicy[];

      PerformanceMode?: string;

      ProvisionedThroughputInMibps?: number;

      ThroughputMode?: string;

      FileSystemPolicy?: JSONString;

      BypassPolicyLockoutSafetyCheck?: boolean;

      BackupPolicy?: AWS.EFS.FileSystem.BackupPolicy;

      AvailabilityZoneName?: string;
    };

    export namespace FileSystem {
      export type ElasticFileSystemTag = {
        Key: string;

        Value: string;
      };

      export type LifecyclePolicy = {
        TransitionToIA: string;
      };

      export type BackupPolicy = {
        Status: string;
      };
    }

    export type MountTarget = {
      FileSystemId: string;

      IpAddress?: string;

      SecurityGroups: string[];

      SubnetId: string;
    };
  }

  export namespace StepFunctions {
    export type Activity = {
      Tags?: AWS.StepFunctions.Activity.TagsEntry[];

      Name: string;
    };

    export namespace Activity {
      export type TagsEntry = {
        Value: string;

        Key: string;
      };
    }

    export type StateMachine = {
      DefinitionString?: string;

      RoleArn: string;

      StateMachineName?: string;

      StateMachineType?: string;

      LoggingConfiguration?: AWS.StepFunctions.StateMachine.LoggingConfiguration;

      TracingConfiguration?: AWS.StepFunctions.StateMachine.TracingConfiguration;

      DefinitionS3Location?: AWS.StepFunctions.StateMachine.S3Location;

      DefinitionSubstitutions?: Record<string, string>;

      Definition?: AWS.StepFunctions.StateMachine.Definition;

      Tags?: AWS.StepFunctions.StateMachine.TagsEntry[];
    };

    export type StateMachine = {
      Definition?: any;
    };

    export namespace StateMachine {
      export type LogDestination = {
        CloudWatchLogsLogGroup?: AWS.StepFunctions.StateMachine.CloudWatchLogsLogGroup;
      };

      export type TagsEntry = {
        Key: string;

        Value: string;
      };

      export type LoggingConfiguration = {
        Level?: string;

        IncludeExecutionData?: boolean;

        Destinations?: AWS.StepFunctions.StateMachine.LogDestination[];
      };

      export type S3Location = {
        Bucket: string;

        Key: string;

        Version?: string;
      };

      export type CloudWatchLogsLogGroup = {
        LogGroupArn?: string;
      };

      export type TracingConfiguration = {
        Enabled?: boolean;
      };
    }
  }

  export namespace KinesisFirehose {
    export type DeliveryStream = {
      DeliveryStreamEncryptionConfigurationInput?: AWS.KinesisFirehose.DeliveryStream.DeliveryStreamEncryptionConfigurationInput;

      DeliveryStreamName?: string;

      DeliveryStreamType?: string;

      ElasticsearchDestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.ElasticsearchDestinationConfiguration;

      ExtendedS3DestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.ExtendedS3DestinationConfiguration;

      KinesisStreamSourceConfiguration?: AWS.KinesisFirehose.DeliveryStream.KinesisStreamSourceConfiguration;

      RedshiftDestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.RedshiftDestinationConfiguration;

      S3DestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

      SplunkDestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.SplunkDestinationConfiguration;

      HttpEndpointDestinationConfiguration?: AWS.KinesisFirehose.DeliveryStream.HttpEndpointDestinationConfiguration;

      Tags?: Tag[];
    };

    export namespace DeliveryStream {
      export type EncryptionConfiguration = {
        KMSEncryptionConfig?: AWS.KinesisFirehose.DeliveryStream.KMSEncryptionConfig;

        NoEncryptionConfig?: string;
      };

      export type InputFormatConfiguration = {
        Deserializer?: AWS.KinesisFirehose.DeliveryStream.Deserializer;
      };

      export type HiveJsonSerDe = {
        TimestampFormats?: string[];
      };

      export type Processor = {
        Parameters?: AWS.KinesisFirehose.DeliveryStream.ProcessorParameter[];

        Type: string;
      };

      export type DataFormatConversionConfiguration = {
        Enabled?: boolean;

        InputFormatConfiguration?: AWS.KinesisFirehose.DeliveryStream.InputFormatConfiguration;

        OutputFormatConfiguration?: AWS.KinesisFirehose.DeliveryStream.OutputFormatConfiguration;

        SchemaConfiguration?: AWS.KinesisFirehose.DeliveryStream.SchemaConfiguration;
      };

      export type SchemaConfiguration = {
        CatalogId?: string;

        DatabaseName?: string;

        Region?: string;

        RoleARN?: string;

        TableName?: string;

        VersionId?: string;
      };

      export type SplunkRetryOptions = {
        DurationInSeconds?: number;
      };

      export type HttpEndpointRequestConfiguration = {
        ContentEncoding?: string;

        CommonAttributes?: AWS.KinesisFirehose.DeliveryStream.HttpEndpointCommonAttribute[];
      };

      export type HttpEndpointConfiguration = {
        Url: string;

        AccessKey?: string;

        Name?: string;
      };

      export type Serializer = {
        OrcSerDe?: AWS.KinesisFirehose.DeliveryStream.OrcSerDe;

        ParquetSerDe?: AWS.KinesisFirehose.DeliveryStream.ParquetSerDe;
      };

      export type CopyCommand = {
        CopyOptions?: string;

        DataTableColumns?: string;

        DataTableName: string;
      };

      export type OpenXJsonSerDe = {
        CaseInsensitive?: boolean;

        ColumnToJsonKeyMappings?: Record<string, string>;

        ConvertDotsInJsonKeysToUnderscores?: boolean;
      };

      export type OrcSerDe = {
        BlockSizeBytes?: number;

        BloomFilterColumns?: string[];

        BloomFilterFalsePositiveProbability?: number;

        Compression?: string;

        DictionaryKeyThreshold?: number;

        EnablePadding?: boolean;

        FormatVersion?: string;

        PaddingTolerance?: number;

        RowIndexStride?: number;

        StripeSizeBytes?: number;
      };

      export type ElasticsearchBufferingHints = {
        IntervalInSeconds?: number;

        SizeInMBs?: number;
      };

      export type SplunkDestinationConfiguration = {
        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        HECAcknowledgmentTimeoutInSeconds?: number;

        HECEndpoint: string;

        HECEndpointType: string;

        HECToken: string;

        ProcessingConfiguration?: AWS.KinesisFirehose.DeliveryStream.ProcessingConfiguration;

        RetryOptions?: AWS.KinesisFirehose.DeliveryStream.SplunkRetryOptions;

        S3BackupMode?: string;

        S3Configuration: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;
      };

      export type CloudWatchLoggingOptions = {
        Enabled?: boolean;

        LogGroupName?: string;

        LogStreamName?: string;
      };

      export type ProcessingConfiguration = {
        Enabled?: boolean;

        Processors?: AWS.KinesisFirehose.DeliveryStream.Processor[];
      };

      export type BufferingHints = {
        IntervalInSeconds?: number;

        SizeInMBs?: number;
      };

      export type ProcessorParameter = {
        ParameterName: string;

        ParameterValue: string;
      };

      export type DeliveryStreamEncryptionConfigurationInput = {
        KeyARN?: string;

        KeyType: string;
      };

      export type ElasticsearchRetryOptions = {
        DurationInSeconds?: number;
      };

      export type KMSEncryptionConfig = {
        AWSKMSKeyARN: string;
      };

      export type OutputFormatConfiguration = {
        Serializer?: AWS.KinesisFirehose.DeliveryStream.Serializer;
      };

      export type ElasticsearchDestinationConfiguration = {
        BufferingHints?: AWS.KinesisFirehose.DeliveryStream.ElasticsearchBufferingHints;

        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        DomainARN?: string;

        IndexName: string;

        IndexRotationPeriod?: string;

        ProcessingConfiguration?: AWS.KinesisFirehose.DeliveryStream.ProcessingConfiguration;

        RetryOptions?: AWS.KinesisFirehose.DeliveryStream.ElasticsearchRetryOptions;

        RoleARN: string;

        S3BackupMode?: string;

        S3Configuration: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

        ClusterEndpoint?: string;

        TypeName?: string;

        VpcConfiguration?: AWS.KinesisFirehose.DeliveryStream.VpcConfiguration;
      };

      export type Deserializer = {
        HiveJsonSerDe?: AWS.KinesisFirehose.DeliveryStream.HiveJsonSerDe;

        OpenXJsonSerDe?: AWS.KinesisFirehose.DeliveryStream.OpenXJsonSerDe;
      };

      export type KinesisStreamSourceConfiguration = {
        KinesisStreamARN: string;

        RoleARN: string;
      };

      export type RedshiftRetryOptions = {
        DurationInSeconds?: number;
      };

      export type RetryOptions = {
        DurationInSeconds?: number;
      };

      export type ParquetSerDe = {
        BlockSizeBytes?: number;

        Compression?: string;

        EnableDictionaryCompression?: boolean;

        MaxPaddingBytes?: number;

        PageSizeBytes?: number;

        WriterVersion?: string;
      };

      export type S3DestinationConfiguration = {
        BucketARN: string;

        BufferingHints?: AWS.KinesisFirehose.DeliveryStream.BufferingHints;

        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        CompressionFormat?: string;

        EncryptionConfiguration?: AWS.KinesisFirehose.DeliveryStream.EncryptionConfiguration;

        ErrorOutputPrefix?: string;

        Prefix?: string;

        RoleARN: string;
      };

      export type VpcConfiguration = {
        RoleARN: string;

        SubnetIds: string[];

        SecurityGroupIds: string[];
      };

      export type ExtendedS3DestinationConfiguration = {
        BucketARN: string;

        BufferingHints?: AWS.KinesisFirehose.DeliveryStream.BufferingHints;

        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        CompressionFormat?: string;

        DataFormatConversionConfiguration?: AWS.KinesisFirehose.DeliveryStream.DataFormatConversionConfiguration;

        EncryptionConfiguration?: AWS.KinesisFirehose.DeliveryStream.EncryptionConfiguration;

        ErrorOutputPrefix?: string;

        Prefix?: string;

        ProcessingConfiguration?: AWS.KinesisFirehose.DeliveryStream.ProcessingConfiguration;

        RoleARN: string;

        S3BackupConfiguration?: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

        S3BackupMode?: string;
      };

      export type RedshiftDestinationConfiguration = {
        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        ClusterJDBCURL: string;

        CopyCommand: AWS.KinesisFirehose.DeliveryStream.CopyCommand;

        Password: string;

        ProcessingConfiguration?: AWS.KinesisFirehose.DeliveryStream.ProcessingConfiguration;

        RetryOptions?: AWS.KinesisFirehose.DeliveryStream.RedshiftRetryOptions;

        RoleARN: string;

        S3BackupConfiguration?: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

        S3BackupMode?: string;

        S3Configuration: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;

        Username: string;
      };

      export type HttpEndpointCommonAttribute = {
        AttributeName: string;

        AttributeValue: string;
      };

      export type HttpEndpointDestinationConfiguration = {
        RoleARN?: string;

        EndpointConfiguration: AWS.KinesisFirehose.DeliveryStream.HttpEndpointConfiguration;

        RequestConfiguration?: AWS.KinesisFirehose.DeliveryStream.HttpEndpointRequestConfiguration;

        BufferingHints?: AWS.KinesisFirehose.DeliveryStream.BufferingHints;

        CloudWatchLoggingOptions?: AWS.KinesisFirehose.DeliveryStream.CloudWatchLoggingOptions;

        ProcessingConfiguration?: AWS.KinesisFirehose.DeliveryStream.ProcessingConfiguration;

        RetryOptions?: AWS.KinesisFirehose.DeliveryStream.RetryOptions;

        S3BackupMode?: string;

        S3Configuration: AWS.KinesisFirehose.DeliveryStream.S3DestinationConfiguration;
      };
    }
  }

  export namespace AppStream {
    export type ImageBuilder = {
      Description?: string;

      VpcConfig?: AWS.AppStream.ImageBuilder.VpcConfig;

      EnableDefaultInternetAccess?: boolean;

      DomainJoinInfo?: AWS.AppStream.ImageBuilder.DomainJoinInfo;

      AppstreamAgentVersion?: string;

      Name: string;

      ImageName?: string;

      DisplayName?: string;

      IamRoleArn?: string;

      InstanceType: string;

      Tags?: Tag[];

      ImageArn?: string;

      AccessEndpoints?: AWS.AppStream.ImageBuilder.AccessEndpoint[];
    };

    export namespace ImageBuilder {
      export type VpcConfig = {
        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };

      export type AccessEndpoint = {
        EndpointType: string;

        VpceId: string;
      };

      export type DomainJoinInfo = {
        OrganizationalUnitDistinguishedName?: string;

        DirectoryName?: string;
      };
    }

    export type Fleet = {
      Description?: string;

      ComputeCapacity: AWS.AppStream.Fleet.ComputeCapacity;

      VpcConfig?: AWS.AppStream.Fleet.VpcConfig;

      FleetType?: string;

      EnableDefaultInternetAccess?: boolean;

      DomainJoinInfo?: AWS.AppStream.Fleet.DomainJoinInfo;

      Name: string;

      ImageName?: string;

      MaxUserDurationInSeconds?: number;

      IdleDisconnectTimeoutInSeconds?: number;

      DisconnectTimeoutInSeconds?: number;

      DisplayName?: string;

      StreamView?: string;

      IamRoleArn?: string;

      InstanceType: string;

      Tags?: Tag[];

      ImageArn?: string;
    };

    export namespace Fleet {
      export type DomainJoinInfo = {
        OrganizationalUnitDistinguishedName?: string;

        DirectoryName?: string;
      };

      export type VpcConfig = {
        SubnetIds?: string[];

        SecurityGroupIds?: string[];
      };

      export type ComputeCapacity = {
        DesiredInstances: number;
      };
    }

    export type Stack = {
      Description?: string;

      StorageConnectors?: AWS.AppStream.Stack.StorageConnector[];

      DeleteStorageConnectors?: boolean;

      EmbedHostDomains?: string[];

      UserSettings?: AWS.AppStream.Stack.UserSetting[];

      AttributesToDelete?: string[];

      RedirectURL?: string;

      Name?: string;

      FeedbackURL?: string;

      ApplicationSettings?: AWS.AppStream.Stack.ApplicationSettings;

      DisplayName?: string;

      Tags?: Tag[];

      AccessEndpoints?: AWS.AppStream.Stack.AccessEndpoint[];
    };

    export namespace Stack {
      export type AccessEndpoint = {
        EndpointType: string;

        VpceId: string;
      };

      export type UserSetting = {
        Action: string;

        Permission: string;
      };

      export type ApplicationSettings = {
        SettingsGroup?: string;

        Enabled: boolean;
      };

      export type StorageConnector = {
        Domains?: string[];

        ResourceIdentifier?: string;

        ConnectorType: string;
      };
    }

    export type DirectoryConfig = {
      OrganizationalUnitDistinguishedNames: string[];

      ServiceAccountCredentials: AWS.AppStream.DirectoryConfig.ServiceAccountCredentials;

      DirectoryName: string;
    };

    export namespace DirectoryConfig {
      export type ServiceAccountCredentials = {
        AccountName: string;

        AccountPassword: string;
      };
    }

    export type User = {
      UserName: string;

      FirstName?: string;

      MessageAction?: string;

      LastName?: string;

      AuthenticationType: string;
    };

    export type StackUserAssociation = {
      SendEmailNotification?: boolean;

      UserName: string;

      StackName: string;

      AuthenticationType: string;
    };

    export type StackFleetAssociation = {
      FleetName: string;

      StackName: string;
    };
  }

  export namespace ElasticLoadBalancing {
    export type LoadBalancer = {
      AccessLoggingPolicy?: AWS.ElasticLoadBalancing.LoadBalancer.AccessLoggingPolicy;

      AppCookieStickinessPolicy?: AWS.ElasticLoadBalancing.LoadBalancer.AppCookieStickinessPolicy[];

      AvailabilityZones?: string[];

      ConnectionDrainingPolicy?: AWS.ElasticLoadBalancing.LoadBalancer.ConnectionDrainingPolicy;

      ConnectionSettings?: AWS.ElasticLoadBalancing.LoadBalancer.ConnectionSettings;

      CrossZone?: boolean;

      HealthCheck?: AWS.ElasticLoadBalancing.LoadBalancer.HealthCheck;

      Instances?: string[];

      LBCookieStickinessPolicy?: AWS.ElasticLoadBalancing.LoadBalancer.LBCookieStickinessPolicy[];

      Listeners: AWS.ElasticLoadBalancing.LoadBalancer.Listeners[];

      LoadBalancerName?: string;

      Policies?: AWS.ElasticLoadBalancing.LoadBalancer.Policies[];

      Scheme?: string;

      SecurityGroups?: string[];

      Subnets?: string[];

      Tags?: Tag[];
    };

    export namespace LoadBalancer {
      export type AccessLoggingPolicy = {
        EmitInterval?: number;

        Enabled: boolean;

        S3BucketName: string;

        S3BucketPrefix?: string;
      };

      export type HealthCheck = {
        HealthyThreshold: string;

        Interval: string;

        Target: string;

        Timeout: string;

        UnhealthyThreshold: string;
      };

      export type ConnectionSettings = {
        IdleTimeout: number;
      };

      export type ConnectionDrainingPolicy = {
        Enabled: boolean;

        Timeout?: number;
      };

      export type AppCookieStickinessPolicy = {
        CookieName: string;

        PolicyName: string;
      };

      export type LBCookieStickinessPolicy = {
        CookieExpirationPeriod?: string;

        PolicyName?: string;
      };

      export type Listeners = {
        InstancePort: string;

        InstanceProtocol?: string;

        LoadBalancerPort: string;

        PolicyNames?: string[];

        Protocol: string;

        SSLCertificateId?: string;
      };

      export type Policies = {
        Attributes: JSONString[];

        InstancePorts?: string[];

        LoadBalancerPorts?: string[];

        PolicyName: string;

        PolicyType: string;
      };
    }
  }

  export namespace Backup {
    export type BackupPlan = {
      BackupPlan: AWS.Backup.BackupPlan.BackupPlanResourceType;

      BackupPlanTags?: Record<string, string>;
    };

    export namespace BackupPlan {
      export type CopyActionResourceType = {
        Lifecycle?: AWS.Backup.BackupPlan.LifecycleResourceType;

        DestinationBackupVaultArn: string;
      };

      export type BackupPlanResourceType = {
        BackupPlanName: string;

        AdvancedBackupSettings?: AWS.Backup.BackupPlan.AdvancedBackupSettingResourceType[];

        BackupPlanRule: AWS.Backup.BackupPlan.BackupRuleResourceType[];
      };

      export type AdvancedBackupSettingResourceType = {
        BackupOptions: JSONString;

        ResourceType: string;
      };

      export type LifecycleResourceType = {
        MoveToColdStorageAfterDays?: number;

        DeleteAfterDays?: number;
      };

      export type BackupRuleResourceType = {
        RuleName: string;

        TargetBackupVault: string;

        StartWindowMinutes?: number;

        CompletionWindowMinutes?: number;

        ScheduleExpression?: string;

        RecoveryPointTags?: Record<string, string>;

        CopyActions?: AWS.Backup.BackupPlan.CopyActionResourceType[];

        Lifecycle?: AWS.Backup.BackupPlan.LifecycleResourceType;

        EnableContinuousBackup?: boolean;
      };
    }

    export type BackupSelection = {
      BackupPlanId: string;

      BackupSelection: AWS.Backup.BackupSelection.BackupSelectionResourceType;
    };

    export namespace BackupSelection {
      export type ConditionResourceType = {
        ConditionKey: string;

        ConditionValue: string;

        ConditionType: string;
      };

      export type BackupSelectionResourceType = {
        IamRoleArn: string;

        ListOfTags?: AWS.Backup.BackupSelection.ConditionResourceType[];

        Resources?: string[];

        SelectionName: string;
      };
    }

    export type BackupVault = {
      AccessPolicy?: JSONString;

      BackupVaultName: string;

      BackupVaultTags?: Record<string, string>;

      EncryptionKeyArn?: string;

      Notifications?: AWS.Backup.BackupVault.NotificationObjectType;
    };

    export namespace BackupVault {
      export type NotificationObjectType = {
        BackupVaultEvents: string[];

        SNSTopicArn: string;
      };
    }
  }

  export namespace GameLift {
    export type GameServerGroup = {
      AutoScalingPolicy?: AWS.GameLift.GameServerGroup.AutoScalingPolicy;

      BalancingStrategy?: string;

      DeleteOption?: string;

      GameServerGroupName: string;

      GameServerProtectionPolicy?: string;

      InstanceDefinitions: AWS.GameLift.GameServerGroup.InstanceDefinition[];

      LaunchTemplate: AWS.GameLift.GameServerGroup.LaunchTemplate;

      MaxSize?: number;

      MinSize?: number;

      RoleArn: string;

      Tags?: Tag[];

      VpcSubnets?: string[];
    };

    export namespace GameServerGroup {
      export type TargetTrackingConfiguration = {
        TargetValue: number;
      };

      export type LaunchTemplate = {
        LaunchTemplateId?: string;

        LaunchTemplateName?: string;

        Version?: string;
      };

      export type AutoScalingPolicy = {
        EstimatedInstanceWarmup?: number;

        TargetTrackingConfiguration: AWS.GameLift.GameServerGroup.TargetTrackingConfiguration;
      };

      export type InstanceDefinition = {
        InstanceType: string;

        WeightedCapacity?: string;
      };
    }

    export type Fleet = {
      CertificateConfiguration?: AWS.GameLift.Fleet.CertificateConfiguration;

      Description?: string;

      DesiredEC2Instances?: number;

      EC2InboundPermissions?: AWS.GameLift.Fleet.IpPermission[];

      EC2InstanceType?: string;

      FleetType?: string;

      InstanceRoleARN?: string;

      Locations?: AWS.GameLift.Fleet.LocationConfiguration[];

      MaxSize?: number;

      MetricGroups?: string[];

      MinSize?: number;

      Name?: string;

      NewGameSessionProtectionPolicy?: string;

      PeerVpcAwsAccountId?: string;

      PeerVpcId?: string;

      ResourceCreationLimitPolicy?: AWS.GameLift.Fleet.ResourceCreationLimitPolicy;

      BuildId?: string;

      ScriptId?: string;

      RuntimeConfiguration?: AWS.GameLift.Fleet.RuntimeConfiguration;
    };

    export namespace Fleet {
      export type LocationCapacity = {
        DesiredEC2Instances: number;

        MinSize: number;

        MaxSize: number;
      };

      export type CertificateConfiguration = {
        CertificateType: string;
      };

      export type LocationConfiguration = {
        Location: string;

        LocationCapacity?: AWS.GameLift.Fleet.LocationCapacity;
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

        Parameters?: string;
      };

      export type ResourceCreationLimitPolicy = {
        NewGameSessionsPerCreator?: number;

        PolicyPeriodInMinutes?: number;
      };

      export type RuntimeConfiguration = {
        GameSessionActivationTimeoutSeconds?: number;

        MaxConcurrentGameSessionActivations?: number;

        ServerProcesses?: AWS.GameLift.Fleet.ServerProcess[];
      };
    }

    export type Build = {
      Name?: string;

      OperatingSystem?: string;

      StorageLocation?: AWS.GameLift.Build.S3Location;

      Version?: string;
    };

    export namespace Build {
      export type S3Location = {
        Bucket: string;

        Key: string;

        ObjectVersion?: string;

        RoleArn: string;
      };
    }

    export type Alias = {
      Description?: string;

      Name: string;

      RoutingStrategy: AWS.GameLift.Alias.RoutingStrategy;
    };

    export namespace Alias {
      export type RoutingStrategy = {
        Message?: string;

        FleetId?: string;

        Type: string;
      };
    }

    export type Script = {
      Version?: string;

      StorageLocation: AWS.GameLift.Script.S3Location;

      Name?: string;
    };

    export namespace Script {
      export type S3Location = {
        ObjectVersion?: string;

        Bucket: string;

        Key: string;

        RoleArn: string;
      };
    }

    export type GameSessionQueue = {
      TimeoutInSeconds?: number;

      PlayerLatencyPolicies?: AWS.GameLift.GameSessionQueue.PlayerLatencyPolicy[];

      Destinations?: AWS.GameLift.GameSessionQueue.Destination[];

      NotificationTarget?: string;

      FilterConfiguration?: AWS.GameLift.GameSessionQueue.FilterConfiguration;

      CustomEventData?: string;

      Name: string;

      PriorityConfiguration?: AWS.GameLift.GameSessionQueue.PriorityConfiguration;
    };

    export namespace GameSessionQueue {
      export type PlayerLatencyPolicy = {
        PolicyDurationSeconds?: number;

        MaximumIndividualPlayerLatencyMilliseconds?: number;
      };

      export type Destination = {
        DestinationArn?: string;
      };

      export type FilterConfiguration = {
        AllowedLocations?: string[];
      };

      export type PriorityConfiguration = {
        PriorityOrder?: string[];

        LocationOrder?: string[];
      };
    }

    export type MatchmakingConfiguration = {
      GameProperties?: AWS.GameLift.MatchmakingConfiguration.GameProperty[];

      GameSessionData?: string;

      Description?: string;

      AcceptanceTimeoutSeconds?: number;

      NotificationTarget?: string;

      CustomEventData?: string;

      Name: string;

      AdditionalPlayerCount?: number;

      BackfillMode?: string;

      RequestTimeoutSeconds: number;

      AcceptanceRequired: boolean;

      FlexMatchMode?: string;

      RuleSetName: string;

      GameSessionQueueArns?: string[];
    };

    export namespace MatchmakingConfiguration {
      export type GameProperty = {
        Value: string;

        Key: string;
      };
    }

    export type MatchmakingRuleSet = {
      RuleSetBody: string;

      Name: string;
    };
  }

  export namespace RDS {
    export type DBProxyTargetGroup = {
      DBProxyName: string;

      TargetGroupName: string;

      ConnectionPoolConfigurationInfo?: AWS.RDS.DBProxyTargetGroup.ConnectionPoolConfigurationInfoFormat;

      DBInstanceIdentifiers?: string[];

      DBClusterIdentifiers?: string[];
    };

    export namespace DBProxyTargetGroup {
      export type ConnectionPoolConfigurationInfoFormat = {
        MaxConnectionsPercent?: number;

        MaxIdleConnectionsPercent?: number;

        ConnectionBorrowTimeout?: number;

        SessionPinningFilters?: string[];

        InitQuery?: string;
      };
    }

    export type DBInstance = {
      AllocatedStorage?: string;

      AllowMajorVersionUpgrade?: boolean;

      AssociatedRoles?: AWS.RDS.DBInstance.DBInstanceRole[];

      AutoMinorVersionUpgrade?: boolean;

      AvailabilityZone?: string;

      BackupRetentionPeriod?: number;

      CACertificateIdentifier?: string;

      CharacterSetName?: string;

      CopyTagsToSnapshot?: boolean;

      DBClusterIdentifier?: string;

      DBInstanceClass: string;

      DBInstanceIdentifier?: string;

      DBName?: string;

      DBParameterGroupName?: string;

      DBSecurityGroups?: string[];

      DBSnapshotIdentifier?: string;

      DBSubnetGroupName?: string;

      DeleteAutomatedBackups?: boolean;

      DeletionProtection?: boolean;

      Domain?: string;

      DomainIAMRoleName?: string;

      EnableCloudwatchLogsExports?: string[];

      EnableIAMDatabaseAuthentication?: boolean;

      EnablePerformanceInsights?: boolean;

      Engine?: string;

      EngineVersion?: string;

      Iops?: number;

      KmsKeyId?: string;

      LicenseModel?: string;

      MasterUserPassword?: string;

      MasterUsername?: string;

      MaxAllocatedStorage?: number;

      MonitoringInterval?: number;

      MonitoringRoleArn?: string;

      MultiAZ?: boolean;

      OptionGroupName?: string;

      PerformanceInsightsKMSKeyId?: string;

      PerformanceInsightsRetentionPeriod?: number;

      Port?: string;

      PreferredBackupWindow?: string;

      PreferredMaintenanceWindow?: string;

      ProcessorFeatures?: AWS.RDS.DBInstance.ProcessorFeature[];

      PromotionTier?: number;

      PubliclyAccessible?: boolean;

      SourceDBInstanceIdentifier?: string;

      SourceRegion?: string;

      StorageEncrypted?: boolean;

      StorageType?: string;

      Tags?: Tag[];

      Timezone?: string;

      UseDefaultProcessorFeatures?: boolean;

      VPCSecurityGroups?: string[];
    };

    export namespace DBInstance {
      export type DBInstanceRole = {
        FeatureName: string;

        RoleArn: string;
      };

      export type ProcessorFeature = {
        Name?: string;

        Value?: string;
      };
    }

    export type DBCluster = {
      AssociatedRoles?: AWS.RDS.DBCluster.DBClusterRole[];

      AvailabilityZones?: string[];

      BacktrackWindow?: number;

      BackupRetentionPeriod?: number;

      CopyTagsToSnapshot?: boolean;

      DBClusterIdentifier?: string;

      DBClusterParameterGroupName?: string;

      DBSubnetGroupName?: string;

      DatabaseName?: string;

      DeletionProtection?: boolean;

      EnableCloudwatchLogsExports?: string[];

      EnableHttpEndpoint?: boolean;

      EnableIAMDatabaseAuthentication?: boolean;

      Engine: string;

      EngineMode?: string;

      EngineVersion?: string;

      GlobalClusterIdentifier?: string;

      KmsKeyId?: string;

      MasterUserPassword?: string;

      MasterUsername?: string;

      Port?: number;

      PreferredBackupWindow?: string;

      PreferredMaintenanceWindow?: string;

      ReplicationSourceIdentifier?: string;

      RestoreType?: string;

      ScalingConfiguration?: AWS.RDS.DBCluster.ScalingConfiguration;

      SnapshotIdentifier?: string;

      SourceDBClusterIdentifier?: string;

      SourceRegion?: string;

      StorageEncrypted?: boolean;

      Tags?: Tag[];

      UseLatestRestorableTime?: boolean;

      VpcSecurityGroupIds?: string[];
    };

    export namespace DBCluster {
      export type ScalingConfiguration = {
        AutoPause?: boolean;

        MaxCapacity?: number;

        MinCapacity?: number;

        SecondsUntilAutoPause?: number;
      };

      export type DBClusterRole = {
        FeatureName?: string;

        RoleArn: string;
      };
    }

    export type DBSecurityGroup = {
      DBSecurityGroupIngress: AWS.RDS.DBSecurityGroup.Ingress[];

      EC2VpcId?: string;

      GroupDescription: string;

      Tags?: Tag[];
    };

    export namespace DBSecurityGroup {
      export type Ingress = {
        CIDRIP?: string;

        EC2SecurityGroupId?: string;

        EC2SecurityGroupName?: string;

        EC2SecurityGroupOwnerId?: string;
      };
    }

    export type DBProxy = {
      Auth: AWS.RDS.DBProxy.AuthFormat[];

      DBProxyName: string;

      DebugLogging?: boolean;

      EngineFamily: string;

      IdleClientTimeout?: number;

      RequireTLS?: boolean;

      RoleArn: string;

      Tags?: AWS.RDS.DBProxy.TagFormat[];

      VpcSecurityGroupIds?: string[];

      VpcSubnetIds: string[];
    };

    export namespace DBProxy {
      export type TagFormat = {
        Key?: string;

        Value?: string;
      };

      export type AuthFormat = {
        AuthScheme?: string;

        Description?: string;

        IAMAuth?: string;

        SecretArn?: string;

        UserName?: string;
      };
    }

    export type DBProxyEndpoint = {
      DBProxyEndpointName: string;

      DBProxyName: string;

      VpcSecurityGroupIds?: string[];

      VpcSubnetIds: string[];

      TargetRole?: string;

      Tags?: AWS.RDS.DBProxyEndpoint.TagFormat[];
    };

    export namespace DBProxyEndpoint {
      export type TagFormat = {
        Key?: string;

        Value?: string;
      };
    }

    export type OptionGroup = {
      EngineName: string;

      MajorEngineVersion: string;

      OptionConfigurations: AWS.RDS.OptionGroup.OptionConfiguration[];

      OptionGroupDescription: string;

      Tags?: Tag[];
    };

    export namespace OptionGroup {
      export type OptionSetting = {
        Name?: string;

        Value?: string;
      };

      export type OptionConfiguration = {
        DBSecurityGroupMemberships?: string[];

        OptionName: string;

        OptionSettings?: AWS.RDS.OptionGroup.OptionSetting[];

        OptionVersion?: string;

        Port?: number;

        VpcSecurityGroupMemberships?: string[];
      };
    }

    export type DBSubnetGroup = {
      DBSubnetGroupDescription: string;

      DBSubnetGroupName?: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type GlobalCluster = {
      Engine?: string;

      EngineVersion?: string;

      DeletionProtection?: boolean;

      GlobalClusterIdentifier?: string;

      SourceDBClusterIdentifier?: string;

      StorageEncrypted?: boolean;
    };

    export type DBSecurityGroupIngress = {
      CIDRIP?: string;

      DBSecurityGroupName: string;

      EC2SecurityGroupId?: string;

      EC2SecurityGroupName?: string;

      EC2SecurityGroupOwnerId?: string;
    };

    export type EventSubscription = {
      Enabled?: boolean;

      EventCategories?: string[];

      SnsTopicArn: string;

      SourceIds?: string[];

      SourceType?: string;
    };

    export type DBClusterParameterGroup = {
      Description: string;

      Family: string;

      Parameters: JSONString;

      Tags?: Tag[];
    };

    export type DBParameterGroup = {
      Description: string;

      Family: string;

      Parameters?: Record<string, string>;

      Tags?: Tag[];
    };
  }

  export namespace DynamoDB {
    export type Table = {
      AttributeDefinitions?: AWS.DynamoDB.Table.AttributeDefinition[];

      BillingMode?: string;

      ContributorInsightsSpecification?: AWS.DynamoDB.Table.ContributorInsightsSpecification;

      GlobalSecondaryIndexes?: AWS.DynamoDB.Table.GlobalSecondaryIndex[];

      KeySchema: AWS.DynamoDB.Table.KeySchema[];

      KinesisStreamSpecification?: AWS.DynamoDB.Table.KinesisStreamSpecification;

      LocalSecondaryIndexes?: AWS.DynamoDB.Table.LocalSecondaryIndex[];

      PointInTimeRecoverySpecification?: AWS.DynamoDB.Table.PointInTimeRecoverySpecification;

      ProvisionedThroughput?: AWS.DynamoDB.Table.ProvisionedThroughput;

      SSESpecification?: AWS.DynamoDB.Table.SSESpecification;

      StreamSpecification?: AWS.DynamoDB.Table.StreamSpecification;

      TableName?: string;

      Tags?: Tag[];

      TimeToLiveSpecification?: AWS.DynamoDB.Table.TimeToLiveSpecification;
    };

    export namespace Table {
      export type LocalSecondaryIndex = {
        IndexName: string;

        KeySchema: AWS.DynamoDB.Table.KeySchema[];

        Projection: AWS.DynamoDB.Table.Projection;
      };

      export type PointInTimeRecoverySpecification = {
        PointInTimeRecoveryEnabled?: boolean;
      };

      export type KinesisStreamSpecification = {
        StreamArn: string;
      };

      export type AttributeDefinition = {
        AttributeName: string;

        AttributeType: string;
      };

      export type GlobalSecondaryIndex = {
        ContributorInsightsSpecification?: AWS.DynamoDB.Table.ContributorInsightsSpecification;

        IndexName: string;

        KeySchema: AWS.DynamoDB.Table.KeySchema[];

        Projection: AWS.DynamoDB.Table.Projection;

        ProvisionedThroughput?: AWS.DynamoDB.Table.ProvisionedThroughput;
      };

      export type ContributorInsightsSpecification = {
        Enabled: boolean;
      };

      export type KeySchema = {
        AttributeName: string;

        KeyType: string;
      };

      export type SSESpecification = {
        KMSMasterKeyId?: string;

        SSEEnabled: boolean;

        SSEType?: string;
      };

      export type TimeToLiveSpecification = {
        AttributeName: string;

        Enabled: boolean;
      };

      export type ProvisionedThroughput = {
        ReadCapacityUnits: number;

        WriteCapacityUnits: number;
      };

      export type Projection = {
        NonKeyAttributes?: string[];

        ProjectionType?: string;
      };

      export type StreamSpecification = {
        StreamViewType: string;
      };
    }

    export type GlobalTable = {
      AttributeDefinitions: AWS.DynamoDB.GlobalTable.AttributeDefinition[];

      BillingMode?: string;

      GlobalSecondaryIndexes?: AWS.DynamoDB.GlobalTable.GlobalSecondaryIndex[];

      KeySchema: AWS.DynamoDB.GlobalTable.KeySchema[];

      LocalSecondaryIndexes?: AWS.DynamoDB.GlobalTable.LocalSecondaryIndex[];

      WriteProvisionedThroughputSettings?: AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings;

      Replicas: AWS.DynamoDB.GlobalTable.ReplicaSpecification[];

      SSESpecification?: AWS.DynamoDB.GlobalTable.SSESpecification;

      StreamSpecification?: AWS.DynamoDB.GlobalTable.StreamSpecification;

      TableName?: string;

      TimeToLiveSpecification?: AWS.DynamoDB.GlobalTable.TimeToLiveSpecification;
    };

    export namespace GlobalTable {
      export type PointInTimeRecoverySpecification = {
        PointInTimeRecoveryEnabled?: boolean;
      };

      export type ContributorInsightsSpecification = {
        Enabled: boolean;
      };

      export type CapacityAutoScalingSettings = {
        MinCapacity: number;

        MaxCapacity: number;

        SeedCapacity?: number;

        TargetTrackingScalingPolicyConfiguration: AWS.DynamoDB.GlobalTable.TargetTrackingScalingPolicyConfiguration;
      };

      export type ReadProvisionedThroughputSettings = {
        ReadCapacityUnits?: number;

        ReadCapacityAutoScalingSettings?: AWS.DynamoDB.GlobalTable.CapacityAutoScalingSettings;
      };

      export type LocalSecondaryIndex = {
        IndexName: string;

        KeySchema: AWS.DynamoDB.GlobalTable.KeySchema[];

        Projection: AWS.DynamoDB.GlobalTable.Projection;
      };

      export type TargetTrackingScalingPolicyConfiguration = {
        DisableScaleIn?: boolean;

        ScaleInCooldown?: number;

        ScaleOutCooldown?: number;

        TargetValue: number;
      };

      export type ReplicaSpecification = {
        Region: string;

        GlobalSecondaryIndexes?: AWS.DynamoDB.GlobalTable.ReplicaGlobalSecondaryIndexSpecification[];

        ContributorInsightsSpecification?: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

        PointInTimeRecoverySpecification?: AWS.DynamoDB.GlobalTable.PointInTimeRecoverySpecification;

        SSESpecification?: AWS.DynamoDB.GlobalTable.ReplicaSSESpecification;

        Tags?: Tag[];

        ReadProvisionedThroughputSettings?: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings;
      };

      export type GlobalSecondaryIndex = {
        IndexName: string;

        KeySchema: AWS.DynamoDB.GlobalTable.KeySchema[];

        Projection: AWS.DynamoDB.GlobalTable.Projection;

        WriteProvisionedThroughputSettings?: AWS.DynamoDB.GlobalTable.WriteProvisionedThroughputSettings;
      };

      export type KeySchema = {
        AttributeName: string;

        KeyType: string;
      };

      export type StreamSpecification = {
        StreamViewType: string;
      };

      export type Projection = {
        NonKeyAttributes?: string[];

        ProjectionType?: string;
      };

      export type ReplicaGlobalSecondaryIndexSpecification = {
        IndexName: string;

        ContributorInsightsSpecification?: AWS.DynamoDB.GlobalTable.ContributorInsightsSpecification;

        ReadProvisionedThroughputSettings?: AWS.DynamoDB.GlobalTable.ReadProvisionedThroughputSettings;
      };

      export type AttributeDefinition = {
        AttributeName: string;

        AttributeType: string;
      };

      export type SSESpecification = {
        SSEEnabled: boolean;

        SSEType?: string;
      };

      export type WriteProvisionedThroughputSettings = {
        WriteCapacityAutoScalingSettings?: AWS.DynamoDB.GlobalTable.CapacityAutoScalingSettings;
      };

      export type TimeToLiveSpecification = {
        AttributeName?: string;

        Enabled: boolean;
      };

      export type ReplicaSSESpecification = {
        KMSMasterKeyId: string;
      };
    }
  }

  export namespace EKS {
    export type Cluster = {
      Version?: string;

      EncryptionConfig?: AWS.EKS.Cluster.EncryptionConfig[];

      RoleArn: string;

      ResourcesVpcConfig: AWS.EKS.Cluster.ResourcesVpcConfig;

      KubernetesNetworkConfig?: AWS.EKS.Cluster.KubernetesNetworkConfig;

      Name?: string;
    };

    export namespace Cluster {
      export type Provider = {
        KeyArn?: string;
      };

      export type EncryptionConfig = {
        Resources?: string[];

        Provider?: AWS.EKS.Cluster.Provider;
      };

      export type KubernetesNetworkConfig = {
        ServiceIpv4Cidr?: string;
      };

      export type ResourcesVpcConfig = {
        SecurityGroupIds?: string[];

        SubnetIds: string[];
      };
    }

    export type FargateProfile = {
      ClusterName: string;

      FargateProfileName?: string;

      PodExecutionRoleArn: string;

      Subnets?: string[];

      Selectors: AWS.EKS.FargateProfile.Selector[];

      Tags?: Tag[];
    };

    export namespace FargateProfile {
      export type Label = {
        Key: string;

        Value: string;
      };

      export type Selector = {
        Namespace: string;

        Labels?: AWS.EKS.FargateProfile.Label[];
      };
    }

    export type Nodegroup = {
      UpdateConfig?: AWS.EKS.Nodegroup.UpdateConfig;

      ScalingConfig?: AWS.EKS.Nodegroup.ScalingConfig;

      Labels?: JSONString;

      Taints?: AWS.EKS.Nodegroup.Taint[];

      ReleaseVersion?: string;

      CapacityType?: string;

      NodegroupName?: string;

      Subnets: string[];

      NodeRole: string;

      AmiType?: string;

      ForceUpdateEnabled?: boolean;

      Version?: string;

      LaunchTemplate?: AWS.EKS.Nodegroup.LaunchTemplateSpecification;

      RemoteAccess?: AWS.EKS.Nodegroup.RemoteAccess;

      DiskSize?: number;

      ClusterName: string;

      InstanceTypes?: string[];

      Tags?: JSONString;
    };

    export namespace Nodegroup {
      export type Taint = {
        Value?: string;

        Effect?: string;

        Key?: string;
      };

      export type LaunchTemplateSpecification = {
        Version?: string;

        Id?: string;

        Name?: string;
      };

      export type UpdateConfig = {
        MaxUnavailablePercentage?: number;

        MaxUnavailable?: number;
      };

      export type ScalingConfig = {
        MinSize?: number;

        DesiredSize?: number;

        MaxSize?: number;
      };

      export type RemoteAccess = {
        SourceSecurityGroups?: string[];

        Ec2SshKey: string;
      };
    }

    export type Addon = {
      ClusterName: string;

      AddonName: string;

      AddonVersion?: string;

      ResolveConflicts?: string;

      ServiceAccountRoleArn?: string;

      Tags?: Tag[];
    };
  }

  export namespace DLM {
    export type LifecyclePolicy = {
      ExecutionRoleArn?: string;

      Description?: string;

      State?: string;

      PolicyDetails?: AWS.DLM.LifecyclePolicy.PolicyDetails;

      Tags?: Tag[];
    };

    export namespace LifecyclePolicy {
      export type FastRestoreRule = {
        IntervalUnit?: string;

        AvailabilityZones?: string[];

        Count?: number;

        Interval?: number;
      };

      export type EventSource = {
        Type: string;

        Parameters?: AWS.DLM.LifecyclePolicy.EventParameters;
      };

      export type EventParameters = {
        EventType: string;

        SnapshotOwner: string[];

        DescriptionRegex?: string;
      };

      export type Action = {
        CrossRegionCopy: AWS.DLM.LifecyclePolicy.CrossRegionCopyAction[];

        Name: string;
      };

      export type CreateRule = {
        IntervalUnit?: string;

        Times?: string[];

        CronExpression?: string;

        Interval?: number;

        Location?: string;
      };

      export type RetainRule = {
        IntervalUnit?: string;

        Count?: number;

        Interval?: number;
      };

      export type PolicyDetails = {
        ResourceTypes?: string[];

        Schedules?: AWS.DLM.LifecyclePolicy.Schedule[];

        PolicyType?: string;

        EventSource?: AWS.DLM.LifecyclePolicy.EventSource;

        Parameters?: AWS.DLM.LifecyclePolicy.Parameters;

        Actions?: AWS.DLM.LifecyclePolicy.Action[];

        TargetTags?: Tag[];

        ResourceLocations?: string[];
      };

      export type Parameters = {
        ExcludeBootVolume?: boolean;

        NoReboot?: boolean;
      };

      export type EncryptionConfiguration = {
        Encrypted: boolean;

        CmkArn?: string;
      };

      export type Schedule = {
        ShareRules?: AWS.DLM.LifecyclePolicy.ShareRule[];

        TagsToAdd?: Tag[];

        CreateRule?: AWS.DLM.LifecyclePolicy.CreateRule;

        VariableTags?: Tag[];

        FastRestoreRule?: AWS.DLM.LifecyclePolicy.FastRestoreRule;

        RetainRule?: AWS.DLM.LifecyclePolicy.RetainRule;

        CrossRegionCopyRules?: AWS.DLM.LifecyclePolicy.CrossRegionCopyRule[];

        Name?: string;

        CopyTags?: boolean;
      };

      export type CrossRegionCopyRetainRule = {
        IntervalUnit: string;

        Interval: number;
      };

      export type CrossRegionCopyRule = {
        TargetRegion?: string;

        Target?: string;

        Encrypted: boolean;

        CmkArn?: string;

        RetainRule?: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule;

        CopyTags?: boolean;
      };

      export type CrossRegionCopyAction = {
        Target: string;

        EncryptionConfiguration: AWS.DLM.LifecyclePolicy.EncryptionConfiguration;

        RetainRule?: AWS.DLM.LifecyclePolicy.CrossRegionCopyRetainRule;
      };

      export type ShareRule = {
        TargetAccounts?: string[];

        UnshareIntervalUnit?: string;

        UnshareInterval?: number;
      };
    }
  }

  export namespace GuardDuty {
    export type Filter = {
      Action: string;

      Description: string;

      DetectorId: string;

      FindingCriteria: AWS.GuardDuty.Filter.FindingCriteria;

      Rank: number;

      Name: string;
    };

    export namespace Filter {
      export type FindingCriteria = {
        Criterion?: JSONString;

        ItemType?: AWS.GuardDuty.Filter.Condition;
      };

      export type Condition = {
        Lt?: number;

        Gte?: number;

        Neq?: string[];

        Eq?: string[];

        Lte?: number;
      };
    }

    export type Detector = {
      FindingPublishingFrequency?: string;

      DataSources?: AWS.GuardDuty.Detector.CFNDataSourceConfigurations;

      Enable: boolean;
    };

    export namespace Detector {
      export type CFNDataSourceConfigurations = {
        S3Logs?: AWS.GuardDuty.Detector.CFNS3LogsConfiguration;
      };

      export type CFNS3LogsConfiguration = {
        Enable?: boolean;
      };
    }

    export type ThreatIntelSet = {
      Format: string;

      Activate: boolean;

      DetectorId: string;

      Name?: string;

      Location: string;
    };

    export type Member = {
      Status?: string;

      MemberId: string;

      Email: string;

      Message?: string;

      DisableEmailNotification?: boolean;

      DetectorId: string;
    };

    export type Master = {
      DetectorId: string;

      MasterId: string;

      InvitationId?: string;
    };

    export type IPSet = {
      Format: string;

      Activate: boolean;

      DetectorId: string;

      Name?: string;

      Location: string;
    };
  }

  export namespace CloudWatch {
    export type Alarm = {
      ActionsEnabled?: boolean;

      AlarmActions?: string[];

      AlarmDescription?: string;

      AlarmName?: string;

      ComparisonOperator: string;

      DatapointsToAlarm?: number;

      Dimensions?: AWS.CloudWatch.Alarm.Dimension[];

      EvaluateLowSampleCountPercentile?: string;

      EvaluationPeriods: number;

      ExtendedStatistic?: string;

      InsufficientDataActions?: string[];

      MetricName?: string;

      Metrics?: AWS.CloudWatch.Alarm.MetricDataQuery[];

      Namespace?: string;

      OKActions?: string[];

      Period?: number;

      Statistic?: string;

      Threshold?: number;

      ThresholdMetricId?: string;

      TreatMissingData?: string;

      Unit?: string;
    };

    export namespace Alarm {
      export type MetricStat = {
        Metric: AWS.CloudWatch.Alarm.Metric;

        Period: number;

        Stat: string;

        Unit?: string;
      };

      export type MetricDataQuery = {
        Expression?: string;

        Id: string;

        Label?: string;

        MetricStat?: AWS.CloudWatch.Alarm.MetricStat;

        Period?: number;

        ReturnData?: boolean;
      };

      export type Dimension = {
        Name: string;

        Value: string;
      };

      export type Metric = {
        Dimensions?: AWS.CloudWatch.Alarm.Dimension[];

        MetricName?: string;

        Namespace?: string;
      };
    }

    export type MetricStream = {
      ExcludeFilters?: AWS.CloudWatch.MetricStream.MetricStreamFilter[];

      FirehoseArn: string;

      IncludeFilters?: AWS.CloudWatch.MetricStream.MetricStreamFilter[];

      Name?: string;

      RoleArn: string;

      OutputFormat: string;

      Tags?: Tag[];
    };

    export namespace MetricStream {
      export type MetricStreamFilter = {
        Namespace: string;
      };
    }

    export type AnomalyDetector = {
      MetricName: string;

      Stat: string;

      Configuration?: AWS.CloudWatch.AnomalyDetector.Configuration;

      Dimensions?: AWS.CloudWatch.AnomalyDetector.Dimension[];

      Namespace: string;
    };

    export namespace AnomalyDetector {
      export type Range = {
        EndTime: string;

        StartTime: string;
      };

      export type Dimension = {
        Value: string;

        Name: string;
      };

      export type Configuration = {
        MetricTimeZone?: string;

        ExcludedTimeRanges?: AWS.CloudWatch.AnomalyDetector.Range[];
      };
    }

    export type InsightRule = {
      RuleState: string;

      RuleBody: string;

      RuleName: string;

      Tags?: AWS.CloudWatch.InsightRule.Tags;
    };

    export type InsightRule = {
      Tags?: Tag[];
    };

    export type CompositeAlarm = {
      AlarmName: string;

      AlarmRule: string;

      AlarmDescription?: string;

      ActionsEnabled?: boolean;

      OKActions?: string[];

      AlarmActions?: string[];

      InsufficientDataActions?: string[];
    };

    export type Dashboard = {
      DashboardName?: string;

      DashboardBody: string;
    };
  }

  export namespace SSM {
    export type Document = {
      Content: JSONString;

      Attachments?: AWS.SSM.Document.AttachmentsSource[];

      Name?: string;

      VersionName?: string;

      DocumentType?: string;

      DocumentFormat?: string;

      TargetType?: string;

      Tags?: Tag[];

      Requires?: AWS.SSM.Document.DocumentRequires[];
    };

    export namespace Document {
      export type DocumentRequires = {
        Name?: string;

        Version?: string;
      };

      export type AttachmentsSource = {
        Key?: string;

        Values?: string[];

        Name?: string;
      };
    }

    export type PatchBaseline = {
      OperatingSystem?: string;

      Description?: string;

      ApprovalRules?: AWS.SSM.PatchBaseline.RuleGroup;

      Sources?: AWS.SSM.PatchBaseline.PatchSource[];

      Name: string;

      RejectedPatches?: string[];

      ApprovedPatches?: string[];

      RejectedPatchesAction?: string;

      PatchGroups?: string[];

      ApprovedPatchesComplianceLevel?: string;

      ApprovedPatchesEnableNonSecurity?: boolean;

      GlobalFilters?: AWS.SSM.PatchBaseline.PatchFilterGroup;

      Tags?: Tag[];
    };

    export type PatchBaseline = {
      PatchStringDate?: string;
    };

    export namespace PatchBaseline {
      export type PatchFilter = {
        Values?: string[];

        Key?: string;
      };

      export type Rule = {
        ApproveUntilDate?: AWS.SSM.PatchBaseline.PatchStringDate;

        EnableNonSecurity?: boolean;

        PatchFilterGroup?: AWS.SSM.PatchBaseline.PatchFilterGroup;

        ApproveAfterDays?: number;

        ComplianceLevel?: string;
      };

      export type PatchFilterGroup = {
        PatchFilters?: AWS.SSM.PatchBaseline.PatchFilter[];
      };

      export type PatchSource = {
        Products?: string[];

        Configuration?: string;

        Name?: string;
      };

      export type RuleGroup = {
        PatchRules?: AWS.SSM.PatchBaseline.Rule[];
      };
    }

    export type MaintenanceWindowTask = {
      MaxErrors?: string;

      Description?: string;

      ServiceRoleArn?: string;

      Priority: number;

      MaxConcurrency?: string;

      Targets?: AWS.SSM.MaintenanceWindowTask.Target[];

      Name?: string;

      TaskArn: string;

      TaskInvocationParameters?: AWS.SSM.MaintenanceWindowTask.TaskInvocationParameters;

      WindowId: string;

      TaskParameters?: JSONString;

      TaskType: string;

      LoggingInfo?: AWS.SSM.MaintenanceWindowTask.LoggingInfo;
    };

    export namespace MaintenanceWindowTask {
      export type LoggingInfo = {
        S3Bucket: string;

        Region: string;

        S3Prefix?: string;
      };

      export type Target = {
        Values: string[];

        Key: string;
      };

      export type NotificationConfig = {
        NotificationArn: string;

        NotificationType?: string;

        NotificationEvents?: string[];
      };

      export type MaintenanceWindowAutomationParameters = {
        Parameters?: JSONString;

        DocumentVersion?: string;
      };

      export type TaskInvocationParameters = {
        MaintenanceWindowRunCommandParameters?: AWS.SSM.MaintenanceWindowTask.MaintenanceWindowRunCommandParameters;

        MaintenanceWindowAutomationParameters?: AWS.SSM.MaintenanceWindowTask.MaintenanceWindowAutomationParameters;

        MaintenanceWindowStepFunctionsParameters?: AWS.SSM.MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters;

        MaintenanceWindowLambdaParameters?: AWS.SSM.MaintenanceWindowTask.MaintenanceWindowLambdaParameters;
      };

      export type MaintenanceWindowStepFunctionsParameters = {
        Input?: string;

        Name?: string;
      };

      export type MaintenanceWindowRunCommandParameters = {
        TimeoutSeconds?: number;

        Comment?: string;

        OutputS3KeyPrefix?: string;

        Parameters?: JSONString;

        DocumentHashType?: string;

        ServiceRoleArn?: string;

        NotificationConfig?: AWS.SSM.MaintenanceWindowTask.NotificationConfig;

        OutputS3BucketName?: string;

        DocumentHash?: string;
      };

      export type MaintenanceWindowLambdaParameters = {
        ClientContext?: string;

        Qualifier?: string;

        Payload?: string;
      };
    }

    export type Association = {
      AssociationName?: string;

      DocumentVersion?: string;

      InstanceId?: string;

      Name: string;

      Parameters?: Record<string, JSONString>;

      ScheduleExpression?: string;

      Targets?: AWS.SSM.Association.Target[];

      OutputLocation?: AWS.SSM.Association.InstanceAssociationOutputLocation;

      AutomationTargetParameterName?: string;

      MaxErrors?: string;

      MaxConcurrency?: string;

      ComplianceSeverity?: string;

      SyncCompliance?: string;

      WaitForSuccessTimeoutSeconds?: number;

      ApplyOnlyAtCronInterval?: boolean;

      CalendarNames?: string[];
    };

    export namespace Association {
      export type InstanceAssociationOutputLocation = {
        S3Location?: AWS.SSM.Association.S3OutputLocation;
      };

      export type Target = {
        Key: string;

        Values: string[];
      };

      export type S3OutputLocation = {
        OutputS3Region?: string;

        OutputS3BucketName?: string;

        OutputS3KeyPrefix?: string;
      };
    }

    export type ResourceDataSync = {
      S3Destination?: AWS.SSM.ResourceDataSync.S3Destination;

      KMSKeyArn?: string;

      SyncSource?: AWS.SSM.ResourceDataSync.SyncSource;

      BucketName?: string;

      BucketRegion?: string;

      SyncFormat?: string;

      SyncName: string;

      SyncType?: string;

      BucketPrefix?: string;
    };

    export namespace ResourceDataSync {
      export type AwsOrganizationsSource = {
        OrganizationalUnits?: string[];

        OrganizationSourceType: string;
      };

      export type SyncSource = {
        IncludeFutureRegions?: boolean;

        SourceRegions: string[];

        SourceType: string;

        AwsOrganizationsSource?: AWS.SSM.ResourceDataSync.AwsOrganizationsSource;
      };

      export type S3Destination = {
        KMSKeyArn?: string;

        BucketPrefix?: string;

        BucketName: string;

        BucketRegion: string;

        SyncFormat: string;
      };
    }

    export type MaintenanceWindowTarget = {
      OwnerInformation?: string;

      Description?: string;

      WindowId: string;

      ResourceType: string;

      Targets: AWS.SSM.MaintenanceWindowTarget.Targets[];

      Name?: string;
    };

    export namespace MaintenanceWindowTarget {
      export type Targets = {
        Values: string[];

        Key: string;
      };
    }

    export type MaintenanceWindow = {
      StartDate?: string;

      Description?: string;

      AllowUnassociatedTargets: boolean;

      Cutoff: number;

      Schedule: string;

      Duration: number;

      ScheduleOffset?: number;

      EndDate?: string;

      Tags?: Tag[];

      Name: string;

      ScheduleTimezone?: string;
    };

    export type Parameter = {
      Type: string;

      Description?: string;

      Policies?: string;

      AllowedPattern?: string;

      Tier?: string;

      Value: string;

      DataType?: string;

      Tags?: JSONString;

      Name?: string;
    };
  }

  export namespace Redshift {
    export type Cluster = {
      ClusterIdentifier?: string;

      MasterUsername: string;

      MasterUserPassword: string;

      NodeType: string;

      AllowVersionUpgrade?: boolean;

      AutomatedSnapshotRetentionPeriod?: number;

      AvailabilityZone?: string;

      ClusterParameterGroupName?: string;

      ClusterType: string;

      ClusterVersion?: string;

      ClusterSubnetGroupName?: string;

      DBName: string;

      ElasticIp?: string;

      Encrypted?: boolean;

      HsmClientCertificateIdentifier?: string;

      HsmConfigurationIdentifier?: string;

      KmsKeyId?: string;

      NumberOfNodes?: number;

      Port?: number;

      PreferredMaintenanceWindow?: string;

      PubliclyAccessible?: boolean;

      ClusterSecurityGroups?: string[];

      IamRoles?: string[];

      Tags?: Tag[];

      VpcSecurityGroupIds?: string[];

      SnapshotClusterIdentifier?: string;

      SnapshotIdentifier?: string;

      OwnerAccount?: string;

      LoggingProperties?: AWS.Redshift.Cluster.LoggingProperties;

      Endpoint?: AWS.Redshift.Cluster.Endpoint;
    };

    export namespace Cluster {
      export type Endpoint = {
        Port?: string;

        Address?: string;
      };

      export type LoggingProperties = {
        BucketName: string;

        S3KeyPrefix?: string;
      };
    }

    export type ClusterParameterGroup = {
      Description: string;

      ParameterGroupFamily: string;

      Parameters?: AWS.Redshift.ClusterParameterGroup.Parameter[];

      Tags?: Tag[];
    };

    export namespace ClusterParameterGroup {
      export type Parameter = {
        ParameterName: string;

        ParameterValue: string;
      };
    }

    export type ClusterSubnetGroup = {
      Description: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type ClusterSecurityGroup = {
      Description: string;

      Tags?: Tag[];
    };

    export type ClusterSecurityGroupIngress = {
      CIDRIP?: string;

      ClusterSecurityGroupName: string;

      EC2SecurityGroupName?: string;

      EC2SecurityGroupOwnerId?: string;
    };
  }

  export namespace ElasticLoadBalancingV2 {
    export type ListenerRule = {
      ListenerArn: string;

      Actions: AWS.ElasticLoadBalancingV2.ListenerRule.Action[];

      Priority: number;

      Conditions: AWS.ElasticLoadBalancingV2.ListenerRule.RuleCondition[];
    };

    export namespace ListenerRule {
      export type SourceIpConfig = {
        Values?: string[];
      };

      export type AuthenticateOidcConfig = {
        OnUnauthenticatedRequest?: string;

        TokenEndpoint: string;

        SessionTimeout?: number;

        Scope?: string;

        Issuer: string;

        ClientSecret: string;

        UserInfoEndpoint: string;

        ClientId: string;

        AuthorizationEndpoint: string;

        SessionCookieName?: string;

        UseExistingClientSecret?: boolean;

        AuthenticationRequestExtraParams?: Record<string, string>;
      };

      export type AuthenticateCognitoConfig = {
        OnUnauthenticatedRequest?: string;

        UserPoolClientId: string;

        UserPoolDomain: string;

        SessionTimeout?: number;

        Scope?: string;

        SessionCookieName?: string;

        UserPoolArn: string;

        AuthenticationRequestExtraParams?: Record<string, string>;
      };

      export type QueryStringKeyValue = {
        Value?: string;

        Key?: string;
      };

      export type QueryStringConfig = {
        Values?: AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringKeyValue[];
      };

      export type PathPatternConfig = {
        Values?: string[];
      };

      export type RuleCondition = {
        Field?: string;

        Values?: string[];

        HttpRequestMethodConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.HttpRequestMethodConfig;

        PathPatternConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.PathPatternConfig;

        HttpHeaderConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.HttpHeaderConfig;

        SourceIpConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.SourceIpConfig;

        HostHeaderConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.HostHeaderConfig;

        QueryStringConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.QueryStringConfig;
      };

      export type RedirectConfig = {
        Path?: string;

        Query?: string;

        Port?: string;

        Host?: string;

        Protocol?: string;

        StatusCode: string;
      };

      export type HostHeaderConfig = {
        Values?: string[];
      };

      export type FixedResponseConfig = {
        ContentType?: string;

        StatusCode: string;

        MessageBody?: string;
      };

      export type Action = {
        Order?: number;

        TargetGroupArn?: string;

        FixedResponseConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.FixedResponseConfig;

        AuthenticateCognitoConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateCognitoConfig;

        Type: string;

        RedirectConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.RedirectConfig;

        ForwardConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.ForwardConfig;

        AuthenticateOidcConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.AuthenticateOidcConfig;
      };

      export type HttpHeaderConfig = {
        Values?: string[];

        HttpHeaderName?: string;
      };

      export type ForwardConfig = {
        TargetGroupStickinessConfig?: AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupStickinessConfig;

        TargetGroups?: AWS.ElasticLoadBalancingV2.ListenerRule.TargetGroupTuple[];
      };

      export type TargetGroupTuple = {
        TargetGroupArn?: string;

        Weight?: number;
      };

      export type HttpRequestMethodConfig = {
        Values?: string[];
      };

      export type TargetGroupStickinessConfig = {
        Enabled?: boolean;

        DurationSeconds?: number;
      };
    }

    export type LoadBalancer = {
      IpAddressType?: string;

      LoadBalancerAttributes?: AWS.ElasticLoadBalancingV2.LoadBalancer.LoadBalancerAttribute[];

      Name?: string;

      Scheme?: string;

      SecurityGroups?: string[];

      SubnetMappings?: AWS.ElasticLoadBalancingV2.LoadBalancer.SubnetMapping[];

      Subnets?: string[];

      Tags?: Tag[];

      Type?: string;
    };

    export namespace LoadBalancer {
      export type LoadBalancerAttribute = {
        Key?: string;

        Value?: string;
      };

      export type SubnetMapping = {
        AllocationId?: string;

        IPv6Address?: string;

        PrivateIPv4Address?: string;

        SubnetId: string;
      };
    }

    export type Listener = {
      SslPolicy?: string;

      LoadBalancerArn: string;

      DefaultActions: AWS.ElasticLoadBalancingV2.Listener.Action[];

      Port?: number;

      Certificates?: AWS.ElasticLoadBalancingV2.Listener.Certificate[];

      Protocol?: string;

      AlpnPolicy?: string[];
    };

    export namespace Listener {
      export type ForwardConfig = {
        TargetGroupStickinessConfig?: AWS.ElasticLoadBalancingV2.Listener.TargetGroupStickinessConfig;

        TargetGroups?: AWS.ElasticLoadBalancingV2.Listener.TargetGroupTuple[];
      };

      export type AuthenticateOidcConfig = {
        OnUnauthenticatedRequest?: string;

        TokenEndpoint: string;

        SessionTimeout?: string;

        Scope?: string;

        Issuer: string;

        ClientSecret: string;

        UserInfoEndpoint: string;

        ClientId: string;

        AuthorizationEndpoint: string;

        SessionCookieName?: string;

        AuthenticationRequestExtraParams?: Record<string, string>;
      };

      export type Certificate = {
        CertificateArn?: string;
      };

      export type TargetGroupStickinessConfig = {
        Enabled?: boolean;

        DurationSeconds?: number;
      };

      export type AuthenticateCognitoConfig = {
        OnUnauthenticatedRequest?: string;

        UserPoolClientId: string;

        UserPoolDomain: string;

        SessionTimeout?: string;

        Scope?: string;

        SessionCookieName?: string;

        UserPoolArn: string;

        AuthenticationRequestExtraParams?: Record<string, string>;
      };

      export type Action = {
        Order?: number;

        TargetGroupArn?: string;

        FixedResponseConfig?: AWS.ElasticLoadBalancingV2.Listener.FixedResponseConfig;

        AuthenticateCognitoConfig?: AWS.ElasticLoadBalancingV2.Listener.AuthenticateCognitoConfig;

        Type: string;

        RedirectConfig?: AWS.ElasticLoadBalancingV2.Listener.RedirectConfig;

        ForwardConfig?: AWS.ElasticLoadBalancingV2.Listener.ForwardConfig;

        AuthenticateOidcConfig?: AWS.ElasticLoadBalancingV2.Listener.AuthenticateOidcConfig;
      };

      export type RedirectConfig = {
        Path?: string;

        Query?: string;

        Port?: string;

        Host?: string;

        Protocol?: string;

        StatusCode: string;
      };

      export type FixedResponseConfig = {
        ContentType?: string;

        StatusCode: string;

        MessageBody?: string;
      };

      export type TargetGroupTuple = {
        TargetGroupArn?: string;

        Weight?: number;
      };
    }

    export type TargetGroup = {
      HealthCheckEnabled?: boolean;

      HealthCheckIntervalSeconds?: number;

      HealthCheckPath?: string;

      HealthCheckPort?: string;

      HealthCheckProtocol?: string;

      HealthCheckTimeoutSeconds?: number;

      HealthyThresholdCount?: number;

      Matcher?: AWS.ElasticLoadBalancingV2.TargetGroup.Matcher;

      Name?: string;

      Port?: number;

      Protocol?: string;

      ProtocolVersion?: string;

      Tags?: Tag[];

      TargetGroupAttributes?: AWS.ElasticLoadBalancingV2.TargetGroup.TargetGroupAttribute[];

      TargetType?: string;

      Targets?: AWS.ElasticLoadBalancingV2.TargetGroup.TargetDescription[];

      UnhealthyThresholdCount?: number;

      VpcId?: string;
    };

    export namespace TargetGroup {
      export type TargetDescription = {
        AvailabilityZone?: string;

        Id: string;

        Port?: number;
      };

      export type TargetGroupAttribute = {
        Key?: string;

        Value?: string;
      };

      export type Matcher = {
        GrpcCode?: string;

        HttpCode?: string;
      };
    }

    export type ListenerCertificate = {
      Certificates: AWS.ElasticLoadBalancingV2.ListenerCertificate.Certificate[];

      ListenerArn: string;
    };

    export namespace ListenerCertificate {
      export type Certificate = {
        CertificateArn?: string;
      };
    }
  }

  export namespace Budgets {
    export type Budget = {
      NotificationsWithSubscribers?: AWS.Budgets.Budget.NotificationWithSubscribers[];

      Budget: AWS.Budgets.Budget.BudgetData;
    };

    export namespace Budget {
      export type BudgetData = {
        BudgetLimit?: AWS.Budgets.Budget.Spend;

        TimePeriod?: AWS.Budgets.Budget.TimePeriod;

        TimeUnit: string;

        PlannedBudgetLimits?: JSONString;

        CostFilters?: JSONString;

        BudgetName?: string;

        CostTypes?: AWS.Budgets.Budget.CostTypes;

        BudgetType: string;
      };

      export type Subscriber = {
        SubscriptionType: string;

        Address: string;
      };

      export type TimePeriod = {
        Start?: string;

        End?: string;
      };

      export type CostTypes = {
        IncludeSupport?: boolean;

        IncludeOtherSubscription?: boolean;

        IncludeTax?: boolean;

        IncludeSubscription?: boolean;

        UseBlended?: boolean;

        IncludeUpfront?: boolean;

        IncludeDiscount?: boolean;

        IncludeCredit?: boolean;

        IncludeRecurring?: boolean;

        UseAmortized?: boolean;

        IncludeRefund?: boolean;
      };

      export type NotificationWithSubscribers = {
        Subscribers: AWS.Budgets.Budget.Subscriber[];

        Notification: AWS.Budgets.Budget.Notification;
      };

      export type Notification = {
        ComparisonOperator: string;

        NotificationType: string;

        Threshold: number;

        ThresholdType?: string;
      };

      export type Spend = {
        Amount: number;

        Unit: string;
      };
    }

    export type BudgetsAction = {
      BudgetName: string;

      NotificationType: string;

      ActionType: string;

      ActionThreshold: AWS.Budgets.BudgetsAction.ActionThreshold;

      ExecutionRoleArn: string;

      ApprovalModel?: string;

      Subscribers?: AWS.Budgets.BudgetsAction.Subscriber[];

      Definition: AWS.Budgets.BudgetsAction.Definition;
    };

    export namespace BudgetsAction {
      export type IamActionDefinition = {
        PolicyArn: string;

        Roles?: string[];

        Groups?: string[];

        Users?: string[];
      };

      export type Definition = {
        IamActionDefinition?: AWS.Budgets.BudgetsAction.IamActionDefinition;

        ScpActionDefinition?: AWS.Budgets.BudgetsAction.ScpActionDefinition;

        SsmActionDefinition?: AWS.Budgets.BudgetsAction.SsmActionDefinition;
      };

      export type ScpActionDefinition = {
        PolicyId: string;

        TargetIds: string[];
      };

      export type SsmActionDefinition = {
        Subtype: string;

        Region: string;

        InstanceIds: string[];
      };

      export type ActionThreshold = {
        Value: number;

        Type: string;
      };

      export type Subscriber = {
        Type: string;

        Address: string;
      };
    }
  }

  export namespace MediaConnect {
    export type Flow = {
      Name: string;

      AvailabilityZone?: string;

      Source: AWS.MediaConnect.Flow.Source;

      SourceFailoverConfig?: AWS.MediaConnect.Flow.FailoverConfig;
    };

    export namespace Flow {
      export type Encryption = {
        Algorithm: string;

        ConstantInitializationVector?: string;

        DeviceId?: string;

        KeyType?: string;

        Region?: string;

        ResourceId?: string;

        RoleArn: string;

        SecretArn?: string;

        Url?: string;
      };

      export type Source = {
        SourceArn?: string;

        Decryption?: AWS.MediaConnect.Flow.Encryption;

        Description?: string;

        EntitlementArn?: string;

        IngestIp?: string;

        IngestPort?: number;

        MaxBitrate?: number;

        MaxLatency?: number;

        Name?: string;

        Protocol?: string;

        StreamId?: string;

        VpcInterfaceName?: string;

        WhitelistCidr?: string;
      };

      export type FailoverConfig = {
        State?: string;

        RecoveryWindow?: number;
      };
    }

    export type FlowOutput = {
      FlowArn: string;

      CidrAllowList?: string[];

      Description?: string;

      Destination?: string;

      Encryption?: AWS.MediaConnect.FlowOutput.Encryption;

      MaxLatency?: number;

      Name?: string;

      Port?: number;

      Protocol: string;

      RemoteId?: string;

      SmoothingLatency?: number;

      StreamId?: string;

      VpcInterfaceAttachment?: AWS.MediaConnect.FlowOutput.VpcInterfaceAttachment;
    };

    export namespace FlowOutput {
      export type Encryption = {
        Algorithm: string;

        KeyType?: string;

        RoleArn: string;

        SecretArn: string;
      };

      export type VpcInterfaceAttachment = {
        VpcInterfaceName?: string;
      };
    }

    export type FlowSource = {
      FlowArn?: string;

      Decryption?: AWS.MediaConnect.FlowSource.Encryption;

      Description: string;

      EntitlementArn?: string;

      IngestPort?: number;

      MaxBitrate?: number;

      MaxLatency?: number;

      Name: string;

      Protocol?: string;

      StreamId?: string;

      VpcInterfaceName?: string;

      WhitelistCidr?: string;
    };

    export namespace FlowSource {
      export type Encryption = {
        Algorithm: string;

        ConstantInitializationVector?: string;

        DeviceId?: string;

        KeyType?: string;

        Region?: string;

        ResourceId?: string;

        RoleArn: string;

        SecretArn?: string;

        Url?: string;
      };
    }

    export type FlowEntitlement = {
      FlowArn: string;

      DataTransferSubscriberFeePercent?: number;

      Description: string;

      Encryption?: AWS.MediaConnect.FlowEntitlement.Encryption;

      EntitlementStatus?: string;

      Name: string;

      Subscribers: string[];
    };

    export namespace FlowEntitlement {
      export type Encryption = {
        Algorithm: string;

        ConstantInitializationVector?: string;

        DeviceId?: string;

        KeyType?: string;

        Region?: string;

        ResourceId?: string;

        RoleArn: string;

        SecretArn?: string;

        Url?: string;
      };
    }

    export type FlowVpcInterface = {
      FlowArn: string;

      Name: string;

      RoleArn: string;

      SecurityGroupIds: string[];

      SubnetId: string;
    };
  }

  export namespace CodeStar {
    export type GitHubRepository = {
      EnableIssues?: boolean;

      ConnectionArn?: string;

      RepositoryName: string;

      RepositoryAccessToken?: string;

      RepositoryOwner: string;

      IsPrivate?: boolean;

      Code?: AWS.CodeStar.GitHubRepository.Code;

      RepositoryDescription?: string;
    };

    export namespace GitHubRepository {
      export type Code = {
        S3: AWS.CodeStar.GitHubRepository.S3;
      };

      export type S3 = {
        ObjectVersion?: string;

        Bucket: string;

        Key: string;
      };
    }
  }

  export namespace SSMContacts {
    export type Contact = {
      Alias: string;

      DisplayName: string;

      Type: string;

      Plan: AWS.SSMContacts.Contact.Stage[];
    };

    export namespace Contact {
      export type ContactTargetInfo = {
        ContactId: string;

        IsEssential: boolean;
      };

      export type Targets = {
        ContactTargetInfo?: AWS.SSMContacts.Contact.ContactTargetInfo;

        ChannelTargetInfo?: AWS.SSMContacts.Contact.ChannelTargetInfo;
      };

      export type ChannelTargetInfo = {
        ChannelId: string;

        RetryIntervalInMinutes: number;
      };

      export type Stage = {
        DurationInMinutes: number;

        Targets?: AWS.SSMContacts.Contact.Targets[];
      };
    }

    export type ContactChannel = {
      ContactId: string;

      ChannelName: string;

      ChannelType: string;

      DeferActivation?: boolean;

      ChannelAddress: string;
    };
  }

  export namespace AuditManager {
    export type Assessment = {
      FrameworkId?: string;

      AwsAccount?: AWS.AuditManager.Assessment.AWSAccount;

      Tags?: Tag[];

      Roles?: AWS.AuditManager.Assessment.Role[];

      Scope?: AWS.AuditManager.Assessment.Scope;

      AssessmentReportsDestination?: AWS.AuditManager.Assessment.AssessmentReportsDestination;

      Status?: string;

      Name?: string;

      Description?: string;
    };

    export namespace Assessment {
      export type Delegation = {
        LastUpdated?: number;

        ControlSetId?: string;

        CreationTime?: number;

        CreatedBy?: string;

        RoleArn?: string;

        AssessmentName?: string;

        Comment?: string;

        Id?: string;

        RoleType?: string;

        AssessmentId?: string;

        Status?: string;
      };

      export type AWSAccount = {
        Id?: string;

        EmailAddress?: string;

        Name?: string;
      };

      export type Role = {
        RoleArn?: string;

        RoleType?: string;
      };

      export type AssessmentReportsDestination = {
        Destination?: string;

        DestinationType?: string;
      };

      export type AWSService = {
        ServiceName?: string;
      };

      export type Scope = {
        AwsAccounts?: AWS.AuditManager.Assessment.AWSAccount[];

        AwsServices?: AWS.AuditManager.Assessment.AWSService[];
      };
    }
  }

  export namespace LakeFormation {
    export type Permissions = {
      DataLakePrincipal: AWS.LakeFormation.Permissions.DataLakePrincipal;

      Resource: AWS.LakeFormation.Permissions.Resource;

      Permissions?: string[];

      PermissionsWithGrantOption?: string[];
    };

    export namespace Permissions {
      export type DataLocationResource = {
        S3Resource?: string;

        CatalogId?: string;
      };

      export type ColumnWildcard = {
        ExcludedColumnNames?: string[];
      };

      export type DatabaseResource = {
        CatalogId?: string;

        Name?: string;
      };

      export type Resource = {
        TableResource?: AWS.LakeFormation.Permissions.TableResource;

        DatabaseResource?: AWS.LakeFormation.Permissions.DatabaseResource;

        DataLocationResource?: AWS.LakeFormation.Permissions.DataLocationResource;

        TableWithColumnsResource?: AWS.LakeFormation.Permissions.TableWithColumnsResource;
      };

      export type DataLakePrincipal = {
        DataLakePrincipalIdentifier?: string;
      };

      export type TableResource = {
        DatabaseName?: string;

        CatalogId?: string;

        TableWildcard?: AWS.LakeFormation.Permissions.TableWildcard;

        Name?: string;
      };

      export type TableWithColumnsResource = {
        ColumnNames?: string[];

        DatabaseName?: string;

        CatalogId?: string;

        Name?: string;

        ColumnWildcard?: AWS.LakeFormation.Permissions.ColumnWildcard;
      };
    }

    export type DataLakeSettings = {
      Admins?: AWS.LakeFormation.DataLakeSettings.Admins;

      TrustedResourceOwners?: string[];
    };

    export type DataLakeSettings = {
      Admins?: AWS.LakeFormation.DataLakeSettings.DataLakePrincipal[];
    };

    export namespace DataLakeSettings {
      export type DataLakePrincipal = {
        DataLakePrincipalIdentifier?: string;
      };
    }

    export type Resource = {
      ResourceArn: string;

      UseServiceLinkedRole: boolean;

      RoleArn?: string;
    };
  }

  export namespace NetworkManager {
    export type Device = {
      Description?: string;

      Tags?: Tag[];

      GlobalNetworkId: string;

      Location?: AWS.NetworkManager.Device.Location;

      Model?: string;

      SerialNumber?: string;

      SiteId?: string;

      Type?: string;

      Vendor?: string;
    };

    export namespace Device {
      export type Location = {
        Address?: string;

        Latitude?: string;

        Longitude?: string;
      };
    }

    export type Link = {
      GlobalNetworkId: string;

      SiteId: string;

      Bandwidth: AWS.NetworkManager.Link.Bandwidth;

      Provider?: string;

      Description?: string;

      Tags?: Tag[];

      Type?: string;
    };

    export namespace Link {
      export type Bandwidth = {
        DownloadSpeed?: number;

        UploadSpeed?: number;
      };
    }

    export type Site = {
      Description?: string;

      Tags?: Tag[];

      GlobalNetworkId: string;

      Location?: AWS.NetworkManager.Site.Location;
    };

    export namespace Site {
      export type Location = {
        Address?: string;

        Latitude?: string;

        Longitude?: string;
      };
    }

    export type CustomerGatewayAssociation = {
      GlobalNetworkId: string;

      CustomerGatewayArn: string;

      DeviceId: string;

      LinkId?: string;
    };

    export type LinkAssociation = {
      GlobalNetworkId: string;

      DeviceId: string;

      LinkId: string;
    };

    export type GlobalNetwork = {
      Description?: string;

      Tags?: Tag[];
    };

    export type TransitGatewayRegistration = {
      GlobalNetworkId: string;

      TransitGatewayArn: string;
    };
  }

  export namespace Route53 {
    export type HostedZone = {
      HostedZoneConfig?: AWS.Route53.HostedZone.HostedZoneConfig;

      HostedZoneTags?: AWS.Route53.HostedZone.HostedZoneTag[];

      Name: string;

      QueryLoggingConfig?: AWS.Route53.HostedZone.QueryLoggingConfig;

      VPCs?: AWS.Route53.HostedZone.VPC[];
    };

    export namespace HostedZone {
      export type HostedZoneTag = {
        Key: string;

        Value: string;
      };

      export type HostedZoneConfig = {
        Comment?: string;
      };

      export type QueryLoggingConfig = {
        CloudWatchLogsLogGroupArn: string;
      };

      export type VPC = {
        VPCId: string;

        VPCRegion: string;
      };
    }

    export type RecordSetGroup = {
      Comment?: string;

      HostedZoneId?: string;

      HostedZoneName?: string;

      RecordSets?: AWS.Route53.RecordSetGroup.RecordSet[];
    };

    export namespace RecordSetGroup {
      export type GeoLocation = {
        ContinentCode?: string;

        CountryCode?: string;

        SubdivisionCode?: string;
      };

      export type RecordSet = {
        AliasTarget?: AWS.Route53.RecordSetGroup.AliasTarget;

        Comment?: string;

        Failover?: string;

        GeoLocation?: AWS.Route53.RecordSetGroup.GeoLocation;

        HealthCheckId?: string;

        HostedZoneId?: string;

        HostedZoneName?: string;

        MultiValueAnswer?: boolean;

        Name: string;

        Region?: string;

        ResourceRecords?: string[];

        SetIdentifier?: string;

        TTL?: string;

        Type: string;

        Weight?: number;
      };

      export type AliasTarget = {
        DNSName: string;

        EvaluateTargetHealth?: boolean;

        HostedZoneId: string;
      };
    }

    export type RecordSet = {
      AliasTarget?: AWS.Route53.RecordSet.AliasTarget;

      Comment?: string;

      Failover?: string;

      GeoLocation?: AWS.Route53.RecordSet.GeoLocation;

      HealthCheckId?: string;

      HostedZoneId?: string;

      HostedZoneName?: string;

      MultiValueAnswer?: boolean;

      Name: string;

      Region?: string;

      ResourceRecords?: string[];

      SetIdentifier?: string;

      TTL?: string;

      Type: string;

      Weight?: number;
    };

    export namespace RecordSet {
      export type GeoLocation = {
        ContinentCode?: string;

        CountryCode?: string;

        SubdivisionCode?: string;
      };

      export type AliasTarget = {
        DNSName: string;

        EvaluateTargetHealth?: boolean;

        HostedZoneId: string;
      };
    }

    export type HealthCheck = {
      HealthCheckConfig: JSONString;

      HealthCheckTags?: AWS.Route53.HealthCheck.HealthCheckTag[];
    };

    export namespace HealthCheck {
      export type HealthCheckTag = {
        Key: string;

        Value: string;
      };
    }

    export type DNSSEC = {
      HostedZoneId: string;
    };

    export type KeySigningKey = {
      HostedZoneId: string;

      Status: string;

      Name: string;

      KeyManagementServiceArn: string;
    };
  }

  export namespace Logs {
    export type MetricFilter = {
      FilterPattern: string;

      LogGroupName: string;

      MetricTransformations: AWS.Logs.MetricFilter.MetricTransformation[];
    };

    export namespace MetricFilter {
      export type MetricTransformation = {
        DefaultValue?: number;

        MetricName: string;

        MetricNamespace: string;

        MetricValue: string;
      };
    }

    export type Destination = {
      DestinationName: string;

      DestinationPolicy: string;

      RoleArn: string;

      TargetArn: string;
    };

    export type LogGroup = {
      LogGroupName?: string;

      KmsKeyId?: string;

      RetentionInDays?: number;
    };

    export type LogStream = {
      LogGroupName: string;

      LogStreamName?: string;
    };

    export type SubscriptionFilter = {
      DestinationArn: string;

      FilterPattern: string;

      LogGroupName: string;

      RoleArn?: string;
    };

    export type QueryDefinition = {
      Name: string;

      QueryString: string;

      LogGroupNames?: string[];
    };
  }

  export namespace S3Outposts {
    export type Bucket = {
      BucketName: string;

      OutpostId: string;

      Tags?: Tag[];

      LifecycleConfiguration?: AWS.S3Outposts.Bucket.LifecycleConfiguration;
    };

    export namespace Bucket {
      export type AbortIncompleteMultipartUpload = {
        DaysAfterInitiation: number;
      };

      export type Rule = {
        Status?: string;

        Id?: string;

        AbortIncompleteMultipartUpload?: AWS.S3Outposts.Bucket.AbortIncompleteMultipartUpload;

        ExpirationDate?: string;

        ExpirationInDays?: number;

        Filter?: JSONString;
      };

      export type LifecycleConfiguration = {
        Rules: AWS.S3Outposts.Bucket.Rule[];
      };
    }

    export type AccessPoint = {
      Bucket: string;

      Name: string;

      VpcConfiguration: AWS.S3Outposts.AccessPoint.VpcConfiguration;

      Policy?: JSONString;
    };

    export namespace AccessPoint {
      export type VpcConfiguration = {
        VpcId?: string;
      };
    }

    export type Endpoint = {
      OutpostId: string;

      SecurityGroupId: string;

      SubnetId: string;
    };

    export namespace Endpoint {
      export type NetworkInterface = {
        NetworkInterfaceId: string;
      };
    }

    export type BucketPolicy = {
      Bucket: string;

      PolicyDocument: JSONString;
    };
  }

  export namespace SecretsManager {
    export type RotationSchedule = {
      SecretId: string;

      HostedRotationLambda?: AWS.SecretsManager.RotationSchedule.HostedRotationLambda;

      RotationLambdaARN?: string;

      RotationRules?: AWS.SecretsManager.RotationSchedule.RotationRules;
    };

    export namespace RotationSchedule {
      export type RotationRules = {
        AutomaticallyAfterDays?: number;
      };

      export type HostedRotationLambda = {
        RotationType: string;

        RotationLambdaName?: string;

        KmsKeyArn?: string;

        MasterSecretArn?: string;

        VpcSecurityGroupIds?: string;

        MasterSecretKmsKeyArn?: string;

        VpcSubnetIds?: string;
      };
    }

    export type Secret = {
      Description?: string;

      KmsKeyId?: string;

      SecretString?: string;

      GenerateSecretString?: AWS.SecretsManager.Secret.GenerateSecretString;

      ReplicaRegions?: AWS.SecretsManager.Secret.ReplicaRegion[];

      Tags?: Tag[];

      Name?: string;
    };

    export namespace Secret {
      export type ReplicaRegion = {
        KmsKeyId?: string;

        Region: string;
      };

      export type GenerateSecretString = {
        ExcludeUppercase?: boolean;

        RequireEachIncludedType?: boolean;

        IncludeSpace?: boolean;

        ExcludeCharacters?: string;

        GenerateStringKey?: string;

        PasswordLength?: number;

        ExcludePunctuation?: boolean;

        ExcludeLowercase?: boolean;

        SecretStringTemplate?: string;

        ExcludeNumbers?: boolean;
      };
    }

    export type ResourcePolicy = {
      BlockPublicPolicy?: boolean;

      SecretId: string;

      ResourcePolicy: JSONString;
    };

    export type SecretTargetAttachment = {
      SecretId: string;

      TargetType: string;

      TargetId: string;
    };
  }

  export namespace ApplicationInsights {
    export type Application = {
      ResourceGroupName: string;

      CWEMonitorEnabled?: boolean;

      OpsCenterEnabled?: boolean;

      OpsItemSNSTopicArn?: string;

      Tags?: Tag[];

      CustomComponents?: AWS.ApplicationInsights.Application.CustomComponent[];

      LogPatternSets?: AWS.ApplicationInsights.Application.LogPatternSet[];

      AutoConfigurationEnabled?: boolean;

      ComponentMonitoringSettings?: AWS.ApplicationInsights.Application.ComponentMonitoringSetting[];
    };

    export namespace Application {
      export type SubComponentConfigurationDetails = {
        AlarmMetrics?: AWS.ApplicationInsights.Application.AlarmMetric[];

        Logs?: AWS.ApplicationInsights.Application.Log[];

        WindowsEvents?: AWS.ApplicationInsights.Application.WindowsEvent[];
      };

      export type ComponentMonitoringSetting = {
        ComponentName?: string;

        ComponentARN?: string;

        Tier: string;

        ComponentConfigurationMode: string;

        DefaultOverwriteComponentConfiguration?: AWS.ApplicationInsights.Application.ComponentConfiguration;

        CustomComponentConfiguration?: AWS.ApplicationInsights.Application.ComponentConfiguration;
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

        Severity?: string;
      };

      export type WindowsEvent = {
        LogGroupName: string;

        EventName: string;

        EventLevels: string[];

        PatternSet?: string;
      };

      export type ComponentConfiguration = {
        ConfigurationDetails?: AWS.ApplicationInsights.Application.ConfigurationDetails;

        SubComponentTypeConfigurations?: AWS.ApplicationInsights.Application.SubComponentTypeConfiguration[];
      };

      export type CustomComponent = {
        ComponentName: string;

        ResourceList: string[];
      };

      export type JMXPrometheusExporter = {
        JMXURL?: string;

        HostPort?: string;

        PrometheusPort?: string;
      };

      export type AlarmMetric = {
        AlarmMetricName: string;
      };

      export type ConfigurationDetails = {
        AlarmMetrics?: AWS.ApplicationInsights.Application.AlarmMetric[];

        Logs?: AWS.ApplicationInsights.Application.Log[];

        WindowsEvents?: AWS.ApplicationInsights.Application.WindowsEvent[];

        Alarms?: AWS.ApplicationInsights.Application.Alarm[];

        JMXPrometheusExporter?: AWS.ApplicationInsights.Application.JMXPrometheusExporter;
      };

      export type Log = {
        LogGroupName?: string;

        LogPath?: string;

        LogType: string;

        Encoding?: string;

        PatternSet?: string;
      };

      export type SubComponentTypeConfiguration = {
        SubComponentType: string;

        SubComponentConfigurationDetails: AWS.ApplicationInsights.Application.SubComponentConfigurationDetails;
      };
    }
  }

  export namespace CodeBuild {
    export type Project = {
      Description?: string;

      VpcConfig?: AWS.CodeBuild.Project.VpcConfig;

      SecondarySources?: AWS.CodeBuild.Project.Source[];

      EncryptionKey?: string;

      SourceVersion?: string;

      Triggers?: AWS.CodeBuild.Project.ProjectTriggers;

      SecondaryArtifacts?: AWS.CodeBuild.Project.Artifacts[];

      Source: AWS.CodeBuild.Project.Source;

      Name?: string;

      Artifacts: AWS.CodeBuild.Project.Artifacts;

      BadgeEnabled?: boolean;

      LogsConfig?: AWS.CodeBuild.Project.LogsConfig;

      ServiceRole: string;

      QueuedTimeoutInMinutes?: number;

      FileSystemLocations?: AWS.CodeBuild.Project.ProjectFileSystemLocation[];

      Environment: AWS.CodeBuild.Project.Environment;

      SecondarySourceVersions?: AWS.CodeBuild.Project.ProjectSourceVersion[];

      ConcurrentBuildLimit?: number;

      BuildBatchConfig?: AWS.CodeBuild.Project.ProjectBuildBatchConfig;

      Tags?: Tag[];

      TimeoutInMinutes?: number;

      Cache?: AWS.CodeBuild.Project.ProjectCache;
    };

    export type Project = {
      FilterGroup?: AWS.CodeBuild.Project.WebhookFilter[];
    };

    export namespace Project {
      export type Environment = {
        Type: string;

        EnvironmentVariables?: AWS.CodeBuild.Project.EnvironmentVariable[];

        PrivilegedMode?: boolean;

        ImagePullCredentialsType?: string;

        Image: string;

        RegistryCredential?: AWS.CodeBuild.Project.RegistryCredential;

        ComputeType: string;

        Certificate?: string;
      };

      export type GitSubmodulesConfig = {
        FetchSubmodules: boolean;
      };

      export type VpcConfig = {
        Subnets?: string[];

        VpcId?: string;

        SecurityGroupIds?: string[];
      };

      export type Artifacts = {
        Path?: string;

        Type: string;

        ArtifactIdentifier?: string;

        OverrideArtifactName?: boolean;

        Packaging?: string;

        EncryptionDisabled?: boolean;

        Location?: string;

        Name?: string;

        NamespaceType?: string;
      };

      export type RegistryCredential = {
        Credential: string;

        CredentialProvider: string;
      };

      export type CloudWatchLogsConfig = {
        Status: string;

        GroupName?: string;

        StreamName?: string;
      };

      export type ProjectCache = {
        Modes?: string[];

        Type: string;

        Location?: string;
      };

      export type ProjectBuildBatchConfig = {
        CombineArtifacts?: boolean;

        ServiceRole?: string;

        TimeoutInMins?: number;

        Restrictions?: AWS.CodeBuild.Project.BatchRestrictions;
      };

      export type BatchRestrictions = {
        ComputeTypesAllowed?: string[];

        MaximumBuildsAllowed?: number;
      };

      export type ProjectTriggers = {
        FilterGroups?: AWS.CodeBuild.Project.FilterGroup[];

        BuildType?: string;

        Webhook?: boolean;
      };

      export type Source = {
        Type: string;

        ReportBuildStatus?: boolean;

        Auth?: AWS.CodeBuild.Project.SourceAuth;

        SourceIdentifier?: string;

        BuildSpec?: string;

        GitCloneDepth?: number;

        BuildStatusConfig?: AWS.CodeBuild.Project.BuildStatusConfig;

        GitSubmodulesConfig?: AWS.CodeBuild.Project.GitSubmodulesConfig;

        InsecureSsl?: boolean;

        Location?: string;
      };

      export type ProjectSourceVersion = {
        SourceIdentifier: string;

        SourceVersion?: string;
      };

      export type LogsConfig = {
        CloudWatchLogs?: AWS.CodeBuild.Project.CloudWatchLogsConfig;

        S3Logs?: AWS.CodeBuild.Project.S3LogsConfig;
      };

      export type SourceAuth = {
        Type: string;

        Resource?: string;
      };

      export type ProjectFileSystemLocation = {
        MountPoint: string;

        Type: string;

        Identifier: string;

        MountOptions?: string;

        Location: string;
      };

      export type S3LogsConfig = {
        Status: string;

        EncryptionDisabled?: boolean;

        Location?: string;
      };

      export type WebhookFilter = {
        Pattern: string;

        Type: string;

        ExcludeMatchedPattern?: boolean;
      };

      export type BuildStatusConfig = {
        Context?: string;

        TargetUrl?: string;
      };

      export type EnvironmentVariable = {
        Type?: string;

        Value: string;

        Name: string;
      };
    }

    export type ReportGroup = {
      Type: string;

      ExportConfig: AWS.CodeBuild.ReportGroup.ReportExportConfig;

      DeleteReports?: boolean;

      Tags?: Tag[];

      Name?: string;
    };

    export namespace ReportGroup {
      export type ReportExportConfig = {
        S3Destination?: AWS.CodeBuild.ReportGroup.S3ReportExportConfig;

        ExportConfigType: string;
      };

      export type S3ReportExportConfig = {
        Path?: string;

        Bucket: string;

        Packaging?: string;

        EncryptionKey?: string;

        BucketOwner?: string;

        EncryptionDisabled?: boolean;
      };
    }

    export type SourceCredential = {
      ServerType: string;

      Username?: string;

      Token: string;

      AuthType: string;
    };
  }

  export namespace IoTSiteWise {
    export type AccessPolicy = {
      AccessPolicyIdentity: AWS.IoTSiteWise.AccessPolicy.AccessPolicyIdentity;

      AccessPolicyPermission: string;

      AccessPolicyResource: AWS.IoTSiteWise.AccessPolicy.AccessPolicyResource;
    };

    export namespace AccessPolicy {
      export type Project = {
        id?: string;
      };

      export type IamRole = {
        arn?: string;
      };

      export type AccessPolicyResource = {
        Portal?: AWS.IoTSiteWise.AccessPolicy.Portal;

        Project?: AWS.IoTSiteWise.AccessPolicy.Project;
      };

      export type User = {
        id?: string;
      };

      export type IamUser = {
        arn?: string;
      };

      export type Portal = {
        id?: string;
      };

      export type AccessPolicyIdentity = {
        User?: AWS.IoTSiteWise.AccessPolicy.User;

        IamUser?: AWS.IoTSiteWise.AccessPolicy.IamUser;

        IamRole?: AWS.IoTSiteWise.AccessPolicy.IamRole;
      };
    }

    export type Gateway = {
      GatewayName: string;

      GatewayPlatform: AWS.IoTSiteWise.Gateway.GatewayPlatform;

      Tags?: Tag[];

      GatewayCapabilitySummaries?: AWS.IoTSiteWise.Gateway.GatewayCapabilitySummary[];
    };

    export namespace Gateway {
      export type Greengrass = {
        GroupArn: string;
      };

      export type GatewayCapabilitySummary = {
        CapabilityNamespace: string;

        CapabilityConfiguration?: string;
      };

      export type GatewayPlatform = {
        Greengrass: AWS.IoTSiteWise.Gateway.Greengrass;
      };
    }

    export type AssetModel = {
      AssetModelName: string;

      AssetModelDescription?: string;

      AssetModelProperties?: AWS.IoTSiteWise.AssetModel.AssetModelProperty[];

      AssetModelCompositeModels?: AWS.IoTSiteWise.AssetModel.AssetModelCompositeModel[];

      AssetModelHierarchies?: AWS.IoTSiteWise.AssetModel.AssetModelHierarchy[];

      Tags?: Tag[];
    };

    export namespace AssetModel {
      export type AssetModelCompositeModel = {
        Description?: string;

        Name: string;

        Type: string;

        CompositeModelProperties?: AWS.IoTSiteWise.AssetModel.AssetModelProperty[];
      };

      export type MetricWindow = {
        Tumbling?: AWS.IoTSiteWise.AssetModel.TumblingWindow;
      };

      export type TumblingWindow = {
        Interval: string;
      };

      export type Attribute = {
        DefaultValue?: string;
      };

      export type ExpressionVariable = {
        Name: string;

        Value: AWS.IoTSiteWise.AssetModel.VariableValue;
      };

      export type VariableValue = {
        PropertyLogicalId: string;

        HierarchyLogicalId?: string;
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

        DataTypeSpec?: string;

        Unit?: string;

        Type: AWS.IoTSiteWise.AssetModel.PropertyType;
      };

      export type PropertyType = {
        TypeName: string;

        Attribute?: AWS.IoTSiteWise.AssetModel.Attribute;

        Transform?: AWS.IoTSiteWise.AssetModel.Transform;

        Metric?: AWS.IoTSiteWise.AssetModel.Metric;
      };
    }

    export type Asset = {
      AssetModelId: string;

      AssetName: string;

      AssetProperties?: AWS.IoTSiteWise.Asset.AssetProperty[];

      AssetHierarchies?: AWS.IoTSiteWise.Asset.AssetHierarchy[];

      Tags?: Tag[];
    };

    export namespace Asset {
      export type AssetHierarchy = {
        LogicalId: string;

        ChildAssetId: string;
      };

      export type AssetProperty = {
        LogicalId: string;

        Alias?: string;

        NotificationState?: string;
      };
    }

    export type Dashboard = {
      ProjectId?: string;

      DashboardName: string;

      DashboardDescription: string;

      DashboardDefinition: string;

      Tags?: Tag[];
    };

    export type Portal = {
      PortalAuthMode?: string;

      PortalContactEmail: string;

      PortalDescription?: string;

      PortalName: string;

      RoleArn: string;

      NotificationSenderEmail?: string;

      Alarms?: JSONString;

      Tags?: Tag[];
    };

    export type Project = {
      PortalId: string;

      ProjectName: string;

      ProjectDescription?: string;

      Tags?: Tag[];
    };
  }

  export namespace CloudFormation {
    export type StackSet = {
      StackSetName: string;

      AdministrationRoleARN?: string;

      AutoDeployment?: AWS.CloudFormation.StackSet.AutoDeployment;

      Capabilities?: string[];

      Description?: string;

      ExecutionRoleName?: string;

      OperationPreferences?: AWS.CloudFormation.StackSet.OperationPreferences;

      StackInstancesGroup?: AWS.CloudFormation.StackSet.StackInstances[];

      Parameters?: AWS.CloudFormation.StackSet.Parameter[];

      PermissionModel: string;

      Tags?: Tag[];

      TemplateBody?: string;

      TemplateURL?: string;

      CallAs?: string;
    };

    export namespace StackSet {
      export type StackInstances = {
        DeploymentTargets: AWS.CloudFormation.StackSet.DeploymentTargets;

        Regions: string[];

        ParameterOverrides?: AWS.CloudFormation.StackSet.Parameter[];
      };

      export type AutoDeployment = {
        Enabled?: boolean;

        RetainStacksOnAccountRemoval?: boolean;
      };

      export type DeploymentTargets = {
        Accounts?: string[];

        OrganizationalUnitIds?: string[];
      };

      export type OperationPreferences = {
        FailureToleranceCount?: number;

        FailureTolerancePercentage?: number;

        MaxConcurrentCount?: number;

        MaxConcurrentPercentage?: number;

        RegionOrder?: string[];

        RegionConcurrencyType?: string;
      };

      export type Parameter = {
        ParameterKey: string;

        ParameterValue: string;
      };
    }

    export type ResourceVersion = {
      ExecutionRoleArn?: string;

      LoggingConfig?: AWS.CloudFormation.ResourceVersion.LoggingConfig;

      SchemaHandlerPackage: string;

      TypeName: string;
    };

    export namespace ResourceVersion {
      export type LoggingConfig = {
        LogGroupName?: string;

        LogRoleArn?: string;
      };
    }

    export type TypeActivation = {
      ExecutionRoleArn?: string;

      PublisherId?: string;

      LoggingConfig?: AWS.CloudFormation.TypeActivation.LoggingConfig;

      PublicTypeArn?: string;

      AutoUpdate?: boolean;

      TypeNameAlias?: string;

      VersionBump?: string;

      MajorVersion?: string;

      TypeName?: string;

      Type?: string;
    };

    export namespace TypeActivation {
      export type LoggingConfig = {
        LogGroupName?: string;

        LogRoleArn?: string;
      };
    }

    export type ResourceDefaultVersion = {
      TypeVersionArn?: string;

      TypeName?: string;

      VersionId?: string;
    };

    export type CustomResource = {
      ServiceToken: string;
    };

    export type PublicTypeVersion = {
      Arn?: string;

      PublicVersionNumber?: string;

      TypeName?: string;

      LogDeliveryBucket?: string;

      Type?: string;
    };

    export type Macro = {
      Description?: string;

      FunctionName: string;

      LogGroupName?: string;

      LogRoleARN?: string;

      Name: string;
    };

    export type ModuleDefaultVersion = {
      Arn?: string;

      ModuleName?: string;

      VersionId?: string;
    };

    export type Stack = {
      NotificationARNs?: string[];

      Parameters?: Record<string, string>;

      Tags?: Tag[];

      TemplateURL: string;

      TimeoutInMinutes?: number;
    };

    export type Publisher = {
      AcceptTermsAndConditions: boolean;

      ConnectionArn?: string;
    };

    export type WaitCondition = {
      Count?: number;

      Handle?: string;

      Timeout?: string;
    };

    export type ModuleVersion = {
      ModuleName: string;

      ModulePackage: string;
    };
  }

  export namespace SSMIncidents {
    export type ResponsePlan = {
      Name: string;

      DisplayName?: string;

      ChatChannel?: AWS.SSMIncidents.ResponsePlan.ChatChannel;

      Engagements?: string[];

      Actions?: AWS.SSMIncidents.ResponsePlan.Action[];

      Tags?: Tag[];

      IncidentTemplate: AWS.SSMIncidents.ResponsePlan.IncidentTemplate;
    };

    export namespace ResponsePlan {
      export type SsmParameter = {
        Key: string;

        Values: string[];
      };

      export type SsmAutomation = {
        RoleArn: string;

        DocumentName: string;

        DocumentVersion?: string;

        TargetAccount?: string;

        Parameters?: AWS.SSMIncidents.ResponsePlan.SsmParameter[];
      };

      export type Action = {
        SsmAutomation?: AWS.SSMIncidents.ResponsePlan.SsmAutomation;
      };

      export type NotificationTargetItem = {
        SnsTopicArn?: string;
      };

      export type ChatChannel = {
        ChatbotSns?: string[];
      };

      export type IncidentTemplate = {
        DedupeString?: string;

        Impact: number;

        NotificationTargets?: AWS.SSMIncidents.ResponsePlan.NotificationTargetItem[];

        Summary?: string;

        Title: string;
      };
    }

    export type ReplicationSet = {
      Regions: AWS.SSMIncidents.ReplicationSet.ReplicationRegion[];

      DeletionProtected?: boolean;
    };

    export namespace ReplicationSet {
      export type RegionConfiguration = {
        SseKmsKeyId: string;
      };

      export type ReplicationRegion = {
        RegionName?: string;

        RegionConfiguration?: AWS.SSMIncidents.ReplicationSet.RegionConfiguration;
      };
    }
  }

  export namespace Route53Resolver {
    export type FirewallRuleGroup = {
      Name?: string;

      FirewallRules?: AWS.Route53Resolver.FirewallRuleGroup.FirewallRule[];

      Tags?: Tag[];
    };

    export namespace FirewallRuleGroup {
      export type FirewallRule = {
        FirewallDomainListId: string;

        Priority: number;

        Action: string;

        BlockResponse?: string;

        BlockOverrideDomain?: string;

        BlockOverrideDnsType?: string;

        BlockOverrideTtl?: number;
      };
    }

    export type ResolverRule = {
      ResolverEndpointId?: string;

      DomainName: string;

      RuleType: string;

      TargetIps?: AWS.Route53Resolver.ResolverRule.TargetAddress[];

      Tags?: Tag[];

      Name?: string;
    };

    export namespace ResolverRule {
      export type TargetAddress = {
        Ip: string;

        Port?: string;
      };
    }

    export type ResolverEndpoint = {
      IpAddresses: AWS.Route53Resolver.ResolverEndpoint.IpAddressRequest[];

      Direction: string;

      SecurityGroupIds: string[];

      Tags?: Tag[];

      Name?: string;
    };

    export namespace ResolverEndpoint {
      export type IpAddressRequest = {
        Ip?: string;

        SubnetId: string;
      };
    }

    export type ResolverQueryLoggingConfig = {
      Name?: string;

      DestinationArn?: string;
    };

    export type FirewallRuleGroupAssociation = {
      FirewallRuleGroupId: string;

      VpcId: string;

      Name?: string;

      Priority: number;

      MutationProtection?: string;

      Tags?: Tag[];
    };

    export type ResolverQueryLoggingConfigAssociation = {
      ResolverQueryLogConfigId?: string;

      ResourceId?: string;
    };

    export type ResolverDNSSECConfig = {
      ResourceId?: string;
    };

    export type FirewallDomainList = {
      Name?: string;

      Domains?: string[];

      DomainFileUrl?: string;

      Tags?: Tag[];
    };

    export type ResolverRuleAssociation = {
      VPCId: string;

      ResolverRuleId: string;

      Name?: string;
    };
  }

  export namespace SNS {
    export type Topic = {
      ContentBasedDeduplication?: boolean;

      DisplayName?: string;

      FifoTopic?: boolean;

      KmsMasterKeyId?: string;

      Subscription?: AWS.SNS.Topic.Subscription[];

      Tags?: Tag[];

      TopicName?: string;
    };

    export namespace Topic {
      export type Subscription = {
        Endpoint: string;

        Protocol: string;
      };
    }

    export type Subscription = {
      DeliveryPolicy?: JSONString;

      Endpoint?: string;

      FilterPolicy?: JSONString;

      Protocol: string;

      RawMessageDelivery?: boolean;

      RedrivePolicy?: JSONString;

      Region?: string;

      SubscriptionRoleArn?: string;

      TopicArn: string;
    };

    export type TopicPolicy = {
      PolicyDocument: JSONString;

      Topics: string[];
    };
  }

  export namespace Connect {
    export type QuickConnect = {
      InstanceArn: string;

      Name: string;

      Description?: string;

      QuickConnectConfig: AWS.Connect.QuickConnect.QuickConnectConfig;

      Tags?: Tag[];
    };

    export namespace QuickConnect {
      export type QueueQuickConnectConfig = {
        ContactFlowArn: string;

        QueueArn: string;
      };

      export type QuickConnectConfig = {
        QuickConnectType: string;

        PhoneConfig?: AWS.Connect.QuickConnect.PhoneNumberQuickConnectConfig;

        QueueConfig?: AWS.Connect.QuickConnect.QueueQuickConnectConfig;

        UserConfig?: AWS.Connect.QuickConnect.UserQuickConnectConfig;
      };

      export type UserQuickConnectConfig = {
        ContactFlowArn: string;

        UserArn: string;
      };

      export type PhoneNumberQuickConnectConfig = {
        PhoneNumber: string;
      };
    }
  }

  export namespace ApiGatewayV2 {
    export type ApiGatewayManagedOverrides = {
      Integration?: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.IntegrationOverrides;

      Stage?: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.StageOverrides;

      ApiId: string;

      Route?: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteOverrides;
    };

    export namespace ApiGatewayManagedOverrides {
      export type AccessLogSettings = {
        Format?: string;

        DestinationArn?: string;
      };

      export type RouteOverrides = {
        Target?: string;

        AuthorizerId?: string;

        OperationName?: string;

        AuthorizationScopes?: string[];

        AuthorizationType?: string;
      };

      export type StageOverrides = {
        Description?: string;

        AccessLogSettings?: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.AccessLogSettings;

        AutoDeploy?: boolean;

        RouteSettings?: JSONString;

        StageVariables?: JSONString;

        DefaultRouteSettings?: AWS.ApiGatewayV2.ApiGatewayManagedOverrides.RouteSettings;
      };

      export type RouteSettings = {
        LoggingLevel?: string;

        DataTraceEnabled?: boolean;

        ThrottlingBurstLimit?: number;

        DetailedMetricsEnabled?: boolean;

        ThrottlingRateLimit?: number;
      };

      export type IntegrationOverrides = {
        Description?: string;

        PayloadFormatVersion?: string;

        TimeoutInMillis?: number;

        IntegrationMethod?: string;
      };
    }

    export type Integration = {
      Description?: string;

      TemplateSelectionExpression?: string;

      ConnectionType?: string;

      ResponseParameters?: JSONString;

      IntegrationMethod?: string;

      PassthroughBehavior?: string;

      RequestParameters?: JSONString;

      ConnectionId?: string;

      IntegrationUri?: string;

      PayloadFormatVersion?: string;

      CredentialsArn?: string;

      RequestTemplates?: JSONString;

      TimeoutInMillis?: number;

      TlsConfig?: AWS.ApiGatewayV2.Integration.TlsConfig;

      ContentHandlingStrategy?: string;

      IntegrationSubtype?: string;

      ApiId: string;

      IntegrationType: string;
    };

    export namespace Integration {
      export type ResponseParameterList = {
        ResponseParameters?: AWS.ApiGatewayV2.Integration.ResponseParameter[];
      };

      export type TlsConfig = {
        ServerNameToVerify?: string;
      };

      export type ResponseParameter = {
        Destination: string;

        Source: string;
      };
    }

    export type Route = {
      Target?: string;

      RouteResponseSelectionExpression?: string;

      AuthorizerId?: string;

      RequestModels?: JSONString;

      OperationName?: string;

      AuthorizationScopes?: string[];

      ApiKeyRequired?: boolean;

      RouteKey: string;

      AuthorizationType?: string;

      ModelSelectionExpression?: string;

      ApiId: string;

      RequestParameters?: JSONString;
    };

    export namespace Route {
      export type ParameterConstraints = {
        Required: boolean;
      };
    }

    export type Stage = {
      ClientCertificateId?: string;

      DeploymentId?: string;

      Description?: string;

      AccessLogSettings?: AWS.ApiGatewayV2.Stage.AccessLogSettings;

      AutoDeploy?: boolean;

      RouteSettings?: JSONString;

      StageName: string;

      StageVariables?: JSONString;

      AccessPolicyId?: string;

      ApiId: string;

      DefaultRouteSettings?: AWS.ApiGatewayV2.Stage.RouteSettings;

      Tags?: JSONString;
    };

    export namespace Stage {
      export type AccessLogSettings = {
        Format?: string;

        DestinationArn?: string;
      };

      export type RouteSettings = {
        LoggingLevel?: string;

        DataTraceEnabled?: boolean;

        ThrottlingBurstLimit?: number;

        DetailedMetricsEnabled?: boolean;

        ThrottlingRateLimit?: number;
      };
    }

    export type DomainName = {
      MutualTlsAuthentication?: AWS.ApiGatewayV2.DomainName.MutualTlsAuthentication;

      DomainName: string;

      DomainNameConfigurations?: AWS.ApiGatewayV2.DomainName.DomainNameConfiguration[];

      Tags?: JSONString;
    };

    export namespace DomainName {
      export type MutualTlsAuthentication = {
        TruststoreVersion?: string;

        TruststoreUri?: string;
      };

      export type DomainNameConfiguration = {
        SecurityPolicy?: string;

        EndpointType?: string;

        CertificateName?: string;

        CertificateArn?: string;
      };
    }

    export type Authorizer = {
      IdentityValidationExpression?: string;

      AuthorizerUri?: string;

      AuthorizerCredentialsArn?: string;

      AuthorizerType: string;

      JwtConfiguration?: AWS.ApiGatewayV2.Authorizer.JWTConfiguration;

      AuthorizerResultTtlInSeconds?: number;

      IdentitySource?: string[];

      AuthorizerPayloadFormatVersion?: string;

      EnableSimpleResponses?: boolean;

      ApiId: string;

      Name: string;
    };

    export namespace Authorizer {
      export type JWTConfiguration = {
        Issuer?: string;

        Audience?: string[];
      };
    }

    export type RouteResponse = {
      RouteResponseKey: string;

      ResponseParameters?: JSONString;

      RouteId: string;

      ModelSelectionExpression?: string;

      ApiId: string;

      ResponseModels?: JSONString;
    };

    export namespace RouteResponse {
      export type ParameterConstraints = {
        Required: boolean;
      };
    }

    export type Api = {
      RouteSelectionExpression?: string;

      BodyS3Location?: AWS.ApiGatewayV2.Api.BodyS3Location;

      Description?: string;

      BasePath?: string;

      FailOnWarnings?: boolean;

      DisableExecuteApiEndpoint?: boolean;

      DisableSchemaValidation?: boolean;

      Name?: string;

      Target?: string;

      CredentialsArn?: string;

      CorsConfiguration?: AWS.ApiGatewayV2.Api.Cors;

      Version?: string;

      ProtocolType?: string;

      RouteKey?: string;

      Body?: JSONString;

      Tags?: JSONString;

      ApiKeySelectionExpression?: string;
    };

    export namespace Api {
      export type Cors = {
        AllowOrigins?: string[];

        AllowCredentials?: boolean;

        ExposeHeaders?: string[];

        AllowHeaders?: string[];

        MaxAge?: number;

        AllowMethods?: string[];
      };

      export type BodyS3Location = {
        Etag?: string;

        Bucket?: string;

        Version?: string;

        Key?: string;
      };
    }

    export type Deployment = {
      Description?: string;

      StageName?: string;

      ApiId: string;
    };

    export type Model = {
      Description?: string;

      ContentType?: string;

      Schema: JSONString;

      ApiId: string;

      Name: string;
    };

    export type IntegrationResponse = {
      ResponseTemplates?: JSONString;

      TemplateSelectionExpression?: string;

      ResponseParameters?: JSONString;

      ContentHandlingStrategy?: string;

      IntegrationId: string;

      IntegrationResponseKey: string;

      ApiId: string;
    };

    export type VpcLink = {
      SubnetIds: string[];

      SecurityGroupIds?: string[];

      Tags?: JSONString;

      Name: string;
    };

    export type ApiMapping = {
      DomainName: string;

      Stage: string;

      ApiMappingKey?: string;

      ApiId: string;
    };
  }

  export namespace CodePipeline {
    export type Webhook = {
      AuthenticationConfiguration: AWS.CodePipeline.Webhook.WebhookAuthConfiguration;

      Filters: AWS.CodePipeline.Webhook.WebhookFilterRule[];

      Authentication: string;

      TargetPipeline: string;

      TargetAction: string;

      Name?: string;

      TargetPipelineVersion: number;

      RegisterWithThirdParty?: boolean;
    };

    export namespace Webhook {
      export type WebhookFilterRule = {
        JsonPath: string;

        MatchEquals?: string;
      };

      export type WebhookAuthConfiguration = {
        AllowedIPRange?: string;

        SecretToken?: string;
      };
    }

    export type Pipeline = {
      ArtifactStore?: AWS.CodePipeline.Pipeline.ArtifactStore;

      ArtifactStores?: AWS.CodePipeline.Pipeline.ArtifactStoreMap[];

      DisableInboundStageTransitions?: AWS.CodePipeline.Pipeline.StageTransition[];

      Name?: string;

      RestartExecutionOnUpdate?: boolean;

      RoleArn: string;

      Stages: AWS.CodePipeline.Pipeline.StageDeclaration[];

      Tags?: Tag[];
    };

    export namespace Pipeline {
      export type OutputArtifact = {
        Name: string;
      };

      export type StageTransition = {
        Reason: string;

        StageName: string;
      };

      export type InputArtifact = {
        Name: string;
      };

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

        Configuration?: JSONString;

        InputArtifacts?: AWS.CodePipeline.Pipeline.InputArtifact[];

        Name: string;

        Namespace?: string;

        OutputArtifacts?: AWS.CodePipeline.Pipeline.OutputArtifact[];

        Region?: string;

        RoleArn?: string;

        RunOrder?: number;
      };

      export type StageDeclaration = {
        Actions: AWS.CodePipeline.Pipeline.ActionDeclaration[];

        Blockers?: AWS.CodePipeline.Pipeline.BlockerDeclaration[];

        Name: string;
      };

      export type ArtifactStore = {
        EncryptionKey?: AWS.CodePipeline.Pipeline.EncryptionKey;

        Location: string;

        Type: string;
      };

      export type ActionTypeId = {
        Category: string;

        Owner: string;

        Provider: string;

        Version: string;
      };
    }

    export type CustomActionType = {
      Category: string;

      ConfigurationProperties?: AWS.CodePipeline.CustomActionType.ConfigurationProperties[];

      InputArtifactDetails: AWS.CodePipeline.CustomActionType.ArtifactDetails;

      OutputArtifactDetails: AWS.CodePipeline.CustomActionType.ArtifactDetails;

      Provider: string;

      Settings?: AWS.CodePipeline.CustomActionType.Settings;

      Tags?: Tag[];

      Version: string;
    };

    export namespace CustomActionType {
      export type ArtifactDetails = {
        MaximumCount: number;

        MinimumCount: number;
      };

      export type ConfigurationProperties = {
        Description?: string;

        Key: boolean;

        Name: string;

        Queryable?: boolean;

        Required: boolean;

        Secret: boolean;

        Type?: string;
      };

      export type Settings = {
        EntityUrlTemplate?: string;

        ExecutionUrlTemplate?: string;

        RevisionUrlTemplate?: string;

        ThirdPartyConfigurationUrl?: string;
      };
    }
  }

  export namespace MSK {
    export type Cluster = {
      BrokerNodeGroupInfo: AWS.MSK.Cluster.BrokerNodeGroupInfo;

      EnhancedMonitoring?: string;

      KafkaVersion: string;

      NumberOfBrokerNodes: number;

      EncryptionInfo?: AWS.MSK.Cluster.EncryptionInfo;

      OpenMonitoring?: AWS.MSK.Cluster.OpenMonitoring;

      ClusterName: string;

      ClientAuthentication?: AWS.MSK.Cluster.ClientAuthentication;

      LoggingInfo?: AWS.MSK.Cluster.LoggingInfo;

      Tags?: JSONString;

      ConfigurationInfo?: AWS.MSK.Cluster.ConfigurationInfo;
    };

    export namespace Cluster {
      export type S3 = {
        Bucket?: string;

        Enabled: boolean;

        Prefix?: string;
      };

      export type CloudWatchLogs = {
        LogGroup?: string;

        Enabled: boolean;
      };

      export type EncryptionAtRest = {
        DataVolumeKMSKeyId: string;
      };

      export type BrokerLogs = {
        S3?: AWS.MSK.Cluster.S3;

        Firehose?: AWS.MSK.Cluster.Firehose;

        CloudWatchLogs?: AWS.MSK.Cluster.CloudWatchLogs;
      };

      export type EncryptionInTransit = {
        ClientBroker?: string;

        InCluster?: boolean;
      };

      export type Prometheus = {
        JmxExporter?: AWS.MSK.Cluster.JmxExporter;

        NodeExporter?: AWS.MSK.Cluster.NodeExporter;
      };

      export type LoggingInfo = {
        BrokerLogs: AWS.MSK.Cluster.BrokerLogs;
      };

      export type EncryptionInfo = {
        EncryptionAtRest?: AWS.MSK.Cluster.EncryptionAtRest;

        EncryptionInTransit?: AWS.MSK.Cluster.EncryptionInTransit;
      };

      export type Iam = {
        Enabled: boolean;
      };

      export type Sasl = {
        Iam?: AWS.MSK.Cluster.Iam;

        Scram?: AWS.MSK.Cluster.Scram;
      };

      export type ConfigurationInfo = {
        Revision: number;

        Arn: string;
      };

      export type BrokerNodeGroupInfo = {
        SecurityGroups?: string[];

        ClientSubnets: string[];

        StorageInfo?: AWS.MSK.Cluster.StorageInfo;

        BrokerAZDistribution?: string;

        InstanceType: string;
      };

      export type Scram = {
        Enabled: boolean;
      };

      export type JmxExporter = {
        EnabledInBroker: boolean;
      };

      export type StorageInfo = {
        EBSStorageInfo?: AWS.MSK.Cluster.EBSStorageInfo;
      };

      export type NodeExporter = {
        EnabledInBroker: boolean;
      };

      export type EBSStorageInfo = {
        VolumeSize?: number;
      };

      export type Firehose = {
        DeliveryStream?: string;

        Enabled: boolean;
      };

      export type ClientAuthentication = {
        Sasl?: AWS.MSK.Cluster.Sasl;

        Tls?: AWS.MSK.Cluster.Tls;
      };

      export type Tls = {
        CertificateAuthorityArnList?: string[];
      };

      export type OpenMonitoring = {
        Prometheus: AWS.MSK.Cluster.Prometheus;
      };
    }
  }

  export namespace NimbleStudio {
    export type StudioComponent = {
      Configuration?: AWS.NimbleStudio.StudioComponent.StudioComponentConfiguration;

      Description?: string;

      InitializationScripts?: AWS.NimbleStudio.StudioComponent.StudioComponentInitializationScript[];

      Name: string;

      ScriptParameters?: AWS.NimbleStudio.StudioComponent.ScriptParameterKeyValue[];

      Ec2SecurityGroupIds?: string[];

      StudioId: string;

      Subtype?: string;

      Type: string;

      Tags?: Record<string, string>;
    };

    export namespace StudioComponent {
      export type LicenseServiceConfiguration = {
        Endpoint?: string;
      };

      export type ScriptParameterKeyValue = {
        Key?: string;

        Value?: string;
      };

      export type ActiveDirectoryConfiguration = {
        ComputerAttributes?: AWS.NimbleStudio.StudioComponent.ActiveDirectoryComputerAttribute[];

        DirectoryId?: string;

        OrganizationalUnitDistinguishedName?: string;
      };

      export type ActiveDirectoryComputerAttribute = {
        Name?: string;

        Value?: string;
      };

      export type StudioComponentConfiguration = {
        ActiveDirectoryConfiguration?: AWS.NimbleStudio.StudioComponent.ActiveDirectoryConfiguration;

        ComputeFarmConfiguration?: AWS.NimbleStudio.StudioComponent.ComputeFarmConfiguration;

        LicenseServiceConfiguration?: AWS.NimbleStudio.StudioComponent.LicenseServiceConfiguration;

        SharedFileSystemConfiguration?: AWS.NimbleStudio.StudioComponent.SharedFileSystemConfiguration;
      };

      export type StudioComponentInitializationScript = {
        LaunchProfileProtocolVersion?: string;

        Platform?: string;

        RunContext?: string;

        Script?: string;
      };

      export type ComputeFarmConfiguration = {
        ActiveDirectoryUser?: string;

        Endpoint?: string;
      };

      export type SharedFileSystemConfiguration = {
        Endpoint?: string;

        FileSystemId?: string;

        LinuxMountPoint?: string;

        ShareName?: string;

        WindowsMountDrive?: string;
      };
    }

    export type LaunchProfile = {
      Description?: string;

      Name: string;

      Ec2SubnetIds: string[];

      StreamConfiguration: AWS.NimbleStudio.LaunchProfile.StreamConfiguration;

      StudioComponentIds: string[];

      LaunchProfileProtocolVersions: string[];

      StudioId: string;

      Tags?: Record<string, string>;
    };

    export namespace LaunchProfile {
      export type StreamConfiguration = {
        ClipboardMode: string;

        StreamingImageIds: string[];

        Ec2InstanceTypes: string[];

        MaxSessionLengthInMinutes?: number;
      };
    }

    export type Studio = {
      AdminRoleArn: string;

      DisplayName: string;

      StudioName: string;

      UserRoleArn: string;

      StudioEncryptionConfiguration?: AWS.NimbleStudio.Studio.StudioEncryptionConfiguration;

      Tags?: Record<string, string>;
    };

    export namespace Studio {
      export type StudioEncryptionConfiguration = {
        KeyArn?: string;

        KeyType: string;
      };
    }

    export type StreamingImage = {
      StudioId: string;

      Ec2ImageId: string;

      Name: string;

      Description?: string;

      Tags?: Record<string, string>;
    };
  }

  export namespace GlobalAccelerator {
    export type EndpointGroup = {
      ListenerArn: string;

      EndpointGroupRegion: string;

      EndpointConfigurations?: AWS.GlobalAccelerator.EndpointGroup.EndpointConfiguration[];

      TrafficDialPercentage?: number;

      HealthCheckPort?: number;

      HealthCheckProtocol?: string;

      HealthCheckPath?: string;

      HealthCheckIntervalSeconds?: number;

      ThresholdCount?: number;

      PortOverrides?: AWS.GlobalAccelerator.EndpointGroup.PortOverride[];
    };

    export namespace EndpointGroup {
      export type PortOverride = {
        ListenerPort: number;

        EndpointPort: number;
      };

      export type EndpointConfiguration = {
        EndpointId: string;

        Weight?: number;

        ClientIPPreservationEnabled?: boolean;
      };
    }

    export type Listener = {
      AcceleratorArn: string;

      PortRanges: AWS.GlobalAccelerator.Listener.PortRange[];

      Protocol: string;

      ClientAffinity?: string;
    };

    export namespace Listener {
      export type PortRange = {
        FromPort: number;

        ToPort: number;
      };
    }

    export type Accelerator = {
      Name: string;

      IpAddressType?: string;

      IpAddresses?: string[];

      Enabled?: boolean;

      Tags?: Tag[];
    };
  }

  export namespace IVS {
    export type RecordingConfiguration = {
      Name?: string;

      DestinationConfiguration: AWS.IVS.RecordingConfiguration.DestinationConfiguration;

      Tags?: Tag[];
    };

    export namespace RecordingConfiguration {
      export type DestinationConfiguration = {
        S3: AWS.IVS.RecordingConfiguration.S3DestinationConfiguration;
      };

      export type S3DestinationConfiguration = {
        BucketName: string;
      };
    }

    export type Channel = {
      Name?: string;

      Authorized?: boolean;

      LatencyMode?: string;

      Type?: string;

      Tags?: Tag[];

      RecordingConfigurationArn?: string;
    };

    export type PlaybackKeyPair = {
      Name?: string;

      PublicKeyMaterial: string;

      Tags?: Tag[];
    };

    export type StreamKey = {
      ChannelArn: string;

      Tags?: Tag[];
    };
  }

  export namespace AmazonMQ {
    export type Broker = {
      SecurityGroups?: string[];

      StorageType?: string;

      EngineVersion: string;

      Configuration?: AWS.AmazonMQ.Broker.ConfigurationId;

      AuthenticationStrategy?: string;

      MaintenanceWindowStartTime?: AWS.AmazonMQ.Broker.MaintenanceWindow;

      HostInstanceType: string;

      AutoMinorVersionUpgrade: boolean;

      Users: AWS.AmazonMQ.Broker.User[];

      Logs?: AWS.AmazonMQ.Broker.LogList;

      SubnetIds?: string[];

      BrokerName: string;

      LdapServerMetadata?: AWS.AmazonMQ.Broker.LdapServerMetadata;

      DeploymentMode: string;

      EngineType: string;

      PubliclyAccessible: boolean;

      EncryptionOptions?: AWS.AmazonMQ.Broker.EncryptionOptions;

      Tags?: AWS.AmazonMQ.Broker.TagsEntry[];
    };

    export namespace Broker {
      export type LogList = {
        Audit?: boolean;

        General?: boolean;
      };

      export type User = {
        Username: string;

        Groups?: string[];

        ConsoleAccess?: boolean;

        Password: string;
      };

      export type LdapServerMetadata = {
        Hosts: string[];

        UserRoleName?: string;

        UserSearchMatching: string;

        RoleName?: string;

        UserBase: string;

        UserSearchSubtree?: boolean;

        RoleSearchMatching: string;

        ServiceAccountUsername: string;

        RoleBase: string;

        ServiceAccountPassword: string;

        RoleSearchSubtree?: boolean;
      };

      export type EncryptionOptions = {
        KmsKeyId?: string;

        UseAwsOwnedKey: boolean;
      };

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
    }

    export type Configuration = {
      EngineVersion: string;

      Description?: string;

      AuthenticationStrategy?: string;

      EngineType: string;

      Data: string;

      Tags?: AWS.AmazonMQ.Configuration.TagsEntry[];

      Name: string;
    };

    export namespace Configuration {
      export type TagsEntry = {
        Value: string;

        Key: string;
      };
    }

    export type ConfigurationAssociation = {
      Broker: string;

      Configuration: AWS.AmazonMQ.ConfigurationAssociation.ConfigurationId;
    };

    export namespace ConfigurationAssociation {
      export type ConfigurationId = {
        Revision: number;

        Id: string;
      };
    }
  }

  export namespace DataPipeline {
    export type Pipeline = {
      Activate?: boolean;

      Description?: string;

      Name: string;

      ParameterObjects: AWS.DataPipeline.Pipeline.ParameterObject[];

      ParameterValues?: AWS.DataPipeline.Pipeline.ParameterValue[];

      PipelineObjects?: AWS.DataPipeline.Pipeline.PipelineObject[];

      PipelineTags?: AWS.DataPipeline.Pipeline.PipelineTag[];
    };

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

        RefValue?: string;

        StringValue?: string;
      };
    }
  }

  export namespace FIS {
    export type ExperimentTemplate = {
      Description: string;

      Targets: Record<
        string,
        AWS.FIS.ExperimentTemplate.ExperimentTemplateTarget
      >;

      Actions?: Record<
        string,
        AWS.FIS.ExperimentTemplate.ExperimentTemplateAction
      >;

      StopConditions: AWS.FIS.ExperimentTemplate.ExperimentTemplateStopCondition[];

      RoleArn: string;

      Tags: Record<string, string>;
    };

    export namespace ExperimentTemplate {
      export type ExperimentTemplateStopCondition = {
        Source: string;

        Value?: string;
      };

      export type ExperimentTemplateTarget = {
        ResourceType: string;

        ResourceArns?: string[];

        ResourceTags?: Record<string, string>;

        Filters?: AWS.FIS.ExperimentTemplate.ExperimentTemplateTargetFilter[];

        SelectionMode: string;
      };

      export type ExperimentTemplateAction = {
        ActionId: string;

        Description?: string;

        Parameters?: Record<string, string>;

        Targets?: Record<string, string>;

        StartAfter?: string[];
      };

      export type ExperimentTemplateTargetFilter = {
        Path: string;

        Values: string[];
      };
    }
  }

  export namespace IAM {
    export type Role = {
      AssumeRolePolicyDocument: JSONString;

      Description?: string;

      ManagedPolicyArns?: string[];

      MaxSessionDuration?: number;

      Path?: string;

      PermissionsBoundary?: string;

      Policies?: AWS.IAM.Role.Policy[];

      RoleName?: string;

      Tags?: Tag[];
    };

    export namespace Role {
      export type Policy = {
        PolicyDocument: JSONString;

        PolicyName: string;
      };
    }

    export type User = {
      Groups?: string[];

      LoginProfile?: AWS.IAM.User.LoginProfile;

      ManagedPolicyArns?: string[];

      Path?: string;

      PermissionsBoundary?: string;

      Policies?: AWS.IAM.User.Policy[];

      Tags?: Tag[];

      UserName?: string;
    };

    export namespace User {
      export type LoginProfile = {
        Password: string;

        PasswordResetRequired?: boolean;
      };

      export type Policy = {
        PolicyDocument: JSONString;

        PolicyName: string;
      };
    }

    export type Group = {
      GroupName?: string;

      ManagedPolicyArns?: string[];

      Path?: string;

      Policies?: AWS.IAM.Group.Policy[];
    };

    export namespace Group {
      export type Policy = {
        PolicyDocument: JSONString;

        PolicyName: string;
      };
    }

    export type VirtualMFADevice = {
      VirtualMfaDeviceName?: string;

      Path?: string;

      Users: string[];

      Tags?: Tag[];
    };

    export type SAMLProvider = {
      Name?: string;

      SamlMetadataDocument: string;

      Tags?: Tag[];
    };

    export type ServerCertificate = {
      CertificateBody?: string;

      CertificateChain?: string;

      ServerCertificateName?: string;

      Path?: string;

      PrivateKey?: string;

      Tags?: Tag[];
    };

    export type Policy = {
      Groups?: string[];

      PolicyDocument: JSONString;

      PolicyName: string;

      Roles?: string[];

      Users?: string[];
    };

    export type ServiceLinkedRole = {
      CustomSuffix?: string;

      Description?: string;

      AWSServiceName: string;
    };

    export type AccessKey = {
      Serial?: number;

      Status?: string;

      UserName: string;
    };

    export type OIDCProvider = {
      ClientIdList?: string[];

      Url?: string;

      ThumbprintList: string[];

      Tags?: Tag[];
    };

    export type UserToGroupAddition = {
      GroupName: string;

      Users: string[];
    };

    export type InstanceProfile = {
      InstanceProfileName?: string;

      Path?: string;

      Roles: string[];
    };

    export type ManagedPolicy = {
      Description?: string;

      Groups?: string[];

      ManagedPolicyName?: string;

      Path?: string;

      PolicyDocument: JSONString;

      Roles?: string[];

      Users?: string[];
    };
  }

  export namespace FraudDetector {
    export type Detector = {
      DetectorId: string;

      DetectorVersionStatus?: string;

      RuleExecutionMode?: string;

      Tags?: Tag[];

      Description?: string;

      Rules: AWS.FraudDetector.Detector.Rule[];

      EventType: AWS.FraudDetector.Detector.EventType;

      AssociatedModels?: AWS.FraudDetector.Detector.Model[];
    };

    export namespace Detector {
      export type Label = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type EntityType = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type Model = {
        Arn?: string;
      };

      export type Outcome = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type EventVariable = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        DataSource?: string;

        DataType?: string;

        DefaultValue?: string;

        VariableType?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type Rule = {
        RuleId?: string;

        RuleVersion?: string;

        DetectorId?: string;

        Expression?: string;

        Language?: string;

        Outcomes?: AWS.FraudDetector.Detector.Outcome[];

        Arn?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type EventType = {
        Name?: string;

        Inline?: boolean;

        Tags?: Tag[];

        Description?: string;

        EventVariables?: AWS.FraudDetector.Detector.EventVariable[];

        Labels?: AWS.FraudDetector.Detector.Label[];

        EntityTypes?: AWS.FraudDetector.Detector.EntityType[];

        Arn?: string;

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };
    }

    export type EventType = {
      Name: string;

      Tags?: Tag[];

      Description?: string;

      EventVariables: AWS.FraudDetector.EventType.EventVariable[];

      Labels: AWS.FraudDetector.EventType.Label[];

      EntityTypes: AWS.FraudDetector.EventType.EntityType[];
    };

    export namespace EventType {
      export type EntityType = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type EventVariable = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        DataSource?: string;

        DataType?: string;

        DefaultValue?: string;

        VariableType?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };

      export type Label = {
        Arn?: string;

        Inline?: boolean;

        Name?: string;

        Description?: string;

        Tags?: Tag[];

        CreatedTime?: string;

        LastUpdatedTime?: string;
      };
    }

    export type EntityType = {
      Name: string;

      Tags?: Tag[];

      Description?: string;
    };

    export type Outcome = {
      Name: string;

      Tags?: Tag[];

      Description?: string;
    };

    export type Label = {
      Name: string;

      Tags?: Tag[];

      Description?: string;
    };

    export type Variable = {
      Name: string;

      DataSource: string;

      DataType: string;

      DefaultValue: string;

      Description?: string;

      Tags?: Tag[];

      VariableType?: string;
    };
  }

  export namespace ServiceCatalog {
    export type CloudFormationProvisionedProduct = {
      AcceptLanguage?: string;

      NotificationArns?: string[];

      PathId?: string;

      PathName?: string;

      ProductId?: string;

      ProductName?: string;

      ProvisionedProductName?: string;

      ProvisioningArtifactId?: string;

      ProvisioningArtifactName?: string;

      ProvisioningParameters?: AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningParameter[];

      ProvisioningPreferences?: AWS.ServiceCatalog.CloudFormationProvisionedProduct.ProvisioningPreferences;

      Tags?: Tag[];
    };

    export namespace CloudFormationProvisionedProduct {
      export type ProvisioningParameter = {
        Key: string;

        Value: string;
      };

      export type ProvisioningPreferences = {
        StackSetAccounts?: string[];

        StackSetFailureToleranceCount?: number;

        StackSetFailureTolerancePercentage?: number;

        StackSetMaxConcurrencyCount?: number;

        StackSetMaxConcurrencyPercentage?: number;

        StackSetOperationType?: string;

        StackSetRegions?: string[];
      };
    }

    export type ServiceAction = {
      AcceptLanguage?: string;

      Name: string;

      DefinitionType: string;

      Definition: AWS.ServiceCatalog.ServiceAction.DefinitionParameter[];

      Description?: string;
    };

    export namespace ServiceAction {
      export type DefinitionParameter = {
        Key: string;

        Value: string;
      };
    }

    export type CloudFormationProduct = {
      ReplaceProvisioningArtifacts?: boolean;

      Owner: string;

      SupportDescription?: string;

      Description?: string;

      Distributor?: string;

      SupportEmail?: string;

      AcceptLanguage?: string;

      SupportUrl?: string;

      Tags?: Tag[];

      Name: string;

      ProvisioningArtifactParameters: AWS.ServiceCatalog.CloudFormationProduct.ProvisioningArtifactProperties[];
    };

    export namespace CloudFormationProduct {
      export type ProvisioningArtifactProperties = {
        Description?: string;

        DisableTemplateValidation?: boolean;

        Info: JSONString;

        Name?: string;
      };
    }

    export type PortfolioShare = {
      AccountId: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      ShareTagOptions?: boolean;
    };

    export type ResourceUpdateConstraint = {
      Description?: string;

      AcceptLanguage?: string;

      TagUpdateOnProvisionedProduct: string;

      PortfolioId: string;

      ProductId: string;
    };

    export type TagOption = {
      Active?: boolean;

      Value: string;

      Key: string;
    };

    export type PortfolioProductAssociation = {
      SourcePortfolioId?: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      ProductId: string;
    };

    export type AcceptedPortfolioShare = {
      AcceptLanguage?: string;

      PortfolioId: string;
    };

    export type LaunchTemplateConstraint = {
      Description?: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      ProductId: string;

      Rules: string;
    };

    export type Portfolio = {
      ProviderName: string;

      Description?: string;

      DisplayName: string;

      AcceptLanguage?: string;

      Tags?: Tag[];
    };

    export type LaunchNotificationConstraint = {
      Description?: string;

      NotificationArns: string[];

      AcceptLanguage?: string;

      PortfolioId: string;

      ProductId: string;
    };

    export type ServiceActionAssociation = {
      ProductId: string;

      ProvisioningArtifactId: string;

      ServiceActionId: string;
    };

    export type StackSetConstraint = {
      Description: string;

      StackInstanceControl: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      ProductId: string;

      RegionList: string[];

      AdminRole: string;

      AccountList: string[];

      ExecutionRole: string;
    };

    export type TagOptionAssociation = {
      TagOptionId: string;

      ResourceId: string;
    };

    export type PortfolioPrincipalAssociation = {
      PrincipalARN: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      PrincipalType: string;
    };

    export type LaunchRoleConstraint = {
      Description?: string;

      LocalRoleName?: string;

      AcceptLanguage?: string;

      PortfolioId: string;

      ProductId: string;

      RoleArn?: string;
    };
  }

  export namespace Location {
    export type PlaceIndex = {
      DataSource: string;

      DataSourceConfiguration?: AWS.Location.PlaceIndex.DataSourceConfiguration;

      Description?: string;

      IndexName: string;

      PricingPlan: string;
    };

    export namespace PlaceIndex {
      export type DataSourceConfiguration = {
        IntendedUse?: string;
      };
    }

    export type Map = {
      Configuration: AWS.Location.Map.MapConfiguration;

      Description?: string;

      MapName: string;

      PricingPlan: string;
    };

    export namespace Map {
      export type MapConfiguration = {
        Style: string;
      };
    }

    export type Tracker = {
      Description?: string;

      KmsKeyId?: string;

      PricingPlan: string;

      PricingPlanDataSource?: string;

      TrackerName: string;
    };

    export type GeofenceCollection = {
      CollectionName: string;

      Description?: string;

      KmsKeyId?: string;

      PricingPlan: string;

      PricingPlanDataSource?: string;
    };

    export type TrackerConsumer = {
      ConsumerArn: string;

      TrackerName: string;
    };

    export type RouteCalculator = {
      CalculatorName: string;

      DataSource: string;

      Description?: string;

      PricingPlan: string;
    };
  }

  export namespace LicenseManager {
    export type License = {
      ProductSKU?: string;

      Issuer: AWS.LicenseManager.License.IssuerData;

      LicenseName: string;

      ProductName: string;

      HomeRegion: string;

      Validity: AWS.LicenseManager.License.ValidityDateFormat;

      Entitlements: AWS.LicenseManager.License.Entitlement[];

      Beneficiary?: string;

      ConsumptionConfiguration: AWS.LicenseManager.License.ConsumptionConfiguration;

      LicenseMetadata?: AWS.LicenseManager.License.Metadata[];

      Status?: string;
    };

    export namespace License {
      export type ProvisionalConfiguration = {
        MaxTimeToLiveInMinutes: number;
      };

      export type ConsumptionConfiguration = {
        RenewType?: string;

        ProvisionalConfiguration?: AWS.LicenseManager.License.ProvisionalConfiguration;

        BorrowConfiguration?: AWS.LicenseManager.License.BorrowConfiguration;
      };

      export type IssuerData = {
        Name: string;

        SignKey?: string;
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

        Value?: string;

        MaxCount?: number;

        Overage?: boolean;

        Unit: string;

        AllowCheckIn?: boolean;
      };

      export type ValidityDateFormat = {
        Begin: string;

        End: string;
      };
    }

    export type Grant = {
      GrantName?: string;

      LicenseArn?: string;

      HomeRegion?: string;

      AllowedOperations?: string[];

      Principals?: string[];

      Status?: string;
    };
  }

  export namespace MediaStore {
    export type Container = {
      Policy?: string;

      MetricPolicy?: AWS.MediaStore.Container.MetricPolicy;

      ContainerName: string;

      CorsPolicy?: AWS.MediaStore.Container.CorsRule[];

      LifecyclePolicy?: string;

      AccessLoggingEnabled?: boolean;

      Tags?: Tag[];
    };

    export namespace Container {
      export type MetricPolicy = {
        ContainerLevelMetrics: string;

        MetricPolicyRules?: AWS.MediaStore.Container.MetricPolicyRule[];
      };

      export type MetricPolicyRule = {
        ObjectGroup: string;

        ObjectGroupName: string;
      };

      export type CorsRule = {
        AllowedMethods?: string[];

        AllowedOrigins?: string[];

        ExposeHeaders?: string[];

        MaxAgeSeconds?: number;

        AllowedHeaders?: string[];
      };
    }
  }

  export namespace Events {
    export type Rule = {
      Description?: string;

      EventBusName?: string;

      EventPattern?: JSONString;

      Name?: string;

      RoleArn?: string;

      ScheduleExpression?: string;

      State?: string;

      Targets?: AWS.Events.Rule.Target[];
    };

    export namespace Rule {
      export type BatchRetryStrategy = {
        Attempts?: number;
      };

      export type HttpParameters = {
        HeaderParameters?: Record<string, string>;

        PathParameterValues?: string[];

        QueryStringParameters?: Record<string, string>;
      };

      export type BatchArrayProperties = {
        Size?: number;
      };

      export type BatchParameters = {
        ArrayProperties?: AWS.Events.Rule.BatchArrayProperties;

        JobDefinition: string;

        JobName: string;

        RetryStrategy?: AWS.Events.Rule.BatchRetryStrategy;
      };

      export type RunCommandParameters = {
        RunCommandTargets: AWS.Events.Rule.RunCommandTarget[];
      };

      export type DeadLetterConfig = {
        Arn?: string;
      };

      export type NetworkConfiguration = {
        AwsVpcConfiguration?: AWS.Events.Rule.AwsVpcConfiguration;
      };

      export type RunCommandTarget = {
        Key: string;

        Values: string[];
      };

      export type InputTransformer = {
        InputPathsMap?: Record<string, string>;

        InputTemplate: string;
      };

      export type SqsParameters = {
        MessageGroupId: string;
      };

      export type RetryPolicy = {
        MaximumEventAgeInSeconds?: number;

        MaximumRetryAttempts?: number;
      };

      export type Target = {
        Arn: string;

        BatchParameters?: AWS.Events.Rule.BatchParameters;

        DeadLetterConfig?: AWS.Events.Rule.DeadLetterConfig;

        EcsParameters?: AWS.Events.Rule.EcsParameters;

        HttpParameters?: AWS.Events.Rule.HttpParameters;

        Id: string;

        Input?: string;

        InputPath?: string;

        InputTransformer?: AWS.Events.Rule.InputTransformer;

        KinesisParameters?: AWS.Events.Rule.KinesisParameters;

        RedshiftDataParameters?: AWS.Events.Rule.RedshiftDataParameters;

        RetryPolicy?: AWS.Events.Rule.RetryPolicy;

        RoleArn?: string;

        RunCommandParameters?: AWS.Events.Rule.RunCommandParameters;

        SqsParameters?: AWS.Events.Rule.SqsParameters;
      };

      export type KinesisParameters = {
        PartitionKeyPath: string;
      };

      export type RedshiftDataParameters = {
        Database: string;

        DbUser?: string;

        SecretManagerArn?: string;

        Sql: string;

        StatementName?: string;

        WithEvent?: boolean;
      };

      export type EcsParameters = {
        Group?: string;

        LaunchType?: string;

        NetworkConfiguration?: AWS.Events.Rule.NetworkConfiguration;

        PlatformVersion?: string;

        TaskCount?: number;

        TaskDefinitionArn: string;
      };

      export type AwsVpcConfiguration = {
        AssignPublicIp?: string;

        SecurityGroups?: string[];

        Subnets: string[];
      };
    }

    export type EventBusPolicy = {
      EventBusName?: string;

      Condition?: AWS.Events.EventBusPolicy.Condition;

      Action?: string;

      StatementId: string;

      Statement?: JSONString;

      Principal?: string;
    };

    export namespace EventBusPolicy {
      export type Condition = {
        Type?: string;

        Value?: string;

        Key?: string;
      };
    }

    export type ApiDestination = {
      Name?: string;

      Description?: string;

      ConnectionArn: string;

      InvocationRateLimitPerSecond?: number;

      InvocationEndpoint: string;

      HttpMethod: string;
    };

    export type Archive = {
      ArchiveName?: string;

      SourceArn: string;

      Description?: string;

      EventPattern?: JSONString;

      RetentionDays?: number;
    };

    export type Connection = {
      Name?: string;

      Description?: string;

      AuthorizationType: string;

      AuthParameters: JSONString;
    };

    export type EventBus = {
      EventSourceName?: string;

      Name: string;
    };
  }

  export namespace Signer {
    export type SigningProfile = {
      SignatureValidityPeriod?: AWS.Signer.SigningProfile.SignatureValidityPeriod;

      PlatformId: string;

      Tags?: Tag[];
    };

    export namespace SigningProfile {
      export type SignatureValidityPeriod = {
        Value?: number;

        Type?: string;
      };
    }

    export type ProfilePermission = {
      ProfileName: string;

      ProfileVersion?: string;

      Action: string;

      Principal: string;

      StatementId: string;
    };
  }

  export namespace Kendra {
    export type DataSource = {
      Name: string;

      IndexId: string;

      Type: string;

      DataSourceConfiguration?: AWS.Kendra.DataSource.DataSourceConfiguration;

      Description?: string;

      Schedule?: string;

      RoleArn?: string;

      Tags?: Tag[];
    };

    export namespace DataSource {
      export type ConfluenceAttachmentToIndexFieldMapping = {
        DataSourceFieldName: string;

        DateFieldFormat?: string;

        IndexFieldName: string;
      };

      export type SalesforceStandardObjectConfiguration = {
        Name: string;

        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type SalesforceChatterFeedConfiguration = {
        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

        IncludeFilterTypes?: string[];
      };

      export type SalesforceConfiguration = {
        ServerUrl: string;

        SecretArn: string;

        StandardObjectConfigurations?: AWS.Kendra.DataSource.SalesforceStandardObjectConfiguration[];

        KnowledgeArticleConfiguration?: AWS.Kendra.DataSource.SalesforceKnowledgeArticleConfiguration;

        ChatterFeedConfiguration?: AWS.Kendra.DataSource.SalesforceChatterFeedConfiguration;

        CrawlAttachments?: boolean;

        StandardObjectAttachmentConfiguration?: AWS.Kendra.DataSource.SalesforceStandardObjectAttachmentConfiguration;

        IncludeAttachmentFilePatterns?: string[];

        ExcludeAttachmentFilePatterns?: string[];
      };

      export type ColumnConfiguration = {
        DocumentIdColumnName: string;

        DocumentDataColumnName: string;

        DocumentTitleColumnName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

        ChangeDetectingColumns: string[];
      };

      export type ServiceNowKnowledgeArticleConfiguration = {
        CrawlAttachments?: boolean;

        IncludeAttachmentFilePatterns?: string[];

        ExcludeAttachmentFilePatterns?: string[];

        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type ConfluenceSpaceConfiguration = {
        CrawlPersonalSpaces?: boolean;

        CrawlArchivedSpaces?: boolean;

        IncludeSpaces?: string[];

        ExcludeSpaces?: string[];

        SpaceFieldMappings?: AWS.Kendra.DataSource.ConfluenceSpaceToIndexFieldMapping[];
      };

      export type GoogleDriveConfiguration = {
        SecretArn: string;

        InclusionPatterns?: string[];

        ExclusionPatterns?: string[];

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

        ExcludeMimeTypes?: string[];

        ExcludeUserAccounts?: string[];

        ExcludeSharedDrives?: string[];
      };

      export type S3Path = {
        Bucket: string;

        Key: string;
      };

      export type ServiceNowConfiguration = {
        HostUrl: string;

        SecretArn: string;

        ServiceNowBuildVersion: string;

        KnowledgeArticleConfiguration?: AWS.Kendra.DataSource.ServiceNowKnowledgeArticleConfiguration;

        ServiceCatalogConfiguration?: AWS.Kendra.DataSource.ServiceNowServiceCatalogConfiguration;
      };

      export type ConfluenceConfiguration = {
        ServerUrl: string;

        SecretArn: string;

        Version: string;

        SpaceConfiguration?: AWS.Kendra.DataSource.ConfluenceSpaceConfiguration;

        PageConfiguration?: AWS.Kendra.DataSource.ConfluencePageConfiguration;

        BlogConfiguration?: AWS.Kendra.DataSource.ConfluenceBlogConfiguration;

        AttachmentConfiguration?: AWS.Kendra.DataSource.ConfluenceAttachmentConfiguration;

        VpcConfiguration?: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

        InclusionPatterns?: string[];

        ExclusionPatterns?: string[];
      };

      export type ConfluencePageToIndexFieldMapping = {
        DataSourceFieldName: string;

        DateFieldFormat?: string;

        IndexFieldName: string;
      };

      export type DatabaseConfiguration = {
        DatabaseEngineType: string;

        ConnectionConfiguration: AWS.Kendra.DataSource.ConnectionConfiguration;

        VpcConfiguration?: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

        ColumnConfiguration: AWS.Kendra.DataSource.ColumnConfiguration;

        AclConfiguration?: AWS.Kendra.DataSource.AclConfiguration;

        SqlConfiguration?: AWS.Kendra.DataSource.SqlConfiguration;
      };

      export type SqlConfiguration = {
        QueryIdentifiersEnclosingOption?: string;
      };

      export type S3DataSourceConfiguration = {
        BucketName: string;

        InclusionPrefixes?: string[];

        InclusionPatterns?: string[];

        ExclusionPatterns?: string[];

        DocumentsMetadataConfiguration?: AWS.Kendra.DataSource.DocumentsMetadataConfiguration;

        AccessControlListConfiguration?: AWS.Kendra.DataSource.AccessControlListConfiguration;
      };

      export type ConfluenceBlogConfiguration = {
        BlogFieldMappings?: AWS.Kendra.DataSource.ConfluenceBlogToIndexFieldMapping[];
      };

      export type ConfluencePageConfiguration = {
        PageFieldMappings?: AWS.Kendra.DataSource.ConfluencePageToIndexFieldMapping[];
      };

      export type ConnectionConfiguration = {
        DatabaseHost: string;

        DatabasePort: number;

        DatabaseName: string;

        TableName: string;

        SecretArn: string;
      };

      export type ServiceNowServiceCatalogConfiguration = {
        CrawlAttachments?: boolean;

        IncludeAttachmentFilePatterns?: string[];

        ExcludeAttachmentFilePatterns?: string[];

        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type SalesforceStandardObjectAttachmentConfiguration = {
        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type SalesforceCustomKnowledgeArticleTypeConfiguration = {
        Name: string;

        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type ConfluenceBlogToIndexFieldMapping = {
        DataSourceFieldName: string;

        DateFieldFormat?: string;

        IndexFieldName: string;
      };

      export type OneDriveUsers = {
        OneDriveUserList?: string[];

        OneDriveUserS3Path?: AWS.Kendra.DataSource.S3Path;
      };

      export type AclConfiguration = {
        AllowedGroupsColumnName: string;
      };

      export type SalesforceStandardKnowledgeArticleTypeConfiguration = {
        DocumentDataFieldName: string;

        DocumentTitleFieldName?: string;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];
      };

      export type ConfluenceAttachmentConfiguration = {
        CrawlAttachments?: boolean;

        AttachmentFieldMappings?: AWS.Kendra.DataSource.ConfluenceAttachmentToIndexFieldMapping[];
      };

      export type DataSourceVpcConfiguration = {
        SubnetIds: string[];

        SecurityGroupIds: string[];
      };

      export type SalesforceKnowledgeArticleConfiguration = {
        IncludedStates: string[];

        StandardKnowledgeArticleTypeConfiguration?: AWS.Kendra.DataSource.SalesforceStandardKnowledgeArticleTypeConfiguration;

        CustomKnowledgeArticleTypeConfigurations?: AWS.Kendra.DataSource.SalesforceCustomKnowledgeArticleTypeConfiguration[];
      };

      export type AccessControlListConfiguration = {
        KeyPath?: string;
      };

      export type DataSourceToIndexFieldMapping = {
        DataSourceFieldName: string;

        DateFieldFormat?: string;

        IndexFieldName: string;
      };

      export type ConfluenceSpaceToIndexFieldMapping = {
        DataSourceFieldName: string;

        DateFieldFormat?: string;

        IndexFieldName: string;
      };

      export type OneDriveConfiguration = {
        TenantDomain: string;

        SecretArn: string;

        OneDriveUsers: AWS.Kendra.DataSource.OneDriveUsers;

        InclusionPatterns?: string[];

        ExclusionPatterns?: string[];

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

        DisableLocalGroups?: boolean;
      };

      export type DataSourceConfiguration = {
        S3Configuration?: AWS.Kendra.DataSource.S3DataSourceConfiguration;

        SharePointConfiguration?: AWS.Kendra.DataSource.SharePointConfiguration;

        SalesforceConfiguration?: AWS.Kendra.DataSource.SalesforceConfiguration;

        OneDriveConfiguration?: AWS.Kendra.DataSource.OneDriveConfiguration;

        ServiceNowConfiguration?: AWS.Kendra.DataSource.ServiceNowConfiguration;

        DatabaseConfiguration?: AWS.Kendra.DataSource.DatabaseConfiguration;

        ConfluenceConfiguration?: AWS.Kendra.DataSource.ConfluenceConfiguration;

        GoogleDriveConfiguration?: AWS.Kendra.DataSource.GoogleDriveConfiguration;
      };

      export type SharePointConfiguration = {
        SharePointVersion: string;

        Urls: string[];

        SecretArn: string;

        CrawlAttachments?: boolean;

        UseChangeLog?: boolean;

        InclusionPatterns?: string[];

        ExclusionPatterns?: string[];

        VpcConfiguration?: AWS.Kendra.DataSource.DataSourceVpcConfiguration;

        FieldMappings?: AWS.Kendra.DataSource.DataSourceToIndexFieldMapping[];

        DocumentTitleFieldName?: string;

        DisableLocalGroups?: boolean;
      };

      export type DocumentsMetadataConfiguration = {
        S3Prefix?: string;
      };
    }

    export type Index = {
      Description?: string;

      ServerSideEncryptionConfiguration?: AWS.Kendra.Index.ServerSideEncryptionConfiguration;

      Tags?: Tag[];

      Name: string;

      RoleArn: string;

      Edition: string;

      DocumentMetadataConfigurations?: AWS.Kendra.Index.DocumentMetadataConfiguration[];

      CapacityUnits?: AWS.Kendra.Index.CapacityUnitsConfiguration;

      UserContextPolicy?: string;

      UserTokenConfigurations?: AWS.Kendra.Index.UserTokenConfiguration[];
    };

    export namespace Index {
      export type ServerSideEncryptionConfiguration = {
        KmsKeyId?: string;
      };

      export type JsonTokenTypeConfiguration = {
        UserNameAttributeField: string;

        GroupAttributeField: string;
      };

      export type ValueImportanceItem = {
        Key?: string;

        Value?: number;
      };

      export type DocumentMetadataConfiguration = {
        Name: string;

        Type: string;

        Relevance?: AWS.Kendra.Index.Relevance;

        Search?: AWS.Kendra.Index.Search;
      };

      export type UserTokenConfiguration = {
        JwtTokenTypeConfiguration?: AWS.Kendra.Index.JwtTokenTypeConfiguration;

        JsonTokenTypeConfiguration?: AWS.Kendra.Index.JsonTokenTypeConfiguration;
      };

      export type Search = {
        Facetable?: boolean;

        Searchable?: boolean;

        Displayable?: boolean;

        Sortable?: boolean;
      };

      export type Relevance = {
        Freshness?: boolean;

        Importance?: number;

        Duration?: string;

        RankOrder?: string;

        ValueImportanceItems?: AWS.Kendra.Index.ValueImportanceItem[];
      };

      export type JwtTokenTypeConfiguration = {
        KeyLocation: string;

        URL?: string;

        SecretManagerArn?: string;

        UserNameAttributeField?: string;

        GroupAttributeField?: string;

        Issuer?: string;

        ClaimRegex?: string;
      };

      export type CapacityUnitsConfiguration = {
        StorageCapacityUnits: number;

        QueryCapacityUnits: number;
      };
    }

    export type Faq = {
      IndexId: string;

      Name: string;

      Description?: string;

      FileFormat?: string;

      S3Path: AWS.Kendra.Faq.S3Path;

      RoleArn: string;

      Tags?: Tag[];
    };

    export namespace Faq {
      export type S3Path = {
        Bucket: string;

        Key: string;
      };
    }
  }

  export namespace Amplify {
    export type App = {
      AccessToken?: string;

      AutoBranchCreationConfig?: AWS.Amplify.App.AutoBranchCreationConfig;

      BasicAuthConfig?: AWS.Amplify.App.BasicAuthConfig;

      BuildSpec?: string;

      CustomHeaders?: string;

      CustomRules?: AWS.Amplify.App.CustomRule[];

      Description?: string;

      EnableBranchAutoDeletion?: boolean;

      EnvironmentVariables?: AWS.Amplify.App.EnvironmentVariable[];

      IAMServiceRole?: string;

      Name: string;

      OauthToken?: string;

      Repository?: string;

      Tags?: Tag[];
    };

    export namespace App {
      export type EnvironmentVariable = {
        Name: string;

        Value: string;
      };

      export type AutoBranchCreationConfig = {
        AutoBranchCreationPatterns?: string[];

        BasicAuthConfig?: AWS.Amplify.App.BasicAuthConfig;

        BuildSpec?: string;

        EnableAutoBranchCreation?: boolean;

        EnableAutoBuild?: boolean;

        EnablePerformanceMode?: boolean;

        EnablePullRequestPreview?: boolean;

        EnvironmentVariables?: AWS.Amplify.App.EnvironmentVariable[];

        PullRequestEnvironmentName?: string;

        Stage?: string;
      };

      export type BasicAuthConfig = {
        EnableBasicAuth?: boolean;

        Username?: string;

        Password?: string;
      };

      export type CustomRule = {
        Condition?: string;

        Status?: string;

        Target: string;

        Source: string;
      };
    }

    export type Domain = {
      SubDomainSettings: AWS.Amplify.Domain.SubDomainSetting[];

      AppId: string;

      AutoSubDomainIAMRole?: string;

      DomainName: string;

      EnableAutoSubDomain?: boolean;

      AutoSubDomainCreationPatterns?: string[];
    };

    export namespace Domain {
      export type SubDomainSetting = {
        Prefix: string;

        BranchName: string;
      };
    }

    export type Branch = {
      AppId: string;

      BasicAuthConfig?: AWS.Amplify.Branch.BasicAuthConfig;

      BranchName: string;

      BuildSpec?: string;

      Description?: string;

      EnableAutoBuild?: boolean;

      EnablePerformanceMode?: boolean;

      EnablePullRequestPreview?: boolean;

      EnvironmentVariables?: AWS.Amplify.Branch.EnvironmentVariable[];

      PullRequestEnvironmentName?: string;

      Stage?: string;

      Tags?: Tag[];
    };

    export namespace Branch {
      export type BasicAuthConfig = {
        EnableBasicAuth?: boolean;

        Username: string;

        Password: string;
      };

      export type EnvironmentVariable = {
        Name: string;

        Value: string;
      };
    }
  }

  export namespace RoboMaker {
    export type SimulationApplication = {
      RenderingEngine: AWS.RoboMaker.SimulationApplication.RenderingEngine;

      SimulationSoftwareSuite: AWS.RoboMaker.SimulationApplication.SimulationSoftwareSuite;

      CurrentRevisionId?: string;

      RobotSoftwareSuite: AWS.RoboMaker.SimulationApplication.RobotSoftwareSuite;

      Sources: AWS.RoboMaker.SimulationApplication.SourceConfig[];

      Tags?: JSONString;

      Name?: string;
    };

    export namespace SimulationApplication {
      export type SimulationSoftwareSuite = {
        Version: string;

        Name: string;
      };

      export type RobotSoftwareSuite = {
        Version: string;

        Name: string;
      };

      export type SourceConfig = {
        S3Bucket: string;

        Architecture: string;

        S3Key: string;
      };

      export type RenderingEngine = {
        Version: string;

        Name: string;
      };
    }

    export type RobotApplication = {
      CurrentRevisionId?: string;

      RobotSoftwareSuite: AWS.RoboMaker.RobotApplication.RobotSoftwareSuite;

      Sources: AWS.RoboMaker.RobotApplication.SourceConfig[];

      Tags?: JSONString;

      Name?: string;
    };

    export namespace RobotApplication {
      export type RobotSoftwareSuite = {
        Version: string;

        Name: string;
      };

      export type SourceConfig = {
        S3Bucket: string;

        Architecture: string;

        S3Key: string;
      };
    }

    export type SimulationApplicationVersion = {
      CurrentRevisionId?: string;

      Application: string;
    };

    export type Fleet = {
      Tags?: JSONString;

      Name?: string;
    };

    export type RobotApplicationVersion = {
      CurrentRevisionId?: string;

      Application: string;
    };

    export type Robot = {
      Fleet?: string;

      Architecture: string;

      GreengrassGroupId: string;

      Tags?: JSONString;

      Name?: string;
    };
  }

  export namespace Macie {
    export type FindingsFilter = {
      Name: string;

      Description?: string;

      FindingCriteria: AWS.Macie.FindingsFilter.FindingCriteria;

      Action?: string;

      Position?: number;
    };

    export type FindingsFilter = {
      Criterion?: any;
    };

    export namespace FindingsFilter {
      export type FindingsFilterListItem = {
        Id?: string;

        Name?: string;
      };

      export type FindingCriteria = {
        Criterion?: AWS.Macie.FindingsFilter.Criterion;
      };
    }

    export type Session = {
      Status?: string;

      FindingPublishingFrequency?: string;
    };

    export type CustomDataIdentifier = {
      Name: string;

      Description?: string;

      Regex: string;

      MaximumMatchDistance?: number;

      Keywords?: string[];

      IgnoreWords?: string[];
    };
  }

  export namespace Synthetics {
    export type Canary = {
      Name: string;

      Code: AWS.Synthetics.Canary.Code;

      ArtifactS3Location: string;

      Schedule: AWS.Synthetics.Canary.Schedule;

      ExecutionRoleArn: string;

      RuntimeVersion: string;

      SuccessRetentionPeriod?: number;

      FailureRetentionPeriod?: number;

      Tags?: Tag[];

      VPCConfig?: AWS.Synthetics.Canary.VPCConfig;

      RunConfig?: AWS.Synthetics.Canary.RunConfig;

      StartCanaryAfterCreation: boolean;
    };

    export namespace Canary {
      export type VPCConfig = {
        VpcId?: string;

        SubnetIds: string[];

        SecurityGroupIds: string[];
      };

      export type Schedule = {
        Expression: string;

        DurationInSeconds?: string;
      };

      export type Code = {
        S3Bucket?: string;

        S3Key?: string;

        S3ObjectVersion?: string;

        Script?: string;

        Handler: string;
      };

      export type RunConfig = {
        TimeoutInSeconds?: number;

        MemoryInMB?: number;

        ActiveTracing?: boolean;

        EnvironmentVariables?: Record<string, string>;
      };
    }
  }

  export namespace AutoScalingPlans {
    export type ScalingPlan = {
      ApplicationSource: AWS.AutoScalingPlans.ScalingPlan.ApplicationSource;

      ScalingInstructions: AWS.AutoScalingPlans.ScalingPlan.ScalingInstruction[];
    };

    export namespace ScalingPlan {
      export type ScalingInstruction = {
        DisableDynamicScaling?: boolean;

        ServiceNamespace: string;

        PredictiveScalingMaxCapacityBehavior?: string;

        ScalableDimension: string;

        ScalingPolicyUpdateBehavior?: string;

        MinCapacity: number;

        TargetTrackingConfigurations: AWS.AutoScalingPlans.ScalingPlan.TargetTrackingConfiguration[];

        PredictiveScalingMaxCapacityBuffer?: number;

        CustomizedLoadMetricSpecification?: AWS.AutoScalingPlans.ScalingPlan.CustomizedLoadMetricSpecification;

        PredefinedLoadMetricSpecification?: AWS.AutoScalingPlans.ScalingPlan.PredefinedLoadMetricSpecification;

        ResourceId: string;

        ScheduledActionBufferTime?: number;

        MaxCapacity: number;

        PredictiveScalingMode?: string;
      };

      export type MetricDimension = {
        Value: string;

        Name: string;
      };

      export type PredefinedScalingMetricSpecification = {
        ResourceLabel?: string;

        PredefinedScalingMetricType: string;
      };

      export type CustomizedScalingMetricSpecification = {
        MetricName: string;

        Statistic: string;

        Dimensions?: AWS.AutoScalingPlans.ScalingPlan.MetricDimension[];

        Unit?: string;

        Namespace: string;
      };

      export type TagFilter = {
        Values?: string[];

        Key: string;
      };

      export type CustomizedLoadMetricSpecification = {
        MetricName: string;

        Statistic: string;

        Dimensions?: AWS.AutoScalingPlans.ScalingPlan.MetricDimension[];

        Unit?: string;

        Namespace: string;
      };

      export type ApplicationSource = {
        CloudFormationStackARN?: string;

        TagFilters?: AWS.AutoScalingPlans.ScalingPlan.TagFilter[];
      };

      export type TargetTrackingConfiguration = {
        ScaleOutCooldown?: number;

        TargetValue: number;

        PredefinedScalingMetricSpecification?: AWS.AutoScalingPlans.ScalingPlan.PredefinedScalingMetricSpecification;

        DisableScaleIn?: boolean;

        ScaleInCooldown?: number;

        EstimatedInstanceWarmup?: number;

        CustomizedScalingMetricSpecification?: AWS.AutoScalingPlans.ScalingPlan.CustomizedScalingMetricSpecification;
      };

      export type PredefinedLoadMetricSpecification = {
        PredefinedLoadMetricType: string;

        ResourceLabel?: string;
      };
    }
  }

  export namespace CertificateManager {
    export type Account = {
      ExpiryEventsConfiguration: AWS.CertificateManager.Account.ExpiryEventsConfiguration;
    };

    export namespace Account {
      export type ExpiryEventsConfiguration = {
        DaysBeforeExpiry?: number;
      };
    }

    export type Certificate = {
      CertificateAuthorityArn?: string;

      CertificateTransparencyLoggingPreference?: string;

      DomainName: string;

      DomainValidationOptions?: AWS.CertificateManager.Certificate.DomainValidationOption[];

      SubjectAlternativeNames?: string[];

      Tags?: Tag[];

      ValidationMethod?: string;
    };

    export namespace Certificate {
      export type DomainValidationOption = {
        DomainName: string;

        HostedZoneId?: string;

        ValidationDomain?: string;
      };
    }
  }

  export namespace ServiceDiscovery {
    export type Service = {
      Type?: string;

      Description?: string;

      HealthCheckCustomConfig?: AWS.ServiceDiscovery.Service.HealthCheckCustomConfig;

      DnsConfig?: AWS.ServiceDiscovery.Service.DnsConfig;

      NamespaceId?: string;

      HealthCheckConfig?: AWS.ServiceDiscovery.Service.HealthCheckConfig;

      Tags?: Tag[];

      Name?: string;
    };

    export namespace Service {
      export type DnsConfig = {
        DnsRecords: AWS.ServiceDiscovery.Service.DnsRecord[];

        RoutingPolicy?: string;

        NamespaceId?: string;
      };

      export type HealthCheckConfig = {
        Type: string;

        ResourcePath?: string;

        FailureThreshold?: number;
      };

      export type HealthCheckCustomConfig = {
        FailureThreshold?: number;
      };

      export type DnsRecord = {
        Type: string;

        TTL: number;
      };
    }

    export type PublicDnsNamespace = {
      Description?: string;

      Properties?: AWS.ServiceDiscovery.PublicDnsNamespace.Properties;

      Tags?: Tag[];

      Name: string;
    };

    export namespace PublicDnsNamespace {
      export type Properties = {
        DnsProperties?: AWS.ServiceDiscovery.PublicDnsNamespace.PublicDnsPropertiesMutable;
      };

      export type PublicDnsPropertiesMutable = {
        SOA?: AWS.ServiceDiscovery.PublicDnsNamespace.SOA;
      };

      export type SOA = {
        TTL?: number;
      };
    }

    export type PrivateDnsNamespace = {
      Description?: string;

      Vpc: string;

      Properties?: AWS.ServiceDiscovery.PrivateDnsNamespace.Properties;

      Tags?: Tag[];

      Name: string;
    };

    export namespace PrivateDnsNamespace {
      export type Properties = {
        DnsProperties?: AWS.ServiceDiscovery.PrivateDnsNamespace.PrivateDnsPropertiesMutable;
      };

      export type SOA = {
        TTL?: number;
      };

      export type PrivateDnsPropertiesMutable = {
        SOA?: AWS.ServiceDiscovery.PrivateDnsNamespace.SOA;
      };
    }

    export type Instance = {
      InstanceAttributes: JSONString;

      InstanceId?: string;

      ServiceId: string;
    };

    export type HttpNamespace = {
      Description?: string;

      Tags?: Tag[];

      Name: string;
    };
  }

  export namespace AccessAnalyzer {
    export type Analyzer = {
      AnalyzerName?: string;

      ArchiveRules?: AWS.AccessAnalyzer.Analyzer.ArchiveRule[];

      Tags?: Tag[];

      Type: string;
    };

    export namespace Analyzer {
      export type ArchiveRule = {
        Filter: AWS.AccessAnalyzer.Analyzer.Filter[];

        RuleName: string;
      };

      export type Filter = {
        Contains?: string[];

        Eq?: string[];

        Exists?: boolean;

        Property: string;

        Neq?: string[];
      };
    }
  }

  export namespace S3ObjectLambda {
    export type AccessPoint = {
      Name: string;

      ObjectLambdaConfiguration?: AWS.S3ObjectLambda.AccessPoint.ObjectLambdaConfiguration;
    };

    export namespace AccessPoint {
      export type ObjectLambdaConfiguration = {
        SupportingAccessPoint: string;

        AllowedFeatures?: string[];

        CloudWatchMetricsEnabled?: boolean;

        TransformationConfigurations: AWS.S3ObjectLambda.AccessPoint.TransformationConfiguration[];
      };

      export type TransformationConfiguration = {
        Actions?: string[];

        ContentTransformation?: JSONString;
      };
    }

    export type AccessPointPolicy = {
      ObjectLambdaAccessPoint: string;

      PolicyDocument: JSONString;
    };
  }

  export namespace IoTThingsGraph {
    export type FlowTemplate = {
      CompatibleNamespaceVersion?: number;

      Definition: AWS.IoTThingsGraph.FlowTemplate.DefinitionDocument;
    };

    export namespace FlowTemplate {
      export type DefinitionDocument = {
        Language: string;

        Text: string;
      };
    }
  }

  export namespace QLDB {
    export type Stream = {
      LedgerName: string;

      StreamName: string;

      RoleArn: string;

      InclusiveStartTime: string;

      ExclusiveEndTime?: string;

      KinesisConfiguration: AWS.QLDB.Stream.KinesisConfiguration;

      Tags?: Tag[];
    };

    export namespace Stream {
      export type KinesisConfiguration = {
        StreamArn?: string;

        AggregationEnabled?: boolean;
      };
    }

    export type Ledger = {
      PermissionsMode: string;

      DeletionProtection?: boolean;

      KmsKey?: string;

      Tags?: Tag[];

      Name?: string;
    };
  }

  export namespace MediaConvert {
    export type JobTemplate = {
      Category?: string;

      Description?: string;

      AccelerationSettings?: AWS.MediaConvert.JobTemplate.AccelerationSettings;

      Priority?: number;

      StatusUpdateInterval?: string;

      SettingsJson: JSONString;

      Queue?: string;

      HopDestinations?: AWS.MediaConvert.JobTemplate.HopDestination[];

      Tags?: JSONString;

      Name?: string;
    };

    export namespace JobTemplate {
      export type HopDestination = {
        WaitMinutes?: number;

        Priority?: number;

        Queue?: string;
      };

      export type AccelerationSettings = {
        Mode: string;
      };
    }

    export type Queue = {
      Status?: string;

      Description?: string;

      PricingPlan?: string;

      Tags?: JSONString;

      Name?: string;
    };

    export type Preset = {
      Category?: string;

      Description?: string;

      SettingsJson: JSONString;

      Tags?: JSONString;

      Name?: string;
    };
  }

  export namespace CE {
    export type AnomalySubscription = {
      SubscriptionName: string;

      MonitorArnList: string[];

      Subscribers: AWS.CE.AnomalySubscription.Subscriber[];

      Threshold: number;

      Frequency: string;
    };

    export namespace AnomalySubscription {
      export type Subscriber = {
        Address: string;

        Status?: string;

        Type: string;
      };
    }

    export type CostCategory = {
      Name: string;

      RuleVersion: string;

      Rules: string;

      DefaultValue?: string;
    };

    export type AnomalyMonitor = {
      MonitorType: string;

      MonitorName: string;

      MonitorDimension?: string;

      MonitorSpecification?: string;
    };
  }

  export namespace AppIntegrations {
    export type EventIntegration = {
      Description?: string;

      Name: string;

      EventBridgeBus: string;

      EventFilter: AWS.AppIntegrations.EventIntegration.EventFilter;

      Tags?: Tag[];
    };

    export namespace EventIntegration {
      export type Metadata = {
        Key: string;

        Value: string;
      };

      export type EventFilter = {
        Source: string;
      };

      export type EventIntegrationAssociation = {
        ClientAssociationMetadata?: AWS.AppIntegrations.EventIntegration.Metadata[];

        ClientId?: string;

        EventBridgeRuleName?: string;

        EventIntegrationAssociationArn?: string;

        EventIntegrationAssociationId?: string;
      };
    }
  }

  export namespace FMS {
    export type Policy = {
      ExcludeMap?: AWS.FMS.Policy.IEMap;

      ExcludeResourceTags: boolean;

      IncludeMap?: AWS.FMS.Policy.IEMap;

      PolicyName: string;

      RemediationEnabled: boolean;

      ResourceTags?: AWS.FMS.Policy.ResourceTag[];

      ResourceType: string;

      ResourceTypeList?: string[];

      SecurityServicePolicyData: JSONString;

      DeleteAllPolicyResources?: boolean;

      Tags?: AWS.FMS.Policy.PolicyTag[];
    };

    export namespace Policy {
      export type PolicyTag = {
        Key: string;

        Value: string;
      };

      export type ResourceTag = {
        Key: string;

        Value?: string;
      };

      export type IEMap = {
        ACCOUNT?: string[];

        ORGUNIT?: string[];
      };
    }

    export type NotificationChannel = {
      SnsRoleName: string;

      SnsTopicArn: string;
    };
  }

  export namespace Kinesis {
    export type Stream = {
      Name?: string;

      RetentionPeriodHours?: number;

      ShardCount: number;

      StreamEncryption?: AWS.Kinesis.Stream.StreamEncryption;

      Tags?: Tag[];
    };

    export namespace Stream {
      export type StreamEncryption = {
        EncryptionType: string;

        KeyId: string;
      };
    }

    export type StreamConsumer = {
      ConsumerName: string;

      StreamARN: string;
    };
  }

  export namespace CodeCommit {
    export type Repository = {
      RepositoryName: string;

      Triggers?: AWS.CodeCommit.Repository.RepositoryTrigger[];

      Code?: AWS.CodeCommit.Repository.Code;

      RepositoryDescription?: string;

      Tags?: Tag[];
    };

    export namespace Repository {
      export type Code = {
        S3: AWS.CodeCommit.Repository.S3;

        BranchName?: string;
      };

      export type S3 = {
        ObjectVersion?: string;

        Bucket: string;

        Key: string;
      };

      export type RepositoryTrigger = {
        Events: string[];

        Branches?: string[];

        CustomData?: string;

        DestinationArn: string;

        Name: string;
      };
    }
  }

  export namespace EMRContainers {
    export type VirtualCluster = {
      ContainerProvider: AWS.EMRContainers.VirtualCluster.ContainerProvider;

      Name: string;

      Tags?: Tag[];
    };

    export namespace VirtualCluster {
      export type ContainerInfo = {
        EksInfo: AWS.EMRContainers.VirtualCluster.EksInfo;
      };

      export type EksInfo = {
        Namespace: string;
      };

      export type ContainerProvider = {
        Type: string;

        Id: string;

        Info: AWS.EMRContainers.VirtualCluster.ContainerInfo;
      };
    }
  }

  export namespace Neptune {
    export type DBCluster = {
      StorageEncrypted?: boolean;

      RestoreToTime?: string;

      EngineVersion?: string;

      KmsKeyId?: string;

      AssociatedRoles?: AWS.Neptune.DBCluster.DBClusterRole[];

      AvailabilityZones?: string[];

      SnapshotIdentifier?: string;

      Port?: number;

      DBClusterIdentifier?: string;

      PreferredMaintenanceWindow?: string;

      IamAuthEnabled?: boolean;

      DBSubnetGroupName?: string;

      DeletionProtection?: boolean;

      PreferredBackupWindow?: string;

      UseLatestRestorableTime?: boolean;

      VpcSecurityGroupIds?: string[];

      SourceDBClusterIdentifier?: string;

      DBClusterParameterGroupName?: string;

      BackupRetentionPeriod?: number;

      RestoreType?: string;

      Tags?: Tag[];

      EnableCloudwatchLogsExports?: string[];
    };

    export namespace DBCluster {
      export type DBClusterRole = {
        RoleArn: string;

        FeatureName?: string;
      };
    }

    export type DBSubnetGroup = {
      DBSubnetGroupName?: string;

      DBSubnetGroupDescription: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type DBInstance = {
      DBParameterGroupName?: string;

      DBInstanceClass: string;

      AllowMajorVersionUpgrade?: boolean;

      DBClusterIdentifier?: string;

      AvailabilityZone?: string;

      PreferredMaintenanceWindow?: string;

      AutoMinorVersionUpgrade?: boolean;

      DBSubnetGroupName?: string;

      DBInstanceIdentifier?: string;

      DBSnapshotIdentifier?: string;

      Tags?: Tag[];
    };

    export type DBClusterParameterGroup = {
      Description: string;

      Parameters: JSONString;

      Family: string;

      Tags?: Tag[];

      Name?: string;
    };

    export type DBParameterGroup = {
      Description: string;

      Parameters: JSONString;

      Family: string;

      Tags?: Tag[];

      Name?: string;
    };
  }

  export namespace SSO {
    export type InstanceAccessControlAttributeConfiguration = {
      InstanceArn: string;

      AccessControlAttributes?: AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttribute[];
    };

    export namespace InstanceAccessControlAttributeConfiguration {
      export type AccessControlAttribute = {
        Key: string;

        Value: AWS.SSO.InstanceAccessControlAttributeConfiguration.AccessControlAttributeValue;
      };

      export type AccessControlAttributeValue = {
        Source: string[];
      };
    }

    export type Assignment = {
      InstanceArn: string;

      TargetId: string;

      TargetType: string;

      PermissionSetArn: string;

      PrincipalType: string;

      PrincipalId: string;
    };

    export type PermissionSet = {
      Name: string;

      Description?: string;

      InstanceArn: string;

      SessionDuration?: string;

      RelayStateType?: string;

      ManagedPolicies?: string[];

      InlinePolicy?: JSONString;

      Tags?: Tag[];
    };
  }

  export namespace FSx {
    export type FileSystem = {
      StorageType?: string;

      KmsKeyId?: string;

      StorageCapacity?: number;

      FileSystemType: string;

      LustreConfiguration?: AWS.FSx.FileSystem.LustreConfiguration;

      BackupId?: string;

      SubnetIds: string[];

      SecurityGroupIds?: string[];

      Tags?: Tag[];

      WindowsConfiguration?: AWS.FSx.FileSystem.WindowsConfiguration;
    };

    export namespace FileSystem {
      export type LustreConfiguration = {
        DataCompressionType?: string;

        DriveCacheType?: string;

        ImportPath?: string;

        WeeklyMaintenanceStartTime?: string;

        AutoImportPolicy?: string;

        ImportedFileChunkSize?: number;

        DeploymentType?: string;

        DailyAutomaticBackupStartTime?: string;

        CopyTagsToBackups?: boolean;

        ExportPath?: string;

        PerUnitStorageThroughput?: number;

        AutomaticBackupRetentionDays?: number;
      };

      export type SelfManagedActiveDirectoryConfiguration = {
        FileSystemAdministratorsGroup?: string;

        UserName?: string;

        DomainName?: string;

        OrganizationalUnitDistinguishedName?: string;

        DnsIps?: string[];

        Password?: string;
      };

      export type WindowsConfiguration = {
        SelfManagedActiveDirectoryConfiguration?: AWS.FSx.FileSystem.SelfManagedActiveDirectoryConfiguration;

        WeeklyMaintenanceStartTime?: string;

        ActiveDirectoryId?: string;

        DeploymentType?: string;

        Aliases?: string[];

        ThroughputCapacity: number;

        CopyTagsToBackups?: boolean;

        DailyAutomaticBackupStartTime?: string;

        AutomaticBackupRetentionDays?: number;

        PreferredSubnetId?: string;
      };
    }
  }

  export namespace FinSpace {
    export type Environment = {
      Name: string;

      Description?: string;

      KmsKeyId?: string;

      FederationMode?: string;

      FederationParameters?: AWS.FinSpace.Environment.FederationParameters;
    };

    export namespace Environment {
      export type FederationParameters = {
        SamlMetadataURL?: string;

        FederationProviderName?: string;

        SamlMetadataDocument?: string;

        ApplicationCallBackURL?: string;

        FederationURN?: string;

        AttributeMap?: JSONString;
      };
    }
  }

  export namespace WorkSpaces {
    export type Workspace = {
      BundleId: string;

      DirectoryId: string;

      RootVolumeEncryptionEnabled?: boolean;

      Tags?: Tag[];

      UserName: string;

      UserVolumeEncryptionEnabled?: boolean;

      VolumeEncryptionKey?: string;

      WorkspaceProperties?: AWS.WorkSpaces.Workspace.WorkspaceProperties;
    };

    export namespace Workspace {
      export type WorkspaceProperties = {
        ComputeTypeName?: string;

        RootVolumeSizeGib?: number;

        RunningMode?: string;

        RunningModeAutoStopTimeoutInMinutes?: number;

        UserVolumeSizeGib?: number;
      };
    }

    export type ConnectionAlias = {
      ConnectionString: string;

      Tags?: Tag[];
    };

    export namespace ConnectionAlias {
      export type ConnectionAliasAssociation = {
        AssociationStatus?: string;

        AssociatedAccountId?: string;

        ResourceId?: string;

        ConnectionIdentifier?: string;
      };
    }
  }

  export namespace Transfer {
    export type User = {
      Policy?: string;

      Role: string;

      HomeDirectory?: string;

      HomeDirectoryType?: string;

      ServerId: string;

      UserName: string;

      HomeDirectoryMappings?: AWS.Transfer.User.HomeDirectoryMapEntry[];

      PosixProfile?: AWS.Transfer.User.PosixProfile;

      SshPublicKeys?: AWS.Transfer.User.SshPublicKey[];

      Tags?: Tag[];
    };

    export type User = {
      SshPublicKey?: string;
    };

    export namespace User {
      export type HomeDirectoryMapEntry = {
        Entry: string;

        Target: string;
      };

      export type PosixProfile = {
        Uid: number;

        SecondaryGids?: number[];

        Gid: number;
      };
    }

    export type Server = {
      LoggingRole?: string;

      Protocols?: AWS.Transfer.Server.Protocol[];

      IdentityProviderDetails?: AWS.Transfer.Server.IdentityProviderDetails;

      EndpointType?: string;

      SecurityPolicyName?: string;

      ProtocolDetails?: AWS.Transfer.Server.ProtocolDetails;

      Domain?: string;

      EndpointDetails?: AWS.Transfer.Server.EndpointDetails;

      IdentityProviderType?: string;

      Tags?: Tag[];

      Certificate?: string;
    };

    export type Server = {
      Protocol?: string;
    };

    export namespace Server {
      export type ProtocolDetails = {
        PassiveIp?: string;
      };

      export type IdentityProviderDetails = {
        DirectoryId?: string;

        InvocationRole?: string;

        Url?: string;
      };

      export type EndpointDetails = {
        AddressAllocationIds?: string[];

        VpcId?: string;

        VpcEndpointId?: string;

        SecurityGroupIds?: string[];

        SubnetIds?: string[];
      };
    }
  }

  export namespace MWAA {
    export type Environment = {
      Name: string;

      ExecutionRoleArn?: string;

      KmsKey?: string;

      AirflowVersion?: string;

      SourceBucketArn?: string;

      DagS3Path?: string;

      PluginsS3Path?: string;

      PluginsS3ObjectVersion?: string;

      RequirementsS3Path?: string;

      RequirementsS3ObjectVersion?: string;

      AirflowConfigurationOptions?: JSONString;

      EnvironmentClass?: string;

      MaxWorkers?: number;

      MinWorkers?: number;

      Schedulers?: number;

      NetworkConfiguration?: AWS.MWAA.Environment.NetworkConfiguration;

      LoggingConfiguration?: AWS.MWAA.Environment.LoggingConfiguration;

      WeeklyMaintenanceWindowStart?: string;

      Tags?: AWS.MWAA.Environment.TagMap;

      WebserverAccessMode?: string;
    };

    export type Environment = {
      TagMap?: any;
    };

    export namespace Environment {
      export type NetworkConfiguration = {
        SubnetIds?: string[];

        SecurityGroupIds?: string[];
      };

      export type ModuleLoggingConfiguration = {
        Enabled?: boolean;

        LogLevel?: string;

        CloudWatchLogGroupArn?: string;
      };

      export type LoggingConfiguration = {
        DagProcessingLogs?: AWS.MWAA.Environment.ModuleLoggingConfiguration;

        SchedulerLogs?: AWS.MWAA.Environment.ModuleLoggingConfiguration;

        WebserverLogs?: AWS.MWAA.Environment.ModuleLoggingConfiguration;

        WorkerLogs?: AWS.MWAA.Environment.ModuleLoggingConfiguration;

        TaskLogs?: AWS.MWAA.Environment.ModuleLoggingConfiguration;
      };
    }
  }

  export namespace IoT1Click {
    export type Project = {
      Description?: string;

      PlacementTemplate: AWS.IoT1Click.Project.PlacementTemplate;

      ProjectName?: string;
    };

    export namespace Project {
      export type DeviceTemplate = {
        DeviceType?: string;

        CallbackOverrides?: JSONString;
      };

      export type PlacementTemplate = {
        DeviceTemplates?: JSONString;

        DefaultAttributes?: JSONString;
      };
    }

    export type Placement = {
      PlacementName?: string;

      ProjectName: string;

      AssociatedDevices?: JSONString;

      Attributes?: JSONString;
    };

    export type Device = {
      DeviceId: string;

      Enabled: boolean;
    };
  }

  export namespace DAX {
    export type Cluster = {
      SSESpecification?: AWS.DAX.Cluster.SSESpecification;

      Description?: string;

      ReplicationFactor: number;

      ParameterGroupName?: string;

      AvailabilityZones?: string[];

      IAMRoleARN: string;

      SubnetGroupName?: string;

      PreferredMaintenanceWindow?: string;

      ClusterEndpointEncryptionType?: string;

      NotificationTopicARN?: string;

      SecurityGroupIds?: string[];

      NodeType: string;

      ClusterName?: string;

      Tags?: JSONString;
    };

    export namespace Cluster {
      export type SSESpecification = {
        SSEEnabled?: boolean;
      };
    }

    export type ParameterGroup = {
      ParameterNameValues?: JSONString;

      Description?: string;

      ParameterGroupName?: string;
    };

    export type SubnetGroup = {
      Description?: string;

      SubnetGroupName?: string;

      SubnetIds: string[];
    };
  }

  export namespace CodeGuruProfiler {
    export type ProfilingGroup = {
      ProfilingGroupName: string;

      ComputePlatform?: string;

      AgentPermissions?: JSONString;

      AnomalyDetectionNotificationConfiguration?: AWS.CodeGuruProfiler.ProfilingGroup.Channel[];

      Tags?: Tag[];
    };

    export namespace ProfilingGroup {
      export type Channel = {
        channelId?: string;

        channelUri: string;
      };
    }
  }

  export namespace OpsWorksCM {
    export type Server = {
      KeyPair?: string;

      EngineVersion?: string;

      ServiceRoleArn: string;

      DisableAutomatedBackup?: boolean;

      BackupId?: string;

      EngineModel?: string;

      PreferredMaintenanceWindow?: string;

      AssociatePublicIpAddress?: boolean;

      InstanceProfileArn: string;

      CustomCertificate?: string;

      PreferredBackupWindow?: string;

      SecurityGroupIds?: string[];

      SubnetIds?: string[];

      CustomDomain?: string;

      CustomPrivateKey?: string;

      ServerName?: string;

      EngineAttributes?: AWS.OpsWorksCM.Server.EngineAttribute[];

      BackupRetentionCount?: number;

      InstanceType: string;

      Tags?: Tag[];

      Engine?: string;
    };

    export namespace Server {
      export type EngineAttribute = {
        Value?: string;

        Name?: string;
      };
    }
  }

  export namespace CodeStarNotifications {
    export type NotificationRule = {
      EventTypeIds: string[];

      Status?: string;

      DetailType: string;

      Resource: string;

      Targets: AWS.CodeStarNotifications.NotificationRule.Target[];

      Tags?: JSONString;

      Name: string;
    };

    export namespace NotificationRule {
      export type Target = {
        TargetType?: string;

        TargetAddress?: string;
      };
    }
  }

  export namespace Cloud9 {
    export type EnvironmentEC2 = {
      Repositories?: AWS.Cloud9.EnvironmentEC2.Repository[];

      OwnerArn?: string;

      Description?: string;

      ConnectionType?: string;

      AutomaticStopTimeMinutes?: number;

      ImageId?: string;

      SubnetId?: string;

      InstanceType: string;

      Tags?: Tag[];

      Name?: string;
    };

    export namespace EnvironmentEC2 {
      export type Repository = {
        PathComponent: string;

        RepositoryUrl: string;
      };
    }
  }

  export namespace RAM {
    export type ResourceShare = {
      PermissionArns?: string[];

      Principals?: string[];

      AllowExternalPrincipals?: boolean;

      ResourceArns?: string[];

      Tags?: Tag[];

      Name: string;
    };
  }

  export namespace IoTFleetHub {
    export type Application = {
      ApplicationName: string;

      ApplicationDescription?: string;

      RoleArn: string;

      Tags?: Tag[];
    };
  }

  export namespace DocDB {
    export type DBCluster = {
      StorageEncrypted?: boolean;

      EngineVersion?: string;

      KmsKeyId?: string;

      AvailabilityZones?: string[];

      SnapshotIdentifier?: string;

      Port?: number;

      DBClusterIdentifier?: string;

      PreferredMaintenanceWindow?: string;

      DBSubnetGroupName?: string;

      DeletionProtection?: boolean;

      PreferredBackupWindow?: string;

      MasterUserPassword: string;

      VpcSecurityGroupIds?: string[];

      MasterUsername: string;

      DBClusterParameterGroupName?: string;

      BackupRetentionPeriod?: number;

      Tags?: Tag[];

      EnableCloudwatchLogsExports?: string[];
    };

    export type DBSubnetGroup = {
      DBSubnetGroupName?: string;

      DBSubnetGroupDescription: string;

      SubnetIds: string[];

      Tags?: Tag[];
    };

    export type DBInstance = {
      DBInstanceClass: string;

      DBClusterIdentifier: string;

      AvailabilityZone?: string;

      PreferredMaintenanceWindow?: string;

      AutoMinorVersionUpgrade?: boolean;

      DBInstanceIdentifier?: string;

      Tags?: Tag[];
    };

    export type DBClusterParameterGroup = {
      Description: string;

      Parameters: JSONString;

      Family: string;

      Tags?: Tag[];

      Name?: string;
    };
  }

  export namespace KMS {
    export type ReplicaKey = {
      PrimaryKeyArn: string;

      Description?: string;

      Enabled?: boolean;

      KeyPolicy: JSONString;

      PendingWindowInDays?: number;

      Tags?: Tag[];
    };

    export type Alias = {
      AliasName: string;

      TargetKeyId: string;
    };

    export type Key = {
      Description?: string;

      Enabled?: boolean;

      EnableKeyRotation?: boolean;

      KeyPolicy: JSONString;

      KeyUsage?: string;

      KeySpec?: string;

      MultiRegion?: boolean;

      PendingWindowInDays?: number;

      Tags?: Tag[];
    };
  }

  export namespace Detective {
    export type MemberInvitation = {
      GraphArn: string;

      MemberId: string;

      MemberEmailAddress: string;

      DisableEmailNotification?: boolean;

      Message?: string;
    };

    export type Graph = {
      Tags?: Tag[];
    };
  }

  export namespace CodeGuruReviewer {
    export type RepositoryAssociation = {
      Name: string;

      Type: string;

      Owner?: string;

      BucketName?: string;

      ConnectionArn?: string;

      Tags?: Tag[];
    };
  }

  export namespace IoTCoreDeviceAdvisor {
    export type SuiteDefinition = {
      SuiteDefinitionConfiguration: JSONString;

      Tags?: Tag[];
    };
  }

  export namespace Timestream {
    export type Database = {
      DatabaseName?: string;

      KmsKeyId?: string;

      Tags?: Tag[];
    };

    export type Table = {
      DatabaseName: string;

      TableName?: string;

      RetentionProperties?: JSONString;

      Tags?: Tag[];
    };
  }

  export namespace Inspector {
    export type ResourceGroup = {
      ResourceGroupTags: Tag[];
    };

    export type AssessmentTemplate = {
      AssessmentTargetArn: string;

      DurationInSeconds: number;

      AssessmentTemplateName?: string;

      RulesPackageArns: string[];

      UserAttributesForFindings?: Tag[];
    };

    export type AssessmentTarget = {
      AssessmentTargetName?: string;

      ResourceGroupArn?: string;
    };
  }

  export namespace CodeArtifact {
    export type Domain = {
      DomainName: string;

      EncryptionKey?: string;

      PermissionsPolicyDocument?: JSONString;

      Tags?: Tag[];
    };

    export type Repository = {
      RepositoryName: string;

      DomainName: string;

      DomainOwner?: string;

      Description?: string;

      ExternalConnections?: string[];

      Upstreams?: string[];

      PermissionsPolicyDocument?: JSONString;

      Tags?: Tag[];
    };
  }

  export namespace SQS {
    export type QueuePolicy = {
      PolicyDocument: JSONString;

      Queues: string[];
    };

    export type Queue = {
      ContentBasedDeduplication?: boolean;

      DeduplicationScope?: string;

      DelaySeconds?: number;

      FifoQueue?: boolean;

      FifoThroughputLimit?: string;

      KmsDataKeyReusePeriodSeconds?: number;

      KmsMasterKeyId?: string;

      MaximumMessageSize?: number;

      MessageRetentionPeriod?: number;

      QueueName?: string;

      ReceiveMessageWaitTimeSeconds?: number;

      RedrivePolicy?: JSONString;

      Tags?: Tag[];

      VisibilityTimeout?: number;
    };
  }

  export namespace LookoutVision {
    export type Project = {
      ProjectName: string;
    };
  }

  export namespace Chatbot {
    export type SlackChannelConfiguration = {
      SlackWorkspaceId: string;

      SlackChannelId: string;

      ConfigurationName: string;

      IamRoleArn: string;

      SnsTopicArns?: string[];

      LoggingLevel?: string;
    };
  }

  export namespace CodeStarConnections {
    export type Connection = {
      ConnectionName: string;

      ProviderType?: string;

      HostArn?: string;

      Tags?: Tag[];
    };
  }

  export namespace ServiceCatalogAppRegistry {
    export type Application = {
      Name: string;

      Description?: string;

      Tags?: Record<string, string>;
    };

    export type ResourceAssociation = {
      Application: string;

      Resource: string;

      ResourceType: string;
    };

    export type AttributeGroup = {
      Name: string;

      Description?: string;

      Attributes: JSONString;

      Tags?: Record<string, string>;
    };

    export type AttributeGroupAssociation = {
      Application: string;

      AttributeGroup: string;
    };
  }

  export namespace SDB {
    export type Domain = {
      Description?: string;
    };
  }

  export namespace SecurityHub {
    export type Hub = {
      Tags?: JSONString;
    };
  }

  export namespace CUR {
    export type ReportDefinition = {
      ReportName: string;

      TimeUnit: string;

      Format: string;

      Compression: string;

      AdditionalSchemaElements?: string[];

      S3Bucket: string;

      S3Prefix: string;

      S3Region: string;

      AdditionalArtifacts?: string[];

      RefreshClosedReports: boolean;

      ReportVersioning: string;

      BillingViewArn?: string;
    };
  }
}

export namespace Alexa {
  export namespace ASK {
    export type Skill = {
      AuthenticationConfiguration: Alexa.ASK.Skill.AuthenticationConfiguration;

      VendorId: string;

      SkillPackage: Alexa.ASK.Skill.SkillPackage;
    };

    export namespace Skill {
      export type Overrides = {
        Manifest?: JSONString;
      };

      export type SkillPackage = {
        S3BucketRole?: string;

        S3ObjectVersion?: string;

        S3Bucket: string;

        S3Key: string;

        Overrides?: Alexa.ASK.Skill.Overrides;
      };

      export type AuthenticationConfiguration = {
        RefreshToken: string;

        ClientSecret: string;

        ClientId: string;
      };
    }
  }
}

export type Tag = {
  Key: string;

  Value: string;
};
