
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

// Middleware to redirect if the user isnt logged in
const isLoggedIn=
	(req, res, next) => (req.isAuthenticated())?  next(): res.redirect('/');


app.get('/', indexController.home);

app.get('/auth/google', usersController.authenticate);
app.get('/auth/google/callback', usersController.authCallback, usersController.redirect);

app.get('/me', isLoggedIn, usersController.profile);
app.get('/user/:user_id', usersController.profile);
app.get('/logout', usersController.logout);

app.get('/:category?/:subject?', reviewsController.page);
app.get('/api/pages/search', reviewsController.search);




// Error handlers

// If err, next err
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development') {
	app.use(function(err, req, res) {
		res.status(err.status || 500);
		res.render('ErrorPage', {
			message: err.message,
			error: err
		});
	});
}


module.exports= app;
