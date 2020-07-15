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
	/*
	User.associate = function(models) {
		User.hasMany(models.item, {
			as: 'items',
			foreignKey: 'itemId'
		});
	};                  (PREGUNTAR ACERCA DE RELACION 1 A 1 , CART / USER )
*/
	return User;
};
