const { canModifyQueue } = require("../util/EvobotUtil");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Resume currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    const song = queue.songs[0];

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      let resumembed = new MessageEmbed()
      .setAuthor('Pete')
      .setTitle('**Remove**')
      .setDescription(`${message.author} ▶ resumed the music! \nNow Resumed to play: ${song.url}`)
      .setColor("#cf1d1d")
      return message.channel.send(resumembed);
    }

    return message.reply("The queue is not paused.").catch(console.error);
  }
};
