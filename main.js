require("dotenv").config()

const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const ytdl = require("ytdl-core")
const queue = new Map()
const { Menu } = require('discord.js-menu')

prefix = "~"

client.on("ready", () => {
  console.log("The bot is ready, LETS GOOOOOOOOOOO!")

  client.user.setPresence({
    activity: {
      name: "🤣👉"
    }
  })
})

client.on("message", msg => {
  if (msg.channel.type === "dm") return

  if (msg.content === "arakami") {
    msg.channel.send("Người sẽ không bao giờ roll ra botan!")
  }

  if (msg.content === "hime hime") {
    msg.channel.send("Suki Suki Daisuki")
  }

  if (msg.content === "botan shrimp") {
    msg.channel.send("Là chồng của tui ❤️~")
  }

  if (msg.content === "uk rs") {
    msg.channel.send(":flag_gb: :flag_ru:")
  }

  if (msg.content === "coldgreeneyes") {
    msg.channel.send("Everchanging")
    setTimeout(() => {   
      msg.channel.send("The knowing feeling")
    },2000);
    setTimeout(() => {
      msg.channel.send("Could make you fall from the dreamy skies")
    },3000);
    setTimeout(() => {
      msg.channel.send("Suddenly the deepness can get true")
    },4000);
    setTimeout(() => {
      msg.channel.send("Realize I fall along with you")
    },5000);
    setTimeout(() => {
      msg.channel.send("And you're looking into calm green eyes")
    },7000);
    setTimeout(() => {
      msg.channel.send("AWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    },8000);
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.channel.type === "dm") return
  if (!msg.content.startsWith(prefix)) return

  if (msg.content === `${prefix}prefix`) {
    msg.channel.send("My prefix is " + prefix)
  }

  if (msg.content === `${prefix}help`){
    let helpMenu = new Menu(msg.channel, msg.author.id, [
      {
        name: "main",
        content: new MessageEmbed({
          title: "Common Commands Menu",
          description: "List of normal commands",
          fields: [
            {
              name: "~help",
              value: "You just used it to show this menu! 🤣",
              inline: true
            },
            {
              name: "~prefix",
              value: "Display the Bot's prefix.",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': async () => {
              let res = await msg.channel.send("Hey-")
              setTimeout(() => {
                return res.edit("there's nothing there..")
              }, 1000)
          },
          '➡️': "funnycommand"
        }
      },
      {
        name: "funnycommand",
        content: new MessageEmbed({
          title: "Funny Commands",
          description: "List of funny commands",
          fields: [
            {
              name: "~discordgift",
              value: "Free 1 Year of Nitro 😱😱😱",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': "main",
          '❌': "delete",
        }
      }
    ], 300000)
    helpMenu.start()
    helpMenu.on("Pagechange", destination => {
      destination.content.title = "Hey, " + msg.author.username
    })
  }

  if (msg.content === `${prefix}discordgift`){
    msg.channel.send("https://discordgift.site/pqM7dUWuL8TR9OWF")
   setTimeout(function () {msg.channel.send("https://cdn.discordapp.com/emojis/880989337913815061.png?v=1")
   },2500)
  }
})


client.on("message", msg => {
  if (msg.author.bot) return false
  if (msg.content.includes("@here") || msg.content.includes("@everyone")) return false
  if (msg.mentions.has(client.user.id)) {
    msg.channel.send(`Hello? If you're looking for my prefix then its ${prefix}!`)
  }
})
client.login(process.env.BOT_TOKEN)