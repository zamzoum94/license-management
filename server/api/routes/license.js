const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const fs = require('fs');
const PATH = 'http://localhost:3000/afnor';
const path = require('path');

const db = require('../../db/index');
const mongoose = require('mongoose');

router.get('/', (req, res)=>{
    db.License.find().exec()
    .then(doc => {
        res.status(200).json({
            message : doc.length > 0 ? 'get works' : 'not found',
            body : doc
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
    db.License.findById(id)
    .exec()
    .then(doc => {
        res.status(200).json({
            message :  doc.length > 0 ? 'get works' : 'not found',
            body : doc
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
    const user = new db.License({
        _id : new mongoose.Types.ObjectId(),
        ...req.body
    });

    user.save()
    .then(doc => {
            fs.writeFile(`afnor/${doc._id}.txt`, JSON.stringify(doc), 'utf8', (err) =>{
                if(err) throw err
                res.status(201).json({
                    message : 'post works',
                    body : doc
                });
            })
    })
    .catch(err => {
        res.status(500).json({
            message : 'Error',
            body : err
        });
    })
});

router.patch('/:id', (req, res)=>{
    console.log(req.body)
    console.log(chalk.blue('Hi'))
    const { id } = req.params;
    db.License.updateOne({_id : id}, {$set : { ...req.body}})
    .exec()
    .then(doc =>{
        console.log('done')
        res.status(200).json({
            message : 'Update works',
            body : doc
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
    db.License.deleteOne({ _id : id})
    .exec()
    .then(doc =>{
        res.status(200).json({
            message : 'delete done',
            body : doc
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