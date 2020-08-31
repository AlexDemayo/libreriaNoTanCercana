module.exports = (sequelize, DataTypes) => {
	let MonthyAuthor = sequelize.define('MonthyAuthor', {
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


	return MonthyAuthor;
};