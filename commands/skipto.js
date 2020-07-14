const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Skip to the selected queue number",
  execute(message, args) {
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}${name} <Queue Number>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    const song = queue.songs[0];

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
  }
};
