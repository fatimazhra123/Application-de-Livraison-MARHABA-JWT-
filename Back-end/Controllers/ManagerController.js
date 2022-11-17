// method : GET
// url : api/user/manager/getusermanger
// acces : Private (Manager)
const GetUserManger = (req, res) => {
    res.status(200).send('Bonjour Fatima-ezahra, votre rôle est : manager')
}


module.exports = {
    GetUserManger
}