
// const Sequelize= require('sequelize');

const _Controller= require('./_Controller');

module.exports= class IndexController extends _Controller {

	home(req, res) {

		if(req.isAuthenticated()) {
			this.db.models.Page
				.findAll({
					include: [
						{ model: this.db.models.Category },
					]
				})
				.then(pages => res.render('DashboardPage', { pages, request: req }));
			return;
		}

		this.db.models.Page
			.findAll({
				include: [
					{ model: this.db.models.Category },
				]
			})
			.then(pages => res.render('HomePage', { pages, request: req }));
	}


};
