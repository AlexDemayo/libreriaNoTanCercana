const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
	let Category = sequelize.define('Category', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		},
		deleteAt: {
			type: DataTypes.DATE
		}
	});

	return Category;
};
