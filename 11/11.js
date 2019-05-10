/**
 * EXERCISE 11
 * HTTP FILE SERVER
 * 
 * Write an HTTP server that serves the same text file for each request it
 * receives.
 *
 * Your server should listen on the port provided by the first argument to
 * your program.
 *
 * You will be provided with the location of the file to serve as the second
 * command-line argument. You must use the fs.createReadStream() method to
 * stream the file contents to the response.
 */
const fs = require('fs')
const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text-plain' })
    fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(Number(process.argv[2]))