
const express= require('express');

const app= express();
require('./config/express')(app, __dirname);
const sequleize= require('./config/db')();


// Models
const db= { models: {}, sequleize };
db.models.User= require('./models/User')(sequleize);
db.models.Page= require('./models/Page')(sequleize);
db.models.Review= require('./models/Review')(sequleize);
db.models.Category= require('./models/Category')(sequleize);


// Models Relations
db.models.Category.hasOne(db.models.Page, { foreignKey: 'categoryId' });

db.models.Page.belongsTo(db.models.Category);
db.models.Review.belongsTo(db.models.Page);

db.models.Page.hasMany(db.models.Review, { foreignKey: 'pageId' });
db.models.User.hasOne(db.models.Review, { foreignKey: 'userId' });

db.models.Review.belongsTo(db.models.User);




// OAuth config

require('./config/auth/passport')(db);





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

app.get('/auth/google', (req, res, next) => usersController.authenticate(req, res, next));
app.get(
	'/auth/google/callback',
	(req, res, next) => usersController.authCallback(req, res, next),
	(_, res) => res.redirect('/')
);

app.get('/:category?/:subject?', (req, res, next) => reviewsController.page(req, res, next));



module.exports= app;
