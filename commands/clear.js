module.exports = {
    name: "clear",
    aliases: ["cl"],
    description: "Clear mutliple message at once!",
    async execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply(":x: you don't fucking have perms, how pathetic");
      if (!args[0])
        return message.reply("Syntax: !clear <number of messages>");
    
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel
          .send(`I have deleted ***${args[0]} messages***`)
          .then((msg) => msg.delete({ timeout: 5000 }));
      });
    }
}