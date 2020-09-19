const mongoose = require('mongoose');

module.exports.connect = (req, res, next) => {
    mongoose.connection.close()
    .then(() => {
        mongoose.connect(`mongodb://localhost:27017/licences`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        next();
    })
}