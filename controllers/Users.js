const express = require('express');
const userRouter = express.Router();

const User = require('../models/User.js');

// create GET index route that sends all Users to users/index.hbs 
userRouter.get('/', (req, res) => {
  User.find().then(users => {
      console.log(users);
      res.render('users/index', { users });
  });
});

// Create GET new route that renders new.hbs form
userRouter.get('/new', (req, res) => {
    res.render('users/createProfile');
});

// create GET profile route that renders single user profile page
userRouter.get('/:id', (req, res) => {
User.findById(req.params.id).then((user) => {
    res.render('users/profile', { user });
    });
});

// create a POST index route that creates a new User, and redirects to new user profile page
userRouter.post('/', (req, res) => {
    User.create(req.body).then((user) =>{
        console.log(user);
    });
});

module.exports = userRouter;
