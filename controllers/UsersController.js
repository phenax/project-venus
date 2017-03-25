
module.exports= class UsersController {


	constructor(app) {

		for(let i in this) {
			if(typeof (this[i]) === 'function')
				this[i]= this[i].bind(this);
		}

		this.app= app;
	}

	
	profile() {
		
	}
};
