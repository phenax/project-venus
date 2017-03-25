

const _Controller= require('./_Controller');
const passport= require('passport');

module.exports= class extends _Controller  {

	constructor(app, db) {
		super(app, db);

		this.authenticate= passport.authenticate(
			'google',
			{ scope: ['https://www.googleapis.com/auth/plus.login'] }
		);

		this.authCallback= passport.authenticate(
			'google',
			{ failureRedirect: '/login' }
		);
	}

	
	profile(req, res) {
		
		res.render('ProfilePage', {
			user: {
				name: 'HGeloasd ',
				bio: 'HGeloasd AFSFHDGFHJG',
				image: '/img/default-pic.jpg',
			}
		});
	}
};
