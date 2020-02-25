const mongoose = require('../db/connection.js')

const ProjectSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  info: String,
  collaborators: [],
  images: [],
  linkedResources: [],
  attachedFiles: [],
  due: {
      type: Date,
      required: true,
  },
  discussion: [],
});

module.exports = mongoose.model('Project', ProjectSchema);
