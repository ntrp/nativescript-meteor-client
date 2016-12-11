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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/client.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("./install-packages.js");                                                                            // 1
require("./stubs.js");                                                                                       // 2
require("./buffer.js");                                                                                      // 3
require("./process.js");                                                                                     // 4
require("reify/lib/runtime").enable(module.constructor);                                                     // 5
                                                                                                             // 6
exports.addStyles = require("./css").addStyles;                                                              // 7
                                                                                                             // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/buffer.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  Buffer = global.Buffer || require("buffer").Buffer;                                                        // 2
} catch (noBuffer) {}                                                                                        // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/css.js                                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var doc = document;                                                                                          // 1
var head = doc.getElementsByTagName("head").item(0);                                                         // 2
                                                                                                             // 3
exports.addStyles = function (css) {                                                                         // 4
};                                                                                                           // 5
                                                                                                             // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/install-packages.js                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
function install(name, mainModule) {                                                                         // 1
  var meteorDir = {};                                                                                        // 2
                                                                                                             // 3
  // Given a package name <name>, install a stub module in the                                               // 4
  // /node_modules/meteor directory called <name>.js, so that                                                // 5
  // require.resolve("meteor/<name>") will always return                                                     // 6
  // /node_modules/meteor/<name>.js instead of something like                                                // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event                                    // 8
  // that the package contains a file called index.js (#6590).                                               // 9
                                                                                                             // 10
  if (mainModule) {                                                                                          // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {                                   // 12
      module.exports = require(mainModule);                                                                  // 13
    }];                                                                                                      // 14
  } else {                                                                                                   // 15
    // back compat with old Meteor packages                                                                  // 16
    meteorDir[name + ".js"] = function (r, e, module) {                                                      // 17
      module.exports = Package[name];                                                                        // 18
    };                                                                                                       // 19
  }                                                                                                          // 20
                                                                                                             // 21
  meteorInstall({                                                                                            // 22
    node_modules: {                                                                                          // 23
      meteor: meteorDir                                                                                      // 24
    }                                                                                                        // 25
  });                                                                                                        // 26
}                                                                                                            // 27
                                                                                                             // 28
// This file will be modified during computeJsOutputFilesMap to include                                      // 29
// install(<name>) calls for every Meteor package.                                                           // 30
                                                                                                             // 31
install("underscore");                                                                                       // 32
install("meteor");                                                                                           // 33
install("modules-runtime");                                                                                  // 34
install("modules", "meteor/modules/client.js");                                                              // 35
install("base64");                                                                                           // 36
install("ejson");                                                                                            // 37
install("check", "meteor/check/match.js");                                                                   // 38
install("promise", "meteor/promise/client.js");                                                              // 39
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");                                       // 40
install("babel-compiler");                                                                                   // 41
install("ecmascript");                                                                                       // 42
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");                                           // 43
install("random");                                                                                           // 44
install("tracker");                                                                                          // 45
install("retry");                                                                                            // 46
install("id-map");                                                                                           // 47
install("ddp-common");                                                                                       // 48
install("diff-sequence");                                                                                    // 49
install("mongo-id");                                                                                         // 50
install("ddp-client");                                                                                       // 51
install("ddp");                                                                                              // 52
install("ordered-dict");                                                                                     // 53
install("geojson-utils", "meteor/geojson-utils/main.js");                                                    // 54
install("minimongo");                                                                                        // 55
install("ddp-server");                                                                                       // 56
install("allow-deny");                                                                                       // 57
install("mongo");                                                                                            // 58
                                                                                                             // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/process.js                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  // The application can run `npm install process` to provide its own                                        // 2
  // process stub; otherwise this module will provide a partial stub.                                        // 3
  process = global.process || require("process");                                                            // 4
} catch (noProcess) {                                                                                        // 5
  process = {};                                                                                              // 6
}                                                                                                            // 7
                                                                                                             // 8
if (Meteor.isServer) {                                                                                       // 9
  // Make require("process") work on the server in all versions of Node.                                     // 10
  meteorInstall({                                                                                            // 11
    node_modules: {                                                                                          // 12
      "process.js": function (r, e, module) {                                                                // 13
        module.exports = process;                                                                            // 14
      }                                                                                                      // 15
    }                                                                                                        // 16
  });                                                                                                        // 17
} else {                                                                                                     // 18
  process.platform = "browser";                                                                              // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;                                               // 20
}                                                                                                            // 21
                                                                                                             // 22
if (typeof process.env !== "object") {                                                                       // 23
  process.env = {};                                                                                          // 24
}                                                                                                            // 25
                                                                                                             // 26
_.extend(process.env, meteorEnv);                                                                            // 27
                                                                                                             // 28
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/modules/stubs.js                                                                                 //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
try {                                                                                                        // 1
  // When meteor-node-stubs is installed in the application's root                                           // 2
  // node_modules directory, requiring it here installs aliases for stubs                                    // 3
  // for all Node built-in modules, such as fs, util, and http.                                              // 4
  require("meteor-node-stubs");                                                                              // 5
} catch (noStubs) {}                                                                                         // 6
                                                                                                             // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Entry = require("./entry.js").Entry;                                                                     // 1
var utils = require("./utils.js");                                                                           // 2
                                                                                                             // 3
