const User = require("./User");
const Car = require("./Car");
const Bid = require("./Bid");

User.hasMany(Car, {
  foreignKey: "user_id",
});
Car.belongsTo(User, {
  foreignKey: "user_id",
});

Bid.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

Bid.belongsTo(Car, {
  foreignKey: "car_id",
  onDelete: "cascade",
  hooks: true,
});

User.hasMany(Bid, {
  foreignKey: "user_id",
  onDelete: "cascade",
  hooks: true,
});

Car.hasMany(Bid, {
  foreignKey: "car_id",
  onDelete: "cascade",
  hooks: true,
});

// Export the modules
module.exports = { User, Car, Bid };
