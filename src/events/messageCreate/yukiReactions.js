module.exports = (message, client) => {
	if (message.author.bot) return;
	
	if (message.content.toLowerCase().includes("yuki")) {
		message.react("<:yuki:1136385491504205914>");
		if (message.member.roles.cache.find(r => r.name == "Français"))
			message.reply("Oh non ! Pas encore ce castor !! <:yuki:1136385491504205914>");
		else
			message.reply("Oh no! Not this beaver again!! <:yuki:1136385491504205914>");

		return;
	}

	if (message.content.toLowerCase().includes("nul")) {
		message.react("<:NekoNul:1140744180885377176>");
		message.react("<:yuki:1136385491504205914>");
		return;
	}

	if (message.content.toLowerCase().includes("nihi") || message.content.toLowerCase().includes("prend")) {
		message.react("<:yuki:1136385491504205914>");
		return;
	}
}