exports.enable = function (Module) {                                                                         // 4
  var Mp = Module.prototype;                                                                                 // 5
                                                                                                             // 6
  if (typeof Mp.import === "function" &&                                                                     // 7
      typeof Mp.export === "function") {                                                                     // 8
    // If the Mp.{import,export} methods have already been                                                   // 9
    // defined, abandon reification immediately.                                                             // 10
    return Module;                                                                                           // 11
  }                                                                                                          // 12
                                                                                                             // 13
  // Platform-specific code should implement this method however                                             // 14
  // appropriate. Module.prototype.resolve(id) should return an absolute                                     // 15
  // version of the given module identifier, like require.resolve.                                           // 16
  Mp.resolve = Mp.resolve || function resolve(id) {                                                          // 17
    throw new Error("Module.prototype.resolve not implemented");                                             // 18
  };                                                                                                         // 19
                                                                                                             // 20
  // Platform-specific code should find a way to call this method whenever                                   // 21
  // the module system is about to return module.exports from require. This                                  // 22
  // might happen more than once per module, in case of dependency cycles,                                   // 23
  // so we want Module.prototype.runModuleSetters to run each time.                                          // 24
  Mp.runModuleSetters = function runModuleSetters(valueToPassThrough) {                                      // 25
    var entry = Entry.get(this.id);                                                                          // 26
    if (entry) {                                                                                             // 27
      entry.runModuleSetters(this);                                                                          // 28
    }                                                                                                        // 29
                                                                                                             // 30
    // Assignments to exported local variables get wrapped with calls to                                     // 31
    // module.runModuleSetters, so module.runModuleSetters returns the                                       // 32
    // valueToPassThrough parameter to allow the value of the original                                       // 33
    // expression to pass through. For example,                                                              // 34
    //                                                                                                       // 35
    //   export var a = 1;                                                                                   // 36
    //   console.log(a += 3);                                                                                // 37
    //                                                                                                       // 38
    // becomes                                                                                               // 39
    //                                                                                                       // 40
    //   module.export("a", () => a);                                                                        // 41
    //   var a = 1;                                                                                          // 42
    //   console.log(module.runModuleSetters(a += 3));                                                       // 43
    //                                                                                                       // 44
    // This ensures module.runModuleSetters runs immediately after the                                       // 45
    // assignment, and does not interfere with the larger computation.                                       // 46
    return valueToPassThrough;                                                                               // 47
  };                                                                                                         // 48
                                                                                                             // 49
  function setESModule(module) {                                                                             // 50
    var exports = module.exports;                                                                            // 51
    if (exports && typeof exports === "object") {                                                            // 52
      exports.__esModule = true;                                                                             // 53
    }                                                                                                        // 54
  }                                                                                                          // 55
                                                                                                             // 56
  // If key is provided, it will be used to identify the given setters so                                    // 57
  // that they can be replaced if module.import is called again with the                                     // 58
  // same key. This avoids potential memory leaks from import declarations                                   // 59
  // inside loops. The compiler generates these keys automatically (and                                      // 60
  // deterministically) when compiling nested import declarations.                                           // 61
  Mp.import = function (id, setters, key) {                                                                  // 62
    var module = this;                                                                                       // 63
    setESModule(module);                                                                                     // 64
                                                                                                             // 65
    var absoluteId = module.resolve(id);                                                                     // 66
                                                                                                             // 67
    if (setters && typeof setters === "object") {                                                            // 68
      var entry = Entry.getOrCreate(absoluteId);                                                             // 69
      entry.addSetters(module, setters, key);                                                                // 70
    }                                                                                                        // 71
                                                                                                             // 72
    var countBefore = entry && entry.runCount;                                                               // 73
    var exports = typeof module.require === "function"                                                       // 74
      ? module.require(absoluteId)                                                                           // 75
      : require(absoluteId);                                                                                 // 76
                                                                                                             // 77
    if (entry && entry.runCount === countBefore) {                                                           // 78
      // If require(absoluteId) didn't run any setters for this entry,                                       // 79
      // perhaps because it's not the first time this module has been                                        // 80
      // required, run the setters now using an object that passes as the                                    // 81
      // real module object.                                                                                 // 82
      entry.runModuleSetters({                                                                               // 83
        id: absoluteId,                                                                                      // 84
        exports: exports,                                                                                    // 85
        getExportByName: Mp.getExportByName                                                                  // 86
      });                                                                                                    // 87
    }                                                                                                        // 88
  };                                                                                                         // 89
                                                                                                             // 90
  // Register getter functions for local variables in the scope of an                                        // 91
  // export statement. The keys of the getters object are exported names,                                    // 92
  // and the values are functions that return local values.                                                  // 93
  Mp.export = function (getters) {                                                                           // 94
    var module = this;                                                                                       // 95
    setESModule(module);                                                                                     // 96
                                                                                                             // 97
    if (utils.isPlainObject(getters)) {                                                                      // 98
      Entry.getOrCreate(module.id).addGetters(getters);                                                      // 99
    }                                                                                                        // 100
                                                                                                             // 101
    if (module.loaded) {                                                                                     // 102
      // If the module has already been evaluated, then we need to trigger                                   // 103
      // another round of entry.runModuleSetters calls, which begins by                                      // 104
      // calling entry.runModuleGetters(module).                                                             // 105
      module.runModuleSetters();                                                                             // 106
    }                                                                                                        // 107
  };                                                                                                         // 108
                                                                                                             // 109
  // This method can be overridden by client code to implement custom export                                 // 110
  // naming logic. The current implementation works well with Babel's                                        // 111
  // __esModule convention.                                                                                  // 112
  Mp.getExportByName = function (name) {                                                                     // 113
    var exports = this.exports;                                                                              // 114
                                                                                                             // 115
    if (name === "*") {                                                                                      // 116
      return exports;                                                                                        // 117
    }                                                                                                        // 118
                                                                                                             // 119
    if (name === "default" &&                                                                                // 120
        ! (exports &&                                                                                        // 121
           typeof exports === "object" &&                                                                    // 122
           exports.__esModule &&                                                                             // 123
           "default" in exports)) {                                                                          // 124
      return exports;                                                                                        // 125
    }                                                                                                        // 126
                                                                                                             // 127
    return exports && exports[name];                                                                         // 128
  };                                                                                                         // 129
                                                                                                             // 130
  return Module;                                                                                             // 131
};                                                                                                           // 132
                                                                                                             // 133
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"entry.js":["./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                                                // 1
var entryMap = Object.create(null);                                                                          // 2
var utils = require("./utils.js");                                                                           // 3
                                                                                                             // 4
function Entry(id) {                                                                                         // 5
  // Same as module.id for this module.                                                                      // 6
  this.id = id;                                                                                              // 7
  // The number of times this.runModuleSetters has been called.                                              // 8
  this.runCount = 0;                                                                                         // 9
  // Setters for assigning to local variables in parent modules.                                             // 10
  this.setters = Object.create(null);                                                                        // 11
  // Getters for local variables exported from this module.                                                  // 12
  this.getters = Object.create(null);                                                                        // 13
}                                                                                                            // 14
                                                                                                             // 15
var Ep = Entry.prototype;                                                                                    // 16
                                                                                                             // 17
Entry.get = function (id) {                                                                                  // 18
  return entryMap[id] || null;                                                                               // 19
};                                                                                                           // 20
                                                                                                             // 21
Entry.getOrCreate = function (id) {                                                                          // 22
  return entryMap[id] = entryMap[id] || new Entry(id);                                                       // 23
};                                                                                                           // 24
                                                                                                             // 25
var keySalt = 0;                                                                                             // 26
function makeUniqueKey() {                                                                                   // 27
  return Math.random()                                                                                       // 28
    .toString(36)                                                                                            // 29
    // Add an incrementing salt to help track key ordering and also                                          // 30
    // absolutely guarantee we never return the same key twice.                                              // 31
    .replace("0.", ++keySalt + ":");                                                                         // 32
}                                                                                                            // 33
                                                                                                             // 34
Ep.addSetters = function (parent, setters, key) {                                                            // 35
  var entry = this;                                                                                          // 36
                                                                                                             // 37
  if (typeof key === "undefined") {                                                                          // 38
    // If no key was provided, make a new unique key that won't collide                                      // 39
    // with any other keys.                                                                                  // 40
    key = makeUniqueKey();                                                                                   // 41
  } else {                                                                                                   // 42
    // If a key was provided, make sure it is distinct from keys provided                                    // 43
    // by other parent modules.                                                                              // 44
    key = parent.id + ":" + key;                                                                             // 45
  }                                                                                                          // 46
                                                                                                             // 47
  Object.keys(setters).forEach(function (name) {                                                             // 48
    var setter = setters[name];                                                                              // 49
    if (typeof setter === "function" &&                                                                      // 50
        // Ignore any requests for the exports.__esModule property."                                         // 51
        name !== "__esModule") {                                                                             // 52
      setter.parent = parent;                                                                                // 53
      (entry.setters[name] =                                                                                 // 54
       entry.setters[name] || Object.create(null)                                                            // 55
      )[key] = setter;                                                                                       // 56
    }                                                                                                        // 57
  });                                                                                                        // 58
};                                                                                                           // 59
                                                                                                             // 60
Ep.addGetters = function (getters) {                                                                         // 61
  var entry = this;                                                                                          // 62
  Object.keys(getters).forEach(function (name) {                                                             // 63
    var getter = getters[name];                                                                              // 64
    if (typeof getter === "function" &&                                                                      // 65
        // Ignore any requests for the exports.__esModule property."                                         // 66
        name !== "__esModule") {                                                                             // 67
      // Should this throw if hasOwn.call(this.getters, name)?                                               // 68
      entry.getters[name] = getter;                                                                          // 69
    }                                                                                                        // 70
  });                                                                                                        // 71
};                                                                                                           // 72
                                                                                                             // 73
function runModuleSetters(module) {                                                                          // 74
  var entry = entryMap[module.id];                                                                           // 75
  if (entry) {                                                                                               // 76
    entry.runModuleSetters(module);                                                                          // 77
  }                                                                                                          // 78
}                                                                                                            // 79
                                                                                                             // 80
function runModuleGetters(module) {                                                                          // 81
  var entry = entryMap[module.id];                                                                           // 82
  return entry ? entry.runModuleGetters(module) : 0;                                                         // 83
}                                                                                                            // 84
                                                                                                             // 85
Ep.runModuleGetters = function (module) {                                                                    // 86
  var entry = this;                                                                                          // 87
  var changeCount = 0;                                                                                       // 88
                                                                                                             // 89
  Object.keys(entry.getters).forEach(function (name) {                                                       // 90
    if (entry.runGetter(module, name)) {                                                                     // 91
      ++changeCount;                                                                                         // 92
    }                                                                                                        // 93
  });                                                                                                        // 94
                                                                                                             // 95
  return changeCount;                                                                                        // 96
};                                                                                                           // 97
                                                                                                             // 98
// Returns true iff the getter updated module.exports with a new value.                                      // 99
Ep.runGetter = function (module, name) {                                                                     // 100
  if (! hasOwn.call(this.getters, name)) {                                                                   // 101
    return false;                                                                                            // 102
  }                                                                                                          // 103
                                                                                                             // 104
  var getter = this.getters[name];                                                                           // 105
  try {                                                                                                      // 106
    var value = getter.call(module);                                                                         // 107
  } catch (e) {}                                                                                             // 108
  var exports = module.exports;                                                                              // 109
                                                                                                             // 110
  if (! hasOwn.call(exports, name) ||                                                                        // 111
      exports[name] !== value) {                                                                             // 112
    // We update module.exports[name] with the current value so that                                         // 113
    // CommonJS require calls remain consistent with module.import.                                          // 114
    exports[name] = value;                                                                                   // 115
    return true;                                                                                             // 116
  }                                                                                                          // 117
                                                                                                             // 118
  return false;                                                                                              // 119
};                                                                                                           // 120
                                                                                                             // 121
// Called whenever module.exports might have changed, to trigger any                                         // 122
// setters associated with the newly exported values.                                                        // 123
Ep.runModuleSetters = function (module) {                                                                    // 124
  var entry = this;                                                                                          // 125
  var names = Object.keys(entry.setters);                                                                    // 126
                                                                                                             // 127
  // Make sure module.exports is up to date before we call                                                   // 128
  // module.getExportByName(name).                                                                           // 129
  entry.runModuleGetters(module);                                                                            // 130
                                                                                                             // 131
  // Invoke the given callback once for every (setter, value, name) triple                                   // 132
  // that needs to be called. Note that forEachSetter does not call any                                      // 133
  // setters itself, only the given callback.                                                                // 134
  function forEachSetter(callback, context) {                                                                // 135
    names.forEach(function (name) {                                                                          // 136
      var setters = entry.setters[name];                                                                     // 137
      Object.keys(setters).forEach(function (key) {                                                          // 138
        var value = module.getExportByName(name);                                                            // 139
        if (name === "*") {                                                                                  // 140
          Object.keys(value).forEach(function (name) {                                                       // 141
            call(setters[key], value[name], name);                                                           // 142
          });                                                                                                // 143
        } else {                                                                                             // 144
          call(setters[key], value, name);                                                                   // 145
        }                                                                                                    // 146
      });                                                                                                    // 147
    });                                                                                                      // 148
                                                                                                             // 149
    function call(setter, value, name) {                                                                     // 150
      if (name === "__esModule") {                                                                           // 151
        // Ignore setters asking for module.exports.__esModule.                                              // 152
        return;                                                                                              // 153
      }                                                                                                      // 154
                                                                                                             // 155
      setter.last = setter.last || Object.create(null);                                                      // 156
                                                                                                             // 157
      if (! hasOwn.call(setter.last, name) ||                                                                // 158
          setter.last[name] !== value) {                                                                     // 159
        // Only invoke the callback if we have not called this setter                                        // 160
        // (with a value of this name) before, or the current value is                                       // 161
        // different from the last value we passed to this setter.                                           // 162
        return callback.apply(context, arguments);                                                           // 163
      }                                                                                                      // 164
    }                                                                                                        // 165
  }                                                                                                          // 166
                                                                                                             // 167
  // Every three elements of this list form a (setter, value, name) triple                                   // 168
  // that needs to be invoked.                                                                               // 169
  var settersToCall = [];                                                                                    // 170
                                                                                                             // 171
  // Lazily-initialized objects mapping parent module identifiers to                                         // 172
  // relevant parent module objects and snapshots of their exports.                                          // 173
  var relevantParents;                                                                                       // 174
  var parentSnapshots;                                                                                       // 175
                                                                                                             // 176
  // Take snapshots of setter.parent.exports for any setters that we are                                     // 177
  // planning to call, so that we can later determine if calling the                                         // 178
  // setters modified any of those exports objects.                                                          // 179
  forEachSetter(function (setter, value, name) {                                                             // 180
    var parent = setter.parent;                                                                              // 181
    parentSnapshots = parentSnapshots || Object.create(null);                                                // 182
    if (! hasOwn.call(parentSnapshots, parent.id)) {                                                         // 183
      relevantParents = relevantParents || Object.create(null);                                              // 184
      relevantParents[parent.id] = parent;                                                                   // 185
      if (utils.isPlainObject(parent.exports)) {                                                             // 186
        // If parent.exports is an object, make a shallow clone of it so                                     // 187
        // that we can see if it changes as a result of calling setters.                                     // 188
        parentSnapshots[parent.id] = utils.assign({}, parent.exports);                                       // 189
      } else {                                                                                               // 190
        // If parent.exports is not an object, the "snapshot" is just the                                    // 191
        // value of parent.exports.                                                                          // 192
        parentSnapshots[parent.id] = parent.exports;                                                         // 193
      }                                                                                                      // 194
    }                                                                                                        // 195
                                                                                                             // 196
    // Push three elements at a time to avoid creating wrapper arrays for                                    // 197
    // each (setter, value, name) triple. Note the i += 3 below.                                             // 198
    settersToCall.push(setter, value, name);                                                                 // 199
  });                                                                                                        // 200
                                                                                                             // 201
  // Now call all the setters that we decided we need to call.                                               // 202
  for (var i = 0; i < settersToCall.length; i += 3) {                                                        // 203
    var setter = settersToCall[i];                                                                           // 204
    var value = settersToCall[i + 1];                                                                        // 205
    var name = settersToCall[i + 2];                                                                         // 206
    setter.call(module, setter.last[name] = value, name);                                                    // 207
  }                                                                                                          // 208
                                                                                                             // 209
  ++entry.runCount;                                                                                          // 210
                                                                                                             // 211
  if (! relevantParents) {                                                                                   // 212
    // If we never called takeSnapshot, then we can avoid checking                                           // 213
    // relevantParents and parentSnapshots below.                                                            // 214
    return;                                                                                                  // 215
  }                                                                                                          // 216
                                                                                                             // 217
  // If any of the setters updated the module.exports of a parent module,                                    // 218
  // or updated local variables that are exported by that parent module,                                     // 219
  // then we must re-run any setters registered by that parent module.                                       // 220
  Object.keys(relevantParents).forEach(function (id) {                                                       // 221
    var parent = relevantParents[id];                                                                        // 222
                                                                                                             // 223
    if (runModuleGetters(parent) > 0) {                                                                      // 224
      return runModuleSetters(parent);                                                                       // 225
    }                                                                                                        // 226
                                                                                                             // 227
    var exports = parent.exports;                                                                            // 228
    var snapshot = parentSnapshots[parent.id];                                                               // 229
    if (utils.shallowObjEqual(exports, snapshot)) {                                                          // 230
      // If parent.exports have not changed since we took the snapshot,                                      // 231
      // then we do not need to run the parent's setters.                                                    // 232
      return;                                                                                                // 233
    }                                                                                                        // 234
                                                                                                             // 235
    runModuleSetters(parent);                                                                                // 236
  });                                                                                                        // 237
};                                                                                                           // 238
                                                                                                             // 239
exports.Entry = Entry;                                                                                       // 240
                                                                                                             // 241
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utils.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/utils.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                                                // 1
var objToStr = Object.prototype.toString;                                                                    // 2
var objStr = objToStr.call({});                                                                              // 3
                                                                                                             // 4
function isPlainObject(value) {                                                                              // 5
  return objToStr.call(value) === objStr;                                                                    // 6
}                                                                                                            // 7
exports.isPlainObject = isPlainObject;                                                                       // 8
                                                                                                             // 9
exports.assign = Object.assign || function (obj) {                                                           // 10
  var argc = arguments.length;                                                                               // 11
  for (var i = 1; i < argc; ++i) {                                                                           // 12
    var arg = arguments[i];                                                                                  // 13
    if (arg && typeof arg === "object") {                                                                    // 14
      var keys = Object.keys(arg);                                                                           // 15
      for (var k = 0; k < keys.length; ++k) {                                                                // 16
        var key = keys[k];                                                                                   // 17
        obj[key] = arg[key];                                                                                 // 18
      }                                                                                                      // 19
    }                                                                                                        // 20
  }                                                                                                          // 21
  return obj;                                                                                                // 22
};                                                                                                           // 23
                                                                                                             // 24
exports.shallowObjEqual = function(a, b) {                                                                   // 25
  if (a === b) {                                                                                             // 26
    return true;                                                                                             // 27
  }                                                                                                          // 28
                                                                                                             // 29
  if (! isPlainObject(a) ||                                                                                  // 30
      ! isPlainObject(b)) {                                                                                  // 31
    return false;                                                                                            // 32
  }                                                                                                          // 33
                                                                                                             // 34
  var aKeys = Object.keys(a);                                                                                // 35
  var bKeys = Object.keys(b);                                                                                // 36
                                                                                                             // 37
  if (aKeys.length !== bKeys.length) {                                                                       // 38
    return false;                                                                                            // 39
  }                                                                                                          // 40
                                                                                                             // 41
  return aKeys.every(function (key) {                                                                        // 42
    return hasOwn.call(b, key) &&                                                                            // 43
      a[key] === b[key];                                                                                     // 44
  });                                                                                                        // 45
};                                                                                                           // 46
                                                                                                             // 47
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},"meteor-node-stubs":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/package.json                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "meteor-node-stubs";                                                                          // 1
exports.version = "0.2.4";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["./map.json",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/index.js                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var map = require("./map.json");                                                                             // 1
var meteorAliases = {};                                                                                      // 2
                                                                                                             // 3
Object.keys(map).forEach(function (id) {                                                                     // 4
  if (typeof map[id] === "string") {                                                                         // 5
    try {                                                                                                    // 6
      exports[id] = meteorAliases[id + ".js"] =                                                              // 7
        require.resolve(map[id]);                                                                            // 8
    } catch (e) {                                                                                            // 9
      // Resolution can fail at runtime if the stub was not included in the                                  // 10
      // bundle because nothing depended on it.                                                              // 11
    }                                                                                                        // 12
  } else {                                                                                                   // 13
    exports[id] = map[id];                                                                                   // 14
    meteorAliases[id + ".js"] = function(){};                                                                // 15
  }                                                                                                          // 16
});                                                                                                          // 17
                                                                                                             // 18
if (typeof meteorInstall === "function") {                                                                   // 19
  meteorInstall({                                                                                            // 20
    // Install the aliases into a node_modules directory one level up from                                   // 21
    // the root directory, so that they do not clutter the namespace                                         // 22
    // available to apps and packages.                                                                       // 23
    "..": {                                                                                                  // 24
      node_modules: meteorAliases                                                                            // 25
    }                                                                                                        // 26
  });                                                                                                        // 27
}                                                                                                            // 28
                                                                                                             // 29
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"map.json":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/map.json                                                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.exports = {                                                                                           // 1
  "assert": "assert/",                                                                                       // 2
  "buffer": "buffer/",                                                                                       // 3
  "child_process": null,                                                                                     // 4
  "cluster": null,                                                                                           // 5
  "console": "console-browserify",                                                                           // 6
  "constants": "constants-browserify",                                                                       // 7
  "crypto": "crypto-browserify",                                                                             // 8
  "dgram": null,                                                                                             // 9
  "dns": null,                                                                                               // 10
  "domain": "domain-browser",                                                                                // 11
  "events": "events/",                                                                                       // 12
  "fs": null,                                                                                                // 13
  "http": "http-browserify",                                                                                 // 14
  "https": "https-browserify",                                                                               // 15
  "module": null,                                                                                            // 16
  "net": null,                                                                                               // 17
  "os": "os-browserify/browser.js",                                                                          // 18
  "path": "path-browserify",                                                                                 // 19
  "process": "process/browser.js",                                                                           // 20
  "punycode": "punycode/",                                                                                   // 21
  "querystring": "querystring-es3/",                                                                         // 22
  "readline": null,                                                                                          // 23
  "repl": null,                                                                                              // 24
  "stream": "stream-browserify",                                                                             // 25
  "_stream_duplex": "readable-stream/duplex.js",                                                             // 26
  "_stream_passthrough": "readable-stream/passthrough.js",                                                   // 27
  "_stream_readable": "readable-stream/readable.js",                                                         // 28
  "_stream_transform": "readable-stream/transform.js",                                                       // 29
  "_stream_writable": "readable-stream/writable.js",                                                         // 30
  "string_decoder": "string_decoder/",                                                                       // 31
  "sys": "util/util.js",                                                                                     // 32
  "timers": "timers-browserify",                                                                             // 33
  "tls": null,                                                                                               // 34
  "tty": "tty-browserify",                                                                                   // 35
  "url": "url/",                                                                                             // 36
  "util": "util/util.js",                                                                                    // 37
  "vm": "vm-browserify",                                                                                     // 38
  "zlib": "browserify-zlib"                                                                                  // 39
};                                                                                                           // 40
                                                                                                             // 41
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deps":{"buffer.js":["buffer/",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/buffer.js                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("buffer/");                                                                                          // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"process.js":["process/browser.js",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/process.js                                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("process/browser.js");                                                                               // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"domain.js":["domain-browser",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/deps/domain.js                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
require("domain-browser");                                                                                   // 1
                                                                                                             // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"node_modules":{"buffer":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/package.json                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "buffer";                                                                                     // 1
exports.version = "4.9.1";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["base64-js","ieee754","isarray",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/buffer/index.js                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
/*!                                                                                                          // 1
 * The buffer module from node.js, for the browser.                                                          // 2
 *                                                                                                           // 3
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>                                     // 4
 * @license  MIT                                                                                             // 5
 */                                                                                                          // 6
/* eslint-disable no-proto */                                                                                // 7
                                                                                                             // 8
'use strict'                                                                                                 // 9
                                                                                                             // 10
var base64 = require('base64-js')                                                                            // 11
var ieee754 = require('ieee754')                                                                             // 12
var isArray = require('isarray')                                                                             // 13
                                                                                                             // 14
exports.Buffer = Buffer                                                                                      // 15
exports.SlowBuffer = SlowBuffer                                                                              // 16
exports.INSPECT_MAX_BYTES = 50                                                                               // 17
                                                                                                             // 18
/**                                                                                                          // 19
 * If `Buffer.TYPED_ARRAY_SUPPORT`:                                                                          // 20
 *   === true    Use Uint8Array implementation (fastest)                                                     // 21
 *   === false   Use Object implementation (most compatible, even IE6)                                       // 22
 *                                                                                                           // 23
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,                        // 24
 * Opera 11.6+, iOS 4.2+.                                                                                    // 25
 *                                                                                                           // 26
 * Due to various browser bugs, sometimes the Object implementation will be used even                        // 27
 * when the browser supports typed arrays.                                                                   // 28
 *                                                                                                           // 29
 * Note:                                                                                                     // 30
 *                                                                                                           // 31
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,                       // 32
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.                                             // 33
 *                                                                                                           // 34
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.                                  // 35
 *                                                                                                           // 36
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of                    // 37
 *     incorrect length in some situations.                                                                  // 38
                                                                                                             // 39
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they                    // 40
 * get the Object implementation, which is slower but behaves correctly.                                     // 41
 */                                                                                                          // 42
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined                                        // 43
  ? global.TYPED_ARRAY_SUPPORT                                                                               // 44
  : typedArraySupport()                                                                                      // 45
                                                                                                             // 46
/*                                                                                                           // 47
 * Export kMaxLength after typed array support is determined.                                                // 48
 */                                                                                                          // 49
exports.kMaxLength = kMaxLength()                                                                            // 50
                                                                                                             // 51
function typedArraySupport () {                                                                              // 52
  try {                                                                                                      // 53
    var arr = new Uint8Array(1)                                                                              // 54
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}                        // 55
    return arr.foo() === 42 && // typed array instances can be augmented                                     // 56
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`                                 // 57
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`                                    // 58
  } catch (e) {                                                                                              // 59
    return false                                                                                             // 60
  }                                                                                                          // 61
}                                                                                                            // 62
                                                                                                             // 63
function kMaxLength () {                                                                                     // 64
  return Buffer.TYPED_ARRAY_SUPPORT                                                                          // 65
    ? 0x7fffffff                                                                                             // 66
    : 0x3fffffff                                                                                             // 67
}                                                                                                            // 68
                                                                                                             // 69
function createBuffer (that, length) {                                                                       // 70
  if (kMaxLength() < length) {                                                                               // 71
    throw new RangeError('Invalid typed array length')                                                       // 72
  }                                                                                                          // 73
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 74
    // Return an augmented `Uint8Array` instance, for best performance                                       // 75
    that = new Uint8Array(length)                                                                            // 76
    that.__proto__ = Buffer.prototype                                                                        // 77
  } else {                                                                                                   // 78
    // Fallback: Return an object instance of the Buffer class                                               // 79
    if (that === null) {                                                                                     // 80
      that = new Buffer(length)                                                                              // 81
    }                                                                                                        // 82
    that.length = length                                                                                     // 83
  }                                                                                                          // 84
                                                                                                             // 85
  return that                                                                                                // 86
}                                                                                                            // 87
                                                                                                             // 88
/**                                                                                                          // 89
 * The Buffer constructor returns instances of `Uint8Array` that have their                                  // 90
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of                           // 91
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods                           // 92
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it                             // 93
 * returns a single octet.                                                                                   // 94
 *                                                                                                           // 95
 * The `Uint8Array` prototype remains unmodified.                                                            // 96
 */                                                                                                          // 97
                                                                                                             // 98
function Buffer (arg, encodingOrOffset, length) {                                                            // 99
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {                                            // 100
    return new Buffer(arg, encodingOrOffset, length)                                                         // 101
  }                                                                                                          // 102
                                                                                                             // 103
  // Common case.                                                                                            // 104
  if (typeof arg === 'number') {                                                                             // 105
    if (typeof encodingOrOffset === 'string') {                                                              // 106
      throw new Error(                                                                                       // 107
        'If encoding is specified then the first argument must be a string'                                  // 108
      )                                                                                                      // 109
    }                                                                                                        // 110
    return allocUnsafe(this, arg)                                                                            // 111
  }                                                                                                          // 112
  return from(this, arg, encodingOrOffset, length)                                                           // 113
}                                                                                                            // 114
                                                                                                             // 115
Buffer.poolSize = 8192 // not used by this implementation                                                    // 116
                                                                                                             // 117
// TODO: Legacy, not needed anymore. Remove in next major version.                                           // 118
Buffer._augment = function (arr) {                                                                           // 119
  arr.__proto__ = Buffer.prototype                                                                           // 120
  return arr                                                                                                 // 121
}                                                                                                            // 122
                                                                                                             // 123
function from (that, value, encodingOrOffset, length) {                                                      // 124
  if (typeof value === 'number') {                                                                           // 125
    throw new TypeError('"value" argument must not be a number')                                             // 126
  }                                                                                                          // 127
                                                                                                             // 128
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {                                  // 129
    return fromArrayBuffer(that, value, encodingOrOffset, length)                                            // 130
  }                                                                                                          // 131
                                                                                                             // 132
  if (typeof value === 'string') {                                                                           // 133
    return fromString(that, value, encodingOrOffset)                                                         // 134
  }                                                                                                          // 135
                                                                                                             // 136
  return fromObject(that, value)                                                                             // 137
}                                                                                                            // 138
                                                                                                             // 139
/**                                                                                                          // 140
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError                                   // 141
 * if value is a number.                                                                                     // 142
 * Buffer.from(str[, encoding])                                                                              // 143
 * Buffer.from(array)                                                                                        // 144
 * Buffer.from(buffer)                                                                                       // 145
 * Buffer.from(arrayBuffer[, byteOffset[, length]])                                                          // 146
 **/                                                                                                         // 147
Buffer.from = function (value, encodingOrOffset, length) {                                                   // 148
  return from(null, value, encodingOrOffset, length)                                                         // 149
}                                                                                                            // 150
                                                                                                             // 151
