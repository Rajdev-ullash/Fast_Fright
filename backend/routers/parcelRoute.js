const express = require('express');
const router = express.Router();

//import controllers
const {createParcel, getParcel, getSpecificParcel, deleteSpecificParcel, getParcelUser} = require('../controllers/createParcelController')

//import middleware

const {checkLogin} = require('../middlewares/checkLogin');


//Router routes
router.post('/createParcel', createParcel);
router.get('/getAllParcels', getParcel),
// get by id
router.get('/getSpecificParcel/:id', getSpecificParcel),
// get by specific userInfo
router.get('/getParcelUser', getParcelUser),
//delete parcel by id
router.delete('/deleteSpecificParcel/:id', deleteSpecificParcel)


module.exports = router;