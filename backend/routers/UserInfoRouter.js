const express = require('express');
const router = express.Router();
const { userInfo } = require('../controllers/UserInfoController')

router.post('/userInfo', userInfo);


module.exports = router;