if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                            // 152
  Buffer.prototype.__proto__ = Uint8Array.prototype                                                          // 153
  Buffer.__proto__ = Uint8Array                                                                              // 154
  if (typeof Symbol !== 'undefined' && Symbol.species &&                                                     // 155
      Buffer[Symbol.species] === Buffer) {                                                                   // 156
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97                               // 157
    Object.defineProperty(Buffer, Symbol.species, {                                                          // 158
      value: null,                                                                                           // 159
      configurable: true                                                                                     // 160
    })                                                                                                       // 161
  }                                                                                                          // 162
}                                                                                                            // 163
                                                                                                             // 164
function assertSize (size) {                                                                                 // 165
  if (typeof size !== 'number') {                                                                            // 166
    throw new TypeError('"size" argument must be a number')                                                  // 167
  } else if (size < 0) {                                                                                     // 168
    throw new RangeError('"size" argument must not be negative')                                             // 169
  }                                                                                                          // 170
}                                                                                                            // 171
                                                                                                             // 172
function alloc (that, size, fill, encoding) {                                                                // 173
  assertSize(size)                                                                                           // 174
  if (size <= 0) {                                                                                           // 175
    return createBuffer(that, size)                                                                          // 176
  }                                                                                                          // 177
  if (fill !== undefined) {                                                                                  // 178
    // Only pay attention to encoding if it's a string. This                                                 // 179
    // prevents accidentally sending in a number that would                                                  // 180
    // be interpretted as a start offset.                                                                    // 181
    return typeof encoding === 'string'                                                                      // 182
      ? createBuffer(that, size).fill(fill, encoding)                                                        // 183
      : createBuffer(that, size).fill(fill)                                                                  // 184
  }                                                                                                          // 185
  return createBuffer(that, size)                                                                            // 186
}                                                                                                            // 187
                                                                                                             // 188
/**                                                                                                          // 189
 * Creates a new filled Buffer instance.                                                                     // 190
 * alloc(size[, fill[, encoding]])                                                                           // 191
 **/                                                                                                         // 192
Buffer.alloc = function (size, fill, encoding) {                                                             // 193
  return alloc(null, size, fill, encoding)                                                                   // 194
}                                                                                                            // 195
                                                                                                             // 196
function allocUnsafe (that, size) {                                                                          // 197
  assertSize(size)                                                                                           // 198
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)                                                // 199
  if (!Buffer.TYPED_ARRAY_SUPPORT) {                                                                         // 200
    for (var i = 0; i < size; ++i) {                                                                         // 201
      that[i] = 0                                                                                            // 202
    }                                                                                                        // 203
  }                                                                                                          // 204
  return that                                                                                                // 205
}                                                                                                            // 206
                                                                                                             // 207
/**                                                                                                          // 208
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.                          // 209
 * */                                                                                                        // 210
Buffer.allocUnsafe = function (size) {                                                                       // 211
  return allocUnsafe(null, size)                                                                             // 212
}                                                                                                            // 213
/**                                                                                                          // 214
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.                      // 215
 */                                                                                                          // 216
Buffer.allocUnsafeSlow = function (size) {                                                                   // 217
  return allocUnsafe(null, size)                                                                             // 218
}                                                                                                            // 219
                                                                                                             // 220
function fromString (that, string, encoding) {                                                               // 221
  if (typeof encoding !== 'string' || encoding === '') {                                                     // 222
    encoding = 'utf8'                                                                                        // 223
  }                                                                                                          // 224
                                                                                                             // 225
  if (!Buffer.isEncoding(encoding)) {                                                                        // 226
    throw new TypeError('"encoding" must be a valid string encoding')                                        // 227
  }                                                                                                          // 228
                                                                                                             // 229
  var length = byteLength(string, encoding) | 0                                                              // 230
  that = createBuffer(that, length)                                                                          // 231
                                                                                                             // 232
  var actual = that.write(string, encoding)                                                                  // 233
                                                                                                             // 234
  if (actual !== length) {                                                                                   // 235
    // Writing a hex string, for example, that contains invalid characters will                              // 236
    // cause everything after the first invalid character to be ignored. (e.g.                               // 237
    // 'abxxcd' will be treated as 'ab')                                                                     // 238
    that = that.slice(0, actual)                                                                             // 239
  }                                                                                                          // 240
                                                                                                             // 241
  return that                                                                                                // 242
}                                                                                                            // 243
                                                                                                             // 244
function fromArrayLike (that, array) {                                                                       // 245
  var length = array.length < 0 ? 0 : checked(array.length) | 0                                              // 246
  that = createBuffer(that, length)                                                                          // 247
  for (var i = 0; i < length; i += 1) {                                                                      // 248
    that[i] = array[i] & 255                                                                                 // 249
  }                                                                                                          // 250
  return that                                                                                                // 251
}                                                                                                            // 252
                                                                                                             // 253
function fromArrayBuffer (that, array, byteOffset, length) {                                                 // 254
  array.byteLength // this throws if `array` is not a valid ArrayBuffer                                      // 255
                                                                                                             // 256
  if (byteOffset < 0 || array.byteLength < byteOffset) {                                                     // 257
    throw new RangeError('\'offset\' is out of bounds')                                                      // 258
  }                                                                                                          // 259
                                                                                                             // 260
  if (array.byteLength < byteOffset + (length || 0)) {                                                       // 261
    throw new RangeError('\'length\' is out of bounds')                                                      // 262
  }                                                                                                          // 263
                                                                                                             // 264
  if (byteOffset === undefined && length === undefined) {                                                    // 265
    array = new Uint8Array(array)                                                                            // 266
  } else if (length === undefined) {                                                                         // 267
    array = new Uint8Array(array, byteOffset)                                                                // 268
  } else {                                                                                                   // 269
    array = new Uint8Array(array, byteOffset, length)                                                        // 270
  }                                                                                                          // 271
                                                                                                             // 272
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 273
    // Return an augmented `Uint8Array` instance, for best performance                                       // 274
    that = array                                                                                             // 275
    that.__proto__ = Buffer.prototype                                                                        // 276
  } else {                                                                                                   // 277
    // Fallback: Return an object instance of the Buffer class                                               // 278
    that = fromArrayLike(that, array)                                                                        // 279
  }                                                                                                          // 280
  return that                                                                                                // 281
}                                                                                                            // 282
                                                                                                             // 283
function fromObject (that, obj) {                                                                            // 284
  if (Buffer.isBuffer(obj)) {                                                                                // 285
    var len = checked(obj.length) | 0                                                                        // 286
    that = createBuffer(that, len)                                                                           // 287
                                                                                                             // 288
    if (that.length === 0) {                                                                                 // 289
      return that                                                                                            // 290
    }                                                                                                        // 291
                                                                                                             // 292
    obj.copy(that, 0, 0, len)                                                                                // 293
    return that                                                                                              // 294
  }                                                                                                          // 295
                                                                                                             // 296
  if (obj) {                                                                                                 // 297
    if ((typeof ArrayBuffer !== 'undefined' &&                                                               // 298
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {                                             // 299
      if (typeof obj.length !== 'number' || isnan(obj.length)) {                                             // 300
        return createBuffer(that, 0)                                                                         // 301
      }                                                                                                      // 302
      return fromArrayLike(that, obj)                                                                        // 303
    }                                                                                                        // 304
                                                                                                             // 305
    if (obj.type === 'Buffer' && isArray(obj.data)) {                                                        // 306
      return fromArrayLike(that, obj.data)                                                                   // 307
    }                                                                                                        // 308
  }                                                                                                          // 309
                                                                                                             // 310
  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')  // 311
}                                                                                                            // 312
                                                                                                             // 313
function checked (length) {                                                                                  // 314
  // Note: cannot use `length < kMaxLength()` here because that fails when                                   // 315
  // length is NaN (which is otherwise coerced to zero.)                                                     // 316
  if (length >= kMaxLength()) {                                                                              // 317
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +                                 // 318
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')                                  // 319
  }                                                                                                          // 320
  return length | 0                                                                                          // 321
}                                                                                                            // 322
                                                                                                             // 323
function SlowBuffer (length) {                                                                               // 324
  if (+length != length) { // eslint-disable-line eqeqeq                                                     // 325
    length = 0                                                                                               // 326
  }                                                                                                          // 327
  return Buffer.alloc(+length)                                                                               // 328
}                                                                                                            // 329
                                                                                                             // 330
Buffer.isBuffer = function isBuffer (b) {                                                                    // 331
  return !!(b != null && b._isBuffer)                                                                        // 332
}                                                                                                            // 333
                                                                                                             // 334
Buffer.compare = function compare (a, b) {                                                                   // 335
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {                                                          // 336
    throw new TypeError('Arguments must be Buffers')                                                         // 337
  }                                                                                                          // 338
                                                                                                             // 339
  if (a === b) return 0                                                                                      // 340
                                                                                                             // 341
  var x = a.length                                                                                           // 342
  var y = b.length                                                                                           // 343
                                                                                                             // 344
  for (var i = 0, len = Math.min(x, y); i < len; ++i) {                                                      // 345
    if (a[i] !== b[i]) {                                                                                     // 346
      x = a[i]                                                                                               // 347
      y = b[i]                                                                                               // 348
      break                                                                                                  // 349
    }                                                                                                        // 350
  }                                                                                                          // 351
                                                                                                             // 352
  if (x < y) return -1                                                                                       // 353
  if (y < x) return 1                                                                                        // 354
  return 0                                                                                                   // 355
}                                                                                                            // 356
                                                                                                             // 357
Buffer.isEncoding = function isEncoding (encoding) {                                                         // 358
  switch (String(encoding).toLowerCase()) {                                                                  // 359
    case 'hex':                                                                                              // 360
    case 'utf8':                                                                                             // 361
    case 'utf-8':                                                                                            // 362
    case 'ascii':                                                                                            // 363
    case 'latin1':                                                                                           // 364
    case 'binary':                                                                                           // 365
    case 'base64':                                                                                           // 366
    case 'ucs2':                                                                                             // 367
    case 'ucs-2':                                                                                            // 368
    case 'utf16le':                                                                                          // 369
    case 'utf-16le':                                                                                         // 370
      return true                                                                                            // 371
    default:                                                                                                 // 372
      return false                                                                                           // 373
  }                                                                                                          // 374
}                                                                                                            // 375
                                                                                                             // 376
Buffer.concat = function concat (list, length) {                                                             // 377
  if (!isArray(list)) {                                                                                      // 378
    throw new TypeError('"list" argument must be an Array of Buffers')                                       // 379
  }                                                                                                          // 380
                                                                                                             // 381
  if (list.length === 0) {                                                                                   // 382
    return Buffer.alloc(0)                                                                                   // 383
  }                                                                                                          // 384
                                                                                                             // 385
  var i                                                                                                      // 386
  if (length === undefined) {                                                                                // 387
    length = 0                                                                                               // 388
    for (i = 0; i < list.length; ++i) {                                                                      // 389
      length += list[i].length                                                                               // 390
    }                                                                                                        // 391
  }                                                                                                          // 392
                                                                                                             // 393
  var buffer = Buffer.allocUnsafe(length)                                                                    // 394
  var pos = 0                                                                                                // 395
  for (i = 0; i < list.length; ++i) {                                                                        // 396
    var buf = list[i]                                                                                        // 397
    if (!Buffer.isBuffer(buf)) {                                                                             // 398
      throw new TypeError('"list" argument must be an Array of Buffers')                                     // 399
    }                                                                                                        // 400
    buf.copy(buffer, pos)                                                                                    // 401
    pos += buf.length                                                                                        // 402
  }                                                                                                          // 403
  return buffer                                                                                              // 404
}                                                                                                            // 405
                                                                                                             // 406
function byteLength (string, encoding) {                                                                     // 407
  if (Buffer.isBuffer(string)) {                                                                             // 408
    return string.length                                                                                     // 409
  }                                                                                                          // 410
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&                      // 411
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {                                       // 412
    return string.byteLength                                                                                 // 413
  }                                                                                                          // 414
  if (typeof string !== 'string') {                                                                          // 415
    string = '' + string                                                                                     // 416
  }                                                                                                          // 417
                                                                                                             // 418
  var len = string.length                                                                                    // 419
  if (len === 0) return 0                                                                                    // 420
                                                                                                             // 421
  // Use a for loop to avoid recursion                                                                       // 422
  var loweredCase = false                                                                                    // 423
  for (;;) {                                                                                                 // 424
    switch (encoding) {                                                                                      // 425
      case 'ascii':                                                                                          // 426
      case 'latin1':                                                                                         // 427
      case 'binary':                                                                                         // 428
        return len                                                                                           // 429
      case 'utf8':                                                                                           // 430
      case 'utf-8':                                                                                          // 431
      case undefined:                                                                                        // 432
        return utf8ToBytes(string).length                                                                    // 433
      case 'ucs2':                                                                                           // 434
      case 'ucs-2':                                                                                          // 435
      case 'utf16le':                                                                                        // 436
      case 'utf-16le':                                                                                       // 437
        return len * 2                                                                                       // 438
      case 'hex':                                                                                            // 439
        return len >>> 1                                                                                     // 440
      case 'base64':                                                                                         // 441
        return base64ToBytes(string).length                                                                  // 442
      default:                                                                                               // 443
        if (loweredCase) return utf8ToBytes(string).length // assume utf8                                    // 444
        encoding = ('' + encoding).toLowerCase()                                                             // 445
        loweredCase = true                                                                                   // 446
    }                                                                                                        // 447
  }                                                                                                          // 448
}                                                                                                            // 449
Buffer.byteLength = byteLength                                                                               // 450
                                                                                                             // 451
function slowToString (encoding, start, end) {                                                               // 452
  var loweredCase = false                                                                                    // 453
                                                                                                             // 454
  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only                               // 455
  // property of a typed array.                                                                              // 456
                                                                                                             // 457
  // This behaves neither like String nor Uint8Array in that we set start/end                                // 458
  // to their upper/lower bounds if the value passed is out of range.                                        // 459
  // undefined is handled specially as per ECMA-262 6th Edition,                                             // 460
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.                                         // 461
  if (start === undefined || start < 0) {                                                                    // 462
    start = 0                                                                                                // 463
  }                                                                                                          // 464
  // Return early if start > this.length. Done here to prevent potential uint32                              // 465
  // coercion fail below.                                                                                    // 466
  if (start > this.length) {                                                                                 // 467
    return ''                                                                                                // 468
  }                                                                                                          // 469
                                                                                                             // 470
  if (end === undefined || end > this.length) {                                                              // 471
    end = this.length                                                                                        // 472
  }                                                                                                          // 473
                                                                                                             // 474
  if (end <= 0) {                                                                                            // 475
    return ''                                                                                                // 476
  }                                                                                                          // 477
                                                                                                             // 478
  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.                                 // 479
  end >>>= 0                                                                                                 // 480
  start >>>= 0                                                                                               // 481
                                                                                                             // 482
  if (end <= start) {                                                                                        // 483
    return ''                                                                                                // 484
  }                                                                                                          // 485
                                                                                                             // 486
  if (!encoding) encoding = 'utf8'                                                                           // 487
                                                                                                             // 488
  while (true) {                                                                                             // 489
    switch (encoding) {                                                                                      // 490
      case 'hex':                                                                                            // 491
        return hexSlice(this, start, end)                                                                    // 492
                                                                                                             // 493
      case 'utf8':                                                                                           // 494
      case 'utf-8':                                                                                          // 495
        return utf8Slice(this, start, end)                                                                   // 496
                                                                                                             // 497
      case 'ascii':                                                                                          // 498
        return asciiSlice(this, start, end)                                                                  // 499
                                                                                                             // 500
      case 'latin1':                                                                                         // 501
      case 'binary':                                                                                         // 502
        return latin1Slice(this, start, end)                                                                 // 503
                                                                                                             // 504
      case 'base64':                                                                                         // 505
        return base64Slice(this, start, end)                                                                 // 506
                                                                                                             // 507
      case 'ucs2':                                                                                           // 508
      case 'ucs-2':                                                                                          // 509
      case 'utf16le':                                                                                        // 510
      case 'utf-16le':                                                                                       // 511
        return utf16leSlice(this, start, end)                                                                // 512
                                                                                                             // 513
      default:                                                                                               // 514
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)                                // 515
        encoding = (encoding + '').toLowerCase()                                                             // 516
        loweredCase = true                                                                                   // 517
    }                                                                                                        // 518
  }                                                                                                          // 519
}                                                                                                            // 520
                                                                                                             // 521
// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect                       // 522
// Buffer instances.                                                                                         // 523
Buffer.prototype._isBuffer = true                                                                            // 524
                                                                                                             // 525
function swap (b, n, m) {                                                                                    // 526
  var i = b[n]                                                                                               // 527
  b[n] = b[m]                                                                                                // 528
  b[m] = i                                                                                                   // 529
}                                                                                                            // 530
                                                                                                             // 531
Buffer.prototype.swap16 = function swap16 () {                                                               // 532
  var len = this.length                                                                                      // 533
  if (len % 2 !== 0) {                                                                                       // 534
    throw new RangeError('Buffer size must be a multiple of 16-bits')                                        // 535
  }                                                                                                          // 536
  for (var i = 0; i < len; i += 2) {                                                                         // 537
    swap(this, i, i + 1)                                                                                     // 538
  }                                                                                                          // 539
  return this                                                                                                // 540
}                                                                                                            // 541
                                                                                                             // 542
Buffer.prototype.swap32 = function swap32 () {                                                               // 543
  var len = this.length                                                                                      // 544
  if (len % 4 !== 0) {                                                                                       // 545
    throw new RangeError('Buffer size must be a multiple of 32-bits')                                        // 546
  }                                                                                                          // 547
  for (var i = 0; i < len; i += 4) {                                                                         // 548
    swap(this, i, i + 3)                                                                                     // 549
    swap(this, i + 1, i + 2)                                                                                 // 550
  }                                                                                                          // 551
  return this                                                                                                // 552
}                                                                                                            // 553
                                                                                                             // 554
Buffer.prototype.swap64 = function swap64 () {                                                               // 555
  var len = this.length                                                                                      // 556
  if (len % 8 !== 0) {                                                                                       // 557
    throw new RangeError('Buffer size must be a multiple of 64-bits')                                        // 558
  }                                                                                                          // 559
  for (var i = 0; i < len; i += 8) {                                                                         // 560
    swap(this, i, i + 7)                                                                                     // 561
    swap(this, i + 1, i + 6)                                                                                 // 562
    swap(this, i + 2, i + 5)                                                                                 // 563
    swap(this, i + 3, i + 4)                                                                                 // 564
  }                                                                                                          // 565
  return this                                                                                                // 566
}                                                                                                            // 567
                                                                                                             // 568
Buffer.prototype.toString = function toString () {                                                           // 569
  var length = this.length | 0                                                                               // 570
  if (length === 0) return ''                                                                                // 571
  if (arguments.length === 0) return utf8Slice(this, 0, length)                                              // 572
  return slowToString.apply(this, arguments)                                                                 // 573
}                                                                                                            // 574
                                                                                                             // 575
Buffer.prototype.equals = function equals (b) {                                                              // 576
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')                                  // 577
  if (this === b) return true                                                                                // 578
  return Buffer.compare(this, b) === 0                                                                       // 579
}                                                                                                            // 580
                                                                                                             // 581
Buffer.prototype.inspect = function inspect () {                                                             // 582
  var str = ''                                                                                               // 583
  var max = exports.INSPECT_MAX_BYTES                                                                        // 584
  if (this.length > 0) {                                                                                     // 585
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')                                              // 586
    if (this.length > max) str += ' ... '                                                                    // 587
  }                                                                                                          // 588
  return '<Buffer ' + str + '>'                                                                              // 589
}                                                                                                            // 590
                                                                                                             // 591
Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {                       // 592
  if (!Buffer.isBuffer(target)) {                                                                            // 593
    throw new TypeError('Argument must be a Buffer')                                                         // 594
  }                                                                                                          // 595
                                                                                                             // 596
  if (start === undefined) {                                                                                 // 597
    start = 0                                                                                                // 598
  }                                                                                                          // 599
  if (end === undefined) {                                                                                   // 600
    end = target ? target.length : 0                                                                         // 601
  }                                                                                                          // 602
  if (thisStart === undefined) {                                                                             // 603
    thisStart = 0                                                                                            // 604
  }                                                                                                          // 605
  if (thisEnd === undefined) {                                                                               // 606
    thisEnd = this.length                                                                                    // 607
  }                                                                                                          // 608
                                                                                                             // 609
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {                          // 610
    throw new RangeError('out of range index')                                                               // 611
  }                                                                                                          // 612
                                                                                                             // 613
  if (thisStart >= thisEnd && start >= end) {                                                                // 614
    return 0                                                                                                 // 615
  }                                                                                                          // 616
  if (thisStart >= thisEnd) {                                                                                // 617
    return -1                                                                                                // 618
  }                                                                                                          // 619
  if (start >= end) {                                                                                        // 620
    return 1                                                                                                 // 621
  }                                                                                                          // 622
                                                                                                             // 623
  start >>>= 0                                                                                               // 624
  end >>>= 0                                                                                                 // 625
  thisStart >>>= 0                                                                                           // 626
  thisEnd >>>= 0                                                                                             // 627
                                                                                                             // 628
  if (this === target) return 0                                                                              // 629
                                                                                                             // 630
  var x = thisEnd - thisStart                                                                                // 631
  var y = end - start                                                                                        // 632
  var len = Math.min(x, y)                                                                                   // 633
                                                                                                             // 634
  var thisCopy = this.slice(thisStart, thisEnd)                                                              // 635
  var targetCopy = target.slice(start, end)                                                                  // 636
                                                                                                             // 637
  for (var i = 0; i < len; ++i) {                                                                            // 638
    if (thisCopy[i] !== targetCopy[i]) {                                                                     // 639
      x = thisCopy[i]                                                                                        // 640
      y = targetCopy[i]                                                                                      // 641
      break                                                                                                  // 642
    }                                                                                                        // 643
  }                                                                                                          // 644
                                                                                                             // 645
  if (x < y) return -1                                                                                       // 646
  if (y < x) return 1                                                                                        // 647
  return 0                                                                                                   // 648
}                                                                                                            // 649
                                                                                                             // 650
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,                              // 651
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.                                         // 652
//                                                                                                           // 653
// Arguments:                                                                                                // 654
// - buffer - a Buffer to search                                                                             // 655
// - val - a string, Buffer, or number                                                                       // 656
// - byteOffset - an index into `buffer`; will be clamped to an int32                                        // 657
// - encoding - an optional encoding, relevant is val is a string                                            // 658
// - dir - true for indexOf, false for lastIndexOf                                                           // 659
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {                                     // 660
  // Empty buffer means no match                                                                             // 661
  if (buffer.length === 0) return -1                                                                         // 662
                                                                                                             // 663
  // Normalize byteOffset                                                                                    // 664
  if (typeof byteOffset === 'string') {                                                                      // 665
    encoding = byteOffset                                                                                    // 666
    byteOffset = 0                                                                                           // 667
  } else if (byteOffset > 0x7fffffff) {                                                                      // 668
    byteOffset = 0x7fffffff                                                                                  // 669
  } else if (byteOffset < -0x80000000) {                                                                     // 670
    byteOffset = -0x80000000                                                                                 // 671
  }                                                                                                          // 672
  byteOffset = +byteOffset  // Coerce to Number.                                                             // 673
  if (isNaN(byteOffset)) {                                                                                   // 674
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer                             // 675
    byteOffset = dir ? 0 : (buffer.length - 1)                                                               // 676
  }                                                                                                          // 677
                                                                                                             // 678
  // Normalize byteOffset: negative offsets start from the end of the buffer                                 // 679
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset                                                // 680
  if (byteOffset >= buffer.length) {                                                                         // 681
    if (dir) return -1                                                                                       // 682
    else byteOffset = buffer.length - 1                                                                      // 683
  } else if (byteOffset < 0) {                                                                               // 684
    if (dir) byteOffset = 0                                                                                  // 685
    else return -1                                                                                           // 686
  }                                                                                                          // 687
                                                                                                             // 688
  // Normalize val                                                                                           // 689
  if (typeof val === 'string') {                                                                             // 690
    val = Buffer.from(val, encoding)                                                                         // 691
  }                                                                                                          // 692
                                                                                                             // 693
  // Finally, search either indexOf (if dir is true) or lastIndexOf                                          // 694
  if (Buffer.isBuffer(val)) {                                                                                // 695
    // Special case: looking for empty string/buffer always fails                                            // 696
    if (val.length === 0) {                                                                                  // 697
      return -1                                                                                              // 698
    }                                                                                                        // 699
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)                                              // 700
  } else if (typeof val === 'number') {                                                                      // 701
    val = val & 0xFF // Search for a byte value [0-255]                                                      // 702
    if (Buffer.TYPED_ARRAY_SUPPORT &&                                                                        // 703
        typeof Uint8Array.prototype.indexOf === 'function') {                                                // 704
      if (dir) {                                                                                             // 705
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)                                    // 706
      } else {                                                                                               // 707
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)                                // 708
      }                                                                                                      // 709
    }                                                                                                        // 710
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)                                          // 711
  }                                                                                                          // 712
                                                                                                             // 713
  throw new TypeError('val must be string, number or Buffer')                                                // 714
}                                                                                                            // 715
                                                                                                             // 716
