const Discord = required('discord.js');
const client = new Discord.client();
const prefix = ')';



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift.toLowerCase();

    if (!command == everyone){
        return;
    }else if(command == everyone){
        console.log('everyone');
        return;
    }
})
