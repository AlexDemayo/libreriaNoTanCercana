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

	Category.associate = function (models) {
		Category.hasMany(models.Product, {
			as: 'products',
			foreignKey: 'categoryId'
		})
	}

	return Category;
};


// module.exports = (sequelize, DataTypes) => {
// 	let alias = 'Category'
// 	let cols = {
// 		name: {
// 			allowNull: false,
// 			type: DataTypes.STRING
// 		},
// 		createdAt: {
// 			type: DataTypes.DATE
// 		},
// 		updatedAt: {
// 			type: DataTypes.DATE
// 		},
// 		deletedAt: {
// 			type: DataTypes.DATE
// 		}
// 	};
// 	let config = {
// 		tableName : "categories"
// 	};

// 	const Category = sequelize.define(alias, cols, config);
// 	return Category
// }