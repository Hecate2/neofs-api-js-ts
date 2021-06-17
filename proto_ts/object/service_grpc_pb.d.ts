// package: neo.fs.v2.object
// file: object/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as object_service_pb from "../object/service_pb";
import * as object_types_pb from "../object/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

interface IObjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IObjectServiceService_IGet;
    put: IObjectServiceService_IPut;
    delete: IObjectServiceService_IDelete;
    head: IObjectServiceService_IHead;
    search: IObjectServiceService_ISearch;
    getRange: IObjectServiceService_IGetRange;
    getRangeHash: IObjectServiceService_IGetRangeHash;
}

interface IObjectServiceService_IGet extends grpc.MethodDefinition<object_service_pb.GetRequest, object_service_pb.GetResponse> {
    path: "/neo.fs.v2.object.ObjectService/Get";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<object_service_pb.GetRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.GetRequest>;
    responseSerialize: grpc.serialize<object_service_pb.GetResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.GetResponse>;
}
interface IObjectServiceService_IPut extends grpc.MethodDefinition<object_service_pb.PutRequest, object_service_pb.PutResponse> {
    path: "/neo.fs.v2.object.ObjectService/Put";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<object_service_pb.PutRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.PutRequest>;
    responseSerialize: grpc.serialize<object_service_pb.PutResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.PutResponse>;
}
interface IObjectServiceService_IDelete extends grpc.MethodDefinition<object_service_pb.DeleteRequest, object_service_pb.DeleteResponse> {
    path: "/neo.fs.v2.object.ObjectService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<object_service_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<object_service_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.DeleteResponse>;
}
interface IObjectServiceService_IHead extends grpc.MethodDefinition<object_service_pb.HeadRequest, object_service_pb.HeadResponse> {
    path: "/neo.fs.v2.object.ObjectService/Head";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<object_service_pb.HeadRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.HeadRequest>;
    responseSerialize: grpc.serialize<object_service_pb.HeadResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.HeadResponse>;
}
interface IObjectServiceService_ISearch extends grpc.MethodDefinition<object_service_pb.SearchRequest, object_service_pb.SearchResponse> {
    path: "/neo.fs.v2.object.ObjectService/Search";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<object_service_pb.SearchRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.SearchRequest>;
    responseSerialize: grpc.serialize<object_service_pb.SearchResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.SearchResponse>;
}
interface IObjectServiceService_IGetRange extends grpc.MethodDefinition<object_service_pb.GetRangeRequest, object_service_pb.GetRangeResponse> {
    path: "/neo.fs.v2.object.ObjectService/GetRange";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<object_service_pb.GetRangeRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.GetRangeRequest>;
    responseSerialize: grpc.serialize<object_service_pb.GetRangeResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.GetRangeResponse>;
}
interface IObjectServiceService_IGetRangeHash extends grpc.MethodDefinition<object_service_pb.GetRangeHashRequest, object_service_pb.GetRangeHashResponse> {
    path: "/neo.fs.v2.object.ObjectService/GetRangeHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<object_service_pb.GetRangeHashRequest>;
    requestDeserialize: grpc.deserialize<object_service_pb.GetRangeHashRequest>;
    responseSerialize: grpc.serialize<object_service_pb.GetRangeHashResponse>;
    responseDeserialize: grpc.deserialize<object_service_pb.GetRangeHashResponse>;
}

export const ObjectServiceService: IObjectServiceService;

export interface IObjectServiceServer {
    get: grpc.handleServerStreamingCall<object_service_pb.GetRequest, object_service_pb.GetResponse>;
    put: grpc.handleClientStreamingCall<object_service_pb.PutRequest, object_service_pb.PutResponse>;
    delete: grpc.handleUnaryCall<object_service_pb.DeleteRequest, object_service_pb.DeleteResponse>;
    head: grpc.handleUnaryCall<object_service_pb.HeadRequest, object_service_pb.HeadResponse>;
    search: grpc.handleServerStreamingCall<object_service_pb.SearchRequest, object_service_pb.SearchResponse>;
    getRange: grpc.handleServerStreamingCall<object_service_pb.GetRangeRequest, object_service_pb.GetRangeResponse>;
    getRangeHash: grpc.handleUnaryCall<object_service_pb.GetRangeHashRequest, object_service_pb.GetRangeHashResponse>;
}

export interface IObjectServiceClient {
    get(request: object_service_pb.GetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetResponse>;
    get(request: object_service_pb.GetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetResponse>;
    put(callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    put(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    put(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    put(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    delete(request: object_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: object_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: object_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    head(request: object_service_pb.HeadRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    head(request: object_service_pb.HeadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    head(request: object_service_pb.HeadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    search(request: object_service_pb.SearchRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.SearchResponse>;
    search(request: object_service_pb.SearchRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.SearchResponse>;
    getRange(request: object_service_pb.GetRangeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetRangeResponse>;
    getRange(request: object_service_pb.GetRangeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetRangeResponse>;
    getRangeHash(request: object_service_pb.GetRangeHashRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
    getRangeHash(request: object_service_pb.GetRangeHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
    getRangeHash(request: object_service_pb.GetRangeHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
}

export class ObjectServiceClient extends grpc.Client implements IObjectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public get(request: object_service_pb.GetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetResponse>;
    public get(request: object_service_pb.GetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetResponse>;
    public put(callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    public put(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    public put(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    public put(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.PutResponse) => void): grpc.ClientWritableStream<object_service_pb.PutRequest>;
    public delete(request: object_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: object_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: object_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public head(request: object_service_pb.HeadRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    public head(request: object_service_pb.HeadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    public head(request: object_service_pb.HeadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.HeadResponse) => void): grpc.ClientUnaryCall;
    public search(request: object_service_pb.SearchRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.SearchResponse>;
    public search(request: object_service_pb.SearchRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.SearchResponse>;
    public getRange(request: object_service_pb.GetRangeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetRangeResponse>;
    public getRange(request: object_service_pb.GetRangeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<object_service_pb.GetRangeResponse>;
    public getRangeHash(request: object_service_pb.GetRangeHashRequest, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
    public getRangeHash(request: object_service_pb.GetRangeHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
    public getRangeHash(request: object_service_pb.GetRangeHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: object_service_pb.GetRangeHashResponse) => void): grpc.ClientUnaryCall;
}
