const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const riderAuth = require('../models/riderAuthModel')

const RequestingRider = require('../models/requestRider')

exports.riderSignUp = async (req, res) =>{
    try {
        const riderSignUp  = await RequestingRider.findById({_id: req.body.riderId});
        console.log(riderSignUp);
            if(riderSignUp){
                res.status(404).json({
                    error: 'You are not approved by admin as a rider'
                })
            }
             else{
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                const newRiderUser = new riderAuth({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword,
                    phone: req.body.phone,
                    riderId: req.body.riderId
                    // emailToken: req.crypto.randomBytes(64).toString('hex'),
                    // isVerified: false,
                });

                // User.regis
                await newRiderUser.save();
                res.status(200).json({
                    newRiderUser,
                    message: 'signup successfully',
                });
            }

    } catch {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}


