const mongoose  = require('mongoose');
// const { ObjectId } = mongoose.Schema;

const createParcelSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    customerNumber:{
        type:String,
        required:true,
    },
    customerAddress:{
        type:String,
        required:true,
    },
    customerEmail:{
        type:String,
        required:true,
    },
    weight:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    deliveryArea:{
        type:String,
        required:true,
    },
    cashCollections:{
        type:String,
    },
    productPrice:{
        type:String,
        required:true,
    },
    instructions:{
        type:String
    },
    uniqueNumber:{
        type:String
    },
    email:{
       type:String 
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
},{timestamps:true})

module.exports = mongoose.model('createParcel', createParcelSchema);