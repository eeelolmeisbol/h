const { MessageEmbed } = require("discord.js");
const prefix = require("../config.json")
module.exports = {
  name: "report",
  aliases: ["rep"],
  description: "Report a user of your choice!",
   async execute(message, args)  {
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = message.content.slice(prefix.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `You did not specify a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `There is no channel in this guild which is called \`reports\``
        );

        message.channel.send(":white_check_mark: ***Your report has been successfully send to the staff team!***")
      let Embed = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `The member \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "User", value: `${message.author.tag} (${message.author.id})`, inline: true },
          { name: "Reported Tag", value: `${User.tag} (${User.id})`, inline: true },
          { name: "Reason", value: `\`${Reason}\``, inline: true },
          { name: "Channel", value: `${message.channel}`, inline: true},
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(`<@&701507345028743218>`)
      Channel.send(Embed);
      
    }
  },
};
