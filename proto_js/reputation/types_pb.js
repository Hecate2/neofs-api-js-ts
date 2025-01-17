/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var refs_types_pb = require('../refs/types_pb.js');
goog.exportSymbol('proto.neo.fs.v2.reputation.GlobalTrust', null, global);
goog.exportSymbol('proto.neo.fs.v2.reputation.GlobalTrust.Body', null, global);
goog.exportSymbol('proto.neo.fs.v2.reputation.PeerID', null, global);
goog.exportSymbol('proto.neo.fs.v2.reputation.PeerToPeerTrust', null, global);
goog.exportSymbol('proto.neo.fs.v2.reputation.Trust', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.reputation.PeerID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neo.fs.v2.reputation.PeerID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.neo.fs.v2.reputation.PeerID.displayName = 'proto.neo.fs.v2.reputation.PeerID';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.PeerID.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.reputation.PeerID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.reputation.PeerID} msg The msg instance to transform.
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.PeerID.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.reputation.PeerID}
 */
proto.neo.fs.v2.reputation.PeerID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.reputation.PeerID;
  return proto.neo.fs.v2.reputation.PeerID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.reputation.PeerID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.reputation.PeerID}
 */
proto.neo.fs.v2.reputation.PeerID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.reputation.PeerID} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.PeerID.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.PeerID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.PeerID.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.neo.fs.v2.reputation.PeerID} The clone.
 */
proto.neo.fs.v2.reputation.PeerID.prototype.cloneMessage = function() {
  return /** @type {!proto.neo.fs.v2.reputation.PeerID} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.neo.fs.v2.reputation.PeerID.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.neo.fs.v2.reputation.PeerID.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.PeerID.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.neo.fs.v2.reputation.PeerID.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.reputation.Trust = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neo.fs.v2.reputation.Trust, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.neo.fs.v2.reputation.Trust.displayName = 'proto.neo.fs.v2.reputation.Trust';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.Trust.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.reputation.Trust.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.reputation.Trust} msg The msg instance to transform.
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.Trust.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: (f = msg.getPeer()) && proto.neo.fs.v2.reputation.PeerID.toObject(includeInstance, f),
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.reputation.Trust}
 */
proto.neo.fs.v2.reputation.Trust.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.reputation.Trust;
  return proto.neo.fs.v2.reputation.Trust.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.reputation.Trust} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.reputation.Trust}
 */
proto.neo.fs.v2.reputation.Trust.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.neo.fs.v2.reputation.PeerID;
      reader.readMessage(value,proto.neo.fs.v2.reputation.PeerID.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.reputation.Trust} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.Trust.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.Trust.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.Trust.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.neo.fs.v2.reputation.PeerID.serializeBinaryToWriter
    );
  }
  f = this.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.neo.fs.v2.reputation.Trust} The clone.
 */
