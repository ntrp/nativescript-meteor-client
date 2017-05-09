module.exports = function (opts, wsImpl) {
    (function () {
        var config = this.__meteor_runtime_config__ || {};

        __meteor_runtime_config__ = Object.assign({}, config, {
            meteorEnv: {},
            DDP_DEFAULT_CONNECTION_URL: opts.url || 'http://localhost:3000',
            nsDebug: opts.debug,
            nsSocketTimeout: opts.timeout,
            wsImpl: wsImpl
        });
    }).call(that);
}

var that = this;