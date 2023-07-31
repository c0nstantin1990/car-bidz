const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bid extends Model { }

Bid.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        bid_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        car_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "car",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "bid",
    }
);

module.exports = Bid;