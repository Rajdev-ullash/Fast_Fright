const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const router = require('../routers/authRouter');


exports.signup = async (req, res) =>{
    try {
        const userSignUp  = await User.findOne({email: req.body.email});
            if(userSignUp){
                res.status(404).json({
                    error: 'Email is already taken'
                })
            } else{
                const hashPassword = await bcrypt.hash(req.body.password, 10);
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashPassword,
                    phone: req.body.phone,
                    emailToken: req.crypto.randomBytes(64).toString('hex'),
                    isVerified: false,
                });
                
                User.regis
                await newUser.save();
                res.status(200).json({
                    newUser,
                    error: 'signup successfully',
                });
            }

    } catch {
        res.status(500).json({
            message: 'signup error find!!!',
        });
    }
}

exports.signin = async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (user && user.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);
            if (isValidPassword) {
                const token = jwt.sign(
                    {
                        firstName: user[0].firstName,
                        userId: user[0]._id,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h',
                    }
                );
                res.status(200).json({
                    access_token: token,
                    message: 'login successfully',
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

// verified email with sendGrid 
const msg = {
    from: 'efficentcoders@gmail.com',
    to: user.email,
    subject: 'efficient coders - verify your email',
    text: `hello, thanks for registering on our sites.
    please copy and paste the address below to verify your account.
    http://${req.headers.host}/verify email>token=${user.emailToken}
    `,
    html:   `
        <h1>hello</h1>
        <p>thanks for registering on our sites</P>
        <p>please copy and paste the address below to verify your account.</P>
        <a href='http://${req.headers.host}/verify email>token=${user.emailToken}'>verify your account</a>
    `
}

router.get('/verify-email', async (req, res, next) => {
    try{
        const user = await User.findOne({ emailToken: req.query.token});
        if(!user){
            req.flash('error', 'Token is invalid please contact us for assistance');
            // return res.redirect('/');
        }
        user.emailToken = null;
        user.isVerified = true;
        await user.save();
        await req.login(user, async(err) => {
            if(err) return next(err);
            req.flash('success', `welcome to efficient coders ${user.fastName}`)
            const redirectUrl = req.session.redirectTo || '/';
            delete req.session.redirectTo;
            // res.redirect(redirectUrl);
        });
    } catch (err) {
        console.log(err);
        req.flash('error', 'something what wrong, please contact us for assistance');
        // res.redirect('/')
    }
})