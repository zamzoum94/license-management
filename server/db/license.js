
module.exports = function(mongoose){
    const licenseSchema = new mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId,
        name : String,
        price : Number
    });

    return mongoose.model('License', licenseSchema);
}