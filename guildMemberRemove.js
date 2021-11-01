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
            id: "id-channel",
            token: "token-channel"
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
