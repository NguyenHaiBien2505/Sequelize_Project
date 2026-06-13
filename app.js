const express = require('express');
const router = require('./routes/router');
const { dbConnect } = require('./config/dbConnect');
const User = require('./model/userModel');
const app = express();
const port = 3000;

app.use('/', router);

// User.sync(); // Tạo bảng nếu chưa tồn tại
// User.sync({ force: true }); // Xóa bảng nếu đã tồn tại và tạo lại
User.sync({ alter: true }); // Cập nhật bảng nếu có sự thay đổi trong model

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    dbConnect();
});

