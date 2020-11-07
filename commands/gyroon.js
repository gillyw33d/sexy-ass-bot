const Discord = require('discord.js');
const embeds = require('../embeds.json');
const gyroonEmbed = new Discord.MessageEmbed()
    .setColor(embeds.gyroon.color)
    .setTitle(embeds.gyroon.title)
    .setTimestamp()
    .setImage(embeds.gyroon.image)
    .setFooter(embeds.footer);

module.exports = {
    name: 'gyroon',
    description: 'mf too damn horny tf',
    execute(message, args) {
        message.channel.send(gyroonEmbed);
    }
}