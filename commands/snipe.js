const { MessageEmbed } = require("discord.js");
const config = require("../config.json")
module.exports = {
  name: "rps",
  aliases: ["rock paper scissors", "rockps", "rpapers", "rpscissors", "ropasci"],
  description: "Like it says, its rock paper scissors",
  execute(message)  {
    const args = message.content.slice(config.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let replies = ["rock", "paper", "scissors", "niggatello :sunglasses:"]
    let result = Math.floor(Math.random() * replies.length);

    let uReply = args[0];
    if(!uReply){
      return message.channel.send("Please use one of these replies: ROCK, PAPER, SCISSORS")
    }

    if(!replies.includes(uReply)){
      return message.channel.send("Only rock, paper, scissors is accepted")
  }

  if(replies[result] === uReply){
    return message.channel.send("Dammit, its a tie")
  } else if(uReply === "rock"){
    if(replies[result] === "rock"){
      message.channel.send("I chose \`rock`\ and you chose \`my mom :trol:`\ \nI won!")
    } else return message.channel.send("I chose \`rock`\ and you chose \`my mom :trol:`\ So i lost, But ohh you little \nI chose  , you little fucker, you won but you wil regret living cause iwill skin all of ur organs of you useless, outdated and unfunny fucking twat")
  } else if(uReply === "scissors"){
    if(replies[result] === "rock"){
      message.channel.send("I chose \`rock`\ and you chose \`scissors`\ \nI won!")
    } else return message.channel.send("I chose \`scissors`\ and you chose \`rock`\ So i lost, But ohh you little \n  you little fucker, you won but you wil regret living cause iwill skin all of ur organs of you useless, outdated and unfunny fucking twat")

  } else if(uReply === "paper"){
    if(replies[result] === "scissors"){
      message.channel.send("I chose \`scissors`\ and you chose \`paper`\ \nI won!")
    } else return message.channel.send("I chose \`paper`\ and you chose \`scissors`\ So i lost, But ohh you little \n you little fucker, you won but you wil regret living cause iwill skin all of ur organs of you useless, outdated and unfunny fucking twat")
  } else if(replies === "niggatello :sunglasses:") {
    if(uReply[result] === "rock")
      message.channel.send(`I chose ${replies[result]} so I instantly won!`)
   } else if(replies === "niggatello :sunglasses:") {
    if(uReply[result] === "scissors")
      message.channel.send(`I chose ${replies[result]} so I instantly won!`)
   } else if(replies === "niggatello :sunglasses:") {
    if(uReply[result] === "paper")
      message.channel.send(` I chose ${replies[result]} so I instantly won!`)
   } 
}}