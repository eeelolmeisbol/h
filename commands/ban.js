const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "ban",
    aliases: ["b"],
    description: "Ban a user off the server",
    async execute(message, args) {
        let bannedUser = message.guild.member(
            message.mentions.users.first() || message.guild.members.cache.get(args[0])
          );
          if (!bannedUser) {
            return message.channel.send("❌ **Person not found.**");
          }
          let banReason = args.join(" ").slice(19);
          if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("❌ You do not have permission to use this command");
          }
          if (bannedUser.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("❌ You cannot ban this user!");
          }
          let banEmbed = new MessageEmbed()
            .setDescription(":hammer: Ban :hammer:")
            .setColor("f99d10")
            .addField(
              "User that has been banned",
              `${bannedUser} (${bannedUser.id})`
            )
            .addField(
              "Has been banned by:",
              `${message.author} (${message.author.id})`
            )
            .addField("Channel", message.channel)
            .addField("With the reason of:", banReason)
            .setFooter(`Ban - pete `);
        
          let bandmEmbed = new MessageEmbed()
            .setDescription(
              `WARNING - You have been banned in the server: **${message.guild.name}`
            )
            .addField(
              "Reason:",
              `${banReason}`
            )
            .addField(
              "Moderator:",
              `${message.author}`
            )
            .setColor("#b23c09");
        
          bannedUser.createDM().then((channel) => {
            channel.send(bandmEmbed);
          });
          message.guild.member(bannedUser).ban(banReason);
          message.channel.send(banEmbed);
    }
}