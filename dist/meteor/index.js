module.exports = function (opts) {
    (function () {
        require('./meteor-runtime-config')(opts);
        require('./underscore');
        require('./meteor');
        require('./modules-runtime');
        require('./modules');
        require('./promise');
        require('./babel-runtime');
        require('./ecmascript-runtime');
        require('./ecmascript');
        require('./base64');
        require('./ejson');
        require('./check');
        require('./random');
        require('./tracker');
        require('./retry');
        require('./id-map');
        require('./ordered-dict');
        require('./geojson-utils');
        require('./diff-sequence');
        require('./mongo-id');
        require('./minimongo');
        require('./ddp-common');
        require('./ddp-client');
        require('./ddp');
        require('./allow-deny');
        require('./mongo');
        require('./global-imports');
    }).call(that);
}

var that = this;