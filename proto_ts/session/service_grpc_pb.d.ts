// package: neo.fs.v2.session
// file: session/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as session_service_pb from "../session/service_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

interface ISessionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISessionServiceService_ICreate;
}

interface ISessionServiceService_ICreate extends grpc.MethodDefinition<session_service_pb.CreateRequest, session_service_pb.CreateResponse> {
    path: "/neo.fs.v2.session.SessionService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_service_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.CreateRequest>;
    responseSerialize: grpc.serialize<session_service_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.CreateResponse>;
}

export const SessionServiceService: ISessionServiceService;

export interface ISessionServiceServer {
    create: grpc.handleUnaryCall<session_service_pb.CreateRequest, session_service_pb.CreateResponse>;
}

export interface ISessionServiceClient {
    create(request: session_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: session_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: session_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}

export class SessionServiceClient extends grpc.Client implements ISessionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: session_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: session_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: session_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
}
