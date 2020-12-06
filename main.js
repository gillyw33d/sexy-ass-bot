/*
 * CONSTANTS DECLARED
 */
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const chalk = require('chalk');
client.commands = new Discord.Collection();
//tbh idk what this does lol something about the file system
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//get the required information from the config file
const { prefix, token, hey } = require('./config.json');
const embeds = require('./embeds.json');
//my id
const gillyID = '401534600741912576';
//radlib and curse word arrays lol
const radlibs = new Array('vaush', 'xander', 'contra ', 'contrapoints', 'philosophytube', ' olly ', 'thoughtslime', 'thought slime', 'philosophy tube', 'xanderhal');
const curse = new Array('fuck', 'shit', 'pussy', 'cunt', 'nigga', 'nigger', 'dick', 'ass', 'bitch', 'cock', 'damn', 'piss', 'tit', 'bastard', 'wanker', 'twat');
// LOGGER INITIALIZE
const winston = require('winston');
	const logger = winston.createLogger({
		level: 'info',
		transports: [
			new winston.transports.File({ filename: 'log.txt' })
		],
	});
	const commandLogger = winston.createLogger({
		level: 'warn',
		transports: [
			new winston.transports.File({ filename: 'commmandLog.txt' })
		],
	});

// ADD COMMAND FILES
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(chalk.blue('Hey bbg :smirk:'));
	client.user.setActivity('doing ur mom doing doing ur mom', { type: 'PLAYING' });
});

client.on('messageReactionAdd', (messageReaction, user) => {
	//console.log(messageReaction.emoji.id);
	//if (messageReaction.emoji.id == '748580683080925328') {
	//	messageReaction.message.channel.send(`wow so funny i laughed so hard lmao :| \n stfu <@${user.id}>`);
	//}
});
/*
 * MESSAGE DELETE HERE
 */
client.on('messageDelete', message => {
	try {
		if ((message.guild.id != '748381226175561729') || message.author.bot) return;
		const deletedEmbed = new Discord.MessageEmbed()
			.setTitle('Message Deleted')
			.setColor('#CC90A3')
			.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + /*' id: ' + message.channel.id + */ '\n message: ' + message.content)
			.setThumbnail(message.author.avatarURL())
			.setFooter('Message logged by swag lord gilly#0492')
			.setTimestamp();
		client.channels.cache.get('770502076912369754').send(deletedEmbed);
	} catch (e) {
		console.log(e);
    }
})
/*
 * MESSAGE UPDATE HERE
 */
client.on('messageUpdate', (oldMessage, newMessage) => {
	let messageCheck = newMessage.content.toLowerCase().split(' ').join(''), oldMessageCheck = oldMessage.content.toLowerCase().split(' ').join('');
	if ((messageCheck.includes('nigger') || messageCheck.includes('nigga') || messageCheck.includes('nlgga') || messageCheck.includes('nlgger')) && !(oldMessageCheck.includes('nigger') || oldMessageCheck.includes('nigga') || oldMessageCheck.includes('nlgga') || oldMessageCheck.includes('nlgger'))) {
		if (oldMessage.author.bot /*|| (oldMessage.author.id == gillyID)*/) return;
		newMessage.delete();
		newMessage.channel.send(`<@${oldMessage.author.id}>is a racist fuck :clown:`)
		//if the server is obamagrad
		try {
			if (newMessage.guild.id == '748381226175561729') {
				//add muted role
				//message.member.roles.add('753773649315627109');
				const racistEmbed = new Discord.MessageEmbed()
					.setTitle('Racist Word Log')
					.setColor('#FAFA88')
					.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + '\n message: ' + message.content)
					.setThumbnail(message.author.avatarURL())
					.addFields({
						name: 'Link',
						value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
					})
					.setFooter('Message logged by swag lord gilly#0492')
					.setTimestamp();
				//send the log to the right channel
				client.channels.cache.get('748597429854666752').send(racistEmbed);
			}
		} catch (e) {
			console.log(e);
        }
	}
	
	for (var i = 0; i < radlibs.length; i++){
		//i'm exempt from radlib watch
		if (oldMessage.author.id == gillyID) break;
		if (messageCheck.includes(radlibs[i]) && !(oldMessageCheck.includes(radlibs[i]))) {
			return newMessage.channel.send("fuck yui radlib watcher absolute scum of leftism you are a stani on society fuck you i hate you \>:(");
		}
	}
	
	
	try {
		var message = oldMessage;
		if (oldMessage.content == newMessage.content) return;
		if (message.author.bot) return;
		if (message.guild.id != '748381226175561729') return;
		const editedEmbed = new Discord.MessageEmbed()
			.setTitle('Edited Message Log')
			.setColor('#CC90A3')
			.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + /*' id: ' + message.channel.id + */ '\n **before**: ' + oldMessage.content + '\n **after**: ' + newMessage.content)
			.setThumbnail(message.author.avatarURL())
			.addFields({
				name: 'Link',
				value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
			})
			.setFooter('Message logged by swag lord gilly#0492')
			.setTimestamp();
		client.channels.cache.get('770502076912369754').send(editedEmbed);
	} catch (e) {
		console.log(e);
    }
})
/* 
 * MESSAGE COMMANDS HERE
 */ 
