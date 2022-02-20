require("dotenv").config()

const {BOT_TOKEN, IRC_USERNAME, IRC_PASSWORD, OSU_API_KEY} = process.env

const Discord = require("discord.js")
const client = new Discord.Client()

const Banchojs = require("bancho.js")
const banchoclient = new Banchojs.BanchoClient({ username: IRC_USERNAME, password: IRC_PASSWORD, apiKey: OSU_API_KEY})

const googleTTS = require('google-tts-api') 
const { MessageEmbed } = require("discord.js")
const ytdl = require("ytdl-core")
const queue = new Map()
const { Menu } = require('discord.js-menu')
const { DiscordTogether } = require("discord-together")
const currentDate = new Date();
prefix = "~"
client.discordTogether = new DiscordTogether(client)
const pepenhi = ["hai anh", "haianh", "nhaianh", "hải anh", "bot"]
const chonkk = ["chon", "chôn", "trôn", "troll"]
const den = ["nigga", "nigg", "nigger","đen lắm", "den lam"]

client.on("ready", () => {
  console.log("The bot is ready, LETS GOOOOOOOOOOO!")

  client.user.setPresence({
    activity: {
      name: "Super Idol的笑容都没你的甜八月正午的阳光都没你耀眼热爱 105 °C的你滴滴清纯的蒸馏水你不知道你有多可爱跌倒后会傻笑着再站起来"
    }
  })
  
})

