var Sequelize = require('sequelize');

var sequelize = new Sequelize('sales', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Define a simple Product Model
var Product = sequelize.define('product', {
	id: {
	  type: Sequelize.INTEGER,
	  primaryKey: true,
      autoIncrement: true
  	},
	name: {
		type: Sequelize.STRING
	},
	value: {
		type: Sequelize.DECIMAL
	}
});

Product.sync();