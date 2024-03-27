
var express = require('express');
var router = express.Router();
var CHOOSERS = require("../model/choosers");

// create
router.post('/add', function(req, res, next) {
    try{
        if(!req.body.no || !req.body.title || !req.body.description){
            throw new Error("Data Did not match")
        }
        const datas = CHOOSERS.create(req.body);
        console.log(datas);
        res.status(201).json({
            status : "Success",
            message : "Data Successfully added !!!",
            data : datas
        })
    }
    catch(error){
        res.status(404).json({
            status :"No Data Found",
            message : error.message
        })
    }
  });

//Find 
router.get('/view', async function (req, res, next) {
    const datas = await CHOOSERS.find();
    console.log(datas);
    try {
        res.status(201).json({
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
    const datas = await CHOOSERS.findByIdAndUpdate(id, u_data);
    console.log(datas);
    try {
        if (!req.body.no || !req.body.title || !req.body.description) {
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

//FingById 
router.get('/show/:id', async function (req, res, next) {
    id = req.params.id
    const datas = await CHOOSERS.findById(id);
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
    const datas = await CHOOSERS.findByIdAndDelete(id, u_data);
    console.log(datas);
    try {
        if (!req.body.no || !req.body.title || !req.body.description) {
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