client.on("message", msg => {
  if (msg.channel.type === "dm") return
  if (msg.author.bot) return

  if (msg.content.toLocaleLowerCase() === "hime hime") {
    msg.channel.send("Suki Suki Daisuki")
  }

  if (msg.content.toLowerCase() === "uk rs") {
    msg.channel.send(":flag_gb: :flag_ru:")
  }

  if (msg.content === "nguyet" || msg.content === "nguyệt") {
    msg.channel.send("月")
  }

  if (msg.content.toLowerCase().includes("ngu") && pepenhi.some(checkhaianh)){
    if (msg.author.id === "648504249050857482") return
    msg.react("👍")
  }
  function checkhaianh(names) {
    return msg.content.toLowerCase().includes(names)
  }

  if (msg.content === ">osutop" && msg.author.id === "648504249050857482") {
    msg.channel.send("Ban la nhat")
  }

  if (msg.content.includes("horny") || (msg.content.includes("hỏny"))) {
    if (msg.content.includes(`${prefix}hornyrate`)) return
    msg.react("<a:koronebonkhorny:879355729046298716>")
  }

  if (chonkk.some(checkchon)) {
    msg.react("<:chon:883178837758865418>")
  }
  function checkchon(chonthe) {
    return msg.content.toLowerCase().includes(chonthe)
  }

  if (msg.content.toLowerCase() === "khò" || msg.content.toLowerCase() === "kho`" || msg.content.toLowerCase() === "kho") {
    msg.channel.send("oyasumi~")
  }
  
  if (den.some(checkden)) {
    //only works if the messages is on the Neko no Sekai server.
    if (msg.guild.id == "678893111182622732") {
      if (msg.member.roles.cache.some(role => role.id === "750283340996673559")) return //if the message author has the owner role then return.
      if (msg.member.roles.cache.some(role => role.id == "809610383043592242")) return //if the message author has the admin role then return.
      if (msg.author.bot) return
      if (msg.member.roles.cache.some(role => role.id === "896751489358368768")) return
      msg.member.roles.add("896751489358368768") //Add the muted role.
      msg.reply("Ban da bi gui vao lau dai tinh ai 30 phut")
      setTimeout(() => {
        msg.member.roles.remove("896751489358368768")
      }, 1800000)
    }
  }
  function checkden(denlam) {
    return msg.content.toLowerCase().includes(denlam) || msg.content.toLowerCase() === "đen"
  }

  if (msg.content === "~coldgreeneyes") {
    setTimeout(() => {
    msg.channel.send("Everchanging")
    },500);
    setTimeout(() => {   
      msg.channel.send("The knowing feeling")
    },2000);
    setTimeout(() => {
      msg.channel.send("Could make you fall from the dreamy skies")
    },4000);
    setTimeout(() => {
      msg.channel.send("Suddenly the deepness can get true")
    },6000);
    setTimeout(() => {
      msg.channel.send("Realize I fall along with you")
    },8000);
    setTimeout(() => {
      msg.channel.send("And you're looking into calm green eyes")
    },10000);
    setTimeout(() => {
      msg.channel.send("AWOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    },12000);
  }

  if (msg.content === "~geddan") {
    setTimeout(() => {
    msg.channel.send("Get")
    },500);
    setTimeout(() => {
    msg.channel.send("Down")
    },1000);
    setTimeout(() => {   
     msg.channel.send("Yureru mawaru fureru setsunai")
    },2000);
    setTimeout(() => {
    msg.channel.send("Kimochi")
    },6000);
    setTimeout(() => {
      msg.channel.send("Futari de issho ni nemuru winter land")
    },10000);
    setTimeout(() => {
      msg.channel.send("Anata")
    },15000);
    setTimeout(() => {
      msg.channel.send("Dake mitsumete")
    },17000);
    setTimeout(() => {
      msg.channel.send("Watashi dake mitsumete")
    },19000);
    setTimeout(() => {
      msg.channel.send("Asu woooooo")
    },21000);
    setTimeout(() => {
      msg.channel.send("Chikau")
    },28000);
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
            },
            {
              name: "~roll",
              value: "Get a random number in range 1 to 1000 (Can you get 727?)",
              inline: false
            },
            {
              name: "~hornyrate",
              value: "Are you horny?",
              inline: false
            },
            {
              name: "~ngurate",
              value: "How much % of your stupidity?",
              inline: false
            },
            {
              name: "~join / ~disconnect",
              value: "Join / Disconnect the voice channel",
              inline: false
            },
            {
              name: "~tts <text>",
              value: "text to speech (lower than 200 characters)",
              inline: false
            },
            {
              name: "~play <Youtube link> / ~stop",
              value: "Play music on Youtube also can't be able to play a playlist at this time / stop & disconnect",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': "main",
          '➡️': "sfx",
        }
      },
      {
        name: "sfx",
        content: new MessageEmbed({
          title: "SFX Commands",
          description: "SFX memes,..",
          fields: [
            {
              name: "~aiosima",
              value: "Chinese girl laugh",
              inline: false
            },
            {
              name: "~florentino",
              value: "qua gk3 gom",
              inline: false
            },
            {
              name: "~genesis",
              value: "nguoi nha que",
              inline: false
            },
            {
              name: "~ping",
              value: "pong",
              inline: false
            },
            {
              name: "~wysi",
              value: "727",
              inline: false
            },
            {
              name: "~taiwan",
              value: "-999999 social credits",
              inline: false
            },
            {
              name: "~alert",
              value: "ooooooooo",
              inline: false
            },
            {
              name: "~daika",
              value: "em chao dai ca a",
              inline: false
            },
            {
              name: "~chon",
              value: "nhu cmt tren",
              inline: false
            },
            {
              name: "~bucac",
              value: "nhu cmt tren",
              inline: false
            },
            {
              name: "~cocc",
              value: "lam sua",
              inline: false
            },
            {
              name: "~tham",
              value: "diana",
              inline: false
            },
            {
              name: "~haianh",
              value: "ngu",
              inline: false
            },
            {
              name: "~sua",
              value: "gau gau",
              inline: false
            },
            {
              name: "~duathoi",
              value: "bo may dua thoi",
              inline: false
            },
            {
              name: "~lugowo",
              value: "lugowo zheng",
              inline: false
            },
            {
              name: "~backy",
              value: "bucky??",
              inline: false
            },
            {
              name: "~backycc",
              value: "buckylacaiccj",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅': "funnycommand",
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
              name: "~start yt",
              value: "Watching Youtube together.",
              inline: false
            },
            {
              name: "~start poker",
              value: "Play Poker",
              inline: false
            },
            {
             name: "~start chess",
             value: "Play Chess",
             inline: false 
            },
            {
              name: "~start betrayal",
              value: "Play Betrayal.io",
              inline: false
            },
            {
              name: "~start fishing",
              value: "Catch fish",
              inline: true
            },
            {
              name: "~start lettertile",
              value: "Play lettertile",
              inline: false
            },
            {
              name: "~start wordsnack",
              value: "Play wordsnack",
              inline: false
            },
            {
              name: "~start doodlecrew",
              value: "Play doodlecrew",
              inline: false
            },
            {
              name: "~start spellcast",
              value: "Play spellcast",
              inline: false
            },
            {
              name: "~start awkword",
              value: "Play awkword",
              inline: false
            },
            {
              name: "~start puttparty",
              value: "Play puttparty",
              inline: false
            }
          ]
        }),
        reactions: {
          '⬅️': "sfx",
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
              value: "https://bit.ly/NHaiAnh07pf", //de cho co thoi chu no co viet con cac gi may dau
              inline: true
            },
            {
              name: "Source Code:",
              value: "||https://github.com/Gasmask-Chan/Tram-Thu-Phi||",
              inline: false
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
   },10000)
  }

  if (msg.content === `${prefix}start yt`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'youtube').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start poker`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'poker').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start chess`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'chess').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start betrayal`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'betrayal').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start fishing`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'fishing').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start lettertile`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'lettertile').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start wordsnack`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'wordsnack').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start doodlecrew`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'doodlecrew').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start spellcast`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'spellcast').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start awkword`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'awkword').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }

  if (msg.content === `${prefix}start puttparty`) {
    if (msg.member.voice.channel) {
      client.discordTogether.createTogetherCode(msg.member.voice.channel.id, 'puttparty').then(async invite => {
        return msg.channel.send(`Please CLICK ON THIS LINK to join: ${invite.code}`)
      })
    }
    else (msg.reply("You must to connect the voice channel to use this command!"))
  }
  
  if (msg.content === `${prefix}roll`) {
    var number = Math.floor(Math.random() * 1000) + 1
    if (number == 727) {
      msg.reply(`YOU FUCKING ROLLED ${number}!! WHEN YOU FUCKING SEE IT!`)
    } else {
      if (number == 666) {
        msg.reply(`You rolled ${number}. Wtf man? :skull:`)
      } else {
          msg.reply(`You rolled ${number}.`)
        }
      }
  }

  if (msg.content.includes(`${prefix}hornyrate`)) {
    var n = Math.floor(Math.random() * 100) + 1
    msg.channel.send(`${n}% Horny`)
  }

  if (msg.content.includes(`${prefix}ngurate`)) {
    if (msg.author.id === "648504249050857482") { msg.channel.send("May ngu la cai chac roi con hoi?")}
    if (msg.content.includes("<@!648504249050857482>")) { msg.channel.send("NhaiAnh ngu so 1 Southeast Asia"); return} 
    var n = Math.floor(Math.random() * 100) + 1
    msg.channel.send(`${n}% Ngu`)
  }

  //ngu hai anh
  if (msg.content === `${prefix}vanmau ruleplayer`){
    msg.channel.send("Này ông, tôi không biết ông thấy như thế nào, nhưng đối với tôi, nó ngu, cơ mà có vẻ như nó không đáp ứng được tiêu chí là một thông báo giải cho anh em trong server và cả tôi, tôi chắc chắn rằng ông có thể đọc luật. Nhưng không, tôi và cả anh em staff trong server cảm thấy thật buồn khi có ông trong server, chúng tôi bị triggered về những cố gắng ông đã đóng góp để phát triển cơn giận trong tôi và anh em staff, chào ông và thân ái :wave:")
  }

  if (msg.content === `${prefix}join`) {
    const voiceChannel = msg.member.voice.channel
    if (!voiceChannel) return msg.reply('You must to connect the voice channel to use this command!')
    const audioURL = googleTTS.getAudioUrl('Chào mừng bạn đến với đài tiếng nói của vợ Gasmask được tài trợ bởi akane bướm', {
      lang: 'vi',
      slow: false,
      host: 'https://translate.google.com',
    })
    voiceChannel.join().then(connection => {
      connection.play(audioURL)
    })
  }
  if (msg.content === `${prefix}aiosima`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/chinese-girl-laugh.mp3')
    })
  }

  if (msg.content === `${prefix}backy`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/bac-ky.mp3')
    })
  }

  if (msg.content === `${prefix}florentino`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/florentino_cphRjcL.mp3')
    })
  }

  if (msg.content === `${prefix}genesis`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/nguoi-nha-que.mp3')
    })
  }

  if (msg.content === `${prefix}ping`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/discord-notification.mp3')
    })
  }

  
  if (msg.content === `${prefix}taiwan`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/asian_meme_sound.mp3')
    })
  }

  if (msg.content === `${prefix}alert`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/999-social-credit-siren.mp3')
    })
  }

  if (msg.content === `${prefix}wysi`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/wysi.mp3')
    })
  }


  if (msg.content === `${prefix}daika`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/dai-ca.mp3')
    })
  }

  if (msg.content === `${prefix}chon`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/perfect-laugh.mp3')
    })
  }

  if (msg.content === `${prefix}bucac`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/bu-cu.mp3')
    })
  }

  if (msg.content === `${prefix}cocc`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/coconcac.mp3')
    })
  }

  if (msg.content === `${prefix}tham`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/diana-sieu-tham.mp3')
    })
  }

  if (msg.content === `${prefix}haianh`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/ngu-cho-nay.mp3')
    })
  }

  if (msg.content === `${prefix}sua`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/bomman-gay_CQBLyhx.mp3')
    })
  }

  if (msg.content === `${prefix}dmhaianh`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/dm-haianh.mp3')
    })
  }

  if (msg.content === `${prefix}duathoi`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/bo-dua-thoi.mp3')
    })
  }

  if (msg.content === `${prefix}backycc`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/bac-ky-la-cc-j.mp3')
    })
  }

  if (msg.content === `${prefix}lugowo`) {
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play('https://www.myinstants.com/media/sounds/lugowo.mp3')
    })
  }

  if (msg.content.startsWith(`${prefix}play`)) {
    let vdlink = msg.content.slice(6)
    console.log(vdlink)
    if (vdlink.length < 15) return msg.reply('Please repeat this command again but with videos link!')
    if (!msg.member.voice.channel) return msg.reply('You must to connect the voice channel to use this command!')
    msg.channel.send(`:musical_note:Now playing your song:musical_note:`)
    msg.member.voice.channel.join().then( connection =>{ 
      connection.play(ytdl(vdlink, {filter: 'audioonly'}))
    })
    
  }
  

  if (msg.content === `${prefix}disconnect` || msg.content === `${prefix}stop`) {
    if (!msg.member.voice.channel) return
    msg.member.voice.channel.leave()
  }

  if (msg.content.startsWith(`${prefix}tts`)) {
    const voiceChannel = msg.member.voice.channel
    if (!voiceChannel) return msg.reply('You must to connect the voice channel to use this command!')
    const string = msg.content.slice(4)
    if (string.length === 0) return msg.reply('Thêm text vào em')
    if (string.length > 200) return msg.reply('Text dài quá sao nói hết được!')
    const audioURL = googleTTS.getAudioUrl(string, {
      lang: 'vi',
      slow: false,
      host: 'https://translate.google.com',
    })
    voiceChannel.join().then(connection => {
      connection.play(audioURL)
    })
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content.includes("@here") || msg.content.includes("@everyone")) return
  if (msg.mentions.has(client.user.id)) {
    if (msg.content.includes("sech ko em")) {
      if (msg.author.id === "642719140796301322") {
        msg.reply("ok anh <:Sataniauwu:850315132386672640>")
      }
      else {
        msg.reply("m cut")
      }
    }
    else {
    msg.channel.send(`Hello? If you're looking for my prefix then its` + " ```" + `${prefix}` + "```")
    }
  }
})

client.on("voiceStateUpdate", (oldState, newState) => {
  let oldUser = oldState.channelID
  let newUser = newState.channelID

  if (oldUser === null || typeof oldUser == 'undefined') {
    console.log('kkk');
    return;
  }
  console.log('k');
})

banchoclient.connect().then(() => {
  console.log("Connected to Bancho.")
  banchoclient.getChannel("#osu").join().then(() => {         
    banchoclient.on("JOIN", member => {
          if (member.user.ircUsername.includes("NHaiAnh07")) {
            client.channels.cache.get("809443529322528798").send(`con cho nghien ${member.user.ircUsername} vua dang nhap vao osu.`)
            banchoclient.getUser("NHaiAnh07").sendMessage("tat game mau thang cho nghien nay") 
          }
          
          if (member.user.ircUsername.includes("genesis97")) {
            client.channels.cache.get("809443529322528798").send(`dit me may ${member.user.ircUsername} hoc kieu bi lai trong oxu.`)
          }
      })
  })  
}).catch(console.error)

client.login(BOT_TOKEN)