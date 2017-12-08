// Set up MySQL connection.
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('burgers_db', 'root', 'hichew132', {
   host: "localhost",
   dialect: 'mysql',
   pool:{
       max:5,
       min:0,
       idle: 10000
   }
});



   // Export connection for our ORM to use.
   module.exports = sequelize;