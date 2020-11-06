const Discord = require('discord.js');
const embeds = require('../embeds.json')
const marxEmbed = new Discord.MessageEmbed()
	.setColor(embeds.marx['color'])
	.setTitle(embeds.marx['title'])
	.setTimestamp()
	.setDescription(embeds.marx['description'])
	.setImage(embeds.marx['image'])
	.setFooter(embeds['footer']);




module.exports = {
	name: 'marx',
	description: 'marx',
	execute(message, args) {
		message.channel.send(marxEmbed);
    }
}