const express = require('express');
const router = express.Router();



//import controllers
const {riderSignUp, riderSignIn} = require('../controllers/riderAuthController')







// //import routes 
router.post('/riderSignUp', riderSignUp);
router.post('/riderSignIn', riderSignIn)

module.exports = router;