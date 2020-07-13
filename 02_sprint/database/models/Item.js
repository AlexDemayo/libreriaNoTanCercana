module.exports = (sequelize, DataTypes) => {
	let Item = sequelize.define('Item', {
		userId: {
			type: DataTypes.INTEGER
		},
		productName: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		quantity: {
			type: DataTypes.INTEGER
		},
		price: {
			type: DataTypes.INTEGER
		},
		total: {
			type: DataTypes.INTEGER
		},
		/*image: {}, PREGUNTAR COMO INSERTAR IMAGENES EN BASE*/
		status: {
			type: DataTypes.INTEGER
		},
		orderId: {
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

	return Item;
};