client.on('message', message =>{
	// if message doesn't have the prefix, immediately stop
	if (!message.content.startsWith(prefix)) return;
	// idk what this is, copy pasted code lol
    const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();
	// used in 0x22
    var member = message.author

	// AVATAR COMMAND
	if (message.content.startsWith(prefix + 'av')) {
		try {
			let mentioned = message.mentions.users.first();
			//still trying to do something fancy with @'ing people but i'm stupid and retarded and don't know how nor have the energy to lol
			var av = mentioned.avatarURL();
			const avEmbed = new Discord.MessageEmbed()
				.setColor('#AF70C6')
				.setTitle(mentioned.username + '\'s Avatar')
				.setImage(av)
				.setTimestamp()
				.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492');
			message.channel.send(avEmbed);
			return;
		} catch (e) {
			console.log(e);
			message.channel.send('something went wrong, try pinging someone to get their avatar');
			return;
		}
	}
	
	
	if (message.content.startsWith(`${prefix}mute`)) {
		if ((message.guild.id != '748381226175561729')) return;
		let role = message.guild.roles.cache.get('753773649315627109');
		let muted = message.mentions.users.first().id;
		message.guild.members.cache.get(muted).roles.add(role);
		message.delete();
		return;
	}

	// ECHO COMMAND
	if (message.content.startsWith(prefix + 'echo')) {
		//ignores the first 5 characters of the string (')echo')
		var out = message.content.slice(5);
		if (message.author.id != gillyID) {
			//returns if the user tries to @ people they shouldn't be able to
			if (out.includes('@everyone') || out.includes('@here') || out.includes('<@&')) {
				message.delete();
				return message.channel.send('don\'t @ people pls ;-;');
			}
		}
		message.delete();
		message.channel.send(out);
		return;
	}
	// DYNAMIC COMMAND HANDLER
	// copy pasted code lol
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		message.channel.send('command not found');
		console.log(error);
		commandLogger.log({
			level: 'warn',
			message: 'the command tried was ' + args
		});
	}
})
/*
 * MESSAGE LOGGING AND RESPONSES
 */
