// package: neo.fs.v2.accounting
// file: accounting/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as accounting_service_pb from "../accounting/service_pb";
import * as accounting_types_pb from "../accounting/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

interface IAccountingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    balance: IAccountingServiceService_IBalance;
}

interface IAccountingServiceService_IBalance extends grpc.MethodDefinition<accounting_service_pb.BalanceRequest, accounting_service_pb.BalanceResponse> {
    path: "/neo.fs.v2.accounting.AccountingService/Balance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<accounting_service_pb.BalanceRequest>;
    requestDeserialize: grpc.deserialize<accounting_service_pb.BalanceRequest>;
    responseSerialize: grpc.serialize<accounting_service_pb.BalanceResponse>;
    responseDeserialize: grpc.deserialize<accounting_service_pb.BalanceResponse>;
}

export const AccountingServiceService: IAccountingServiceService;

export interface IAccountingServiceServer {
    balance: grpc.handleUnaryCall<accounting_service_pb.BalanceRequest, accounting_service_pb.BalanceResponse>;
}

export interface IAccountingServiceClient {
    balance(request: accounting_service_pb.BalanceRequest, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: accounting_service_pb.BalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
    balance(request: accounting_service_pb.BalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
}

export class AccountingServiceClient extends grpc.Client implements IAccountingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public balance(request: accounting_service_pb.BalanceRequest, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: accounting_service_pb.BalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
    public balance(request: accounting_service_pb.BalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounting_service_pb.BalanceResponse) => void): grpc.ClientUnaryCall;
}
