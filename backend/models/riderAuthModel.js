const mongoose = require('mongoose');

const riderAuthSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required : true
    },
    riderId:{
        type: String,
        required : true,
    },
    riderInfo:[{
        type: mongoose.Types.ObjectId,
        ref:'RequestingRider'
    }]
},{timestamps:true})

module.exports = mongoose.model('riderAuth', riderAuthSchema);