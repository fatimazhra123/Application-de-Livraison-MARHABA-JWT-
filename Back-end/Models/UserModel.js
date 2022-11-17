const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please ADD Name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please ADD Email'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please ADD Email'],
        trim: true,
        min: 6,
        max: 12
    },
    token: {
        type: String,
        unique: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userShema);