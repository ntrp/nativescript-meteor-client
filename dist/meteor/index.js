module.exports = function (opts) {
    (function () {
        require('./meteor-runtime-config')(opts);
        require('./underscore');
        require('./meteor');
        require('./modules-runtime');
        require('./modules');
        require('./base64');
        require('./ejson');
        require('./check');
        require('./promise');
        require('./ecmascript-runtime');
        require('./babel-compiler');
        require('./ecmascript');
        require('./babel-runtime');
        require('./random');
        require('./tracker');
        require('./retry');
        require('./id-map');
        require('./ddp-common');
        require('./diff-sequence');
        require('./mongo-id');
        require('./ddp-client');
        require('./ddp');
        require('./ordered-dict');
        require('./geojson-utils');
        require('./minimongo');
        require('./allow-deny');
        require('./mongo');
        require('./localstorage.js');
        require('./callback-hook.js');
        require('./reactive-var.js');
        require('./accounts-base.js');
        require('./sha.js');
        require('./srp.js');
        require('./accounts-password.js');
        require('./global-imports.js');
        require('./service-configuration.js');
    }).call(that);
}

var that = this;
