const UserDAO = require("./users-dao")


/*

user-dao.js                         db-access/         use-cases...
    findAllUsers,    --- \
    findUserById,    --- \______> UserDAO     ----> const { UserDAO, ... } = require("../db-access")
    findUserByEmail, --- /
    insertUser       --- /

*/

module.exports = {
    UserDAO
}