const Discord = require('discord.js');
const embeds = require('../embeds.json');
const jamesEmbed = new Discord.MessageEmbed()
    .setColor(embeds.james.color)
    .setTitle(embeds.james.title)
    .setTimestamp()
    .setImage(embeds.james.image)
    .setFooter(embeds.footer);

module.exports = {
    name: 'james',
    description: 'fuck james',
    execute(message, args) {
        message.channel.send('fuck james and fuck ur mom. OVERTHROW JAMES LONG LIVE THE ANTI JAMES REVOLUTION <:salute:756303104428998737> <:salute:756303104428998737> <:salute:756303104428998737>');
        message.channel.send(jamesEmbed);
    }
}