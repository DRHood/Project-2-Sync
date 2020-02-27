const express = require('express');
const syncRouter = express.Router();

// Import the api files from the models
const User = require('../models/User.js');
const Project = require('../models/Project.js');

/* Step 4
 * 
 * TODO: Put all request handlers here
 */
syncRouter.get('/', (req, res) => {
  res.redirect('/index');
});

module.exports = syncRouter;
