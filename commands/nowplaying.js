const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "np",
  description: "Show now playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing. Use s!play <song> to see the current song!").catch(console.error);
    const song = queue.songs[0];

    let nowPlaying = new MessageEmbed()
      .setTitle("**Now playing**")
      .addField(
        " 🎶 Currently playing:",
        `${song.title}`,
        true
      )

      .addField(
        "🔗 Link",
        `${song.url}`,
        true
      )
      .addField(
        "⏱ Duration",
        (new Date(song.duration * 1000).toISOString().substr(11, 8)),
        true
        
      )
      .setColor("#F8AA2A")
      .setTimestamp();

    return message.channel.send(nowPlaying);
  }
};
