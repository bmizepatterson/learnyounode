/**
 * EXERCISE 08
 * HTTP COLLECT
 * 
 * Write a program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Collect all data from the server (not
 * just the first "data" event) and then write two lines to the console
 * (stdout).
 *
 * The first line you write should just be an integer representing the number
 * of characters received from the server. The second line should contain the
 * complete String of characters sent by the server.
 */
const http = require('http')

http.get(process.argv[2], response => {
    response.setEncoding('utf8')
    response.on('error', console.error)

    let payload = '';
    response.on('data', data => payload += data)
    response.on('end', () => {
        console.log(payload.length)
        console.log(payload)
    })
}).on('error', console.error)