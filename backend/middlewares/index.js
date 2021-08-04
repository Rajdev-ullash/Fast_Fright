const {validationResult} = require('express-validator');
const User = require('../models/user');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array()[0].msg
        })
    }
    next()
}



// check isVerified user with this middleware 
// exports.isNotVerified = async function(req, res, next){
//     try{
//         const user = await User.findOne({email: req.body.email});
//         if(user.isVerified){
//             return next();
//         }
//         req.flash('error', 'Your account has not verified. Please check your email to verified your account');
//         return res.redirect('/');
//     } catch (err) {
//         console.log(err);
//         req.flash('error', 'Something went wrong, Please contact us for assistance');
//         res.redirect('/');
//     }
// }