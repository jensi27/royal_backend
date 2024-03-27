const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const STAFF_Schema = new Schema({
  image: {
    type: String,
    required: true,
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
});

const STAFF = mongoose.model('staff', STAFF_Schema)
module.exports = STAFF;