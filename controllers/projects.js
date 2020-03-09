const express = require('express');
const projectRouter = express.Router();

// REQUIREMENTS
const Project = require('../models/Project.js');

// INDEX
// projects/index.hbs 
projectRouter.get('/', (req, res) => {
  Project.find().then(projects => {
      console.log(projects);
      res.render('projects/index', { projects });
  });
});

// NEW
// new.hbs form
projectRouter.get('/new', (req, res) => {
    res.render('projects/createProject');
});

// SHOW PROJECT
// single project project page
projectRouter.get('/:id', (req, res) => {
Project.findById(req.params.id).then(project => {
    res.render('projects/project', { project });
    }).catch((e)=> {
        console.log(e)
    })
});

// CREATE
// creates a new Project, redirect to new project
projectRouter.post('/', (req, res) => {
    Project.create(req.body).then(() =>{
        res.redirect('/projects');
    });
});

// EDIT
//GET edit route "/:id/edit" that renders edit.hbs and sends it a project's data
projectRouter.get('/:id/edit', (req, res) => {
    let project = null;
    Project.findById(req.params.id).then(foundProject => {
        project = foundProject;
        res.render('projects/editProject', { project });
    }).catch(e => {
        console.log(e);
    });
});

// UPDATE
// Update route "/:id" that updates the project and redirects to the project
projectRouter.put('/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body).then(project => {
        res.redirect('/projects/' + project.id);
    }).catch(e => {
        console.log(e);
    });
});

// Delete route "/:id" that deletes project and redirects to index page "/"
projectRouter.delete('/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/');
    });
});

module.exports = projectRouter;
