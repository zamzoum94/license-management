const chalk = require("chalk");

module.exports = function(mongoose){
    const licenseSchema = new mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId,
        enseigne : String,
        siret : String,
        paye : String,
        ville : String,
        adresse : String,
        code_postal : String,
        telephone : String, 
        licence : String,
        code_licence : String,
        etat : String,
        site : String
    });

    return mongoose.model('License', licenseSchema);
}