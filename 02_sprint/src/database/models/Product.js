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
		price:{
			type: DataTypes.INTEGER
		},
		isbn: {
			type: DataTypes.STRING
		},
		image: {
			type: DataTypes.STRING
		},
		cover:{
			type: DataTypes.STRING
		},
		description:{
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
		
		Product.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		});

		Product.belongsTo(models.SubCategory, {
			as: 'subCategory',
			foreignKey: 'subCategoryId'
		});
	};

	return Product;
};
