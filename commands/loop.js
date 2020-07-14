const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "Toggle music loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    let loopembed = new MessageEmbed()
    .setAuthor('Pete')
    .setDescription(`Loop is now ${queue.loop ? "**on**" : "**off**"}`)
    .setFooter(`Loop is ${queue.loop ? "**on**" : "**off**"} by ${message.author}`)
    .setColor("#cf1d1d")
    return message.channel.send(loopembed);
  }
};
