// package: neo.fs.v2.container
// file: container/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as container_service_pb from "../container/service_pb";
import * as acl_types_pb from "../acl/types_pb";
import * as container_types_pb from "../container/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

interface IContainerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    put: IContainerServiceService_IPut;
    delete: IContainerServiceService_IDelete;
    get: IContainerServiceService_IGet;
    list: IContainerServiceService_IList;
    setExtendedACL: IContainerServiceService_ISetExtendedACL;
    getExtendedACL: IContainerServiceService_IGetExtendedACL;
    announceUsedSpace: IContainerServiceService_IAnnounceUsedSpace;
}

interface IContainerServiceService_IPut extends grpc.MethodDefinition<container_service_pb.PutRequest, container_service_pb.PutResponse> {
    path: "/neo.fs.v2.container.ContainerService/Put";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.PutRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.PutRequest>;
    responseSerialize: grpc.serialize<container_service_pb.PutResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.PutResponse>;
}
interface IContainerServiceService_IDelete extends grpc.MethodDefinition<container_service_pb.DeleteRequest, container_service_pb.DeleteResponse> {
    path: "/neo.fs.v2.container.ContainerService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<container_service_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.DeleteResponse>;
}
interface IContainerServiceService_IGet extends grpc.MethodDefinition<container_service_pb.GetRequest, container_service_pb.GetResponse> {
    path: "/neo.fs.v2.container.ContainerService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.GetRequest>;
    responseSerialize: grpc.serialize<container_service_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.GetResponse>;
}
interface IContainerServiceService_IList extends grpc.MethodDefinition<container_service_pb.ListRequest, container_service_pb.ListResponse> {
    path: "/neo.fs.v2.container.ContainerService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.ListRequest>;
    responseSerialize: grpc.serialize<container_service_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.ListResponse>;
}
interface IContainerServiceService_ISetExtendedACL extends grpc.MethodDefinition<container_service_pb.SetExtendedACLRequest, container_service_pb.SetExtendedACLResponse> {
    path: "/neo.fs.v2.container.ContainerService/SetExtendedACL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.SetExtendedACLRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.SetExtendedACLRequest>;
    responseSerialize: grpc.serialize<container_service_pb.SetExtendedACLResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.SetExtendedACLResponse>;
}
interface IContainerServiceService_IGetExtendedACL extends grpc.MethodDefinition<container_service_pb.GetExtendedACLRequest, container_service_pb.GetExtendedACLResponse> {
    path: "/neo.fs.v2.container.ContainerService/GetExtendedACL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.GetExtendedACLRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.GetExtendedACLRequest>;
    responseSerialize: grpc.serialize<container_service_pb.GetExtendedACLResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.GetExtendedACLResponse>;
}
interface IContainerServiceService_IAnnounceUsedSpace extends grpc.MethodDefinition<container_service_pb.AnnounceUsedSpaceRequest, container_service_pb.AnnounceUsedSpaceResponse> {
    path: "/neo.fs.v2.container.ContainerService/AnnounceUsedSpace";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<container_service_pb.AnnounceUsedSpaceRequest>;
    requestDeserialize: grpc.deserialize<container_service_pb.AnnounceUsedSpaceRequest>;
    responseSerialize: grpc.serialize<container_service_pb.AnnounceUsedSpaceResponse>;
    responseDeserialize: grpc.deserialize<container_service_pb.AnnounceUsedSpaceResponse>;
}

export const ContainerServiceService: IContainerServiceService;

export interface IContainerServiceServer {
    put: grpc.handleUnaryCall<container_service_pb.PutRequest, container_service_pb.PutResponse>;
    delete: grpc.handleUnaryCall<container_service_pb.DeleteRequest, container_service_pb.DeleteResponse>;
    get: grpc.handleUnaryCall<container_service_pb.GetRequest, container_service_pb.GetResponse>;
    list: grpc.handleUnaryCall<container_service_pb.ListRequest, container_service_pb.ListResponse>;
    setExtendedACL: grpc.handleUnaryCall<container_service_pb.SetExtendedACLRequest, container_service_pb.SetExtendedACLResponse>;
    getExtendedACL: grpc.handleUnaryCall<container_service_pb.GetExtendedACLRequest, container_service_pb.GetExtendedACLResponse>;
    announceUsedSpace: grpc.handleUnaryCall<container_service_pb.AnnounceUsedSpaceRequest, container_service_pb.AnnounceUsedSpaceResponse>;
}

export interface IContainerServiceClient {
    put(request: container_service_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: container_service_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    put(request: container_service_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    delete(request: container_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: container_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: container_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    get(request: container_service_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: container_service_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    get(request: container_service_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    list(request: container_service_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: container_service_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: container_service_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    setExtendedACL(request: container_service_pb.SetExtendedACLRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    setExtendedACL(request: container_service_pb.SetExtendedACLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    setExtendedACL(request: container_service_pb.SetExtendedACLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    getExtendedACL(request: container_service_pb.GetExtendedACLRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    getExtendedACL(request: container_service_pb.GetExtendedACLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    getExtendedACL(request: container_service_pb.GetExtendedACLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
    announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
    announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
}

export class ContainerServiceClient extends grpc.Client implements IContainerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public put(request: container_service_pb.PutRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: container_service_pb.PutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public put(request: container_service_pb.PutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.PutResponse) => void): grpc.ClientUnaryCall;
    public delete(request: container_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: container_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: container_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public get(request: container_service_pb.GetRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: container_service_pb.GetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public get(request: container_service_pb.GetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetResponse) => void): grpc.ClientUnaryCall;
    public list(request: container_service_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: container_service_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: container_service_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public setExtendedACL(request: container_service_pb.SetExtendedACLRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public setExtendedACL(request: container_service_pb.SetExtendedACLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public setExtendedACL(request: container_service_pb.SetExtendedACLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.SetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public getExtendedACL(request: container_service_pb.GetExtendedACLRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public getExtendedACL(request: container_service_pb.GetExtendedACLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public getExtendedACL(request: container_service_pb.GetExtendedACLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.GetExtendedACLResponse) => void): grpc.ClientUnaryCall;
    public announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
    public announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
    public announceUsedSpace(request: container_service_pb.AnnounceUsedSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: container_service_pb.AnnounceUsedSpaceResponse) => void): grpc.ClientUnaryCall;
}
