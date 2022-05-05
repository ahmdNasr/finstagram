const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieSession = require("cookie-session")

const { userRouter } = require("./routes/user-routes");
const { postsRouter } = require("./routes/posts-router");

const PORT = process.env.PORT || 9000
const app = express()

app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }))         // cors
const oneDayInMs = 24 * 60 * 60 * 1000;
const isLocalHost = process.env.FRONTEND_URL === 'http://localhost:3000';
app.set('trust proxy', 1); // trust first proxy
app.use(
  cookieSession({
    name: 'session',
    secret: process.env.COOKIE_SESSION_SECRET,
    httpOnly: true,
    expires: new Date(Date.now() + oneDayInMs),
    sameSite: isLocalHost ? 'lax' : 'none',
    secure: isLocalHost ? false : true,
  })
);

app.use(morgan('dev'))  // logger
app.use(express.json()) // body parser

// Routes...

app.get("/", (req, res) => {
    res.send("it works :)")
})

app.use("/api/users", userRouter) // alle users routes
app.use("/api/posts", postsRouter) // alle posts routes

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