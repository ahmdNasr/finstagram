const { PostsDAO } = require("../db-access")
const { makePost } = require("../domain/Post")

async function addPost({ picture, description, postedBy }) {
    const newPost = makePost({ picture, description, postedBy })

    const insertResult = await PostsDAO.insertPost(newPost)
    const wasSuccessFull = insertResult.acknowledged === true && insertResult.insertedId
    if(!wasSuccessFull) {
        throw new Error("Adding a new Post failed, please try again.")
    }

    const foundPost = PostsDAO.findPostById(insertResult.insertedId)
    return foundPost
}

module.exports = {
    addPost
}