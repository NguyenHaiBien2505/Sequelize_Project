const { User } = require("../model/userModel");

const insert = async (req, res, next ) =>{
    // const {firstName, lastName, email} = req.body;
    // const data = User.build({
    //     email : 'bin@gmail.com'
    // });
    // await data.save();
    const data =await User.create({
        email : 'bin@gmail.com'
    })    
    console.log(data.toJSON());
    
}

module.exports = {
    insert
}