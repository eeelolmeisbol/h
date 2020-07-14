const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "mute",
    aliases: ["mu"],
    description: "Mute a specified person",
    async execute(message, args) {

        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner)
    return message.channel.send(
      "you don't have perms to use this command little fucker"
    );
  if (!message.guild.me.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      " `M"
    );

  let mutee =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!mutee)
    return message.channel.send("Mention someone to mute");

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Please enter a reason";

  let muterole = message.guild.roles.cache.find((r) => r.name === "Muted");
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#b23c09",
        permissions: [],
      });
      message.guild.channels
        .filter((channel) => channel.type === "text")
        .forEach(async (channel) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
          });
        });
    } catch (e) {
      console.log(e.stack);
    }
  }
  mutee.roles.add(muterole.id).then(() => {
    message.delete();

    let MuteEmbed = new MessageEmbed()
      .setDescription(
        `MUTED -You have been muted in the server \`${message.guild.name}\` For the reason of: **${reason}**`
      )
      .setColor("f99d10");

    mutee.send(MuteEmbed).catch((err) => console.log(err));
    let MuuteLogEmbed = new MessageEmbed()
      .setColor("f99d10")
      .addField("Mute", `${mutee.user.tag} has been muted with the reason of:  **${reason}.**`)
      .setTimestamp()
      .setFooter(`Unmute - Pete`);
    message.channel.send(MuuteLogEmbed);
  });
    }
}