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
		/*image: {}, PREGUNTAR COMO INSERTAR IMAGENES EN BASE*/
		subCategory: {
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

	return Product;
};
