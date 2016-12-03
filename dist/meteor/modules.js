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
var _ = Package.underscore._;
var meteorInstall = Package['modules-runtime'].meteorInstall;

/* Package-scope variables */
var Buffer, process;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/client.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
require("./install-packages.js");                                            // 1
require("./stubs.js");                                                       // 2
require("./buffer.js");                                                      // 3
require("./process.js");                                                     // 4
require("reify/lib/runtime").enable(module.constructor);                     // 5
                                                                             // 6
exports.addStyles = require("./css").addStyles;                              // 7
                                                                             // 8
///////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/buffer.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  Buffer = global.Buffer || require("buffer").Buffer;                        // 2
} catch (noBuffer) {}                                                        // 3
                                                                             // 4
///////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/css.js                                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
exports.addStyles = function (css) {                                         // 1
};                                                                           // 2
                                                                             // 3
///////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/install-packages.js                                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
function install(name, mainModule) {                                         // 1
  var meteorDir = {};                                                        // 2
                                                                             // 3
  // Given a package name <name>, install a stub module in the               // 4
  // /node_modules/meteor directory called <name>.js, so that                // 5
  // require.resolve("meteor/<name>") will always return                     // 6
  // /node_modules/meteor/<name>.js instead of something like                // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event    // 8
  // that the package contains a file called index.js (#6590).               // 9
                                                                             // 10
  if (mainModule) {                                                          // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {   // 12
      module.exports = require(mainModule);                                  // 13
    }];                                                                      // 14
  } else {                                                                   // 15
    // back compat with old Meteor packages                                  // 16
    meteorDir[name + ".js"] = function (r, e, module) {                      // 17
      module.exports = Package[name];                                        // 18
    };                                                                       // 19
  }                                                                          // 20
                                                                             // 21
  meteorInstall({                                                            // 22
    node_modules: {                                                          // 23
      meteor: meteorDir                                                      // 24
    }                                                                        // 25
  });                                                                        // 26
}                                                                            // 27
                                                                             // 28
// This file will be modified during computeJsOutputFilesMap to include      // 29
// install(<name>) calls for every Meteor package.                           // 30
                                                                             // 31
install("underscore");                                                       // 32
install("meteor");                                                           // 33
install("modules-runtime");                                                  // 34
install("modules", "meteor/modules/client.js");                              // 35
install("base64");                                                           // 36
install("ejson");                                                            // 37
install("check", "meteor/check/match.js");                                   // 38
install("promise", "meteor/promise/client.js");                              // 39
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");       // 40
install("babel-compiler");                                                   // 41
install("ecmascript");                                                       // 42
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");           // 43
install("random");                                                           // 44
install("tracker");                                                          // 45
install("retry");                                                            // 46
install("id-map");                                                           // 47
install("ddp-common");                                                       // 48
install("diff-sequence");                                                    // 49
install("mongo-id");                                                         // 50
install("ddp-client");                                                       // 51
install("ddp");                                                              // 52
install("ordered-dict");                                                     // 53
install("geojson-utils", "meteor/geojson-utils/main.js");                    // 54
install("minimongo");                                                        // 55
install("ddp-server");                                                       // 56
install("allow-deny");                                                       // 57
install("mongo");                                                            // 58
                                                                             // 59
///////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/process.js                                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // The application can run `npm install process` to provide its own        // 2
  // process stub; otherwise this module will provide a partial stub.        // 3
  process = global.process || require("process");                            // 4
} catch (noProcess) {                                                        // 5
  process = {};                                                              // 6
}                                                                            // 7
                                                                             // 8
if (Meteor.isServer) {                                                       // 9
  // Make require("process") work on the server in all versions of Node.     // 10
  meteorInstall({                                                            // 11
    node_modules: {                                                          // 12
      "process.js": function (r, e, module) {                                // 13
        module.exports = process;                                            // 14
      }                                                                      // 15
    }                                                                        // 16
  });                                                                        // 17
} else {                                                                     // 18
  process.platform = "browser";                                              // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;               // 20
}                                                                            // 21
                                                                             // 22
