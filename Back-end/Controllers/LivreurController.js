// method : GET
// url : api/user/livreur/getuserlivreur
// acces : Private (Livreur)
const GetUserLivreur = (req, res) => {
    res.status(200).send('Bonjour oussama, votre rôle est : Livreure')
}


module.exports = {
    GetUserLivreur
}