module.exports = (sequelize, DataTypes) => {
	let MonthlyAuthor = sequelize.define('MonthlyAuthor', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
        },
        image: {
            allowNull: false,
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


	return MonthlyAuthor;
};