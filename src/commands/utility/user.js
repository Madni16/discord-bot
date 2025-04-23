const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user information!'),
	async execute(interaction) {
		const user = interaction.user;
		const userInfo = `
                This command was run by: 
                **Username:** ${user.username}, 
                who joined the server on: ${interaction.member.JoinedAt}.`;
		await interaction.reply(userInfo);
	},
};