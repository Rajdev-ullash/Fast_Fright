const mongoose = require('mongoose');
const createReview = require('../models/review')



// post parcel
exports.createReview = async (req, res)=>{
    const newReview = new createReview({
        customerName: req.body.name,
        customerDesignation:req.body.designation,
        details:req.body.details,
        
        // user:req.userId,
    })
    try{
        const postReview = await newReview.save()
        // await user.updateOne({
        //     _id:req.userId
        // },{
        //     $push:{
        //         parcelList:postReview._id
        //     }
        // })
        res.status(200).json({
            message:'Review posted successfully'
        })
    }catch(err) {
        res.status(500).json({
            error:'There was a server error'
        })
    }
}

//get all parcel
exports.getReview = async (req, res)=>{
    try{
         const data = createReview.find({}).populate('user', -instructions).select({date:0});
        // const data = createReview.find({});
        res.status(200).json({
            result:data,
            message:'find all review successfully'
        })
    }catch(err){
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}

//get parcel with specified id


