const mongoose = require('mongoose');
const createParcel = require('../models/createParcel')



// post parcel
exports.createParcel = async (req, res)=>{
    const newParcel = new createParcel({
        ...req.body,
        // user:req.userId,
    })
    try{
        const postParcel = await newParcel.save()
        await user.updateOne({
            _id:req.userId
        },{
            $push:{
                parcelList:postParcel._id
            }
        })
        res.status(200).json({
            message:'Parcel posted successfully'
        })
    }catch(err) {
        res.status(500).json({
            error:'There was a server error'
        })
    }
}

//get all parcel
exports.getParcel = async (req, res)=>{
    try{
        const data = createParcel.find({}).populate('user', -instructions).select({date:0});
        res.status(200).json({
            result:data,
            message:'find all parcel successfully'
        })
    }catch(err){
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}

//get parcel with specified id


exports.getSpecificParcel = async (req, res)=>{
    try{
        const data = createParcel.find({ _id: req.params.id })
            res.status(200).json({
            result: data,
            message: 'Specific parcel find successfully'
        })
    }catch(err){
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}


//delete parcel list
exports.deleteSpecificParcel = (req, res) =>{
    try{
        const data = createParcel.deleteOne({_id:req.params.id})
        res.status(200).json({
            result: data,
            message: 'Specific parcel delete successfully'
        })
    }catch(err){
        res.status(500).json({
            error: 'There was a server error'
        })
    }
}
