// package: neo.fs.v2.session
// file: session/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as refs_types_pb from "../refs/types_pb";
import * as acl_types_pb from "../acl/types_pb";

export class ObjectSessionContext extends jspb.Message { 
    getVerb(): ObjectSessionContext.Verb;
    setVerb(value: ObjectSessionContext.Verb): ObjectSessionContext;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): refs_types_pb.Address | undefined;
    setAddress(value?: refs_types_pb.Address): ObjectSessionContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ObjectSessionContext.AsObject;
    static toObject(includeInstance: boolean, msg: ObjectSessionContext): ObjectSessionContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ObjectSessionContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ObjectSessionContext;
    static deserializeBinaryFromReader(message: ObjectSessionContext, reader: jspb.BinaryReader): ObjectSessionContext;
}

export namespace ObjectSessionContext {
    export type AsObject = {
        verb: ObjectSessionContext.Verb,
        address?: refs_types_pb.Address.AsObject,
    }

    export enum Verb {
    VERB_UNSPECIFIED = 0,
    PUT = 1,
    GET = 2,
    HEAD = 3,
    SEARCH = 4,
    DELETE = 5,
    RANGE = 6,
    RANGEHASH = 7,
    }

}

export class ContainerSessionContext extends jspb.Message { 
    getVerb(): ContainerSessionContext.Verb;
    setVerb(value: ContainerSessionContext.Verb): ContainerSessionContext;
    getWildcard(): boolean;
    setWildcard(value: boolean): ContainerSessionContext;

    hasContainerId(): boolean;
    clearContainerId(): void;
    getContainerId(): refs_types_pb.ContainerID | undefined;
    setContainerId(value?: refs_types_pb.ContainerID): ContainerSessionContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContainerSessionContext.AsObject;
    static toObject(includeInstance: boolean, msg: ContainerSessionContext): ContainerSessionContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContainerSessionContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContainerSessionContext;
    static deserializeBinaryFromReader(message: ContainerSessionContext, reader: jspb.BinaryReader): ContainerSessionContext;
}

export namespace ContainerSessionContext {
    export type AsObject = {
        verb: ContainerSessionContext.Verb,
        wildcard: boolean,
        containerId?: refs_types_pb.ContainerID.AsObject,
    }

    export enum Verb {
    VERB_UNSPECIFIED = 0,
    PUT = 1,
    DELETE = 2,
    SETEACL = 3,
    }

}

export class SessionToken extends jspb.Message { 

    hasBody(): boolean;
    clearBody(): void;
    getBody(): SessionToken.Body | undefined;
    setBody(value?: SessionToken.Body): SessionToken;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): refs_types_pb.Signature | undefined;
    setSignature(value?: refs_types_pb.Signature): SessionToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionToken.AsObject;
    static toObject(includeInstance: boolean, msg: SessionToken): SessionToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionToken;
    static deserializeBinaryFromReader(message: SessionToken, reader: jspb.BinaryReader): SessionToken;
}

export namespace SessionToken {
    export type AsObject = {
        body?: SessionToken.Body.AsObject,
        signature?: refs_types_pb.Signature.AsObject,
    }


    export class Body extends jspb.Message { 
        getId(): Uint8Array | string;
        getId_asU8(): Uint8Array;
        getId_asB64(): string;
        setId(value: Uint8Array | string): Body;

        hasOwnerId(): boolean;
        clearOwnerId(): void;
        getOwnerId(): refs_types_pb.OwnerID | undefined;
        setOwnerId(value?: refs_types_pb.OwnerID): Body;

        hasLifetime(): boolean;
        clearLifetime(): void;
        getLifetime(): SessionToken.Body.TokenLifetime | undefined;
        setLifetime(value?: SessionToken.Body.TokenLifetime): Body;
        getSessionKey(): Uint8Array | string;
        getSessionKey_asU8(): Uint8Array;
        getSessionKey_asB64(): string;
        setSessionKey(value: Uint8Array | string): Body;

