const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CHEF_Schema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    profession: {
        type: String,
        required: true,
        trim: true
    },
    // token : {
    //     type : String,
    //     required : true
    // }
});

const CHEF = mongoose.model('chef', CHEF_Schema)
module.exports = CHEF;