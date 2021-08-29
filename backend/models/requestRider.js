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
    },
    status: {
        type: String,
        enum: ['active', 'delete','notVerify','verified'],
        default: 'notVerify',
    },
    riderLoginInfo:[{
        type: mongoose.Types.ObjectId,
        ref:'riderAuth'
    }]
},{timestamps:true})

module.exports = mongoose.model('RequestingRider', requestRiderSchema);

