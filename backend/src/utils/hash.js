const crypto = require("crypto");
const jwt = require("jsonwebtoken")

function hash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

function createRandomSalt() {
    return crypto.randomBytes(64).toString('hex');
}

function createPasswordHash(password, salt) {
    return hash(password + salt)
}

function createToken(user, type = "access", lifespanInSeconds = 60 * 10) {
    const initiatedAt = Math.floor(Date.now() / 1000)
    const expiresAt = initiatedAt + lifespanInSeconds // 10 minuten, 11 mintunten, 24h 

    const tokenPayload = {
        sub: user._id, // subjekt
        type: type, // eg: "access" token vs. "refresh" token
        iat: initiatedAt, // initiaed at in seconds
        exp: expiresAt    // expires
    }

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET)
    return token
}

function imageBufferToBase64(imgBuffer, mimeType) {
    return "data:" + mimeType + ";base64," + imgBuffer.toString('base64')
}

function genereteRandomSixDigitCode() {
    return Math.random().toString().slice(2, 8)
}

module.exports = {
    hash,
    createRandomSalt,
    createPasswordHash,
    createToken,
    imageBufferToBase64,
    genereteRandomSixDigitCode
}

// Rainbow Table: Hash <--> Passwort <--> Hash Algo
// Hallo + ???
// 753692ec36adb4c794c973945eb2a99c1649703ea6f76bf259abb4fb838e013e

// x09309309ü13i13üi1  <-- Hallo1309üj1093rj0ü913jr
// 9835u9p24up9813u91  <-- Hallo092409498u24pui2p33

// Hallo Welt!
// a582e8c28249fe7d7990bfa0afebd2da9185a9f831d4215b4efec74f355b301a

// 1. Besonderheit: Einwegfunktion aka. Umkehrfunktion ist schwer zu berechenen
// 2. Besonderheit: Gleicher input --> gleicher output
// 3. Besonderheit: Chaos --> minimale Änderung im Input --> fatalen Effekt/Änderung im Output
