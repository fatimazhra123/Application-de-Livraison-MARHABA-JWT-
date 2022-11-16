// method : GET
// url : api/user/livreur/getuserlivreur
// acces : Private (Livreur)
const GetUserLivreur = (req, res) => {
    res.status(200).send("this a Get User Livreur Function")
}


module.exports = {
    GetUserLivreur
}