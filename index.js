const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.js");

client.on('ready', () => {
    console.log(`${client.user.tag} is locked and loaded.`)
})

client.on("message", (message) => {
    if (message.author.bot) return
    if (message.channel.id === config.channelid) {
    const fetch = require("node-fetch").default;
                     
    fetch(`https://api.snowflakedev.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&name=${config.botname}`, {
        headers: {
            "Authorization": config.authorization
        }
    })
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.message);
        })
        .catch(e => console.error('An error occured. Please ensure if you provided the correct details in config.js'));
      }
      console.log(`Message: ${message.content}`)
    })

client.login(`${config.token}`).catch(() => console.log("Invalid token."))



    

