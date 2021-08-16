const express = require('express');
const router = express.Router();



//import controllers
const {riderSignUp} = require('../controllers/riderAuthController')







// //import routes 
router.post('/riderSignUp', riderSignUp)

module.exports = router;