if (typeof process.env !== "object") {                                       // 23
  process.env = {};                                                          // 24
}                                                                            // 25
                                                                             // 26
_.extend(process.env, meteorEnv);                                            // 27
                                                                             // 28
///////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/stubs.js                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // When meteor-node-stubs is installed in the application's root           // 2
  // node_modules directory, requiring it here installs aliases for stubs    // 3
  // for all Node built-in modules, such as fs, util, and http.              // 4
  require("meteor-node-stubs");                                              // 5
} catch (noStubs) {}                                                         // 6
                                                                             // 7
///////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Entry = require("./entry.js").Entry;                                     // 1
var utils = require("./utils.js");                                           // 2
                                                                             // 3
exports.enable = function (Module) {                                         // 4
  var Mp = Module.prototype;                                                 // 5
                                                                             // 6
  if (typeof Mp.import === "function" &&                                     // 7
      typeof Mp.export === "function") {                                     // 8
    // If the Mp.{import,export} methods have already been                   // 9
    // defined, abandon reification immediately.                             // 10
    return Module;                                                           // 11
  }                                                                          // 12
                                                                             // 13
  // Platform-specific code should implement this method however             // 14
  // appropriate. Module.prototype.resolve(id) should return an absolute     // 15
  // version of the given module identifier, like require.resolve.           // 16
  Mp.resolve = Mp.resolve || function resolve(id) {                          // 17
    throw new Error("Module.prototype.resolve not implemented");             // 18
  };                                                                         // 19
                                                                             // 20
  // Platform-specific code should find a way to call this method whenever   // 21
  // the module system is about to return module.exports from require. This  // 22
  // might happen more than once per module, in case of dependency cycles,   // 23
  // so we want Module.prototype.runModuleSetters to run each time.          // 24
  Mp.runModuleSetters = function runModuleSetters(valueToPassThrough) {      // 25
    var entry = Entry.get(this.id);                                          // 26
    if (entry) {                                                             // 27
      entry.runModuleSetters(this);                                          // 28
    }                                                                        // 29
                                                                             // 30
    // Assignments to exported local variables get wrapped with calls to     // 31
    // module.runModuleSetters, so module.runModuleSetters returns the       // 32
    // valueToPassThrough parameter to allow the value of the original       // 33
    // expression to pass through. For example,                              // 34
    //                                                                       // 35
    //   export var a = 1;                                                   // 36
    //   console.log(a += 3);                                                // 37
    //                                                                       // 38
    // becomes                                                               // 39
    //                                                                       // 40
    //   module.export("a", () => a);                                        // 41
    //   var a = 1;                                                          // 42
    //   console.log(module.runModuleSetters(a += 3));                       // 43
    //                                                                       // 44
    // This ensures module.runModuleSetters runs immediately after the       // 45
    // assignment, and does not interfere with the larger computation.       // 46
    return valueToPassThrough;                                               // 47
  };                                                                         // 48
                                                                             // 49
  function setESModule(module) {                                             // 50
    var exports = module.exports;                                            // 51
    if (exports && typeof exports === "object") {                            // 52
      exports.__esModule = true;                                             // 53
    }                                                                        // 54
  }                                                                          // 55
                                                                             // 56
  // If key is provided, it will be used to identify the given setters so    // 57
  // that they can be replaced if module.import is called again with the     // 58
  // same key. This avoids potential memory leaks from import declarations   // 59
  // inside loops. The compiler generates these keys automatically (and      // 60
  // deterministically) when compiling nested import declarations.           // 61
  Mp.import = function (id, setters, key) {                                  // 62
    var module = this;                                                       // 63
    setESModule(module);                                                     // 64
                                                                             // 65
    var absoluteId = module.resolve(id);                                     // 66
                                                                             // 67
    if (setters && typeof setters === "object") {                            // 68
      var entry = Entry.getOrCreate(absoluteId);                             // 69
      entry.addSetters(module, setters, key);                                // 70
    }                                                                        // 71
                                                                             // 72
    var countBefore = entry && entry.runCount;                               // 73
    var exports = typeof module.require === "function"                       // 74
      ? module.require(absoluteId)                                           // 75
      : require(absoluteId);                                                 // 76
                                                                             // 77
    if (entry && entry.runCount === countBefore) {                           // 78
      // If require(absoluteId) didn't run any setters for this entry,       // 79
      // perhaps because it's not the first time this module has been        // 80
      // required, run the setters now using an object that passes as the    // 81
      // real module object.                                                 // 82
      entry.runModuleSetters({                                               // 83
        id: absoluteId,                                                      // 84
        exports: exports,                                                    // 85
        getExportByName: Mp.getExportByName                                  // 86
      });                                                                    // 87
    }                                                                        // 88
  };                                                                         // 89
                                                                             // 90
  // Register getter functions for local variables in the scope of an        // 91
  // export statement. The keys of the getters object are exported names,    // 92
  // and the values are functions that return local values.                  // 93
  Mp.export = function (getters) {                                           // 94
    var module = this;                                                       // 95
    setESModule(module);                                                     // 96
                                                                             // 97
    if (utils.isPlainObject(getters)) {                                      // 98
      Entry.getOrCreate(module.id).addGetters(getters);                      // 99
    }                                                                        // 100
                                                                             // 101
    if (module.loaded) {                                                     // 102
      // If the module has already been evaluated, then we need to trigger   // 103
      // another round of entry.runModuleSetters calls, which begins by      // 104
      // calling entry.runModuleGetters(module).                             // 105
      module.runModuleSetters();                                             // 106
    }                                                                        // 107
  };                                                                         // 108
                                                                             // 109
  // This method can be overridden by client code to implement custom export
  // naming logic. The current implementation works well with Babel's        // 111
  // __esModule convention.                                                  // 112
  Mp.getExportByName = function (name) {                                     // 113
    var exports = this.exports;                                              // 114
                                                                             // 115
    if (name === "*") {                                                      // 116
      return exports;                                                        // 117
    }                                                                        // 118
                                                                             // 119
    if (name === "default" &&                                                // 120
        ! (exports &&                                                        // 121
           typeof exports === "object" &&                                    // 122
           exports.__esModule &&                                             // 123
           "default" in exports)) {                                          // 124
      return exports;                                                        // 125
    }                                                                        // 126
                                                                             // 127
    return exports && exports[name];                                         // 128
  };                                                                         // 129
                                                                             // 130
  return Module;                                                             // 131
};                                                                           // 132
                                                                             // 133
