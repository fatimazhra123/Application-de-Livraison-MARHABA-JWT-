const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const asyncHandler = require('express-async-handler')
const RoleModel = require('../Models/RoleModel')
const UserModel = require('../Models/UserModel')


const checkManagerMiddle = asyncHandler(async(req, res, next) => {
    const token_cookie = req.cookies['access']
    const validate_token = await jwt.verify(token_cookie, process.env.JWT_SECRET)
    const user = await UserModel.findOne({ _id: validate_token.id })
    console.log(user);
    const role = await RoleModel.findOne({ _id: user.role })
    console.log(role.role);
    if (role.role !== 'manager') {
        res.send('access denied')
    }
    next()
})
module.exports = checkManagerMiddle