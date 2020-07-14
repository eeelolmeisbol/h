  const prefix = require("../config.json")
module.exports = {
    name: "say",
    aliases: ["sy"],
    description: "Get the bot to say what ever you want!",
    async execute( message, args)  {
      if (!message.member.hasPermission(["CONNECT"]))
      return message.channel.send(
        "**you don't have connect permission, thats a big smh** "
      );
  
    let argsresult;
    let mChannel = message.mentions.channels.first();
  
    message.delete();
    if (mChannel) {
      argsresult = args.slice(1).join(" ");
      if (!argsresult)
        return message.channel.send("Please say the message to send.");
      mChannel.send(argsresult);
    } else {
      argsresult = args.join(" ");
      if (!argsresult)
        return message.channel.send("Please say the message to send.");
      message.channel.send(argsresult);
    }

    },
  };