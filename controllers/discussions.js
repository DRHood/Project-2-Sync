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
// single discussion discussion page
discussionRouter.get('discussions/:id', (req, res) => {
Discussion.findById(req.params.id).then(discussion => {
    res.render('discussions/discussion', { discussion });
    });
});

// CREATE
// creates a new Discussion, redirect to new discussion
discussionRouter.post('/', (req, res) => {
    Discussion.create(req.body).then(() =>{
        res.redirect('/discussions');
    });
});

// EDIT
//GET edit route "/:id/edit" that renders edit.hbs and sends it a discussion's data
discussionRouter.get('/:id/edit', (req, res) => {
    let discussion = null;
    Discussion.findById(req.params.id).then(foundDiscussion => {
        discussion = foundDiscussion;
        res.render('discussions/editDiscussions', { discussion });
    }).catch(e => {
        console.log(e);
    });
});

// UPDATE
// Update route "/:id" that updates the discussion and redirects to the discussion
discussionRouter.put('/:id', (req, res) => {
    Discussion.findByIdAndUpdate(req.params.id, req.body).then(discussion => {
        res.redirect('/' + discussion.id);
    });
});

// Delete route "/:id" that deletes discussion and redirects to index page "/"
discussionRouter.delete('/:id', (req, res) => {
    Discussion.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});

module.exports = discussionRouter;
