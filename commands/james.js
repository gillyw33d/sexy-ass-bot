const Discord = require('discord.js');
const embeds = require('../embeds.json');
const jamesEmbed = new Discord.MessageEmbed()
    .setColor(embeds.james.color)
    .setTitle(embeds.james.title)
    .setDescription(embeds.james.description)
    .setTimestamp()
    .setImage(embeds.james.image)
    .setFooter(embeds.footer);

module.exports = {
    name: 'james',
    description: 'fuck james',
    execute(message, args) {
        message.channel.send(jamesEmbed);
    }
}