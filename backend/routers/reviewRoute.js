const express = require('express');
const router = express.Router();

//import controllers

const {createReview,getReview} = require('../controllers/reviewController')



//Router routes
router.post('/createReview', createReview);
router.get('/getAllReview', getReview)



module.exports = router;