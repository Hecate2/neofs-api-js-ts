// package: neo.fs.v2.object
// file: object/service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as object_types_pb from "../object/types_pb";
import * as refs_types_pb from "../refs/types_pb";
import * as session_types_pb from "../session/types_pb";

export class GetRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetRequest.Body | undefined;
    setBody(value?: GetRequest.Body): GetRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): GetRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): GetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRequest;
    static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
    export type AsObject = {
        body?: GetRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): refs_types_pb.Address | undefined;
        setAddress(value?: refs_types_pb.Address): Body;
        getRaw(): boolean;
        setRaw(value: boolean): Body;

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
            address?: refs_types_pb.Address.AsObject,
            raw: boolean,
        }
    }

}

export class GetResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetResponse.Body | undefined;
    setBody(value?: GetResponse.Body): GetResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): GetResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): GetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponse;
    static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
    export type AsObject = {
        body?: GetResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasInit(): boolean;
        clearInit(): void;
        getInit(): GetResponse.Body.Init | undefined;
        setInit(value?: GetResponse.Body.Init): Body;

        hasChunk(): boolean;
        clearChunk(): void;
        getChunk(): Uint8Array | string;
        getChunk_asU8(): Uint8Array;
        getChunk_asB64(): string;
        setChunk(value: Uint8Array | string): Body;

        hasSplitInfo(): boolean;
        clearSplitInfo(): void;
        getSplitInfo(): object_types_pb.SplitInfo | undefined;
        setSplitInfo(value?: object_types_pb.SplitInfo): Body;

        getObjectPartCase(): Body.ObjectPartCase;

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
            init?: GetResponse.Body.Init.AsObject,
            chunk: Uint8Array | string,
            splitInfo?: object_types_pb.SplitInfo.AsObject,
        }


        export class Init extends jspb.Message { 

            hasObjectId(): boolean;
            clearObjectId(): void;
            getObjectId(): refs_types_pb.ObjectID | undefined;
            setObjectId(value?: refs_types_pb.ObjectID): Init;

            hasSignature(): boolean;
            clearSignature(): void;
            getSignature(): refs_types_pb.Signature | undefined;
            setSignature(value?: refs_types_pb.Signature): Init;

            hasHeader(): boolean;
            clearHeader(): void;
            getHeader(): object_types_pb.Header | undefined;
            setHeader(value?: object_types_pb.Header): Init;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Init.AsObject;
            static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Init;
            static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
        }

        export namespace Init {
            export type AsObject = {
                objectId?: refs_types_pb.ObjectID.AsObject,
                signature?: refs_types_pb.Signature.AsObject,
                header?: object_types_pb.Header.AsObject,
            }
        }


        export enum ObjectPartCase {
            OBJECT_PART_NOT_SET = 0,
            INIT = 1,
            CHUNK = 2,
            SPLIT_INFO = 3,
        }

    }

}

export class PutRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): PutRequest.Body | undefined;
    setBody(value?: PutRequest.Body): PutRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): PutRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): PutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutRequest): PutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutRequest;
    static deserializeBinaryFromReader(message: PutRequest, reader: jspb.BinaryReader): PutRequest;
}

export namespace PutRequest {
    export type AsObject = {
        body?: PutRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasInit(): boolean;
        clearInit(): void;
        getInit(): PutRequest.Body.Init | undefined;
        setInit(value?: PutRequest.Body.Init): Body;

        hasChunk(): boolean;
        clearChunk(): void;
        getChunk(): Uint8Array | string;
        getChunk_asU8(): Uint8Array;
        getChunk_asB64(): string;
        setChunk(value: Uint8Array | string): Body;

        getObjectPartCase(): Body.ObjectPartCase;

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
            init?: PutRequest.Body.Init.AsObject,
            chunk: Uint8Array | string,
        }


        export class Init extends jspb.Message { 

            hasObjectId(): boolean;
            clearObjectId(): void;
            getObjectId(): refs_types_pb.ObjectID | undefined;
            setObjectId(value?: refs_types_pb.ObjectID): Init;

            hasSignature(): boolean;
            clearSignature(): void;
            getSignature(): refs_types_pb.Signature | undefined;
            setSignature(value?: refs_types_pb.Signature): Init;

