
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
				.then(pages =>
					this.getCategories(cats => res.render('DashboardPage', { pages, request: req, categories: cats }))
				);
			return;
		}

		this.db.models.Page
			.findAll({
				include: [
					{ model: this.db.models.Category },
				]
			})
			.then(pages =>
				this.getCategories(cats => res.render('HomePage', { pages, request: req, categories: cats }))
			);
	}

	getCategories(fn) {

		this.db.models.Category
			.findAll()
			.then(cats => fn(cats));
	}


};
