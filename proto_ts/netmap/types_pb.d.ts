// package: neo.fs.v2.netmap
// file: netmap/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Filter extends jspb.Message { 
    getName(): string;
    setName(value: string): Filter;
    getKey(): string;
    setKey(value: string): Filter;
    getOp(): Operation;
    setOp(value: Operation): Filter;
    getValue(): string;
    setValue(value: string): Filter;
    clearFiltersList(): void;
    getFiltersList(): Array<Filter>;
    setFiltersList(value: Array<Filter>): Filter;
    addFilters(value?: Filter, index?: number): Filter;

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
        name: string,
        key: string,
        op: Operation,
        value: string,
        filtersList: Array<Filter.AsObject>,
    }
}

export class Selector extends jspb.Message { 
    getName(): string;
    setName(value: string): Selector;
    getCount(): number;
    setCount(value: number): Selector;
    getClause(): Clause;
    setClause(value: Clause): Selector;
    getAttribute(): string;
    setAttribute(value: string): Selector;
    getFilter(): string;
    setFilter(value: string): Selector;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Selector.AsObject;
    static toObject(includeInstance: boolean, msg: Selector): Selector.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Selector, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Selector;
    static deserializeBinaryFromReader(message: Selector, reader: jspb.BinaryReader): Selector;
}

export namespace Selector {
    export type AsObject = {
        name: string,
        count: number,
        clause: Clause,
        attribute: string,
        filter: string,
    }
}

export class Replica extends jspb.Message { 
    getCount(): number;
    setCount(value: number): Replica;
    getSelector(): string;
    setSelector(value: string): Replica;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Replica.AsObject;
    static toObject(includeInstance: boolean, msg: Replica): Replica.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Replica, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Replica;
    static deserializeBinaryFromReader(message: Replica, reader: jspb.BinaryReader): Replica;
}

export namespace Replica {
    export type AsObject = {
        count: number,
        selector: string,
    }
}

export class PlacementPolicy extends jspb.Message { 
    clearReplicasList(): void;
    getReplicasList(): Array<Replica>;
    setReplicasList(value: Array<Replica>): PlacementPolicy;
    addReplicas(value?: Replica, index?: number): Replica;
    getContainerBackupFactor(): number;
    setContainerBackupFactor(value: number): PlacementPolicy;
    clearSelectorsList(): void;
    getSelectorsList(): Array<Selector>;
    setSelectorsList(value: Array<Selector>): PlacementPolicy;
    addSelectors(value?: Selector, index?: number): Selector;
    clearFiltersList(): void;
    getFiltersList(): Array<Filter>;
    setFiltersList(value: Array<Filter>): PlacementPolicy;
    addFilters(value?: Filter, index?: number): Filter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementPolicy): PlacementPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementPolicy;
    static deserializeBinaryFromReader(message: PlacementPolicy, reader: jspb.BinaryReader): PlacementPolicy;
}

export namespace PlacementPolicy {
    export type AsObject = {
        replicasList: Array<Replica.AsObject>,
        containerBackupFactor: number,
        selectorsList: Array<Selector.AsObject>,
        filtersList: Array<Filter.AsObject>,
    }
}

export class NodeInfo extends jspb.Message { 
    getPublicKey(): Uint8Array | string;
    getPublicKey_asU8(): Uint8Array;
    getPublicKey_asB64(): string;
    setPublicKey(value: Uint8Array | string): NodeInfo;
    getAddress(): string;
    setAddress(value: string): NodeInfo;
    clearAttributesList(): void;
    getAttributesList(): Array<NodeInfo.Attribute>;
    setAttributesList(value: Array<NodeInfo.Attribute>): NodeInfo;
    addAttributes(value?: NodeInfo.Attribute, index?: number): NodeInfo.Attribute;
    getState(): NodeInfo.State;
    setState(value: NodeInfo.State): NodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfo;
    static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
    export type AsObject = {
        publicKey: Uint8Array | string,
        address: string,
        attributesList: Array<NodeInfo.Attribute.AsObject>,
        state: NodeInfo.State,
    }


    export class Attribute extends jspb.Message { 
        getKey(): string;
        setKey(value: string): Attribute;
        getValue(): string;
        setValue(value: string): Attribute;
        clearParentsList(): void;
        getParentsList(): Array<string>;
        setParentsList(value: Array<string>): Attribute;
        addParents(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Attribute.AsObject;
        static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Attribute;
        static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
    }

    export namespace Attribute {
        export type AsObject = {
            key: string,
            value: string,
            parentsList: Array<string>,
        }
    }


    export enum State {
    UNSPECIFIED = 0,
    ONLINE = 1,
    OFFLINE = 2,
    }

}

export class NetworkInfo extends jspb.Message { 
    getCurrentEpoch(): number;
    setCurrentEpoch(value: number): NetworkInfo;
    getMagicNumber(): number;
    setMagicNumber(value: number): NetworkInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkInfo): NetworkInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkInfo;
    static deserializeBinaryFromReader(message: NetworkInfo, reader: jspb.BinaryReader): NetworkInfo;
}

export namespace NetworkInfo {
    export type AsObject = {
        currentEpoch: number,
        magicNumber: number,
    }
}

export enum Operation {
    OPERATION_UNSPECIFIED = 0,
    EQ = 1,
    NE = 2,
    GT = 3,
    GE = 4,
    LT = 5,
    LE = 6,
    OR = 7,
    AND = 8,
}

export enum Clause {
    CLAUSE_UNSPECIFIED = 0,
    SAME = 1,
    DISTINCT = 2,
}
