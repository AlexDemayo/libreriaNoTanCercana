module.exports = (sequelize, DataTypes) => {
	let Order = sequelize.define('Order', {
		number: {
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
		deleteAt: {
			type: DataTypes.DATE
		}
	});

	Order.associate = function(models) {
		Order.belongsTo(models.User, {
			as: 'user',
			foreignKey: 'userId'
		});
	};

	return Order;
};
