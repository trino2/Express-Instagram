// var module1 = require("./module1");
// var _ = require("underscore");

console.log("Testing ");

// var isValid = module1.validatePassword(5);

// console.log("is valid? " + isValid);

var http = require("http");

var server = http.createServer(function (request, response){
    console.log("RECEIVED A RESPONSE");
    response.write("huricane");
    response.end();
    
});
server.listen(8080);