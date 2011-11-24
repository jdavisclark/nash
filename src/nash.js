var Proxy = require("node-proxy"),
    NashCommand = require("./NashCommand");

module.exports = Proxy.create({
    get: function(proxy, name) {
        return function() {
        	var args = Array.prototype.slice.call(arguments);
        	return new NashCommand(name, args, {});
        }
    }
});