
const express= require('express');

const app= express();
require('./config/express')(app, __dirname);
const sequleize= require('./config/db')();


// Models
const db= { models: {}, sequleize };
db.models.User= require('./models/User')(sequleize);
db.models.Page= require('./models/Page')(sequleize);
db.models.Category= require('./models/Category')(sequleize);

db.models.Category.hasOne(db.models.Page, { foreignKey: 'categoryId' });
db.models.Page.belongsTo(db.models.Category);







// Controllers
const IndexCtrl= require('./controllers/IndexController');
const UsersCtrl= require('./controllers/UsersController');
const ReviewsCtrl= require('./controllers/ReviewsController');

const indexController= new IndexCtrl(app, db);
const usersController= new UsersCtrl(app, db);
const reviewsController= new ReviewsCtrl(app, db);



// Routes

app.get('/', (req, res, next) => indexController.home(req, res, next));

app.get('/user', (req, res, next) => usersController.profile(req, res, next));
app.get('/user/:user_id', (req, res, next) => usersController.profile(req, res, next));

app.get('/:category?/:subject?', (req, res, next) => reviewsController.page(req, res, next));



module.exports= app;
