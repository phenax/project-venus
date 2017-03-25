
const _Controller= require('./_Controller');

const Sequelize= require('sequelize');

module.exports= class extends _Controller {


	page(req, res) {

		const pageAlias= req.params.subject;

		this.db.models.Page
			.find({
				include: [
					{
						model: this.db.models.Review,
						include: [
							{ model: this.db.models.User }
						]
					},
				],
				where: { alias: pageAlias }
			})
			.then(page => res.render('ReviewPage', { page }));
	}



};

