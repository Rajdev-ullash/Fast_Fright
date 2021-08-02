const express = require('express');
const router = express.Router();


//import controllers
const {signup, signin} = require('../controllers/auth')


// import middleware
const {userSignupValidator, userSigninValidator} = require('../middlewares/auth')
const {runValidation} = require('../middlewares/index')
const {checkLogin} = require('../middlewares/checkLogin')


//Router routes
router.post('/signup',runValidation,userSignupValidator, signup)
router.post('/signin',runValidation,userSigninValidator, signin)

module.exports = router;