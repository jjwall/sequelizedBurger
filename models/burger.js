module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
  });
    return Burger;
};