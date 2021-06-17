// package: neo.fs.v2.netmap
// file: netmap/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as netmap_service_pb from "../netmap/service_pb";
import * as netmap_types_pb from "../netmap/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

interface INetmapServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    localNodeInfo: INetmapServiceService_ILocalNodeInfo;
    networkInfo: INetmapServiceService_INetworkInfo;
}

interface INetmapServiceService_ILocalNodeInfo extends grpc.MethodDefinition<netmap_service_pb.LocalNodeInfoRequest, netmap_service_pb.LocalNodeInfoResponse> {
    path: "/neo.fs.v2.netmap.NetmapService/LocalNodeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<netmap_service_pb.LocalNodeInfoRequest>;
    requestDeserialize: grpc.deserialize<netmap_service_pb.LocalNodeInfoRequest>;
    responseSerialize: grpc.serialize<netmap_service_pb.LocalNodeInfoResponse>;
    responseDeserialize: grpc.deserialize<netmap_service_pb.LocalNodeInfoResponse>;
}
interface INetmapServiceService_INetworkInfo extends grpc.MethodDefinition<netmap_service_pb.NetworkInfoRequest, netmap_service_pb.NetworkInfoResponse> {
    path: "/neo.fs.v2.netmap.NetmapService/NetworkInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<netmap_service_pb.NetworkInfoRequest>;
    requestDeserialize: grpc.deserialize<netmap_service_pb.NetworkInfoRequest>;
    responseSerialize: grpc.serialize<netmap_service_pb.NetworkInfoResponse>;
    responseDeserialize: grpc.deserialize<netmap_service_pb.NetworkInfoResponse>;
}

export const NetmapServiceService: INetmapServiceService;

export interface INetmapServiceServer {
    localNodeInfo: grpc.handleUnaryCall<netmap_service_pb.LocalNodeInfoRequest, netmap_service_pb.LocalNodeInfoResponse>;
    networkInfo: grpc.handleUnaryCall<netmap_service_pb.NetworkInfoRequest, netmap_service_pb.NetworkInfoResponse>;
}

export interface INetmapServiceClient {
    localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    networkInfo(request: netmap_service_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
    networkInfo(request: netmap_service_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
    networkInfo(request: netmap_service_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
}

export class NetmapServiceClient extends grpc.Client implements INetmapServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public localNodeInfo(request: netmap_service_pb.LocalNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.LocalNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public networkInfo(request: netmap_service_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
    public networkInfo(request: netmap_service_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
    public networkInfo(request: netmap_service_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netmap_service_pb.NetworkInfoResponse) => void): grpc.ClientUnaryCall;
}
