const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://user:user123@firstproject.ojd2r.mongodb.net/firstProject?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

module.exports = {
    License : require('./license')(mongoose)
}