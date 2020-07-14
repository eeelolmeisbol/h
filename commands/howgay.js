const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "howgay",
    aliases: ["gay", "hg"],
    description: "See how ga yyou are",
    async execute(message, args) {
        let embed = new MessageEmbed()
        .setTitle(":rainbow_flag: Howgay :rainbow_flag: ")
        .setDescription("He/She/It is" + " " + Math.floor(Math.random() * 100 + 1) + "%" + " " + " Gay")
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}