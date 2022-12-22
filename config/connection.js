const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.) {
    sequelize = new Sequelize(process.env.)
}