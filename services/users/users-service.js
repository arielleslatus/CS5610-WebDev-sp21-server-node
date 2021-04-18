const usersDao = require("../../db/daos/users-dao")

const register = (user) => {
    usersDao.findUserByUsername(user.username)
        .then((user) => {
            if(user) {
                // throw exception, return -1, etc.
            } else {
                return usersDao.createUser(user)
            }
    })
}

const login = (credentials) => {
    usersDao.findUserByCredentials(credentials)
        .then((user) => {
            return user
        })
}

const createUser = (user) => {
    return usersDao.createUser(user)
}

module.exports = {
    createUser,
    login,
    register
}