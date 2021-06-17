// package: neo.fs.v2.reputation
// file: reputation/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as reputation_types_pb from "../reputation/types_pb";
import * as session_types_pb from "../session/types_pb";

export class AnnounceLocalTrustRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): AnnounceLocalTrustRequest.Body | undefined;
    setBody(value?: AnnounceLocalTrustRequest.Body): AnnounceLocalTrustRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): AnnounceLocalTrustRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): AnnounceLocalTrustRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceLocalTrustRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceLocalTrustRequest): AnnounceLocalTrustRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceLocalTrustRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceLocalTrustRequest;
    static deserializeBinaryFromReader(message: AnnounceLocalTrustRequest, reader: jspb.BinaryReader): AnnounceLocalTrustRequest;
}

export namespace AnnounceLocalTrustRequest {
    export type AsObject = {
        body?: AnnounceLocalTrustRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 
        getEpoch(): number;
        setEpoch(value: number): Body;
        clearTrustsList(): void;
        getTrustsList(): Array<reputation_types_pb.Trust>;
        setTrustsList(value: Array<reputation_types_pb.Trust>): Body;
        addTrusts(value?: reputation_types_pb.Trust, index?: number): reputation_types_pb.Trust;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Body.AsObject;
        static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Body;
        static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
    }

    export namespace Body {
        export type AsObject = {
            epoch: number,
            trustsList: Array<reputation_types_pb.Trust.AsObject>,
        }
    }

}

export class AnnounceLocalTrustResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): AnnounceLocalTrustResponse.Body | undefined;
    setBody(value?: AnnounceLocalTrustResponse.Body): AnnounceLocalTrustResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): AnnounceLocalTrustResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): AnnounceLocalTrustResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceLocalTrustResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceLocalTrustResponse): AnnounceLocalTrustResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceLocalTrustResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceLocalTrustResponse;
    static deserializeBinaryFromReader(message: AnnounceLocalTrustResponse, reader: jspb.BinaryReader): AnnounceLocalTrustResponse;
}

export namespace AnnounceLocalTrustResponse {
    export type AsObject = {
        body?: AnnounceLocalTrustResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Body.AsObject;
        static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Body;
        static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
    }

    export namespace Body {
        export type AsObject = {
        }
    }

}

export class AnnounceIntermediateResultRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): AnnounceIntermediateResultRequest.Body | undefined;
    setBody(value?: AnnounceIntermediateResultRequest.Body): AnnounceIntermediateResultRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): AnnounceIntermediateResultRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): AnnounceIntermediateResultRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceIntermediateResultRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceIntermediateResultRequest): AnnounceIntermediateResultRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceIntermediateResultRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceIntermediateResultRequest;
    static deserializeBinaryFromReader(message: AnnounceIntermediateResultRequest, reader: jspb.BinaryReader): AnnounceIntermediateResultRequest;
}

export namespace AnnounceIntermediateResultRequest {
    export type AsObject = {
        body?: AnnounceIntermediateResultRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 
        getEpoch(): number;
        setEpoch(value: number): Body;
        getIteration(): number;
        setIteration(value: number): Body;

        hasTrust(): boolean;
        clearTrust(): void;
        getTrust(): reputation_types_pb.PeerToPeerTrust | undefined;
        setTrust(value?: reputation_types_pb.PeerToPeerTrust): Body;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Body.AsObject;
        static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Body;
        static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
    }

    export namespace Body {
        export type AsObject = {
            epoch: number,
            iteration: number,
            trust?: reputation_types_pb.PeerToPeerTrust.AsObject,
        }
    }

}

export class AnnounceIntermediateResultResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): AnnounceIntermediateResultResponse.Body | undefined;
    setBody(value?: AnnounceIntermediateResultResponse.Body): AnnounceIntermediateResultResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): AnnounceIntermediateResultResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): AnnounceIntermediateResultResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnnounceIntermediateResultResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AnnounceIntermediateResultResponse): AnnounceIntermediateResultResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnnounceIntermediateResultResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnnounceIntermediateResultResponse;
    static deserializeBinaryFromReader(message: AnnounceIntermediateResultResponse, reader: jspb.BinaryReader): AnnounceIntermediateResultResponse;
}

export namespace AnnounceIntermediateResultResponse {
    export type AsObject = {
        body?: AnnounceIntermediateResultResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Body.AsObject;
        static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Body;
        static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
    }

    export namespace Body {
        export type AsObject = {
        }
    }

}
