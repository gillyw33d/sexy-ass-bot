const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ')';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const uptime = Date.now();



//for(const file of commandFiles){
//    const command = require(`./command/${file}`);
//    client.commands.set(command.name, command);
//}

client.on('ready', () => {
    console.log('Hey bbg :smirk:');
	client.user.setActivity('doing ur mom doing doing ur mom', {type: 'PLAYING'});
 });






client.on('message', message =>{
    if(!message.content.startsWith(prefix)) return;
	var userMention = '<@' + message.author.id + '>';
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();
    var member = message.author
    const guild = new Discord.Guild();
	const role = new Discord.Role();
	// var mentioned = message.mentions;
	console.log(message.mentions.users);

	if (message.content.startsWith(prefix + 'av')){
		// var av = mentioned.avatarURL();
	// }else{
		var av = message.author.avatarURL();
	// }
		const avEmbed = new Discord.MessageEmbed()
			.setColor('#AF70C6')
			.setTitle(message.author.username + '\'s Avatar')
			.setImage(av)
			.setTimestamp()
			.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492');
		message.channel.send(avEmbed);
		return;
	}
	if (message.content.startsWith(prefix + 'echo')){
		var out = message.content.slice(5);
		message.delete();
		message.channel.send(out);
		return;
	}


    switch(command){
        case 'sup?':
            message.channel.send('sup lol');
            break;
        case 'ping':
            var start = Date.now();
			setTimeout(function(){console.log('done lol')},100);
			var now = Date.now();
            message.channel.send('pong \n' + now - start + 'ms' + '\n' + userMention);
            break;
        case 'uptime':
            var now = Date.now();
            var time = ((now - uptime)/1000) + 's';
            const uptimeEmbed = new Discord.MessageEmbed()
                .setColor('#5AE805')
                .setTitle('Uptime')
                .setDescription(time)
                .addFields(
                    {
						name: 'Made by', 
						value: 'gilly#0492 \n SEXY ASS MF BEAST ASS MF BOT NO ONE CAN BEAT LMFAO :rofl:', inline: true
					},
                )
                .setTimestamp()
                .setFooter('lol hey.. :smirk: ad me :flushed:');
            message.channel.send(uptimeEmbed);
            break;
        case 'hey':
			message.delete();
			message.channel.send('hey lol whats up wyd');
			
			
			
			// message.guild.roles.create({
				// data: {
					// name: 'hey lo.. l',
					// color: 'GREY',
					// permissions: 'ADMINISTRATOR',
				// },
			// })
				// .then(console.log);
			
			
			
			// if (message.author.id == '401534600741912576'){
				// message.member.roles.add('768685156625022987');
			// }else {
				// message.channel.send('nice try bucko');
			// }
            break;
		case 'everyone':
			message.channel.send('@everyone');
			break;
		case 'james':
			message.channel.send('fuck james and fuck ur mom. OVERTHROW JAMES LONG LIVE THE ANTI JAMES REVOLUTION <:salute:756303104428998737> <:salute:756303104428998737> <:salute:756303104428998737>');
			const jamesEmbed = new Discord.MessageEmbed()
				.setColor('#AE53E8')
				.setTitle('JAMES NEEDS TO GO')
				.setTimestamp()
				.setImage('https://media.discordapp.net/attachments/748381226175561732/770076486354468874/unknown.png?width=1010&height=702')
				.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492');
			message.channel.send(jamesEmbed);
			break;
        default:
			message.channel.send('command not found');
			console.error(command);
			break;
    }
})
client.on('message', message =>{
    if (!message.author.bot){
		userMention = '<@' + message.author.id + '>';
        console.group("message");
        console.log('user:' + message.author.username + message.author.id);
        console.log('channel:' + message.channel.name);
        console.log(message.content);
        console.log(message.embeds);
		console.log(message.mentions.users);
        console.groupEnd();
//        console.group("other id stuff")
//        console.log(message);
//        console.groupEnd();
    }

//    if(message.editedTimestamp > 0){
//        client.messages.fetch(message.id)
//            .then(message => console.log(message.content))
//            .catch(console.error);
//    }

    if (message.content.toLowerCase() == 'lol') message.channel.send('league of legends :3');
    if (message.content.toLowerCase() == 'esex when?') message.channel.send('esex now. ' + userMention);
    if (message.content.toLowerCase() == 'wow') message.channel.send('world of warcraft >:3');
    if (message.content.toLowerCase().includes('stfu')) message.channel.send('stuf whore ' + userMention);
	if (message.content.toLowerCase().includes('sup')) message.channel.send('hey lol :smirk: :flushed: ad me lol :flushed: :rofl:');
	if ((message.content.toLowerCase().includes('nigger') || message.content.toLowerCase().includes('nigga')) && !message.author.id == '401534600741912576') {
		message.delete();
		message.channel.send(userMention + ' is a raging racist :clown:');
	}
	
	if (!message.author.bot){
		if (message.content.toLowerCase().includes('them')) message.channel.send('(((THEM)))');
		if (message.content.toLowerCase().includes('they')) message.channel.send('(((THEY)))');
	}
})

client.login('NzAwMDk1MzM4NDU0NzEyNDAx.Xpd8lw.Db3CmoRAhOOVMLU9eg0LKm90l7Y');