proto.neo.fs.v2.reputation.Trust.prototype.cloneMessage = function() {
  return /** @type {!proto.neo.fs.v2.reputation.Trust} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PeerID peer = 1;
 * @return {proto.neo.fs.v2.reputation.PeerID}
 */
proto.neo.fs.v2.reputation.Trust.prototype.getPeer = function() {
  return /** @type{proto.neo.fs.v2.reputation.PeerID} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.PeerID, 1));
};


/** @param {proto.neo.fs.v2.reputation.PeerID|undefined} value  */
proto.neo.fs.v2.reputation.Trust.prototype.setPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.neo.fs.v2.reputation.Trust.prototype.clearPeer = function() {
  this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.Trust.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.neo.fs.v2.reputation.Trust.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.neo.fs.v2.reputation.Trust.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neo.fs.v2.reputation.PeerToPeerTrust, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.neo.fs.v2.reputation.PeerToPeerTrust.displayName = 'proto.neo.fs.v2.reputation.PeerToPeerTrust';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.reputation.PeerToPeerTrust.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.reputation.PeerToPeerTrust} msg The msg instance to transform.
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.toObject = function(includeInstance, msg) {
  var f, obj = {
    trustingPeer: (f = msg.getTrustingPeer()) && proto.neo.fs.v2.reputation.PeerID.toObject(includeInstance, f),
    trust: (f = msg.getTrust()) && proto.neo.fs.v2.reputation.Trust.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.reputation.PeerToPeerTrust}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.reputation.PeerToPeerTrust;
  return proto.neo.fs.v2.reputation.PeerToPeerTrust.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.reputation.PeerToPeerTrust} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.reputation.PeerToPeerTrust}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.neo.fs.v2.reputation.PeerID;
      reader.readMessage(value,proto.neo.fs.v2.reputation.PeerID.deserializeBinaryFromReader);
      msg.setTrustingPeer(value);
      break;
    case 2:
      var value = new proto.neo.fs.v2.reputation.Trust;
      reader.readMessage(value,proto.neo.fs.v2.reputation.Trust.deserializeBinaryFromReader);
      msg.setTrust(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.reputation.PeerToPeerTrust} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTrustingPeer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.neo.fs.v2.reputation.PeerID.serializeBinaryToWriter
    );
  }
  f = this.getTrust();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.neo.fs.v2.reputation.Trust.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.neo.fs.v2.reputation.PeerToPeerTrust} The clone.
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.cloneMessage = function() {
  return /** @type {!proto.neo.fs.v2.reputation.PeerToPeerTrust} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PeerID trusting_peer = 1;
 * @return {proto.neo.fs.v2.reputation.PeerID}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.getTrustingPeer = function() {
  return /** @type{proto.neo.fs.v2.reputation.PeerID} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.PeerID, 1));
};


/** @param {proto.neo.fs.v2.reputation.PeerID|undefined} value  */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.setTrustingPeer = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.clearTrustingPeer = function() {
  this.setTrustingPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.hasTrustingPeer = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Trust trust = 2;
 * @return {proto.neo.fs.v2.reputation.Trust}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.getTrust = function() {
  return /** @type{proto.neo.fs.v2.reputation.Trust} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.Trust, 2));
};


/** @param {proto.neo.fs.v2.reputation.Trust|undefined} value  */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.setTrust = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.clearTrust = function() {
  this.setTrust(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.PeerToPeerTrust.prototype.hasTrust = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.reputation.GlobalTrust = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neo.fs.v2.reputation.GlobalTrust, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.neo.fs.v2.reputation.GlobalTrust.displayName = 'proto.neo.fs.v2.reputation.GlobalTrust';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.reputation.GlobalTrust.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust} msg The msg instance to transform.
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.GlobalTrust.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getVersion()) && refs_types_pb.Version.toObject(includeInstance, f),
    body: (f = msg.getBody()) && proto.neo.fs.v2.reputation.GlobalTrust.Body.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && refs_types_pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust}
 */
proto.neo.fs.v2.reputation.GlobalTrust.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.reputation.GlobalTrust;
  return proto.neo.fs.v2.reputation.GlobalTrust.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust}
 */
proto.neo.fs.v2.reputation.GlobalTrust.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new refs_types_pb.Version;
      reader.readMessage(value,refs_types_pb.Version.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.neo.fs.v2.reputation.GlobalTrust.Body;
      reader.readMessage(value,proto.neo.fs.v2.reputation.GlobalTrust.Body.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 3:
      var value = new refs_types_pb.Signature;
      reader.readMessage(value,refs_types_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.GlobalTrust.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVersion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      refs_types_pb.Version.serializeBinaryToWriter
    );
  }
  f = this.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.neo.fs.v2.reputation.GlobalTrust.Body.serializeBinaryToWriter
    );
  }
  f = this.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      refs_types_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust} The clone.
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.cloneMessage = function() {
  return /** @type {!proto.neo.fs.v2.reputation.GlobalTrust} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional neo.fs.v2.refs.Version version = 1;
 * @return {proto.neo.fs.v2.refs.Version}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.getVersion = function() {
  return /** @type{proto.neo.fs.v2.refs.Version} */ (
    jspb.Message.getWrapperField(this, refs_types_pb.Version, 1));
};


