const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'commands',
    execute(message) {
        const commandsEmbed = new EmbedBuilder()
            .setColor('#000000')
            .setTitle('All available commands for Knight bot')
            .setDescription([
                '`!ban` - Bans a member',
                '`!kick` - Kicks a member',
                '`!quiz` - Starts or stops a quiz',
                '`!clear` - Clears messages from a channel',
                '`!userinfo` - Shows user information'
            ].join('\n'));

        message.channel.send({ embeds: [commandsEmbed] });
    },
};
