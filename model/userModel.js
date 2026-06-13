const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const User = sequelize.define('User', {
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
    // allowNull defaults to true
},
    email: {
    type: DataTypes.STRING,
}
}, {
    // Other model options go here
    // freezeTableName: true, // Giữ nguyên tên bảng như đã định nghĩa
    tableName: 'users', // Đặt tên bảng là 'users'
    timestamps: true // createdAt và updatedAt mặc định của Sequelize, mac dinh la true nen se co 2 truong createdAt va updatedAt trong bang users

});

console.log(User === sequelize.models.User); // true

module.exports = User;