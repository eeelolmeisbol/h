const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "clear",
    aliases: ["cl"],
    description: "Clear mutliple message at once!",
    async execute(message, args) {
        let addrole = message.guild.member(
            message.mentions.users.first() || message.guild.members.cache.get(args[0])
          );
          let amount = message.content.slice(
            message.content.indexOf(message.content.split(" ")[1])
          );
          let role = message.guild.roles.cache.find((r) => r.name == args[1]);
          if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("❌ You do not have permission to use this command!");
          }
          if (!addrole) {
            return message.channel.send("**❌ No user was found**");
          }
          if (!role) {
            return message.channel.send("❌ This role was not found");
          } else {
            if (message.member.roles.cache.has(role.id))
            return message.channel.send(
              "❌ This person already has this role! Try again!"
            );
            addrole.roles
              .add(role.id)
              .then((m) => {
                let embed = new MessageEmbed()
                .setTitle("Command has been successful")
                .setAuthor("Pete")
                .setDescription(`${addrole} now has ${role}!`)
                .setFooter("i love roles")
                .setTimestamp()
                message.channel.send(embed)
              }

              )
              .catch((e) => console.log(e));
          }


    }
}
