const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RGALLERY_Schema = new Schema({
    image: {
        type: String,
        required: true
    },
});

const RGALLERY = mongoose.model('rgallery', RGALLERY_Schema)
module.exports = RGALLERY;