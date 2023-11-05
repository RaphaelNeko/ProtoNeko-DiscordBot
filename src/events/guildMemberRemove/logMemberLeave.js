module.exports = (member, client) => {
	var joinedDate = new Date(member.joinedTimestamp).toLocaleDateString("fr-FR");
	var joinedTime = new Date(member.joinedTimestamp).toLocaleTimeString("fr-FR");
	var leftDate = new Date(Date.now()).toLocaleDateString("fr-FR");
	var leftTime = new Date(Date.now()).toLocaleTimeString("fr-FR");

	client.channels.cache.get(process.env.LOGS_CHANNEL_ID).send({
		"content": "# MEMBER LEFT... 😿",
		"embeds": [
			{
				"description": `<@${member.id}>`,
				"color": 0x1b1323,
				"fields": [
					{
						"name": `Originally joined at:`,
						"value": `${joinedDate} • ${joinedTime}`
					},
					{
						"name": `Left at:`,
						"value": `${leftDate} • ${leftTime}`
					}
				],
				"thumbnail": {
					"url": `${member.user.displayAvatarURL({ size: 256 })}`,
					"height": 256,
					"width": 256
				}
			},
		]
	});
	return;
};