const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
    name: "cat",
    aliases: [],
    description: `Cats!`,
    async execute(message, args) {
        let msg = await message.channel.send("Generating...")

        fetch(`http://aws.random.cat/meow`)
        .then(res => res.json()).then(body => {
            if(!body) return message.channel.send("Something went wrong")

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(" Meoww...")
            .setImage(body.file)
            message.channel.send(embed)
            msg.delete()
        })

    
    } 
}