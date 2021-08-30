const express = require('express');
const router = express.Router();

// import controllers

const {riderParcel, getRidingParcelInfo, updateRiderStatus} = require('../controllers/riderParcelController')


//router

router.post('/riderParcel', riderParcel)


// get specific order for rider
router.get('/getRidingParcelInfo', getRidingParcelInfo)

// status update for rider

router.put('/updateRiderStatus/:id', updateRiderStatus)

module.exports = router;