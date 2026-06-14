const express = require('express');
const { insert, insertDemo, queryDemo } = require('../controller/userController');
const router = express.Router();

// router.get('/register', insert);
router.get('/demo', insertDemo);
router.get('/query', queryDemo);


module.exports = router;