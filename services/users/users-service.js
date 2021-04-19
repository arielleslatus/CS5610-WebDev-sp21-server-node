const usersDao = require("../../db/daos/users-dao")

const register = (newUser, res) => {
   return  usersDao.findUserByUsername(newUser.username)
        .then((existingUser) => {
            if(existingUser) {
                res.send(403) // throw exception, return -1, etc.
            } else {
                return usersDao.createUser(newUser)
            }
    })
}

const login = (credentials) => {
    return usersDao.findUserByCredentials(username, password)
        .then((user) => {
            return user
        })
}

const createUser = (user) => {
    return usersDao.createUser(user)
}

const findAllUsers = () => {
    return usersDao.findAllUsers()
}

module.exports = {
    createUser,
    login,
    register,
    findAllUsers
}