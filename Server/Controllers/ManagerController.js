// method : GET
// url : api/user/manager/getusermanger
// acces : Private (Manager)
const GetUserManger = (req, res) => {
    res.status(200).send("this a Get User Manager Function")
}


module.exports = {
    GetUserManger
}