module.exports = (member, client) => {
	var joinedDate = new Date(member.joinedTimestamp).toLocaleDateString("fr-FR");
	var joinedTime = new Date(member.joinedTimestamp).toLocaleTimeString("fr-FR");
	var userCreatedDate = new Date(member.user.createdTimestamp).toLocaleDateString("fr-FR");
	var userCreatedTime = new Date(member.user.createdTimestamp).toLocaleTimeString("fr-FR");

	client.channels.cache.get(process.env.LOGS_CHANNEL_ID).send({
		"content": "# MEMBER JOINED 👋",
		"embeds": [
			{
				"description": `<@${member.id}>`,
				"color": 0xff93e9,
				"fields": [
					{
						"name": `Joined at:`,
						"value": `${joinedDate} • ${joinedTime}`
					},
					{
						"name": `User created at:`,
						"value": `${userCreatedDate} • ${userCreatedTime}`
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