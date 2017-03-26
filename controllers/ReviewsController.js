
const _Controller= require('./_Controller');

module.exports= class extends _Controller {


	/**
	 * GET - Review page action
	 */
	page(req, res, next) {

		const pageAlias= req.params.subject;

		console.log(pageAlias);

		this.db.models.Page
			.find({
				include: [
					{
						model: this.db.models.Review,
						include: [ { model: this.db.models.User } ],
						attributes: [
							'id', 'createdAt', 'content', 'userId', 'pageId', 'rating',
							[
								this.db.sequleize.fn(
									'date_format',
									this.db.sequleize.col('reviews.createdAt'),
									'%d-%m-%Y'
								), 
								'createdAtFormatted'
							]
						]
					},
				],
				// attributes: [
				// 	'id', 'name', 'alias', 'description', 'createdAt', 'categoryId',
				// 	[
				// 		this.db.sequleize.fn(
				// 			'AVG',
				// 			this.db.sequleize.col('`reviews`.`id`')
				// 		),
				// 		'numberOfReviews'
				// 	]
				// ],
				where: { alias: pageAlias }
			})
			.then(page => {

				if(page) {
					return res.render('ReviewPage', { page, request: req });
				}

				return next(new Error('The link is broken.'));
			})
			.catch(e => next(e));
	}



	category(req, res, next) {

		const categoryAlias= req.params.category;

		this.db.models.Category
			.find({
				where: { alias: categoryAlias, },
				include: [ { model: this.db.models.Page } ]
			})
			.then(category => res.render('CategoryPage', { category, request: req }))
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



	addReview() {

		
	}

};

