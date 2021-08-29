const mongoose = require("mongoose");
// const ObjectId = require('mongodb').ObjectId;
const createParcel = require("../models/createParcel");

// post parcel
exports.createParcel = async (req, res) => {
  const newParcel = new createParcel({
    customerName: req.body.name,
    customerNumber: req.body.phone,
    customerEmail:req.body.emails,
    customerAddress: req.body.address,
    weight: req.body.weight,
    category: req.body.category,
    deliveryArea: req.body.destination,
    cashCollections: req.body.cashAmount,
    productPrice: req.body.price,
    instructions: req.body.advice,
    uniqueNumber: req.body.uniqueNumber,
    user:req.userId,
    email:req.body.email
  });
  try {
    const postParcel = await newParcel.save();
    // await user.updateOne({
    //     _id:req.userId
    // },{
    //     $push:{
    //         parcelList:postParcel._id
    //     }
    // })
    res.status(200).json({
      message: "Parcel posted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

//get all parcel
exports.getParcel = async (req, res) => {
  try {
    // const data =await createParcel
    //   .find({})
    //   .populate("user")
    //   .select({ date: 0 }).sort('-createdAt');
    const data = await createParcel.find({}).sort('-createdAt');
    res.status(200).json({
      result: data,
      message: "find all parcel successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};


//specific user information
exports.getParcelUser = async (req, res) => {
  try {
    const data = await createParcel.find({email:req.query.email}).sort('-createdAt');
    console.log(req.query.email)
    res.status(200).json({
      result: data,
      message: "find all parcel successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}; 

//get parcel with specified id

exports.getSpecificParcel = async (req, res) => {
  try {

    const data = await createParcel.find({ uniqueNumber:req.params.id}).sort('-createdAt')
    
    console.log(req.params.id)
    res.status(200).json({
      result: data,
      message: "Specific parcel find successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
};

//delete parcel list
exports.deleteSpecificParcel = async (req, res) => {
  try {
    const data = await createParcel.deleteOne({ _id: req.params.id }).sort('-createdAt');
    res.status(200).json({
      message: "Specific parcel delete successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
};