///////////////////////////////////////////////////////////////////////////////

}],"entry.js":["./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                // 1
var entryMap = Object.create(null);                                          // 2
var utils = require("./utils.js");                                           // 3
                                                                             // 4
function Entry(id) {                                                         // 5
  // Same as module.id for this module.                                      // 6
  this.id = id;                                                              // 7
  // The number of times this.runModuleSetters has been called.              // 8
  this.runCount = 0;                                                         // 9
  // Setters for assigning to local variables in parent modules.             // 10
  this.setters = Object.create(null);                                        // 11
  // Getters for local variables exported from this module.                  // 12
  this.getters = Object.create(null);                                        // 13
}                                                                            // 14
                                                                             // 15
var Ep = Entry.prototype;                                                    // 16
                                                                             // 17
Entry.get = function (id) {                                                  // 18
  return entryMap[id] || null;                                               // 19
};                                                                           // 20
                                                                             // 21
Entry.getOrCreate = function (id) {                                          // 22
  return entryMap[id] = entryMap[id] || new Entry(id);                       // 23
};                                                                           // 24
                                                                             // 25
var keySalt = 0;                                                             // 26
function makeUniqueKey() {                                                   // 27
  return Math.random()                                                       // 28
    .toString(36)                                                            // 29
    // Add an incrementing salt to help track key ordering and also          // 30
    // absolutely guarantee we never return the same key twice.              // 31
    .replace("0.", ++keySalt + ":");                                         // 32
}                                                                            // 33
                                                                             // 34
Ep.addSetters = function (parent, setters, key) {                            // 35
  var entry = this;                                                          // 36
                                                                             // 37
  if (typeof key === "undefined") {                                          // 38
    // If no key was provided, make a new unique key that won't collide      // 39
    // with any other keys.                                                  // 40
    key = makeUniqueKey();                                                   // 41
  } else {                                                                   // 42
    // If a key was provided, make sure it is distinct from keys provided    // 43
    // by other parent modules.                                              // 44
    key = parent.id + ":" + key;                                             // 45
  }                                                                          // 46
                                                                             // 47
  Object.keys(setters).forEach(function (name) {                             // 48
    var setter = setters[name];                                              // 49
    if (typeof setter === "function" &&                                      // 50
        // Ignore any requests for the exports.__esModule property."         // 51
        name !== "__esModule") {                                             // 52
      setter.parent = parent;                                                // 53
      (entry.setters[name] =                                                 // 54
       entry.setters[name] || Object.create(null)                            // 55
      )[key] = setter;                                                       // 56
    }                                                                        // 57
  });                                                                        // 58
};                                                                           // 59
                                                                             // 60
Ep.addGetters = function (getters) {                                         // 61
  var entry = this;                                                          // 62
  Object.keys(getters).forEach(function (name) {                             // 63
    var getter = getters[name];                                              // 64
    if (typeof getter === "function" &&                                      // 65
        // Ignore any requests for the exports.__esModule property."         // 66
        name !== "__esModule") {                                             // 67
      // Should this throw if hasOwn.call(this.getters, name)?               // 68
      entry.getters[name] = getter;                                          // 69
    }                                                                        // 70
  });                                                                        // 71
};                                                                           // 72
                                                                             // 73
function runModuleSetters(module) {                                          // 74
  var entry = entryMap[module.id];                                           // 75
  if (entry) {                                                               // 76
    entry.runModuleSetters(module);                                          // 77
  }                                                                          // 78
}                                                                            // 79
                                                                             // 80
function runModuleGetters(module) {                                          // 81
  var entry = entryMap[module.id];                                           // 82
  return entry ? entry.runModuleGetters(module) : 0;                         // 83
}                                                                            // 84
                                                                             // 85
Ep.runModuleGetters = function (module) {                                    // 86
  var entry = this;                                                          // 87
  var changeCount = 0;                                                       // 88
                                                                             // 89
  Object.keys(entry.getters).forEach(function (name) {                       // 90
    if (entry.runGetter(module, name)) {                                     // 91
      ++changeCount;                                                         // 92
    }                                                                        // 93
  });                                                                        // 94
                                                                             // 95
  return changeCount;                                                        // 96
};                                                                           // 97
                                                                             // 98
// Returns true iff the getter updated module.exports with a new value.      // 99
Ep.runGetter = function (module, name) {                                     // 100
  if (! hasOwn.call(this.getters, name)) {                                   // 101
    return false;                                                            // 102
  }                                                                          // 103
                                                                             // 104
  var getter = this.getters[name];                                           // 105
  try {                                                                      // 106
    var value = getter.call(module);                                         // 107
  } catch (e) {}                                                             // 108
  var exports = module.exports;                                              // 109
                                                                             // 110
  if (! hasOwn.call(exports, name) ||                                        // 111
      exports[name] !== value) {                                             // 112
    // We update module.exports[name] with the current value so that         // 113
    // CommonJS require calls remain consistent with module.import.          // 114
    exports[name] = value;                                                   // 115
    return true;                                                             // 116
  }                                                                          // 117
                                                                             // 118
  return false;                                                              // 119
};                                                                           // 120
                                                                             // 121
// Called whenever module.exports might have changed, to trigger any         // 122
// setters associated with the newly exported values.                        // 123
Ep.runModuleSetters = function (module) {                                    // 124
  var entry = this;                                                          // 125
  var names = Object.keys(entry.setters);                                    // 126
                                                                             // 127
  // Make sure module.exports is up to date before we call                   // 128
  // module.getExportByName(name).                                           // 129
  entry.runModuleGetters(module);                                            // 130
                                                                             // 131
  // Invoke the given callback once for every (setter, value, name) triple   // 132
  // that needs to be called. Note that forEachSetter does not call any      // 133
  // setters itself, only the given callback.                                // 134
  function forEachSetter(callback, context) {                                // 135
    names.forEach(function (name) {                                          // 136
      var setters = entry.setters[name];                                     // 137
      Object.keys(setters).forEach(function (key) {                          // 138
        var value = module.getExportByName(name);                            // 139
        if (name === "*") {                                                  // 140
          Object.keys(value).forEach(function (name) {                       // 141
            call(setters[key], value[name], name);                           // 142
          });                                                                // 143
        } else {                                                             // 144
          call(setters[key], value, name);                                   // 145
        }                                                                    // 146
      });                                                                    // 147
    });                                                                      // 148
                                                                             // 149
    function call(setter, value, name) {                                     // 150
      if (name === "__esModule") {                                           // 151
        // Ignore setters asking for module.exports.__esModule.              // 152
        return;                                                              // 153
      }                                                                      // 154
                                                                             // 155
      setter.last = setter.last || Object.create(null);                      // 156
                                                                             // 157
      if (! hasOwn.call(setter.last, name) ||                                // 158
          setter.last[name] !== value) {                                     // 159
        // Only invoke the callback if we have not called this setter        // 160
        // (with a value of this name) before, or the current value is       // 161
        // different from the last value we passed to this setter.           // 162
        return callback.apply(context, arguments);                           // 163
      }                                                                      // 164
    }                                                                        // 165
  }                                                                          // 166
                                                                             // 167
  // Every three elements of this list form a (setter, value, name) triple   // 168
  // that needs to be invoked.                                               // 169
  var settersToCall = [];                                                    // 170
                                                                             // 171
  // Lazily-initialized objects mapping parent module identifiers to         // 172
  // relevant parent module objects and snapshots of their exports.          // 173
  var relevantParents;                                                       // 174
  var parentSnapshots;                                                       // 175
                                                                             // 176
  // Take snapshots of setter.parent.exports for any setters that we are     // 177
  // planning to call, so that we can later determine if calling the         // 178
  // setters modified any of those exports objects.                          // 179
  forEachSetter(function (setter, value, name) {                             // 180
    var parent = setter.parent;                                              // 181
    parentSnapshots = parentSnapshots || Object.create(null);                // 182
    if (! hasOwn.call(parentSnapshots, parent.id)) {                         // 183
      relevantParents = relevantParents || Object.create(null);              // 184
      relevantParents[parent.id] = parent;                                   // 185
      if (utils.isPlainObject(parent.exports)) {                             // 186
        // If parent.exports is an object, make a shallow clone of it so     // 187
        // that we can see if it changes as a result of calling setters.     // 188
        parentSnapshots[parent.id] = utils.assign({}, parent.exports);       // 189
      } else {                                                               // 190
        // If parent.exports is not an object, the "snapshot" is just the    // 191
        // value of parent.exports.                                          // 192
        parentSnapshots[parent.id] = parent.exports;                         // 193
      }                                                                      // 194
    }                                                                        // 195
                                                                             // 196
    // Push three elements at a time to avoid creating wrapper arrays for    // 197
    // each (setter, value, name) triple. Note the i += 3 below.             // 198
    settersToCall.push(setter, value, name);                                 // 199
  });                                                                        // 200
                                                                             // 201
  // Now call all the setters that we decided we need to call.               // 202
  for (var i = 0; i < settersToCall.length; i += 3) {                        // 203
    var setter = settersToCall[i];                                           // 204
    var value = settersToCall[i + 1];                                        // 205
    var name = settersToCall[i + 2];                                         // 206
    setter.call(module, setter.last[name] = value, name);                    // 207
  }                                                                          // 208
                                                                             // 209
  ++entry.runCount;                                                          // 210
                                                                             // 211
  if (! relevantParents) {                                                   // 212
    // If we never called takeSnapshot, then we can avoid checking           // 213
    // relevantParents and parentSnapshots below.                            // 214
    return;                                                                  // 215
  }                                                                          // 216
                                                                             // 217
  // If any of the setters updated the module.exports of a parent module,    // 218
  // or updated local variables that are exported by that parent module,     // 219
  // then we must re-run any setters registered by that parent module.       // 220
  Object.keys(relevantParents).forEach(function (id) {                       // 221
    var parent = relevantParents[id];                                        // 222
                                                                             // 223
    if (runModuleGetters(parent) > 0) {                                      // 224
      return runModuleSetters(parent);                                       // 225
    }                                                                        // 226
                                                                             // 227
    var exports = parent.exports;                                            // 228
    var snapshot = parentSnapshots[parent.id];                               // 229
    if (utils.shallowObjEqual(exports, snapshot)) {                          // 230
      // If parent.exports have not changed since we took the snapshot,      // 231
      // then we do not need to run the parent's setters.                    // 232
      return;                                                                // 233
    }                                                                        // 234
                                                                             // 235
    runModuleSetters(parent);                                                // 236
  });                                                                        // 237
};                                                                           // 238
                                                                             // 239
exports.Entry = Entry;                                                       // 240
                                                                             // 241
///////////////////////////////////////////////////////////////////////////////

}],"utils.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/utils.js               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                // 1
var objToStr = Object.prototype.toString;                                    // 2
var objStr = objToStr.call({});                                              // 3
                                                                             // 4
