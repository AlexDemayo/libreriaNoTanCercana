module.exports = (sequelize, DataTypes) => {
	let Publisher = sequelize.define('Publisher', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
		}
	});

	return Publisher;
};
