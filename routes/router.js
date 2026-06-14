const express = require('express');
const { insert, insertDemo } = require('../controller/userController');
const router = express.Router();

// router.get('/register', insert);
router.get('/demo', insertDemo);


module.exports = router;