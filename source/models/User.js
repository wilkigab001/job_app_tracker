const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/Database')

module.exports = {
    User: sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: DataTypes.STRING,
        hashPass: DataTypes.STRING,
    })
}