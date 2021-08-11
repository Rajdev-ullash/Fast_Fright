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
<<<<<<< HEAD
// router.post('/email-activate', activateAccount)

//get all users 
router.get('/getAllUsers', getAllUsers);
router.post
=======



//get all users 
router.get('/getAllUsers', getAllUsers);

>>>>>>> e9a4e820fc934be7082092e64df33283ff9911c5

module.exports = router;