
const express= require('express');

const path= require('path');
const logger= require('morgan');
const passport= require('passport');
const compress= require('compression');
const bodyParser= require('body-parser');
const session= require('express-session');
const cookieParser= require('cookie-parser');
const reactEngine= require('express-react-views');


module.exports= (app, dirname) => {

	app.use(compress());
	app.use(express.static(path.join(dirname, 'public')));

	app.set('views', path.join(dirname, 'views'));
	app.engine('js', reactEngine.createEngine());
	app.set('view engine', 'js');


	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(session({ secret: 'jgsjfsi8ywbc3' }));

	app.use(passport.initialize());
	app.use(passport.session());

	app.disable('x-powered-by');
	app.use(logger('dev'));
};
