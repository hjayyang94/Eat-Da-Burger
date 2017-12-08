var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Burger = sequelize.define('burger', {
    name: Sequelize.STRING,
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    qty: Sequelize.INTEGER
}, {
    timestamps: false
    });

    Burger.sync();

    module.exports = Burger;

