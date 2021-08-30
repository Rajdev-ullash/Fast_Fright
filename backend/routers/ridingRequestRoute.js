const express = require('express');
const router = express.Router();


//import controllers
const {RequestingRider,getRidingRequest, updateStatus, getVerifiedRider, deleteRider} = require('../controllers/requestingRidingController')

// router routes
router.post('/ridingRequest', RequestingRider)

router.get('/getAllridingRequest', getRidingRequest)

router.put('/riderAccept/:id', updateStatus)

router.get('/getVerifiedRider', getVerifiedRider)

router.delete('/deleteRider/:id', deleteRider)

module.exports = router;