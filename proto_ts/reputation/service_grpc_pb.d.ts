// package: neo.fs.v2.reputation
// file: reputation/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as reputation_service_pb from "../reputation/service_pb";
import * as reputation_types_pb from "../reputation/types_pb";
import * as session_types_pb from "../session/types_pb";

interface IReputationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    announceLocalTrust: IReputationServiceService_IAnnounceLocalTrust;
    announceIntermediateResult: IReputationServiceService_IAnnounceIntermediateResult;
}

interface IReputationServiceService_IAnnounceLocalTrust extends grpc.MethodDefinition<reputation_service_pb.AnnounceLocalTrustRequest, reputation_service_pb.AnnounceLocalTrustResponse> {
    path: "/neo.fs.v2.reputation.ReputationService/AnnounceLocalTrust";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<reputation_service_pb.AnnounceLocalTrustRequest>;
    requestDeserialize: grpc.deserialize<reputation_service_pb.AnnounceLocalTrustRequest>;
    responseSerialize: grpc.serialize<reputation_service_pb.AnnounceLocalTrustResponse>;
    responseDeserialize: grpc.deserialize<reputation_service_pb.AnnounceLocalTrustResponse>;
}
interface IReputationServiceService_IAnnounceIntermediateResult extends grpc.MethodDefinition<reputation_service_pb.AnnounceIntermediateResultRequest, reputation_service_pb.AnnounceIntermediateResultResponse> {
    path: "/neo.fs.v2.reputation.ReputationService/AnnounceIntermediateResult";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<reputation_service_pb.AnnounceIntermediateResultRequest>;
    requestDeserialize: grpc.deserialize<reputation_service_pb.AnnounceIntermediateResultRequest>;
    responseSerialize: grpc.serialize<reputation_service_pb.AnnounceIntermediateResultResponse>;
    responseDeserialize: grpc.deserialize<reputation_service_pb.AnnounceIntermediateResultResponse>;
}

export const ReputationServiceService: IReputationServiceService;

export interface IReputationServiceServer {
    announceLocalTrust: grpc.handleUnaryCall<reputation_service_pb.AnnounceLocalTrustRequest, reputation_service_pb.AnnounceLocalTrustResponse>;
    announceIntermediateResult: grpc.handleUnaryCall<reputation_service_pb.AnnounceIntermediateResultRequest, reputation_service_pb.AnnounceIntermediateResultResponse>;
}

export interface IReputationServiceClient {
    announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
    announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
    announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
}

export class ReputationServiceClient extends grpc.Client implements IReputationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    public announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    public announceLocalTrust(request: reputation_service_pb.AnnounceLocalTrustRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceLocalTrustResponse) => void): grpc.ClientUnaryCall;
    public announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
    public announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
    public announceIntermediateResult(request: reputation_service_pb.AnnounceIntermediateResultRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reputation_service_pb.AnnounceIntermediateResultResponse) => void): grpc.ClientUnaryCall;
}
