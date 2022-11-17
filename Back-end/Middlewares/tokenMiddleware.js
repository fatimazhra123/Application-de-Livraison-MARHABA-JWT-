const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const asyncHandler = require('express-async-handler')


const logintoken = asyncHandler(async(req, res, next) => {
    const token_cookie = req.cookies['access']
    if (token_cookie) {
        const validate_token = await jwt.verify(token_cookie, process.env.JWT_SECRET)
        if (validate_token) {
            res.user = validate_token
            console.log(res.user);
            next()
        }
    } else {
        res.send('invalid signature')
    }
})
module.exports = logintoken