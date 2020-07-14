const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "unmute",
    aliases: ["um"],
    description: "Unmute a user",
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner)
    return message.channel.send(
      "You don't have permission!"
    );
  if (!message.guild.me.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "I don't have permission!"
    );

  let mutee =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!mutee)
    return message.channel.send("Please mention a user to unmute");

  let muterole = message.guild.roles.cache.find((r) => r.name === "Muted");
  if (!muterole) return message.channel.send("The user has been not muted!");

  mutee.roles.remove(muterole.id).then(() => {
    message.delete();

    let MuteEmbed = new MessageEmbed()
      .setDescription(
        `UNMUTED - You have been unmuted in the server \`${message.guild.name}\``
      )
      .setColor("f99d10");

    mutee.send(MuteEmbed).catch((err) => console.log(err));
    let UnMuteLogEmbed = new MessageEmbed()
      .setColor("#b23c09")
      .addField("Unmute", `***${mutee.user.tag} has been unmuted.***`)
      .setFooter(`Pete - unMute`);
    message.channel.send(UnMuteLogEmbed);
  });
    }
}