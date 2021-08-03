const { check } = require('express-validator')

exports.userSignupValidator = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Valid Email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be 6 character Long')

]

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];