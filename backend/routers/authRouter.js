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
<<<<<<< HEAD
router.post
=======
=======
>>>>>>> fab0aafc504194b405f84bb6cacda04067035ab1
// router.post('/email-activate', activateAccount)

//get all users 
router.get('/getAllUsers', getAllUsers);
<<<<<<< HEAD
>>>>>>> fab0aafc504194b405f84bb6cacda04067035ab1
=======
>>>>>>> fab0aafc504194b405f84bb6cacda04067035ab1

module.exports = router;