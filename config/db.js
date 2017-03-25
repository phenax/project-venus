
const Sequelize = require('sequelize');

module.exports= () => {

	const sequelize = new Sequelize('venus', 'root', 'qwerty');

	return sequelize;
};
