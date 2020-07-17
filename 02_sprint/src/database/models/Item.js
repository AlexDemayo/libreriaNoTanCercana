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
		image: {
			type: DataTypes.STRING
		},
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
		deletedAt: {
			type: DataTypes.DATE
		}
	});
    
	Item.associate = function(models) {
		Item.belongsTo(models.User, {
			as: 'User',
			foreignKey: 'userId'
		}),
		Item.belongsTo(models.Order, {
			as: 'order',
			foreignKey: 'orderId'
		});
	};

	return Item;
};
