
const Sequelize= require('sequelize');

module.exports= (sequelize) => (
	sequelize.define('users', {
		name: Sequelize.STRING,
		username: Sequelize.STRING,
		image: Sequelize.STRING,
		email: Sequelize.STRING,
		googleId: Sequelize.STRING,
	})
);
