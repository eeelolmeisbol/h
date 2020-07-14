const { MessageEmbed } = require("discord.js");
const prefix = require("../config.json")
module.exports = {
  name: "8ball",
  aliases: ["8b"],
  description: "There is a big chance I insult you!",
  async execute(message, args)  {
    let question = message.content.slice(prefix.length + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
        "no, you stupid bro?",
        "bruh you even asked :joy:",
        "I think hes painfully unfunny so absoultely NO"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};