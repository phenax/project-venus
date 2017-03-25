
module.exports= class IndexController {


	constructor(app) {

		for(let i in this) {
			if(typeof (this[i]) === 'function')
				this[i]= this[i].bind(this);
		}


		this.app= app;
	}


	home(req, res) {

		// User check
		// if(true) {
			// res.render('DashboardPage');
		// }

		this.app.get('models')
			.Users
			.find()
			.then(console.log);
	}


};
