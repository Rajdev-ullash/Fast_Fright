const mongoose = require('mongoose');
const createParcel = require('../models/createParcel')



// post parcel
exports.createParcel = async (req, res)=>{
    const newParcel = new createParcel({
        customerName: req.body.name,
        customerNumber:req.body.phone,
        customerAddress:req.body.address,
        weight:req.body.weight,
        category: req.body.category,
        deliveryArea: req.body.destination,
        cashCollections:req.body.cashAmount,
        productPrice:req.body.price,
        instructions:req.body.advice
        // user:req.userId,
    })
    try{
        const postParcel = await newParcel.save()
        // await user.updateOne({
        //     _id:req.userId
        // },{
        //     $push:{
        //         parcelList:postParcel._id
        //     }
        // })
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
<<<<<<< HEAD
        const data = createParcel.find({}).sort('-createdAt').populate('user', -instructions).select({date:0});
=======
         const data = createParcel.find({}).populate('user', -instructions).select({date:0});
        // const data = createParcel.find({});
>>>>>>> e9a4e820fc934be7082092e64df33283ff9911c5
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
        const data = createParcel.find({ _id: req.params.id }).sort('-createdAt')
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
