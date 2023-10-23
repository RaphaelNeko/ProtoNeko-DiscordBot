const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
	data: {
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
		dm_permission: true
	},

	/**
	 * @param {Object} param0
	 * @param {ChatInputCommandInteractionmandInteraction} param0.interaction
	 */
	run: async ({ interaction }) => {
		try {
			var linkURL = "https://";
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
			return;
		} catch (error) {
			console.log(`⚠️ Error in /meow: ${error}`);
		}
	}
}