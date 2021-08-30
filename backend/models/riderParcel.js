const mongoose = require('mongoose')


const riderParcelSchema = new mongoose.Schema({
    riderId:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    note:{
        type: String,

    },
    parcelInfo:{

    },
    riderInfo:[{}],
    status:{
        
    }
},{timestamps:true})

module.exports = mongoose.model('riderParcel', riderParcelSchema);