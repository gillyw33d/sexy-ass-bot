var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var start = Date.now();




module.exports = {
	name: 'everyone',
	description: 'ugly ass bitch ass dude',
	execute(message, args) {
		if (message.author.id != gillyID) return;
		message.delete();
		message.channel.send('@everyone');
	}
}