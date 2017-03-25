
const Sequelize= require('sequelize');

module.exports= (sequelize) => (
	sequelize.define('categories', {
		name: Sequelize.STRING,
		alias: Sequelize.STRING,
	})
);
