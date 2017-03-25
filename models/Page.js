
const Sequelize= require('sequelize');

module.exports= (sequelize) => (
	sequelize.define('pages', {
		name: Sequelize.STRING,
		alias: Sequelize.STRING,
		description: Sequelize.STRING,
		categoryId: Sequelize.INTEGER.UNSIGNED,
	})
);

