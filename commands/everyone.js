const gillyID = '401534600741912576';
module.exports = {
	name: 'everyone',
	description: 'ugly ass bitch ass dude',
	execute(message, args) {
		if (message.author.id != gillyID) return;
		message.delete();
		message.channel.send('@everyone');
	}
}