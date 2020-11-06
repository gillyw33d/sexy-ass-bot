var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var start = Date.now();
const Discord = require('discord.js');

module.exports = {
	name: 'hey',
	description: 'ugly ass bitch ass dude',
	execute(message, args) {
		message.delete();
		message.channel.send('hey lol whats up wyd');
	}
}
