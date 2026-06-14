const { Op } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const { User } = require("../model/userModel");

const insert = async (req, res, next) => {
    // const {firstName, lastName, email} = req.body;
    // const data = User.build({
    //     email : 'bin@gmail.com'
    // });
    // await data.save();
    const data = await User.create({
        email: 'bin@gmail.com'
    })
    console.log(data.toJSON());
}

const insertDemo = async (req, res, next) => {
    const arrayUser = [
        { firstName: 'bin1', lastName: 'nguyen1', email: 'bin1@gmail.com', isActive: true },
        { firstName: 'bin2', lastName: 'nguyen2', email: 'bin2@gmail.com', isActive: false },
        { firstName: 'bin3', lastName: 'nguyen3', email: 'bin3@gmail.com', isActive: true }
    ];

    // Chỉ tạo dữ liệu demo khi bảng rỗng để tránh nhân bản mỗi lần gọi
    const count = await User.count();
    if (count === 0) {
        await User.bulkCreate(arrayUser);
    }

    // const usersData = await User.findAll();

    // SELECT firstname, lastname, ....
    // const usersData = await User.findAll({
    //     attributes: ['firstName', 'lastName']
    // });

    // SELECT firtstname AS ... FROM ...
    // const usersData = await User.findAll({
    //     attributes: [['firstName', 'FN'], ['lastName', 'LN']]
    // });
    // return res.json(usersData);


    // SELECT count(firstname) as count
    // const firstNameCount = await User.findAll({
    //     attributes:[[sequelize.fn('COUNT', sequelize.col('firstName')), 'count']]
    // });
    // return res.json(firstNameCount);

    // SELECT sum(id) as count
    // const idSum = await User.findAll({
    //     attributes:[[sequelize.fn('SUM', sequelize.col('id')), 'sum']]
    // });

    // exclude là tùy chọn dùng để loại bỏ các cột không mong muốn khi query dữ liệu 
    const usersData = await User.findAll({
        attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
        }
    });
    return res.json(usersData);
}

const queryDemo = async (req, res) => {
    // SELECT * FROM WHERE ...
    // const data = await User.findAll({
    //     where:{
    //         firstName:'bin1',
    //         isActive: true
    //     }
    // })
    // res.json(data);

    // using sequelize oparation
    // const data = await User.findAll({
    //     where: {
    //         id: {
    //             // [Op.eq]: 2
    //             // [Op.in] : [1,3]
    //             [Op.and] : [{id : 1},{isActive : true}]
    //         }
    //     }
    // });
    // res.json(data);


    // update 

    const updateUser = await User.update({
        lastName: 'hahaha'
    }, {
        where: {
            id: 3
        }
    });
    res.json(updateUser)
}

module.exports = {
    insert,
    insertDemo,
    queryDemo
}