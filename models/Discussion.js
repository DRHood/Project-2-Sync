const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Discussion = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateCreated: Date.now,
  comment: String,
});

module.exports = mongoose.model('Discussion', Discussion);
