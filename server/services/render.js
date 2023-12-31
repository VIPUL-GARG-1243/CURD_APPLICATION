const axios = require("axios");

exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:3000/api/users").then(function(response){
        res.render("index", {users: response.data})
    }).catch((err) => {
        res.send(err)
    })
    // res.render("index", {users: "New Data"})
}

exports.add_user = (req, res) => {
    res.render("add_user")
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:3000/api/users", {params: {id: req.query.id}}).then(function(userData){
        console.log(userData.data)
        res.render("update_user", {user: userData.data})
    }).catch((err) => {
        res.send(err)
    })
    // res.render("update_user")
}