            hasHeader(): boolean;
            clearHeader(): void;
            getHeader(): object_types_pb.Header | undefined;
            setHeader(value?: object_types_pb.Header): Init;
            getCopiesNumber(): number;
            setCopiesNumber(value: number): Init;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Init.AsObject;
            static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Init;
            static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
        }

        export namespace Init {
            export type AsObject = {
                objectId?: refs_types_pb.ObjectID.AsObject,
                signature?: refs_types_pb.Signature.AsObject,
                header?: object_types_pb.Header.AsObject,
                copiesNumber: number,
            }
        }


        export enum ObjectPartCase {
            OBJECT_PART_NOT_SET = 0,
            INIT = 1,
            CHUNK = 2,
        }

    }

}

export class PutResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): PutResponse.Body | undefined;
    setBody(value?: PutResponse.Body): PutResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): PutResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): PutResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PutResponse): PutResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutResponse;
    static deserializeBinaryFromReader(message: PutResponse, reader: jspb.BinaryReader): PutResponse;
}

export namespace PutResponse {
    export type AsObject = {
        body?: PutResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasObjectId(): boolean;
        clearObjectId(): void;
        getObjectId(): refs_types_pb.ObjectID | undefined;
        setObjectId(value?: refs_types_pb.ObjectID): Body;

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
            objectId?: refs_types_pb.ObjectID.AsObject,
        }
    }

}

export class DeleteRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): DeleteRequest.Body | undefined;
    setBody(value?: DeleteRequest.Body): DeleteRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): DeleteRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        body?: DeleteRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): refs_types_pb.Address | undefined;
        setAddress(value?: refs_types_pb.Address): Body;

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
            address?: refs_types_pb.Address.AsObject,
        }
    }

}

export class DeleteResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): DeleteResponse.Body | undefined;
    setBody(value?: DeleteResponse.Body): DeleteResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): DeleteResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): DeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        body?: DeleteResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasTombstone(): boolean;
        clearTombstone(): void;
        getTombstone(): refs_types_pb.Address | undefined;
        setTombstone(value?: refs_types_pb.Address): Body;

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
            tombstone?: refs_types_pb.Address.AsObject,
        }
    }

}

export class HeadRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): HeadRequest.Body | undefined;
    setBody(value?: HeadRequest.Body): HeadRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): HeadRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): HeadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HeadRequest): HeadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeadRequest;
    static deserializeBinaryFromReader(message: HeadRequest, reader: jspb.BinaryReader): HeadRequest;
}

export namespace HeadRequest {
    export type AsObject = {
        body?: HeadRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): refs_types_pb.Address | undefined;
        setAddress(value?: refs_types_pb.Address): Body;
        getMainOnly(): boolean;
        setMainOnly(value: boolean): Body;
        getRaw(): boolean;
        setRaw(value: boolean): Body;

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
            address?: refs_types_pb.Address.AsObject,
            mainOnly: boolean,
            raw: boolean,
        }
    }

}

export class HeaderWithSignature extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): object_types_pb.Header | undefined;
    setHeader(value?: object_types_pb.Header): HeaderWithSignature;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): refs_types_pb.Signature | undefined;
    setSignature(value?: refs_types_pb.Signature): HeaderWithSignature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeaderWithSignature.AsObject;
    static toObject(includeInstance: boolean, msg: HeaderWithSignature): HeaderWithSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeaderWithSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeaderWithSignature;
    static deserializeBinaryFromReader(message: HeaderWithSignature, reader: jspb.BinaryReader): HeaderWithSignature;
}

export namespace HeaderWithSignature {
    export type AsObject = {
        header?: object_types_pb.Header.AsObject,
        signature?: refs_types_pb.Signature.AsObject,
    }
}

export class HeadResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): HeadResponse.Body | undefined;
    setBody(value?: HeadResponse.Body): HeadResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): HeadResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): HeadResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HeadResponse): HeadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeadResponse;
    static deserializeBinaryFromReader(message: HeadResponse, reader: jspb.BinaryReader): HeadResponse;
}