function arrayIndexOf (arr, val, byteOffset, encoding, dir) {                                                // 717
  var indexSize = 1                                                                                          // 718
  var arrLength = arr.length                                                                                 // 719
  var valLength = val.length                                                                                 // 720
                                                                                                             // 721
  if (encoding !== undefined) {                                                                              // 722
    encoding = String(encoding).toLowerCase()                                                                // 723
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||                                                       // 724
        encoding === 'utf16le' || encoding === 'utf-16le') {                                                 // 725
      if (arr.length < 2 || val.length < 2) {                                                                // 726
        return -1                                                                                            // 727
      }                                                                                                      // 728
      indexSize = 2                                                                                          // 729
      arrLength /= 2                                                                                         // 730
      valLength /= 2                                                                                         // 731
      byteOffset /= 2                                                                                        // 732
    }                                                                                                        // 733
  }                                                                                                          // 734
                                                                                                             // 735
  function read (buf, i) {                                                                                   // 736
    if (indexSize === 1) {                                                                                   // 737
      return buf[i]                                                                                          // 738
    } else {                                                                                                 // 739
      return buf.readUInt16BE(i * indexSize)                                                                 // 740
    }                                                                                                        // 741
  }                                                                                                          // 742
                                                                                                             // 743
  var i                                                                                                      // 744
  if (dir) {                                                                                                 // 745
    var foundIndex = -1                                                                                      // 746
    for (i = byteOffset; i < arrLength; i++) {                                                               // 747
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {                              // 748
        if (foundIndex === -1) foundIndex = i                                                                // 749
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize                                  // 750
      } else {                                                                                               // 751
        if (foundIndex !== -1) i -= i - foundIndex                                                           // 752
        foundIndex = -1                                                                                      // 753
      }                                                                                                      // 754
    }                                                                                                        // 755
  } else {                                                                                                   // 756
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength                               // 757
    for (i = byteOffset; i >= 0; i--) {                                                                      // 758
      var found = true                                                                                       // 759
      for (var j = 0; j < valLength; j++) {                                                                  // 760
        if (read(arr, i + j) !== read(val, j)) {                                                             // 761
          found = false                                                                                      // 762
          break                                                                                              // 763
        }                                                                                                    // 764
      }                                                                                                      // 765
      if (found) return i                                                                                    // 766
    }                                                                                                        // 767
  }                                                                                                          // 768
                                                                                                             // 769
  return -1                                                                                                  // 770
}                                                                                                            // 771
                                                                                                             // 772
Buffer.prototype.includes = function includes (val, byteOffset, encoding) {                                  // 773
  return this.indexOf(val, byteOffset, encoding) !== -1                                                      // 774
}                                                                                                            // 775
                                                                                                             // 776
Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {                                    // 777
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)                                         // 778
}                                                                                                            // 779
                                                                                                             // 780
Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {                            // 781
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)                                        // 782
}                                                                                                            // 783
                                                                                                             // 784
function hexWrite (buf, string, offset, length) {                                                            // 785
  offset = Number(offset) || 0                                                                               // 786
  var remaining = buf.length - offset                                                                        // 787
  if (!length) {                                                                                             // 788
    length = remaining                                                                                       // 789
  } else {                                                                                                   // 790
    length = Number(length)                                                                                  // 791
    if (length > remaining) {                                                                                // 792
      length = remaining                                                                                     // 793
    }                                                                                                        // 794
  }                                                                                                          // 795
                                                                                                             // 796
  // must be an even number of digits                                                                        // 797
  var strLen = string.length                                                                                 // 798
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')                                            // 799
                                                                                                             // 800
  if (length > strLen / 2) {                                                                                 // 801
    length = strLen / 2                                                                                      // 802
  }                                                                                                          // 803
  for (var i = 0; i < length; ++i) {                                                                         // 804
    var parsed = parseInt(string.substr(i * 2, 2), 16)                                                       // 805
    if (isNaN(parsed)) return i                                                                              // 806
    buf[offset + i] = parsed                                                                                 // 807
  }                                                                                                          // 808
  return i                                                                                                   // 809
}                                                                                                            // 810
                                                                                                             // 811
function utf8Write (buf, string, offset, length) {                                                           // 812
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)                           // 813
}                                                                                                            // 814
                                                                                                             // 815
function asciiWrite (buf, string, offset, length) {                                                          // 816
  return blitBuffer(asciiToBytes(string), buf, offset, length)                                               // 817
}                                                                                                            // 818
                                                                                                             // 819
function latin1Write (buf, string, offset, length) {                                                         // 820
  return asciiWrite(buf, string, offset, length)                                                             // 821
}                                                                                                            // 822
                                                                                                             // 823
function base64Write (buf, string, offset, length) {                                                         // 824
  return blitBuffer(base64ToBytes(string), buf, offset, length)                                              // 825
}                                                                                                            // 826
                                                                                                             // 827
function ucs2Write (buf, string, offset, length) {                                                           // 828
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)                        // 829
}                                                                                                            // 830
                                                                                                             // 831
Buffer.prototype.write = function write (string, offset, length, encoding) {                                 // 832
  // Buffer#write(string)                                                                                    // 833
  if (offset === undefined) {                                                                                // 834
    encoding = 'utf8'                                                                                        // 835
    length = this.length                                                                                     // 836
    offset = 0                                                                                               // 837
  // Buffer#write(string, encoding)                                                                          // 838
  } else if (length === undefined && typeof offset === 'string') {                                           // 839
    encoding = offset                                                                                        // 840
    length = this.length                                                                                     // 841
    offset = 0                                                                                               // 842
  // Buffer#write(string, offset[, length][, encoding])                                                      // 843
  } else if (isFinite(offset)) {                                                                             // 844
    offset = offset | 0                                                                                      // 845
    if (isFinite(length)) {                                                                                  // 846
      length = length | 0                                                                                    // 847
      if (encoding === undefined) encoding = 'utf8'                                                          // 848
    } else {                                                                                                 // 849
      encoding = length                                                                                      // 850
      length = undefined                                                                                     // 851
    }                                                                                                        // 852
  // legacy write(string, encoding, offset, length) - remove in v0.13                                        // 853
  } else {                                                                                                   // 854
    throw new Error(                                                                                         // 855
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'                              // 856
    )                                                                                                        // 857
  }                                                                                                          // 858
                                                                                                             // 859
  var remaining = this.length - offset                                                                       // 860
  if (length === undefined || length > remaining) length = remaining                                         // 861
                                                                                                             // 862
  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {                           // 863
    throw new RangeError('Attempt to write outside buffer bounds')                                           // 864
  }                                                                                                          // 865
                                                                                                             // 866
  if (!encoding) encoding = 'utf8'                                                                           // 867
                                                                                                             // 868
  var loweredCase = false                                                                                    // 869
  for (;;) {                                                                                                 // 870
    switch (encoding) {                                                                                      // 871
      case 'hex':                                                                                            // 872
        return hexWrite(this, string, offset, length)                                                        // 873
                                                                                                             // 874
      case 'utf8':                                                                                           // 875
      case 'utf-8':                                                                                          // 876
        return utf8Write(this, string, offset, length)                                                       // 877
                                                                                                             // 878
      case 'ascii':                                                                                          // 879
        return asciiWrite(this, string, offset, length)                                                      // 880
                                                                                                             // 881
      case 'latin1':                                                                                         // 882
      case 'binary':                                                                                         // 883
        return latin1Write(this, string, offset, length)                                                     // 884
                                                                                                             // 885
      case 'base64':                                                                                         // 886
        // Warning: maxLength not taken into account in base64Write                                          // 887
        return base64Write(this, string, offset, length)                                                     // 888
                                                                                                             // 889
      case 'ucs2':                                                                                           // 890
      case 'ucs-2':                                                                                          // 891
      case 'utf16le':                                                                                        // 892
      case 'utf-16le':                                                                                       // 893
        return ucs2Write(this, string, offset, length)                                                       // 894
                                                                                                             // 895
      default:                                                                                               // 896
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)                                // 897
        encoding = ('' + encoding).toLowerCase()                                                             // 898
        loweredCase = true                                                                                   // 899
    }                                                                                                        // 900
  }                                                                                                          // 901
}                                                                                                            // 902
                                                                                                             // 903
Buffer.prototype.toJSON = function toJSON () {                                                               // 904
  return {                                                                                                   // 905
    type: 'Buffer',                                                                                          // 906
    data: Array.prototype.slice.call(this._arr || this, 0)                                                   // 907
  }                                                                                                          // 908
}                                                                                                            // 909
                                                                                                             // 910
function base64Slice (buf, start, end) {                                                                     // 911
  if (start === 0 && end === buf.length) {                                                                   // 912
    return base64.fromByteArray(buf)                                                                         // 913
  } else {                                                                                                   // 914
    return base64.fromByteArray(buf.slice(start, end))                                                       // 915
  }                                                                                                          // 916
}                                                                                                            // 917
                                                                                                             // 918
function utf8Slice (buf, start, end) {                                                                       // 919
  end = Math.min(buf.length, end)                                                                            // 920
  var res = []                                                                                               // 921
                                                                                                             // 922
  var i = start                                                                                              // 923
  while (i < end) {                                                                                          // 924
    var firstByte = buf[i]                                                                                   // 925
    var codePoint = null                                                                                     // 926
    var bytesPerSequence = (firstByte > 0xEF) ? 4                                                            // 927
      : (firstByte > 0xDF) ? 3                                                                               // 928
      : (firstByte > 0xBF) ? 2                                                                               // 929
      : 1                                                                                                    // 930
                                                                                                             // 931
    if (i + bytesPerSequence <= end) {                                                                       // 932
      var secondByte, thirdByte, fourthByte, tempCodePoint                                                   // 933
                                                                                                             // 934
      switch (bytesPerSequence) {                                                                            // 935
        case 1:                                                                                              // 936
          if (firstByte < 0x80) {                                                                            // 937
            codePoint = firstByte                                                                            // 938
          }                                                                                                  // 939
          break                                                                                              // 940
        case 2:                                                                                              // 941
          secondByte = buf[i + 1]                                                                            // 942
          if ((secondByte & 0xC0) === 0x80) {                                                                // 943
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)                                  // 944
            if (tempCodePoint > 0x7F) {                                                                      // 945
              codePoint = tempCodePoint                                                                      // 946
            }                                                                                                // 947
          }                                                                                                  // 948
          break                                                                                              // 949
        case 3:                                                                                              // 950
          secondByte = buf[i + 1]                                                                            // 951
          thirdByte = buf[i + 2]                                                                             // 952
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {                                 // 953
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)       // 954
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {               // 955
              codePoint = tempCodePoint                                                                      // 956
            }                                                                                                // 957
          }                                                                                                  // 958
          break                                                                                              // 959
        case 4:                                                                                              // 960
          secondByte = buf[i + 1]                                                                            // 961
          thirdByte = buf[i + 2]                                                                             // 962
          fourthByte = buf[i + 3]                                                                            // 963
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {                                        // 966
              codePoint = tempCodePoint                                                                      // 967
            }                                                                                                // 968
          }                                                                                                  // 969
      }                                                                                                      // 970
    }                                                                                                        // 971
                                                                                                             // 972
    if (codePoint === null) {                                                                                // 973
      // we did not generate a valid codePoint so insert a                                                   // 974
      // replacement char (U+FFFD) and advance only 1 byte                                                   // 975
      codePoint = 0xFFFD                                                                                     // 976
      bytesPerSequence = 1                                                                                   // 977
    } else if (codePoint > 0xFFFF) {                                                                         // 978
      // encode to utf16 (surrogate pair dance)                                                              // 979
      codePoint -= 0x10000                                                                                   // 980
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)                                                            // 981
      codePoint = 0xDC00 | codePoint & 0x3FF                                                                 // 982
    }                                                                                                        // 983
                                                                                                             // 984
    res.push(codePoint)                                                                                      // 985
    i += bytesPerSequence                                                                                    // 986
  }                                                                                                          // 987
                                                                                                             // 988
  return decodeCodePointsArray(res)                                                                          // 989
}                                                                                                            // 990
                                                                                                             // 991
