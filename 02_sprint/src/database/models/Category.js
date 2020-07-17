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
		deletedAt: {
			type: DataTypes.DATE
		}
	});

	return Category;
};
