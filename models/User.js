const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName: {
        type: String,
        required: true,
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
        default: "https://cicloposse.com/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png",
    },
    occupation: {
        type: String,
        default: "undisclosed",
    },
    specializations: Array,
    skills: Array,
});

module.exports = mongoose.model('User', User);
