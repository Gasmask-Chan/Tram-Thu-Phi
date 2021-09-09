require("dotenv").config()

const IRC_USERNAME = process.env.IRC_USERNAME
const IRC_PASSWORD = process.env.IRC_PASSWORD
const Banchojs = require("bancho.js");
const client = new Banchojs.BanchoClient({ username: IRC_USERNAME, password: IRC_PASSWORD });
client.connect().then(() => {
    console.log("We're online! Now listening for incoming messages.");
    client.on("PM", (message) => console.log(`${message.user.ircUsername}: ${message.message}`));
    client.on("JOIN", (member) => {
        if (member.user.ircUsername.toLocaleLowerCase().includes("GasmaskChan")) {
            console.log(`${member.user.ircUsername} has logged in.`)
        }
    })
}).catch(console.error);