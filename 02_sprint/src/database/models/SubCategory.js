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
		deletedAt: {
			type: DataTypes.DATE
		}
	});

	SubCategory.associate = function(models) {
		SubCategory.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		});
	}; /* PREGUNTAR LA CATEGORY HAS MANY SUB CATEGORIES */

	return SubCategory;
};
