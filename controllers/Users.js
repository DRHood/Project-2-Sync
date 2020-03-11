const express = require('express');
const userRouter = express.Router();

// REQUIREMENTS
const User = require('../models/User.js');

// INDEX
// users/index.hbs 
userRouter.get('/', (req, res) => {
  User.find().then(users => {
      console.log(users);
      res.render('users/index', { users });
  });
});

// NEW
userRouter.get('/new', (req, res) => {
    res.render('users/createProfile');
});

// SHOW PROFILE
// single user profile page
userRouter.get('/:id', (req, res) => {
User.findById(req.params.id).then(user => {
    res.render('users/profile', { user });
    });
});

// CREATE
// creates a new User, redirect to new user profile
userRouter.post('/', (req, res) => {
    User.create(req.body).then(() =>{
        res.redirect('/');
    });
});

// EDIT
//GET edit route "/:id/edit" that renders edit.hbs and sends it a user's data
userRouter.get('/:id/edit', (req, res) => {
    let user = null;
    User.findById(req.params.id).then(foundUser => {
        user = foundUser;
        res.render('users/editProfile', { user });
    }).catch(e => {
        console.log(e);
    });
});

// UPDATE
// Update route "/:id" that updates the user and redirects to the profile
userRouter.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then(user => {
        res.redirect('/' + user.id);
    });
});

// Delete route "/:id" that deletes profile and redirects to index page "/"
userRouter.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});

module.exports = userRouter;
