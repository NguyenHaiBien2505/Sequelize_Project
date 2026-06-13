const { Sequelize } = require('sequelize');

// Tao ket noi den database
    const sequelize = new Sequelize('sequelize_project', 'root', 'root', {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });

const dbConnect = async () => {
    // Test the connection =>> thong bao ket noi thanh cong hay that bai
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    return sequelize;
};

module.exports = { dbConnect, sequelize };