client.on('message', message => {
	if (message.author.id == gillyID) {
		if (message.content.startsWith(prefix)) return;
		try{
			console.log(eval(message.content));
		} catch (e) {
			console.log(e);
		}
	}
	var today = new Date();
	var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	message.isDM = (message.guild ? false : true);

	const messageCheck = message.content.toLowerCase();
	//tbh i don't really know what this does, just that it doesn't work without it lol
	member = message.author;
	//penis length, pretty self explanatory
	function penisLength(min, max) {
		return (Math.random() * (max - min) + min);
	}
	// CONSOLE LOGGING HERE
	//tbh i could probably do away with console logging altogether. it just provides an easier more accessible way to view messages without having to go into the fucking huge logs folder lol
    if (!message.author.bot){
		userMention = '<@' + message.author.id + '>';
        console.group(chalk.blue("message"));
        console.log(chalk.yellow('user:' + message.author.username + ' ' + message.author.id));
        console.log(chalk.yellow('channel:' + message.channel.name + ' ' + message.channel.id));
		console.log(chalk.yellow('guild:' + message.guild));
		console.log(date, time);
        console.log(chalk.bgYellow(message.content));
		console.groupEnd();



		// CONTENT LOGGING IN JSON FORMAT
		if (!(message.author.bot)) {
			var output = {
				username: message.author.username, 
				channel: message.channel.name, 
				message: message.content, 
				date: date + ' ' + time
			};
			logger.log({
				level: 'info',
				message: output,
			});
		}
	}

	/*
	 * ANTISEMETISM 
	 * HERE
	 */
	// if (messageCheck.includes('them')) message.channel.send('(((THEM)))');
	// if (messageCheck.includes('they')) message.channel.send('(((THEY)))');

	// NSFW CHANNEL LOGGING HERE
	if ((messageCheck.includes('||') || messageCheck.includes('`') || messageCheck.includes('**') || messageCheck.includes('_') || messageCheck.includes('~')) && (!(message.author.bot))) {
		try {
			if (message.guild.id != '748381226175561729') {
				commandLogger.log({
					level: 'warn',
					message: message.guild.id,
				});
				return;
			}
		} catch (e) {
			console.log(e);
        }
		// GARBAGE CODE PLS IGNORE
		if(messageCheck.includes('||')) {
			var content = messageCheck.split('|').join('');
		}else if(messageCheck.includes('`')) {
			var content = messageCheck.split('`').join('');
		}else if(messageCheck.includes('**')) {
			var content = messageCheck.split('*').join('');
		}else if(messageCheck.includes('_')) {
			var content = messageCheck.split('_').join('');
		}else if(messageCheck.includes('~')) {
			var content = messageCheck.split('~').join('');
		}

			
		
		const nsfwLogEmbed = new Discord.MessageEmbed()
			.setTitle('NSFW Log')
			.setColor('#4EC577')
			.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + /*' id: ' + message.channel.id + */ '\n message: ' + content)
			.addFields({
				name: 'Link',
				value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
			})
			.setThumbnail(message.author.avatarURL())
			.setFooter('Message logged by swag lord gilly#0492')
			.setTimestamp();
		
		
		//client.channels.cache.get('772835458416902146').send(nsfwLogEmbed);
	}



	// CURSE WORD LOGGING
	/* for (let i = 0; i < curse.length; i++) {
		try {
			if ((message.author.id == gillyID) || message.author.bot || !(message.guild.id == '748381226175561729')) break;
			if (messageCheck.split(' ').join('').includes(curse[i])) {
				// console.log(messageCheck.includes(curse[i]));
				const curseEmbed = new Discord.MessageEmbed()
					.setTitle('Curse Word Log')
					.setColor('#0713FF')
					.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + '\n message: ' + message.content)
					.addFields({
						name: 'Link',
						value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
					})
					.setThumbnail(message.author.avatarURL)
					.setFooter('Message logged by swag lord gilly#0492')
					.setTimestamp();
				//client.channels.cache.get('772858701848510464').send(curseEmbed);
			}
		} catch (e) {
			console.log(e);
		}
	} */


	// RESPONSES
	if (message.channel.id != '748381226175561732') {
		if (messageCheck == 'lol ') message.channel.send('league of legends :3');
		if (messageCheck.includes('penis') || messageCheck.includes('cock') || messageCheck.includes('dick')) {
			var length = penisLength(5, 30);
			var penis = new Array();
			for (var i = 0; i < Math.floor(length); i++) {
				penis.push('=');
				
			}
			message.channel.send('8' + penis.join('') + 'D');
		}
		if (messageCheck.includes('boob')) message.channel.send('o o');
		if (messageCheck.includes('pog') && !message.author.bot) message.channel.send('pogchamp uwu');
		//if (messageCheck == 'esex when?') message.channel.send('esex now. ' + userMention);
		if (messageCheck == 'wow') message.channel.send('world of warcraft >:3');
		if ((messageCheck.includes('stfu')) && !message.author.bot) message.channel.send('stuf whore ' + userMention);
		if (messageCheck == 'sup' && !message.author.bot) message.channel.send('hey lol :smirk: :flushed: ad me lol :flushed: :rofl:');
	}


	// RACISM LOGGING
	if (messageCheck.split(' ').join('').includes('nigger') || messageCheck.split(' ').join('').includes('nigga') || messageCheck.split(' ').join('').includes('nlgga') || messageCheck.split(' ').join('').includes('nlgger')) {
		if (message.author.bot || (message.author.id == gillyID)) return;
		message.delete();
		message.channel.send(userMention + ' is a racist fuck :clown:')
		//if the server is obamagrad
		try {
			if (message.guild.id == '748381226175561729') {
				//add muted role
				//message.member.roles.add('753773649315627109');
				const racistEmbed = new Discord.MessageEmbed()
					.setTitle('Racist Word Log')
					.setColor('#FAFA88')
					.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' + '\n message: ' + message.content)
					.setThumbnail(message.author.avatarURL())
					.addFields({
						name: 'Link',
						value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
					})
					.setFooter('Message logged by swag lord gilly#0492')
					.setTimestamp();
				//send the log to the right channel
				client.channels.cache.get('748597429854666752').send(racistEmbed);
			}
		} catch (e) {
			console.log(e);
        }
	}


	// RADLIB WATCH
	//there's probably an easier way to do this lol
	/* for (var i = 0; i < radlibs.length; i++){
		//i'm exempt from radlib watch
		if (message.author.id == gillyID) break;
		if (messageCheck.includes(radlibs[i])) {
			return message.channel.send("fuck yui radlib watcher absolute scum of leftism you are a stani on society fuck you i hate you \>:(");
		}
	}
	*/
	
	
	// if (messageCheck.includes('femcel') && !message.author.bot) message.channel.send('femcel is so fucking hot i want her so fucking bad if i could have one day with her oh what i would do. the sex would be immaculate, incredible, revolutionary even. then, the cuddles. oh how we would cuddle. hours of us holding each other, never letting go. i\'m quite turned on just thinking about it to be honest. we would fall asleep in each other\'s arms, me, the dom, obviously being the big spoon, would hold her tight to my chest. smelling her hair, maybe a butt clench or two.');
	// if (messageCheck.includes('dale') && !message.author.bot) message.channel.send('oh my god dale is so fucking hot i want him so fucking bad. when he goes schizo and starts speaking russian it makes me so fucking hrony. i mean uhhh... (づ｡◕‿‿◕｡)づ cummies pls (づ｡◕‿‿◕｡)づ');
	
})
/*
 * CLIENT LOGIN
 */
client.login(token);
