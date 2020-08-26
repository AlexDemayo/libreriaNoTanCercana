module.exports = (sequelize, DataTypes) => {
	let Item = sequelize.define('Item', {
		userId: {
			type: DataTypes.INTEGER
		},
		title: {
			type: DataTypes.STRING
		},
		author: {
			type: DataTypes.STRING
		},
		price: {
			type: DataTypes.INTEGER
		},
		isbn: {
			type: DataTypes.STRING
		},
		publisherId: {
			type: DataTypes.INTEGER
		},
		image: {
			type: DataTypes.STRING
		},
		quantity: {
			type: DataTypes.INTEGER
		},
		total: {
			type: DataTypes.INTEGER
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
			as: 'user',
			foreignKey: 'userId'
		}),
		Item.belongsTo(models.Order, {
			as: 'order',
			foreignKey: 'orderId'
		}),
		Item.belongsTo(models.Publisher, {
			as: 'publisher',
			foreignKey: 'publisherId'
		});
	};

	return Item;
};
