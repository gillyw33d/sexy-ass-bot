var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var start = Date.now();
const Discord = require('discord.js');



module.exports = {
	name: 'uptime',
	description: 'ugly ass bitch ass dude',
	execute(message, args) {
        var time = message.client.uptime;
        const uptimeEmbed = new Discord.MessageEmbed()
            .setColor('#5AE805')
            .setTitle('Uptime')
            .setDescription(time + 'ms')
            .addFields(
                {
                    name: 'Made by',
                    value: 'gilly#0492 \n SEXY ASS MF BEAST ASS MF BOT NO ONE CAN BEAT LMFAO :rofl:', inline: true
                },
            )
            .setTimestamp()
            .setFooter('lol hey.. :smirk: ad me :flushed:');
        message.channel.send(uptimeEmbed);
	}
}