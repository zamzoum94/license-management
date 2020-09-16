const mongoose = require('mongoose');
const chalk = require('chalk');

module.exports = function(id){
        console.log(chalk.blue(id));
        const db = mongoose.connect(`mongodb://localhost:27017/licencemanagement${id}`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
}