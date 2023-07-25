const User = require('../User');
const Cars = require('../Cars');

hasMany(Cars, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

belongsTo(User, {
    foreignKey: 'user_id'
});

export default { User, Cars };