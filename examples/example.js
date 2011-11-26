var nash = require("../src/nash");

nash.curl("http://google.com", function(html) {
	console.log(html.trim());
}).exec();

nash.curl("http://google.com").exec().then(function(output) {
	
});