const Discord = require('discord.js')
const urban = require('urban.js')

module.exports = {
    name: "urban",
    aliases: ["urb"],
  description: "Shows you a deffinition from urban dictionary",
  usage: "COMMAND [your word]",
  async execute(message, args)  {
  //command
  const bargs =  message.content.split(' ');
  const searchString = bargs.slice(1).join(' ')
  if(!searchString)return message.channel.send(`You have to type in a word`)
  
  
  
urban(searchString).then(urbans=>{
    message.channel.send({embed: {
          
        description: `__**${urbans.word}**__\n\n**Definition**\n${urbans.definition}\n\n**Example**\n${urbans.example}\n\n ${urbans.tags}`,
        color: 0xff0000,
    
  
        timestamp: new Date(),
    
    },
  
})
})

  }
  };