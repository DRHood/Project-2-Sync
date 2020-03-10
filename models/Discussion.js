const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Comment = new Schema({
  user: {
    type: String,
    required: true,
  },
    dateCreated: Date,
    comment: String,
});

const Discussion = new Schema({
  topic: {
    type: String,
    required: true,
  },
  commentDate: Date,
  comments: [Comment],
});

module.exports = mongoose.model('Discussion', Discussion);
