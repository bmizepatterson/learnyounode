const fs = require('fs')
const path = require('path')

module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (err, list) => {
        if (err) return callback(err)
        callback(null, list.filter(file => path.extname(file).substring(1) === extension))
    })
}