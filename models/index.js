const User = require('./User');
const Cars = require('./Cars');


hasMany(Cars, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'cars'
});

belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = { User, Cars };