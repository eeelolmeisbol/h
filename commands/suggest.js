const { MessageEmbed } = require("discord.js");
const emotes = require("../assets/emotes.json")


module.exports = {
  name: "suggest",
  aliases: ["suggies", "suggestion"],
  description: "suggest anything you wanted to",
    async execute(message, args)  {
      const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'yesvote');
      const emoji2 = message.guild.emojis.cache.find(emoji => emoji.name === 'voteno');
      const emoji3 = message.guild.emojis.cache.find(emoji => emoji.name === 'mc2');

    message.delete()
    // reasoning definition
    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`Please provide a suggestion!`)
        .then(m => m.delete(15000));

    // grab reports channel
    let sChannel = message.guild.channels.cache.find(x => x.name === "suggestions");
      if(!sChannel) return message.channel.send("You dident have channel with name `suggestions`")
    // send to reports channel and add tick or cross
    message.channel 
      .send("Your suggestion has been filled to the staff team. Thank you!")
    let suggestembed = new MessageEmbed()
      .setFooter("Pete", "https://cdn.discordapp.com/avatars/729699274002006056/f58746005f6513364240084ad7a009e6.webp?size=4096")
      .setTimestamp()
      .addField(`New Suggestion from:`, `**${message.author.tag}**`)
      .addField(`Suggestion:`, `${suggestion}`)
      .setColor('RANDOM');
    sChannel.send(suggestembed).then(async msg => {
      await msg.react(emoji);
      await msg.react(emoji2)
      await msg.react(emoji3)
    });

  }
};
 