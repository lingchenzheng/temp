const path = require('path')

exports.resolve = function() {
    return path.resolve(__dirname, '..', ...arguments)
}
