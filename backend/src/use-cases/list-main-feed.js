const { PostsDAO } = require("../db-access")

async function listMainFeed() {
    const allPosts = await PostsDAO.findAllPosts()
    return allPosts
}

module.exports = {
    listMainFeed
}