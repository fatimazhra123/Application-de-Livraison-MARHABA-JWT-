const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DATABASE ");
}).catch(() => {
    console.log("Unable to Connected to DATABASE");
})