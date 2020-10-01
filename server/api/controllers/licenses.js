const db = require('../../db/index');
const fs = require('fs');
const mongoose = require('mongoose');
const nodeRsa = require('node-rsa');

const { MongoClient } = require('mongodb'); 
const { License }  = require('../../db');


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let generateString = function(){
    let str = "";  
    for(let i = 0; i < 12; ++i){
        let code = getRandomArbitrary(65, 90);
        str = str + String.fromCharCode(code);
    }
    return str;
}

let generateNumber = function(){
    let str = "";  
    for(let i = 0; i < 12; ++i){
        let code = getRandomArbitrary(48, 57);
        str = str + String.fromCharCode(code);
    }
    return str;
}



module.exports.getAllLicenses = (req, res)=>{
    License.find().exec()
    .then(doc => {
        res.status(200).json({
            doc
        });
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
}

module.exports.getOneLicense = (req, res)=> {
    const { id } = req.params;
    License.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json({
            doc
        });
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
}

module.exports.addLicense = (req, res)=>{
    const _id = new mongoose.Types.ObjectId();
    const licence = generateString();
    const code_licence = generateNumber();
    const user = new License({
        _id,
        licence,
        code_licence,
        ...req.body
    });

    user.save()
    .then(doc => {
        // Creating new database
        MongoClient.connect(`mongodb://localhost:27017/${doc.licence}`, {
            useUnifiedTopology: true
        }, (err, dbr) =>{
            // Generating public and public keys for encryption and decryption
            let key = new nodeRsa({b : 2048 });
            let keys = {
                public_key : key.exportKey('public'),
                private_key : key.exportKey('private')
            }
            // Inserting keys in 'keys' collection of the new database
            const dbc = dbr.db(doc.licence);
            dbc.createCollection('keys');
            dbc.collection('keys').insertOne(keys, (error, insert) =>{
                fs.mkdirSync(`afnor/db/${doc.licence}`);  
                fs.writeFileSync(`afnor/db/${doc.licence}/${doc.licence}.json`, JSON.stringify(keys))
                fs.writeFileSync(`afnor/db/${doc.licence}/keys.json`, JSON.stringify(doc))
                res.status(201).json({
                    doc
                });
            })
        });
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
}

module.exports.updateLicense = (req, res)=>{
    const { id } = req.params;
    License.updateOne({_id : id}, {$set : { ...req.body}})
    .exec()
    .then(doc =>{
        res.status(200).json({
            doc
        });
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
}

module.exports.deleteLicense = (req, res)=>{
    const { id } = req.params;
    License.deleteOne({ _id : id})
    .exec()
    .then(doc =>{
        res.status(200).json({ 
            doc
        })
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
}