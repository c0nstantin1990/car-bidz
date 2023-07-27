const { Model, DataTypes } = require('sequelize');
const sequelize = require('sequelize');
// Create UserCars model
class UserCars extends Model { }

UserCars.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            // allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
            // allowNull: false
        },
        carId: {
            type: DataTypes.INTEGER,
            allowNull: false
            // allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserCars'
        // tableName: 'UserCars'
        // schema: 'public'
    }
);

module.exports = UserCars;