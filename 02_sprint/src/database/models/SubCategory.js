module.exports = (sequelize, DataTypes) => {
	let SubCategory = sequelize.define('SubCategory', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		categoryId: {
			type: DataTypes.INTEGER
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

	return SubCategory;
};
