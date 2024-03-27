const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BOOKING_Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    checkin: {
        type: Date,
        required: true,
        trim: true
    },
    checkout: {
        type: Date,
        required: true,
        trim: true
    },
    adultno: {
        type: Number,
        required: true,
        trim: true
    },
    childno: {
        type: Number,
        required: true,
        trim: true
    },
    room: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
});

const BOOKING = mongoose.model('booking', BOOKING_Schema)
module.exports = BOOKING;