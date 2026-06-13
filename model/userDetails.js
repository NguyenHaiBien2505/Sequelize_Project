const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

class UserDetails extends Model { }

UserDetails.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    tableName: 'user_details',
});

console.log(UserDetails === sequelize.models.UserDetails);


module.exports = { UserDetails };