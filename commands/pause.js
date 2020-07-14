const { canModifyQueue } = require("../util/EvobotUtil");
const MessageEmbed = require("discord.js")
module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      let shuffleembed = new MessageEmbed()
      .setAuthor('Pete')
      .setTitle('Pause')
      .setDescription(`**${message.author} ⏸ paused the music.**`)
      .setColor("#cf1d1d")
      message.channel.send(shuffleembed);
    }
  }
};
