// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ice_cream_pb = require('./ice_cream_pb.js');

function serialize_IceCreamRequest(arg) {
  if (!(arg instanceof ice_cream_pb.IceCreamRequest)) {
    throw new Error('Expected argument of type IceCreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_IceCreamRequest(buffer_arg) {
  return ice_cream_pb.IceCreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_IceCreamResponse(arg) {
  if (!(arg instanceof ice_cream_pb.IceCreamResponse)) {
    throw new Error('Expected argument of type IceCreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_IceCreamResponse(buffer_arg) {
  return ice_cream_pb.IceCreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var IceCreamService = exports.IceCreamService = {
  orderIceCream: {
    path: '/IceCream/OrderIceCream',
    requestStream: false,
    responseStream: false,
    requestType: ice_cream_pb.IceCreamRequest,
    responseType: ice_cream_pb.IceCreamResponse,
    requestSerialize: serialize_IceCreamRequest,
    requestDeserialize: deserialize_IceCreamRequest,
    responseSerialize: serialize_IceCreamResponse,
    responseDeserialize: deserialize_IceCreamResponse,
  },
};

exports.IceCreamClient = grpc.makeGenericClientConstructor(IceCreamService);
