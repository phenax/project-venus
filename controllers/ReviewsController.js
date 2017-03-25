
const _Controller= require('./_Controller');

module.exports= class extends _Controller {


	/**
	 * GET - Review page action
	 */
	page(req, res, next) {

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
			.then(page => res.render('ReviewPage', { page }))
			.catch(e => next(e));
	}


	/**
	 * GET - Search api action
	 */
	search(req, res, next) {

		const query= req.query.search;

		this.db.models.Page
			.findAll({
				include: [
					{ model: this.db.models.Review, attributes: [] },
					{ model: this.db.models.Category, attributes: [ 'id', 'name', 'alias' ]  },
				],
				attributes: [
					'id',
					'name',
					'description',
					'alias',
					'createdAt',
					[ this.db.sequleize.fn('COUNT', this.db.sequleize.col('reviews.id')), 'numberOfReviews' ]
				],
				where: {
					$or: [
						{ name: { $like: `%${query}%` } },
						{ alias: { $like: `%${query}%` } },
						{ description: { $like: `%${query}%` } },
					]
				}
			})
			.then(pages => res.json({ pages }))
			.catch(e => next(e));
	}

};

