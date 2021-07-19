const http = require('http')
const os = require('os')
const greeting = require('./greeting')

http.createServer(function (request, response) {
    response.end('Hello NodeJS!')
}).listen(3000, '127.0.0.1', function () {
    console.log('The server started listening for requests on port 3000')
})

// Get the name of the current user
let userName = os.userInfo().username

console.log(`Date of the inquiry: ${greeting.date}`)
console.log(greeting.getMessage(userName))