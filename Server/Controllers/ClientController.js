// method : GET
// url : api/user/client/getuserclient
// acces : Private (Client)
const GetUserClient = (req, res) => {
    res.status(200).send("this a Get User Client Function")
}


module.exports = {
    GetUserClient
}