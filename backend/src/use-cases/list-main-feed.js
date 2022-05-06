const { PostsDAO, UserDAO } = require("../db-access")

async function listMainFeed() {
    const allPosts = await PostsDAO.findAllPosts()
    
    const allUserIdsWhoPosted = allPosts.map(post => post.postedBy)
    const userList = await UserDAO.findUsersByIdList(allUserIdsWhoPosted)

    const userListToUserListView = userList.map(user => ({
        _id: user._id,
        username: user.username,
        profilePicture: user.profilePicture
    }))

    const mainFeedPosts = allPosts.map(post => ({
        ...post, // spread operator --> nimm alle felder vom post
        // überschreibe das postedBy Feld mittels 
        postedBy: userListToUserListView.find(u => u._id.toString() === post.postedBy)
    }))

    return mainFeedPosts
}

module.exports = {
    listMainFeed
}