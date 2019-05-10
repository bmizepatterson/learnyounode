/**
 * EXERICSE 10
 * TIME SERVER
 * 
 * Write a TCP time server!
 *
 * Your server should listen to TCP connections on the port provided by the
 * first argument to your program. For each connection you must write the
 * current date & 24 hour time in the format:
 *
 *    "YYYY-MM-DD hh:mm"
 *
 * followed by a newline character. Month, day, hour and minute must be
 * zero-filled to 2 integers. For example:
 *
 *    "2013-07-06 17:42"
 *
 * After sending the string, close the connection.
 */
const net = require('net')

const server = net.createServer(socket => {
    const date = new Date
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const dateString = `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`
    socket.end(dateString)
})
server.listen(process.argv[2])