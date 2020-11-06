const Discord = require('discord.js');
const helpEmbed = new Discord.MessageEmbed()
	.setTimestamp()
	.setColor('0F0F0F')
	.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492')
	.setTitle('Help')
	.addFields({
		name: 'sup?',
		value: 'what\'s up lol',
	})
	.addFields({
		name: 'ping',
		value: 'pong',
	})
	.addFields({
		name: 'uptime',
		value: 'bot uptime',
	})
	.addFields({
		name: 'everyone',
		value: 'ping everyone for no reason lol',
	})
	.addFields({
		name: 'james',
		value: 'anti revolutionary idiot. also kinda cute. what? lol nvm',
	})
	.addFields({
		name: 'marx',
		value: 'karl marx',
	})
	.addFields({
		name: 'uyghur',
		value: 'uyghur pill',
	})
	.addFields({
		name: 'help',
		value: 'display this message',
	});

module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        message.channel.send(helpEmbed);
    }
}