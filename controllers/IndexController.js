
// const Sequelize= require('sequelize');

const _Controller= require('./_Controller');

module.exports= class IndexController extends _Controller {

	home(req, res) {

		this.db.models.Page
			.findAll({
				include: [
					{ model: this.db.models.Category },
				]
			})
			.then(pages => res.render('HomePage', { pages }));
	}


};
