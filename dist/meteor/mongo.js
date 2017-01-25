//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var AllowDeny = Package['allow-deny'].AllowDeny;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var DDP = Package['ddp-client'].DDP;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var LocalCollectionDriver, Mongo;

var require = meteorInstall({"node_modules":{"meteor":{"mongo":{"local_collection_driver.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/mongo/local_collection_driver.js                                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
LocalCollectionDriver = function () {                                                                           // 1
  var self = this;                                                                                              // 2
  self.noConnCollections = {};                                                                                  // 3
};                                                                                                              // 4
                                                                                                                //
var ensureCollection = function (name, collections) {                                                           // 6
  if (!(name in collections)) collections[name] = new LocalCollection(name);                                    // 7
  return collections[name];                                                                                     // 9
};                                                                                                              // 10
                                                                                                                //
_.extend(LocalCollectionDriver.prototype, {                                                                     // 12
  open: function (name, conn) {                                                                                 // 13
    var self = this;                                                                                            // 14
    if (!name) return new LocalCollection();                                                                    // 15
                                                                                                                //
    if (!conn) {                                                                                                // 17
      return ensureCollection(name, self.noConnCollections);                                                    // 18
    }                                                                                                           // 19
                                                                                                                //
    if (!conn._mongo_livedata_collections) conn._mongo_livedata_collections = {}; // XXX is there a way to keep track of a connection's collections without
    // dangling it off the connection object?                                                                   // 23
                                                                                                                //
    return ensureCollection(name, conn._mongo_livedata_collections);                                            // 24
  }                                                                                                             // 25
}); // singleton                                                                                                // 12
                                                                                                                //
                                                                                                                //
LocalCollectionDriver = new LocalCollectionDriver();                                                            // 29
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collection.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/mongo/collection.js                                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// options.connection, if given, is a LivedataClient or LivedataServer                                          // 1
// XXX presently there is no way to destroy/clean up a Collection                                               // 2
/**                                                                                                             // 4
 * @summary Namespace for MongoDB-related items                                                                 //
 * @namespace                                                                                                   //
 */Mongo = {}; /**                                                                                              //
                * @summary Constructor for a Collection                                                         //
                * @locus Anywhere                                                                               //
                * @instancename collection                                                                      //
                * @class                                                                                        //
                * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
                * @param {Object} [options]                                                                     //
                * @param {Object} options.connection The server connection that will manage this collection. Uses the default connection if not specified.  Pass the return value of calling [`DDP.connect`](#ddp_connect) to specify a different server. Pass `null` to specify no connection. Unmanaged (`name` is null) collections cannot specify a connection.
                * @param {String} options.idGeneration The method of generating the `_id` fields of new documents in this collection.  Possible values:
                                                                                                                //
                - **`'STRING'`**: random strings                                                                //
                - **`'MONGO'`**:  random [`Mongo.ObjectID`](#mongo_object_id) values                            //
                                                                                                                //
               The default id generation technique is `'STRING'`.                                               //
                * @param {Function} options.transform An optional transformation function. Documents will be passed through this function before being returned from `fetch` or `findOne`, and before being passed to callbacks of `observe`, `map`, `forEach`, `allow`, and `deny`. Transforms are *not* applied for the callbacks of `observeChanges` or to cursors returned from publish functions.
                * @param {Boolean} options.defineMutationMethods Set to `false` to skip setting up the mutation methods that enable insert/update/remove from client code. Default `true`.
                */                                                                                              //
                                                                                                                //
Mongo.Collection = function (name, options) {                                                                   // 27
  var self = this;                                                                                              // 28
  if (!(self instanceof Mongo.Collection)) throw new Error('use "new" to construct a Mongo.Collection');        // 29
                                                                                                                //
  if (!name && name !== null) {                                                                                 // 32
    Meteor._debug("Warning: creating anonymous collection. It will not be " + "saved or synchronized over the network. (Pass null for " + "the collection name to turn off this warning.)");
                                                                                                                //
    name = null;                                                                                                // 36
  }                                                                                                             // 37
                                                                                                                //
  if (name !== null && typeof name !== "string") {                                                              // 39
    throw new Error("First argument to new Mongo.Collection must be a string or null");                         // 40
  }                                                                                                             // 42
                                                                                                                //
  if (options && options.methods) {                                                                             // 44
    // Backwards compatibility hack with original signature (which passed                                       // 45
    // "connection" directly instead of in options. (Connections must have a "methods"                          // 46
    // method.)                                                                                                 // 47
    // XXX remove before 1.0                                                                                    // 48
    options = {                                                                                                 // 49
      connection: options                                                                                       // 49
    };                                                                                                          // 49
  } // Backwards compatibility: "connection" used to be called "manager".                                       // 50
                                                                                                                //
                                                                                                                //
  if (options && options.manager && !options.connection) {                                                      // 52
    options.connection = options.manager;                                                                       // 53
  }                                                                                                             // 54
                                                                                                                //
  options = _.extend({                                                                                          // 55
    connection: undefined,                                                                                      // 56
    idGeneration: 'STRING',                                                                                     // 57
    transform: null,                                                                                            // 58
    _driver: undefined,                                                                                         // 59
    _preventAutopublish: false                                                                                  // 60
  }, options);                                                                                                  // 55
                                                                                                                //
  switch (options.idGeneration) {                                                                               // 63
    case 'MONGO':                                                                                               // 64
      self._makeNewID = function () {                                                                           // 65
        var src = name ? DDP.randomStream('/collection/' + name) : Random.insecure;                             // 66
        return new Mongo.ObjectID(src.hexString(24));                                                           // 67
      };                                                                                                        // 68
                                                                                                                //
      break;                                                                                                    // 69
                                                                                                                //
    case 'STRING':                                                                                              // 70
    default:                                                                                                    // 71
      self._makeNewID = function () {                                                                           // 72
        var src = name ? DDP.randomStream('/collection/' + name) : Random.insecure;                             // 73
        return src.id();                                                                                        // 74
      };                                                                                                        // 75
                                                                                                                //
      break;                                                                                                    // 76
  }                                                                                                             // 63
                                                                                                                //
  self._transform = LocalCollection.wrapTransform(options.transform);                                           // 79
  if (!name || options.connection === null) // note: nameless collections never have a connection               // 81
    self._connection = null;else if (options.connection) self._connection = options.connection;else if (Meteor.isClient) self._connection = Meteor.connection;else self._connection = Meteor.server;
                                                                                                                //
  if (!options._driver) {                                                                                       // 91
    // XXX This check assumes that webapp is loaded so that Meteor.server !==                                   // 92
    // null. We should fully support the case of "want to use a Mongo-backed                                    // 93
    // collection from Node code without webapp", but we don't yet.                                             // 94
    // #MeteorServerNull                                                                                        // 95
    if (name && self._connection === Meteor.server && typeof MongoInternals !== "undefined" && MongoInternals.defaultRemoteCollectionDriver) {
      options._driver = MongoInternals.defaultRemoteCollectionDriver();                                         // 99
    } else {                                                                                                    // 100
      options._driver = LocalCollectionDriver;                                                                  // 101
    }                                                                                                           // 102
  }                                                                                                             // 103
                                                                                                                //
  self._collection = options._driver.open(name, self._connection);                                              // 105
  self._name = name;                                                                                            // 106
  self._driver = options._driver;                                                                               // 107
                                                                                                                //
  if (self._connection && self._connection.registerStore) {                                                     // 109
    // OK, we're going to be a slave, replicating some remote                                                   // 110
    // database, except possibly with some temporary divergence while                                           // 111
    // we have unacknowledged RPC's.                                                                            // 112
    var ok = self._connection.registerStore(name, {                                                             // 113
      // Called at the beginning of a batch of updates. batchSize is the number                                 // 114
      // of update calls to expect.                                                                             // 115
      //                                                                                                        // 116
      // XXX This interface is pretty janky. reset probably ought to go back to                                 // 117
      // being its own function, and callers shouldn't have to calculate                                        // 118
      // batchSize. The optimization of not calling pause/remove should be                                      // 119
      // delayed until later: the first call to update() should buffer its                                      // 120
      // message, and then we can either directly apply it at endUpdate time if                                 // 121
      // it was the only update, or do pauseObservers/apply/apply at the next                                   // 122
      // update() if there's another one.                                                                       // 123
      beginUpdate: function (batchSize, reset) {                                                                // 124
        // pause observers so users don't see flicker when updating several                                     // 125
        // objects at once (including the post-reconnect reset-and-reapply                                      // 126
        // stage), and so that a re-sorting of a query can take advantage of the                                // 127
        // full _diffQuery moved calculation instead of applying change one at a                                // 128
        // time.                                                                                                // 129
        if (batchSize > 1 || reset) self._collection.pauseObservers();                                          // 130
        if (reset) self._collection.remove({});                                                                 // 133
      },                                                                                                        // 135
      // Apply an update.                                                                                       // 137
      // XXX better specify this interface (not in terms of a wire message)?                                    // 138
      update: function (msg) {                                                                                  // 139
        var mongoId = MongoID.idParse(msg.id);                                                                  // 140
                                                                                                                //
        var doc = self._collection.findOne(mongoId); // Is this a "replace the whole doc" message coming from the quiescence
        // of method writes to an object? (Note that 'undefined' is a valid                                     // 144
        // value meaning "remove it".)                                                                          // 145
                                                                                                                //
                                                                                                                //
        if (msg.msg === 'replace') {                                                                            // 146
          var replace = msg.replace;                                                                            // 147
                                                                                                                //
          if (!replace) {                                                                                       // 148
            if (doc) self._collection.remove(mongoId);                                                          // 149
          } else if (!doc) {                                                                                    // 151
            self._collection.insert(replace);                                                                   // 152
          } else {                                                                                              // 153
            // XXX check that replace has no $ ops                                                              // 154
            self._collection.update(mongoId, replace);                                                          // 155
          }                                                                                                     // 156
                                                                                                                //
          return;                                                                                               // 157
        } else if (msg.msg === 'added') {                                                                       // 158
          if (doc) {                                                                                            // 159
            throw new Error("Expected not to find a document already present for an add");                      // 160
          }                                                                                                     // 161
                                                                                                                //
          self._collection.insert(_.extend({                                                                    // 162
            _id: mongoId                                                                                        // 162
          }, msg.fields));                                                                                      // 162
        } else if (msg.msg === 'removed') {                                                                     // 163
          if (!doc) throw new Error("Expected to find a document already present for removed");                 // 164
                                                                                                                //
          self._collection.remove(mongoId);                                                                     // 166
        } else if (msg.msg === 'changed') {                                                                     // 167
          if (!doc) throw new Error("Expected to find a document to change");                                   // 168
                                                                                                                //
          if (!_.isEmpty(msg.fields)) {                                                                         // 170
            var modifier = {};                                                                                  // 171
                                                                                                                //
            _.each(msg.fields, function (value, key) {                                                          // 172
              if (value === undefined) {                                                                        // 173
                if (!modifier.$unset) modifier.$unset = {};                                                     // 174
                modifier.$unset[key] = 1;                                                                       // 176
              } else {                                                                                          // 177
                if (!modifier.$set) modifier.$set = {};                                                         // 178
                modifier.$set[key] = value;                                                                     // 180
              }                                                                                                 // 181
            });                                                                                                 // 182
                                                                                                                //
            self._collection.update(mongoId, modifier);                                                         // 183
          }                                                                                                     // 184
        } else {                                                                                                // 185
          throw new Error("I don't know how to deal with this message");                                        // 186
        }                                                                                                       // 187
      },                                                                                                        // 189
      // Called at the end of a batch of updates.                                                               // 191
      endUpdate: function () {                                                                                  // 192
        self._collection.resumeObservers();                                                                     // 193
      },                                                                                                        // 194
      // Called around method stub invocations to capture the original versions                                 // 196
      // of modified documents.                                                                                 // 197
      saveOriginals: function () {                                                                              // 198
        self._collection.saveOriginals();                                                                       // 199
      },                                                                                                        // 200
      retrieveOriginals: function () {                                                                          // 201
        return self._collection.retrieveOriginals();                                                            // 202
      },                                                                                                        // 203
      // Used to preserve current versions of documents across a store reset.                                   // 205
      getDoc: function (id) {                                                                                   // 206
        return self.findOne(id);                                                                                // 207
      },                                                                                                        // 208
      // To be able to get back to the collection from the store.                                               // 210
      _getCollection: function () {                                                                             // 211
        return self;                                                                                            // 212
      }                                                                                                         // 213
    });                                                                                                         // 113
                                                                                                                //
    if (!ok) {                                                                                                  // 216
      var message = "There is already a collection named \"" + name + "\"";                                     // 217
                                                                                                                //
      if (options._suppressSameNameError === true) {                                                            // 218
        // XXX In theory we do not have to throw when `ok` is falsy. The store is already defined               // 219
        // for this collection name, but this will simply be another reference to it and everything             // 220
        // should work. However, we have historically thrown an error here, so for now we will                  // 221
        // skip the error only when `_suppressSameNameError` is `true`, allowing people to opt in               // 222
        // and give this some real world testing.                                                               // 223
        console.warn ? console.warn(message) : console.log(message);                                            // 224
      } else {                                                                                                  // 225
        throw new Error(message);                                                                               // 226
      }                                                                                                         // 227
    }                                                                                                           // 228
  } // XXX don't define these until allow or deny is actually used for this                                     // 229
  // collection. Could be hard if the security rules are only defined on the                                    // 232
  // server.                                                                                                    // 233
                                                                                                                //
                                                                                                                //
  if (options.defineMutationMethods !== false) {                                                                // 234
    try {                                                                                                       // 235
      self._defineMutationMethods({                                                                             // 236
        useExisting: options._suppressSameNameError === true                                                    // 236
      });                                                                                                       // 236
    } catch (error) {                                                                                           // 237
      // Throw a more understandable error on the server for same collection name                               // 238
      if (error.message === "A method named '/" + name + "/insert' is already defined") throw new Error("There is already a collection named \"" + name + "\"");
      throw error;                                                                                              // 241
    }                                                                                                           // 242
  } // autopublish                                                                                              // 243
                                                                                                                //
                                                                                                                //
  if (Package.autopublish && !options._preventAutopublish && self._connection && self._connection.publish) {    // 246
    self._connection.publish(null, function () {                                                                // 247
      return self.find();                                                                                       // 248
    }, {                                                                                                        // 249
      is_auto: true                                                                                             // 249
    });                                                                                                         // 249
  }                                                                                                             // 250
}; ///                                                                                                          // 251
/// Main collection API                                                                                         // 254
///                                                                                                             // 255
                                                                                                                //
                                                                                                                //
_.extend(Mongo.Collection.prototype, {                                                                          // 258
  _getFindSelector: function (args) {                                                                           // 260
    if (args.length == 0) return {};else return args[0];                                                        // 261
  },                                                                                                            // 265
  _getFindOptions: function (args) {                                                                            // 267
    var self = this;                                                                                            // 268
                                                                                                                //
    if (args.length < 2) {                                                                                      // 269
      return {                                                                                                  // 270
        transform: self._transform                                                                              // 270
      };                                                                                                        // 270
    } else {                                                                                                    // 271
      check(args[1], Match.Optional(Match.ObjectIncluding({                                                     // 272
        fields: Match.Optional(Match.OneOf(Object, undefined)),                                                 // 273
        sort: Match.Optional(Match.OneOf(Object, Array, Function, undefined)),                                  // 274
        limit: Match.Optional(Match.OneOf(Number, undefined)),                                                  // 275
        skip: Match.Optional(Match.OneOf(Number, undefined))                                                    // 276
      })));                                                                                                     // 272
      return _.extend({                                                                                         // 279
        transform: self._transform                                                                              // 280
      }, args[1]);                                                                                              // 279
    }                                                                                                           // 282
  },                                                                                                            // 283
  /**                                                                                                           // 285
   * @summary Find the documents in a collection that match the selector.                                       //
   * @locus Anywhere                                                                                            //
   * @method find                                                                                               //
   * @memberOf Mongo.Collection                                                                                 //
   * @instance                                                                                                  //
   * @param {MongoSelector} [selector] A query describing the documents to find                                 //
   * @param {Object} [options]                                                                                  //
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                               //
   * @param {Number} options.skip Number of results to skip at the beginning                                    //
   * @param {Number} options.limit Maximum number of results to return                                          //
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                     //
   * @param {Boolean} options.reactive (Client only) Default `true`; pass `false` to disable reactivity         //
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @param {Boolean} options.disableOplog (Server only) Pass true to disable oplog-tailing on this query. This affects the way server processes calls to `observe` on this query. Disabling the oplog can be useful when working with data that updates in large batches.
   * @param {Number} options.pollingIntervalMs (Server only) When oplog is disabled (through the use of `disableOplog` or when otherwise not available), the frequency (in milliseconds) of how often to poll this query when observing on the server. Defaults to 10000ms (10 seconds).
   * @param {Number} options.pollingThrottleMs (Server only) When oplog is disabled (through the use of `disableOplog` or when otherwise not available), the minimum time (in milliseconds) to allow between re-polling when observing on the server. Increasing this will save CPU and mongo load at the expense of slower updates to users. Decreasing this is not recommended. Defaults to 50ms.
   * @returns {Mongo.Cursor}                                                                                    //
   */find: function () /* selector, options */{                                                                 //
    // Collection.find() (return all docs) behaves differently                                                  // 305
    // from Collection.find(undefined) (return 0 docs).  so be                                                  // 306
    // careful about the length of arguments.                                                                   // 307
    var self = this;                                                                                            // 308
                                                                                                                //
    var argArray = _.toArray(arguments);                                                                        // 309
                                                                                                                //
    return self._collection.find(self._getFindSelector(argArray), self._getFindOptions(argArray));              // 310
  },                                                                                                            // 312
  /**                                                                                                           // 314
   * @summary Finds the first document that matches the selector, as ordered by sort and skip options. Returns `undefined` if no matching document is found.
   * @locus Anywhere                                                                                            //
   * @method findOne                                                                                            //
   * @memberOf Mongo.Collection                                                                                 //
   * @instance                                                                                                  //
   * @param {MongoSelector} [selector] A query describing the documents to find                                 //
   * @param {Object} [options]                                                                                  //
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                               //
   * @param {Number} options.skip Number of results to skip at the beginning                                    //
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                     //
   * @param {Boolean} options.reactive (Client only) Default true; pass false to disable reactivity             //
   * @param {Function} options.transform Overrides `transform` on the [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @returns {Object}                                                                                          //
   */findOne: function () /* selector, options */{                                                              //
    var self = this;                                                                                            // 330
                                                                                                                //
    var argArray = _.toArray(arguments);                                                                        // 331
                                                                                                                //
    return self._collection.findOne(self._getFindSelector(argArray), self._getFindOptions(argArray));           // 332
  }                                                                                                             // 334
});                                                                                                             // 258
                                                                                                                //
Mongo.Collection._publishCursor = function (cursor, sub, collection) {                                          // 338
  var observeHandle = cursor.observeChanges({                                                                   // 339
    added: function (id, fields) {                                                                              // 340
      sub.added(collection, id, fields);                                                                        // 341
    },                                                                                                          // 342
    changed: function (id, fields) {                                                                            // 343
      sub.changed(collection, id, fields);                                                                      // 344
    },                                                                                                          // 345
    removed: function (id) {                                                                                    // 346
      sub.removed(collection, id);                                                                              // 347
    }                                                                                                           // 348
  }); // We don't call sub.ready() here: it gets called in livedata_server, after                               // 339
  // possibly calling _publishCursor on multiple returned cursors.                                              // 352
  // register stop callback (expects lambda w/ no args).                                                        // 354
                                                                                                                //
  sub.onStop(function () {                                                                                      // 355
    observeHandle.stop();                                                                                       // 355
  }); // return the observeHandle in case it needs to be stopped early                                          // 355
                                                                                                                //
  return observeHandle;                                                                                         // 358
}; // protect against dangerous selectors.  falsey and {_id: falsey} are both                                   // 359
// likely programmer error, and not what you want, particularly for destructive                                 // 362
// operations.  JS regexps don't serialize over DDP but can be trivially                                        // 363
// replaced by $regex.                                                                                          // 364
                                                                                                                //
                                                                                                                //
Mongo.Collection._rewriteSelector = function (selector) {                                                       // 365
  // shorthand -- scalars match _id                                                                             // 366
  if (LocalCollection._selectorIsId(selector)) selector = {                                                     // 367
    _id: selector                                                                                               // 368
  };                                                                                                            // 368
                                                                                                                //
  if (_.isArray(selector)) {                                                                                    // 370
    // This is consistent with the Mongo console itself; if we don't do this                                    // 371
    // check passing an empty array ends up selecting all items                                                 // 372
    throw new Error("Mongo selector can't be an array.");                                                       // 373
  }                                                                                                             // 374
                                                                                                                //
  if (!selector || '_id' in selector && !selector._id) // can't match anything                                  // 376
    return {                                                                                                    // 378
      _id: Random.id()                                                                                          // 378
    };                                                                                                          // 378
  var ret = {};                                                                                                 // 380
                                                                                                                //
  _.each(selector, function (value, key) {                                                                      // 381
    // Mongo supports both {field: /foo/} and {field: {$regex: /foo/}}                                          // 382
    if (value instanceof RegExp) {                                                                              // 383
      ret[key] = convertRegexpToMongoSelector(value);                                                           // 384
    } else if (value && value.$regex instanceof RegExp) {                                                       // 385
      ret[key] = convertRegexpToMongoSelector(value.$regex); // if value is {$regex: /foo/, $options: ...} then $options
      // override the ones set on $regex.                                                                       // 388
                                                                                                                //
      if (value.$options !== undefined) ret[key].$options = value.$options;                                     // 389
    } else if (_.contains(['$or', '$and', '$nor'], key)) {                                                      // 391
      // Translate lower levels of $and/$or/$nor                                                                // 393
      ret[key] = _.map(value, function (v) {                                                                    // 394
        return Mongo.Collection._rewriteSelector(v);                                                            // 395
      });                                                                                                       // 396
    } else {                                                                                                    // 397
      ret[key] = value;                                                                                         // 398
    }                                                                                                           // 399
  });                                                                                                           // 400
                                                                                                                //
  return ret;                                                                                                   // 401
}; // convert a JS RegExp object to a Mongo {$regex: ..., $options: ...}                                        // 402
// selector                                                                                                     // 405
                                                                                                                //
                                                                                                                //
function convertRegexpToMongoSelector(regexp) {                                                                 // 406
  check(regexp, RegExp); // safety belt                                                                         // 407
                                                                                                                //
  var selector = {                                                                                              // 409
    $regex: regexp.source                                                                                       // 409
  };                                                                                                            // 409
  var regexOptions = ''; // JS RegExp objects support 'i', 'm', and 'g'. Mongo regex $options                   // 410
  // support 'i', 'm', 'x', and 's'. So we support 'i' and 'm' here.                                            // 412
                                                                                                                //
  if (regexp.ignoreCase) regexOptions += 'i';                                                                   // 413
  if (regexp.multiline) regexOptions += 'm';                                                                    // 415
  if (regexOptions) selector.$options = regexOptions;                                                           // 417
  return selector;                                                                                              // 420
} // 'insert' immediately returns the inserted document's new _id.                                              // 421
// The others return values immediately if you are in a stub, an in-memory                                      // 424
// unmanaged collection, or a mongo-backed collection and you don't pass a                                      // 425
// callback. 'update' and 'remove' return the number of affected                                                // 426
// documents. 'upsert' returns an object with keys 'numberAffected' and, if an                                  // 427
// insert happened, 'insertedId'.                                                                               // 428
//                                                                                                              // 429
// Otherwise, the semantics are exactly like other methods: they take                                           // 430
// a callback as an optional last argument; if no callback is                                                   // 431
// provided, they block until the operation is complete, and throw an                                           // 432
// exception if it fails; if a callback is provided, then they don't                                            // 433
// necessarily block, and they call the callback when they finish with error and                                // 434
// result arguments.  (The insert method provides the document ID as its result;                                // 435
// update and remove provide the number of affected docs as the result; upsert                                  // 436
// provides an object with numberAffected and maybe insertedId.)                                                // 437
//                                                                                                              // 438
// On the client, blocking is impossible, so if a callback                                                      // 439
// isn't provided, they just return immediately and any error                                                   // 440
// information is lost.                                                                                         // 441
//                                                                                                              // 442
// There's one more tweak. On the client, if you don't provide a                                                // 443
// callback, then if there is an error, a message will be logged with                                           // 444
// Meteor._debug.                                                                                               // 445
//                                                                                                              // 446
// The intent (though this is actually determined by the underlying                                             // 447
// drivers) is that the operations should be done synchronously, not                                            // 448
// generating their result until the database has acknowledged                                                  // 449
// them. In the future maybe we should provide a flag to turn this                                              // 450
// off.                                                                                                         // 451
/**                                                                                                             // 453
 * @summary Insert a document in the collection.  Returns its unique _id.                                       //
 * @locus Anywhere                                                                                              //
 * @method  insert                                                                                              //
 * @memberOf Mongo.Collection                                                                                   //
 * @instance                                                                                                    //
 * @param {Object} doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the _id as the second.
 */                                                                                                             //
                                                                                                                //
Mongo.Collection.prototype.insert = function () {                                                               // 462
  function insert(doc, callback) {                                                                              // 462
    // Make sure we were passed a document to insert                                                            // 463
    if (!doc) {                                                                                                 // 464
      throw new Error("insert requires an argument");                                                           // 465
    } // Shallow-copy the document and possibly generate an ID                                                  // 466
                                                                                                                //
                                                                                                                //
    doc = _.extend({}, doc);                                                                                    // 469
                                                                                                                //
    if ('_id' in doc) {                                                                                         // 471
      if (!doc._id || !(typeof doc._id === 'string' || doc._id instanceof Mongo.ObjectID)) {                    // 472
        throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs");            // 473
      }                                                                                                         // 474
    } else {                                                                                                    // 475
      var generateId = true; // Don't generate the id if we're the client and the 'outermost' call              // 476
      // This optimization saves us passing both the randomSeed and the id                                      // 479
      // Passing both is redundant.                                                                             // 480
                                                                                                                //
      if (this._isRemoteCollection()) {                                                                         // 481
        var enclosing = DDP._CurrentInvocation.get();                                                           // 482
                                                                                                                //
        if (!enclosing) {                                                                                       // 483
          generateId = false;                                                                                   // 484
        }                                                                                                       // 485
      }                                                                                                         // 486
                                                                                                                //
      if (generateId) {                                                                                         // 488
        doc._id = this._makeNewID();                                                                            // 489
      }                                                                                                         // 490
    } // On inserts, always return the id that we generated; on all other                                       // 491
    // operations, just return the result from the collection.                                                  // 494
                                                                                                                //
                                                                                                                //
    var chooseReturnValueFromCollectionResult = function (result) {                                             // 495
      if (doc._id) {                                                                                            // 496
        return doc._id;                                                                                         // 497
      } // XXX what is this for??                                                                               // 498
      // It's some iteraction between the callback to _callMutatorMethod and                                    // 501
      // the return value conversion                                                                            // 502
                                                                                                                //
                                                                                                                //
      doc._id = result;                                                                                         // 503
      return result;                                                                                            // 505
    };                                                                                                          // 506
                                                                                                                //
    var wrappedCallback = wrapCallback(callback, chooseReturnValueFromCollectionResult);                        // 508
                                                                                                                //
    if (this._isRemoteCollection()) {                                                                           // 510
      var result = this._callMutatorMethod("insert", [doc], wrappedCallback);                                   // 511
                                                                                                                //
      return chooseReturnValueFromCollectionResult(result);                                                     // 512
    } // it's my collection.  descend into the collection object                                                // 513
    // and propagate any exception.                                                                             // 516
                                                                                                                //
                                                                                                                //
    try {                                                                                                       // 517
      // If the user provided a callback and the collection implements this                                     // 518
      // operation asynchronously, then queryRet will be undefined, and the                                     // 519
      // result will be returned through the callback instead.                                                  // 520
      var _result = this._collection.insert(doc, wrappedCallback);                                              // 521
                                                                                                                //
      return chooseReturnValueFromCollectionResult(_result);                                                    // 522
    } catch (e) {                                                                                               // 523
      if (callback) {                                                                                           // 524
        callback(e);                                                                                            // 525
        return null;                                                                                            // 526
      }                                                                                                         // 527
                                                                                                                //
      throw e;                                                                                                  // 528
    }                                                                                                           // 529
  }                                                                                                             // 530
                                                                                                                //
  return insert;                                                                                                // 462
}(); /**                                                                                                        // 462
      * @summary Modify one or more documents in the collection. Returns the number of matched documents.       //
      * @locus Anywhere                                                                                         //
      * @method update                                                                                          //
      * @memberOf Mongo.Collection                                                                              //
      * @instance                                                                                               //
      * @param {MongoSelector} selector Specifies which documents to modify                                     //
      * @param {MongoModifier} modifier Specifies how to modify the documents                                   //
      * @param {Object} [options]                                                                               //
      * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
      * @param {Boolean} options.upsert True to insert a document if no matching documents are found.           //
      * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
      */                                                                                                        //
                                                                                                                //
Mongo.Collection.prototype.update = function () {                                                               // 545
  function update(selector, modifier) {                                                                         // 545
    for (var _len = arguments.length, optionsAndCallback = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      optionsAndCallback[_key - 2] = arguments[_key];                                                           // 545
    }                                                                                                           // 545
                                                                                                                //
    var callback = popCallbackFromArgs(optionsAndCallback);                                                     // 546
    selector = Mongo.Collection._rewriteSelector(selector); // We've already popped off the callback, so we are left with an array
    // of one or zero items                                                                                     // 551
                                                                                                                //
    var options = _.clone(optionsAndCallback[0]) || {};                                                         // 552
                                                                                                                //
    if (options && options.upsert) {                                                                            // 553
      // set `insertedId` if absent.  `insertedId` is a Meteor extension.                                       // 554
      if (options.insertedId) {                                                                                 // 555
        if (!(typeof options.insertedId === 'string' || options.insertedId instanceof Mongo.ObjectID)) throw new Error("insertedId must be string or ObjectID");
      } else if (!selector._id) {                                                                               // 558
        options.insertedId = this._makeNewID();                                                                 // 559
      }                                                                                                         // 560
    }                                                                                                           // 561
                                                                                                                //
    var wrappedCallback = wrapCallback(callback);                                                               // 563
                                                                                                                //
    if (this._isRemoteCollection()) {                                                                           // 565
      var args = [selector, modifier, options];                                                                 // 566
      return this._callMutatorMethod("update", args, wrappedCallback);                                          // 572
    } // it's my collection.  descend into the collection object                                                // 573
    // and propagate any exception.                                                                             // 576
                                                                                                                //
                                                                                                                //
    try {                                                                                                       // 577
      // If the user provided a callback and the collection implements this                                     // 578
      // operation asynchronously, then queryRet will be undefined, and the                                     // 579
      // result will be returned through the callback instead.                                                  // 580
      return this._collection.update(selector, modifier, options, wrappedCallback);                             // 581
    } catch (e) {                                                                                               // 583
      if (callback) {                                                                                           // 584
        callback(e);                                                                                            // 585
        return null;                                                                                            // 586
      }                                                                                                         // 587
                                                                                                                //
      throw e;                                                                                                  // 588
    }                                                                                                           // 589
  }                                                                                                             // 590
                                                                                                                //
  return update;                                                                                                // 545
}(); /**                                                                                                        // 545
      * @summary Remove documents from the collection                                                           //
      * @locus Anywhere                                                                                         //
      * @method remove                                                                                          //
      * @memberOf Mongo.Collection                                                                              //
      * @instance                                                                                               //
      * @param {MongoSelector} selector Specifies which documents to remove                                     //
      * @param {Function} [callback] Optional.  If present, called with an error object as its argument.        //
      */                                                                                                        //
                                                                                                                //
Mongo.Collection.prototype.remove = function () {                                                               // 601
  function remove(selector, callback) {                                                                         // 601
    selector = Mongo.Collection._rewriteSelector(selector);                                                     // 602
    var wrappedCallback = wrapCallback(callback);                                                               // 604
                                                                                                                //
    if (this._isRemoteCollection()) {                                                                           // 606
      return this._callMutatorMethod("remove", [selector], wrappedCallback);                                    // 607
    } // it's my collection.  descend into the collection object                                                // 608
    // and propagate any exception.                                                                             // 611
                                                                                                                //
                                                                                                                //
    try {                                                                                                       // 612
      // If the user provided a callback and the collection implements this                                     // 613
      // operation asynchronously, then queryRet will be undefined, and the                                     // 614
      // result will be returned through the callback instead.                                                  // 615
      return this._collection.remove(selector, wrappedCallback);                                                // 616
    } catch (e) {                                                                                               // 617
      if (callback) {                                                                                           // 618
        callback(e);                                                                                            // 619
        return null;                                                                                            // 620
      }                                                                                                         // 621
                                                                                                                //
      throw e;                                                                                                  // 622
    }                                                                                                           // 623
  }                                                                                                             // 624
                                                                                                                //
  return remove;                                                                                                // 601
}(); // Determine if this collection is simply a minimongo representation of a real                             // 601
// database on another server                                                                                   // 627
                                                                                                                //
                                                                                                                //
Mongo.Collection.prototype._isRemoteCollection = function () {                                                  // 628
  function _isRemoteCollection() {                                                                              // 628
    // XXX see #MeteorServerNull                                                                                // 629
    return this._connection && this._connection !== Meteor.server;                                              // 630
  }                                                                                                             // 631
                                                                                                                //
  return _isRemoteCollection;                                                                                   // 628
}(); // Convert the callback to not return a result if there is an error                                        // 628
                                                                                                                //
                                                                                                                //
function wrapCallback(callback, convertResult) {                                                                // 634
  if (!callback) {                                                                                              // 635
    return;                                                                                                     // 636
  } // If no convert function was passed in, just use a "blank function"                                        // 637
                                                                                                                //
                                                                                                                //
  convertResult = convertResult || _.identity;                                                                  // 640
  return function (error, result) {                                                                             // 642
    callback(error, !error && convertResult(result));                                                           // 643
  };                                                                                                            // 644
} /**                                                                                                           // 645
   * @summary Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified)  and `insertedId` (the unique _id of the document that was inserted, if any).
   * @locus Anywhere                                                                                            //
   * @param {MongoSelector} selector Specifies which documents to modify                                        //
   * @param {MongoModifier} modifier Specifies how to modify the documents                                      //
   * @param {Object} [options]                                                                                  //
   * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
   * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
   */                                                                                                           //
                                                                                                                //
Mongo.Collection.prototype.upsert = function () {                                                               // 656
  function upsert(selector, modifier, options, callback) {                                                      // 656
    if (!callback && typeof options === "function") {                                                           // 658
      callback = options;                                                                                       // 659
      options = {};                                                                                             // 660
    }                                                                                                           // 661
                                                                                                                //
    var updateOptions = _.extend({}, options, {                                                                 // 663
      _returnObject: true,                                                                                      // 664
      upsert: true                                                                                              // 665
    });                                                                                                         // 663
                                                                                                                //
    return this.update(selector, modifier, updateOptions, callback);                                            // 668
  }                                                                                                             // 669
                                                                                                                //
  return upsert;                                                                                                // 656
}(); // We'll actually design an index API later. For now, we just pass through to                              // 656
// Mongo's, but make it synchronous.                                                                            // 672
                                                                                                                //
                                                                                                                //
Mongo.Collection.prototype._ensureIndex = function (index, options) {                                           // 673
  var self = this;                                                                                              // 674
  if (!self._collection._ensureIndex) throw new Error("Can only call _ensureIndex on server collections");      // 675
                                                                                                                //
  self._collection._ensureIndex(index, options);                                                                // 677
};                                                                                                              // 678
                                                                                                                //
Mongo.Collection.prototype._dropIndex = function (index) {                                                      // 679
  var self = this;                                                                                              // 680
  if (!self._collection._dropIndex) throw new Error("Can only call _dropIndex on server collections");          // 681
                                                                                                                //
  self._collection._dropIndex(index);                                                                           // 683
};                                                                                                              // 684
                                                                                                                //
Mongo.Collection.prototype._dropCollection = function () {                                                      // 685
  var self = this;                                                                                              // 686
  if (!self._collection.dropCollection) throw new Error("Can only call _dropCollection on server collections");
                                                                                                                //
  self._collection.dropCollection();                                                                            // 689
};                                                                                                              // 690
                                                                                                                //
Mongo.Collection.prototype._createCappedCollection = function (byteSize, maxDocuments) {                        // 691
  var self = this;                                                                                              // 692
  if (!self._collection._createCappedCollection) throw new Error("Can only call _createCappedCollection on server collections");
                                                                                                                //
  self._collection._createCappedCollection(byteSize, maxDocuments);                                             // 695
}; /**                                                                                                          // 696
    * @summary Returns the [`Collection`](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html) object corresponding to this collection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
    * @locus Server                                                                                             //
    */                                                                                                          //
                                                                                                                //
Mongo.Collection.prototype.rawCollection = function () {                                                        // 702
  var self = this;                                                                                              // 703
                                                                                                                //
  if (!self._collection.rawCollection) {                                                                        // 704
    throw new Error("Can only call rawCollection on server collections");                                       // 705
  }                                                                                                             // 706
                                                                                                                //
  return self._collection.rawCollection();                                                                      // 707
}; /**                                                                                                          // 708
    * @summary Returns the [`Db`](http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html) object corresponding to this collection's database connection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
    * @locus Server                                                                                             //
    */                                                                                                          //
                                                                                                                //
Mongo.Collection.prototype.rawDatabase = function () {                                                          // 714
  var self = this;                                                                                              // 715
                                                                                                                //
  if (!(self._driver.mongo && self._driver.mongo.db)) {                                                         // 716
    throw new Error("Can only call rawDatabase on server collections");                                         // 717
  }                                                                                                             // 718
                                                                                                                //
  return self._driver.mongo.db;                                                                                 // 719
}; /**                                                                                                          // 720
    * @summary Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules).
    * @locus Anywhere                                                                                           //
    * @class                                                                                                    //
    * @param {String} [hexString] Optional.  The 24-character hexadecimal contents of the ObjectID to create    //
    */                                                                                                          //
                                                                                                                //
Mongo.ObjectID = MongoID.ObjectID; /**                                                                          // 729
                                    * @summary To create a cursor, use find. To access the documents in a cursor, use forEach, map, or fetch.
                                    * @class                                                                    //
                                    * @instanceName cursor                                                      //
                                    */                                                                          //
Mongo.Cursor = LocalCollection.Cursor; /**                                                                      // 736
                                        * @deprecated in 0.9.1                                                  //
                                        */                                                                      //
Mongo.Collection.Cursor = Mongo.Cursor; /**                                                                     // 741
                                         * @deprecated in 0.9.1                                                 //
                                         */                                                                     //
Mongo.Collection.ObjectID = Mongo.ObjectID; /**                                                                 // 746
                                             * @deprecated in 0.9.1                                             //
                                             */                                                                 //
Meteor.Collection = Mongo.Collection; // Allow deny stuff is now in the allow-deny package                      // 751
                                                                                                                //
_.extend(Meteor.Collection.prototype, AllowDeny.CollectionPrototype);                                           // 754
                                                                                                                //
function popCallbackFromArgs(args) {                                                                            // 756
  // Pull off any callback (or perhaps a 'callback' variable that was passed                                    // 757
  // in undefined, like how 'upsert' does it).                                                                  // 758
  if (args.length && (args[args.length - 1] === undefined || args[args.length - 1] instanceof Function)) {      // 759
    return args.pop();                                                                                          // 762
  }                                                                                                             // 763
}                                                                                                               // 764
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/mongo/local_collection_driver.js");
require("./node_modules/meteor/mongo/collection.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.mongo = {}, {
  Mongo: Mongo
});

})();
