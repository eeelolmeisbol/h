const Discord = require("discord.js")
module.exports = {
    name: "family",
    aliases: ["jimmy", "adam", "jimmyadam", "familytree", "fmy", "ft"],
    description: "family",
    execute(message) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You don't have my cock sucked yet")
        }
        
        let embed = new Discord.MessageEmbed()
        .setTitle("The only married people are: Jimmy and adam")
        .setThumbnail("https://cdn.discordapp.com/avatars/556288407890952223/6dfe24e9b08e28214e9904f3ff5ead25.webp?size=4096")
        .setImage("https://cdn.discordapp.com/avatars/663499894706798611/6d7f66d5077381971eee376c6eef42b2.webp?size=4096")
        .setColor("RANDOM")
        .setFooter("Family tree, adam x jimmy :heart:")
        message.channel.send(embed)
    }
}