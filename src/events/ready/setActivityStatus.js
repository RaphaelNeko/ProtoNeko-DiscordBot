const { ActivityType } = require('discord.js');

let activities = [
	{
		name: "Queen Of The Club",
		type: ActivityType.Streaming,
		url: 'https://www.youtube.com/watch?v=GAZTckIPJQ8'
	},
	{
		name: "Queen Of The Club",
		type: ActivityType.Streaming,
		url: 'https://www.youtube.com/watch?v=GAZTckIPJQ8'
	},
	{
		name: "Meow, hey hey~! 🐈✨",
		type: ActivityType.Custom
	},
	{
		name: "Super Mario Bros. Wonder",
		type: ActivityType.Playing
	},
	{
		name: "INNA",
		type: ActivityType.Listening
	},
	{
		name: "Dis UWU ou meurs 🦫",
		type: ActivityType.Custom
	},
	{
		name: "Mario Kart Tour",
		type: ActivityType.Playing
	},
	{
		name: "Mario Kart Tour",
		type: ActivityType.Playing
	},
	{
		name: "Meow, hey hey~! 🐈✨",
		type: ActivityType.Custom
	},
	{
		name: "UNIVERSE 🌠🐈",
		type: ActivityType.Listening
	},
	{
		name: "UNIVERSE 🌠🐈",
		type: ActivityType.Listening
	},
	{
		name: "#Me",
		type: ActivityType.Playing
	},
	{
		name: "Meow, hey hey~! 🐈✨",
		type: ActivityType.Custom
	},
];

let currentStatus = 0;

module.exports = (c, client, handler) => {
	setInterval(() => {
		client.user.setActivity(activities[currentStatus]);
		currentStatus++;
		if (currentStatus >= activities.length) currentStatus = 0;
	}, 25000);
}