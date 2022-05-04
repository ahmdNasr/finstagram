

const { registerUser } = require("./register-user")
const { listAllUsers } = require("./list-all-users")
const { verifyUserEmail } = require("./verify-user-email")
const { loginUser } = require("./login-user")
const { refreshUserToken } = require("./refresh-user-token")
const { addPost } = require("./add-post")

const UserService = {
    registerUser,
    listAllUsers,
    verifyUserEmail,
    loginUser,
    refreshUserToken
}

const PostService = {
    addPost
}

module.exports = {
    UserService,
    PostService
}