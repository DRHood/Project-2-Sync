const express = require('express');
const userRouter = express.Router();

const User = require('../models/User.js');

// users/index.hbs 
userRouter.get('/', (req, res) => {
  User.find().then(users => {
      console.log(users);
      res.render('users/index', { users });
  });
});

// new.hbs form
userRouter.get('/new', (req, res) => {
    res.render('users/createProfile');
});

// single user profile page
userRouter.get('/:id', (req, res) => {
User.findById(req.params.id).then((user) => {
    res.render('users/profile', { user });
    });
});

// creates a new User, redirect to new user profile
userRouter.post('/', (req, res) => {
    User.create(req.body).then((user) =>{
        console.log(user);
        res.redirect('/');
    });
});

module.exports = userRouter;
