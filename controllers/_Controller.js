
module.exports= class _Controller {

	constructor(app, db) {

		this.autoBind();

		this.db= db;
		this.app= app;
	}

	autoBind() {
		for(let i in this) {
			if(typeof(this[i]) === 'function') {
				console.log(i);
				this[i]= this[i].bind(this);
			}
		}
	}


};