export namespace HeadResponse {
    export type AsObject = {
        body?: HeadResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasHeader(): boolean;
        clearHeader(): void;
        getHeader(): HeaderWithSignature | undefined;
        setHeader(value?: HeaderWithSignature): Body;

        hasShortHeader(): boolean;
        clearShortHeader(): void;
        getShortHeader(): object_types_pb.ShortHeader | undefined;
        setShortHeader(value?: object_types_pb.ShortHeader): Body;

        hasSplitInfo(): boolean;
        clearSplitInfo(): void;
        getSplitInfo(): object_types_pb.SplitInfo | undefined;
        setSplitInfo(value?: object_types_pb.SplitInfo): Body;

        getHeadCase(): Body.HeadCase;

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
            header?: HeaderWithSignature.AsObject,
            shortHeader?: object_types_pb.ShortHeader.AsObject,
            splitInfo?: object_types_pb.SplitInfo.AsObject,
        }

        export enum HeadCase {
            HEAD_NOT_SET = 0,
            HEADER = 1,
            SHORT_HEADER = 2,
            SPLIT_INFO = 3,
        }

    }

}

export class SearchRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SearchRequest.Body | undefined;
    setBody(value?: SearchRequest.Body): SearchRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): SearchRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): SearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchRequest;
    static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
    export type AsObject = {
        body?: SearchRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasContainerId(): boolean;
        clearContainerId(): void;
        getContainerId(): refs_types_pb.ContainerID | undefined;
        setContainerId(value?: refs_types_pb.ContainerID): Body;
        getVersion(): number;
        setVersion(value: number): Body;
        clearFiltersList(): void;
        getFiltersList(): Array<SearchRequest.Body.Filter>;
        setFiltersList(value: Array<SearchRequest.Body.Filter>): Body;
        addFilters(value?: SearchRequest.Body.Filter, index?: number): SearchRequest.Body.Filter;

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
            containerId?: refs_types_pb.ContainerID.AsObject,
            version: number,
            filtersList: Array<SearchRequest.Body.Filter.AsObject>,
        }


        export class Filter extends jspb.Message { 
            getMatchType(): object_types_pb.MatchType;
            setMatchType(value: object_types_pb.MatchType): Filter;
            getKey(): string;
            setKey(value: string): Filter;
            getValue(): string;
            setValue(value: string): Filter;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Filter.AsObject;
            static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Filter;
            static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
        }

        export namespace Filter {
            export type AsObject = {
                matchType: object_types_pb.MatchType,
                key: string,
                value: string,
            }
        }

    }

}

export class SearchResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SearchResponse.Body | undefined;
    setBody(value?: SearchResponse.Body): SearchResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): SearchResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): SearchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchResponse): SearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchResponse;
    static deserializeBinaryFromReader(message: SearchResponse, reader: jspb.BinaryReader): SearchResponse;
}

export namespace SearchResponse {
    export type AsObject = {
        body?: SearchResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 
        clearIdListList(): void;
        getIdListList(): Array<refs_types_pb.ObjectID>;
        setIdListList(value: Array<refs_types_pb.ObjectID>): Body;
        addIdList(value?: refs_types_pb.ObjectID, index?: number): refs_types_pb.ObjectID;

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
            idListList: Array<refs_types_pb.ObjectID.AsObject>,
        }
    }

}

export class Range extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): Range;
    getLength(): number;
    setLength(value: number): Range;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
    export type AsObject = {
        offset: number,
        length: number,
    }
}

export class GetRangeRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetRangeRequest.Body | undefined;
    setBody(value?: GetRangeRequest.Body): GetRangeRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): GetRangeRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): GetRangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRangeRequest): GetRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRangeRequest;
    static deserializeBinaryFromReader(message: GetRangeRequest, reader: jspb.BinaryReader): GetRangeRequest;
}

export namespace GetRangeRequest {
    export type AsObject = {
        body?: GetRangeRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): refs_types_pb.Address | undefined;
        setAddress(value?: refs_types_pb.Address): Body;

        hasRange(): boolean;
        clearRange(): void;
        getRange(): Range | undefined;
        setRange(value?: Range): Body;
        getRaw(): boolean;
        setRaw(value: boolean): Body;

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
            address?: refs_types_pb.Address.AsObject,
            range?: Range.AsObject,
            raw: boolean,
        }
    }

}

export class GetRangeResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetRangeResponse.Body | undefined;
    setBody(value?: GetRangeResponse.Body): GetRangeResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): GetRangeResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): GetRangeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRangeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRangeResponse): GetRangeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRangeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRangeResponse;
    static deserializeBinaryFromReader(message: GetRangeResponse, reader: jspb.BinaryReader): GetRangeResponse;
}

