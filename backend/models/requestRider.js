const mongoose = require('mongoose');



// request rider Schema

const requestRiderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    deliveryArea:{
        type: String,
        required: true,
    },
    vehicle:{
        type: String,
        required: true,
    }
},{timestamps:true})

module.exports = mongoose.model('RequestingRider', requestRiderSchema);

