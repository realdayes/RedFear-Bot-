const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;
    
        const Loger = new WebhookClient({
            id: "894601914526892092",
            token: "1FLKuSyD4Bd7u8wTz4rSFVW_-UOGQd6t5ft5cQV7XiKtFwJT6gTB-_TpY9gO1Ff3NIGQ"
        });

        const Welcome = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} has left the server!\n
        Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID User: ${user.id}`)

        Loger.send({embeds: [Welcome]})
    }
}