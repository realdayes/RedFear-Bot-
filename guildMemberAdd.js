const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        
        const { user, guild } = member;

        member.roles.add("id-role");
        
        const Welcomer = new WebhookClient({
            id: "id-channel",
            token: "token-channel"
        });

        const Welcome = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID User: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}
