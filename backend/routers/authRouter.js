const express = require('express');
const router = express.Router();



//import controllers 
const {signup, signin, getAllUsers} = require('../controllers/authController')


// import middleware
const {userSignupValidator, userSigninValidator} = require('../middlewares/auth');
const {runValidation, isNotVerified} = require('../middlewares/index');
const {checkLogin} = require('../middlewares/checkLogin');


//Router routes
router.post('/signup', runValidation, userSignupValidator, signup);
router.post('/signin', runValidation,userSigninValidator, signin);



//get all users 
router.get('/getAllUsers', getAllUsers);


module.exports = router;