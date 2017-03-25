
const express= require('express');

const path= require('path');
const compress= require('compression');
const logger= require('morgan');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const reactEngine= require('express-react-views');


module.exports= (app, dirname) => {

	app.set('views', path.join(dirname, 'views'));
	app.set('view engine', 'js');
	app.engine('js', reactEngine.createEngine());

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.disable('x-powered-by');
	app.use(compress());

	app.use(express.static(path.join(dirname, 'public')));
};
