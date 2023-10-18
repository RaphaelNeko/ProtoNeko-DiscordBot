require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
	{
		name: 'meow',
		description: 'Just saying that iconic catch line.'
	},
	{
		name: 'link',
		description: "Sends you the link you're asking for. (Only you can see the link in the chat using this command)",
		options: [
			{
				name: 'link',
				description: 'The link you need.',
				type: ApplicationCommandOptionType.String,
				choices: [
					{
						name: 'Bandcamp',
						value: 'Bandcamp'
					},
					{
						name: 'Spotify',
						value: 'Spotify'
					},
					{
						name: 'YouTube',
						value: 'YouTube'
					},
					{
						name: 'X',
						value: 'X'
					},
					{
						name: 'Twitter',
						value: 'X'
					},
					{
						name: 'TikTok',
						value: 'TikTok'
					},
					{
						name: 'Fiverr',
						value: 'Fiverr'
					},
					{
						name: 'Commission',
						value: 'Commission'
					},
					{
						name: 'Discord Invite',
						value: 'Discord Invite'
					},
					{
						name: 'Starbit Light',
						value: 'Starbit Light'
					},
				],
				required: true
			}
		],
	}
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Registering commands...');
		await rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT_ID,
				process.env.GUILD_ID
			),
			{ body: commands }
		);
		console.log('☑️ Command registered successfully!');
	}
	catch (error) {
		console.log(`⚠️ Error: ${error}`);
	}
})();