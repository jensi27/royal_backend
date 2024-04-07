var express = require('express');
var router = express.Router();
var BOOKING = require("../model/booking");
// var jwt = require("jsonwebtoken");

//Create
router.post('/add', async function (req, res, next) {

    try {
        if (!req.body.name || !req.body.email || !req.body.checkin || !req.body.checkout || !req.body.adultno || !req.body.childno || !req.body.room || !req.body.message) {
            throw new Error("Data Did Not Match!")
        }
        // req.body.token = jwt.sign({ foo: 'bar' }, 'shhhhh')
        const datas = await BOOKING.create(req.body);
        // console.log(datas);

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
    const datas = await BOOKING.find();
    // console.log(datas);
    // var decoded = jwt.verify(req.body.token, 'shhhhh')
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
    const datas = await BOOKING.findByIdAndUpdate(id, u_data);
    // console.log(datas);
    try {
        if (!req.body.name || !req.body.email || !req.body.checkin || !req.body.checkout || !req.body.adultno || !req.body.childno || !req.body.room || !req.body.message) {
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
    const datas = await BOOKING.findById(id);
    // console.log(datas);
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
    const datas = await BOOKING.findByIdAndDelete(id, u_data);
    // console.log(datas);
    try {
        if (!req.body.name || !req.body.email || !req.body.checkin || !req.body.checkout || !req.body.adultno || !req.body.childno || !req.body.room || !req.body.message) {
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