        hasObject(): boolean;
        clearObject(): void;
        getObject(): ObjectSessionContext | undefined;
        setObject(value?: ObjectSessionContext): Body;

        hasContainer(): boolean;
        clearContainer(): void;
        getContainer(): ContainerSessionContext | undefined;
        setContainer(value?: ContainerSessionContext): Body;

        getContextCase(): Body.ContextCase;

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
            id: Uint8Array | string,
            ownerId?: refs_types_pb.OwnerID.AsObject,
            lifetime?: SessionToken.Body.TokenLifetime.AsObject,
            sessionKey: Uint8Array | string,
            object?: ObjectSessionContext.AsObject,
            container?: ContainerSessionContext.AsObject,
        }


        export class TokenLifetime extends jspb.Message { 
            getExp(): number;
            setExp(value: number): TokenLifetime;
            getNbf(): number;
            setNbf(value: number): TokenLifetime;
            getIat(): number;
            setIat(value: number): TokenLifetime;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): TokenLifetime.AsObject;
            static toObject(includeInstance: boolean, msg: TokenLifetime): TokenLifetime.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: TokenLifetime, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): TokenLifetime;
            static deserializeBinaryFromReader(message: TokenLifetime, reader: jspb.BinaryReader): TokenLifetime;
        }

        export namespace TokenLifetime {
            export type AsObject = {
                exp: number,
                nbf: number,
                iat: number,
            }
        }


        export enum ContextCase {
            CONTEXT_NOT_SET = 0,
            OBJECT = 5,
            CONTAINER = 6,
        }

    }

}

export class XHeader extends jspb.Message { 
    getKey(): string;
    setKey(value: string): XHeader;
    getValue(): string;
    setValue(value: string): XHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XHeader.AsObject;
    static toObject(includeInstance: boolean, msg: XHeader): XHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XHeader;
    static deserializeBinaryFromReader(message: XHeader, reader: jspb.BinaryReader): XHeader;
}

export namespace XHeader {
    export type AsObject = {
        key: string,
        value: string,
    }
}

export class RequestMetaHeader extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): refs_types_pb.Version | undefined;
    setVersion(value?: refs_types_pb.Version): RequestMetaHeader;
    getEpoch(): number;
    setEpoch(value: number): RequestMetaHeader;
    getTtl(): number;
    setTtl(value: number): RequestMetaHeader;
    clearXHeadersList(): void;
    getXHeadersList(): Array<XHeader>;
    setXHeadersList(value: Array<XHeader>): RequestMetaHeader;
    addXHeaders(value?: XHeader, index?: number): XHeader;

    hasSessionToken(): boolean;
    clearSessionToken(): void;
    getSessionToken(): SessionToken | undefined;
    setSessionToken(value?: SessionToken): RequestMetaHeader;

    hasBearerToken(): boolean;
    clearBearerToken(): void;
    getBearerToken(): acl_types_pb.BearerToken | undefined;
    setBearerToken(value?: acl_types_pb.BearerToken): RequestMetaHeader;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): RequestMetaHeader | undefined;
    setOrigin(value?: RequestMetaHeader): RequestMetaHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestMetaHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RequestMetaHeader): RequestMetaHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestMetaHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestMetaHeader;
    static deserializeBinaryFromReader(message: RequestMetaHeader, reader: jspb.BinaryReader): RequestMetaHeader;
}

export namespace RequestMetaHeader {
    export type AsObject = {
        version?: refs_types_pb.Version.AsObject,
        epoch: number,
        ttl: number,
        xHeadersList: Array<XHeader.AsObject>,
        sessionToken?: SessionToken.AsObject,
        bearerToken?: acl_types_pb.BearerToken.AsObject,
        origin?: RequestMetaHeader.AsObject,
    }
}

