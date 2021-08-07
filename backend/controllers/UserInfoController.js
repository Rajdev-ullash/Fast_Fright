const UserInfo = require('../models/userInfo');


exports.userInfo = async (req, res) => {
    try{
        const newInfo = new UserInfo({
            name: req.body.name,
            shopName: req.body.shopName,
            location: req.body.location
        }) 
        await newInfo.save();
        res.status(200).json({
            success: 'Your information have been submit successfully'
        })
    } 
    catch(err) {
        res.status(400).json({
            err: 'please insert your correct information'
        })
    }
}





