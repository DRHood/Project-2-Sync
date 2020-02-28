const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
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
    },
    email: {
        type: String,
        required: true,
    },
    birthDate: Date,
    // password: {
    //     type: String,
    //     required: true,
    // },s
    img: String,
    occupation: {
        type: String,
        default: "undisclosed",
    },
    specializations: [],
    skills: [],
});

module.exports = mongoose.model('User', User);
