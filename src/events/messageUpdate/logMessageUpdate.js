module.exports = (oldMessage, newMessage, client) => {
	if (oldMessage.author.bot) return;
	if (oldMessage.content == newMessage.content) return;

	var createdDate = new Date(oldMessage.createdTimestamp).toLocaleDateString("fr-FR");
	var createdTime = new Date(oldMessage.createdTimestamp).toLocaleTimeString("fr-FR");
	var editedDate = new Date(newMessage.editedTimestamp).toLocaleDateString("fr-FR");
	var editedTime = new Date(newMessage.editedTimestamp).toLocaleTimeString("fr-FR");
	client.channels.cache.get(process.env.LOGS_CHANNEL_ID).send({
		"content": `# MESSAGE EDIT 📝\n<@${oldMessage.author.id}> edited their message.\n${newMessage.url}`,
		"embeds": [
			{
				"title": `Old Message`,
				"description": `${oldMessage.content}`,
				"color": 0xff0000,
				"fields": [
					{
						"name": `Created at:`,
						"value": `${createdDate} • ${createdTime}`
					}
				]
			},
			{
				"title": `New Message`,
				"description": `${newMessage.content}`,
				"color": 0x00ffd0,
				"fields": [
					{
						"name": `Edited at:`,
						"value": `${editedDate} • ${editedTime}`
					}
				]
			},
		]
	});
	return;
};