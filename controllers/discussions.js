const express = require('express');
const discussionRouter = express.Router();

// REQUIREMENTS
const Discussion = require('../models/Discussion.js');

// INDEX
// discussions/index.hbs 
discussionRouter.get('/', (req, res) => {
  Discussion.find().then(discussions => {
      console.log(discussions);
      res.render('discussions/index', { discussions });
  });
});

// NEW
// new.hbs form
discussionRouter.get('/new', (req, res) => {
    res.render('discussions/createDiscussion');
});

// SHOW DISCUSSION
// single discussion page
discussionRouter.get('/:id', (req, res) => {
Discussion.findById(req.params.id).populate('comment').then(discussion => {
    console.log(discussion)
    res.render('discussions/discussion', { discussion });
    });
});

// CREATE
// creates a new discussion, redirect to new discussion
discussionRouter.post('/', (req, res) => {
    Discussion.create(req.body).then(() =>{
        res.redirect('/discussions/:id');
    });
});

// UPDATE
// Update route "/:id" that updates the discussion and redirects to the discussion
discussionRouter.put('/:id', (req, res) => {
    Discussion.findByIdAndUpdate(req.params.id, req.body).then(discussion => {
        res.redirect('/discussions/' + discussion.id);
    }).catch((err) => {
        console.log(err)
    })
});

// Delete route "/:id" that deletes discussion and redirects to index page "/"
discussionRouter.delete('/:id', (req, res) => {
    Discussion.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});

module.exports = discussionRouter;
