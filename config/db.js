
const Sequelize = require('sequelize');

const DATABASE= 'venus';
const DB_USER= 'root';
const DB_PASS= 'qwerty';

module.exports= () => {

	const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASS);

	return sequelize;
};
