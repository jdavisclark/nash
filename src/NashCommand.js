var cp = require("child_process"),
    spawn = cp.spawn,
    xeq = cp.exec,
    q = require("q");

module.exports = NashCommand;

function NashCommand(cmd, args, options) {
    this.command = cmd;
    this.args = args || [];
    this.options = options || {};
}

NashCommand.prototype.commandString = function() {
    return this.command + " " + this.args.join(" ");
};

NashCommand.prototype.spawn = function() {
    return spawn(this.command, this.args);
}

NashCommand.prototype.commandString = function() {
    return this.command + " " + this.args.join(" ");
}

NashCommand.prototype.exec = function() {
    var self = this;
    var def = !!this.options.callback || q.defer();
    xeq(this.commandString(), {
        cwd: this.options.cwd || __dirname
    }, function(err, stdout, stderr) {
        if (err) {
            self.options.callback ? self.options.callback(stderr, true) : def.reject(stderr);
        } else {
            self.options.callback ? self.options.callback(stdout) : def.resolve(stdout);
        };
    });
    return !!this.options.callback || def.promise;
};
