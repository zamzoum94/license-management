const mongoose = require('mongoose');
const chalk = require('chalk');

module.exports.createDataBase = function(id){
    mongoose.connection.close(() => {
        mongoose.connect(`mongodb://localhost:27017/licence${id.licence}`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    });
}