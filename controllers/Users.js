const express = require('express');
const userRouter = express.Router();

const User = require('../models/User.js');

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// create GET index route that sends all Users to users/index.hbs 
userRouter.get('/', (req, res) => {
  User.find().then(users => {
      console.log(users);
      res.render('users/index', { users });
  });
});
// Create GET new route that renders new.hbs form
userRouter.get('/new', (req, res) => {
    res.render('users/new');
});

// create GET profile route that renders single user profile page
userRouter.get('/:id', (req, res) => {
    res.render('users/profile', { user });
});

// create a POST index route that creates a new User, and redirects to new user profile page
userRouter.post('/', (req, res) => {
    User.create(req.body).then((user) =>{
        console.log(user);
    });
});

module.exports = userRouter;
