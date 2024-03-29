const {body} = require('express-validator')
const User = require('../models/user')

exports.registerValidators = [
    body('email').isEmail().withMessage('Enter a valid email').custom(async (value, {req}) => {
        try {
            const user = await User.findOne({ email: value })
            if (user) {
                return Promise.reject('This email is already taken')
            }
        } catch (e) {
            console.log(e);
        }
    }).normalizeEmail(),
    body('password', 'Password must be at least 6 characters').isLength({min: 6, max: 56}).isAlphanumeric().trim(),
    body('confirm').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Passwords must match')
        }
        return true
    }).trim(),
    body('name').isLength({min: 3}).withMessage('Name must be at least 3 characters').trim()
]

exports.courseValidators = [
    body('title').isLength({min: 3}).withMessage('Minimum title length 3 characters'),
    body('price').isNumeric().withMessage('Please enter a valid price'),
    body('img', 'Please enter a valid image URL').isURL()
]