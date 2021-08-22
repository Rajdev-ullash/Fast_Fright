const mongoose  = require('mongoose');
// const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
    },
    customerDesignation:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{timestamps:true})

module.exports = mongoose.model('createReview', reviewSchema);