function isPlainObject(value) {                                              // 5
  return objToStr.call(value) === objStr;                                    // 6
}                                                                            // 7
exports.isPlainObject = isPlainObject;                                       // 8
                                                                             // 9
exports.assign = Object.assign || function (obj) {                           // 10
  var argc = arguments.length;                                               // 11
  for (var i = 1; i < argc; ++i) {                                           // 12
    var arg = arguments[i];                                                  // 13
    if (arg && typeof arg === "object") {                                    // 14
      var keys = Object.keys(arg);                                           // 15
      for (var k = 0; k < keys.length; ++k) {                                // 16
        var key = keys[k];                                                   // 17
        obj[key] = arg[key];                                                 // 18
      }                                                                      // 19
    }                                                                        // 20
  }                                                                          // 21
  return obj;                                                                // 22
};                                                                           // 23
                                                                             // 24
exports.shallowObjEqual = function(a, b) {                                   // 25
  if (a === b) {                                                             // 26
    return true;                                                             // 27
  }                                                                          // 28
                                                                             // 29
  if (! isPlainObject(a) ||                                                  // 30
      ! isPlainObject(b)) {                                                  // 31
    return false;                                                            // 32
  }                                                                          // 33
                                                                             // 34
  var aKeys = Object.keys(a);                                                // 35
  var bKeys = Object.keys(b);                                                // 36
                                                                             // 37
  if (aKeys.length !== bKeys.length) {                                       // 38
    return false;                                                            // 39
  }                                                                          // 40
                                                                             // 41
  return aKeys.every(function (key) {                                        // 42
    return hasOwn.call(b, key) &&                                            // 43
      a[key] === b[key];                                                     // 44
  });                                                                        // 45
};                                                                           // 46
                                                                             // 47
///////////////////////////////////////////////////////////////////////////////

}}}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/modules/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.modules = exports, {
  meteorInstall: meteorInstall,
  Buffer: Buffer,
  process: process
});

})();
