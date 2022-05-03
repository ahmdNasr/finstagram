

const { registerUser } = require("./register-user")
const { listAllUsers } = require("./list-all-users")
const { verifyUserEmail } = require("./verify-user-email")

const UserService = {
    registerUser,
    listAllUsers,
    verifyUserEmail
}

module.exports = {
    UserService
}