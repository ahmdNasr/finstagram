const { PostsDAO, UserDAO } = require("../db-access")
const { makePost } = require("../domain/Post")
const { makeUser } = require("../domain/User")

async function showPost({ postId }) {
    const foundPost = await PostsDAO.findPostById(postId)
    if(!foundPost) {
        throw new Error("Post with provided id not found...")
    }

    const post = makePost(foundPost)
    const foundUser = await UserDAO.findUserById(post.postedBy)
    if(!foundUser) {
        throw new Error("Poster of this post not found anymore...")
    }

    const user = makeUser(foundUser)

    return { 
        // post objekte komplett 1 zu 1 übernehmen
        ...post,
        // postedBy Überschreiben
        postedBy: {
            _id: user._id,
            profilePicture: user.profilePicture,
            username: user.username
        }
    }   
}

module.exports = {
    showPost
}