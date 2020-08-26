module.exports = (sequelize, DataTypes) => {
	let Order = sequelize.define('Order', {
		orderNumber: {
			type: DataTypes.INTEGER
		},
		total: {
			type: DataTypes.INTEGER
		},
		userId: {
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

	Order.associate = function(models) {
		Order.belongsTo(models.User, {
			as: 'user',
			foreignKey: 'userId'
		}),
		Order.hasMany(models.Item, {
			as: 'items',
			foreignKey: 'orderId'
		});
	};

	return Order;
};
