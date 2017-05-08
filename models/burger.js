// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("Burger", {
//     burger_name: {
//     	type: DataTypes.STRING,
//     	validate: {
//     		len: {
//     			args: [1, 50]
//     		}
//     	}
//     },
//     devoured: {
//     	type: DataTypes.BOOLEAN,
//     	defaultValue: false
//     }
//   });
//   return Burger;
// };

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