const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String,
        equired: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthDate: Date,
    img: {
        type: String,
        default: "../../public/img/blank-profile-picture.png",
    },
    occupation: {
        type: String,
        default: "undisclosed",
    },
    specializations: [],
    skills: [],
});

module.exports = mongoose.model('User', User);
