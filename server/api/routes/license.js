const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const fs = require('fs');
const path = require('path');
let db = require('../../db/index');
const { License } = require('../../db/index');
const { MongoClient } = require('mongodb'); 

const mongoose = require('mongoose');

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

router.get('/', (req, res)=>{
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
});

router.get('/:id', (req, res)=>{
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
});

router.post('/', (req, res)=>{
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
        console.log(chalk.green('success'))
        MongoClient.connect(`mongodb://localhost:27017/${doc.licence}`, {
            useUnifiedTopology: true
        }, (err, dbr) =>{
            const dbc = dbr.db(doc.licence);
            dbc.createCollection('newCollection');
            res.status(201).json({
                doc
            });
        });
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
});

router.patch('/:id', (req, res)=>{
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
});

router.delete('/:id', (req, res)=>{
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
});


module.exports = router;