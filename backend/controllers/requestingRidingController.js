const mongoose = require('mongoose');


// require models
const RequestingRider = require('../models/requestRider')

// post requesting riding 

exports.RequestingRider = async (req, res) =>{
    const newRider = new RequestingRider({
        name:req.body.name,
        email:req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        deliveryArea: req.body.deliveryArea,
        vehicle: req.body.vehicle,
    })
    try{
        await newRider.save()
        res.status(200).json({
            message:"Your Requesting was Successfully Finished"
        })
    }catch (err){
        res.status(500).json({
            error:'There was an error saving your request'
        })
    }
}

// get all requests
exports.getRidingRequest=  async (req, res)=>{
    try{
        const data = await RequestingRider.find({}).sort('-createdAt')
        res.status(200).json({
            result: data,
            message:"Your Requesting was Successfully Finished"
        })

    }catch(err){
        res.status(500).json({
            error:'There was an error finding all request'
        })
    }
}