/** @param {proto.neo.fs.v2.refs.Version|undefined} value  */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.neo.fs.v2.reputation.GlobalTrust.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Body body = 2;
 * @return {proto.neo.fs.v2.reputation.GlobalTrust.Body}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.getBody = function() {
  return /** @type{proto.neo.fs.v2.reputation.GlobalTrust.Body} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.GlobalTrust.Body, 2));
};


/** @param {proto.neo.fs.v2.reputation.GlobalTrust.Body|undefined} value  */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.setBody = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.neo.fs.v2.reputation.GlobalTrust.prototype.clearBody = function() {
  this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional neo.fs.v2.refs.Signature signature = 3;
 * @return {proto.neo.fs.v2.refs.Signature}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.getSignature = function() {
  return /** @type{proto.neo.fs.v2.refs.Signature} */ (
    jspb.Message.getWrapperField(this, refs_types_pb.Signature, 3));
};


/** @param {proto.neo.fs.v2.refs.Signature|undefined} value  */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.setSignature = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.neo.fs.v2.reputation.GlobalTrust.prototype.clearSignature = function() {
  this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.GlobalTrust.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neo.fs.v2.reputation.GlobalTrust.Body, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.neo.fs.v2.reputation.GlobalTrust.Body.displayName = 'proto.neo.fs.v2.reputation.GlobalTrust.Body';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.toObject = function(opt_includeInstance) {
  return proto.neo.fs.v2.reputation.GlobalTrust.Body.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust.Body} msg The msg instance to transform.
 * @return {!Object}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.toObject = function(includeInstance, msg) {
  var f, obj = {
    manager: (f = msg.getManager()) && proto.neo.fs.v2.reputation.PeerID.toObject(includeInstance, f),
    trust: (f = msg.getTrust()) && proto.neo.fs.v2.reputation.Trust.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust.Body}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neo.fs.v2.reputation.GlobalTrust.Body;
  return proto.neo.fs.v2.reputation.GlobalTrust.Body.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust.Body} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust.Body}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.neo.fs.v2.reputation.PeerID;
      reader.readMessage(value,proto.neo.fs.v2.reputation.PeerID.deserializeBinaryFromReader);
      msg.setManager(value);
      break;
    case 2:
      var value = new proto.neo.fs.v2.reputation.Trust;
      reader.readMessage(value,proto.neo.fs.v2.reputation.Trust.deserializeBinaryFromReader);
      msg.setTrust(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.neo.fs.v2.reputation.GlobalTrust.Body} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getManager();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.neo.fs.v2.reputation.PeerID.serializeBinaryToWriter
    );
  }
  f = this.getTrust();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.neo.fs.v2.reputation.Trust.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.neo.fs.v2.reputation.GlobalTrust.Body} The clone.
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.cloneMessage = function() {
  return /** @type {!proto.neo.fs.v2.reputation.GlobalTrust.Body} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PeerID manager = 1;
 * @return {proto.neo.fs.v2.reputation.PeerID}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.getManager = function() {
  return /** @type{proto.neo.fs.v2.reputation.PeerID} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.PeerID, 1));
};


/** @param {proto.neo.fs.v2.reputation.PeerID|undefined} value  */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.setManager = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.clearManager = function() {
  this.setManager(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.hasManager = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Trust trust = 2;
 * @return {proto.neo.fs.v2.reputation.Trust}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.getTrust = function() {
  return /** @type{proto.neo.fs.v2.reputation.Trust} */ (
    jspb.Message.getWrapperField(this, proto.neo.fs.v2.reputation.Trust, 2));
};


/** @param {proto.neo.fs.v2.reputation.Trust|undefined} value  */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.setTrust = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.clearTrust = function() {
  this.setTrust(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.neo.fs.v2.reputation.GlobalTrust.Body.prototype.hasTrust = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.neo.fs.v2.reputation);
