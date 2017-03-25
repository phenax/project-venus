
const Sequelize= require('sequelize');

module.exports= (sequelize) => (
	sequelize.define('users', {
		name: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
	})
);
