const Discord = require('discord.js');
const embeds = require('../embeds.json');
//const video = File('../mfw-omni.mp4');
const omniEmbed = new Discord.MessageEmbed()
    .attachFiles('mfw-omni.mp4');

module.exports = {
    name: 'omni',
    description: 'fuck omni',
    execute(message, args) {
      message.channel.send(omniEmbed);
//      message.channel.send(video);
    }
}