var express = require("express");
var http = require("http");
var https = require("https");
var app = express();
var server = http.createServer(app).listen(3000);
var io = require("socket.io")(server);
var PythonShell = require('python-shell');

var options = {
    args: ['value1']
};

PythonShell.run('scripts/hello.py', options, function(err, results) {
    if (err) throw err;
    io.on("connection", function(socket) {
        socket.emit("print", results);
    });
    console.log('results: %j', results);
});

app.use(express.static("./public"));
console.log("server running on port 3000");
