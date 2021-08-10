const express = require('express');
const router = express.Router();


//import controllers
const {RequestingRider,getRidingRequest} = require('../controllers/requestingRidingController')

// router routes
router.post('/ridingRequest', RequestingRider)

router.get('/getAllridingRequest', getRidingRequest)

module.exports = router;