export namespace GetRangeResponse {
    export type AsObject = {
        body?: GetRangeResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasChunk(): boolean;
        clearChunk(): void;
        getChunk(): Uint8Array | string;
        getChunk_asU8(): Uint8Array;
        getChunk_asB64(): string;
        setChunk(value: Uint8Array | string): Body;

        hasSplitInfo(): boolean;
        clearSplitInfo(): void;
        getSplitInfo(): object_types_pb.SplitInfo | undefined;
        setSplitInfo(value?: object_types_pb.SplitInfo): Body;

        getRangePartCase(): Body.RangePartCase;

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
            chunk: Uint8Array | string,
            splitInfo?: object_types_pb.SplitInfo.AsObject,
        }

        export enum RangePartCase {
            RANGE_PART_NOT_SET = 0,
            CHUNK = 1,
            SPLIT_INFO = 2,
        }

    }

}

export class GetRangeHashRequest extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetRangeHashRequest.Body | undefined;
    setBody(value?: GetRangeHashRequest.Body): GetRangeHashRequest;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.RequestMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.RequestMetaHeader): GetRangeHashRequest;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.RequestVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.RequestVerificationHeader): GetRangeHashRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRangeHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRangeHashRequest): GetRangeHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRangeHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRangeHashRequest;
    static deserializeBinaryFromReader(message: GetRangeHashRequest, reader: jspb.BinaryReader): GetRangeHashRequest;
}

export namespace GetRangeHashRequest {
    export type AsObject = {
        body?: GetRangeHashRequest.Body.AsObject,
        metaHeader?: session_types_pb.RequestMetaHeader.AsObject,
        verifyHeader?: session_types_pb.RequestVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): refs_types_pb.Address | undefined;
        setAddress(value?: refs_types_pb.Address): Body;
        clearRangesList(): void;
        getRangesList(): Array<Range>;
        setRangesList(value: Array<Range>): Body;
        addRanges(value?: Range, index?: number): Range;
        getSalt(): Uint8Array | string;
        getSalt_asU8(): Uint8Array;
        getSalt_asB64(): string;
        setSalt(value: Uint8Array | string): Body;
        getType(): refs_types_pb.ChecksumType;
        setType(value: refs_types_pb.ChecksumType): Body;

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
            address?: refs_types_pb.Address.AsObject,
            rangesList: Array<Range.AsObject>,
            salt: Uint8Array | string,
            type: refs_types_pb.ChecksumType,
        }
    }

}

export class GetRangeHashResponse extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): GetRangeHashResponse.Body | undefined;
    setBody(value?: GetRangeHashResponse.Body): GetRangeHashResponse;

    hasMetaHeader(): boolean;
    clearMetaHeader(): void;
    getMetaHeader(): session_types_pb.ResponseMetaHeader | undefined;
    setMetaHeader(value?: session_types_pb.ResponseMetaHeader): GetRangeHashResponse;

    hasVerifyHeader(): boolean;
    clearVerifyHeader(): void;
    getVerifyHeader(): session_types_pb.ResponseVerificationHeader | undefined;
    setVerifyHeader(value?: session_types_pb.ResponseVerificationHeader): GetRangeHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRangeHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRangeHashResponse): GetRangeHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRangeHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRangeHashResponse;
    static deserializeBinaryFromReader(message: GetRangeHashResponse, reader: jspb.BinaryReader): GetRangeHashResponse;
}

export namespace GetRangeHashResponse {
    export type AsObject = {
        body?: GetRangeHashResponse.Body.AsObject,
        metaHeader?: session_types_pb.ResponseMetaHeader.AsObject,
        verifyHeader?: session_types_pb.ResponseVerificationHeader.AsObject,
    }


    export class Body extends jspb.Message { 
        getType(): refs_types_pb.ChecksumType;
        setType(value: refs_types_pb.ChecksumType): Body;
        clearHashListList(): void;
        getHashListList(): Array<Uint8Array | string>;
        getHashListList_asU8(): Array<Uint8Array>;
        getHashListList_asB64(): Array<string>;
        setHashListList(value: Array<Uint8Array | string>): Body;
        addHashList(value: Uint8Array | string, index?: number): Uint8Array | string;

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
            type: refs_types_pb.ChecksumType,
            hashListList: Array<Uint8Array | string>,
        }
    }

}
