var Proxy = require("node-proxy"),
    NashCommand = require("./NashCommand");

module.exports = Proxy.create({
    get: function(proxy, name) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var useCallback = args.length > 0 && (typeof args[args.length - 1]) === "function";
            
            return new NashCommand(name, useCallback ? args.slice(0, args.length - 1) : args, {
                callback: useCallback ? args[args.length - 1] : undefined
            });
        }
    }
});