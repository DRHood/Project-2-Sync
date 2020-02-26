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

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Discussion', Discussion);
