var express = require('express');
var router = express.Router();
var GALLERY = require("../model/gallery");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

//Create
router.post('/add', upload.single("image"), async function (req, res, next) {
    try {
        if (!req.file || !req.body.category) {
            throw new Error("Data Did Not Match!")
        }
        req.body.image = req.file.filename;
        const datas = await GALLERY.create(req.body);
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
    const datas = await GALLERY.find();
    // console.log(datas);
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
router.put('/update/:id', upload.single("image"), async function (req, res, next) {
    try {
        if (!req.file || !req.body.category) {
            throw new Error("Data Did Not Match!");
        }
        req.body.image = req.file.filename;
        id = req.params.id
        u_data = req.body
        const datas = await GALLERY.findByIdAndUpdate(id, u_data);
        // console.log(datas);
        res.status(201).json({
            status: "Data Successfully updated!",
            message: "Success",
            data: datas,
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        });
    }
});

//FindById
router.get('/show/:id', upload.single("image"), async function (req, res, next) {
    try {
        id = req.params.id
        const datas = await GALLERY.findById(id);
        // console.log(datas);
        res.status(201).json({
            status: "Data Successfully Find!",
            message: "Success",
            data: datas,
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({
            status: "No Data Found",
            message: error.message
        });
    }
});

//Delete
router.delete('/delete/:id', async function (req, res, next) {
    id = req.params.id
    u_data = req.body
    const datas = await GALLERY.findByIdAndDelete(id, u_data);
    // console.log(datas);
    try {
        if (!req.body.image) {
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