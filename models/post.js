const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    }
})