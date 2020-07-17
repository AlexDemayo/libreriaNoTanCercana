module.exports = (sequelize, DataTypes) => {
	let Product = sequelize.define('Product', {
		title: {
			allowNull: false,
			type: DataTypes.STRING
		},
		author: {
			allowNull: false,
			type: DataTypes.STRING
		},
		publisherId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		datePublished: {
			type: DataTypes.DATE
		},
		pages: {
			type: DataTypes.INTEGER
		},
		isbn: {
			type: DataTypes.INTEGER
		},
		image: {
			type: DataTypes.STRING
		},
		categoryId: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		subCategoryId: {
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

	Product.associate = function(models) {
		Product.belongsTo(models.Publisher, {
			as: 'publisher',
			foreignKey: 'publisherId'
		});
	};

	Product.associate = function(models) {
		Product.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		});
	};

	Product.associate = function(models) {
		Product.belongsTo(models.SubCategory, {
			as: 'subCategory',
			foreignKey: 'subCategoryId'
		});
	};

	return Product;
};
