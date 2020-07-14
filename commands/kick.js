const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "kick",
    aliases: ["ki"],
    description: "Kick a user!",
    async execute(message, args) {
        let kickedUser = message.guild.member(
        message.mentions.users.first() || message.guild.members.cache.get(args[0])
      );
      if (!kickedUser) {
        return message.channel.send("**No one found.**");
      }
      let kickReason = args.join(" ").slice(19);
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("You do not have perms to use this you pathetic shit!");
      }
      if (kickedUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You cannot kick this person cause he has same or higher perms than you");
      }
      let kickEmbed = new MessageEmbed()
        .setDescription("-Kick-")
        .setThumbnail(message.guild.iconURL("png", true))
        .setColor("f99d10")
        .addField(
          "User that has been kicked:",
          `${kickedUser} (ID: ${kickedUser.id})`
        )
        .addField(
          "Kicked by:",
          `${message.author} (ID: ${message.author.id})`
        )
        .addField("Channel", message.channel)
        .addField("Reason", kickReason ? kickReason : "Any reason")
        .setFooter(`unkick`);
    
      let dmkickEmbed = new MessageEmbed()
        .setDescription(
          `WARNING - You have been kicked from the server **${message.guild.name}** for the reason: **${kickReason}**`
        )
        .setColor(colours.red_light);
    
      kickedUser.createDM().then((channel) => {
        channel.send(dmkickEmbed);
      });
    
      message.guild.member(kickedUser).kick(kickReason);
      message.channel.send(kickEmbed);

    }
}