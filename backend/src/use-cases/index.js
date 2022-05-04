

const { registerUser } = require("./register-user")
const { listAllUsers } = require("./list-all-users")
const { verifyUserEmail } = require("./verify-user-email")
const { loginUser } = require("./login-user")

const UserService = {
    registerUser,
    listAllUsers,
    verifyUserEmail,
    loginUser
}

module.exports = {
    UserService
}