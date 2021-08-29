const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const riderAuth = require('../models/riderAuthModel')

const RequestingRider = require('../models/requestRider')

exports.riderSignUp = async (req, res) => {
    try {
        const riderSignUp = await RequestingRider.find({ _id: req.body.riderId });
        console.log(riderSignUp);
        if (!riderSignUp) {
            res.status(404).json({
                error: 'You are not approved by admin as a rider'
            })
        }
        else {
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const newRiderUser = new riderAuth({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
                phone: req.body.phone,
                riderId: req.body.riderId
            });

            // User.regis
            await newRiderUser.save();
            res.status(200).json({
                newRiderUser,
                message: 'signup successfully',
            });
        }

    } catch (err) {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}

exports.riderSignIn = async (req, res) => {
    try {
        const rider = await riderAuth.find({ riderId: req.body.riderId });
        console.log(rider)
        console.log(rider[0]);
        if (rider && rider.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, rider[0].password);
            if (isValidPassword) {
                // const token = jwt.sign(
                //     {
                //         firstName: user[0].firstName,
                //         userId: user[0]._id,
                //     },
                //     process.env.JWT_SECRET,
                //     {
                //         expiresIn: '10d',
                //     }
                // );
                res.status(200).json({
                    // access_token: token,
                    message: 'login successfully',
                    data: rider[0]
                });
            } else {
                res.status(401).json({
                    error: 'authentication failed',
                });
            }
        } else {
            res.status(401).json({
                error: 'authentication failed',
            });
        }
    } catch {
        res.status(401).json({
            error: 'authentication failed',
        });
    }
};


//get all user
exports.getAllRiders =  async (req, res)=>{
    try{
        const riders = await riderAuth.find({
        }).sort('-createdAt')
        res.status(200).json({
            data: riders,
            message:'Success'
        })
    }catch (err){
        console.log(err);
        res.status(500).json({
            message:'There was an error on the server side'
        })
    }
}


