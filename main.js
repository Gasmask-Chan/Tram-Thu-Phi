require("dotenv").config()

const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client()
const ytdl = require("ytdl-core")
const queue = new Map()
const { Menu } = require('discord.js-menu') //npm i discord.js-menu
const { DiscordTogether } = require("discord-together") // npm i discord-together
prefix = "~"
client.discordTogether = new DiscordTogether(client)

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

  if (msg.content === "nguyet") {
    msg.channel.send("月")
  }

  if (msg.content.includes("ngu")) {
    msg.react("👍")
  }

  if (msg.content.includes("727") || (msg.content.includes("wysi"))) {
    msg.channel.send("https://cdn.discordapp.com/emojis/810843992346460191.gif?v=1")
  }
  
  if (msg.content.includes("fc")) {
    msg.channel.send("https://cdn.discordapp.com/attachments/661857321579970581/882816415235706900/FB_IMG_16228065492074030.jpg")
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
          '⬅️': "information",
          '➡️': "funnycommand",
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
          '➡️': "arcadecommand",
        }
      },
      {
        name: "arcadecommand",
        content: new MessageEmbed({
          title: "Arcade Commands",
          description: "Lets play!!",
          fields: [
            {
              name: "~startyt",
              value: "Watching Youtube together.",
              inline: false
            },
            {
              name: "~startpoker",
              value: "Play Poker",
              inline: false
            },
            {
             name: "~startchess",
             value: "Play Chess",
             inline: false 
            },
            {
              name: "~startbetrayal",
              value: "Play Betrayal.io",
              inline: false
            },
            {
              name: "~startfishing",
              value: "Catch fish ",
              inline: true
            }
          ]
        }),
        reactions: {
          '⬅️': "funnycommand",
          '➡️': "information",
        }
      },
      {
        name: "information",
        content: new MessageEmbed({
          title: "Developers",
          description: "List of Developers",
          fields: [
            {
              name: "GasmaskChan",
              value: "The founder",
              inline: false
            },
            {
              name: "NHaiAnh07",
              value: "https://bit.ly/NHaiAnh07pf",
              inline: true
            }
          ]
        }),
        reactions: {
          '⬅': "arcadecommand",
          '➡️': "main",
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

  if (msg.content === `${prefix}startyt`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'youtube').then(async invite => {
        return msg.channel.send(`Please CLIKC ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}startpoker`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'poker').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}startchess`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'chess').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}startbetrayal`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'betrayal').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
  }

  if (msg.content === `${prefix}startfishing`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'fishing').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
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