var Proxy = require("node-proxy"),
    xeq = require("child_process").exec,
    q = require("q");


module.exports = NashCommand;

function NashCommand(cmd, args, options) {
    this.command = cmd;
    this.args = args || [];
    this.options = options || {};

    this.options.async = this.options.async || true;
}

NashCommand.prototype.exec = function() {
    var def = q.defer();
    xeq(this.command + " " + this.args.join(" "), {
        cwd: this.options.cwd || __dirname
    }, function(err, stdout, stderr) {
        if (err) {
            def.reject(stderr);
        } else {
            def.resolve(stdout)
        };
    });
    return def.promise;
};