const embeds = require('../embeds.json');
const Discord = require('discord.js');

const uyghurPillEmbed = new Discord.MessageEmbed()
	.setTitle(embeds.uyghur.title)
	.setColor(embeds.uyghur.color)
	.setDescription(embeds.uyghur.description)
	.setImage(embeds.uyghur.image)
	.setFooter(embeds.footer)
	.setTimestamp();

module.exports = {
	name: 'uyghur',
	description: 'uyghur pill',
	execute(message, args) {
		message.channel.send(uyghurPillEmbed);
    }
}