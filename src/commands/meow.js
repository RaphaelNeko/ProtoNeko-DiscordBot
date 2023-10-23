module.exports = {
	data: {
		name: 'meow',
		description: 'Just saying that iconic catch line.',
		dm_permission: true
	},

	/**
	 * @param {Object} param0
	 * @param {ChatInputCommandInteractionmandInteraction} param0.interaction
	 */
	run: async ({ interaction }) => {
		try {
			interaction.reply('Meow, hey hey! <:NekoLove:1140744014686068846>');
			return;
		} catch (error) {
			console.log(`⚠️ Error in /meow: ${error}`);
		}
	}
}