require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
const mongoose = require('mongoose');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.MessageContent
	]
});

new CommandKit({
	client,
	commandsPath: `${__dirname}/commands`,
	eventsPath: `${__dirname}/events`
});

mongoose.connect(process.env.DB_URI).then(() => {
	console.log('☑️  Connected to DB');
	client.login(process.env.TOKEN);
});