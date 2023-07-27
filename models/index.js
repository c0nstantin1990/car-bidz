const User = require ('./User');
const Cars = require ('./Cars');

// Define associations
User.hasMany(Cars, {
    foreignKey: 'user_id'
});

Cars.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Cars
};
