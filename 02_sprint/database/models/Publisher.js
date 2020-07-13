module.exports = (sequelize, DataTypes) => {
	let Publisher = sequelize.define('Publisher', {
		name: {
			type: DataTypes.STRING
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

	return Publisher;
};
