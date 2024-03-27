var express = require('express');
var router = express.Router();
var CONTACT = require("../model/contact");
var jwt = require('jsonwebtoken');

//Create
router.post('/add', async function (req, res, next) {
    // req.body.token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const datas = await CONTACT.create(req.body);
    console.log(datas);
    try {
        if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            throw new Error("Data Did Not Match!")
        }
        res.status(201).json({
            status: "Data Successfully added!",
            message: "Success",
            data: datas
        })
    } catch (error) {
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        })
    }
});

//Find 
router.get('/view', async function (req, res, next) {
    const datas = await CONTACT.find();
    // var decoded = jwt.verify(req.body.token, 'shhhhh');
    // console.log(decoded.foo)
    console.log(datas);
    try {
        res.status(200).json({
            status: "Data Successfully view!",
            message: "Success",
            data: datas
        })
    } catch (error) {
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        })
    }
});

//Update 
router.put('/update/:id', async function (req, res, next) {
    id = req.params.id
    u_data = req.body
    const datas = await CONTACT.findByIdAndUpdate(id, u_data);
    console.log(datas);
    try {
        if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            throw new Error("Data Did Not Match!")
        }
        res.status(201).json({
            status: "Data Successfully updated!",
            message: "Success",
            data: datas
        })
    } catch (error) {
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        })
    }
});

//FindById 
router.get('/show/:id', async function (req, res, next) {
    id = req.params.id
    const datas = await CONTACT.findById(id);
    console.log(datas);
    try {
        res.status(201).json({
            status: "Data Successfully Find!",
            message: "Success",
            data: datas
        })
    } catch (error) {
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        })
    }
});

//Delete 
router.delete('/delete/:id', async function (req, res, next) {
    id = req.params.id
    u_data = req.body
    const datas = await CONTACT.findByIdAndDelete(id, u_data);
    console.log(datas);
    try {
        if (!req.body.name || !req.body.email || !req.body.subject || !req.body.message) {
            throw new Error("Data Did Not Match!")
        }
        res.status(201).json({
            status: "Data Successfully deleted!",
            message: "Success",
            data: datas
        })
    } catch (error) {
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        })
    }
});


module.exports = router;