// Based on http://stackoverflow.com/a/22747272/680742, the browser with                                     // 992
// the lowest limit is Chrome, with 0x10000 args.                                                            // 993
// We go 1 magnitude less, for safety                                                                        // 994
var MAX_ARGUMENTS_LENGTH = 0x1000                                                                            // 995
                                                                                                             // 996
function decodeCodePointsArray (codePoints) {                                                                // 997
  var len = codePoints.length                                                                                // 998
  if (len <= MAX_ARGUMENTS_LENGTH) {                                                                         // 999
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()                              // 1000
  }                                                                                                          // 1001
                                                                                                             // 1002
  // Decode in chunks to avoid "call stack size exceeded".                                                   // 1003
  var res = ''                                                                                               // 1004
  var i = 0                                                                                                  // 1005
  while (i < len) {                                                                                          // 1006
    res += String.fromCharCode.apply(                                                                        // 1007
      String,                                                                                                // 1008
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)                                                         // 1009
    )                                                                                                        // 1010
  }                                                                                                          // 1011
  return res                                                                                                 // 1012
}                                                                                                            // 1013
                                                                                                             // 1014
function asciiSlice (buf, start, end) {                                                                      // 1015
  var ret = ''                                                                                               // 1016
  end = Math.min(buf.length, end)                                                                            // 1017
                                                                                                             // 1018
  for (var i = start; i < end; ++i) {                                                                        // 1019
    ret += String.fromCharCode(buf[i] & 0x7F)                                                                // 1020
  }                                                                                                          // 1021
  return ret                                                                                                 // 1022
}                                                                                                            // 1023
                                                                                                             // 1024
function latin1Slice (buf, start, end) {                                                                     // 1025
  var ret = ''                                                                                               // 1026
  end = Math.min(buf.length, end)                                                                            // 1027
                                                                                                             // 1028
  for (var i = start; i < end; ++i) {                                                                        // 1029
    ret += String.fromCharCode(buf[i])                                                                       // 1030
  }                                                                                                          // 1031
  return ret                                                                                                 // 1032
}                                                                                                            // 1033
                                                                                                             // 1034
function hexSlice (buf, start, end) {                                                                        // 1035
  var len = buf.length                                                                                       // 1036
                                                                                                             // 1037
  if (!start || start < 0) start = 0                                                                         // 1038
  if (!end || end < 0 || end > len) end = len                                                                // 1039
                                                                                                             // 1040
  var out = ''                                                                                               // 1041
  for (var i = start; i < end; ++i) {                                                                        // 1042
    out += toHex(buf[i])                                                                                     // 1043
  }                                                                                                          // 1044
  return out                                                                                                 // 1045
}                                                                                                            // 1046
                                                                                                             // 1047
function utf16leSlice (buf, start, end) {                                                                    // 1048
  var bytes = buf.slice(start, end)                                                                          // 1049
  var res = ''                                                                                               // 1050
  for (var i = 0; i < bytes.length; i += 2) {                                                                // 1051
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)                                                // 1052
  }                                                                                                          // 1053
  return res                                                                                                 // 1054
}                                                                                                            // 1055
                                                                                                             // 1056
Buffer.prototype.slice = function slice (start, end) {                                                       // 1057
  var len = this.length                                                                                      // 1058
  start = ~~start                                                                                            // 1059
  end = end === undefined ? len : ~~end                                                                      // 1060
                                                                                                             // 1061
  if (start < 0) {                                                                                           // 1062
    start += len                                                                                             // 1063
    if (start < 0) start = 0                                                                                 // 1064
  } else if (start > len) {                                                                                  // 1065
    start = len                                                                                              // 1066
  }                                                                                                          // 1067
                                                                                                             // 1068
  if (end < 0) {                                                                                             // 1069
    end += len                                                                                               // 1070
    if (end < 0) end = 0                                                                                     // 1071
  } else if (end > len) {                                                                                    // 1072
    end = len                                                                                                // 1073
  }                                                                                                          // 1074
                                                                                                             // 1075
  if (end < start) end = start                                                                               // 1076
                                                                                                             // 1077
  var newBuf                                                                                                 // 1078
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1079
    newBuf = this.subarray(start, end)                                                                       // 1080
    newBuf.__proto__ = Buffer.prototype                                                                      // 1081
  } else {                                                                                                   // 1082
    var sliceLen = end - start                                                                               // 1083
    newBuf = new Buffer(sliceLen, undefined)                                                                 // 1084
    for (var i = 0; i < sliceLen; ++i) {                                                                     // 1085
      newBuf[i] = this[i + start]                                                                            // 1086
    }                                                                                                        // 1087
  }                                                                                                          // 1088
                                                                                                             // 1089
  return newBuf                                                                                              // 1090
}                                                                                                            // 1091
                                                                                                             // 1092
/*                                                                                                           // 1093
 * Need to make sure that buffer isn't trying to write out of bounds.                                        // 1094
 */                                                                                                          // 1095
function checkOffset (offset, ext, length) {                                                                 // 1096
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')                           // 1097
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')                   // 1098
}                                                                                                            // 1099
                                                                                                             // 1100
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {                           // 1101
  offset = offset | 0                                                                                        // 1102
  byteLength = byteLength | 0                                                                                // 1103
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 1104
                                                                                                             // 1105
  var val = this[offset]                                                                                     // 1106
  var mul = 1                                                                                                // 1107
  var i = 0                                                                                                  // 1108
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 1109
    val += this[offset + i] * mul                                                                            // 1110
  }                                                                                                          // 1111
                                                                                                             // 1112
  return val                                                                                                 // 1113
}                                                                                                            // 1114
                                                                                                             // 1115
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {                           // 1116
  offset = offset | 0                                                                                        // 1117
  byteLength = byteLength | 0                                                                                // 1118
  if (!noAssert) {                                                                                           // 1119
    checkOffset(offset, byteLength, this.length)                                                             // 1120
  }                                                                                                          // 1121
                                                                                                             // 1122
  var val = this[offset + --byteLength]                                                                      // 1123
  var mul = 1                                                                                                // 1124
  while (byteLength > 0 && (mul *= 0x100)) {                                                                 // 1125
    val += this[offset + --byteLength] * mul                                                                 // 1126
  }                                                                                                          // 1127
                                                                                                             // 1128
  return val                                                                                                 // 1129
}                                                                                                            // 1130
                                                                                                             // 1131
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {                                         // 1132
  if (!noAssert) checkOffset(offset, 1, this.length)                                                         // 1133
  return this[offset]                                                                                        // 1134
}                                                                                                            // 1135
                                                                                                             // 1136
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {                                   // 1137
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 1138
  return this[offset] | (this[offset + 1] << 8)                                                              // 1139
}                                                                                                            // 1140
                                                                                                             // 1141
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {                                   // 1142
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 1143
  return (this[offset] << 8) | this[offset + 1]                                                              // 1144
}                                                                                                            // 1145
                                                                                                             // 1146
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {                                   // 1147
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1148
                                                                                                             // 1149
  return ((this[offset]) |                                                                                   // 1150
      (this[offset + 1] << 8) |                                                                              // 1151
      (this[offset + 2] << 16)) +                                                                            // 1152
      (this[offset + 3] * 0x1000000)                                                                         // 1153
}                                                                                                            // 1154
                                                                                                             // 1155
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {                                   // 1156
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1157
                                                                                                             // 1158
  return (this[offset] * 0x1000000) +                                                                        // 1159
    ((this[offset + 1] << 16) |                                                                              // 1160
    (this[offset + 2] << 8) |                                                                                // 1161
    this[offset + 3])                                                                                        // 1162
}                                                                                                            // 1163
                                                                                                             // 1164
Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {                             // 1165
  offset = offset | 0                                                                                        // 1166
  byteLength = byteLength | 0                                                                                // 1167
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 1168
                                                                                                             // 1169
  var val = this[offset]                                                                                     // 1170
  var mul = 1                                                                                                // 1171
  var i = 0                                                                                                  // 1172
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 1173
    val += this[offset + i] * mul                                                                            // 1174
  }                                                                                                          // 1175
  mul *= 0x80                                                                                                // 1176
                                                                                                             // 1177
  if (val >= mul) val -= Math.pow(2, 8 * byteLength)                                                         // 1178
                                                                                                             // 1179
  return val                                                                                                 // 1180
}                                                                                                            // 1181
                                                                                                             // 1182
Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {                             // 1183
  offset = offset | 0                                                                                        // 1184
  byteLength = byteLength | 0                                                                                // 1185
  if (!noAssert) checkOffset(offset, byteLength, this.length)                                                // 1186
                                                                                                             // 1187
  var i = byteLength                                                                                         // 1188
  var mul = 1                                                                                                // 1189
  var val = this[offset + --i]                                                                               // 1190
  while (i > 0 && (mul *= 0x100)) {                                                                          // 1191
    val += this[offset + --i] * mul                                                                          // 1192
  }                                                                                                          // 1193
  mul *= 0x80                                                                                                // 1194
                                                                                                             // 1195
  if (val >= mul) val -= Math.pow(2, 8 * byteLength)                                                         // 1196
                                                                                                             // 1197
  return val                                                                                                 // 1198
}                                                                                                            // 1199
                                                                                                             // 1200
Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {                                           // 1201
  if (!noAssert) checkOffset(offset, 1, this.length)                                                         // 1202
  if (!(this[offset] & 0x80)) return (this[offset])                                                          // 1203
  return ((0xff - this[offset] + 1) * -1)                                                                    // 1204
}                                                                                                            // 1205
                                                                                                             // 1206
Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {                                     // 1207
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 1208
  var val = this[offset] | (this[offset + 1] << 8)                                                           // 1209
  return (val & 0x8000) ? val | 0xFFFF0000 : val                                                             // 1210
}                                                                                                            // 1211
                                                                                                             // 1212
Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {                                     // 1213
  if (!noAssert) checkOffset(offset, 2, this.length)                                                         // 1214
  var val = this[offset + 1] | (this[offset] << 8)                                                           // 1215
  return (val & 0x8000) ? val | 0xFFFF0000 : val                                                             // 1216
}                                                                                                            // 1217
                                                                                                             // 1218
Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {                                     // 1219
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1220
                                                                                                             // 1221
  return (this[offset]) |                                                                                    // 1222
    (this[offset + 1] << 8) |                                                                                // 1223
    (this[offset + 2] << 16) |                                                                               // 1224
    (this[offset + 3] << 24)                                                                                 // 1225
}                                                                                                            // 1226
                                                                                                             // 1227
Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {                                     // 1228
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1229
                                                                                                             // 1230
  return (this[offset] << 24) |                                                                              // 1231
    (this[offset + 1] << 16) |                                                                               // 1232
    (this[offset + 2] << 8) |                                                                                // 1233
    (this[offset + 3])                                                                                       // 1234
}                                                                                                            // 1235
                                                                                                             // 1236
Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {                                     // 1237
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1238
  return ieee754.read(this, offset, true, 23, 4)                                                             // 1239
}                                                                                                            // 1240
                                                                                                             // 1241
Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {                                     // 1242
  if (!noAssert) checkOffset(offset, 4, this.length)                                                         // 1243
  return ieee754.read(this, offset, false, 23, 4)                                                            // 1244
}                                                                                                            // 1245
                                                                                                             // 1246
Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {                                   // 1247
  if (!noAssert) checkOffset(offset, 8, this.length)                                                         // 1248
  return ieee754.read(this, offset, true, 52, 8)                                                             // 1249
}                                                                                                            // 1250
                                                                                                             // 1251
Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {                                   // 1252
  if (!noAssert) checkOffset(offset, 8, this.length)                                                         // 1253
  return ieee754.read(this, offset, false, 52, 8)                                                            // 1254
}                                                                                                            // 1255
                                                                                                             // 1256
function checkInt (buf, value, offset, ext, max, min) {                                                      // 1257
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')              // 1258
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')                  // 1259
  if (offset + ext > buf.length) throw new RangeError('Index out of range')                                  // 1260
}                                                                                                            // 1261
                                                                                                             // 1262
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {                  // 1263
  value = +value                                                                                             // 1264
  offset = offset | 0                                                                                        // 1265
  byteLength = byteLength | 0                                                                                // 1266
  if (!noAssert) {                                                                                           // 1267
    var maxBytes = Math.pow(2, 8 * byteLength) - 1                                                           // 1268
    checkInt(this, value, offset, byteLength, maxBytes, 0)                                                   // 1269
  }                                                                                                          // 1270
                                                                                                             // 1271
  var mul = 1                                                                                                // 1272
  var i = 0                                                                                                  // 1273
  this[offset] = value & 0xFF                                                                                // 1274
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 1275
    this[offset + i] = (value / mul) & 0xFF                                                                  // 1276
  }                                                                                                          // 1277
                                                                                                             // 1278
  return offset + byteLength                                                                                 // 1279
}                                                                                                            // 1280
                                                                                                             // 1281
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {                  // 1282
  value = +value                                                                                             // 1283
  offset = offset | 0                                                                                        // 1284
  byteLength = byteLength | 0                                                                                // 1285
  if (!noAssert) {                                                                                           // 1286
    var maxBytes = Math.pow(2, 8 * byteLength) - 1                                                           // 1287
    checkInt(this, value, offset, byteLength, maxBytes, 0)                                                   // 1288
  }                                                                                                          // 1289
                                                                                                             // 1290
  var i = byteLength - 1                                                                                     // 1291
  var mul = 1                                                                                                // 1292
  this[offset + i] = value & 0xFF                                                                            // 1293
  while (--i >= 0 && (mul *= 0x100)) {                                                                       // 1294
    this[offset + i] = (value / mul) & 0xFF                                                                  // 1295
  }                                                                                                          // 1296
                                                                                                             // 1297
  return offset + byteLength                                                                                 // 1298
}                                                                                                            // 1299
                                                                                                             // 1300
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {                                // 1301
  value = +value                                                                                             // 1302
  offset = offset | 0                                                                                        // 1303
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)                                                   // 1304
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)                                                 // 1305
  this[offset] = (value & 0xff)                                                                              // 1306
  return offset + 1                                                                                          // 1307
}                                                                                                            // 1308
                                                                                                             // 1309
function objectWriteUInt16 (buf, value, offset, littleEndian) {                                              // 1310
  if (value < 0) value = 0xffff + value + 1                                                                  // 1311
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {                                        // 1312
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>                               // 1313
      (littleEndian ? i : 1 - i) * 8                                                                         // 1314
  }                                                                                                          // 1315
}                                                                                                            // 1316
                                                                                                             // 1317
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {                          // 1318
  value = +value                                                                                             // 1319
  offset = offset | 0                                                                                        // 1320
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)                                                 // 1321
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1322
    this[offset] = (value & 0xff)                                                                            // 1323
    this[offset + 1] = (value >>> 8)                                                                         // 1324
  } else {                                                                                                   // 1325
    objectWriteUInt16(this, value, offset, true)                                                             // 1326
  }                                                                                                          // 1327
  return offset + 2                                                                                          // 1328
}                                                                                                            // 1329
                                                                                                             // 1330
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {                          // 1331
  value = +value                                                                                             // 1332
  offset = offset | 0                                                                                        // 1333
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)                                                 // 1334
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1335
    this[offset] = (value >>> 8)                                                                             // 1336
    this[offset + 1] = (value & 0xff)                                                                        // 1337
  } else {                                                                                                   // 1338
    objectWriteUInt16(this, value, offset, false)                                                            // 1339
  }                                                                                                          // 1340
  return offset + 2                                                                                          // 1341
}                                                                                                            // 1342
                                                                                                             // 1343
