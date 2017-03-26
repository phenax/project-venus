

const _Controller= require('./_Controller');
const passport= require('passport');

module.exports= class extends _Controller  {


	authenticate(req, res, next) {
		return passport.authenticate(
			'google',
			{ scope : ['profile', 'email'] }
		)(req, res, next);
	}

	authCallback(req, res, next) {
		return passport.authenticate(
			'google',
			{
				successRedirect : '/',
				failureRedirect : '/'
			}
		)(req, res, next);
	}

	redirect(_, res) {
		res.redirect('/');
	}



	profile(req, res) {

		const id= req.params.user_id? req.params.user_id: req.user.id;

		this.db.models.User
			.find({
				where: { id },
				include: [
					{
						model: this.db.models.Review,
						include: [
							{
								model: this.db.models.Page,
								include: [ { model: this.db.models.Category } ],
							}
						],
						attributes: [
							'createdAt', 'content', 'userId', 'pageId', 'rating',
							[
								this.db.sequleize.fn(
									'date_format',
									this.db.sequleize.col('reviews.createdAt'),
									'%d-%m-%Y'
								),
								'createdAtFormatted'
							]
						],
					}
				]
			})
			.then(user => res.render('ProfilePage', { user, request: req }));
	}



	logout(req, res) {
		req.logout();
		res.redirect('/');
	}
};
