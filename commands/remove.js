const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "remove",
  description: "Remove song from the queue",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);

    let removeembed = new MessageEmbed()
    .setAuthor('Pete')
    .setTitle("Remove")
    .setDescription(`❌ Removed **${song[0].title}** from the queue. \n**Removed by** ${message.author}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/608508818678218764/725802927733735504/spooky2.jpg")
    .setColor("#cf1d1d")
    message.channel.send(removeembed);

  }
};
