const Discord = require('discord.js');
const embed = require('../embeds.json');
const catEmbed = new Discord.MessageEmbed()
    .setTitle('cat')
    .setColor(embed.marx.color)
    .setImage('https://media.discordapp.net/attachments/748381226175561732/776192052340719626/IMG_20201017_121415.jpg?width=526&height=702')
    .setTimestamp()
    .setFooter(embed.footer);

module.exports = {
    name: 'cat',
    description: 'cat',
    execute(message, args) {
        message.channel.send(catEmbed);
    }
}