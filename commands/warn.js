const db = require("quick.db")
const MessageEmbed = require("discord.js")

module.exports = {
    name: "warn",
    aliases: ["wrn", "war", "wran"],
    description: "warn a user smh",
    async execute(message, args) {
        const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'yes_tick');
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send("You do not have permission, smh dickhead")
          }
          
          const user = message.mentions.members.first()
          
           if(!user) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reason>")
          }

          if(message.author.id === user.id) {
            return message.channel.send("You can not warn yourself")
          }

          if(message.author.id === message.guild.owner.id) {
            return message.channel.send("You really tried to warn jimmy, pathetic")
          }

          const reason = args.slice(1).join(" ")

        if(!reason) {
        return message.channel.send("Please provide reason to warn - warn @mention <reason>")
        }

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === 5) {
            return message.channel.send(`${message.mentions.users.first().username} uh-oh! this person has 5 warns, ban time!`)
          }

          if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason}`)

            await message.channel.send(`***${emoji} I successfully warned ${user} for the reason of ${reason}***`)
          }

    }

}