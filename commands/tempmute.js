const Discord = require("discord.js")
const ms = require("ms")

module.exports = {
    name: "tempmute",
    aliases: ["tm", "tempm"],
    description: "Temporarily mute a member",
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner)
        return message.channel.send(
          "You do not have perms"
        );
      if (!message.guild.me.hasPermission("MANAGE_ROLES"))
        return message.channel.send(
          "i do not  have perms smh smh"
        );
    
      let mutee =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!mutee)
        return message.channel.send("Please mention a user to mute");
    
      let reason = args.slice(2).join(" ");
      if (!reason) reason = "Please enter a reason";
    
      let muterole = message.guild.roles.cache.find((r) => r.name === "Muted");
      if (!muterole) {
        try {
          muterole = await message.guild.createRole({
            name: "Muted",
            color: "#b23c09",
            permissions: [],
          });
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              READ_MESSAGES: true,
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
            });
          });
        } catch (e) {
          console.log(e.stack);
        }
      }
    
      let muteTime = args[1];
      if (!muteTime) return message.channel.send("Specify a duration");
    
      await mutee.roles.add(muterole.id).then(() => {
        message.delete();
    
        let MuteEmbed = new Discord.MessageEmbed()
          .setDescription(
            `TEMPMUTED - You have been temporarily muted in \`${message.guild.name}\` \n Duration: ${muteTime}`
          )
          .setColor("f99d10");
          mutee.send(MuteEmbed).catch((err) => console.log(err));

          let TempMuteLogEmbed = new Discord.MessageEmbed()
      .setColor("f99d10")
      .setTitle(":white_check_mark: Temporarily Mute", true)
      .addField("Punished User:",`${mutee.user.tag}`, true)
      .addField("Moderator:",`${message.author}`, true)
      .addField("Duration:", `${muteTime}`, true)
      .addField("Reason", ` \`${reason} \` `, true)



    message.channel.send(TempMuteLogEmbed);

      });
    
      setTimeout(() => {
        mutee.roles.remove(muterole.id);
        let untempmutedembed = new Discord.MessageEmbed()
        .setTitle(`***:white_check_mark:  ${mutee.user.tag} has been untempmuted***`)
        .setColor("43fd50")
        message.channel.send(untempmutedembed)
        let TempMuteEmbed = new Discord.MessageEmbed()
          .setDescription(
            `UNMUTED - You have been unmuted in the server \`${message.guild.name}\` \nUnmuted by: ${message.author}`
          )
          .setColor("#b23c09");
    
        mutee.send(TempMuteEmbed)
      }, ms(muteTime));


    }
}