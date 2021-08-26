const express = require('express');
const router = express.Router();


//import controllers
const {RequestingRider,getRidingRequest, updateStatus} = require('../controllers/requestingRidingController')

// router routes
router.post('/ridingRequest', RequestingRider)

router.get('/getAllridingRequest', getRidingRequest)

router.put('/riderAccept', updateStatus)

module.exports = router;