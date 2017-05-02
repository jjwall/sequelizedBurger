module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	validate: {
    		len: {
    			args: [1, 50]
    		}
    	}
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });
  return Burger;
};