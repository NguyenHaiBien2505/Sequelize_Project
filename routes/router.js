const express = require('express');
const { insert } = require('../controller/userController');
const router = express.Router();

router.post('/register', insert);


module.exports = router;