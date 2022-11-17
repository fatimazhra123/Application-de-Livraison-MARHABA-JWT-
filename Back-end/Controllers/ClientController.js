// method : GET
// url : api/user/client/getuserclient
// acces : Private (Client)
const GetUserClient = (req, res) => {
    res.status(200).send('Bonjour saida, votre rôle est : Client')
}


module.exports = {
    GetUserClient
}