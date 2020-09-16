const mongoose = require('mongoose');

module.exports = function(id) {
    return {
        Connection : require('./connect')(id),
        License : require('./license')(mongoose)
    }
}

