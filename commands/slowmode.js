const prefix = require("../config.json")
module.exports = {
    name: "slowmode",
    aliases: ["sm"],
    description: "Specify the channel slowmode",
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner)
        return message.channel.send(
          "You do not have perms"
        );
        if (!args[0])
        return message.channel.send(
          `You did not specify the time in seconds you wish to set this channel's slow mode too!`
        );
      if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
      let reason = message.content.slice(
        prefix.length + 9 + args[0].length + 1
      );
      if (!reason) {
        reason == "No reason provided!";
      }
      message.channel.setRateLimitPerUser(args[0], reason);
      message.channel.send(
        `Set the slowmode of this channel too **${args[0]}**`
      );
  
    }
}