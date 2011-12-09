var nash = require("../src/nash");
var curl = nash.curl;
var ls = nash.ls;

curl("http://localhost:5984/_all_dbs").then(function(out) {
   console.log(out); 
});

ls("-al","./", function(dirs) {
    dirs = dirs.trim().split("\n");
    console.log(JSON.stringify(dirs));
});

nash.ps().then(function(processes) {
    console.log(processes);
})