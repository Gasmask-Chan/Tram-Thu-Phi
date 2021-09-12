require("dotenv").config()

const IRC_USERNAME = process.env.IRC_USERNAME
const IRC_PASSWORD = process.env.IRC_PASSWORD
const OSU_API_KEY = process.env.OSU_API_KEY
const Banchojs = require("bancho.js")
const client = new Banchojs.BanchoClient({ username: IRC_USERNAME, password: IRC_PASSWORD, apiKey: OSU_API_KEY })

client.connect().then(() => {
    console.log("We're online!")
    client.on("PM", message => console.log(`${message.user.ircUsername}: ${message.message}`))
    client.getChannel("#vietnamese").join().then(() => {
        client.on("JOIN", member => {
            if (member.user.ircUsername.includes("NHaiAnh07") || member.user.ircUsername.includes("Genesis97")) {
                console.log(`${member.user.ircUsername} has logged in.`)
            }
        })
        client.on("PART", member => {
            if (member.user.ircUsername.includes("NHaiAnh07") || member.user.ircUsername.includes("Genesis97")) {
                console.log(`${member.user.ircUsername} has logged out.`)
            }
        })
    })
}).catch(console.error)

