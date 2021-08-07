const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    shopName: {
        type: String
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('UserInfo', userInfoSchema);