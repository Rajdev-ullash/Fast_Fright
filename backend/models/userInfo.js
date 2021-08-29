const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('UserInfo', userInfoSchema);