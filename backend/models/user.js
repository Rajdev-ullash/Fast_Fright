const mongoose = require('mongoose');
// const crypto = require('crypto');

//user schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    role:{
        type: String,
        default:'user'
    },
    resetPasswordLink:{
        data: String,
        default:''
    },
    emailToken: String,
    isVerified: Boolean,
    parcelList:[{
        type: mongoose.Types.ObjectId,
        ref:'createParcel'
    }],

}, {timestamps:true})

module.exports = mongoose.model('User', userSchema);