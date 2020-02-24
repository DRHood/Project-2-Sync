const mongoose = require('../db/connection.js')


const UserSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Template', UserSchema);
