const http = require('http')
const os = require('os')
const greeting = require('./greeting')
const welcome = require('./welcome')

http.createServer(function (request, response) {
    response.end('Hello NodeJS!')
}).listen(3000, '127.0.0.1', function () {
    console.log('The server started listening for requests on port 3000')
})


// Passing parameters to the application (node app <name> <age>)
// let nodePath = process.argv[0]
// let appPath = process.argv[1]
// let name = process.argv[2]
// let age = process.argv[3]
// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log("name: " + name);
// console.log("age: " + age);