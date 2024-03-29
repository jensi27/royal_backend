var express = require('express');
var router = express.Router();
var SIGNIN = require("../model/signin");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "hensivaghasiya05@gmail.com",
        pass: "jkgpijcrztphimuo",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: "hensivaghasiya05@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Login Successfully!!!", // Subject line
        text: "Welcome to our hotel.", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}

main().catch(console.error);

//Sign up
router.post('/add', async function (req, res, next) {
    try {
        if (!req.body.name ||  !req.body.mno || !req.body.email || !req.body.password) {
            throw new Error("Data Did Not Match!")
        }
        req.body.password = await bcrypt.hash(req.body.password, 8);
        const datas = await SIGNIN.create(req.body);
        // console.log(datas);
        main(datas.email);
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

//Login
router.post('/login', async function (req, res, next) {
    try {
        const datas = await SIGNIN.findOne({ email: req.body.email })
        if(!datas){
            throw new Error("enter valid email id")
        }
        // console.log(datas);
        const check = await bcrypt.compare(req.body.password, datas.password);
        if (!check) {
            throw new Error("Enter Valid Password");
        }

        const admintoken = jwt.sign({ id: datas._id }, 'SURAT');

        res.status(200).json({
            status: "Successfully Login!",
            message: "Success",
            data: datas,
            admintoken
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
    try {
        // if (!req.body.name || !req.body.mno || !req.body.email || !req.body.password) {
        //     throw new Error("Data Did Not Match!")
        // }
        req.body.password = await bcrypt.hash(req.body.password, 8);
        id = req.params.id
        u_data = req.body
        const datas = await SIGNIN.findByIdAndUpdate(id, u_data);
        console.log(datas);
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

//Delete
router.delete('/delete/:id', async function (req, res, next) {
    id = req.params.id
    u_data = req.body
    const datas = await SIGNIN.findByIdAndDelete(id, u_data);
    console.log(datas);
    try {
        if (!req.body.name || !req.body.mno || !req.body.email || !req.body.password) {
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

//Forget Password
router.post("/forgetpass", async function (req, res, next) {
    try {
      // if (!req.body.email || !req.body.mno) {
      //   throw new Error("Data didn't match!!");
      // }
      const datas = await SIGNIN.findOne({ email: req.body.email });
      // const contactno = datas.mno;
      if (!datas) {
        throw new Error("Email is not valid!!");
      }
      if(datas.mno!==req.body.mno){
        throw new Error("Contact no is not valid!!");
      }
  
      res.status(200).json({
        status: "Data Successfully find!",
        message: "Success",
        data: datas,
      });
    } catch (error) {
      res.status(404).json({
        status: "No Data Found",
        message: error.message,
      });
    }
  });

module.exports = router;