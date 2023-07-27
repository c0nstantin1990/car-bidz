const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
async setPassword(password) {
    this.password = await bcrypt.hash(password, 10);
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            throw err;
        }
        this.password = hash;
    }
    );
    return this.password;
    }
}

User.init(
    {
     // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        username: {
            type: DataTypes.STRING,
            allowNull: false
            },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                notEmpty: true,
                isAlphanumeric: true,
                notNull: true,
            }
            },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
                notNull: true,
                },
            },
        },
        {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
            },
        },
        // TABLE CONFIGURATION Using sequelize
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
        tableName: 'user'
        });
        
        module.exports = User;
