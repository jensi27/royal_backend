const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const ROOM_Schema = new Schema({
  image:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
    trim:true
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
  description:{
    type:String,
    required:true,
    trim:true
  }
});

const ROOM=mongoose.model('room',ROOM_Schema)
module.exports=ROOM;