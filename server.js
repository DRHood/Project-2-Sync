// REQUIREMENTS
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const logger = require('morgan')
const userRouter = require('./controllers/users.js');

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static(__dirname+"/public"));

app.set('view engine', 'hbs');

// logger provide xtra info in Node console about each request
app.use(logger('dev'));

// router for application to use, first argument is prefix to all paths defined in the router
app.use('/', userRouter);

// port the server to run on, NOTE: keep at the bottom of the file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App is listening on PORT ' + PORT);
});
