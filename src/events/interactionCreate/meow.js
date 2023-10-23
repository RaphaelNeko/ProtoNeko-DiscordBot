const { Interaction } = require('discord.js');
/**
 * @param {Interaction} interaction
 */
module.exports = (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	
	if (interaction.commandName == 'meow') {
		interaction.reply('Meow, hey hey! <:NekoLove:1140744014686068846>');
		return;
	}
}