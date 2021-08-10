const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const riderAuth = require('../models/riderAuth')
const router = require('../routers/authRouter');
const RequestingRider = require('../models/requestRider')

exports.riderSignUp = async (req, res) =>{
    try {
        const riderSignUp  = await User.findOne({email: req.body.email});
            if(riderSignUp){
                res.status(404).json({
                    error: 'Email is already taken'
                })
            }
             else{
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword,
                    phone: req.body.phone,
                    // emailToken: req.crypto.randomBytes(64).toString('hex'),
                    // isVerified: false,
                });

                // User.regis
                await newUser.save();
                res.status(200).json({
                    newUser,
                    message: 'signup successfully',
                });
            }

    } catch {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}