export class ResponseMetaHeader extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): refs_types_pb.Version | undefined;
    setVersion(value?: refs_types_pb.Version): ResponseMetaHeader;
    getEpoch(): number;
    setEpoch(value: number): ResponseMetaHeader;
    getTtl(): number;
    setTtl(value: number): ResponseMetaHeader;
    clearXHeadersList(): void;
    getXHeadersList(): Array<XHeader>;
    setXHeadersList(value: Array<XHeader>): ResponseMetaHeader;
    addXHeaders(value?: XHeader, index?: number): XHeader;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): ResponseMetaHeader | undefined;
    setOrigin(value?: ResponseMetaHeader): ResponseMetaHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseMetaHeader.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseMetaHeader): ResponseMetaHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseMetaHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseMetaHeader;
    static deserializeBinaryFromReader(message: ResponseMetaHeader, reader: jspb.BinaryReader): ResponseMetaHeader;
}

export namespace ResponseMetaHeader {
    export type AsObject = {
        version?: refs_types_pb.Version.AsObject,
        epoch: number,
        ttl: number,
        xHeadersList: Array<XHeader.AsObject>,
        origin?: ResponseMetaHeader.AsObject,
    }
}

export class RequestVerificationHeader extends jspb.Message { 

    hasBodySignature(): boolean;
    clearBodySignature(): void;
    getBodySignature(): refs_types_pb.Signature | undefined;
    setBodySignature(value?: refs_types_pb.Signature): RequestVerificationHeader;

    hasMetaSignature(): boolean;
    clearMetaSignature(): void;
    getMetaSignature(): refs_types_pb.Signature | undefined;
    setMetaSignature(value?: refs_types_pb.Signature): RequestVerificationHeader;

    hasOriginSignature(): boolean;
    clearOriginSignature(): void;
    getOriginSignature(): refs_types_pb.Signature | undefined;
    setOriginSignature(value?: refs_types_pb.Signature): RequestVerificationHeader;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): RequestVerificationHeader | undefined;
    setOrigin(value?: RequestVerificationHeader): RequestVerificationHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestVerificationHeader.AsObject;
    static toObject(includeInstance: boolean, msg: RequestVerificationHeader): RequestVerificationHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestVerificationHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestVerificationHeader;
    static deserializeBinaryFromReader(message: RequestVerificationHeader, reader: jspb.BinaryReader): RequestVerificationHeader;
}

export namespace RequestVerificationHeader {
    export type AsObject = {
        bodySignature?: refs_types_pb.Signature.AsObject,
        metaSignature?: refs_types_pb.Signature.AsObject,
        originSignature?: refs_types_pb.Signature.AsObject,
        origin?: RequestVerificationHeader.AsObject,
    }
}

export class ResponseVerificationHeader extends jspb.Message { 

    hasBodySignature(): boolean;
    clearBodySignature(): void;
    getBodySignature(): refs_types_pb.Signature | undefined;
    setBodySignature(value?: refs_types_pb.Signature): ResponseVerificationHeader;

    hasMetaSignature(): boolean;
    clearMetaSignature(): void;
    getMetaSignature(): refs_types_pb.Signature | undefined;
    setMetaSignature(value?: refs_types_pb.Signature): ResponseVerificationHeader;

    hasOriginSignature(): boolean;
    clearOriginSignature(): void;
    getOriginSignature(): refs_types_pb.Signature | undefined;
    setOriginSignature(value?: refs_types_pb.Signature): ResponseVerificationHeader;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): ResponseVerificationHeader | undefined;
    setOrigin(value?: ResponseVerificationHeader): ResponseVerificationHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseVerificationHeader.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseVerificationHeader): ResponseVerificationHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseVerificationHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseVerificationHeader;
    static deserializeBinaryFromReader(message: ResponseVerificationHeader, reader: jspb.BinaryReader): ResponseVerificationHeader;
}

export namespace ResponseVerificationHeader {
    export type AsObject = {
        bodySignature?: refs_types_pb.Signature.AsObject,
        metaSignature?: refs_types_pb.Signature.AsObject,
        originSignature?: refs_types_pb.Signature.AsObject,
        origin?: ResponseVerificationHeader.AsObject,
    }
}
