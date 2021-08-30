const mongoose = require('mongoose')

const riderParcel = require('../models/riderParcel')
const RequestingRider = require("../models/requestRider");

exports.riderParcel = async (req, res) => {
    const riderInfoData = await RequestingRider.find({ _id: req.body.riderId })
    const newRiderParcel = new riderParcel({
        riderId: req.body.riderId,
        email: req.body.riderEmail,
        note: req.body.note,
        parcelInfo: req.body.parcelInfo,
        riderInfo: riderInfoData,
    })
    try {
        const parcel = await newRiderParcel.save()
        res.status(200).json({

            message: 'Order sent to rider successfully'
        })
    } catch (err) {
        res.status(500).json({
            error: 'There was an error to sent this order'
        })
    }
}

// order by specific rider with all info 

exports.getRidingParcelInfo = async (req, res) => {
    try {
        const data = await riderParcel.find({ email: req.query.email }).sort('-createdAt');
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

//rider status update

exports.updateRiderStatus = async (req, res) => {
    try {
        const update = req.body;
        const result = await riderParcel.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: update.status
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