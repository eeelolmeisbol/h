const Discord = require("discord.js")
module.exports = {
    name: "warnings",
    aliases: [""],
    description: "po",
    async execute(message, args) {
        const user = message.mentions.members.first() || message.author
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

        if(warnings === null) warnings = 0;

        
        message.channel.send(`${user} have **${warnings}** warning(s)`)
    }

}