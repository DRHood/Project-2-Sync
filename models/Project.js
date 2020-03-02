const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema;

const Project = new Schema({
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // },
    name: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    info: String,
    // collaborators: Array,
    // images: Array,
    linkedResources: Array,
    // attachedFiles: Array,
    due: {
        type: Date,
        required: true,
    },
    // discussion: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Discussion',
    // },
});

module.exports = mongoose.model('Project', Project);