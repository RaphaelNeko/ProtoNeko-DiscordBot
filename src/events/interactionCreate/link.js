const { Interaction } = require('discord.js');
/**
 * @param {Interaction} interaction
 */
module.exports = (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName == 'link') {
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
		return;
	}
}