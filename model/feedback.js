const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FEEDBACK_Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  profession: {
    type: String,
    required: true,
    trim: true
  },
});

const FEEDBACk = mongoose.model('feedback', FEEDBACK_Schema)
module.exports = FEEDBACk;