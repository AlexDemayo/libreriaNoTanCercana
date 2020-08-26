module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		userName: {
			allowNull: false,
			type: DataTypes.STRING
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
		},
		admin: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		orderId: {
			type: DataTypes.INTEGER
        },
        image: {
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

	User.associate = function(models) {
		User.hasMany(models.Item, {
			as: 'items',
			foreignKey: 'userId'
		}),
		User.hasMany(models.Order, {
			as: 'orders',
			foreignKey: 'userId'
		});
	};
	

	return User;
};
