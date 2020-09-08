const express = require('express');

const router = express.Router();

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
    db.License.find({_id : id})
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
    const { name, price } = req.body;
    const user = new db.License({
        _id : new mongoose.Types.ObjectId(),
        name,
        price
    });
    user.save()
    .then(doc => {
        res.status(201).json({
            message : 'post works',
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

router.patch('/:id', (req, res)=>{
    const { name, price } = req.body;
    const { id } = req.params;
    db.License.updateOne({_id : id}, {$set : {name : name, price : price}})
    .exec()
    .then(doc =>{
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
    db.License.deleteOne({_id : id})
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