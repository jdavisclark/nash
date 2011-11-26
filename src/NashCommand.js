var xeq = require("child_process").exec,
    q = require("q");

module.exports = NashCommand;

function NashCommand(cmd, args, options) {
    this.command = cmd;
    this.args = args || [];
    this.options = options || {};
    this.options.async = !!this.options.async;
}

NashCommand.prototype.exec = function() {
    var self = this;
    var def = !!this.options.callback || q.defer();
    xeq(this.command + " " + this.args.join(" "), {
        cwd: this.options.cwd || __dirname
    }, function(err, stdout, stderr) {
        if (err) {
            self.options.callback ? self.options.callback(stderr, true) : def.reject(stderr);
        } else {
            self.options.callback ? self.options.callback(stdout) : def.resolve(stdout)
        };
    });
    return def.promise;
};