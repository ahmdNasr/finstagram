const nodemailer = require("nodemailer")

const dotenv = require("dotenv")
dotenv.config()


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

function sendEmail(options) {
    return new Promise((resolve, reject) => {
        const to = options.to
        const subject = options.subject
        const message = options.message

        const messageHtml = options.html || message.replaceAll("\n", "<br/>")

        transporter.sendMail({
            from: '"Finstagram Team" <supercoderpro@gmail.com>',
            to,
            subject,
            text: message,
            html: messageHtml,
        }).then((sentMessageInfo) => {
            const wasSentSuccesssFully =
                sentMessageInfo.accepted.includes(to)

            if(wasSentSuccesssFully) {
                resolve()
            } else {
                reject()
            }
        }).catch((err) => {
            console.log("Error sending email", err)
            reject()
        })
    })
}

module.exports = { sendEmail }