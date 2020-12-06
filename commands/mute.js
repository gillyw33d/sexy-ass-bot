module.exports = {
    name: "mute",
    description: "mute",
    execute(message, args) {
		if ((message.guild.id != '748381226175561729')) return;
		let role = message.guild.roles.cache.get('753773649315627109');
		let muted = message.mentions.users.first().id;
		message.guild.cache.users.get(muted).roles.add(role);
		message.delete();
	}
}