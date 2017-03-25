
const autoBind= require('auto-bind');

module.exports= class _Controller {

	constructor(app, db) {

		autoBind(this);

		this.db= db;
		this.app= app;
	}

};
