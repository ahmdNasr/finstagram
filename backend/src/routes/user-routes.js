
const express = require("express")

const { body } = require('express-validator');

const { UserService } = require("../use-cases");
const { doValidations } = require("../facade/doValidations");
const { doAuthMiddleware } = require("../auth/doAuthMiddleware");

const userRouter = express.Router()

// Authentication Required!!! 
userRouter.get("/all", doAuthMiddleware, async (_, res) => {
    try {
        const allUsers = await UserService.listAllUsers()
        res.status(200).json(allUsers)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: { message: err.message } })
    }
})

userRouter.post("/login",
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

userRouter.post("/refreshtoken",
    body("refreshToken").isLength({ min: 10 }),
    doValidations,
    async (req, res) => {
        try {
            const result = await UserService.refreshUserToken({
                refreshToken: req.body.refreshToken,
            })
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

userRouter.post("/register",
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

userRouter.post("/verifyEmail", 
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

module.exports = {
    userRouter
}