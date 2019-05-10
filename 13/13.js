/**
 * EXERCISE 13
 * HTT JSON API SERVER
 * 
 * Write an HTTP server that serves JSON data when it receives a GET request
 * to the path '/api/parsetime'. Expect the request to contain a query string
 * with a key 'iso' and an ISO-format time as the value.
 *
 * For example:
 *
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 *
 * The JSON response should contain only 'hour', 'minute' and 'second'
 * properties. For example:
 *
 *    {
 *      "hour": 14,
 *      "minute": 23,
 *      "second": 15
 *    }
 *
 * Add second endpoint for the path '/api/unixtime' which accepts the same
 * query string but returns UNIX epoch time in milliseconds (the number of
 * milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 * For example:
 *
 *    { "unixtime": 1376136615474 }
 *
 * Your server should listen on the port provided by the first argument to
 * your program.
 */
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true)    
    const d = new Date(reqUrl.query.iso)
    let data;

    // Route the request
    if (reqUrl.pathname === '/api/parsetime') {
        data = {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds(),
        }
    }

    if (reqUrl.pathname === '/api/unixtime') {
        data = {
            unixtime: d.getTime()
        }
    }

    if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))
