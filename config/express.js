
const path= require('path');
const compress= require('compression');
const logger= require('morgan');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const createReactEngine= require('react-express-views');

module.exports= (app) => {

	app.set('view engine', 'js');
	app.engine('js', createReactEngine());

	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.disable('x-powered-by');
	app.use(compress());
};
