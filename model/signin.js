const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const SIGNIN_Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mno: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique : true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const SIGNIN = mongoose.model('signin', SIGNIN_Schema)
module.exports = SIGNIN;