require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const db = require('./Config/db')
const Authentification = require('./Routes/AuthRoute');
const Manager = require('./Routes/ManagerRoute');
const Livreur = require('./Routes/LivreurRoute');
const Client = require('./Routes/ClientRoute');

const globalError = require('./Middlewares/errorHandler')
const apiError = require('./Utils/errorsApi')
    //const errorHandler = require('./Middlewares/errorHandler');

const cookie = require('cookie-parser')
app.use(cookie())
    //Authentification_Route
app.use('/api/auth', Authentification);
//Manger_Route
app.use('/api/user/manager', Manager);
//Livreur_Route
app.use('/api/user/livreur', Livreur);
//Client_Route
app.use('/api/user/client', Client);


app.all('*', (req, res, next) => {
    //create error and send it to error 
    next(new apiError(`Can't find this route: ${req.originalUrl}`, 400))
})

app.use(globalError);

//app.use(errorHandler);

const getUser = () => undefined;

app.get('/test', async(req, res) => {
    const user = getUser();
    if (!user) {
        throw new Error("User not found");
    }
    return res.status(200).json({ success: true });
});





const port = process.env.PORT || 8081
app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
});