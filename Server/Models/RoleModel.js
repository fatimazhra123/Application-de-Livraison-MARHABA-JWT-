const mongoose = require('mongoose')
const role = new mongoose.Schema({
    role: String
})
module.exports = mongoose.model("roles", role)