
const Sequelize= require('sequelize');

module.exports= (sequelize) => (
	sequelize.define('reviews', {
		content: Sequelize.STRING,
		rating: Sequelize.INTEGER.UNSIGNED,
		userId: Sequelize.INTEGER.UNSIGNED,
		pageId: Sequelize.INTEGER.UNSIGNED,
	})
);
