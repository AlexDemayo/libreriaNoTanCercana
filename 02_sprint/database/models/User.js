module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		userName: {
			allowNull: false,
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
		},
		/*password: {}, PREGUNTAR COMO INSERTAR IMAGENES EN BASE*/
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

	return User;
};
