const express = require('express');
const router = express.Router();

//import controllers
const {createParcel, getParcel, getSpecificParcel, deleteSpecificParcel} = require('../controllers/createParcelController')




//Router routes
router.post('/createParcel', createParcel);
router.get('/getAllParcels', getParcel),
// get by id
router.get('/getSpecificParcel/:id', getSpecificParcel),
//delete parcel by id
router.delete('/deleteSpecificParcel/:id', deleteSpecificParcel)


module.exports = router;