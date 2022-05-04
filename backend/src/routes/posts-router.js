const express = require("express")
const multer = require("multer")

const { doAuthMiddleware } = require("../auth/doAuthMiddleware")
const { PostService } = require("../use-cases")
const { imageBufferToBase64 } = require("../utils/hash")

const postsRouter = express.Router()
const pictureUploadMiddleware = multer().single("picture")

postsRouter.post("/add",
    doAuthMiddleware,
    pictureUploadMiddleware,
    async (req, res) => {
        try {
            const pictureBas64 = imageBufferToBase64(req.file.buffer, req.file.mimetype)
            const result = await PostService.addPost({
                picture: pictureBas64,
                description: req.body.description,
                postedBy: req.userClaims.sub // vom token wird entnommen, welcher user das ist...
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ err: { message: err.message } })
        }
    }
)

module.exports = {
    postsRouter
}