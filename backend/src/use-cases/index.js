

const { registerUser } = require("./register-user")
const { listAllUsers } = require("./list-all-users")
const { verifyUserEmail } = require("./verify-user-email")
const { loginUser } = require("./login-user")
const { refreshUserToken } = require("./refresh-user-token")
const { addPost } = require("./add-post")
const { listMainFeed } = require("./list-main-feed")
const { showPost } = require("./show-post")
const { showUser } = require("./show-user")
const { showProfileInfo } = require("./show-profile")

const UserService = {
    registerUser,
    listAllUsers,
    verifyUserEmail,
    loginUser,
    refreshUserToken,
    showUser,
    showProfileInfo,
}

const PostService = {
    addPost,
    listMainFeed,
    showPost
}

module.exports = {
    UserService,
    PostService
}