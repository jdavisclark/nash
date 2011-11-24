var nash = require("../src/nash");

nash.ls("-a", "-l").exec().then(function(out) {
	console.log(out);
});

nash.curl("http://google.com").exec().then(function(html) {
	console.log(html.length);
});
