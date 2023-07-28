const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cars extends Model { }

// TABLE CONFIGURATION Using sequelize
Cars.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        image_url: {
            type: DataTypes.STRING,
            // allowNull: false,
            //line 45 delete allow null false cloudnary get images easy
            //add cloudnary can have line 45
            //will throw warning without being in profile handlebars
        },
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "cars",
    }
);
// Export the model
module.exports = Cars;