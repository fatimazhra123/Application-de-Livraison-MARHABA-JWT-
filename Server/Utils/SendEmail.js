const nodemailer = require("nodemailer")

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user,
        pass
    }
})

const sendConfirmationEmail = (name, email, confirmationCode, userid) => {
    console.log("Check");
    transport.sendMail({
        from: user,
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href="http://localhost:8000/api/auth/user/${userid}/confirm/${confirmationCode}"> Click here</a>
        </div>`,
    }).catch(err => console.log(err));
}

const resetPasswordEmail = (name, email, token) => {
    console.log("Check");
    transport.sendMail({
        from: user,
        to: email,
        subject: "RESET PASSWORD",
        html: `<h1>RESET PASSWORD</h1>
            <h2>Hello ${name}</h2>
            <p>plaise n'oblier pas le code the next time</p>
            <a href=http://localhost:8000/api/auth/resetpassword/${token}> Reset pasword</a>
            </div>`,
    }).catch(err => console.log(err));
}


module.exports = {
    sendConfirmationEmail,
    resetPasswordEmail
}