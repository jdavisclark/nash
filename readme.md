#nash
nash is an easy to work with abstraction of the node child_process module. 
Not all the features are available yet, but its coming along. 

## why use it
Nash has an extremely flexible syntax that supports callback functions and promises. If your applicatation needs to use
a library that has a command line executable but no native node bindings, nash makes it really easy to fire off child 
process commands (node bindings are always the best idea if its an option).

## contrived examples

```javascript
var nash = require("nash");

//fire up an ssh tunnel
nash.ssh("-L", "5985:127.0.0.1:5984", "yourcouchdbserver.com", "-N").then(function() {
  console.log("connection terminated!");
});


//use curl for some reason
nash.curl("http://www.google.com", function(output) {
  //do stuff with html
}); 


//get some process ids
nash("ps", "-U", "someuser", "-o", "pid").then(function(output) {
  var pids = output.split("\n").slice(1);
});

//wget a file
var wgettotmp = nash["cd /tmp && wget"];
wgettotmp("http://www.google.com").then(function(){});

```

## license
Copyright (c) 2011 Davis Clark

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