function objectWriteUInt32 (buf, value, offset, littleEndian) {                                              // 1344
  if (value < 0) value = 0xffffffff + value + 1                                                              // 1345
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {                                        // 1346
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff                                      // 1347
  }                                                                                                          // 1348
}                                                                                                            // 1349
                                                                                                             // 1350
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {                          // 1351
  value = +value                                                                                             // 1352
  offset = offset | 0                                                                                        // 1353
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)                                             // 1354
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1355
    this[offset + 3] = (value >>> 24)                                                                        // 1356
    this[offset + 2] = (value >>> 16)                                                                        // 1357
    this[offset + 1] = (value >>> 8)                                                                         // 1358
    this[offset] = (value & 0xff)                                                                            // 1359
  } else {                                                                                                   // 1360
    objectWriteUInt32(this, value, offset, true)                                                             // 1361
  }                                                                                                          // 1362
  return offset + 4                                                                                          // 1363
}                                                                                                            // 1364
                                                                                                             // 1365
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {                          // 1366
  value = +value                                                                                             // 1367
  offset = offset | 0                                                                                        // 1368
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)                                             // 1369
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1370
    this[offset] = (value >>> 24)                                                                            // 1371
    this[offset + 1] = (value >>> 16)                                                                        // 1372
    this[offset + 2] = (value >>> 8)                                                                         // 1373
    this[offset + 3] = (value & 0xff)                                                                        // 1374
  } else {                                                                                                   // 1375
    objectWriteUInt32(this, value, offset, false)                                                            // 1376
  }                                                                                                          // 1377
  return offset + 4                                                                                          // 1378
}                                                                                                            // 1379
                                                                                                             // 1380
Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {                    // 1381
  value = +value                                                                                             // 1382
  offset = offset | 0                                                                                        // 1383
  if (!noAssert) {                                                                                           // 1384
    var limit = Math.pow(2, 8 * byteLength - 1)                                                              // 1385
                                                                                                             // 1386
    checkInt(this, value, offset, byteLength, limit - 1, -limit)                                             // 1387
  }                                                                                                          // 1388
                                                                                                             // 1389
  var i = 0                                                                                                  // 1390
  var mul = 1                                                                                                // 1391
  var sub = 0                                                                                                // 1392
  this[offset] = value & 0xFF                                                                                // 1393
  while (++i < byteLength && (mul *= 0x100)) {                                                               // 1394
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {                                              // 1395
      sub = 1                                                                                                // 1396
    }                                                                                                        // 1397
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF                                                     // 1398
  }                                                                                                          // 1399
                                                                                                             // 1400
  return offset + byteLength                                                                                 // 1401
}                                                                                                            // 1402
                                                                                                             // 1403
Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {                    // 1404
  value = +value                                                                                             // 1405
  offset = offset | 0                                                                                        // 1406
  if (!noAssert) {                                                                                           // 1407
    var limit = Math.pow(2, 8 * byteLength - 1)                                                              // 1408
                                                                                                             // 1409
    checkInt(this, value, offset, byteLength, limit - 1, -limit)                                             // 1410
  }                                                                                                          // 1411
                                                                                                             // 1412
  var i = byteLength - 1                                                                                     // 1413
  var mul = 1                                                                                                // 1414
  var sub = 0                                                                                                // 1415
  this[offset + i] = value & 0xFF                                                                            // 1416
  while (--i >= 0 && (mul *= 0x100)) {                                                                       // 1417
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {                                              // 1418
      sub = 1                                                                                                // 1419
    }                                                                                                        // 1420
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF                                                     // 1421
  }                                                                                                          // 1422
                                                                                                             // 1423
  return offset + byteLength                                                                                 // 1424
}                                                                                                            // 1425
                                                                                                             // 1426
Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {                                  // 1427
  value = +value                                                                                             // 1428
  offset = offset | 0                                                                                        // 1429
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)                                               // 1430
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)                                                 // 1431
  if (value < 0) value = 0xff + value + 1                                                                    // 1432
  this[offset] = (value & 0xff)                                                                              // 1433
  return offset + 1                                                                                          // 1434
}                                                                                                            // 1435
                                                                                                             // 1436
Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {                            // 1437
  value = +value                                                                                             // 1438
  offset = offset | 0                                                                                        // 1439
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)                                           // 1440
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1441
    this[offset] = (value & 0xff)                                                                            // 1442
    this[offset + 1] = (value >>> 8)                                                                         // 1443
  } else {                                                                                                   // 1444
    objectWriteUInt16(this, value, offset, true)                                                             // 1445
  }                                                                                                          // 1446
  return offset + 2                                                                                          // 1447
}                                                                                                            // 1448
                                                                                                             // 1449
Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {                            // 1450
  value = +value                                                                                             // 1451
  offset = offset | 0                                                                                        // 1452
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)                                           // 1453
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1454
    this[offset] = (value >>> 8)                                                                             // 1455
    this[offset + 1] = (value & 0xff)                                                                        // 1456
  } else {                                                                                                   // 1457
    objectWriteUInt16(this, value, offset, false)                                                            // 1458
  }                                                                                                          // 1459
  return offset + 2                                                                                          // 1460
}                                                                                                            // 1461
                                                                                                             // 1462
Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {                            // 1463
  value = +value                                                                                             // 1464
  offset = offset | 0                                                                                        // 1465
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)                                   // 1466
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1467
    this[offset] = (value & 0xff)                                                                            // 1468
    this[offset + 1] = (value >>> 8)                                                                         // 1469
    this[offset + 2] = (value >>> 16)                                                                        // 1470
    this[offset + 3] = (value >>> 24)                                                                        // 1471
  } else {                                                                                                   // 1472
    objectWriteUInt32(this, value, offset, true)                                                             // 1473
  }                                                                                                          // 1474
  return offset + 4                                                                                          // 1475
}                                                                                                            // 1476
                                                                                                             // 1477
Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {                            // 1478
  value = +value                                                                                             // 1479
  offset = offset | 0                                                                                        // 1480
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)                                   // 1481
  if (value < 0) value = 0xffffffff + value + 1                                                              // 1482
  if (Buffer.TYPED_ARRAY_SUPPORT) {                                                                          // 1483
    this[offset] = (value >>> 24)                                                                            // 1484
    this[offset + 1] = (value >>> 16)                                                                        // 1485
    this[offset + 2] = (value >>> 8)                                                                         // 1486
    this[offset + 3] = (value & 0xff)                                                                        // 1487
  } else {                                                                                                   // 1488
    objectWriteUInt32(this, value, offset, false)                                                            // 1489
  }                                                                                                          // 1490
  return offset + 4                                                                                          // 1491
}                                                                                                            // 1492
                                                                                                             // 1493
function checkIEEE754 (buf, value, offset, ext, max, min) {                                                  // 1494
  if (offset + ext > buf.length) throw new RangeError('Index out of range')                                  // 1495
  if (offset < 0) throw new RangeError('Index out of range')                                                 // 1496
}                                                                                                            // 1497
                                                                                                             // 1498
function writeFloat (buf, value, offset, littleEndian, noAssert) {                                           // 1499
  if (!noAssert) {                                                                                           // 1500
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)                     // 1501
  }                                                                                                          // 1502
  ieee754.write(buf, value, offset, littleEndian, 23, 4)                                                     // 1503
  return offset + 4                                                                                          // 1504
}                                                                                                            // 1505
                                                                                                             // 1506
Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {                            // 1507
  return writeFloat(this, value, offset, true, noAssert)                                                     // 1508
}                                                                                                            // 1509
                                                                                                             // 1510
Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {                            // 1511
  return writeFloat(this, value, offset, false, noAssert)                                                    // 1512
}                                                                                                            // 1513
                                                                                                             // 1514
function writeDouble (buf, value, offset, littleEndian, noAssert) {                                          // 1515
  if (!noAssert) {                                                                                           // 1516
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)                   // 1517
  }                                                                                                          // 1518
  ieee754.write(buf, value, offset, littleEndian, 52, 8)                                                     // 1519
  return offset + 8                                                                                          // 1520
}                                                                                                            // 1521
                                                                                                             // 1522
Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {                          // 1523
  return writeDouble(this, value, offset, true, noAssert)                                                    // 1524
}                                                                                                            // 1525
                                                                                                             // 1526
Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {                          // 1527
  return writeDouble(this, value, offset, false, noAssert)                                                   // 1528
}                                                                                                            // 1529
                                                                                                             // 1530
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)                                 // 1531
Buffer.prototype.copy = function copy (target, targetStart, start, end) {                                    // 1532
  if (!start) start = 0                                                                                      // 1533
  if (!end && end !== 0) end = this.length                                                                   // 1534
  if (targetStart >= target.length) targetStart = target.length                                              // 1535
  if (!targetStart) targetStart = 0                                                                          // 1536
  if (end > 0 && end < start) end = start                                                                    // 1537
                                                                                                             // 1538
  // Copy 0 bytes; we're done                                                                                // 1539
  if (end === start) return 0                                                                                // 1540
  if (target.length === 0 || this.length === 0) return 0                                                     // 1541
                                                                                                             // 1542
  // Fatal error conditions                                                                                  // 1543
  if (targetStart < 0) {                                                                                     // 1544
    throw new RangeError('targetStart out of bounds')                                                        // 1545
  }                                                                                                          // 1546
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')                   // 1547
  if (end < 0) throw new RangeError('sourceEnd out of bounds')                                               // 1548
                                                                                                             // 1549
  // Are we oob?                                                                                             // 1550
  if (end > this.length) end = this.length                                                                   // 1551
  if (target.length - targetStart < end - start) {                                                           // 1552
    end = target.length - targetStart + start                                                                // 1553
  }                                                                                                          // 1554
                                                                                                             // 1555
  var len = end - start                                                                                      // 1556
  var i                                                                                                      // 1557
                                                                                                             // 1558
  if (this === target && start < targetStart && targetStart < end) {                                         // 1559
    // descending copy from end                                                                              // 1560
    for (i = len - 1; i >= 0; --i) {                                                                         // 1561
      target[i + targetStart] = this[i + start]                                                              // 1562
    }                                                                                                        // 1563
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {                                                    // 1564
    // ascending copy from start                                                                             // 1565
    for (i = 0; i < len; ++i) {                                                                              // 1566
      target[i + targetStart] = this[i + start]                                                              // 1567
    }                                                                                                        // 1568
  } else {                                                                                                   // 1569
    Uint8Array.prototype.set.call(                                                                           // 1570
      target,                                                                                                // 1571
      this.subarray(start, start + len),                                                                     // 1572
      targetStart                                                                                            // 1573
    )                                                                                                        // 1574
  }                                                                                                          // 1575
                                                                                                             // 1576
  return len                                                                                                 // 1577
}                                                                                                            // 1578
                                                                                                             // 1579
// Usage:                                                                                                    // 1580
//    buffer.fill(number[, offset[, end]])                                                                   // 1581
//    buffer.fill(buffer[, offset[, end]])                                                                   // 1582
//    buffer.fill(string[, offset[, end]][, encoding])                                                       // 1583
Buffer.prototype.fill = function fill (val, start, end, encoding) {                                          // 1584
  // Handle string cases:                                                                                    // 1585
  if (typeof val === 'string') {                                                                             // 1586
    if (typeof start === 'string') {                                                                         // 1587
      encoding = start                                                                                       // 1588
      start = 0                                                                                              // 1589
      end = this.length                                                                                      // 1590
    } else if (typeof end === 'string') {                                                                    // 1591
      encoding = end                                                                                         // 1592
      end = this.length                                                                                      // 1593
    }                                                                                                        // 1594
    if (val.length === 1) {                                                                                  // 1595
      var code = val.charCodeAt(0)                                                                           // 1596
      if (code < 256) {                                                                                      // 1597
        val = code                                                                                           // 1598
      }                                                                                                      // 1599
    }                                                                                                        // 1600
    if (encoding !== undefined && typeof encoding !== 'string') {                                            // 1601
      throw new TypeError('encoding must be a string')                                                       // 1602
    }                                                                                                        // 1603
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {                                      // 1604
      throw new TypeError('Unknown encoding: ' + encoding)                                                   // 1605
    }                                                                                                        // 1606
  } else if (typeof val === 'number') {                                                                      // 1607
    val = val & 255                                                                                          // 1608
  }                                                                                                          // 1609
                                                                                                             // 1610
  // Invalid ranges are not set to a default, so can range check early.                                      // 1611
  if (start < 0 || this.length < start || this.length < end) {                                               // 1612
    throw new RangeError('Out of range index')                                                               // 1613
  }                                                                                                          // 1614
                                                                                                             // 1615
  if (end <= start) {                                                                                        // 1616
    return this                                                                                              // 1617
  }                                                                                                          // 1618
                                                                                                             // 1619
  start = start >>> 0                                                                                        // 1620
  end = end === undefined ? this.length : end >>> 0                                                          // 1621
                                                                                                             // 1622
  if (!val) val = 0                                                                                          // 1623
                                                                                                             // 1624
  var i                                                                                                      // 1625
  if (typeof val === 'number') {                                                                             // 1626
    for (i = start; i < end; ++i) {                                                                          // 1627
      this[i] = val                                                                                          // 1628
    }                                                                                                        // 1629
  } else {                                                                                                   // 1630
    var bytes = Buffer.isBuffer(val)                                                                         // 1631
      ? val                                                                                                  // 1632
      : utf8ToBytes(new Buffer(val, encoding).toString())                                                    // 1633
    var len = bytes.length                                                                                   // 1634
    for (i = 0; i < end - start; ++i) {                                                                      // 1635
      this[i + start] = bytes[i % len]                                                                       // 1636
    }                                                                                                        // 1637
  }                                                                                                          // 1638
                                                                                                             // 1639
  return this                                                                                                // 1640
}                                                                                                            // 1641
                                                                                                             // 1642
// HELPER FUNCTIONS                                                                                          // 1643
// ================                                                                                          // 1644
                                                                                                             // 1645
var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g                                                                 // 1646
                                                                                                             // 1647
function base64clean (str) {                                                                                 // 1648
  // Node strips out invalid characters like \n and \t from the string, base64-js does not                   // 1649
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')                                                       // 1650
  // Node converts strings with length < 2 to ''                                                             // 1651
  if (str.length < 2) return ''                                                                              // 1652
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not                    // 1653
  while (str.length % 4 !== 0) {                                                                             // 1654
    str = str + '='                                                                                          // 1655
  }                                                                                                          // 1656
  return str                                                                                                 // 1657
}                                                                                                            // 1658
                                                                                                             // 1659
function stringtrim (str) {                                                                                  // 1660
  if (str.trim) return str.trim()                                                                            // 1661
  return str.replace(/^\s+|\s+$/g, '')                                                                       // 1662
}                                                                                                            // 1663
                                                                                                             // 1664
function toHex (n) {                                                                                         // 1665
  if (n < 16) return '0' + n.toString(16)                                                                    // 1666
  return n.toString(16)                                                                                      // 1667
}                                                                                                            // 1668
                                                                                                             // 1669
function utf8ToBytes (string, units) {                                                                       // 1670
  units = units || Infinity                                                                                  // 1671
  var codePoint                                                                                              // 1672
  var length = string.length                                                                                 // 1673
  var leadSurrogate = null                                                                                   // 1674
  var bytes = []                                                                                             // 1675
                                                                                                             // 1676
  for (var i = 0; i < length; ++i) {                                                                         // 1677
    codePoint = string.charCodeAt(i)                                                                         // 1678
                                                                                                             // 1679
    // is surrogate component                                                                                // 1680
    if (codePoint > 0xD7FF && codePoint < 0xE000) {                                                          // 1681
      // last char was a lead                                                                                // 1682
      if (!leadSurrogate) {                                                                                  // 1683
        // no lead yet                                                                                       // 1684
        if (codePoint > 0xDBFF) {                                                                            // 1685
          // unexpected trail                                                                                // 1686
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                // 1687
          continue                                                                                           // 1688
        } else if (i + 1 === length) {                                                                       // 1689
          // unpaired lead                                                                                   // 1690
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                // 1691
          continue                                                                                           // 1692
        }                                                                                                    // 1693
                                                                                                             // 1694
        // valid lead                                                                                        // 1695
        leadSurrogate = codePoint                                                                            // 1696
                                                                                                             // 1697
        continue                                                                                             // 1698
      }                                                                                                      // 1699
                                                                                                             // 1700
      // 2 leads in a row                                                                                    // 1701
      if (codePoint < 0xDC00) {                                                                              // 1702
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                  // 1703
        leadSurrogate = codePoint                                                                            // 1704
        continue                                                                                             // 1705
      }                                                                                                      // 1706
                                                                                                             // 1707
      // valid surrogate pair                                                                                // 1708
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000                              // 1709
    } else if (leadSurrogate) {                                                                              // 1710
      // valid bmp char, but last char was a lead                                                            // 1711
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)                                                    // 1712
    }                                                                                                        // 1713
                                                                                                             // 1714
    leadSurrogate = null                                                                                     // 1715
                                                                                                             // 1716
    // encode utf8                                                                                           // 1717
    if (codePoint < 0x80) {                                                                                  // 1718
      if ((units -= 1) < 0) break                                                                            // 1719
      bytes.push(codePoint)                                                                                  // 1720
    } else if (codePoint < 0x800) {                                                                          // 1721
      if ((units -= 2) < 0) break                                                                            // 1722
      bytes.push(                                                                                            // 1723
        codePoint >> 0x6 | 0xC0,                                                                             // 1724
        codePoint & 0x3F | 0x80                                                                              // 1725
      )                                                                                                      // 1726
    } else if (codePoint < 0x10000) {                                                                        // 1727
      if ((units -= 3) < 0) break                                                                            // 1728
      bytes.push(                                                                                            // 1729
        codePoint >> 0xC | 0xE0,                                                                             // 1730
        codePoint >> 0x6 & 0x3F | 0x80,                                                                      // 1731
        codePoint & 0x3F | 0x80                                                                              // 1732
      )                                                                                                      // 1733
    } else if (codePoint < 0x110000) {                                                                       // 1734
      if ((units -= 4) < 0) break                                                                            // 1735
      bytes.push(                                                                                            // 1736
        codePoint >> 0x12 | 0xF0,                                                                            // 1737
        codePoint >> 0xC & 0x3F | 0x80,                                                                      // 1738
        codePoint >> 0x6 & 0x3F | 0x80,                                                                      // 1739
        codePoint & 0x3F | 0x80                                                                              // 1740
      )                                                                                                      // 1741
    } else {                                                                                                 // 1742
      throw new Error('Invalid code point')                                                                  // 1743
    }                                                                                                        // 1744
  }                                                                                                          // 1745
                                                                                                             // 1746
  return bytes                                                                                               // 1747
}                                                                                                            // 1748
                                                                                                             // 1749
function asciiToBytes (str) {                                                                                // 1750
  var byteArray = []                                                                                         // 1751
  for (var i = 0; i < str.length; ++i) {                                                                     // 1752
    // Node's code seems to be doing this and not & 0x7F..                                                   // 1753
    byteArray.push(str.charCodeAt(i) & 0xFF)                                                                 // 1754
  }                                                                                                          // 1755
  return byteArray                                                                                           // 1756
}                                                                                                            // 1757
                                                                                                             // 1758
