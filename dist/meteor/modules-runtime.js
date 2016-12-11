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

/* Package-scope variables */
var makeInstaller, meteorInstall;

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/modules-runtime/.npm/package/node_modules/install/install.js   //
// This file is in bare mode and is not in its own closure.                //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
makeInstaller = function (options) {                                       // 1
  "use strict";                                                            // 2
                                                                           // 3
  options = options || {};                                                 // 4
                                                                           // 5
  // These file extensions will be appended to required module identifiers
  // if they do not exactly match an installed module.                     // 7
  var defaultExtensions = options.extensions || [".js", ".json"];          // 8
                                                                           // 9
  // If defined, the options.onInstall function will be called any time    // 10
  // new modules are installed.                                            // 11
  var onInstall = options.onInstall;                                       // 12
                                                                           // 13
  // If defined, each module-specific require function will be passed to   // 14
  // this function, along with the module.id of the parent module, and     // 15
  // the result will be used in place of the original require function.    // 16
  var wrapRequire = options.wrapRequire;                                   // 17
                                                                           // 18
  // If defined, the options.override function will be called before       // 19
  // looking up any top-level package identifiers in node_modules          // 20
  // directories. It can either return a string to provide an alternate    // 21
  // package identifier, or a non-string value to prevent the lookup from  // 22
  // proceeding.                                                           // 23
  var override = options.override;                                         // 24
                                                                           // 25
  // If defined, the options.fallback function will be called when no      // 26
  // installed module is found for a required module identifier. Often     // 27
  // options.fallback will be implemented in terms of the native Node      // 28
  // require function, which has the ability to load binary modules.       // 29
  var fallback = options.fallback;                                         // 30
                                                                           // 31
  // Nothing special about MISSING.hasOwnProperty, except that it's fewer  // 32
  // characters than Object.prototype.hasOwnProperty after minification.   // 33
  var hasOwn = {}.hasOwnProperty;                                          // 34
                                                                           // 35
  // The file object representing the root directory of the installed      // 36
  // module tree.                                                          // 37
  var root = new File("/", new File("/.."));                               // 38
  var rootRequire = makeRequire(root);                                     // 39
                                                                           // 40
  // Merges the given tree of directories and module factory functions     // 41
  // into the tree of installed modules and returns a require function     // 42
  // that behaves as if called from a module in the root directory.        // 43
  function install(tree, options) {                                        // 44
    if (isObject(tree)) {                                                  // 45
      fileMergeContents(root, tree, options);                              // 46
      if (isFunction(onInstall)) {                                         // 47
        onInstall(rootRequire);                                            // 48
      }                                                                    // 49
    }                                                                      // 50
    return rootRequire;                                                    // 51
  }                                                                        // 52
                                                                           // 53
  // This constructor will be used to instantiate the module objects       // 54
  // passed to module factory functions (i.e. the third argument after     // 55
  // require and exports), and is exposed as install.Module in case the    // 56
  // caller of makeInstaller wishes to modify Module.prototype.            // 57
  function Module(id) {                                                    // 58
    this.id = id;                                                          // 59
    this.children = [];                                                    // 60
  }                                                                        // 61
                                                                           // 62
  Module.prototype.resolve = function (id) {                               // 63
    return this.require.resolve(id);                                       // 64
  };                                                                       // 65
                                                                           // 66
  install.Module = Module;                                                 // 67
                                                                           // 68
  function getOwn(obj, key) {                                              // 69
    return hasOwn.call(obj, key) && obj[key];                              // 70
  }                                                                        // 71
                                                                           // 72
  function isObject(value) {                                               // 73
    return value && typeof value === "object";                             // 74
  }                                                                        // 75
                                                                           // 76
  function isFunction(value) {                                             // 77
    return typeof value === "function";                                    // 78
  }                                                                        // 79
                                                                           // 80
  function isString(value) {                                               // 81
    return typeof value === "string";                                      // 82
  }                                                                        // 83
                                                                           // 84
  function makeRequire(file) {                                             // 85
    function require(id) {                                                 // 86
      var result = fileResolve(file, id);                                  // 87
      if (result) {                                                        // 88
        return fileEvaluate(result, file.m);                               // 89
      }                                                                    // 90
                                                                           // 91
      var error = new Error("Cannot find module '" + id + "'");            // 92
                                                                           // 93
      if (isFunction(fallback)) {                                          // 94
        return fallback(                                                   // 95
          id, // The missing module identifier.                            // 96
          file.m.id, // The path of the requiring file.                    // 97
          error // The error we would have thrown.                         // 98
        );                                                                 // 99
      }                                                                    // 100
                                                                           // 101
      throw error;                                                         // 102
    }                                                                      // 103
                                                                           // 104
    if (isFunction(wrapRequire)) {                                         // 105
      require = wrapRequire(require, file.m.id);                           // 106
    }                                                                      // 107
                                                                           // 108
    require.resolve = function (id) {                                      // 109
      var f = fileResolve(file, id);                                       // 110
      if (f) return f.m.id;                                                // 111
      var error = new Error("Cannot find module '" + id + "'");            // 112
      if (fallback && isFunction(fallback.resolve)) {                      // 113
        return fallback.resolve(id, file.m.id, error);                     // 114
      }                                                                    // 115
      throw error;                                                         // 116
    };                                                                     // 117
                                                                           // 118
    return require;                                                        // 119
  }                                                                        // 120
                                                                           // 121
  // File objects represent either directories or modules that have been   // 122
  // installed. When a `File` respresents a directory, its `.c` (contents)
  // property is an object containing the names of the files (or           // 124
  // directories) that it contains. When a `File` represents a module, its
  // `.c` property is a function that can be invoked with the appropriate  // 126
  // `(require, exports, module)` arguments to evaluate the module. If the
  // `.c` property is a string, that string will be resolved as a module   // 128
  // identifier, and the exports of the resulting module will provide the  // 129
  // exports of the original file. The `.p` (parent) property of a File is
  // either a directory `File` or `null`. Note that a child may claim      // 131
  // another `File` as its parent even if the parent does not have an      // 132
  // entry for that child in its `.c` object.  This is important for       // 133
  // implementing anonymous files, and preventing child modules from using
  // `../relative/identifier` syntax to examine unrelated modules.         // 135
  function File(name, parent) {                                            // 136
    var file = this;                                                       // 137
                                                                           // 138
    // Link to the parent file.                                            // 139
    file.p = parent = parent || null;                                      // 140
                                                                           // 141
    // The module object for this File, which will eventually boast an     // 142
    // .exports property when/if the file is evaluated.                    // 143
    file.m = new Module(name);                                             // 144
  }                                                                        // 145
                                                                           // 146
  function fileEvaluate(file, parentModule) {                              // 147
    var contents = file && file.c;                                         // 148
    var module = file.m;                                                   // 149
                                                                           // 150
    if (! hasOwn.call(module, "exports")) {                                // 151
      if (parentModule) {                                                  // 152
        module.parent = parentModule;                                      // 153
        var children = parentModule.children;                              // 154
        if (Array.isArray(children)) {                                     // 155
          children.push(module);                                           // 156
        }                                                                  // 157
      }                                                                    // 158
                                                                           // 159
      // If a Module.prototype.useNode method is defined, give it a chance
      // to define module.exports based on module.id using Node.           // 161
      if (! isFunction(module.useNode) ||                                  // 162
          ! module.useNode()) {                                            // 163
        contents(                                                          // 164
          module.require = module.require || makeRequire(file),            // 165
          module.exports = {},                                             // 166
          module,                                                          // 167
          file.m.id,                                                       // 168
          file.p.m.id                                                      // 169
        );                                                                 // 170
      }                                                                    // 171
                                                                           // 172
      module.loaded = true;                                                // 173
    }                                                                      // 174
                                                                           // 175
    if (isFunction(module.runModuleSetters)) {                             // 176
      module.runModuleSetters();                                           // 177
    }                                                                      // 178
                                                                           // 179
    return module.exports;                                                 // 180
  }                                                                        // 181
                                                                           // 182
  function fileIsDirectory(file) {                                         // 183
    return file && isObject(file.c);                                       // 184
  }                                                                        // 185
                                                                           // 186
  function fileMergeContents(file, contents, options) {                    // 187
    // If contents is an array of strings and functions, return the last   // 188
    // function with a `.d` property containing all the strings.           // 189
    if (Array.isArray(contents)) {                                         // 190
      var deps = [];                                                       // 191
                                                                           // 192
      contents.forEach(function (item) {                                   // 193
        if (isString(item)) {                                              // 194
          deps.push(item);                                                 // 195
        } else if (isFunction(item)) {                                     // 196
          contents = item;                                                 // 197
        }                                                                  // 198
      });                                                                  // 199
                                                                           // 200
      if (isFunction(contents)) {                                          // 201
        contents.d = deps;                                                 // 202
      } else {                                                             // 203
        // If the array did not contain a function, merge nothing.         // 204
        contents = null;                                                   // 205
      }                                                                    // 206
                                                                           // 207
    } else if (isFunction(contents)) {                                     // 208
      // If contents is already a function, make sure it has `.d`.         // 209
      contents.d = contents.d || [];                                       // 210
                                                                           // 211
    } else if (! isString(contents) &&                                     // 212
               ! isObject(contents)) {                                     // 213
      // If contents is neither an array nor a function nor a string nor   // 214
      // an object, just give up and merge nothing.                        // 215
      contents = null;                                                     // 216
    }                                                                      // 217
                                                                           // 218
    if (contents) {                                                        // 219
      file.c = file.c || (isObject(contents) ? {} : contents);             // 220
      if (isObject(contents) && fileIsDirectory(file)) {                   // 221
        Object.keys(contents).forEach(function (key) {                     // 222
          if (key === "..") {                                              // 223
            child = file.p;                                                // 224
                                                                           // 225
          } else {                                                         // 226
            var child = getOwn(file.c, key);                               // 227
            if (! child) {                                                 // 228
              child = file.c[key] = new File(                              // 229
                file.m.id.replace(/\/*$/, "/") + key,                      // 230
                file                                                       // 231
              );                                                           // 232
                                                                           // 233
              child.o = options;                                           // 234
            }                                                              // 235
          }                                                                // 236
                                                                           // 237
          fileMergeContents(child, contents[key], options);                // 238
        });                                                                // 239
      }                                                                    // 240
    }                                                                      // 241
  }                                                                        // 242
                                                                           // 243
  function fileGetExtensions(file) {                                       // 244
    return file.o && file.o.extensions || defaultExtensions;               // 245
  }                                                                        // 246
                                                                           // 247
  function fileAppendIdPart(file, part, extensions) {                      // 248
    // Always append relative to a directory.                              // 249
    while (file && ! fileIsDirectory(file)) {                              // 250
      file = file.p;                                                       // 251
    }                                                                      // 252
                                                                           // 253
    if (! file || ! part || part === ".") {                                // 254
      return file;                                                         // 255
    }                                                                      // 256
                                                                           // 257
    if (part === "..") {                                                   // 258
      return file.p;                                                       // 259
    }                                                                      // 260
                                                                           // 261
    var exactChild = getOwn(file.c, part);                                 // 262
                                                                           // 263
    // Only consider multiple file extensions if this part is the last     // 264
    // part of a module identifier and not equal to `.` or `..`, and there
    // was no exact match or the exact match was a directory.              // 266
    if (extensions && (! exactChild || fileIsDirectory(exactChild))) {     // 267
      for (var e = 0; e < extensions.length; ++e) {                        // 268
        var child = getOwn(file.c, part + extensions[e]);                  // 269
        if (child) {                                                       // 270
          return child;                                                    // 271
        }                                                                  // 272
      }                                                                    // 273
    }                                                                      // 274
                                                                           // 275
    return exactChild;                                                     // 276
  }                                                                        // 277
                                                                           // 278
  function fileAppendId(file, id, extensions) {                            // 279
    var parts = id.split("/");                                             // 280
                                                                           // 281
    // Use `Array.prototype.every` to terminate iteration early if         // 282
    // `fileAppendIdPart` returns a falsy value.                           // 283
    parts.every(function (part, i) {                                       // 284
      return file = i < parts.length - 1                                   // 285
        ? fileAppendIdPart(file, part)                                     // 286
        : fileAppendIdPart(file, part, extensions);                        // 287
    });                                                                    // 288
                                                                           // 289
    return file;                                                           // 290
  }                                                                        // 291
                                                                           // 292
  function fileResolve(file, id, seenDirFiles) {                           // 293
    var extensions = fileGetExtensions(file);                              // 294
                                                                           // 295
    file =                                                                 // 296
      // Absolute module identifiers (i.e. those that begin with a `/`     // 297
      // character) are interpreted relative to the root directory, which  // 298
      // is a slight deviation from Node, which has access to the entire   // 299
      // file system.                                                      // 300
      id.charAt(0) === "/" ? fileAppendId(root, id, extensions) :          // 301
      // Relative module identifiers are interpreted relative to the       // 302
      // current file, naturally.                                          // 303
      id.charAt(0) === "." ? fileAppendId(file, id, extensions) :          // 304
      // Top-level module identifiers are interpreted as referring to      // 305
      // packages in `node_modules` directories.                           // 306
      nodeModulesLookup(file, id, extensions);                             // 307
                                                                           // 308
    // If the identifier resolves to a directory, we use the same logic as
    // Node to find an `index.js` or `package.json` file to evaluate.      // 310
    while (fileIsDirectory(file)) {                                        // 311
      seenDirFiles = seenDirFiles || [];                                   // 312
                                                                           // 313
      // If the "main" field of a `package.json` file resolves to a        // 314
      // directory we've already considered, then we should not attempt to
      // read the same `package.json` file again. Using an array as a set  // 316
      // is acceptable here because the number of directories to consider  // 317
      // is rarely greater than 1 or 2. Also, using indexOf allows us to   // 318
      // store File objects instead of strings.                            // 319
      if (seenDirFiles.indexOf(file) < 0) {                                // 320
        seenDirFiles.push(file);                                           // 321
                                                                           // 322
        var pkgJsonFile = fileAppendIdPart(file, "package.json");          // 323
        var main = pkgJsonFile && fileEvaluate(pkgJsonFile).main;          // 324
        if (isString(main)) {                                              // 325
          // The "main" field of package.json does not have to begin with  // 326
          // ./ to be considered relative, so first we try simply          // 327
          // appending it to the directory path before falling back to a   // 328
          // full fileResolve, which might return a package from a         // 329
          // node_modules directory.                                       // 330
          file = fileAppendId(file, main, extensions) ||                   // 331
            fileResolve(file, main, seenDirFiles);                         // 332
                                                                           // 333
          if (file) {                                                      // 334
            // The fileAppendId call above may have returned a directory,  // 335
            // so continue the loop to make sure we resolve it to a        // 336
            // non-directory file.                                         // 337
            continue;                                                      // 338
          }                                                                // 339
        }                                                                  // 340
      }                                                                    // 341
                                                                           // 342
      // If we didn't find a `package.json` file, or it didn't have a      // 343
      // resolvable `.main` property, the only possibility left to         // 344
      // consider is that this directory contains an `index.js` module.    // 345
      // This assignment almost always terminates the while loop, because  // 346
      // there's very little chance `fileIsDirectory(file)` will be true   // 347
      // for the result of `fileAppendIdPart(file, "index.js")`. However,  // 348
      // in principle it is remotely possible that a file called           // 349
      // `index.js` could be a directory instead of a file.                // 350
      file = fileAppendIdPart(file, "index.js");                           // 351
    }                                                                      // 352
                                                                           // 353
    if (file && isString(file.c)) {                                        // 354
      file = fileResolve(file, file.c, seenDirFiles);                      // 355
    }                                                                      // 356
                                                                           // 357
    return file;                                                           // 358
  };                                                                       // 359
                                                                           // 360
  function nodeModulesLookup(file, id, extensions) {                       // 361
    if (isFunction(override)) {                                            // 362
      id = override(id, file.m.id);                                        // 363
    }                                                                      // 364
                                                                           // 365
    if (isString(id)) {                                                    // 366
      for (var resolved; file && ! resolved; file = file.p) {              // 367
        resolved = fileIsDirectory(file) &&                                // 368
          fileAppendId(file, "node_modules/" + id, extensions);            // 369
      }                                                                    // 370
                                                                           // 371
      return resolved;                                                     // 372
    }                                                                      // 373
  }                                                                        // 374
                                                                           // 375
  return install;                                                          // 376
};                                                                         // 377
                                                                           // 378
if (typeof exports === "object") {                                         // 379
  exports.makeInstaller = makeInstaller;                                   // 380
}                                                                          // 381
                                                                           // 382
/////////////////////////////////////////////////////////////////////////////







(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/modules-runtime/modules-runtime.js                             //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var options = {};                                                          // 1
var hasOwn = options.hasOwnProperty;                                       // 2
                                                                           // 3
// RegExp matching strings that don't start with a `.` or a `/`.           // 4
var topLevelIdPattern = /^[^./]/;                                          // 5
                                                                           // 6
if (typeof Profile === "function" &&                                       // 7
    process.env.METEOR_PROFILE) {                                          // 8
  options.wrapRequire = function (require) {                               // 9
    return Profile(function (id) {                                         // 10
      return "require(" + JSON.stringify(id) + ")";                        // 11
    }, require);                                                           // 12
  };                                                                       // 13
}                                                                          // 14
                                                                           // 15
// This function will be called whenever a module identifier that hasn't   // 16
// been installed is required. For backwards compatibility, and so that we
// can require binary dependencies on the server, we implement the         // 18
// fallback in terms of Npm.require.                                       // 19
options.fallback = function (id, parentId, error) {                        // 20
  // For simplicity, we honor only top-level module identifiers here.      // 21
  // We could try to honor relative and absolute module identifiers by     // 22
  // somehow combining `id` with `dir`, but we'd have to be really careful
  // that the resulting modules were located in a known directory (not     // 24
  // some arbitrary location on the file system), and we only really need  // 25
  // the fallback for dependencies installed in node_modules directories.  // 26
  if (topLevelIdPattern.test(id)) {                                        // 27
    if (typeof Npm === "object" &&                                         // 28
        typeof Npm.require === "function") {                               // 29
      return Npm.require(id);                                              // 30
    }                                                                      // 31
  }                                                                        // 32
                                                                           // 33
  throw error;                                                             // 34
};                                                                         // 35
                                                                           // 36
options.fallback.resolve = function (id, parentId, error) {                // 37
  if (Meteor.isServer &&                                                   // 38
      topLevelIdPattern.test(id)) {                                        // 39
    // Allow any top-level identifier to resolve to itself on the server,  // 40
    // so that options.fallback can have a chance to handle it.            // 41
    return id;                                                             // 42
  }                                                                        // 43
                                                                           // 44
  throw error;                                                             // 45
};                                                                         // 46
                                                                           // 47
meteorInstall = makeInstaller(options);                                    // 48
var Mp = meteorInstall.Module.prototype;                                   // 49
                                                                           // 50
if (Meteor.isServer) {                                                     // 51
  Mp.useNode = function () {                                               // 52
    if (typeof npmRequire !== "function") {                                // 53
      // Can't use Node if npmRequire is not defined.                      // 54
      return false;                                                        // 55
    }                                                                      // 56
                                                                           // 57
    var parts = this.id.split("/");                                        // 58
    var start = 0;                                                         // 59
    if (parts[start] === "") ++start;                                      // 60
    if (parts[start] === "node_modules" &&                                 // 61
        parts[start + 1] === "meteor") {                                   // 62
      start += 2;                                                          // 63
    }                                                                      // 64
                                                                           // 65
    if (parts.indexOf("node_modules", start) < 0) {                        // 66
      // Don't try to use Node for modules that aren't in node_modules     // 67
      // directories.                                                      // 68
      return false;                                                        // 69
    }                                                                      // 70
                                                                           // 71
    try {                                                                  // 72
      npmRequire.resolve(this.id);                                         // 73
    } catch (e) {                                                          // 74
      return false;                                                        // 75
    }                                                                      // 76
                                                                           // 77
    this.exports = npmRequire(this.id);                                    // 78
                                                                           // 79
    return true;                                                           // 80
  };                                                                       // 81
}                                                                          // 82
                                                                           // 83
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['modules-runtime'] = {}, {
  meteorInstall: meteorInstall
});

})();
