module.exports = (deletedMessage, client) => {
	if (deletedMessage.author.bot) return;

	var createdDate = new Date(deletedMessage.createdTimestamp).toLocaleDateString("fr-FR");
	var createdTime = new Date(deletedMessage.createdTimestamp).toLocaleTimeString("fr-FR");
	var deletedDate = new Date(Date.now()).toLocaleDateString("fr-FR");
	var deletedTime = new Date(Date.now()).toLocaleTimeString("fr-FR");

	client.channels.cache.get(process.env.LOGS_CHANNEL_ID).send({
		"content": `# MESSAGE DELETED 🗑️\n<@${deletedMessage.author.id}>'s message has been deleted in <#${deletedMessage.channelId}>.`,
		"embeds": [
			{
				"title": `Deleted Message`,
				"description": `${deletedMessage.content}`,
				"color": 0xff0000,
				"fields": [
					{
						"name": `Originally created at:`,
						"value": `${createdDate} • ${createdTime}`
					},
					{
						"name": `Deleted at:`,
						"value": `${deletedDate} • ${deletedTime}`
					}
				]
			},
		]
	});
	return;
};