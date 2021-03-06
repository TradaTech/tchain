exports.getRunner = mode => (mode === 2 ? require('./wasm') : require('./js')(mode));
exports.getContext = mode => require(mode === 2 ? "./wasm/Context" : "./js/Context");
exports.getGuard = mode => (mode === 2 ? void 0 : (require('./js/guard')(mode)));