const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'bin'
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: 'nguyen'
    },
    email: {
        type: DataTypes.STRING
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    tableName: 'users',
});

console.log(User === sequelize.models.User);


module.exports = {User};