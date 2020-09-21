const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/licences`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
    
module.exports = {
    Connection : require('./connect'),
    License : require('./license')(mongoose)
}