function utf16leToBytes (str, units) {                                                                       // 1759
  var c, hi, lo                                                                                              // 1760
  var byteArray = []                                                                                         // 1761
  for (var i = 0; i < str.length; ++i) {                                                                     // 1762
    if ((units -= 2) < 0) break                                                                              // 1763
                                                                                                             // 1764
    c = str.charCodeAt(i)                                                                                    // 1765
    hi = c >> 8                                                                                              // 1766
    lo = c % 256                                                                                             // 1767
    byteArray.push(lo)                                                                                       // 1768
    byteArray.push(hi)                                                                                       // 1769
  }                                                                                                          // 1770
                                                                                                             // 1771
  return byteArray                                                                                           // 1772
}                                                                                                            // 1773
                                                                                                             // 1774
function base64ToBytes (str) {                                                                               // 1775
  return base64.toByteArray(base64clean(str))                                                                // 1776
}                                                                                                            // 1777
                                                                                                             // 1778
function blitBuffer (src, dst, offset, length) {                                                             // 1779
  for (var i = 0; i < length; ++i) {                                                                         // 1780
    if ((i + offset >= dst.length) || (i >= src.length)) break                                               // 1781
    dst[i + offset] = src[i]                                                                                 // 1782
  }                                                                                                          // 1783
  return i                                                                                                   // 1784
}                                                                                                            // 1785
                                                                                                             // 1786
function isnan (val) {                                                                                       // 1787
  return val !== val // eslint-disable-line no-self-compare                                                  // 1788
}                                                                                                            // 1789
                                                                                                             // 1790
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"base64-js":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/base64-js/package.json                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "base64-js";                                                                                  // 1
exports.version = "1.2.0";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/base64-js/index.js                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
'use strict'                                                                                                 // 1
                                                                                                             // 2
exports.byteLength = byteLength                                                                              // 3
exports.toByteArray = toByteArray                                                                            // 4
exports.fromByteArray = fromByteArray                                                                        // 5
                                                                                                             // 6
var lookup = []                                                                                              // 7
var revLookup = []                                                                                           // 8
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array                                             // 9
                                                                                                             // 10
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'                                // 11
for (var i = 0, len = code.length; i < len; ++i) {                                                           // 12
  lookup[i] = code[i]                                                                                        // 13
  revLookup[code.charCodeAt(i)] = i                                                                          // 14
}                                                                                                            // 15
                                                                                                             // 16
revLookup['-'.charCodeAt(0)] = 62                                                                            // 17
revLookup['_'.charCodeAt(0)] = 63                                                                            // 18
                                                                                                             // 19
function placeHoldersCount (b64) {                                                                           // 20
  var len = b64.length                                                                                       // 21
  if (len % 4 > 0) {                                                                                         // 22
    throw new Error('Invalid string. Length must be a multiple of 4')                                        // 23
  }                                                                                                          // 24
                                                                                                             // 25
  // the number of equal signs (place holders)                                                               // 26
  // if there are two placeholders, than the two characters before it                                        // 27
  // represent one byte                                                                                      // 28
  // if there is only one, then the three characters before it represent 2 bytes                             // 29
  // this is just a cheap hack to not do indexOf twice                                                       // 30
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0                                             // 31
}                                                                                                            // 32
                                                                                                             // 33
function byteLength (b64) {                                                                                  // 34
  // base64 is 4/3 + up to two characters of the original data                                               // 35
  return b64.length * 3 / 4 - placeHoldersCount(b64)                                                         // 36
}                                                                                                            // 37
                                                                                                             // 38
function toByteArray (b64) {                                                                                 // 39
  var i, j, l, tmp, placeHolders, arr                                                                        // 40
  var len = b64.length                                                                                       // 41
  placeHolders = placeHoldersCount(b64)                                                                      // 42
                                                                                                             // 43
  arr = new Arr(len * 3 / 4 - placeHolders)                                                                  // 44
                                                                                                             // 45
  // if there are placeholders, only get up to the last complete 4 chars                                     // 46
  l = placeHolders > 0 ? len - 4 : len                                                                       // 47
                                                                                                             // 48
  var L = 0                                                                                                  // 49
                                                                                                             // 50
  for (i = 0, j = 0; i < l; i += 4, j += 3) {                                                                // 51
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF                                                                            // 53
    arr[L++] = (tmp >> 8) & 0xFF                                                                             // 54
    arr[L++] = tmp & 0xFF                                                                                    // 55
  }                                                                                                          // 56
                                                                                                             // 57
  if (placeHolders === 2) {                                                                                  // 58
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)                      // 59
    arr[L++] = tmp & 0xFF                                                                                    // 60
  } else if (placeHolders === 1) {                                                                           // 61
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF                                                                             // 63
    arr[L++] = tmp & 0xFF                                                                                    // 64
  }                                                                                                          // 65
                                                                                                             // 66
  return arr                                                                                                 // 67
}                                                                                                            // 68
                                                                                                             // 69
function tripletToBase64 (num) {                                                                             // 70
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]  // 71
}                                                                                                            // 72
                                                                                                             // 73
function encodeChunk (uint8, start, end) {                                                                   // 74
  var tmp                                                                                                    // 75
  var output = []                                                                                            // 76
  for (var i = start; i < end; i += 3) {                                                                     // 77
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])                                            // 78
    output.push(tripletToBase64(tmp))                                                                        // 79
  }                                                                                                          // 80
  return output.join('')                                                                                     // 81
}                                                                                                            // 82
                                                                                                             // 83
function fromByteArray (uint8) {                                                                             // 84
  var tmp                                                                                                    // 85
  var len = uint8.length                                                                                     // 86
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes                                            // 87
  var output = ''                                                                                            // 88
  var parts = []                                                                                             // 89
  var maxChunkLength = 16383 // must be multiple of 3                                                        // 90
                                                                                                             // 91
  // go through the array every three bytes, we'll deal with trailing stuff later                            // 92
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {                                  // 93
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))             // 94
  }                                                                                                          // 95
                                                                                                             // 96
  // pad the end with zeros, but make sure to not forget the extra bytes                                     // 97
  if (extraBytes === 1) {                                                                                    // 98
    tmp = uint8[len - 1]                                                                                     // 99
    output += lookup[tmp >> 2]                                                                               // 100
    output += lookup[(tmp << 4) & 0x3F]                                                                      // 101
    output += '=='                                                                                           // 102
  } else if (extraBytes === 2) {                                                                             // 103
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])                                                           // 104
    output += lookup[tmp >> 10]                                                                              // 105
    output += lookup[(tmp >> 4) & 0x3F]                                                                      // 106
    output += lookup[(tmp << 2) & 0x3F]                                                                      // 107
    output += '='                                                                                            // 108
  }                                                                                                          // 109
                                                                                                             // 110
  parts.push(output)                                                                                         // 111
                                                                                                             // 112
  return parts.join('')                                                                                      // 113
}                                                                                                            // 114
                                                                                                             // 115
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ieee754":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/ieee754/package.json                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "ieee754";                                                                                    // 1
exports.version = "1.1.8";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/ieee754/index.js                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.read = function (buffer, offset, isLE, mLen, nBytes) {                                               // 1
  var e, m                                                                                                   // 2
  var eLen = nBytes * 8 - mLen - 1                                                                           // 3
  var eMax = (1 << eLen) - 1                                                                                 // 4
  var eBias = eMax >> 1                                                                                      // 5
  var nBits = -7                                                                                             // 6
  var i = isLE ? (nBytes - 1) : 0                                                                            // 7
  var d = isLE ? -1 : 1                                                                                      // 8
  var s = buffer[offset + i]                                                                                 // 9
                                                                                                             // 10
  i += d                                                                                                     // 11
                                                                                                             // 12
  e = s & ((1 << (-nBits)) - 1)                                                                              // 13
  s >>= (-nBits)                                                                                             // 14
  nBits += eLen                                                                                              // 15
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}                                 // 16
                                                                                                             // 17
  m = e & ((1 << (-nBits)) - 1)                                                                              // 18
  e >>= (-nBits)                                                                                             // 19
  nBits += mLen                                                                                              // 20
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}                                 // 21
                                                                                                             // 22
  if (e === 0) {                                                                                             // 23
    e = 1 - eBias                                                                                            // 24
  } else if (e === eMax) {                                                                                   // 25
    return m ? NaN : ((s ? -1 : 1) * Infinity)                                                               // 26
  } else {                                                                                                   // 27
    m = m + Math.pow(2, mLen)                                                                                // 28
    e = e - eBias                                                                                            // 29
  }                                                                                                          // 30
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)                                                            // 31
}                                                                                                            // 32
                                                                                                             // 33
exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {                                       // 34
  var e, m, c                                                                                                // 35
  var eLen = nBytes * 8 - mLen - 1                                                                           // 36
  var eMax = (1 << eLen) - 1                                                                                 // 37
  var eBias = eMax >> 1                                                                                      // 38
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)                                           // 39
  var i = isLE ? 0 : (nBytes - 1)                                                                            // 40
  var d = isLE ? 1 : -1                                                                                      // 41
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0                                                // 42
                                                                                                             // 43
  value = Math.abs(value)                                                                                    // 44
                                                                                                             // 45
  if (isNaN(value) || value === Infinity) {                                                                  // 46
    m = isNaN(value) ? 1 : 0                                                                                 // 47
    e = eMax                                                                                                 // 48
  } else {                                                                                                   // 49
    e = Math.floor(Math.log(value) / Math.LN2)                                                               // 50
    if (value * (c = Math.pow(2, -e)) < 1) {                                                                 // 51
      e--                                                                                                    // 52
      c *= 2                                                                                                 // 53
    }                                                                                                        // 54
    if (e + eBias >= 1) {                                                                                    // 55
      value += rt / c                                                                                        // 56
    } else {                                                                                                 // 57
      value += rt * Math.pow(2, 1 - eBias)                                                                   // 58
    }                                                                                                        // 59
    if (value * c >= 2) {                                                                                    // 60
      e++                                                                                                    // 61
      c /= 2                                                                                                 // 62
    }                                                                                                        // 63
                                                                                                             // 64
    if (e + eBias >= eMax) {                                                                                 // 65
      m = 0                                                                                                  // 66
      e = eMax                                                                                               // 67
    } else if (e + eBias >= 1) {                                                                             // 68
      m = (value * c - 1) * Math.pow(2, mLen)                                                                // 69
      e = e + eBias                                                                                          // 70
    } else {                                                                                                 // 71
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)                                                 // 72
      e = 0                                                                                                  // 73
    }                                                                                                        // 74
  }                                                                                                          // 75
                                                                                                             // 76
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}                           // 77
                                                                                                             // 78
  e = (e << mLen) | m                                                                                        // 79
  eLen += mLen                                                                                               // 80
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}                            // 81
                                                                                                             // 82
  buffer[offset + i - d] |= s * 128                                                                          // 83
}                                                                                                            // 84
                                                                                                             // 85
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"isarray":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/isarray/package.json                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "isarray";                                                                                    // 1
exports.version = "1.0.0";                                                                                   // 2
exports.main = "index.js";                                                                                   // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/isarray/index.js                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var toString = {}.toString;                                                                                  // 1
                                                                                                             // 2
module.exports = Array.isArray || function (arr) {                                                           // 3
  return toString.call(arr) == '[object Array]';                                                             // 4
};                                                                                                           // 5
                                                                                                             // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"process":{"browser.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/process/browser.js                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// shim for using process in browser                                                                         // 1
var process = module.exports = {};                                                                           // 2
                                                                                                             // 3
// cached from whatever global is present so that test runners that stub it                                  // 4
// don't break things.  But we need to wrap it in a try catch in case it is                                  // 5
// wrapped in strict mode code which doesn't define any globals.  It's inside a                              // 6
// function because try/catches deoptimize in certain engines.                                               // 7
                                                                                                             // 8
var cachedSetTimeout;                                                                                        // 9
var cachedClearTimeout;                                                                                      // 10
                                                                                                             // 11
function defaultSetTimout() {                                                                                // 12
    throw new Error('setTimeout has not been defined');                                                      // 13
}                                                                                                            // 14
function defaultClearTimeout () {                                                                            // 15
    throw new Error('clearTimeout has not been defined');                                                    // 16
}                                                                                                            // 17
(function () {                                                                                               // 18
    try {                                                                                                    // 19
        if (typeof setTimeout === 'function') {                                                              // 20
            cachedSetTimeout = setTimeout;                                                                   // 21
        } else {                                                                                             // 22
            cachedSetTimeout = defaultSetTimout;                                                             // 23
        }                                                                                                    // 24
    } catch (e) {                                                                                            // 25
        cachedSetTimeout = defaultSetTimout;                                                                 // 26
    }                                                                                                        // 27
    try {                                                                                                    // 28
        if (typeof clearTimeout === 'function') {                                                            // 29
            cachedClearTimeout = clearTimeout;                                                               // 30
        } else {                                                                                             // 31
            cachedClearTimeout = defaultClearTimeout;                                                        // 32
        }                                                                                                    // 33
    } catch (e) {                                                                                            // 34
        cachedClearTimeout = defaultClearTimeout;                                                            // 35
    }                                                                                                        // 36
} ())                                                                                                        // 37
function runTimeout(fun) {                                                                                   // 38
    if (cachedSetTimeout === setTimeout) {                                                                   // 39
        //normal enviroments in sane situations                                                              // 40
        return setTimeout(fun, 0);                                                                           // 41
    }                                                                                                        // 42
    // if setTimeout wasn't available but was latter defined                                                 // 43
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {                        // 44
        cachedSetTimeout = setTimeout;                                                                       // 45
        return setTimeout(fun, 0);                                                                           // 46
    }                                                                                                        // 47
    try {                                                                                                    // 48
        // when when somebody has screwed with setTimeout but no I.E. maddness                               // 49
        return cachedSetTimeout(fun, 0);                                                                     // 50
    } catch(e){                                                                                              // 51
        try {                                                                                                // 52
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);                                                      // 54
        } catch(e){                                                                                          // 55
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);                                                      // 57
        }                                                                                                    // 58
    }                                                                                                        // 59
                                                                                                             // 60
                                                                                                             // 61
}                                                                                                            // 62
function runClearTimeout(marker) {                                                                           // 63
    if (cachedClearTimeout === clearTimeout) {                                                               // 64
        //normal enviroments in sane situations                                                              // 65
        return clearTimeout(marker);                                                                         // 66
    }                                                                                                        // 67
    // if clearTimeout wasn't available but was latter defined                                               // 68
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {               // 69
        cachedClearTimeout = clearTimeout;                                                                   // 70
        return clearTimeout(marker);                                                                         // 71
    }                                                                                                        // 72
    try {                                                                                                    // 73
        // when when somebody has screwed with setTimeout but no I.E. maddness                               // 74
        return cachedClearTimeout(marker);                                                                   // 75
    } catch (e){                                                                                             // 76
        try {                                                                                                // 77
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);                                                    // 79
        } catch (e){                                                                                         // 80
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout                     // 82
            return cachedClearTimeout.call(this, marker);                                                    // 83
        }                                                                                                    // 84
    }                                                                                                        // 85
                                                                                                             // 86
                                                                                                             // 87
                                                                                                             // 88
}                                                                                                            // 89
var queue = [];                                                                                              // 90
var draining = false;                                                                                        // 91
var currentQueue;                                                                                            // 92
var queueIndex = -1;                                                                                         // 93
                                                                                                             // 94
function cleanUpNextTick() {                                                                                 // 95
    if (!draining || !currentQueue) {                                                                        // 96
        return;                                                                                              // 97
    }                                                                                                        // 98
    draining = false;                                                                                        // 99
    if (currentQueue.length) {                                                                               // 100
        queue = currentQueue.concat(queue);                                                                  // 101
    } else {                                                                                                 // 102
        queueIndex = -1;                                                                                     // 103
    }                                                                                                        // 104
    if (queue.length) {                                                                                      // 105
        drainQueue();                                                                                        // 106
    }                                                                                                        // 107
}                                                                                                            // 108
                                                                                                             // 109
function drainQueue() {                                                                                      // 110
    if (draining) {                                                                                          // 111
        return;                                                                                              // 112
    }                                                                                                        // 113
    var timeout = runTimeout(cleanUpNextTick);                                                               // 114
    draining = true;                                                                                         // 115
                                                                                                             // 116
    var len = queue.length;                                                                                  // 117
    while(len) {                                                                                             // 118
        currentQueue = queue;                                                                                // 119
        queue = [];                                                                                          // 120
        while (++queueIndex < len) {                                                                         // 121
            if (currentQueue) {                                                                              // 122
                currentQueue[queueIndex].run();                                                              // 123
            }                                                                                                // 124
        }                                                                                                    // 125
        queueIndex = -1;                                                                                     // 126
        len = queue.length;                                                                                  // 127
    }                                                                                                        // 128
    currentQueue = null;                                                                                     // 129
    draining = false;                                                                                        // 130
    runClearTimeout(timeout);                                                                                // 131
}                                                                                                            // 132
                                                                                                             // 133
process.nextTick = function (fun) {                                                                          // 134
    var args = new Array(arguments.length - 1);                                                              // 135
    if (arguments.length > 1) {                                                                              // 136
        for (var i = 1; i < arguments.length; i++) {                                                         // 137
            args[i - 1] = arguments[i];                                                                      // 138
        }                                                                                                    // 139
    }                                                                                                        // 140
    queue.push(new Item(fun, args));                                                                         // 141
    if (queue.length === 1 && !draining) {                                                                   // 142
        runTimeout(drainQueue);                                                                              // 143
    }                                                                                                        // 144
};                                                                                                           // 145
                                                                                                             // 146
// v8 likes predictible objects                                                                              // 147
function Item(fun, array) {                                                                                  // 148
    this.fun = fun;                                                                                          // 149
    this.array = array;                                                                                      // 150
}                                                                                                            // 151
Item.prototype.run = function () {                                                                           // 152
    this.fun.apply(null, this.array);                                                                        // 153
};                                                                                                           // 154
process.title = 'browser';                                                                                   // 155
process.browser = true;                                                                                      // 156
process.env = {};                                                                                            // 157
process.argv = [];                                                                                           // 158
process.version = ''; // empty string to avoid regexp issues                                                 // 159
process.versions = {};                                                                                       // 160
                                                                                                             // 161
