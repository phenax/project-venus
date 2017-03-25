

module.exports= class ReviewsController {


	constructor(app) {

		for(let i in this) {
			if(typeof (this[i]) === 'function')
				this[i]= this[i].bind(this);
		}

		this.app= app;
	}

	
	page(req, res) {

		res.render('ReviewPage');
	}



};

