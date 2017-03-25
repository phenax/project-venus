
const express= require('express');

const app= express();
require('./config/express')(app, __dirname);
const sequleize= require('./config/db')();

// Models
const models= {};
models.User= require('./models/User')(sequleize);

app.set('models', models);

// require('')


// Controllers
const IndexCtrl= require('./controllers/IndexController');
const UsersCtrl= require('./controllers/UsersController');
const ReviewsCtrl= require('./controllers/ReviewsController');

const indexController= new IndexCtrl(app);
const usersController= new UsersCtrl(app);
const reviewsController= new ReviewsCtrl(app);



// Routes

app.get('/', indexController.home);

app.get('/user', usersController.profile);
app.get('/user/:user_id', usersController.profile);

app.get('/:category?/:subject?', reviewsController.page);



module.exports= app;
