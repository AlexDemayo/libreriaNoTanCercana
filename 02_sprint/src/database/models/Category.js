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
		},
		recommended: {
			type: DataTypes.INTEGER
		}
	});

	Category.associate = function (models) {
		Category.hasMany(models.Product, {
			as: 'products',
			foreignKey: 'categoryId'
		})
	}

	return Category;
};