function noop() {}                                                                                           // 162
                                                                                                             // 163
process.on = noop;                                                                                           // 164
process.addListener = noop;                                                                                  // 165
process.once = noop;                                                                                         // 166
process.off = noop;                                                                                          // 167
process.removeListener = noop;                                                                               // 168
process.removeAllListeners = noop;                                                                           // 169
process.emit = noop;                                                                                         // 170
                                                                                                             // 171
process.binding = function (name) {                                                                          // 172
    throw new Error('process.binding is not supported');                                                     // 173
};                                                                                                           // 174
                                                                                                             // 175
process.cwd = function () { return '/' };                                                                    // 176
process.chdir = function (dir) {                                                                             // 177
    throw new Error('process.chdir is not supported');                                                       // 178
};                                                                                                           // 179
process.umask = function() { return 0; };                                                                    // 180
                                                                                                             // 181
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"domain-browser":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/domain-browser/package.json                                   //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "domain-browser";                                                                             // 1
exports.version = "1.1.7";                                                                                   // 2
exports.main = "./index.js";                                                                                 // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["events",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/domain-browser/index.js                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// This file should be ES5 compatible                                                                        // 1
/* eslint prefer-spread:0, no-var:0, prefer-reflect:0, no-magic-numbers:0 */                                 // 2
'use strict'                                                                                                 // 3
module.exports = (function () {                                                                              // 4
	// Import Events                                                                                            // 5
	var events = require('events')                                                                              // 6
                                                                                                             // 7
	// Export Domain                                                                                            // 8
	var domain = {}                                                                                             // 9
	domain.createDomain = domain.create = function () {                                                         // 10
		var d = new events.EventEmitter()                                                                          // 11
                                                                                                             // 12
		function emitError (e) {                                                                                   // 13
			d.emit('error', e)                                                                                        // 14
		}                                                                                                          // 15
                                                                                                             // 16
		d.add = function (emitter) {                                                                               // 17
			emitter.on('error', emitError)                                                                            // 18
		}                                                                                                          // 19
		d.remove = function (emitter) {                                                                            // 20
			emitter.removeListener('error', emitError)                                                                // 21
		}                                                                                                          // 22
		d.bind = function (fn) {                                                                                   // 23
			return function () {                                                                                      // 24
				var args = Array.prototype.slice.call(arguments)                                                         // 25
				try {                                                                                                    // 26
					fn.apply(null, args)                                                                                    // 27
				}                                                                                                        // 28
				catch (err) {                                                                                            // 29
					emitError(err)                                                                                          // 30
				}                                                                                                        // 31
			}                                                                                                         // 32
		}                                                                                                          // 33
		d.intercept = function (fn) {                                                                              // 34
			return function (err) {                                                                                   // 35
				if ( err ) {                                                                                             // 36
					emitError(err)                                                                                          // 37
				}                                                                                                        // 38
				else {                                                                                                   // 39
					var args = Array.prototype.slice.call(arguments, 1)                                                     // 40
					try {                                                                                                   // 41
						fn.apply(null, args)                                                                                   // 42
					}                                                                                                       // 43
					catch (err) {                                                                                           // 44
						emitError(err)                                                                                         // 45
					}                                                                                                       // 46
				}                                                                                                        // 47
			}                                                                                                         // 48
		}                                                                                                          // 49
		d.run = function (fn) {                                                                                    // 50
			try {                                                                                                     // 51
				fn()                                                                                                     // 52
			}                                                                                                         // 53
			catch (err) {                                                                                             // 54
				emitError(err)                                                                                           // 55
			}                                                                                                         // 56
			return this                                                                                               // 57
		}                                                                                                          // 58
		d.dispose = function () {                                                                                  // 59
			this.removeAllListeners()                                                                                 // 60
			return this                                                                                               // 61
		}                                                                                                          // 62
		d.enter = d.exit = function () {                                                                           // 63
			return this                                                                                               // 64
		}                                                                                                          // 65
		return d                                                                                                   // 66
	}                                                                                                           // 67
	return domain                                                                                               // 68
}).call(this)                                                                                                // 69
                                                                                                             // 70
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"events":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/events/package.json                                           //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
exports.name = "events";                                                                                     // 1
exports.version = "1.1.1";                                                                                   // 2
exports.main = "./events.js";                                                                                // 3
                                                                                                             // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"events.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// node_modules/meteor-node-stubs/node_modules/events/events.js                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
// Copyright Joyent, Inc. and other Node contributors.                                                       // 1
//                                                                                                           // 2
// Permission is hereby granted, free of charge, to any person obtaining a                                   // 3
// copy of this software and associated documentation files (the                                             // 4
// "Software"), to deal in the Software without restriction, including                                       // 5
// without limitation the rights to use, copy, modify, merge, publish,                                       // 6
// distribute, sublicense, and/or sell copies of the Software, and to permit                                 // 7
// persons to whom the Software is furnished to do so, subject to the                                        // 8
// following conditions:                                                                                     // 9
//                                                                                                           // 10
// The above copyright notice and this permission notice shall be included                                   // 11
// in all copies or substantial portions of the Software.                                                    // 12
//                                                                                                           // 13
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS                                   // 14
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                // 15
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN                                 // 16
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,                                  // 17
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR                                     // 18
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE                                 // 19
// USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                    // 20
                                                                                                             // 21
function EventEmitter() {                                                                                    // 22
  this._events = this._events || {};                                                                         // 23
  this._maxListeners = this._maxListeners || undefined;                                                      // 24
}                                                                                                            // 25
module.exports = EventEmitter;                                                                               // 26
                                                                                                             // 27
// Backwards-compat with node 0.10.x                                                                         // 28
EventEmitter.EventEmitter = EventEmitter;                                                                    // 29
                                                                                                             // 30
EventEmitter.prototype._events = undefined;                                                                  // 31
EventEmitter.prototype._maxListeners = undefined;                                                            // 32
                                                                                                             // 33
// By default EventEmitters will print a warning if more than 10 listeners are                               // 34
// added to it. This is a useful default which helps finding memory leaks.                                   // 35
EventEmitter.defaultMaxListeners = 10;                                                                       // 36
                                                                                                             // 37
// Obviously not all Emitters should be limited to 10. This function allows                                  // 38
// that to be increased. Set to zero for unlimited.                                                          // 39
EventEmitter.prototype.setMaxListeners = function(n) {                                                       // 40
  if (!isNumber(n) || n < 0 || isNaN(n))                                                                     // 41
    throw TypeError('n must be a positive number');                                                          // 42
  this._maxListeners = n;                                                                                    // 43
  return this;                                                                                               // 44
};                                                                                                           // 45
                                                                                                             // 46
EventEmitter.prototype.emit = function(type) {                                                               // 47
  var er, handler, len, args, i, listeners;                                                                  // 48
                                                                                                             // 49
  if (!this._events)                                                                                         // 50
    this._events = {};                                                                                       // 51
                                                                                                             // 52
  // If there is no 'error' event listener then throw.                                                       // 53
  if (type === 'error') {                                                                                    // 54
    if (!this._events.error ||                                                                               // 55
        (isObject(this._events.error) && !this._events.error.length)) {                                      // 56
      er = arguments[1];                                                                                     // 57
      if (er instanceof Error) {                                                                             // 58
        throw er; // Unhandled 'error' event                                                                 // 59
      } else {                                                                                               // 60
        // At least give some kind of context to the user                                                    // 61
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');                            // 62
        err.context = er;                                                                                    // 63
        throw err;                                                                                           // 64
      }                                                                                                      // 65
    }                                                                                                        // 66
  }                                                                                                          // 67
                                                                                                             // 68
  handler = this._events[type];                                                                              // 69
                                                                                                             // 70
  if (isUndefined(handler))                                                                                  // 71
    return false;                                                                                            // 72
                                                                                                             // 73
  if (isFunction(handler)) {                                                                                 // 74
    switch (arguments.length) {                                                                              // 75
      // fast cases                                                                                          // 76
      case 1:                                                                                                // 77
        handler.call(this);                                                                                  // 78
        break;                                                                                               // 79
      case 2:                                                                                                // 80
        handler.call(this, arguments[1]);                                                                    // 81
        break;                                                                                               // 82
      case 3:                                                                                                // 83
        handler.call(this, arguments[1], arguments[2]);                                                      // 84
        break;                                                                                               // 85
      // slower                                                                                              // 86
      default:                                                                                               // 87
        args = Array.prototype.slice.call(arguments, 1);                                                     // 88
        handler.apply(this, args);                                                                           // 89
    }                                                                                                        // 90
  } else if (isObject(handler)) {                                                                            // 91
    args = Array.prototype.slice.call(arguments, 1);                                                         // 92
    listeners = handler.slice();                                                                             // 93
    len = listeners.length;                                                                                  // 94
    for (i = 0; i < len; i++)                                                                                // 95
      listeners[i].apply(this, args);                                                                        // 96
  }                                                                                                          // 97
                                                                                                             // 98
  return true;                                                                                               // 99
};                                                                                                           // 100
                                                                                                             // 101
EventEmitter.prototype.addListener = function(type, listener) {                                              // 102
  var m;                                                                                                     // 103
                                                                                                             // 104
  if (!isFunction(listener))                                                                                 // 105
    throw TypeError('listener must be a function');                                                          // 106
                                                                                                             // 107
  if (!this._events)                                                                                         // 108
    this._events = {};                                                                                       // 109
                                                                                                             // 110
  // To avoid recursion in the case that type === "newListener"! Before                                      // 111
  // adding it to the listeners, first emit "newListener".                                                   // 112
  if (this._events.newListener)                                                                              // 113
    this.emit('newListener', type,                                                                           // 114
              isFunction(listener.listener) ?                                                                // 115
              listener.listener : listener);                                                                 // 116
                                                                                                             // 117
  if (!this._events[type])                                                                                   // 118
    // Optimize the case of one listener. Don't need the extra array object.                                 // 119
    this._events[type] = listener;                                                                           // 120
  else if (isObject(this._events[type]))                                                                     // 121
    // If we've already got an array, just append.                                                           // 122
    this._events[type].push(listener);                                                                       // 123
  else                                                                                                       // 124
    // Adding the second element, need to change to array.                                                   // 125
    this._events[type] = [this._events[type], listener];                                                     // 126
                                                                                                             // 127
  // Check for listener leak                                                                                 // 128
  if (isObject(this._events[type]) && !this._events[type].warned) {                                          // 129
    if (!isUndefined(this._maxListeners)) {                                                                  // 130
      m = this._maxListeners;                                                                                // 131
    } else {                                                                                                 // 132
      m = EventEmitter.defaultMaxListeners;                                                                  // 133
    }                                                                                                        // 134
                                                                                                             // 135
    if (m && m > 0 && this._events[type].length > m) {                                                       // 136
      this._events[type].warned = true;                                                                      // 137
      console.error('(node) warning: possible EventEmitter memory ' +                                        // 138
                    'leak detected. %d listeners added. ' +                                                  // 139
                    'Use emitter.setMaxListeners() to increase limit.',                                      // 140
                    this._events[type].length);                                                              // 141
      if (typeof console.trace === 'function') {                                                             // 142
        // not supported in IE 10                                                                            // 143
        console.trace();                                                                                     // 144
      }                                                                                                      // 145
    }                                                                                                        // 146
  }                                                                                                          // 147
                                                                                                             // 148
  return this;                                                                                               // 149
};                                                                                                           // 150
                                                                                                             // 151
EventEmitter.prototype.on = EventEmitter.prototype.addListener;                                              // 152
                                                                                                             // 153
EventEmitter.prototype.once = function(type, listener) {                                                     // 154
  if (!isFunction(listener))                                                                                 // 155
    throw TypeError('listener must be a function');                                                          // 156
                                                                                                             // 157
  var fired = false;                                                                                         // 158
                                                                                                             // 159
  function g() {                                                                                             // 160
    this.removeListener(type, g);                                                                            // 161
                                                                                                             // 162
    if (!fired) {                                                                                            // 163
      fired = true;                                                                                          // 164
      listener.apply(this, arguments);                                                                       // 165
    }                                                                                                        // 166
  }                                                                                                          // 167
                                                                                                             // 168
  g.listener = listener;                                                                                     // 169
  this.on(type, g);                                                                                          // 170
                                                                                                             // 171
  return this;                                                                                               // 172
};                                                                                                           // 173
                                                                                                             // 174
// emits a 'removeListener' event iff the listener was removed                                               // 175
EventEmitter.prototype.removeListener = function(type, listener) {                                           // 176
  var list, position, length, i;                                                                             // 177
                                                                                                             // 178
  if (!isFunction(listener))                                                                                 // 179
    throw TypeError('listener must be a function');                                                          // 180
                                                                                                             // 181
  if (!this._events || !this._events[type])                                                                  // 182
    return this;                                                                                             // 183
                                                                                                             // 184
  list = this._events[type];                                                                                 // 185
  length = list.length;                                                                                      // 186
  position = -1;                                                                                             // 187
                                                                                                             // 188
  if (list === listener ||                                                                                   // 189
      (isFunction(list.listener) && list.listener === listener)) {                                           // 190
    delete this._events[type];                                                                               // 191
    if (this._events.removeListener)                                                                         // 192
      this.emit('removeListener', type, listener);                                                           // 193
                                                                                                             // 194
  } else if (isObject(list)) {                                                                               // 195
    for (i = length; i-- > 0;) {                                                                             // 196
      if (list[i] === listener ||                                                                            // 197
          (list[i].listener && list[i].listener === listener)) {                                             // 198
        position = i;                                                                                        // 199
        break;                                                                                               // 200
      }                                                                                                      // 201
    }                                                                                                        // 202
                                                                                                             // 203
    if (position < 0)                                                                                        // 204
      return this;                                                                                           // 205
                                                                                                             // 206
    if (list.length === 1) {                                                                                 // 207
      list.length = 0;                                                                                       // 208
      delete this._events[type];                                                                             // 209
    } else {                                                                                                 // 210
      list.splice(position, 1);                                                                              // 211
    }                                                                                                        // 212
                                                                                                             // 213
    if (this._events.removeListener)                                                                         // 214
      this.emit('removeListener', type, listener);                                                           // 215
  }                                                                                                          // 216
                                                                                                             // 217
  return this;                                                                                               // 218
};                                                                                                           // 219
                                                                                                             // 220
EventEmitter.prototype.removeAllListeners = function(type) {                                                 // 221
  var key, listeners;                                                                                        // 222
                                                                                                             // 223
  if (!this._events)                                                                                         // 224
    return this;                                                                                             // 225
                                                                                                             // 226
  // not listening for removeListener, no need to emit                                                       // 227
  if (!this._events.removeListener) {                                                                        // 228
    if (arguments.length === 0)                                                                              // 229
      this._events = {};                                                                                     // 230
    else if (this._events[type])                                                                             // 231
      delete this._events[type];                                                                             // 232
    return this;                                                                                             // 233
  }                                                                                                          // 234
                                                                                                             // 235
  // emit removeListener for all listeners on all events                                                     // 236
  if (arguments.length === 0) {                                                                              // 237
    for (key in this._events) {                                                                              // 238
      if (key === 'removeListener') continue;                                                                // 239
      this.removeAllListeners(key);                                                                          // 240
    }                                                                                                        // 241
    this.removeAllListeners('removeListener');                                                               // 242
    this._events = {};                                                                                       // 243
    return this;                                                                                             // 244
  }                                                                                                          // 245
                                                                                                             // 246
  listeners = this._events[type];                                                                            // 247
                                                                                                             // 248
  if (isFunction(listeners)) {                                                                               // 249
    this.removeListener(type, listeners);                                                                    // 250
  } else if (listeners) {                                                                                    // 251
    // LIFO order                                                                                            // 252
    while (listeners.length)                                                                                 // 253
      this.removeListener(type, listeners[listeners.length - 1]);                                            // 254
  }                                                                                                          // 255
  delete this._events[type];                                                                                 // 256
                                                                                                             // 257
  return this;                                                                                               // 258
};                                                                                                           // 259
                                                                                                             // 260
EventEmitter.prototype.listeners = function(type) {                                                          // 261
  var ret;                                                                                                   // 262
  if (!this._events || !this._events[type])                                                                  // 263
    ret = [];                                                                                                // 264
  else if (isFunction(this._events[type]))                                                                   // 265
    ret = [this._events[type]];                                                                              // 266
  else                                                                                                       // 267
    ret = this._events[type].slice();                                                                        // 268
  return ret;                                                                                                // 269
};                                                                                                           // 270
                                                                                                             // 271
EventEmitter.prototype.listenerCount = function(type) {                                                      // 272
  if (this._events) {                                                                                        // 273
    var evlistener = this._events[type];                                                                     // 274
                                                                                                             // 275
    if (isFunction(evlistener))                                                                              // 276
      return 1;                                                                                              // 277
    else if (evlistener)                                                                                     // 278
      return evlistener.length;                                                                              // 279
  }                                                                                                          // 280
  return 0;                                                                                                  // 281
};                                                                                                           // 282
                                                                                                             // 283
EventEmitter.listenerCount = function(emitter, type) {                                                       // 284
  return emitter.listenerCount(type);                                                                        // 285
};                                                                                                           // 286
                                                                                                             // 287
function isFunction(arg) {                                                                                   // 288
  return typeof arg === 'function';                                                                          // 289
}                                                                                                            // 290
                                                                                                             // 291
function isNumber(arg) {                                                                                     // 292
  return typeof arg === 'number';                                                                            // 293
}                                                                                                            // 294
                                                                                                             // 295
function isObject(arg) {                                                                                     // 296
  return typeof arg === 'object' && arg !== null;                                                            // 297
}                                                                                                            // 298
                                                                                                             // 299
function isUndefined(arg) {                                                                                  // 300
  return arg === void 0;                                                                                     // 301
}                                                                                                            // 302
                                                                                                             // 303
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{"extensions":[".js",".json"]});
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
