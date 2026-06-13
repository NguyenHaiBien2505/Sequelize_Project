const insert = (req, res, next ) =>{
    const {firstName, lastName, email} = req.body;
    res.status(200).json({
        message: "User inserted successfully",
        // data: { firstName, lastName, email }
    });
}

module.exports = {
    insert
}