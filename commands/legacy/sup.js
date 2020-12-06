const Discord = required('discord.js');
const client = new Discord.client();
const prefix = ')';


client.on('message', message =>{
    message.channel.send('@everyone');
})