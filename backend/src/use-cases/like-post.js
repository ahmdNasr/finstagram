const { UserDAO, PostsDAO } = require("../db-access")

async function likePost({ postId, userId }) {
    const [foundUser, foundPost] = await Promise.all([
        UserDAO.findUserById(userId),
        PostsDAO.findPostById(postId)
    ])

    if(!foundPost) {
        throw new Error("Post not found.")
    }

    if(!foundUser) {
        throw new Error("User doesn't exist anymore...")
    }

    const result = await PostsDAO.likePost(postId, userId)
    
    return result
}

module.exports = {
    likePost
}