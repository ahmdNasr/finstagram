const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { body } = require('express-validator');

const { UserService } = require("./use-cases");
const { doValidations } = require("./facade/doValidations");

const PORT = process.env.PORT || 9000
const app = express()

app.use(cors())         // cors
app.use(morgan('dev'))  // logger
app.use(express.json()) // body parser

// Routes...

app.get("/", (req, res) => {
    res.send("it works :)")
})

// Authentication Required!!! 
app.get("/api/users/all", async (_, res) => {
    try {
        const allUsers = await UserService.listAllUsers()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err.message } })
    }
})

app.post("/api/users/login",
    body("username").isLength({ min: 1 }),
    body("password").isStrongPassword(),
    doValidations,
    async (req, res) => {
        try {
            const result = await UserService.loginUser({
                username: req.body.username,
                password: req.body.password
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

app.post("/api/users/register",
    // facade layer
    body("username").isLength({ min: 1, max: 25 }),
    body("email").isEmail(),
    body("password").isStrongPassword(),
    doValidations,
    async (req, res) => {
        try {
            const userInfo = req.body
            const result = await UserService.registerUser(userInfo)

            res.status(201).json(result) // 201 ==> 'Created'
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

app.post("/api/users/verifyEmail", 
    // facade layer
    body("email").isEmail(),
    body("sixDigitCode").isLength({ min: 6 }),
    doValidations,
    async (req, res) => {
        try {
            const email = req.body.email
            const sixDigitCode = req.body.sixDigitCode
            const result = await UserService.verifyUserEmail({ email, sixDigitCode })

            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

app.listen(PORT, () => console.log("Server ready at", PORT))


/*

// Plan
User (profilepicture, username, email, password)
Posts (pic, description, likes, comments)
Use-Cases: 
    * register
    * verify account (only verified users can log in...) --> Email with 6-digit-code
    * login
    * [forgot + reset password]
    * profile page (mit seinen profil-infos + posts)
    * set profile picture
    * User Posts new Pics + description
    * Main Finsta-Feed (chronologisch)
    * like other pics
    * [kommentieren...]
Technical Notes:
    * jwt access token
    * refresh tokens!!
*/