const UserDb = require('../model/model');

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content can't not be Empty!"})
    }

    const user = new UserDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    user.save(user).then((data) => {
        // res.send(data)
        res.redirect("/add-user")
    }).catch((err) => {
        res.status(500).send({message: err.message || "Something went wrong while creating a create operation"})
    })
}

exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id;
        UserDb.findById(id).then((data) => {
            if(!data) {
                res.status(404).send({message: "user not found"})
            }else {
                res.send(data)
            }
        }).catch((err) => {
            res.status(500).send({message: "error while finding"})
        })
    }else {
        UserDb.find().then((user) => {
            res.send(user)
        }).catch((err) => {
            // console.log("hello");
            res.send(500).send({message: err.message || "Error occur while retrieving user information"})
        })
    }
}

exports.update = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: "Data cannot be empty"})
    }
    const id = req.params.id;
    UserDb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then((data) => {
        if(!data) {
            console.log("hello");
            res.status(404).send({message: "User not found"})
        }else {
            res.send(data)
        }
    }).catch((err) => {
        // console.log("hello");
        res.status(500).send({message: err.message || "error in updating user"})
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    UserDb.findByIdAndDelete(id).then((data) => {
        if(!data) {
            res.status(404).send({message: "User not found"})
        }
        else {
            res.send({message: "User deleted successfully"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message || "Error while deleting user"})
    })
}