const usersService = require("../services/users/users-service")

module.exports = (app) => {
    const usersModel = require("../db/users/users-model")

    const register = (req, res) => {
        const user = req.body;
        usersService.register(user)
            .then((actualUser) => {
                req.session['currentUser'] = actualUser;
                res.send(actualUser);
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        usersService.login(credentials)
            .then((user) => {
                if (user) {
                    req.session["currentUser"] = user;
                    res.send(user);
                } else {
                    res.send(403); // authentication error
                }
            })

        //     usersModel.find({username: user.username,
        //                     password: user.password}).then((actualUser) => {
        //                         if(actualUser) {
        //                             req.session['currentUser'] = actualUser
        //                             res.send(actualUser)
        //                         } else {
        //                             res.send(403) // unsecure, authentication failed, did not find user
        //                         }
        //     })
    }

    const logout = (req, res) => {
        req.session
    }

    const profile = (req, res) => {
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            res.send(currentUser)
        } else {
            res.send(403)
        }
    };

    const createUser = (req, res) => { // should only be able to happen by an admin. Guard in UI and in here.
        const newUser = req.body;
        const currentUser = req.session["profile"];
        if(currentUser && currentUser.role === "ADMIN") {
            usersService.createUser(newUser)
        } else {
            res.send(403)
        }
    };



    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.post("/api/profile", profile)
    app.post("/api/users", createUser)


}