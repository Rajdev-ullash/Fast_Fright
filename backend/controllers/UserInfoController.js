const UserInfo = require('../models/userInfo');


exports.userInfo = async (req, res) => {
    try{
        const newInfo = new UserInfo({
            shopName: req.body.shopName,
            email: req.body.email,
            number: req.body.number,
            address: req.body.address
        }) 
        await newInfo.save();
        res.status(200).json({
            success: 'Your information have been submit successfully'
        })
    } 
    catch(err) {
        res.status(500).json({
            err: 'please insert your correct information'
        })
    }
}





