var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var start = Date.now();




module.exports = {
	name: 'ping',
	description: 'ugly ass bitch ass dude',
	execute(message, args) {
		var userMention = '<@' + message.author.id + '>';
		var member = message.author
		var now = Date.now();
		message.channel.send('pong \n' + now - start + 'ms' + '\n' + userMention);
	}
}