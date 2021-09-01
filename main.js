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
  if (msg.content === "arakami") {
    msg.channel.send("Người sẽ không bao giờ roll ra botan!")
  }

  if (msg.content === "hime hime") {
    msg.channel.send("Suki Suki Daisuki")
  }

  if (msg.content === "botan shrimp") {
    msg.channel.send("Là chồng của tui ❤️~")
  }

})

client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

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
              value: "You just used it to show this menu! 🤣👉",
              inline: true
            }
          ]
        }),
        reactions: {
          '⬅️': async () => {
              let res = await msg.channel.send("Hey-")
              setTimeout(() => {
                return res.edit("there's nothing there...")
              }, 1000)
          },
          '➡️': "funnycommand"
        }
      },
      {
        name: "funnycommand",
        content: new MessageEmbed({
          title: "Funny Commands",
          description: "Comming soon~"
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
})

client.login(process.env.BOT_TOKEN)