const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server information!'),
	async execute(interaction) {
		const server = interaction.guild;
		const serverInfo = `This command was run in **${server.name}**, which has a total of ***${server.memberCount}*** very cool members.`;
		await interaction.reply(serverInfo);
	},
};