const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

async function findAllUsers() {
    const db = await getDB()
    const allUsers = db.collection("users").find().toArray()
    return allUsers
}

async function findUserById(userId) {
    const db = await getDB()
    const foundUser = db.collection("users").findOne({ _id: new ObjectId(userId) })
    return foundUser
}

async function findUserByEmail(userEmail) {
    const db = await getDB()
    const foundUser = db.collection("users").findOne({ email: userEmail })
    return foundUser
}

async function findUserByEmailOrUsername(username, userEmail) {
    const db = await getDB()
    const foundUser = db.collection("users").findOne({
        $or: [{ username: username }, { email: userEmail }]
    })
    return foundUser
}

async function insertUser(userInfo) {
    const db = await getDB()
    const insertResult = await db.collection("users").insertOne(userInfo)
    return insertResult
}

async function updateUser(userId, updateInfo) {
    const db = await getDB()
    const updateResult = db.collection("users").updateOne(
        { _id: new ObjectId(userId) },
        { $set: updateInfo }
    )
    return updateResult
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    findUserByEmailOrUsername,
    insertUser,
    updateUser
}
