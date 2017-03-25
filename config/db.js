
const Sequelize = require('sequelize');

module.exports= () => {

	const sequelize = new Sequelize('venus', 'root', 'qwerty');


	// sequelize.sync().then(function() {
	// 	return User.create({
	// 		name: 'janedoe',
	// 		email: 'baaaar',
	// 		password: 'fooo',
	// 	});
	// }).then(function(jane) {
	// 	console.log(jane.get({
	// 		plain: true
	// 	}));
	// });


	return sequelize;
};
