const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const MENU_Schema = new Schema({
    image:{
        type:String,
        required:true,
      },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
});

const MENU=mongoose.model('menu',MENU_Schema)
module.exports=MENU;