require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.GuildMessageReactions,
		IntentsBitField.Flags.MessageContent
	]
});

client.login(process.env.TOKEN);

//#region VARIABLES

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
		name: "Super Mario Bros. Wonder",
		type: ActivityType.Playing
	},
	{
		name: "UNIVERSE 🌠🐈",
		type: ActivityType.Listening
	},
];

let currentStatus = 0;

let helloWords = [
	"salut", "hey", "hi", "hello", "bonjour", "coucou", "cc", "koukou", "yo", "heyo", "heya", "hiya"
];

//#endregion

client.on('ready', (c) => {
	console.log(`🟢 ${c.user.tag} is online!`);

	setInterval(() => {
		client.user.setActivity(activities[currentStatus]);
		currentStatus++;
		if (currentStatus >= activities.length) currentStatus = 0;
	}, 25000);
});

client.on('messageCreate', (msg) => {
	//* Stop if message is from a bot
	if (msg.author.bot) return;

	//* Yuki reaction
	if (msg.content.toLowerCase().includes("yuki")) {
		msg.react("<:yuki:1136385491504205914>");
		if (msg.member.roles.cache.find(r => r.name == "Français"))
			msg.reply("Oh non ! Pas encore ce castor !! <:yuki:1136385491504205914>");
		else
			msg.reply("Oh no! Not this beaver again!! <:yuki:1136385491504205914>");
	}

	//* Hello reactions
	var msgWords = msg.content.split(" ");
	for (let m = 0; m < msgWords.length; m++) {
		for (let w = 0; w < helloWords.length; w++) {
			if (msgWords[m] == helloWords[w]) msg.react("<:NekoHi:1140744227874148555>");
		}
	}
});

//* Slash Commands
client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	switch (interaction.commandName) {
		//* Meow hey hey command
		case 'meow':
			interaction.reply('Meow, hey hey! <:NekoLove:1140744014686068846>');
			break;

		//* Link command
		case 'link':
			var linkURL = "https://";
			//* Returning the correct link depending on the value
			switch (interaction.options.get('link')?.value) {
				case 'Bandcamp':
					linkURL += "raphaelneko.bandcamp.com/";
					break;
				case 'Spotify':
					linkURL += "open.spotify.com/artist/3W1L5tJ96jKDl1OR7IE3N8";
					break;
				case 'YouTube':
					linkURL += "www.youtube.com/@raphaelneko";
					break;
				case 'X':
					linkURL += "x.com/raphaelneko";
					break;
				case 'TikTok':
					linkURL += "www.tiktok.com/@raphaelneko";
					break;
				case 'Fiverr':
					linkURL += "www.fiverr.com/starbitlight";
					break;
				case 'Commission':
					linkURL = "Commission info: https://discord.com/channels/1118224886620491786/1140564496134455409/1140564682751606965";
					break;
				case 'Discord Invite':
					linkURL += "discord.gg/VvXCHB4m7z";
					break;
				case 'Starbit Light':
					linkURL += "starbitlight.com/";
					break;
			}
			interaction.reply({ content: `🌐 ${linkURL}`, ephemeral: true });
			break;
	}
});