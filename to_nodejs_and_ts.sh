#!/bin/bash

mkdir proto_js
mkdir proto_ts

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="./node_modules/.bin/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="./node_modules/.bin/grpc_tools_node_protoc"

function traverse() {
for file in "$1"/*
do
    if [[ "${file}" == *"google"* ]] ; then
        continue
    fi
    if [ ! -d "${file}" ] ; then
        if [ "${file##*.}"x = "proto"x ]
        then
            echo $file
            protoc --js_out=import_style=commonjs,binary:./proto_js $file
            protoc \
            --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
            --ts_out=./proto_ts \
            -I . \
            $file
        fi
    else
        # echo "entering recursion with: ${file}"
        traverse "${file}"
    fi
done
}

traverse .
