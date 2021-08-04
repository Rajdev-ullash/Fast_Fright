const express = require('express');
const router = express.Router();
const crypto = require('crypto');


//import controllers 
const {signup, signin} = require('../controllers/authController')


// import middleware
const {userSignupValidator, userSigninValidator} = require('../middlewares/auth');
const {runValidation, isNotVerified} = require('../middlewares/index');
const {checkLogin} = require('../middlewares/checkLogin');


//Router routes
router.post('/signup', runValidation, userSignupValidator, signup);
router.post('/signin', runValidation,userSigninValidator, signin);

module.exports = router;