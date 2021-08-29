const mongoose = require("mongoose");

// require models
const RequestingRider = require("../models/requestRider");

// post requesting riding

exports.RequestingRider = async (req, res) => {
    const newRider = new RequestingRider({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        deliveryArea: req.body.deliveryArea,
        vehicle: req.body.vehicle,
    })
    try {
        await newRider.save()
        res.status(200).json({
            message: "Your Requesting was Successfully Finished"
        })
    } catch (err) {
        res.status(500).json({
            error: 'There was an error saving your request'
        })
    }
}

// get all requests
exports.getRidingRequest = async (req, res) => {
    try {
        const data = await RequestingRider.find({}).sort('-createdAt')
        res.status(200).json({
            result: data,
            message: "Your Requesting was Successfully Finished"
        })

    } catch (err) {
        res.status(500).json({
            error: 'There was an error finding all request'
        })
    }
}

//get rider by verified

exports.getVerifiedRider = async (req, res) => {
    try {
        const data = await RequestingRider.find({status:'verified'}).sort('-createdAt')
        res.status(200).json({
            result: data,
            message: "Your Requesting was Successfully Finished"
        })

    } catch (err) {
        res.status(500).json({
            error: 'There was an error finding all request'
        })
    }
}

// put method update

exports.updateStatus = async (req, res) => {
    try {
        const result = await RequestingRider.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: 'verified'
            }
        }, { new: true, useFindAndModify: false })
        res.status(200).json({
            message: 'Status updated successfully'
        })
    } catch (err) {
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}

exports.deleteRider = async (req, res) => {
    try {
        const deleteRider = await RequestingRider.deleteOne({ _id: req.params.id }).sort('-createdAt');
        res.status(200).json({
            message: 'Rider deleted successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}

