const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require('../database');

const User = sequelize.define('User', {
    name:{
        type:DataTypes.STRING,
        alloweNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    }

});

module.exports = User;