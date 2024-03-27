const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const VIEWROOM_Schema = new Schema({
  image:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
    trim:true
  },
  bed:{
    type:Number,
    required:true,
    trim:true
  },
  bath:{
    type:Number,
    required:true,
    trim:true
  },
  price:{
    type:Number,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    trim:true
  },
  room_ref:{
    type:Schema.Types.ObjectId,
    ref:"room",
    require : true,
  },
});

const VIEWROOM = mongoose.model('viewroom',VIEWROOM_Schema)
module.exports = VIEWROOM;