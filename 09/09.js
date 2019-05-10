/**
 * EXERCISE 09
 * JUGGLING ASYNC
 * 
 * This problem is the same as the previous problem (HTTP COLLECT) in that
 * you need to use http.get(). However, this time you will be provided with
 * three URLs as the first three command-line arguments.
 *
 * You must collect the complete content provided to you by each of the URLs
 * and print it to the console (stdout). You don't need to print out the
 * length, just the data as a String; one line per URL. The catch is that you
 * must print them out in the same order as the URLs are provided to you as
 * command-line arguments.
 */
const http = require('http')
const Results = require('./results')

const urls = process.argv.slice(2)
const results = new Results(urls.length, queue => queue.forEach(item => console.log(item)))

for (const [index, url] of urls.entries()) {
    http.get(url, response => {
        response.setEncoding('utf8')
        response.on('error', console.error)

        let payload = '';
        response.on('data', data => payload += data)
        response.on('end', () => results.add(index, payload))
    }).on('error', console.error)
}