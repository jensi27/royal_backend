const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const CHOOSERS_Schema = new Schema({
    no: {
        type: Number,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    
});

const CHOOSERS = mongoose.model('choosers',CHOOSERS_Schema)
module.exports=CHOOSERS;