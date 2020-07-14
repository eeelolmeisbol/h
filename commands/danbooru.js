  
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

const Discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "danbooru",
    aliases: ["danb"],
  description: "Searches danbooru image board",
  async execute(message, args)  {
  //command
  var errMessage = "The channel is not nsfw!";
  if (!message.channel.nsfw) {
      message.react('💢');
      return message.channel.send(errMessage);
  }

  if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

  var query = message.content.split(/\s+/g).slice(1).join(" ");
  booru.search('db', [query], {random: true })
      .then(booru.commonfy)
      .then(images => {
          for (let image of images) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Danbooru:")
              .setImage(image.common.file_url)
              .setColor('#000000')
              .setFooter(`Tags: danbooru ${query}`)
              .setURL(image.common.file_url);
          return message.channel.send({ embed });
          }

      }).catch(err => {
          if (err.name === 'booruError') {
              return message.channel.send(`No results found for **${query}**!`);
          } else {
              return message.channel.send(`No results found for **${query}**!`);
          }
})
  }
  };